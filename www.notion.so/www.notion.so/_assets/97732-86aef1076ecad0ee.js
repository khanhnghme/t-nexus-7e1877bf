"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [97732], {
        14214: (e, t, s) => {
            s.d(t, {
                Rr: () => a,
                Wz: () => o
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    connectionConflictSpaceId: void 0,
                    externalSourceName: void 0,
                    isLoaded: !1
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("googleCalendarAIConnectorStore", o)
        },
        32913: (e, t, s) => {
            s.d(t, {
                QO: () => a,
                Rh: () => o
            });
            var n = () => s(546605);

            function a() {
                return {
                    inProgress: !1,
                    isPublicSync: !1,
                    isPrivateSync: !1,
                    isPrivateAuth: !1,
                    selection: {
                        allSelected: !0,
                        selectedChannels: [],
                        excludedChannels: [],
                        joinFutureChannels: !0,
                        selectedFeature: void 0
                    },
                    isSyncCompleted: !1,
                    currentScreen: "none",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    authUrl: void 0,
                    canQuery: !0,
                    connectedApps: void 0,
                    noChannelsSelected: void 0,
                    ingestionProgress: void 0,
                    gridSetupUrl: void 0,
                    isSlackGridAiConnectorEnabled: !1,
                    isLoaded: !1,
                    externalSourceName: void 0,
                    forceShowAuthNotificationTriggeredAt: void 0,
                    connectionVersion: void 0,
                    errorCode: void 0,
                    thirdPartyId: void 0
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
                isSlackUserConnectionCompleted() {
                    var e;
                    return (null == (e = this.state.connectedApps) ? void 0 : e.includes("slack")) ? ? !1
                }
                isSlackV2AdminConnectionCompleted() {
                    var e;
                    return ((null == (e = this.state.connectedApps) ? void 0 : e.includes("slack-admin")) && this.state.isSyncCompleted && 2 === this.state.connectionVersion) ? ? !1
                }
                showUserConnectionNotification() {
                    return this.isSlackV2AdminConnectionCompleted() && !this.isSlackUserConnectionCompleted() && !this.state.isPrivateSync && !this.state.isSlackGridAiConnectorEnabled
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("slackUniversalQnAConnectionStore", o)
        },
        40393: (e, t, s) => {
            s.d(t, {
                Wh: () => o,
                ZC: () => r,
                jx: () => i
            });
            var n = () => s(975162),
                a = () => s(722371);
            let r = new(s(245541)).R({
                key: "use_mock_connector_status",
                namespace: s(274919).cd,
                important: !1,
                trackingType: "preference"
            });

            function o(e, t, n) {
                let a = s(728372).AppStoreSidebarSpaceViewStore.state;
                if (a) {
                    let t = a.pointer.spaceId;
                    (0, s(377796).createAndCommit)({
                        userAction: "mockConnectorStatusActions.setDebuggingConnectorStatus",
                        environment: e,
                        cellTarget: t ? {
                            spaceWithId: t
                        } : void 0,
                        canUndo: !1,
                        perform: e => {
                            a && (0, s(421439).y4)({
                                store: a,
                                operation: {
                                    pointer: a.pointer,
                                    path: ["settings"],
                                    command: "update",
                                    args: { ...a.getSettings(),
                                        dismissed_slack_personal_auth_prompt: !1
                                    }
                                },
                                transaction: e
                            })
                        }
                    })
                }(0, s(600923).K)(t).setDebuggingStatus(n)
            }
            async function i(e, t = 2500) {
                for (let r of Object.values(s(281708).fl))
                    if ((0, a().O)(d, r))
                        for (let s of Object.keys(d[r])) console.log("Setting mock connector status for", r, s), o(e, r, s), await (0, n().wR)(t)
            }
            let c = (0, s(32913).QO)(),
                l = {
                    not_connected: c,
                    no_channels_selected: { ...c,
                        noChannelsSelected: !0
                    },
                    cant_query_connection: { ...c,
                        canQuery: !1,
                        isSyncCompleted: !0
                    },
                    in_progress: { ...c,
                        inProgress: !0,
                        isSyncCompleted: !1,
                        ingestionProgress: 50
                    },
                    disconnecting: { ...c,
                        isSyncCompleted: !0,
                        inProgress: !1,
                        connectedApps: ["slack-admin"],
                        isDisconnecting: !0
                    },
                    connected: { ...c,
                        isSyncCompleted: !0,
                        inProgress: !1,
                        connectedApps: ["slack-admin"]
                    }
                },
                u = (0, s(456925).Gq)(),
                d = {
                    slack: l,
                    "microsoft-teams": {
                        not_started: u,
                        in_progress: { ...u,
                            connectionStatus: "in_progress",
                            syncProgressPercentage: 50
                        },
                        disconnecting: { ...u,
                            connectionStatus: "completed",
                            isDisconnecting: !0
                        },
                        connected: { ...u,
                            connectionStatus: "completed"
                        }
                    }
                }
        },
        56224: (e, t, s) => {
            s.d(t, {
                CN: () => v,
                D0: () => f,
                D5: () => M,
                Dt: () => d,
                GL: () => p,
                HI: () => c,
                I9: () => u,
                JQ: () => h,
                JW: () => x,
                PC: () => m,
                RO: () => P,
                Rb: () => A,
                SK: () => _,
                UK: () => k,
                VY: () => o,
                Wl: () => n,
                YU: () => C,
                Yp: () => S,
                _x: () => b,
                bg: () => l,
                fn: () => T,
                hw: () => a,
                i8: () => E,
                io: () => r,
                kq: () => i,
                q_: () => F,
                tG: () => g,
                xS: () => I,
                y3: () => w,
                zn: () => D
            });
            let n = ["greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "equal", "not_equal"],
                a = ["Solid", "Dash"],
                r = 10,
                o = ["gray", "blue", "yellow", "green", "purple", "teal", "orange", "pink", "red"],
                i = ["auto", "colorful"],
                c = [...o, ...i],
                l = {
                    small: "small",
                    medium: "medium",
                    large: "large",
                    extra_large: "extra_large"
                };

            function u(e) {
                switch (e) {
                    case l.small:
                        return 150;
                    case l.medium:
                        return 250;
                    case l.large:
                        return 300;
                    case l.extra_large:
                        return 400;
                    default:
                        (0, s(722371).HB)(e)
                }
            }
            let d = {
                    off: "off",
                    bottom: "bottom",
                    side: "side"
                },
                p = {
                    avatar: "avatar",
                    avatar_name: "avatar_name",
                    name: "name"
                },
                g = {
                    none: "none",
                    x_axis: "x_axis",
                    y_axis: "y_axis",
                    both: "both"
                },
                h = {
                    none: "none",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    both: "both"
                },
                m = {
                    normal: "normal",
                    percent: "percent",
                    side_by_side: "side_by_side"
                },
                f = {
                    none: "none",
                    value: "value",
                    name: "name",
                    name_and_value: "name_and_value"
                };

            function y(e) {
                return !!e && s(910675).BI.includes(e)
            }

            function S(e) {
                let t = (0, s(345091).getFormulaPropertySchemaBaseResultType)(e);
                return "text" === t || "number" === t || "checkbox" === t || "person" === t || "date" === t
            }

            function C(e, t) {
                var n, a, r;
                let o, i = e.chartFormat;
                if ("groups_reducer" === e.dataConfig.type) {
                    let {
                        chartFormat: n,
                        chartGroupByFormat: a
                    } = function(e, t, n, a) {
                        let r = (0, s(561872)._g)({
                            schema: a,
                            property: e.property
                        });
                        if (r && "donut" === n && (0, s(34969).e0)(r)) {
                            let n = (0, s(910675).MP)(e);
                            return {
                                chartFormat: { ...t,
                                    mainSort: s(34969).S0.yDescending
                                },
                                chartGroupByFormat: n
                            }
                        }
                        return {
                            chartFormat: t,
                            chartGroupByFormat: e
                        }
                    }(null == e || null == (r = e.dataConfig) ? void 0 : r.groupBy, null == e ? void 0 : e.chartFormat, "donut", t);
                    i = n, o = { ...e.dataConfig,
                        groupBy: a,
                        aggregationConfig: {
                            aggregation: e.dataConfig.aggregationConfig.aggregation
                        }
                    }
                } else "results_reducer" === e.dataConfig.type ? (o = e.dataConfig, i = { ...i,
                    mainSort: s(34969).S0.yDescending
                }) : (0, s(722371).HB)(e.dataConfig);
                F(e) && i && ((null == (n = i) ? void 0 : n.donutDataLabels) === void 0 || (null == (a = i) ? void 0 : a.donutDataLabels) === f.none) ? i.donutDataLabels = f.value : !F(e) && i && (i.donutDataLabels = f.none);
                let c = { ...e,
                    type: "donut",
                    dataConfig: o
                };
                return i && (c.chartFormat = i), c
            }

            function b(e, t) {
                let n;
                "groups_reducer" === e.dataConfig.type ? n = { ...e.dataConfig,
                    aggregationConfig: { ...e.dataConfig.aggregationConfig,
                        seriesFormat: {
                            displayType: t
                        },
                        stackOptions: void 0
                    }
                } : "results_reducer" === e.dataConfig.type ? n = { ...e.dataConfig,
                    valueSeriesFormat: {
                        displayType: t
                    }
                } : (0, s(722371).HB)(e.dataConfig);
                let a = e.chartFormat;
                return a && a.donutDataLabels && a.donutDataLabels !== f.none ? a.axisShowDataLabels = !0 : a && (a.donutDataLabels === f.none || void 0 === a.donutDataLabels) && (a.axisShowDataLabels = !1), { ...e,
                    type: t,
                    dataConfig: n
                }
            }

            function _(e, t) {
                let n;
                if ("groups_reducer" === e.dataConfig.type) {
                    var a;
                    let s = null == e || null == (a = e.dataConfig) ? void 0 : a.groupBy;
                    n = { ...e.dataConfig,
                        groupBy: s,
                        aggregationConfig: { ...e.dataConfig.aggregationConfig,
                            seriesFormat: {
                                displayType: t
                            }
                        }
                    }
                } else "results_reducer" === e.dataConfig.type ? n = { ...e.dataConfig,
                    valueSeriesFormat: {
                        displayType: t
                    }
                } : (0, s(722371).HB)(e.dataConfig);
                return { ...e,
                    type: t,
                    dataConfig: n
                }
            }
            let A = {
                main: s(34969).S0.xAscending,
                stacked: s(34969).S0.manual
            };

            function v({
                chartConfig: e,
                xAxisPropertyId: t,
                newDataConfigType: n,
                groupBy: a,
                aggregation: r,
                valueProperty: o
            }) {
                let i = "groups_reducer" === e.dataConfig.type ? e.dataConfig.aggregationConfig.seriesFormat : e.dataConfig.valueSeriesFormat;
                "groups_reducer" === n ? e.dataConfig = {
                    type: "groups_reducer",
                    groupBy: a,
                    aggregationConfig: {
                        aggregation: r,
                        seriesFormat: i,
                        stackOptions: "groups_reducer" === e.dataConfig.type ? e.dataConfig.aggregationConfig.stackOptions : void 0
                    }
                } : "results_reducer" === n ? e.dataConfig = {
                    type: "results_reducer",
                    nameProperty: t,
                    valueProperty: o,
                    valueSeriesFormat: i
                } : (0, s(722371).HB)(n);
                let c = "formula" === a.type ? a.groupBy.sort : a.sort;
                return e.chartFormat = { ...e.chartFormat,
                    mainSort: (0, s(34969).gN)(c)
                }, e
            }

            function I({
                property: e,
                propertySchema: t,
                groupByOption: n,
                hideEmptyGroups: a
            }) {
                let r = t.type;
                if ((0, s(910675).Eg)(t)) {
                    if ((0, s(910675)._o)(r)) {
                        if (n && y(n)) return {
                            type: r,
                            property: e,
                            groupBy: n,
                            sort: {
                                type: "ascending"
                            }
                        }
                    } else if ((0, s(910675).KI)(r) || "select" === r || "multi_select" === r) return {
                        type: r,
                        property: e,
                        sort: {
                            type: "ascending"
                        }
                    };
                    else if ((0, s(910675).iF)(r)) {
                        if (n && n && s(910675).PC.includes(n)) return {
                            type: r,
                            property: e,
                            groupBy: n,
                            sort: {
                                type: "ascending"
                            }
                        }
                    } else if ("number" === r) return {
                        type: r,
                        property: e,
                        groupBy: {
                            type: "unique"
                        },
                        start: -1,
                        end: -1,
                        size: -1,
                        sort: {
                            type: "ascending"
                        }
                    };
                    else if ("formula" === r) {
                        let a = (0, s(345091).getFormulaPropertySchemaResultType)(t);
                        if ("number" === a) return {
                            type: "formula",
                            property: e,
                            groupBy: {
                                type: "number",
                                groupBy: {
                                    type: "unique"
                                },
                                start: -1,
                                end: -1,
                                size: -1,
                                sort: {
                                    type: "ascending"
                                }
                            }
                        };
                        if ("date" === a && y(n)) return {
                            type: "formula",
                            property: e,
                            groupBy: {
                                type: "date",
                                groupBy: n,
                                sort: {
                                    type: "ascending"
                                }
                            }
                        }
                    } else if ("person" === r) return {
                        type: r,
                        property: e,
                        sort: {
                            type: "manual"
                        }
                    };
                    return (0, s(910675).V0)({
                        property: e,
                        propertySchema: t,
                        hideEmptyGroups: a
                    })
                }
            }

            function w(e) {
                return "status" === e.type
            }

            function P(e) {
                let t = "formula" === e.type ? (0, s(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return "checkbox" === e.type || "checkbox" === t
            }

            function x(e) {
                let t = "formula" === e.type ? (0, s(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return (0, s(728722).A)(e) || "number" === t
            }

            function D(e) {
                let t = "formula" === e.type ? (0, s(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return (0, s(910675)._o)(e.type) || "date" === t
            }

            function T(e) {
                let t = "formula" === e.type ? (0, s(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return (0, s(568249).J)(e) || "person" === t
            }

            function E(e) {
                if ("formula" === e.type) {
                    let t = (0, s(345091).getFormulaPropertySchemaResultType)(e);
                    return (0, s(910675)._o)(t)
                }
                return (0, s(910675)._o)(e.type)
            }

            function k(e) {
                return "text" === e || "number" === e || "person" === e || "date" === e
            }

            function M(e) {
                if (e && (0, s(828660).m8)(e)) {
                    var t;
                    return "groups_reducer" !== e.dataConfig.type || !e.dataConfig.aggregationConfig.stackOptions || (null == (t = e.chartFormat) ? void 0 : t.axisGroupStyle) !== "percent"
                }
                return !1
            }

            function F(e) {
                if (!M(e)) return !1;
                if (e && (0, s(828660).m8)(e)) {
                    var t, n;
                    return (null == (t = e.chartFormat) ? void 0 : t.axisShowDataLabels) === void 0 || (null == (n = e.chartFormat) ? void 0 : n.axisShowDataLabels)
                }
                return !1
            }
        },
        107297: (e, t, s) => {
            function n() {
                let e = s(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e) {
                    var t;
                    return null == (t = (0, s(891711).GN)(e)) || null == (t = t.getSiteStore()) ? void 0 : t.id
                }
                return ""
            }

            function a() {
                var e;
                let t = s(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (t && null != (e = (0, s(891711).GN)(t)) && null != (e = e.getSiteStore()) && null != (e = e.getSettings()) && e.enableQna) return t.getSpaceStore()
            }
            s.d(t, {
                g: () => n,
                n: () => a
            })
        },
        158423: (e, t, s) => {
            s.d(t, {
                MX: () => o,
                vh: () => a
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    authUrl: void 0,
                    isConnected: !1,
                    isSyncComplete: !1,
                    isLoaded: !1,
                    externalSourceName: void 0,
                    ingestionProgress: 0
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("boxAiConnectorStore", o)
        },
        166672: (e, t, s) => {
            function n(e, t) {
                let {
                    phase: n,
                    transactionUserAction: a,
                    userSettingsStore: r
                } = t;
                (0, s(377796).createAndCommit)({
                    environment: e,
                    cellTarget: "main",
                    userAction: a,
                    canUndo: !0,
                    perform: e => {
                        (0, s(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                ai_qna_intro_onboarding_phase: n
                            }
                        })
                    }
                })
            }

            function a(e, t) {
                let {
                    phase: n,
                    transactionUserAction: a,
                    userSettingsStore: r
                } = t;
                (0, s(377796).createAndCommit)({
                    environment: e,
                    cellTarget: "main",
                    userAction: a,
                    canUndo: !0,
                    perform: e => {
                        (0, s(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                ai_assistant_onboarding_phase: n,
                                ai_assistant_onboarding_phase_last_set_at: Date.now()
                            }
                        })
                    }
                })
            }

            function r(e, t) {
                let {
                    userSettingsStore: n
                } = t;
                (0, s(377796).createAndCommit)({
                    environment: e,
                    cellTarget: "main",
                    userAction: "aiQnaActions.setLastExposedToQnaAtToCurrentTimestamp",
                    canUndo: !1,
                    perform: e => {
                        (0, s(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                last_exposed_to_ai_qna_at: Date.now()
                            }
                        })
                    }
                })
            }

            function o(e, t) {
                let {
                    userSettingsStore: n
                } = t;
                (0, s(377796).createAndCommit)({
                    environment: e,
                    cellTarget: "main",
                    userAction: "aiQnaActions.setLastUsedAIWriterAtToCurrentTimestamp",
                    canUndo: !0,
                    perform: e => {
                        (0, s(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                last_used_ai_writer_at: Date.now()
                            }
                        })
                    }
                })
            }

            function i(e) {
                let {
                    screenToShow: t,
                    analyticsFrom: n
                } = e, a = e.sessionId ? ? s(92513).JW();
                s(454752).d.setState({ ...s(454752).d.state,
                    analyticsFrom: n,
                    sessionId: a,
                    currentScreen: t
                })
            }

            function c(e) {
                let {
                    analyticsFrom: t,
                    screenToShow: n
                } = e, a = e.sessionId ? ? s(92513).JW();
                s(329488).yg.setState({ ...s(329488).yg.state,
                    analyticsFrom: t,
                    currentScreen: n,
                    sessionId: a
                })
            }

            function l(e) {
                let {
                    currentScreen: t,
                    analyticsFrom: n,
                    sessionId: a
                } = e;
                s(456925).F0.setState({ ...s(456925).F0.state,
                    currentScreen: t,
                    analyticsFrom: n ? ? s(456925).F0.state.analyticsFrom,
                    sessionId: a ? ? s(456925).F0.state.sessionId
                })
            }

            function u(e) {
                let {
                    connector: t,
                    ...n
                } = e;
                if ("jira" === t && s(886556).z.isJiraOldAiConnectorEnabled() && s(329488).yg.isOldJiraConnected()) return void s(329488).yg.setState({ ...s(329488).yg.state,
                    ...n,
                    currentScreen: "settings"
                });
                if ("sharepoint" === t) return void s(443709).EF.setState({ ...s(443709).EF.state,
                    ...n,
                    currentScreen: "settings"
                });
                let a = s(399077).NT[t];
                a.setState({ ...a.state,
                    ...n,
                    currentScreen: "settings"
                })
            }

            function d(e) {
                let {
                    connector: t,
                    ...n
                } = e;
                if ("google-drive" === t) {
                    let e = s(454752).d.state.initialSyncState;
                    if ("pending_selection" === e) return void i({ ...n,
                        screenToShow: "connection_complete_screen"
                    });
                    ("not_started" === e || "none" === e) && i({ ...n,
                        screenToShow: "introduction"
                    })
                } else if ("microsoft-teams" === t)["not_started", "pending_selection"].includes(s(456925).F0.state.connectionStatus) && l({ ...n,
                    currentScreen: "not_started" === s(456925).F0.state.connectionStatus ? "introduction" : "connection_complete_screen"
                });
                else {
                    let e = s(399077).NT[t];
                    e.setState({ ...e.state,
                        ...n,
                        currentScreen: "introduction"
                    })
                }
            }

            function p(e) {
                "jira" === e && s(886556).z.isJiraOldAiConnectorEnabled() && s(329488).yg.isOldJiraConnected() ? s(329488).yg.reset() : s(399077).NT[e].reset()
            }

            function g() {
                s(281708).fl.forEach(e => {
                    p(e)
                })
            }
            async function h(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, s(600923).K)("slack").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                })
            }
            async function m(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e;
                return h({
                    environment: t,
                    spaceId: s
                })
            }
            async function f(e) {
                return (0, s(600923).K)("github").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function y(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, s(600923).K)("gmail").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                })
            }
            async function S(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, s(600923).K)("google-drive").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                })
            }
            async function C(e) {
                return (0, s(600923).K)("google-calendar").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function b(e) {
                return (0, s(600923).K)("notion-mail").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function _(e) {
                return (0, s(600923).K)("notion-calendar").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function A(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e;
                return "success" !== (await t.api.callApi({
                    eventName: "addNotionInfoForJiraAIConnection",
                    environment: t,
                    data: {
                        spaceId: s
                    }
                })).type ? {
                    status: "failed"
                } : {
                    status: "success"
                }
            }
            async function v(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, s(600923).K)("linear").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                })
            }
            async function I(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, s(600923).K)("salesforce").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                })
            }
            async function w(e) {
                return (0, s(600923).K)("custom").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function P(e) {
                return (0, s(600923).K)("box").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function x(e) {
                return (0, s(600923).K)("confluence").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function D(e) {
                return T(e).then(e => e ? {
                    status: "success"
                } : {
                    status: "failed"
                })
            }
            async function T(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, a = await t.api.callCellCompatibleApi({
                    eventName: "getJiraAIConnectionStatus",
                    environment: t,
                    data: {
                        spaceId: n
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                });
                if ("success" === a.type) return s(329488).yg.setState({ ...s(329488).yg.state,
                    jiraSiteId: a.data.jiraSiteId ? ? "",
                    jiraSyncState: a.data.connectionState.status,
                    jiraSyncProgress: a.data.connectionState.percentageComplete,
                    jiraSiteUrl: a.data.jiraSiteUrl ? ? "",
                    isDisconnecting: "disconnecting" === a.data.connectionState.status,
                    isLoaded: !0,
                    missingUserAuth: "missing" === a.data.userAuth,
                    userConnected: "connected" === a.data.userAuth
                }), a.data
            }
            async function E(e) {
                return s(886556).z.isJiraOldAiConnectorEnabled() && await D(e), (0, s(600923).K)("jira").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function k(e) {
                let {
                    environment: t,
                    spaceId: n,
                    jiraSiteId: a
                } = e, r = await t.api.callApi({
                    eventName: "getSyncControlsForJiraConnector",
                    environment: t,
                    data: {
                        spaceId: n,
                        jiraSiteId: a
                    }
                });
                if ("success" === r.type) return s(329488).yg.setState({ ...s(329488).yg.state,
                    syncControl: r.data.syncControl
                }), r
            }
            async function M(e) {
                let {
                    environment: t,
                    spaceId: n,
                    jiraSiteId: a,
                    sessionId: r,
                    exclusionList: o,
                    inclusionList: i
                } = e, c = await t.api.callApi({
                    eventName: "startJiraBulkIngestion",
                    environment: t,
                    data: {
                        spaceId: n,
                        jiraSiteId: a,
                        sessionId: r,
                        exclusionList: o,
                        inclusionList: i
                    }
                });
                return "success" !== c.type ? void s(436555).D6({
                    label: s(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.sync.failed"
                    }),
                    position: "bottom"
                }) : (s(436555).D6({
                    label: s(962299).A.getIntl().formatMessage({
                        defaultMessage: "Jira sync started. This can take up to 36 hours.",
                        id: "jira.sync.started"
                    }),
                    position: "bottom"
                }), s(329488).yg.setState({ ...s(329488).yg.state,
                    jiraSyncState: "in_progress",
                    jiraSyncProgress: 1
                }), c)
            }
            async function F(e) {
                let {
                    environment: t,
                    spaceId: n,
                    jiraSiteId: a,
                    exclusionList: r,
                    inclusionList: o
                } = e, i = await t.api.callApi({
                    eventName: "startJiraEditBulkIngestion",
                    environment: t,
                    data: {
                        spaceId: n,
                        jiraSiteId: a,
                        inclusionList: o,
                        exclusionList: r
                    }
                });
                return "success" !== i.type ? void s(436555).D6({
                    label: s(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.edit.failed"
                    }),
                    position: "bottom"
                }) : (i.data.patchSuccess ? (s(329488).yg.setState({ ...s(329488).yg.state,
                    jiraSyncState: "editing",
                    jiraSyncProgress: 100
                }), s(436555).D6({
                    label: s(962299).A.getIntl().formatMessage({
                        defaultMessage: "Project sync list updated, sync started in background.",
                        id: "jira.edit.success"
                    }),
                    position: "bottom"
                })) : s(436555).D6({
                    label: s(962299).A.getIntl().formatMessage({
                        defaultMessage: "No changes were detected.",
                        id: "jira.edit.noChanges"
                    }),
                    position: "bottom"
                }), i)
            }
            async function N(e) {
                var t;
                let {
                    environment: n,
                    spaceId: a,
                    showSnackbarOnError: r
                } = e;
                if (s(218744).default.checkGate({
                        gateName: "ai_connector_unification_google_drive"
                    })) return S({
                    environment: n,
                    spaceId: a
                });
                let o = await n.api.callCellCompatibleApi({
                    eventName: "getGoogleDriveSyncProgress",
                    environment: n,
                    data: {
                        spaceId: a
                    },
                    cellNavigation: {
                        spaceId: a
                    }
                });
                return "success" !== o.type ? (r && (o.status >= 400 && o.status < 500 ? (0, s(399077).Rl)() : (0, s(399077).NK)()), {
                    status: "failed"
                }) : (s(454752).d.setState({ ...s(454752).d.state,
                    initialSyncState: (0, s(876688).HB)(o.data.status),
                    isDisconnecting: "disconnecting" === o.data.status,
                    isEditing: "editing" === o.data.status,
                    syncProgress: o.data.status,
                    syncCurrent: o.data.current,
                    syncTotal: o.data.total,
                    ingestionProgress: o.data.ingestionProgress,
                    isLoaded: !0,
                    externalSourceName: null == (t = o.data.connectionDetails) ? void 0 : t.domainName
                }), {
                    status: "success"
                })
            }

            function L(e) {
                let {
                    connector: t,
                    from: n
                } = e;
                s(346593).O.setState({ ...s(346593).O.state,
                    open: !0,
                    modal: "progress",
                    connector: t
                }), s(310639).assistantDependency.load().then(({
                    assistantAnalyticsActions: e
                }) => {
                    e.trackConnectorInProgressModalOpened({
                        connector: t,
                        from: n
                    })
                })
            }

            function j(e) {
                let {
                    connector: t,
                    from: n
                } = e;
                s(346593).O.setState({ ...s(346593).O.state,
                    open: !0,
                    modal: "auth_needed",
                    connector: t
                }), s(310639).assistantDependency.load().then(({
                    assistantAnalyticsActions: e
                }) => {
                    e.trackConnectorAuthNeededModalOpened({
                        connector: t,
                        from: n
                    })
                })
            }
            async function U(e) {
                return $(e).then(e => e ? {
                    status: "success"
                } : {
                    status: "failed"
                })
            }
            async function $(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return await (0, s(600923).K)("microsoft-teams").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                }), s(456925).F0.getState()
            }
            async function O(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e, n = await t.api.callCellCompatibleApi({
                    eventName: "getMicrosoftTeamsSyncControls",
                    environment: t,
                    data: {
                        spaceId: s
                    },
                    cellNavigation: {
                        spaceId: s
                    }
                });
                if ("success" === n.type) return n.data
            }
            async function z(e) {
                let {
                    environment: t,
                    spaceId: s,
                    cursor: n
                } = e;
                return await t.api.callApi({
                    eventName: "getMicrosoftTeamsTeams",
                    environment: t,
                    data: {
                        spaceId: s,
                        cursor: n
                    }
                })
            }
            async function R(e) {
                let {
                    environment: t,
                    spaceId: s,
                    syncControls: n
                } = e, a = await t.api.callCellCompatibleApi({
                    eventName: "setMicrosoftTeamsSyncControls",
                    environment: t,
                    data: {
                        spaceId: s,
                        syncControls: n
                    },
                    cellNavigation: {
                        spaceId: s
                    }
                });
                if ("success" === a.type) return await $({
                    environment: t,
                    spaceId: s
                }), a.data
            }
            async function W(e) {
                let {
                    environment: t,
                    spaceId: n,
                    sessionId: a
                } = e, r = await t.api.callApi({
                    eventName: "startMicrosoftTeamsBulkIngestion",
                    environment: t,
                    data: {
                        spaceId: n,
                        sessionId: a
                    }
                });
                return "success" !== r.type ? void s(436555).D6({
                    label: s(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "microsoftTeams.sync.failed"
                    }),
                    position: "bottom"
                }) : (s(436555).D6({
                    label: s(962299).A.getIntl().formatMessage({
                        defaultMessage: "Microsoft Teams sync started. This can take up to 36 hours.",
                        id: "microsoftTeams.sync.started"
                    }),
                    position: "bottom"
                }), await $({
                    environment: t,
                    spaceId: n
                }), r)
            }
            async function K(e) {
                return (0, s(600923).K)("outlook").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }
            async function G(e) {
                return (0, s(600923).K)("sharepoint").updateConnectorStatus({
                    environment: e.environment,
                    spaceId: e.spaceId
                })
            }

            function J(e) {
                let {
                    currentScreen: t
                } = e;
                s(443709).EF.setState({ ...s(443709).EF.state,
                    currentScreen: t
                })
            }
            async function H(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, a = await (0, s(262364).u)({
                    environment: t,
                    spaceId: n,
                    connector: "sharepoint"
                });
                if (!a || "failed" === a) return {
                    status: "not_started",
                    externalSourceName: void 0
                };
                let r = a.details.connectionDetails;
                return {
                    status: r.status,
                    externalSourceName: r.external_source_name
                }
            }

            function B(e) {
                let {
                    currentScreen: t
                } = e;
                s(368381).W.setState({ ...s(368381).W.state,
                    currentScreen: t
                })
            }

            function V(e) {
                s(801477).lk.setState({ ...s(801477).lk.state,
                    currentScreen: e
                })
            }
            async function X(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, a = await (0, s(262364).u)({
                    environment: t,
                    spaceId: n,
                    connector: "linear"
                });
                return a && "failed" !== a ? a.details.connectionDetails.status : "not_started"
            }
            async function q(e) {
                let {
                    environment: t,
                    sidebarSpaceViewStore: n,
                    connector: a
                } = e, r = null == n ? void 0 : n.getSpaceId();
                if (r)
                    if ("slack" !== a) return (0, s(600923).K)(a).disconnectConnectorPersonalAuth({
                        environment: t,
                        spaceId: r
                    });
                    else throw Error("Slack connector personal auth disconnect not implemented")
            }
            async function Q(e) {
                let {
                    connector: t,
                    spaceId: n,
                    environment: a,
                    disconnectReason: r
                } = e, o = (0, s(600923).K)(t), i = await o.disconnectConnector({
                    environment: a,
                    spaceId: n,
                    disconnectReason: r
                });
                return (0, s(399077).th)(t, e => ({ ...e,
                    isDisconnecting: !0,
                    isEditing: !1
                })), i
            }
            async function Y(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, a = s(728372).AppStoreSidebarSpaceViewStore.state;
                if (void 0 === a) return !1;
                let r = await t.api.callApi({
                    eventName: "connectJiraSiteToSpace",
                    environment: t,
                    data: {
                        spaceId: n,
                        siteId: s(329488).yg.state.jiraSiteId
                    }
                });
                if ("success" === r.type && r.data.connectionSuccess) {
                    s(329488).yg.setState({ ...s(329488).yg.state,
                        currentScreen: "connection_complete_screen",
                        jiraSiteId: r.data.siteData.siteId,
                        jiraSiteUrl: r.data.siteData.siteUrl,
                        jiraSyncState: "pending_selection"
                    });
                    let e = a.getSpaceId();
                    return (0, s(377796).createAndCommit)({
                        userAction: "jiraAIConnector.onboarding.dismissPersonalAuthPrompt",
                        environment: t,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, s(421439).y4)({
                                store: a,
                                operation: {
                                    pointer: a.pointer,
                                    path: ["settings"],
                                    command: "update",
                                    args: { ...a.getSettings(),
                                        dismissed_jira_installation_pending_prompt: null
                                    }
                                },
                                transaction: e
                            })
                        }
                    }), !0
                }
                return !1
            }
            async function Z(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e, a = await t.api.callApi({
                    eventName: "disconnectJiraUserConnection",
                    environment: t,
                    data: {
                        spaceId: n
                    }
                });
                return "success" === a.type && !0 === a.data.disconnected && (s(329488).yg.setState({ ...s(329488).yg.state,
                    userConnected: !1,
                    missingUserAuth: !0
                }), !0)
            }
            s.r(t), s.d(t, {
                addNotionInfoForJiraAIConnection: () => A,
                connectSpaceToJiraSite: () => Y,
                createAsanaConnection: () => ec,
                disconnectConnector: () => Q,
                disconnectConnectorPersonalAuth: () => q,
                disconnectJiraUserConnection: () => Z,
                fetchAsanaWorkspaces: () => ei,
                getAiConnectorOnboardingMomentInSettings: () => et,
                getJiraAIConnectionStatusAction: () => T,
                getJiraSyncControlAction: () => k,
                getLinearConnectorStatus: () => X,
                getMicrosoftTeamsAIConnectorStatusAction: () => $,
                getMicrosoftTeamsSyncControlsAction: () => O,
                getMicrosoftTeamsTeamsAction: () => z,
                getSharepointConnectorDetails: () => H,
                maybeMarkAiConnectorOnboardingSurveyMomentInSettings: () => es,
                maybeTrackSprigAiConnectorOnboardingSurvey: () => ea,
                navigateToAIConnectorOnboarding: () => d,
                navigateToAIConnectorSettingsScreen: () => u,
                navigateToDiscordUniversalScreen: () => V,
                navigateToGoogleDriveUniversalScreen: () => i,
                navigateToJiraUniversalScreen: () => c,
                navigateToLinearUniversalScreen: () => B,
                navigateToMicrosoftTeamsUniversalScreen: () => l,
                navigateToSharepointUniversalScreen: () => J,
                openAuthNeededModal: () => j,
                openConnectorInProgressModal: () => L,
                resetAiConnectorStatus: () => p,
                resetAllAiConnectors: () => g,
                setAiConnectorOnboardingSurveyMomentInSettings: () => en,
                setAssistantOnboardingPhase: () => a,
                setLastExposedToQnaAtToCurrentTimestamp: () => r,
                setLastUsedAIWriterAtToCurrentTimestamp: () => o,
                setMicrosoftTeamsSyncControlsAction: () => R,
                setQnaOnboardingPhase: () => n,
                startJiraBulkIngestionAction: () => M,
                startJiraEditFlow: () => F,
                startMicrosoftTeamsBulkIngestionAction: () => W,
                updateAsanaAIConnectorStatus: () => eo,
                updateBoxAIConnectorStatus: () => P,
                updateConfluenceAIConnectorStatus: () => x,
                updateCustomAiConnectorStatus: () => w,
                updateDiscordAIConnectorStatus: () => er,
                updateGithubAIConnectorStatus: () => f,
                updateGmailAIConnectorStatus: () => y,
                updateGoogleCalendarAIConnectorStatus: () => C,
                updateGoogleDriveConnectionStatus: () => S,
                updateGoogleDriveQnAConnectionState: () => N,
                updateJiraAIConnectionStatus: () => D,
                updateJiraAIV2ConnectionStatus: () => E,
                updateLinearAIConnectorStatus: () => v,
                updateMicrosoftTeamsAIConnectorStatusAction: () => U,
                updateNotionCalendarAIConnectorStatus: () => _,
                updateNotionMailAIConnectorStatus: () => b,
                updateOutlookAIConnectorStatus: () => K,
                updateSalesforceAIConnectorStatus: () => I,
                updateSharepointAiConnectorStatus: () => G,
                updateSlackConnectionStatus: () => h,
                updateSlackQnAConnectionState: () => m
            }), s(16280), s(898992), s(803949), s(581454);
            let ee = {
                started: "ai_connector_onboarding_started_at",
                finished: "ai_connector_onboarding_completed_at",
                survey_triggered: "ai_connector_onboarding_survey_triggered_at"
            };

            function et(e) {
                var t;
                let {
                    connector: n,
                    moment: a
                } = e, r = s(728372).AppStoreSidebarSpaceViewStore.state;
                if (!r) return;
                let o = ee[a];
                return null == (t = r.getSettings()) || null == (t = t[o]) ? void 0 : t[n]
            }

            function es(e) {
                let {
                    environment: t,
                    connector: n,
                    moment: a
                } = e, r = s(728372).AppStoreSidebarSpaceViewStore.state;
                r && void 0 === et({
                    connector: n,
                    moment: a
                }) && en({
                    environment: t,
                    currentSpaceViewStore: r,
                    connector: n,
                    moment: a,
                    timestamp: Date.now()
                })
            }

            function en(e) {
                let {
                    environment: t,
                    currentSpaceViewStore: n,
                    connector: a,
                    moment: r,
                    timestamp: o
                } = e, i = ee[r], c = n.getSpaceId();
                (0, s(377796).createAndCommit)({
                    environment: t,
                    cellTarget: c ? {
                        spaceWithId: c
                    } : void 0,
                    userAction: `aiConnector.onboarding.${r}`,
                    canUndo: !0,
                    perform: e => {
                        var t;
                        (0, s(421439).y4)({
                            store: n,
                            operation: {
                                pointer: n.pointer,
                                path: ["settings"],
                                command: "update",
                                args: { ...n.getSettings(),
                                    [i]: { ...null == (t = n.getSettings()) ? void 0 : t[i],
                                        [a]: o
                                    }
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }

            function ea(e) {
                let {
                    environment: t,
                    connector: n,
                    connectedApps: a
                } = e, r = et({
                    connector: n,
                    moment: "started"
                }), o = et({
                    connector: n,
                    moment: "finished"
                });
                !r || o || r > s(906745).DateTime.now().minus({
                    days: 5
                }).toMillis() || a.includes(n) || et({
                    connector: n,
                    moment: "survey_triggered"
                }) || (s(707964).u4({
                    name: `${n}_ai_connector_dropoff_survey`
                }), es({
                    environment: t,
                    connector: n,
                    moment: "survey_triggered"
                }))
            }
            async function er(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, s(600923).K)("discord").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                })
            }
            async function eo(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, s(600923).K)("asana").updateConnectorStatus({
                    environment: t,
                    spaceId: n
                })
            }
            async function ei(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e;
                try {
                    var n;
                    let e = await t.api.callApi({
                        eventName: "getAsanaWorkspaces",
                        environment: t,
                        data: {
                            spaceId: s
                        }
                    });
                    if ("success" === e.type && null != (n = e.data) && n.workspaces) {
                        let t = e.data.workspaces.map(e => ({
                                id: e.gid,
                                name: e.name
                            })),
                            s = e.data.userSelection;
                        return {
                            workspaces: t,
                            userSelection: s
                        }
                    }
                    return
                } catch (e) {
                    return
                }
            }
            async function ec(e) {
                let {
                    environment: t,
                    spaceId: s,
                    token: n,
                    sessionId: a
                } = e;
                try {
                    let e = await t.api.callApi({
                        eventName: "createAsanaConnection",
                        environment: t,
                        data: {
                            spaceId: s,
                            token: n,
                            sessionId: a
                        }
                    });
                    if ("success" === e.type && !0 === e.data.success) return {
                        status: "success"
                    };
                    return {
                        status: "failed",
                        errorMessage: "Failed to authenticate with the provided token"
                    }
                } catch (e) {
                    return {
                        status: "failed",
                        errorMessage: "An unexpected error occurred while creating the connection"
                    }
                }
            }
        },
        186241: (e, t, s) => {
            s.d(t, {
                WS: () => a,
                zZ: () => o
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    authUrl: void 0,
                    isConnected: !1,
                    isSyncComplete: !1,
                    isLoaded: !1,
                    externalSourceName: void 0,
                    ingestionProgress: 0,
                    userAuthStatus: "not_required",
                    forceShowAuthNotificationTriggeredAt: void 0,
                    siteUrl: ""
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("confluenceAiConnectorStore", o)
        },
        196473: (e, t, s) => {
            s.d(t, {
                Ci: () => o,
                f9: () => a
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    selection: {
                        allObjects: !0,
                        includedObjects: [],
                        excludedObjects: [],
                        includeFutureObjects: !0
                    },
                    status: "not_started",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    authUrl: void 0,
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    isSyncComplete: !1,
                    isLoaded: !1,
                    connectionDetails: void 0,
                    externalSourceName: void 0,
                    ingestionProgress: 0,
                    userAuthStatus: "not_required",
                    forceShowAuthNotificationTriggeredAt: void 0,
                    workspaceConnectionCreatedById: void 0
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("salesforceAiConnectorStore", o)
        },
        206164: (e, t, s) => {
            function n(e) {
                return null !== e && "object" == typeof e && "debugMessage" in e && "INSUFFICIENT_OAUTH_SCOPES" === e.debugMessage
            }
            async function a(e) {
                let {
                    environment: t
                } = e, s = await t.api.callMainCellApi({
                    eventName: "getEmailDomainSettings",
                    environment: t,
                    data: {}
                });
                return "failed" === s.type || !!s.data.settings.disable_notion_mail
            }
            s.d(t, {
                _: () => a,
                e: () => n
            })
        },
        212490: (e, t, s) => {
            function n(e, t) {
                let n = [];
                if ("slack" === e) {
                    let {
                        noChannelsSelected: e,
                        ingestionProgress: a
                    } = s(32913).Rh.state;
                    s(886556).z.isSlackV2AiConnectorEnabled() && !s(32913).Rh.state.isSlackGridAiConnectorEnabled && s(32913).Rh.state.isSyncCompleted && 1 === s(32913).Rh.state.connectionVersion && t && n.push({
                        type: "slack_migrate"
                    }), !s(886556).z.isSlackV2AiConnectorEnabled() && e && void 0 === a && t && n.push({
                        type: "slack_select_channels"
                    }), !s(886556).z.isSlackV2AiConnectorEnabled() && r(s(32913).Rh.state) && n.push({
                        type: "slack_re_auth"
                    }), s(886556).z.isSlackV2AiConnectorEnabled() && s(32913).Rh.showUserConnectionNotification() && n.push({
                        type: "slack_v2_user_connection"
                    })
                } else if ("jira" === e) {
                    "pending_selection" === s(213056).EF.state.jiraSyncState && n.push({
                        type: "jira_select_projects"
                    }), s(329488).yg.isOldJiraConnected() && s(886556).z.isJiraForgeEnabled() && !s(213056).EF.isJiraForgeConnectionDone() && t && n.push({
                        type: "jira_migrate"
                    });
                    let {
                        jiraSyncState: e
                    } = s(329488).yg.state;
                    s(218744).default.checkGate({
                        gateName: "install_from_jira_marketplace"
                    }) && "pending_connection" === e && t && n.push({
                        type: "jira_connection_pending"
                    }), s(218744).default.checkGate({
                        gateName: "jira_user_auth_flow"
                    }) && s(329488).yg.state.missingUserAuth && n.push({
                        type: "jira_connect_user"
                    })
                } else if ("microsoft-teams" === e) {
                    let {
                        connectionStatus: e
                    } = s(456925).F0.state;
                    "pending_selection" === e && t && n.push({
                        type: "microsoft_teams_select_teams"
                    })
                } else if ("google-drive" === e) "pending_selection" === s(454752).d.state.initialSyncState && t && n.push({
                    type: "google_drive_connection_pending"
                });
                else if ("sharepoint" === e) {
                    let {
                        connectionDetails: e
                    } = s(443709).EF.state;
                    (null == e ? void 0 : e.status) === "pending_selection" && t && n.push({
                        type: "sharepoint_select_sites"
                    })
                } else if ("github" === e) o(s(314365).o.state) && n.push({
                    type: "github_re_auth"
                });
                else if ("linear" === e) c(e) && n.push({
                    type: `${e}_re_auth`
                });
                else if ("asana" === e)(function() {
                    let {
                        connectionStatus: e
                    } = s(711421).P0.state;
                    return "pending_selection" === e
                })() && t && n.push({
                    type: "asana_select_workspace"
                });
                else if ("box" === e)(function(e) {
                    let {
                        status: t
                    } = e;
                    return "box_awaiting_confirmation" === t
                })(s(158423).MX.state) && n.push({
                    type: "box_awaiting_confirmation"
                });
                else if ("confluence" === e) ! function(e) {
                    let {
                        isConnected: t,
                        userAuthStatus: s
                    } = e;
                    return t && "awaiting_confirmation" === s
                }(s(186241).zZ.state) ? c(e) && n.push({
                    type: "confluence_re_auth"
                }) : n.push({
                    type: "confluence_awaiting_confirmation"
                });
                else if ("salesforce" === e) {
                    var a;
                    let {
                        connectionDetails: e,
                        workspaceConnectionCreatedById: t
                    } = s(196473).Ci.state, r = null == (a = s(728372).AppStoreCurrentUserStore.state) ? void 0 : a.id;
                    (null == e ? void 0 : e.status) === "token_refresh_failed" && void 0 !== r && r === t && n.push({
                        type: "salesforce_re_auth"
                    })
                }
                return n
            }

            function a(e) {
                if ("slack" === e) return !s(32913).Rh.state.canQuery;
                if ("github" === e) return !s(314365).o.state.isPersonalAuthComplete;
                if ("linear" === e) return !!s(218744).default.checkGate({
                    gateName: "linear_user_auth_flow"
                }) && "pending" === s(368381).W.state.userAuthStatus;
                if ("salesforce" === e) return !g() && "pending" === s(196473).Ci.state.userAuthStatus;
                if ("confluence" === e) return "pending" === s(186241).zZ.state.userAuthStatus;
                else return !1
            }

            function r(e) {
                let {
                    isSlackGridAiConnectorEnabled: t,
                    isSyncCompleted: s,
                    ingestionProgress: n,
                    canQuery: a
                } = e;
                return !t && !!s && void 0 === n && !a
            }

            function o(e) {
                let {
                    githubOrg: t,
                    isPersonalAuthComplete: s,
                    isDisconnecting: n,
                    forceShowAuthNotificationTriggeredAt: a
                } = e;
                return !!a || null != t && !!t.isSyncComplete && !s && !n
            }

            function i(e) {
                if ("linear" === e) {
                    if (!s(218744).default.checkGate({
                            gateName: "linear_user_auth_flow"
                        })) return !1;
                    let {
                        userAuthStatus: e
                    } = s(368381).W.state;
                    return "not_required" !== e
                }
                if ("confluence" !== e) return !1; {
                    let {
                        userAuthStatus: e
                    } = s(186241).zZ.state;
                    return "not_required" !== e
                }
            }

            function c(e) {
                if ("linear" === e) return function() {
                    if (!s(218744).default.checkGate({
                            gateName: "linear_user_auth_flow"
                        })) return !1;
                    let {
                        isConnected: e,
                        userAuthStatus: t,
                        isDisconnecting: n
                    } = s(368381).W.state;
                    return e && "pending" === t && !n
                }();
                if ("confluence" === e) return function() {
                    let {
                        isConnected: e,
                        userAuthStatus: t
                    } = s(186241).zZ.state;
                    return e && "pending" === t
                }();
                throw Error("isConnectedButAuthNeeded is not implemented for this connector")
            }

            function l() {
                let {
                    jiraSyncState: e,
                    jiraSyncProgress: t
                } = s(213056).EF.state;
                return "in_progress" === e || "editing" === e || "pending_installation" === e ? {
                    isInProgress: !0,
                    ingestionProgress: t
                } : {
                    isInProgress: !1
                }
            }

            function u(e) {
                if ("slack" === e) {
                    let {
                        inProgress: e,
                        ingestionProgress: t,
                        isSlackGridAiConnectorEnabled: n
                    } = s(32913).Rh.state;
                    return n ? {
                        isInProgress: !1
                    } : e ? {
                        isInProgress: !0,
                        ingestionProgress: t ? ? 0
                    } : {
                        isInProgress: !1
                    }
                }
                if ("google-drive" === e) {
                    let {
                        ingestionProgress: e,
                        isEditing: t
                    } = s(454752).d.state;
                    return void 0 !== e || t ? {
                        isInProgress: !0,
                        ingestionProgress: e
                    } : {
                        isInProgress: !1
                    }
                }
                if ("github" === e) {
                    let {
                        status: e
                    } = s(314365).o.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: void 0
                    } : {
                        isInProgress: !1
                    }
                }
                if ("jira" === e) {
                    if (s(886556).z.isJiraForgeEnabled() && s(213056).EF.isJiraForgeConnectionDone()) return l();
                    if (s(886556).z.isJiraOldAiConnectorEnabled()) {
                        let {
                            jiraSyncState: e,
                            jiraSyncProgress: t
                        } = s(329488).yg.state;
                        if ("in_progress" === e || "editing" === e) return {
                            isInProgress: !0,
                            ingestionProgress: t
                        }
                    }
                    return l()
                }
                if ("sharepoint" === e) {
                    let {
                        connectionDetails: e
                    } = s(443709).EF.state;
                    return (null == e ? void 0 : e.status) === "in_progress" ? {
                        isInProgress: !0,
                        ingestionProgress: null == e ? void 0 : e.progress
                    } : {
                        isInProgress: !1
                    }
                } else if ("microsoft-teams" === e) {
                    let {
                        connectionStatus: e,
                        syncProgressPercentage: t
                    } = s(456925).F0.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: t
                    } : {
                        isInProgress: !1
                    }
                } else if ((0, s(281708).Gb)(e)) return {
                    isInProgress: !1
                };
                else if ("linear" === e) {
                    let {
                        status: e,
                        ingestionProgress: t
                    } = s(368381).W.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: t
                    } : {
                        isInProgress: !1
                    }
                } else if ("salesforce" === e) {
                    let {
                        status: e,
                        ingestionProgress: t
                    } = s(196473).Ci.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: t
                    } : {
                        isInProgress: !1
                    }
                } else if ("discord" === e) {
                    let {
                        connectionStatus: e,
                        syncProgressPercentage: t
                    } = s(801477).lk.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: t
                    } : {
                        isInProgress: !1
                    }
                } else if ("asana" === e) {
                    let {
                        connectionStatus: e,
                        syncProgressPercentage: t
                    } = s(711421).P0.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: t
                    } : {
                        isInProgress: !1
                    }
                } else if ("box" === e) {
                    let {
                        status: e,
                        ingestionProgress: t
                    } = s(158423).MX.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: t
                    } : {
                        isInProgress: !1
                    }
                } else if ("confluence" === e) {
                    let {
                        userAuthStatus: e
                    } = s(186241).zZ.state;
                    return "in_progress" === e ? {
                        isInProgress: !0,
                        ingestionProgress: void 0
                    } : {
                        isInProgress: !1
                    }
                } else if ("custom" === e) return {
                    isInProgress: !1
                };
                else return (0, s(722371).HB)(e)
            }

            function d(e) {
                if ("sharepoint" === e) {
                    let {
                        connectionDetails: e
                    } = s(443709).EF.state;
                    return (null == e ? void 0 : e.status) === "disconnecting"
                }
                if ("box" === e) {
                    let {
                        status: e
                    } = s(158423).MX.state;
                    return "disconnecting" === e
                }
                if ("salesforce" === e) {
                    let {
                        status: e
                    } = s(196473).Ci.state;
                    return "disconnecting" === e
                }
                if ("linear" === e) {
                    let {
                        status: e
                    } = s(368381).W.state;
                    return "disconnecting" === e
                }
                if ("confluence" === e) {
                    let {
                        status: e
                    } = s(186241).zZ.state;
                    return "disconnecting" === e
                } else if ("jira" === e) {
                    if (s(886556).z.isJiraForgeEnabled() && s(213056).EF.isJiraForgeConnectionDone()) return "disconnecting" === s(213056).EF.state.jiraSyncState;
                    if (s(886556).z.isJiraOldAiConnectorEnabled()) return "disconnecting" === s(329488).yg.state.jiraSyncState
                } else if ("custom" === e) return !1;
                return !!s(399077).NT[e].state.isDisconnecting
            }

            function p(e) {
                let t = n(e, !0).at(0),
                    a = h(e),
                    r = s(218744).default.checkGate({
                        gateName: "custom_agents_server"
                    }),
                    o = "slack" === e && s(886556).z.isSlackConnectorUnificationEnabled() && r;
                if (t) return {
                    type: "action_required",
                    action: t.type,
                    externalSourceName: a,
                    isEnabledForCustomAgents: o
                };
                let i = u(e);
                return i.isInProgress ? {
                    type: "in_progress",
                    ingestionProgress: i.ingestionProgress,
                    externalSourceName: a,
                    isEnabledForCustomAgents: o
                } : d(e) ? {
                    type: "disconnecting",
                    externalSourceName: a,
                    isEnabledForCustomAgents: o
                } : {
                    type: "connected",
                    externalSourceName: a,
                    isEnabledForCustomAgents: o
                }
            }

            function g() {
                var e;
                if (!s(218744).default.getConfig({
                        configName: "salesforce_ingestion"
                    }).skipAdminUserAuth) return !1;
                let t = null == (e = s(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id,
                    {
                        workspaceConnectionCreatedById: n
                    } = s(196473).Ci.state;
                return !!t && !!n && t === n
            }

            function h(e) {
                if ("jira" === e) {
                    if (s(886556).z.isJiraForgeEnabled() && s(213056).EF.isJiraForgeConnectionDone()) {
                        let {
                            jiraSiteUrl: e
                        } = s(213056).EF.state;
                        return e
                    }
                    let {
                        jiraSiteUrl: e
                    } = s(329488).yg.state, t = e.match(/^https:\/\/([a-zA-Z0-9-]+)\.atlassian\.net/);
                    return (null == t ? void 0 : t[1]) || e
                }
                if ("google-drive" === e) {
                    let {
                        externalSourceName: e
                    } = s(454752).d.state;
                    return e
                }
                if ("github" === e) {
                    let {
                        externalSourceName: e
                    } = s(314365).o.state;
                    if (e) return e;
                    let {
                        githubOrg: t
                    } = s(314365).o.state;
                    return null == t ? void 0 : t.name
                }
                if ("linear" === e) {
                    let {
                        externalSourceName: e
                    } = s(368381).W.state;
                    return e
                }
                if ("sharepoint" === e) {
                    let {
                        connectionDetails: e
                    } = s(443709).EF.state;
                    return null == e ? void 0 : e.externalSourceName
                }
                if ("slack" === e) {
                    let {
                        externalSourceName: e
                    } = s(32913).Rh.state;
                    return e
                }
                if ("gmail" === e) {
                    let {
                        externalSourceName: e
                    } = s(218705).XS.state;
                    return e
                }
                if ("google-calendar" === e) {
                    let {
                        externalSourceName: e
                    } = s(14214).Wz.state;
                    return e
                }
                if ("notion-mail" === e) {
                    var t, n;
                    let {
                        emailAddresses: e,
                        externalSourceName: a
                    } = s(318329).Lf.state;
                    return s(218744).default.checkGate({
                        gateName: "script_agent_mail_module_available"
                    }) ? e.length > 0 ? e.map(e => e.email).join(", ") : a : (null == (t = e.find(e => e.isDefault)) ? void 0 : t.email) ? ? (null == (n = e[0]) ? void 0 : n.email) ? ? a
                }
                if ("notion-calendar" === e) return [...new Set((0, s(440143).Y)().getCurrentAccounts().map(e => e.email))].join(", ");
                if ("microsoft-teams" === e) {
                    let {
                        externalSourceName: e
                    } = s(456925).F0.state;
                    return e
                }
                if ("outlook" === e) {
                    let {
                        externalSourceName: e
                    } = s(741443).yF.state;
                    return e
                }
                if ("salesforce" === e) {
                    let {
                        externalSourceName: e
                    } = s(196473).Ci.state;
                    return e
                }
                if ("box" === e) {
                    let {
                        externalSourceName: e
                    } = s(158423).MX.state;
                    return e
                }
                if ("asana" === e) {
                    let {
                        externalSourceName: e
                    } = s(711421).P0.state;
                    return e
                }
                if ("confluence" === e) {
                    let {
                        externalSourceName: e
                    } = s(186241).zZ.state;
                    return e
                }
            }

            function m(e) {
                if ("linear" === e) {
                    let {
                        externalUsername: e
                    } = s(368381).W.state;
                    return e
                }
            }
            s.d(t, {
                $t: () => d,
                F1: () => o,
                Gu: () => g,
                HF: () => p,
                LT: () => u,
                UK: () => h,
                al: () => r,
                eA: () => c,
                hA: () => i,
                o5: () => m,
                uD: () => n,
                zM: () => a
            }), s(16280), s(18107), s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(967357), s(898992), s(672577), s(581454)
        },
        213056: (e, t, s) => {
            s.d(t, {
                EF: () => o,
                Xh: () => a
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    analyticsFrom: "unknown",
                    sessionId: s(92513).JW(),
                    jiraSiteUrl: "",
                    jiraSyncState: "not_started",
                    jiraSyncProgress: 0,
                    syncControl: {
                        excludedProjects: [],
                        includedProjects: [],
                        includeFutureProjects: !0,
                        allProjects: !1
                    },
                    isDisconnecting: !1,
                    isLoaded: !1
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
                isJiraForgeConnectionDone() {
                    return "not_started" !== this.state.jiraSyncState
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("jiraAIConnectionV2Store", o)
        },
        218705: (e, t, s) => {
            s.d(t, {
                XS: () => r
            });
            var n = () => s(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        currentScreen: "none",
                        status: "not_started",
                        externalSourceName: void 0,
                        sessionId: s(92513).JW(),
                        analyticsFrom: "unknown",
                        isConnected: !1,
                        isPersonalAuthComplete: !1,
                        isDisconnecting: !1,
                        connectionConflictSpaceId: void 0,
                        isLoaded: !1
                    }
                }
            }
            let r = new a;
            (0, s(202146).exposeDebugValue)("gmailAIConnectorStore", r)
        },
        220800: (e, t, s) => {
            function n(e) {
                return "workflow" === e.type || "markdown-chat" === e.type ? e.model : void 0
            }

            function a(e) {
                return "workflow" === e.type && e.model ? {
                    type: e.model
                } : void 0
            }

            function r(e) {
                let {
                    transcript: t,
                    agentRecordMap: n,
                    spaceId: a,
                    workflowId: r,
                    additionalOperations: o,
                    workflowToReturn: i
                } = e, c = (0, s(897011).YO)({
                    transcript: t,
                    agentRecordMap: n,
                    additionalOperations: o
                }), l = function(e) {
                    let {
                        recordMap: t,
                        workflowId: n,
                        spaceId: a
                    } = e, r = {
                        table: s(43296).C,
                        id: n,
                        spaceId: a
                    };
                    return t.getModel(r)
                }({
                    recordMap: c,
                    workflowId: r,
                    spaceId: a
                });
                if (!l) return;
                let u = l.getData() ? ? {};
                if ("published" === i) {
                    var d;
                    let e = null == (d = l.getData()) ? void 0 : d.published_artifact_pointer;
                    if (e) {
                        let t = c.getModel(e);
                        if ((null == t ? void 0 : t.type) === "version") return {
                            workflow: t.getData() ? ? {},
                            recordMap: c,
                            workflowPointer: l.pointer,
                            workflowParentPointer: l.getParentPointer()
                        }
                    }
                }
                return {
                    workflow: u,
                    recordMap: c,
                    workflowPointer: l.pointer,
                    workflowParentPointer: l.getParentPointer()
                }
            }

            function o(e) {
                return "agent-tool-result" === e.type && ("create-agent" === e.toolName || "create-agent-v2" === e.toolName) && (e.toolName, !0)
            }

            function i(e) {
                return "agent-tool-result" === e.type && ("update-agent" === e.toolName || "update-agent-v2" === e.toolName) && (e.toolName, !0)
            }

            function c(e) {
                var t;
                if ("agent-tool-result" !== e.type || !(0, s(426048).gY)(e, "callFunction")) return !1;
                let n = null == (t = e.input) ? void 0 : t.function;
                return "connections.notion.createAgent" === n || "connections.notion.createDatabaseAgent" === n
            }
            s.d(t, {
                kD: () => a,
                rE: () => r,
                kM: () => n,
                K0: () => c,
                OA: () => o,
                LO: () => i
            }), s(16280), s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(672577), s(581454), s(737550), Object.freeze(["connections.notion.loadPage", "connections.notion.loadDatabase", "connections.notion.loadAgent", "connections.notion.loadUser", "connections.notion.loadDataSource"]), s(354520), s(430670), s(803949), s(969475).object({
                required: {
                    type: s(969475).literal("manual")
                },
                optional: {},
                exact: !0
            }), s(969475).object({
                required: {
                    type: s(969475).literal("ascending")
                },
                optional: {},
                exact: !0
            }), s(969475).object({
                required: {
                    type: s(969475).literal("descending")
                },
                optional: {},
                exact: !0
            }), s(969475).object({
                required: {},
                optional: {
                    hideLegend: s(969475).boolean(),
                    legendPosition: s(969475).literals(...Object.values(s(56224).Dt)),
                    showCaption: s(969475).boolean(),
                    caption: s(969475).string(),
                    colorTheme: s(969475).literals(...s(56224).HI),
                    height: s(969475).literals(...Object.values(s(56224).bg)),
                    weightColorValue: s(969475).boolean(),
                    showValueLabel: s(969475).boolean(),
                    valueLabel: s(969475).string(),
                    mainSort: s(969475).literals(...Object.values(s(34969).S0)),
                    axisLabel: s(969475).literals(...Object.values(s(56224).tG)),
                    axisGridLine: s(969475).literals(...Object.values(s(56224).JQ)),
                    axisHideEmptyGroups: s(969475).boolean(),
                    axisCumulative: s(969475).boolean(),
                    axisShowDataLabels: s(969475).boolean(),
                    axisAvatar: s(969475).literals(...Object.values(s(56224).GL)),
                    axisGroupStyle: s(969475).literals(...Object.values(s(56224).PC)),
                    yAxisMin: s(969475).number(),
                    yAxisMax: s(969475).number(),
                    numberPrecisionOverride: s(969475).literals("precision_uncapped", "precision_0", "precision_1", "precision_2", "precision_3", "precision_4", "precision_5", "precision_from_number_property"),
                    numberFormatOverride: s(969475).literals(...s(700369).PA),
                    hideLineFillArea: s(969475).boolean(),
                    smoothLine: s(969475).boolean(),
                    donutHideValue: s(969475).boolean(),
                    hideNegativeValues: s(969475).boolean(),
                    hideTitle: s(969475).boolean(),
                    donutDataLabels: s(969475).literals(...Object.values(s(56224).D0)),
                    numberColor: s(969475).literals(...Object.values(s(111012).v3)),
                    numberConditionalColor: s(969475).object({
                        required: {
                            rules: s(969475).array(s(969475).object({
                                required: {
                                    id: s(969475).string(),
                                    operator: s(969475).literals(...s(56224).Wl),
                                    value: s(969475).number()
                                },
                                optional: {
                                    color: s(969475).literals(...Object.values(s(111012).v3))
                                },
                                exact: !0
                            }))
                        },
                        optional: {
                            elseColor: s(969475).literals(...Object.values(s(111012).v3))
                        },
                        exact: !0
                    }),
                    referenceLines: s(969475).array(s(969475).object({
                        required: {
                            id: s(969475).string(),
                            value: s(969475).number(),
                            label: s(969475).string(),
                            color: s(969475).literals(...Object.values(s(111012).v3)),
                            dashStyle: s(969475).literals(...s(56224).hw)
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                exact: !0
            }), s(969475).object({
                required: {
                    displayType: s(969475).literals("line", "column", "bar")
                },
                optional: {},
                exact: !0
            })
        },
        226088: (e, t, s) => {
            function n(e, t) {
                return (r(e) ? ? []).some(e => e.type === t)
            }

            function a(e) {
                return "ai-block" === e.type ? e.useWebSearch ? ? !1 : (0, s(548161).H0)({
                    config: e,
                    modules: []
                })
            }

            function r(e) {
                return "ai-block" === e.type ? e.searchScopes : (0, s(548161).n_)({
                    config: e,
                    modules: []
                }) ? ? []
            }

            function o({
                value: e,
                scopeType: t,
                enabled: s,
                createScope: n
            }) {
                let a;
                if ("workflow" !== e.type && "ai-block" !== e.type) return e;
                let i = r(e);
                return i.some(e => e.type === t) === s ? e : (a = s ? [...i, n()] : i.filter(e => e.type !== t), { ...e,
                    searchScopes: a
                })
            }
            s.d(t, {
                H5: () => n,
                NV: () => a,
                ZP: () => r,
                dV: () => o
            }), s(898992), s(354520), s(737550)
        },
        262364: (e, t, s) => {
            s.d(t, {
                u: () => o,
                y: () => i
            }), s(898992), s(672577);
            var n = () => s(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        listAIConnectorsPromise: void 0,
                        spaceId: void 0
                    }
                }
            }
            let r = new a;
            async function o(e) {
                let {
                    environment: t,
                    spaceId: s,
                    connector: n
                } = e, a = await i({
                    environment: t,
                    spaceId: s
                });
                return "success" !== a.type ? "failed" : "connectedConnectors" in a.data ? a.data.connectedConnectors.find(e => e.id === n) : void 0
            }
            async function i(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                if (r.state.listAIConnectorsPromise && r.state.spaceId === n) return r.state.listAIConnectorsPromise;
                let a = s(218744).default.getConfig({
                        configName: "universal_qna"
                    }),
                    o = (0, s(722371).O9)(a.listAIConnectorsCacheDurationMs) ? a.listAIConnectorsCacheDurationMs : 3e3,
                    i = t.api.callApi({
                        eventName: "listAIConnectors",
                        environment: t,
                        data: {
                            spaceId: n
                        }
                    }).then(e => (setTimeout(() => {
                        r.setState({
                            listAIConnectorsPromise: void 0,
                            spaceId: n
                        })
                    }, o), e)).catch(e => e);
                return r.setState({
                    listAIConnectorsPromise: i,
                    spaceId: n
                }), i
            }(0, s(202146).exposeDebugValue)("aiConnectorsStore", r)
        },
        318329: (e, t, s) => {
            s.d(t, {
                K_: () => a,
                Lf: () => o
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    isBackendConnected: !1,
                    externalSourceName: void 0,
                    emailAddresses: [],
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    isLoaded: !1,
                    isNotionMailProhibited: !1
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("notionMailAIConnectorStore", o)
        },
        329488: (e, t, s) => {
            s.d(t, {
                LF: () => a,
                yg: () => o
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    analyticsFrom: "unknown",
                    sessionId: s(92513).JW(),
                    jiraSiteId: "",
                    jiraSiteUrl: "",
                    jiraSyncState: "not_started",
                    jiraSyncProgress: 0,
                    syncControl: {
                        exclusionList: [],
                        inclusionList: [],
                        createdAt: Date.now(),
                        updatedAt: Date.now()
                    },
                    missingUserAuth: !1,
                    isDisconnecting: !1,
                    isLoaded: !1,
                    userConnected: !1
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
                isOldJiraConnected() {
                    return "completed" === this.state.jiraSyncState
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("jiraAIConnectionStore", o)
        },
        345740: (e, t, s) => {
            s.d(t, {
                Ew: () => n
            }), s(944114);

            function n(e) {
                if (!(0, s(722371).O9)(e) || "" === e) return e;
                let t = (0, s(223393).U)(e);
                if (t !== e) return t;
                if (e.startsWith("notion://custom_emoji/") || e.startsWith("attachment:") || e.startsWith("/icons/") || e.startsWith("/images/")) return e;
                let n = (0, s(871871).PE)(e);
                return n.length > 0 ? n[0] : ""
            }
        },
        346593: (e, t, s) => {
            s.d(t, {
                O: () => r
            });
            var n = () => s(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new a;
            (0, s(202146).exposeDebugValue)("AssistantConnectorProgressModalStore", r)
        },
        368381: (e, t, s) => {
            s.d(t, {
                W: () => r
            });
            var n = () => s(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        currentScreen: "none",
                        status: "not_started",
                        sessionId: s(92513).JW(),
                        analyticsFrom: "unknown",
                        authUrl: void 0,
                        ingestionProgress: void 0,
                        isConnected: !1,
                        isDisconnecting: !1,
                        isLoaded: !1,
                        userAuthStatus: "not_required",
                        externalUsername: void 0,
                        externalSourceName: void 0,
                        forceShowAuthNotificationTriggeredAt: void 0
                    }
                }
            }
            let r = new a
        },
        399077: (e, t, s) => {
            s.d(t, {
                NK: () => g,
                NT: () => i,
                Rl: () => p,
                getAiConnectorRefreshFunction: () => o,
                hP: () => l,
                nB: () => d,
                th: () => c,
                ts: () => u
            }), s(898992), s(354520), s(581454);
            var n = s(296540),
                a = s(474848);
            let r = {
                slack: s(166672).updateSlackQnAConnectionState,
                "google-drive": s(166672).updateGoogleDriveQnAConnectionState,
                jira: s(166672).updateJiraAIV2ConnectionStatus,
                github: s(166672).updateGithubAIConnectorStatus,
                sharepoint: s(166672).updateSharepointAiConnectorStatus,
                "microsoft-teams": s(166672).updateMicrosoftTeamsAIConnectorStatusAction,
                gmail: s(166672).updateGmailAIConnectorStatus,
                linear: s(166672).updateLinearAIConnectorStatus,
                outlook: s(166672).updateOutlookAIConnectorStatus,
                "notion-mail": s(166672).updateNotionMailAIConnectorStatus,
                "google-calendar": s(166672).updateGoogleCalendarAIConnectorStatus,
                "notion-calendar": s(166672).updateNotionCalendarAIConnectorStatus,
                salesforce: s(166672).updateSalesforceAIConnectorStatus,
                discord: s(166672).updateDiscordAIConnectorStatus,
                asana: s(166672).updateAsanaAIConnectorStatus,
                box: s(166672).updateBoxAIConnectorStatus,
                confluence: s(166672).updateConfluenceAIConnectorStatus,
                custom: s(166672).updateCustomAiConnectorStatus
            };

            function o(e) {
                return async t => s(40393).ZC.state ? {
                    status: "success"
                } : r[e](t)
            }
            let i = {
                slack: s(32913).Rh,
                "google-drive": s(454752).d,
                jira: s(213056).EF,
                github: s(314365).o,
                sharepoint: s(443709).EF,
                "microsoft-teams": s(456925).F0,
                gmail: s(218705).XS,
                linear: s(368381).W,
                outlook: s(741443).yF,
                "notion-mail": s(318329).Lf,
                "google-calendar": s(14214).Wz,
                "notion-calendar": s(875925).gv,
                salesforce: s(196473).Ci,
                discord: s(801477).lk,
                asana: s(711421).P0,
                box: s(158423).MX,
                confluence: s(186241).zZ,
                custom: s(501761).qu
            };

            function c(e, t) {
                let s = i[e];
                s.setState(t(s.state))
            }

            function l(e) {
                return (0, s(682985).K8)(() => s(218744).default.getConfigKey("ingestion", e), [e])
            }

            function u(e, t) {
                let a = (0, s(533992).v3)(),
                    r = (0, s(723240).r)(),
                    i = (0, s(682985).K8)(() => {
                        let e = (0, s(876688).kB)();
                        return s(886556).z.isAiConnectorEnabled("custom") && !e.includes("custom") ? [...e, "custom"] : e
                    }, []),
                    c = (0, n.useRef)(!1),
                    l = (0, s(682985).K8)(() => i.filter(e => !(0, s(876688).A7)(e) || t).filter(t => !(0, s(722371).O9)(e) || e.includes(t)), [i, e, t]);
                return (0, s(97668).Yb)(async () => {
                    if (!r || c.current || 0 === l.length) return;
                    let e = l.map(e => o(e));
                    c.current = !0, await (0, s(975162).lX)(e, 10, e => e({
                        environment: a,
                        spaceId: r
                    })), c.current = !1
                }, [a, r, l]), {
                    isLoading: (0, s(682985).K8)(() => !s(40393).ZC.state && l.filter(e => !(0, s(876688).A7)(e)).length > 0, [l])
                }
            }

            function d(e) {
                let {
                    connector: t,
                    authorizationType: a,
                    existingAuthorizationUrl: r,
                    openAuthUrl: o
                } = e, c = (0, s(533992).v3)(), l = (0, s(723240).r)(), u = (0, s(972740).L)(), d = (0, s(84163).J)(u), [p, g] = (0, n.useState)(r), h = (0, s(682985).K8)(() => s(886556).z.isAiConnectorEnabled(t), [t]), m = (0, s(611285).P)({
                    name: "ai_connectors",
                    spaceId: l,
                    userId: c.currentUser.id
                });
                return (0, s(97668).Yb)(async () => {
                    if (!l || p || o || !h || !m && !(0, s(281708).q1)(t) || ["asana"].includes(t) || "workspace" === a && !d || "custom" === t) return;
                    let e = await c.api.callApi({
                        eventName: "getAIConnectorAuthorizationUrl",
                        environment: c,
                        data: {
                            connector: t,
                            authorizationType: a,
                            spaceId: l,
                            sessionId: i[t].state.sessionId,
                            client: c.device.isElectron ? "desktop" : "web"
                        }
                    });
                    "success" !== e.type || g(e.data.authorizationUrl)
                }, [c, l, t, a, p, o, d, h, m]), p
            }

            function p() {
                s(436555).D6({
                    label: (0, a.jsx)(s(109939).sA, {
                        id: "universalSearch.googleDriveIngestion.googleDriveButton.accessDeniedSnackbar",
                        defaultMessage: "You do not have access to Google Drive Universal QnA."
                    }),
                    position: "bottom",
                    style: {
                        width: "600px",
                        display: "flex",
                        justifyContent: "space-between"
                    },
                    right: (0, a.jsx)(s(64960).Ay, {
                        onClick: s(436555).N2,
                        children: (0, a.jsx)(s(109939).sA, {
                            id: "universalSearch.googleDriveIngestion.googleDriveButton.closeErrorSnackbar",
                            defaultMessage: "Close"
                        })
                    })
                })
            }

            function g() {
                s(436555).D6({
                    label: (0, a.jsx)(s(109939).sA, {
                        id: "universalSearch.googleDriveIngestion.googleDriveButton.showTryAgainSnackbar",
                        defaultMessage: "There was problem processing your request. Please try again."
                    }),
                    position: "bottom",
                    style: {
                        width: "600px",
                        display: "flex",
                        justifyContent: "space-between"
                    },
                    right: (0, a.jsx)(s(64960).Ay, {
                        onClick: s(436555).N2,
                        children: (0, a.jsx)(s(109939).sA, {
                            id: "universalSearch.googleDriveIngestion.googleDriveButton.closeErrorSnackbar",
                            defaultMessage: "Close"
                        })
                    })
                })
            }
        },
        426048: (e, t, s) => {
            s.d(t, {
                AGENT_MODEL_TYPES: () => a,
                CK: () => f,
                G1: () => d,
                Gu: () => p,
                KV: () => m,
                MV: () => u,
                R5: () => r,
                UO: () => o,
                di: () => n,
                gY: () => g,
                h9: () => h,
                oA: () => l
            }), s(16280), s(898992), s(354520), s(581454), s(908872);
            let n = s(215389).YP.filter(function(e) {
                    return "isAgentModel" in e && !0 === e.isAgentModel
                }),
                a = n.map(e => e.notionName);

            function r(e) {
                return !!(0, s(722371).Xk)(a, e)
            }
            let o = n.reduce((e, t) => (e[t.notionName] = "baseModelForAvailability" in t && t.baseModelForAvailability || t.notionName, e), {}),
                i = {
                    pending: ["streaming", "confirmation:requested", "applied", "applied:partial", "applied:error", "deferred"],
                    streaming: ["confirmation:requested", "applied", "applied:partial", "applied:error", "confirmation:rejected"],
                    "confirmation:requested": ["applied", "applied:partial", "applied:error", "confirmation:rejected", "confirmation:confirmed"],
                    "confirmation:rejected": [],
                    "confirmation:confirmed": ["applied", "applied:partial", "applied:error"],
                    applied: [],
                    "applied:partial": [],
                    "applied:error": [],
                    deferred: ["pending"]
                },
                c = {
                    pending: ["deferred"],
                    streaming: ["confirmation:rejected", "deferred"],
                    "confirmation:requested": [],
                    "confirmation:confirmed": [],
                    "confirmation:rejected": [],
                    applied: [],
                    "applied:partial": [],
                    "applied:error": [],
                    deferred: ["pending", "streaming", "applied", "applied:error", "deferred"]
                };

            function l(e, t, s) {
                let n = p(e);
                if (!(n === t || i[n].includes(t) || null != s && s.isAsyncMode && c[n].includes(t))) throw Error(`Invalid tool state transition from "${n}" to "${t}"`);
                let a = { ...e,
                    state: t
                };
                return "confirmation:requested" === t && (a.requestedConfirmation = !0), "deferred" === n && "deferred" !== t && (a.deferredReason = void 0), a
            }
            let u = ["create-database", "update-database", "update-database-data-sources", "update-database-views", "update-database-triggers", "create-pages", "update-page", "update-page-v2", "delete-pages", "callFunction", "runScript"];

            function d(e) {
                return e
            }

            function p(e) {
                return e.state ? e.state : e.done ? "applied" : (0, s(780899).rk)(e)
            }

            function g(e, t) {
                return e.toolType === t
            }

            function h(e) {
                return "agent-tool-result" === e.type && "update-page-v2" === e.toolType && !!(0, s(722371).Gv)(e.result) && "autoFixInProgress" in e.result && !0 === e.result.autoFixInProgress
            }

            function m(e) {
                return !!(0, s(722371).Gv)(e) && "__deferred" in e && !0 === e.__deferred
            }

            function f(e) {
                return "agent-trigger" === e.type
            }
        },
        443709: (e, t, s) => {
            s.d(t, {
                EF: () => o,
                FS: () => a
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    selection: {
                        allSelected: !0,
                        selectedDrives: [],
                        excludedDrives: [],
                        ingestNewDrives: !0
                    },
                    status: "not_started",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    authUrl: void 0,
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    isSyncComplete: !1,
                    isLoaded: !1,
                    hasAccessToListSites: void 0,
                    accessCheckError: void 0,
                    reconnectUrl: void 0,
                    connectionDetails: void 0
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
                setInProgressAndClose() {
                    this.setState({ ...this.state,
                        currentScreen: "none",
                        connectionDetails: { ...this.state.connectionDetails,
                            status: "in_progress",
                            progress: 2
                        }
                    })
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("sharepointAiConnectorStore", o)
        },
        456925: (e, t, s) => {
            s.d(t, {
                F0: () => o,
                Gq: () => a
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    connectionStatus: "not_started",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    syncProgressPercentage: 0,
                    isLoaded: !1,
                    isDisconnecting: !1,
                    error: void 0,
                    externalSourceName: void 0,
                    connectionDetails: void 0,
                    hasAccessToListTeams: void 0,
                    accessCheckError: void 0,
                    reconnectUrl: void 0
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
                setInProgressAndClose() {
                    this.setState({ ...this.state,
                        currentScreen: "none",
                        connectionDetails: { ...this.state.connectionDetails,
                            status: "in_progress",
                            progress: 2
                        }
                    })
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("microsoftTeamsAIConnectorStore", o)
        },
        501761: (e, t, s) => {
            s.d(t, {
                qu: () => r
            });
            var n = () => s(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        analyticsFrom: "unknown",
                        sessionId: (0, s(92513).JW)(),
                        isLoaded: !1,
                        isDisconnecting: !1,
                        isEditing: !1,
                        currentScreen: "none",
                        hasCustomConnector: !1,
                        customConnectors: []
                    }
                }
            }
            let r = new a;
            (0, s(202146).exposeDebugValue)("customAIConnectorStore", r)
        },
        548161: (e, t, s) => {
            s.d(t, {
                $A: () => o,
                Cu: () => S,
                EM: () => f,
                H0: () => p,
                IZ: () => n,
                P0: () => l,
                Pi: () => h,
                Qw: () => g,
                VB: () => i,
                f5: () => m,
                iy: () => b,
                kI: () => u,
                n7: () => c,
                n_: () => d,
                nc: () => y,
                nh: () => r,
                rl: () => a,
                vL: () => C
            }), s(16280), s(944114), s(898992), s(354520), s(430670), s(581454), s(737550), s(814603), s(147566), s(198721);
            let n = 100,
                a = ["pending", "paused", "retryableFailure", "failure"];

            function r(e, t) {
                let n = Object.fromEntries(Object.entries(e).filter(([e, t]) => !!t));
                return `${t}${s(630477).qR}?${new URLSearchParams(n).toString()}`
            }

            function o(e) {
                let t = { ...e
                };
                delete t.examples, delete t.memories, delete t.annotation, "transcript" in e && Array.isArray(e.transcript) && (t.transcript = e.transcript.map(e => ({ ...e,
                    id: void 0,
                    traceId: void 0
                })));
                let n = (0, s(736157).z)(t);
                return (0, s(92513).gB)(n)
            }

            function i(e) {
                var t;
                let n = null == (t = e.state) ? void 0 : t.type;
                if (!n || !e.state) return !1;
                let a = (0, s(593186).Tc)(n);
                return !a || a.isTriggerConfigured(e.state)
            }

            function c(e, t) {
                var n;
                let a = null == (n = e.state) ? void 0 : n.type,
                    r = e.state;
                if (!a || !r) return !0;
                let o = (0, s(593186).Tc)(a);
                if (!o || !o.fields) return !0;
                let i = o.fields[t];
                return !(i && i.required(r)) || i.isConfigured(r)
            }

            function l(e) {
                return (null == e ? void 0 : e.type) === "workflow-operation"
            }

            function u(e) {
                let {
                    spaceId: t,
                    id: n,
                    table: a
                } = e;
                return a === s(43296).C ? {
                    spaceId: t,
                    workflowId: n
                } : a === s(298085).T ? {
                    spaceId: t,
                    transcriptId: n
                } : a === s(581654).U6 ? {
                    spaceId: t,
                    artifactId: n
                } : void(0, s(722371).HB)(a)
            }

            function d(e) {
                let {
                    config: t,
                    modules: n
                } = e;
                if (t) switch (t.type) {
                    case "workflow":
                        if (t.isCustomAgent && n) return (0, s(16712).Ad)(n);
                        return t.searchScopes ? ? s(425749).R2;
                    case "researcher":
                        return t.searchScope ? [t.searchScope] : void 0;
                    case "search":
                        return t.scopeForNextSearch ? [t.scopeForNextSearch] : void 0;
                    default:
                        return
                }
            }

            function p(e) {
                let {
                    config: t,
                    modules: s
                } = e;
                if (!t) return !1;
                if ("workflow" === t.type) {
                    if (void 0 !== t.useWebSearch) return !!t.useWebSearch;
                    let e = d({
                        config: t,
                        modules: s
                    });
                    return !!e && e.some(e => "web" === e.type || "everything" === e.type)
                }
                return ("researcher" === t.type || "search" === t.type) && (t.useWebSearch ? ? !1)
            }

            function g(e) {
                let {
                    config: t
                } = e;
                return (null == t ? void 0 : t.type) === "workflow" && (t.useComputer ? ? !0)
            }

            function h(e) {
                let {
                    config: t
                } = e;
                return void 0 !== t && (null == t ? void 0 : t.type) === "workflow" && !!g(e) && (t.yoloMode ? ? !1)
            }

            function m(e) {
                return e.some(e => !!((0, s(220800).OA)(e) || (0, s(220800).LO)(e) || (0, s(220800).K0)(e) || "agent-tool-result" === e.type && "run-agent" === e.toolName && e.result && "object" == typeof e.result && "affectedWorkflowIds" in e.result && Array.isArray(e.result.affectedWorkflowIds) && e.result.affectedWorkflowIds.length > 0))
            }

            function f(e) {
                let t = e.flatMap(e => {
                    var t, n;
                    if ("context" === e.type && null != (t = e.value) && t.workflowId) return [e.value.workflowId];
                    if (((0, s(220800).OA)(e) || (0, s(220800).LO)(e)) && null != (n = e.result) && n.workflowId) return [e.result.workflowId];
                    let a = function(e) {
                        var t, n;
                        if (!(0, s(220800).K0)(e)) return;
                        if (null != (t = e.result) && t.workflowId) return e.result.workflowId;
                        if ("string" != typeof(null == (n = e.result) ? void 0 : n.output)) return;
                        let a = (0, s(627179).$l)(e.result.output);
                        if (!(0, s(722371).Gv)(a) || "string" != typeof a.agentUrl) return;
                        let r = a.agentUrl.split("/")[3];
                        if (r && (0, s(4962).iv)(r)) return (0, s(4962).G2)(r)
                    }(e);
                    return a ? [a] : "agent-tool-result" === e.type && "run-agent" === e.toolName && e.result && "object" == typeof e.result && "affectedWorkflowIds" in e.result && Array.isArray(e.result.affectedWorkflowIds) ? e.result.affectedWorkflowIds : []
                });
                return t[t.length - 1]
            }
            s(969475).union([s(969475).object({
                optional: {
                    callbackType: s(969475).literals(...s(132702).Bi),
                    moduleSpecific: s(969475).string(),
                    redirectToAuth: s(969475).literal("true"),
                    slackAuthSessionId: s(969475).string(),
                    transcriptId: s(969475).string(),
                    workflowId: s(969475).string()
                },
                required: {
                    moduleId: s(969475).string(),
                    spaceId: s(969475).string(),
                    type: s(969475).literal("workflow"),
                    userId: s(969475).string()
                }
            }), s(969475).object({
                optional: {
                    callbackType: s(969475).literals(...s(132702).Bi),
                    moduleSpecific: s(969475).string(),
                    redirectToAuth: s(969475).literal("true"),
                    slackAuthSessionId: s(969475).string()
                },
                required: {
                    integrationId: s(969475).string(),
                    spaceId: s(969475).string(),
                    transcriptId: s(969475).string(),
                    type: s(969475).literal("agent"),
                    userId: s(969475).string()
                }
            })]);
            class y extends Error {
                constructor(e, t) {
                    super(e), this.reasons = t, this.name = "WorkflowValidationError"
                }
            }

            function S(e) {
                let t = [];
                return (e.instructions ? (0, s(886883).Zv)(e.instructions) && 0 === (0, s(886883).rr)(e.instructions).length && t.push({
                    type: "missing_field",
                    fieldName: "instructions"
                }) : t.push({
                    type: "missing_field",
                    fieldName: "instructions"
                }), t.length > 0) ? s(300441).Q.fail(t) : s(300441).Q.success(void 0)
            }

            function C({
                workflowId: e,
                spaceId: t
            }) {
                return {
                    id: e,
                    table: s(43296).C,
                    spaceId: t
                }
            }

            function b(e) {
                return "role" in e && "editor" === e.role && ((0, s(642157).B2)(e) || (0, s(642157).Lg)(e) || (0, s(642157).Ds)(e))
            }
        },
        564027: (e, t, s) => {
            function n(e) {
                return "assistantChat" === e.type ? 1 === e.operations.length && "createBlock" === e.operations[0].command && "text" === e.operations[0].blockNode.tagName && 0 === e.operations[0].blockNode.text.length : "assistantChatText" === e.type ? 0 === e.text.length : void(0, s(722371).HB)(e)
            }

            function a(e) {
                return (0, s(59406).w)(e) ? (0, s(107297).n)() : (0, s(328765).S)()
            }
            s.d(t, {
                Cb: () => n,
                fM: () => a
            }), s(16280), s(898992), s(672577)
        },
        600923: (e, t, s) => {
            s.d(t, {
                K: () => I
            }), s(16280);
            class n {
                createSearchScope() {
                    return {
                        type: this.base.type
                    }
                }
                getSearchScopeDisplayDetails(e) {
                    return {
                        displayName: this.base.displayName
                    }
                }
                isEligible(e) {
                    return s(886556).z.canUseAiConnectorSearchScope(this.base.type)
                }
                isLoading() {
                    return !(0, s(876688).A7)(this.base.type)
                }
                isInProgress() {
                    return (0, s(212490).LT)(this.base.type).isInProgress
                }
                isDisconnecting() {
                    return (0, s(212490).$t)(this.base.type)
                }
                isEnabled(e) {
                    return (0, s(226088).H5)(e, this.base.type)
                }
                setEnabled(e, t, n) {
                    return this.isAvailable(n ? ? {}) ? (0, s(226088).dV)({
                        value: e,
                        scopeType: this.base.type,
                        enabled: t,
                        createScope: () => this.createSearchScope()
                    }) : e
                }
                toSearchScopeModule() {
                    return {
                        type: this.base.type,
                        displayName: this.base.displayName,
                        icon: this.icon,
                        isEligible: e => this.isEligible(e),
                        isLoading: () => this.isLoading(),
                        isAvailable: e => this.isAvailable(e),
                        needsAuth: () => this.needsAuth(),
                        createSearchScope: () => this.createSearchScope(),
                        isEnabled: e => this.isEnabled(e),
                        setEnabled: (e, t, s) => this.setEnabled(e, t, s),
                        isInProgress: () => this.isInProgress(),
                        isDisconnecting: () => this.isDisconnecting(),
                        isConnected: e => this.isConnected(e),
                        connect: e => this.connect(e)
                    }
                }
                getSearchScopeModules() {
                    return [this.toSearchScopeModule()]
                }
                async authenticate(e) {
                    let {
                        environment: t,
                        spaceId: n,
                        onAuthSuccess: a
                    } = e;
                    if (!this.needsAuth()) return;
                    let r = s(399077).NT[this.base.type].state,
                        o = await t.api.callApi({
                            eventName: "getAIConnectorAuthorizationUrl",
                            environment: t,
                            data: {
                                connector: this.base.type,
                                authorizationType: "user",
                                spaceId: n,
                                sessionId: r.sessionId,
                                client: t.device.isElectron ? "desktop" : "web"
                            }
                        });
                    "success" === o.type && (t.device.isElectron ? (0, s(754573).P)(o.data.authorizationUrl) : (s(956935).P(t, {
                        width: 800,
                        height: 600,
                        url: o.data.authorizationUrl,
                        titleMessage: this.messages.oauthPopupTitleMessage
                    }), null == a || a()))
                }
            }
            class a extends n {
                base = new(s(369056)).v;
                store = s(711421).P0;
                icon = s(116531).X;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "asanaAIConnector.oauthPopup.title",
                        defaultMessage: "Asana Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.asanaItem.tooltip",
                        defaultMessage: "Find in your Asana tasks and projects"
                    },
                    userDisconnectedMessage: {
                        id: "asanaAIConnector.userAuth.disconnected",
                        defaultMessage: "Asana user account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "asana_already_connected",
                    primedTextInput: "Search for tasks in Asana",
                    contentType: "tasks"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("asana" !== e.parsedData.type) throw Error(`Expected asana parsed data, got ${e.parsedData.type}`);
                    let {
                        href: t,
                        parsedData: n
                    } = e;
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: t,
                        url: n.url,
                        messageId: n.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("asana" !== e.result.type) throw Error(`Expected asana result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.url,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "asana"
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        isLoaded: !0,
                        connectionStatus: "not_started",
                        isDisconnecting: !1
                    }), {
                        status: "success"
                    };
                    let r = null == a ? void 0 : a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        isConnected: (null == r ? void 0 : r.status) === "completed" || (null == r ? void 0 : r.status) === "disconnecting",
                        isLoaded: !0,
                        syncProgressPercentage: (null == r ? void 0 : r.progress) ? ? 0,
                        connectionStatus: (null == r ? void 0 : r.status) ? ? "not_started",
                        externalSourceName: null == r ? void 0 : r.external_source_name,
                        isDisconnecting: (null == r ? void 0 : r.status) === "disconnecting"
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    }), {
                        type: "success"
                    }
                }
                async disconnectConnectorPersonalAuth(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    (0, s(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "user_auth_disconnect",
                                integration_type: this.base.type,
                                setup_session_id: this.store.state.sessionId,
                                from: this.store.state.analyticsFrom
                            }
                        }
                    }), await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: n,
                            connector: this.base.type,
                            disconnectionType: "user"
                        }
                    }), this.store.setState({ ...this.store.state,
                        connectionStatus: "not_started",
                        isConnected: !1
                    }), this.messages.userDisconnectedMessage && s(436555).D6({
                        label: s(962299).A.getIntl().formatMessage(this.messages.userDisconnectedMessage),
                        position: "bottom"
                    })
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("asana" === t.type) {
                        if ("asana" !== n.type) throw Error(`Expected asana result, but got ${n.type}`);
                        return [{
                            type: "asana",
                            href: t.id,
                            id: t.pageId,
                            title: t.title,
                            text: (0, s(444700).Mw)(t.text),
                            lastEdited: t.lastEdited,
                            url: n.url,
                            highlight: t.highlight
                        }]
                    }
                }
                getDismissedAuthPromptKey() {
                    return "dismissed_asana_personal_auth_prompt"
                }
                isConnected(e) {
                    return s(886556).z.isConnectedToAsanaAiConnector(this.store.state)
                }
                needsAuth() {
                    let {
                        connectionStatus: e,
                        syncProgressPercentage: t
                    } = this.store.state;
                    return "in_progress" === e && void 0 === t
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "asana",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = this.store.getInitialState();
                    return {
                        not_started: { ...e
                        },
                        in_progress: { ...e,
                            connectionStatus: "in_progress",
                            syncProgressPercentage: 50
                        },
                        disconnecting: { ...e,
                            isConnected: !0,
                            connectionStatus: "disconnecting",
                            isDisconnecting: !0
                        },
                        connected: { ...e,
                            isConnected: !0,
                            connectionStatus: "completed",
                            syncProgressPercentage: 100
                        }
                    }
                }
            }
            class r extends n {
                base = new(s(649084)).m;
                store = s(158423).MX;
                icon = s(625508).g;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "boxAiConnector.oauthPopup.title",
                        defaultMessage: "Box Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.boxItem.tooltip",
                        defaultMessage: "Find in your Box files"
                    },
                    userDisconnectedMessage: {
                        id: "boxAiConnector.userAuth.disconnected",
                        defaultMessage: "Box account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "box_already_connected",
                    primedTextInput: "Search for files in Box",
                    contentType: "files"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("box" !== e.parsedData.type) throw Error(`Expected box parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("box" !== e.result.type) throw Error(`Expected box result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback({
                    context: e,
                    parsedData: t
                }) {
                    if (e.searchSourceType === this.base.type && t.type === this.base.type) return { ...t,
                        type: this.base.type,
                        url: t.url,
                        title: e.title,
                        text: "",
                        lastEdited: e.lastEdited,
                        href: (0, s(281708).V9)(t.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "box"
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        isConnected: (null == r ? void 0 : r.status) === "completed" || (null == r ? void 0 : r.status) === "disconnecting",
                        isLoaded: !0,
                        ingestionProgress: (null == r ? void 0 : r.progress) ? ? 0,
                        status: (null == r ? void 0 : r.status) ? ? "not_started",
                        externalSourceName: null == r ? void 0 : r.external_source_name
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    }), {
                        type: "success"
                    }
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {}
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToBoxAiConnector(this.store.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "box",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(158423).vh)();
                    return {
                        not_started: { ...e,
                            isLoaded: !0
                        },
                        in_progress: { ...e,
                            status: "in_progress",
                            isLoaded: !0
                        },
                        disconnecting: { ...e,
                            status: "disconnecting",
                            isLoaded: !0
                        },
                        connected: { ...e,
                            status: "completed",
                            isConnected: !0,
                            isLoaded: !0
                        }
                    }
                }
            }
            class o extends n {
                base = new(s(320322)).H;
                store = s(186241).zZ;
                icon = s(254497).z;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "confluenceAiConnector.oauthPopup.title",
                        defaultMessage: "Confluence Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.confluenceItem.tooltip",
                        defaultMessage: "Find in your Confluence pages"
                    },
                    userDisconnectedMessage: {
                        id: "confluenceAiConnector.userAuth.disconnected",
                        defaultMessage: "Confluence account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "confluence_already_connected",
                    primedTextInput: "Search for pages in Confluence",
                    contentType: "pages"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("confluence" !== e.parsedData.type) throw Error(`Expected confluence parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("confluence" !== e.result.type) throw Error(`Expected confluence result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback({
                    context: e,
                    parsedData: t
                }) {
                    if (e.searchSourceType === this.base.type && t.type === this.base.type) return { ...t,
                        type: this.base.type,
                        url: t.url,
                        title: e.title,
                        text: "",
                        lastEdited: e.lastEdited,
                        href: (0, s(281708).V9)(t.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "confluence"
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails,
                        o = a.details.userConnectionDetails;
                    return this.store.setState({ ...this.store.state,
                        isConnected: !!(null == r ? void 0 : r.status),
                        isLoaded: !0,
                        ingestionProgress: (null == r ? void 0 : r.progress) ? ? 0,
                        status: (null == r ? void 0 : r.status) ? ? "not_started",
                        externalSourceName: null == r ? void 0 : r.external_source_name,
                        userAuthStatus: (null == r ? void 0 : r.status) === "disconnecting" ? "not_required" : (null == o ? void 0 : o.userAuthStatus) ? ? "not_required"
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    }), {
                        type: "success"
                    }
                }
                async disconnectConnectorPersonalAuth(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    (0, s(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "user_auth_disconnect",
                                integration_type: this.base.type,
                                setup_session_id: this.store.state.sessionId,
                                from: this.store.state.analyticsFrom
                            }
                        }
                    }), await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: n,
                            connector: this.base.type,
                            disconnectionType: "user"
                        }
                    }), this.store.setState({ ...this.store.state,
                        userAuthStatus: "pending"
                    }), this.messages.userDisconnectedMessage && s(436555).D6({
                        label: s(962299).A.getIntl().formatMessage(this.messages.userDisconnectedMessage),
                        position: "bottom"
                    })
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {}
                getDismissedAuthPromptKey() {
                    return "dismissed_confluence_personal_auth_prompt"
                }
                isConnected(e) {
                    return s(886556).z.isConnectedToConfluenceAiConnector(this.store.state)
                }
                needsAuth() {
                    return "pending" === this.store.state.userAuthStatus
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "confluence",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(186241).WS)();
                    return {
                        not_started: { ...e,
                            isLoaded: !0
                        },
                        in_progress: { ...e,
                            status: "in_progress",
                            isLoaded: !0
                        },
                        disconnecting: { ...e,
                            status: "disconnecting",
                            isLoaded: !0
                        },
                        connected: { ...e,
                            status: "completed",
                            isConnected: !0,
                            isLoaded: !0
                        }
                    }
                }
            }
            s(898992), s(672577), s(430670), s(581454);
            class i extends n {
                base = new(s(9668)).S;
                store = s(501761).qu;
                icon = s(480871).H;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "customAIConnector.oauthPopup.title",
                        defaultMessage: "Custom AI connector authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.customItem.tooltip",
                        defaultMessage: "Find in your custom data sources"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "custom_already_connected",
                    primedTextInput: "Search your custom connector data",
                    contentType: "custom data"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("custom" !== e.parsedData.type) throw Error(`Expected custom parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("custom" !== e.result.type) throw Error(`Expected custom result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).y)({
                        environment: t,
                        spaceId: n
                    });
                    if ("success" !== a.type || !("connectedConnectors" in a.data)) return this.store.setState({ ...this.store.state,
                        isLoaded: !0,
                        hasCustomConnector: !1,
                        customConnectors: []
                    }), {
                        status: "failed"
                    };
                    let r = a.data.connectedConnectors.flatMap(e => {
                        if ("custom" !== e.id) return [];
                        let t = e.details.connectionDetails;
                        return (0, s(929248).nL)(t) ? [{
                            id: e.customConnectorId ? ? e.thirdPartyId,
                            customConnectorId: e.customConnectorId,
                            thirdPartyId: e.thirdPartyId,
                            displayName: t.display_name,
                            iconUrl: t.icon_url,
                            description: t.description,
                            archetype: t.archetype,
                            status: "active",
                            lastEventReceivedAt: t.sync_completed_at
                        }] : []
                    });
                    return this.store.setState({ ...this.store.state,
                        isLoaded: !0,
                        hasCustomConnector: r.length > 0,
                        customConnectors: r
                    }), {
                        status: "success"
                    }
                }
                disconnectConnector(e) {
                    return Promise.resolve({
                        type: "success"
                    })
                }
                disconnectConnectorPersonalAuth(e) {
                    return Promise.resolve()
                }
                setDebuggingStatus(e) {
                    return !1
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("custom" !== t.type || "custom" !== n.type) throw Error(`Expected custom result, but got result.type=${t.type} parsed.type=${n.type}`);
                    return [{
                        type: "custom",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        url: n.url,
                        iconUrl: "iconUrl" in t ? t.iconUrl : void 0
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return this.store.state.hasCustomConnector
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "custom",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getSearchScopeDisplayDetails(e) {
                    let {
                        searchScope: t
                    } = e;
                    if ("custom" !== t.type) return {
                        displayName: this.base.displayName
                    };
                    let s = this.store.state.customConnectors.find(e => t.customConnectorId ? e.customConnectorId === t.customConnectorId : !!t.thirdPartyId && e.thirdPartyId === t.thirdPartyId);
                    return {
                        displayName: t.displayName ? ? (null == s ? void 0 : s.displayName) ? ? this.base.displayName,
                        iconUrl: null == s ? void 0 : s.iconUrl
                    }
                }
                toSearchScopeModule(e) {
                    if (!(null != e && e.customConnector)) return super.toSearchScopeModule();
                    let t = e.customConnector;
                    return {
                        type: "custom",
                        moduleKey: `custom:${t.customConnectorId??t.thirdPartyId}`,
                        displayName: t.displayName ? ? "Custom AI Connector",
                        icon: this.icon,
                        iconUrl: t.iconUrl,
                        isEligible: e => this.isEligible(e),
                        isLoading: () => this.isLoading(),
                        isAvailable: e => this.isAvailable(e),
                        needsAuth: () => this.needsAuth(),
                        createSearchScope: () => ({
                            type: "custom",
                            customConnectorId: t.customConnectorId,
                            thirdPartyId: t.thirdPartyId,
                            displayName: t.displayName ? ? "Custom AI Connector"
                        }),
                        isEnabled: () => !1,
                        setEnabled: e => e,
                        isInProgress: () => this.isInProgress(),
                        isDisconnecting: () => this.isDisconnecting(),
                        isConnected: e => this.isConnected(e),
                        connect: e => this.connect(e)
                    }
                }
                getSearchScopeModules() {
                    let e = this.store.state.customConnectors;
                    return e.length > 0 ? e.map(e => this.toSearchScopeModule({
                        customConnector: e
                    })) : [this.toSearchScopeModule()]
                }
            }
            class c extends n {
                base = new(s(603524)).Z;
                store = s(801477).lk;
                icon = s(109565).h;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "discordAIConnector.oauthPopup.title",
                        defaultMessage: "Discord Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.discordItem.tooltip",
                        defaultMessage: "Find in Discord servers you have access to"
                    },
                    userDisconnectedMessage: {
                        id: "discordAIConnector.userAuth.disconnected",
                        defaultMessage: "Discord user account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "discord_already_connected",
                    primedTextInput: "Search for messages in Discord",
                    contentType: "messages"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("discord" !== e.parsedData.type) throw Error(`Expected discord parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("discord" !== e.result.type) throw Error(`Expected discord result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "discord"
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let r = null == a ? void 0 : a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        isConnected: (null == r ? void 0 : r.status) === "completed" || (null == r ? void 0 : r.status) === "disconnecting",
                        isLoaded: !0,
                        syncProgressPercentage: (null == r ? void 0 : r.progress) ? ? 0,
                        connectionStatus: (null == r ? void 0 : r.status) ? ? "not_started",
                        externalSourceName: null == r ? void 0 : r.external_source_name
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    })
                }
                async disconnectConnectorPersonalAuth(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    (0, s(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "user_auth_disconnect",
                                integration_type: this.base.type,
                                setup_session_id: this.store.state.sessionId,
                                from: this.store.state.analyticsFrom
                            }
                        }
                    }), await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: n,
                            connector: this.base.type,
                            disconnectionType: "user"
                        }
                    }), this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        connectionStatus: "not_started",
                        syncProgressPercentage: 0
                    }), this.messages.userDisconnectedMessage && s(436555).D6({
                        label: s(962299).A.getIntl().formatMessage(this.messages.userDisconnectedMessage),
                        position: "bottom"
                    })
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("discord" !== t.type || "discord" !== n.type) throw Error(`Expected discord result, but got ${t.type}`);
                    return [{
                        type: "discord",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        url: n.url,
                        channelId: t.channelId,
                        messageId: t.messageId,
                        guildId: t.guildId,
                        threadHref: t.id,
                        highlight: t.highlight
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToDiscordAiConnector(this.store.state)
                }
                needsAuth() {
                    let {
                        connectionStatus: e,
                        syncProgressPercentage: t
                    } = this.store.state;
                    return "in_progress" === e && void 0 === t
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "discord",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = this.store.getInitialState();
                    return {
                        not_started: { ...e
                        },
                        in_progress: { ...e,
                            connectionStatus: "in_progress",
                            syncProgressPercentage: 50
                        },
                        disconnecting: { ...e,
                            isConnected: !0,
                            connectionStatus: "disconnecting",
                            isDisconnecting: !0
                        },
                        connected: { ...e,
                            isConnected: !0,
                            connectionStatus: "completed",
                            syncProgressPercentage: 100
                        }
                    }
                }
            }
            class l extends n {
                base = new(s(784732)).o;
                store = s(314365).o;
                icon = s(198852).A;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "githubAIConnector.oauthPopup.title",
                        defaultMessage: "GitHub Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.githubItem.tooltipDriver",
                        defaultMessage: "Find in your GitHub repositories"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "github_already_connected",
                    primedTextInput: "Search for code, pull requests, and issues in GitHub",
                    contentType: "GitHub repositories"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("github" !== e.parsedData.type) throw Error(`Expected github parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("github" !== e.result.type) throw Error(`Expected github result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: this.base.type
                    });
                    if ("failed" === a) return {
                        status: "failed"
                    };
                    if (a) {
                        let e = a.details.connectionDetails;
                        this.store.setState({ ...this.store.state,
                            status: this.getGithubStatus({
                                githubOrg: {
                                    isSyncComplete: "completed" === e.status || "disconnecting" === e.status
                                },
                                isConnected: !0
                            }),
                            isConnected: !1,
                            githubOrg: {
                                id: (null == e ? void 0 : e.orgId) ? ? 0,
                                installationId: Number((null == e ? void 0 : e.installationId) ? ? 0),
                                name: (null == e ? void 0 : e.external_source_name) ? ? "",
                                isSyncComplete: (null == e ? void 0 : e.status) === "completed"
                            },
                            isPersonalAuthComplete: (null == e ? void 0 : e.status) !== "completed" || a.details.userConnectionDetails.isPersonalAuthComplete,
                            isDisconnecting: (null == e ? void 0 : e.status) === "disconnecting",
                            isLoaded: !0,
                            externalSourceName: null == e ? void 0 : e.external_source_name
                        })
                    } else this.store.setState({ ...this.store.state,
                        status: "not_started",
                        isConnected: !1,
                        githubOrg: void 0,
                        isPersonalAuthComplete: !1,
                        isDisconnecting: !1,
                        isLoaded: !0,
                        externalSourceName: void 0
                    });
                    return {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e, n = await t.api.callApi({
                        eventName: "disconnectGithub",
                        environment: t,
                        data: {
                            spaceId: s
                        }
                    });
                    return this.store.setState({ ...this.store.state,
                        isDisconnecting: !0
                    }), n
                }
                async disconnectConnectorPersonalAuth(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await t.api.callApi({
                        eventName: "disconnectGithub",
                        environment: t,
                        data: {
                            spaceId: n,
                            disconnectUserAuth: !0
                        }
                    });
                    this.store.setState({ ...this.store.state,
                        isPersonalAuthComplete: !1
                    }), "success" === a.type && a.data.redirectUrl && (t.device.isElectron ? (0, s(754573).P)(a.data.redirectUrl) : window.open(a.data.redirectUrl, "_blank"))
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("github" !== t.type || "github" !== n.type) throw Error(`Expected github result, but got result.type=${t.type} parsed.type=${n.type}`);
                    return [{
                        type: "github",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        authorName: t.authorName,
                        statusTag: t.statusTag,
                        githubRepoName: t.githubRepoName,
                        fileType: t.fileType,
                        url: n.url,
                        highlight: t.highlight
                    }]
                }
                getDismissedAuthPromptKey() {
                    return "dismissed_github_personal_auth_prompt"
                }
                async authenticate(e) {
                    let {
                        environment: t,
                        spaceId: n,
                        onAuthSuccess: a
                    } = e, r = s(399077).NT[this.base.type].state, o = await t.api.callApi({
                        eventName: "getGithubUserAuthUrl",
                        environment: t,
                        data: {
                            spaceId: n,
                            isDesktop: t.device.isElectron,
                            sessionId: r.sessionId
                        }
                    });
                    "success" === o.type && (t.device.isElectron ? (0, s(754573).P)(o.data.url) : (s(956935).P(t, {
                        width: 800,
                        height: 600,
                        url: o.data.url,
                        titleMessage: this.messages.oauthPopupTitleMessage
                    }), null == a || a()))
                }
                isConnected(e) {
                    return s(886556).z.isConnectedToGithubUniversalQnA(this.store.state)
                }
                needsAuth() {
                    return (0, s(212490).F1)(this.store.state)
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    this.needsAuth() ? (0, s(166672).openAuthNeededModal)({
                        connector: this.base.type,
                        from: "multi_search_scope_menu"
                    }) : (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getGithubStatus(e) {
                    var t;
                    return null != (t = e.githubOrg) && t.isSyncComplete ? "completed" : e.isConnected ? "in_progress" : "not_started"
                }
                getTestableStatuses() {
                    let e = (0, s(314365).F)();
                    return {
                        not_started: { ...e
                        },
                        authenticated: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0
                        },
                        in_progress: { ...e,
                            status: "in_progress",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0
                        },
                        completed: { ...e,
                            status: "completed",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0,
                            githubOrg: {
                                id: 123,
                                installationId: 456,
                                name: "test-org",
                                isSyncComplete: !0
                            }
                        },
                        disconnecting: { ...e,
                            status: "completed",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0,
                            isDisconnecting: !0
                        },
                        auth_needed: { ...e,
                            status: "completed",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !1,
                            githubOrg: {
                                id: 123,
                                installationId: 456,
                                name: "test-org",
                                isSyncComplete: !0
                            }
                        }
                    }
                }
            }
            class u extends n {
                base = new(s(475544)).X;
                store = s(218705).XS;
                icon = s(851883).l;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "gmailAIConnector.oauthPopup.title",
                        defaultMessage: "Gmail Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.gmailItem.tooltip",
                        defaultMessage: "Find in your emails"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "gmail_already_connected",
                    primedTextInput: "Search for emails in Gmail",
                    contentType: "emails"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("gmail" !== e.parsedData.type) throw Error(`Expected gmail parsed data, got ${e.parsedData.type}`);
                    let {
                        href: t,
                        parsedData: n
                    } = e;
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: t,
                        url: n.url,
                        messageId: n.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("gmail" !== e.result.type) throw Error(`Expected gmail result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && "gmail" === n.type) return { ...n,
                        type: "gmail",
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href),
                        threadHref: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "gmail"
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        status: "not_started",
                        isPersonalAuthComplete: !1,
                        isConnected: !1,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        externalSourceName: r.external_source_name,
                        status: "completed" === r.status ? "authenticated" : "not_started",
                        isConnected: "completed" === r.status,
                        isLoaded: !0,
                        isPersonalAuthComplete: !0
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    }), {
                        type: "success"
                    }
                }
                async disconnectConnectorPersonalAuth(e) {
                    return Promise.reject(Error("GmailClientDriver.disconnectConnectorPersonalAuth() is not implemented"))
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("gmail" === t.type) {
                        if ("gmail" !== n.type) throw Error(`Expected gmail result, but got ${n.type}`);
                        return [{
                            type: "gmail",
                            href: t.id,
                            id: t.pageId,
                            title: t.title,
                            text: (0, s(444700).Mw)(t.text),
                            lastEdited: t.lastEdited,
                            emailAddress: t.emailAddress,
                            url: n.url
                        }]
                    }
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToGmailUniversalQnA(this.store.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "gmail",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                getTestableStatuses() {
                    let e = this.store.getInitialState();
                    return {
                        not_started: e,
                        connected: { ...e,
                            isConnected: !0,
                            status: "authenticated"
                        }
                    }
                }
            }
            class d extends n {
                base = new(s(732820)).O;
                store = s(14214).Wz;
                icon = s(105586).c;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "googleCalendarAIConnector.oauthPopup.title",
                        defaultMessage: "Google Calendar Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.googleCalendarItem.tooltip",
                        defaultMessage: "Find in your Google Calendar events"
                    },
                    userDisconnectedMessage: {
                        id: "googleCalendarAIConnector.userAuth.disconnected",
                        defaultMessage: "Google Calendar account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "google-calendar_already_connected",
                    primedTextInput: "Search your Google Calendar events",
                    contentType: "events"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("google-calendar" !== e.parsedData.type) throw Error(`Expected google-calendar parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("google-calendar" !== e.result.type) throw Error(`Expected google-calendar result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "google-calendar"
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        status: "not_started",
                        isPersonalAuthComplete: !1,
                        isConnected: !1,
                        isLoaded: !0,
                        externalSourceName: void 0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        status: "completed" === r.status ? "authenticated" : "not_started",
                        isConnected: "completed" === r.status,
                        isLoaded: !0,
                        isPersonalAuthComplete: !0,
                        externalSourceName: r.external_source_name
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    }), {
                        type: "success"
                    }
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("google-calendar" !== t.type || "google-calendar" !== n.type) throw Error(`Expected google-calendar result, but got ${t.type}`);
                    return [{
                        type: "google-calendar",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        emailAddress: t.emailAddress,
                        url: n.url
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToGoogleCalendarUniversalQnA(this.store.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "google-calendar",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(14214).Rr)();
                    return {
                        not_started: { ...e,
                            isLoaded: !0
                        },
                        connected: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isPersonalAuthComplete: !0,
                            isLoaded: !0
                        }
                    }
                }
            }
            class p extends n {
                base = new(s(659348)).s;
                store = s(454752).d;
                icon = s(526812).s;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "googleDriveAIConnector.oauthPopup.title",
                        defaultMessage: "Google Drive Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.googleDriveItem.tooltip",
                        defaultMessage: "Find in your Google Drive files"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "google_drive_already_connected",
                    primedTextInput: "Search for files in Google Drive",
                    contentType: "files"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("google-drive" !== e.parsedData.type) throw Error(`Expected google-drive parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("google-drive" !== e.result.type) throw Error(`Expected google-drive result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: this.base.type
                    });
                    if ("failed" === a) return {
                        status: "failed"
                    };
                    if (!a) return s(454752).d.setState({ ...s(454752).d.state,
                        initialSyncState: "none",
                        isDisconnecting: !1,
                        isEditing: !1,
                        syncProgress: "not_started",
                        ingestionProgress: void 0,
                        isLoaded: !0,
                        externalSourceName: void 0
                    }), {
                        status: "success"
                    }; {
                        let e = a.details.connectionDetails,
                            t = (e => {
                                switch (e) {
                                    case "completed":
                                        return "completed";
                                    case "disconnecting":
                                        return "disconnecting";
                                    case "in_progress":
                                    case "awaiting_live_ingestion":
                                        return "initial_file_sync_in_progress";
                                    case "pending_selection":
                                        return "pending_selection";
                                    default:
                                        return "not_started"
                                }
                            })((null == e ? void 0 : e.status) || "in_progress");
                        return s(454752).d.setState({ ...s(454752).d.state,
                            initialSyncState: (0, s(876688).HB)(t),
                            isDisconnecting: (null == e ? void 0 : e.status) === "disconnecting",
                            isEditing: !1,
                            syncProgress: t,
                            ingestionProgress: (null == e ? void 0 : e.progress) >= 100 || (null == e ? void 0 : e.status) === "completed" ? void 0 : (null == e ? void 0 : e.progress) ? ? 0,
                            isLoaded: !0,
                            externalSourceName: null == e ? void 0 : e.external_source_name
                        }), {
                            status: "success"
                        }
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s,
                        disconnectReason: n
                    } = e;
                    return "success" === (await t.api.callApi({
                        eventName: "disconnectGoogleDriveAIIngestion",
                        environment: t,
                        data: {
                            spaceId: s,
                            disconnectReason: n
                        }
                    })).type ? {
                        type: "success"
                    } : {
                        type: "failed"
                    }
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("google-drive" !== t.type || "google-drive" !== n.type) throw Error(`Expected google-drive result, but got result.type=${t.type} parsed.type=${n.type}`);
                    return [{
                        type: "google-drive",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        url: n.url,
                        fileType: t.fileType
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToGoogleDriveUniversalQnA(s(32913).Rh.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = this.store.getInitialState();
                    return {
                        not_started: { ...e
                        },
                        connected: { ...e,
                            currentScreen: "none",
                            initialSyncState: "completed",
                            isLoaded: !0
                        },
                        disconnecting: { ...e,
                            currentScreen: "none",
                            initialSyncState: "completed",
                            isLoaded: !0,
                            isDisconnecting: !0
                        }
                    }
                }
            }
            class g extends n {
                base = new(s(141334)).h;
                store = s(213056).EF;
                legacyStore = s(329488).yg;
                icon = s(93575).N;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "jiraAIConnector.oauthPopup.title",
                        defaultMessage: "Jira Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.jiraItem.tooltip",
                        defaultMessage: "Find in Jira issues you have access to"
                    },
                    userDisconnectedMessage: {
                        id: "jiraAIConnector.userAuth.disconnected",
                        defaultMessage: "Jira user account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "jira_already_connected",
                    primedTextInput: "Search for issues in Jira",
                    contentType: "issues"
                };
                getCitationAnnotationFromParsedHref(e) {
                    let {
                        parsedData: t,
                        href: n
                    } = e;
                    if ("jira" !== t.type) throw Error(`Expected jira parsed data, got ${t.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: n,
                        url: t.url,
                        messageId: t.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    let {
                        result: t
                    } = e;
                    if ("jira" !== t.type) throw Error(`Expected jira result, got ${t.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: t.href,
                        url: t.url,
                        messageId: t.id,
                        resultId: t.id,
                        positionWithinSource: t.positionWithinSource,
                        traceId: t.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = this.legacyStore, r = this.store;
                    if (s(886556).z.isJiraOldAiConnectorEnabled() && !a.state.isLoaded && a.setState({ ...a.state,
                            isLoaded: !0,
                            jiraSyncState: "not_started",
                            jiraSyncProgress: 0
                        }), !s(886556).z.isJiraForgeEnabled()) return {
                        status: "success"
                    };
                    let o = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "jira"
                    });
                    if ("failed" === o) return {
                        status: "failed"
                    };
                    if (!o) return r.setState({ ...r.state,
                        jiraSyncState: "not_started",
                        jiraSyncProgress: 0,
                        jiraSiteUrl: "",
                        isDisconnecting: !1,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let i = o.details.connectionDetails;
                    return r.setState({ ...r.state,
                        jiraSyncState: (null == i ? void 0 : i.status) ? ? "not_started",
                        jiraSyncProgress: (null == i ? void 0 : i.progress) ? ? 0,
                        jiraSiteUrl: (null == i ? void 0 : i.external_source_name) ? ? "",
                        isDisconnecting: (null == i ? void 0 : i.status) === "disconnecting",
                        isLoaded: !0
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    if (s(886556).z.isJiraOldAiConnectorEnabled()) {
                        let e = await t.api.callApi({
                            eventName: "disconnectJiraConnector",
                            environment: t,
                            data: {
                                spaceId: n,
                                jiraSiteId: this.legacyStore.state.jiraSiteId
                            }
                        });
                        return "success" === e.type && this.legacyStore.setState({ ...this.legacyStore.state,
                            isDisconnecting: !0
                        }), e
                    }
                    return t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: n,
                            connector: this.base.type
                        }
                    })
                }
                async disconnectConnectorPersonalAuth(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    if (!s(886556).z.isJiraOldAiConnectorEnabled()) return;
                    let a = await t.api.callApi({
                        eventName: "disconnectJiraUserConnection",
                        environment: t,
                        data: {
                            spaceId: n
                        }
                    });
                    "success" === a.type && !0 === a.data.disconnected && (this.legacyStore.setState({ ...this.legacyStore.state,
                        userConnected: !1,
                        missingUserAuth: !0
                    }), this.messages.userDisconnectedMessage && s(436555).D6({
                        label: s(962299).A.getIntl().formatMessage(this.messages.userDisconnectedMessage),
                        position: "bottom"
                    }))
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    if ((0, s(722371).O)(t, e)) {
                        let {
                            legacy: s,
                            v2: n
                        } = t[e];
                        return this.legacyStore.setState(s), this.store.setState(n), !0
                    }
                    return !1
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("jira" === t.type) {
                        if ("jira" !== n.type) throw Error(`Expected jira result, but got ${n.type}`);
                        return [{
                            type: "jira",
                            href: t.id,
                            id: t.pageId,
                            title: t.title,
                            text: (0, s(444700).Mw)(t.text),
                            lastEdited: t.lastEdited,
                            url: n.url,
                            highlight: t.highlight
                        }]
                    }
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToJiraUniversalQnA(this.legacyStore.state, this.store.state)
                }
                needsAuth() {
                    return s(886556).z.isJiraOldAiConnectorEnabled() && !0 === this.legacyStore.state.missingUserAuth
                }
                isAvailable(e) {
                    return this.isConnected(e) && !this.needsAuth()
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: "jira",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(329488).LF)(),
                        t = (0, s(213056).Xh)();
                    return {
                        not_started: {
                            legacy: { ...e,
                                isLoaded: !0
                            },
                            v2: { ...t,
                                isLoaded: !0
                            }
                        },
                        in_progress: {
                            legacy: { ...e,
                                jiraSyncState: "in_progress",
                                jiraSyncProgress: 50,
                                isLoaded: !0
                            },
                            v2: { ...t,
                                jiraSyncState: "in_progress",
                                jiraSyncProgress: 50,
                                isLoaded: !0
                            }
                        },
                        disconnecting: {
                            legacy: { ...e,
                                jiraSyncState: "completed",
                                isDisconnecting: !0,
                                isLoaded: !0
                            },
                            v2: { ...t,
                                jiraSyncState: "disconnecting",
                                jiraSyncProgress: 100,
                                isDisconnecting: !0,
                                isLoaded: !0
                            }
                        },
                        connected: {
                            legacy: { ...e,
                                jiraSyncState: "completed",
                                isLoaded: !0
                            },
                            v2: { ...t,
                                jiraSyncState: "completed",
                                jiraSyncProgress: 100,
                                isLoaded: !0
                            }
                        },
                        jira_connection_pending: {
                            legacy: { ...e,
                                jiraSyncState: "pending_connection",
                                jiraSyncProgress: 0,
                                isLoaded: !0
                            },
                            v2: { ...t,
                                jiraSyncState: "pending_installation",
                                jiraSyncProgress: 0,
                                isLoaded: !0
                            }
                        }
                    }
                }
            }
            class h extends n {
                base = new(s(312763))._;
                store = s(368381).W;
                icon = s(242426).u;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "linearAIConnector.oauthPopup.title",
                        defaultMessage: "Linear Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.linearItem.tooltip",
                        defaultMessage: "Find in Linear issues you have access to"
                    },
                    userDisconnectedMessage: {
                        id: "linearAIConnector.userAuth.disconnected",
                        defaultMessage: "Linear user account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "linear_already_connected",
                    primedTextInput: "Search for issues in Linear",
                    contentType: "issues"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("linear" !== e.parsedData.type) throw Error(`Expected linear parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("linear" !== e.result.type) throw Error(`Expected linear result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.url,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: "linear"
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let r = null == a ? void 0 : a.details.connectionDetails,
                        o = null == a ? void 0 : a.details.userConnectionDetails;
                    return this.store.setState({ ...this.store.state,
                        isConnected: (null == r ? void 0 : r.status) === "completed" || (null == r ? void 0 : r.status) === "disconnecting",
                        isLoaded: !0,
                        ingestionProgress: null == r ? void 0 : r.progress,
                        status: null == r ? void 0 : r.status,
                        userAuthStatus: (null == o ? void 0 : o.userAuthStatus) ? ? "not_required",
                        externalUsername: null == o ? void 0 : o.externalUsername,
                        externalSourceName: r.external_source_name
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    })
                }
                async disconnectConnectorPersonalAuth(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    (0, s(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "user_auth_disconnect",
                                integration_type: this.base.type,
                                setup_session_id: this.store.state.sessionId,
                                from: this.store.state.analyticsFrom
                            }
                        }
                    }), await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: n,
                            connector: this.base.type,
                            disconnectionType: "user"
                        }
                    }), this.store.setState({ ...this.store.state,
                        userAuthStatus: "pending",
                        externalUsername: void 0
                    }), this.messages.userDisconnectedMessage && s(436555).D6({
                        label: s(962299).A.getIntl().formatMessage(this.messages.userDisconnectedMessage),
                        position: "bottom"
                    })
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("linear" !== t.type || "linear" !== n.type) throw Error(`Expected linear result, but got ${t.type}`);
                    return [{
                        type: "linear",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        url: n.url,
                        highlight: t.highlight
                    }]
                }
                getDismissedAuthPromptKey() {
                    return "dismissed_linear_personal_auth_prompt"
                }
                isConnected(e) {
                    return s(886556).z.isConnectedToLinearUniversalQnA(this.store.state)
                }
                needsAuth() {
                    return (0, s(212490).eA)("linear")
                }
                isAvailable(e) {
                    return this.isConnected(e) && !this.needsAuth()
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    this.needsAuth() ? (0, s(166672).openAuthNeededModal)({
                        connector: "linear",
                        from: "multi_search_scope_menu"
                    }) : (0, s(622081).pp)({
                        environment: t,
                        connector: "linear",
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = this.store.getInitialState();
                    return {
                        not_started: { ...e
                        },
                        in_progress: { ...e,
                            status: "in_progress",
                            ingestionProgress: 50
                        },
                        disconnecting: { ...e,
                            isConnected: !0,
                            status: "disconnecting",
                            isDisconnecting: !0
                        },
                        connected: { ...e,
                            isConnected: !0,
                            status: "completed",
                            ingestionProgress: 100
                        }
                    }
                }
            }
            s(354520);
            class m extends n {
                base = new(s(632462)).R;
                store = s(456925).F0;
                icon = s(325133).F;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "microsoftTeamsAIConnector.oauthPopupTitle",
                        defaultMessage: "Connect Microsoft Teams AI Connector"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.microsoftTeamsItem.tooltip",
                        defaultMessage: "Find in Microsoft Teams chats you have access to"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "microsoft_teams_already_connected",
                    primedTextInput: "Search for messages in Microsoft Teams",
                    contentType: "messages"
                };
                getCitationAnnotationFromParsedHref(e) {
                    let {
                        parsedData: t,
                        href: n
                    } = e;
                    if (t.type !== this.base.type) throw Error(`Expected ${this.base.type} parsed data, got ${t.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: n,
                        url: t.url,
                        messageId: t.messageId,
                        channelId: t.channelId,
                        threadTs: t.threadTs,
                        messageType: t.messageType,
                        threadHref: t.href
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    let {
                        result: t
                    } = e;
                    if (t.type !== this.base.type) throw Error(`Expected ${this.base.type} result, got ${t.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: t.href,
                        url: t.url,
                        messageId: t.messageId,
                        channelId: t.channelId,
                        threadTs: t.threadTs,
                        threadHref: t.href,
                        messageType: t.messageType,
                        resultId: t.id,
                        positionWithinSource: t.positionWithinSource,
                        traceId: t.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return {
                        type: this.base.type,
                        href: (0, s(281708).V9)(n.href),
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        url: n.url,
                        channelId: n.channelId,
                        messageId: n.messageId,
                        threadTs: n.threadTs,
                        messageType: n.messageType,
                        threadHref: n.href
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: this.base.type
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        connectionStatus: "not_started",
                        syncProgressPercentage: 0,
                        isLoaded: !0,
                        isDisconnecting: !1,
                        error: void 0,
                        externalSourceName: void 0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        connectionStatus: (null == r ? void 0 : r.status) ? ? "not_started",
                        syncProgressPercentage: (null == r ? void 0 : r.progress) ? ? 0,
                        isLoaded: !0,
                        isDisconnecting: (null == r ? void 0 : r.status) === "disconnecting",
                        error: void 0,
                        externalSourceName: null == r ? void 0 : r.external_source_name
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    })
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!Object.prototype.hasOwnProperty.call(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    var t, n;
                    let {
                        result: a,
                        parsedHref: r
                    } = e;
                    if (a.type !== this.base.type || r.type !== this.base.type) throw Error(`Expected ${this.base.type} result, but got result.type=${a.type} parsed.type=${r.type}`);
                    if (!a.messages || 0 === a.messages.length) return;
                    let o = (null == (t = a.messages) || null == (t = t.find(e => e.messageId === a.id)) ? void 0 : t.user) ? ? "",
                        i = (0, s(444700).Mw)((null == (n = a.highlight) ? void 0 : n.text) ? ? a.text),
                        c = a.messages.map(e => e.messageId),
                        l = a.messages.filter(e => e.messageId !== r.messageId).map(e => ({
                            type: this.base.type,
                            href: e.messageId,
                            id: e.messageId,
                            user: e.user,
                            title: a.title,
                            text: (0, s(444700).Mw)(e.text),
                            lastEdited: e.lastEdited,
                            url: r.url,
                            channelId: r.channelId,
                            messageId: e.messageId,
                            threadTs: r.threadTs,
                            messageType: r.messageType,
                            highlight: { ...a.highlight,
                                text: (0, s(444700).Mw)(e.text)
                            }
                        }));
                    return [{
                        type: this.base.type,
                        href: a.id,
                        id: a.pageId,
                        title: a.title,
                        text: (0, s(444700).Mw)(a.text),
                        user: o,
                        lastEdited: a.lastEdited,
                        url: r.url,
                        channelId: r.channelId,
                        messageId: r.messageId,
                        threadHref: r.href,
                        threadMessages: c,
                        threadTs: r.threadTs,
                        messageType: r.messageType,
                        highlight: { ...a.highlight,
                            text: (0, s(444700).Mw)(i)
                        }
                    }, ...l]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToMicrosoftTeamsUniversalQnA(this.store.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(456925).Gq)();
                    return {
                        not_started: { ...e
                        },
                        in_progress: { ...e,
                            connectionStatus: "in_progress",
                            syncProgressPercentage: 50
                        },
                        disconnecting: { ...e,
                            connectionStatus: "completed",
                            isDisconnecting: !0
                        },
                        connected: { ...e,
                            connectionStatus: "completed"
                        }
                    }
                }
            }
            class f extends n {
                base = new(s(731020)).M;
                store = s(875925).gv;
                icon = s(587292).Q;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "notionCalendarAIConnector.oauthPopup.title",
                        defaultMessage: "Notion Calendar Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.notionCalendarItem.tooltipDriver",
                        defaultMessage: "Find in your calendar events"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "notion-calendar_already_connected",
                    primedTextInput: "Search for events in Notion Calendar",
                    contentType: "calendar events"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("notion-calendar" !== e.parsedData.type) throw Error(`Expected notion-calendar parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("notion-calendar" !== e.result.type) throw Error(`Expected notion-calendar result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = (0, s(564027).fM)(t);
                    if (!a) return {
                        status: "failed"
                    };
                    let r = (0, s(529587).X)(a) ? ? !1,
                        o = await t.api.callApi({
                            eventName: "getIsCalendarUser",
                            environment: t,
                            data: {}
                        }),
                        i = "success" === o.type && o.data.isCalendarUser,
                        c = "success" === o.type ? o.data.calendarEmails : [],
                        l = await (0, s(262364).u)({
                            environment: t,
                            spaceId: n,
                            connector: this.base.type
                        });
                    if (!l || "failed" === l) return this.store.setState({ ...this.store.state,
                        status: "not_started",
                        isPersonalAuthComplete: !1,
                        isConnected: !1,
                        isBackendConnected: i,
                        isNotionCalendarProhibited: r,
                        externalSourceName: void 0,
                        emailAddresses: c,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let u = l.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        status: "completed" === u.status ? "authenticated" : "not_started",
                        isConnected: "completed" === u.status,
                        isLoaded: !0,
                        isPersonalAuthComplete: "completed" === u.status,
                        isBackendConnected: i,
                        isNotionCalendarProhibited: r,
                        externalSourceName: u.external_source_name,
                        emailAddresses: c
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e, n = await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    });
                    return this.store.setState({ ...this.store.state,
                        isDisconnecting: !0
                    }), n
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("notion-calendar" !== t.type || "notion-calendar" !== n.type) throw Error(`Expected notion-calendar result, but got result.type=${t.type} parsed.type=${n.type}`);
                    return [{
                        type: "notion-calendar",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        emailAddress: t.emailAddress,
                        url: n.url
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToNotionCalendarUniversalQnA(this.store.state) && !s(886556).z.isConnectedToGoogleCalendarUniversalQnA(s(14214).Wz.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(875925).VK)();
                    return {
                        not_started: { ...e
                        },
                        connected: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0
                        },
                        disconnecting: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0,
                            isDisconnecting: !0
                        }
                    }
                }
            }
            class y extends n {
                base = new(s(896758)).V;
                store = s(318329).Lf;
                icon = s(246297).D;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "notionMailAIConnector.oauthPopup.title",
                        defaultMessage: "Notion Mail Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.notionMailItem.tooltipDriver",
                        defaultMessage: "Find in your emails"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "notion-mail_already_connected",
                    primedTextInput: "Search for emails in Notion Mail",
                    contentType: "emails"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("notion-mail" !== e.parsedData.type) throw Error(`Expected notion-mail parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("notion-mail" !== e.result.type) throw Error(`Expected notion-mail result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(206164)._)({
                        environment: t
                    }), r = await t.api.callApi({
                        eventName: "getIsMailUser",
                        environment: t,
                        data: {}
                    }), o = "success" === r.type && r.data.isMailUser, i = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: this.base.type
                    }), c = [];
                    if (o) {
                        let e = await t.api.callApi({
                            eventName: "getUserMailAddressesForWorkflows",
                            environment: t,
                            data: {
                                spaceId: n
                            }
                        });
                        "success" === e.type && (c = e.data.emailAddresses)
                    }
                    if (!i || "failed" === i) return this.store.setState({ ...this.store.state,
                        status: "not_started",
                        isPersonalAuthComplete: !1,
                        isConnected: !1,
                        isBackendConnected: o,
                        isNotionMailProhibited: a,
                        externalSourceName: void 0,
                        emailAddresses: c,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let l = i.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        status: "completed" === l.status ? "authenticated" : "not_started",
                        isConnected: "completed" === l.status,
                        isLoaded: !0,
                        isPersonalAuthComplete: !0,
                        isBackendConnected: o,
                        isNotionMailProhibited: a,
                        externalSourceName: l.external_source_name,
                        emailAddresses: c
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e, n = await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    });
                    return this.store.setState({ ...this.store.state,
                        isDisconnecting: !0
                    }), n
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("notion-mail" !== t.type || "notion-mail" !== n.type) throw Error(`Expected notion-mail result, but got result.type=${t.type} parsed.type=${n.type}`);
                    return [{
                        type: "notion-mail",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        emailAddress: t.emailAddress,
                        url: n.url
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToNotionMailUniversalQnA(this.store.state) && !s(886556).z.isConnectedToGmailUniversalQnA(s(218705).XS.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(318329).K_)();
                    return {
                        not_started: { ...e
                        },
                        connected: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0
                        },
                        disconnecting: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0,
                            isDisconnecting: !0
                        }
                    }
                }
            }
            class S extends n {
                base = new(s(308284)).S;
                store = s(741443).yF;
                icon = s(477940).g;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "outlookAIConnector.oauthPopup.title",
                        defaultMessage: "Outlook Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.outlookItem.tooltip",
                        defaultMessage: "Find in your emails"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "outlook_already_connected",
                    primedTextInput: "Search for emails in Outlook",
                    contentType: "emails"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("outlook" !== e.parsedData.type) throw Error(`Expected outlook parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("outlook" !== e.result.type) throw Error(`Expected outlook result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.id
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: this.base.type
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        status: "not_started",
                        isPersonalAuthComplete: !1,
                        isConnected: !1,
                        externalSourceName: void 0,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        status: "completed" === r.status ? "authenticated" : "not_started",
                        isConnected: "completed" === r.status,
                        isLoaded: !0,
                        isPersonalAuthComplete: !0,
                        externalSourceName: r.external_source_name
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e, n = await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    });
                    return this.store.setState({ ...this.store.state,
                        isDisconnecting: !0
                    }), n
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("outlook" !== t.type || "outlook" !== n.type) throw Error(`Expected outlook result, but got result.type=${t.type} parsed.type=${n.type}`);
                    return [{
                        type: "outlook",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        emailAddress: t.emailAddress,
                        url: n.url
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedToOutlookUniversalQnA(this.store.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(741443).tR)();
                    return {
                        not_started: { ...e
                        },
                        connected: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0
                        },
                        disconnecting: { ...e,
                            status: "authenticated",
                            isConnected: !0,
                            isLoaded: !0,
                            isPersonalAuthComplete: !0,
                            isDisconnecting: !0
                        }
                    }
                }
            }
            class C extends n {
                base = new(s(691676)).Y;
                store = s(196473).Ci;
                icon = s(22836).M;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "salesforceAIConnector.oauthPopup.title",
                        defaultMessage: "Salesforce Authentication"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.salesforceItem.tooltip",
                        defaultMessage: "Find in your Salesforce objects"
                    },
                    userDisconnectedMessage: {
                        id: "salesforceAIConnector.userAuth.disconnected",
                        defaultMessage: "Salesforce user account disconnected."
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "salesforce_already_connected",
                    primedTextInput: "Find a Salesforce object about: ",
                    contentType: "objects"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("salesforce" !== e.parsedData.type) throw Error(`Expected salesforce parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("salesforce" !== e.result.type) throw Error(`Expected salesforce result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.url,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: this.base.type
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        isLoaded: !0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails,
                        o = a.details.userConnectionDetails;
                    return this.store.setState({ ...this.store.state,
                        isConnected: (0, s(722371).Xk)(["completed", "disconnecting", "token_refresh_failed"], null == r ? void 0 : r.status),
                        isLoaded: !0,
                        ingestionProgress: (null == r ? void 0 : r.progress) ? ? 0,
                        status: (null == r ? void 0 : r.status) ? ? "not_started",
                        externalSourceName: null == r ? void 0 : r.external_source_name,
                        connectionDetails: r ? {
                            status: r.status,
                            progress: r.progress,
                            externalSourceName: r.external_source_name
                        } : void 0,
                        userAuthStatus: (null == o ? void 0 : o.userAuthStatus) ? ? "not_required",
                        workspaceConnectionCreatedById: a.details.created.id
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e, n = await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    });
                    return this.store.setState({ ...this.store.state,
                        isDisconnecting: !0
                    }), n
                }
                async disconnectConnectorPersonalAuth(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e;
                    (0, s(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "user_auth_disconnect",
                                integration_type: this.base.type,
                                setup_session_id: this.store.state.sessionId,
                                from: this.store.state.analyticsFrom
                            }
                        }
                    }), "success" === (await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: n,
                            connector: this.base.type,
                            disconnectionType: "user"
                        }
                    })).type && (this.store.setState({ ...this.store.state,
                        userAuthStatus: "pending"
                    }), this.messages.userDisconnectedMessage && s(436555).D6({
                        label: s(962299).A.getIntl().formatMessage(this.messages.userDisconnectedMessage),
                        position: "bottom"
                    }))
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {}
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedIsSalesforceAiConnector(this.store.state)
                }
                needsAuth() {
                    return !(0, s(212490).Gu)() && "pending" === this.store.state.userAuthStatus
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(196473).f9)();
                    return {
                        not_started: { ...e
                        },
                        in_progress: { ...e,
                            status: "in_progress",
                            ingestionProgress: 50,
                            connectionDetails: {
                                status: "in_progress",
                                progress: 50,
                                externalSourceName: "Notion Labs"
                            }
                        },
                        disconnecting: { ...e,
                            isConnected: !0,
                            status: "disconnecting",
                            isDisconnecting: !0,
                            connectionDetails: {
                                status: "disconnecting",
                                progress: 100,
                                externalSourceName: "Notion Labs"
                            }
                        },
                        connected: { ...e,
                            isConnected: !0,
                            status: "completed",
                            connectionDetails: {
                                status: "completed",
                                progress: 100,
                                externalSourceName: "Notion Labs"
                            }
                        }
                    }
                }
            }
            class b extends n {
                base = new(s(427092)).u;
                store = s(443709).EF;
                icon = s(106762).s;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "sharepointAIConnector.oauthPopupTitle",
                        defaultMessage: "Connect SharePoint AI Connector"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.sharepointItem.tooltip",
                        defaultMessage: "Find in SharePoint sites you have access to"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "sharepoint_already_connected",
                    primedTextInput: "Search for documents in SharePoint",
                    contentType: "content"
                };
                getCitationAnnotationFromParsedHref(e) {
                    if ("sharepoint" !== e.parsedData.type) throw Error(`Expected sharepoint parsed data, got ${e.parsedData.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.href,
                        url: e.parsedData.url,
                        messageId: e.parsedData.url
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    if ("sharepoint" !== e.result.type) throw Error(`Expected sharepoint result, got ${e.result.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: e.result.href,
                        url: e.result.url,
                        messageId: e.result.url,
                        resultId: e.result.id,
                        positionWithinSource: e.result.positionWithinSource,
                        traceId: e.result.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: n
                    } = e;
                    if (t.searchSourceType === this.base.type && n.type === this.base.type) return { ...n,
                        type: this.base.type,
                        url: n.url,
                        title: t.title,
                        text: "",
                        lastEdited: t.lastEdited,
                        href: (0, s(281708).V9)(n.href)
                    }
                }
                async updateConnectorStatus(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = await (0, s(262364).u)({
                        environment: t,
                        spaceId: n,
                        connector: this.base.type
                    });
                    if (!a || "failed" === a) return this.store.setState({ ...this.store.state,
                        isConnected: !1,
                        isLoaded: !0,
                        connectionDetails: void 0
                    }), {
                        status: "success"
                    };
                    let r = a.details.connectionDetails;
                    return this.store.setState({ ...this.store.state,
                        isConnected: !0,
                        isLoaded: !0,
                        connectionDetails: {
                            status: null == r ? void 0 : r.status,
                            progress: null == r ? void 0 : r.progress,
                            externalSourceName: null == r ? void 0 : r.external_source_name
                        }
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e, n = await t.api.callApi({
                        eventName: "disconnectAiConnector",
                        environment: t,
                        data: {
                            spaceId: s,
                            connector: this.base.type
                        }
                    });
                    return this.store.setState({ ...this.store.state,
                        isDisconnecting: !0
                    }), n
                }
                async disconnectConnectorPersonalAuth() {}
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return !!(0, s(722371).O)(t, e) && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if ("sharepoint" !== t.type || "sharepoint" !== n.type) throw Error(`Expected sharepoint result, but got result.type=${t.type} parsed.type=${n.type}`);
                    return [{
                        type: "sharepoint",
                        href: t.id,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        lastEdited: t.lastEdited,
                        url: n.url,
                        highlight: t.highlight
                    }]
                }
                getDismissedAuthPromptKey() {}
                isConnected(e) {
                    return s(886556).z.isConnectedIsSharepointAiConnector(this.store.state)
                }
                needsAuth() {
                    return !1
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    (0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(443709).FS)();
                    return {
                        not_started: { ...e
                        },
                        in_progress: { ...e,
                            connectionDetails: {
                                status: "in_progress",
                                progress: 50,
                                externalSourceName: "Notion Labs"
                            }
                        },
                        disconnecting: { ...e,
                            isConnected: !0,
                            isDisconnecting: !0,
                            connectionDetails: {
                                status: "disconnecting",
                                progress: 100,
                                externalSourceName: "Notion Labs"
                            }
                        },
                        connected: { ...e,
                            isConnected: !0,
                            connectionDetails: {
                                status: "completed",
                                progress: 100,
                                externalSourceName: "Notion Labs"
                            }
                        },
                        sharepoint_select_sites: { ...e,
                            connectionDetails: {
                                status: "pending_selection",
                                progress: 0,
                                externalSourceName: "Notion Labs"
                            }
                        }
                    }
                }
            }
            s(944114);
            var _ = s.n(s(755373));
            class A extends n {
                base = new(s(82188)).d;
                store = s(32913).Rh;
                icon = s(673733).j;
                messages = (0, s(109939).YK)({
                    oauthPopupTitleMessage: {
                        id: "universalSearch.slack.slackOauthPopupTitle",
                        defaultMessage: "Authenticate Slack"
                    },
                    connectorScopedSearchTooltipMessage: {
                        id: "assistantScopedSearchMenu.slackItem.tooltip",
                        defaultMessage: "Find in Slack chats you have access to"
                    },
                    userOverwritePopupTitleMessage: {
                        id: "slackConnectionOptions.overwriteEmail.title",
                        defaultMessage: "User Authorization"
                    }
                });
                alreadyConnectedConfig = {
                    analyticsFrom: "slack_already_connected",
                    primedTextInput: "Search for messages in Slack: ",
                    contentType: "conversations"
                };
                getCitationAnnotationFromParsedHref(e) {
                    let {
                        parsedData: t,
                        href: n
                    } = e;
                    if (t.type !== this.base.type) throw Error(`Expected ${this.base.type} parsed data, got ${t.type}`);
                    return (0, s(247438).X$)({ ...t,
                        type: this.base.type,
                        href: n,
                        threadHref: n
                    })
                }
                getCitationAnnotationFromSearchResult(e) {
                    let {
                        result: t
                    } = e;
                    if (t.type !== this.base.type) throw Error(`Expected ${this.base.type} result, got ${t.type}`);
                    return (0, s(247438).X$)({
                        type: this.base.type,
                        href: t.href,
                        domain: t.domain,
                        baseUrl: t.baseUrl,
                        channelId: t.channelId,
                        messageId: t.messageId,
                        threadTs: t.threadTs,
                        threadHref: t.href,
                        resultId: t.id,
                        positionWithinSource: t.positionWithinSource,
                        traceId: t.traceId
                    })
                }
                getPayloadDataForHrefCallback(e) {
                    let {
                        context: t,
                        parsedData: s
                    } = e;
                    if (t.searchSourceType === this.base.type && s.type === this.base.type) return { ...s,
                        type: this.base.type,
                        title: t.title,
                        text: t.text,
                        lastEdited: t.lastEdited
                    }
                }
                async updateConnectorStatus(e) {
                    var t, n, a, r;
                    let {
                        environment: o,
                        spaceId: i
                    } = e, c = await (0, s(262364).u)({
                        environment: o,
                        spaceId: i,
                        connector: this.base.type
                    });
                    if ("failed" === c) return {
                        status: "failed"
                    };
                    if (!c) return this.store.setState({ ...this.store.state,
                        isDisconnecting: !1,
                        isSyncCompleted: !1,
                        inProgress: !1,
                        ingestionProgress: void 0,
                        isPublicSync: !1,
                        externalSourceName: "",
                        connectedApps: [],
                        isLoaded: !0,
                        thirdPartyId: void 0
                    }), {
                        status: "success"
                    };
                    let l = c.details.connectionDetails,
                        u = [];
                    return null != (t = c.details.userConnectionDetails) && t.isEnabledForPrivateSync && u.push("slack"), null != l && l.external_source_name && u.push("slack-admin"), this.store.setState({ ...this.store.state,
                        canQuery: (null == (n = c.details.userConnectionDetails) ? void 0 : n.isAvailableForUser) ? ? !0,
                        isPrivateSync: (null == (a = c.details.userConnectionDetails) ? void 0 : a.isPrivateSync) ? ? !1,
                        isPrivateAuth: (null == (r = c.details.userConnectionDetails) ? void 0 : r.isPrivateAuth) ? ? !1,
                        ingestionProgress: (null == l ? void 0 : l.progress) >= 100 || (null == l ? void 0 : l.status) === "completed" ? void 0 : (null == l ? void 0 : l.progress) ? ? 0,
                        isPublicSync: (null == l ? void 0 : l.isPublicSync) ? ? !1,
                        externalSourceName: (null == l ? void 0 : l.external_source_name) ? ? "",
                        inProgress: (null == l ? void 0 : l.status) === "in_progress",
                        isSyncCompleted: (null == l ? void 0 : l.status) === "completed",
                        isEditing: (null == l ? void 0 : l.status) === "editing",
                        isDisconnecting: (null == l ? void 0 : l.status) === "disconnecting",
                        connectedApps: u,
                        isSlackGridAiConnectorEnabled: (null == l ? void 0 : l.isGridAiConnectorEnabled) ? ? !1,
                        isLoaded: !0,
                        connectionVersion: null == l ? void 0 : l.connection_version,
                        thirdPartyId: c.thirdPartyId,
                        selection: { ...this.store.state.selection
                        },
                        writeAccessApproved: null == l ? void 0 : l.write_access_approved,
                        privateAccessEnabled: null == l ? void 0 : l.private_access_enabled
                    }), {
                        status: "success"
                    }
                }
                async disconnectConnector(e) {
                    let {
                        environment: t,
                        spaceId: s
                    } = e;
                    return t.api.callApi({
                        eventName: "disconnectSlackIngestion",
                        environment: t,
                        data: {
                            spaceId: s,
                            disconnectForWorkspace: !1
                        }
                    })
                }
                async disconnectConnectorPersonalAuth() {}
                async authenticate(e) {
                    let {
                        environment: t,
                        spaceId: n
                    } = e, a = (0, s(242302).A)();
                    (0, s(104310).u)({
                        event: {
                            eventName: "slack_auth_flow_initiated",
                            eventProperties: {
                                from: "ai_connector_user_reauth",
                                slack_auth_session_id: a
                            }
                        }
                    });
                    let r = await t.api.callApi({
                        eventName: "getSlackIngestionAuthorizeUrl",
                        environment: t,
                        data: {
                            spaceId: n,
                            isAdminAuth: !1,
                            isDesktopApp: t.device.isElectron,
                            isUserMapping: !0,
                            sessionId: a
                        }
                    });
                    "success" === r.type && (t.device.isElectron ? (0, s(754573).P)(r.data.url) : await s(956935).P(t, {
                        width: 800,
                        height: 600,
                        url: r.data.url,
                        titleMessage: this.messages.userOverwritePopupTitleMessage
                    }))
                }
                setDebuggingStatus(e) {
                    let t = this.getTestableStatuses();
                    return e in t && (this.store.setState(t[e]), !0)
                }
                generateRenderableResults(e) {
                    let {
                        result: t,
                        parsedHref: n
                    } = e;
                    if (t.type !== this.base.type || n.type !== this.base.type) throw Error(`Expected ${this.base.type} result, but got result.type=${t.type} parsed.type=${n.type}`);
                    let a = `slack://?${_().stringify({base_url:n.baseUrl,channel_id:n.channelId,message_id:n.messageId,thread_ts:n.threadTs})}`;
                    if (!t.messages || 0 === t.messages.length) return [{
                        type: this.base.type,
                        href: a,
                        id: t.pageId,
                        title: t.title,
                        text: (0, s(444700).Mw)(t.text),
                        user: "",
                        lastEdited: t.lastEdited,
                        domain: n.domain,
                        baseUrl: n.baseUrl,
                        channelId: n.channelId,
                        messageId: n.messageId,
                        threadHref: a,
                        threadMessages: [],
                        threadTs: n.threadTs,
                        highlight: { ...t.highlight ? ? {},
                            text : (0, s(444700).Mw)(t.text)
                        }
                    }];
                    let {
                        user: r,
                        text: o
                    } = this.extractUserAndText(t), i = t.messages.map(e => e.messageId), c = t.messages.filter(e => e.messageId !== a).map(e => ({
                        id: e.messageId,
                        type: this.base.type,
                        href: e.messageId,
                        user: e.user,
                        title: t.title,
                        text: e.text,
                        messageId: e.messageId,
                        lastEdited: e.lastEdited,
                        domain: n.domain,
                        baseUrl: n.baseUrl,
                        channelId: n.channelId,
                        threadTs: n.threadTs,
                        threadMessages: i,
                        highlight: { ...t.highlight,
                            text: (0, s(444700).Mw)(e.text)
                        }
                    }));
                    return [{
                        id: t.pageId,
                        type: this.base.type,
                        href: a,
                        threadHref: a,
                        title: t.title,
                        text: o,
                        user: r,
                        lastEdited: t.lastEdited,
                        domain: n.domain,
                        baseUrl: n.baseUrl,
                        channelId: n.channelId,
                        messageId: n.messageId,
                        threadTs: n.threadTs,
                        threadMessages: i,
                        highlight: { ...t.highlight,
                            text: o
                        }
                    }, ...c]
                }
                getDismissedAuthPromptKey() {
                    return "dismissed_slack_personal_auth_prompt"
                }
                isConnected(e) {
                    return s(886556).z.isConnectedToSlackUniversalQnA(this.store.state)
                }
                needsAuth() {
                    return (0, s(212490).al)(this.store.state)
                }
                isAvailable(e) {
                    return this.isConnected(e)
                }
                connect(e) {
                    if (!e) return;
                    let {
                        environment: t,
                        connectorsFeatureAvailability: n
                    } = e;
                    if (this.needsAuth()) {
                        s(346593).O.setState({ ...s(346593).O.state,
                            open: !0,
                            modal: "auth_needed",
                            connector: this.base.type
                        }), s(310639).assistantDependency.load().then(({
                            assistantAnalyticsActions: e
                        }) => {
                            e.trackConnectorAuthNeededModalOpened({
                                connector: this.base.type,
                                from: "multi_search_scope_menu"
                            })
                        });
                        return
                    }(0, s(622081).pp)({
                        environment: t,
                        connector: this.base.type,
                        analyticsFrom: "multi_search_scope_menu",
                        connectorsFeatureAvailability: n
                    })
                }
                getTestableStatuses() {
                    let e = (0, s(32913).QO)();
                    return {
                        not_connected: e,
                        in_progress: { ...e,
                            inProgress: !0
                        },
                        disconnecting: { ...e,
                            isDisconnecting: !0
                        },
                        connected_admin: { ...e,
                            isLoaded: !0,
                            isSyncCompleted: !0,
                            connectedApps: ["slack-admin"]
                        },
                        connected_admin_and_user: { ...e,
                            isLoaded: !0,
                            isSyncCompleted: !0,
                            connectedApps: ["slack-admin", "slack"]
                        }
                    }
                }
                extractUserAndText(e) {
                    var t;
                    let n, a = (0, s(444700).Mw)(e.text);
                    if (e.type === this.base.type && null != (t = e.highlight) && t.text && (a = (0, s(444700).Mw)(e.highlight.text)), e.type === this.base.type && Array.isArray(e.messages)) {
                        let t = e.messages.find(t => t.messageId === e.id);
                        n = null == t ? void 0 : t.user;
                        let r = s(381453).sb(e.messages.map(e => e.user));
                        if (a.includes(": ")) {
                            let [e, ...t] = a.split(": ");
                            if (e) {
                                let o = e.replace(RegExp(`${s(821603).$8}(.*?)${s(821603)._x}`, "g"), "$1");
                                if (0 === r.length) a = t.join(": ");
                                else {
                                    let e = r.findIndex(e => e === o); - 1 !== e && (n = r[e], a = t.join(": "))
                                }
                            }
                        }
                    }
                    return {
                        user: n ? ? "",
                        text: a
                    }
                }
            }
            let v = Object.freeze({
                slack: new A,
                asana: new a,
                discord: new c,
                github: new l,
                gmail: new u,
                box: new r,
                "google-calendar": new d,
                "google-drive": new p,
                jira: new g,
                linear: new h,
                "microsoft-teams": new m,
                "notion-calendar": new f,
                "notion-mail": new y,
                salesforce: new C,
                sharepoint: new b,
                outlook: new S,
                confluence: new o,
                custom: new i
            });

            function I(e) {
                return v[e]
            }
        },
        622081: (e, t, s) => {
            function n(e) {
                let t = e.type;
                if ((0, s(180139).rL)(t)) switch (t) {
                    case "researcher":
                        return "ai_research_mode";
                    case "search":
                        return "ai_unified_find_chat";
                    case "markdown-chat":
                        return "ai_chat_with_model";
                    case "workflow":
                        return e.isCustomAgent ? "custom_agent" : "ai_agent";
                    case "setup-generator":
                        break;
                    default:
                        (0, s(722371).HB)(t)
                }
                return "ai_limit_in_app"
            }

            function a(e) {
                let {
                    spaceId: t,
                    userId: a,
                    config: r
                } = e, o = r.type, i = n(r);
                if ((0, s(180139).rL)(o)) switch (o) {
                    case "researcher":
                        return {
                            pfaFeatureLoadArgs: {
                                name: "ai_research_mode",
                                spaceId: t,
                                userId: a,
                                amount: 1
                            },
                            upsellFromForCheckoutBanner: i
                        };
                    case "search":
                    case "markdown-chat":
                    case "workflow":
                        return {
                            pfaFeatureLoadArgs: {
                                name: "ai_usage",
                                spaceId: t,
                                userId: a,
                                amount: 1
                            },
                            upsellFromForCheckoutBanner: i
                        };
                    case "setup-generator":
                        return {
                            pfaFeatureLoadArgs: {
                                name: "ai_app_builder",
                                spaceId: t,
                                userId: a,
                                amount: 1
                            },
                            upsellFromForCheckoutBanner: i
                        };
                    default:
                        (0, s(722371).HB)(o)
                }
                return {
                    pfaFeatureLoadArgs: {
                        name: "ai_usage",
                        spaceId: t,
                        userId: a,
                        amount: 0
                    },
                    upsellFromForCheckoutBanner: i
                }
            }
            async function r(e) {
                let {
                    environment: t,
                    connector: n,
                    analyticsFrom: a,
                    connectorsFeatureAvailability: r
                } = e;
                if (void 0 === r) return;
                let o = await (0, s(187649).z)();
                if (!o) return;
                let i = (0, s(328765).S)();
                if (!i) return;
                if ((0, s(722371).Xk)(s(281708).YV, n) && o.dismissConnectorNotification(t, n), "generic" !== n && (0, s(281708).q1)(n)) {
                    let e = s(92513).JW();
                    o.navigateToConnectorOnboarding({
                        connector: n,
                        analyticsFrom: a,
                        sessionId: e
                    });
                    return
                }
                let c = o.isTabbedExperienceEnabled();
                if (!i.canAdmin()) {
                    if ("generic" === n || "available" === r.type) return void o.openAiSettings({
                        openedFrom: a,
                        currentPage: "ai",
                        tab: c ? "ai_connectors" : void 0
                    });
                    let e = s(92513).JW();
                    return void o.navigateToConnectorOnboarding({
                        connector: n,
                        analyticsFrom: a,
                        sessionId: e
                    })
                }(0, s(94418).N9)(r, {
                    available: () => {
                        if ("generic" === n) return void o.openAiSettings({
                            openedFrom: a,
                            currentPage: "ai",
                            tab: c ? "ai_connectors" : void 0
                        });
                        if ((0, s(281708).n6)(n)) {
                            let e = (0, s(328765).S)();
                            if ((null == e ? void 0 : e.getSubscriptionTier()) !== "enterprise" && !o.isEnterpriseConnectorBypassOn(n)) return void o.openAiSettings({
                                openedFrom: a,
                                currentPage: "ai",
                                tab: c ? "ai_connectors" : void 0
                            })
                        }
                        let e = s(92513).JW();
                        o.navigateToConnectorOnboarding({
                            connector: n,
                            analyticsFrom: a,
                            sessionId: e
                        })
                    },
                    unavailable: ({
                        upsell: e
                    }) => {
                        o.isSalesAssisted(t, i.id) ? o.showSalesAssistedModal({
                            analyticsFrom: a,
                            connector: n
                        }) : (s(907063).K(t, {
                            from: a,
                            upsell: e,
                            spaceStore: i
                        }), "generic" !== n && o.setConnectorTriggeringUpsell(n, Date.now()))
                    }
                })
            }
            s.d(t, {
                Lx: () => a,
                bl: () => n,
                pp: () => r
            })
        },
        630477: (e, t, s) => {
            s.d(t, {
                qR: () => n
            });
            let n = "/workflows/oauth/connect"
        },
        711421: (e, t, s) => {
            s.d(t, {
                P0: () => r
            });
            var n = () => s(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        connectionStatus: "not_started",
                        syncProgressPercentage: 0,
                        isLoaded: !1,
                        isDisconnecting: !1,
                        isEditing: !1,
                        error: void 0,
                        externalSourceName: void 0,
                        currentScreen: "none",
                        sessionId: s(92513).JW(),
                        analyticsFrom: "unknown",
                        isConnected: !1,
                        forceShowAuthNotificationTriggeredAt: void 0
                    }
                }
            }
            let r = new a
        },
        741443: (e, t, s) => {
            s.d(t, {
                tR: () => a,
                yF: () => o
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    externalSourceName: void 0,
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    isLoaded: !1
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("outlookAIConnectorStore", o)
        },
        780899: (e, t, s) => {
            function n(e) {
                return "applied" === e.state || "applied:partial" === e.state || "applied:error" === e.state || "confirmation:rejected" === e.state || "confirmation:confirmed" === e.state || !0 === e.done
            }

            function a(e) {
                return "confirmation:requested" === e.state || "requested" === e.userConfirmation
            }

            function r(e) {
                return "confirmation:rejected" === e.state || "rejected" === e.userConfirmation
            }

            function o(e) {
                return "deferred" === e.state
            }

            function i(e) {
                switch (e.userConfirmation) {
                    case "requested":
                        return "confirmation:requested";
                    case "confirmed":
                        return "applied";
                    case "rejected":
                        return "confirmation:rejected";
                    default:
                        return e.state ? ? "pending"
                }
            }
            s.d(t, {
                I6: () => a,
                OP: () => o,
                dB: () => r,
                nP: () => n,
                rk: () => i
            })
        },
        801477: (e, t, s) => {
            s.d(t, {
                lk: () => r
            });
            var n = () => s(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        currentScreen: "none",
                        connectionStatus: "not_started",
                        sessionId: s(92513).JW(),
                        analyticsFrom: "unknown",
                        syncProgressPercentage: 0,
                        isLoaded: !1,
                        isConnected: !1,
                        isDisconnecting: !1,
                        error: void 0,
                        externalSourceName: void 0,
                        forceShowAuthNotificationTriggeredAt: void 0
                    }
                }
            }
            let r = new a
        },
        875925: (e, t, s) => {
            s.d(t, {
                VK: () => a,
                gv: () => o
            });
            var n = () => s(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    isBackendConnected: !1,
                    externalSourceName: void 0,
                    emailAddresses: [],
                    sessionId: s(92513).JW(),
                    analyticsFrom: "unknown",
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    isLoaded: !1,
                    isNotionCalendarProhibited: !1
                }
            }
            class r extends n().Store {
                getInitialState() {
                    return a()
                }
            }
            let o = new r;
            (0, s(202146).exposeDebugValue)("notionCalendarAIConnectorStore", o)
        },
        876688: (e, t, s) => {
            function n(e) {
                return "completed" === e ? "completed" : "not_started" === e ? "not_started" : "pending_selection" === e ? "pending_selection" : "in_progress"
            }

            function a(e) {
                if ("google-drive" === e) return "pending_selection" === s(454752).d.state.initialSyncState ? "in_progress" : s(454752).d.state.initialSyncState;
                if ("jira" === e) {
                    let e = s(213056).EF.state.jiraSyncState;
                    return "not_started" === e || "pending_connection" === e ? "not_started" : "in_progress" === e || "pending_selection" === e ? "in_progress" : "completed"
                }
                if ("github" === e) return "authenticated" === s(314365).o.state.status ? "in_progress" : s(314365).o.state.status;
                if ("gmail" === e) return "authenticated" === s(218705).XS.state.status ? "completed" : "not_started";
                if ("google-calendar" === e) return "authenticated" === s(14214).Wz.state.status ? "completed" : "not_started";
                if ("notion-mail" === e) return "authenticated" === s(318329).Lf.state.status ? "completed" : s(318329).Lf.state.isBackendConnected ? "in_progress" : "not_started";
                if ("notion-calendar" === e) return "authenticated" === s(875925).gv.state.status ? "completed" : s(875925).gv.state.isBackendConnected ? "in_progress" : "not_started";
                if ("outlook" === e) return "authenticated" === s(741443).yF.state.status ? "completed" : "not_started";
                if ("microsoft-teams" === e) switch (s(456925).F0.state.connectionStatus) {
                    case "completed":
                        return "completed";
                    case "in_progress":
                        return "in_progress";
                    default:
                        return "not_started"
                }
                if ("slack" === e) return s(32913).Rh.state.noChannelsSelected ? "not_started" : s(32913).Rh.state.isSyncCompleted ? "completed" : "in_progress";
                if ("sharepoint" === e) {
                    var t;
                    switch (null == (t = s(443709).EF.state.connectionDetails) ? void 0 : t.status) {
                        case "completed":
                            return "completed";
                        case "in_progress":
                            return "in_progress";
                        default:
                            return "not_started"
                    }
                }
                if ("linear" === e) switch (s(368381).W.state.status) {
                    case "completed":
                        return "completed";
                    case "in_progress":
                        return "in_progress";
                    default:
                        return "not_started"
                }
                if ("salesforce" === e) switch (s(196473).Ci.state.status) {
                    case "completed":
                        return "completed";
                    case "in_progress":
                        return "in_progress";
                    default:
                        return "not_started"
                }
                if ("box" === e) switch (s(158423).MX.state.status) {
                    case "completed":
                        return "completed";
                    case "in_progress":
                        return "in_progress";
                    default:
                        return "not_started"
                }
                if ("discord" === e) {
                    let e = s(801477).lk.state.connectionStatus;
                    return "not_started" === e ? "not_started" : "in_progress" === e || "pending_selection" === e ? "in_progress" : "completed"
                }
                if ("asana" === e) {
                    let e = s(711421).P0.state.connectionStatus;
                    return "not_started" === e ? "not_started" : "in_progress" === e || "pending_selection" === e ? "in_progress" : "completed"
                }
                if ("confluence" === e) switch (s(186241).zZ.state.status) {
                    case "completed":
                        return "completed";
                    case "in_progress":
                        return "in_progress";
                    default:
                        return "not_started"
                }
                return "custom" === e ? "not_started" : (0, s(722371).HB)(e)
            }

            function r() {
                return o().filter(e => {
                    if ("slack" === e) return !(s(32913).Rh.state.connectedApps || []).includes("slack-admin");
                    if ("google-drive" === e) return "none" === s(454752).d.state.initialSyncState || "not_started" === s(454752).d.state.initialSyncState;
                    if ("github" === e) return "not_started" === s(314365).o.state.status;
                    if ("jira" === e) return "not_started" === s(213056).EF.state.jiraSyncState;
                    if ("sharepoint" === e) return !s(443709).EF.state.connectionDetails;
                    else if ("gmail" === e) return "not_started" === s(218705).XS.state.status;
                    else if ("google-calendar" === e) return "not_started" === s(14214).Wz.state.status;
                    else if ("notion-mail" === e) return "not_started" === s(318329).Lf.state.status;
                    else if ("notion-calendar" === e) return "not_started" === s(875925).gv.state.status;
                    else if ("outlook" === e) return "not_started" === s(741443).yF.state.status;
                    else if ("microsoft-teams" === e) return "not_started" === s(456925).F0.state.connectionStatus;
                    else if ("linear" === e) return "not_started" === s(368381).W.state.status;
                    else if ("salesforce" === e) return "not_started" === s(196473).Ci.state.status;
                    else if ("discord" === e) return "not_started" === s(801477).lk.state.connectionStatus;
                    else if ("box" === e) return "not_started" === s(158423).MX.state.status;
                    else if ("asana" === e) return "not_started" === s(711421).P0.state.connectionStatus;
                    else if ("confluence" === e) return "not_started" === s(186241).zZ.state.status;
                    else if ("custom" === e) return !0;
                    else return (0, s(722371).HB)(e)
                })
            }

            function o() {
                return i.filter(e => "custom" !== e && s(886556).z.canUseAiConnectorSearchScope(e))
            }
            s.d(t, {
                A7: () => l,
                HB: () => n,
                Nr: () => r,
                XY: () => a,
                bp: () => u,
                kB: () => o,
                wd: () => c,
                yc: () => i
            }), s(898992), s(354520);
            let i = [...s(281708).i9, ...s(381453).Ul(s(281708).fl.filter(e => !(0, s(281708).r9)(e)), e => s(590212).w0[e])];

            function c({
                includeConnectorsWithAuthNeeded: e = !1
            } = {}) {
                return i.filter(t => {
                    if ("slack" === t) return s(886556).z.isConnectedToSlackUniversalQnA(s(32913).Rh.state) || e && (0, s(212490).al)(s(32913).Rh.state);
                    if ("google-drive" === t) return s(886556).z.isConnectedToGoogleDriveUniversalQnA(s(32913).Rh.state);
                    if ("github" === t) return s(886556).z.isConnectedToGithubUniversalQnA(s(314365).o.state) || e && (0, s(212490).F1)(s(314365).o.state);
                    if ("jira" === t) return s(886556).z.isConnectedToJiraUniversalQnA(s(329488).yg.state, s(213056).EF.state);
                    if ("gmail" === t) return s(886556).z.isConnectedToGmailUniversalQnA(s(218705).XS.state);
                    else if ("google-calendar" === t) return s(886556).z.isConnectedToGoogleCalendarUniversalQnA(s(14214).Wz.state);
                    else if ("notion-mail" === t) return s(886556).z.isConnectedToNotionMailUniversalQnA(s(318329).Lf.state) && !s(886556).z.isConnectedToGmailUniversalQnA(s(218705).XS.state);
                    else if ("notion-calendar" === t) return s(886556).z.isConnectedToNotionCalendarUniversalQnA(s(875925).gv.state) && !s(886556).z.isConnectedToGoogleCalendarUniversalQnA(s(14214).Wz.state);
                    else if ("outlook" === t) return s(886556).z.isConnectedToOutlookUniversalQnA(s(741443).yF.state);
                    else if ("sharepoint" === t) return s(886556).z.isConnectedIsSharepointAiConnector(s(443709).EF.state);
                    else if ("microsoft-teams" === t) return s(886556).z.isConnectedToMicrosoftTeamsUniversalQnA(s(456925).F0.state);
                    else if ("linear" === t) return s(886556).z.isConnectedToLinearUniversalQnA(s(368381).W.state);
                    else if ("salesforce" === t) return s(886556).z.isConnectedIsSalesforceAiConnector(s(196473).Ci.state);
                    else if ("discord" === t) return s(886556).z.isConnectedToDiscordAiConnector(s(801477).lk.state);
                    else if ("box" === t) return s(886556).z.isConnectedToBoxAiConnector(s(158423).MX.state);
                    else if ("asana" === t) return s(886556).z.isConnectedToAsanaAiConnector(s(711421).P0.state);
                    else if ("confluence" === t) return s(886556).z.isConnectedToConfluenceAiConnector(s(186241).zZ.state);
                    else if ("custom" === t) return s(501761).qu.state.hasCustomConnector;
                    else return (0, s(722371).HB)(t)
                })
            }

            function l(e) {
                return "jira" === e && s(886556).z.isJiraOldAiConnectorEnabled() && s(329488).yg.isOldJiraConnected() ? s(329488).yg.state.isLoaded : "custom" === e ? s(501761).qu.state.isLoaded : s(399077).NT[e].state.isLoaded
            }

            function u() {
                let e = (0, s(533992).v3)(),
                    t = (0, s(682985).O$)(s(728372).AppStoreSidebarSpaceStore),
                    n = (0, s(611285).P)({
                        name: "ai_connectors",
                        spaceId: null == t ? void 0 : t.id,
                        userId: e.currentUser.id
                    }) ? ? !1;
                return (0, s(682985).K8)(() => {
                    var e;
                    return !!t && !!n && !(null == (e = t.getSettings()) ? void 0 : e.embedding_index_is_live)
                }, [t, n])
            }
        }
    }
]);