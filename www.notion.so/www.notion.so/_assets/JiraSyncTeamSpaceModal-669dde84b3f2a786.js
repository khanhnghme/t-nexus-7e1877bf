"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [11528, 14344, 22197, 43239, 56188, 85464], {
        2009: (e, t, a) => {
            a.d(t, {
                w: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let r = new n
        },
        2919: (e, t, a) => {
            a.d(t, {
                n: () => i
            });

            function i(e) {
                let t = (0, a(533992).v3)(),
                    {
                        device: i,
                        WindowSizeStore: n
                    } = t,
                    r = (0, a(682985).K8)(() => {
                        let e = n.state.height,
                            i = a(986939).A.isMobile && a(498368).Ay.state.open ? e : 0;
                        return (0, a(175864).C)(t) + i
                    }, [t, n]);
                return (0, a(682985).K8)(() => "home-phone" === e ? a(681693).q3 : i.isTablet ? 380 : i.isIOS ? Math.max(300, r) : a(986939).A.isMobile ? 400 : "side-peek" === e || "center-peek" === e ? a(447036).ln : "home" === e ? a(681693).wH : "30vh", [i, r, e])
            }
        },
        11444: (e, t, a) => {
            a.r(t), a.d(t, {
                UISpacePermissionGroupToken: () => o
            });
            var i = a(296540),
                n = a(474848);
            let r = {
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

            function o(e) {
                let {
                    parentStore: t,
                    style: o,
                    format: s
                } = e, l = e.groupPointer.id, d = e.groupPointer.spaceId, c = (0, a(659341).S4)({
                    spacePermissionGroupId: l,
                    spaceId: d
                }), u = (0, a(682985).K8)(() => e.groupModel ? e.groupModel : t ? a(398652).C.createChildStore(t, c).getModel() : void 0, [t, c, e.groupModel]), p = (0, a(533992).Y0)(), {} = (0, a(960253).I)(() => ({
                    badgeStyle: {
                        borderRadius: 4,
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        fontSize: a(986939).A.isMobile ? 11 : 9,
                        lineHeight: p.isAndroid ? 1.5 : 1,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em"
                    }
                }), [p]), m = (0, a(109939).tz)(), g = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: m,
                    permissionGroupModel: u
                }), [m, u]), f = (0, i.useCallback)(e => s === a(696654).NY.Inline ? (0, n.jsx)(a(308256).o, {
                    group: u,
                    size: e
                }) : (0, n.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    minWidth: 0,
                    children: [(0, n.jsx)("div", {
                        style: r.avatarWrapStyle,
                        children: (0, n.jsx)(a(308256).o, {
                            group: u,
                            size: e
                        })
                    }), (0, n.jsx)("div", {
                        style: r.style0,
                        children: g
                    })]
                }), [s, u, g]);
                return (0, n.jsx)(a(376921).Ay, { ...e,
                    style: { ...r.style1,
                        ...o
                    },
                    renderAvatar: f
                })
            }
        },
        20479: (e, t, a) => {
            a.d(t, {
                C: () => n
            }), a(296540);
            var i = a(474848);
            let n = (0, a(839697).p)("arrowInCircleUpAnimated", {
                viewBox: "2.37 2.37 15.25 15.26",
                svg: e => {
                    let t = (0, a(4962).lZ)(),
                        n = `all 0.548s linear(
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
                                    transition: n,
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
                                    transition: n,
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
        22148: (e, t, a) => {
            a.d(t, {
                J: () => i
            });

            function i(e) {
                return "form_editor" === e || "form_viewer" === e
            }
        },
        31319: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
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
                r = function(e) {
                    let {
                        botValue: t,
                        botStore: r,
                        showActiveDot: o,
                        style: s,
                        size: l
                    } = e, d = (0, a(109939).tz)(), c = (0, a(682985).K8)(() => {
                        if (r) {
                            let e = r.getIcon();
                            if (e) return {
                                pointer: {
                                    table: a(832375).GPl,
                                    id: r.id,
                                    spaceId: r.getSpaceId()
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
                    }, [r, t]), u = (0, a(682985).K8)(() => (null == r ? void 0 : r.getDisplayName(d)) ? ? (0, a(697006).Hg)(t), [r, t, d]);
                    return (0, i.jsxs)("div", {
                        style: s,
                        children: [(0, i.jsx)(a(569553).B6, {
                            icon: c,
                            title: u,
                            size: l || 18,
                            disabled: !0,
                            isEmptyPage: !1,
                            useInvertedColors: !0
                        }), o ? (0, i.jsx)("div", {
                            style: n.activeDotStyle
                        }) : void 0]
                    })
                }
        },
        34824: (e, t, a) => {
            a.d(t, {
                G: () => l,
                e: () => o
            });
            var i, n = a(296540),
                r = a(474848);
            let o = ((i = {})[i.Name = 0] = "Name", i),
                s = {
                    propertyIcon: {
                        fill: a(632079).Tj.icon.primary,
                        marginInlineStart: 6,
                        marginInlineEnd: 2
                    }
                },
                l = n.forwardRef(function(e, t) {
                    let {
                        propertySchema: i,
                        format: n
                    } = e, {
                        name: l,
                        type: d,
                        icon: c
                    } = i, u = (0, a(960253).e)(), p = n === o.Name ? l : a(799514).dC[d];
                    return (0, r.jsx)(a(95582).A, {
                        title: p,
                        icon: (0, r.jsx)(a(221535).zB, {
                            icon: c,
                            type: d,
                            size: a(986939).A.isMobile ? 18 : 16,
                            theme: a(632079).Tj,
                            themeMode: u,
                            style: s.propertyIcon
                        }),
                        ...e
                    })
                })
        },
        36772: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    lineHeight: 1.4
                },
                r = function(e) {
                    if (a(986939).A.isMobile)
                        if (e.propertySchema) return (0, i.jsx)(a(34824).G, {
                            propertySchema: e.propertySchema,
                            onClick: e.onClick,
                            focused: !1,
                            format: a(34824).e.Name,
                            showExtensionArrow: !e.disabled
                        });
                        else return (0, i.jsx)(a(95582).A, {
                            focused: !1,
                            title: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Property",
                                id: "database.mobileFilterAndSortMenu.property.buttonMenuItem.label"
                            })
                        }); {
                        let t = e.propertySchema && (0, i.jsx)(a(151710).mA, {
                                propertySchema: e.propertySchema,
                                showIcon: !0,
                                style: n
                            }),
                            r = (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Property",
                                id: "database.filterAndSortMenu.propertyButton.label"
                            });
                        return (0, i.jsx)(a(332082).A, {
                            title: t,
                            placeholder: r,
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
                E: () => i
            });

            function i(e) {
                let {
                    size: t,
                    style: i
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
                        ...i
                    }
                }), [t, i])
            }
        },
        53445: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowLeftRightIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 2.25 13.47 15.5",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.45 5.925a.625.625 0 0 0 0 .884l3.499 3.497a.625.625 0 1 0 .884-.883L5.402 6.992h10.705a.625.625 0 0 0 0-1.25H5.402l2.43-2.431a.625.625 0 0 0-.883-.884zm8.717 11.648a.625.625 0 0 1 0-.884l2.431-2.43H3.893a.625.625 0 1 1 0-1.25h10.705l-2.43-2.431a.625.625 0 0 1 .883-.884l3.498 3.497a.625.625 0 0 1 0 .884l-3.498 3.498a.625.625 0 0 1-.884 0"
                    })
                },
                n = (0, a(104509).wt)("arrowLeftRight", i, "default")
        },
        59651: (e, t, a) => {
            a.d(t, {
                l: () => n
            });
            let i = {
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

            function n(e) {
                if (e) return i[e]
            }
        },
        59724: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    style0: { ...a(699422).RC
                    }
                },
                r = function(e) {
                    let {
                        botStore: t,
                        avatarSize: r,
                        shouldShowBadge: o,
                        style: s,
                        inline: l
                    } = e, d = (0, a(109939).tz)(), c = (0, a(533992).Y0)(), u = (0, a(682985).K8)(() => null == t ? void 0 : t.getDisplayName(d), [t, d]), {
                        outerStyle: p,
                        avatarWrapStyle: m,
                        badgeStyle: g
                    } = (0, a(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...s
                        },
                        avatarWrapStyle: l ? {
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
                            lineHeight: c.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [s, l, c]);
                    return (0, i.jsxs)("div", {
                        style: p,
                        children: [(0, i.jsx)("div", {
                            style: m,
                            children: (0, i.jsx)(a(31319).A, {
                                botStore: t,
                                size: r
                            })
                        }), (0, i.jsx)("div", {
                            style: n.style0,
                            children: u
                        }), o ? (0, i.jsx)("div", {
                            style: g,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        69118: (e, t, a) => {
            a.d(t, {
                H: () => i
            });
            let i = 52
        },
        72461: (e, t, a) => {
            a.d(t, {
                Ay: () => o,
                t_: () => s,
                v7: () => l
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let t = (0, a(533992).v3)(),
                    {
                        actor: n,
                        format: o,
                        hasTooltip: s,
                        tooltipHeader: l,
                        hasPersonHoverCard: d,
                        spaceStore: c
                    } = e,
                    u = (0, a(682985).K8)(() => {
                        let e = n.asActor;
                        if (e) return (0, a(478418).J)(t, e)
                    }, [n, t]);
                return (0, i.jsx)(a(376921).Ay, { ...e,
                    renderAvatar: t => {
                        if (!u) return (0, i.jsx)(a(4458).fI, {
                            alignItems: "center",
                            height: t,
                            children: (0, i.jsx)("div", {
                                style: {
                                    height: t / 2,
                                    width: 100,
                                    borderRadius: t / 2,
                                    background: a(632079).Tj.background.tertiaryTranslucent
                                }
                            })
                        });
                        if (u instanceof a(447003).v)
                            if (o === a(696654).NY.Inline) return (0, i.jsx)(a(31319).A, {
                                botStore: u,
                                size: t,
                                style: r
                            });
                            else return (0, i.jsx)(a(59724).A, {
                                botStore: u,
                                avatarSize: t,
                                inline: !0,
                                style: r
                            });
                        if (u instanceof a(807825).L)
                            if (o === a(696654).NY.Inline) return (0, i.jsx)(a(321753).A, {
                                userStore: u,
                                size: t,
                                avatarShouldShowShadow: !1,
                                hasTooltip: s ? ? !0,
                                style: r,
                                tooltipHeader: l,
                                hasPersonHoverCard: d
                            });
                            else return (0, i.jsx)(a(980494).A, {
                                userStore: u,
                                avatarSize: t,
                                inline: !0,
                                hasTooltip: s,
                                hasPersonHoverCard: d,
                                style: r,
                                tooltipHeader: l,
                                spaceStore: c,
                                personHoverCardEntrypoint: d ? e.personHoverCardEntrypoint : void 0
                            });
                        (0, a(722371).HB)(u)
                    }
                })
            }
            let r = {
                minWidth: 0
            };
            n.Format = a(696654).NY;
            let o = n;

            function s(e) {
                let {
                    userValue: t,
                    ...r
                } = e, o = (0, a(197018).MR)(t);
                return (0, i.jsx)(n, {
                    actor: o,
                    ...r
                })
            }

            function l(e) {
                let {
                    botValue: t,
                    ...r
                } = e;
                return (0, i.jsx)(n, {
                    actor: (0, a(197018).oC)(t),
                    hasPersonHoverCard: !1,
                    ...r
                })
            }
            s.Format = a(376921).mI, l.Format = a(376921).mI
        },
        73888: (e, t, a) => {
            a.d(t, {
                y: () => i
            }), a(944114), a(898992), a(354520), a(803949), a(581454);

            function i(e) {
                let {
                    environment: t,
                    transaction: i,
                    spaceStore: n,
                    actors: r,
                    metadata: o
                } = e;
                if (!n.isDefined()) return !1;
                let s = n.id,
                    l = r.filter(e => "user" === e.type).map(e => ({
                        id: (0, a(729052).yO)({
                            spaceId: s,
                            userId: e.userId
                        }),
                        space_id: s,
                        membership_type: e.membershipType,
                        user_id: e.userId
                    })),
                    d = r.filter(e => "bot" === e.type).map(e => {
                        var t, i;
                        return {
                            id: (0, a(611042).YS)({
                                spaceId: n.id,
                                botId: e.botId
                            }),
                            space_id: s,
                            bot_id: e.botId,
                            bot_parent_id: null == e || null == (t = e.parent) ? void 0 : t.id,
                            bot_parent_table: null == e || null == (i = e.parent) ? void 0 : i.table,
                            membership_type: e.membershipType
                        }
                    });
                return l.map(e => [e, a(993189).lJX.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).dp)(n, e.user_id),
                    operation: t,
                    transaction: i
                })), d.map(e => [e, a(993189).p7l.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).Ts)(n, e.bot_id),
                    operation: t,
                    transaction: i
                })), i.postSubmitCallbacks.push(async i => {
                    var s, c;
                    let u = r.map(e => (0, a(283161).z)(e));
                    a(594311).Ah({
                        status: i ? "fail" : "success",
                        location: null == o ? void 0 : o.pagePermissionChangeLocation,
                        permission_items: u
                    }), l.forEach(e => {
                        a(594311).sY({
                            spaceUser: e,
                            from: null == o ? void 0 : o.from,
                            status: i ? "fail" : "success"
                        })
                    }), d.forEach(e => {
                        a(594311).W7({
                            spaceBot: e,
                            from: null == o ? void 0 : o.from,
                            status: i ? "fail" : "success"
                        })
                    }), null != (s = e.metadata) && s.metric && a(680007).default.DO_NOT_USE_measureLegacy(null == (c = e.metadata) ? void 0 : c.metric, {}), i || await a(371151).nO({
                        environment: t,
                        spaceStore: n
                    })
                }), !0
            }
        },
        76948: (e, t, a) => {
            a.r(t), a.d(t, {
                TeamItem: () => D,
                default: () => p
            }), a(944114), a(898992), a(354520), a(672577), a(581454), a(737550);
            var i = a(296540),
                n = a(474848);
            let r = {
                    width: 300,
                    whiteSpace: "normal"
                },
                o = {
                    inputLabels: {
                        fontSize: a(699422).J.UISmall.desktop,
                        fontWeight: a(699422).Wy.medium,
                        font: "SF Pro",
                        lineHeight: a(699422).K_.UISmall.desktop,
                        color: a(632079).Tj.text.tertiary
                    },
                    inputBox: {
                        width: "100%",
                        height: 32,
                        padding: 4,
                        gap: 4
                    },
                    invalidInput: {
                        boxShadow: a(632079).Tj.inputRedFocusRing
                    },
                    inputBoxContainer: {
                        gap: 6,
                        height: 54
                    },
                    radioOption: {
                        display: "flex",
                        alignItems: "center"
                    },
                    style1: {
                        overflowY: "scroll"
                    },
                    style2: {
                        padding: 2
                    }
                };

            function s(e) {
                let {
                    email: t,
                    site: i,
                    APIToken: r,
                    instanceType: s,
                    jiraDataCenterEnabled: l,
                    jiraDataCenterBasicAuthEnabled: c,
                    jiraDCVersion: u,
                    username: p,
                    password: m,
                    formValues: {
                        email: g,
                        site: f,
                        token: h,
                        username: y,
                        password: b,
                        isScopedToken: x = !1,
                        cloudId: v = ""
                    },
                    onChange: j,
                    invalidFields: S
                } = e, I = (0, a(682985).O$)(a(639675).Ay), w = (0, a(83208).X)("enable_scoped_token_authentication");
                return (0, n.jsx)(a(519451).A, {
                    debugName: "AtlassianAPIAuthContentPopup",
                    capture: !0,
                    children: (0, n.jsx)(a(4458).VP, {
                        justifyContent: "space-between",
                        width: "100%",
                        children: (0, n.jsx)("div", {
                            style: o.style1,
                            children: (0, n.jsxs)("div", {
                                style: o.style2,
                                children: [l ? (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsxs)("div", {
                                        style: o.inputBoxContainer,
                                        children: [(0, n.jsx)("label", {
                                            htmlFor: "instanceType",
                                            style: o.inputLabels,
                                            children: s
                                        }), (0, n.jsx)(a(346268).c, {
                                            size: 6,
                                            isHidden: !0
                                        }), (0, n.jsx)(d, {
                                            onSelectOption: e => {
                                                a(639675).Ay.setState({ ...a(639675).Ay.state,
                                                    instanceValue: e
                                                })
                                            },
                                            options: [{
                                                key: a(639675).cK.Cloud,
                                                label: (0, n.jsx)(a(109939).sA, {
                                                    id: "confluenceAuthentication.accountTypeDropdownCloudOption.label",
                                                    defaultMessage: "Cloud"
                                                })
                                            }, {
                                                key: a(639675).cK.DataCenter,
                                                label: (0, n.jsx)(a(109939).sA, {
                                                    id: "jiraAuthentication.accountTypeDropdownDCOption.label",
                                                    defaultMessage: "Data Center (Beta)"
                                                })
                                            }],
                                            currentOption: I.instanceValue ? ? a(639675).cK.Cloud
                                        })]
                                    }), (0, n.jsx)(a(346268).c, {
                                        size: 28,
                                        isHidden: !0
                                    }), (0, n.jsx)("div", {
                                        children: c && "DataCenter" === I.instanceValue ? (0, n.jsxs)("div", {
                                            children: [(0, n.jsxs)("div", {
                                                style: o.inputBoxContainer,
                                                children: [(0, n.jsx)("label", {
                                                    htmlFor: "jiraDCVersion",
                                                    style: o.inputLabels,
                                                    children: u
                                                }), (0, n.jsx)(d, {
                                                    onSelectOption: e => {
                                                        a(639675).Ay.setState({ ...a(639675).Ay.state,
                                                            authenticationType: e
                                                        })
                                                    },
                                                    options: [{
                                                        key: a(639675).XT.Bearer,
                                                        label: (0, n.jsx)(a(109939).sA, {
                                                            id: "jiraAuthentication.jiraDCNewerVersionOption.label",
                                                            defaultMessage: "8.14 or later"
                                                        })
                                                    }, {
                                                        key: a(639675).XT.Basic,
                                                        label: (0, n.jsx)(a(109939).sA, {
                                                            id: "jiraAuthentication.jiraDCOlderVersionOption.label",
                                                            defaultMessage: "Prior to 8.14"
                                                        })
                                                    }],
                                                    currentOption: I.authenticationType ? ? a(639675).XT.Bearer
                                                })]
                                            }), (0, n.jsx)(a(346268).c, {
                                                size: 28,
                                                isHidden: !0
                                            }), " "]
                                        }) : void 0
                                    })]
                                }) : void 0, (0, n.jsx)("div", {
                                    children: c && I.instanceValue === a(639675).cK.DataCenter && I.authenticationType === a(639675).XT.Basic ? (0, n.jsxs)("div", {
                                        children: [(0, n.jsxs)("div", {
                                            style: o.inputBoxContainer,
                                            children: [(0, n.jsx)("label", {
                                                htmlFor: "site",
                                                style: o.inputLabels,
                                                children: i
                                            }), (0, n.jsx)(a(346268).c, {
                                                size: 6,
                                                isHidden: !0
                                            }), (0, n.jsx)(a(36481).p, {
                                                id: "site",
                                                value: f,
                                                onChange: e => j("site", e.target.value),
                                                showClearButton: !0,
                                                placeholder: "https://domain.com",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...o.inputBox,
                                                    ...S.includes("site") && o.invalidInput
                                                }
                                            })]
                                        }), (0, n.jsx)(a(346268).c, {
                                            size: 28,
                                            isHidden: !0
                                        }), (0, n.jsxs)("div", {
                                            style: o.inputBoxContainer,
                                            children: [(0, n.jsx)("label", {
                                                htmlFor: "username",
                                                style: o.inputLabels,
                                                children: p
                                            }), (0, n.jsx)(a(346268).c, {
                                                size: 6,
                                                isHidden: !0
                                            }), (0, n.jsx)(a(36481).p, {
                                                id: "username",
                                                value: y,
                                                autoComplete: "off",
                                                autoCapitalize: "off",
                                                onChange: e => {
                                                    j("username", e.target.value)
                                                },
                                                showClearButton: !0,
                                                placeholder: "Enter your username",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...o.inputBox,
                                                    ...S.includes("username") && o.invalidInput
                                                }
                                            })]
                                        }), (0, n.jsx)(a(346268).c, {
                                            size: 28,
                                            isHidden: !0
                                        }), (0, n.jsxs)("div", {
                                            style: o.inputBoxContainer,
                                            children: [(0, n.jsx)("label", {
                                                htmlFor: "password",
                                                style: o.inputLabels,
                                                children: m
                                            }), (0, n.jsx)(a(346268).c, {
                                                size: 6,
                                                isHidden: !0
                                            }), (0, n.jsx)(a(36481).p, {
                                                id: "Password",
                                                type: "password",
                                                value: b,
                                                onChange: e => {
                                                    j("password", e.target.value)
                                                },
                                                showClearButton: !0,
                                                placeholder: "Enter your password",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...o.inputBox,
                                                    ...S.includes("password") && o.invalidInput
                                                }
                                            })]
                                        }), (0, n.jsx)(a(346268).c, {
                                            size: 28,
                                            isHidden: !0
                                        })]
                                    }) : (0, n.jsxs)("div", {
                                        children: [(0, n.jsxs)("div", {
                                            style: o.inputBoxContainer,
                                            children: [(0, n.jsx)("label", {
                                                htmlFor: "email",
                                                style: o.inputLabels,
                                                children: t
                                            }), (0, n.jsx)(a(346268).c, {
                                                size: 6,
                                                isHidden: !0
                                            }), (0, n.jsx)(a(36481).p, {
                                                id: "email",
                                                value: g,
                                                autoComplete: "off",
                                                autoCapitalize: "off",
                                                onChange: e => {
                                                    j("email", e.target.value)
                                                },
                                                showClearButton: !0,
                                                placeholder: "notion@acmelabs.com",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...o.inputBox,
                                                    ...S.includes("email") && o.invalidInput
                                                }
                                            })]
                                        }), (0, n.jsx)(a(346268).c, {
                                            size: 28,
                                            isHidden: !0
                                        }), (0, n.jsxs)("div", {
                                            style: o.inputBoxContainer,
                                            children: [(0, n.jsx)("label", {
                                                htmlFor: "site",
                                                style: o.inputLabels,
                                                children: i
                                            }), (0, n.jsx)(a(346268).c, {
                                                size: 6,
                                                isHidden: !0
                                            }), (0, n.jsx)(a(36481).p, {
                                                id: "site",
                                                value: f,
                                                onChange: e => j("site", e.target.value),
                                                showClearButton: !0,
                                                placeholder: I.instanceValue === a(639675).cK.Cloud ? "https://jira.atlassian.net" : "https://domain.com",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...o.inputBox,
                                                    ...S.includes("site") && o.invalidInput
                                                }
                                            })]
                                        }), (0, n.jsx)(a(346268).c, {
                                            size: 28,
                                            isHidden: !0
                                        }), (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("label", {
                                                htmlFor: "APIToken",
                                                style: o.inputLabels,
                                                children: r
                                            }), (0, n.jsx)(a(346268).c, {
                                                size: 6,
                                                isHidden: !0
                                            }), (0, n.jsx)(a(36481).p, {
                                                id: "AccessToken",
                                                type: "password",
                                                value: h,
                                                onChange: e => {
                                                    j("token", e.target.value)
                                                },
                                                showClearButton: !0,
                                                placeholder: "Paste your token here",
                                                inputElementAttributes: {
                                                    minLength: 4
                                                },
                                                style: { ...o.inputBox,
                                                    ...(I.adminTokenError || S.includes("token")) && o.invalidInput
                                                }
                                            }), I.adminTokenError ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)(a(346268).c, {
                                                    size: 6,
                                                    isHidden: !0
                                                }), (0, n.jsx)(a(111010).D, {
                                                    styleKey: "captionRegular",
                                                    colorPalette: "red",
                                                    colorVariant: "accentPrimary",
                                                    children: (0, n.jsx)(a(109939).sA, {
                                                        id: "AtlassianApiTokenAuthentication.adminPermissionError",
                                                        defaultMessage: "The API token doesn’t have admin permissions. Please add the admin scope to this token and try again"
                                                    })
                                                })]
                                            }) : void 0, (0, n.jsx)(a(346268).c, {
                                                size: 6,
                                                isHidden: !0
                                            }), (0, n.jsx)(a(111010).D, {
                                                styleKey: "captionRegular",
                                                colorVariant: "secondary",
                                                children: (0, n.jsx)(a(109939).sA, {
                                                    id: "AtlassianApiTokenAuthentication.createToken.guide",
                                                    defaultMessage: "Set an admin token in Jira with a 1-year expiry to prevent sync issues. Learn how to <createapitokenhelpdoc>create an API token</createapitokenhelpdoc>",
                                                    values: {
                                                        createapitokenhelpdoc: (...e) => (0, n.jsx)(a(428217).V, {
                                                            external: !0,
                                                            href: I.instanceValue === a(639675).cK.Cloud ? "https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account" : "https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html",
                                                            onClick: () => {},
                                                            children: e
                                                        })
                                                    }
                                                })
                                            })]
                                        }), (0, n.jsx)(a(346268).c, {
                                            size: 28,
                                            isHidden: !0
                                        }), w && I.instanceValue === a(639675).cK.Cloud ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsxs)("div", {
                                                style: o.inputBoxContainer,
                                                children: [(0, n.jsx)("label", {
                                                    htmlFor: "tokenType",
                                                    style: o.inputLabels,
                                                    children: (0, n.jsx)(a(109939).sA, {
                                                        id: "jiraCloudAuth.tokenTypeLabel",
                                                        defaultMessage: "Token Type"
                                                    })
                                                }), (0, n.jsx)(a(346268).c, {
                                                    size: 6,
                                                    isHidden: !0
                                                }), (0, n.jsxs)(a(4458).fI, {
                                                    alignItems: "center",
                                                    gap: 8,
                                                    children: [(0, n.jsxs)(a(988022).p, {
                                                        style: o.radioOption,
                                                        onClick: () => j("isScopedToken", !1),
                                                        children: [(0, n.jsx)(a(451199).A, {
                                                            isSelected: !x
                                                        }), (0, n.jsx)(a(111010).D, {
                                                            styleKey: "bodyRegular",
                                                            colorVariant: "primary",
                                                            children: (0, n.jsx)(a(109939).sA, {
                                                                id: "jiraCloudAuth.classicTokenOption",
                                                                defaultMessage: "Classic Token"
                                                            })
                                                        })]
                                                    }), (0, n.jsxs)(a(988022).p, {
                                                        style: o.radioOption,
                                                        onClick: () => j("isScopedToken", !0),
                                                        children: [(0, n.jsx)(a(451199).A, {
                                                            isSelected: x
                                                        }), (0, n.jsx)(a(111010).D, {
                                                            styleKey: "bodyRegular",
                                                            colorVariant: "primary",
                                                            children: (0, n.jsx)(a(109939).sA, {
                                                                id: "jiraCloudAuth.scopedTokenOption",
                                                                defaultMessage: "Scoped"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            }), x ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)(a(346268).c, {
                                                    size: 28,
                                                    isHidden: !0
                                                }), (0, n.jsxs)("div", {
                                                    style: o.inputBoxContainer,
                                                    children: [(0, n.jsx)("label", {
                                                        htmlFor: "cloudId",
                                                        style: o.inputLabels,
                                                        children: (0, n.jsx)(a(109939).sA, {
                                                            id: "jiraCloudAuth.cloudIdLabel",
                                                            defaultMessage: "Cloud ID (Required for Scoped Tokens)"
                                                        })
                                                    }), (0, n.jsx)(a(346268).c, {
                                                        size: 6,
                                                        isHidden: !0
                                                    }), (0, n.jsx)(a(36481).p, {
                                                        id: "cloudId",
                                                        value: v,
                                                        onChange: e => {
                                                            j("cloudId", e.target.value)
                                                        },
                                                        showClearButton: !0,
                                                        placeholder: "Your Atlassian Cloud ID",
                                                        inputElementAttributes: {
                                                            minLength: 1
                                                        },
                                                        style: { ...o.inputBox,
                                                            ...S.includes("cloudId") && o.invalidInput
                                                        }
                                                    }), (0, n.jsx)(a(346268).c, {
                                                        size: 6,
                                                        isHidden: !0
                                                    }), (0, n.jsx)(a(111010).D, {
                                                        styleKey: "captionRegular",
                                                        colorVariant: "secondary",
                                                        children: (0, n.jsx)(a(109939).sA, {
                                                            id: "AtlassianApiTokenAuthentication.createToken.scopedTokenInfo",
                                                            defaultMessage: "Live updates are not supported by scoped token types currently."
                                                        })
                                                    })]
                                                }), (0, n.jsx)(a(346268).c, {
                                                    size: 28,
                                                    isHidden: !0
                                                })]
                                            }) : void 0, (0, n.jsx)(a(346268).c, {
                                                size: 28,
                                                isHidden: !0
                                            })]
                                        }) : null]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            let l = {
                container: {
                    width: "100%",
                    backgroundColor: a(632079).Tj.background.secondaryTranslucent,
                    borderRadius: 8,
                    border: `1px solid ${a(632079).Tj.border.secondary}`,
                    height: 32,
                    gap: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                icon: {
                    marginInlineEnd: 4
                },
                dropdownLabel: {
                    font: "SF Pro",
                    fontSize: a(699422).J.UIRegular.desktop,
                    fontWeight: a(699422).Wy.regular,
                    lineHeight: a(699422).K_.UISmall.desktop
                },
                style0: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                    paddingInlineStart: 8,
                    paddingInlineEnd: 4
                },
                style1: {
                    background: "transparent"
                },
                style2: {
                    position: "relative",
                    alignItems: "flex-end"
                }
            };

            function d(e) {
                var t;
                let {
                    onSelectOption: r,
                    options: o,
                    currentOption: s
                } = e, d = i.useRef(null), c = null == (t = o.find(({
                    key: e
                }) => e === s)) ? void 0 : t.label;
                return (0, n.jsx)("div", {
                    ref: d,
                    style: l.container,
                    children: (0, n.jsx)(a(656252).A, {
                        popupType: a(656252).z.Popup,
                        placementToOrigin: "bottom",
                        content: e => {
                            var t;
                            let i = (null == (t = d.current) ? void 0 : t.offsetWidth) || 250,
                                s = {
                                    menuType: a(649476).gu.Popup,
                                    width: i
                                },
                                u = o.map(({
                                    key: t,
                                    label: i
                                }) => ({
                                    key: t,
                                    action: () => {
                                        r(t), e.close()
                                    },
                                    render: e => (0, n.jsx)(a(95582).A, { ...e,
                                        title: i,
                                        shouldWrapCaption: !0,
                                        isChecked: c === i
                                    })
                                }));
                            return (0, n.jsx)(a(747369).A, { ...s,
                                children: (0, n.jsx)(a(558045).A, {
                                    type: a(558045).O.Vertical,
                                    sections: [{
                                        key: "settings-item-section",
                                        items: u
                                    }],
                                    initialFocus: void 0,
                                    style: l.style2
                                })
                            })
                        },
                        children: e => (0, n.jsxs)(a(988022).p, { ...e,
                            size: "lg",
                            style: l.style0,
                            disabled: !1,
                            hoveredStyle: l.style1,
                            children: [(0, n.jsx)("span", {
                                style: l.dropdownLabel,
                                children: c
                            }), (0, n.jsx)(a(16275).I, {
                                icon: a(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary",
                                style: l.icon
                            })]
                        })
                    })
                })
            }
            let c = function(e) {
                    let t = (0, a(109939).tz)().formatMessage({
                        id: "AtlassianApiTokenAuthentication.stepsToGetDCVersion.captions",
                        defaultMessage: "Click to learn how to know the version of DC Server you are running"
                    });
                    return (0, n.jsx)(s, {
                        email: (0, n.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.emailMessage",
                                defaultMessage: "Jira admin’s email"
                            })
                        }),
                        username: (0, n.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.usernameMessage",
                                defaultMessage: "Jira admin’s username"
                            })
                        }),
                        password: (0, n.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.passwordMessage",
                                defaultMessage: "Jira admin’s password"
                            })
                        }),
                        site: (0, n.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.siteMessage",
                                defaultMessage: "Jira site url"
                            })
                        }),
                        APIToken: (0, n.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.apiTokenMessage",
                                defaultMessage: "API token"
                            })
                        }),
                        instanceType: (0, n.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.instanceType",
                                defaultMessage: "Jira instance type"
                            })
                        }),
                        jiraDCVersion: (0, n.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: [(0, n.jsx)(a(109939).sA, {
                                id: "AtlassianApiTokenAuthentication.DCVersion",
                                defaultMessage: "Jira version"
                            }), (0, n.jsx)(a(51831).m, {
                                style: r,
                                placement: "right",
                                content: () => t,
                                children: e => (0, n.jsx)(a(374533).A, {
                                    ariaLabel: t,
                                    onClick: () => {
                                        window.open("https://community.atlassian.com/t5/Jira-questions/Re-where-can-i-check-jira-version-am-using-how-to-check/qaq-p/664639/comment-id/218177#M218177", "_blank")
                                    },
                                    icon: a(372181).infoCircleSmallIcon,
                                    ...e
                                })
                            })]
                        }),
                        ...e
                    })
                },
                u = (0, a(109939).YK)({
                    getStarted: {
                        id: "jiraSyncTeamSpaceModal.getStarted",
                        defaultMessage: "Get started"
                    },
                    jiraSyncTutorialRequestAccess: {
                        id: "jiraSyncTeamSpaceModal.requestAccess",
                        defaultMessage: "Request Jira sync"
                    },
                    jiraSyncTutorialHeading: {
                        id: "jiraSyncTeamSpaceModal.tutorial.heading",
                        defaultMessage: "Sync Jira projects and issues to a Notion database, so that everyone can stay up to date with work—without logging into Jira or needing a Jira account"
                    },
                    jiraSyncTutorialAdminContent: {
                        id: "jiraSyncTeamSpaceModal.tutorial.adminContent",
                        defaultMessage: "As a workspace owner and Jira admin, you can set this up for everyone in {spaceName}. After that, other members will be able to create and edit syncs"
                    },
                    improveYourJiraSyncTutorialHeading: {
                        id: "jiraSyncTeamSpaceModal.tutorial.improveJiraSync.heading",
                        defaultMessage: "Jira synced databases are now faster and more reliable."
                    },
                    improveYourJiraSyncTutorialContent: {
                        id: "jiraSyncTeamSpaceModal.tutorial.improveJiraSync.content",
                        defaultMessage: "To set this up, you’ll need to provide a Jira admin token. Only workspace owners can set this up."
                    },
                    jiraSyncTutorialMemberContent: {
                        id: "jiraSyncTeamSpaceModal.tutorial.memberContent",
                        defaultMessage: "You can request this feature from the workspace owners of {spaceName}. After that, you’ll be able to set up your own syncs"
                    },
                    jiraSyncTutorialRequestAccessContent: {
                        id: "jiraSyncTeamSpaceModal.tutorial.requestAccess.content",
                        defaultMessage: "You can request this feature from the workspace owners of {spaceName}:"
                    },
                    learnMore: {
                        id: "jiraSyncTeamSpaceModal.learnMore",
                        defaultMessage: "Learn more"
                    },
                    modalClose: {
                        id: "jiraSyncTeamSpaceModal.footer.close",
                        defaultMessage: "Close"
                    },
                    continueCta: {
                        id: "jiraSyncTeamSpaceModal.continueCta",
                        defaultMessage: "Continue"
                    },
                    currentTeamspace: {
                        id: "jiraSyncTeamSpaceModal.currentTeamspace",
                        defaultMessage: "Current teamspace"
                    },
                    noEditAccessInTeamspace: {
                        id: "jiraSyncTeamSpaceModal.noEditAccessInTeamspace",
                        defaultMessage: "You don’t have access to create pages in this teamspace"
                    },
                    headerTitle: {
                        id: "jiraSyncTeamSpaceModal.header.title",
                        defaultMessage: "Sync with Jira"
                    },
                    headerSubtitle: {
                        id: "jiraSyncTeamSpaceModal.header.subtitle",
                        defaultMessage: "Connect Jira to sync projects and issues"
                    },
                    improveJiraSyncHeaderTitle: {
                        id: "jiraSyncTeamSpaceModal.improveJiraSync.title",
                        defaultMessage: "Improve your Jira Sync"
                    },
                    chooseJiraSite: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.site.change",
                        defaultMessage: "Choose Jira site"
                    },
                    syncCta: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.footer.syncCta",
                        defaultMessage: "Sync Jira"
                    },
                    siteSelectionDropdownLabel: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.site.title",
                        defaultMessage: "Select Jira instance"
                    },
                    createTeamSpace: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.createNewTeamspace",
                        defaultMessage: "Create new teamspace"
                    },
                    canNotCreateTeamSpace: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.canNotCreateTeamSpace",
                        defaultMessage: "You don’t have access to create new teamspace"
                    },
                    searchTeamSpace: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.searchPlaceholder",
                        defaultMessage: "Search for a teamspace"
                    },
                    createNewSync: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.createNewSync.title",
                        defaultMessage: "Create a new sync"
                    },
                    existingSyncHeader: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.existingSync.title",
                        defaultMessage: "Jira syncs"
                    },
                    existingSyncCaption: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.existingSync.subtitle",
                        defaultMessage: "Add projects to an existing Jira sync, or create a new one"
                    },
                    importError: {
                        defaultMessage: "Error occurred while creating project page. Please try again.",
                        id: "action.jiraSyncImportFailed.message"
                    },
                    okCta: {
                        defaultMessage: "Ok",
                        id: "action.jiraSyncImportFailed.okLabel"
                    },
                    newSync: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.newSync",
                        defaultMessage: "New sync"
                    },
                    createdBy: {
                        defaultMessage: "Created by ",
                        id: "jiraSyncTeamSpaceModal.teamSelection.teamsList.createdBy.prefix"
                    },
                    jiraSyncHelpLink: {
                        id: "jiraSyncTeamSpaceModal.jiraSyncHelpLink",
                        defaultMessage: "Learn more about Jira sync"
                    },
                    syncName: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.syncName",
                        defaultMessage: "Name sync"
                    },
                    selectSyncLocation: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.selectSyncLocation",
                        defaultMessage: "Select sync location"
                    },
                    syncLocationDescription: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.syncLocationDescription",
                        defaultMessage: "A Jira database will be created under this teamspace"
                    },
                    syncNameDescriptionPrefix: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.syncNameDescription",
                        defaultMessage: "Projects and issues will appear as "
                    },
                    syncNameDescriptionSuffix: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.syncNameDescriptionSuffix",
                        defaultMessage: "{syncName} Projects, Issues"
                    },
                    teamspacesSection: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.teamspacesSection",
                        defaultMessage: "Teamspaces"
                    },
                    existingSyncItemCaption: {
                        id: "jiraSyncTeamSpaceModal.teamSelection.existingSync.itemCaption",
                        defaultMessage: "{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}} • {projects, plural, one {{projects} project} other {{projects} projects}} • {tasks, plural, one {{tasks} issue} other {{tasks} issues}}"
                    }
                });

            function p() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(682985).O$)(a(639675).Ay),
                    {
                        open: i,
                        type: r
                    } = t,
                    o = () => {
                        let e = a(639675).Ay.getInitialState();
                        a(639675).Ay.setState({ ...e,
                            open: !1
                        })
                    },
                    s = (0, a(682985).uB)(void 0, a(519156).A),
                    l = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore),
                    d = t.flowId || a(92513).JW(),
                    c = void 0 !== r && void 0 !== l && (t.instanceValue !== a(639675).cK.DataCenter || "dc-auth" !== t.type);
                if ((0, a(805469).A)({
                        shouldPreserveTextSelection: i && c,
                        shouldPreserveBlockSelection: i && c,
                        shouldRestoreSelection: !0
                    }), !c) return null;
                let {
                    height: u,
                    width: p
                } = "auth" === r || "teamspace-selection" === r ? {
                    width: 450,
                    height: "fit-content"
                } : {
                    width: 400,
                    height: "fit-content"
                };
                return (0, n.jsx)(a(556809).a, {
                    open: i,
                    innerStyle: {
                        width: p,
                        height: u,
                        overflow: "scroll",
                        borderRadius: 5,
                        maxHeight: 675,
                        minHeight: 300,
                        padding: 6
                    },
                    onDismiss: o,
                    children: (0, n.jsx)(a(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, n.jsx)(g, {
                            type: r,
                            handleModalClose: o,
                            environment: e,
                            requestStore: s,
                            spaceStore: l,
                            flowId: d
                        })
                    })
                })
            }
            let m = {
                paddingTop: 20,
                paddingInlineEnd: 14,
                paddingBottom: 10,
                paddingInlineStart: 14,
                height: "100%",
                display: "flex",
                flexDirection: "column"
            };

            function g(e) {
                let {
                    type: t,
                    environment: r,
                    requestStore: o,
                    spaceStore: s
                } = e, l = e.flowId || a(92513).JW(), d = (0, a(682985).O$)(a(639675).Ay);
                return (0, i.useEffect)(() => {
                    d.flowId || a(639675).Ay.setState({ ...d,
                        flowId: l
                    })
                }, [d, l]), (0, n.jsx)("div", {
                    style: m,
                    children: (() => {
                        switch (t) {
                            case "teamspace-selection":
                                return (0, n.jsx)(b, {
                                    handleModalClose: e.handleModalClose,
                                    flowId: l
                                });
                            case "auth":
                                return (0, n.jsx)(T, {
                                    handleModalClose: e.handleModalClose,
                                    environment: r,
                                    requestStore: o,
                                    spaceStore: s,
                                    flowId: l
                                });
                            case "sync-guide":
                                return (0, n.jsx)(z, {
                                    handleModalClose: e.handleModalClose,
                                    environment: r
                                });
                            case "request-feature":
                                return (0, n.jsx)(V, {
                                    handleModalClose: e.handleModalClose,
                                    environment: r
                                });
                            case "improve-jira-sync":
                                return (0, n.jsx)(E, {
                                    handleModalClose: e.handleModalClose,
                                    environment: r
                                });
                            default:
                                return (0, n.jsx)(n.Fragment, {})
                        }
                    })()
                })
            }
            let f = {
                spinner: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: a(632079).Tj.modalUnderlayBackground,
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0
                },
                style0: {
                    position: "absolute",
                    top: "50%",
                    insetInlineStart: "50%"
                }
            };

            function h(e) {
                return (0, n.jsx)(n.Fragment, {
                    children: e.loading ? (0, n.jsx)("div", {
                        style: f.spinner,
                        children: (0, n.jsx)(a(517334).k, {
                            style: f.style0
                        })
                    }) : void 0
                })
            }
            let y = {
                teamsListTitle: {
                    fontSize: a(699422).J.UISmall.desktop,
                    fontWeight: a(699422).Wy.medium,
                    color: a(632079).Tj.text.secondary
                },
                teamsListSubTitle: {
                    fontSize: a(699422).J.UISmall.desktop,
                    color: a(632079).Tj.text.secondary,
                    fontWeight: a(699422).Wy.regular,
                    marginBottom: 8
                },
                teamSpaceItemButtonStyle: {
                    background: "none",
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                    width: "100%"
                },
                teamSpaceItemStyle: {
                    marginBottom: 6,
                    borderRadius: 6,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "rgba(227, 226, 224, 0.5)"
                },
                teamSpaceItemFocussedStyle: {
                    background: "rgba(35, 131, 226, 0.07)",
                    borderColor: "rgba(35, 131, 226, 1)"
                },
                teamSpaceItemCaption: {
                    display: "flex",
                    gap: 6,
                    alignItems: "center",
                    marginTop: 4,
                    lineHeight: a(699422).K_.UISmall.desktop
                },
                createNewTeamspaceWrapper: {
                    margin: "0px 4px 8px",
                    width: "100%"
                },
                createNewSyncWrapper: {
                    height: 28,
                    display: "flex",
                    gap: 6,
                    width: "100%",
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0
                },
                canNotCreateTeamSpace: {
                    margin: "0px 8px 8px",
                    height: 28,
                    paddingTop: 8,
                    fontSize: a(699422).J.UIRegular.desktop,
                    fontWeight: a(699422).Wy.regular,
                    color: a(632079).Tj.text.secondary,
                    lineHeight: a(699422).K_.UIRegular.desktop
                },
                inputLabels: {
                    font: "SF Pro",
                    color: a(632079).Tj.text.secondary
                },
                fieldDescription: {
                    color: a(632079).Tj.text.secondary,
                    font: "SF Pro"
                },
                inputBox: {
                    width: "100%",
                    height: 32,
                    padding: 4,
                    gap: 4
                },
                syncNameDescription: {
                    color: a(632079).Tj.text.primary
                },
                style0: {
                    width: 18,
                    height: 18
                },
                style1: {
                    fontWeight: a(699422).Wy.regular
                },
                style2: {
                    fontWeight: a(699422).Wy.medium
                },
                style3: {
                    marginTop: 8,
                    marginBottom: 8
                },
                style4: {
                    marginInlineStart: 0,
                    marginInlineEnd: 0
                },
                style5: {
                    padding: 0
                },
                style6: {
                    flexGrow: 1,
                    overflow: "scroll"
                },
                style7: {
                    padding: 2
                }
            };

            function b({
                handleModalClose: e,
                flowId: t
            }) {
                let r = (0, a(533992).v3)(),
                    o = (0, a(109939).tz)(),
                    [s, l] = i.useState(),
                    [d, c] = i.useState(),
                    [p, m] = i.useState([]),
                    [g, f] = i.useState(),
                    [x, v] = i.useState(""),
                    [j, S] = i.useState(""),
                    I = (0, a(682985).uB)(void 0, a(593423).A),
                    A = (0, a(345776).T)(),
                    T = (0, a(723240).r)(),
                    C = (0, a(972740).L)(),
                    P = (0, a(682985).K8)(() => (0, a(345514).s)({
                        environment: r,
                        spaceStore: C
                    }), [C, r]),
                    B = (0, a(682985).O$)(a(728372).AppStoreMainEditorCurrentBlockStore),
                    _ = (0, a(682985).K8)(() => {
                        if (A && C) return (0, a(505116).z)({
                            userId: A,
                            spaceStore: C
                        }).getDisplayName(o)
                    }, [A, C, o]),
                    N = (0, a(682985).K8)(() => {
                        if (B) return (0, a(297311).U)(B)
                    }, [B]),
                    z = (0, a(83208).X)("is_jira_sync_setup_polish_enabled"),
                    L = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    E = (0, a(682985).K8)(() => (null == I ? void 0 : I.state.elementRef) ? ? {
                        current: null
                    }, [I]),
                    H = (0, a(239160).CR)(E),
                    V = (0, a(239160).yE)(E),
                    F = (0, a(239160).o7)(E),
                    W = (0, i.useMemo)(() => {
                        if (!(V + F + 5 >= H)) return `
				linear-gradient(
					to top,
					transparent 0%,
					black 80px,
					black 100%

				)
			`
                    }, [F, H, V]),
                    U = (0, a(682985).K8)(() => L ? (0, a(679321).r)(L) : [], [L]),
                    K = (0, a(682985).O$)(a(639675).Ay),
                    [{
                        value: O
                    }] = (0, a(97668).Yb)(async () => {
                        if (T) return await r.api.callApi({
                            eventName: "getExternalSyncedCollectionInTeams",
                            environment: r,
                            data: {
                                spaceId: T
                            }
                        })
                    }, [r, T]),
                    [{
                        value: Q
                    }] = (0, a(97668).Yb)(async () => {
                        if (T) return await r.api.callApi({
                            eventName: "getJiraSitesForWorkspace",
                            environment: r,
                            data: {
                                spaceId: T
                            }
                        })
                    }, [r, T]),
                    q = (0, a(682985).K8)(() => (0, a(128729).p)(C), [C]),
                    J = (0, a(682985).K8)(() => (0, a(23803).X7)(), []),
                    G = (0, a(682985).K8)(() => (0, a(23803).Zf)(), []);
                (0, i.useEffect)(() => {
                    var e;
                    if ((null == Q ? void 0 : Q.type) === "success" && null != (e = Q.data) && null != (e = e.data) && e.connections) {
                        let e = Q.data.data.connections.map(({
                            metainfo: e,
                            bot_id: t
                        }) => ({
                            site: e.siteUrl,
                            botId: t,
                            email: e.email,
                            instanceType: e.instanceType
                        })).filter(a(722371).O9);
                        J && (q || G) || (e = e.filter(e => e.instanceType === a(639675).cK.Cloud)), m(e), e.length && f(e[0])
                    }
                }, [Q, q, J, G]), (0, i.useEffect)(() => {
                    let {
                        teamSpaceId: e
                    } = K;
                    if (e) {
                        let t = U.find(t => t.id === e);
                        t && l(t)
                    }
                }, [K, U]);
                let $ = (0, a(682985).K8)(() => !!a(610463).A.externalAuthentications.state.find(e => e.id === (null == g ? void 0 : g.botId) && e.user_id === r.currentUser.id), [g, r]),
                    Y = (0, a(682985).K8)(() => (null == O ? void 0 : O.type) === "success" && O.data && g ? O.data.map(e => {
                        let t = U.find(t => t.id === e.teamId);
                        if (e.site === g.site && t) {
                            var i;
                            let n = e.syncSetupByUserId && C && (null == (i = (0, a(505116).z)({
                                userId: e.syncSetupByUserId,
                                spaceStore: C
                            })) ? void 0 : i.getDisplayName(o));
                            return { ...e,
                                syncSetupByUserName: n,
                                teamStore: t
                            }
                        }
                    }).filter(a(722371).O9) : [], [O, C, g, U, o]),
                    Z = (0, a(682985).K8)(() => U.filter(e => {
                        var t;
                        return null == (t = e.getName()) ? void 0 : t.toLowerCase().includes(x.toLowerCase())
                    }).map(e => ({
                        teamStore: e,
                        disabled: !e.canAddOrRemoveTopLevelPages()
                    })), [U, x]),
                    X = e => {
                        a(227947).A.setState({ ...a(227947).A.state,
                            open: !1
                        });
                        let t = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                        if (e) {
                            if (a(639675).Ay.setState({ ...a(639675).Ay.state,
                                    loading: !1,
                                    teamSpaceId: "",
                                    open: !1
                                }), a(917850).y.requestOpenExternalSyncSettings("external_list_projects", "jira_sync_team_space_modal"), e.id !== (null == t ? void 0 : t.id)) {
                                let t = (0, a(483227).Ay)({
                                    store: e,
                                    preferPublicLink: !1,
                                    pageVisitSource: a(254656).y8.Import
                                });
                                (0, a(857400).navigateOnBaseUrl)({
                                    environment: r,
                                    url: t
                                })
                            }
                        } else {
                            a(647095).ui({
                                showCancel: !1,
                                keepFocus: !1,
                                message: (0, n.jsx)(a(109939).sA, { ...u.importError
                                }),
                                items: [{
                                    label: (0, n.jsx)(a(109939).sA, { ...u.okCta
                                    }),
                                    color: "blue",
                                    onAccept() {}
                                }]
                            });
                            let e = a(639675).Ay.getInitialState();
                            a(639675).Ay.setState({ ...e
                            })
                        }
                    },
                    ee = async e => {
                        if (!g) return;
                        a(639675).Ay.setState({ ...a(639675).Ay.state,
                            loading: !0,
                            site: g.site,
                            botId: g.botId
                        });
                        let t = await a(658157).i5({
                            environment: r,
                            selectedTeamspaceId: e,
                            siteUrl: g.site,
                            botId: g.botId,
                            instanceType: g.instanceType,
                            syncName: j
                        });
                        if (t) X(t);
                        else {
                            a(773352).log({
                                level: "error",
                                from: "jiraSyncTeamSpaceModals",
                                type: "projectPageNotCreated",
                                data: {
                                    message: "failed to create project page for Jira import, we will be retry for 1 second before closing the modal",
                                    miscDataToConvertToString: {
                                        teamId: e,
                                        siteUrl: g.site,
                                        botId: g.botId,
                                        projectPage: t
                                    }
                                }
                            });
                            let i = performance.now() + 1e3,
                                n = a(975162).yX(),
                                o = setInterval(async () => {
                                    i < performance.now() ? n.resolve(void 0) : (t = await a(658157).i5({
                                        environment: r,
                                        selectedTeamspaceId: e,
                                        siteUrl: g.site,
                                        botId: g.botId,
                                        instanceType: g.instanceType
                                    })) && (X(t), n.resolve("resolved"))
                                }, 250);
                            await n.promise, clearInterval(o)
                        }
                    },
                    et = (0, i.useCallback)((e, t) => {
                        let i = (L ? (0, a(679321).r)(L).filter(e => e.canAddOrRemoveTopLevelPages()) : []).find(t => t.id === e);
                        i && (l(i), c({
                            pageId: null,
                            teamStore: i
                        })), t.close()
                    }, [L]),
                    ea = Y.map(e => {
                        let t = `${e.projectId}`,
                            i = e.teamStore,
                            r = (null == d ? void 0 : d.pageId) === e.projectId,
                            o = e.syncSetupByUserName;
                        return {
                            key: t,
                            render: () => (0, n.jsx)(a(95582).A, {
                                style: { ...y.teamSpaceItemStyle,
                                    ...r && y.teamSpaceItemFocussedStyle
                                },
                                buttonStyle: y.teamSpaceItemButtonStyle,
                                onClick: () => {
                                    c({
                                        pageId: e.projectId,
                                        teamStore: i
                                    })
                                },
                                icon: (0, n.jsx)("img", {
                                    src: a(896221).A.images.appPackages.jiraProjectIconSvg,
                                    style: y.style0,
                                    alt: "Jira Project Icon"
                                }),
                                title: (0, n.jsx)(a(109939).sA, {
                                    id: "jiraSyncTeamSpaceModal.teamSelection.teamsList.syncCount",
                                    defaultMessage: "{projects} projects, {tasks} issues",
                                    values: {
                                        projects: e.projectsCount,
                                        tasks: e.tasksCount
                                    }
                                }),
                                right: r && (0, n.jsx)(a(16275).I, {
                                    icon: a(93042).checkmarkCircleFillIcon,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                }),
                                focused: !1,
                                caption: (0, n.jsxs)(n.Fragment, {
                                    children: [o ? (0, n.jsxs)("div", {
                                        style: y.teamSpaceItemCaption,
                                        children: [(0, n.jsx)("span", {
                                            style: y.style1,
                                            children: (0, n.jsx)(a(109939).sA, { ...u.createdBy
                                            })
                                        }), (0, n.jsx)("span", {
                                            style: y.style2,
                                            children: (0, n.jsx)(a(109939).sA, {
                                                defaultMessage: "{name}",
                                                id: "jiraSyncTeamSpaceModal.teamSelection.teamsList.createdBy.title",
                                                values: {
                                                    name: o
                                                }
                                            })
                                        })]
                                    }) : void 0, (0, n.jsxs)("div", {
                                        style: y.teamSpaceItemCaption,
                                        children: [(0, n.jsx)(a(109939).sA, {
                                            defaultMessage: "in",
                                            id: "jiraSyncTeamSpaceModal.teamSelection.teamsList.teamspace.prefix"
                                        }), (0, n.jsx)(a(729746).x, {
                                            store: i,
                                            size: 20,
                                            disabled: !0
                                        }), (0, n.jsx)(a(541341).j, {
                                            type: "teamStore",
                                            teamStore: i
                                        })]
                                    })]
                                })
                            }),
                            action: () => {}
                        }
                    }).filter(a(722371).O9),
                    ei = (0, i.useCallback)(e => (0, n.jsxs)(a(747369).A, {
                        menuType: a(649476).gu.Popup,
                        children: [(0, n.jsx)(a(310324).Ay, {
                            focusInitial: !0,
                            value: x,
                            onChange: e => {
                                v(e.target.value)
                            },
                            placeholder: o.formatMessage(u.searchTeamSpace),
                            style: y.style3
                        }), (0, n.jsx)(a(558045).A, {
                            type: a(558045).O.Vertical,
                            initialFocus: 0,
                            style: y.style4,
                            sections: [{
                                key: "teamspaces",
                                render: e => (0, n.jsx)(a(844565).A, {
                                    topBorder: !1,
                                    ...e,
                                    style: y.style5
                                }),
                                items: Z.map(({
                                    teamStore: t,
                                    disabled: a
                                }) => {
                                    let i = (null == s ? void 0 : s.id) === t.id;
                                    return {
                                        key: t.id,
                                        render: r => (0, n.jsx)(D, {
                                            teamStore: t,
                                            disabled: a,
                                            onAccept: t => {
                                                l(t), c({
                                                    pageId: null,
                                                    teamStore: t
                                                }), e.close()
                                            },
                                            focused: i,
                                            showCurrentTeamSpaceBadge: (null == N ? void 0 : N.id) === t.id
                                        }, t.id),
                                        action: () => {}
                                    }
                                })
                            }]
                        }), P ? (0, n.jsx)(a(988022).p, {
                            iconLeading: a(581923).plusIcon,
                            colorPalette: "gray",
                            style: y.createNewTeamspaceWrapper,
                            disabled: !1,
                            onClick: () => {
                                (0, a(198347).v)("jira_importer", {
                                    onClose: t => et(t, e)
                                }), (0, a(104310).u)({
                                    event: {
                                        eventName: "external_sync_teamspace_selection",
                                        eventProperties: {
                                            integration: "jira",
                                            actionType: "create_new_teamspace_cta_click",
                                            flowId: t,
                                            isSyncOwner: $
                                        }
                                    }
                                })
                            },
                            children: (0, n.jsx)(a(109939).sA, { ...u.createTeamSpace
                            })
                        }) : !Z.length && (0, n.jsx)(a(324489).V, {
                            style: y.canNotCreateTeamSpace,
                            children: (0, n.jsx)(a(109939).sA, { ...u.canNotCreateTeamSpace
                            })
                        })]
                    }), [x, Z, s, N, et, P, t, $, o]),
                    en = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(a(324489).V, {
                            isSecondaryColor: !0,
                            style: y.teamsListTitle,
                            children: [(0, n.jsx)(a(109939).sA, { ...u.existingSyncHeader
                            }), " "]
                        }), ea.length > 0 ? (0, n.jsx)(a(324489).V, {
                            isSecondaryColor: !0,
                            style: y.teamsListSubTitle,
                            children: (0, n.jsx)(a(109939).sA, { ...u.existingSyncCaption
                            })
                        }) : void 0, (0, n.jsxs)(a(126767).H, {
                            type: a(644154).A.Y,
                            store: I,
                            style: {
                                flexGrow: 1,
                                paddingBottom: 8,
                                maxHeight: 260,
                                marginBottom: 18,
                                maskImage: W,
                                WebkitMaskImage: W
                            },
                            className: a(394112).A5,
                            children: [(0, n.jsx)(a(558045).A, {
                                type: a(558045).O.Vertical,
                                initialFocus: 0,
                                sections: [{
                                    key: "existingSyncs",
                                    render: e => (0, n.jsx)(a(844565).A, {
                                        topBorder: !1,
                                        ...e,
                                        style: y.style5
                                    }),
                                    items: ea
                                }],
                                style: y.style4
                            }), s ? (0, n.jsx)(a(95582).A, {
                                style: { ...y.teamSpaceItemStyle,
                                    ...s.id === (null == d ? void 0 : d.teamStore.id) && !(null != d && d.pageId) && y.teamSpaceItemFocussedStyle
                                },
                                buttonStyle: y.teamSpaceItemButtonStyle,
                                onClick: () => {
                                    c({
                                        pageId: null,
                                        teamStore: s
                                    })
                                },
                                icon: (0, n.jsx)("img", {
                                    src: a(896221).A.images.appPackages.jiraProjectIconSvg,
                                    style: y.style0,
                                    alt: "Jira Project Icon"
                                }),
                                title: (0, n.jsx)(a(109939).sA, { ...u.newSync
                                }),
                                focused: !1,
                                right: s.id === (null == d ? void 0 : d.teamStore.id) && !(null != d && d.pageId) && (0, n.jsx)(a(16275).I, {
                                    icon: a(93042).checkmarkCircleFillIcon,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                }),
                                caption: (0, n.jsxs)(n.Fragment, {
                                    children: [_ ? (0, n.jsxs)("div", {
                                        style: y.teamSpaceItemCaption,
                                        children: [(0, n.jsx)("span", {
                                            style: y.style1,
                                            children: (0, n.jsx)(a(109939).sA, { ...u.createdBy
                                            })
                                        }), (0, n.jsx)("span", {
                                            style: y.style2,
                                            children: (0, n.jsx)(a(109939).sA, {
                                                defaultMessage: "{name}",
                                                id: "jiraSyncTeamSpaceModal.teamSelection.teamsList.newSync.name",
                                                values: {
                                                    name: _
                                                }
                                            })
                                        })]
                                    }) : void 0, (0, n.jsxs)("div", {
                                        style: y.teamSpaceItemCaption,
                                        children: [(0, n.jsx)(a(109939).sA, {
                                            defaultMessage: "in",
                                            id: "jiraSyncTeamSpaceModal.teamSelection.teamsList.newSync.prefix"
                                        }), (0, n.jsx)(a(729746).x, {
                                            store: s,
                                            size: 20,
                                            disabled: !0
                                        }), (0, n.jsx)(a(541341).j, {
                                            type: "teamStore",
                                            teamStore: s
                                        })]
                                    })]
                                })
                            }) : void 0, (0, n.jsx)(a(656252).A, {
                                popupType: a(986939).A.isMobile ? a(656252).z.SlideUp : a(656252).z.Popup,
                                sameWidthAsOrigin: !0,
                                content: ei,
                                children: e => (0, n.jsx)(a(988022).p, { ...e,
                                    iconLeading: a(581923).plusIcon,
                                    colorPalette: "gray",
                                    style: y.createNewSyncWrapper,
                                    disabled: !1,
                                    children: (0, n.jsx)(a(109939).sA, { ...u.createNewSync
                                    })
                                })
                            })]
                        })]
                    }),
                    er = (0, a(167852).z)();
                return er && !(0, a(94418).e2)(er) ? (0, n.jsx)(k, {
                    handleModalClose: e,
                    caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                    })
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(k, {
                        handleModalClose: e,
                        caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                        })
                    }), (0, n.jsx)("div", {
                        style: y.style6,
                        className: a(394112).A5,
                        children: (0, n.jsxs)("div", {
                            style: y.style7,
                            children: [(0, n.jsx)("label", {
                                style: y.inputLabels,
                                children: (0, n.jsx)(a(111010).D, {
                                    styleKey: "captionMedium",
                                    children: (0, n.jsx)(a(109939).sA, { ...u.siteSelectionDropdownLabel
                                    })
                                })
                            }), (0, n.jsx)(a(346268).c, {
                                size: 6,
                                isHidden: !0
                            }), (0, n.jsx)(M, {
                                connections: p,
                                onChange: e => {
                                    f(e)
                                },
                                selectedConnection: g
                            }), (0, n.jsx)(a(346268).c, {
                                size: 28,
                                isHidden: !0
                            }), z ? (0, n.jsxs)("div", {
                                children: [(0, n.jsx)("label", {
                                    htmlFor: "syncLocation",
                                    style: y.inputLabels,
                                    children: (0, n.jsx)(a(111010).D, {
                                        styleKey: "captionMedium",
                                        children: (0, n.jsx)(a(109939).sA, { ...u.selectSyncLocation
                                        })
                                    })
                                }), (0, n.jsx)(a(346268).c, {
                                    size: 6,
                                    isHidden: !0
                                }), (0, n.jsx)(w, {
                                    environment: r,
                                    canCreateTeamInSpace: P,
                                    existingSyncs: Y,
                                    teamSpaces: Z,
                                    selectedSync: d,
                                    onSelect: e => c(e),
                                    handleCreateTeamCallback: et,
                                    flowId: t
                                }), (0, n.jsx)(a(346268).c, {
                                    size: 6,
                                    isHidden: !0
                                }), (0, n.jsx)("label", {
                                    htmlFor: "syncLocationDescription",
                                    style: y.fieldDescription,
                                    children: (0, n.jsx)(a(111010).D, {
                                        styleKey: "captionRegular",
                                        children: (0, n.jsx)(a(109939).sA, { ...u.syncLocationDescription
                                        })
                                    })
                                })]
                            }) : en, (0, n.jsx)(a(346268).c, {
                                size: 28,
                                isHidden: !0
                            }), z && d && !d.pageId ? (0, n.jsxs)("div", {
                                children: [(0, n.jsx)("label", {
                                    htmlFor: "syncName",
                                    style: y.inputLabels,
                                    children: (0, n.jsx)(a(111010).D, {
                                        styleKey: "captionMedium",
                                        children: (0, n.jsx)(a(109939).sA, { ...u.syncName
                                        })
                                    })
                                }), (0, n.jsx)(a(346268).c, {
                                    size: 6,
                                    isHidden: !0
                                }), (0, n.jsx)(a(36481).p, {
                                    id: "syncName",
                                    value: j,
                                    autoComplete: "off",
                                    autoCapitalize: "off",
                                    onChange: e => {
                                        S(e.target.value)
                                    },
                                    showClearButton: !0,
                                    placeholder: "Sales & Marketing",
                                    inputElementAttributes: {
                                        minLength: 4
                                    },
                                    style: y.inputBox
                                }), j ? (0, n.jsxs)(a(111010).D, {
                                    styleKey: "captionRegular",
                                    children: [(0, n.jsx)(a(346268).c, {
                                        size: 6,
                                        isHidden: !0
                                    }), (0, n.jsxs)("label", {
                                        htmlFor: "syncNameDescription",
                                        style: y.fieldDescription,
                                        children: [(0, n.jsx)(a(109939).sA, { ...u.syncNameDescriptionPrefix
                                        }), (0, n.jsx)("label", {
                                            style: y.syncNameDescription,
                                            children: (0, n.jsx)(a(109939).sA, { ...u.syncNameDescriptionSuffix,
                                                values: {
                                                    syncName: j
                                                }
                                            })
                                        })]
                                    })]
                                }) : void 0, (0, n.jsx)(a(346268).c, {
                                    size: 28,
                                    isHidden: !0
                                })]
                            }) : null]
                        })
                    }), (0, n.jsx)(R, {
                        primaryButton: {
                            text: (0, n.jsx)(a(109939).sA, { ...u.syncCta
                            }),
                            onClick: () => {
                                if (d)
                                    if (a(639675).Ay.setState({ ...a(639675).Ay.state
                                        }), (0, a(104310).u)({
                                            event: {
                                                eventName: "external_sync_teamspace_selection",
                                                eventProperties: {
                                                    integration: "jira",
                                                    flowId: t,
                                                    identifier: null == g ? void 0 : g.site,
                                                    botId: null == g ? void 0 : g.botId,
                                                    teamSpaceId: d.teamStore.id,
                                                    syncType: d.pageId ? "existing" : "new",
                                                    isSyncOwner: $,
                                                    actionType: "teamspace_selection_action"
                                                }
                                            }
                                        }), d.pageId) {
                                        let {
                                            pageId: e,
                                            teamStore: t
                                        } = d, i = a(970831).B.createChildStore(t, {
                                            id: e,
                                            table: "block",
                                            spaceId: T
                                        });
                                        i && X(i)
                                    } else ee(d.teamStore.id)
                            },
                            disabled: !d || z && d && !d.pageId && !j
                        },
                        environment: r,
                        flowId: t
                    }), (0, n.jsx)(h, {
                        loading: K.loading
                    })]
                })
            }

            function x(e) {
                var t;
                let a = null == e ? void 0 : e.split("/");
                return (null == a || null == (t = a[2]) || null == (t = t.split(".")) ? void 0 : t[0]) || ""
            }

            function v(e, t) {
                if (!t) return e;
                if (!t.split(" ").some(e => "projects" === e.toLowerCase())) return `${e} (${t})`;
                if ("projects" === t.toLowerCase().trim()) return e;
                if (t.toLowerCase().endsWith(" projects")) {
                    let a = t.slice(0, -9).trim();
                    return a ? `${e} (${a})` : e
                }
                return `${e} (${t})`
            }

            function j({
                sync: e,
                isSelected: t,
                menuListItemProps: i
            }) {
                let r = (0, a(271218).h)(e.teamStore),
                    o = (0, a(682985).K8)(() => e.teamStore.getName(), [e.teamStore]),
                    s = o ? v(o, e.projectName) : "";
                return (0, n.jsx)(a(95582).A, { ...i,
                    title: s,
                    caption: (0, n.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: (0, n.jsx)("div", {
                            children: (0, n.jsx)(a(109939).sA, { ...u.existingSyncItemCaption,
                                values: {
                                    numberOfMembers: r,
                                    projects: e.projectsCount,
                                    tasks: e.tasksCount
                                }
                            })
                        })
                    }),
                    icon: (0, n.jsx)(a(729746).x, {
                        store: e.teamStore,
                        size: 20,
                        disabled: !0
                    }),
                    right: t ? (0, n.jsx)(a(16275).I, {
                        icon: a(93042).checkmarkCircleFillIcon,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }) : void 0,
                    shouldWrapCaption: !0,
                    focused: !1
                })
            }

            function S({
                teamStore: e,
                disabled: t,
                isSelected: i,
                menuListItemProps: r,
                messages: o
            }) {
                let s = (0, a(271218).h)(e);
                return (0, n.jsx)(a(95582).A, { ...r,
                    title: (0, n.jsx)(a(541341).j, {
                        type: "teamStore",
                        teamStore: e
                    }),
                    caption: t ? (0, n.jsx)(a(109939).sA, { ...o.noEditAccessInTeamspace
                    }) : (0, n.jsx)(a(109939).sA, {
                        defaultMessage: "{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}}",
                        id: "teamPickerButton.teamItem.teamMemberCount",
                        values: {
                            numberOfMembers: s
                        }
                    }),
                    icon: (0, n.jsx)(a(729746).x, {
                        store: e,
                        size: 20,
                        disabled: !0
                    }),
                    right: i ? (0, n.jsx)(a(16275).I, {
                        icon: a(93042).checkmarkCircleFillIcon,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }) : void 0,
                    disabled: t,
                    focused: !1
                })
            }
            let I = {
                card: {
                    flexGrow: 1,
                    borderRadius: 6,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: a(632079).Tj.border.secondary,
                    overflow: "auto",
                    display: "flex"
                },
                createNewTeamspaceWrapper: {
                    margin: "0px 4px 8px",
                    width: "100%"
                },
                canNotCreateTeamSpace: {
                    color: a(632079).Tj.text.secondary,
                    paddingTop: 8,
                    paddingInlineEnd: 14,
                    paddingBottom: 4,
                    paddingInlineStart: 14
                },
                style0: {
                    color: a(632079).Tj.text.tertiary,
                    marginInline: 12
                },
                style1: {
                    margin: 12
                },
                style2: {
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                    width: "100%"
                },
                style3: {
                    padding: 0,
                    gap: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingInline: 0,
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0
                },
                style4: {
                    margin: 8
                }
            };

            function w({
                environment: e,
                canCreateTeamInSpace: t,
                existingSyncs: r,
                teamSpaces: o,
                selectedSync: s,
                onSelect: l,
                handleCreateTeamCallback: d,
                flowId: c
            }) {
                let p = (0, i.useMemo)(() => s ? r.find(e => e.projectId === s.pageId) : null, [r, s]),
                    m = (0, a(682985).K8)(() => p && p.teamStore.getName() || "", [p]),
                    g = null == s ? void 0 : s.teamStore,
                    f = (0, a(271218).h)(g),
                    h = s ? p ? {
                        title: v(m, p.projectName),
                        caption: (0, n.jsx)(a(109939).sA, { ...u.existingSyncItemCaption,
                            values: {
                                numberOfMembers: f,
                                projects: p.projectsCount,
                                tasks: p.tasksCount
                            }
                        }),
                        icon: (0, n.jsx)(a(729746).x, {
                            store: p.teamStore,
                            size: 32,
                            disabled: !0,
                            style: I.style1
                        })
                    } : {
                        title: (0, n.jsx)(a(541341).j, {
                            type: "teamStore",
                            teamStore: s.teamStore
                        }),
                        caption: (0, n.jsx)(a(109939).sA, {
                            defaultMessage: "{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}}",
                            id: "teamPickerButton.teamItem.teamMemberCountForSelectedSync",
                            values: {
                                numberOfMembers: f
                            }
                        }),
                        icon: (0, n.jsx)(a(729746).x, {
                            store: s.teamStore,
                            size: 32,
                            disabled: !0,
                            style: I.style1
                        })
                    } : {
                        title: (0, n.jsx)("div", {
                            style: I.style0,
                            children: (0, n.jsx)(a(109939).sA, { ...u.selectSyncLocation
                            })
                        }),
                        caption: null,
                        icon: null
                    };
                return (0, n.jsx)(a(656252).A, {
                    popupType: a(986939).A.isMobile ? a(656252).z.BottomSheet : a(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 6,
                    content: e => {
                        let i = r.map(t => ({
                                key: `existing-${t.projectId}`,
                                action: () => {
                                    l({
                                        pageId: t.projectId,
                                        teamStore: t.teamStore
                                    }), e.close()
                                },
                                render: e => (0, n.jsx)(j, {
                                    sync: t,
                                    isSelected: (null == s ? void 0 : s.pageId) === t.projectId,
                                    menuListItemProps: e
                                })
                            })),
                            p = o.map(({
                                teamStore: t,
                                disabled: a
                            }) => ({
                                key: `teamspace-${t.id}`,
                                disabled: a,
                                action: () => {
                                    a || (l({
                                        pageId: null,
                                        teamStore: t
                                    }), e.close())
                                },
                                render: e => (0, n.jsx)(S, {
                                    teamStore: t,
                                    disabled: a,
                                    isSelected: (null == s ? void 0 : s.pageId) === null && (null == s ? void 0 : s.teamStore.id) === t.id,
                                    menuListItemProps: e,
                                    messages: u
                                })
                            })),
                            m = [];
                        i.length > 0 && m.push({
                            key: "existing-syncs",
                            render: e => (0, n.jsx)(a(844565).A, { ...e,
                                title: (0, n.jsx)(a(109939).sA, { ...u.existingSyncHeader
                                })
                            }),
                            items: i
                        }), p.length > 0 && m.push({
                            key: "teamspaces",
                            render: e => (0, n.jsx)(a(844565).A, { ...e,
                                title: (0, n.jsx)(a(109939).sA, { ...u.teamspacesSection
                                })
                            }),
                            items: p
                        });
                        let g = a(986939).A.isMobile ? {
                            menuType: a(649476).gu.Modal,
                            title: "Select sync location",
                            right: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "Done",
                                id: "settingItem.buttonPopup.done.label"
                            }),
                            onClickRight: e.close
                        } : {
                            menuType: a(649476).gu.Popup,
                            width: 400,
                            maxHeight: 440
                        };
                        return (0, n.jsxs)(a(747369).A, { ...g,
                            children: [(0, n.jsx)(a(558045).A, {
                                type: a(558045).O.Vertical,
                                sections: m,
                                initialFocus: void 0,
                                onAccept: e.close
                            }), t ? (0, n.jsx)(a(988022).p, {
                                style: I.createNewTeamspaceWrapper,
                                iconLeading: a(581923).plusIcon,
                                colorPalette: "gray",
                                disabled: !1,
                                onClick: () => {
                                    (0, a(198347).v)("jira_importer", {
                                        onClose: t => d(t, e)
                                    }), (0, a(104310).u)({
                                        event: {
                                            eventName: "external_sync_teamspace_selection",
                                            eventProperties: {
                                                integration: "jira",
                                                actionType: "create_new_teamspace_cta_click",
                                                flowId: c
                                            }
                                        }
                                    })
                                },
                                children: (0, n.jsx)(a(109939).sA, { ...u.createTeamSpace
                                })
                            }) : !o.length && (0, n.jsx)(a(111010).D, {
                                styleKey: "captionMedium",
                                style: I.canNotCreateTeamSpace,
                                children: (0, n.jsx)(a(109939).sA, { ...u.canNotCreateTeamSpace
                                })
                            })]
                        })
                    },
                    children: e => (0, n.jsx)("div", {
                        style: I.card,
                        children: (0, n.jsx)(a(95582).A, { ...e,
                            buttonStyle: I.style2,
                            style: I.style3,
                            title: h.title,
                            caption: h.caption,
                            icon: h.icon,
                            right: (0, n.jsx)("div", {
                                style: I.style4,
                                children: (0, n.jsx)(a(16275).I, {
                                    icon: a(469102).arrowChevronSingleDownFillSmallIcon,
                                    size: "sm",
                                    colorVariant: "tertiary"
                                })
                            }),
                            shouldWrapCaption: !0,
                            focused: !1
                        })
                    })
                })
            }
            let A = {
                card: {
                    flexGrow: 1,
                    borderRadius: 6,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: a(632079).Tj.border.secondary,
                    overflow: "auto",
                    display: "flex"
                },
                integrationIcon: {
                    width: 28,
                    height: 28,
                    margin: 12
                },
                chooseSiteButton: {
                    display: "flex",
                    marginTop: 6,
                    marginBottom: 6,
                    marginInlineStart: "-8px",
                    gap: 6,
                    alignItems: "center",
                    width: "fit-content"
                },
                style0: {
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                    width: "100%"
                },
                style1: {
                    padding: 0,
                    gap: 0,
                    paddingInline: 0,
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                },
                style2: {
                    fontWeight: a(699422).Wy.regular,
                    textTransform: "capitalize"
                },
                style3: {
                    fontWeight: a(699422).Wy.regular
                },
                style4: {
                    margin: 8
                }
            };

            function M(e) {
                let {
                    connections: t,
                    selectedConnection: i,
                    onChange: r
                } = e;
                return (0, n.jsx)(a(656252).A, {
                    popupType: a(986939).A.isMobile ? a(656252).z.SlideUp : a(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 6,
                    content: e => {
                        let i, o = t.map(e => ({
                            key: e.site,
                            action: () => {
                                r(e)
                            },
                            render: t => (0, n.jsx)(a(95582).A, { ...t,
                                title: (0, n.jsx)(a(324489).V, {
                                    style: A.style2,
                                    children: x(e.site)
                                }),
                                caption: (0, n.jsx)(a(324489).V, {
                                    isSecondaryColor: !0,
                                    style: A.style3,
                                    children: e.site
                                }),
                                shouldWrapCaption: !0,
                                focused: !1
                            })
                        }));
                        return i = a(986939).A.isMobile ? {
                            menuType: a(649476).gu.Modal,
                            title: "site",
                            right: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "Done",
                                id: "settingItem.buttonPopup.done.label"
                            }),
                            onClickRight: e.close
                        } : {
                            menuType: a(649476).gu.Popup,
                            width: 270
                        }, (0, n.jsx)(a(747369).A, { ...i,
                            children: (0, n.jsx)(a(558045).A, {
                                type: a(558045).O.Vertical,
                                sections: [{
                                    key: "sites",
                                    items: o
                                }],
                                initialFocus: void 0,
                                onAccept: e.close
                            })
                        })
                    },
                    children: e => i ? (0, n.jsx)("div", {
                        style: A.card,
                        children: (0, n.jsx)(a(95582).A, { ...e,
                            buttonStyle: A.style0,
                            style: A.style1,
                            title: (0, n.jsx)(a(324489).V, {
                                style: A.style2,
                                children: x(i.site)
                            }),
                            caption: (0, n.jsx)(a(324489).V, {
                                isSecondaryColor: !0,
                                style: A.style3,
                                children: i.site
                            }),
                            icon: (0, n.jsx)("img", {
                                style: A.integrationIcon,
                                src: a(896221).A.images.externalIntegrations.jiraPng,
                                alt: "Jira Icon"
                            }),
                            right: (0, n.jsx)("div", {
                                style: A.style4,
                                children: (0, n.jsx)(a(16275).I, {
                                    icon: a(469102).arrowChevronSingleDownFillSmallIcon,
                                    size: "sm",
                                    colorVariant: "tertiary"
                                })
                            }),
                            shouldWrapCaption: !0,
                            focused: !1
                        })
                    }) : (0, n.jsx)(a(988022).p, { ...e,
                        size: "lg",
                        style: A.chooseSiteButton,
                        disabled: !1,
                        iconTrailing: {
                            icon: a(469102).arrowChevronSingleDownFillSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        },
                        children: (0, n.jsx)(a(109939).sA, { ...u.chooseJiraSite
                        })
                    })
                })
            }

            function T({
                environment: e,
                requestStore: t,
                spaceStore: r,
                handleModalClose: o,
                flowId: s
            }) {
                let l = (0, a(682985).O$)(a(639675).Ay),
                    d = (0, a(682985).K8)(() => (0, a(23803).X7)(), []),
                    p = (0, a(682985).K8)(() => (0, a(23803).nh)(), []),
                    [m, g] = (0, i.useState)([]),
                    [f, y] = i.useState({
                        site: "",
                        email: "",
                        token: "",
                        username: "",
                        password: "",
                        isScopedToken: !1,
                        cloudId: ""
                    }),
                    b = async () => {
                        let {
                            email: i,
                            site: n,
                            token: o,
                            username: d,
                            password: c,
                            isScopedToken: u = !1,
                            cloudId: m
                        } = f, h = null == r ? void 0 : r.id, y = function(e) {
                            let {
                                email: t,
                                site: i,
                                token: n,
                                username: r,
                                password: o,
                                basicAuthEnabled: s,
                                isScopedToken: d,
                                cloudId: c
                            } = e, u = [];
                            return i && (l.instanceValue !== a(639675).cK.Cloud || (0, a(159065).nH)(i)) || u.push("site"), s ? (r || u.push("username"), o || u.push("password")) : (t && a(159523).t6(t, "email") || u.push("email"), n || u.push("token"), d && !c && u.push("cloudId")), u
                        }({
                            email: i,
                            site: n,
                            token: o,
                            username: d,
                            password: c,
                            basicAuthEnabled: l.instanceValue === a(639675).cK.DataCenter && p && l.authenticationType === a(639675).XT.Basic,
                            isScopedToken: u,
                            cloudId: m
                        });
                        if (g(y), h && !y.length) {
                            let r = (e => {
                                let {
                                    token: t,
                                    username: i,
                                    password: n,
                                    isScopedToken: r = !1,
                                    cloudId: o
                                } = e;
                                return "Basic" === l.authenticationType && l.instanceValue === a(639675).cK.DataCenter ? {
                                    username: i,
                                    password: n,
                                    authType: l.authenticationType,
                                    instance: l.instanceValue,
                                    isScopedToken: !1
                                } : l.instanceValue === a(639675).cK.Cloud && r && o ? {
                                    apiKey: t,
                                    authType: l.authenticationType,
                                    isScopedToken: !0,
                                    instance: a(639675).cK.Cloud,
                                    cloudId: o
                                } : {
                                    apiKey: t,
                                    authType: l.authenticationType,
                                    instance: l.instanceValue,
                                    isScopedToken: !1
                                }
                            })(f);
                            await a(658157).ol({
                                environment: e,
                                requestStore: t,
                                userEmail: i,
                                site: l.instanceValue === a(639675).cK.Cloud ? `https://${(0,a(159065).nH)(n)}` : n,
                                spaceId: h,
                                flowId: s,
                                authInfo: r
                            })
                        }
                    },
                    x = (0, a(167852).z)();
                return x && !(0, a(94418).e2)(x) ? (0, n.jsx)(k, {
                    handleModalClose: o,
                    caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                    })
                }) : (0, n.jsxs)(a(4458).VP, {
                    children: [(0, n.jsx)(k, {
                        handleModalClose: o,
                        caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                        })
                    }), (0, n.jsx)(c, {
                        formValues: f,
                        onChange: (e, t) => {
                            y({ ...f,
                                [e]: t
                            }), g(t => t.filter(t => t !== e))
                        },
                        invalidFields: m,
                        jiraDataCenterEnabled: d,
                        jiraDataCenterBasicAuthEnabled: p
                    }), (0, n.jsx)(R, {
                        primaryButton: {
                            text: (0, n.jsx)(a(109939).sA, { ...u.continueCta
                            }),
                            onClick: async () => {
                                await b()
                            }
                        },
                        environment: e,
                        flowId: s
                    }), (0, n.jsx)(h, {
                        loading: l.loading
                    })]
                })
            }
            let C = {
                wrapper: {
                    marginBottom: 28
                },
                title: {
                    textAlign: "center",
                    fontSize: "26px",
                    fontWeight: a(699422).Wy.bold,
                    color: a(632079).Tj.text.primary,
                    lineHeight: "32px",
                    marginTop: 8
                },
                closeButton: {
                    position: "absolute",
                    top: 14,
                    insetInlineEnd: 14,
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                    background: a(632079).Tj.buttonHoveredBackground,
                    width: 20,
                    height: 20
                },
                closeButtonHover: {
                    background: a(632079).Tj.buttonPressedBackground
                },
                closeButtonIcon: {
                    width: a(104509).Ev.xs,
                    height: a(104509).Ev.xs,
                    fill: a(632079).Tj.text.secondary
                }
            };

            function k({
                handleModalClose: e,
                caption: t,
                title: i
            }) {
                let r = (0, a(682985).K8)(() => a(639675).Ay.state.instanceValue, []),
                    o = (0, a(109939).tz)(),
                    s = i || u.headerTitle,
                    l = r === a(639675).cK.DataCenter ? "collection_synced_database_jira_datacenter" : "collection_synced_database_jira";
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a(374533).A, {
                        onClick: e,
                        style: C.closeButton,
                        hoveredStyle: C.closeButtonHover,
                        icon: a(25094).xMarkSmallIcon,
                        iconStyle: C.closeButtonIcon,
                        ariaLabel: o.formatMessage({
                            id: "jiraSyncTeamSpaceModal.header.closeButton.ariaLabel",
                            defaultMessage: "Close"
                        })
                    }), (0, n.jsx)(a(720722).m, {
                        integrationIconUrl: a(896221).A.images.externalIntegrations.jiraPng,
                        title: (0, n.jsx)(a(109939).sA, { ...s
                        }),
                        description: t,
                        styles: {
                            wrapper: C.wrapper,
                            header: C.title
                        }
                    }), (0, n.jsx)(a(960235).z, {
                        featureName: l,
                        source: "collection_synced_database",
                        collectionContextStore: void 0
                    })]
                })
            }

            function P(e) {
                return (0, n.jsx)("div", {
                    children: e.children
                })
            }
            let B = {
                learnMoreText: {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    color: a(632079).Tj.text.secondary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 12,
                    fontWeight: a(699422).Wy.medium
                },
                style0: {
                    marginBottom: 24
                },
                style1: {
                    width: "100%"
                }
            };

            function R({
                primaryButton: e,
                environment: t,
                flowId: i
            }) {
                return (0, n.jsx)(P, {
                    children: (0, n.jsxs)("div", {
                        style: B.style0,
                        children: [(0, n.jsx)(a(912946).A, {
                            colorPalette: "blue",
                            onClick: e.onClick,
                            style: B.style1,
                            disabled: e.disabled,
                            children: e.text
                        }), (0, n.jsx)(a(68774).N, {
                            className: "notion-print-ignore",
                            href: (0, a(442564).x)("guides.externalImportAndSync"),
                            external: !0,
                            onClick: () => {
                                (0, a(104310).u)({
                                    event: {
                                        eventName: "external_sync_setup_action",
                                        eventProperties: {
                                            integration: "jira",
                                            actionType: "learn_more_cta_click",
                                            flowId: i
                                        }
                                    }
                                })
                            },
                            children: (0, n.jsx)(a(988022).p, {
                                iconLeading: {
                                    icon: a(211052).questionMarkCircleSmallIcon,
                                    size: "sm"
                                },
                                colorPalette: "gray",
                                size: "md",
                                style: B.learnMoreText,
                                ignoreLocalHoverState: !0,
                                children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncHelpLink
                                })
                            })
                        })]
                    })
                })
            }
            let _ = {
                    caption: {
                        color: a(632079).Tj.text.tertiary
                    },
                    style0: {
                        marginBottom: 6
                    }
                },
                D = i.forwardRef(function(e, t) {
                    let {
                        teamStore: i,
                        onAccept: r,
                        focused: o,
                        disabled: s,
                        showCurrentTeamSpaceBadge: l
                    } = e, d = (0, a(960253).I)(() => ({
                        disabledHeaderLabel: {
                            color: s ? a(632079).Tj.text.secondary : void 0
                        }
                    }), [s]), c = (0, a(271218).h)(i);
                    return (0, n.jsx)(a(95582).A, {
                        focused: o,
                        ref: t,
                        disabled: s,
                        onClick: e => r(i),
                        buttonStyle: _.style0,
                        icon: (0, n.jsx)(a(729746).x, {
                            store: i,
                            size: 20,
                            disabled: !0
                        }),
                        title: (0, n.jsxs)(a(4458).fI, {
                            gap: 8,
                            children: [(0, n.jsx)(a(541341).j, {
                                type: "teamStore",
                                teamStore: i,
                                style: d.disabledHeaderLabel
                            }), l ? (0, n.jsx)("div", {
                                children: (0, n.jsx)(a(746434).E, {
                                    content: (0, n.jsx)(a(109939).sA, { ...u.currentTeamspace
                                    })
                                })
                            }) : void 0]
                        }),
                        caption: (0, n.jsx)("div", {
                            style: _.caption,
                            children: s ? (0, n.jsx)(a(109939).sA, { ...u.noEditAccessInTeamspace
                            }) : (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}}",
                                id: "teamPickerButton.teamItem.teamMemberCount",
                                values: {
                                    numberOfMembers: c
                                }
                            })
                        })
                    })
                }),
                N = {
                    content: {
                        fontSize: a(699422).J.UIRegular.desktop,
                        textAlign: "center",
                        fontWeight: a(699422).Wy.regular,
                        marginBottom: 16
                    },
                    learnMore: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 24,
                        color: a(632079).Tj.text.secondary
                    },
                    footerCta: {
                        width: "100%",
                        height: 32
                    }
                };

            function z(e) {
                let {
                    handleModalClose: t,
                    environment: i
                } = e, {
                    sidebarSpaceStore: r,
                    currentUserSettingsStore: o
                } = (0, a(682985).K8)(() => ({
                    sidebarSpaceStore: (0, a(328765).S)(),
                    currentUserSettingsStore: a(728372).AppStoreCurrentUserSettingsStore.state
                }), []), s = (0, a(682985).K8)(() => r ? (0, a(742197).G)(i, r) : "", [i, r]), l = (0, a(682985).K8)(() => (0, a(128729).p)(r), [r]), d = (0, a(167852).z)(), c = () => {
                    o && ((0, a(377796).createAndCommit)({
                        userAction: "jiraSyncSetupDismissedAt",
                        environment: i,
                        canUndo: !0,
                        cellTarget: "main",
                        userId: o.id,
                        perform: e => {
                            (0, a(862759).m)({
                                userSettingsStore: o,
                                data: {
                                    jira_sync_guide_dismissed_at: Date.now()
                                },
                                transaction: e
                            })
                        }
                    }), a(667932).j({
                        environment: i,
                        from: "sync_guide"
                    }))
                };
                return d && !(0, a(94418).e2)(d) ? (0, n.jsx)(k, {
                    handleModalClose: t,
                    caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                    })
                }) : l ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(k, {
                        handleModalClose: t,
                        caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("div", {
                            style: N.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncTutorialHeading
                            })
                        }), (0, n.jsx)("div", {
                            style: N.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncTutorialAdminContent,
                                values: {
                                    spaceName: s
                                }
                            })
                        }), (0, n.jsxs)(a(68774).N, {
                            className: "notion-print-ignore",
                            href: (0, a(442564).x)("guides.externalImportAndSync"),
                            external: !0,
                            style: N.learnMore,
                            children: [(0, n.jsx)(a(16275).I, {
                                icon: a(211052).questionMarkCircleSmallIcon,
                                size: "sm"
                            }), (0, n.jsx)(a(109939).sA, { ...u.learnMore
                            })]
                        })]
                    }), (0, n.jsx)(P, {
                        children: (0, n.jsx)(a(912946).A, {
                            colorPalette: "blue",
                            onClick: c,
                            style: N.footerCta,
                            children: (0, n.jsx)(a(109939).sA, { ...u.getStarted
                            })
                        })
                    })]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(k, {
                        handleModalClose: t,
                        caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("div", {
                            style: N.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncTutorialHeading
                            })
                        }), (0, n.jsx)("div", {
                            style: N.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncTutorialMemberContent,
                                values: {
                                    spaceName: s
                                }
                            })
                        }), (0, n.jsxs)(a(68774).N, {
                            className: "notion-print-ignore",
                            href: (0, a(442564).x)("guides.externalImportAndSync"),
                            external: !0,
                            style: N.learnMore,
                            children: [(0, n.jsx)(a(16275).I, {
                                icon: a(211052).questionMarkCircleSmallIcon,
                                size: "sm"
                            }), (0, n.jsx)(a(109939).sA, { ...u.learnMore
                            })]
                        })]
                    }), (0, n.jsx)(P, {
                        children: (0, n.jsx)(a(912946).A, {
                            colorPalette: "blue",
                            onClick: c,
                            style: N.footerCta,
                            children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncTutorialRequestAccess
                            })
                        })
                    })]
                })
            }
            let L = {
                content: {
                    fontSize: a(699422).J.UIRegular.desktop,
                    textAlign: "center",
                    fontWeight: a(699422).Wy.regular,
                    marginBottom: 16
                },
                learnMore: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 24,
                    color: a(632079).Tj.text.secondary
                },
                footerCta: {
                    width: "100%",
                    height: 32
                }
            };

            function E(e) {
                let {
                    handleModalClose: t,
                    environment: i
                } = e, r = (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore), o = (0, a(167852).z)();
                return o && !(0, a(94418).e2)(o) ? (0, n.jsx)(k, {
                    handleModalClose: t,
                    caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                    })
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(k, {
                        handleModalClose: t,
                        title: u.improveJiraSyncHeaderTitle,
                        caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("div", {
                            style: L.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.improveYourJiraSyncTutorialHeading
                            })
                        }), (0, n.jsx)("div", {
                            style: L.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.improveYourJiraSyncTutorialContent
                            })
                        }), (0, n.jsxs)(a(68774).N, {
                            className: "notion-print-ignore",
                            href: (0, a(442564).x)("guides.externalImportAndSync"),
                            external: !0,
                            style: L.learnMore,
                            children: [(0, n.jsx)(a(16275).I, {
                                icon: a(211052).questionMarkCircleSmallIcon,
                                size: "sm"
                            }), (0, n.jsx)(a(109939).sA, { ...u.learnMore
                            })]
                        })]
                    }), (0, n.jsx)(P, {
                        children: (0, n.jsx)(a(912946).A, {
                            colorPalette: "blue",
                            onClick: () => {
                                r && ((0, a(377796).createAndCommit)({
                                    userAction: "jiraSyncSetupDismissedAt",
                                    environment: i,
                                    canUndo: !0,
                                    cellTarget: "main",
                                    userId: r.id,
                                    perform: e => {
                                        (0, a(862759).m)({
                                            userSettingsStore: r,
                                            data: {
                                                jira_sync_guide_dismissed_at: Date.now()
                                            },
                                            transaction: e
                                        })
                                    }
                                }), a(667932).j({
                                    environment: i,
                                    from: "improve_jira_sync_guide",
                                    action: "add_account"
                                }))
                            },
                            style: L.footerCta,
                            children: (0, n.jsx)(a(109939).sA, { ...u.getStarted
                            })
                        })
                    })]
                })
            }
            let H = {
                content: {
                    fontSize: a(699422).J.UIRegular.desktop,
                    textAlign: "center",
                    fontWeight: a(699422).Wy.regular,
                    marginBottom: 16,
                    color: a(632079).Tj.text.primary
                },
                learnMoreCta: {
                    marginBottom: 8,
                    width: "100%"
                },
                closeCta: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                },
                learnMore: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                    color: a(632079).Tj.text.primary
                },
                box: {
                    border: `1px solid ${a(632079).Tj.border.secondary}`,
                    padding: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    marginBottom: 24,
                    borderRadius: 6,
                    flexGrow: 1,
                    overflow: "scroll",
                    maxHeight: 120
                }
            };

            function V(e) {
                let {
                    handleModalClose: t,
                    environment: i
                } = e, r = (0, a(972740).L)(), o = (0, a(682985).K8)(() => r ? (0, a(742197).G)(i, r) : "", [i, r]), {
                    workspaceOwners: s
                } = (0, a(413297).P)({
                    spaceStore: r
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(k, {
                        handleModalClose: t,
                        caption: (0, n.jsx)(a(109939).sA, { ...u.headerSubtitle
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("div", {
                            style: H.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncTutorialHeading
                            })
                        }), (0, n.jsx)("div", {
                            style: H.content,
                            children: (0, n.jsx)(a(109939).sA, { ...u.jiraSyncTutorialRequestAccessContent,
                                values: {
                                    spaceName: o
                                }
                            })
                        }), (0, n.jsx)("div", {
                            style: H.box,
                            className: a(394112).A5,
                            children: s.map(e => (0, n.jsx)(a(241075).A, {
                                actorStore: e
                            }, e.id))
                        })]
                    }), (0, n.jsx)(P, {
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(a(548436).A, {
                                size: "lg",
                                style: H.learnMoreCta,
                                children: (0, n.jsxs)(a(68774).N, {
                                    className: "notion-print-ignore",
                                    href: (0, a(442564).x)("guides.externalImportAndSync"),
                                    external: !0,
                                    style: H.learnMore,
                                    children: [(0, n.jsx)(a(16275).I, {
                                        icon: a(211052).questionMarkCircleSmallIcon,
                                        size: "sm"
                                    }), (0, n.jsx)(a(109939).sA, { ...u.learnMore
                                    })]
                                })
                            }), (0, n.jsx)(a(988022).p, {
                                onClick: t,
                                style: H.closeCta,
                                children: (0, n.jsx)(a(109939).sA, { ...u.modalClose
                                })
                            })]
                        })
                    })]
                })
            }
        },
        79268: (e, t, a) => {
            a.d(t, {
                C: () => n
            });
            var i = a(296540);

            function n({
                upsell: e,
                source: t,
                buttonDisplayType: r,
                onClickBeforeUpgradeAction: o,
                postUpgradeCallback: s,
                spaceStore: l
            }) {
                let d = (0, a(533992).v3)(),
                    c = (0, a(855021).q)(),
                    u = (0, a(226309)._3)({
                        spaceId: null == l ? void 0 : l.id
                    }),
                    p = (0, a(345776).T)(),
                    {
                        campaign: m,
                        loading: g
                    } = (0, a(435276).V)(t),
                    [f, h] = function(e) {
                        let {
                            upsell: t
                        } = e, n = (0, a(533992).v3)(), r = (0, a(972740).L)(), o = (0, a(993077).U2)(), s = null == r ? void 0 : r.id, l = (0, a(345776).T)(), d = (0, a(226309).lh)({
                            spaceId: s
                        }), c = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, u = (0, a(682985).K8)(() => {
                            if (s) return a(477870).L.getData(n, {
                                spaceId: s
                            })
                        }, [n, s]), p = (0, a(682985).K8)(() => (0, a(966458).Jg)({
                            product: c,
                            userId: l,
                            billingData: d,
                            spaceStore: r,
                            spaceUserStore: o,
                            existingRequests: u
                        }), [c, l, d, r, o, u]), [m, g] = (0, i.useState)(p);
                        return (0, i.useEffect)(() => {
                            g(p)
                        }, [p]), [m, g]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    y = (0, a(682985).K8)(() => e ? (0, a(96495).a)({
                        environment: d,
                        upsell: e,
                        spaceStore: l,
                        salesStatus: c,
                        campaign: m,
                        requestState: f,
                        billingData: u,
                        source: t,
                        loading: g
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [l, d, e, c, m, f, u, t, g]),
                    b = (0, i.useCallback)(async () => {
                        if (!e) return;
                        let i = "product" === e.type ? e.product : void 0,
                            n = (0, a(555676).x)();
                        if (!n) return;
                        let [, {
                            getUpgradeSystemAction: c
                        }] = await Promise.all([null == o ? void 0 : o(), n()]), g = c(y);
                        await g({
                            source: t,
                            spaceStore: l,
                            product: i,
                            billingData: u,
                            environment: d,
                            setRequestState: h,
                            userId: p,
                            buttonDisplayType: r,
                            postUpgradeCallback: s,
                            campaign: m,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, o, y, t, l, u, d, h, p, r, s, m]);
                return {
                    upgradeEligibility: y,
                    handleClick: b
                }
            }
        },
        82002: (e, t, a) => {
            a.d(t, {
                h: () => l
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    "search-modal": {
                        maxNumberOfShimmers: 8,
                        hideBorders: !1,
                        hidePathText: !1,
                        size: "md"
                    },
                    "search-modal-minimal": {
                        maxNumberOfShimmers: 8,
                        hideBorders: !0,
                        hidePathText: !1,
                        size: "md"
                    },
                    "mention-menu-page": {
                        maxNumberOfShimmers: 3,
                        hideBorders: !0,
                        hidePathText: !1,
                        size: "sm"
                    },
                    "mention-menu-people": {
                        maxNumberOfShimmers: 3,
                        hideBorders: !0,
                        hidePathText: !0,
                        size: "sm"
                    }
                },
                o = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5
                };

            function s(e) {
                let {
                    isLastShimmer: t,
                    variant: s
                } = e, {
                    hideBorders: l,
                    hidePathText: d,
                    size: c
                } = r[s], u = (0, i.useMemo)(() => (0, a(381453).XM)(["30%", "45%", "55%", "60%", "70%", "75%", "80%", "90%"]), []), p = (0, i.useMemo)(() => (0, a(381453).XM)(["10%", "15%", "20%", "25%", "30%", "35%", "55%", "70%"]), []), m = (0, a(960253).I)(() => {
                    let {
                        titleHeight: e,
                        pathHeight: i,
                        iconSize: n,
                        iconMarginInlineStart: r,
                        containerMarginBottom: o
                    } = "md" === c ? {
                        titleHeight: 18,
                        pathHeight: 12,
                        iconSize: a(104509).Ev.default,
                        iconMarginInlineStart: 6,
                        containerMarginBottom: 10
                    } : {
                        titleHeight: 14,
                        pathHeight: 10,
                        iconMarginInlineStart: 4,
                        iconSize: 18,
                        containerMarginBottom: 8
                    };
                    return {
                        resultContainer: {
                            display: "flex",
                            gap: 10,
                            boxShadow: l || t ? void 0 : `0 1px 0 ${a(632079).Tj.border.secondaryTranslucent}`,
                            marginTop: 8,
                            marginInlineEnd: 8,
                            marginBottom: o,
                            marginInlineStart: 6,
                            paddingBottom: 10 * !l
                        },
                        icon: {
                            width: n,
                            height: n,
                            borderRadius: 5,
                            marginInlineStart: r
                        },
                        title: {
                            height: e,
                            borderRadius: 5,
                            width: u
                        },
                        path: {
                            height: i,
                            borderRadius: 5,
                            width: p
                        }
                    }
                }, [l, t, u, p, c]);
                return (0, n.jsxs)("div", {
                    style: m.resultContainer,
                    children: [(0, n.jsx)(a(795830).P, {
                        style: m.icon
                    }), (0, n.jsxs)("div", {
                        style: o,
                        children: [(0, n.jsx)(a(795830).P, {
                            style: m.title
                        }), d ? void 0 : (0, n.jsx)(a(795830).P, {
                            style: m.path
                        })]
                    })]
                })
            }

            function l(e) {
                let {
                    resultsCount: t,
                    shouldShow: a,
                    variant: o
                } = e, {
                    maxNumberOfShimmers: l
                } = r[o], d = a ? Math.max(0, l - t) : 0;
                return (0, i.useMemo)(() => Array.from({
                    length: d
                }, (e, t) => ({
                    key: `shimmer-item-${t}`,
                    action: () => {},
                    render: () => (0, n.jsx)(s, {
                        isLastShimmer: t === d - 1,
                        variant: o
                    })
                })), [d, o])
            }
        },
        84697: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowSquarePathUpDownIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.64 3.12 18.71 13.76",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.475 3.125a.625.625 0 1 0 0 1.25h7.975c.65 0 1.175.526 1.175 1.175v6.057l-1.408-1.408a.625.625 0 1 0-.884.884l2.475 2.475a.625.625 0 0 0 .884 0l2.475-2.475a.625.625 0 0 0-.884-.884l-1.408 1.408V5.55a2.425 2.425 0 0 0-2.425-2.425zM3.308 6.442a.625.625 0 0 1 .884 0l2.475 2.475a.625.625 0 1 1-.884.884L4.375 8.393v6.057c0 .649.526 1.175 1.175 1.175h7.975a.625.625 0 0 1 0 1.25H5.55a2.425 2.425 0 0 1-2.425-2.425V8.393L1.717 9.801a.625.625 0 1 1-.884-.884z"
                    })
                },
                n = (0, a(104509).wt)("arrowSquarePathUpDown", i, "default")
        },
        85071: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                integrationIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                n = (0, a(104509).wt)("integration", i, "default")
        },
        93042: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkCircleFillIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m10.5-2.018a.625.625 0 1 0-1.071-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                    })
                },
                n = (0, a(104509).wt)("checkmarkCircleFill", i, "fill")
        },
        104361: (e, t, a) => {
            a.d(t, {
                d: () => n
            });
            let i = {
                orange: "orange",
                purple: "purple",
                pink: "pink"
            };

            function n({
                disableExposureLogging: e
            }) {
                return i[(0, a(604306).r)("nus_trial_button_color", {
                    disableExposureLogging: e
                })]
            }
        },
        124108: (e, t, a) => {
            a.d(t, {
                N: () => s
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    alignItems: "center",
                    borderRadius: a(986939).A.isMobile ? 12 : 6,
                    boxShadow: void 0,
                    display: "flex",
                    flexShrink: 0,
                    fontSize: a(986939).A.isMobile ? 16 : 14,
                    fontWeight: a(699422).Wy.medium,
                    height: a(986939).A.isMobile ? 48 : 32,
                    justifyContent: "center",
                    lineHeight: 1.2,
                    paddingInlineStart: a(986939).A.isMobile ? 20 : 12,
                    paddingInlineEnd: a(986939).A.isMobile ? 20 : 12,
                    whiteSpace: "nowrap"
                },
                o = {
                    destructiveButtonDefault: { ...r,
                        background: a(632079).Tj.red.background.accentPrimary,
                        color: a(632079).oZ.white,
                        fill: a(632079).oZ.lightTextColor
                    },
                    destructiveButtonHovered: {
                        background: "rgba(235, 87, 87, 0.8)"
                    },
                    destructiveButtonPressed: {
                        background: a(632079).oZ.red
                    },
                    primaryButtonDefault: { ...r,
                        background: a(632079).Tj.blue.background.accentPrimary,
                        color: a(632079).oZ.white,
                        fill: a(632079).oZ.lightTextColor
                    },
                    primaryButtonHovered: {
                        background: a(632079).Tj.blueButtonHoveredBackground
                    },
                    primaryButtonPressed: {
                        background: a(632079).Tj.blueButtonPressedBackground
                    },
                    secondaryButtonDefault: { ...r,
                        color: a(632079).Tj.text.secondary,
                        fill: a(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...r,
                        background: "transparent",
                        color: a(632079).Tj.text.primary,
                        fill: a(632079).Tj.text.primary
                    },
                    plainButtonHovered: {
                        background: a(632079).Tj.whiteButtonHoveredBackground
                    },
                    plainButtonPressed: {
                        background: a(632079).Tj.whiteButtonPressedBackground
                    },
                    outlineButtonDefault: { ...r,
                        background: a(632079).Tj.whiteButtonBackground,
                        color: a(632079).Tj.text.primary,
                        fill: a(632079).Tj.text.primary,
                        border: `1px solid ${a(632079).Tj.border.primary}`
                    },
                    outlineButtonHovered: {
                        background: a(632079).Tj.whiteButtonHoveredBackground
                    },
                    outlineButtonPressed: {
                        background: a(632079).Tj.whiteButtonPressedBackground
                    },
                    blackButtonDefault: { ...r,
                        background: a(632079).Tj.primaryBlack,
                        color: a(632079).oZ.white,
                        fill: a(632079).Tj.primaryBlack
                    },
                    blackButtonHovered: {
                        background: a(632079).oZ.frontBlackButtonBackgroundHovered
                    },
                    blackButtonPressed: {
                        background: a(632079).oZ.frontBlackButtonBackgroundPressed
                    },
                    style0: {
                        marginInlineEnd: 4
                    }
                };

            function s(e) {
                let {
                    buttonInfo: t,
                    ...r
                } = e, s = (0, i.useContext)(a(19187).e), l = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, i.useMemo)(() => ({
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
                    let e = t.label ? ? (0, n.jsx)(a(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        i = t.combinedStyles ? ? d.dismiss;
                    return (0, n.jsx)(a(64960).Ay, {
                        style: null == i ? void 0 : i.default,
                        hoveredStyle: null == i ? void 0 : i.hovered,
                        pressedStyle: null == i ? void 0 : i.pressed,
                        onClick: s,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        i = t.combinedStyles ? ? d[e];
                    return (0, n.jsxs)(a(64960).Ay, {
                        style: { ...null == i ? void 0 : i.default,
                            ...l
                        },
                        hoveredStyle: null == i ? void 0 : i.hovered,
                        pressedStyle: null == i ? void 0 : i.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...r,
                        children: [t.isLoading ? (0, n.jsx)(a(517334).k, {
                            style: o.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        151710: (e, t, a) => {
            a.d(t, {
                Jv: () => d,
                Rl: () => c,
                mA: () => l
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    padding: "1px 4px",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 1
                },
                o = function() {
                    return (0, n.jsx)(a(746434).E, {
                        color: "purple",
                        style: r,
                        content: (0, n.jsx)(a(109939).sA, {
                            defaultMessage: "AI",
                            id: "database.property.aiAutofillEnabledIndicator"
                        })
                    })
                },
                s = {
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
                l = i.memo(function(e) {
                    let {
                        badge: t,
                        className: i,
                        dragHandleStyle: r,
                        hideName: o,
                        iconSize: l,
                        iconStyle: d,
                        labelSizeVariant: u,
                        propertySchema: p,
                        showDragIcon: m,
                        showIcon: g,
                        style: f,
                        textRef: h
                    } = e, y = (0, a(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "120%",
                            minWidth: 0,
                            fontSize: a(986939).A.isMobile ? 16 : 14,
                            gap: "small" === u ? 2 : 6,
                            ...f
                        },
                        iconWrapper: {
                            display: "grid",
                            justifyContent: "center",
                            alignItems: "center",
                            position: e.showIntegrationIconOverlay ? "relative" : void 0,
                            ...d
                        },
                        dragHandle: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!!m,
                            transition: `opacity ${a(153262).bM}`
                        },
                        itemIcon: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!m,
                            transition: `opacity ${a(153262).bM}`
                        }
                    }), [d, u, m, f, e.showIntegrationIconOverlay]);
                    return (0, n.jsxs)("div", {
                        className: i,
                        style: y.container,
                        children: [g ? (0, n.jsxs)("div", {
                            style: y.iconWrapper,
                            children: [(0, n.jsx)("div", {
                                style: y.itemIcon,
                                children: (0, n.jsx)(c, {
                                    propertySchema: p,
                                    iconSize: l,
                                    iconStyle: d
                                })
                            }), e.showIntegrationIconOverlay ? (0, n.jsx)("div", {
                                style: s,
                                children: e.showIntegrationIconOverlay
                            }) : void 0, (0, n.jsx)("div", {
                                style: y.dragHandle,
                                children: (0, n.jsx)(a(544954).t, {
                                    wrapperStyle: r
                                })
                            })]
                        }) : void 0, o ? void 0 : (0, n.jsx)("div", {
                            ref: h,
                            style: a(699422).RC,
                            children: p.name
                        }), t]
                    })
                });

            function d(e) {
                let {
                    propertySchema: t
                } = e, i = a(9247).YE(t), {
                    shouldShowLegacyAutofill: r
                } = (0, a(251955).D)({
                    aiInference: i
                });
                return (0, a(682985).K8)(() => (0, a(576348).O0)() && a(9247).$M(t) && a(9247).om(t) && r, [r, t]) ? (0, n.jsx)(o, {}) : null
            }

            function c(e) {
                let {
                    propertySchema: t,
                    iconSize: i,
                    iconStyle: r
                } = e, o = (0, a(960253).e)(), s = a(986939).A.isMobile ? 18 : 16;
                return (0, n.jsx)(a(221535).zB, {
                    type: t.type,
                    icon: t.icon,
                    size: i || s,
                    theme: a(632079).Tj,
                    themeMode: o,
                    style: r
                })
            }
        },
        153262: (e, t, a) => {
            a.d(t, {
                Jg: () => n,
                bM: () => i,
                hG: () => r,
                ic: () => o
            });
            let i = "150ms ease";

            function n() {
                return {
                    borderRadius: 6
                }
            }
            let r = a(986939).A.isMobile ? {} : { ...n(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${i}`
            };

            function o() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        156139: (e, t, a) => {
            a.d(t, {
                e: () => d
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var i = a(296540),
                n = a(474848);
            let r = {
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
                        button: () => (0, n.jsx)(a(517334).k, {}),
                        text: () => (0, n.jsx)(a(517334).k, {}),
                        icon: () => (0, n.jsx)(a(517334).k, {})
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
                            renderTextHighlight: n
                        }) => {
                            let r = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.addCreditsText",
                                defaultMessage: "<highlight>Add credits</highlight>"
                            }, {
                                highlight: (...e) => n ? n(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.text",
                                defaultMessage: "<highlight>Upgrade</highlight> {hasProductDisplayName, select, true {to {productName}} other {for access}}"
                            }, {
                                highlight: (...e) => n ? n(e) : e,
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let n = (0, a(327506).T)({
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
                                hasProductDisplayName: !!n,
                                productName: n
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
                            renderTextHighlight: n
                        }) => {
                            let r = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.requestCredits.text",
                                defaultMessage: "<highlight>Request credits</highlight>"
                            }, {
                                highlight: (...e) => n ? n(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.request.text",
                                defaultMessage: "<highlight>Request</highlight> {hasProductDisplayName, select, true {access to {productName}} other {access}}"
                            }, {
                                highlight: (...e) => n ? n(e) : e,
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let n = (0, a(327506).T)({
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
                                hasProductDisplayName: !!n,
                                productName: n
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
                            renderTextHighlight: n
                        }) => {
                            let r = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.not.eligible.credits.text",
                                defaultMessage: "<highlight>Add credits</highlight>"
                            }, {
                                highlight: (...e) => n ? n(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.text",
                                defaultMessage: "<highlight>Upgrade</highlight> {hasProductDisplayName, select, true {to {productName}} other {for access}}"
                            }, {
                                highlight: (...e) => n ? n(e) : e,
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let n = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return e.formatMessage({
                                id: "upgrade.iconTooltip",
                                defaultMessage: "Upgrade {hasProductDisplayName, select, true {to {productName}} other {}} for access"
                            }, {
                                hasProductDisplayName: !!n,
                                productName: n
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
                            renderTextHighlight: r
                        }) => {
                            let s = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.requestPending.credits.text",
                                defaultMessage: "<highlight>Credits requested</highlight>"
                            }, {
                                highlight: (...e) => r ? r(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.requestPending.text",
                                defaultMessage: "<highlight>Requested</highlight>{space}{hasProductDisplayName, select, true {access to {productName}} other {access}}{space}is{space}<highlight>pending</highlight>"
                            }, {
                                highlight: (...e) => r ? r(e) : e,
                                space: (0, n.jsx)(n.Fragment, {
                                    children: " "
                                }),
                                hasProductDisplayName: !!s,
                                productName: s
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let n = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return e.formatMessage({
                                id: "upgrade.requestPending.iconTooltip",
                                defaultMessage: "Requested {hasProductDisplayName, select, true {access to {productName}} other {access}} is pending"
                            }, {
                                hasProductDisplayName: !!n,
                                productName: n
                            })
                        }
                    },
                    disabledTooltip: ({
                        intl: e,
                        upsell: t,
                        featureName: i
                    }) => {
                        let n = (0, a(327506).T)({
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
                            hasProductDisplayName: !!n,
                            productName: n
                        })
                    }
                }
            };

            function o(e) {
                return "product" === e.type && "ai_credit_pack" === e.product
            }

            function s(e, t) {
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
            let l = new Set(["eligible_to_purchase", "eligible_to_request"]);

            function d(e) {
                let t = l.has(e),
                    n = (0, a(214665).r)({
                        disableExposureLogging: !t
                    }),
                    o = "eligible_for_trial" === e,
                    d = (0, a(104361).d)({
                        disableExposureLogging: !o
                    });
                return i.useMemo(() => {
                    let a = r[e];
                    return t ? s(a, n) : o && void 0 !== d ? s(a, d) : a
                }, [e, n, d, t, o])
            }
        },
        167834: (e, t, a) => {
            a.d(t, {
                W: () => s,
                e: () => o
            }), a(296540);
            var i = a(474848);
            let n = (0, a(109939).YK)({
                    me: {
                        id: "templateVariablePropertyValueComponent.templateVariables.text.me",
                        defaultMessage: "Person who duplicated page"
                    },
                    now: a(632754).H.nowText,
                    today: a(632754).H.todayText
                }),
                r = {
                    lineHeight: "20px"
                };

            function o(e) {
                return (0, i.jsx)(a(361724).C, {
                    fontColor: "light",
                    style: r,
                    children: (0, i.jsx)(s, {
                        templateVariableType: e.templateVariableType
                    })
                })
            }

            function s(e) {
                var t, r;
                let o, {
                        templateVariableType: s,
                        showRemoveButton: l,
                        onRemove: d,
                        style: c
                    } = e,
                    u = (0, a(109939).tz)(),
                    p = (0, a(960253).I)(() => ({
                        uiToken: {
                            background: a(632079).Tj.blue.background.secondaryTranslucent,
                            color: a(632079).Tj.blue.text.accentPrimary,
                            padding: "2px 4px",
                            width: "max-content",
                            ...c || {}
                        }
                    }), [c]);
                return (0, i.jsx)(a(376921).Ay, {
                    format: a(696654).NY.Medium,
                    isSingle: !0,
                    title: (t = s, r = u, "me" === t ? o = r.formatMessage(n.me) : "now" === t ? o = r.formatMessage(n.now) : "today" === t ? o = r.formatMessage(n.today) : (0, a(722371).HB)(t), o),
                    renderAvatar: () => {
                        var e;
                        let t;
                        return (e = s, (0, a(247438).pbt)(e) ? t = a(476719).personFillSmallIcon : (0, a(247438).UKc)(e) ? t = a(428602).Y : (0, a(722371).HB)(e), t)({
                            width: a(104509).Ev.xs,
                            height: a(104509).Ev.xs,
                            marginInlineEnd: 4
                        })
                    },
                    shouldShrink: !0,
                    onClickRemove: d,
                    showRemoveButton: !!l,
                    style: p.uiToken
                })
            }
        },
        183999: (e, t, a) => {
            a.d(t, {
                e4: () => r,
                lP: () => o,
                y8: () => n
            });
            var i = a(296540);
            let n = {
                minHeight: "fit-content",
                textWrap: "pretty"
            };

            function r({
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
        198347: (e, t, a) => {
            a.d(t, {
                v: () => i
            });

            function i(e, t) {
                a(606047).A.setState({ ...a(606047).A.state,
                    open: !0,
                    from: e
                }), a(606047).A.state.onClose = null == t ? void 0 : t.onClose
            }
        },
        200261: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                r = function() {
                    return (0, i.jsx)(a(636518).Ay, {
                        title: (0, i.jsx)(a(517334).k, {
                            size: "default"
                        }),
                        titleStyle: n
                    })
                }
        },
        214665: (e, t, a) => {
            a.d(t, {
                r: () => n
            });
            let i = {
                control: "blue",
                green: "green",
                teal: "teal",
                red: "red"
            };

            function n({
                disableExposureLogging: e
            }) {
                return i[(0, a(604306).r)("nus_upgrade_button_color", {
                    disableExposureLogging: e
                })] ? ? "blue"
            }
        },
        233305: (e, t, a) => {
            a.d(t, {
                N: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r({
                source: e,
                upsell: t,
                isDisabled: o,
                title: s,
                onClickBeforeUpgradeAction: l,
                postUpgradeCallback: d,
                hoverRef: c,
                tooltipMessage: u,
                tooltipPlacement: p,
                buttonMenuItemProps: m,
                display: g = "icon",
                customMessages: f,
                featureName: h,
                spaceStore: y
            }) {
                var b;
                let x = (0, a(109939).tz)(),
                    {
                        onClick: v,
                        focused: j,
                        ...S
                    } = m ? ? {},
                    I = t && "none" !== t.type,
                    {
                        upgradeEligibility: w,
                        handleClick: A
                    } = (0, a(79268).C)({
                        upsell: t,
                        source: e,
                        onClickBeforeUpgradeAction: l,
                        postUpgradeCallback: d,
                        spaceStore: y
                    }),
                    M = (0, a(156139).e)(w.status),
                    T = (0, i.useMemo)(() => I ? "text" === g ? (0, n.jsx)(a(268627).c, {
                        upgradeStatus: w.status,
                        handleClick: A,
                        upsell: t,
                        hoverRef: c,
                        customMessages: f,
                        featureName: h
                    }) : (0, n.jsx)(a(740957).c, {
                        upgradeStatus: w.status,
                        handleClick: A,
                        upsell: t,
                        hoverRef: c,
                        showPlanName: !0,
                        customMessages: f,
                        featureName: h
                    }) : null, [I, g, w.status, A, t, c, f, h]),
                    C = (0, i.useCallback)(e => {
                        if (!o) {
                            if (!t || "none" === t.type) {
                                null == v || v(e);
                                return
                            }
                            A()
                        }
                    }, [o, t, A, v]);
                return (0, n.jsx)(a(551942).T, {
                    tooltipMessage: o && t ? null == (b = M.disabledTooltip) ? void 0 : b.call(M, {
                        intl: x,
                        upsell: t
                    }) : u,
                    placement: p,
                    children: (0, n.jsx)(a(95582).A, { ...S,
                        focused: !!j,
                        title: s({
                            upgradeLabel: T
                        }),
                        onClick: C
                    })
                })
            }
        },
        238542: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                teamspaceSmallIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 2.97 11.75 10.05",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M5.066 4.914a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076m2.162 0a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076M5.066 6.458a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m2.162 0a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077M5.066 8.002a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m2.162 0a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m4.169.618a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076m0 1.544a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076"
                        }), (0, i.jsx)("path", {
                            d: "M4.063 2.977a1.934 1.934 0 0 0-1.935 1.935V12.4c0 .343.279.622.622.622h10.5a.62.62 0 0 0 .622-.622V8.772a1.934 1.934 0 0 0-1.934-1.934h-1.772V4.912a1.934 1.934 0 0 0-1.934-1.935zm-.691 1.935c0-.382.31-.691.69-.691h4.17c.381 0 .69.31.69.69v6.868H7.895v-1.54a.513.513 0 0 0-.512-.513H4.912a.513.513 0 0 0-.513.513v1.54H3.372zm6.794 6.867V8.08h1.772c.381 0 .69.31.69.691v3.007zm-4.742 0V10.75H6.87v1.028z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("teamspaceSmall", n, "small")
        },
        246467: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    display: "inline-block",
                    width: "1.2em",
                    marginInlineStart: 5,
                    marginInlineEnd: 2,
                    paddingBottom: 3,
                    verticalAlign: "middle"
                },
                o = function(e) {
                    let t, o = (0, a(109939).tz)(),
                        l = (0, a(75272).I)(),
                        d = (0, i.useRef)(),
                        c = (0, i.useCallback)(() => {
                            let t = e.value;
                            if (!t) return;
                            let i = a(25825).q8(t, (0, a(714350).P)());
                            if (!i) return;
                            let n = i.valueOf(),
                                r = n - Date.now();
                            r < 0 || r > a(627179).nD || d.current && d.current.timestamp === n || (d.current && clearTimeout(d.current.timer), d.current = {
                                timestamp: n,
                                timer: setTimeout(() => l("DateBox", "DateBox/createReminderTimer"), r)
                            })
                        }, [l, e.value]),
                        u = (0, i.useCallback)(() => {
                            d.current && (clearTimeout(d.current.timer), d.current = void 0)
                        }, []);
                    (0, i.useEffect)(() => {
                        c()
                    }, [c]), (0, i.useEffect)(() => () => {
                        u()
                    }, [u]);
                    let {
                        value: p,
                        withComma: m
                    } = e, g = (0, a(682985).K8)(() => p ? (0, a(850640).ZF)({
                        value: p,
                        date_format: e.dateFormat,
                        time_format: e.timeFormat,
                        userTimeZone: (0, a(714350).P)(),
                        allowRelativeDates: !0,
                        intl: o,
                        shortenDateAndRange: e.shortenDateAndRange,
                        displayInUserTimezone: e.displayInUserTimezone,
                        getToday: a(132315).x1
                    }) : void 0, [o, e.dateFormat, e.displayInUserTimezone, e.shortenDateAndRange, e.timeFormat, p]);
                    if (!p) return null;
                    let f = a(25825).AA(p, (0, a(714350).P)(), a(849917).locale);
                    (0, a(943003).Lh)(p) && (t = a(25825).Zs(p, (0, a(714350).P)()) ? {
                        color: a(632079).Tj.red.text.accentPrimary
                    } : {
                        color: a(632079).Tj.blue.text.accentPrimary
                    });
                    let h = (0, n.jsxs)(n.Fragment, {
                        children: [g, (0, a(943003).Lh)(p) ? (0, n.jsx)(a(16275).I, {
                            icon: a(848194).alarmSmallIcon,
                            style: r
                        }) : void 0, m ? ", " : null]
                    });
                    return e.disableTooltip ? (0, n.jsx)("div", {
                        className: e.className,
                        style: { ...e.style,
                            ...t
                        },
                        children: h
                    }) : (0, n.jsx)(a(51831).m, {
                        content: () => (0, n.jsxs)(n.Fragment, {
                            children: [e.tooltipHeader, (0, n.jsxs)("div", {
                                style: e.tooltipHeader ? {
                                    color: a(632079).Tj.text.inverseSecondary
                                } : {},
                                children: [s(f.start), f.end ? ` → ${s(f.end)}` : ""]
                            })]
                        }),
                        placement: e.tooltipPlacement,
                        children: a => (0, n.jsx)("div", {
                            className: e.className,
                            style: { ...e.style,
                                ...t
                            },
                            ...a,
                            children: h
                        })
                    })
                };

            function s(e) {
                return (0, a(850640).eV)({
                    value: e,
                    preset: "medium"
                })
            }
        },
        251955: (e, t, a) => {
            function i(e) {
                let {
                    aiInference: t
                } = e;
                return n({
                    isDatabaseAgentsEnabled: (0, a(551408).A)(),
                    aiInference: t
                })
            }

            function n(e) {
                let {
                    isDatabaseAgentsEnabled: t,
                    aiInference: a
                } = e;
                if (!t) return {
                    shouldShowDbAgent: !1,
                    shouldShowLegacyAutofill: !0
                };
                let i = !!a && !a.is_migrated;
                return {
                    shouldShowDbAgent: !i,
                    shouldShowLegacyAutofill: i
                }
            }
            a.d(t, {
                D: () => i,
                a: () => n
            })
        },
        268627: (e, t, a) => {
            a.d(t, {
                c: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r(e) {
                let {
                    upsell: t,
                    upgradeStatus: r,
                    handleClick: o,
                    customMessages: s,
                    size: l = "default",
                    width: d = "hug",
                    onMouseDown: c,
                    hoverRef: u,
                    hideIcon: p,
                    featureName: m
                } = e, g = (0, a(109939).tz)(), f = (0, a(156139).e)(r), h = i.useRef(null), y = (0, a(729787).wY)(h), b = e.textColor ? ? ("small" === l ? "secondary" : "primary"), x = { ...a(183999).y8,
                    ..."small" === l ? {
                        paddingInlineStart: 4,
                        paddingInlineEnd: 4,
                        gap: 4
                    } : {
                        gap: 6
                    }
                }, v = e => (0, n.jsx)(a(725187).W, { ...f.highlightText,
                    size: l,
                    children: e
                }), {
                    productName: j,
                    upgradePhrase: S
                } = (0, a(327506).n)({
                    upsell: t,
                    intl: g,
                    featureName: m,
                    upgradeStatus: r
                }), I = null != s && s[r] ? g.formatMessage(s[r], { ...(0, a(426458).I)(v),
                    productName: j,
                    upgradePhrase: S,
                    ...s[r].interpolatedValues
                }) : f.label.text({
                    intl: g,
                    upsell: t,
                    featureName: m,
                    renderTextHighlight: v
                }), w = !!f.disabledTooltip, {
                    animationState: A,
                    animationTriggers: M
                } = (0, a(183999).lP)(u);
                return (0, n.jsx)(a(988022).p, { ...u ? {} : M,
                    ref: h,
                    disabled: w && !u,
                    hoveredStyle: u ? {
                        background: "unset"
                    } : void 0,
                    size: a(799236).kD[l],
                    width: d,
                    onMouseDown: c,
                    iconLeading: p ? void 0 : { ...(0, a(183999).e4)({
                            icon: f.icon({
                                upsell: t
                            }),
                            animationState: A
                        }),
                        size: a(799236).D6[l],
                        style: { ...null != y && y.height && y.height > a(399411).RO[a(799236).kD[l]] ? {
                                alignSelf: "flex-start",
                                marginTop: 2
                            } : {}
                        }
                    },
                    style: x,
                    onClick: o,
                    children: (0, n.jsx)(a(111010).D, {
                        colorVariant: b,
                        children: I
                    })
                })
            }
        },
        271218: (e, t, a) => {
            a.d(t, {
                h: () => i
            });

            function i(e) {
                let t = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    var i;
                    return void 0 === e ? 0 : (null == (i = (0, a(867819).P)({
                        environment: t,
                        teamStore: e
                    })) ? void 0 : i.membersIncludingOwnersCount) ? ? 0
                }, [t, e])
            }
        },
        280996: (e, t, a) => {
            a.d(t, {
                b: () => r,
                T: () => o()
            }), a(581454);
            var i = a(296540),
                n = a(474848);
            let r = i.memo(function(e) {
                let {
                    store: t = a(2009).w
                } = e, r = (0, a(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, n.jsx)(n.Fragment, {
                    children: r.map(e => {
                        let {
                            id: t,
                            internalRenderModal: a,
                            isOpen: r
                        } = e, o = a(r);
                        return (0, n.jsx)(i.Fragment, {
                            children: o
                        }, t)
                    })
                })
            });
            var o = () => a(796123)
        },
        283161: (e, t, a) => {
            a.d(t, {
                z: () => i
            });

            function i(e) {
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
                o: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let {
                    group: t
                } = e, n = e.size ? ? 20, r = (0, a(109939).tz)(), o = (0, a(682985).K8)(() => {
                    if (t && t.icon) return {
                        pointer: t.pointer,
                        icon: t.icon
                    }
                }, [t]), s = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: r,
                    permissionGroupModel: t
                }), [r, t]);
                return (0, i.jsx)("div", {
                    children: o ? (0, i.jsx)(a(569553).B6, {
                        disabled: !0,
                        size: n,
                        icon: o,
                        isEmptyPage: !1,
                        title: s
                    }) : (0, i.jsx)(a(391343).A, {
                        size: n
                    })
                })
            }
        },
        310324: (e, t, a) => {
            a.d(t, {
                Ay: () => m,
                KF: () => p,
                LG: () => s,
                Zf: () => d,
                yD: () => l
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                o = i.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: o,
                    preventCaptureSpacebarWhenEmpty: s,
                    ...l
                }, d) {
                    let {
                        left: c,
                        right: u,
                        inputLeft: p,
                        inputRight: m,
                        inputRightStyle: g,
                        disableInput: f,
                        inputOuterStyle: y,
                        rightMobileEditLabel: x,
                        mobileKeyboardOnDismiss: v,
                        style: j,
                        value: S,
                        onChange: I,
                        autosize: w,
                        autosizeMinHeight: A,
                        autosizeMaxHeight: M,
                        customElementAttributes: T,
                        disabled: C,
                        format: k,
                        id: P,
                        placeholder: B,
                        type: R,
                        autoFocus: _,
                        focus: D,
                        focusInitial: N,
                        focusAfterAnimation: z,
                        forceShowClearButton: L,
                        ignoreKeyboardMode: E,
                        inputElementAttributes: H,
                        inputStyle: V,
                        isRightLastElementOfInput: F,
                        maxlength: W,
                        min: U,
                        max: K,
                        selectAll: O,
                        showClearButton: Q,
                        suppressFocusRing: q,
                        textarea: J,
                        textareaSubmitOnEnter: G,
                        onBlur: $,
                        onCancel: Y,
                        onClearButtonClick: Z,
                        onClick: X,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: ea,
                        ...ei
                    } = l, [en, er] = (0, i.useState)(() => !!(D || N));
                    (0, i.useEffect)(() => {
                        void 0 !== D && er(D)
                    }, [D]);
                    let eo = e ? void 0 : a(763230).D_,
                        es = !t || S.length > 0 ? a(763230).D_ : void 0,
                        el = o ? void 0 : a(763230).D_,
                        ed = !s || S.length > 0 ? a(763230).D_ : void 0,
                        ec = (0, a(649476).Tf)(),
                        eu = (0, i.useContext)(a(649476).xu),
                        ep = (0, i.useRef)(null),
                        em = {
                            value: S,
                            onChange: I,
                            autosize: w,
                            autosizeMinHeight: A,
                            autosizeMaxHeight: M,
                            customElementAttributes: T,
                            disabled: C,
                            format: k,
                            id: P,
                            placeholder: B,
                            type: R,
                            autoFocus: _,
                            focus: D,
                            focusInitial: N,
                            focusAfterAnimation: z,
                            forceShowClearButton: L,
                            ignoreKeyboardMode: E,
                            inputElementAttributes: H,
                            inputStyle: V,
                            isRightLastElementOfInput: F,
                            maxlength: W,
                            min: U,
                            max: K,
                            selectAll: O,
                            showClearButton: Q,
                            suppressFocusRing: q,
                            textarea: J,
                            textareaSubmitOnEnter: G,
                            onBlur: $,
                            onCancel: Y,
                            onClearButtonClick: Z,
                            onClick: X,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: ea
                        };
                    return (0, n.jsx)(a(369064).N, {
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
                        onCut: el,
                        onCopy: el,
                        onPaste: el,
                        onKeypress: a(763230).D_,
                        onLeft: eo,
                        onRight: eo,
                        onDelete: es,
                        onBackspace: es,
                        onSpace: ed,
                        children: a(986939).A.isMobile ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(a(636518).Ay, {
                                ref: d,
                                ...ei,
                                itemMarginLeft: ec ? 8 : void 0,
                                style: j,
                                title: (0, n.jsx)(b, {
                                    ref: ep,
                                    left: c,
                                    right: u,
                                    inputLeft: p,
                                    inputRight: m,
                                    inputRightStyle: g,
                                    disableInput: f,
                                    inputOuterStyle: y,
                                    rightMobileEditLabel: x,
                                    isFocused: en,
                                    setIsFocused: er,
                                    ...em
                                })
                            }), (0, n.jsx)(a(368678).P, {
                                show: en && eu.menuType !== a(649476).gu.ActionSheet,
                                onDismiss: v,
                                inputRef: ep
                            })]
                        }) : (0, n.jsx)(a(636518).Ay, {
                            ref: d,
                            ...ei,
                            left: c,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, n.jsx)(h, {
                                ref: ep,
                                disableInput: f,
                                inputOuterStyle: y,
                                inputRight: m,
                                inputRightStyle: g,
                                inputLeft: p,
                                ...em
                            }),
                            style: { ...r,
                                ...j
                            }
                        })
                    })
                }),
                s = 30,
                l = 28;

            function d(e) {
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
            let c = {
                    outlineButtonHovered: {
                        background: a(632079).Tj.background.secondary
                    }
                },
                u = (0, a(64960)._S)({
                    color: a(632079).Tj.background.primary
                });

            function p(e) {
                let t = (0, a(533992).WS)(),
                    i = (0, a(960253).I)(() => ({
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
                return (0, n.jsx)(a(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...i.outlineButton,
                        ...e.style,
                        height: t ? s : l,
                        width: t ? s : l
                    },
                    hoveredStyle: c.outlineButtonHovered,
                    pressedStyle: i.outlineButtonPressed
                })
            }
            let m = o,
                g = {
                    style0: {
                        color: a(632079).Tj.text.secondary
                    }
                };

            function f({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let r = (0, a(533992).v3)(),
                    o = (0, i.useCallback)(e => {
                        e.preventDefault();
                        let i = t.current;
                        i && (0, a(862215).G)(r, i)
                    }, [r, t]);
                return (0, n.jsx)(a(64960).Ay, {
                    onClick: o,
                    style: g.style0,
                    children: e
                })
            }
            let h = i.forwardRef(function(e, t) {
                    let {
                        disabled: i,
                        disableInput: r,
                        inputOuterStyle: o,
                        inputRight: s,
                        inputRightStyle: l,
                        inputLeft: d,
                        min: c,
                        textarea: u,
                        ...p
                    } = e;
                    return (0, n.jsx)(a(36481).p, { ...p,
                        ref: t,
                        disabled: i || r,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...o
                        },
                        left: d,
                        right: s,
                        rightStyle: l,
                        min: c,
                        textarea: u
                    })
                }),
                y = {
                    fontSize: 16
                },
                b = i.forwardRef(function(e, t) {
                    let {
                        left: r,
                        right: o,
                        inputLeft: s,
                        inputRight: l,
                        inputRightStyle: d,
                        disableInput: c,
                        inputOuterStyle: u,
                        rightMobileEditLabel: p,
                        isFocused: m,
                        setIsFocused: g,
                        disabled: h,
                        showClearButton: b,
                        onBlur: x,
                        onFocus: v,
                        ...j
                    } = e, S = (0, i.useCallback)(e => {
                        g(!1), x && x(e)
                    }, [x, g]), I = (0, i.useCallback)(e => {
                        g(!0), v && v(e)
                    }, [v, g]), w = (0, i.useRef)(null), A = (0, a(421573).A)(w, t), M = p && !m ? (0, n.jsx)(f, {
                        rightMobileEditLabel: p,
                        inputRef: w
                    }) : null;
                    return (0, n.jsx)(a(36481).p, { ...j,
                        ref: A,
                        format: "transparent",
                        style: { ...y,
                            ...u
                        },
                        onFocus: I,
                        onBlur: S,
                        showClearButton: !1 !== b,
                        disabled: h || c,
                        left: s || r,
                        right: M || l || o,
                        rightStyle: d
                    })
                })
        },
        314084: (e, t, a) => {
            a.d(t, {
                t: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function r(e) {
                let {
                    children: t,
                    footer: r,
                    header: o,
                    showDismissButton: s = !0,
                    sizeRange: l,
                    gap: d = 24
                } = e;
                return (0, i.jsxs)(a(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == l ? void 0 : l.minHeight,
                    maxHeight: null == l ? void 0 : l.maxHeight,
                    minWidth: null == l ? void 0 : l.minWidth,
                    maxWidth: null == l ? void 0 : l.maxWidth,
                    gap: d,
                    style: n,
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
                    }) : null, s ? (0, i.jsx)(a(226512).R, {}) : null]
                })
            }
        },
        322095: (e, t, a) => {
            function i(e, t) {
                return e.map(e => n(e, t))
            }

            function n(e, t) {
                var i, n;
                let r, {
                        nameMessage: o,
                        descriptionMessage: s,
                        ...l
                    } = e,
                    {
                        rootId: d,
                        previewRootId: c,
                        spaceId: u
                    } = (i = e, n = t, r = (0, a(599412).H)(n), i.sources[r] || i.sources[a(599412).q]);
                return { ...l,
                    id: o.id,
                    rootId: d,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(o),
                    description: s ? t.formatMessage(s) : void 0
                }
            }
            a.d(t, {
                B: () => n,
                o: () => i
            }), a(581454)
        },
        327506: (e, t, a) => {
            a.d(t, {
                T: () => n,
                n: () => r
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

            function n({
                upsell: e,
                intl: t,
                featureName: i
            }) {
                let r = "product" === e.type ? e.product : void 0;
                if (r) return i && (0, a(149957).QO)(i) && "business" === r ? t.formatMessage(a(262166).v0.notionAi) : (0, a(262166).u2)({
                    product: r,
                    intl: t
                })
            }

            function r({
                upsell: e,
                intl: t,
                featureName: o,
                upgradeStatus: s
            }) {
                let l, d = "product" === e.type && "ai_credit_pack" === e.product,
                    c = n({
                        upsell: e,
                        intl: t,
                        featureName: o
                    }),
                    u = c === t.formatMessage(a(262166).v0.notionAi),
                    p = t.formatMessage(i.credits);
                if (d) {
                    switch (s) {
                        case "loading":
                            l = t.formatMessage(i.loading);
                            break;
                        case "eligible_to_purchase":
                        case "not_eligible":
                            l = t.formatMessage(i.addWithProduct, {
                                productName: p
                            });
                            break;
                        case "eligible_for_trial":
                            l = t.formatMessage(i.tryWithProduct, {
                                productName: p
                            });
                            break;
                        case "eligible_to_request":
                            l = t.formatMessage(i.requestWithProduct, {
                                productName: p
                            });
                            break;
                        case "request_pending":
                            l = t.formatMessage(i.pendingRequestWithProduct, {
                                productName: p
                            });
                            break;
                        case "sales_assisted":
                        case "sales_eligible":
                            l = t.formatMessage(i.contactSales);
                            break;
                        default:
                            (0, a(722371).HB)(s)
                    }
                    return {
                        productName: c,
                        upgradePhrase: l
                    }
                }
                if (u) {
                    switch (s) {
                        case "loading":
                            l = t.formatMessage(i.loading);
                            break;
                        case "eligible_to_purchase":
                        case "not_eligible":
                            l = t.formatMessage(i.upgradeWithProduct, {
                                productName: c
                            });
                            break;
                        case "eligible_for_trial":
                            l = t.formatMessage(i.tryWithProduct, {
                                productName: c
                            });
                            break;
                        case "eligible_to_request":
                            l = t.formatMessage(i.requestAccessToWithProduct, {
                                productName: c
                            });
                            break;
                        case "request_pending":
                            l = t.formatMessage(i.pendingRequestedAccessToWithProduct, {
                                productName: c
                            });
                            break;
                        case "sales_assisted":
                        case "sales_eligible":
                            l = t.formatMessage(i.contactSales, {
                                productName: c
                            });
                            break;
                        default:
                            (0, a(722371).HB)(s)
                    }
                    return {
                        productName: c,
                        upgradePhrase: l
                    }
                }
                switch (s) {
                    case "loading":
                        l = t.formatMessage(i.loading);
                        break;
                    case "eligible_to_purchase":
                    case "not_eligible":
                        l = t.formatMessage(i.upgradeToWithProduct, {
                            productName: c
                        });
                        break;
                    case "eligible_for_trial":
                        l = t.formatMessage(i.tryWithProduct, {
                            productName: c
                        });
                        break;
                    case "eligible_to_request":
                        l = t.formatMessage(i.requestAccessToWithProduct, {
                            productName: c
                        });
                        break;
                    case "request_pending":
                        l = t.formatMessage(i.pendingRequestedAccessToWithProduct, {
                            productName: c
                        });
                        break;
                    case "sales_assisted":
                    case "sales_eligible":
                        l = t.formatMessage(i.contactSales, {
                            productName: c
                        });
                        break;
                    default:
                        (0, a(722371).HB)(s)
                }
                return {
                    productName: c,
                    upgradePhrase: l
                }
            }
        },
        345076: (e, t, a) => {
            a.d(t, {
                UZ: () => m,
                Yo: () => l,
                gf: () => o,
                sL: () => p,
                zC: () => c
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function o(e) {
                return "+" === e.insertionType ? (0, n.jsx)(l, {}) : (0, n.jsx)("span", {
                    style: r,
                    children: (0, n.jsx)(g, {
                        svg: a(330274).magnifyingGlassIcon.__iconDefinition.svg,
                        viewBox: a(330274).magnifyingGlassIcon.__iconDefinition.viewBox
                    })
                })
            }
            let s = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function l() {
                return (0, n.jsx)("span", {
                    style: s,
                    children: (0, n.jsx)(g, {
                        svg: a(581923).plusIcon.__iconDefinition.svg,
                        viewBox: a(581923).plusIcon.__iconDefinition.viewBox
                    })
                })
            }
            let d = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function c() {
                return (0, n.jsx)("span", {
                    style: d,
                    children: (0, n.jsx)(g, {
                        svg: a(919847).I.__iconDefinition.svg,
                        viewBox: a(919847).I.__iconDefinition.viewBox
                    })
                })
            }
            let u = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function p() {
                return (0, n.jsx)("span", {
                    style: u,
                    children: (0, n.jsx)(g, {
                        svg: a(584578).b.__iconDefinition.svg,
                        viewBox: a(584578).b.__iconDefinition.viewBox
                    })
                })
            }

            function m(e) {
                let {
                    store: t,
                    theme: i,
                    themeMode: n,
                    isSafariOrIOS: r,
                    emojiType: o,
                    currentUserId: s
                } = e;
                if (t instanceof a(970831).B) return (0, a(605351).h6)({
                    pageModel: t.getModel(),
                    pageRole: t.getRole(),
                    emojiType: o,
                    baseUrl: a(986939).A.domainBaseUrl,
                    getRecordModel: t.getRecordModel,
                    isClient: !0,
                    isSafariOrIOS: r,
                    currentUserId: s,
                    theme: i,
                    themeMode: n,
                    emojiData: a(753281).A.state
                });
                if (t instanceof a(356912).m) {
                    var l;
                    return (0, a(116825).e)({
                        collectionPointer: null == (l = t.getModel()) ? void 0 : l.pointer,
                        emojiType: o,
                        baseUrl: a(986939).A.domainBaseUrl,
                        getRecordModel: t.getRecordModel,
                        getRecordRole: t.inMemoryRecordCache.makeGetRecordRoleFn(s),
                        isSafariOrIOS: r,
                        isClient: !0,
                        currentUserId: s,
                        themeMode: n,
                        emojiData: a(753281).A.state
                    })
                }(0, a(722371).HB)(t)
            }

            function g(e) {
                let {
                    svg: t,
                    viewBox: r
                } = e, o = (0, i.useMemo)(() => {
                    let e = a(595290).A.renderToString((0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: r,
                            children: t
                        })),
                        i = `data:image/svg+xml,${encodeURIComponent(e)}`;
                    return `url("${i}")`
                }, [t, r]), s = (0, a(960253).I)(() => ({
                    container: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: a(632079).Tj.icon.secondary,
                        WebkitMaskImage: o,
                        maskImage: o,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat"
                    }
                }), [o]);
                return (0, n.jsx)("div", {
                    style: s.container
                })
            }
        },
        345514: (e, t, a) => {
            a.d(t, {
                s: () => i
            });

            function i({
                environment: e,
                spaceStore: t
            }) {
                let n;
                return !!t && !((0, a(916804).I)(t) || (n = e.currentUser.id, t && n && (0, a(993077).dp)(t, n).isRestrictedMember())) && ((0, a(887788).h)(e) || !t.getDisableTeamCreation())
            }
        },
        361724: (e, t, a) => {
            a.d(t, {
                C: () => r
            });
            var i = a(296540),
                n = a(474848);
            let r = i.forwardRef(function({
                children: e,
                fontColor: t,
                style: r,
                isRightAligned: o,
                isEmpty: s
            }, l) {
                let {
                    baseStyles: d
                } = (0, i.useContext)(a(422575).L8), c = (0, a(960253).I)(() => ({
                    textStyle: { ...s ? d.emptyTextStyle ? ? d.textStyle : d.textStyle,
                        ...r,
                        ...o ? {
                            justifyContent: "right",
                            textAlign: "end"
                        } : {},
                        ..."light" === t ? {
                            color: a(632079).Tj.text.tertiary
                        } : {}
                    }
                }), [s, d.emptyTextStyle, d.textStyle, r, o, t]);
                return (0, n.jsx)("div", {
                    ref: l,
                    style: c.textStyle,
                    children: e
                })
            })
        },
        366318: (e, t, a) => {
            a.d(t, {
                S: () => i
            });

            function i(e) {
                return (0, a(682985).K8)(() => {
                    if (!(0, a(23803).vL)()) return !1;
                    let t = e.getParentStore();
                    return !!((null == t ? void 0 : t.table) === a(832375).VlP && t.getFormatStore().getKeyStore("external_collection_type").getValue()) || !1
                }, [e])
            }
        },
        368678: (e, t, a) => {
            a.d(t, {
                P: () => o
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: a(632079).Tj.blue.text.accentPrimary,
                    fontWeight: a(699422).Wy.semibold
                }
            };

            function o(e) {
                let {
                    onDismiss: t,
                    inputRef: o
                } = e, s = (0, a(533992).Y0)(), l = (0, i.useRef)(null), d = s.isMobileNative && s.isIOS, c = d && e.show;
                (0, a(336494).b)(a(651748).A, () => ({
                    getNode: () => l.current,
                    isShown: () => c
                }), [c]);
                let u = (0, a(571354).n)(),
                    p = (0, i.useCallback)(() => {
                        var e;
                        null == o || null == (e = o.current) || e.focus(), t && t();
                        let a = document.activeElement;
                        a instanceof HTMLElement && a.blur()
                    }, [o, t]);
                if (!d) return null;
                let m = c ? -(a(247800).j + u) : 0;
                return (0, n.jsx)(a(114596).O, {
                    open: !0,
                    children: (0, n.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: a(247800).j,
                            display: c ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: a(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${m}px)`,
                            transition: c ? "ease-out" : "ease-in",
                            boxShadow: c ? `
								0 -1px 0 ${a(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: l,
                        children: (0, n.jsx)(a(64960).Ay, {
                            style: r.style0,
                            onTouchEnd: () => {
                                p()
                            },
                            children: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        372181: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                infoCircleSmallIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 4.425a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M6.95 6.5a.625.625 0 1 0 0 1.25h.425V10H6.95a.625.625 0 1 0 0 1.25h2.1a.625.625 0 1 0 0-1.25h-.425V7.125A.625.625 0 0 0 8 6.5z"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                r = (0, a(104509).wt)("infoCircleSmall", n, "small")
        },
        374241: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftSmallIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                n = (0, a(104509).wt)("arrowStraightLeftSmall", i, "small")
        },
        376921: (e, t, a) => {
            a.d(t, {
                Ay: () => l,
                mI: () => r,
                vb: () => o
            }), a(296540);
            var i = a(474848);
            let n = (0, a(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                r = a(696654).NY,
                o = {
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
                s = {
                    style0: { ...a(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function l({
                avatarSize: e,
                format: t,
                isSingle: r,
                onClickRemove: d,
                renderAvatar: c,
                showRemoveButton: u,
                shouldShrink: p,
                style: m,
                title: g
            }) {
                let f = (0, a(109939).tz)(),
                    {
                        height: h,
                        fontSize: y,
                        margin: b,
                        marginEditState: x,
                        closeIconSize: v,
                        avatarSize: j
                    } = o[t],
                    S = (0, a(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!p,
                            minWidth: 0,
                            height: h,
                            borderRadius: 6,
                            fontSize: y,
                            lineHeight: "120%",
                            margin: r ? 0 : u ? x : b,
                            ...m
                        }
                    }), [y, h, r, b, x, p, u, m]);
                return (0, i.jsxs)("div", {
                    style: S.root,
                    children: [null == c ? void 0 : c(e ? ? j), (0, i.jsx)("div", {
                        className: "notranslate",
                        style: s.style0,
                        children: g
                    }), u ? (0, i.jsx)(a(64960).Ay, {
                        ariaLabel: void 0 !== g ? f.formatMessage(n.removeTokenLabel, {
                            title: g
                        }) : f.formatMessage(n.removeTokenLabelGeneric),
                        onClick: d,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: h,
                            height: h,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, i.jsx)(a(16275).I, {
                            icon: a(519529).xMarkFillSmallIcon,
                            size: v,
                            style: s.style1
                        })
                    }) : null]
                })
            }
        },
        391343: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let t = (0, a(47187).E)(e);
                return (0, i.jsx)("div", {
                    style: t.iconContainer,
                    children: (0, i.jsx)(a(16275).I, {
                        icon: a(407598).peopleFillIcon,
                        size: t.icon.width,
                        colorVariant: "secondary"
                    })
                })
            }
        },
        391374: (e, t, a) => {
            a.d(t, {
                o: () => r
            });
            var i = a(296540),
                n = a(474848);
            let r = i.forwardRef(function({
                color: e = "primary",
                ...t
            }, i) {
                let r = (0, a(960253).I)(() => {
                        let i = "blue" === e ? a(632079).Tj.blue.text.accentPrimary : "secondary" === e ? a(632079).Tj.text.secondary : a(632079).Tj.text.primary;
                        return {
                            title: {
                                color: i,
                                fill: i
                            },
                            icon: {
                                fill: "blue" === e ? a(632079).Tj.blue.text.accentPrimary : void 0
                            },
                            buttonMenuItem: { ...t.style,
                                ...t.disabled ? {
                                    cursor: "not-allowed"
                                } : {}
                            }
                        }
                    }, [t.disabled, e, t.style]),
                    o = "blue" !== e ? e : void 0;
                return (0, n.jsx)(a(95582).A, {
                    ref: i,
                    ...t,
                    title: (0, n.jsx)("div", {
                        style: r.title,
                        children: t.title
                    }),
                    icon: (0, n.jsx)(a(16275).I, {
                        icon: a(581923).plusIcon,
                        style: r.icon,
                        colorVariant: o
                    }),
                    style: r.buttonMenuItem
                })
            })
        },
        394112: (e, t, a) => {
            a.d(t, {
                A5: () => d,
                MR: () => f,
                Mx: () => o,
                Pb: () => u,
                WL: () => g,
                hg: () => s,
                kZ: () => m,
                pv: () => l,
                vV: () => c
            }), a(581454);
            var i = a.n(a(32485)),
                n = a(296540),
                r = a(474848);
            let o = n.forwardRef(function(e, t) {
                    let {
                        children: n,
                        type: o,
                        gap: s,
                        withBottomPadding: l,
                        style: d,
                        onMouseDown: c,
                        onClick: u,
                        onDoubleClick: p,
                        onContextMenu: m,
                        suppressMargin: g
                    } = e, f = (0, a(2919).n)(o), h = (0, a(219279).aH)({
                        gateName: "content_reskin_v2_wider_page",
                        enableEventTrailLogging: !0
                    }) && (0, a(643160).sR)(), y = (0, a(682985).K8)(() => a(82702).A.getPanelState("peek").isOpen && "static_sidebar" === a(82702).A.getPanelState("peek").displayStyle, []);
                    return (0, r.jsx)(a(28111).A, {
                        name: "PageLayout",
                        children: (0, r.jsx)("div", {
                            className: i()("layout", {
                                "layout-reskin-wider": h,
                                "layout-wide": "wide" === o,
                                "layout-wide-right-margin-expanded": "wide-right-margin-expanded" === o,
                                "layout-side-peek": "side-peek" === o,
                                "layout-center-peek": "center-peek" === o && !y,
                                "layout-center-peek-with-layout-panel": "center-peek" === o && y,
                                "layout-home": "home" === o,
                                "layout-meet": "meet" === o,
                                "layout-home-phone": "home-phone" === o,
                                "layout-home-redesign-desktop": "home-redesign-desktop" === o,
                                "layout-form": "form" === o,
                                "layout-form-viewer": "form-viewer" === o,
                                "layout-form-viewer-embed": "form-viewer-embed" === o,
                                "layout-phone": "phone" === o,
                                "layout-tablet": "tablet" === o,
                                "layout-template-preview": "template-preview" === o,
                                "layout-chat": "chat" === o,
                                "layout-layout-editor": "layout-editor" === o,
                                "layout-layout-editor-wide": "layout-editor-wide" === o,
                                "layout-layout-editor-narrow": "layout-editor-narrow" === o,
                                "layout-marketplace": "marketplace" === o,
                                "layout-marketplace-mobile": "marketplace-mobile" === o,
                                "layout-team-home": "team-home" === o,
                                "layout-team-home-mobile": "team-home-mobile" === o,
                                "layout-create-post": "create-post" === o,
                                "layout-fullscreen-ai": "fullscreen-ai" === o,
                                "layout-narrowscreen-ai": "narrowscreen-ai" === o,
                                "layout-person-profile": "person-profile" === o,
                                "layout-suppress-margin": g
                            }),
                            style: {
                                paddingBottom: l ? f : void 0,
                                gap: s,
                                ...d
                            },
                            ref: t,
                            onMouseDown: c,
                            onClick: u,
                            onDoubleClick: p,
                            onContextMenu: m,
                            children: n
                        })
                    })
                }),
                s = "layout-content",
                l = "layout-full",
                d = "hide-scrollbar",
                c = n.forwardRef(function(e, t) {
                    return (0, r.jsx)(a(28111).A, {
                        name: "PageLayoutContent",
                        children: (0, r.jsx)("div", {
                            className: i()(s, e.className),
                            style: e.style,
                            ref: t,
                            children: e.children
                        })
                    })
                });

            function u(e) {
                return (0, r.jsx)(a(28111).A, {
                    name: "PageLayoutFull",
                    children: (0, r.jsx)("div", {
                        className: l,
                        style: e.style,
                        children: e.children
                    })
                })
            }
            let p = {
                pointerEvents: "none"
            };

            function m(e) {
                return (0, r.jsx)(a(28111).A, {
                    name: "PageLayoutMarginRight",
                    children: (0, r.jsx)("div", {
                        className: "layout-margin-right",
                        style: { ...e.style,
                            ...p
                        },
                        children: e.children
                    })
                })
            }

            function g(e) {
                return (0, r.jsx)(a(28111).A, {
                    name: "PageLayoutColumn",
                    children: (0, r.jsx)("div", {
                        className: i()("layout-column", e.className),
                        style: { ...{
                                "--min-column-width": e.minWidth ? `${e.minWidth}px` : "100%"
                            },
                            ...e.style
                        },
                        children: e.children
                    })
                })
            }

            function f(e) {
                return (0, r.jsx)(a(28111).A, {
                    name: "PageLayoutTwoColumn",
                    children: (0, r.jsxs)(g, {
                        minWidth: e.minWidth,
                        className: e.className,
                        style: e.style,
                        children: [e.left, e.right]
                    })
                })
            }
            a(699422).Wy.semibold, a(632079).Tj.buttonBlueFocusRing
        },
        397900: (e, t, a) => {
            a.r(t), a.d(t, {
                ellipsisIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                n = (0, a(104509).wt)("ellipsis", i, "default")
        },
        413297: (e, t, a) => {
            a.d(t, {
                P: () => i
            }), a(898992), a(354520), a(581454);

            function i(e) {
                let {
                    spaceStore: t,
                    skip: i = !1
                } = e, n = (0, a(533992).v3)(), r = (0, a(345776).T)(), [{
                    status: o,
                    value: s
                }] = (0, a(97668).Yb)(async () => {
                    let e = null == t ? void 0 : t.id;
                    if (!i && e) {
                        if (a(908032).i({
                                userId: r,
                                spaceId: e,
                                debugFrom: "useWorkspaceOwners"
                            })) {
                            let e = a(218744).default.getConfigKey("email_alias_migration", "mode"),
                                i = await n.api.callApi({
                                    eventName: "listUsers",
                                    environment: n,
                                    data: {
                                        cursor: void 0,
                                        membershipFilter: "owners",
                                        limit: 1e3,
                                        query: "",
                                        spaceId: t.id,
                                        includeAliasSearch: (0, a(485477).K)(e)
                                    }
                                });
                            return "success" === i.type ? i.data.users.map(e => e.id) : []
                        } {
                            let e = (0, a(840752).M)({
                                spaceId: null == t ? void 0 : t.id,
                                userId: r,
                                enforceIdsCheck: !1,
                                debugFrom: "useWorkspaceOwners"
                            });
                            return e ? (0, a(576968).B)(e).filter(e => (0, a(729052).Jm)(e.membershipType)).map(e => e.userId) : []
                        }
                    }
                }, [n, t, i, r]);
                return {
                    status: o,
                    workspaceOwners: (0, a(682985).K8)(() => !i && s && t ? s.map(e => (0, a(505116).z)({
                        userId: e,
                        spaceStore: t
                    })) : [], [s, t, i])
                }
            }
        },
        422575: (e, t, a) => {
            a.d(t, {
                L8: () => r,
                O2: () => d,
                dm: () => l,
                qN: () => o
            });
            var i = a(296540),
                n = a(474848);
            let r = (0, i.createContext)({
                collectionContextStore: void 0,
                propertySchema: void 0,
                property: void 0,
                propertyFormat: void 0,
                isEmptyStore: a(546605).Store.createValue(!1),
                canEdit: !1,
                disabled: !0,
                shouldRenderTooltip: !1,
                shouldWrap: !1,
                baseStyles: {},
                surface: "table",
                containerRef: null,
                store: void 0,
                shouldShowMultiSelectCheckbox: void 0,
                propertyIndex: void 0,
                collectionSchemaStore: a(546605).Store.createValue(void 0)
            });
            r.displayName = "BlockPropertyValueContext";
            let o = i.memo(function(e) {
                var t, o;
                let {
                    children: l,
                    unmappedProperty: c,
                    property: u,
                    propertySchema: p,
                    containerRef: m
                } = e, {
                    surface: g,
                    disabled: f,
                    store: h,
                    tableWrap: y,
                    collectionStore: b,
                    shouldSetCellHeight: x,
                    isLast: v,
                    locked: j,
                    showIfEmpty: S,
                    shouldShowMultiSelectCheckbox: I,
                    propertyIndex: w,
                    propertyModule: A,
                    formQuestionStore: M,
                    formDataStore: T,
                    onClose: C,
                    collectionViewStore: k
                } = e.innerProps, P = (0, a(533992).v3)(), {
                    value: B
                } = (0, a(815048).fJ)(a(864850).T.formulas), R = (0, a(713311).Ks)(), [_, D] = (0, a(682985).K8)(() => {
                    let e = null == R ? void 0 : R.getPropertyFormat(c ? ? u),
                        t = !1;
                    return T && M && (t = !!T.getQuestionError(M.id)), [e, t]
                }, [R, T, M, u, c], {
                    equalityFn: a(381453).n4
                }), N = (0, i.useMemo)(() => new(a(345426)).ComputedStore(() => {
                    var e;
                    return (null == T || null == (e = T.getFormState()) ? void 0 : e.collectionSchema) || b.getSchema()
                }, {
                    debugName: "BlockPropertyValueContext.collectionSchemaStore"
                }), [b, T]), z = (0, a(366318).S)(h), L = d({
                    store: h,
                    collectionStore: b,
                    property: u,
                    disabled: f,
                    surface: g,
                    propertySchema: p,
                    collectionContextStore: R,
                    writeStateType: "edit"
                }), E = (t = g, o = y, "page" === t || "table" === t && o || "board" === t && o || "gallery" === t && o || "feed" === t && o || "form_viewer" === t), H = A && "style" in A && "large" === A.style, V = (0, a(916769).x7)({
                    shouldSetCellHeight: x,
                    surface: g,
                    shouldWrap: E,
                    isLast: v,
                    locked: j,
                    disabled: f,
                    showIfEmpty: S,
                    isInvalidFormAnswer: D,
                    isLargeModule: H,
                    collectionViewStore: k
                }), F = function(e) {
                    let {
                        store: t,
                        collectionSchemaStore: i,
                        property: n,
                        propertySchema: r,
                        surface: o,
                        isExternallyImportedAndSyncedPage: l,
                        environment: d,
                        formulasModule: c
                    } = e;
                    return (0, a(682985).K8)(() => "board" === o || "gallery" === o || "list" === o || "relation" === o || "relation_section" === o || "feed" === o || ("mini" === o ? !s({
                        store: t,
                        collectionSchema: i.state,
                        property: n,
                        propertySchemaType: null == r ? void 0 : r.type,
                        formulasModule: c,
                        environment: d
                    }) : ("page" === o || "compact_page" === o || "table" === o || "form_viewer" === o || "form_editor" === o || "property_module" === o || "calendar" === o || "timeline" === o) && l), [i, d, o, c, l, n, null == r ? void 0 : r.type, t])
                }({
                    store: h,
                    collectionSchemaStore: N,
                    property: u,
                    propertySchema: p,
                    surface: g,
                    isExternallyImportedAndSyncedPage: z,
                    environment: P,
                    formulasModule: B
                }), W = (0, i.useMemo)(() => {
                    let e;
                    return {
                        store: h,
                        collectionContextStore: R,
                        property: u,
                        propertySchema: p,
                        propertyFormat: _,
                        isEmpty: !1,
                        canEdit: L,
                        disabled: f,
                        shouldRenderTooltip: F,
                        shouldWrap: E,
                        baseStyles: V,
                        surface: g,
                        containerRef: m,
                        shouldShowMultiSelectCheckbox: I,
                        propertyIndex: w,
                        isExternallyImportedAndSyncedPage: z,
                        propertyModule: A,
                        onClose: C,
                        collectionSchemaStore: N,
                        get isEmptyStore() {
                            return e || (e = new(a(345426)).ComputedStore(() => s({
                                store: h,
                                collectionSchema: N.state,
                                property: u,
                                propertySchemaType: null == p ? void 0 : p.type,
                                formulasModule: B,
                                environment: P
                            }), {
                                debugName: "BlockPropertyValueContext.isEmptyStore"
                            })), e
                        }
                    }
                }, [h, R, u, p, _, L, f, F, E, V, g, m, I, w, z, A, C, N, P, B]);
                return (0, n.jsx)(r.Provider, {
                    value: W,
                    children: l
                })
            });

            function s(e) {
                let {
                    store: t,
                    collectionSchema: i,
                    property: n,
                    propertySchemaType: r,
                    formulasModule: o,
                    environment: s
                } = e;
                return !!n && !!t && !!t.isDefined() && !!i && "checkbox" !== r && "button" !== r && "created_time" !== r && "created_by" !== r && "last_edited_time" !== r && "last_edited_by" !== r && "formula" !== r && "rollup" !== r && "auto_increment_id" !== r && (0, a(175567).r)({
                    block: t.getModel(),
                    property: n,
                    schema: i,
                    getRecordModel: t.getRecordModel,
                    userTimeZone: (0, a(714350).P)(),
                    intl: a(962299).A.getIntl(),
                    userId: s.currentUser.id,
                    experimentService: a(218744).default,
                    collectionFeatureGates: (0, a(457103).i)(),
                    formulasModule: o,
                    spaceIdCreator: s.idCreator.getSpaceIdCreatorSync(t.getSpaceId()),
                    getRelationEdgeList: (0, a(323082).Y)({
                        environment: s,
                        spaceId: t.getSpaceId()
                    })
                })
            }

            function l(e) {
                let {
                    store: t,
                    collectionSchema: i,
                    property: n,
                    propertySchema: r,
                    environment: o
                } = e, {
                    value: l
                } = (0, a(815048).fJ)(a(864850).T.formulas);
                return (0, a(682985).K8)(() => s({
                    store: t,
                    collectionSchema: i,
                    property: n,
                    propertySchemaType: null == r ? void 0 : r.type,
                    formulasModule: l,
                    environment: o
                }), [i, o, n, null == r ? void 0 : r.type, t, l], {
                    debugName: "BlockPropertyValueContext.useIsBPVEmpty"
                })
            }

            function d(e) {
                let {
                    store: t,
                    collectionStore: i,
                    property: n,
                    disabled: r,
                    surface: o,
                    propertySchema: s,
                    collectionContextStore: l,
                    writeStateType: d
                } = e;
                return (0, a(682985).K8)(() => {
                    var e, c;
                    if (!t || !i || !n || "calendar" === o || "timeline" === o || (0, a(235089).u)(n) || (0, a(9247).z3)(s) || (0, a(973681).Lp)({
                            collectionStore: i,
                            property: n,
                            propertySchema: s
                        }) || null != l && l.isUnlistedViewStore.state || n === a(511791).hx || "comment" === d && !(0, a(512845).SF)(t.getSystemBlockTypeStore().getValue())) return !1;
                    if (r || !t.canEdit() || (0, a(444285).B)(t).state) return "edit" !== d && t.canComment() && !(0, a(88527).O)(t);
                    let u = (0, a(23803).JD)(i);
                    if ((0, a(973681).ni)({
                            store: t,
                            collectionStore: i,
                            collectionContextStore: l,
                            propertySchema: s,
                            property: n,
                            isJiraTwoWaySyncEnabled: u
                        }) || !i.isExternallyImportedAndSyncedCollection() && (0, a(561872).VF)(t.getModel(), n, t.getRecordModel)) return !1;
                    if (null != s && s.synced_permissions) switch (s.synced_permissions) {
                        case "read_only":
                            return !1;
                        case "read_write":
                            break;
                        default:
                            (0, a(722371).HB)(s.synced_permissions)
                    }
                    return !(t.isType("transcription") && (0, a(247438).w9s)(null == (e = t.getTitleStore()) ? void 0 : e.getValue()) || t.isType("transcription") && (null == (c = t.getFormat()) ? void 0 : c.transcription_calendar_event) !== void 0 && "title" === n)
                }, [o, n, s, i, l, r, t, d], {
                    debugName: `BlockPropertyValueContext.useWriteState|${d}`
                })
            }
        },
        425749: (e, t, a) => {
            a.d(t, {
                I$: () => o,
                R2: () => d,
                WF: () => l,
                bZ: () => s,
                cE: () => n,
                jX: () => r,
                rz: () => c
            });
            var i = () => a(381453);

            function n(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let r = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function o(e) {
                return !!(void 0 !== e && (0, a(722371).Xk)(r, e))
            }

            function s() {
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

            function l(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (i().n4(e, t)) return !0;
                return !1
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
        428456: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            let i = new(a(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }, a = !1) => {
                var i;
                let n = await e.api.callApi({
                    eventName: "getInternalDomains",
                    environment: e,
                    data: {
                        spaceId: t
                    }
                });
                return "success" === n.type ? null == (i = n.data) ? void 0 : i.internalDomainsWithInfo : void 0
            });
            a(202146).exposeDebugValue("InternalDomainsStore", i);
            let n = i
        },
        428602: (e, t, a) => {
            a.d(t, {
                Y: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.053 6.407a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.893 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286M5.159 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M7.053 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M8.947 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M10.84 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286m-5.681 1.894a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286"
                        }), (0, i.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zm-.625 9.375V5.632h8.75v6.118c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                r = (0, a(104509).wt)("viewCalendarSmall", n, "small")
        },
        435276: (e, t, a) => {
            a.d(t, {
                V: () => i
            });

            function i(e) {
                let t = (0, a(533992).v3)(),
                    i = (0, a(972740).L)(),
                    {
                        spaceId: n,
                        spaceName: r
                    } = (0, a(682985).K8)(() => i ? {
                        spaceId: i.getSpaceId(),
                        spaceName: (0, a(742197).G)(t, i)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, i]),
                    [{
                        value: o,
                        status: s
                    }] = (0, a(97668).Yb)(async () => {
                        if (!n) return;
                        let i = await (0, a(124094).E)(t, n, e);
                        if (i) return r && (0, a(124094).Z)({
                            environment: t,
                            spaceName: r,
                            campaign: i,
                            entrypoint: e
                        }), i
                    }, [t, n, r, e]);
                return {
                    campaign: o,
                    loading: "pending" === s || "idle" === s
                }
            }
        },
        440605: (e, t, a) => {
            function i(e, t) {
                return e.find(e => e.presets.some(e => e.uri === t))
            }
            a.d(t, {
                B: () => i
            }), a(898992), a(672577), a(737550)
        },
        447364: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                inviteMemberIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 15.82 17.13",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M7.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M10 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h5.845a4.6 4.6 0 0 1-.28-1.25H5.85c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54.761-1.488 2.672-2.626 5.007-2.626.83 0 1.605.144 2.294.395.269-.364.59-.688.952-.96A7.9 7.9 0 0 0 10 11.63"
                        }), (0, i.jsx)("path", {
                            d: "M16 19.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m2.594-3.469a.625.625 0 0 0-.625-.625h-1.375v-1.375a.625.625 0 0 0-1.25 0v1.375h-1.375a.625.625 0 0 0 0 1.25h1.375v1.375a.625.625 0 1 0 1.25 0v-1.375h1.375c.345 0 .625-.28.625-.625"
                        })]
                    })
                },
                r = (0, a(104509).wt)("inviteMember", n, "default")
        },
        451034: (e, t, a) => {
            a.r(t), a.d(t, {
                globeSmallIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 1 0 12.1 6.05 6.05 0 0 1 0-12.1m-1.438 6.6c.048 1.194.25 2.247.539 3.016.167.445.353.766.532.967s.304.234.367.234.188-.033.367-.234c.179-.2.365-.522.532-.967.29-.77.491-1.822.54-3.016zm-3.481 0a4.95 4.95 0 0 0 3.326 4.137 5.4 5.4 0 0 1-.336-.734c-.343-.912-.562-2.1-.61-3.403zm7.458 0c-.048 1.303-.267 2.491-.61 3.403q-.15.396-.337.734a4.95 4.95 0 0 0 3.327-4.137zM6.407 3.312A4.95 4.95 0 0 0 3.081 7.45h2.38c.048-1.303.267-2.491.61-3.403q.149-.396.336-.734M8 3.234c-.063 0-.188.033-.367.234-.179.2-.365.523-.532.968-.29.77-.491 1.821-.54 3.015h2.877c-.048-1.194-.25-2.246-.539-3.015-.167-.445-.353-.767-.532-.968S8.063 3.233 8 3.233m1.592.08q.188.336.337.734c.343.912.562 2.1.61 3.403h2.38a4.95 4.95 0 0 0-3.327-4.137"
                    })
                },
                n = (0, a(104509).wt)("globeSmall", i, "small")
        },
        451199: (e, t, a) => {
            a.d(t, {
                A: () => o,
                p: () => r
            });
            var i = a(296540),
                n = a(474848);
            let r = 8,
                o = i.forwardRef(function({
                    isSelected: e,
                    radioButtonColor: t = "blue"
                }, i) {
                    let {
                        radioButtonStyle: o,
                        dotStyle: s
                    } = (0, a(960253).I)(() => {
                        let i = "blue" === t ? a(632079).Tj.blue.icon.accentPrimary : a(632079).Tj.red.icon.accentPrimary;
                        return {
                            radioButtonStyle: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                width: 16,
                                height: 16,
                                borderRadius: 16,
                                marginInlineEnd: r,
                                background: e ? i : a(632079).Tj.whiteButtonBackground,
                                border: e ? "none" : `1px solid ${a(632079).Tj.border.strongTranslucent}`,
                                transition: "background 100ms ease-out"
                            },
                            dotStyle: {
                                width: 6,
                                height: 6,
                                borderRadius: 6,
                                background: a(632079).Tj.text.inversePrimary,
                                transition: "opacity 100ms ease-out",
                                opacity: +!!e
                            }
                        }
                    }, [e, t]);
                    return (0, n.jsx)("div", {
                        ref: i,
                        style: o,
                        children: (0, n.jsx)("div", {
                            style: s
                        })
                    })
                })
        },
        451963: (e, t, a) => {
            a.d(t, {
                f: () => i
            });

            function i(e) {
                let {
                    spaceId: t,
                    userId: i,
                    enforceIdsCheck: n,
                    debugFrom: r
                } = e;
                if (!t || !i || !a(105692).subscriptionDataStoreInstance.userId || !a(105692).subscriptionDataStoreInstance.spaceId) {
                    if (n) return;
                    return a(105692).subscriptionDataStoreInstance
                }
                if (a(105692).subscriptionDataStoreInstance.spaceId === t || (a(773352).rateLimitedLog({
                        level: "warning",
                        from: "getSubscriptionDataStore",
                        type: n ? "rejectedCrossSpaceSubscriptionDataStoreRead" : "allowedCrossSpaceSubscriptionDataStoreRead",
                        spaceId: t,
                        data: {
                            userId: i,
                            miscDataToConvertToString: {
                                debugFrom: r,
                                enforceIdsCheck: n,
                                requestedUserId: i,
                                requestedSpaceId: t,
                                cachedSubscriptionDataUserId: a(105692).subscriptionDataStoreInstance.userId,
                                cachedSubscriptionDataSpaceId: a(105692).subscriptionDataStoreInstance.spaceId
                            }
                        }
                    }), !n)) {
                    if (a(105692).subscriptionDataStoreInstance.userId === i || (a(773352).rateLimitedLog({
                            level: "warning",
                            from: "getSubscriptionDataStore",
                            type: n ? "rejectedCrossUserSubscriptionDataStoreRead" : "allowedCrossUserSubscriptionDataStoreRead",
                            spaceId: t,
                            data: {
                                userId: i,
                                miscDataToConvertToString: {
                                    debugFrom: r,
                                    enforceIdsCheck: n,
                                    requestedUserId: i,
                                    requestedSpaceId: t,
                                    cachedSubscriptionDataUserId: a(105692).subscriptionDataStoreInstance.userId,
                                    cachedSubscriptionDataSpaceId: a(105692).subscriptionDataStoreInstance.spaceId
                                }
                            }
                        }), !n)) return a(105692).subscriptionDataStoreInstance
                }
            }
        },
        455205: (e, t, a) => {
            a.r(t), a.d(t, {
                FETCHABLE_TEAM_TYPES: () => o,
                fetchUnfetchedTeams: () => l,
                fetchUnfetchedTeamsFromLocalStorage: () => c,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => m,
                getTeamMetadataFromStore: () => f,
                getTeamStore: () => g,
                refetchTeams: () => d
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520);
            var i = () => a(988752);
            async function n(e) {
                let {
                    actorUserId: t,
                    targetUserId: i,
                    spaceId: n,
                    teamTypes: r,
                    teamIds: o,
                    environment: s
                } = e;
                if (!(0, a(422280).GL)({
                        actorUserId: t,
                        targetUserId: i,
                        teamTypes: r
                    })) throw new(a(101787)).qQk("User does not have permission to fetch teams for another user.");
                let l = await s.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: s,
                    data: {
                        spaceId: n,
                        teamTypes: Array.from(r),
                        teamIds: "all" === o ? void 0 : Array.from(o),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, a(958692).X7)() && void 0,
                        targetUserId: i
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: n
                    }
                });
                if ("failed" === l.type) throw l.error;
                let {
                    teams: d,
                    hasUnjoinedActiveTeams: c
                } = l.data;
                return {
                    teams: d,
                    ...void 0 !== c && {
                        hasUnjoinedActiveTeams: c
                    }
                }
            }
            let r = new(a(245541)).R({
                    key: "localStorageTeams",
                    namespace: a(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                o = ["Joined", "UnjoinedActive", "Archived"];
            async function s(e) {
                let {
                    userId: t,
                    spaceId: o,
                    teamTypesToUpdate: s,
                    teamIdsToUpdate: l,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                } = e, p = i().E.getOrCreateUnit(t, o);
                if (0 === s.size || "all" !== l && 0 === l.size) return void await p.pendingUpdates;
                let m = n({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: o,
                    teamTypes: s,
                    teamIds: l,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                });
                i().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: o,
                        fetchedTeamsPromise: m,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: s,
                        teamIdsToUpdate: l
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: i,
                            teamsResponse: n
                        } = e;
                        if (!a(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: o
                        } = n, s = o.filter(e => "Joined" === e.type), l = o.filter(e => "UnjoinedActive" === e.type), d = o.filter(e => "Archived" === e.type), c = s.concat(l, d).slice(0, 1e3);
                        r.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [i] : { ...n,
                                    teams: c
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: o,
                        teamsResponse: {
                            teams: Object.values(p.teams),
                            hasUnjoinedActiveTeams: p.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function l(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teamTypes: n,
                    environment: r,
                    canTruncateRecordMap: o,
                    sort: l
                } = e, d = i().E.getOrCreateUnit(t, a), c = new Set(Array.from(n.values()).filter(e => "server" !== d.lastFetchSourceOfTeamType[e]));
                await s({
                    userId: t,
                    spaceId: a,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: "all",
                    environment: r,
                    canTruncateRecordMap: o,
                    sort: l
                })
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teamIds: n,
                    environment: r
                } = e, l = i().E.getOrCreateUnit(t, a), d = new Set(o.filter(e => "server" === l.lastFetchSourceOfTeamType[e]));
                await s({
                    userId: t,
                    spaceId: a,
                    teamTypesToUpdate: d,
                    teamIdsToUpdate: n,
                    environment: r
                })
            }

            function c() {
                let e = r.getState();
                for (let t in e)
                    for (let a in e[t]) {
                        let n = i().E.getOrCreateUnit(t, a),
                            r = new Set(o.filter(e => "none" === n.lastFetchSourceOfTeamType[e]));
                        0 !== r.size && i().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: a,
                            fetchedTeamsPromise: Promise.resolve(e[t][a]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: r,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    teamTypes: n,
                    environment: r
                } = e;
                return await l({
                    userId: t,
                    spaceId: a.id,
                    teamTypes: n,
                    environment: r
                }), i().E.readTeams(t, a.id, n).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    environment: i
                } = e;
                return await u({
                    userId: t,
                    spaceStore: a,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: i
                })
            }
            async function m(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    environment: i
                } = e;
                return await u({
                    userId: t,
                    spaceStore: a,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: i
                })
            }

            function g(e) {
                let {
                    teamId: t,
                    spaceStore: i
                } = e;
                return a(681735).h.createChildStore(i, {
                    table: a(832375).yKj,
                    id: t
                })
            }

            function f(e) {
                var t;
                let {
                    teamStore: n,
                    userId: r,
                    spaceStore: o
                } = e, s = i().E.readMembershipCount({
                    userId: r,
                    spaceId: o.id,
                    teamId: n.id
                }), l = n.getArchivedBy() ? "Archived" : (0, a(220530).f)({
                    userId: r,
                    teamStore: n,
                    userPermissionGroups: a(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? "Joined" : "UnjoinedActive", d = (0, a(228091).a)({
                    teamStore: n,
                    userId: r,
                    userPermissionGroups: a(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? ? "none";
                return {
                    id: n.id,
                    title: n.getName() ? ? "",
                    icon: null == (t = n.getIcon()) ? void 0 : t.icon,
                    type: l,
                    membershipSummary: s,
                    lastEditedTime: 0 === n.getLastEditedTime() ? void 0 : n.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: n.getDisablePublicAccess(),
                        disableGuests: n.getDisableGuests(),
                        disableExport: n.getDisableExport()
                    },
                    teamRole: d,
                    isDefaultTeam: n.isDefault(),
                    accessLevel: n.getTeamAccessLevel(),
                    description: n.getDescription()
                }
            }
        },
        478418: (e, t, a) => {
            a.d(t, {
                J: () => i
            });

            function i(e, t) {
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
                iconDefinition: () => i,
                peopleFillSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.55 1.9 15.26 11.99",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.4 1.908c-.872 0-1.584.362-2.064.96-.469.584-.687 1.353-.687 2.145 0 .793.218 1.561.687 2.145.48.599 1.192.96 2.064.96s1.584-.361 2.065-.96c.468-.584.687-1.352.687-2.145s-.219-1.56-.687-2.144c-.48-.6-1.193-.96-2.065-.96M2.693 3.46c.445-.554 1.104-.888 1.907-.888.804 0 1.463.334 1.907.888.433.539.632 1.245.632 1.97s-.2 1.43-.632 1.97c-.444.553-1.103.887-1.907.887-.803 0-1.462-.334-1.907-.888-.433-.539-.632-1.245-.632-1.97s.2-1.43.632-1.97M.71 11.561c.68-1.42 2.175-2.389 3.89-2.389.797 0 1.547.21 2.19.576a5.6 5.6 0 0 0-.814 1.333 2.78 2.78 0 0 0 .337 2.811H2.43c-.577 0-1.132-.243-1.49-.656a1.51 1.51 0 0 1-.23-1.675M11.4 8.84c-1.917 0-3.58 1.117-4.279 2.735a1.54 1.54 0 0 0 .268 1.665c.36.41.913.652 1.49.652h5.04c.579 0 1.131-.242 1.492-.652a1.54 1.54 0 0 0 .268-1.665c-.7-1.618-2.362-2.736-4.279-2.736"
                    })
                },
                n = (0, a(104509).wt)("peopleFillSmall", i, "fillSmall")
        },
        496722: (e, t, a) => {
            a.d(t, {
                a: () => i
            });

            function i() {
                let e = a(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        497570: (e, t, a) => {
            function i(e) {
                return e.isReady() && !e.isDefined() && "none" !== e.getRole()
            }

            function n(e) {
                return (0, a(682985).K8)(() => i(e), [e])
            }
            a.d(t, {
                W: () => n,
                X: () => i
            })
        },
        503473: (e, t, a) => {
            a.d(t, {
                j: () => o
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function o(e) {
                let {
                    children: t,
                    style: o,
                    overlayContainerZIndex: s,
                    placement: l = "bottom",
                    tooltipStyle: d
                } = e, {
                    isSafari: c
                } = (0, a(533992).Y0)(), u = (0, i.useRef)(null), p = function(e) {
                    let [t, a] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void a(!1);
                        let i = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            a(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == i || i.observe(t), () => null == i ? void 0 : i.unobserve(t)
                    }, []), t
                }(u);
                return (0, n.jsx)(a(51831).m, {
                    delayThreshold: 500,
                    placement: l,
                    textWrap: !0,
                    style: d,
                    overlayContainerZIndex: s,
                    forceVisibleState: !!p && void 0,
                    disableTooltip: c,
                    content: () => p ? t : void 0,
                    children: e => (0, n.jsx)("div", {
                        ref: u,
                        ...a(952687).A.props(r, o),
                        ...e,
                        children: t
                    })
                })
            }
        },
        505116: (e, t, a) => {
            a.d(t, {
                z: () => i
            });

            function i(e) {
                let {
                    userId: t,
                    spaceStore: i
                } = e;
                return a(807825).L.createChildStore(i, {
                    table: a(832375).oo9,
                    id: t
                })
            }
        },
        519529: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                xMarkFillSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                n = (0, a(104509).wt)("xMarkFillSmall", i, "fillSmall")
        },
        541341: (e, t, a) => {
            a.d(t, {
                j: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                gap: 6
            };

            function r(e) {
                let {
                    type: t,
                    withSelectedStyle: r,
                    style: o,
                    shouldUseStyledText: s,
                    shouldAlwaysShowAccessLevelTooltip: l
                } = e, {
                    teamName: d,
                    accessLevel: c
                } = (0, a(682985).K8)(() => {
                    if ("teamStore" === t) {
                        var i;
                        let t = e.teamStore,
                            n = null == (i = t.getSettingsStore()) ? void 0 : i.getValue();
                        return {
                            teamName: t.getName() ? ? "",
                            accessLevel: n ? (0, a(422280).MA)(n) : void 0
                        }
                    }
                    if ("teamMetadata" === t) {
                        let t = e.teamMetadata;
                        return {
                            teamName: t.title,
                            accessLevel: t.accessLevel
                        }
                    }(0, a(722371).HB)(t)
                }, [t, e.teamStore, e.teamMetadata]), u = (0, a(960253).I)(() => ({
                    labelText: { ...a(699422).RC,
                        color: r ? a(632079).Tj.text.primary : a(632079).Tj.text.accentPrimary,
                        fontWeight: a(699422).Wy.medium,
                        fontSize: a(418676).vQ,
                        ...o
                    }
                }), [r, o]);
                return (0, i.jsxs)("div", {
                    style: n,
                    children: [s ? (0, i.jsx)(a(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "primary",
                        children: d
                    }) : (0, i.jsx)("div", {
                        style: u.labelText,
                        children: d
                    }), "private" === c || l ? (0, a(729869).Q)(c) : void 0]
                })
            }
        },
        551408: (e, t, a) => {
            function i() {
                let e = (0, a(83208).X)("database_agents"),
                    t = (0, a(682985).K8)(() => a(886556).z.isAiEnabled(), []);
                return e && t
            }

            function n() {
                return a(218744).default.checkGate({
                    gateName: "database_agents"
                }) && a(886556).z.isAiEnabled()
            }
            a.d(t, {
                A: () => i,
                R: () => n
            })
        },
        551942: (e, t, a) => {
            a.d(t, {
                T: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r({
                tooltipMessage: e,
                children: t,
                placement: o = "bottom"
            }) {
                return e ? (0, n.jsx)(a(51831).m, {
                    placement: o,
                    style: {
                        maxWidth: 240,
                        minWidth: 174
                    },
                    content: () => (0, n.jsx)(a(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "inversePrimary",
                        children: e
                    }),
                    textWrap: !0,
                    children: e => i.cloneElement(t, (0, a(63390).A)(e, t.props))
                }) : t
            }
        },
        555676: (e, t, a) => {
            let i;

            function n(e) {
                i = e
            }

            function r() {
                return i
            }
            a.d(t, {
                w: () => n,
                x: () => r
            })
        },
        557620: (e, t, a) => {
            a.d(t, {
                A: () => i
            }), a(581454);

            function i(e) {
                let t = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    var i;
                    let n = null == e ? void 0 : e.id;
                    if (n) return null == (i = a(428456).A.getData(t, {
                        spaceId: n
                    })) ? void 0 : i.map(e => e.domain)
                }, [t, e])
            }
        },
        577280: (e, t, a) => {
            a.d(t, {
                w: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let {
                    labelType: t
                } = e, n = "invited" === t ? a(805186).S.invitedLabel : "external" === t ? a(805186).S.externalLabel : a(805186).S.guestLabel;
                return (0, i.jsx)(a(746434).E, {
                    content: (0, i.jsx)(a(109939).sA, { ...n
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        582471: (e, t, a) => {
            a.d(t, {
                Y: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
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
                return t || o ? (0, i.jsxs)(a(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: r,
                    children: [t, o ? (0, i.jsx)(a(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: n,
                        children: o
                    }) : null]
                }) : null
            }
        },
        591637: (e, t, a) => {
            a.d(t, {
                a: () => r
            }), a(898992), a(354520), a(581454), a(296540);
            var i = a(474848);
            let n = {
                style0: {
                    width: 200
                },
                style1: {
                    minWidth: 200
                },
                caption: {
                    color: a(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: a(699422).Wy.regular,
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
                    sectionGap: s,
                    secondaryButtonTooltip: l
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !r) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === o ? (0, i.jsxs)(a(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: s ? ? 8,
                        ...n.positionRelative
                    },
                    children: [(0, i.jsxs)(a(4458).VP, {
                        style: {
                            gap: 7,
                            ...n.positionRelative
                        },
                        children: [d.map((e, t) => (0, i.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t)), r ? (0, i.jsx)("div", {
                            style: n.caption,
                            children: r
                        }) : null]
                    }), u ? l ? (0, i.jsx)(a(51831).m, {
                        content: () => l,
                        textWrap: !0,
                        style: n.style0,
                        placement: "bottom",
                        children: e => (0, i.jsx)("div", { ...e,
                            children: c.map((e, t) => (0, i.jsx)(a(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, i.jsx)("div", {
                        children: c.map((e, t) => (0, i.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === o ? (0, i.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: s ? ? 8,
                        ...n.positionRelative
                    },
                    children: [null == c ? void 0 : c.map((e, t) => (0, i.jsx)(a(124108).N, {
                        buttonInfo: e
                    }, t)), d.map((e, t) => (0, i.jsx)(a(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === o ? (0, i.jsxs)(a(4458).fI, {
                    justifyContent: "space-between",
                    children: [u ? l ? (0, i.jsx)(a(51831).m, {
                        content: () => l,
                        textWrap: !0,
                        style: n.style1,
                        placement: "bottom",
                        children: e => (0, i.jsx)("div", { ...e,
                            children: null == c ? void 0 : c.map((e, t) => (0, i.jsx)(a(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, i.jsx)("div", {
                        children: null == c ? void 0 : c.map((e, t) => (0, i.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, i.jsx)("div", {
                        children: d.map((e, t) => (0, i.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, a(722371).HB)(o)
            }
        },
        606430: (e, t, a) => {
            a.d(t, {
                w: () => d,
                y: () => l
            });
            let i = {
                    sources: {
                        "en-US": {
                            previewRootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            rootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                n = {
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
                r = {
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
                o = {
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
                s = {
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
                l = {
                    desktopPersonal: n,
                    desktopTeamCreate: r,
                    desktopTeamJoin: o,
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
                    evernote: s,
                    web: i
                },
                d = {
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
                A: () => o
            }), a(898992), a(354520), a(581454), a(737550);
            var i = a.n(a(844751)),
                n = a(296540),
                r = a(474848);
            let o = function({
                selectedProperty: e,
                onAccept: t,
                schema: o,
                onClose: s,
                allowProperty: l,
                isRelationProperty: d
            }) {
                let c, u = (0, a(109939).tz)(),
                    [p, m] = (0, n.useState)(""),
                    g = Object.keys(o),
                    f = g.some(a(235089).u);
                g = a(381453).Ul(g, e => {
                    let t = (0, a(561872)._g)({
                        schema: o,
                        property: e
                    });
                    return t ? t.name : ""
                });
                let h = f ? a(9247).Ho : a(439368).rn;
                if ((g = a(381453).FF(g, h)).unshift(h), l && (g = g.filter(e => {
                        let t = (0, a(561872)._g)({
                            schema: o,
                            property: e
                        });
                        return t && l(t)
                    })), p) {
                    let e = g.map(e => {
                        let t = (0, a(561872)._g)({
                            schema: o,
                            property: e
                        });
                        return t && t.name
                    });
                    e = i().filter(p, e).map(({
                        original: e
                    }) => e), g = g.filter(t => {
                        let i = (0, a(561872)._g)({
                            schema: o,
                            property: t
                        });
                        return i && i.name && e.includes(i.name)
                    })
                }
                let y = p || g.length > a(847754).R8,
                    b = a(381453).oE(g.map(i => {
                        let n = (0, a(561872)._g)({
                            schema: o,
                            property: i
                        });
                        return n ? {
                            key: i,
                            render: t => (0, r.jsx)(a(34824).G, { ...t,
                                propertySchema: n,
                                format: a(34824).e.Name,
                                isChecked: i === e
                            }),
                            action: () => t(i)
                        } : null
                    })),
                    x = [{
                        key: 0,
                        items: b
                    }],
                    v = y ? (0, r.jsx)(a(844565).A, {
                        isInput: !0,
                        children: (0, r.jsx)(a(310324).Ay, {
                            focus: !a(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            value: p,
                            onChange: e => m(e.target.value),
                            placeholder: d ? u.formatMessage({
                                defaultMessage: "Search for a relation property…",
                                id: "propertySelectMenu.searchForProperty.relation.placeholder"
                            }) : u.formatMessage({
                                defaultMessage: "Search for a property…",
                                id: "propertySelectMenu.searchForProperty.default.placeholder"
                            })
                        })
                    }) : null;
                return c = a(986939).A.isMobile ? {
                    menuType: a(649476).gu.Modal,
                    title: d ? u.formatMessage({
                        defaultMessage: "Relation property",
                        id: "propertySelectMenu.mobileMenu.relationProperty.header"
                    }) : u.formatMessage({
                        defaultMessage: "Property",
                        id: "propertySelectMenu.mobileMenu.property.header"
                    }),
                    right: (0, r.jsx)(a(109939).sA, { ...a(789722).W.cancel
                    }),
                    onClickRight: s,
                    header: v
                } : {
                    menuType: a(649476).gu.Popup,
                    width: 280,
                    maxHeight: 480,
                    header: v
                }, (0, r.jsx)(a(747369).A, { ...c,
                    children: 0 === b.length ? (0, r.jsx)(a(844565).A, {
                        children: (0, r.jsx)(a(498341).u, {
                            title: (0, r.jsx)(a(109939).sA, {
                                defaultMessage: "No results",
                                id: "propertySelectMenu.search.noResults.title"
                            })
                        })
                    }) : (0, r.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        sections: x,
                        onAccept: s,
                        initialFocus: p.length > 0 ? 0 : void 0
                    })
                })
            }
        },
        646440: (e, t, a) => {
            function i(e) {
                return e.table === a(43296).C ? e : void 0
            }

            function n(e) {
                var t;
                return (null == (t = e.getModel()) ? void 0 : t.getData()) || (0, a(425749).bZ)()
            }

            function r(e) {
                let {
                    workflowPointer: t,
                    threadPointer: a
                } = e, i = t ? ? a;
                if (!i) throw Error("No workflow definition pointer found");
                return i
            }

            function o(e) {
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

            function s(e) {
                var t, i;
                let n;
                switch (e.table) {
                    case a(581654).U6:
                        n = null == (t = e.getData()) ? void 0 : t.runtime_actor_pointer;
                        break;
                    case a(43296).C:
                        n = null == (i = e.getPublishedArtifactStore()) || null == (i = i.getData()) ? void 0 : i.runtime_actor_pointer;
                        break;
                    default:
                        (0, a(722371).HB)(e)
                }
                if (n && n.table === a(890920).GP) return n.id
            }
            a.r(t), a.d(t, {
                getBotIdFromStore: () => s,
                getWorkflowDefinitionPointer: () => r,
                getWorkflowIdFromStore: () => o,
                getWorkflowValue: () => n,
                maybeWorkflowStore: () => i
            }), a(16280)
        },
        650750: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                squareOnSquarePlusIcon: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.51 15.51",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12 8.875c.345 0 .625.28.625.625v1.875H14.5a.625.625 0 1 1 0 1.25h-1.875V14.5a.625.625 0 1 1-1.25 0v-1.875H9.5a.625.625 0 1 1 0-1.25h1.875V9.5c0-.345.28-.625.625-.625"
                        }), (0, i.jsx)("path", {
                            d: "M4.5 2.375A2.125 2.125 0 0 0 2.375 4.5V12c0 1.174.951 2.125 2.125 2.125h1.625v1.625c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-7.5a2.125 2.125 0 0 0-2.125-2.125h-1.625V4.5A2.125 2.125 0 0 0 12 2.375zm8.375 3.75H8.25A2.125 2.125 0 0 0 6.125 8.25v4.625H4.5A.875.875 0 0 1 3.625 12V4.5c0-.483.392-.875.875-.875H12c.483 0 .875.392.875.875zm-5.5 2.125c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("squareOnSquarePlus", n, "default")
        },
        681693: (e, t, a) => {
            a.d(t, {
                $L: () => r,
                BZ: () => l,
                EC: () => p,
                EI: () => y,
                E_: () => S,
                Ed: () => c,
                Fq: () => g,
                Lu: () => x,
                Mk: () => u,
                O0: () => j,
                V$: () => v,
                VQ: () => m,
                Xx: () => b,
                Xy: () => s,
                _g: () => h,
                dd: () => d,
                pW: () => o,
                q3: () => n,
                wH: () => i,
                xK: () => I
            });
            let i = 160,
                n = 40,
                r = 40,
                o = 20,
                s = 600,
                l = 270,
                d = 405,
                c = 480,
                u = 500,
                p, m = 16,
                g = 8,
                f = {
                    backdropFilter: "blur(48px)",
                    WebkitBackdropFilter: "blur(48px)"
                },
                h = 4;

            function y() {
                return {
                    icon: a(632079).Tj.icon.secondary,
                    text: a(632079).Tj.text.secondary
                }
            }

            function b() {
                return {
                    width: 48,
                    height: 48,
                    fill: a(632079).Tj.icon.tertiary
                }
            }

            function x({
                isPhone: e
            }) {
                return e ? a(632079).Tj.personalHomeBackgroundPhone : a(632079).Tj.background.primary
            }

            function v({
                isPhone: e,
                themeMode: t
            }) {
                return {
                    zIndex: 1,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 12,
                    background: a(632079).Tj.home.tile.background,
                    boxShadow: S({
                        isPhone: e,
                        themeMode: t
                    }),
                    ...f
                }
            }

            function j({
                mode: e
            }) {
                switch (e) {
                    case "dark":
                    default:
                        return 0;
                    case "light":
                        return 1
                }
            }

            function S({
                isPhone: e,
                themeMode: t,
                borderOnly: i
            }) {
                if ("dark" === t) return "unset";
                let n = j({
                    mode: t
                });
                return (0, a(381453).oE)([i || e ? void 0 : "0 12px 32px rgba(0, 0, 0, 0.02)", `0 0 0 ${n}px rgba(0, 0, 0, 0.05)`]).join(", ")
            }

            function I(e) {
                let {
                    borderOnly: t
                } = e, i = (0, a(533992).WS)(), n = (0, a(960253).e)();
                return {
                    unhoveredBoxShadow: S({
                        isPhone: i,
                        themeMode: n,
                        borderOnly: t
                    }),
                    hoveredBoxShadow: "light" === n ? "0 12px 32px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.085)" : a(632079).Tj.homeShadow.card.hovered
                }
            }
        },
        682612: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowInCircleUpFillIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 17.625a7.625 7.625 0 1 0 0-15.25 7.625 7.625 0 0 0 0 15.25m3.042-8.07a.625.625 0 0 1-.884 0L10.625 8.02v5.466a.625.625 0 1 1-1.25 0V8.021L7.842 9.554a.625.625 0 1 1-.884-.883l2.6-2.6a.625.625 0 0 1 .884 0l2.6 2.6a.625.625 0 0 1 0 .883"
                    })
                },
                n = (0, a(104509).wt)("arrowInCircleUpFill", i, "fill")
        },
        691509: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(944114), a(898992), a(803949), a(581454);
            var i = a(296540),
                n = a(474848);
            let r = function({
                children: e,
                onClick: t,
                items: i,
                getKey: r,
                renderItem: o,
                selectedItem: l,
                onSelect: d,
                dontCloseParentOnSelect: c,
                menuTypeOverride: u,
                menuTitle: p,
                width: m,
                minWidth: g,
                disabled: f,
                originGap: h,
                originRectTransform: y,
                buttonPopupStore: b,
                sameWidthAsOrigin: x
            }) {
                let v = (0, a(682985).uB)(b, a(510969).A),
                    j = u ? ? (a(986939).A.isMobile ? a(649476).gu.Modal : a(649476).gu.Popup);
                return (0, n.jsx)(a(656252).A, {
                    popupType: function(e) {
                        switch (e) {
                            case a(649476).gu.ActionSheet:
                                return a(423291).n.SlideUp;
                            case a(649476).gu.Modal:
                                return a(423291).n.BottomSheet;
                            case a(649476).gu.Popup:
                                return a(423291).n.Popup
                        }
                    }(j),
                    bottomSheetInitialState: "half",
                    buttonPopupStore: v,
                    placementToOrigin: "bottom",
                    onClick: t,
                    content: e => (0, n.jsx)(s, {
                        parent: e,
                        items: i,
                        getKey: r,
                        renderItem: o,
                        selectedItem: l,
                        onSelect: d,
                        dontCloseParentOnSelect: c,
                        menuType: j,
                        menuTitle: p,
                        width: m,
                        minWidth: g
                    }),
                    disabled: f,
                    originGap: h,
                    originRectTransform: y,
                    sameWidthAsOrigin: x,
                    children: e
                })
            };

            function o(e, t, n, r, o, s, l, d) {
                return {
                    key: 0,
                    render: e => (0, i.createElement)(a(844565).A, { ...e,
                        key: t,
                        topBorder: t > 0
                    }),
                    items: e.map(e => ({
                        key: r(e),
                        render: t => o({ ...t,
                            value: e,
                            key: r(e),
                            selectedItem: s
                        }),
                        action: () => {
                            s !== e && l(e), d || n.close()
                        }
                    }))
                }
            }

            function s({
                parent: e,
                items: t,
                getKey: i,
                renderItem: r,
                selectedItem: l,
                onSelect: d,
                dontCloseParentOnSelect: c,
                menuType: u,
                menuTitle: p,
                width: m,
                minWidth: g
            }) {
                let f, h = [];
                if (t.length > 0 && t[0] instanceof Array) t.forEach((t, a) => {
                    let n = o(t, a, e, i, r, l, d, c);
                    h.push(n)
                });
                else {
                    let a = o(t, 0, e, i, r, l, d, c);
                    h.push(a)
                }
                let y = (0, n.jsx)(a(558045).A, {
                    type: a(558045).O.Vertical,
                    initialFocus: a(381453).SL(a(381453).Bq(t), e => a(381453).n4(e, l)),
                    sections: h
                });
                switch (u) {
                    case a(649476).gu.ActionSheet:
                        f = {
                            menuType: a(649476).gu.ActionSheet
                        };
                        break;
                    case a(649476).gu.Modal:
                        f = {
                            menuType: a(649476).gu.Modal,
                            title: p,
                            right: (0, n.jsx)(a(109939).sA, { ...a(789722).W.done
                            }),
                            onClickRight: e.close
                        };
                        break;
                    case a(649476).gu.Popup:
                        f = {
                            menuType: a(649476).gu.Popup,
                            width: m || 160,
                            minWidth: g
                        };
                        break;
                    default:
                        (0, a(722371).HB)(u)
                }
                return (0, n.jsx)(a(747369).A, { ...f,
                    children: y
                })
            }
        },
        714719: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                paperPlaneFillIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.07 2.9 15.08 15.08",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m16.37 2.901-.053.019L2.474 8.277A.625.625 0 0 0 2.4 9.408l4.826 2.638zm-8.366 9.922 2.638 4.827a.625.625 0 0 0 1.13-.074L17.13 3.733l.019-.054z"
                    })
                },
                n = (0, a(104509).wt)("paperPlaneFill", i, "fill")
        },
        720722: (e, t, a) => {
            a.d(t, {
                m: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                header: {
                    fontWeight: a(699422).Wy.bold,
                    fontSize: 26,
                    textAlign: "center",
                    marginBottom: 4,
                    lineHeight: "32px"
                },
                iconGroup: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gridColumnGap: 9,
                    marginBottom: 12,
                    height: 40
                },
                arrowRight: {
                    width: 20,
                    height: 20,
                    opacity: .4,
                    fontWeight: a(699422).Wy.bold,
                    padding: 3
                },
                notionLogo: {
                    height: 40,
                    width: 40,
                    color: a(632079).Tj.icon.primary
                },
                icon: {
                    height: 32,
                    width: 32
                },
                description: {
                    textAlign: "center",
                    color: a(632079).Tj.text.secondary,
                    fontWeight: a(699422).Wy.regular,
                    fontSize: 14,
                    lineHeight: "20px"
                }
            };

            function r(e) {
                let {
                    title: t,
                    description: r,
                    integrationIconUrl: o,
                    integrationIcon: s,
                    children: l,
                    styles: d
                } = e;
                return (0, i.jsxs)("div", {
                    style: null == d ? void 0 : d.wrapper,
                    children: [(0, i.jsxs)("div", {
                        style: { ...n.iconGroup,
                            ...null == d ? void 0 : d.iconGroup
                        },
                        children: [(0, a(792668).notionIcon)(n.notionLogo), (0, i.jsx)(a(16275).I, {
                            icon: a(53445).arrowLeftRightIcon,
                            style: { ...n.arrowRight,
                                ...null == d ? void 0 : d.arrowRight
                            }
                        }), o ? (0, i.jsx)("img", {
                            style: { ...n.icon,
                                ...null == d ? void 0 : d.icon
                            },
                            src: o,
                            alt: "Integration Icon"
                        }) : s]
                    }), t ? (0, i.jsx)("div", {
                        style: { ...n.header,
                            ...null == d ? void 0 : d.header
                        },
                        children: t
                    }) : void 0, r ? (0, i.jsx)("div", {
                        style: { ...n.description,
                            ...null == d ? void 0 : d.description
                        },
                        children: r
                    }) : void 0, l]
                })
            }
        },
        725187: (e, t, a) => {
            a.d(t, {
                W: () => n
            }), a(296540);
            var i = a(474848);

            function n({
                colorPalette: e,
                colorVariant: t,
                size: o,
                children: s
            }) {
                return (0, i.jsx)(a(111010).D, {
                    style: {
                        display: "contents"
                    },
                    colorPalette: e,
                    colorVariant: t,
                    styleKey: r[o],
                    children: s
                })
            }
            let r = {
                small: "captionMedium",
                default: "bodyMedium",
                large: "bodyMedium"
            }
        },
        729869: (e, t, a) => {
            a.d(t, {
                Q: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                if (!e) return !1;
                switch (e) {
                    case "private":
                    case "closed":
                        return (0, i.jsx)(s, {
                            accessLevel: e
                        });
                    case "open":
                        return null;
                    default:
                        (0, a(722371).HB)(e)
                }
            }
            let r = {
                    width: 210
                },
                o = {
                    alignContent: "center"
                };

            function s({
                accessLevel: e
            }) {
                let t = (0, a(422280).UN)(e);
                return (0, i.jsx)(a(51831).m, {
                    textWrap: !0,
                    style: r,
                    placement: "bottom",
                    content: () => {
                        switch (e) {
                            case "private":
                                return (0, i.jsx)(a(109939).sA, {
                                    id: "teamLockIcon.tooltip",
                                    defaultMessage: "Private teamspaces can only be accessed or joined by invitation"
                                });
                            case "closed":
                                return (0, i.jsx)(a(109939).sA, {
                                    id: "teamClosedIcon.tooltip",
                                    defaultMessage: "Closed teamspaces require approval to join"
                                });
                            default:
                                (0, a(722371).HB)(e)
                        }
                    },
                    children: e => (0, i.jsx)("div", { ...e,
                        style: o,
                        children: (0, i.jsx)(a(708966).Q, {
                            iconGroup: t,
                            variantName: "small",
                            size: "sm",
                            colorVariant: "secondary"
                        })
                    })
                })
            }
        },
        739271: (e, t, a) => {
            a.d(t, {
                s: () => n
            });
            var i = a(296540);

            function n() {
                let [e, t] = (0, i.useState)({
                    inputElementAttributes: void 0,
                    suppressFocusRing: !1
                }), [a, n] = (0, i.useState)(!1), [r, o] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    if (a) {
                        function e() {
                            o(!1)
                        }

                        function t(e) {
                            ("ArrowDown" === e.key || "ArrowUp" === e.key) && o(!0)
                        }
                        return window.addEventListener("pointerdown", e), window.addEventListener("keydown", t), () => {
                            window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", t)
                        }
                    }
                }, [a]), [(0, i.useMemo)(() => ({
                    inputElementAttributes: e.inputElementAttributes,
                    suppressFocusRing: e.suppressFocusRing && r,
                    onFocus: () => {
                        n(!0)
                    },
                    onBlur: () => {
                        n(!1)
                    }
                }), [e, r]), (0, i.useMemo)(() => ({
                    setComboboxState: t,
                    isFocusVisible: r,
                    isComboboxFocused: a,
                    onItemHover: () => {
                        o(!1)
                    }
                }), [r, a])]
            }
        },
        740957: (e, t, a) => {
            a.d(t, {
                c: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                padding: 1
            };

            function r(e) {
                var t;
                let {
                    upsell: r,
                    upgradeStatus: s,
                    handleClick: l,
                    customMessages: d,
                    showPlanName: c,
                    onMouseDown: u,
                    hoverRef: p,
                    featureName: m
                } = e, g = (0, a(109939).tz)(), f = (0, a(156139).e)(s), {
                    productName: h,
                    upgradePhrase: y
                } = (0, a(327506).n)({
                    upsell: r,
                    intl: g,
                    featureName: m,
                    upgradeStatus: s
                }), b = null != d && d[s] ? g.formatMessage(d[s], { ...(0, a(426458).I)(e => (0, i.jsx)(a(725187).W, { ...f.highlightText,
                        size: "small",
                        children: e
                    })),
                    productName: h,
                    upgradePhrase: y,
                    ...d[s].interpolatedValues
                }) : f.label.icon({
                    intl: g,
                    upsell: r,
                    featureName: m
                }), x = c ? e.iconAlignment ? ? "left" : "left", {
                    animationState: v,
                    animationTriggers: j
                } = (0, a(183999).lP)(p);
                return (0, i.jsx)(a(551942).T, {
                    tooltipMessage: p ? void 0 : (null == (t = f.disabledTooltip) ? void 0 : t.call(f, {
                        intl: g,
                        upsell: r,
                        featureName: m
                    })) ? ? b,
                    children: (0, i.jsx)(a(988022).p, { ...p ? {} : j,
                        disabled: !!f.disabledTooltip,
                        hoveredStyle: p ? {
                            background: "unset"
                        } : void 0,
                        size: "xs",
                        style: {
                            gap: 4 * !!c
                        },
                        iconLeading: "left" === x ? { ...(0, a(183999).e4)({
                                icon: f.icon({
                                    upsell: r
                                }),
                                animationState: v
                            }),
                            size: "xs"
                        } : void 0,
                        iconTrailing: "right" === x ? { ...(0, a(183999).e4)({
                                icon: f.icon({
                                    upsell: r
                                }),
                                animationState: v
                            }),
                            size: "xs"
                        } : void 0,
                        onClick: l,
                        onMouseDown: u,
                        children: c && h ? (0, i.jsx)("span", {
                            style: n,
                            children: (0, i.jsx)(a(725187).W, { ...f.highlightText,
                                size: "small",
                                children: "product" === r.type && "ai_credit_pack" === r.product ? g.formatMessage(o.credits) : h
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
        766970: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                xMarkFillIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                n = (0, a(104509).wt)("xMarkFill", i, "fill")
        },
        785267: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = a(296540),
                n = a(474848);
            let r = i.forwardRef(function(e, t) {
                let {
                    onClose: r,
                    persistOnClose: l,
                    content: d,
                    stopClickPropagation: c,
                    onClick: u,
                    disablePopup: p,
                    disabled: m,
                    forceInitialInbound: g,
                    children: f,
                    originGap: h,
                    borderRadius: y,
                    popupWrapStyle: b
                } = e, x = (0, a(682985).uB)(e.buttonPopupStore, a(510969).A);
                (0, i.useEffect)(() => () => {
                    x.setState({
                        open: !1
                    })
                }, [x]);
                let v = (0, i.useCallback)(() => o(r, l, x), [r, l, x]),
                    j = (0, i.useCallback)(() => (0, n.jsx)(s, {
                        onClose: r,
                        persistOnClose: l,
                        content: d,
                        buttonPopupStore: x
                    }), [r, l, d, x]),
                    S = (0, i.useCallback)(e => {
                        var t, i, n, r, o;
                        return t = e, i = c, n = u, r = p, o = x, void(i && (null == t || t.stopPropagation()), !(t && (0, a(85520).V)(t)) && (n && n(t), r || o.setState({ ...o.state,
                            open: !0
                        })))
                    }, [c, u, p, x]),
                    I = f ? f({ ...e,
                        onClick: m ? a(763230).D_ : S
                    }) : null,
                    w = (0, a(682985).K8)(() => x.state.open, [x]);
                return (0, n.jsx)(a(182718).zD, {
                    ref: t,
                    ...e,
                    forceInitialInbound: !!g,
                    content: j,
                    open: w,
                    onDismiss: v,
                    originGap: h,
                    borderRadius: y,
                    popupWrapStyle: b,
                    trapFocus: !0,
                    children: I
                })
            });

            function o(e, t, a) {
                e && e(), t || a.reset()
            }

            function s({
                onClose: e,
                persistOnClose: t,
                content: r,
                buttonPopupStore: l
            }) {
                let d = (0, i.useCallback)(() => o(e, t, l), [e, t, l]),
                    c = (0, a(682985).K8)(() => r({
                        close: d
                    }), [r, d], {
                        silenceRerenderDefender: !0
                    });
                return (0, n.jsx)(n.Fragment, {
                    children: c
                })
            }
        },
        789722: (e, t, a) => {
            a.d(t, {
                W: () => i
            });
            let i = (0, a(109939).YK)({
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
        796123: (e, t, a) => {
            a.r(t), a.d(t, {
                showAsyncModal: () => n,
                showAsyncModalComponent: () => r,
                testOnly: () => m
            }), a(898992), a(354520), a(672577), a(581454);
            var i = a(296540);

            function n(e, t = a(2009).w) {
                return new Promise((a, i) => {
                    try {
                        let n = c({
                            renderModal: e,
                            promiseResolve: a,
                            promiseReject: i,
                            store: t
                        });
                        o({
                            asyncModal: n,
                            store: t
                        })
                    } catch (e) {
                        i(e)
                    }
                })
            }

            function r(e, t = a(2009).w) {
                return n(t => i.createElement(e, t), t)
            }

            function o(e) {
                let {
                    asyncModal: t,
                    store: i = a(2009).w
                } = e;
                i.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: i,
                    store: n = a(2009).w
                } = e;
                return e => {
                    let a = u({
                        id: t,
                        store: n
                    });
                    null != a && a.isOpen && (p({
                        id: t,
                        store: n,
                        update: {
                            isOpen: !1
                        }
                    }), i(e))
                }
            }

            function l(e) {
                let {
                    id: t,
                    promiseResolve: i,
                    store: n = a(2009).w
                } = e;
                return () => {
                    let e = u({
                        id: t,
                        store: n
                    });
                    null != e && e.isOpen && (p({
                        id: t,
                        store: n,
                        update: {
                            isOpen: !1
                        }
                    }), i())
                }
            }

            function d(e) {
                let {
                    id: t,
                    store: i = a(2009).w
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
                    promiseReject: n,
                    store: r = a(2009).w
                } = e, o = a(92513).JW(), c = d({
                    id: o,
                    store: r
                }), u = l({
                    id: o,
                    promiseResolve: i,
                    store: r
                }), p = s({
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
                            throw n(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function u(e) {
                let {
                    id: t,
                    store: i = a(2009).w
                } = e;
                return i.state.asyncModals.find(e => e.id === t)
            }

            function p(e) {
                let {
                    id: t,
                    update: i,
                    store: n = a(2009).w
                } = e;
                n.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...i
                    })
                }))
            }
            let m = {
                addAsyncModal: o,
                createAsyncModal: c,
                createOnClosed: d,
                createOnDismiss: l,
                createResolve: s,
                getAsyncModal: u,
                updateAsyncModal: p
            }
        },
        799236: (e, t, a) => {
            a.d(t, {
                D6: () => o,
                Ud: () => n,
                kD: () => r,
                lR: () => i
            });
            let i = {
                    small: "md",
                    default: "lg",
                    large: "xl"
                },
                n = {
                    small: "xs",
                    default: "sm",
                    large: "sm"
                },
                r = {
                    small: "xs",
                    default: "sm"
                },
                o = {
                    small: "xxs",
                    default: "sm"
                }
        },
        803254: (e, t, a) => {
            a.d(t, {
                F: () => i
            });

            function i() {
                return a(986939).A.isMobile
            }
        },
        805469: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var i = a(296540);
            let n = function({
                shouldPreserveTextSelection: e,
                shouldPreserveBlockSelection: t,
                shouldRestoreSelection: n,
                onClearSelection: r
            }) {
                let o = (0, a(533992).v3)(),
                    s = (0, i.useRef)(e),
                    l = (0, i.useRef)(""),
                    d = (0, i.useRef)({
                        selectionState: null,
                        textSelectionState: null
                    }),
                    c = (0, i.useCallback)(() => d.current, []),
                    u = (0, i.useCallback)(() => {
                        l.current = window.location.href, a(358377).default.hasSelection() && (d.current.textSelectionState = a(358377).default.cloneState()), (0, a(525779).clear)({
                            environment: o
                        }), t && (a(584265).default.isSelected() && (d.current.selectionState = a(584265).default.cloneState()), (0, a(471e3).I)({
                            environment: o
                        }))
                    }, [o, t]),
                    p = (0, i.useCallback)(() => {
                        d.current = {
                            selectionState: null,
                            textSelectionState: null
                        }, l.current = "", null == r || r()
                    }, [r]),
                    m = (0, i.useCallback)(() => {
                        let {
                            selectionState: e,
                            textSelectionState: i
                        } = d.current;
                        window.location.href === l.current && (i && "mode" in i && "editing" === i.mode && a(358377).default.setState({ ...a(358377).default.state,
                            ...i
                        }), t && e && a(584265).default.setState({ ...a(584265).default.state,
                            ...e
                        })), p()
                    }, [p, t]);
                return (0, a(383953).l)(() => {
                    s.current = e, e && u()
                }), (0, i.useEffect)(() => (s.current && !e ? n ? m() : p() : !s.current && e && u(), s.current = e, () => {
                    n ? m() : p()
                }), [e, p, m, u, n]), {
                    clearSavedSelection: p,
                    restoreSavedSelection: m,
                    getSavedSelection: c
                }
            }
        },
        824843: (e, t, a) => {
            a.d(t, {
                P: () => n
            }), a(296540);
            var i = a(474848);
            let n = (0, a(839697).p)("presentFillAnimated", {
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
                p: () => n
            }), a(296540);
            var i = a(474848);

            function n(e, t) {
                let {
                    viewBox: n,
                    svg: r
                } = t, o = n ? ? `0 0 ${a(104509).Ev.default} ${a(104509).Ev.default}`;
                return Object.assign(({
                    style: t,
                    className: n,
                    label: s,
                    animationState: l,
                    skipBaseStyles: d
                }) => {
                    let c = n ? `${e} ${n}` : e;
                    return (0, i.jsx)(a(670375).A, {
                        viewBox: o,
                        className: c,
                        style: t,
                        label: s,
                        skipBaseStyles: d,
                        children: r(l)
                    })
                }, {
                    __iconDefinition: {
                        viewBox: o,
                        svg: r("initial")
                    }
                })
            }
        },
        840752: (e, t, a) => {
            a.d(t, {
                M: () => i
            });

            function i(e) {
                let {
                    spaceId: t,
                    userId: i,
                    enforceIdsCheck: n,
                    debugFrom: r
                } = e, o = (0, a(451963).f)({
                    spaceId: t,
                    userId: i,
                    enforceIdsCheck: n,
                    debugFrom: r
                });
                return null == o ? void 0 : o.state
            }
        },
        845001: (e, t, a) => {
            function i(e, t) {
                return a(218744).default.checkGate({
                    gateName: "collections_capabilities_refactor"
                }) ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1
            }

            function n(e, t) {
                let i = (0, a(83208).X)("collections_capabilities_refactor");
                return (0, a(682985).K8)(() => i ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1, [e, t, i])
            }
            a.d(t, {
                q: () => i,
                x: () => n
            })
        },
        847754: (e, t, a) => {
            a.d(t, {
                R8: () => r,
                VL: () => n,
                xO: () => i
            });
            let i = 480,
                n = 320,
                r = 6
        },
        853160: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkCircleIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, i.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                r = (0, a(104509).wt)("checkmarkCircle", n, "default")
        },
        855021: (e, t, a) => {
            a.d(t, {
                q: () => i
            });

            function i() {
                let e = (0, a(972740).L)(),
                    t = (0, a(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    i = (0, a(533992).v3)(),
                    n = (0, a(682985).K8)(() => a(375592).T.getData(i, {
                        userId: i.currentUser.id || ""
                    }), [i]);
                return (0, a(682985).K8)(() => (0, a(407998).V)({
                    environment: i,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: n
                }), [i, e, t, n])
            }
        },
        862215: (e, t, a) => {
            a.d(t, {
                G: () => i
            });

            function i(e, t) {
                let {
                    device: a
                } = e;
                a.isAndroid && t.focus(), t.select()
            }
        },
        874003: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
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
                    let i = null == (e = (0, a(328765).S)()) ? void 0 : e.canAdmin(),
                        n = (null == (t = (0, a(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privatePageStore && i && n
                }
                shouldUserHaveAccessToPrivateWorkflow() {
                    var e, t;
                    let i = null == (e = (0, a(328765).S)()) ? void 0 : e.canAdmin(),
                        n = (null == (t = (0, a(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privateWorkflowStore && i && n
                }
                doesUserAlreadyHaveEditorAccess(e) {
                    let t = a(728372).AppStoreSidebarSpaceStore.state;
                    return !!t && (e.table === a(832375).evP ? a(970831).B.createChildStore(t, e) : "collection" === e.table ? a(356912).m.createChildStore(t, e) : a(360851).N.createChildStore(t, e)).canAdmin()
                }
            }
            let r = n
        },
        876252: (e, t, a) => {
            a.d(t, {
                $: () => i
            });

            function i() {
                return (0, a(682985).O$)(a(728372).AppStoreCurrentUserStore)
            }
        },
        884877: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let t = {
                    display: "inline-block",
                    minWidth: e.size,
                    minHeight: e.size
                };
                return "x" === e.axis ? t.minHeight = 1 : "y" === e.axis && (t.minWidth = 1), (0, i.jsx)("div", {
                    style: t
                })
            }
        },
        895105: (e, t, a) => {
            a.r(t), a.d(t, {
                filterIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                n = (0, a(104509).wt)("filter", i, "default")
        },
        916612: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            var i = a(474848);
            let n = function({
                    imageURL: e,
                    imageWidth: t,
                    imageHeight: n,
                    caption: r,
                    title: s,
                    imageContainerStyle: l
                }) {
                    if (!e) return (0, i.jsx)(o, {
                        caption: r,
                        title: s,
                        style: {
                            width: t
                        }
                    }); {
                        let d = (0, a(703003).L)(e);
                        return (0, i.jsxs)("div", {
                            style: {
                                width: t || 200,
                                marginTop: 4,
                                marginBottom: 4
                            },
                            children: [(0, i.jsx)("div", {
                                style: {
                                    width: "100%",
                                    height: n || 100,
                                    borderRadius: 4,
                                    backgroundImage: `url(${d})`,
                                    backgroundSize: "cover",
                                    marginBottom: 6,
                                    ...l
                                }
                            }), (0, i.jsx)(o, {
                                caption: r,
                                title: s
                            })]
                        })
                    }
                },
                r = {
                    style0: {
                        fontWeight: a(699422).Wy.bold,
                        marginBottom: 4
                    },
                    style1: {
                        whiteSpace: "normal",
                        lineHeight: 1.4
                    }
                };

            function o({
                style: e,
                caption: t,
                title: a
            }) {
                return (0, i.jsxs)("div", {
                    style: { ...r.style1,
                        ...e
                    },
                    children: [a ? (0, i.jsx)("header", {
                        style: r.style0,
                        children: a
                    }) : void 0, t]
                })
            }
        },
        917850: (e, t, a) => {
            a.d(t, {
                y: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {}
                }
                requestOpenExternalSyncSettings(e, t) {
                    this.setState({
                        pendingOpenSource: e,
                        pendingOpenFrom: t
                    })
                }
                clearPendingOpen() {
                    this.setState({
                        pendingOpenSource: void 0,
                        pendingOpenFrom: void 0
                    })
                }
            }
            let r = new n
        },
        920224: (e, t, a) => {
            a.d(t, {
                A: () => u,
                S: () => d
            });
            var i = a(296540),
                n = a(474848);
            let r = "bodyRegular",
                o = "bodySemibold",
                s = "bodySmRegular",
                l = i.forwardRef((e, t) => {
                    let i, {
                            actor: r,
                            defaultUserTitle: o = "name_only",
                            useEmailAsTooltip: s,
                            tooltip: l,
                            tooltipPlacement: u,
                            hoveredStyle: p,
                            disabledFeedback: m,
                            customUserTitleStyles: g,
                            iconSizeOverride: f
                        } = e,
                        h = (0, a(682985).K8)(() => r.asActor && r.isUser() ? r.email : void 0, [r]),
                        y = s && h ? h : l,
                        b = f || (a(986939).A.isMobile ? a(636518).nd : a(636518).pg),
                        x = "name_and_email" !== o && ("name_and_email_unless_right" !== o || e.right) ? (0, n.jsx)(d, {
                            customStyles: g,
                            actor: null == r ? void 0 : r.asActor
                        }) : (0, n.jsx)(c, {
                            actor: null == r ? void 0 : r.asActor,
                            customStyles: g
                        });
                    return (0, a(197018).H3)(r) ? i = (0, n.jsx)(a(31319).A, {
                        botValue: null == r ? void 0 : r.asActor,
                        size: b
                    }) : (0, a(197018).ps)(r) ? i = (0, n.jsx)(a(321753).A, {
                        userValue: null == r ? void 0 : r.asActor,
                        size: b
                    }) : (0, a(722371).HB)(r), (0, n.jsx)(a(51831).m, {
                        placement: u ? ? "bottom",
                        alignment: "start",
                        textWrap: !0,
                        disableTooltip: !y,
                        content: () => y,
                        children: r => (0, n.jsx)(a(95582).A, { ...(0, a(63390).A)(r, e),
                            icon: i,
                            title: x,
                            disabledFeedback: m,
                            className: "notranslate",
                            ref: t,
                            hoveredStyle: p
                        })
                    })
                });

            function d(e) {
                let {
                    actor: t,
                    customStyles: i
                } = e, o = (0, a(533992).v3)(), l = (0, a(109939).tz)(), d = t && t.id === o.currentUser.id, c = (0, a(682985).K8)(() => t && t.getDisplayName(l), [t, l]), u = a(986939).A.isMobile ? s : r;
                return d ? (0, n.jsx)(a(109939).sA, {
                    id: "UserMenuItem.fullName.authorLabel",
                    defaultMessage: "<author>{fullName}</author> <you>(You)</you>",
                    values: {
                        author: e => (0, n.jsx)(a(111010).D, {
                            as: "span",
                            styleKey: u,
                            style: i,
                            children: e
                        }),
                        fullName: c,
                        you: e => (0, n.jsx)(a(111010).D, {
                            as: "span",
                            colorVariant: "secondary",
                            styleKey: u,
                            style: i,
                            children: e
                        })
                    }
                }) : c ? (0, n.jsx)(a(111010).D, {
                    lineClamp: 1,
                    styleKey: u,
                    style: i,
                    children: c
                }) : (0, n.jsx)(a(111010).D, {
                    styleKey: u,
                    style: i,
                    children: (0, n.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }

            function c(e) {
                let {
                    actor: t,
                    customStyles: i
                } = e, l = (0, a(109939).tz)(), d = (0, a(682985).K8)(() => t && t.getDisplayName(l), [t, l]), {
                    email: c,
                    showEmail: u
                } = (0, a(682985).K8)(() => {
                    let e = t && t.asActor && t.isUser() ? t.email : void 0;
                    return {
                        email: e,
                        showEmail: d !== e
                    }
                }, [t, d]), p = a(986939).A.isMobile ? "bodySmRegular" : o, m = a(986939).A.isMobile ? s : r;
                return d ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: p,
                        style: i,
                        children: d
                    }), u ? (0, n.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: m,
                        style: i,
                        children: ` ${c}`
                    }) : void 0]
                }) : (0, n.jsx)(a(111010).D, {
                    styleKey: o,
                    style: i,
                    children: (0, n.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }
            l.displayName = "UserMenuItem";
            let u = l
        },
        930113: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                lockFillSmallIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.24 1.67 9.51 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.825 4.85a3.175 3.175 0 1 1 6.35 0v1.061a1.95 1.95 0 0 1 1.575 1.914v4.2a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95v-4.2c0-.949.677-1.74 1.575-1.914zm1.1 1.025h4.15V4.85a2.075 2.075 0 0 0-4.15 0zm2.525 4.299a1.05 1.05 0 1 0-.9 0v.976a.45.45 0 0 0 .9 0z"
                    })
                },
                n = (0, a(104509).wt)("lockFillSmall", i, "fillSmall")
        },
        930887: (e, t, a) => {
            a.d(t, {
                q: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25m0 4c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                    })
                },
                n = (0, a(104509).wt)("plusCircleFill", i, "fill")
        },
        960235: (e, t, a) => {
            a.d(t, {
                J: () => o,
                z: () => r
            });
            let i = new(a(815048)).O2("CollectionSettingsUpsell", async () => a.e(9243).then(a.bind(a, 137838))),
                n = new(a(815048)).O2("CollectionSettingsUpsellMaybe", async () => a.e(9243).then(a.bind(a, 137838))),
                r = (0, a(815048)._h)(i, e => e.CollectionSettingsUpsell),
                o = (0, a(815048)._h)(n, e => e.CollectionSettingsUpsellMaybe)
        },
        973681: (e, t, a) => {
            a.d(t, {
                DZ: () => c,
                FH: () => u,
                Lp: () => l,
                QK: () => d,
                YX: () => p,
                ni: () => r
            });
            var i = a(296540),
                n = () => a(41403);

            function r(e) {
                var t, i, n;
                let r, {
                    collectionStore: o,
                    propertySchema: s,
                    collectionContextStore: l,
                    store: d,
                    property: c,
                    isJiraTwoWaySyncEnabled: u
                } = e;
                if ((0, a(23803).RL)({
                        isExternallyImportedAndSyncedCollection: o.isExternallyImportedAndSyncedCollection(),
                        propertyId: c,
                        collectionStore: o,
                        propertySchema: s
                    })) return !1;
                if (!u) return !0;
                let p = !!((null == (t = o.getFormat()) || null == (t = t.sync_state) ? void 0 : t.syncing) || (null == (i = o.getFormat()) ? void 0 : i.error));
                if ((null == s ? void 0 : s.synced_permissions) !== "read_write" || !(null != (n = o.getFormat().sync_state) && n.enable_two_way_sync) && (!(r = o.getSpaceStore()) || (0, a(262166).OX)(r.getSubscriptionTier())) || (0, a(260585).r)(o) || p || !a(205885).A.state.online) return !0;
                let m = null == l ? void 0 : l.externalSyncStore.state;
                return !(null != m && m.shouldAllowUserToEditSyncedCollection()) && (0, a(561872).VF)(d.getModel(), c, d.getRecordModel)
            }
            a(11448).Hx.Dates;
            let o = {
                    [a(11448).Hx.Dates]: {
                        propertyId: a(11448).Hx.Dates,
                        validationCheck: e => {
                            let {
                                collectionStore: t
                            } = e, i = t.getPropertyMapping();
                            return !!(null == i ? void 0 : i[a(11448).Hx.StatusV2])
                        }
                    }
                },
                s = {
                    date: [a(11448).Hx.Dates]
                };

            function l(e) {
                let {
                    collectionStore: t,
                    property: a,
                    propertySchema: i
                } = e;
                if (!i) return !0;
                let n = t.getPropertyMapping();
                if (!n) return !1;
                for (let e of s[i.type] ? ? []) {
                    let i = o[e];
                    if (!i.validationCheck({
                            collectionStore: t
                        })) continue;
                    let r = null == n ? void 0 : n[i.propertyId];
                    if (a === i.propertyId || a === r) return !0
                }
                return !1
            }

            function d({
                store: e,
                property: t,
                surface: a,
                onClick: n,
                collectionStore: r,
                blockPropertyValueOverlayStore: o,
                disableHorizontalEdgeScroll: s,
                focusButtonAfterClose: l
            }, c) {
                return (0, i.useMemo)(() => ({
                    store: e,
                    property: t,
                    surface: a,
                    onClick: n,
                    collectionStore: r,
                    blockPropertyValueOverlayStore: o,
                    disableHorizontalEdgeScroll: s,
                    isStatusCheckbox: null == c ? void 0 : c.isStatusCheckbox,
                    focusButtonAfterClose: l
                }), [o, r, s, a, null == c ? void 0 : c.isStatusCheckbox, n, t, e, l])
            }

            function c(e, t, i) {
                return (0, a(682985).K8)(() => {
                    if (!e.isDefined() || !e.isTemplate()) return;
                    let n = null == i ? void 0 : i.type;
                    if (!(0, a(9247).mF)(n)) return;
                    let r = e.getPropertyValue(t);
                    if (!r) return;
                    let o = null == r ? void 0 : r[0];
                    if (o && a(247438).qXl(o)) {
                        let e = a(247438).PVS(a(247438).wQU(o)),
                            t = e && a(247438).y0Y(e);
                        return t && {
                            templateVariable: t.type
                        }
                    }
                }, [t, i, e], {
                    debugName: "useTemplateVariableContext"
                })
            }

            function u(e) {
                var t;
                let {
                    collectionStore: i,
                    propertySchema: n,
                    isJiraTwoWaySyncEnabled: r,
                    surface: o,
                    propertyId: s
                } = e;
                return !(!i || !i.isExternallyImportedAndSyncedCollection() || !r || "page" !== o || !(null != (t = i.getFormat().sync_state) && t.enable_two_way_sync) || (null == n ? void 0 : n.synced_permissions) === "read_write" || s && (0, a(23803).sc)({
                    propertyId: s,
                    collectionStore: i,
                    propertySchema: n,
                    isExternallyImportedAndSyncedCollection: i.isExternallyImportedAndSyncedCollection()
                })) && !0
            }

            function p(e) {
                let {
                    newNumberValue: t,
                    environment: i,
                    stores: r,
                    spaceId: o
                } = e, s = a(272139).h(t);
                (0, a(377796).createAndCommit)({
                    userAction: "BlockPropertyValueOverlay.handleNumberValueChange",
                    environment: i,
                    cellTarget: o ? {
                        spaceWithId: o
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        for (let t of r) n().R9({
                            environment: i,
                            store: t,
                            value: s,
                            transaction: e
                        })
                    }
                })
            }
        },
        980494: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    style0: { ...a(699422).RC
                    }
                },
                r = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        r = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        o = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: s,
                            avatarShouldShowShadow: l,
                            avatarSize: d,
                            hasTooltip: c,
                            tooltipHeader: u,
                            hasPersonHoverCard: p,
                            spaceStore: m
                        } = e,
                        g = (0, a(109939).tz)(),
                        f = (0, a(682985).K8)(() => null == s ? void 0 : s.getDisplayName(g), [s, g]),
                        h = (0, i.jsxs)("div", {
                            style: r,
                            children: [(0, i.jsx)("div", {
                                style: o,
                                children: (0, i.jsx)(a(321753).A, {
                                    userStore: s,
                                    avatarShouldShowShadow: l,
                                    size: d,
                                    hasTooltip: c && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, i.jsx)("div", {
                                className: "notranslate",
                                style: n.style0,
                                children: f
                            })]
                        });
                    return p ? (0, i.jsx)(a(532755).D, {
                        userStore: s,
                        spaceStore: m,
                        from: e.personHoverCardEntrypoint,
                        children: h
                    }) : h
                }
        }
    }
]);