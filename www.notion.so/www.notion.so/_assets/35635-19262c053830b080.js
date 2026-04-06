"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [35635, 82861], {
        28299: (e, t, a) => {
            function n(e) {
                var t, a;
                let n, r;
                return (n = (null == (t = e.getDraftData()) ? void 0 : t.triggers) || [], r = (null == (a = e.getData()) ? void 0 : a.triggers) || [], n.length > 0 ? n : r).some(e => e.enabled)
            }

            function r(e, t) {
                return !1 === t || !1 === e.getAlive() || void 0 !== e.getMovedToTrashId()
            }
            a.d(t, {
                Wc: () => n,
                bf: () => r
            }), a(898992), a(354520), a(737550)
        },
        82861: (e, t, a) => {
            a.d(t, {
                Ku: () => i,
                Pf: () => d,
                YM: () => s,
                rg: () => c,
                vm: () => r,
                x9: () => l,
                yE: () => o
            }), a(944114), a(898992), a(354520), a(581454), a(814603), a(147566), a(198721);
            var n = () => a(938020);
            async function r(e) {
                let {
                    environment: t,
                    spaceId: n,
                    servicePeriodStart: r,
                    servicePeriodEnd: i,
                    limit: o,
                    cursor: s,
                    sortDirection: l,
                    entityTable: d,
                    createdByUserId: c,
                    searchQuery: u,
                    entityType: p
                } = e, g = await t.api.callApi({
                    eventName: "getTopEntitiesByUsage",
                    environment: t,
                    data: {
                        spaceId: n,
                        servicePeriodStart: r,
                        servicePeriodEnd: i,
                        limit: o,
                        cursor: s,
                        sortDirection: l,
                        entityTable: d,
                        createdByUserId: c,
                        searchQuery: u,
                        entityType: p,
                        forceMetronomeDataPath: (0, a(717274).Sc)()
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
            async function i(e) {
                let {
                    environment: t,
                    spaceId: a,
                    servicePeriodStart: n,
                    servicePeriodEnd: r,
                    workflowIds: i
                } = e, o = await t.api.callApi({
                    eventName: "getAIActivityCounts",
                    environment: t,
                    data: {
                        spaceId: a,
                        servicePeriodStart: n,
                        servicePeriodEnd: r,
                        workflowIds: i
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
                    spaceId: a,
                    servicePeriodStart: n,
                    servicePeriodEnd: r
                } = e, i = await t.api.callApi({
                    eventName: "getCustomAgentStats",
                    environment: t,
                    data: {
                        spaceId: a,
                        servicePeriodStart: n,
                        servicePeriodEnd: r
                    }
                });
                return "failed" === i.type ? {
                    uniqueCreatorCount: 0,
                    customAgentCount: 0,
                    totalRunCount: 0
                } : {
                    uniqueCreatorCount: i.data.uniqueCreatorCount,
                    customAgentCount: i.data.customAgentCount,
                    totalRunCount: i.data.totalRunCount
                }
            }
            async function s(e) {
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
                    (0, a(222024).t)().error({
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
                a(390015).q.setState({
                    open: !0
                })
            }

            function d() {
                a(390015).q.setState({
                    open: !1
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    spaceId: r,
                    servicePeriodStartMs: i,
                    servicePeriodEndMs: o,
                    sortDirection: s,
                    createdByUserId: l,
                    isRebrand: d
                } = e;
                try {
                    var c, m;
                    let e, f, y, h = (0, a(909212).Ks)(),
                        [v, x] = await Promise.all([u({
                            environment: t,
                            spaceId: r,
                            servicePeriodStartMs: i,
                            servicePeriodEndMs: o
                        }), p({
                            environment: t,
                            spaceId: r,
                            servicePeriodStartMs: i,
                            servicePeriodEndMs: o,
                            sortDirection: s,
                            createdByUserId: l
                        })]),
                        C = x.filter(e => "custom_agent" === e.entityType || "database_agent" === e.entityType).map(e => e.id),
                        b = await g({
                            environment: t,
                            spaceId: r,
                            servicePeriodStartMs: i,
                            servicePeriodEndMs: o,
                            workflowIds: C
                        }),
                        w = [];
                    if (w.push(["Usage Summary"]), w.push(["Service Period", `${(0,n().xf)(i)} to ${(0,n().xf)(o)}`]), v) {
                        let e = 2 === v.version ? v.totalUsageInPeriod : v.totalMonthlyUsage;
                        w.push(["Credits Used", String(e)])
                    }
                    w.push([]);
                    let j = v ? 2 === v.version ? v.dailyBreakdowns : v.usageData : void 0;
                    if (j && j.length > 0) {
                        w.push(["Daily Usage"]), w.push(["Date", "Daily Credits", "Cumulative Credits"]);
                        for (let e = 0; e < j.length; e++) {
                            let t = j[e],
                                a = e > 0 ? j[e - 1].usage : 0,
                                r = t.usage - a;
                            w.push([(0, n().xf)(t.date), String(r), String(t.usage)])
                        }
                        w.push([])
                    }
                    w.push(["Agent Breakdown"]);
                    let k = ["Custom Agent", "Type", "Credits Used", ...h ? ["Credit limit"] : [], "Runs Completed", "Status", "Created By"];
                    for (let e of (w.push(k), x)) {
                        let t = [e.name ? ? "Unknown", "database_agent" === e.entityType ? d ? "Custom Agent, Autofill" : "Database Agent" : "Custom Agent", String(e.usage), ...h ? [String(e.creditLimitByWorkspaceAdmin ? ? e.creditLimit ? ? "")] : [], String("custom_agent" === e.entityType || "database_agent" === e.entityType ? b[e.id] ? ? 0 : ""), e.status ? ? "", e.createdByName ? ? ""];
                        w.push(t)
                    }
                    c = w.map(e => e.map(n().u5).join(",")).join("\n"), m = "ai-credit-usage.csv", e = new Blob([c], {
                        type: "text/csv;charset=utf-8;"
                    }), f = URL.createObjectURL(e), (y = document.createElement("a")).href = f, y.download = m, document.body.appendChild(y), y.click(), document.body.removeChild(y), URL.revokeObjectURL(f)
                } catch (e) {
                    throw (0, a(222024).t)().error({
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
                    servicePeriodEndMs: i
                } = e, o = await t.api.callCellCompatibleApi({
                    eventName: "getAIDailyCreditUsage",
                    environment: t,
                    data: {
                        spaceId: n,
                        servicePeriodStartMs: r,
                        servicePeriodEndMs: i
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                });
                if ("failed" !== o.type) return 2 === o.data.version ? { ...o.data,
                    dailyBreakdowns: (0, a(254266).j)({
                        usageData: o.data.dailyBreakdowns,
                        servicePeriodStartMs: r,
                        servicePeriodEndMs: i
                    })
                } : { ...o.data,
                    usageData: (0, a(254266).j)({
                        usageData: o.data.usageData,
                        servicePeriodStartMs: r,
                        servicePeriodEndMs: i
                    })
                }
            }
            async function p(e) {
                let t, {
                        environment: a,
                        spaceId: n,
                        servicePeriodStartMs: i,
                        servicePeriodEndMs: o,
                        sortDirection: s,
                        createdByUserId: l
                    } = e,
                    d = [];
                for (;;) {
                    let e = await r({
                        environment: a,
                        spaceId: n,
                        servicePeriodStart: i,
                        servicePeriodEnd: o,
                        limit: 50,
                        cursor: t,
                        sortDirection: s,
                        entityTable: "workflow",
                        createdByUserId: l
                    });
                    if (d.push(...e.entities), !e.next_cursor) break;
                    t = e.next_cursor
                }
                return d
            }
            async function g(e) {
                let {
                    environment: t,
                    spaceId: a,
                    servicePeriodStartMs: n,
                    servicePeriodEndMs: r,
                    workflowIds: o
                } = e;
                if (0 === o.length) return {};
                let s = {};
                for (let e = 0; e < o.length; e += 25) {
                    let l = o.slice(e, e + 25),
                        {
                            activityCounts: d
                        } = await i({
                            environment: t,
                            spaceId: a,
                            servicePeriodStart: n,
                            servicePeriodEnd: r,
                            workflowIds: l
                        });
                    Object.assign(s, d)
                }
                return s
            }
        },
        187041: (e, t, a) => {
            a.d(t, {
                g: () => n
            });

            function n({
                spaceId: e
            }) {
                let t = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    if (e) return a(185995).default.getData(t, {
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        229337: (e, t, a) => {
            a.d(t, {
                B: () => S
            });
            var n = a(296540);
            a(16280), a(898992), a(354520), a(430670), a(581454);
            var r = a(474848);
            let i = {
                    page_permission_added: a(697198).lockSmallIcon,
                    all_shared_pages_enabled: a(754226).peopleSmallIcon,
                    full_access_permission_added: a(697198).lockSmallIcon,
                    slack_private_channel_added: a(697198).lockSmallIcon,
                    notion_mail_connected: a(324533).paperPlaneSmallIcon,
                    notion_calendar_connected: a(505518).x,
                    module_created: a(638501).plusSmallIcon
                },
                o = {
                    chipsContainer: {
                        display: "flex",
                        textAlign: "start",
                        flexDirection: "column",
                        paddingInlineStart: 8,
                        paddingTop: 12,
                        paddingInlineEnd: 12,
                        paddingBottom: 12,
                        borderRadius: 12,
                        backgroundColor: a(632079).Tj.yellow.background.secondary,
                        width: "100%"
                    }
                };

            function s(e) {
                let {
                    descriptionText: t,
                    riskyEdits: n,
                    spaceStore: s,
                    hasDangerousCombination: l
                } = e;
                return (0, r.jsxs)(a(4458).VP, {
                    gap: 16,
                    width: "100%",
                    children: [(0, r.jsx)(a(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: t
                    }), (0, r.jsxs)("div", {
                        style: o.chipsContainer,
                        children: [(0, a(722371).objectKeys)(i).map(e => (0, r.jsx)(c, {
                            type: e,
                            edits: n,
                            spaceStore: s
                        }, e)), l ? (0, r.jsx)(p, {}) : void 0]
                    })]
                })
            }
            let l = {
                    marginTop: 2
                },
                d = {
                    display: "flex",
                    alignItems: "normal",
                    gap: 8,
                    paddingInline: 8,
                    paddingBlock: 6
                };

            function c(e) {
                let {
                    type: t,
                    edits: n,
                    spaceStore: o
                } = e, s = i[t], c = n.filter(e => e.type === t);
                return 0 === c.length ? null : "module_created" === t ? (0, r.jsx)(r.Fragment, {
                    children: c.map((e, t) => (0, r.jsxs)("div", {
                        style: d,
                        children: [(0, r.jsx)(a(16275).I, {
                            icon: s,
                            size: "sm",
                            colorPalette: "yellow",
                            colorVariant: "secondary",
                            style: l
                        }), (0, r.jsx)(a(111010).D, {
                            styleKey: "bodyMedium",
                            colorPalette: "yellow",
                            colorVariant: "secondary",
                            children: (0, r.jsx)(u, {
                                edits: [e],
                                spaceStore: o
                            })
                        })]
                    }, `risky-edit-module-${t}`))
                }) : (0, r.jsxs)("div", {
                    style: d,
                    children: [(0, r.jsx)(a(16275).I, {
                        icon: s,
                        size: "sm",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        style: l
                    }), (0, r.jsx)(a(111010).D, {
                        styleKey: "bodyMedium",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        children: (0, r.jsx)(u, {
                            edits: c,
                            spaceStore: o
                        })
                    })]
                })
            }

            function u(e) {
                let {
                    edits: t,
                    spaceStore: n
                } = e, i = t[0], o = (0, a(682985).K8)(() => {
                    let e = i.type;
                    switch (e) {
                        case "module_created":
                            return (0, r.jsx)(a(109939).sA, {
                                id: "workflows.notion.permissions.newConnections",
                                defaultMessage: "Access to {moduleName}",
                                values: {
                                    moduleName: i.moduleName
                                }
                            });
                        case "page_permission_added":
                            return (0, r.jsx)(y, {
                                edits: t
                            });
                        case "all_shared_pages_enabled":
                            return (0, r.jsx)(a(109939).sA, {
                                id: "workflows.notion.permissions.accessToPaegsInWorkspace",
                                defaultMessage: "Access to pages shared with everyone in {spaceName}",
                                values: {
                                    spaceName: n.getName()
                                }
                            });
                        case "full_access_permission_added":
                            return (0, r.jsx)(a(109939).sA, {
                                id: "workflows.notion.permissions.fullAccessPermissionAdded",
                                defaultMessage: "Full access to {count, plural, one {1 page/database} other {# pages/databases}}",
                                values: {
                                    count: i.count
                                }
                            });
                        case "slack_private_channel_added":
                            return (0, r.jsx)(h, {
                                identifiers: i.identifiers
                            });
                        case "notion_mail_connected":
                            return (0, r.jsx)(a(109939).sA, {
                                id: "workflows.notion.permissions.mail",
                                defaultMessage: "Access to your {count, plural, one {inbox} other {inboxes}}",
                                values: {
                                    count: i.count
                                }
                            });
                        case "notion_calendar_connected":
                            return (0, r.jsx)(a(109939).sA, {
                                id: "workflows.notion.permissions.calendar",
                                defaultMessage: "Access to your {count, plural, one {calendar} other {calendars}}",
                                values: {
                                    count: i.count
                                }
                            });
                        default:
                            (0, a(722371).HB)(e)
                    }
                }, [n, i, t]);
                return (0, r.jsx)("div", {
                    children: o
                })
            }

            function p() {
                return (0, r.jsxs)("div", {
                    style: d,
                    children: [(0, r.jsx)(a(16275).I, {
                        icon: a(50171).exclamationMarkTriangleSmallIcon,
                        size: "sm",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        style: l
                    }), (0, r.jsx)(a(111010).D, {
                        styleKey: "bodyMedium",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        children: (0, r.jsx)(a(109939).sA, {
                            id: "workflows.agentRiskyEdit.dangerousCombination",
                            defaultMessage: "This agent can send emails without confirmation and has access to data in your workspace. It could share sensitive information via email."
                        })
                    })]
                })
            }
            let g = {
                    textDecoration: "underline",
                    textDecorationStyle: "dotted",
                    cursor: "default"
                },
                m = {
                    minWidth: 200,
                    maxWidth: 280
                },
                f = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    maxHeight: 200,
                    overflowY: "auto"
                };

            function y(e) {
                let {
                    edits: t
                } = e, n = t.filter(e => "page_permission_added" === e.type), i = n.length;
                return (0, r.jsx)(a(51831).m, {
                    content: () => (0, r.jsx)("div", {
                        style: f,
                        children: n.map((e, t) => (0, r.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: [(0, r.jsx)(a(569553).B6, {
                                disabled: !0,
                                icon: e.blockStore.getIcon(),
                                isEmptyPage: !1,
                                size: 14,
                                iconRecordCategory: (0, a(569553).Te)(e.blockStore)
                            }), (0, r.jsx)(a(627918).A, {
                                store: e.blockStore
                            })]
                        }, t))
                    }),
                    placement: "top",
                    style: m,
                    textWrap: !0,
                    overlayContainerZIndex: a(455852).k,
                    children: e => (0, r.jsx)("span", {
                        style: g,
                        ...e,
                        children: (0, r.jsx)(a(109939).sA, {
                            id: "workflows.notion.permissions.pagePermissionAdded",
                            defaultMessage: "Access to {count} private {count, plural, one {page} other {pages}}",
                            values: {
                                count: i
                            }
                        })
                    })
                })
            }

            function h(e) {
                let {
                    identifiers: t
                } = e, n = t.length, i = (0, a(682985).K8)(() => t.flatMap(e => {
                    let t = function(e) {
                            if ((0, a(402459).NL)(e)) return e;
                            let t = a(402459).A2.slackChannel.parseUri(e);
                            return t instanceof Error ? e : t.channelId
                        }(e),
                        n = a(315799).c.findChannelById(t);
                    return [null == n ? void 0 : n.name]
                }), [t]);
                return (0, r.jsx)(a(51831).m, {
                    content: () => (0, r.jsx)("div", {
                        style: f,
                        children: i.map((e, t) => (0, r.jsx)("div", {
                            children: `#${e}`
                        }, t))
                    }),
                    placement: "top",
                    style: m,
                    textWrap: !0,
                    overlayContainerZIndex: a(455852).k,
                    children: e => (0, r.jsx)("span", {
                        style: g,
                        ...e,
                        children: (0, r.jsx)(a(109939).sA, {
                            id: "workflows.slack.permissions.privateChannelAdded",
                            defaultMessage: "Access to {count, plural, one {1 private Slack channel} other {# private Slack channels}}",
                            values: {
                                count: n
                            }
                        })
                    })
                })
            }
            a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(908872), a(737550);
            let v = ["mail", "calendar"];

            function x(e) {
                return "module_created" !== e.type || "notion" === e.module.type || v.includes(e.module.type) ? [] : [e.module]
            }

            function C(e) {
                if ("module_permission_added" !== e.type) return !1;
                let t = e.permission;
                return "notion" === t.type && "workspacePublic" === t.identifier.type && t.actions.some(e => "reader" === e)
            }
            let b = new Set(["*", "public:*", "users:*"]);

            function w(e) {
                if ("module_permission_added" !== e.type) return [];
                let t = e.permission;
                return "slack" !== t.type ? [] : (Array.isArray(t.identifier) ? t.identifier : [t.identifier]).filter(e => {
                    if (b.has(e)) return !1;
                    let t = function(e) {
                            if ((0, a(402459).NL)(e)) return e;
                            let t = a(402459).A2.slackChannel.parseUri(e);
                            return t instanceof Error ? e : t.channelId
                        }(e),
                        n = a(315799).c.findChannelById(t);
                    return (null == n ? void 0 : n.type) !== "public"
                })
            }
            let j = (0, a(109939).YK)({
                    saveConfirmationMessage: {
                        id: "workflows.agentTopbar.saveConfirmationMessage",
                        defaultMessage: "Save {agentName, select, undefined {this agent} other {{agentName}}}?"
                    },
                    saveConfirmationDescription: {
                        id: "workflows.agentTopbar.saveConfirmationDescription",
                        defaultMessage: "Anyone with ‘Can interact’ access to this agent will have the following."
                    },
                    saveConfirmationAccept: {
                        id: "workflows.agentTopbar.saveConfirmationAccept",
                        defaultMessage: "I understand, Continue"
                    },
                    saveConfirmationWarningText: {
                        id: "workflows.agentTopbar.saveConfirmationWarningText",
                        defaultMessage: "Learn about permissions"
                    },
                    dangerousCombinationDescription: {
                        id: "workflows.agentTopbar.dangerousCombinationDescription",
                        defaultMessage: "Review the following before continuing."
                    }
                }),
                k = {
                    width: "100%"
                },
                A = {
                    width: "100%",
                    justifyContent: "center"
                };

            function S(e) {
                let {
                    edits: t,
                    spaceStore: i,
                    workflowStore: o,
                    isEnabled: l,
                    slackWorkspaceName: d
                } = e, {
                    message: c,
                    descriptionText: u
                } = e, p = e.requireSharedWithUsers ? ? !0, g = (0, a(109939).tz)(), m = (0, a(346582).b)(o);
                return (0, n.useCallback)(async () => {
                    var e, n;
                    if (!i || !o) return !0;
                    let f = l && (!p || m) ? function(e) {
                            let {
                                edits: t,
                                spaceStore: n,
                                slackWorkspaceName: r
                            } = e, i = t.flatMap(x), o = t.reduce((e, t) => {
                                var a;
                                return e + +("module_created" === (a = t).type && "calendar" === a.module.type)
                            }, 0), s = t.reduce((e, t) => {
                                var a, n;
                                return e + ("module_created" !== (a = t).type || "mail" !== a.module.type ? 0 : (null == (n = a.module.state) || null == (n = n.emailAddresses) ? void 0 : n.length) ? ? 0)
                            }, 0), l = t.some(C), d = t.flatMap(e => (function(e, t) {
                                if ("module_permission_added" !== e.type) return [];
                                let n = e.permission;
                                if ("notion" !== n.type || "pageOrCollectionViewBlock" !== n.identifier.type) return [];
                                let r = a(970831).B.createChildStore(t, {
                                    table: a(682956).ev,
                                    id: n.identifier.blockId
                                });
                                return (0, a(862085).Jh)(r) ? [] : [r]
                            })(e, n)), c = t.reduce((e, t) => e + function(e) {
                                if ("module_permission_added" !== e.type) return 0;
                                let t = e.permission;
                                return "notion" !== t.type ? 0 : +!!t.actions.some(e => "editor" === e)
                            }(t), 0), u = t.flatMap(w);
                            return [...d.length > 0 ? d.map(e => ({
                                type: "page_permission_added",
                                blockStore: e
                            })) : [], ...l ? [{
                                type: "all_shared_pages_enabled"
                            }] : [], ...c > 0 ? [{
                                type: "full_access_permission_added",
                                count: c
                            }] : [], ...s > 0 ? [{
                                type: "notion_mail_connected",
                                count: s
                            }] : [], ...o > 0 ? [{
                                type: "notion_calendar_connected",
                                count: o
                            }] : [], ...u.length > 0 ? [{
                                type: "slack_private_channel_added",
                                count: u.length,
                                identifiers: u
                            }] : [], ...i.length > 0 ? i.map(e => ({
                                type: "module_created",
                                moduleName: function(e) {
                                    let {
                                        module: t,
                                        slackWorkspaceName: n
                                    } = e, r = t.type;
                                    switch (r) {
                                        case "mail":
                                            return "Mail";
                                        case "calendar":
                                            return "Calendar";
                                        case "claude":
                                            return "Claude";
                                        case "boxy":
                                            return "Boxy";
                                        case "slack":
                                            return n ? `${n} (Slack)` : "Slack";
                                        case "notion":
                                            return "Notion";
                                        case "computer":
                                            return "Computer";
                                        case "cursor":
                                            return "Cursor";
                                        case "files":
                                            return "Files";
                                        case "fs":
                                            return "Filesystem";
                                        case "images":
                                            return "Images";
                                        case "mcpServer":
                                            return t.name;
                                        case "test":
                                            return "Test";
                                        case "worker":
                                            return "Worker";
                                        case "workers":
                                            return "Workers";
                                        case "search":
                                            return "Search";
                                        case "helpdocs":
                                            return "Help Center";
                                        case "skills":
                                            return "Skills";
                                        case "web":
                                            return "Web";
                                        case "asana":
                                            return "Asana";
                                        case "box":
                                            return "Box";
                                        case "browser":
                                            return "Browser";
                                        case "discord":
                                            return "Discord";
                                        case "github":
                                            return "Github";
                                        case "googleDrive":
                                            return "Google Drive";
                                        case "gmail":
                                            return "Gmail";
                                        case "googleCalendar":
                                            return "Google Calendar";
                                        case "jira":
                                            return "Jira";
                                        case "linear":
                                            return "Linear";
                                        case "microsoftTeams":
                                            return "Microsoft Teams";
                                        case "marketplace":
                                            return "Marketplace";
                                        case "outlook":
                                            return "Outlook";
                                        case "salesforce":
                                            return "Salesforce";
                                        case "confluence":
                                            return "Confluence";
                                        case "sharepoint":
                                            return "SharePoint";
                                        case "customConnector":
                                            return "Custom Connectors";
                                        case "security":
                                            return "Security";
                                        case "system":
                                            return "System";
                                        default:
                                            (0, a(722371).HB)(r)
                                    }
                                }({
                                    module: e,
                                    slackWorkspaceName: r
                                })
                            })) : []]
                        }({
                            edits: t,
                            slackWorkspaceName: d,
                            spaceStore: i
                        }) : [],
                        y = o.getDraftData() ? ? (null == (e = o.getPublishedArtifactStore()) ? void 0 : e.getData()),
                        h = (null == y ? void 0 : y.modules) ? ? [],
                        v = l && (0, a(767316).Yo)(h);
                    if (0 === f.length && !v) return !0;
                    let b = null == (n = o.getName()) ? void 0 : n.trim(),
                        S = null != b && b.length ? b : void 0,
                        _ = c ? ? g.formatMessage(j.saveConfirmationMessage, {
                            agentName: S
                        }),
                        D = v && 0 === f.length ? j.dangerousCombinationDescription : j.saveConfirmationDescription,
                        M = u ? ? g.formatMessage(D),
                        T = (0, r.jsx)(a(68774).N, {
                            href: (0, a(442564).x)("guides.customAgentsSharingAndPermissions"),
                            external: !0,
                            style: k,
                            children: (0, r.jsx)(a(988022).p, {
                                size: "lg",
                                style: A,
                                colorVariant: "secondary",
                                children: g.formatMessage(j.saveConfirmationWarningText)
                            })
                        });
                    return (await a(647095).Gh({
                        message: _,
                        warningText: T,
                        description: (0, r.jsx)(s, {
                            descriptionText: M,
                            riskyEdits: f,
                            spaceStore: i,
                            hasDangerousCombination: v
                        }),
                        acceptLabel: g.formatMessage(j.saveConfirmationAccept),
                        acceptColor: "blue",
                        mode: "wide",
                        icon: (0, r.jsx)(a(466113).G, {
                            workflowStore: o
                        }),
                        showCancelButton: !1,
                        showCloseButton: !0
                    })).accept
                }, [t, u, g, l, m, c, p, d, i, o])
            }
        },
        254266: (e, t, a) => {
            a.d(t, {
                j: () => s,
                C: () => l
            }), a(16280), a(944114), a(964979);
            var n = () => a(906745),
                r = a(296540);
            let i = {
                date: 0,
                usage: 0,
                monthly: 0,
                annual: 0,
                onDemand: 0
            };
            var o = () => a(695216);

            function s(e) {
                let {
                    usageData: t,
                    servicePeriodStartMs: a,
                    servicePeriodEndMs: r
                } = e, s = Math.min(n().DateTime.utc().startOf("day").toMillis(), n().DateTime.fromMillis(r).toUTC().startOf("day").toMillis()), l = n().DateTime.fromMillis(a).toUTC().startOf("day").toMillis(), d = new Map;
                for (let e of t) d.set(e.date, e);
                let c = [],
                    u = i;
                for (let e = l; e < s; e += o().nD) {
                    let t = d.get(e);
                    t ? (c.push(t), u = t) : c.push({ ...u,
                        date: e
                    })
                }
                return c
            }

            function l(e, t, i) {
                let o = (0, a(533992).v3)(),
                    [l, d] = (0, r.useState)(void 0),
                    [c, u] = (0, r.useState)(!0),
                    p = (0, r.useRef)(null),
                    g = (0, r.useCallback)(async () => {
                        var r, l;
                        if (!e || !t || !i) {
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
                                    servicePeriodEndMs: i,
                                    forceMetronomeDataPath: (0, a(717274).Sc)()
                                },
                                cellNavigation: {
                                    spaceId: e
                                },
                                abortSignal: p.current.signal
                            });
                            if ("failed" === n.type) return void u(!1);
                            if (1 === n.data.version) d({ ...n.data,
                                usageData: s({
                                    usageData: n.data.usageData,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: i
                                })
                            });
                            else if (2 === n.data.version) d({ ...n.data,
                                dailyBreakdowns: s({
                                    usageData: n.data.dailyBreakdowns,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: i
                                })
                            });
                            else throw Error("Invalid response version");
                            u(!1)
                        } catch (r) {
                            if (r instanceof DOMException && "AbortError" === r.name) return;
                            a(773352).log({
                                level: "error",
                                from: "useAIDailyUsage",
                                type: "fetchDailyUsageFailed",
                                data: {
                                    miscDataToConvertToString: {
                                        error: r,
                                        spaceId: e,
                                        servicePeriodStart: n().DateTime.fromMillis(t).toISO(),
                                        servicePeriodEnd: n().DateTime.fromMillis(i).toISO(),
                                        userId: o.currentUser.id
                                    }
                                }
                            }), u(!1)
                        }
                    }, [o, e, t, i]);
                return (0, r.useEffect)(() => (g(), () => {
                    var e;
                    null == (e = p.current) || e.abort()
                }), [g]), {
                    data: l,
                    isLoading: c
                }
            }
        },
        324533: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                paperPlaneSmallIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.53 2.17 12.34 12.33",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M13.308 2.179a.6.6 0 0 0-.294.038L1.934 6.505a.625.625 0 0 0-.074 1.132l4.231 2.312 2.313 4.23a.625.625 0 0 0 1.13-.073l4.289-11.08a.625.625 0 0 0-.21-.727m-.041-.029a.6.6 0 0 0-.264-.091zM3.64 7.185l7.064-2.734L6.44 8.715zM7.325 9.6l4.264-4.264L8.855 12.4z"
                    })
                },
                r = (0, a(104509).wt)("paperPlaneSmall", n, "small")
        },
        390015: (e, t, a) => {
            a.d(t, {
                q: () => n
            });
            let n = a(546605).Store.createValue({
                open: !1
            }, {
                name: "AiUsageCheckoutModalStore"
            })
        },
        439203: (e, t, a) => {
            a.d(t, {
                G: () => n
            });
            async function n(e) {
                let {
                    environment: t,
                    workflowStore: n
                } = e, r = n.getPublishedArtifactStore();
                if (r) return (0, a(744160).a)({
                    environment: t,
                    workflowStore: n,
                    workflowArtifactStore: r,
                    publish: !1
                })
            }
        },
        455852: (e, t, a) => {
            a.d(t, {
                A: () => c,
                k: () => i
            }), a(898992), a(354520), a(803949), a(581454);
            var n = a(296540),
                r = a(474848);
            let i = 9999999,
                o = {
                    overflowWrap: {
                        overflowWrap: "break-word"
                    },
                    iconContainer: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 10,
                        fill: a(632079).Tj.icon.secondary
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function s({
                items: e,
                selectType: t,
                selectAlignXAxis: n,
                selectedKeys: i,
                setSelectedKeys: o
            }) {
                let l = e.map((a, s) => {
                    let l = a.key;
                    return (0, r.jsx)(d, {
                        text: a.text,
                        description: a.description,
                        selected: i[l] ? ? !1,
                        isBelowButtons: !!a.showBelowButtons,
                        isLastItem: s === e.length - 1,
                        onSelect: e => {
                            var n;
                            null == (n = a.onSelect) || n.call(a, e), "radio" === t ? o(e => {
                                let t = { ...e
                                };
                                return Object.keys(t).forEach(e => {
                                    t[e] = e === a.key
                                }), t
                            }) : o(t => ({ ...t,
                                [l]: e
                            }))
                        },
                        selectType: t,
                        selectAlignXAxis: n
                    }, l)
                });
                return (0, r.jsxs)(a(4458).VP, {
                    gap: "inherit",
                    children: [(0, r.jsx)(a(884877).A, {
                        size: 5
                    }), l]
                })
            }
            let l = {
                justifyContent: "center",
                border: "none"
            };

            function d({
                text: e,
                description: t,
                selected: i,
                onSelect: o,
                isBelowButtons: s,
                selectType: c = "checkbox",
                selectAlignXAxis: u,
                isLastItem: p
            }) {
                let g = (0, n.useCallback)(() => {
                    "radio" === c ? null == o || o(!0) : null == o || o(!i)
                }, [c, o, i]);
                return (0, r.jsx)(a(469738).a, {
                    label: e,
                    description: t,
                    isSelected: i,
                    value: "select_item",
                    width: s ? void 0 : "fill",
                    colorVariant: s ? "secondary" : "primary",
                    style: {
                        marginBottom: 12 * !p,
                        ...s ? l : {}
                    },
                    selectType: c,
                    selectAlignXAxis: u,
                    onChange: g
                })
            }
            let c = function() {
                let e = (0, n.useId)(),
                    t = (0, n.useId)(),
                    {
                        open: l,
                        innerStyle: d,
                        keepFocus: c,
                        mode: u,
                        message: p,
                        debugInfo: g,
                        description: m,
                        warningText: f,
                        items: y,
                        selectionItems: h,
                        showCancel: v,
                        showCloseButton: x,
                        renderDraftCommentIcon: C,
                        icon: b,
                        allowCopy: w,
                        selectType: j
                    } = (0, a(682985).K8)(() => {
                        let {
                            open: e,
                            innerStyle: t,
                            keepFocus: n,
                            mode: r,
                            message: i,
                            debugInfo: o,
                            description: s,
                            warningText: l,
                            items: d,
                            selectionItems: c,
                            showCancel: u,
                            showCloseButton: p,
                            shouldRenderDraftCommentIcon: g,
                            icon: m,
                            allowCopy: f,
                            selectType: y
                        } = a(107333).A.state;
                        return {
                            open: e,
                            innerStyle: t,
                            keepFocus: n,
                            mode: r,
                            message: i,
                            debugInfo: o,
                            description: s,
                            warningText: l,
                            items: d,
                            selectionItems: c,
                            showCancel: u,
                            showCloseButton: p,
                            renderDraftCommentIcon: g,
                            icon: m,
                            allowCopy: f,
                            selectType: y
                        }
                    }, []),
                    k = (0, n.useCallback)(() => {
                        a(647095).zw();
                        let {
                            handleCancel: e
                        } = a(107333).A.state;
                        return e && e(), !1
                    }, []),
                    A = (0, n.useCallback)(() => {
                        let {
                            requiresUserAction: e
                        } = a(107333).A.state;
                        e || k()
                    }, [k]),
                    S = (0, a(83208).X)("update_dialog_styles"),
                    _ = (0, a(960253).I)(() => {
                        let e = {
                            width: "100%",
                            ...!S && {
                                marginTop: 8
                            }
                        };
                        return {
                            plainButton: { ...e,
                                marginBottom: "-12px",
                                justifyContent: "center",
                                borderRadius: 6
                            },
                            warningContainer: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            },
                            warningText: {
                                width: "100%",
                                textAlign: "center"
                            },
                            button: { ...e,
                                borderRadius: 6
                            },
                            description: {
                                color: a(632079).Tj.text.secondary,
                                ...!S && {
                                    paddingTop: 6,
                                    paddingBottom: 6
                                },
                                textWrap: "pretty"
                            },
                            debugMessage: {
                                paddingTop: 10,
                                fontSize: 12,
                                color: a(632079).Tj.text.tertiary,
                                textAlign: m ? "unset" : "center"
                            },
                            modal: {
                                overflow: "hidden",
                                width: "wide" === u ? 406 : 324,
                                marginInlineStart: 24,
                                marginInlineEnd: 24,
                                padding: 20,
                                boxShadow: a(632079).Tj.shadow.outline.scrim,
                                background: a(632079).Tj.background.elevated,
                                borderRadius: 12,
                                fontSize: 16,
                                alignItems: "center",
                                ...d
                            },
                            message: {
                                textAlign: m ? "unset" : "center",
                                fontWeight: a(699422).Wy.semibold,
                                textWrap: "pretty"
                            },
                            buttonContainer: {
                                display: "flex",
                                flexDirection: "column",
                                ...S ? {
                                    padding: 0,
                                    gap: 8
                                } : {
                                    padding: 0,
                                    gap: 1
                                }
                            }
                        }
                    }, [m, d, u, S]),
                    [D, M] = (0, n.useState)({});
                (0, n.useEffect)(() => {
                    let e = {};
                    null == h || h.forEach(t => {
                        e[t.key] = t.preSelected ? ? !1
                    }), M(e)
                }, [h]);
                let T = (0, n.useCallback)(() => {
                    let n;

                    function i(e, t) {
                        let n = () => {
                                var t;
                                null == (t = e.onClick) || t.call(e), e.onAccept && (e.onAccept(h ? D : void 0), a(647095).zw())
                            },
                            i = 0 === t;
                        return "plain" === e.buttonType ? (0, r.jsx)(a(988022).p, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: i,
                            colorPalette: e.color,
                            style: _.plainButton,
                            className: e.className,
                            onClick: n,
                            children: e.label || "Label"
                        }, t) : "solid" === e.buttonType ? "gray" === e.color ? (0, r.jsx)(a(265779).E, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: i,
                            style: _.button,
                            className: e.className,
                            onClick: n,
                            children: e.label || "Label"
                        }, t) : (0, r.jsx)(a(912946).A, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: i,
                            style: _.button,
                            className: e.className,
                            colorPalette: "red" === e.color ? "red" : "blue",
                            onClick: n,
                            children: e.label || "Label"
                        }, t) : (0, r.jsx)(a(548436).A, {
                            size: e.isSmall ? "sm" : "lg",
                            ariaLabel: e.ariaLabel,
                            style: _.button,
                            colorPalette: "red" === e.color ? "red" : "blue" === e.color ? "blue" : void 0,
                            className: e.className,
                            onClick: n,
                            autoFocus: i,
                            children: e.label || "Label"
                        }, t)
                    }
                    let l = f && y.length > 0 ? [i(y[0], 0), (0, r.jsx)("div", {
                            style: _.warningContainer,
                            children: "string" == typeof f || "number" == typeof f ? (0, r.jsx)(a(111010).D, {
                                styleKey: "captionSmRegular",
                                colorVariant: "tertiary",
                                style: _.warningText,
                                children: f
                            }) : f
                        }, "dialog-warning-text"), ...y.slice(1).map((e, t) => i(e, t + 1))] : y.map((e, t) => i(e, t)),
                        d = (0, r.jsxs)("div", {
                            style: _.buttonContainer,
                            children: [l, v ? (0, r.jsx)(a(548436).A, {
                                size: "lg",
                                style: _.button,
                                onClick: k,
                                children: (0, r.jsx)(a(109939).sA, {
                                    id: "genericDialogModal.cancelButton.label",
                                    defaultMessage: "Cancel"
                                })
                            }) : void 0]
                        }),
                        c = (null == h ? void 0 : h.filter(e => !e.showBelowButtons)) ? ? [],
                        u = c.length > 0 ? (0, r.jsx)(s, {
                            items: c,
                            selectType: j,
                            selectedKeys: D,
                            selectAlignXAxis: "right",
                            setSelectedKeys: M
                        }) : void 0,
                        T = (null == h ? void 0 : h.filter(e => e.showBelowButtons)) ? ? [],
                        I = T.length > 0 ? (0, r.jsx)(s, {
                            items: T,
                            selectType: j,
                            selectedKeys: D,
                            selectAlignXAxis: "right",
                            setSelectedKeys: M
                        }) : void 0;
                    return g && (null != g && g.messagePrefix ? n = `${g.messagePrefix}: ${g.message}` : a(986939).A.isAdminMode && (n = (0, r.jsx)(a(109939).sA, {
                        id: "dialogRenderer.debugMessage.messagePrefix",
                        defaultMessage: "Debug message: {message}",
                        values: {
                            message: g.message
                        }
                    }))), (0, r.jsx)(a(310335).A, {
                        capture: !0,
                        preventType: a(644154).A.All,
                        children: (0, r.jsxs)("div", {
                            style: o.overflowWrap,
                            children: [x ? (0, r.jsx)(a(855353).A, {
                                onClick: A
                            }) : void 0, C ? (0, r.jsx)(a(59557).j, {}) : void 0, b ? (0, r.jsx)("div", {
                                style: o.iconContainer,
                                children: b
                            }) : void 0, w ? (0, r.jsx)(a(281023).k, {
                                enable: !0,
                                shortcuts: {
                                    copy: a(763230).D_
                                },
                                debugName: "DialogRenderer.allowCopy"
                            }) : void 0, S ? (0, r.jsxs)(a(4458).VP, {
                                gap: 24,
                                className: "autolayout-fill-width",
                                style: o.positionRelative,
                                children: [p ? (0, r.jsx)("div", {
                                    style: _.message,
                                    id: e,
                                    children: p
                                }) : void 0, n ? (0, r.jsx)("div", {
                                    style: _.debugMessage,
                                    children: n
                                }) : void 0, m ? (0, r.jsx)("div", {
                                    style: _.description,
                                    id: t,
                                    children: m
                                }) : void 0, u ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(a(884877).A, {
                                        size: 20
                                    }), u, (0, r.jsx)(a(884877).A, {
                                        size: 8
                                    })]
                                }) : void 0, d, I || void 0]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [p ? (0, r.jsx)("div", {
                                    style: _.message,
                                    id: e,
                                    children: p
                                }) : void 0, n ? (0, r.jsx)("div", {
                                    style: _.debugMessage,
                                    children: n
                                }) : void 0, m ? (0, r.jsx)("div", {
                                    style: _.description,
                                    id: t,
                                    children: m
                                }) : void 0, u ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(a(884877).A, {
                                        size: 20
                                    }), u, (0, r.jsx)(a(884877).A, {
                                        size: 8
                                    })]
                                }) : void 0, d, I ? (0, r.jsx)(r.Fragment, {
                                    children: I
                                }) : void 0]
                            })]
                        })
                    })
                }, [y, v, h, j, D, g, _.message, _.debugMessage, _.description, _.button, _.plainButton, _.buttonContainer, _.warningContainer, _.warningText, x, A, C, b, w, p, f, e, m, t, k, S]);
                return (0, r.jsx)(a(556809).a, {
                    ariaLabelledBy: e,
                    ariaDescribedBy: t,
                    open: l,
                    keepFocus: c,
                    overlayZIndex: i,
                    onDismiss: A,
                    preventHideChildrenWhileOpening: !0,
                    innerStyle: _.modal,
                    children: T()
                })
            }
        },
        505518: (e, t, a) => {
            a.d(t, {
                x: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M5.61218 4.0799C4.73322 4.18671 4.02924 4.93207 3.97064 5.81104L3.96588 5.9032L3.96729 15.342L3.10266 15.3953H3.06824C2.85229 15.3841 2.65259 15.2995 2.49689 15.1501C2.32245 14.9828 2.22455 14.7541 2.21741 14.5035C2.21741 14.4936 2.21606 14.4837 2.21606 14.4731V4.13733C2.21606 3.25684 2.90002 2.52771 3.77881 2.47156L13.9657 1.82074C13.9833 1.81946 14.0008 1.81873 14.0183 1.81873C14.2174 1.81873 14.4028 1.89215 14.5449 2.02765C14.6442 2.12225 14.7142 2.24054 14.7517 2.37207C14.7679 2.42828 14.7777 2.48712 14.7816 2.5473L14.7817 3.49023L5.64923 4.07343L5.61218 4.0799ZM17.784 16.7507C17.784 16.7665 17.7827 16.7824 17.7814 16.7983C17.7587 17.1375 17.4935 17.4362 17.1673 17.4976C17.1608 17.4976 17.1543 17.4996 17.1478 17.4996L6.10248 18.1812H6.06805C5.85211 18.17 5.6524 18.0854 5.49677 17.936C5.32233 17.7687 5.22437 17.54 5.21722 17.2894C5.21722 17.2795 5.21588 17.2696 5.21588 17.259V6.07227C5.21588 6.05646 5.21588 6.0412 5.21722 6.02533C5.24121 5.66638 5.53564 5.35303 5.88715 5.31604C5.89624 5.31604 5.90533 5.31335 5.91443 5.31268L16.9655 4.60663C16.9831 4.60535 17.0006 4.60468 17.0181 4.60468C17.2172 4.60468 17.4026 4.67804 17.5447 4.8136C17.644 4.90814 17.714 5.02643 17.7516 5.15802C17.7678 5.21417 17.7775 5.27301 17.7814 5.33319L17.784 16.7507ZM16.5358 8.02374C16.5358 7.7887 16.3475 7.61896 16.1176 7.63098L6.90546 8.19415C6.67493 8.20618 6.46613 8.37146 6.46613 8.62994V16.1628C6.45618 16.6468 6.77686 16.7722 7.1391 16.7462L16.0001 16.2205L16.002 16.2199C16.468 16.2015 16.5358 15.8461 16.5358 15.57V8.02374ZM10.8688 10.1928C10.0123 10.4406 9.82344 10.0635 9.91725 9.66956C10.4309 9.54925 11.7667 9.1481 12.272 8.96645L12.278 14.2527L13.212 14.3886C13.212 14.7327 13.0154 14.948 12.6647 14.9702C12.3736 14.9883 11.697 15.0129 11.3716 15.0333C10.8664 15.0646 9.9413 15.1398 9.9413 15.1398C9.91544 15.0706 9.90705 15.0009 9.90705 14.9389C9.90705 14.7711 9.975 14.5991 10.1975 14.5239L10.8742 14.305L10.8688 10.1928Z"
                    })
                },
                r = (0, a(104509).wt)("calendarDate01", n, "default")
        },
        855353: (e, t, a) => {
            a.d(t, {
                A: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                button: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "transparent"
                },
                buttonHovered: {
                    background: a(632079).Tj.buttonHoveredBackground
                },
                icon: {
                    width: a(104509).Ev.xs,
                    height: a(104509).Ev.xs
                }
            };

            function i(e) {
                let {
                    top: t,
                    right: i,
                    onClick: o,
                    ariaLabel: s,
                    tooltipEvents: l
                } = e, d = (0, a(109939).tz)(), c = (0, a(960253).I)(() => ({
                    buttonBackground: {
                        position: "absolute",
                        top: t ? ? 12,
                        insetInlineEnd: i ? ? 12,
                        width: 22,
                        height: 22,
                        borderRadius: "100%",
                        background: a(632079).Tj.background.elevated
                    }
                }), [t, i]);
                return (0, n.jsx)("div", {
                    style: c.buttonBackground,
                    children: (0, n.jsx)(a(374533).A, {
                        ariaLabel: s ? ? d.formatMessage({
                            id: "closeButton.ariaLabel",
                            defaultMessage: "Close"
                        }),
                        style: r.button,
                        hoveredStyle: r.buttonHovered,
                        onClick: o,
                        icon: a(519529).xMarkFillSmallIcon,
                        iconStyle: r.icon,
                        ...l
                    })
                })
            }
        },
        938020: (e, t, a) => {
            a.d(t, {
                E4: () => d,
                QX: () => c,
                i3: () => s,
                u5: () => r,
                xS: () => o,
                xf: () => i
            }), a(944114), a(898992), a(354520), a(672577);
            var n = () => a(593186);

            function r(e) {
                return e.includes(",") || e.includes('"') || e.includes("\n") ? `"${e.replace(/"/g,'""')}"` : e
            }

            function i(e) {
                return e ? new Date(e).toISOString().slice(0, 10) : ""
            }

            function o(e, t, n = !1) {
                var r;
                if ((0, a(28299).bf)(e, t)) return "Deleted";
                let i = e.getDataStore().getValue(),
                    s = (null == i ? void 0 : i.status) === "paused" && (0, a(425749).cE)(null == i || null == (r = i.paused_reason) ? void 0 : r.reason);
                return (n ? s : s || !(0, a(28299).Wc)(e)) ? "Disabled" : "Active"
            }

            function s(e) {
                let t = e.getPermissionItems();
                if (t.find(e => "space_permission" === e.type && "none" !== e.role)) return "All workspace members";
                let n = t.filter(e => (0, a(642157).B2)(e) && "none" !== e.role).length,
                    r = t.filter(e => (0, a(642157).Ds)(e) && "none" !== e.role).length,
                    i = [];
                return n > 0 && i.push(`${n} user${1!==n?"s":""}`), r > 0 && i.push(`${r} group${1!==r?"s":""}`), i.length > 0 ? i.join(", ") : "Nobody"
            }
            let l = (0, a(109939).YK)({
                defaultModel: {
                    id: "adminContentSearchTab.agentsTable.model.default",
                    defaultMessage: "Auto"
                }
            });

            function d(e, t) {
                if (!e) return t ? t.formatMessage(l.defaultModel) : "Auto";
                let n = a(215389).U_.get(e);
                return (null == n ? void 0 : n.displayName) ? ? e
            }

            function c(e, t) {
                if (!e || !Array.isArray(e)) return "—";
                let r = e.find(e => "notion" === e.type),
                    i = !!r && (0, a(445568).isWebAccessEnabled)(r.permissions),
                    o = e.filter(e => "notion" !== e.type),
                    s = [];
                for (let e of (i && s.push("Web access"), o)) {
                    let a = n().Nh[e.type];
                    a && s.push(a.getName(t))
                }
                return s.length > 0 ? s.join(", ") : "—"
            }
        }
    }
]);