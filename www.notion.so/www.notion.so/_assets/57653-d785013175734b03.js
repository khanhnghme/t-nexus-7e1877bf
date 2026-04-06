"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [57653], {
        11444: (e, t, i) => {
            i.r(t), i.d(t, {
                UISpacePermissionGroupToken: () => a
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                avatarWrapStyle: {
                    width: "none",
                    minHeight: "none",
                    marginInlineEnd: 6
                },
                style0: { ...i(699422).RC
                },
                style1: {
                    margin: 0
                }
            };

            function a(e) {
                let {
                    parentStore: t,
                    style: a,
                    format: s
                } = e, l = e.groupPointer.id, d = e.groupPointer.spaceId, c = (0, i(659341).S4)({
                    spacePermissionGroupId: l,
                    spaceId: d
                }), u = (0, i(682985).K8)(() => e.groupModel ? e.groupModel : t ? i(398652).C.createChildStore(t, c).getModel() : void 0, [t, c, e.groupModel]), h = (0, i(533992).Y0)(), {} = (0, i(960253).I)(() => ({
                    badgeStyle: {
                        borderRadius: 4,
                        background: i(632079).Tj.background.tertiaryTranslucent,
                        fontSize: i(986939).A.isMobile ? 11 : 9,
                        lineHeight: h.isAndroid ? 1.5 : 1,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em"
                    }
                }), [h]), m = (0, i(109939).tz)(), p = (0, i(682985).K8)(() => (0, i(95384).n)({
                    intl: m,
                    permissionGroupModel: u
                }), [m, u]), g = (0, n.useCallback)(e => s === i(696654).NY.Inline ? (0, r.jsx)(i(308256).o, {
                    group: u,
                    size: e
                }) : (0, r.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    minWidth: 0,
                    children: [(0, r.jsx)("div", {
                        style: o.avatarWrapStyle,
                        children: (0, r.jsx)(i(308256).o, {
                            group: u,
                            size: e
                        })
                    }), (0, r.jsx)("div", {
                        style: o.style0,
                        children: p
                    })]
                }), [s, u, p]);
                return (0, r.jsx)(i(376921).Ay, { ...e,
                    style: { ...o.style1,
                        ...a
                    },
                    renderAvatar: g
                })
            }
        },
        47187: (e, t, i) => {
            i.d(t, {
                E: () => n
            });

            function n(e) {
                let {
                    size: t,
                    style: n
                } = e;
                return (0, i(960253).I)(() => ({
                    icon: {
                        width: .6 * t,
                        height: .6 * t,
                        fill: i(632079).Tj.text.secondary
                    },
                    iconContainer: {
                        width: t,
                        height: t,
                        borderRadius: "100%",
                        background: i(632079).Tj.background.tertiaryTranslucent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        ...n
                    }
                }), [t, n])
            }
        },
        126177: (e, t, i) => {
            i.d(t, {
                v: () => o
            }), i(296540);
            var n = i(474848);
            let r = {
                container: {
                    display: "grid",
                    height: i(357491).eQ,
                    width: i(357491).eQ
                },
                back: {
                    gridColumn: 1,
                    gridRow: 1,
                    marginInlineStart: -3,
                    marginTop: -3,
                    maxWidth: 20,
                    minWidth: 20
                },
                front: {
                    gridColumn: 1,
                    gridRow: 1,
                    marginInlineStart: 7,
                    marginTop: 7,
                    maxWidth: 20,
                    minWidth: 20
                }
            };

            function o(e) {
                let {
                    frontActorStore: t,
                    backActorStore: i,
                    spaceStore: o
                } = e;
                return (0, n.jsxs)("div", {
                    style: r.container,
                    children: [(0, n.jsx)("div", {
                        style: r.back,
                        children: (0, n.jsx)(a, {
                            size: 20,
                            actorStore: i,
                            spaceStore: o,
                            avatar: void 0
                        })
                    }), (0, n.jsx)("div", {
                        style: r.front,
                        children: (0, n.jsx)(a, {
                            size: 20,
                            actorStore: t,
                            spaceStore: o,
                            avatar: void 0
                        })
                    })]
                })
            }

            function a(e) {
                let {
                    actorStore: t,
                    spaceStore: r,
                    avatar: o
                } = e, a = e.size ? ? 28, s = t instanceof i(807825).L ? t : void 0;
                return t ? t.table === i(832375).GPl ? (0, n.jsx)(i(31319).A, {
                    botStore: t,
                    size: a
                }) : t.table === i(832375).oo9 ? (0, n.jsx)(i(532755).D, {
                    userStore: s,
                    spaceStore: r,
                    from: "inbox",
                    children: (0, n.jsx)(i(321753).A, {
                        userStore: t,
                        size: a
                    })
                }) : void(0, i(722371).HB)(t) : o ? (0, n.jsx)(i(321753).A, {
                    avatar: o,
                    size: a
                }) : (0, n.jsx)(i(321753).A, {
                    userStore: void 0,
                    size: a
                })
            }
        },
        162859: (e, t, i) => {
            i.d(t, {
                JN: () => l,
                QB: () => n,
                Sx: () => r,
                Wt: () => s,
                hR: () => a,
                pT: () => o,
                rU: () => d
            });
            let n = (0, i(815048)._h)(i(734007).U, e => e.GetNotifiedFor),
                r = (0, i(815048)._h)(i(734007).U, e => e.UpdateSidebar),
                o = (0, i(815048)._h)(i(734007).U, e => e.MobileInboxPopup),
                a = (0, i(815048)._h)(i(734007).U, e => e.InboxActionsMenu),
                s = (0, i(815048)._h)(i(734007).U, e => e.UnreadMentionsBadge),
                l = (0, i(815048)._h)(i(734007).U, e => e.NotificationInboxPanelContent),
                d = (0, i(815048)._h)(i(734007).U, e => e.AnimatedEmojiBadge)
        },
        175409: (e, t, i) => {
            function n({
                source: e
            }) {
                switch (e) {
                    case "notifications_tab":
                        return i(254656).y8.Notification;
                    case "updates_sidebar":
                    case "home_tile":
                        return i(254656).y8.Activity;
                    case "person_profile":
                        return i(254656).y8.PersonProfileRecentActivity;
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function r(e) {
                let t = e.mightCloseTab ? ? !0;
                c({
                    target: "body",
                    ...e,
                    mightCloseTab: t
                })
            }

            function o(e) {
                let t = e.mightCloseTab ? ? !0;
                c({
                    target: "title",
                    ...e,
                    mightCloseTab: t
                })
            }

            function a(e) {
                c({
                    target: "approve_request_access",
                    ...e,
                    mightCloseTab: !1
                })
            }

            function s(e) {
                c({
                    target: "deny_request_access",
                    ...e,
                    mightCloseTab: !1
                })
            }

            function l(e) {
                c({
                    target: "remove_reaction",
                    ...e,
                    mightCloseTab: !1
                })
            }

            function d(e) {
                c({
                    target: "add_reaction",
                    ...e,
                    mightCloseTab: !1
                })
            }

            function c(e) {
                let {
                    target: t,
                    environment: n,
                    activity: r,
                    notification: o,
                    source: a,
                    tab: s,
                    mightCloseTab: l
                } = e, d = "notifications_tab" === a ? i(825109).Ay.state.sessionId : void 0, c = "notifications_tab" === a ? i(825109).Ay.isFilteredToUnreadOnly() : void 0;
                i(142215).nR(n, {
                    target: t,
                    activity_id: r.id,
                    notification_id: null == o ? void 0 : o.id,
                    notification_page_id: null == o ? void 0 : o.navigable_block_id,
                    sessionId: d,
                    is_filtered: c,
                    tab: s
                }), l && i(142215).s$({
                    environment: n,
                    target: t
                }), o && i(657063).v((0, i(637286).Q)(n), {
                    alreadyRead: o.read,
                    notificationId: o.id,
                    activityId: o.activity_id,
                    from: t,
                    sessionId: d
                })
            }

            function u(e) {
                let {
                    notification: t,
                    activity: n,
                    environment: r,
                    tab: o
                } = e, a = {
                    environment: r,
                    activity: n,
                    notificationId: null == t ? void 0 : t.id,
                    alreadyRead: !!(null == t ? void 0 : t.read),
                    tab: o
                };
                return {
                    onBacklinkClicked: e => i(142215).uK({ ...a,
                        backlinkPageId: e.pageId,
                        backlinkCollectionId: e.collectionId
                    }),
                    onNotificationFrameClicked: () => i(142215).Hd(a),
                    ...h({
                        notification: t,
                        activity: n,
                        environment: r,
                        tab: o
                    })
                }
            }

            function h(e) {
                let {
                    notification: t,
                    activity: n,
                    environment: r,
                    tab: o
                } = e, a = {
                    environment: r,
                    activity: n,
                    notificationId: null == t ? void 0 : t.id,
                    alreadyRead: !!(null == t ? void 0 : t.read),
                    tab: o
                }, s = () => {
                    let e = {
                        notification_type: null == t ? void 0 : t.type,
                        notification_page_id: null == t ? void 0 : t.navigable_block_id,
                        tab: i(729508).dl()
                    };
                    return (null == t ? void 0 : t.type) === "commented" && (e.discussion_id = null == n ? void 0 : n.discussion_id), e
                };
                return {
                    onArchiveClicked: () => i(142215).R0({ ...a,
                        otherArgs: s()
                    }),
                    onUnarchiveClicked: () => i(142215).sL({ ...a,
                        otherArgs: s()
                    }),
                    onMarkAsReadClicked: () => i(142215).oy({ ...a,
                        otherArgs: s()
                    }),
                    onMarkAsUnreadClicked: () => i(142215).bl({ ...a,
                        otherArgs: s()
                    }),
                    onNotificationBodyClicked: () => i(142215).e0({ ...a,
                        otherArgs: s()
                    })
                }
            }
            i.d(t, {
                NS: () => n,
                P: () => d,
                Qo: () => o,
                _$: () => h,
                em: () => u,
                hx: () => a,
                jU: () => s,
                jv: () => l,
                uY: () => r
            })
        },
        242912: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightDownSmallIcon: () => r,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8 2.125a.61.61 0 0 0-.625.599v9.017L4.122 8.488a.625.625 0 1 0-.884.884l4.32 4.32c.244.244.64.244.884 0l4.32-4.32a.625.625 0 0 0-.884-.884l-3.253 3.253V2.724A.61.61 0 0 0 8 2.125"
                    })
                },
                r = (0, i(104509).wt)("arrowStraightDownSmall", n, "small")
        },
        246467: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                    display: "inline-block",
                    width: "1.2em",
                    marginInlineStart: 5,
                    marginInlineEnd: 2,
                    paddingBottom: 3,
                    verticalAlign: "middle"
                },
                a = function(e) {
                    let t, a = (0, i(109939).tz)(),
                        l = (0, i(75272).I)(),
                        d = (0, n.useRef)(),
                        c = (0, n.useCallback)(() => {
                            let t = e.value;
                            if (!t) return;
                            let n = i(25825).q8(t, (0, i(714350).P)());
                            if (!n) return;
                            let r = n.valueOf(),
                                o = r - Date.now();
                            o < 0 || o > i(627179).nD || d.current && d.current.timestamp === r || (d.current && clearTimeout(d.current.timer), d.current = {
                                timestamp: r,
                                timer: setTimeout(() => l("DateBox", "DateBox/createReminderTimer"), o)
                            })
                        }, [l, e.value]),
                        u = (0, n.useCallback)(() => {
                            d.current && (clearTimeout(d.current.timer), d.current = void 0)
                        }, []);
                    (0, n.useEffect)(() => {
                        c()
                    }, [c]), (0, n.useEffect)(() => () => {
                        u()
                    }, [u]);
                    let {
                        value: h,
                        withComma: m
                    } = e, p = (0, i(682985).K8)(() => h ? (0, i(850640).ZF)({
                        value: h,
                        date_format: e.dateFormat,
                        time_format: e.timeFormat,
                        userTimeZone: (0, i(714350).P)(),
                        allowRelativeDates: !0,
                        intl: a,
                        shortenDateAndRange: e.shortenDateAndRange,
                        displayInUserTimezone: e.displayInUserTimezone,
                        getToday: i(132315).x1
                    }) : void 0, [a, e.dateFormat, e.displayInUserTimezone, e.shortenDateAndRange, e.timeFormat, h]);
                    if (!h) return null;
                    let g = i(25825).AA(h, (0, i(714350).P)(), i(849917).locale);
                    (0, i(943003).Lh)(h) && (t = i(25825).Zs(h, (0, i(714350).P)()) ? {
                        color: i(632079).Tj.red.text.accentPrimary
                    } : {
                        color: i(632079).Tj.blue.text.accentPrimary
                    });
                    let f = (0, r.jsxs)(r.Fragment, {
                        children: [p, (0, i(943003).Lh)(h) ? (0, r.jsx)(i(16275).I, {
                            icon: i(848194).alarmSmallIcon,
                            style: o
                        }) : void 0, m ? ", " : null]
                    });
                    return e.disableTooltip ? (0, r.jsx)("div", {
                        className: e.className,
                        style: { ...e.style,
                            ...t
                        },
                        children: f
                    }) : (0, r.jsx)(i(51831).m, {
                        content: () => (0, r.jsxs)(r.Fragment, {
                            children: [e.tooltipHeader, (0, r.jsxs)("div", {
                                style: e.tooltipHeader ? {
                                    color: i(632079).Tj.text.inverseSecondary
                                } : {},
                                children: [s(g.start), g.end ? ` → ${s(g.end)}` : ""]
                            })]
                        }),
                        placement: e.tooltipPlacement,
                        children: i => (0, r.jsx)("div", {
                            className: e.className,
                            style: { ...e.style,
                                ...t
                            },
                            ...i,
                            children: f
                        })
                    })
                };

            function s(e) {
                return (0, i(850640).eV)({
                    value: e,
                    preset: "medium"
                })
            }
        },
        308256: (e, t, i) => {
            i.d(t, {
                o: () => r
            }), i(296540);
            var n = i(474848);

            function r(e) {
                let {
                    group: t
                } = e, r = e.size ? ? 20, o = (0, i(109939).tz)(), a = (0, i(682985).K8)(() => {
                    if (t && t.icon) return {
                        pointer: t.pointer,
                        icon: t.icon
                    }
                }, [t]), s = (0, i(682985).K8)(() => (0, i(95384).n)({
                    intl: o,
                    permissionGroupModel: t
                }), [o, t]);
                return (0, n.jsx)("div", {
                    children: a ? (0, n.jsx)(i(569553).B6, {
                        disabled: !0,
                        size: r,
                        icon: a,
                        isEmptyPage: !1,
                        title: s
                    }) : (0, n.jsx)(i(391343).A, {
                        size: r
                    })
                })
            }
        },
        325336: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowUTurnUpLeftIcon: () => r,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.592 4.792a.625.625 0 1 0-.884-.884l-4.4 4.4a.625.625 0 0 0 0 .884l4.4 4.4a.625.625 0 1 0 .884-.884L4.259 9.375H14a2.625 2.625 0 0 1 0 5.25h-1.42a.625.625 0 1 0 0 1.25H14a3.875 3.875 0 0 0 0-7.75H4.259z"
                    })
                },
                r = (0, i(104509).wt)("arrowUTurnUpLeft", n, "default")
        },
        357491: (e, t, i) => {
            i.d(t, {
                S7: () => x,
                VB: () => o,
                eQ: () => s,
                gH: () => g,
                jd: () => a,
                my: () => j,
                rL: () => A
            });
            var n = i(296540),
                r = i(474848);
            let o = 12,
                a = 8,
                s = 24,
                l = 52,
                d = 44,
                c = "150ms ease",
                u = {
                    article: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    mainClickTargetButtonHovered: {
                        background: i(632079).Tj.state.hover
                    },
                    style0: {
                        width: 0,
                        marginInlineStart: -4
                    }
                },
                h = "100ms ease-out",
                m = {
                    container: {
                        display: "flex",
                        alignItems: "flex-start",
                        position: "relative",
                        zIndex: 1,
                        ...i(986939).A.isMobile && {
                            paddingInlineStart: l - 8,
                            paddingBottom: 14
                        }
                    }
                };

            function p(e) {
                let {
                    notification: t,
                    rootStore: n,
                    isHovered: o,
                    onArchiveClicked: a,
                    onUnarchiveClicked: s,
                    onMarkAsReadClicked: l,
                    onMarkAsUnreadClicked: d,
                    onMouseEnter: c,
                    onMouseLeave: u
                } = e, p = (0, i(853284).U)(), g = (0, i(960253).I)(() => ({
                    body: {
                        transition: `opacity ${h}, visibility ${h}`,
                        opacity: i(986939).A.isMobile || o ? 1 : 0,
                        visibility: i(986939).A.isMobile || o ? "visible" : "hidden",
                        ...i(986939).A.isMobile ? {
                            position: "relative"
                        } : {
                            position: "absolute",
                            insetInlineEnd: p ? 10 : 12,
                            top: p ? 10 : 12 + (i(986939).A.isMobile ? -3 : 0)
                        }
                    }
                }), [o, p]);
                return t ? (0, r.jsx)("div", {
                    style: m.container,
                    onMouseEnter: c,
                    onMouseLeave: u,
                    children: (0, r.jsx)("div", {
                        style: g.body,
                        children: (0, r.jsx)(i(162859).hR, {
                            notification: t,
                            rootStore: n,
                            onArchiveClicked: a,
                            onUnarchiveClicked: s,
                            onMarkAsReadClicked: l,
                            onMarkAsUnreadClicked: d
                        })
                    })
                }) : null
            }
            let g = 14,
                f = {
                    iconHeaderOverride: {
                        display: "flex",
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "start",
                        minWidth: 0
                    },
                    header: {
                        display: "inline-grid",
                        gridAutoFlow: "column",
                        alignItems: "start",
                        justifyContent: "space-between",
                        fontSize: 14,
                        gap: 12,
                        minWidth: 0
                    },
                    time: {
                        display: "flex",
                        gap: 8,
                        fontSize: 12,
                        color: i(632079).Tj.text.tertiary,
                        whiteSpace: "nowrap",
                        marginTop: g - 12 + 2
                    },
                    pageTitleAndTimestamp: {
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        gap: 12,
                        minWidth: 0
                    },
                    statusDotSpacer: {
                        width: a,
                        flexShrink: 0
                    }
                };

            function v(e) {
                let {
                    icon: t,
                    header: n,
                    timestamp: o,
                    showBlueDot: s,
                    disableTitleClamp: l,
                    isSlipperySlope: d
                } = e, c = (0, i(799843).nl)(o, {
                    useUltraCompactFormat: !0
                }), h = (0, i(799843).x$)(o), m = (0, i(960253).I)(() => ({
                    headerText: {
                        fontSize: 14,
                        fontWeight: i(699422).Wy.medium,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: l ? void 0 : 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        marginTop: 2
                    }
                }), [l]);
                return (0, r.jsx)(i(4458).fI, {
                    minWidth: 0,
                    width: "100%",
                    marginTop: 2,
                    children: (0, r.jsx)("div", {
                        style: f.pageTitleAndTimestamp,
                        children: (0, r.jsxs)("div", {
                            style: f.header,
                            children: [t && n ? (0, r.jsxs)("div", {
                                style: f.iconHeaderOverride,
                                children: [t, (0, r.jsx)("div", {
                                    style: m.headerText,
                                    children: n
                                })]
                            }) : void 0, (0, r.jsxs)("div", {
                                style: f.time,
                                className: i(828432).Cxn,
                                children: [o > 0 ? (0, r.jsx)(i(596955).A, {
                                    text: c,
                                    tooltipText: h,
                                    icon: i(428602).Y
                                }) : void 0, s ? (0, r.jsx)(i(4458).fI, {
                                    alignItems: "center",
                                    children: (0, r.jsx)(i(210882).m, {
                                        size: a
                                    })
                                }) : d ? (0, r.jsx)("div", {
                                    style: u.style0
                                }) : (0, r.jsx)("div", {
                                    style: f.statusDotSpacer
                                })]
                            })]
                        })
                    })
                })
            }
            let b = {
                icon: {
                    height: 20,
                    width: 20,
                    fill: i(632079).Tj.icon.secondary
                }
            };

            function x({
                icon: e
            }) {
                return (0, r.jsx)(i(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: 24,
                    minWidth: 24,
                    children: e(b.icon)
                })
            }
            let y = {
                container: {
                    borderRadius: "100%",
                    display: "flex",
                    flexShrink: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    height: s,
                    width: s,
                    backgroundColor: i(632079).Tj.background.elevated,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: i(632079).Tj.border.secondary
                }
            };

            function A(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)("div", {
                    style: y.container,
                    children: t
                })
            }
            let j = n.memo(function(e) {
                let {
                    notification: t,
                    activity: o,
                    tab: a,
                    children: s,
                    header: h,
                    subheader: m,
                    body: g,
                    rootStore: f,
                    count: b,
                    url: x,
                    isLast: y,
                    disableLineClamp: A,
                    disableTitleClamp: j,
                    onClick: T
                } = e, S = (0, i(533992).v3)(), M = (0, i(533992).Y0)(), C = (0, i(853284).U)(), k = (0, i(564657).v)(), {
                    hoveredIndex: I,
                    setHoveredIndex: U
                } = (0, n.useContext)(i(931663).l), w = parseInt(t.end_time), _ = (0, i(682985).K8)(() => {
                    let e = t.navigable_block_id;
                    if (e) return i(970831).B.createChildStore(f, {
                        table: i(832375).evP,
                        id: e,
                        spaceId: f.id
                    })
                }, [f, t.navigable_block_id]), P = (0, i(682985).K8)(() => i(550830).default.isPeekDismissableState(), []), [R, B] = (0, n.useState)(!1), [z, W] = (0, n.useState)(!1), N = (0, n.useRef)(null), D = (0, i(690980).A)({
                    onLongPress: () => {
                        var e;
                        return null == (e = N.current) ? void 0 : e.setOpen(!0)
                    }
                }), [O, L] = (0, n.useState)(!1), H = R && !z && !O, E = (0, i(682985).K8)(() => "mentions" === i(825109).Ay.state.currentTab, []), F = !t || t.read, K = (0, i(682985).K8)(() => {
                    let e = S.WindowSizeStore.state;
                    return {
                        left: e.paddingLeftCSS,
                        right: e.paddingRightCSS
                    }
                }, [S.WindowSizeStore]), {
                    onArchiveClicked: V,
                    onUnarchiveClicked: G,
                    onMarkAsReadClicked: Z,
                    onMarkAsUnreadClicked: $,
                    onNotificationBodyClicked: Q
                } = (0, i(175409)._$)({
                    notification: t,
                    activity: o,
                    environment: S,
                    tab: a
                }), Y = C && void 0 !== k && null !== I && I === k + 1, q = R || Y, J = (0, i(960253).I)(() => ({
                    mainClickTargetButton: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 0,
                        paddingTop: C ? 8 : 14,
                        paddingBottom: i(986939).A.isMobile ? 8 - i(880393).fB : C ? 8 : 14,
                        paddingInlineStart: i(986939).A.isMobile ? K.left : 0,
                        paddingInlineEnd: i(986939).A.isMobile ? K.right : 0,
                        marginTop: 0,
                        marginBottom: 0,
                        marginInlineStart: 0,
                        marginInlineEnd: 0,
                        borderRadius: C ? 8 : void 0,
                        transition: `background ${c}`
                    },
                    header: {
                        display: "flex",
                        paddingInlineStart: C ? 8 : 16,
                        paddingInlineEnd: C ? 10 : 16,
                        maxWidth: "100%"
                    },
                    subheader: {
                        paddingInlineStart: C ? d : l,
                        paddingInlineEnd: C ? 10 : 16,
                        fontSize: 14,
                        fontWeight: i(699422).Wy.regular,
                        color: i(632079).Tj.text.primary,
                        ...i(699422).RC
                    },
                    body: {
                        marginTop: i(986939).A.isMobile ? 8 : 4,
                        paddingInlineStart: C ? d : l,
                        paddingInlineEnd: C ? 10 : 16,
                        fontSize: 14,
                        color: i(632079).Tj.text.secondary,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: A ? void 0 : 2,
                        overflow: "hidden"
                    },
                    children: {
                        paddingTop: 4,
                        paddingInlineStart: C ? d : l,
                        paddingInlineEnd: C ? 10 : 16
                    },
                    divider: {
                        height: 1,
                        backgroundColor: i(632079).Tj.border.secondary,
                        width: M.isPhone ? void 0 : "calc(100% - 1px)",
                        opacity: +!q,
                        transition: `opacity ${c}`
                    },
                    buttonPressed: {
                        backgroundColor: R && z ? i(632079).Tj.background.elevated : i(632079).Tj.state.pressed
                    }
                }), [K.left, K.right, R, z, A, M.isPhone, C, q]), X = (0, n.useCallback)(e => {
                    t && !O && ((x || !t.read) && Q(), !P || e.metaKey || e.ctrlKey || i(477810).VI({
                        environment: S
                    }), t.read || (0, i(377796).createAndCommit)({
                        userAction: "ActivityNotificationSection.handleMarkAsRead",
                        environment: S,
                        cellTarget: {
                            spaceWithId: t.space_id
                        },
                        canUndo: !0,
                        perform: e => {
                            i(543861).ZB({
                                notification: t,
                                rootStore: f,
                                transaction: e,
                                read: !0
                            })
                        }
                    }))
                }, [S, O, t, Q, P, f, x]), ee = (0, n.useCallback)(e => {
                    X(e), null == T || T()
                }, [X, T]), et = (0, n.useCallback)(e => {
                    t && (t.read ? $() : Z(), (0, i(377796).createAndCommit)({
                        userAction: "InboxActionsMenu.toggleNotificationReadStatus",
                        environment: S,
                        cellTarget: {
                            spaceWithId: t.space_id
                        },
                        canUndo: !0,
                        perform: e => {
                            i(543861).ZB({
                                notification: t,
                                rootStore: f,
                                transaction: e,
                                read: !t.read
                            })
                        }
                    }))
                }, [S, t, Z, $, f]), ei = (0, n.useCallback)(e => {
                    t && (V(), (0, i(377796).createAndCommit)({
                        userAction: "InboxActionsMenu.handleArchive",
                        environment: S,
                        cellTarget: {
                            spaceWithId: t.space_id
                        },
                        canUndo: !0,
                        perform: e => {
                            i(543861).s4({
                                notification: t,
                                rootStore: f,
                                transaction: e
                            })
                        }
                    }))
                }, [S, t, V, f]), en = (0, n.useCallback)(e => {
                    t && (G(), (0, i(377796).createAndCommit)({
                        userAction: "Activity.handleUnarchive",
                        environment: S,
                        cellTarget: {
                            spaceWithId: t.space_id
                        },
                        canUndo: !0,
                        perform: e => {
                            i(543861).JV({
                                notificationId: t.id,
                                spaceId: t.space_id,
                                visited: !1,
                                rootStore: f,
                                transaction: e
                            })
                        }
                    }))
                }, [S, t, G, f]), er = (0, n.useCallback)(() => {
                    B(!0), C && void 0 !== k && U(k)
                }, [C, k, U]), eo = (0, n.useCallback)(() => {
                    B(!1), C && void 0 !== k && U(null)
                }, [C, k, U]), ea = (0, n.useId)(), es = (0, r.jsx)(p, {
                    notification: t,
                    rootStore: f,
                    isHovered: R,
                    onMouseEnter: () => L(!0),
                    onMouseLeave: () => L(!1),
                    onArchiveClicked: V,
                    onUnarchiveClicked: G,
                    onMarkAsReadClicked: Z,
                    onMarkAsUnreadClicked: $
                });
                return (0, r.jsx)(i(656252).A, {
                    ref: N,
                    disabled: !i(986939).A.isMobile,
                    style: i(13649).T.popup,
                    popupType: M.isTablet ? i(656252).z.Popup : i(656252).z.BottomSheet,
                    content: e => (0, r.jsx)(i(880393).Lk, {
                        blockStore: _,
                        notification: t,
                        handlers: {
                            handleUnarchive: en,
                            handleArchive: ei,
                            toggleNotificationReadStatus: et
                        },
                        closePopup: () => e.close()
                    }),
                    children: () => (0, r.jsx)("div", { ...i(986939).A.isMobile && D,
                        children: (0, r.jsx)("article", {
                            style: u.article,
                            onMouseOver: er,
                            onMouseLeave: eo,
                            children: (0, r.jsxs)(i(927332).y.Provider, {
                                value: {
                                    setNestedHovered: W,
                                    setMainHovered: B
                                },
                                children: [i(986939).A.isMobile ? null : es, (0, r.jsxs)(i(64960).Ay, {
                                    href: x,
                                    hovered: H,
                                    ignoreLocalHoverState: !0,
                                    style: J.mainClickTargetButton,
                                    onClick: ee,
                                    hoveredStyle: u.mainClickTargetButtonHovered,
                                    disabled: !x,
                                    pressedStyle: J.buttonPressed,
                                    "aria-labelledby": ea,
                                    children: [(0, r.jsx)("div", {
                                        style: J.header,
                                        children: (0, r.jsx)(v, {
                                            icon: h.icon,
                                            header: h.title,
                                            timestamp: w,
                                            titleAriaId: ea,
                                            showBlueDot: E && !F,
                                            disableTitleClamp: j,
                                            count: b,
                                            isSlipperySlope: C
                                        })
                                    }), (0, r.jsxs)(i(4458).VP, {
                                        children: [m ? (0, r.jsx)("div", {
                                            style: J.subheader,
                                            children: m
                                        }) : void 0, g ? (0, r.jsx)("div", {
                                            style: J.body,
                                            children: g
                                        }) : void 0, s ? (0, r.jsx)("div", {
                                            style: J.children,
                                            children: s
                                        }) : void 0]
                                    })]
                                }), i(986939).A.isMobile ? es : null, y ? void 0 : (0, r.jsx)("div", {
                                    style: J.divider
                                })]
                            })
                        })
                    })
                }, t.id)
            })
        },
        366318: (e, t, i) => {
            i.d(t, {
                S: () => n
            });

            function n(e) {
                return (0, i(682985).K8)(() => {
                    if (!(0, i(23803).vL)()) return !1;
                    let t = e.getParentStore();
                    return !!((null == t ? void 0 : t.table) === i(832375).VlP && t.getFormatStore().getKeyStore("external_collection_type").getValue()) || !1
                }, [e])
            }
        },
        391343: (e, t, i) => {
            i.d(t, {
                A: () => r
            }), i(296540);
            var n = i(474848);

            function r(e) {
                let t = (0, i(47187).E)(e);
                return (0, n.jsx)("div", {
                    style: t.iconContainer,
                    children: (0, n.jsx)(i(16275).I, {
                        icon: i(407598).peopleFillIcon,
                        size: t.icon.width,
                        colorVariant: "secondary"
                    })
                })
            }
        },
        400308: (e, t, i) => {
            i.d(t, {
                $: () => n
            }), i(581454);
            async function n(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    userIds: r,
                    invite: o,
                    membershipType: a
                } = e, s = n.id, l = (0, i(295447).Gx)({
                    environment: t,
                    spaceId: s
                }), d = t.idCreator.getSpaceShortIdCreator(s, l), {
                    serverCommitResult: c
                } = (0, i(377796).createAndCommit)({
                    userAction: "permissionsActions.saveSpaceActors",
                    environment: t,
                    canUndo: !0,
                    useSudoMode: !1,
                    cellTarget: "main",
                    perform: e => {
                        let s = r.map(e => ({
                                type: "user",
                                userId: e,
                                inviteId: d.idInSavedSpace(i(832375).Yxt),
                                membershipType: a
                            })),
                            {
                                inviteFlowId: l,
                                inviteMessage: c,
                                inviteOrigin: u,
                                disable_invite_email: h
                            } = o;
                        (0, i(215813).E)({
                            environment: t,
                            store: n,
                            permissionItems: s.map(e => {
                                var t;
                                return t = e, {
                                    type: "user_permission",
                                    role: (0, i(729052).ps)(t.membershipType),
                                    user_id: t.userId,
                                    invite_id: t.inviteId
                                }
                            }),
                            transaction: e,
                            inviteFlowId: l,
                            inviteMessage: (0, i(765898).Hb)(c),
                            inviteOrigin: u,
                            disable_invite_email: h
                        }), (0, i(73888).y)({
                            environment: t,
                            spaceStore: n,
                            actors: s,
                            transaction: e
                        })
                    }
                });
                await c
            }
        },
        405461: (e, t, i) => {
            function n(e) {
                let {
                    intl: t,
                    groupName: n
                } = e;
                return n || t.formatMessage(i(95384).D.untitledGroupName)
            }

            function r(e) {
                var t;
                return (null == (t = i(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function o(e) {
                let {
                    userIds: t,
                    limit: n,
                    spaceStore: r
                } = e;
                if (!r) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let o = n ? t.slice(0, n) : t;
                return {
                    limitedUserStores: i(381453).oE(o.map(e => i(807825).L.createChildStore(r, {
                        table: i(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - o.length
                }
            }

            function a({
                userStores: e,
                spaceStore: t,
                intl: n
            }) {
                return i(381453).Ul(e, e => e.getSearchName(n)).sort((e, n) => {
                    if (!t) return 0;
                    let r = (0, i(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        o = (0, i(993077).dp)(t, n.id).getMembershipTypeAsRoleOrNone();
                    return r && o ? i(642157).hV.indexOf(o) - i(642157).hV.indexOf(r) : 0
                })
            }

            function s(e) {
                var t;
                let {
                    spaceStore: n,
                    spaceUserStore: r
                } = e;
                if (!n) return !1;
                let o = (null == r ? void 0 : r.getMembershipType()) ? ? "none",
                    a = null == (t = n.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (o) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === a;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, i(722371).HB)(o)
                }
            }

            function l(e) {
                let {
                    groupId: t,
                    delta: n
                } = e, r = i(801062).h.getGroupData(t);
                r && i(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, r.memberCount + n)
                })
            }

            function d(e) {
                let {
                    members: t,
                    query: i
                } = e, n = i.trim().toLowerCase();
                return "" === n ? t : t.filter(e => e.name.toLowerCase().includes(n) || void 0 !== e.email && e.email.toLowerCase().includes(n))
            }

            function c(e) {
                let {
                    memberUserIds: t,
                    spaceStore: n,
                    groupId: r,
                    currentUserId: o
                } = e;
                return t.map(e => {
                    let t = i(807825).L.createChildStore(n, {
                            table: i(832375).oo9,
                            id: e
                        }),
                        a = (0, i(13717).A)({
                            spaceStore: n,
                            groupId: r,
                            userId: e
                        }),
                        s = i(229903).V.createChildStore(n, (0, i(729052).i1)({
                            userId: e,
                            spaceId: n.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === o,
                        isOwner: "owner" === a.getMembershipType(),
                        isWorkspaceOwner: n.canAdmin(),
                        isRestrictedMember: s.isRestrictedMember() ? ? !0
                    }
                })
            }

            function u(e) {
                let {
                    users: t,
                    existingMemberIds: i
                } = e, n = new Set(i);
                return t.filter(e => !n.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function h(e) {
                let {
                    groupId: t,
                    groupStore: n
                } = e;
                i(801062).h.updateGroup(t, {
                    group: n.getModel()
                })
            }
            i.d(t, {
                A9: () => u,
                Fz: () => c,
                Ny: () => s,
                Pf: () => n,
                cp: () => a,
                gA: () => o,
                mi: () => d,
                s: () => l,
                sd: () => h,
                xQ: () => r
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(581454)
        },
        562033: (e, t, i) => {
            i.d(t, {
                r: () => r
            }), i(296540);
            var n = i(474848);

            function r(e) {
                let {
                    item: t,
                    undoFunc: r
                } = e;
                i(436555).D6({ ...t,
                    right: (0, n.jsx)(i(531119).q6, {
                        onUndo: r
                    })
                })
            }
        },
        594014: (e, t, i) => {
            i.d(t, {
                m: () => o
            });
            var n = i(296540),
                r = i(474848);
            let o = n.memo(function(e) {
                let {
                    textValue: t
                } = e, o = (0, n.useMemo)(() => (0, i(862060).X1)((0, i(862060).eC)(t)), [t]);
                return (0, r.jsx)("span", {
                    children: o
                })
            })
        },
        734007: (e, t, i) => {
            i.d(t, {
                U: () => n
            });
            let n = new(i(815048)).O2("notifications", () => Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(30085), i.e(27727), i.e(47609), i.e(47010), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(21969), i.e(29663), i.e(28482), i.e(76361), i.e(14369), i.e(75136), i.e(98175), i.e(72805), i.e(30767), i.e(69193), i.e(97711), i.e(58889), i.e(21294), i.e(64134), i.e(31914), i.e(62146), i.e(332), i.e(53478), i.e(8896), i.e(75651), i.e(6893)]).then(i.bind(i, 23532)))
        },
        847871: (e, t, i) => {
            i.d(t, {
                b: () => r
            }), i(898992), i(354520), i(672577), i(581454), i(296540);
            var n = i(474848);

            function r(e) {
                let {
                    intl: t,
                    authors: r,
                    currentUserId: o,
                    isCondensedFormat: a = !1,
                    fontWeightForAuthorNames: s = "semibold",
                    precomputedActorNames: l
                } = e, d = r.find(e => e.id === o), c = {
                    fontWeight: s ? i(699422).Wy[s] : i(699422).Wy.semibold
                }, u = l ? ? r.filter(e => e !== d).map(e => (0, i(197018).lR)(t, e));
                if (o && d) {
                    if (0 === u.length) return (0, n.jsx)("span", {
                        children: (0, n.jsx)(i(109939).sA, { ...i(561007).U.forOneAuthorCurrentUser
                        })
                    });
                    else if (1 === u.length) return (0, n.jsx)("span", {
                        children: (0, n.jsx)(i(109939).sA, { ...i(561007).U.forTwoAuthorsCurrentUser,
                            values: {
                                firstAuthor: u[0],
                                b: e => (0, n.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                    else if (2 === u.length) return (0, n.jsx)("span", {
                        children: (0, n.jsx)(i(109939).sA, { ...i(561007).U.forThreeAuthorsCurrentUser,
                            values: {
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, n.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                    else if (u.length > 2) {
                        let e = (0, n.jsx)(i(109939).sA, { ...i(561007).U.forMoreThanThreeAuthorsCurrentUser,
                            values: {
                                numberOfOtherAuthors: u.length - 1,
                                firstAuthor: u[0],
                                b: e => (0, n.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        });
                        return (0, n.jsx)("span", {
                            children: e
                        })
                    }
                } else if (1 === u.length) return (0, n.jsx)("span", {
                    children: (0, n.jsx)(i(109939).sA, { ...i(561007).U.forOneAuthor,
                        values: {
                            author: u[0],
                            b: e => (0, n.jsx)("span", {
                                style: c,
                                children: e
                            })
                        }
                    })
                });
                else if (2 === u.length)
                    if (a) return (0, n.jsx)("span", {
                        children: (0, n.jsx)(i(109939).sA, { ...i(561007).U.forTwoAuthorsCondensed,
                            values: {
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, n.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                    else return (0, n.jsx)("span", {
                        children: (0, n.jsx)(i(109939).sA, { ...i(561007).U.forTwoAuthors,
                            values: {
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, n.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                else if (u.length > 2)
                    if (a) {
                        let e = (0, n.jsx)(i(109939).sA, { ...i(561007).U.forMoreThanTwoAuthorsCondensed,
                            values: {
                                numberOfOtherAuthors: u.length - 1,
                                firstAuthor: u[0],
                                b: e => (0, n.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        });
                        return (0, n.jsx)("span", {
                            children: e
                        })
                    } else {
                        let e = (0, n.jsx)(i(109939).sA, { ...i(561007).U.forMoreThanTwoAuthors,
                            values: {
                                numberOfOtherAuthors: u.length - 2,
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, n.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        });
                        return (0, n.jsx)("span", {
                            children: e
                        })
                    }
                return (0, n.jsx)("span", {
                    children: (0, n.jsx)(i(109939).sA, { ...i(561007).U.someone
                    })
                })
            }
        },
        880393: (e, t, i) => {
            i.d(t, {
                Ay: () => h,
                Lk: () => u,
                fB: () => a
            }), i(581454);
            var n = i(296540),
                r = i(474848);
            let o = (0, i(109939).YK)({
                    changePageNotificationSettings: {
                        defaultMessage: "Change page notification settings",
                        id: "inboxActionsMenu.notificationSettings.tooltipMessage"
                    },
                    markUnread: {
                        defaultMessage: "Mark this notification as unread",
                        id: "inboxActionsMenu.markNotificationAsUnread.tooltipMessage"
                    },
                    markRead: {
                        defaultMessage: "Mark this notification as read",
                        id: "inboxActionsMenu.markNotificationAsRead.tooltipMessage"
                    },
                    archive: {
                        defaultMessage: "Archive this notification",
                        id: "inboxActionsMenu.handleArchive.tooltipMessage"
                    },
                    unarchive: {
                        defaultMessage: "Unarchive",
                        id: "inboxActionsMenu.handleUnarchive.tooltipMessage"
                    }
                }),
                a = 2,
                s = 24,
                l = 30,
                d = {
                    container: {
                        display: "flex",
                        gap: 1,
                        height: "min-content",
                        padding: 2,
                        borderWidth: +!i(986939).A.isMobile,
                        borderStyle: "solid",
                        borderColor: i(632079).Tj.border.primary,
                        background: i(632079).Tj.buttonGroupBackground,
                        borderRadius: 6,
                        boxShadow: i(986939).A.isMobile ? void 0 : "0px 2px 4px 0px rgba(22, 29, 27, 0.02)"
                    },
                    button: {
                        height: i(986939).A.isMobile ? l : s,
                        width: i(986939).A.isMobile ? l : s,
                        borderRadius: 4
                    },
                    icon: {
                        fill: i(632079).Tj.icon.secondary,
                        padding: 0,
                        width: i(986939).A.isMobile ? i(104509).lD.default : i(104509).Ev.default,
                        height: i(986939).A.isMobile ? i(104509).lD.default : i(104509).Ev.default
                    }
                },
                c = {
                    style0: {
                        padding: 3
                    },
                    iconContainer: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...i(13649).T.icon
                    }
                };

            function u(e) {
                let {
                    blockStore: t,
                    notification: a,
                    handlers: s,
                    closePopup: l
                } = e, {
                    handleArchive: d,
                    handleUnarchive: u,
                    toggleNotificationReadStatus: h
                } = s, m = (0, i(533992).v3)(), p = (0, i(109939).tz)(), g = (0, i(682985).K8)(() => null == t ? void 0 : t.getFollowSettingsKey(), [t]), f = (0, i(682985).K8)(() => g && t ? i(66637).H8({
                    followSettingsKey: g,
                    environment: m,
                    blockStore: t,
                    from: "inbox"
                }) : [], [g, m, t]), v = (0, i(67499).S)(), b = (0, n.useMemo)(() => a.read ? (0, r.jsx)(i(16275).I, {
                    icon: i(88721).C,
                    size: 24
                }) : (0, r.jsx)(i(16275).I, {
                    icon: i(444202).d,
                    size: 24
                }), [a.read]);
                return (0, r.jsx)(i(747369).A, {
                    menuType: i(649476).gu.Popup,
                    height: i(986939).A.isMobile ? "50vh" : void 0,
                    minWidth: 250,
                    maxWidth: i(986939).A.isMobile ? "100vw" : void 0,
                    scrollerStyle: i(13649).T.menuScroller,
                    header: !i(986939).A.isMobile && (0, r.jsx)(i(324489).V, {
                        style: i(13649).T.header,
                        isSmall: !i(986939).A.isMobile,
                        isSecondaryColor: !i(986939).A.isMobile,
                        children: (0, r.jsx)(i(109939).sA, {
                            id: "UpdateSidebarTabUpdatesHeader.pageNotificationSettings.label",
                            defaultMessage: "Page notification settings"
                        })
                    }),
                    children: (0, r.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        sections: [...i(986939).A.isMobile ? [{
                            key: "Actions title",
                            render: () => (0, r.jsx)(i(324489).V, {
                                style: i(13649).T.header,
                                isSmall: !i(986939).A.isMobile,
                                isSecondaryColor: !i(986939).A.isMobile,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "inbox.actionsSectionTitle.label",
                                    defaultMessage: "Actions"
                                })
                            }),
                            items: []
                        }, {
                            key: "Actions",
                            render: e => (0, r.jsx)(i(844565).A, { ...e,
                                topBorder: !1,
                                style: i(13649).T.sectionMenuItem
                            }),
                            items: ["markAsReadOrUnread", "archive"].map((e, t) => {
                                let n = t === f.length - 1,
                                    s = i(986939).A.isMobile && n;
                                return {
                                    key: e,
                                    render: t => "archive" === e ? (0, r.jsx)(i(95582).A, { ...t,
                                        style: { ...i(13649).T.buttonMenuItem,
                                            ...s && i(13649).T.transparentButtonMenuItemBorder
                                        },
                                        pressedStyle: i(13649).T.buttonMenuItemPressed,
                                        icon: a.visited ? (0, r.jsx)(i(16275).I, {
                                            icon: i(325336).arrowUTurnUpLeftIcon,
                                            style: { ...i(13649).T.icon,
                                                ...c.style0
                                            }
                                        }) : (0, r.jsx)(i(16275).I, {
                                            icon: i(937776).B,
                                            style: i(13649).T.icon
                                        }),
                                        title: p.formatMessage(a.visited ? o.unarchive : o.archive),
                                        titleStyle: i(13649).T.title
                                    }) : "markAsReadOrUnread" === e ? (0, r.jsx)(i(95582).A, { ...t,
                                        style: { ...i(13649).T.buttonMenuItem,
                                            ...s && i(13649).T.transparentButtonMenuItemBorder
                                        },
                                        pressedStyle: i(13649).T.buttonMenuItemPressed,
                                        icon: (0, r.jsx)("div", {
                                            style: c.iconContainer,
                                            children: b
                                        }),
                                        title: p.formatMessage(a.read ? o.markUnread : o.markRead),
                                        titleStyle: i(13649).T.title
                                    }) : void(0, i(722371).HB)(e),
                                    action: ({
                                        event: t
                                    }) => {
                                        "markAsReadOrUnread" === e ? h(t) : "archive" === e ? a.visited ? u(t) : d(t) : (0, i(722371).HB)(e), l()
                                    }
                                }
                            })
                        }] : [], ...i(986939).A.isMobile ? [{
                            key: "Page notification settings title",
                            render: () => (0, r.jsx)(i(324489).V, {
                                style: i(13649).T.subheader,
                                isSmall: !i(986939).A.isMobile,
                                isSecondaryColor: !i(986939).A.isMobile,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "inbox.notifyMeForSectionTitle.label",
                                    defaultMessage: "Page notification settings"
                                })
                            }),
                            items: []
                        }] : [], {
                            key: "Page notification settings",
                            render: e => (0, r.jsx)(i(844565).A, { ...e,
                                topBorder: !1,
                                style: i(13649).T.sectionMenuItem
                            }),
                            items: f.map((e, t) => {
                                let n = t === f.length - 1,
                                    o = i(986939).A.isMobile && n;
                                return {
                                    key: e.action.analyticsName,
                                    render: t => (0, r.jsx)(i(95582).A, { ...t,
                                        style: { ...i(13649).T.buttonMenuItem,
                                            ...o && i(13649).T.transparentButtonMenuItemBorder
                                        },
                                        pressedStyle: i(13649).T.buttonMenuItemPressed,
                                        title: e.title,
                                        titleStyle: i(13649).T.title,
                                        isChecked: e.isSelectedOption
                                    }),
                                    action: () => {
                                        e.action.action({
                                            environment: m,
                                            blocks: [],
                                            publicEditMode: void 0,
                                            analyticsFrom: "inbox_long_press_menu",
                                            pageContext: v
                                        }), l()
                                    }
                                }
                            })
                        }],
                        initialFocus: void 0,
                        onAccept: () => l()
                    })
                })
            }
            let h = n.memo(function(e) {
                let {
                    notification: t,
                    rootStore: a,
                    onArchiveClicked: s,
                    onUnarchiveClicked: l,
                    onMarkAsReadClicked: c,
                    onMarkAsUnreadClicked: h
                } = e, m = (0, i(533992).v3)(), p = (0, i(109939).tz)(), g = (0, i(682985).K8)(() => !!t && (0, i(164134).IF)(t.type), [t]), f = (0, i(682985).K8)(() => {
                    let e = null == t ? void 0 : t.navigable_block_id;
                    if (e) return i(970831).B.createChildStore(a, {
                        table: i(832375).evP,
                        id: e
                    })
                }, [a, t]), v = (0, i(682985).K8)(() => null == f ? void 0 : f.getFollowSettingsKey(), [f]), b = (0, i(682985).K8)(() => v && f ? i(66637).H8({
                    followSettingsKey: v,
                    environment: m,
                    blockStore: f,
                    from: "inbox"
                }) : [], [v, m, f]), x = g && b.length > 0, y = (0, i(682985).K8)(() => t.read ? i(88721).C : i(444202).d, [t.read]), A = (0, n.useCallback)(e => {
                    if (!t) return;
                    s();
                    let n = t.space_id;
                    (0, i(377796).createAndCommit)({
                        userAction: "InboxActionsMenu.handleArchive",
                        environment: m,
                        cellTarget: {
                            spaceWithId: n
                        },
                        canUndo: !0,
                        perform: e => {
                            i(543861).s4({
                                notification: t,
                                rootStore: a,
                                transaction: e
                            })
                        }
                    })
                }, [m, t, s, a]), j = (0, n.useCallback)(e => {
                    if (!t) return;
                    l();
                    let n = t.space_id;
                    (0, i(377796).createAndCommit)({
                        userAction: "Activity.handleUnarchive",
                        environment: m,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            i(543861).JV({
                                notificationId: t.id,
                                spaceId: t.space_id,
                                visited: !1,
                                rootStore: a,
                                transaction: e
                            })
                        }
                    })
                }, [m, t, l, a]), T = (0, n.useCallback)(e => {
                    if (!t) return;
                    t.read ? h() : c();
                    let n = t.space_id;
                    (0, i(377796).createAndCommit)({
                        userAction: "InboxActionsMenu.toggleNotificationReadStatus",
                        environment: m,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            i(543861).ZB({
                                notification: t,
                                rootStore: a,
                                transaction: e,
                                read: !t.read
                            })
                        }
                    })
                }, [m, t, c, h, a]), S = (0, n.useCallback)(() => {
                    v && f && t && i(142215).zP({
                        environment: m,
                        notificationId: t.id,
                        pageId: f.pointer.id,
                        isCurrentlyFollowing: (0, i(366995).A)(v).following,
                        from: "inbox"
                    })
                }, [m, f, v, t]);
                return t.visited ? (0, r.jsx)("div", {
                    style: d.container,
                    children: (0, r.jsx)(i(51831).m, {
                        content: () => p.formatMessage(o.unarchive),
                        children: e => (0, r.jsx)(i(374533).A, {
                            ariaLabel: p.formatMessage(o.unarchive),
                            style: d.button,
                            icon: i(325336).arrowUTurnUpLeftIcon,
                            iconStyle: d.icon,
                            onClick: j,
                            ...e
                        })
                    })
                }) : (0, r.jsxs)("div", {
                    style: d.container,
                    children: [x ? (0, r.jsx)(i(51831).m, {
                        content: () => (0, r.jsx)(i(109939).sA, { ...o.changePageNotificationSettings
                        }),
                        children: e => (0, r.jsx)(i(656252).A, {
                            style: i(13649).T.popup,
                            popupType: i(986939).A.isMobile ? i(656252).z.SlideUp : i(656252).z.Popup,
                            alignmentToOrigin: "start",
                            placementToOrigin: "bottom",
                            content: e => (0, r.jsx)(u, {
                                blockStore: f,
                                notification: t,
                                handlers: {
                                    handleUnarchive: j,
                                    handleArchive: A,
                                    toggleNotificationReadStatus: T
                                },
                                closePopup: () => e.close()
                            }),
                            children: t => (0, r.jsx)(i(374533).A, {
                                ariaLabel: p.formatMessage(o.changePageNotificationSettings),
                                style: d.button,
                                icon: i(931118).r,
                                iconStyle: d.icon,
                                ...e,
                                ...(0, i(63390).A)(t, {
                                    onClick: () => S()
                                })
                            })
                        })
                    }, "pageNotificationSettings") : void 0, (0, r.jsx)(i(51831).m, {
                        content: () => p.formatMessage(t.read ? o.markUnread : o.markRead),
                        children: e => (0, r.jsx)(i(374533).A, {
                            ariaLabel: p.formatMessage(t.read ? o.markUnread : o.markRead),
                            style: d.button,
                            icon: y,
                            iconStyle: d.icon,
                            onClick: T,
                            ...e
                        })
                    }, "markUnread"), (0, r.jsx)(i(51831).m, {
                        content: () => p.formatMessage(o.archive),
                        children: e => (0, r.jsx)(i(374533).A, {
                            ariaLabel: p.formatMessage(o.archive),
                            style: d.button,
                            icon: i(937776).B,
                            iconStyle: d.icon,
                            onClick: A,
                            ...e
                        })
                    }, "archive")]
                })
            })
        },
        927332: (e, t, i) => {
            i.d(t, {
                g: () => s,
                y: () => o
            });
            var n = i(296540),
                r = i(474848);
            let o = n.createContext({
                setNestedHovered: () => {},
                setMainHovered: void 0
            });
            o.displayName = "NestedNotificationButtonContext";
            let a = {
                display: "contents"
            };

            function s(e) {
                let {
                    disabled: t = !1,
                    children: i
                } = e, s = (0, n.useContext)(o), l = (0, n.useCallback)(() => {
                    t || s.setNestedHovered(!0)
                }, [s, t]), d = (0, n.useCallback)(() => {
                    t || s.setNestedHovered(!1)
                }, [s, t]);
                return (0, r.jsx)("div", {
                    style: a,
                    onMouseEnter: l,
                    onMouseLeave: d,
                    children: i
                })
            }
        },
        931990: (e, t, i) => {
            function n(e) {
                let {
                    dateTime: t,
                    intl: n,
                    shortenDateAndRange: r
                } = e, o = i(25825).C6.toPersistedDate(t.valueOf());
                return i(850640).ZF({
                    value: o,
                    allowRelativeDates: !0,
                    intl: n,
                    shortenDateAndRange: r,
                    displayInUserTimezone: !0
                })
            }

            function r(e) {
                let {
                    dateTime: t,
                    intl: n,
                    userTimeZone: r,
                    displayInUserTimezone: o,
                    alwaysIncludeTimezone: a
                } = e, s = i(25825).C6.toPersistedDateTime(t.valueOf(), t.zoneName);
                return i(850640).ZF({
                    value: s,
                    allowRelativeDates: !0,
                    intl: n,
                    userTimeZone: r,
                    displayInUserTimezone: o,
                    alwaysIncludeTimezone: a
                })
            }

            function o(e) {
                let {
                    luxonRange: t,
                    intl: n
                } = e, r = i(25825).C6.toPersistedDateRange(t), o = i(850640).ZF({
                    value: r,
                    allowRelativeDates: !1,
                    shortenDateAndRange: !0,
                    intl: n,
                    displayInUserTimezone: !0
                }), a = t.end.setZone((0, i(714350).P)()), s = i(850640).fU({
                    start_time: a.toFormat(i(943003).GE),
                    humanReadable: !1,
                    intl: n
                });
                return n.formatMessage({
                    id: "verification.timeRange",
                    defaultMessage: "{formattedDateRange} at {formattedEndTime}"
                }, {
                    formattedDateRange: o,
                    formattedEndTime: s
                })
            }
            i.d(t, {
                OH: () => n,
                T2: () => r,
                do: () => o
            })
        }
    }
]);