"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [41075], {
        156379: (e, t, s) => {
            s.d(t, {
                L: () => i
            }), s(296540);
            var a = s(474848);

            function i() {
                return (0, a.jsx)(s(746434).E, {
                    content: (0, a.jsx)(s(109939).sA, {
                        id: "spaceUserMembershipType.restrictedMember",
                        defaultMessage: "Restricted"
                    }),
                    color: "yellow"
                })
            }
        },
        241075: (e, t, s) => {
            s.d(t, {
                A: () => c
            });
            var a = s(296540),
                i = s(474848);

            function r(e) {
                let {
                    organizationBotStore: t,
                    size: a
                } = e, r = (0, s(109939).tz)(), l = (0, s(682985).K8)(() => (null == t ? void 0 : t.getDisplayName(r)) ? ? r.formatMessage(s(993189).c91.messages.unnamedBot), [t, r]);
                return (0, i.jsx)(s(569553).B6, {
                    icon: void 0,
                    iconRecordCategory: void 0,
                    title: l,
                    size: a || 18,
                    disabled: !0,
                    isEmptyPage: !1,
                    useInvertedColors: !0
                })
            }

            function l(e) {
                var t;
                let {
                    avatar: a,
                    size: r
                } = e, l = (t = r, (0, s(960253).I)(() => ({
                    container: {
                        width: t,
                        height: t,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }), [t])), n = a.icon ? ? s(85071).integrationIcon;
                return (0, i.jsx)("div", {
                    style: l.container,
                    children: (0, i.jsx)(s(16275).I, {
                        icon: n,
                        size: r
                    })
                })
            }
            let n = (0, s(109939).YK)({
                    workspaceOwnerTooltip: {
                        id: "shareMenu.cellMemberAvatar.workspaceOwnerTooltip",
                        defaultMessage: "Workspace owner"
                    }
                }),
                o = {
                    titleYouIndicator: {
                        color: s(632079).Tj.text.secondary
                    },
                    detailLabel: {
                        flex: 1,
                        minWidth: 0
                    },
                    badgeIcon: {
                        display: "inline-flex",
                        flexShrink: 0
                    }
                };

            function d(e) {
                let {
                    actorStore: t,
                    avatar: a,
                    isLarge: n
                } = e, o = n ? 32 : 28;
                if (!t) return a ? "mcp" === a.type ? (0, i.jsx)(l, {
                    avatar: a,
                    size: o
                }) : (0, i.jsx)(s(321753).A, {
                    avatar: a,
                    size: o
                }) : (0, i.jsx)(s(321753).A, {
                    userStore: void 0,
                    size: o
                });
                return t.table === s(832375).GPl ? (0, i.jsx)(s(31319).A, {
                    botStore: t,
                    size: o
                }) : t.table === s(832375).oo9 ? (0, i.jsx)(s(321753).A, {
                    userStore: t,
                    size: o
                }) : t.table === s(832375).rfw ? (0, i.jsx)(r, {
                    organizationBotStore: t,
                    size: o
                }) : void(0, s(722371).HB)(t)
            }
            let c = function(e) {
                let t = (0, s(109939).tz)(),
                    {
                        actorStore: r,
                        avatar: l,
                        containerStyle: c,
                        spaceRole: u,
                        avatarBadge: p,
                        caption: m,
                        isLarge: x,
                        restorationStatus: y,
                        hideRolePill: g
                    } = e,
                    h = (0, s(682985).O$)(s(728372).AppStoreSidebarSpaceStore),
                    j = (0, s(993077).V_)({
                        spaceStore: h,
                        userId: null == r ? void 0 : r.id
                    }),
                    v = u ? ? j,
                    f = (0, s(729052).kI)(v) && (0, s(729052).P)(v) || "team_level_guest" === v,
                    b = (0, s(682985).K8)(() => r ? r.getDisplayName(t) : null == l ? void 0 : l.name, [r, l, t]),
                    A = (0, s(682985).K8)(() => {
                        let e = s(728372).AppStoreCurrentUserStore.state;
                        return !!e && !!r && e.id === r.id
                    }, [r]),
                    S = (0, s(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            maxWidth: x ? "unset" : 300,
                            marginInlineStart: 0
                        },
                        avatarWrapper: {
                            position: "relative",
                            ...!x && {
                                height: 28,
                                width: 28
                            }
                        },
                        textContainer: {
                            minWidth: 0,
                            marginInlineStart: x ? 10 : 6,
                            marginInlineEnd: x ? 10 : 6
                        }
                    }), [x]),
                    M = (0, s(682985).K8)(() => r ? r.getDetail() : null == l ? void 0 : l.email, [r, l]),
                    [I, w] = (0, a.useState)(!1);
                return (0, i.jsxs)("div", {
                    style: { ...S.container,
                        ...c
                    },
                    children: [(0, i.jsxs)("div", {
                        style: S.avatarWrapper,
                        children: [(0, i.jsx)(d, {
                            actorStore: r,
                            avatar: l,
                            isLarge: x
                        }), p]
                    }), (0, i.jsxs)("div", {
                        style: S.textContainer,
                        children: [(0, i.jsxs)(s(4458).fI, {
                            gap: 4,
                            alignItems: "center",
                            children: [(0, i.jsx)(s(324489).V, {
                                children: A ? (0, i.jsx)(s(109939).sA, {
                                    id: "cellMemberAvatar.displayName.title",
                                    defaultMessage: "{userFullDisplayName} <youIndicatorText>(You)</youIndicatorText>",
                                    values: {
                                        userFullDisplayName: b,
                                        youIndicatorText: e => (0, i.jsx)("span", {
                                            style: o.titleYouIndicator,
                                            children: e
                                        })
                                    }
                                }) : b
                            }), function(e, t) {
                                if (!g) switch (e) {
                                    case "owner":
                                    case "membership_admin":
                                        if ((null == t ? void 0 : t.type) === "mcp") return;
                                        return (0, i.jsx)(s(580244).l, {
                                            role: e
                                        });
                                    case "member":
                                    case "none":
                                    case void 0:
                                        return;
                                    case "restricted_member":
                                        return (0, i.jsx)(s(156379).L, {});
                                    case "page_guest":
                                    case "team_level_guest":
                                        return (0, i.jsx)(s(577280).w, {
                                            labelType: e
                                        });
                                    default:
                                        (0, s(722371).HB)(e)
                                }
                            }(v, l), h && y ? (0, i.jsx)(s(800668).A, {
                                spaceStore: h,
                                restorationStatus: y,
                                didAttemptRecovery: I
                            }) : void 0]
                        }), (0, i.jsxs)(s(4458).fI, {
                            gap: 6,
                            alignItems: "center",
                            children: [(0, i.jsx)(s(324489).V, {
                                isSmall: !0,
                                style: o.detailLabel,
                                children: m || M
                            }), function(e, a) {
                                if (!g && void 0 !== e && (null == a ? void 0 : a.type) === "mcp" && "team_level_guest" !== e && (0, s(729052).LF)(e)) {
                                    let e = t.formatMessage(n.workspaceOwnerTooltip);
                                    return (0, i.jsx)(s(51831).m, {
                                        placement: "top",
                                        content: () => e,
                                        children: t => (0, i.jsx)("span", { ...t,
                                            "aria-label": e,
                                            style: o.badgeIcon,
                                            children: (0, i.jsx)(s(16275).I, {
                                                icon: s(238542).teamspaceSmallIcon,
                                                size: "xs",
                                                colorVariant: "secondary"
                                            })
                                        })
                                    })
                                }
                            }(v, l)]
                        })]
                    }), !f && !I && h && (null == r ? void 0 : r.table) === s(832375).oo9 && b && (null == y ? void 0 : y.status) === "canBeRestored" ? (0, i.jsx)(s(369881).A, {
                        userStore: r,
                        spaceId: h.id,
                        onSubmit: () => w(!0)
                    }) : void 0]
                })
            }
        },
        369881: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            var a = s(296540),
                i = s(474848);
            async function r(e, t, a) {
                return await s(280996).T.showAsyncModal(r => (0, i.jsx)(s(833503).s, {
                    isOpen: r.isOpen,
                    onDismiss: r.onDismiss,
                    onClosed: r.onClosed,
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 380
                        }
                    },
                    children: () => (0, i.jsx)(n, {
                        spaceId: e,
                        userStore: t,
                        onDismiss: r.onDismiss,
                        onSubmit: a
                    })
                }))
            }
            let l = {
                style0: {
                    textAlign: "center"
                },
                title: {
                    color: s(632079).Tj.text.primary,
                    textAlign: "center",
                    fontSize: 17,
                    fontWeight: s(699422).Wy.medium,
                    lineHeight: "22px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function n({
                spaceId: e,
                userStore: t,
                onDismiss: r,
                onSubmit: o
            }) {
                let d = (0, s(533992).v3)(),
                    c = t.id,
                    u = (0, s(109939).tz)(),
                    p = (0, s(682985).K8)(() => t.getDisplayName(u), [t, u]),
                    m = (0, a.useCallback)(async () => {
                        let t = await d.api.callApi({
                            eventName: "recoverUserContentInSpace",
                            environment: d,
                            data: {
                                spaceId: e,
                                userId: c
                            }
                        });
                        if ("failed" === t.type) throw s(647095).Qg(t), t;
                        o(), r(), s(436555).D6({
                            label: (0, i.jsx)(s(109939).sA, {
                                id: "restoreAccessModal.snackbarMessage",
                                defaultMessage: "Initiated restoration of access for{nbsp}{displayName}",
                                values: {
                                    displayName: (0, i.jsx)("b", {
                                        children: p
                                    }),
                                    nbsp: (0, i.jsx)(i.Fragment, {
                                        children: " "
                                    })
                                }
                            })
                        })
                    }, [d, e, c, p, r, o]);
                return (0, i.jsx)(s(314084).t, {
                    header: (0, i.jsx)(s(582471).Y, {
                        iconAndTitle: (0, i.jsxs)(s(4458).VP, {
                            alignItems: "center",
                            className: "autolayout-fill-width",
                            style: {
                                gap: 9,
                                ...l.positionRelative
                            },
                            children: [(0, i.jsx)(s(321753).A, {
                                userStore: t,
                                size: 40
                            }), (0, i.jsx)("div", {
                                style: l.title,
                                children: (0, i.jsx)(s(109939).sA, {
                                    defaultMessage: "Restore access",
                                    id: "restoreAccessModal.title"
                                })
                            })]
                        }),
                        description: (0, i.jsx)(s(109939).sA, {
                            id: "restoreAccessModal.subtitle",
                            defaultMessage: "Restore additional access for members who were removed and re-added within the last 30 days"
                        })
                    }),
                    footer: (0, i.jsx)(s(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "primary",
                            label: (0, i.jsx)(s(109939).sA, {
                                defaultMessage: "Restore access",
                                id: "restoreAccessModal.restoreButton"
                            }),
                            onClick: m
                        }],
                        secondaryButtons: [{
                            buttonType: "secondary",
                            label: (0, i.jsx)(s(109939).sA, {
                                defaultMessage: "Cancel",
                                id: "restoreAccessModal.cancelButton"
                            }),
                            onClick: r
                        }]
                    }),
                    children: (0, i.jsxs)(s(4458).VP, {
                        gap: 24,
                        children: [(0, i.jsx)(s(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            style: l.style0,
                            children: (0, i.jsx)(s(109939).sA, {
                                id: "restoreAccessModal.contextDescription",
                                defaultMessage: "<b>{displayName}</b> already has access to their private pages",
                                values: {
                                    b: e => (0, i.jsx)("b", {
                                        children: e
                                    }),
                                    displayName: p
                                }
                            })
                        }), (0, i.jsx)(s(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            style: l.style0,
                            children: (0, i.jsx)(s(109939).sA, {
                                id: "restoreAccessModal.actionDescription",
                                defaultMessage: "Would you like to restore <b>{displayName}</b>’s access to their shared pages, groups, and teamspaces?",
                                values: {
                                    b: e => (0, i.jsx)("b", {
                                        children: e
                                    }),
                                    displayName: p
                                }
                            })
                        })]
                    })
                })
            }

            function o({
                spaceId: e,
                userStore: t,
                onSubmit: a
            }) {
                let l = (0, s(109939).tz)();
                return (0, i.jsx)(s(51831).m, {
                    placement: "right",
                    content: () => (0, i.jsx)(c, {}),
                    children: n => (0, i.jsx)(s(374533).A, {
                        icon: s(555326).arrowUTurnUpLeftSmallIcon,
                        ariaLabel: l.formatMessage({
                            id: "restoreAccessButton.aria",
                            defaultMessage: "Restore access"
                        }),
                        onClick: () => r(e, t, a),
                        ...n
                    })
                })
            }
            let d = {
                style0: {
                    fontWeight: s(699422).Wy.semibold
                }
            };

            function c() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: d.style0,
                        children: (0, i.jsx)(s(109939).sA, {
                            id: "userCell.restoreAccessTooltip.label",
                            defaultMessage: "Restore access to teamspaces, groups, and shared pages"
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)(s(109939).sA, {
                            id: "userCell.restoreAccessTooltip.description",
                            defaultMessage: "Only available if a member was removed and re-added in the last 30 days"
                        })
                    })]
                })
            }
        },
        580244: (e, t, s) => {
            s.d(t, {
                l: () => r
            }), s(296540);
            var a = s(474848);
            let i = {
                textWrap: "nowrap"
            };

            function r(e) {
                return (0, a.jsx)(s(746434).E, {
                    style: i,
                    content: "membership_admin" === e.role ? (0, a.jsx)(s(109939).sA, {
                        id: "spacePermissionsSettings.user.membershipAdmin",
                        defaultMessage: "Membership admin"
                    }) : (0, a.jsx)(s(109939).sA, {
                        id: "spacePermissionsSettings.user.workspaceOwner",
                        defaultMessage: "Workspace owner"
                    })
                })
            }
        },
        800668: (e, t, s) => {
            s.d(t, {
                A: () => r
            }), s(296540);
            var a = s(474848);
            let i = {
                recentlyReaddedBadge: {
                    background: s(632079).Tj.blue.background.secondary,
                    marginInlineStart: 0,
                    maxWidth: "max-content"
                },
                recentlyReaddedText: {
                    color: s(632079).Tj.blue.text.primary,
                    fontSize: s(699422).J.UISmall.desktop,
                    fontStyle: "normal",
                    fontWeight: s(699422).Wy.regular,
                    lineHeight: "15px"
                },
                tooltipFirstLine: {
                    color: s(632079).Tj.text.inversePrimary,
                    fontWeight: s(699422).Wy.semibold
                },
                tooltipSecondLine: {
                    color: s(632079).Tj.text.inverseSecondary
                }
            };

            function r({
                spaceStore: e,
                restorationStatus: t,
                didAttemptRecovery: n
            }) {
                return (0, a.jsx)(s(51831).m, {
                    placement: "bottom",
                    content: () => (0, a.jsx)(l, {
                        spaceStore: e,
                        restorationStatus: t,
                        didAttemptRecovery: n
                    }),
                    children: e => (0, a.jsx)("div", { ...e,
                        children: (0, a.jsx)(s(746434).E, {
                            content: (0, a.jsx)(s(324489).V, {
                                style: i.recentlyReaddedText,
                                children: (0, a.jsx)(s(109939).sA, {
                                    id: "userCell.recentlyReadded.label",
                                    defaultMessage: "Recently re-added"
                                })
                            }),
                            style: i.recentlyReaddedBadge
                        })
                    })
                })
            }

            function l({
                spaceStore: e,
                restorationStatus: t,
                didAttemptRecovery: r
            }) {
                let {
                    displayName: n,
                    displayTime: o
                } = function({
                    spaceStore: e,
                    restorationStatus: t
                }) {
                    let a = "restored" === t.status ? {
                            table: t.restoredByTable,
                            id: t.restoredById,
                            spaceId: e.id
                        } : void 0,
                        i = a ? (0, s(935786).JQ)({
                            parentStore: e,
                            pointer: a
                        }) : void 0,
                        r = (0, s(109939).tz)();
                    return {
                        displayName: (0, s(682985).K8)(() => null == i ? void 0 : i.getDisplayName(r), [i, r]),
                        displayTime: "restored" === t.status ? (0, s(850640).W_)(t.restoredTime, "medium_with_time", s(849917).locale) : void 0
                    }
                }({
                    spaceStore: e,
                    restorationStatus: t
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        style: i.tooltipFirstLine,
                        children: (0, a.jsx)(s(109939).sA, {
                            id: "userCell.recentlyReaddedTooltip.label",
                            defaultMessage: "Member was removed and re-added within the last 30 days"
                        })
                    }), r ? (0, a.jsx)("div", {
                        style: i.tooltipSecondLine,
                        children: (0, a.jsx)(s(109939).sA, {
                            id: "userCell.recentlyReaddedTooltip.inProgress.description",
                            defaultMessage: "Restoration of access is in progress",
                            values: {
                                displayName: n,
                                displayTime: o
                            }
                        })
                    }) : void 0, !r && n && o ? (0, a.jsx)("div", {
                        style: i.tooltipSecondLine,
                        children: (0, a.jsx)(s(109939).sA, {
                            id: "userCell.recentlyReaddedTooltip.description",
                            defaultMessage: "{displayName} restored their access on {displayTime}",
                            values: {
                                displayName: n,
                                displayTime: o
                            }
                        })
                    }) : void 0]
                })
            }
        }
    }
]);