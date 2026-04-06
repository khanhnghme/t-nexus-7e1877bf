"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [52064, 82861], {
        13898: (e, t, i) => {
            i.d(t, {
                D: () => l
            }), i(898992), i(581454), i(737550);
            var n = i(296540),
                r = i(474848);
            let s = {
                container: {
                    position: "relative",
                    height: 0,
                    marginInlineStart: -8,
                    marginInlineEnd: -8
                },
                clickToTry: {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: i(632079).Tj.text.tertiary
                }
            };

            function o(e) {
                let {
                    showTooltip: t
                } = e, o = (0, i(533992).v3)(), a = (0, n.useRef)(null), l = (0, n.useRef)(null), c = (0, i(718012).V)(), [d, u] = (0, n.useState)(132), p = (0, n.useCallback)(() => {
                    let e = i(728372).AppStoreCurrentUserSettingsStore.state;
                    e && (0, i(377796).createAndCommit)({
                        environment: o,
                        userAction: "userSettingsActions.setSeenCanCreatePagesInCollectionTooltip",
                        canUndo: !1,
                        cellTarget: "main",
                        perform: t => {
                            (0, i(862759).m)({
                                userSettingsStore: e,
                                transaction: t,
                                data: {
                                    seen_can_create_pages_in_collection_tooltip: !0
                                }
                            })
                        }
                    })
                }, [o]);
                (0, n.useLayoutEffect)(() => {
                    var e;
                    if (!a.current) return;
                    let t = null == (e = a.current.parentElement) ? void 0 : e.parentElement;
                    if (!t) return;
                    let i = t.querySelectorAll('[role="menuitem"]'),
                        n = a.current.nextElementSibling;
                    if (0 === i.length || !n) return;
                    let r = 0,
                        s = Array.from(i),
                        o = s.indexOf(n);
                    if (!(o < 0)) {
                        for (let e = o; e < o + 3; e++) {
                            let t = s[e];
                            t instanceof HTMLElement && (r += t.offsetHeight)
                        }
                        r > 0 && u(r + 8)
                    }
                }, []);
                let g = (0, i(960253).I)(() => ({
                    overlay: {
                        position: "absolute",
                        top: -2,
                        insetInlineStart: 4,
                        insetInlineEnd: 4,
                        height: d,
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderColor: i(632079).Tj.blue.border.primary,
                        borderRadius: 10,
                        backgroundColor: "transparent",
                        pointerEvents: "none"
                    }
                }), [d]);
                return (0, r.jsx)("div", {
                    ref: a,
                    style: s.container,
                    children: (0, r.jsxs)(i(397732).B, {
                        calloutId: "can_create_pages_in_collection_tooltip",
                        shouldShow: t,
                        inAppCalloutStore: c,
                        children: [(0, r.jsx)("div", {
                            ref: l,
                            style: g.overlay
                        }), (0, r.jsx)(i(788139).k, {
                            origin: l,
                            placementToOrigin: "left",
                            alignmentToOrigin: "center",
                            showPointer: !1,
                            header: (0, r.jsx)(i(109939).sA, {
                                id: "PermissionRoleSelect.canCreatePagesTooltip.header",
                                defaultMessage: "People with these permissions can now create pages in this database"
                            }),
                            content: (0, r.jsxs)("span", {
                                style: s.clickToTry,
                                children: [(0, r.jsx)(i(109939).sA, {
                                    id: "PermissionRoleSelect.canCreatePagesTooltip.content",
                                    defaultMessage: "Click to try"
                                }), (0, r.jsx)(i(16275).I, {
                                    icon: i(969278).arrowStraightRightSmallIcon,
                                    size: "xs"
                                })]
                            }),
                            hideActions: !0,
                            onCloseClick: p,
                            shouldDismissUponOutsideClick: !0
                        })]
                    })
                })
            }
            let a = {
                toggleContainer: {
                    gap: 8,
                    display: "flex",
                    marginTop: 5,
                    marginBottom: 2
                },
                toggleLabel: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: 12,
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                },
                link: {
                    color: i(632079).Tj.text.secondary
                },
                emptyBodyContent: {
                    marginTop: -4
                }
            };

            function l({
                permissionType: e,
                blockType: t,
                blockRole: s,
                canCreatePagesInCollection: c,
                handleCanCreatePagesInCollectionChange: d,
                store: u,
                isInvite: p,
                isInherited: g,
                lowestSelectableRole: m,
                displayRole: f,
                displayCanCreate: h
            }) {
                let y = (0, i(533992).v3)(),
                    _ = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = (0, i(974410).f)(u)) ? void 0 : e.id
                    }, [u]),
                    v = (0, i(217844)._)({
                        name: "collection_property_permissions",
                        spaceId: _,
                        userId: y.currentUser.id
                    }),
                    C = (0, i(811656).e2)(v),
                    A = (0, i(682985).K8)(() => (C || c) && (0, i(642157).HM)(e) && ("collection_view" === t || "collection_view_page" === t) && u instanceof i(970831).B && u.getOwnedCollectionStores().length > 0, [e, t, u, C, c]),
                    b = !!(c && !g),
                    w = f ? ? s,
                    I = h ? ? b,
                    P = (0, i(682985).K8)(() => !(!(u instanceof i(970831).B) || p || !I || (0, i(642157).p2)(w)) && ![...(0, i(865768).Vm)(u)].some(e => (0, i(642157).p2)(e)), [I, u, p, w]),
                    x = (0, i(682985).K8)(() => u instanceof i(970831).B && u.canAdmin(), [u]),
                    S = (0, n.useCallback)(() => {
                        (0, i(830097).pm)({
                            environment: y,
                            store: u,
                            role: "read_and_write"
                        })
                    }, [y, u]),
                    k = (0, i(682985).K8)(() => {
                        let e = i(728372).AppStoreCurrentUserSettingsStore.state;
                        return (null == e ? void 0 : e.getSettingsStore().getKeyStore("seen_can_create_pages_in_collection_tooltip").getValue()) === !0
                    }, []),
                    T = m && (0, i(138798).sG)("none", m),
                    M = A && !k && !T;
                if (!A) return {};
                let j = (0, r.jsxs)("div", {
                        style: a.toggleContainer,
                        children: [(0, r.jsx)(i(354491).d, {
                            on: b,
                            onClick: d
                        }), (0, r.jsx)("span", {
                            style: a.toggleLabel,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "PermissionRoleSelect.canCreatePagesCheckbox.label",
                                defaultMessage: "Can also create pages"
                            })
                        })]
                    }),
                    B = M ? {
                        key: "can_create_pages_overlay_border",
                        render: () => (0, r.jsx)(o, {
                            showTooltip: M
                        }),
                        action: () => {}
                    } : void 0;
                return {
                    showNoneRoleWithOtherRolesOverride: !0,
                    roleItemOverrides: ["comment_only", "reader", "none"].map((e, t) => ({
                        role: e,
                        prefixItem: 0 === t ? B : void 0,
                        bodyContent: s === e ? j : (0, r.jsx)("div", {
                            style: a.emptyBodyContent
                        })
                    })),
                    buttonPrefixIcon: P ? (0, r.jsx)(i(51831).m, {
                        delayThreshold: 300,
                        placement: "top",
                        closeDelay: 2e3,
                        allowHover: !0,
                        content: () => (0, r.jsxs)(i(4458).VP, {
                            gap: 4,
                            children: [(0, r.jsx)("div", {
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "PermissionRoleSelect.canCreatePagesWarning.tooltip",
                                    defaultMessage: "Without sufficient page-level access, users cannot create pages"
                                })
                            }), x ? (0, r.jsx)(i(155604).N, {
                                style: a.link,
                                onClick: S,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "PermissionRoleSelect.canCreatePagesWarning.createPageLevelAccessRule",
                                    defaultMessage: "Create page-level access rule"
                                })
                            }) : null]
                        }),
                        children: e => (0, r.jsx)("span", { ...e,
                            children: (0, r.jsx)(i(16275).I, {
                                icon: i(653905).exclamationMarkTriangleIcon,
                                size: "sm"
                            })
                        })
                    }) : void 0
                }
            }
        },
        28299: (e, t, i) => {
            function n(e) {
                var t, i;
                let n, r;
                return (n = (null == (t = e.getDraftData()) ? void 0 : t.triggers) || [], r = (null == (i = e.getData()) ? void 0 : i.triggers) || [], n.length > 0 ? n : r).some(e => e.enabled)
            }

            function r(e, t) {
                return !1 === t || !1 === e.getAlive() || void 0 !== e.getMovedToTrashId()
            }
            i.d(t, {
                Wc: () => n,
                bf: () => r
            }), i(898992), i(354520), i(737550)
        },
        82861: (e, t, i) => {
            i.d(t, {
                Ku: () => s,
                Pf: () => c,
                YM: () => a,
                rg: () => d,
                vm: () => r,
                x9: () => l,
                yE: () => o
            }), i(944114), i(898992), i(354520), i(581454), i(814603), i(147566), i(198721);
            var n = () => i(938020);
            async function r(e) {
                let {
                    environment: t,
                    spaceId: n,
                    servicePeriodStart: r,
                    servicePeriodEnd: s,
                    limit: o,
                    cursor: a,
                    sortDirection: l,
                    entityTable: c,
                    createdByUserId: d,
                    searchQuery: u,
                    entityType: p
                } = e, g = await t.api.callApi({
                    eventName: "getTopEntitiesByUsage",
                    environment: t,
                    data: {
                        spaceId: n,
                        servicePeriodStart: r,
                        servicePeriodEnd: s,
                        limit: o,
                        cursor: a,
                        sortDirection: l,
                        entityTable: c,
                        createdByUserId: d,
                        searchQuery: u,
                        entityType: p,
                        forceMetronomeDataPath: (0, i(717274).Sc)()
                    }
                });
                return "failed" === g.type ? {
                    entities: [],
                    next_cursor: void 0,
                    previous_cursor: void 0,
                    canViewAllAgents: !1
                } : {
                    entities: g.data.entities,
                    next_cursor: g.data.next_cursor,
                    previous_cursor: g.data.previous_cursor,
                    canViewAllAgents: g.data.canViewAllAgents
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    spaceId: i,
                    servicePeriodStart: n,
                    servicePeriodEnd: r,
                    workflowIds: s
                } = e, o = await t.api.callApi({
                    eventName: "getAIActivityCounts",
                    environment: t,
                    data: {
                        spaceId: i,
                        servicePeriodStart: n,
                        servicePeriodEnd: r,
                        workflowIds: s
                    }
                });
                return "failed" === o.type ? {
                    activityCounts: {}
                } : {
                    activityCounts: o.data.activityCounts
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceId: i,
                    servicePeriodStart: n,
                    servicePeriodEnd: r
                } = e, s = await t.api.callApi({
                    eventName: "getCustomAgentStats",
                    environment: t,
                    data: {
                        spaceId: i,
                        servicePeriodStart: n,
                        servicePeriodEnd: r
                    }
                });
                return "failed" === s.type ? {
                    uniqueCreatorCount: 0,
                    customAgentCount: 0,
                    totalRunCount: 0
                } : {
                    uniqueCreatorCount: s.data.uniqueCreatorCount,
                    customAgentCount: s.data.customAgentCount,
                    totalRunCount: s.data.totalRunCount
                }
            }
            async function a(e) {
                let {
                    environment: t,
                    spaceId: n,
                    workflowId: r
                } = e;
                try {
                    let e = await t.api.callApi({
                        eventName: "getWorkflowCreditUsage",
                        environment: t,
                        data: {
                            spaceId: n,
                            workflowId: r
                        }
                    });
                    if ("failed" === e.type) return;
                    return {
                        creditUsage: e.data.creditUsage
                    }
                } catch (e) {
                    (0, i(222024).t)().error({
                        from: "getWorkflowCreditUsage",
                        type: "getWorkflowCreditUsageFailed",
                        error: e,
                        data: {
                            miscDataToConvertToString: {
                                error: e,
                                spaceId: n,
                                workflowId: r
                            }
                        }
                    });
                    return
                }
            }

            function l() {
                i(390015).q.setState({
                    open: !0
                })
            }

            function c() {
                i(390015).q.setState({
                    open: !1
                })
            }
            async function d(e) {
                let {
                    environment: t,
                    spaceId: r,
                    servicePeriodStartMs: s,
                    servicePeriodEndMs: o,
                    sortDirection: a,
                    createdByUserId: l,
                    isRebrand: c
                } = e;
                try {
                    var d, m;
                    let e, f, h, y = (0, i(909212).Ks)(),
                        [_, v] = await Promise.all([u({
                            environment: t,
                            spaceId: r,
                            servicePeriodStartMs: s,
                            servicePeriodEndMs: o
                        }), p({
                            environment: t,
                            spaceId: r,
                            servicePeriodStartMs: s,
                            servicePeriodEndMs: o,
                            sortDirection: a,
                            createdByUserId: l
                        })]),
                        C = v.filter(e => "custom_agent" === e.entityType || "database_agent" === e.entityType).map(e => e.id),
                        A = await g({
                            environment: t,
                            spaceId: r,
                            servicePeriodStartMs: s,
                            servicePeriodEndMs: o,
                            workflowIds: C
                        }),
                        b = [];
                    if (b.push(["Usage Summary"]), b.push(["Service Period", `${(0,n().xf)(s)} to ${(0,n().xf)(o)}`]), _) {
                        let e = 2 === _.version ? _.totalUsageInPeriod : _.totalMonthlyUsage;
                        b.push(["Credits Used", String(e)])
                    }
                    b.push([]);
                    let w = _ ? 2 === _.version ? _.dailyBreakdowns : _.usageData : void 0;
                    if (w && w.length > 0) {
                        b.push(["Daily Usage"]), b.push(["Date", "Daily Credits", "Cumulative Credits"]);
                        for (let e = 0; e < w.length; e++) {
                            let t = w[e],
                                i = e > 0 ? w[e - 1].usage : 0,
                                r = t.usage - i;
                            b.push([(0, n().xf)(t.date), String(r), String(t.usage)])
                        }
                        b.push([])
                    }
                    b.push(["Agent Breakdown"]);
                    let I = ["Custom Agent", "Type", "Credits Used", ...y ? ["Credit limit"] : [], "Runs Completed", "Status", "Created By"];
                    for (let e of (b.push(I), v)) {
                        let t = [e.name ? ? "Unknown", "database_agent" === e.entityType ? c ? "Custom Agent, Autofill" : "Database Agent" : "Custom Agent", String(e.usage), ...y ? [String(e.creditLimitByWorkspaceAdmin ? ? e.creditLimit ? ? "")] : [], String("custom_agent" === e.entityType || "database_agent" === e.entityType ? A[e.id] ? ? 0 : ""), e.status ? ? "", e.createdByName ? ? ""];
                        b.push(t)
                    }
                    d = b.map(e => e.map(n().u5).join(",")).join("\n"), m = "ai-credit-usage.csv", e = new Blob([d], {
                        type: "text/csv;charset=utf-8;"
                    }), f = URL.createObjectURL(e), (h = document.createElement("a")).href = f, h.download = m, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(f)
                } catch (e) {
                    throw (0, i(222024).t)().error({
                        from: "exportTopEntitiesAsCsv",
                        type: "csvExportFailed",
                        error: e
                    }), e
                }
            }
            async function u(e) {
                let {
                    environment: t,
                    spaceId: n,
                    servicePeriodStartMs: r,
                    servicePeriodEndMs: s
                } = e, o = await t.api.callCellCompatibleApi({
                    eventName: "getAIDailyCreditUsage",
                    environment: t,
                    data: {
                        spaceId: n,
                        servicePeriodStartMs: r,
                        servicePeriodEndMs: s
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                });
                if ("failed" !== o.type) return 2 === o.data.version ? { ...o.data,
                    dailyBreakdowns: (0, i(254266).j)({
                        usageData: o.data.dailyBreakdowns,
                        servicePeriodStartMs: r,
                        servicePeriodEndMs: s
                    })
                } : { ...o.data,
                    usageData: (0, i(254266).j)({
                        usageData: o.data.usageData,
                        servicePeriodStartMs: r,
                        servicePeriodEndMs: s
                    })
                }
            }
            async function p(e) {
                let t, {
                        environment: i,
                        spaceId: n,
                        servicePeriodStartMs: s,
                        servicePeriodEndMs: o,
                        sortDirection: a,
                        createdByUserId: l
                    } = e,
                    c = [];
                for (;;) {
                    let e = await r({
                        environment: i,
                        spaceId: n,
                        servicePeriodStart: s,
                        servicePeriodEnd: o,
                        limit: 50,
                        cursor: t,
                        sortDirection: a,
                        entityTable: "workflow",
                        createdByUserId: l
                    });
                    if (c.push(...e.entities), !e.next_cursor) break;
                    t = e.next_cursor
                }
                return c
            }
            async function g(e) {
                let {
                    environment: t,
                    spaceId: i,
                    servicePeriodStartMs: n,
                    servicePeriodEndMs: r,
                    workflowIds: o
                } = e;
                if (0 === o.length) return {};
                let a = {};
                for (let e = 0; e < o.length; e += 25) {
                    let l = o.slice(e, e + 25),
                        {
                            activityCounts: c
                        } = await s({
                            environment: t,
                            spaceId: i,
                            servicePeriodStart: n,
                            servicePeriodEnd: r,
                            workflowIds: l
                        });
                    Object.assign(a, c)
                }
                return a
            }
        },
        161176: (e, t, i) => {
            i.d(t, {
                ED: () => s,
                Kb: () => l
            }), i(296540);
            var n = i(474848);
            let r = {
                minWidth: 180
            };

            function s({
                title: e,
                items: t,
                disabled: a,
                hideDropdownIcon: l,
                itemMaxWidth: c,
                itemMinWidth: d,
                ...u
            }) {
                let p = (0, i(682985).uB)(void 0, i(510969).A),
                    g = {
                        key: "workspace-users-menu",
                        items: t
                    };
                return (0, n.jsx)(i(656252).A, {
                    popupType: i(182718).nl.Popup,
                    style: r,
                    buttonPopupStore: p,
                    disabled: a,
                    content: () => (0, n.jsx)(i(747369).A, {
                        menuType: i(649476).gu.Popup,
                        maxWidth: c ? ? 250,
                        minWidth: d,
                        children: (0, n.jsx)(i(558045).A, {
                            type: i(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [g],
                            onAccept: () => {
                                p.setState({
                                    open: !1
                                })
                            }
                        })
                    }),
                    children: t => (0, n.jsx)(o, {
                        title: e,
                        hideDropdownIcon: l,
                        disabled: a,
                        styles: u.styles,
                        ...t
                    })
                })
            }

            function o({
                title: e,
                hideDropdownIcon: t,
                disabled: r,
                ...s
            }) {
                let a = (0, i(960253).I)(() => ({
                    container: {
                        display: "inline-flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "100%",
                        ...s.styles
                    }
                }), [s.styles]);
                return (0, n.jsx)(i(988022).p, {
                    style: a.container,
                    disabled: r,
                    iconTrailing: t || r ? void 0 : {
                        icon: i(595453).arrowChevronSingleDownSmallIcon,
                        colorVariant: "tertiary",
                        size: "xs"
                    },
                    ...s,
                    children: (0, n.jsx)(i(324489).V, {
                        showTooltipWhenTruncated: !0,
                        children: e
                    })
                })
            }
            let a = {
                width: "50%"
            };

            function l() {
                return (0, n.jsx)(i(394327).mf, {
                    titleStyles: a
                })
            }
        },
        185570: (e, t, i) => {
            i.d(t, {
                N: () => a,
                w: () => o
            }), i(581454);
            var n = i(296540),
                r = () => i(642157);
            let s = (0, i(109939).YK)({
                shareAiInstructionsPageTitle: {
                    id: "action.shareAiInstructionsPage.confirmTitle",
                    defaultMessage: "Are you sure you want to give edit access to your AI instructions page?"
                },
                shareAiInstructionsPageBody: {
                    id: "action.shareAiInstructionsPage.confirmBody",
                    defaultMessage: "This will let people you share this page with control how your Notion AI agent behaves."
                },
                shareAiSkillPageTitle: {
                    id: "action.shareAiSkillPage.confirmTitle",
                    defaultMessage: "Are you sure you want to give edit access to your AI skill page?"
                },
                shareAiSkillPageBody: {
                    id: "action.shareAiSkillPage.confirmBody",
                    defaultMessage: "This will let people you share this page with control how your Notion AI agent behaves."
                },
                shareAnywayButton: {
                    id: "action.shareAiPage.shareAnywayButton",
                    defaultMessage: "Share anyway"
                },
                unshareAiInstructionsPageTitle: {
                    id: "action.unshareAiInstructionsPage.confirmTitle",
                    defaultMessage: "Are you sure you want to unshare this AI instructions page with {targetName}?"
                },
                unshareAiSkillPageTitle: {
                    id: "action.unshareAiSkillPage.confirmTitle",
                    defaultMessage: "Are you sure you want to unshare this AI skill page with {targetName}?"
                },
                unshareAiPageBody: {
                    id: "action.unshareAiPage.confirmBody",
                    defaultMessage: "Unsharing will affect how {targetName} uses Notion AI."
                },
                unshareAnywayButton: {
                    id: "action.unshareAiPage.unshareAnywayButton",
                    defaultMessage: "Unshare anyways"
                },
                thisPerson: {
                    id: "action.unshareAiPage.target.thisPerson",
                    defaultMessage: "this person"
                },
                thisGroup: {
                    id: "action.unshareAiPage.target.thisGroup",
                    defaultMessage: "this group"
                },
                thisTeamspace: {
                    id: "action.unshareAiPage.target.thisTeamspace",
                    defaultMessage: "this teamspace"
                },
                thisWorkspace: {
                    id: "action.unshareAiPage.target.thisWorkspace",
                    defaultMessage: "this workspace"
                },
                thisAudience: {
                    id: "action.unshareAiPage.target.thisAudience",
                    defaultMessage: "this audience"
                },
                cancelButton: {
                    id: "action.shareAiPage.cancelButton",
                    defaultMessage: "Cancel"
                }
            });
            async function o(e) {
                let {
                    blockStore: t,
                    currentUserId: n,
                    grantingRole: o,
                    environment: a
                } = e;
                if (!(t.isAiInstruction() || t.isAiSkill()) || ! function(e) {
                        let {
                            blockStore: t,
                            currentUserId: n
                        } = e, s = (0, i(862085).i0)(t).map(({
                            permissionItem: e
                        }) => e), o = !1;
                        for (let e of s)
                            if ((0, r().p2)((0, r().Lw)(e)))
                                if (!((0, r().B2)(e) || (0, r().Jx)(e)) || e.user_id !== n) return !1;
                                else o = !0;
                        return o
                    }({
                        blockStore: t,
                        currentUserId: n
                    }) || !(0, r().p2)(o)) return !0;
                let l = t.isAiInstruction(),
                    c = await i(647095).Gh({
                        message: i(962299).A.formatMessage(l ? s.shareAiInstructionsPageTitle : s.shareAiSkillPageTitle),
                        description: i(962299).A.formatMessage(l ? s.shareAiInstructionsPageBody : s.shareAiSkillPageBody),
                        acceptLabel: i(962299).A.formatMessage(s.shareAnywayButton),
                        cancelLabel: i(962299).A.formatMessage(s.cancelButton),
                        acceptColor: "blue"
                    });
                return c.accept && a && (0, i(104310).u)({
                    event: {
                        eventName: "ai_skill_lifecycle_action",
                        eventProperties: {
                            action: "share_warning_accepted",
                            source: l ? "instruction" : "skill"
                        }
                    }
                }), c.accept
            }
            async function a(e) {
                let {
                    blockStore: t,
                    permissionItem: o,
                    oldRole: a,
                    newRole: l,
                    environment: c
                } = e;
                if (!(t.isAiInstruction() || t.isAiSkill()) || !((0, r().Tt)(a) && !(0, r().Tt)(l))) return !0;
                let d = t.isAiInstruction(),
                    {
                        targetName: u,
                        shouldBoldTargetName: p
                    } = function(e) {
                        let {
                            blockStore: t,
                            permissionItem: n
                        } = e;
                        switch (n.type) {
                            case "user_permission":
                            case "exclusive_user_permission":
                                if (!n.user_id) return {
                                    targetName: i(962299).A.formatMessage(s.thisPerson),
                                    shouldBoldTargetName: !0
                                };
                                return {
                                    targetName: i(807825).L.createChildStore(t, {
                                        table: i(832375).oo9,
                                        id: n.user_id
                                    }).getName() ? ? i(962299).A.formatMessage(s.thisPerson),
                                    shouldBoldTargetName: !0
                                };
                            case "group_permission":
                                {
                                    if (!n.group_id) return {
                                        targetName: i(962299).A.formatMessage(s.thisGroup),
                                        shouldBoldTargetName: !0
                                    };
                                    let e = t.getSpaceStore();
                                    if (!e) return {
                                        targetName: i(962299).A.formatMessage(s.thisGroup),
                                        shouldBoldTargetName: !0
                                    };
                                    return {
                                        targetName: (0, i(13717).E)({
                                            spaceStore: e,
                                            groupId: n.group_id
                                        }).getName() ? ? i(962299).A.formatMessage(s.thisGroup),
                                        shouldBoldTargetName: !0
                                    }
                                }
                            case "explicit_team_permission":
                            case "team_permission":
                            case "explicit_team_owner_permission":
                            case "team_owner_permission":
                            case "explicit_team_guest_permission":
                                return {
                                    targetName: i(962299).A.formatMessage(s.thisTeamspace),
                                    shouldBoldTargetName: !0
                                };
                            case "space_permission":
                            case "space_owner_permission":
                                return {
                                    targetName: i(962299).A.formatMessage(s.thisWorkspace),
                                    shouldBoldTargetName: !1
                                };
                            default:
                                return {
                                    targetName: i(962299).A.formatMessage(s.thisAudience),
                                    shouldBoldTargetName: !0
                                }
                        }
                    }({
                        blockStore: t,
                        permissionItem: o
                    }),
                    g = p ? n.createElement("strong", void 0, u) : u,
                    m = await i(647095).Gh({
                        message: n.createElement(i(109939).sA, { ...d ? s.unshareAiInstructionsPageTitle : s.unshareAiSkillPageTitle,
                            values: {
                                targetName: g
                            }
                        }),
                        description: n.createElement(i(109939).sA, { ...s.unshareAiPageBody,
                            values: {
                                targetName: g
                            }
                        }),
                        acceptLabel: i(962299).A.formatMessage(s.unshareAnywayButton),
                        cancelLabel: i(962299).A.formatMessage(s.cancelButton),
                        acceptColor: "blue"
                    });
                return m.accept && c && (0, i(104310).u)({
                    event: {
                        eventName: "ai_skill_lifecycle_action",
                        eventProperties: {
                            action: "unshare_warning_accepted",
                            source: d ? "instruction" : "skill"
                        }
                    }
                }), m.accept
            }
        },
        254266: (e, t, i) => {
            i.d(t, {
                j: () => a,
                C: () => l
            }), i(16280), i(944114), i(964979);
            var n = () => i(906745),
                r = i(296540);
            let s = {
                date: 0,
                usage: 0,
                monthly: 0,
                annual: 0,
                onDemand: 0
            };
            var o = () => i(695216);

            function a(e) {
                let {
                    usageData: t,
                    servicePeriodStartMs: i,
                    servicePeriodEndMs: r
                } = e, a = Math.min(n().DateTime.utc().startOf("day").toMillis(), n().DateTime.fromMillis(r).toUTC().startOf("day").toMillis()), l = n().DateTime.fromMillis(i).toUTC().startOf("day").toMillis(), c = new Map;
                for (let e of t) c.set(e.date, e);
                let d = [],
                    u = s;
                for (let e = l; e < a; e += o().nD) {
                    let t = c.get(e);
                    t ? (d.push(t), u = t) : d.push({ ...u,
                        date: e
                    })
                }
                return d
            }

            function l(e, t, s) {
                let o = (0, i(533992).v3)(),
                    [l, c] = (0, r.useState)(void 0),
                    [d, u] = (0, r.useState)(!0),
                    p = (0, r.useRef)(null),
                    g = (0, r.useCallback)(async () => {
                        var r, l;
                        if (!e || !t || !s) {
                            null == (l = p.current) || l.abort(), p.current = null, u(!1);
                            return
                        }
                        null == (r = p.current) || r.abort(), p.current = null, u(!0);
                        try {
                            p.current = new AbortController;
                            let n = await o.api.callCellCompatibleApi({
                                eventName: "getAIDailyCreditUsage",
                                environment: o,
                                data: {
                                    spaceId: e,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: s,
                                    forceMetronomeDataPath: (0, i(717274).Sc)()
                                },
                                cellNavigation: {
                                    spaceId: e
                                },
                                abortSignal: p.current.signal
                            });
                            if ("failed" === n.type) return void u(!1);
                            if (1 === n.data.version) c({ ...n.data,
                                usageData: a({
                                    usageData: n.data.usageData,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: s
                                })
                            });
                            else if (2 === n.data.version) c({ ...n.data,
                                dailyBreakdowns: a({
                                    usageData: n.data.dailyBreakdowns,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: s
                                })
                            });
                            else throw Error("Invalid response version");
                            u(!1)
                        } catch (r) {
                            if (r instanceof DOMException && "AbortError" === r.name) return;
                            i(773352).log({
                                level: "error",
                                from: "useAIDailyUsage",
                                type: "fetchDailyUsageFailed",
                                data: {
                                    miscDataToConvertToString: {
                                        error: r,
                                        spaceId: e,
                                        servicePeriodStart: n().DateTime.fromMillis(t).toISO(),
                                        servicePeriodEnd: n().DateTime.fromMillis(s).toISO(),
                                        userId: o.currentUser.id
                                    }
                                }
                            }), u(!1)
                        }
                    }, [o, e, t, s]);
                return (0, r.useEffect)(() => (g(), () => {
                    var e;
                    null == (e = p.current) || e.abort()
                }), [g]), {
                    data: l,
                    isLoading: d
                }
            }
        },
        296340: (e, t, i) => {
            function n(e) {
                let {
                    blockTeamOwnerPermission: t,
                    blockTeamMemberPermission: n
                } = e, r = t.permissionItem, s = n.permissionItem, o = r.role, a = s.role, l = (0, i(642157).nl)(r) && r.can_create_pages_in_collection, c = (0, i(642157).gl)(s) && s.can_create_pages_in_collection;
                return o !== a || l !== c ? {
                    role: "none" === a || "none" === o ? "limited" : "access",
                    canCreate: !1
                } : {
                    role: a,
                    canCreate: !!c
                }
            }

            function r({
                permissionItem: e,
                store: t
            }) {
                if ("display_only_inherited_permission" === e.type) return !1;
                if (t.table === i(832375).VlP) return "collection_property_permission" === e.type ? t.pathIsDead() || !t.canAdmin() : t.pathIsDead();
                return t.table === i(832375).evP ? t.pathIsDead() || "display_only_overview_permission" !== e.type && !t.canAdmin() || (0, i(336136).dL)(t) : t.table === i(832375).C0E ? !t.canAdmin() : void(0, i(722371).HB)(t)
            }

            function s(e) {
                let t = e && "from" in e ? e.permissionItem : e,
                    n = t && (0, i(642157).i4)(t) && void 0 !== t.can_create_pages_in_collection;
                return t && ((0, i(642157).Tt)(t.role) || n) ? (0, i(642157).Ni)(t) && ("none" !== t.role || n) ? "unlisted" : "open" : "private"
            }

            function o(e, t) {
                if (!e || !e[0]) return t;
                let n = e[0],
                    r = e.find(e => (0, i(642157).B2)(e.permissionItem));
                if (!r) return n;
                let s = n.permissionItem.role,
                    o = (0, i(642157).i4)(n.permissionItem) ? n.permissionItem.can_create_pages_in_collection : void 0;
                return e.every(e => {
                    let t = (0, i(642157).i4)(e.permissionItem) ? e.permissionItem.can_create_pages_in_collection : void 0;
                    return e.permissionItem.role === s && t === o
                }) ? r : n
            }
            i.d(t, {
                QX: () => s,
                VJ: () => o,
                dB: () => n,
                dK: () => r
            }), i(898992), i(823215), i(672577)
        },
        319627: (e, t, i) => {
            i.d(t, {
                Hc: () => s,
                o5: () => r
            }), i(16280), i(296540);
            var n = i(474848);
            async function r({
                newRole: e,
                ...t
            }) {
                let n = t.oldPermissionItem,
                    o = (0, i(381453).o8)(n);
                return o.role = e, await s({
                    newPermissionItem: o,
                    ...t
                })
            }
            async function s(e) {
                let {
                    oldPermissionItem: t,
                    newPermissionItem: n,
                    wasInherited: r,
                    environment: s,
                    store: a,
                    sudoModeStore: l,
                    restrictingVisibility: c,
                    fromPermissionWrapper: d
                } = e;
                if (!(0, i(138798).nK)(t, n)) throw Error("Permission type mismatch.");
                let u = !!l && l.shouldSaveTransactionWithSudoMode(a),
                    p = (0, i(138798).$q)(t.role, n.role);
                if ((0, i(642157).Tt)(t.role) && !(0, i(642157).Tt)(n.role) && a.table === i(832375).evP && a instanceof i(970831).B && !await (0, i(185570).N)({
                        blockStore: a,
                        permissionItem: t,
                        oldRole: t.role,
                        newRole: n.role,
                        environment: s
                    })) return !1;
                if (r && p !== n.role || c) return await o({
                    environment: s,
                    useSudoMode: u,
                    store: a,
                    permissionItem: n,
                    fromPermissionWrapper: d,
                    shouldInherit: !0
                });
                if (a.table !== i(832375).evP || a.isTopLevel() || t.role === n.role || p === t.role || i(594311).MR(), !(0, i(642157).p2)(t.role) && (0, i(642157).p2)(n.role) && a.table === i(832375).evP && a instanceof i(970831).B) {
                    let e = s.currentUser.id;
                    if (!(!e || await (0, i(185570).w)({
                            blockStore: a,
                            currentUserId: e,
                            grantingRole: n.role,
                            environment: s
                        }))) return !1
                }
                let g = a.pointer.spaceId;
                if ((0, i(377796).createAndCommit)({
                        userAction: "PermissionItem.handlePermissionItemChange",
                        environment: s,
                        canUndo: !0,
                        useSudoMode: u,
                        cellTarget: g ? {
                            spaceWithId: g
                        } : void 0,
                        perform: t => {
                            let r = i(680007).default.DO_NOT_USE_markLegacy("share_menu.update_page_permission_lag");
                            (0, i(481090).w)({
                                environment: s,
                                store: a,
                                permissionItems: [n],
                                transaction: t,
                                pagePermissionChangeLocation: e.location,
                                metric: r,
                                fromPermissionWrapper: d
                            })
                        }
                    }), "trusted_domain_permission" === n.type && i(773352).log({
                        level: "warning",
                        from: "shareMenu.handlePermissionItemChange",
                        type: "TrustedDomainPermissionChange",
                        spaceId: (0, i(226221).e)(a.pointer.spaceId),
                        data: {
                            miscDataToConvertToString: {
                                message: "shareMenu.handlePermissionItemChange updating trusted domain permission",
                                blockId: a.id,
                                oldPermissionItem: t,
                                newPermissionItem: n
                            }
                        }
                    }), (0, i(642157).tb)(t) && (0, i(642157).tb)(n) && a.table === i(832375).VlP) {
                    var m;
                    let e = null == (m = a.getParentBlockStore()) ? void 0 : m.id,
                        r = "none" === n.role && "none" !== t.role,
                        s = "none" !== t.role && "none" !== n.role && t.role !== n.role;
                    r ? (0, i(104310).u)({
                        event: {
                            eventName: "delete_db_row_permission_rule",
                            eventProperties: {
                                permission_property_info: t.property_info,
                                permission_role: t.role,
                                share_menu_session_id: i(880853).Ay.state.sessionId,
                                collection_id: a.id,
                                collection_view_block_id: e
                            }
                        }
                    }) : s && (0, i(104310).u)({
                        event: {
                            eventName: "update_db_row_permission_rule",
                            eventProperties: {
                                permission_property_info: n.property_info,
                                old_permission_role: t.role,
                                new_permission_role: n.role,
                                share_menu_session_id: i(880853).Ay.state.sessionId,
                                collection_id: a.id,
                                collection_view_block_id: e
                            }
                        }
                    })
                }
                return !0
            }
            async function o(e) {
                let {
                    environment: t,
                    useSudoMode: r,
                    store: s,
                    permissionItem: o,
                    fromPermissionWrapper: a,
                    shouldInherit: l
                } = e, c = (null == o ? void 0 : o.role) === "none" ? {
                    type: "remove",
                    permissionItem: o
                } : {
                    type: "restrict"
                };
                if ((null == o ? void 0 : o.type) === "user_permission" && (null == o ? void 0 : o.user_id) === t.currentUser.id || (await i(647095).Gh({
                        message: (0, i(560860).r6)(c),
                        description: (0, n.jsx)(i(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            children: (0, n.jsx)(i(109939).sA, {
                                id: "restrictedPermissionConfirmationModal.footer.whisperTextV2",
                                defaultMessage: "Changing this will unlink this page from its parent, so it will no longer inherit share settings. Admins can still restore settings on unlinked pages."
                            })
                        }),
                        acceptLabel: (0, i(560860).QU)(c),
                        icon: (0, n.jsx)(i(16275).I, {
                            icon: i(138308).arrowBranchIcon,
                            size: "xl"
                        })
                    })).accept) {
                    let e = s.pointer.spaceId;
                    return (0, i(377796).createAndCommit)({
                        userAction: "PermissionItem.onAccept",
                        environment: t,
                        canUndo: !0,
                        useSudoMode: r,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        perform: e => {
                            (0, i(573970).w)({
                                environment: t,
                                store: s,
                                permissionItem: o,
                                shouldInherit: l,
                                transaction: e,
                                fromPermissionWrapper: a
                            })
                        }
                    }), !0
                }
                return !1
            }
        },
        378736: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let s = new r
        },
        390015: (e, t, i) => {
            i.d(t, {
                q: () => n
            });
            let n = i(546605).Store.createValue({
                open: !1
            }, {
                name: "AiUsageCheckoutModalStore"
            })
        },
        427986: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = i(296540),
                r = i(474848);

            function s({
                iconFn: e,
                iconStyle: t,
                innerIconSize: n
            }) {
                return e((0, i(960253).I)(() => ({
                    icon: {
                        width: n,
                        height: n,
                        fill: i(632079).Tj.icon.secondary,
                        ...t
                    }
                }), [t, n]).icon)
            }
            let o = n.memo(function({
                type: e,
                containerStyle: t,
                iconSize: n,
                ...o
            }) {
                let a = n ? ? 20,
                    l = (0, i(960253).e)(),
                    c = (0, i(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            ...(0, i(912221).iM)({
                                themeMode: l,
                                size: n ? ? (i(986939).A.isMobile ? i(557683).Bj : i(557683).Ev),
                                useLargeBorderRadius: !0,
                                useLightBackgroundColor: !0
                            }),
                            ..."circle" === e && {
                                borderRadius: "100%"
                            },
                            ...t
                        }
                    }), [t, e, n, l]);
                return (0, r.jsx)("div", {
                    style: c.container,
                    children: "function" === o.iconType ? (0, r.jsx)(s, {
                        iconFn: o.iconFn,
                        iconStyle: o.iconStyle,
                        innerIconSize: a
                    }) : "emoji" === o.iconType ? (0, r.jsx)(i(945304).A, {
                        char: o.emoji,
                        size: a
                    }) : "recordIcon" === o.iconType ? (0, r.jsx)(i(569553).B6, {
                        icon: o.icon,
                        disabled: !0,
                        isEmptyPage: !1,
                        size: a,
                        defaultIcon: (0, r.jsx)(i(16275).I, {
                            icon: i(407598).peopleFillIcon,
                            size: a
                        })
                    }) : o.element
                })
            })
        },
        557683: (e, t, i) => {
            i.d(t, {
                Ev: () => a,
                Bj: () => l,
                Ay: () => v
            }), i(944114), i(581454);
            var n = i(296540),
                r = () => i(642157),
                s = i(474848);
            let o = function(e) {
                    let {
                        store: t,
                        isDisabled: n,
                        isCurrentUserPermission: r
                    } = e;
                    if (n)
                        if (r) return (0, s.jsx)(i(109939).sA, {
                            defaultMessage: "Your access is based on {inlineIconAndName}",
                            id: "blockPermissionsSettings.restrictedPermissionsCurrentUser.tooltip",
                            values: {
                                inlineIconAndName: (0, s.jsx)(i(899260).A, {
                                    store: t,
                                    useInvertedColors: !0
                                })
                            }
                        });
                        else return (0, s.jsx)(i(109939).sA, {
                            defaultMessage: "This access is based on {inlineIconAndName}",
                            id: "blockPermissionsSettings.restrictedPermissions.tooltip",
                            values: {
                                inlineIconAndName: (0, s.jsx)(i(899260).A, {
                                    store: t,
                                    useInvertedColors: !0
                                })
                            }
                        });
                    return r ? (0, s.jsx)(i(109939).sA, {
                        defaultMessage: "Your access is based on {inlineIconAndName}. Changing your access will restrict permissions of this page.",
                        id: "blockPermissionsSettings.restrictedPermissionsCurrentUser.canEdit.tooltip",
                        values: {
                            inlineIconAndName: (0, s.jsx)(i(899260).A, {
                                store: t,
                                useInvertedColors: !0,
                                maxLength: 26
                            })
                        }
                    }) : (0, s.jsx)(i(109939).sA, {
                        defaultMessage: "This access is based on {inlineIconAndName}. Changing this access will restrict permissions of this page.",
                        id: "blockPermissionsSettings.restrictedPermissions.canEdit.tooltip",
                        values: {
                            inlineIconAndName: (0, s.jsx)(i(899260).A, {
                                store: t,
                                useInvertedColors: !0,
                                maxLength: 26
                            })
                        }
                    })
                },
                a = 32,
                l = 40,
                c = (0, i(109939).YK)({
                    fromLinkBox: {
                        defaultMessage: "From {linkBoxWithPageTitle}",
                        id: "pagePermissionItem.fromInheritedRecordPermissions.setting"
                    }
                }),
                d = {
                    pressedButton: {
                        background: i(632079).Tj.buttonPressedBackgroundLight
                    },
                    tooltip: {
                        maxWidth: 240
                    },
                    style0: {
                        marginInlineStart: 0,
                        marginInlineEnd: 0
                    },
                    style1: {
                        padding: 0
                    }
                },
                u = {
                    title: {
                        marginInlineEnd: "auto",
                        minWidth: 0,
                        flex: 1
                    },
                    label: {
                        fontWeight: i(699422).Wy.regular
                    },
                    tag: {
                        marginInlineStart: 4
                    }
                };

            function p(e) {
                let {
                    permissionItem: t,
                    fromStore: r,
                    isCompact: o,
                    iconStyle: a,
                    icon: l,
                    title: c,
                    tag: d,
                    subtitle: p,
                    showInherited: g,
                    isInherited: f,
                    permissionRoleSelect: y,
                    hideRoleSelectButton: v,
                    renderTitleWithoutUILabelWrapper: C,
                    onClose: A,
                    style: b
                } = e, w = (0, i(682985).K8)(() => "user_permission" === t.type, [t]), I = (0, i(616844).Y5)("left", 8 * !i(986939).A.isMobile), P = (0, i(616844).Y5)("right", 8 * !i(986939).A.isMobile), x = (0, i(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        minHeight: o ? 44 : void 0,
                        height: i(986939).A.isMobile ? void 0 : i(912221).CJ,
                        paddingTop: i(986939).A.isMobile ? 12 : 8,
                        paddingBottom: i(986939).A.isMobile ? 12 : 8,
                        paddingInlineStart: I,
                        paddingInlineEnd: P,
                        ...b
                    },
                    icon: {
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: i(986939).A.isMobile ? 40 : 32,
                        height: i(986939).A.isMobile ? 40 : 32,
                        marginInlineEnd: (0, i(912221).qj)({
                            isMobile: i(986939).A.isMobile
                        }),
                        ...a
                    }
                }), [o, I, P, a, b]), S = (0, n.useMemo)(() => {
                    var n;
                    return v ? null : "display_only_overview_permission" === (n = t).type || "display_only_hidden_permission" === n.type || "display_only_inherited_permission" === n.type || "display_only_group_member_permission" === n.type ? y : e.store.table === i(832375).evP || e.store.table === i(832375).C0E ? (0, s.jsx)(m, { ...e,
                        onClose: A,
                        permissionItem: t
                    }) : e.store.table === i(832375).VlP ? (0, s.jsx)(h, { ...e,
                        store: e.store,
                        onClose: A,
                        permissionItem: t
                    }) : void(0, i(722371).HB)(e.store)
                }, [v, t, e, y, A]);
                return (0, s.jsxs)("div", {
                    className: "notranslate",
                    style: x.container,
                    children: [(0, s.jsx)("div", {
                        style: x.icon,
                        children: l
                    }), (0, s.jsxs)("div", {
                        style: u.title,
                        children: [(0, s.jsxs)(i(4458).fI, {
                            children: [C ? c : (0, s.jsx)(i(324489).V, {
                                style: w ? void 0 : u.label,
                                children: (0, s.jsx)(i(503473).j, {
                                    children: c
                                })
                            }), d ? (0, s.jsx)("div", {
                                style: u.tag,
                                children: d
                            }) : void 0]
                        }), p ? (0, s.jsx)(i(324489).V, {
                            style: e.subtitleStyle,
                            isSmall: !0,
                            children: p
                        }) : void 0, g && f ? (0, s.jsx)(_, {
                            store: r
                        }) : void 0]
                    }), S ? (0, s.jsx)(i(4458).fI, {
                        alignItems: "center",
                        flexShrink: 0,
                        marginInlineStart: 8,
                        children: S
                    }) : null]
                })
            }
            let g = {
                button: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: (0, i(912221).kx)()
                }
            };

            function m(e) {
                var t;
                let {
                    isInherited: o,
                    permissionItem: a,
                    store: l,
                    from: c,
                    isDisabled: d,
                    sudoModeStore: u,
                    location: p,
                    fromPermissionWrapper: m,
                    onUpgradeButtonClick: f,
                    onChange: h,
                    onClose: y,
                    onOpenMenu: _,
                    upgradeButtonName: v,
                    buttonPopupStore: C,
                    isRemovableOverride: A,
                    onChangeSuccess: b,
                    additionalCapabilities: w
                } = e, I = (0, i(533992).v3)(), P = (0, i(682985).K8)(() => (0, i(974410).f)(l), [l]), x = (0, i(682985).K8)(() => {
                    var e;
                    let t = l.getModel(),
                        n = null == (e = l.getParentStore()) ? void 0 : e.getModel();
                    return (0, i(138798).tp)({
                        record: t,
                        parent: n,
                        from: c,
                        permissionItem: a
                    }) ? (0, i(138798).SK)({
                        ancestors: i(688502).Yn(l.pointer, l.getRecordModel),
                        from: c
                    }) : a.role
                }, [c, a, l]), S = (0, i(682985).K8)(() => l.table === i(832375).evP ? l.getType() : void 0, [l]), k = l.table === i(832375).C0E ? i(832375).C0E : i(832375).evP, T = a.type, M = (0, i(682985).K8)(() => {
                    let e = I.currentUser.id;
                    return r().B2(a) && a.user_id === e
                }, [I, a]), j = (0, i(682985).K8)(() => {
                    if ("bot_permission" !== a.type) return;
                    let e = i(447003).v.createChildStore(l, {
                        table: "bot",
                        id: a.bot_id,
                        spaceId: a.parent_id
                    });
                    return e.isWorkflowBot() ? e.getWorkflowId() : void 0
                }, [a, l]), B = (0, n.useCallback)(async (e, t) => {
                    let n = { ...a
                    };
                    if (n.role = x, r().i4(n) && (t ? n.can_create_pages_in_collection = void 0 : "none" === e && void 0 === n.can_create_pages_in_collection && (n.can_create_pages_in_collection = !1)), (h ? await h(e) : await (0, i(319627).o5)({
                            oldPermissionItem: n,
                            newRole: e,
                            wasInherited: o,
                            environment: I,
                            store: l,
                            sudoModeStore: u,
                            location: p,
                            fromPermissionWrapper: m
                        })) && (null == b || b(e), l.table === i(832375).C0E && M && "none" === e)) {
                        C.reset(), i(729619).XP({
                            environment: I,
                            store: l
                        });
                        let e = I.defaultRecordCache.inMemoryRecordCache;
                        e.setModelAndRole({
                            pointer: l.pointer,
                            userId: I.currentUser.id
                        }, l.getModel(), "none"), e.emitRecord(l.pointer, [])
                    }
                }, [a, x, o, I, l, u, p, m, h, b, C, M]), D = !!r().i4(a) && (a.can_create_pages_in_collection ? ? !1), N = (0, n.useCallback)(async () => {
                    await (0, i(830097).iK)({
                        permissionItem: a,
                        environment: I,
                        store: l,
                        isInherited: o
                    })
                }, [a, I, l, o]), E = e.displayCanCreate ? ? (D && !o), W = (0, i(13898).D)({
                    permissionType: a.type,
                    blockType: S,
                    blockRole: x,
                    canCreatePagesInCollection: D,
                    handleCanCreatePagesInCollectionChange: N,
                    store: l,
                    isInherited: o,
                    lowestSelectableRole: null == (t = e.renderCurrentAccessSection) || null == (t = t.call(e)) ? void 0 : t.lowestSelectableRole,
                    displayRole: e.displayRoleInButton,
                    displayCanCreate: e.displayCanCreate
                });
                return (0, s.jsx)(i(761163).Ay, {
                    role: x,
                    table: k,
                    spaceStore: P,
                    blockType: S,
                    type: T,
                    disabled: d,
                    isUserPermission: M,
                    renderCurrentAccessSection: e.renderCurrentAccessSection,
                    onChange: B,
                    onClick: _,
                    onClose: y,
                    onUpgradeButtonClick: f,
                    upgradeButtonName: v,
                    buttonPopupStore: C,
                    buttonStyle: g.button,
                    showPermissionOverrideWarning: o && !e.selectFooter,
                    isRemovableOverride: A,
                    workflowId: j,
                    footer: e.selectFooter,
                    roleItemOverrides: e.roleItemOverrides,
                    from: "shareMenu",
                    header: e.selectHeader,
                    additionalCapabilities: w,
                    displayRoleInButton: e.displayRoleInButton,
                    canCreate: E,
                    ...W
                })
            }
            let f = {
                button: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: (0, i(912221).kx)()
                },
                style0: {
                    padding: 7
                }
            };

            function h(e) {
                let {
                    isInherited: t,
                    permissionItem: o,
                    store: a,
                    from: l,
                    isDisabled: c,
                    sudoModeStore: d,
                    location: u,
                    fromPermissionWrapper: p,
                    onUpgradeButtonClick: g,
                    onChange: m,
                    onClose: h,
                    onOpenMenu: y,
                    upgradeButtonName: _,
                    buttonPopupStore: v,
                    isRemovableOverride: C,
                    onChangeSuccess: A
                } = e, b = (0, i(533992).v3)(), w = (0, i(682985).K8)(() => (0, i(974410).f)(a), [a]), I = null == w ? void 0 : w.id, P = (0, i(217844)._)({
                    name: "collection_property_permissions",
                    spaceId: I,
                    userId: b.currentUser.id
                }), x = (0, i(682985).K8)(() => {
                    var e;
                    let t = a.getModel(),
                        n = null == (e = a.getParentStore()) ? void 0 : e.getModel();
                    return (0, i(138798).tp)({
                        record: t,
                        parent: n,
                        from: l,
                        permissionItem: o
                    }) ? (0, i(138798).SK)({
                        ancestors: i(688502).Yn(a.pointer, a.getRecordModel),
                        from: l
                    }) : o.role
                }, [l, o, a]), S = (0, i(682985).K8)(() => {
                    let e = b.currentUser.id;
                    return r().B2(o) && o.user_id === e
                }, [b, o]), k = (0, n.useCallback)(async e => {
                    if (r().tb(o) && "page_creator" === o.property_info.type) {
                        let t = function(e) {
                                let t = e.getParentBlockStore();
                                if (!t) return !1;
                                let i = t.getType();
                                if ("collection_view" !== i && "collection_view_page" !== i) return !1;
                                for (let e of t.getPermissionItems())
                                    if ((0, r().i4)(e) && !0 === e.can_create_pages_in_collection) return !0;
                                return !1
                            }(a),
                            n = r().p2(x) && !r().p2(e);
                        if (t && ("none" === e || n) && !await (0, i(830097)._D)(e)) return
                    }
                    let n = { ...o
                    };
                    n.role = x, (m ? await m(e) : await (0, i(319627).o5)({
                        oldPermissionItem: n,
                        newRole: e,
                        wasInherited: t,
                        environment: b,
                        store: a,
                        sudoModeStore: d,
                        location: u,
                        fromPermissionWrapper: p
                    })) && (null == A || A(e))
                }, [o, x, t, b, a, d, u, p, m, A]), T = (0, i(682985).K8)(() => {
                    if ("collection_property_permission" !== o.type) return;
                    let e = a.getSchema();
                    if (!(0, i(944209).sq)({
                            collectionSchema: e,
                            permissionItem: o
                        })) return i(357194).vx;
                    let t = [..."page_creator" === o.property_info.type ? ["editor"] : [], "read_and_write", "comment_only", "reader"],
                        n = "collection_property_permission" === o.type && (null == P ? void 0 : P.type) === "unavailable" && P.upsell,
                        r = t.map(e => ({
                            role: e,
                            ...n && {
                                disabledInfo: {
                                    isDisabled: !0
                                }
                            }
                        }));
                    return n && (r[0].prefixItem = {
                        key: "upgrade_button",
                        action: i(763230).lQ,
                        render: () => (0, s.jsx)("div", {
                            style: f.style0,
                            children: (0, s.jsx)(i(754951).UpgradeButton, {
                                source: "collection_property_permissions",
                                display: "button",
                                upsell: P.upsell,
                                featureName: "collection_property_permissions",
                                spaceStore: w
                            })
                        })
                    }), r.push(i(357194).EL), r
                }, [o, a, P, w]);
                return (0, s.jsx)(i(761163).Ay, {
                    spaceStore: w,
                    role: x,
                    table: i(832375).VlP,
                    blockType: void 0,
                    type: o.type,
                    disabled: c,
                    isUserPermission: S,
                    onChange: k,
                    onClick: y,
                    onClose: h,
                    onUpgradeButtonClick: g,
                    upgradeButtonName: _,
                    buttonPopupStore: v,
                    buttonStyle: f.button,
                    showPermissionOverrideWarning: t && !e.selectFooter,
                    isRemovableOverride: C,
                    footer: e.selectFooter,
                    roleItemOverrides: e.roleItemOverrides,
                    from: "shareMenu",
                    header: e.selectHeader,
                    availableRoleItems: T
                })
            }
            let y = {
                label: {
                    lineHeight: 1.4
                },
                linkBox: {
                    display: "inline-flex",
                    alignItems: "center",
                    borderBottom: `0.5px solid ${i(632079).oZ.mediumTextColor}`
                }
            };

            function _(e) {
                let {
                    store: t
                } = e, r = (0, i(533992).v3)(), o = (0, i(109939).tz)(), a = (0, i(682985).K8)(() => t.table === i(832375).evP ? (0, i(483227).Ay)({
                    store: t,
                    fullyQualified: !1,
                    pageVisitSource: i(254656).y8.LinkInPage
                }) : t.table === i(832375).C0E ? (0, i(739185).iZ)({
                    workflowId: t.id,
                    params: {},
                    pageVisitSource: i(254656).y8.LinkInPage
                }) : void 0, [t]), l = (0, i(682985).K8)(() => (0, i(966980).$R)(t), [t]), d = (0, n.useCallback)(() => {
                    (0, i(976880).F)({
                        environment: r,
                        teamId: t.id,
                        tab: i(48023).p.Members,
                        from: "permission_item"
                    })
                }, [t.id, r]);
                return (0, s.jsx)(i(324489).V, {
                    isSmall: !0,
                    style: y.label,
                    children: o.formatMessage(c.fromLinkBox, {
                        linkBoxWithPageTitle: (0, s.jsx)(i(590422).Q, {
                            inline: !0,
                            href: a,
                            onClick: l ? d : void 0,
                            style: y.linkBox,
                            children: (0, s.jsx)(i(899260).A, {
                                store: t,
                                useInvertedColors: !1
                            })
                        })
                    })
                })
            }
            let v = n.memo(function(e) {
                let {
                    from: t,
                    store: r,
                    onClick: a,
                    permissionItem: l,
                    ignoreLocalHoverState: c,
                    nonInheritedTooltip: u,
                    inheritedTooltip: g,
                    shouldDisable: m,
                    isCollapsible: f,
                    openRoleSelectMenuOnRender: h
                } = e, y = (0, i(533992).v3)(), _ = (0, i(682985).uB)(void 0, i(510969).A), v = (0, i(682985).K8)(() => {
                    let e = t.table;
                    if (e === i(832375).evP) return i(970831).B.createChildStore(r, {
                        table: i(832375).evP,
                        id: t.blockId
                    });
                    if (e === i(832375).yKj) return i(681735).h.createChildStore(r, {
                        table: i(832375).yKj,
                        id: t.teamId
                    });
                    if (e === i(832375).VlP) return i(356912).m.createChildStore(r, {
                        table: i(832375).VlP,
                        id: t.collectionId
                    });
                    if (e === i(832375).C0E) {
                        let e = r.getSpaceId();
                        if (!e) return;
                        return i(360851).N.createChildStore(r, {
                            table: i(832375).C0E,
                            id: t.workflowId,
                            spaceId: e
                        })
                    }
                    if (e !== i(832375).Toz)(0, i(722371).HB)(e)
                }, [t, r]), [C, A] = (0, n.useState)(!1), b = (0, n.useCallback)(() => {
                    _.setState({ ..._.state,
                        open: !0
                    }), A(!0)
                }, [_]), w = (0, n.useCallback)(() => {
                    A(!1)
                }, []);
                (0, n.useEffect)(() => {
                    h && !_.state.open && requestAnimationFrame(() => {
                        b()
                    })
                }, [h, b, _]);
                let I = (0, i(682985).K8)(() => m || (0, i(296340).dK)({
                        permissionItem: l,
                        store: r
                    }), [m, l, r]),
                    P = !!v && v.id !== r.id,
                    x = (0, n.useCallback)(e => {
                        a ? a(e) : I || _.setState({ ..._.state,
                            open: !0
                        })
                    }, [_, a, I]),
                    S = (0, i(682985).K8)(() => {
                        let e = y.currentUser.id;
                        return "user_permission" === l.type && l.user_id === e
                    }, [y, l]),
                    k = (0, n.useMemo)(() => C ? null : P && v ? g || (0, s.jsx)(o, {
                        store: v,
                        isDisabled: I,
                        isCurrentUserPermission: S
                    }) : u, [P, u, g, v, I, S, C]),
                    T = (0, i(960253).I)(() => ({
                        button: { ...(0, i(912221).CY)(),
                            ...e.menuListItemProps ? {
                                width: "unset"
                            } : {}
                        }
                    }), [e.menuListItemProps]);
                return (0, s.jsx)(i(51831).m, {
                    delayThreshold: 0,
                    content: () => k,
                    textWrap: !0,
                    disableTooltip: !k || C,
                    forceRenderTooltipPopupComponent: !!k,
                    style: d.tooltip,
                    placement: "left",
                    children: t => {
                        let n = (0, i(63390).A)(t, {
                            onMouseEnter: e.onMouseEnter,
                            onMouseLeave: e.onMouseLeave
                        });
                        return e.menuListItemProps ? (0, s.jsx)(i(95582).A, { ...e.menuListItemProps,
                            onClick: x,
                            disabled: I,
                            ignoreLocalHoverState: c,
                            buttonStyle: T.button,
                            textWrapperStyle: d.style0,
                            style: d.style1,
                            title: v && (0, s.jsx)(p, { ...e,
                                isDisabled: I,
                                fromStore: v,
                                buttonPopupStore: _,
                                isInherited: P,
                                onOpenMenu: b,
                                onClose: w
                            }),
                            ...n
                        }) : (0, s.jsx)(i(64960).Ay, {
                            disabled: I && !f,
                            ignoreLocalHoverState: c,
                            style: T.button,
                            pressedStyle: d.pressedButton,
                            onClick: x,
                            ...n,
                            children: v ? (0, s.jsx)(p, { ...e,
                                isDisabled: I,
                                fromStore: v,
                                buttonPopupStore: _,
                                isInherited: P,
                                onOpenMenu: b,
                                onClose: w
                            }) : void 0
                        })
                    }
                })
            })
        },
        560860: (e, t, i) => {
            i.d(t, {
                QU: () => o,
                f2: () => s,
                r6: () => a
            }), i(581454), i(296540);
            var n = i(474848);
            let r = {
                scroller: {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: 290,
                    border: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 6,
                    paddingTop: 8,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    marginTop: 15,
                    marginBottom: 5,
                    marginInlineStart: -12,
                    marginInlineEnd: -12
                },
                editContainer: {
                    marginTop: 2,
                    marginBottom: 2,
                    color: i(632079).Tj.text.primary
                }
            };

            function s(e) {
                let {
                    openState: t
                } = e, {
                    mainEditorCurrentBlockStore: s,
                    currentSpaceStore: o
                } = (0, i(682985).K8)(() => ({
                    mainEditorCurrentBlockStore: i(728372).AppStoreMainEditorCurrentBlockStore.state,
                    currentSpaceStore: i(728372).AppStoreSidebarSpaceStore.state
                }), []);
                if (!s || !o) return null;
                let a = Date.now();
                return (0, n.jsx)(i(126767).H, {
                    type: i(644154).A.Y,
                    style: r.scroller,
                    children: t.permissionChanges.map(([e, t], l) => {
                        let c = {
                            timestamp: a,
                            space_id: o.id,
                            type: "permission-changed",
                            permission_data: {
                                before: e,
                                after: t
                            }
                        };
                        return (0, n.jsx)("div", {
                            style: r.editContainer,
                            children: (0, n.jsx)(i(773588).A, {
                                rootStore: s,
                                edit: c
                            })
                        }, `${e.type}-${l}`)
                    })
                })
            }

            function o(e) {
                return ["remove", "restrict"].includes(e.type) ? (0, n.jsx)(i(109939).sA, {
                    id: "restrictedPermissionConfirmationModal.actionButton.restrictAccessV2",
                    defaultMessage: "Change and unlink"
                }) : (0, n.jsx)(i(109939).sA, {
                    id: "restrictedPermissionConfirmationModal.actionButton.relink",
                    defaultMessage: "Relink"
                })
            }

            function a(e) {
                switch (e.type) {
                    case "remove":
                    case "restrict":
                        return (0, n.jsx)(i(109939).sA, {
                            id: "restrictedPermissionConfirmationModal.remove.descriptionV2",
                            defaultMessage: "Change access and unlink share settings from parent page?"
                        });
                    case "restore":
                    case "restoreTeamPermissions":
                        return (0, n.jsx)(i(109939).sA, {
                            id: "restrictedPermissionConfirmationModal.relink.description",
                            defaultMessage: "Relink share settings?"
                        });
                    default:
                        throw i(722371).HB(e)
                }
            }
        },
        567681: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                personKeyIcon: () => r
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 15.23 17.3",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M7.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M10 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h7.88v-1.25H5.85c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54.761-1.488 2.672-2.626 5.007-2.626a6.7 6.7 0 0 1 2.255.381 4 4 0 0 1 .036-1.301 8 8 0 0 0-2.291-.33m7.396 4.866v-1.34a2.719 2.719 0 1 0-2.417 0v3.454l1.209 1.058 1.208-1.058-.906-1.057zm-1.907-4.38a.698.698 0 1 1 1.396 0 .698.698 0 0 1-1.396 0"
                    })
                },
                r = (0, i(104509).wt)("personKey", n, "default")
        },
        640133: (e, t, i) => {
            async function n(e) {
                return i(378736).A.state.open ? Promise.resolve(void 0) : new Promise(t => {
                    var n;
                    n = { ...e,
                        onConfirm: e => (r(), t(e)),
                        onDismiss: () => (r(), t(void 0))
                    }, i(378736).A.setState({ ...n,
                        open: !0
                    })
                })
            }

            function r() {
                i(378736).A.reset()
            }
            i.d(t, {
                f: () => n,
                l: () => r
            })
        },
        758972: (e, t, i) => {
            i.d(t, {
                Ay: () => c,
                NJ: () => o,
                d5: () => a
            }), i(898992), i(354520), i(581454), i(737550);
            var n, r, s = () => i(546605);
            let o = ((n = {}).unselected = "unselected", n.workspace_member = "workspace_member", n.request_workspace_member = "request_workspace_member", n.page_guest = "page_guest", n.closed = "closed", n),
                a = ((r = {})[r.closed = 0] = "closed", r[r.share_page = 1] = "share_page", r[r.share_workspace = 2] = "share_workspace", r[r.request_workspace = 3] = "request_workspace", r);
            class l extends s().Store {
                getInitialState() {
                    return {
                        inviteStage: a.closed,
                        selection: o.workspace_member,
                        order: [o.workspace_member, o.page_guest],
                        invitedUsers: [],
                        invitedEmailToUserIdMap: {},
                        flowId: i(92513).JW()
                    }
                }
                startWorkspaceInvite() {
                    this.setState({ ...this.state,
                        inviteStage: a.share_workspace,
                        order: [o.workspace_member, o.page_guest],
                        selection: o.workspace_member
                    })
                }
                startRequestMembership() {
                    this.setState({ ...this.state,
                        inviteStage: a.request_workspace,
                        order: [o.request_workspace_member, o.page_guest],
                        selection: o.request_workspace_member
                    })
                }
                hasGuests() {
                    return this.state.invitedUsers.some(e => e.isGuest)
                }
                getGuestEmails() {
                    return this.state.invitedUsers.filter(e => e.isGuest).map(e => e.email)
                }
            }
            let c = l
        },
        830097: (e, t, i) => {
            i.d(t, {
                Me: () => d,
                _D: () => c,
                iK: () => s,
                pm: () => o
            }), i(296540);
            var n = i(474848);
            let r = (0, i(109939).YK)({
                deletePageCreatorPermissionWarning: {
                    id: "deletePageCreatorPermissionWarning.title",
                    defaultMessage: "Delete page-level access rule for creators?"
                },
                lowerPageCreatorPermissionWarning: {
                    id: "lowerPageCreatorPermissionWarning.title",
                    defaultMessage: "Lower page-level access for creators?"
                },
                deletePageCreatorPermissionWarningDescription: {
                    id: "deletePageCreatorPermissionWarning.description",
                    defaultMessage: "This page-level access rule is necessary for users with can create access to create pages."
                },
                lowerPageCreatorPermissionWarningDescription: {
                    id: "lowerPageCreatorPermissionWarning.description",
                    defaultMessage: "The current level of access is necessary for users with can create access to create pages."
                },
                deletePageCreatorPermissionWarningConfirmButton: {
                    id: "deletePageCreatorPermissionWarning.confirmButton",
                    defaultMessage: "Delete page-level access rule"
                },
                lowerPageCreatorPermissionWarningConfirmButton: {
                    id: "lowerPageCreatorPermissionWarning.confirmButton",
                    defaultMessage: "Lower page-level access"
                }
            });
            async function s(e) {
                let {
                    permissionItem: t,
                    environment: n,
                    store: r,
                    isInherited: s
                } = e;
                if (!(r instanceof i(970831).B) || !(0, i(642157).i4)(t)) return;
                let a = { ...t
                };
                if (a.can_create_pages_in_collection = !!s || !t.can_create_pages_in_collection, !await (0, i(319627).Hc)({
                        oldPermissionItem: t,
                        newPermissionItem: a,
                        wasInherited: s,
                        environment: n,
                        store: r
                    }) || !a.can_create_pages_in_collection) return;
                let l = await d(r);
                l && o({
                    environment: n,
                    store: r,
                    role: l
                })
            }

            function o(e) {
                let {
                    environment: t,
                    store: n,
                    role: r
                } = e;
                if (n instanceof i(970831).B && n.isCollectionView() && r !== (0, i(865768).rx)(n) && (0, i(642157).PW)(r))
                    for (let e of n.getOwnedCollectionStores()) ! function(e) {
                        let {
                            collectionStore: t,
                            environment: n,
                            role: r
                        } = e, s = (0, i(517013).G_)(t, t.pointer, "permissions"), o = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "toggleCanCreatePagesInCollection.onCreateRule",
                            environment: n,
                            canUndo: !0,
                            cellTarget: o ? {
                                spaceWithId: o
                            } : void 0,
                            perform: e => {
                                (0, i(421439).y4)({
                                    store: s,
                                    operation: {
                                        pointer: s.pointer,
                                        command: "setPermissionItem",
                                        path: s.path,
                                        args: {
                                            type: "collection_property_permission",
                                            property_info: {
                                                type: "page_creator"
                                            },
                                            role: r
                                        }
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }({
                        collectionStore: e,
                        environment: t,
                        role: r
                    })
            }
            let a = {
                fontSize: 14
            };

            function l({
                role: e
            }) {
                let t = "none" === e ? r.deletePageCreatorPermissionWarningDescription : r.lowerPageCreatorPermissionWarningDescription;
                return (0, n.jsx)("span", {
                    style: a,
                    children: (0, n.jsx)(i(109939).sA, { ...t
                    })
                })
            }

            function c(e) {
                let t = "none" === e ? r.deletePageCreatorPermissionWarning : r.lowerPageCreatorPermissionWarning,
                    s = "none" === e ? r.deletePageCreatorPermissionWarningConfirmButton : r.lowerPageCreatorPermissionWarningConfirmButton;
                return new Promise(r => {
                    i(647095).ui({
                        message: (0, n.jsx)(i(109939).sA, { ...t
                        }),
                        description: (0, n.jsx)(l, {
                            role: e
                        }),
                        showCancel: !1,
                        showCloseButton: !0,
                        keepFocus: !1,
                        mode: "wide",
                        innerStyle: {
                            textAlign: "center"
                        },
                        icon: (0, n.jsx)(i(16275).I, {
                            icon: i(800191).e,
                            size: "xl"
                        }),
                        onDismiss: () => {
                            r(!1)
                        },
                        handleCancel: () => {
                            r(!1)
                        },
                        items: [{
                            label: (0, n.jsx)(i(109939).sA, { ...s
                            }),
                            color: "red",
                            onAccept: () => {
                                r(!0)
                            }
                        }]
                    })
                })
            }
            async function d(e) {
                let t = (0, i(865768).rx)(e);
                if (!((0, i(642157).PW)(t) && (0, i(138798).q_)(t, "read_and_write"))) return i(640133).f({
                    icon: i(567681).personKeyIcon,
                    radioButtonStyle: "blue",
                    confirmTextStyle: "blue",
                    hideCancelButton: !0,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "toggleCanCreatePagesInCollection.modal.title",
                        defaultMessage: "What access level should the creators have?"
                    }),
                    subtitle: (0, n.jsx)(i(109939).sA, {
                        id: "toggleCanCreatePagesInCollection.modal.subtitle",
                        defaultMessage: "This applies to all people with Can create access in this database"
                    }),
                    confirmText: (0, n.jsx)(i(109939).sA, {
                        id: "toggleCanCreatePagesInCollection.modal.confirmText",
                        defaultMessage: "Create a page-level access rule"
                    }),
                    radioOptions: [{
                        key: "read_and_write",
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "toggleCanCreatePagesInCollection.modal.editAccess.title",
                            defaultMessage: "Can edit the pages they create"
                        }),
                        subtitle: (0, n.jsx)(i(109939).sA, {
                            id: "toggleCanCreatePagesInCollection.modal.editAccess.subtitle",
                            defaultMessage: "Edit, suggest, and comment"
                        })
                    }, {
                        key: "editor",
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "toggleCanCreatePagesInCollection.modal.fullAccess.title",
                            defaultMessage: "Have full access to the pages they create"
                        }),
                        subtitle: (0, n.jsx)(i(109939).sA, {
                            id: "toggleCanCreatePagesInCollection.modal.fullAccess.subtitle",
                            defaultMessage: "Edit, suggest, comment, and share"
                        })
                    }]
                })
            }
        },
        912221: (e, t, i) => {
            i.d(t, {
                $D: () => a,
                CJ: () => c,
                CY: () => g,
                Sg: () => o,
                bq: () => s,
                iM: () => f,
                kJ: () => d,
                kx: () => p,
                qj: () => m,
                rL: () => n,
                sH: () => u,
                u6: () => r,
                zr: () => l
            });
            let n = 16,
                r = 20,
                s = 1e3,
                o = 12,
                a = 456,
                l = 24,
                c = 48;

            function d() {
                return {
                    background: i(632079).Tj.background.tertiaryTranslucent,
                    borderRadius: 8,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    marginInlineStart: i(986939).A.isMobile ? 0 : n,
                    marginInlineEnd: i(986939).A.isMobile ? 0 : n,
                    marginTop: 4,
                    marginBottom: 8
                }
            }

            function u() {
                return { ...g(),
                    width: "unset",
                    height: c,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingInlineEnd: 6
                }
            }

            function p() {
                return i(986939).A.isMobile ? i(418676).Kw : i(418676).vQ
            }

            function g() {
                return {
                    borderRadius: 10,
                    transition: "background 150ms ease-out"
                }
            }

            function m({
                isMobile: e
            }) {
                return e ? 12 : 10
            }

            function f({
                themeMode: e,
                colorOverride: t,
                size: n = 24,
                useLargeBorderRadius: r,
                useLightBackgroundColor: s,
                icon: o
            }) {
                return {
                    background: t || (o && (0, i(111012).T8)(o) ? (0, i(111012).ez)({
                        icon: o,
                        mode: e,
                        useLightGrayColor: s
                    }) : i(632079).Tj.background.tertiaryTranslucent),
                    width: n,
                    height: n,
                    borderRadius: r ? 6 : "0.25em"
                }
            }
        },
        938020: (e, t, i) => {
            i.d(t, {
                E4: () => c,
                QX: () => d,
                i3: () => a,
                u5: () => r,
                xS: () => o,
                xf: () => s
            }), i(944114), i(898992), i(354520), i(672577);
            var n = () => i(593186);

            function r(e) {
                return e.includes(",") || e.includes('"') || e.includes("\n") ? `"${e.replace(/"/g,'""')}"` : e
            }

            function s(e) {
                return e ? new Date(e).toISOString().slice(0, 10) : ""
            }

            function o(e, t, n = !1) {
                var r;
                if ((0, i(28299).bf)(e, t)) return "Deleted";
                let s = e.getDataStore().getValue(),
                    a = (null == s ? void 0 : s.status) === "paused" && (0, i(425749).cE)(null == s || null == (r = s.paused_reason) ? void 0 : r.reason);
                return (n ? a : a || !(0, i(28299).Wc)(e)) ? "Disabled" : "Active"
            }

            function a(e) {
                let t = e.getPermissionItems();
                if (t.find(e => "space_permission" === e.type && "none" !== e.role)) return "All workspace members";
                let n = t.filter(e => (0, i(642157).B2)(e) && "none" !== e.role).length,
                    r = t.filter(e => (0, i(642157).Ds)(e) && "none" !== e.role).length,
                    s = [];
                return n > 0 && s.push(`${n} user${1!==n?"s":""}`), r > 0 && s.push(`${r} group${1!==r?"s":""}`), s.length > 0 ? s.join(", ") : "Nobody"
            }
            let l = (0, i(109939).YK)({
                defaultModel: {
                    id: "adminContentSearchTab.agentsTable.model.default",
                    defaultMessage: "Auto"
                }
            });

            function c(e, t) {
                if (!e) return t ? t.formatMessage(l.defaultModel) : "Auto";
                let n = i(215389).U_.get(e);
                return (null == n ? void 0 : n.displayName) ? ? e
            }

            function d(e, t) {
                if (!e || !Array.isArray(e)) return "—";
                let r = e.find(e => "notion" === e.type),
                    s = !!r && (0, i(445568).isWebAccessEnabled)(r.permissions),
                    o = e.filter(e => "notion" !== e.type),
                    a = [];
                for (let e of (s && a.push("Web access"), o)) {
                    let i = n().Nh[e.type];
                    i && a.push(i.getName(t))
                }
                return a.length > 0 ? a.join(", ") : "—"
            }
        }
    }
]);