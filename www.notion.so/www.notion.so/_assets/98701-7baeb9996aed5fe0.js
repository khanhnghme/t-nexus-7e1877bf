"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [95737, 98701], {
        11812: (e, t, s) => {
            s.d(t, {
                E: () => o,
                t: () => l
            }), s(296540);
            var a = s(474848);
            let i = (0, s(109939).YK)({
                defaultOption: {
                    id: "manageIntegrationPermissionsMenu.defaultOption",
                    defaultMessage: "Default"
                },
                defaultOptionDescription: {
                    id: "manageIntegrationPermissionsMenu.defaultOptionDescription",
                    defaultMessage: "Integration owners and members can manage access"
                },
                workspaceOwnersOption: {
                    id: "manageIntegrationPermissionsMenu.workspaceOwnersOption",
                    defaultMessage: "Integration Owners"
                },
                workspaceOwnersOptionDescription: {
                    id: "manageIntegrationPermissionsMenu.workspaceOwnersOptionDescription",
                    defaultMessage: "Only integration owners can manage access"
                }
            });

            function l(e) {
                let {
                    isAdminOnly: t
                } = e;
                return t ? i.workspaceOwnersOption : i.defaultOption
            }
            let n = {
                container: {
                    width: "100%"
                },
                triggerButton: { ...(0, s(399411).qq)({
                        size: "lg",
                        hasIconOnly: !1,
                        isButtonGapEnabled: !0
                    }),
                    flexDirection: "column",
                    alignItems: "stretch",
                    justifyContent: "center",
                    width: "100%",
                    minHeight: 70,
                    padding: `16px ${s(399411).mw.lg}px`,
                    backgroundColor: s(632079).Tj.background.primary,
                    border: `1px solid ${s(632079).Tj.border.secondary}`
                },
                triggerContent: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    flex: 1,
                    minWidth: 0
                },
                triggerTextWrapper: {
                    flex: 1,
                    minWidth: 0
                },
                triggerTitle: {
                    fontSize: s(649316).U.body.fontSize,
                    fontWeight: s(699422).Wy.medium,
                    color: s(632079).Tj.text.primary,
                    lineHeight: s(649316).U.body.lineHeight,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                triggerDescription: {
                    fontSize: s(649316).U.bodySm.fontSize,
                    color: s(632079).Tj.text.secondary,
                    lineHeight: s(649316).U.bodySm.lineHeight,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                iconStyle: { ...(0, s(399411).qq)({
                        size: "sm",
                        hasIconOnly: !0,
                        isButtonGapEnabled: !0
                    }),
                    fill: s(632079).Tj.text.secondary,
                    marginInlineEnd: 0
                },
                menuItemIcon: { ...(0, s(399411).qq)({
                        size: "sm",
                        hasIconOnly: !0,
                        isButtonGapEnabled: !0
                    }),
                    alignSelf: "center",
                    marginTop: 0,
                    marginInlineEnd: 0
                }
            };

            function o(e) {
                let {
                    isAdminOnly: t,
                    onToggleAdminOnly: l,
                    disabled: o
                } = e, r = (0, s(682985).uB)(void 0, s(510969).A), d = {
                    default: {
                        title: i.defaultOption,
                        description: i.defaultOptionDescription,
                        icon: s(943462).globeFillIcon,
                        adminOnlyValue: !1
                    },
                    workspace_owners: {
                        title: i.workspaceOwnersOption,
                        description: i.workspaceOwnersOptionDescription,
                        icon: s(156818).teamspaceFillIcon,
                        adminOnlyValue: !0
                    }
                }, c = t ? d.workspace_owners : d.default, p = [{
                    key: "integration-permissions-section",
                    items: ["default", "workspace_owners"].map(e => (({
                        key: e,
                        adminOnlyValue: i,
                        title: o,
                        description: d,
                        icon: c
                    }) => ({
                        key: e,
                        action: () => {
                            l && (l(i), r.reset())
                        },
                        render: e => (0, a.jsx)(s(95582).A, { ...e,
                            title: (0, a.jsx)(s(109939).sA, { ...o
                            }),
                            caption: (0, a.jsx)(s(109939).sA, { ...d
                            }),
                            icon: (0, a.jsx)(s(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: s(636518).pg,
                                minHeight: s(636518).pg,
                                flexShrink: 0,
                                children: c(n.iconStyle)
                            }),
                            desktopIconStyle: n.menuItemIcon,
                            isChecked: t === i,
                            shouldWrapCaption: !0,
                            onClick: () => {
                                l && (l(i), r.reset())
                            }
                        })
                    }))({
                        key: e,
                        ...d[e]
                    }))
                }];
                return (0, a.jsx)("div", {
                    style: n.container,
                    children: (0, a.jsx)(s(656252).A, {
                        popupType: s(986939).A.isMobile ? s(656252).z.BottomSheet : s(656252).z.Popup,
                        buttonPopupStore: r,
                        content: () => (0, a.jsx)(s(747369).A, {
                            menuType: s(986939).A.isMobile ? s(649476).gu.ActionSheet : s(649476).gu.Popup,
                            width: 380,
                            children: (0, a.jsx)(s(558045).A, {
                                type: s(558045).O.Vertical,
                                sections: p,
                                initialFocus: void 0
                            })
                        }),
                        children: e => (0, a.jsx)(s(988022).p, { ...e,
                            style: n.triggerButton,
                            disabled: o,
                            children: (0, a.jsxs)(s(4458).fI, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                height: "100%",
                                children: [(0, a.jsxs)("div", {
                                    style: n.triggerContent,
                                    children: [(0, a.jsx)("div", {
                                        style: n.iconStyle,
                                        children: c.icon(n.iconStyle)
                                    }), (0, a.jsxs)("div", {
                                        style: n.triggerTextWrapper,
                                        children: [(0, a.jsx)("div", {
                                            style: n.triggerTitle,
                                            children: (0, a.jsx)(s(109939).sA, { ...c.title
                                            })
                                        }), (0, a.jsx)("div", {
                                            style: n.triggerDescription,
                                            children: (0, a.jsx)(s(109939).sA, { ...c.description
                                            })
                                        })]
                                    })]
                                }), o ? void 0 : (0, a.jsx)(s(16275).I, {
                                    icon: s(36663).arrowChevronSingleDownFillIcon,
                                    style: n.iconStyle
                                })]
                            })
                        })
                    })
                })
            }
        },
        36663: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowChevronSingleDownFillIcon: () => i,
                iconDefinition: () => a
            }), s(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 6.72 12.56 7.16",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M9.38 13.619a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 0 0-1.237-1.238L10 11.763 5.218 6.98a.875.875 0 1 0-1.237 1.24z"
                    })
                },
                i = (0, s(104509).wt)("arrowChevronSingleDownFill", a, "fill")
        },
        87324: (e, t, s) => {
            s.d(t, {
                g: () => i
            }), s(898992), s(354520), s(581454), s(908872);
            var a = s(296540);

            function i({
                pageIdsSharedWithUser: e,
                spaceViewStore: t,
                spaceStore: l
            }) {
                let n = (0, s(533992).v3)(),
                    o = (0, s(109939).tz)(),
                    r = (0, s(714350).P)(),
                    d = (0, s(682985).K8)(() => t.getSpaceId(), [t]),
                    c = (0, a.useMemo)(() => e.map(e => new(s(970831)).B(n, {
                        table: s(832375).evP,
                        id: e,
                        spaceId: d
                    })), [e, n, d]),
                    p = (0, s(682985).K8)(() => (0, s(112127).f)({
                        environment: n,
                        spaceStore: l
                    }), [n, l]),
                    g = (0, s(345776).T)(),
                    {
                        teams: u
                    } = (0, s(413630).hL)({
                        userId: g,
                        spaceStore: l
                    }),
                    h = (0, s(413630).gc)({
                        spaceStore: l,
                        teams: u
                    }).map(e => e.store),
                    y = (0, s(682985).K8)(() => h.reduce((e, t) => {
                        let a = (0, s(709633).O)({
                            teamStore: t
                        }).filter(e => e.isLoadedNonCopyIndicator() && e.isNavigableBlock());
                        return a.length > 0 && (e[t.id] = a.sort((e, t) => {
                            let s = e.getRenderTitleWithPlaceholder({
                                    userTimeZone: r,
                                    intl: o
                                }),
                                a = t.getRenderTitleWithPlaceholder({
                                    userTimeZone: r,
                                    intl: o
                                });
                            return s.localeCompare(a)
                        }).map(e => e.id)), e
                    }, {}), [h, o, r], {
                        equalityFn: s(795676).k
                    });
                return {
                    allTeams: h,
                    teamPagesByTeam: y,
                    allPrivatePages: (0, s(682985).K8)(() => (0, s(275619).I)({
                        environment: n,
                        spaceViewStore: t
                    }) ? ? [], [t, n]),
                    allSharedPages: (0, s(682985).K8)(() => {
                        let e = t.getUserId();
                        return e ? c.filter(t => (0, s(260405).B)({
                            store: t,
                            userId: e,
                            spaceStore: l
                        })) : []
                    }, [t, c, l], {
                        equalityFn: s(795676).A
                    }),
                    allWorkspacePages: p
                }
            }
        },
        156818: (e, t, s) => {
            s.r(t), s.d(t, {
                iconDefinition: () => i,
                teamspaceFillIcon: () => l
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.95 3.3 16.1 14.08",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M4.075 3.3A2.125 2.125 0 0 0 1.95 5.425V16.75c0 .345.28.625.625.625h2.6V13.6a.55.55 0 0 1 .55-.55h3.6a.55.55 0 0 1 .55.55v3.775H13.1V5.425A2.125 2.125 0 0 0 10.975 3.3zm1.875 4a.675.675 0 1 1 0-1.35.675.675 0 0 1 0 1.35m.675 1.575a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0M5.95 11.8a.675.675 0 1 1 0-1.35.675.675 0 0 1 0 1.35m3.825-5.175a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0M9.1 9.55a.675.675 0 1 1 0-1.35.675.675 0 0 1 0 1.35m.675 1.575a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0"
                        }), (0, a.jsx)("path", {
                            d: "M8.775 17.375h-2.5V14.15h2.5zm5.425 0v-8.45h1.725c1.174 0 2.125.951 2.125 2.125v5.7c0 .345-.28.625-.625.625zm1.82-4.675a.675.675 0 1 0 0-1.35.675.675 0 0 0 0 1.35m.675 1.575a.675.675 0 1 0-1.35 0 .675.675 0 0 0 1.35 0"
                        })]
                    })
                },
                l = (0, s(104509).wt)("teamspaceFill", i, "fill")
        },
        202461: (e, t, s) => {
            s.d(t, {
                y: () => d
            });
            var a = s(296540),
                i = s(474848);
            let l = {
                tooltipRecordPath: {
                    flexWrap: "wrap",
                    overflow: "visible"
                },
                style0: {
                    color: s(632079).Tj.text.inverseSecondary
                },
                style1: {
                    whiteSpace: "normal",
                    overflow: "visible",
                    textOverflow: "unset"
                }
            };

            function n({
                blockStore: e,
                maxWidth: t
            }) {
                let o = (0, s(960253).I)(() => ({
                        truncatedText: {
                            maxWidth: t,
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }
                    }), [t]),
                    r = a.useRef(null),
                    [d, c] = a.useState(!1),
                    p = a.useCallback(() => {
                        let e = r.current;
                        if (!e) return;
                        let t = e.scrollWidth > e.clientWidth;
                        if (!t) {
                            for (let s of Array.from(e.querySelectorAll("*")))
                                if (s.scrollWidth > s.clientWidth) {
                                    t = !0;
                                    break
                                }
                        }
                        c(e => e === t ? e : t)
                    }, []);
                a.useEffect(() => {
                    p()
                }, [p, t]);
                let g = a.useRef(void 0),
                    u = a.useCallback(e => {
                        g.current !== e && (g.current = e, p())
                    }, [p]);
                return (0, s(729787).tK)(r, u), (0, i.jsx)(s(51831).m, {
                    textWrap: !0,
                    placement: "top",
                    disableTooltip: !d,
                    content: () => (0, i.jsx)(s(307983).Ay, {
                        store: e,
                        textColor: s(632079).Tj.text.inverseSecondary,
                        style: l.tooltipRecordPath,
                        innerStyle: l.style1
                    }),
                    children: t => (0, i.jsx)("div", { ...t,
                        ref: r,
                        style: o.truncatedText,
                        children: (0, i.jsx)(s(307983).Ay, {
                            store: e,
                            showFullPathInTooltip: !0,
                            style: o.truncatedText,
                            tooltipStyle: l.style0,
                            ellipsisTooltipPlacement: "top"
                        })
                    })
                })
            }
            let o = (0, s(109939).YK)({
                    inTrash: {
                        defaultMessage: "In trash",
                        id: "creatorProfile.integrations.pageAccess.inTrash"
                    }
                }),
                r = {
                    position: "relative"
                };

            function d({
                blockStore: e,
                styles: t,
                maxWidth: a,
                maxLength: l,
                shouldWrap: c = !1
            }) {
                let p = (0, s(109939).tz)(),
                    {
                        pageIcon: g,
                        isEmptyPage: u,
                        isInTrash: h,
                        iconRecordCategory: y
                    } = (0, s(682985).K8)(() => ({
                        pageIcon: e.getIcon(),
                        isEmptyPage: e.isEmptyPage(),
                        isInTrash: e.pathIsDead(),
                        iconRecordCategory: (0, s(569553).Te)(e)
                    }), [e]);
                return (0, i.jsxs)(s(4458).fI, {
                    gap: 8,
                    style: r,
                    children: [(0, i.jsx)(s(569553).B6, {
                        disabled: !0,
                        icon: g,
                        iconRecordCategory: y,
                        size: s(104509).Ev.default,
                        pageIconStyle: null == t ? void 0 : t.pageIconStyle,
                        isEmptyPage: u
                    }), (0, i.jsxs)(s(4458).VP, {
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        style: r,
                        flex: "1 1 0",
                        children: [(0, i.jsxs)(s(4458).fI, {
                            gap: 10,
                            style: r,
                            alignSelf: "stretch",
                            children: [(0, i.jsx)(s(111010).D, {
                                styleKey: "bodyMedium",
                                children: (0, i.jsx)(s(627918).A, {
                                    store: e,
                                    maxLength: l ? ? 60,
                                    shouldWrap: c,
                                    enableHover: !0
                                })
                            }), h ? (0, i.jsx)(s(746434).E, {
                                color: "yellow",
                                content: p.formatMessage(o.inTrash)
                            }, e.id) : void 0]
                        }), (0, i.jsx)(n, {
                            blockStore: e,
                            maxWidth: a
                        })]
                    })]
                })
            }
        },
        390152: (e, t, s) => {
            s.d(t, {
                r: () => p
            }), s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698);
            var a = s(296540),
                i = s(474848);
            let l = (0, s(109939).YK)({
                    modalHeader: {
                        id: "pageAccess.modal.header",
                        defaultMessage: "Manage page access"
                    },
                    byline: {
                        id: "pageAccess.modal.byline",
                        defaultMessage: "Choose which pages this integration can access. Add unlinked pages with search."
                    },
                    bylineEnterprise: {
                        id: "pageAccess.modal.bylineEnterprise",
                        defaultMessage: "Choose which pages this integration can access, and who manages access. Add unlinked pages with search."
                    },
                    saveButton: {
                        id: "pageAccess.modal.saveButton",
                        defaultMessage: "Save"
                    },
                    cancelButton: {
                        id: "pageAccess.modal.cancelButton",
                        defaultMessage: "Cancel"
                    },
                    whoCanManagePageAccess: {
                        id: "pageAccess.modal.whoCanManagePageAccess",
                        defaultMessage: "Who can manage page access"
                    }
                }),
                n = {
                    position: "relative",
                    flexGrow: 1,
                    minHeight: 0
                },
                o = {
                    position: "relative",
                    paddingTop: 8,
                    paddingBottom: 8
                },
                r = {
                    position: "relative",
                    flexShrink: 0
                },
                d = {
                    position: "relative"
                };

            function c({
                onClose: e,
                onCloseWithoutReset: t,
                pageIdsAlreadySharedWithBot: p,
                teamPagesByTeam: u,
                allTeams: h,
                privatePages: y,
                pagesSharedWithUser: m,
                workspacePages: f,
                spaceId: x,
                botStore: j,
                spaceStore: v,
                refetchBotSharedPages: b,
                selectedBlockIdsStore: w,
                pagePickerLocation: S,
                integrationManagementPermissions: P,
                showIntegrationManagementPermissions: I
            }) {
                let k = (0, s(109939).tz)(),
                    A = (0, s(533992).v3)(),
                    [M, T] = a.useState(!1),
                    [C, H] = a.useState(P.effectiveAdminOnly);
                a.useEffect(() => {
                    H(P.effectiveAdminOnly)
                }, [P.effectiveAdminOnly]);
                let O = async () => {
                        T(!0);
                        let {
                            pageIdAndOperations: e,
                            numPagesAdded: a,
                            numPagesRemoved: i
                        } = function(e, t) {
                            let s = new Set(e),
                                a = t.state,
                                i = [],
                                l = 0,
                                n = 0;
                            for (let e of Object.keys(a)) {
                                let t = a[e],
                                    o = s.has(e);
                                o && !t ? (i.push({
                                    pageId: e,
                                    operationType: "remove"
                                }), n++) : !o && t && (i.push({
                                    pageId: e,
                                    operationType: "add"
                                }), l++)
                            }
                            return {
                                pageIdAndOperations: i,
                                numPagesAdded: l,
                                numPagesRemoved: n
                            }
                        }(p, w);
                        await g({
                            environment: A,
                            spaceStore: v,
                            botStore: j,
                            pageIdAndOperations: e,
                            isAdminOnly: C,
                            integrationManagementPermissions: P
                        }) && ((0, s(104310).u)({
                            event: {
                                eventName: "clearer_integration_access_page_access_updated",
                                eventProperties: {
                                    triggered_from: S,
                                    pages_added: a,
                                    pages_removed: i,
                                    space_id: x,
                                    bot_id: j.id
                                }
                            }
                        }), b && await b()), T(!1), t()
                    },
                    B = P.featureEnabled && I;
                return (0, i.jsxs)(s(4458).VP, {
                    className: "autolayout-fill-height autolayout-fill-width",
                    padding: 24,
                    gap: 20,
                    style: d,
                    children: [(0, i.jsxs)(s(4458).VP, {
                        gap: 24,
                        style: n,
                        children: [(0, i.jsx)(s(77386).rQ, {
                            icon: (0, i.jsx)(s(16275).I, {
                                icon: s(822084).pageIcon,
                                size: "xl",
                                colorVariant: "secondary"
                            }),
                            title: k.formatMessage(l.modalHeader),
                            byline: B ? k.formatMessage(l.bylineEnterprise) : k.formatMessage(l.byline),
                            bylineWidthOverride: "60%"
                        }), (0, i.jsx)(s(509273).C, {
                            teamPagesByTeam: u,
                            allTeams: h,
                            privatePages: y,
                            pagesSharedWithUser: m,
                            workspacePages: f,
                            spaceId: x,
                            spaceStore: v,
                            selectedBlockIdsStore: w,
                            heightOverride: B ? 200 : 280
                        })]
                    }), B ? (0, i.jsxs)(s(4458).VP, {
                        gap: 12,
                        style: o,
                        children: [(0, i.jsx)(s(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: (0, i.jsx)(s(109939).sA, { ...l.whoCanManagePageAccess
                            })
                        }), (0, i.jsx)(s(11812).E, {
                            integrationManagementPermissions: P,
                            isAdminOnly: C,
                            onToggleAdminOnly: H,
                            disabled: M
                        })]
                    }) : void 0, (0, i.jsxs)(s(4458).fI, {
                        gap: 8,
                        style: r,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        children: [(0, i.jsx)(s(988022).p, {
                            onClick: e,
                            disabled: M,
                            size: "lg",
                            children: (0, i.jsx)(s(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "secondary",
                                children: k.formatMessage(l.cancelButton)
                            })
                        }), (0, i.jsx)(s(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            onClick: async () => await O(),
                            isLoading: M,
                            disabled: M,
                            children: k.formatMessage(l.saveButton)
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    onClose: t,
                    selectedBlockIdsStore: l,
                    pageIdsAlreadySharedWithBot: n
                } = e, o = a.useCallback(() => {
                    let e = {};
                    for (let t of n) e[t] = !0;
                    l.setState(e), t()
                }, [t, l, n]);
                return (0, i.jsx)(s(833503).s, {
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 700
                        },
                        height: {
                            type: "max",
                            length: 680
                        }
                    },
                    isOpen: e.isOpen,
                    onDismiss: o,
                    children: () => (0, i.jsx)(c, { ...e,
                        onClose: o,
                        onCloseWithoutReset: t
                    })
                })
            }
            async function g(e) {
                let t, {
                    environment: a,
                    spaceStore: i,
                    botStore: l,
                    pageIdAndOperations: n,
                    isAdminOnly: o,
                    integrationManagementPermissions: r
                } = e;
                o !== r.effectiveAdminOnly && (t = o);
                let d = n.length > 0,
                    c = void 0 !== t;
                return !!(d || c) && await s(577464).iN({
                    environment: a,
                    spaceStore: i,
                    botStore: l,
                    pageIdAndOperations: n,
                    effectiveAdminOnly: t
                })
            }
        },
        509273: (e, t, s) => {
            s.d(t, {
                C: () => S
            }), s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(354520), s(581454), s(737550);
            var a = s(296540),
                i = () => s(4458),
                l = () => s(988022),
                n = () => s(111010),
                o = () => s(832375),
                r = s(474848);
            let d = {
                hoveredRow: {
                    background: s(632079).Tj.buttonHoveredBackground
                },
                style0: {
                    opacity: .5
                },
                style1: {
                    color: s(632079).Tj.blue.text.accentPrimary
                },
                style2: {
                    display: "inline"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function c(e) {
                let {
                    spaceId: t,
                    onSelectPage: a,
                    query: l,
                    source: n,
                    findSelectedBlockAncestorId: c,
                    spaceStore: p
                } = e, g = (0, s(533992).v3)(), u = null, h = (0, s(815048).fJ)(s(308825).T.searchActions), [{
                    status: y,
                    value: m
                }] = (0, s(97668).Yb)(async () => {
                    if ("resolved" !== h.status) return;
                    let e = h.value;
                    return await e.searchPagesInSpace({
                        environment: g,
                        query: l,
                        limit: 10,
                        requireEditPermissions: !0,
                        spaceId: t,
                        excludeTemplates: !0,
                        source: n,
                        boostRecentlyViewedPages: !1,
                        spaceStore: p,
                        peopleBlocksToInclude: "none"
                    })
                }, [h.status, h.value, g, l, t, n, p], {
                    debounce: s(767776).tu
                }), f = (0, s(682985).K8)(() => "idle" === y || "pending" === y ? [] : ((null == m ? void 0 : m.results) || []).map(({
                    id: e
                }) => {
                    let t = new(s(970831)).B(g, {
                            table: o().evP,
                            id: e
                        }),
                        l = c(t);
                    return function(e) {
                        let {
                            store: t,
                            environment: a,
                            alreadySelectedAncestorId: l,
                            onSelectPage: n,
                            styles: d
                        } = e;
                        if (l && l === t.id) return {
                            key: t.id,
                            action: () => {},
                            render: e => (0, r.jsx)(s(103558).A, { ...e,
                                hoveredStyle: d.hoveredRow,
                                store: t,
                                hidePath: !1,
                                disabled: !0,
                                style: d.style0,
                                right: (0, r.jsxs)(i().fI, {
                                    gap: 4,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    className: "autolayout-fill-width",
                                    style: d.positionRelative,
                                    children: [(0, r.jsx)(s(16275).I, {
                                        icon: s(15956).checkmarkIcon,
                                        colorPalette: "blue",
                                        colorVariant: "accentPrimary"
                                    }), (0, r.jsx)("div", {
                                        style: d.style1,
                                        children: (0, r.jsx)(s(109939).sA, {
                                            id: "oauthPageSearchResults.disabledResult.bySelf.message",
                                            defaultMessage: "Already added"
                                        })
                                    })]
                                })
                            })
                        };
                        if (l) {
                            let e = new(s(970831)).B(a, {
                                table: o().evP,
                                id: l
                            });
                            return {
                                key: t.id,
                                action: () => {},
                                render: a => (0, r.jsx)(s(103558).A, { ...a,
                                    hoveredStyle: d.hoveredRow,
                                    store: t,
                                    hidePath: !0,
                                    disabled: !0,
                                    style: d.style0,
                                    caption: (0, r.jsx)(s(109939).sA, {
                                        id: "oauthPageSearchResults.disabledResult.byAncestor.message",
                                        defaultMessage: "Added via {ancestorPageName}",
                                        values: {
                                            ancestorPageName: (0, r.jsx)(s(627918).A, {
                                                store: e,
                                                style: d.style2
                                            })
                                        }
                                    }),
                                    right: (0, r.jsxs)(i().fI, {
                                        gap: 4,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        className: "autolayout-fill-width",
                                        style: d.positionRelative,
                                        children: [(0, r.jsx)(s(16275).I, {
                                            icon: s(15956).checkmarkIcon,
                                            colorPalette: "blue",
                                            colorVariant: "accentPrimary"
                                        }), (0, r.jsx)("div", {
                                            style: d.style1,
                                            children: (0, r.jsx)(s(109939).sA, {
                                                id: "oauthPageSearchResults.disabledResult.bySelf.message",
                                                defaultMessage: "Already added"
                                            })
                                        })]
                                    })
                                })
                            }
                        }
                        let c = t.getRole();
                        if (c && s(642157).Km(c)) return {
                            key: t.id,
                            action: () => n(t.id),
                            render: e => (0, r.jsx)(s(103558).A, {
                                store: t,
                                hidePath: !1,
                                hoveredStyle: d.hoveredRow,
                                ...e
                            })
                        }
                    }({
                        store: t,
                        alreadySelectedAncestorId: l,
                        environment: g,
                        onSelectPage: a,
                        styles: d
                    })
                }).filter(s(722371).O9), [g, c, a, null == m ? void 0 : m.results, y]);
                if ("idle" === y || "pending" === y) u = (0, r.jsx)(s(844565).A, {
                    children: (0, r.jsx)(s(200261).A, {})
                });
                else u = 0 === f.length ? (0, r.jsx)(s(844565).A, {
                    children: (0, r.jsx)(s(498341).u, {
                        title: (0, r.jsx)(s(109939).sA, {
                            id: "oauthPageSearchResults.noResults.placeholder",
                            defaultMessage: "No results"
                        })
                    })
                }) : (0, r.jsx)(s(558045).A, {
                    type: s(558045).O.Vertical,
                    initialFocus: void 0,
                    sections: [{
                        key: "results",
                        items: f,
                        render: e => (0, r.jsx)(s(844565).A, { ...e
                        })
                    }]
                });
                let x = {
                    menuType: s(649476).gu.Popup
                };
                return (0, r.jsx)(s(747369).A, { ...x,
                    children: u
                })
            }
            var p = () => s(202461);
            let g = {
                paddingTop: 2,
                paddingBottom: 2
            };

            function u({
                pageStore: e,
                isSelected: t,
                onToggle: a,
                maxLength: l,
                styles: o
            }) {
                let {
                    blockId: d,
                    icon: c,
                    isEmpty: p,
                    iconRecordCategory: h
                } = (0, s(682985).K8)(() => ({
                    blockId: e.id,
                    icon: e.getIcon(),
                    isEmpty: e.isEmptyPage(),
                    iconRecordCategory: (0, s(569553).Te)(e)
                }), [e]);
                return (0, r.jsx)(s(95582).A, {
                    onClick: a,
                    focused: !1,
                    buttonStyle: g,
                    icon: (0, r.jsx)(s(349050).S, {
                        checked: t,
                        size: 14,
                        onClick: e => {
                            e.stopPropagation(), a()
                        }
                    }),
                    title: (0, r.jsxs)(i().fI, {
                        gap: 8,
                        children: [(0, r.jsx)(s(569553).B6, {
                            disabled: !0,
                            icon: c,
                            iconRecordCategory: h,
                            size: s(104509).Ev.default,
                            pageIconStyle: o.pageIconStyle,
                            isEmptyPage: p
                        }), (0, r.jsx)(n().D, {
                            styleKey: "bodyMedium",
                            children: (0, r.jsx)(s(627918).A, {
                                store: e,
                                maxLength: l ? ? 60,
                                showTooltipWhenTruncated: !0
                            })
                        })]
                    })
                }, d)
            }
            let h = (0, s(109939).YK)({
                    collapseTeamspace: {
                        id: "creatorProfile.integrations.pageAccess.collapseTeamspace",
                        defaultMessage: "Collapse teamspace"
                    },
                    expandTeamspace: {
                        id: "creatorProfile.integrations.pageAccess.expandTeamspace",
                        defaultMessage: "Expand teamspace"
                    }
                }),
                y = {
                    paddingTop: 2,
                    paddingBottom: 2
                },
                m = {
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer"
                };

            function f({
                teamspaceStore: e,
                checkType: t,
                onToggleSelect: a,
                expanded: i,
                onExpandToggle: l
            }) {
                let n = (0, s(109939).tz)();
                return (0, r.jsx)(s(95582).A, {
                    onClick: l,
                    focused: !1,
                    icon: (0, r.jsx)(s(349050).S, {
                        checked: t,
                        size: 14,
                        onClick: e => {
                            e.stopPropagation(), a()
                        }
                    }),
                    right: (0, r.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        style: m,
                        onClick: e => {
                            e.stopPropagation(), l()
                        },
                        "aria-label": i ? n.formatMessage(h.collapseTeamspace) : n.formatMessage(h.expandTeamspace),
                        children: (0, r.jsx)(s(16275).I, {
                            icon: s(120011).arrowChevronSingleRightIcon,
                            size: "xs",
                            style: {
                                transform: i ? "rotate(90deg)" : "rotate(0deg)",
                                transition: "transform 0.1s ease-in-out"
                            }
                        })
                    }),
                    title: (0, r.jsx)(s(717878).I, {
                        teamStore: e
                    }),
                    buttonStyle: y
                }, e.id)
            }
            let x = (0, s(109939).YK)({
                    selectPagesLabel: {
                        id: "pageAccess.modal.selectPagesLabel",
                        defaultMessage: "Select pages"
                    },
                    searchPlaceholder: {
                        id: "pageAccess.modal.searchPlaceholder",
                        defaultMessage: "Search pages"
                    },
                    selectAll: {
                        id: "pageAccess.modal.selectAll",
                        defaultMessage: "Select all"
                    },
                    deselectAll: {
                        id: "pageAccess.modal.deselectAll",
                        defaultMessage: "Deselect all"
                    },
                    remove: {
                        id: "pageAccess.modal.removePage",
                        defaultMessage: "Remove"
                    },
                    noPagesMessage: {
                        id: "pageAccess.modal.noPagesMessage",
                        defaultMessage: "No pages found"
                    },
                    addPagesMessage: {
                        id: "pageAccess.modal.addPagesMessage",
                        defaultMessage: "Add pages first to give this integration access"
                    },
                    tooltip: {
                        id: "pageAccess.modal.tooltip",
                        defaultMessage: "Only pages where you have Full Access will appear here"
                    }
                }),
                j = { ...s(736193).V,
                    ...x
                };

            function v({
                key: e,
                title: t,
                allItems: a,
                styles: i
            }) {
                return {
                    key: e,
                    title: t,
                    content: (0, r.jsx)("div", {
                        style: i.menuList,
                        children: (0, r.jsx)(s(558045).A, {
                            type: s(558045).O.Vertical,
                            sections: [{
                                key: e,
                                render: e => (0, r.jsx)(s(844565).A, { ...e
                                }),
                                items: a
                            }],
                            initialFocus: void 0
                        })
                    }),
                    sectionContentStyleOverride: {
                        padding: 0
                    }
                }
            }
            let b = s(546605).Store.createClass({}, {
                    name: "SelectedBlockIdsStore"
                }),
                w = {
                    style0: {
                        height: 32
                    },
                    style1: {
                        padding: 0
                    },
                    icon: {
                        width: s(104509).Ev.xl,
                        height: s(104509).Ev.xl,
                        color: s(632079).Tj.icon.secondary
                    },
                    pageIconStyle: {
                        fill: s(632079).Tj.icon.secondary
                    },
                    nestedPageItem: {
                        marginInlineStart: 24
                    },
                    sectionsContainer: {
                        borderRadius: 8
                    },
                    button: {
                        minWidth: 120
                    },
                    sectionHeading: { ...s(649316).U.captionMedium,
                        color: s(632079).Tj.palette.gray["500"]
                    },
                    subSectionHeading: { ...s(649316).U.captionMedium,
                        padding: "8px",
                        color: s(632079).Tj.palette.gray["500"]
                    },
                    subSectionRowWithBorder: {
                        borderTop: `1px solid ${s(632079).Tj.border.secondary}`,
                        marginTop: 4,
                        width: "100%"
                    },
                    noPagesContainer: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        padding: 16
                    },
                    tooltipIcon: {
                        width: s(104509).Ev.sm,
                        height: s(104509).Ev.sm
                    },
                    tooltipText: {
                        width: 200
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function S({
                teamPagesByTeam: e,
                pagesSharedWithUser: t,
                privatePages: d,
                workspacePages: g,
                selectedBlockIdsStore: h,
                allTeams: y,
                spaceStore: m,
                heightOverride: x = 320
            }) {
                let P = (0, s(109939).tz)(),
                    I = (0, s(533992).v3)(),
                    k = (0, s(960253).I)(() => ({
                        pageSelectionContainer: {
                            height: x,
                            overflowY: "auto",
                            borderRadius: 8,
                            border: `1px solid ${s(632079).Tj.border.secondary}`,
                            padding: 4
                        }
                    }), [x]),
                    [A, M] = a.useState(""),
                    T = (0, s(682985).uB)(h, b),
                    C = e => {
                        T.setState({ ...T.state,
                            [e]: !T.state[e]
                        })
                    },
                    H = (0, s(682985).K8)(() => new Set(Object.keys(T.state).filter(e => T.state[e]).filter(e => {
                        let t = new(s(970831)).B(I, {
                            table: o().evP,
                            id: e,
                            spaceId: m.id
                        });
                        return (0, s(642157).Km)(t.getRole() || "none") && !t.pathIsDead() && t.isNavigableBlock()
                    })), [T, I, m.id]),
                    {
                        topLevelShareableSharedPageIds: O,
                        topLevelShareablePrivatePageIds: B,
                        topLevelShareableTeamspacePageIds: R,
                        topLevelShareableWorkspacePageIds: K,
                        shareableTeamPagesByTeam: z,
                        selectedNonTopLevelSharedPageIds: D,
                        selectedNonTopLevelPrivatePageIds: W,
                        selectedNonTopLevelWorkspacePageIds: E,
                        teamspaceManualSet: L
                    } = (0, s(568432).a)({
                        pagesSharedWithUser: t,
                        privatePages: d,
                        workspacePages: g,
                        teamPagesByTeam: e,
                        selectedPageIds: H,
                        spaceStore: m
                    }),
                    [N, V] = a.useState(new Set),
                    F = e => {
                        V(t => {
                            let s = new Set(t);
                            return s.has(e) ? s.delete(e) : s.add(e), s
                        })
                    },
                    _ = (0, a.useCallback)(e => (function(e, t) {
                        for (let a of (0, s(457915).g)(e))
                            if (a.table === o().evP) {
                                if (t.has(a.id)) return a.id;
                                else if (a.isRestricted()) break
                            }
                    })(e, new Set(H)), [H]);

                function q(e, t) {
                    let s = { ...T.state
                    };
                    for (let a of e) s[a] = t;
                    T.setState(s)
                }
                let U = [],
                    Y = a.useMemo(() => new Map, []),
                    {
                        sortedTopLevelSharedIds: $,
                        sortedTopLevelPrivateIds: G,
                        sortedTeamspaceManualIds: J,
                        sortedTopLevelWorkspacePageIds: Q,
                        sortedNonTopLevelSharedIds: Z,
                        sortedNonTopLevelPrivateIds: X,
                        sortedNonTopLevelWorkspacePageIds: ee,
                        sortedTeams: et
                    } = (0, s(682985).K8)(() => {
                        let e = e => {
                                let t = Y.get(e);
                                if (void 0 === t) {
                                    var a;
                                    t = (null == (a = new(s(970831)).B(I, {
                                        table: o().evP,
                                        id: e,
                                        spaceId: m.id
                                    }).getRenderTitle({
                                        intl: P,
                                        userTimeZone: (0, s(714350).P)()
                                    })) ? void 0 : a.toString()) ? ? "", Y.set(e, t)
                                }
                                return t
                            },
                            t = (t, s) => e(t).localeCompare(e(s));
                        return {
                            sortedTopLevelSharedIds: [...O].sort(t),
                            sortedTopLevelPrivateIds: [...B].sort(t),
                            sortedTeamspaceManualIds: [...L].sort((e, a) => {
                                let i = e => {
                                        var t;
                                        let a = new(s(970831)).B(I, {
                                            table: o().evP,
                                            id: e,
                                            spaceId: m.id
                                        });
                                        return (null == (t = (0, s(297311).U)(a)) ? void 0 : t.getName()) || ""
                                    },
                                    l = i(e),
                                    n = i(a);
                                return l !== n ? l.localeCompare(n) : t(e, a)
                            }),
                            sortedNonTopLevelSharedIds: [...D].sort(t),
                            sortedNonTopLevelPrivateIds: [...W].sort(t),
                            sortedTeams: [...y].sort(s(969633).r),
                            sortedTopLevelWorkspacePageIds: [...K].sort(t),
                            sortedNonTopLevelWorkspacePageIds: [...E].sort(t)
                        }
                    }, [I, P, m.id, O, B, L, D, W, K, E, y, Y]),
                    es = a.useMemo(() => new Map, []),
                    ea = a.useCallback(e => {
                        let t = es.get(e);
                        return t || (t = new(s(970831)).B(I, {
                            table: o().evP,
                            id: e,
                            spaceId: m.id
                        }), es.set(e, t)), t
                    }, [I, m.id, es]);
                if (!(!(O.size > 0 || B.size > 0) || $.length > 0 || G.length > 0)) return (0, r.jsx)(s(60469).A, {
                    loaded: !1,
                    showSpinnerTimeout: 0
                });
                if (R.size > 0 || L.size > 0) {
                    let e = [];
                    if (L.size > 0)
                        for (let t of (e.push({
                                key: "teamspace-manual-header",
                                action: () => {},
                                render: () => (0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: P.formatMessage(j.manuallySelectedPagesHeader)
                                })
                            }), J)) {
                            let s = ea(t);
                            e.push({
                                key: `manual-${t}`,
                                action: () => {
                                    C(t)
                                },
                                render: () => (0, r.jsxs)(i().fI, {
                                    className: "autolayout-fill-width",
                                    paddingInlineStart: 8,
                                    style: {
                                        position: "relative"
                                    },
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsx)(p().y, {
                                            blockStore: s,
                                            maxWidth: 420
                                        })
                                    }), (0, r.jsx)(l().p, {
                                        colorPalette: "blue",
                                        onClick: () => {
                                            C(t)
                                        },
                                        children: (0, r.jsx)(n().D, {
                                            styleKey: "captionMedium",
                                            children: P.formatMessage(j.remove)
                                        })
                                    })]
                                })
                            })
                        }
                    L.size > 0 && R.size > 0 && e.push({
                        key: "teamspace-manual-divider",
                        action: () => {},
                        render: () => (0, r.jsx)("div", {
                            style: w.subSectionRowWithBorder
                        })
                    });
                    let t = Array.from(R).some(e => H.has(e));
                    for (let a of (e.push({
                            key: "teamspace-top-level-header",
                            action: () => {},
                            render: () => (0, r.jsxs)(i().fI, {
                                className: "autolayout-fill-width",
                                alignItems: "center",
                                justifyContent: "space-between",
                                style: w.positionRelative,
                                children: [(0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: (0, r.jsx)(s(109939).sA, { ...j.teamspacesHeaderSubheader
                                    })
                                }), t ? (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(R, !1)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.deselectAll)
                                    })
                                }) : (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(R, !0)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.selectAll)
                                    })
                                })]
                            })
                        }), et.filter(e => z[e.id] && z[e.id].length > 0))) {
                        let t = z[a.id].filter(e => H.has(e)),
                            s = 0 !== t.length && (t.length === z[a.id].length || "partial"),
                            i = N.has(a.id);
                        if (e.push({
                                key: `teamspace-${a.id}`,
                                action: () => {},
                                render: () => (0, r.jsx)(f, {
                                    teamspaceStore: a,
                                    checkType: s,
                                    onToggleSelect: () => q(z[a.id], !s),
                                    expanded: i,
                                    onExpandToggle: () => F(a.id)
                                })
                            }), i)
                            for (let t of z[a.id]) {
                                let s = ea(t);
                                e.push({
                                    key: t,
                                    action: () => {
                                        C(t)
                                    },
                                    render: () => (0, r.jsx)("div", {
                                        style: w.nestedPageItem,
                                        children: (0, r.jsx)(u, {
                                            pageStore: s,
                                            isSelected: H.has(t),
                                            onToggle: () => {
                                                C(t)
                                            },
                                            styles: { ...k,
                                                ...w
                                            },
                                            maxLength: 50
                                        })
                                    })
                                })
                            }
                    }
                    let a = v({
                        key: "teamspaces",
                        title: (0, r.jsx)("div", {
                            style: w.sectionHeading,
                            children: (0, r.jsx)(s(109939).sA, { ...j.teamspacesHeader
                            })
                        }),
                        allItems: e,
                        styles: { ...k,
                            ...w
                        }
                    });
                    U.push(a)
                }
                if ((K.size > 0 || E.length > 0) && 0 === y.length) {
                    let e = [];
                    if (E.length > 0)
                        for (let t of (e.push({
                                key: "workspaceManualHeader",
                                action: () => {},
                                render: () => (0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: P.formatMessage(j.manuallySelectedPagesHeader)
                                })
                            }), ee)) {
                            let s = ea(t);
                            e.push({
                                key: t,
                                action: () => {
                                    C(t)
                                },
                                render: () => (0, r.jsxs)(i().fI, {
                                    className: "autolayout-fill-width",
                                    paddingInlineStart: 8,
                                    style: {
                                        position: "relative"
                                    },
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsx)(p().y, {
                                            blockStore: s,
                                            maxWidth: 420
                                        })
                                    }), (0, r.jsx)(l().p, {
                                        colorPalette: "blue",
                                        onClick: () => {
                                            C(t)
                                        },
                                        children: (0, r.jsx)(n().D, {
                                            styleKey: "captionMedium",
                                            children: P.formatMessage(j.remove)
                                        })
                                    })]
                                })
                            })
                        }
                    if (E.length > 0 && K.size > 0 && e.push({
                            key: "shared-manual-divider",
                            action: () => {},
                            render: () => (0, r.jsx)("div", {
                                style: w.subSectionRowWithBorder
                            })
                        }), K.size > 0) {
                        let t = Array.from(K).some(e => H.has(e));
                        e.push({
                            key: "workspaces-top-level-header",
                            action: () => {},
                            render: () => (0, r.jsxs)(i().fI, {
                                className: "autolayout-fill-width",
                                alignItems: "center",
                                justifyContent: "space-between",
                                style: w.positionRelative,
                                children: [(0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: (0, r.jsx)(s(109939).sA, { ...j.topLevelPagesHeader
                                    })
                                }), t ? (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(K, !1)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.deselectAll)
                                    })
                                }) : (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(K, !0)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.selectAll)
                                    })
                                })]
                            })
                        })
                    }
                    e.push(...Q.map(e => {
                        let t = ea(e);
                        return {
                            key: t.id,
                            action: () => {
                                C(t.id)
                            },
                            render: () => (0, r.jsx)("div", {
                                children: (0, r.jsx)(u, {
                                    pageStore: t,
                                    isSelected: H.has(t.id),
                                    onToggle: () => {
                                        C(t.id)
                                    },
                                    styles: { ...k,
                                        ...w
                                    },
                                    maxLength: 50
                                })
                            })
                        }
                    }));
                    let t = v({
                        key: "workspacePages",
                        title: (0, r.jsx)("div", {
                            style: w.sectionHeading,
                            children: (0, r.jsx)(s(109939).sA, { ...j.workspacePagesHeader
                            })
                        }),
                        allItems: e,
                        styles: { ...k,
                            ...w
                        }
                    });
                    U.push(t)
                }
                if (O.size > 0 || D.length > 0) {
                    let e = [];
                    if (D.length > 0)
                        for (let t of (e.push({
                                key: "sharedManualHeader",
                                action: () => {},
                                render: () => (0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: P.formatMessage(j.manuallySelectedPagesHeader)
                                })
                            }), Z)) {
                            let s = ea(t);
                            e.push({
                                key: t,
                                action: () => {
                                    C(t)
                                },
                                render: () => (0, r.jsxs)(i().fI, {
                                    className: "autolayout-fill-width",
                                    paddingInlineStart: 8,
                                    style: {
                                        position: "relative"
                                    },
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsx)(p().y, {
                                            blockStore: s,
                                            maxWidth: 420
                                        })
                                    }), (0, r.jsx)(l().p, {
                                        colorPalette: "blue",
                                        onClick: () => {
                                            C(t)
                                        },
                                        children: (0, r.jsx)(n().D, {
                                            styleKey: "captionMedium",
                                            children: P.formatMessage(j.remove)
                                        })
                                    })]
                                })
                            })
                        }
                    if (D.length > 0 && O.size > 0 && e.push({
                            key: "shared-manual-divider",
                            action: () => {},
                            render: () => (0, r.jsx)("div", {
                                style: w.subSectionRowWithBorder
                            })
                        }), O.size > 0) {
                        let t = Array.from(O).some(e => H.has(e));
                        e.push({
                            key: "shared-top-level-header",
                            action: () => {},
                            render: () => (0, r.jsxs)(i().fI, {
                                className: "autolayout-fill-width",
                                alignItems: "center",
                                justifyContent: "space-between",
                                style: w.positionRelative,
                                children: [(0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: (0, r.jsx)(s(109939).sA, { ...j.topLevelPagesHeader
                                    })
                                }), t ? (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(O, !1)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.deselectAll)
                                    })
                                }) : (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(O, !0)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.selectAll)
                                    })
                                })]
                            })
                        })
                    }
                    e.push(...$.map(e => {
                        let t = ea(e);
                        return {
                            key: t.id,
                            action: () => {
                                C(t.id)
                            },
                            render: () => (0, r.jsx)("div", {
                                children: (0, r.jsx)(u, {
                                    pageStore: t,
                                    isSelected: H.has(t.id),
                                    onToggle: () => {
                                        C(t.id)
                                    },
                                    styles: { ...k,
                                        ...w
                                    },
                                    maxLength: 50
                                })
                            })
                        }
                    }));
                    let t = v({
                        key: "sharedPages",
                        title: (0, r.jsx)("div", {
                            style: w.sectionHeading,
                            children: (0, r.jsx)(s(109939).sA, { ...j.sharedPagesHeader
                            })
                        }),
                        allItems: e,
                        styles: { ...k,
                            ...w
                        }
                    });
                    U.push(t)
                }
                if (G.length > 0 || W.length > 0) {
                    let e = [];
                    if (W.length > 0)
                        for (let t of (e.push({
                                key: "privateManualHeader",
                                action: () => {},
                                render: () => (0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: P.formatMessage(j.manuallySelectedPagesHeader)
                                })
                            }), X)) {
                            let s = ea(t);
                            e.push({
                                key: t,
                                action: () => {
                                    C(t)
                                },
                                render: () => (0, r.jsxs)(i().fI, {
                                    className: "autolayout-fill-width",
                                    paddingInlineStart: 8,
                                    style: {
                                        position: "relative"
                                    },
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsx)(p().y, {
                                            blockStore: s,
                                            maxWidth: 420
                                        })
                                    }), (0, r.jsx)(l().p, {
                                        colorPalette: "blue",
                                        onClick: () => {
                                            C(t)
                                        },
                                        children: (0, r.jsx)(n().D, {
                                            styleKey: "captionMedium",
                                            children: P.formatMessage(j.remove)
                                        })
                                    })]
                                })
                            })
                        }
                    if (W.length > 0 && G.length > 0 && e.push({
                            key: "private-manual-divider",
                            action: () => {},
                            render: () => (0, r.jsx)("div", {
                                style: w.subSectionRowWithBorder
                            })
                        }), G.length > 0) {
                        let t = Array.from(B).some(e => H.has(e));
                        e.push({
                            key: "private-top-level-header",
                            action: () => {},
                            render: () => (0, r.jsxs)(i().fI, {
                                className: "autolayout-fill-width",
                                alignItems: "center",
                                justifyContent: "space-between",
                                style: w.positionRelative,
                                children: [(0, r.jsx)("div", {
                                    style: w.subSectionHeading,
                                    children: (0, r.jsx)(s(109939).sA, { ...j.topLevelPagesHeader
                                    })
                                }), t ? (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(B, !1)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.deselectAll)
                                    })
                                }) : (0, r.jsx)(l().p, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        q(B, !0)
                                    },
                                    children: (0, r.jsx)(n().D, {
                                        styleKey: "captionMedium",
                                        children: P.formatMessage(j.selectAll)
                                    })
                                })]
                            })
                        })
                    }
                    e.push(...G.map(e => {
                        let t = ea(e);
                        return {
                            key: t.id,
                            action: () => {
                                C(t.id)
                            },
                            render: () => (0, r.jsx)("div", {
                                children: (0, r.jsx)(u, {
                                    pageStore: t,
                                    isSelected: H.has(t.id),
                                    onToggle: () => {
                                        C(t.id)
                                    },
                                    styles: { ...k,
                                        ...w
                                    },
                                    maxLength: 50
                                })
                            })
                        }
                    }));
                    let t = v({
                        key: "privatePages",
                        title: (0, r.jsx)("div", {
                            style: w.sectionHeading,
                            children: (0, r.jsx)(s(109939).sA, { ...j.privatePagesHeader
                            })
                        }),
                        allItems: e,
                        styles: { ...k,
                            ...w
                        }
                    });
                    U.push(t)
                }
                return 0 === U.length ? (0, r.jsx)("div", {
                    style: k.pageSelectionContainer,
                    children: (0, r.jsx)("div", {
                        style: w.sectionsContainer,
                        children: (0, r.jsxs)(i().VP, {
                            gap: 8,
                            padding: 24,
                            alignItems: "center",
                            justifyContent: "center",
                            className: "autolayout-fill-width",
                            style: w.positionRelative,
                            children: [(0, r.jsx)(n().D, {
                                styleKey: "bodySemibold",
                                children: (0, r.jsx)(s(109939).sA, { ...j.noPagesMessage
                                })
                            }), (0, r.jsx)(n().D, {
                                styleKey: "bodySmRegular",
                                children: (0, r.jsx)(s(109939).sA, { ...j.addPagesMessage
                                })
                            })]
                        })
                    })
                }) : (0, r.jsxs)(i().VP, {
                    gap: 12,
                    className: "autolayout-fill-width",
                    style: w.positionRelative,
                    children: [(0, r.jsxs)(i().fI, {
                        alignItems: "center",
                        style: w.positionRelative,
                        children: [(0, r.jsx)(n().D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: (0, r.jsx)(s(109939).sA, { ...j.selectPagesLabel
                            })
                        }), (0, r.jsx)(s(51831).m, {
                            textWrap: !0,
                            content: () => (0, r.jsx)("div", {
                                style: w.tooltipText,
                                children: P.formatMessage(j.tooltip)
                            }),
                            placement: "right",
                            children: e => (0, r.jsx)("div", { ...e,
                                children: (0, r.jsx)(s(374533).A, {
                                    ariaLabel: P.formatMessage(j.tooltip),
                                    icon: s(80094).questionMarkCircleIcon,
                                    size: "sm",
                                    disableBackground: !0
                                })
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        children: (0, r.jsx)(s(182718).zD, {
                            trapFocus: !1,
                            sameWidthAsOrigin: !0,
                            popupType: s(182718).nl.Popup,
                            open: "" !== A,
                            content: () => (0, r.jsx)(c, {
                                spaceId: m.id,
                                spaceStore: m,
                                onSelectPage: e => {
                                    C(e)
                                },
                                query: A || "",
                                source: "internal_integrations_page_picker",
                                findSelectedBlockAncestorId: _
                            }),
                            onDismiss: () => M(""),
                            children: (0, r.jsx)(s(310324).Ay, {
                                focus: !0,
                                focusAfterAnimation: !0,
                                value: A || "",
                                onChange: e => {
                                    M(e.target.value)
                                },
                                placeholder: P.formatMessage(j.searchPlaceholder),
                                inputLeft: (0, r.jsx)(s(16275).I, {
                                    icon: s(330274).magnifyingGlassIcon,
                                    colorVariant: "secondary"
                                }),
                                inputOuterStyle: w.style0,
                                ignoreKeyboardMode: !0,
                                style: w.style1
                            })
                        })
                    }), (0, r.jsx)("div", {
                        style: k.pageSelectionContainer,
                        children: (0, r.jsx)("div", {
                            style: w.sectionsContainer,
                            children: (0, r.jsx)(s(2825).b, {
                                sections: U
                            })
                        })
                    })]
                })
            }
        },
        568432: (e, t, s) => {
            s.d(t, {
                a: () => r
            }), s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(354520), s(581454), s(737550);
            var a = s(296540),
                i = () => s(970831),
                l = () => s(457915),
                n = () => s(832375),
                o = () => s(528991);

            function r({
                pagesSharedWithUser: e,
                privatePages: t,
                workspacePages: c,
                teamPagesByTeam: p,
                selectedPageIds: g,
                spaceStore: u
            }) {
                let h = (0, s(533992).v3)(),
                    y = (0, s(682985).K8)(() => new Set(e.filter(e => d(e)).map(({
                        id: e
                    }) => e)), [e]),
                    m = (0, s(682985).K8)(() => new Set(t.filter(e => d(e)).map(({
                        id: e
                    }) => e)), [t]),
                    f = (0, s(682985).K8)(() => new Set(Object.values(p).flat().filter(e => d(new(i()).B(h, {
                        table: n().evP,
                        id: e,
                        spaceId: u.id
                    })))), [h, u.id, p]),
                    x = (0, s(682985).K8)(() => new Set(c.filter(e => d(e)).map(({
                        id: e
                    }) => e)), [c]),
                    j = (0, a.useMemo)(() => {
                        let e = {};
                        for (let t of Object.keys(p)) e[t] = p[t].filter(e => f.has(e));
                        return e
                    }, [p, f]),
                    v = (0, s(682985).K8)(() => {
                        let e = new Set;
                        for (let t of g) {
                            if (f.has(t)) continue;
                            let s = new(i()).B(h, {
                                table: n().evP,
                                id: t,
                                spaceId: u.id
                            });
                            (0, l().g)(s).some(e => e.table === n().yKj) && d(s) && e.add(t)
                        }
                        return e
                    }, [g, f, h, u.id]),
                    b = (0, s(682985).K8)(() => {
                        let e = [];
                        for (let t of g) {
                            if (y.has(t) || m.has(t) || f.has(t) || v.has(t)) continue;
                            let s = new(i()).B(h, {
                                table: n().evP,
                                id: t,
                                spaceId: u.id
                            });
                            !s.isTopLevel() && d(s) && e.push(t)
                        }
                        return e
                    }, [g, y, m, f, v, h, u.id]),
                    w = (0, s(682985).K8)(() => {
                        let e = [];
                        for (let t of g) {
                            if (x.has(t) || v.has(t)) continue;
                            let s = new(i()).B(h, {
                                table: n().evP,
                                id: t,
                                spaceId: u.id
                            });
                            (0, l().g)(s).some(e => e.table === n().evP && e.isTopLevelWorkspacePage(u.id)) && e.push(t)
                        }
                        return e
                    }, [h, g, u.id, x, v]),
                    S = (0, s(682985).K8)(() => {
                        let e = [];
                        for (let t of g) {
                            if (m.has(t) || y.has(t) || f.has(t) || v.has(t)) continue;
                            let s = new(i()).B(h, {
                                table: n().evP,
                                id: t,
                                spaceId: u.id
                            });
                            (0, l().g)(s).some(e => e.table === n().evP && (0, o().K)(e)) && e.push(t)
                        }
                        return e
                    }, [g, m, y, f, h, u.id, v]);
                return {
                    topLevelShareableSharedPageIds: y,
                    topLevelShareablePrivatePageIds: m,
                    topLevelShareableTeamspacePageIds: f,
                    topLevelShareableWorkspacePageIds: x,
                    shareableTeamPagesByTeam: j,
                    selectedNonTopLevelSharedPageIds: b,
                    selectedNonTopLevelPrivatePageIds: S,
                    selectedNonTopLevelWorkspacePageIds: w,
                    teamspaceManualSet: v
                }
            }

            function d(e) {
                return !e.pathIsDead() && (0, s(642157).Km)(e.getRole() || "none")
            }
        },
        717878: (e, t, s) => {
            s.d(t, {
                I: () => i
            }), s(296540);
            var a = s(474848);

            function i(e) {
                let {
                    teamStore: t
                } = e;
                return (0, a.jsxs)(s(4458).fI, {
                    gap: 8,
                    children: [(0, a.jsx)(s(729746).x, {
                        disabled: !0,
                        store: t,
                        size: s(104509).Ev.default
                    }), (0, a.jsx)(s(111010).D, {
                        styleKey: "bodyMedium",
                        children: (0, a.jsx)(s(627918).A, {
                            store: t
                        })
                    })]
                })
            }
        },
        736193: (e, t, s) => {
            s.d(t, {
                V: () => a
            });
            let a = (0, s(109939).YK)({
                teamspacesHeader: {
                    id: "pageAccess.teamspacesHeader",
                    defaultMessage: "Teamspaces"
                },
                teamspacesHeaderSubheader: {
                    id: "pageAccess.teamspacesSubheader",
                    defaultMessage: "Teamspace pages"
                },
                topLevelPagesHeader: {
                    id: "pageAccess.topLevelPagesHeader",
                    defaultMessage: "Top level pages"
                },
                manuallySelectedPagesHeader: {
                    id: "pageAccess.manuallySelectedPagesHeader",
                    defaultMessage: "Manually selected"
                },
                sharedPagesHeader: {
                    id: "pageAccess.sharedPagesHeader",
                    defaultMessage: "Shared"
                },
                privatePagesHeader: {
                    id: "pageAccess.privatePagesHeader",
                    defaultMessage: "Private"
                },
                workspacePagesHeader: {
                    id: "pageAccess.workspacePagesHeader",
                    defaultMessage: "Workspace"
                }
            })
        },
        943462: (e, t, s) => {
            s.r(t), s.d(t, {
                globeFillIcon: () => i,
                iconDefinition: () => a
            }), s(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.39 2.47 15.21 15.06",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M6.959 10.55c.044 1.915.317 3.657.751 4.97.237.716.53 1.335.884 1.787q.091.115.193.22a7.625 7.625 0 0 1-6.39-6.977zm10.645 0a7.625 7.625 0 0 1-6.392 6.977q.103-.105.194-.22c.353-.452.647-1.07.884-1.786.434-1.314.707-3.056.751-4.971zm-5.663 0c-.044 1.823-.305 3.443-.696 4.625-.216.652-.46 1.141-.705 1.455-.25.32-.438.383-.54.383s-.29-.063-.54-.383c-.245-.314-.49-.803-.705-1.455-.39-1.182-.652-2.802-.696-4.625zM8.787 2.472q-.103.105-.193.221c-.353.452-.647 1.07-.884 1.786-.434 1.314-.707 3.056-.751 4.971H2.396a7.626 7.626 0 0 1 6.391-6.978M10 2.987c.102 0 .29.063.54.383.245.314.49.803.705 1.455.39 1.182.652 2.802.696 4.625H8.06c.044-1.823.305-3.443.696-4.625.216-.652.46-1.141.705-1.455.25-.32.438-.383.54-.383m1.211-.515a7.626 7.626 0 0 1 6.392 6.978H13.04c-.044-1.915-.317-3.657-.751-4.97-.237-.716-.53-1.335-.884-1.787a3 3 0 0 0-.194-.221"
                    })
                },
                i = (0, s(104509).wt)("globeFill", a, "fill")
        },
        969633: (e, t, s) => {
            s.d(t, {
                r: () => a
            });

            function a(e, t) {
                return (e.getName() || "").localeCompare(t.getName() || "")
            }
        }
    }
]);