"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2209, 4690, 23644, 32626, 33503, 48486, 56809, 64696, 81084, 82853, 82861, 87196], {
        1249: (e, t, a) => {
            a.d(t, {
                g: () => i
            });

            function i(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        2009: (e, t, a) => {
            a.d(t, {
                w: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let o = new n
        },
        3161: (e, t, a) => {
            a.d(t, {
                m: () => i
            });

            function i(e, t) {
                let i = "msStore" === e.device.desktopTargetPlatform,
                    n = !t || (0, a(529587).X)(t);
                return !a(986939).A.isMobile && !i && !n
            }
        },
        8633: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = new n
        },
        21731: (e, t, a) => {
            a.d(t, {
                O: () => i
            });

            function i(e) {
                a(647095).Qg(e), a(773352).log({
                    level: "error",
                    from: "teamActions",
                    type: "TeamApiError",
                    error: (0, a(416607).convertErrorToLog)(e.error),
                    data: {
                        miscDataToConvertToString: {
                            body: e.body,
                            status: e.status
                        }
                    }
                })
            }
        },
        28299: (e, t, a) => {
            function i(e) {
                var t, a;
                let i, n;
                return (i = (null == (t = e.getDraftData()) ? void 0 : t.triggers) || [], n = (null == (a = e.getData()) ? void 0 : a.triggers) || [], i.length > 0 ? i : n).some(e => e.enabled)
            }

            function n(e, t) {
                return !1 === t || !1 === e.getAlive() || void 0 !== e.getMovedToTrashId()
            }
            a.d(t, {
                Wc: () => i,
                bf: () => n
            }), a(898992), a(354520), a(737550)
        },
        31256: (e, t, a) => {
            a.d(t, {
                J: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                marginTop: 12,
                marginBottom: 4
            };

            function o() {
                let e = (0, a(533992).v3)();
                return (0, i.jsx)(a(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, i.jsx)(a(109939).sA, {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    }),
                    byline: (0, i.jsx)(a(109939).sA, {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    }),
                    item: (0, i.jsx)(a(548436).A, {
                        size: "lg",
                        style: n,
                        onClick: () => {
                            (0, a(104310).u)({
                                event: {
                                    eventName: "change_language_button_clicked",
                                    eventProperties: {}
                                }
                            }), e.mobileNative && e.mobileNative.openAppLanguageSettings()
                        },
                        iconLeading: a(695142).arrowDiagonalUpRightFillIcon,
                        children: (0, i.jsx)(a(109939).sA, {
                            id: "languageSettings.languageSection.androidChangeLanguageButton",
                            defaultMessage: "Change Language"
                        })
                    })
                })
            }
        },
        37967: (e, t, a) => {
            a.d(t, {
                X: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    releaseDate: i,
                    type: n,
                    timestamp: o
                } = e, r = (0, a(904434).R$)(t);
                if (!r) return;
                let s = r.getSettings();
                if (s) switch (n) {
                    case "latest":
                        ! function(e) {
                            let {
                                environment: t,
                                releaseDate: i,
                                userSettings: n,
                                userSettingsStore: o,
                                timestamp: r
                            } = e, s = n.latest_release_seen;
                            if (s && (i === s.releaseDate || i < s.releaseDate)) return;
                            let l = {
                                releaseDate: i,
                                timestamp: r ? ? Date.now()
                            };
                            (0, a(377796).createAndCommit)({
                                userAction: "userSettings.changelogActions.setLatestReleaseSeen",
                                environment: t,
                                cellTarget: "main",
                                canUndo: !1,
                                perform: e => {
                                    (0, a(862759).m)({
                                        userSettingsStore: o,
                                        transaction: e,
                                        data: {
                                            latest_release_seen: l
                                        }
                                    })
                                }
                            })
                        }({
                            environment: t,
                            releaseDate: i,
                            userSettings: s,
                            userSettingsStore: r,
                            timestamp: o
                        });
                        break;
                    case "special":
                        ! function(e) {
                            let {
                                environment: t,
                                releaseDate: i,
                                userSettings: n,
                                userSettingsStore: o,
                                timestamp: r,
                                viewed: s
                            } = e, l = n.special_release_seen, d = n.latest_release_seen, c = !1;
                            if ("entrypoint" === s ? c = !!(!l || l.releaseDate < i) : "content" === s && (c = !!(l && "entrypoint" === l.viewed && i === l.releaseDate)), !c) return;
                            let u = {
                                    releaseDate: i,
                                    timestamp: r ? ? Date.now(),
                                    viewed: e.viewed
                                },
                                p = !!("content" === s && (!d || d.releaseDate < i));
                            (0, a(377796).createAndCommit)({
                                userAction: "userSettings.changelogActions.setSpecialReleaseSeen",
                                environment: t,
                                cellTarget: "main",
                                canUndo: !1,
                                perform: e => {
                                    (0, a(862759).m)({
                                        userSettingsStore: o,
                                        transaction: e,
                                        data: {
                                            special_release_seen: u,
                                            ...p ? {
                                                latest_release_seen: {
                                                    releaseDate: i,
                                                    timestamp: r ? ? Date.now()
                                                }
                                            } : {}
                                        }
                                    })
                                }
                            })
                        }({
                            environment: t,
                            releaseDate: i,
                            userSettings: s,
                            userSettingsStore: r,
                            viewed: e.viewed,
                            timestamp: o
                        });
                        break;
                    default:
                        (0, a(722371).HB)(n)
                }
            }
        },
        59579: (e, t, a) => {
            a.d(t, {
                a: () => i
            });

            function i(e, t) {
                let i = {
                    id: "",
                    key: t,
                    type: "static",
                    category: a(292609).lU[t].category,
                    props: {}
                };
                (0, a(466290).K)(e, i)
            }
        },
        59899: (e, t, a) => {
            a.d(t, {
                x: () => i
            });

            function i() {
                var e;
                let t = a(479110).P.state.releases;
                if (t) return null == (e = [...t].sort((e, t) => e.releaseDate < t.releaseDate ? 1 : -1)[0]) ? void 0 : e.releaseDate
            }
        },
        62412: (e, t, a) => {
            a.d(t, {
                O: () => r,
                u: () => o
            });
            var i = a(296540),
                n = a(474848);

            function o(e) {
                let {
                    buttonStyles: t
                } = e, o = (0, a(109939).tz)(), s = o.formatMessage(r.settings), l = (0, i.useCallback)(() => {
                    a(599754).Ow({
                        openedFrom: "sidebar",
                        currentPage: "user_settings"
                    })
                }, []);
                return (0, n.jsx)(a(51831).m, {
                    content: () => o.formatMessage(r.tooltip),
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, n.jsx)(a(64960).Ay, { ...e,
                        onClick: l,
                        style: a(132261).DX.baseSidebarItem,
                        hoveredStyle: null == t ? void 0 : t.hoveredStyle,
                        children: (0, n.jsx)(a(380559).u, {
                            left: (0, n.jsx)(a(16275).I, {
                                icon: a(829968).gearIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: s
                        })
                    })
                })
            }
            let r = (0, a(109939).YK)({
                settingsAndMembers: {
                    id: "sidebarSettingsButton.settingsAndMembers",
                    defaultMessage: "Settings & members"
                },
                settings: {
                    id: "sidebarSettingsButton.settings",
                    defaultMessage: "Settings"
                },
                tooltip: {
                    id: "sidebarSettingsButton.tooltip",
                    defaultMessage: "Manage your account and settings"
                }
            })
        },
        63528: (e, t, a) => {
            a.d(t, {
                l: () => r
            }), a(898992), a(354520), a(672577), a(737550);
            var i = () => a(552923);
            class n extends i().u {
                abortController;
                isAcquiringWebLock = !1;
                isAcquiringVisibleTabLock = !1;
                hasVisibleTabLock = !1;
                lockRequestId = 0;
                visibilityChangeHandler;
                unloadHandler;
                constructor() {
                    super({
                        getInitialState: () => ({
                            hasWebLock: !1
                        }),
                        effect: () => (a(728372).AppStoreSidebarSpaceIdStore.addListener(e), e(), () => {
                            a(728372).AppStoreSidebarSpaceIdStore.removeListener(e), this.cleanupLastLock()
                        })
                    });
                    const e = this.setupCalendarBrowserSubscriptionLock.bind(this);
                    this.visibilityChangeHandler = async () => {
                        document.hasFocus() && await (0, a(975162).wR)(100), "visible" === document.visibilityState && (this.requestWebLock({
                            steal: document.hasFocus()
                        }), this.maybeRequestSecondaryVisibleTabLock()), "hidden" === document.visibilityState && this.maybeRelinquishLock()
                    }, this.unloadHandler = () => {
                        this.cleanupLastLock()
                    }
                }
                cleanupLastLock() {
                    var e;
                    null == (e = this.abortController) || e.abort("cleanup_last_lock"), document.removeEventListener("visibilitychange", this.visibilityChangeHandler), window.removeEventListener("focus", this.visibilityChangeHandler), window.removeEventListener("unload", this.unloadHandler)
                }
                async maybeRelinquishLock() {
                    await (0, a(975162).wR)(100), "visible" === document.visibilityState || document.hasFocus() || this.state.hasWebLock && this.getSecondaryVisibleTabShouldStealChannel().postMessage("relinquish")
                }
                async setupCalendarBrowserSubscriptionLock() {
                    this.cleanupLastLock(), this.requestWebLock({
                        steal: !1
                    }), this.maybeRequestSecondaryVisibleTabLock(), await (0, a(975162).lG)([this.waitUntil(() => this.state.hasWebLock), a(329464).A.waitUntil(() => a(329464).A.state.initialRenderCompleted)]), this.requestWebLock({
                        steal: "visible" === document.visibilityState && document.hasFocus()
                    }), document.addEventListener("visibilitychange", this.visibilityChangeHandler), window.addEventListener("focus", this.visibilityChangeHandler), window.addEventListener("unload", this.unloadHandler)
                }
                getLockName() {
                    let e = a(728372).AppStoreSidebarSpaceIdStore.getState();
                    return e ? `app_level_calendar_event_subscription_leader-${e}` : "app_level_calendar_event_subscription_leader"
                }
                getSecondaryVisibleTabLockName() {
                    return `${this.getLockName()}-secondary_visible_tab`
                }
                getSecondaryVisibleTabShouldStealChannel() {
                    return new BroadcastChannel(`${this.getSecondaryVisibleTabLockName()}-should_steal`)
                }
                async maybeRequestSecondaryVisibleTabLock() {
                    if ("visible" !== document.visibilityState || this.state.hasWebLock || this.isAcquiringVisibleTabLock || this.hasVisibleTabLock) return;
                    this.isAcquiringVisibleTabLock = !0;
                    let e = new AbortController;
                    document.addEventListener("visibilitychange", () => e.abort("became_hidden"), {
                        once: !0,
                        signal: e.signal
                    }), this.waitUntil(() => this.state.hasWebLock, {
                        signal: e.signal
                    }).then(() => e.abort("became_leader")).catch(() => {});
                    try {
                        await navigator.locks.request(this.getSecondaryVisibleTabLockName(), {
                            mode: "exclusive",
                            signal: e.signal
                        }, async () => {
                            this.isAcquiringVisibleTabLock = !1, this.hasVisibleTabLock = !0, e.signal.aborted || await new Promise(t => {
                                this.getSecondaryVisibleTabShouldStealChannel().addEventListener("message", () => {
                                    this.requestWebLock({
                                        steal: !0
                                    }), t()
                                }, {
                                    once: !0,
                                    signal: e.signal
                                }), e.signal.addEventListener("abort", t, {
                                    once: !0
                                })
                            })
                        })
                    } catch {}
                    this.isAcquiringVisibleTabLock = !1, this.hasVisibleTabLock = !1, e.signal.aborted || e.abort("cleanup")
                }
                async visibleTabAwaitingLockExists() {
                    var e, t;
                    let a = await navigator.locks.query(),
                        i = null == (e = a.held) || null == (e = e.find(e => e.name === this.getSecondaryVisibleTabLockName())) ? void 0 : e.clientId,
                        n = null == (t = a.pending) ? void 0 : t.filter(e => e.name === this.getLockName());
                    return i && (null == n ? void 0 : n.some(e => e.clientId === i))
                }
                async requestWebLock(e) {
                    var t;
                    let {
                        steal: i
                    } = e;
                    if (!a(728372).AppStoreSidebarSpaceIdStore.getState() || this.state.hasWebLock || this.isAcquiringWebLock && !i) return;
                    let n = ++this.lockRequestId;
                    this.isAcquiringWebLock = !0, null == (t = this.abortController) || t.abort("new_request");
                    let o = new AbortController;
                    this.abortController = o;
                    try {
                        await navigator.locks.request(this.getLockName(), {
                            mode: "exclusive",
                            steal: i,
                            signal: i ? void 0 : o.signal
                        }, async () => {
                            this.isAcquiringWebLock = !1, "visible" !== document.visibilityState && await this.visibleTabAwaitingLockExists() && (await (0, a(975162).wR)(100), this.getSecondaryVisibleTabShouldStealChannel().postMessage("should_steal")), o.signal.aborted || (this.setState({
                                hasWebLock: !0
                            }), await new Promise(e => {
                                o.signal.addEventListener("abort", () => e(), {
                                    once: !0
                                })
                            }))
                        })
                    } catch {}
                    n === this.lockRequestId && (this.setState({
                        hasWebLock: !1
                    }), this.isAcquiringWebLock = !1, o.signal.aborted || this.requestWebLock({
                        steal: !1
                    })), o.signal.aborted || o.abort("cleanup"), this.maybeRequestSecondaryVisibleTabLock()
                }
            }
            let o = new n,
                r = new(a(345426)).ComputedStore(() => a(218744).default.checkGate({
                    gateName: "debug__disable_app_activity_subscription_leader"
                }) ? {
                    hasWebLock: !1
                } : o.getState(), {
                    debugName: "DEBUG__InAppActivitySubscriptionLeaderStore"
                });
            (0, a(202146).exposeDebugGetter)("InAppActivitySubscriptionLeaderStore", () => r.getState())
        },
        66642: (e, t, a) => {
            a.d(t, {
                z: () => i
            });

            function i(e, t, i) {
                let n = !!(0, a(471078).O)({
                        environment: e,
                        spaceId: i
                    }),
                    o = (0, a(717274).Km)(e),
                    r = (0, a(641466).qp)();
                return !!(0, a(216260).dL)() && !!n && (!!o && null !== r && r >= 0 || (0, a(983888).B)(e, t, i) >= a(284397).g)
            }
        },
        72762: (e, t, a) => {
            a.d(t, {
                o: () => i
            });

            function i(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), a(639675).Ay.setState({ ...a(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        82861: (e, t, a) => {
            a.d(t, {
                Ku: () => o,
                Pf: () => d,
                YM: () => s,
                rg: () => c,
                vm: () => n,
                x9: () => l,
                yE: () => r
            }), a(944114), a(898992), a(354520), a(581454), a(814603), a(147566), a(198721);
            var i = () => a(938020);
            async function n(e) {
                let {
                    environment: t,
                    spaceId: i,
                    servicePeriodStart: n,
                    servicePeriodEnd: o,
                    limit: r,
                    cursor: s,
                    sortDirection: l,
                    entityTable: d,
                    createdByUserId: c,
                    searchQuery: u,
                    entityType: p
                } = e, m = await t.api.callApi({
                    eventName: "getTopEntitiesByUsage",
                    environment: t,
                    data: {
                        spaceId: i,
                        servicePeriodStart: n,
                        servicePeriodEnd: o,
                        limit: r,
                        cursor: s,
                        sortDirection: l,
                        entityTable: d,
                        createdByUserId: c,
                        searchQuery: u,
                        entityType: p,
                        forceMetronomeDataPath: (0, a(717274).Sc)()
                    }
                });
                return "failed" === m.type ? {
                    entities: [],
                    next_cursor: void 0,
                    previous_cursor: void 0,
                    canViewAllAgents: !1
                } : {
                    entities: m.data.entities,
                    next_cursor: m.data.next_cursor,
                    previous_cursor: m.data.previous_cursor,
                    canViewAllAgents: m.data.canViewAllAgents
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceId: a,
                    servicePeriodStart: i,
                    servicePeriodEnd: n,
                    workflowIds: o
                } = e, r = await t.api.callApi({
                    eventName: "getAIActivityCounts",
                    environment: t,
                    data: {
                        spaceId: a,
                        servicePeriodStart: i,
                        servicePeriodEnd: n,
                        workflowIds: o
                    }
                });
                return "failed" === r.type ? {
                    activityCounts: {}
                } : {
                    activityCounts: r.data.activityCounts
                }
            }
            async function r(e) {
                let {
                    environment: t,
                    spaceId: a,
                    servicePeriodStart: i,
                    servicePeriodEnd: n
                } = e, o = await t.api.callApi({
                    eventName: "getCustomAgentStats",
                    environment: t,
                    data: {
                        spaceId: a,
                        servicePeriodStart: i,
                        servicePeriodEnd: n
                    }
                });
                return "failed" === o.type ? {
                    uniqueCreatorCount: 0,
                    customAgentCount: 0,
                    totalRunCount: 0
                } : {
                    uniqueCreatorCount: o.data.uniqueCreatorCount,
                    customAgentCount: o.data.customAgentCount,
                    totalRunCount: o.data.totalRunCount
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    spaceId: i,
                    workflowId: n
                } = e;
                try {
                    let e = await t.api.callApi({
                        eventName: "getWorkflowCreditUsage",
                        environment: t,
                        data: {
                            spaceId: i,
                            workflowId: n
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
                                spaceId: i,
                                workflowId: n
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
                    spaceId: n,
                    servicePeriodStartMs: o,
                    servicePeriodEndMs: r,
                    sortDirection: s,
                    createdByUserId: l,
                    isRebrand: d
                } = e;
                try {
                    var c, g;
                    let e, f, b, h = (0, a(909212).Ks)(),
                        [y, v] = await Promise.all([u({
                            environment: t,
                            spaceId: n,
                            servicePeriodStartMs: o,
                            servicePeriodEndMs: r
                        }), p({
                            environment: t,
                            spaceId: n,
                            servicePeriodStartMs: o,
                            servicePeriodEndMs: r,
                            sortDirection: s,
                            createdByUserId: l
                        })]),
                        _ = v.filter(e => "custom_agent" === e.entityType || "database_agent" === e.entityType).map(e => e.id),
                        S = await m({
                            environment: t,
                            spaceId: n,
                            servicePeriodStartMs: o,
                            servicePeriodEndMs: r,
                            workflowIds: _
                        }),
                        w = [];
                    if (w.push(["Usage Summary"]), w.push(["Service Period", `${(0,i().xf)(o)} to ${(0,i().xf)(r)}`]), y) {
                        let e = 2 === y.version ? y.totalUsageInPeriod : y.totalMonthlyUsage;
                        w.push(["Credits Used", String(e)])
                    }
                    w.push([]);
                    let x = y ? 2 === y.version ? y.dailyBreakdowns : y.usageData : void 0;
                    if (x && x.length > 0) {
                        w.push(["Daily Usage"]), w.push(["Date", "Daily Credits", "Cumulative Credits"]);
                        for (let e = 0; e < x.length; e++) {
                            let t = x[e],
                                a = e > 0 ? x[e - 1].usage : 0,
                                n = t.usage - a;
                            w.push([(0, i().xf)(t.date), String(n), String(t.usage)])
                        }
                        w.push([])
                    }
                    w.push(["Agent Breakdown"]);
                    let k = ["Custom Agent", "Type", "Credits Used", ...h ? ["Credit limit"] : [], "Runs Completed", "Status", "Created By"];
                    for (let e of (w.push(k), v)) {
                        let t = [e.name ? ? "Unknown", "database_agent" === e.entityType ? d ? "Custom Agent, Autofill" : "Database Agent" : "Custom Agent", String(e.usage), ...h ? [String(e.creditLimitByWorkspaceAdmin ? ? e.creditLimit ? ? "")] : [], String("custom_agent" === e.entityType || "database_agent" === e.entityType ? S[e.id] ? ? 0 : ""), e.status ? ? "", e.createdByName ? ? ""];
                        w.push(t)
                    }
                    c = w.map(e => e.map(i().u5).join(",")).join("\n"), g = "ai-credit-usage.csv", e = new Blob([c], {
                        type: "text/csv;charset=utf-8;"
                    }), f = URL.createObjectURL(e), (b = document.createElement("a")).href = f, b.download = g, document.body.appendChild(b), b.click(), document.body.removeChild(b), URL.revokeObjectURL(f)
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
                    spaceId: i,
                    servicePeriodStartMs: n,
                    servicePeriodEndMs: o
                } = e, r = await t.api.callCellCompatibleApi({
                    eventName: "getAIDailyCreditUsage",
                    environment: t,
                    data: {
                        spaceId: i,
                        servicePeriodStartMs: n,
                        servicePeriodEndMs: o
                    },
                    cellNavigation: {
                        spaceId: i
                    }
                });
                if ("failed" !== r.type) return 2 === r.data.version ? { ...r.data,
                    dailyBreakdowns: (0, a(254266).j)({
                        usageData: r.data.dailyBreakdowns,
                        servicePeriodStartMs: n,
                        servicePeriodEndMs: o
                    })
                } : { ...r.data,
                    usageData: (0, a(254266).j)({
                        usageData: r.data.usageData,
                        servicePeriodStartMs: n,
                        servicePeriodEndMs: o
                    })
                }
            }
            async function p(e) {
                let t, {
                        environment: a,
                        spaceId: i,
                        servicePeriodStartMs: o,
                        servicePeriodEndMs: r,
                        sortDirection: s,
                        createdByUserId: l
                    } = e,
                    d = [];
                for (;;) {
                    let e = await n({
                        environment: a,
                        spaceId: i,
                        servicePeriodStart: o,
                        servicePeriodEnd: r,
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
            async function m(e) {
                let {
                    environment: t,
                    spaceId: a,
                    servicePeriodStartMs: i,
                    servicePeriodEndMs: n,
                    workflowIds: r
                } = e;
                if (0 === r.length) return {};
                let s = {};
                for (let e = 0; e < r.length; e += 25) {
                    let l = r.slice(e, e + 25),
                        {
                            activityCounts: d
                        } = await o({
                            environment: t,
                            spaceId: a,
                            servicePeriodStart: i,
                            servicePeriodEnd: n,
                            workflowIds: l
                        });
                    Object.assign(s, d)
                }
                return s
            }
        },
        87909: (e, t, a) => {
            a.r(t), a.d(t, {
                LockedTeamspacesSection: () => o
            });
            var i = a(296540),
                n = a(474848);

            function o() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s, {}), (0, n.jsx)(l, {})]
                })
            }
            let r = {
                title: { ...(0, a(153262).ic)(),
                    ...(0, a(615096).uA)(),
                    ...(0, a(615096).bH)(),
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                },
                icon: {
                    marginInlineStart: 2
                },
                sidebarItem: {
                    color: a(632079).Tj.sidebarSecondaryColor
                },
                buttonHovered: {
                    background: a(632079).Tj.sidebarItemSelectedBackground
                }
            };

            function s() {
                let e = (0, i.useCallback)(() => {
                    a(346472).A.open()
                }, []);
                return (0, n.jsxs)(a(988022).p, {
                    onClick: e,
                    style: r.title,
                    children: [(0, n.jsx)(a(109939).sA, {
                        id: "LockedSidebarSection.label.teamspaces",
                        defaultMessage: "Teamspaces"
                    }), (0, n.jsx)(a(16275).I, {
                        icon: a(930113).lockFillSmallIcon,
                        size: "sm",
                        style: r.icon
                    })]
                })
            }

            function l() {
                let e = (0, i.useCallback)(() => {
                    a(346472).A.open()
                }, []);
                return (0, n.jsx)(a(64960).Ay, {
                    style: a(132261).DX.baseSidebarItem,
                    hoveredStyle: r.buttonHovered,
                    onClick: e,
                    children: (0, n.jsx)(a(380559).u, {
                        style: r.sidebarItem,
                        left: (0, n.jsx)(a(16275).I, {
                            icon: a(638501).plusSmallIcon,
                            size: "sm",
                            colorVariant: a(986939).A.isMobile ? "tertiary" : "secondary"
                        }),
                        disableMobileBorder: !0,
                        children: (0, n.jsx)(a(109939).sA, {
                            defaultMessage: "Join teammates",
                            id: "sidebar.lockedTeamspaces.button"
                        })
                    })
                })
            }
        },
        87945: (e, t, a) => {
            a.d(t, {
                F: () => i
            });
            let i = a(546605).Store.createValue(!1, {
                name: "slipperySlopeSidebarCustomizationModeStore"
            })
        },
        92168: (e, t, a) => {
            a.d(t, {
                k: () => i
            });
            let i = (0, a(104509).xh)("arrowInCircleUp", {
                default: {
                    loader: () => a.e(15538).then(a.bind(a, 531718))
                },
                small: {
                    loader: () => a.e(15538).then(a.bind(a, 989556))
                },
                fill: {
                    loader: () => a.e(15538).then(a.bind(a, 682612))
                },
                fillSmall: {
                    loader: () => a.e(15538).then(a.bind(a, 96699))
                }
            }, ["arrow", "circle", "up", "direction", "pointer", "upgrade"])
        },
        92609: (e, t, a) => {
            a.d(t, {
                m: () => i
            });
            let i = "2025-12-04"
        },
        97627: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarBottomActions: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                sidebarItemButtonStyle: a(153262).hG,
                sidebarItemHoveredStyle: {
                    background: a(632079).Tj.sidebarItemSelectedBackground
                },
                sidebarItemActiveStyle: { ...a(153262).hG,
                    background: a(632079).Tj.sidebarItemSelectedBackground,
                    color: a(632079).Tj.text.primary
                }
            };

            function o() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(682985).O$)(a(728372).AppStoreMainEditorCurrentBlockStore),
                    o = (0, a(718012).V)(),
                    r = (0, a(153223).u)(),
                    s = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore),
                    l = (0, a(226309).lh)({
                        spaceId: null == s ? void 0 : s.id
                    }),
                    {
                        isTablet: d
                    } = (0, a(533992).Y0)(),
                    c = (0, a(473106).p)(),
                    u = !(0, a(682985).O$)(a(420153).l),
                    p = (0, a(682985).K8)(() => (null == s ? void 0 : s.canEdit()) && u, [s, u]),
                    m = (0, a(649344).v)({
                        environment: e
                    }) && p;
                return (0, i.jsxs)(a(4458).VP, {
                    gap: 1,
                    children: [c ? (0, i.jsx)(a(355039).A, {
                        hasActivePlan: (0, a(226309).UU)(l)
                    }) : void 0, p ? (0, i.jsx)(a(62412).u, {
                        buttonStyles: {
                            hoveredStyle: n.sidebarItemHoveredStyle
                        }
                    }) : void 0, (0, i.jsx)(a(597313).d, {}), !d && p ? (0, i.jsx)(a(24884).n, {
                        step: "explore_templates",
                        inAppCalloutStore: o,
                        teamIds: r,
                        renderTooltip: e => (0, i.jsx)(a(715539).L_, { ...e
                        }),
                        children: (0, i.jsx)(a(138105).W, {
                            styles: {
                                sidebarItemButtonStyle: n.sidebarItemButtonStyle,
                                buttonHoveredStyle: n.sidebarItemHoveredStyle,
                                sidebarItemActiveStyle: n.sidebarItemActiveStyle
                            }
                        })
                    }) : void 0, m ? d ? (0, i.jsx)(a(992894).h, {
                        store: t,
                        buttonStyles: {
                            hoveredStyle: n.sidebarItemHoveredStyle
                        }
                    }) : (0, i.jsx)(a(51831).m, {
                        content: () => (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "View & restore deleted pages",
                            id: "sidebar.openTrashModalButton.tooltip"
                        }),
                        originGap: 6,
                        placement: "right",
                        children: e => (0, i.jsx)(a(992894).h, {
                            store: t,
                            buttonStyles: {
                                hoveredStyle: n.sidebarItemHoveredStyle
                            },
                            ...e
                        })
                    }) : null]
                })
            }
        },
        97700: (e, t, a) => {
            a.d(t, {
                d: () => n,
                n: () => o
            });
            let i = {
                aimn: 7
            };

            function n(e, t) {
                var a;
                return "business_trial_non_conversion" === e || void 0 !== i[e] && (null == t || null == (a = t.getSettings()) || null == (a = a.offers_metadata) || null == (a = a[e]) ? void 0 : a.modal_seen_at) !== void 0
            }

            function o(e) {
                var t, n, o;
                let r, s = i[e.campaign],
                    l = null == (t = e.space) || null == (t = t.getSettings()) || null == (t = t.offers_metadata) || null == (t = t[e.campaign]) ? void 0 : t.modal_seen_at;
                if (void 0 !== s && void 0 !== l) return Math.max(0, s - Math.max(0, (0, a(362008).Mn)(l, Date.now())));
                if ("business_trial_non_conversion" !== e.campaign) return;
                let d = null == (n = e.space) ? void 0 : n.getSetting("biz_offer_aversion_rejected_time");
                if (!d) return;
                let c = e.billingData ? (0, a(192159).DS)(e.billingData).toMillis() : Date.now(),
                    u = (0, a(362008).Mn)(d, c),
                    p = ("number" == typeof(r = null == (o = e.offerMetadata) ? void 0 : o.post_biz_trial_coupon_eligible_days) ? r : 7) - u;
                return p <= 0 ? 0 : p
            }
        },
        100410: (e, t, a) => {
            a.r(t), a.d(t, {
                iPhoneIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.12 2.37 9.75 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.375 15c0-.345.28-.625.625-.625h4a.625.625 0 1 1 0 1.25H8A.625.625 0 0 1 7.375 15M9 4.375a.625.625 0 1 0 0 1.25h2a.625.625 0 1 0 0-1.25z"
                        }), (0, i.jsx)("path", {
                            d: "M5.125 4.5c0-1.174.951-2.125 2.125-2.125h5.5c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125h-5.5A2.125 2.125 0 0 1 5.125 15.5zm2.125-.875a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h5.5a.875.875 0 0 0 .875-.875v-11a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                o = (0, a(104509).wt)("iPhone", n, "default")
        },
        109925: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                phoneIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.58 2.77 14.78 14.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.84 3.093a1.34 1.34 0 0 1 1.881.158l2.52 2.96a1.524 1.524 0 0 1-.083 2.066l-1.22 1.22 2.715 2.717 1.221-1.221a1.525 1.525 0 0 1 2.066-.084l2.962 2.517a1.29 1.29 0 0 1 .16 1.805l-.559.678a3.94 3.94 0 0 1-3.447 1.414l-.16-.016A11.564 11.564 0 0 1 2.614 7.299 3.88 3.88 0 0 1 3.97 3.822zm.93.969a.09.09 0 0 0-.128-.011l-.869.729a2.63 2.63 0 0 0-.919 2.358 10.314 10.314 0 0 0 9.17 8.925l.16.017a2.7 2.7 0 0 0 2.355-.966l.558-.678a.04.04 0 0 0-.005-.057l-2.961-2.517a.275.275 0 0 0-.373.015l-1.663 1.663a.625.625 0 0 1-.884 0l-3.6-3.6a.625.625 0 0 1 0-.884l1.663-1.663a.275.275 0 0 0 .015-.373z"
                    })
                },
                n = (0, a(104509).wt)("phone", i, "default")
        },
        112341: (e, t, a) => {
            a.d(t, {
                P: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                wrapper: {
                    position: "relative",
                    display: "inline-flex"
                },
                badge: {
                    position: "absolute",
                    top: 1,
                    insetInlineEnd: -2,
                    border: `1px solid ${a(632079).Tj.background.secondary}`,
                    borderRadius: "50%",
                    pointerEvents: "none"
                },
                dot: {
                    color: a(632079).Tj.blue.icon.accentPrimary
                }
            };

            function o({
                label: e,
                icon: t,
                showBadge: r = !1,
                highlighted: s = !1,
                style: l,
                hoveredStyle: d,
                pressedStyle: c,
                "aria-label": u,
                ...p
            }) {
                return (0, i.jsxs)("div", {
                    style: n.wrapper,
                    children: [(0, i.jsx)(a(988022).p, {
                        iconLeading: t,
                        size: "md",
                        colorVariant: s ? "accentPrimary" : "tertiary",
                        colorPalette: s ? "blue" : "gray",
                        "aria-label": u ? ? e,
                        ...p,
                        children: e
                    }), r ? (0, i.jsx)(a(210882).m, {
                        color: n.dot.color,
                        size: 8,
                        style: n.badge
                    }) : null]
                })
            }
        },
        119965: (e, t, a) => {
            a.d(t, {
                V: () => n
            });
            var i = a(296540);

            function n() {
                let e = (0, i.useRef)(!1),
                    t = (0, a(682985).K8)(() => a(728372).default.state.renderPhase, []),
                    n = (0, a(682985).K8)(() => a(329464).A.state.initialCollectionPendingRenderCount > 0, []);
                return "rendered" !== t || n || (e.current = !0), !e.current
            }
        },
        124108: (e, t, a) => {
            a.d(t, {
                N: () => s
            });
            var i = a(296540),
                n = a(474848);
            let o = {
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
                r = {
                    destructiveButtonDefault: { ...o,
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
                    primaryButtonDefault: { ...o,
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
                    secondaryButtonDefault: { ...o,
                        color: a(632079).Tj.text.secondary,
                        fill: a(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...o,
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
                    outlineButtonDefault: { ...o,
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
                    blackButtonDefault: { ...o,
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
                    ...o
                } = e, s = (0, i.useContext)(a(19187).e), l = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, i.useMemo)(() => ({
                    destructive: {
                        default: r.destructiveButtonDefault,
                        hovered: r.destructiveButtonHovered,
                        pressed: r.destructiveButtonPressed
                    },
                    primary: {
                        default: r.primaryButtonDefault,
                        hovered: r.primaryButtonHovered,
                        pressed: r.primaryButtonPressed
                    },
                    secondary: {
                        default: r.secondaryButtonDefault
                    },
                    dismiss: {
                        default: r.secondaryButtonDefault
                    },
                    outline: {
                        default: r.outlineButtonDefault,
                        hovered: r.outlineButtonHovered,
                        pressed: r.outlineButtonPressed
                    },
                    black: {
                        default: r.blackButtonDefault,
                        hovered: r.blackButtonHovered,
                        pressed: r.blackButtonPressed
                    },
                    plain: {
                        default: r.plainButtonDefault,
                        hovered: r.plainButtonHovered,
                        pressed: r.plainButtonPressed
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
                        ...o,
                        children: [t.isLoading ? (0, n.jsx)(a(517334).k, {
                            style: r.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        125843: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarFooter: () => T
            });
            var i = a(296540);
            let n = a(546605).Store.createValue({
                current: null
            });

            function o(e) {
                e !== n.state.current && n.setState({
                    current: e
                })
            }
            let r = {
                    BackToWorkspaceCallout: new(a(815048)).O2("BackToWorkspaceCallout", async () => a.e(21056).then(a.bind(a, 161384)))
                },
                s = (0, a(815048)._h)(r.BackToWorkspaceCallout, e => e.BackToWorkspaceCallout);
            a(898992), a(354520), a(581454);
            var l = a(474848);
            let d = (0, a(109939).YK)({
                    openTooltip: {
                        id: "sidebar.appSwitcher.calendar.openTooltip",
                        defaultMessage: "Open Notion Calendar"
                    },
                    exploreTooltip: {
                        id: "sidebar.appSwitcher.calendar.exploreTooltip",
                        defaultMessage: "Explore Notion Calendar"
                    }
                }),
                c = (0, i.forwardRef)(function(e, t) {
                    let n = (0, a(109939).tz)(),
                        o = (0, i.useRef)(null),
                        r = (0, i.useCallback)(e => {
                            "function" == typeof t ? t(e) : t && (t.current = e), o.current = e
                        }, [t]),
                        s = (0, a(533992).v3)(),
                        c = (0, a(345296).X)(),
                        u = c ? d.openTooltip : d.exploreTooltip,
                        {
                            onIconClick: p
                        } = e,
                        m = (0, i.useCallback)(() => {
                            p(), a(368690).uX(), c ? (0, a(874809).Op)({
                                environment: s,
                                spaceStore: void 0,
                                collectionViewStore: void 0,
                                from: "appSwitcher"
                            }) : (a(328373).o.setState({
                                signupCtaAttribution: "appSwitcher"
                            }), (0, a(171629).U)(s, "notion_calendar_launch_promo"))
                        }, [s, c, p]),
                        g = (0, a(682985).O$)(a(610463).X),
                        {
                            eventsLoadingState: f
                        } = (0, a(24962).O)("personal_home"),
                        b = (0, a(897638).N)();
                    return g && "rejected" !== f.status ? (0, l.jsx)(a(844705).s, {
                        canShowCustomPopover: e.canShowCustomPopover,
                        hideUpsellPopover: e.hideUpsellPopover,
                        handleButtonClick: m,
                        ref: r,
                        placementToOrigin: "top",
                        alignmentToOrigin: "center",
                        originGap: 6,
                        originContainerHeight: 28,
                        originContainerWidth: 28,
                        originElement: (0, l.jsx)(a(374533).A, {
                            size: "md",
                            icon: b,
                            ariaLabel: n.formatMessage(u),
                            onClick: m
                        })
                    }) : (0, l.jsx)(a(208326).o, {
                        ref: r,
                        icon: b,
                        label: n.formatMessage(u),
                        tooltipDisabled: !g,
                        onClick: m,
                        onMouseEnter: e.showCalendarUpsellPopover
                    })
                });
            a(16280);
            let u = {
                display: "flex",
                flexDirection: "column",
                width: "226px",
                overflow: "visible",
                boxShadow: "none"
            };

            function p({
                children: e
            }) {
                let t = (0, a(533992).v3)(),
                    [n, o] = (0, i.useState)(null),
                    [r, s] = (0, i.useState)(null),
                    [d, c] = (0, i.useState)(null),
                    [m, g] = (0, i.useState)(void 0),
                    [f, b] = (0, i.useState)(!1),
                    [h, y] = (0, i.useState)({
                        current: void 0,
                        previous: void 0
                    }),
                    {
                        forcedCalloutPopover: v,
                        inAppCalloutHandlers: _,
                        onIconClick: S
                    } = function({
                        calendarElement: e,
                        mailElement: t,
                        notionDesktopElement: n
                    }) {
                        let o, r = (0, a(533992).v3)(),
                            {
                                forcedCalloutPopover: s,
                                inAppCalloutMessage: l
                            } = (0, a(682985).K8)(() => {
                                let e = a(696190).default.state.messages.get("notion_calendar_existing_user_activation_callout");
                                if (e) return {
                                    forcedCalloutPopover: "calendar",
                                    inAppCalloutMessage: e
                                };
                                let t = a(696190).default.state.messages.get("notion_mail_launch_2_callout");
                                if (t) return {
                                    forcedCalloutPopover: "mail",
                                    inAppCalloutMessage: t
                                };
                                let i = a(696190).default.state.messages.get("notion_desktop_app_existing_user_callout");
                                return i ? {
                                    forcedCalloutPopover: "notionDesktopDownload",
                                    inAppCalloutMessage: i
                                } : {
                                    forcedCalloutPopover: void 0,
                                    inAppCalloutMessage: void 0
                                }
                            }, []);
                        switch ((0, i.useEffect)(() => {
                            if (!l) return;
                            if (!a(984858).sidebarExpandedStore.state) {
                                a(419750).Fg(Error("AppSwitcherUpsellPopoverManager: in-app callout message requested, but sidebar is closed."), {
                                    data: {
                                        inAppCalloutMessage: l
                                    }
                                }), (0, a(734389).O)(r, l);
                                return
                            }
                            let e = new AbortController;
                            return a(984858).sidebarExpandedStore.waitUntil(() => !a(984858).sidebarExpandedStore.state, {
                                signal: e.signal
                            }).then(() => {
                                s && (0, a(734389).O)(r, l)
                            }).catch(() => {}), () => {
                                e.abort()
                            }
                        }, [s, r, l]), s) {
                            case "calendar":
                                o = e;
                                break;
                            case "mail":
                                o = t;
                                break;
                            case "notionDesktopDownload":
                                o = n
                        }(0, i.useEffect)(() => {
                            o ? o.focus() : s && (a(696190).default.removeMessage(s), a(419750).Fg(Error("AppSwitcherUpsellPopoverManager: forced callout popover requested, but no target app element found."), {
                                data: {
                                    forcedCalloutPopover: s
                                }
                            }))
                        }, [s, o]);
                        let {
                            onClick: d,
                            onDismiss: c
                        } = (0, a(105875).t)({
                            messageKey: (0, a(462391).h2)(null == l ? void 0 : l.key)
                        }), u = (0, i.useMemo)(() => {
                            if (s) return {
                                onClick: () => {
                                    var e;
                                    null == (e = o) || e.click(), (0, a(734389).O)(r, l)
                                },
                                onDismiss: c
                            }
                        }, [s, o, c, r, l]), p = (0, i.useCallback)(e => {
                            e === s && (d(), (0, a(734389).O)(r, l))
                        }, [s, d, r, l]);
                        return {
                            forcedCalloutPopover: s,
                            inAppCalloutHandlers: u,
                            onIconClick: p
                        }
                    }({
                        calendarElement: n,
                        mailElement: r,
                        notionDesktopElement: d
                    }),
                    w = v ? ? h.current,
                    x = v ? ? h.previous,
                    k = !!n,
                    M = !!r,
                    I = !!d,
                    C = (0, i.useMemo)(() => ({
                        calendar: k,
                        mail: M,
                        notionDesktopOpen: I,
                        notionDesktopDownload: I
                    }), [k, M, I]),
                    A = !!(w && C[w]);
                return (0, i.useEffect)(() => {
                    if (v) return;
                    let e = setTimeout(() => {
                        w && A && (0, a(104310).u)({
                            event: {
                                eventName: "connected_apps_app_switcher_upsell_presented",
                                eventProperties: {
                                    app_target: w
                                }
                            }
                        })
                    }, 200);
                    return () => {
                        clearTimeout(e)
                    }
                }, [w, t, A, v]), (0, l.jsx)(a(182718).zD, {
                    preventCaptureEsc: !0,
                    suppressOriginContext: !0,
                    forceInitialInbound: !0,
                    disableDarkOverlayBackground: !0,
                    disableMouseCapture: !0,
                    trapFocus: !1,
                    preventScaleTransition: !1,
                    preventOpacityTransition: !1,
                    preventSlideUpTransition: !1,
                    open: !!w,
                    popupType: a(423291).n.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "top",
                    viewportPadding: 6,
                    originGap: 6,
                    style: a(46431).z.style,
                    animationConfig: a(46431).z.animationConfig,
                    popupWrapStyle: u,
                    content: () => x && C[x] && (0, l.jsx)(a(825485).k, {
                        inAppCalloutHandlers: _,
                        imageFailedToLoad: f,
                        setImageFailedToLoad: b,
                        calendarElement: n,
                        mailElement: r,
                        notionDesktopElement: d,
                        hoveredAppTarget: x,
                        isAppTargetLoading: m
                    }),
                    children: e({
                        setElement: {
                            calendar: o,
                            mail: s,
                            notion: c
                        },
                        setTargetApplication: function(e) {
                            y(t => ({
                                current: e,
                                previous: e ? ? t.current
                            })), e && b(!1)
                        },
                        setLoading: g,
                        onIconClick: S,
                        canShowCustomPopover: !v
                    })
                })
            }
            let m = (0, a(109939).YK)({
                    tooltip: {
                        id: "desktopAppSwitcher.tooltip",
                        defaultMessage: "Get the desktop app"
                    }
                }),
                g = (0, i.forwardRef)(function(e, t) {
                    let {
                        showDesktopUpsellPopover: n
                    } = e, o = (0, a(533992).v3)(), r = (0, a(682985).O$)(a(17118).l), s = (0, i.useRef)(null), d = (0, a(421573).A)(t, s), c = (0, a(109939).tz)(), u = (0, i.useCallback)(async e => {
                        if (null === r) {
                            n({
                                isRegistered: !1,
                                isLoading: !0
                            });
                            let e = await (0, a(126592).e)(o);
                            s.current && s.current.matches(":hover") && n({
                                isRegistered: e,
                                isLoading: !1
                            });
                            return
                        }
                        n({
                            isRegistered: r
                        })
                    }, [n, o, r]), p = (0, i.useCallback)(async () => {
                        let e = r;
                        (0, a(104310).u)({
                            event: {
                                eventName: "click_desktop_sidebar_link",
                                eventProperties: {}
                            }
                        }), null === e && (e = await (0, a(126592).e)(o)), (0, a(151760).R)({
                            environment: o,
                            from: "appSwitcher",
                            isRegistered: !!e
                        })
                    }, [o, r]);
                    return (0, l.jsx)(a(208326).o, {
                        label: c.formatMessage(m.tooltip),
                        tooltipDisabled: !e.shouldShowDefaultTooltip,
                        ref: d,
                        icon: {
                            icon: a(898378).notionTintableIcon,
                            size: 18
                        },
                        onClick: p,
                        onMouseEnter: u
                    })
                }),
                f = new(a(510969)).A,
                b = {
                    position: "relative",
                    display: "flex",
                    alignItems: "center"
                };

            function h({
                variant: e = "tooltip"
            }) {
                var t;
                let i = (0, a(533992).v3)(),
                    {
                        isPhone: n,
                        isTablet: o
                    } = (0, a(533992).Y0)(),
                    r = (0, a(83208).X)("adoption_sidebar_footer_revamp"),
                    {
                        buttonLabel: s,
                        changelogFooterUpdatesEnabled: d,
                        latestReleaseDate: c,
                        renderBadge: u,
                        tooltipLabel: p
                    } = (0, a(941451).s)(),
                    m = (null == (t = i.mobileNative) ? void 0 : t.supportsNativeHomeOnPhone()) || !1,
                    g = "label" === e;
                return (0, l.jsx)(a(656252).A, {
                    buttonPopupStore: o ? a(51599).r : f,
                    source: o ? "appSwitcher" : void 0,
                    hidesMobileNativeBottomBar: m,
                    preventSlideUpTransition: m,
                    popupType: o ? a(656252).z.BottomSheet : n ? a(656252).z.SlideUp : a(656252).z.Popup,
                    bottomSheetInitialState: o ? "half" : "full",
                    onClick: () => {
                        o || a(51599).r.setState({ ...a(51599).r.state,
                            open: !0,
                            source: "appSwitcher"
                        }), a(803854).VX(i, {
                            from: "appswitcher",
                            badged: u
                        })
                    },
                    onClose: () => {
                        o || (0, a(174338).ho)({
                            environment: i,
                            changelogFooterUpdatesEnabled: d,
                            releaseDate: c
                        })
                    },
                    alignmentToOrigin: r ? "start" : "end",
                    placementToOrigin: "top",
                    originGap: 4,
                    content: () => (0, l.jsx)(a(872301).p, {
                        fromForAnalytics: "appswitcher"
                    }),
                    children: e => g ? (0, l.jsx)(a(112341).P, {
                        icon: a(80094).questionMarkCircleIcon,
                        label: s,
                        showBadge: u,
                        "aria-label": p,
                        ...e
                    }) : (0, l.jsxs)("div", {
                        style: b,
                        children: [(0, l.jsx)(a(208326).o, {
                            icon: a(80094).questionMarkCircleIcon,
                            label: p,
                            ...e
                        }), u ? (0, l.jsx)(v, {}) : null]
                    })
                })
            }
            let y = {
                badge: {
                    position: "absolute",
                    top: 4,
                    insetInlineEnd: 4,
                    pointerEvents: "none"
                },
                dot: {
                    color: a(632079).Tj.blue.icon.accentPrimary
                },
                dotstyle: {
                    border: `1px solid ${a(632079).Tj.background.secondary}`
                }
            };

            function v() {
                return (0, l.jsx)("div", {
                    style: y.badge,
                    children: (0, l.jsx)(a(210882).m, {
                        color: y.dot.color,
                        size: 8,
                        style: y.dotstyle
                    })
                })
            }
            let _ = (0, i.forwardRef)(function(e, t) {
                let n = (0, a(533992).v3)(),
                    o = (0, a(109939).tz)(),
                    {
                        onIconClick: r
                    } = e,
                    s = (0, i.useCallback)(() => {
                        r(), a(637847).j(n), (0, a(250662).Zt)({
                            environment: n,
                            from: "appSwitcher"
                        })
                    }, [n, r]);
                return (0, l.jsx)(a(208326).o, {
                    label: o.formatMessage(a(522883).j.mail.title),
                    tooltipDisabled: "false" === e.isMailUser,
                    ref: t,
                    icon: a(612670).F,
                    onClick: s,
                    onMouseEnter: "false" === e.isMailUser ? e.showMailUpsellPopover : void 0
                })
            });

            function S({}) {
                let {
                    isTablet: e,
                    desktopTargetPlatform: t,
                    isDesktopBrowser: i
                } = (0, a(533992).Y0)(), n = (0, a(533992).v3)(), {
                    isMailUser: o,
                    checkMailUser: r
                } = (0, a(148777).g)(), s = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), d = (0, a(682985).K8)(() => (0, a(3161).m)(n, s), [n, s]), u = (0, a(83208).X)("adoption_sidebar_footer_revamp"), {
                    isNotionMailDisabled: m
                } = (0, a(717885).a)({
                    environment: n
                }), f = !m && "msStore" !== t, b = !!i || void 0, y = (0, a(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: e ? "13px 16px" : "10px 12px",
                        boxSizing: "border-box"
                    }
                }), [e]);
                return u ? (0, l.jsx)("div", {
                    style: y.container,
                    children: (0, l.jsxs)(a(4458).fI, {
                        gap: 0,
                        children: [(0, l.jsx)(h, {}), (0, l.jsx)(a(245337).a, {})]
                    })
                }) : (0, l.jsx)(p, {
                    children: ({
                        setElement: e,
                        onIconClick: t,
                        setTargetApplication: i,
                        setLoading: n,
                        canShowCustomPopover: s
                    }) => (0, l.jsxs)("div", {
                        style: y.container,
                        onMouseEnter: r,
                        children: [(0, l.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            onMouseLeave: () => i(void 0),
                            children: [b ? (0, l.jsx)(g, {
                                ref: e.notion,
                                showDesktopUpsellPopover: ({
                                    isRegistered: e,
                                    isLoading: t
                                }) => {
                                    i(e ? "notionDesktopOpen" : "notionDesktopDownload"), t ? n("notionDesktopDownload") : n(void 0)
                                },
                                shouldShowDefaultTooltip: !1
                            }) : void 0, d ? (0, l.jsx)(c, {
                                ref: e.calendar,
                                showCalendarUpsellPopover: () => i("calendar"),
                                hideUpsellPopover: () => i(void 0),
                                onIconClick: () => t("calendar"),
                                canShowCustomPopover: s
                            }) : void 0, f ? (0, l.jsx)(_, {
                                ref: e.mail,
                                isMailUser: o,
                                showMailUpsellPopover: () => i("mail"),
                                onIconClick: () => t("mail")
                            }) : void 0]
                        }), (0, l.jsxs)(a(4458).fI, {
                            gap: 0,
                            children: [(0, l.jsx)(a(245337).a, {}), (0, l.jsx)(h, {})]
                        })]
                    })
                })
            }
            let w = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.25",
                    svg: (0, l.jsx)("path", {
                        d: "M8.758 2.476a7.7 7.7 0 0 1 2.484 0 .625.625 0 1 1-.202 1.233 6.4 6.4 0 0 0-2.08 0 .625.625 0 0 1-.202-1.233m4.812 1.469a.625.625 0 0 1 .872-.143 7.7 7.7 0 0 1 1.756 1.756.625.625 0 1 1-1.015.729 6.4 6.4 0 0 0-1.47-1.47.625.625 0 0 1-.143-.872m-7.283.872a.625.625 0 0 0-.73-1.015 7.7 7.7 0 0 0-1.755 1.756.625.625 0 1 0 1.015.729 6.4 6.4 0 0 1 1.47-1.47m10.519 3.425a.625.625 0 0 1 .718.516 7.7 7.7 0 0 1 0 2.484.625.625 0 0 1-1.233-.202 6.4 6.4 0 0 0 0-2.08.625.625 0 0 1 .515-.718M3.71 8.96a.625.625 0 0 0-1.234-.202 7.7 7.7 0 0 0 0 2.484.625.625 0 1 0 1.233-.202 6.4 6.4 0 0 1 0-2.08m12.346 4.61c.28.201.344.592.143.872a8 8 0 0 1-.625.762l-.006.007A7.6 7.6 0 0 1 10 17.625a7.6 7.6 0 0 1-4.434-1.42l-.008-.007a7.7 7.7 0 0 1-1.756-1.756.625.625 0 0 1 1.015-.729q.241.336.523.637l.006.006q.267.286.567.537C6.702 13.495 8.246 12.56 10 12.56s3.298.934 4.087 2.332a6.4 6.4 0 0 0 1.096-1.18.625.625 0 0 1 .872-.143m-8.3-7.4C8.277 5.519 9.05 5.125 10 5.125s1.723.393 2.245 1.044c.51.635.75 1.474.75 2.346s-.24 1.71-.75 2.346c-.522.65-1.294 1.044-2.245 1.044-.95 0-1.723-.394-2.245-1.044-.51-.635-.75-1.474-.75-2.346s.24-1.711.75-2.346"
                    })
                },
                x = (0, a(104509).wt)("personCropCircleDashedFill", w, "fill");

            function k({
                sidebarSpaceStore: e,
                sidebarSpaceViewStore: t
            }) {
                let {
                    state: i
                } = (0, a(66833).E)({
                    sidebarSpaceStore: e,
                    sidebarSpaceViewStore: t
                });
                return i && "control" === i.experimentVariant ? (0, l.jsx)(C, {
                    sidebarSpaceStore: e,
                    state: i
                }) : null
            }
            let M = (0, a(109939).YK)({
                    createOnlyDescription: {
                        defaultMessage: "To unlock all of Notion’s features, try creating your own workspace",
                        id: "sidebar.guestPopup.createOnlyDescription"
                    },
                    joinDescription: {
                        defaultMessage: "Join as member to collaborate",
                        id: "sidebar.guestPopup.joinOrCreateDescription"
                    },
                    createWorkspaceCTA: {
                        defaultMessage: "Create workspace",
                        id: "sidebar.guestPopup.createWorkspaceCTA"
                    },
                    requestMembershipCTA: {
                        defaultMessage: "Request membership",
                        id: "sidebar.guestPopup.requestMembershipCTA"
                    },
                    createOrJoinWorkspaceCTA: {
                        defaultMessage: "Join or create workspace",
                        id: "sidebar.guestPopup.createOrJoinWorkspaceCTA"
                    },
                    pendingRequestCTA: {
                        defaultMessage: "Membership requested",
                        id: "sidebar.guestPopup.pendingRequestCTA"
                    },
                    pendingRequestDescription: {
                        defaultMessage: "In the meantime, start creating pages",
                        id: "sidebar.guestPopup.pendingRequestDescription"
                    }
                }),
                I = {
                    guestPopupCard: {
                        padding: 14,
                        marginTop: "auto",
                        marginInlineEnd: 8,
                        marginBottom: 8,
                        marginInlineStart: 8,
                        borderRadius: 8,
                        background: a(632079).Tj.background.elevated,
                        border: `1px solid ${a(632079).Tj.border.secondary}`
                    },
                    primaryButton: {
                        width: "100%",
                        height: "inherit",
                        justifyContent: "center",
                        padding: 8,
                        marginTop: 8,
                        whiteSpace: "normal",
                        textAlign: "center",
                        background: a(632079).Tj.blue.background.secondaryTranslucent,
                        color: a(632079).Tj.blue.text.accentPrimary
                    },
                    secondaryButton: {
                        width: "100%",
                        height: "inherit",
                        justifyContent: "center",
                        padding: 8,
                        marginTop: 4,
                        whiteSpace: "normal",
                        textAlign: "center",
                        color: a(632079).Tj.text.primary
                    }
                };

            function C({
                sidebarSpaceStore: e,
                state: t
            }) {
                let n, o, r = (0, a(533992).v3)(),
                    s = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    s.current || ((0, a(104310).u)({
                        event: {
                            eventName: "guest_upsell_ui_viewed",
                            eventProperties: {
                                membership_request_state: t.membershipRequest,
                                has_joinable_spaces: t.hasJoinableSpaces,
                                experiment_variant: "control",
                                ui_type: "footer"
                            }
                        }
                    }), s.current = !0)
                }, [t.membershipRequest, t.hasJoinableSpaces]);
                let d = (0, i.useCallback)(() => {
                        (0, a(104310).u)({
                            event: {
                                eventName: "guest_upsell_button_clicked",
                                eventProperties: {
                                    membership_request_state: t.membershipRequest,
                                    has_joinable_spaces: t.hasJoinableSpaces,
                                    experiment_variant: "control",
                                    ui_type: "footer",
                                    button_clicked: t.hasJoinableSpaces ? "add_workspace" : "create_workspace"
                                }
                            }
                        }), a(807717).createOrJoinSpace(r, "guest_popup")
                    }, [r, t]),
                    c = (0, i.useCallback)(() => (0, l.jsx)(a(548436).A, {
                        style: I.secondaryButton,
                        disabled: !0,
                        children: (0, l.jsx)(a(111010).D, {
                            styleKey: "captionMedium",
                            children: (0, l.jsx)(a(109939).sA, { ...M.pendingRequestCTA
                            })
                        })
                    }), []),
                    u = (0, i.useCallback)(() => e ? (0, l.jsx)(a(804392).A, {
                        origin: (0, l.jsx)(a(988022).p, {
                            style: I.primaryButton,
                            onClick: () => {
                                (0, a(104310).u)({
                                    event: {
                                        eventName: "guest_upsell_button_clicked",
                                        eventProperties: {
                                            membership_request_state: t.membershipRequest,
                                            has_joinable_spaces: t.hasJoinableSpaces,
                                            experiment_variant: "control",
                                            ui_type: "footer",
                                            button_clicked: "request_membership"
                                        }
                                    }
                                })
                            },
                            children: (0, l.jsx)(a(111010).D, {
                                styleKey: "captionMedium",
                                children: (0, l.jsx)(a(109939).sA, { ...M.requestMembershipCTA
                                })
                            })
                        })
                    }) : null, [e, t]),
                    p = (0, i.useCallback)(({
                        cta: e,
                        isPrimary: t
                    }) => (0, l.jsx)(a(548436).A, {
                        onClick: d,
                        style: t ? I.primaryButton : I.secondaryButton,
                        children: (0, l.jsx)(a(111010).D, {
                            styleKey: "captionMedium",
                            children: (0, l.jsx)(a(109939).sA, { ...e
                            })
                        })
                    }), [d]),
                    m = t.hasJoinableSpaces ? M.createOrJoinWorkspaceCTA : M.createWorkspaceCTA;
                switch (t.membershipRequest) {
                    case "pending_request":
                        n = M.pendingRequestDescription, o = (0, l.jsx)(c, {});
                        break;
                    case "can_request":
                        n = M.joinDescription, o = (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(u, {}), (0, l.jsx)(p, {
                                cta: m,
                                isPrimary: !1
                            })]
                        });
                        break;
                    case "cannot_request":
                        n = t.hasJoinableSpaces ? M.joinDescription : M.createOnlyDescription, o = (0, l.jsx)(p, {
                            cta: m,
                            isPrimary: !0
                        })
                }
                let g = (0, i.useCallback)(() => {
                    let i = a(728372).AppStoreCurrentUserSettingsStore.state;
                    e && i && (0, a(194913).G)({
                        environment: r,
                        userSettingsStore: i,
                        spaceId: e.id,
                        isEligibleForGuestMembershipRequest: "can_request" === t.membershipRequest,
                        hasJoinableSpaces: t.hasJoinableSpaces,
                        userAction: "GuestSidebarFooter.dismissGuestMembershipRequestPopup",
                        experimentVariant: "control"
                    })
                }, [r, t, e]);
                return (0, l.jsxs)(a(4458).VP, {
                    gap: 0,
                    style: I.guestPopupCard,
                    children: [(0, l.jsxs)(a(4458).fI, {
                        justifyContent: "space-between",
                        gap: 0,
                        marginBottom: 10,
                        children: [(0, l.jsx)(a(16275).I, {
                            icon: x,
                            colorVariant: "secondary"
                        }), (0, l.jsx)(a(64960).Ay, {
                            onClick: g,
                            children: (0, l.jsx)(a(708966).Q, {
                                iconGroup: a(438322).k,
                                variantName: "small",
                                colorVariant: "secondary"
                            })
                        })]
                    }), (0, l.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "primary",
                        children: (0, l.jsx)(a(109939).sA, {
                            defaultMessage: "Explore more of Notion",
                            id: "sidebar.guestPopup.title"
                        })
                    }), (0, l.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: (0, l.jsx)(a(109939).sA, { ...n
                        })
                    }), o]
                })
            }
            let A = {
                display: "block",
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: "auto"
            };

            function T({
                scrollerStore: e
            }) {
                let {
                    canEditSpace: t,
                    currentUserRootStore: n,
                    sidebarSpaceId: r,
                    sidebarSpaceStore: d,
                    sidebarSpaceViewStore: c
                } = (0, a(682985).K8)(() => {
                    var e, t;
                    return {
                        canEditSpace: (null == (e = (0, a(328765).S)()) ? void 0 : e.canEdit()) ? ? !1,
                        sidebarSpaceId: null == (t = (0, a(328765).S)()) ? void 0 : t.id,
                        currentUserRootStore: a(728372).AppStoreCurrentUserRootStore.state,
                        sidebarSpaceStore: (0, a(328765).S)(),
                        sidebarSpaceViewStore: a(728372).AppStoreSidebarSpaceViewStore.state
                    }
                }, []), u = (0, a(682985).K8)(() => (0, a(494144).o)(c) && n && function({
                    userRootStore: e,
                    n: t
                }) {
                    return e.getSpaceViewStores().map(t => a(229903).V.createChildStore(t, (0, a(729052).i1)({
                        userId: e.id,
                        spaceId: t.getSpaceId()
                    })).isMember()).filter(Boolean).length === t
                }({
                    userRootStore: n,
                    n: 1
                }), [c, n]), {
                    previousSpaceId: p,
                    previousSpaceViewId: m
                } = (0, a(682985).K8)(() => ({
                    previousSpaceId: a(890597).o.getState().spaceId,
                    previousSpaceViewId: a(890597).o.getState().spaceViewId
                }), []), g = (0, a(533992).v3)(), f = (0, a(682985).O$)(a(420153).l), b = (0, a(682985).K8)(() => a(473556).default.state.ready, []), h = (0, i.useMemo)(() => (0, a(64273).nc)(), []), y = (0, a(682985).K8)(() => h.state.modalOpen, [h]);
                ! function(e) {
                    let {
                        spaceId: t
                    } = e, n = (0, a(533992).v3)(), o = n.currentUser.id, r = (0, a(217844)._)({
                        name: "ai_usage",
                        spaceId: t,
                        userId: o,
                        amount: 1
                    }), s = (0, a(682985).K8)(() => {
                        if (r && "available" === r.type && "cumulative" === r.limit.type && "unlimited" !== r.limit.total) return r.limit.current / r.limit.total
                    }, [r]);
                    (0, i.useEffect)(() => {
                        s && s >= a(319020)._ && (0, a(376730).H)(n, "ai_limit_nudge", {
                            skipDefaultRules: ["SeenExpirationRule", "MinimumAccountAgeRule"]
                        })
                    }, [n, s])
                }({
                    spaceId: r
                }),
                function(e) {
                    let {
                        spaceId: t
                    } = e, n = (0, a(533992).v3)(), o = (0, a(345776).T)(), r = (0, a(682985).K8)(() => {
                        if (!t || a(986939).A.isMobile) return !1;
                        let e = (0, a(840752).M)({
                            spaceId: t,
                            userId: o,
                            enforceIdsCheck: !1,
                            debugFrom: "useBlockLimitWarningTrigger"
                        });
                        return e && (0, a(856719).c)(e) && (0, a(66642).z)(n, e, t)
                    }, [n, t, o]);
                    (0, i.useEffect)(() => {
                        r && (0, a(376730).H)(n, "block_limit_nudge")
                    }, [n, r])
                }({
                    spaceId: r
                }), (0, i.useEffect)(() => {
                    (0, a(376730).H)(g, "invite_members_sidebar_callout", {
                        skipDefaultRules: ["MinimumAccountAgeRule", "SeenExpirationRule"]
                    }), (0, a(376730).H)(g, "collaboration_callout"), (0, a(376730).H)(g, "anyone_with_the_link_sidebar_callout", {
                        skipDefaultRules: ["MinimumAccountAgeRule"]
                    })
                }, [g]);
                let v = (0, a(226309)._3)({
                        spaceId: null == d ? void 0 : d.id
                    }),
                    _ = (0, a(387012).F)({
                        billingData: v,
                        permissionsInviteStore: h,
                        spaceStore: d
                    });
                return b && n && !f ? t ? (0, l.jsxs)("div", {
                    style: A,
                    ref: o,
                    children: [(0, l.jsx)(a(292239).A, {
                        type: "bottom",
                        scrollerStore: e
                    }), (null == _ ? void 0 : _.type) === "footer" ? _.component() : void 0, (0, l.jsx)(S, {}), y && d ? (0, l.jsx)(a(239697).H, {
                        targetStore: d,
                        spaceStore: d,
                        permissionsInviteStore: h,
                        origin: (0, l.jsx)(l.Fragment, {}),
                        membersOnly: !0,
                        shouldGrow: !1,
                        disabled: !1,
                        isSubscribed: !1,
                        upgradeButtonName: "space_permission_settings",
                        onInviteClick: a(163451).$D,
                        onInviteComplete: a(163451).c3,
                        analyticsFrom: "sidebar_footer_invite_button"
                    }) : null]
                }) : u && p && m ? (0, l.jsx)(s, {
                    previousSpaceId: p,
                    previousSpaceViewId: m
                }) : (0, l.jsx)(k, {
                    sidebarSpaceStore: d,
                    sidebarSpaceViewStore: c
                }) : (0, l.jsx)(l.Fragment, {})
            }
        },
        128817: (e, t, a) => {
            function i(e, t, i) {
                var n;
                let o = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o) return;
                let r = null == (n = o.getSettings()) ? void 0 : n.tutorials;
                i ? (0, a(862759).m)({
                    userSettingsStore: o,
                    transaction: i,
                    data: {
                        tutorials: { ...r,
                            [t]: (0, a(752153).i9)(o, t)
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                tutorials: { ...r,
                                    [t]: (0, a(752153).i9)(o, t)
                                }
                            }
                        })
                    },
                    userId: o.id
                })
            }

            function n(e, t) {
                var i;
                let n = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n) return;
                let o = null == (i = n.getSettings()) ? void 0 : i.tutorials;
                u({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                tutorials: { ...o,
                                    [t]: (0, a(752153).KD)(n, t)
                                }
                            }
                        })
                    },
                    userId: n.id
                })
            }

            function o(e, t) {
                var i;
                let n = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n) return;
                let o = null == (i = n.getSettings()) ? void 0 : i.tutorials;
                (null == o ? void 0 : o[t]) !== a(212169).YD && u({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                tutorials: { ...o,
                                    [t]: a(212169).YD
                                }
                            }
                        })
                    },
                    userId: n.id
                })
            }

            function r(e) {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                t && u({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: e,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                tutorials: {}
                            }
                        })
                    },
                    userId: t.id
                })
            }

            function s(e, t, i) {
                var n;
                let o = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o || (0, a(752153).x$)(o, t)) return;
                let r = (0, a(752153).gt)(o, t);
                a(212169).c$[t].steps.findIndex(e => e.id === r) >= a(212169).c$[t].steps.findIndex(e => e.id === i) || (0, a(862759).m)({
                    userSettingsStore: o,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (n = o.getSettings()) ? void 0 : n.tutorials,
                            [t]: i
                        }
                    }
                })
            }

            function l(e, t, i) {
                if ((0, a(752153).ll)(i)) return;
                let n = (0, a(752153).tb)(t, i);
                n && s(e, t, n)
            }

            function d(e) {
                var t;
                let {
                    environment: i,
                    tutorialId: n,
                    tutorialStepId: o,
                    transaction: r
                } = e, s = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let l = null == (t = s.getSettings()) ? void 0 : t.tutorials;
                r ? (0, a(862759).m)({
                    userSettingsStore: s,
                    transaction: r,
                    data: {
                        tutorials: { ...l,
                            [n]: o
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: i,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                tutorials: { ...l,
                                    [n]: o
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function c(e) {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                return !!t && (0, a(752153).x$)(t, e)
            }

            function u(e) {
                return (0, a(377796).createAndCommit)({ ...e,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            a.r(t), a.d(t, {
                checkIsTutorialDone: () => c,
                dismissTutorial: () => o,
                resetTutorials: () => r,
                tutorialAdvanceToStep: () => s,
                tutorialAdvanceToStepAfter: () => l,
                tutorialGoToNextStep: () => i,
                tutorialGoToPrevStep: () => n,
                tutorialGoToStep: () => d
            })
        },
        138105: (e, t, a) => {
            a.d(t, {
                W: () => r,
                U: () => l
            });
            var i = a(296540);
            let n = {
                control: (0, a(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.control.tooltip",
                        defaultMessage: "Find templates by Notion’s community"
                    }
                }),
                v1: (0, a(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v1.tooltip",
                        defaultMessage: "Discover tools and templates for your workspace"
                    }
                }),
                v2: (0, a(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v2.tooltip",
                        defaultMessage: "Discover what the community has built"
                    }
                })
            };
            var o = a(474848);

            function r(e) {
                let {
                    styles: t
                } = e, r = (0, a(533992).v3)(), l = (0, a(109939).tz)(), d = (0, i.useRef)(!1), c = (0, a(682985).K8)(() => {
                    let {
                        RouterStore: e
                    } = r;
                    return e.state.route.name
                }, [r]), u = (0, a(682985).K8)(() => {
                    let e = a(218744).default.getEligibleGroup({
                        experimentId: "adoption_marketplace_sidebar_surface_exploratory_copy",
                        defaultGroup: "control"
                    });
                    return "v1" === e || "v2" === e ? e : "control"
                }, []), p = (0, a(682985).K8)(() => a(218744).default.getEligibleGroup({
                    experimentId: "adoption_marketplace_sidebar_tooltip_discovery_copy",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                }), []), m = (0, a(892166).U)("marketplace_sidebar_option_click"), g = (0, i.useCallback)(() => {
                    var e;
                    let t = "control" === (e = p) || "v1" === e || "v2" === e ? e : "control";
                    return l.formatMessage(n[t].tooltip)
                }, [l, p]), f = (0, i.useCallback)(() => {
                    d.current || (d.current = !0, a(218744).default.manuallyLogExperimentExposure("adoption_marketplace_sidebar_tooltip_discovery_copy"))
                }, []);
                return (0, o.jsx)(a(51831).m, {
                    content: g,
                    originGap: 6,
                    placement: "right",
                    children: (e, i) => (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(s, {
                            isTooltipVisible: i,
                            onTooltipVisible: f
                        }), (0, o.jsx)(a(590422).Q, {
                            style: t.sidebarItemButtonStyle,
                            hoveredStyle: t.buttonHoveredStyle,
                            onClick: m,
                            ...e,
                            children: (0, o.jsx)(a(380559).u, {
                                left: (0, o.jsx)(a(16275).I, {
                                    icon: a(97010).templatesIcon,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                isBottomItem: !0,
                                style: "gallery" === c ? t.sidebarItemActiveStyle : {},
                                children: l.formatMessage(a(648880).L[u])
                            })
                        })]
                    })
                })
            }

            function s(e) {
                let {
                    isTooltipVisible: t,
                    onTooltipVisible: a
                } = e;
                return (0, i.useEffect)(() => {
                    t && a()
                }, [t, a]), null
            }
            let l = (0, a(109939).YK)({
                templatesMwnTooltip: {
                    defaultMessage: "Find templates by Notion’s community",
                    id: "sidebar.openTemplatePickerButton.tooltip.mwn"
                },
                title: {
                    defaultMessage: "Templates",
                    id: "sidebar.openTemplatePickerButton"
                },
                marketplaceTitle: {
                    defaultMessage: "Marketplace",
                    id: "sidebar.openMarketplaceButton"
                }
            })
        },
        139449: (e, t, a) => {
            a.d(t, {
                v: () => i
            });
            let i = a(546605).Store.createValue({
                open: !1
            }, {
                name: "TrialInfoModalStore"
            })
        },
        148777: (e, t, a) => {
            a.d(t, {
                g: () => o
            });
            var i = a(296540);
            async function n({
                environment: e
            }) {
                try {
                    let t = await e.api.callApi({
                        eventName: "getIsMailUser",
                        environment: e,
                        data: {}
                    });
                    if ("success" === t.type) return t.data.isMailUser
                } catch (e) {
                    return
                }
            }

            function o() {
                let [e, t] = (0, i.useState)((0, a(13565).HU)() ? "true" : "not-yet-known"), [o, r] = (0, i.useState)(!0), [s, l] = (0, i.useState)(!1), d = (0, a(533992).v3)(), c = (0, i.useRef)(!1), u = (0, i.useCallback)(() => {
                    r(!0)
                }, []), p = o && "true" !== e, m = (0, i.useCallback)(async () => {
                    if (!p || s) return;
                    l(!0);
                    let e = await n({
                        environment: d
                    });
                    l(!1), void 0 !== e && (t(e ? "true" : "false"), r(!1), e && (0, a(13565).L_)(), window.removeEventListener("blur", u), window.addEventListener("blur", u, {
                        once: !0
                    }))
                }, [p, s, d, u]);
                return (0, i.useEffect)(() => {
                    p && !c.current && (c.current = !0, (0, a(934927).$)(() => {
                        m()
                    }, 2e3))
                }, [m, p]), (0, i.useEffect)(() => () => {
                    window.removeEventListener("blur", u)
                }, [u]), {
                    isMailUser: e,
                    checkMailUser: m
                }
            }
        },
        149402: (e, t, a) => {
            a.d(t, {
                w: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                setCampaign(e) {
                    this.setState({ ...this.state,
                        campaign: e
                    })
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
                close() {
                    this.setState({
                        open: !1
                    })
                }
            }
            let o = new n
        },
        153262: (e, t, a) => {
            a.d(t, {
                Jg: () => n,
                bM: () => i,
                hG: () => o,
                ic: () => r
            });
            let i = "150ms ease";

            function n() {
                return {
                    borderRadius: 6
                }
            }
            let o = a(986939).A.isMobile ? {} : { ...n(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${i}`
            };

            function r() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        163451: (e, t, a) => {
            a.d(t, {
                $D: () => o,
                c3: () => r,
                qU: () => n
            }), a(296540);
            var i = a(474848);

            function n() {
                a(594311).CW({
                    type: "request"
                }), a(179701).vX({
                    type: "request",
                    from: "settings_modal"
                })
            }

            function o() {
                let e = (0, a(109939).YK)({
                    invitingMembers: {
                        id: "sidebarFooter.inviteMember.loadingMessage",
                        defaultMessage: "Updating…"
                    }
                });
                a(262058).m({
                    message: e.invitingMembers
                })
            }

            function r(e, t) {
                a(262058).V();
                let n = e ? (0, i.jsx)(a(109939).sA, {
                    id: "sidebarFooter.inviteMember.successToastMessage",
                    defaultMessage: "Successfully sent"
                }) : (0, i.jsx)(a(109939).sA, {
                    id: "sidebarFooter.inviteMember.failureToastMessage",
                    defaultMessage: "Failed to send invites"
                });
                a(436555).D6({
                    label: n
                })
            }
        },
        164177: (e, t, a) => {
            a.d(t, {
                j: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = new n
        },
        166863: (e, t, a) => {
            a.d(t, {
                P: () => n
            });
            let i = (0, a(109939).YK)({
                    languageTitle: {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    },
                    languageDescription: {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    },
                    numberFormatTitle: {
                        id: "languageRegionSettings.numberFormat.label",
                        defaultMessage: "Number format"
                    },
                    numberFormatDescription: {
                        id: "languageRegionSettings.numberFormat.description",
                        defaultMessage: "Choose how numbers and currencies are formatted. Default uses your language setting."
                    },
                    spellcheckerTitle: {
                        id: "languageRegionSettings.spellchecker.label",
                        defaultMessage: "Spellchecker languages"
                    },
                    spellcheckerDescription: {
                        id: "languageSettings.spellcheckerSwitcher.subtitle",
                        defaultMessage: "Change the languages used by the spellchecker."
                    },
                    textDirectionTitle: {
                        id: "textDirectionControlsSetting.title",
                        defaultMessage: "Always show text direction controls"
                    },
                    textDirectionDescription: {
                        id: "textDirectionControlsSetting.caption",
                        defaultMessage: "Show the option to change text direction (left to right or right to left) in the editor, regardless of what language you’re using"
                    },
                    startWeekOnMondayTitle: {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    },
                    startWeekOnMondayDescription: {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will affect the way your calendars appear in Notion"
                    },
                    dateFormatTitle: {
                        id: "dateMentionFormatSettings.title",
                        defaultMessage: "Date format"
                    },
                    dateFormatDescription: {
                        id: "dateMentionFormatSettings.caption",
                        defaultMessage: "Set the default format for new @date mentions"
                    },
                    autoTimezoneTitle: {
                        id: "dateAndTimeSettings.autoTimeZone.title",
                        defaultMessage: "Set time zone automatically using your location"
                    },
                    autoTimezoneDescription: {
                        id: "dateAndTimeSettings.autoTimeZone.caption",
                        defaultMessage: "Reminders, notifications, and emails will be delivered to you based on your time zone"
                    },
                    timezoneTitle: {
                        id: "dateAndTimeSettings.timeZone.title",
                        defaultMessage: "Time zone"
                    },
                    timezoneDescription: {
                        id: "dateAndTimeSettings.timeZone.caption",
                        defaultMessage: "Choose your time zone"
                    }
                }),
                n = {
                    language: {
                        id: "languageAndRegionSettingsLanguage",
                        title: i.languageTitle,
                        description: i.languageDescription
                    },
                    numberFormat: {
                        id: "languageAndRegionSettingsNumberFormat",
                        title: i.numberFormatTitle,
                        description: i.numberFormatDescription
                    },
                    spellchecker: {
                        id: "languageAndRegionSettingsSpellchecker",
                        title: i.spellcheckerTitle,
                        description: i.spellcheckerDescription
                    },
                    textDirection: {
                        id: "languageAndRegionSettingsTextDirection",
                        title: i.textDirectionTitle,
                        description: i.textDirectionDescription
                    },
                    startWeekOnMonday: {
                        id: "languageAndRegionSettingsStartWeekOnMonday",
                        title: i.startWeekOnMondayTitle,
                        description: i.startWeekOnMondayDescription
                    },
                    dateFormat: {
                        id: "languageAndRegionSettingsDateFormat",
                        title: i.dateFormatTitle,
                        description: i.dateFormatDescription
                    },
                    autoTimezone: {
                        id: "languageAndRegionSettingsAutoTimezone",
                        title: i.autoTimezoneTitle,
                        description: i.autoTimezoneDescription
                    },
                    timezone: {
                        id: "languageAndRegionSettingsTimezone",
                        title: i.timezoneTitle,
                        description: i.timezoneDescription
                    }
                }
        },
        168814: (e, t, a) => {
            a.d(t, {
                X: () => i
            });

            function i() {
                return (0, a(682985).K8)(() => a(329464).A.state.initialRenderCompleted, [])
            }
        },
        174338: (e, t, a) => {
            a.d(t, {
                wc: () => y,
                at: () => _,
                YD: () => s,
                AJ: () => l,
                eu: () => v,
                PM: () => o,
                xg: () => u,
                s3: () => r,
                Sm: () => c,
                rI: () => p,
                Rh: () => d,
                ho: () => m
            });
            let i = new(a(815048)).O2("recoveryActions", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(18965), a.e(98629), a.e(96527), a.e(30085), a.e(90109), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(26997), a.e(73259), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(39726), a.e(31243), a.e(42534), a.e(86662), a.e(14886), a.e(39225), a.e(6212), a.e(2626), a.e(64453), a.e(4779), a.e(21969), a.e(29663), a.e(28482), a.e(76361), a.e(14369), a.e(74145), a.e(48860), a.e(75136), a.e(98175), a.e(18682), a.e(79349), a.e(58360), a.e(33162), a.e(82538), a.e(63793), a.e(18881), a.e(62731), a.e(41049), a.e(60262), a.e(72805), a.e(18416), a.e(2276), a.e(30532), a.e(73588), a.e(3723), a.e(91100), a.e(78311), a.e(4287), a.e(9817), a.e(65594), a.e(47302), a.e(91636), a.e(36441), a.e(64049), a.e(75189), a.e(28372), a.e(28663), a.e(47281), a.e(29087), a.e(46350), a.e(75234), a.e(67281), a.e(66200), a.e(52064), a.e(69626), a.e(82816), a.e(2832), a.e(48095), a.e(67098), a.e(35118), a.e(63611), a.e(94849), a.e(75484), a.e(98821), a.e(97711), a.e(89076), a.e(86998), a.e(58889), a.e(22920), a.e(9914), a.e(78257), a.e(84382), a.e(51386), a.e(95150), a.e(10471), a.e(87087), a.e(98419), a.e(11719), a.e(13592), a.e(6743), a.e(5234), a.e(85376), a.e(67252), a.e(42709), a.e(44903), a.e(92181), a.e(7251), a.e(72143), a.e(67612), a.e(53478), a.e(75559), a.e(86793), a.e(34), a.e(54253), a.e(26665), a.e(67984), a.e(605), a.e(75681)]).then(a.bind(a, 257592)));
            async function n(e) {
                let {
                    openRecovery: t
                } = await i.load();
                await t(e.userId, e.currentPageId)
            }

            function o(e, t, i) {
                g(e, "help_feedback", t), a(963430).S({
                    environment: e,
                    from: i
                }), h()
            }

            function r(e, t) {
                g(e, "sales_chat", t), (0, a(613065).lK)({
                    openedFrom: "help_menu"
                }), h()
            }

            function s(e, t) {
                g(e, "guides", t), (0, a(624621).L)({
                    environment: e,
                    url: (0, a(442564).x)("guides.guides")
                }), f(e)
            }

            function l(e, t) {
                g(e, "keyboard_shortcuts", t), f(e), a(499267).j({
                    store: a(432428).V,
                    toggleSource: "help_menu"
                })
            }

            function d(e, t) {
                g(e, "twitter", t), (0, a(624621).L)({
                    environment: e,
                    url: a(168962).JZ.notionTwitter
                }), f(e)
            }

            function c(e, t) {
                g(e, "status", t), (0, a(624621).L)({
                    environment: e,
                    url: a(168962).JZ.statusPage
                }), f(e)
            }

            function u(e, t, i) {
                let n = (0, a(752120).Nw)(i || a(168962).JZ.releases);
                (0, a(624621).L)({
                    environment: e,
                    url: n
                }), g(e, "whats_new", t), f(e)
            }

            function p(e, t) {
                (0, a(624621).L)({
                    environment: e,
                    url: a(168962).JZ.termsAndPrivacy
                }), g(e, "terms", t), f(e)
            }

            function m(e) {
                let {
                    environment: t,
                    changelogFooterUpdatesEnabled: i,
                    releaseDate: n
                } = e;
                if (i && n && (0, a(37967).X)({
                        environment: t,
                        releaseDate: n,
                        type: "latest"
                    }), (0, a(907620).T)("supportsDecentralizedWebViewNavigation")) {
                    h(), (0, a(381057).a)(t);
                    return
                }
                b(t) ? (0, a(922425).navigateToHomeTab)(t, h) : h()
            }

            function g(e, t, i) {
                a(803854).wF(e, {
                    item: t,
                    from: i
                })
            }

            function f(e) {
                b(e) || h()
            }

            function b(e) {
                let {
                    mobileNative: t
                } = e;
                return (null == t ? void 0 : t.supportsNativeHomeOnPhone()) || !1
            }

            function h() {
                a(51599).r.setState({ ...a(51599).r.state,
                    open: !1,
                    source: void 0
                })
            }
            async function y(e) {
                var t;
                let i = (0, a(965142).s)(),
                    n = null == (t = (0, a(427846)._)(e)) ? void 0 : t.id;
                if (!i || !n) return;
                let o = (0, a(6146).getOPFSPageCacheInstance)();
                if (o) try {
                    await o.delete(n, i), window.location.reload()
                } catch (e) {}
            }

            function v(e) {
                var t;
                let i = null == (t = (0, a(427846)._)(e)) ? void 0 : t.id;
                if (!i) return;
                let o = e.RouterStore.state.route;
                n({
                    userId: i,
                    currentPageId: "page" === o.name ? o.blockId : void 0
                }), h()
            }

            function _(e) {
                let {
                    environment: t,
                    from: i
                } = e;
                g(t, "consultants", i);
                let n = (0, a(269929).q)({
                    environment: t,
                    utmSource: "help_menu",
                    utmCampaign: "help_menu_setup_sessions_item"
                });
                (0, a(624621).L)({
                    environment: t,
                    url: n
                }), h()
            }
        },
        189498: (e, t, a) => {
            a.d(t, {
                L: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    teamStore: i,
                    shouldScroll: n
                } = e;
                n && (0, a(639323).M)({
                    teamStore: i,
                    environment: t
                });
                let o = (0, a(709633).O)({
                    teamStore: i
                });
                o && !(o.length < 1) && ((0, a(545586).navigateToBlock)({
                    environment: t,
                    store: o[0],
                    pageVisitSource: a(254656).y8.JoinTeam
                }), a(649807)._L(t, {
                    store: i
                }))
            }
        },
        196441: (e, t, a) => {
            a.d(t, {
                n$: () => n,
                rx: () => i,
                yA: () => o
            });
            let i = 1;

            function n(e) {
                switch (a(381453).qE(a(381453).LI(e, 1), .5, 4.9)) {
                    case .5:
                        return 155;
                    case .6:
                        return 128;
                    case .7:
                        return 108;
                    case .8:
                        return 94;
                    case .9:
                        return 83;
                    default:
                        return 75
                }
            }

            function o(e) {
                let t = a(381453).qE(a(381453).LI(e, 1), .5, 4.9);
                switch (t) {
                    case .5:
                        return 273;
                    case .6:
                        return 228;
                    case .7:
                        return 195;
                    case .8:
                        return 171;
                    case .9:
                        return 151;
                    case 1:
                        return 136;
                    case 1.1:
                        return 123;
                    case 1.2:
                        return 113;
                    case 1.3:
                        return 105;
                    case 1.4:
                        return 97;
                    case 1.5:
                        return 91;
                    case 1.6:
                        return 85;
                    default:
                        return Math.max(85 - Math.floor((t - 1.6) * 50), 0)
                }
            }
        },
        208326: (e, t, a) => {
            a.d(t, {
                o: () => o
            });
            var i = a(296540),
                n = a(474848);
            let o = (0, i.forwardRef)(function({
                icon: e,
                label: t,
                tooltipDisabled: i,
                onClick: o,
                onMouseEnter: r
            }, s) {
                let l = i => (0, n.jsx)(a(374533).A, { ...i,
                    size: "md",
                    icon: e,
                    ariaLabel: t,
                    colorVariant: "secondary",
                    onClick: o,
                    ref: s,
                    onMouseEnter: e => {
                        var t;
                        null == r || r(e), null == i || null == (t = i.onMouseEnter) || t.call(i, e)
                    }
                });
                return i ? l() : (0, n.jsx)(a(51831).m, {
                    content: () => t,
                    placement: "top",
                    children: e => l(e)
                })
            })
        },
        209507: (e, t, a) => {
            a.d(t, {
                f: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    type: i = "any"
                } = e, n = (0, a(904434).R$)(t);
                if (!n) return null;
                let o = n.getSettings();
                if (!o) return null;
                switch (i) {
                    case "any":
                        return o.latest_release_seen;
                    case "special":
                        return o.special_release_seen;
                    default:
                        (0, a(722371).HB)(i)
                }
            }
        },
        209590: (e, t, a) => {
            a.d(t, {
                Z: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                o = {
                    position: "relative"
                };

            function r(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: r,
                    iconColorVariant: s = "secondary",
                    title: l,
                    variantName: d = "default"
                } = e;
                return t || l ? (0, i.jsxs)(a(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...o
                    },
                    children: [t ? (0, i.jsx)(a(708966).Q, {
                        iconGroup: t,
                        colorPalette: r,
                        colorVariant: s,
                        variantName: d,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, l ? (0, i.jsx)(a(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: n,
                        children: l
                    }) : null]
                }) : null
            }
        },
        210882: (e, t, a) => {
            a.d(t, {
                m: () => n
            }), a(296540);
            var i = a(474848);

            function n({
                color: e,
                size: t,
                style: o
            }) {
                let r = (0, a(109939).tz)(),
                    s = (0, a(960253).I)(() => ({
                        dot: {
                            height: t || 8,
                            width: t || 8,
                            background: e || a(632079).Tj.blue.icon.accentPrimary,
                            flexShrink: 0,
                            borderRadius: "100%",
                            pointerEvents: "none",
                            ...o
                        }
                    }), [t, e, o]);
                return (0, i.jsx)("div", {
                    role: "img",
                    "aria-label": r.formatMessage({
                        id: "statusDot.ariaLabel",
                        defaultMessage: "New"
                    }),
                    style: s.dot
                })
            }
        },
        212169: (e, t, a) => {
            a.d(t, {
                Ud: () => r,
                YD: () => o,
                c$: () => i,
                q_: () => n
            });
            let i = {
                    "sprints-onboarding": {
                        steps: [{
                            id: "current-sprint-view-tooltip"
                        }, {
                            id: "sprint-task-tooltip"
                        }, {
                            id: "complete-sprint-button-tooltip"
                        }]
                    },
                    "enhanced-qna-onboarding": {
                        steps: [{
                            id: "find-in-tooltip"
                        }, {
                            id: "mention-tooltip"
                        }]
                    },
                    "jira-sync-onboarding": {
                        steps: [{
                            id: "all-projects-tooltip"
                        }, {
                            id: "all-issues-tooltip"
                        }, {
                            id: "database-views-and-filters-tooltip"
                        }, {
                            id: "settings-to-setup-projects-and-issues"
                        }]
                    },
                    "project-management-import-onboarding": {
                        steps: [{
                            id: "your-teamspace-tooltip"
                        }, {
                            id: "all-projects-tooltip"
                        }, {
                            id: "navigate-to-project-tasks-tooltip"
                        }, {
                            id: "project-customization-tooltip"
                        }, {
                            id: "related-tasks-database-views-tooltip"
                        }]
                    },
                    "ai-comment-onboarding": {
                        steps: [{
                            id: "ai-comment-onboarding-tooltip"
                        }]
                    },
                    database_onboarding: {
                        steps: [{
                            id: "database_onboarding_status_property_tooltip"
                        }, {
                            id: "database_onboarding_add_property_tooltip"
                        }, {
                            id: "database_onboarding_database_page_tooltip"
                        }, {
                            id: "database_onboarding_board_view_tooltip"
                        }]
                    },
                    "new-user-home-workspace-tour": {
                        steps: [{
                            id: "teamspaces"
                        }]
                    }
                },
                n = "completed",
                o = "dismissed";

            function r(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        213039: (e, t, a) => {
            a.d(t, {
                M: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                o = (0, a(104509).wt)("sliders", n, "default")
        },
        226512: (e, t, a) => {
            a.d(t, {
                R: () => o
            });
            var i = a(296540),
                n = a(474848);

            function o(e) {
                var t, o;
                let s, l = (0, a(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: p,
                        showBackground: m = !0
                    } = e,
                    g = (t = u, o = m, s = (0, a(781889).o)(), (0, a(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: o ? a(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: a(104509).Ev.lg,
                            width: a(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + s,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: o ? a(632079).Tj.buttonPressedBackground : a(632079).Tj.buttonHoveredBackground
                        }
                    }), [o, t, s])),
                    f = (0, i.useContext)(a(19187).e),
                    b = function(e) {
                        let {
                            onClick: t,
                            onDismiss: a
                        } = e, n = (0, i.useCallback)(e => {
                            null == t || t(e), null == a || a()
                        }, [t, a]);
                        return t || a ? n : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? f
                    });
                return b ? (0, n.jsx)(a(374533).A, {
                    ariaLabel: l.formatMessage(r.dismissModalAriaLabel),
                    icon: a(766970).xMarkFillIcon,
                    onClick: b,
                    style: g.button,
                    hoveredStyle: { ...g.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let r = (0, a(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        226904: (e, t, a) => {
            a.d(t, {
                $: () => n
            });
            var i = a(296540);

            function n(e) {
                let {
                    environment: t,
                    releaseDate: n,
                    enabled: o = !0
                } = e, r = function(e) {
                    let {
                        releaseDate: t,
                        lastSpecialReleaseSeen: i,
                        enabled: n
                    } = e;
                    if (!n || !t || null === i) return "no-render";
                    if (!i || t && i.releaseDate < t) return "render-new";
                    if (i.releaseDate === t) {
                        let e = Date.now() - i.timestamp,
                            t = i.viewed;
                        switch (t) {
                            case "entrypoint":
                                if (e < 6048e5) return "render-new";
                                break;
                            case "content":
                                if (e < 864e5) return "render-seen";
                                break;
                            default:
                                (0, a(722371).HB)(t)
                        }
                    }
                    return "no-render"
                }({
                    releaseDate: n,
                    lastSpecialReleaseSeen: (0, a(682985).K8)(() => (0, a(209507).f)({
                        environment: t,
                        type: "special"
                    }), [t]),
                    enabled: o
                });
                return (0, i.useEffect)(() => {
                    "render-new" === r && n && (0, a(37967).X)({
                        environment: t,
                        releaseDate: n,
                        type: "special",
                        viewed: "entrypoint"
                    })
                }, [t, r, n]), r ? ? "no-render"
            }
        },
        239697: (e, t, a) => {
            a.d(t, {
                H: () => n
            });
            let i = new(a(815048)).O2("permissionsInviteWithModal", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(18965), a.e(98629), a.e(96527), a.e(30085), a.e(90109), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(26997), a.e(73259), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(39726), a.e(31243), a.e(42534), a.e(86662), a.e(14886), a.e(39225), a.e(6212), a.e(2626), a.e(64453), a.e(4779), a.e(21969), a.e(29663), a.e(28482), a.e(76361), a.e(14369), a.e(74145), a.e(48860), a.e(75136), a.e(98175), a.e(18682), a.e(79349), a.e(58360), a.e(33162), a.e(82538), a.e(63793), a.e(18881), a.e(62731), a.e(41049), a.e(60262), a.e(72805), a.e(18416), a.e(2276), a.e(30532), a.e(73588), a.e(3723), a.e(91100), a.e(78311), a.e(4287), a.e(9817), a.e(65594), a.e(47302), a.e(91636), a.e(36441), a.e(64049), a.e(75189), a.e(28372), a.e(28663), a.e(47281), a.e(29087), a.e(46350), a.e(75234), a.e(67281), a.e(66200), a.e(52064), a.e(69626), a.e(82816), a.e(2832), a.e(48095), a.e(67098), a.e(35118), a.e(63611), a.e(94849), a.e(75484), a.e(98821), a.e(97711), a.e(89076), a.e(86998), a.e(58889), a.e(22920), a.e(9914), a.e(78257), a.e(84382), a.e(51386), a.e(95150), a.e(10471), a.e(87087), a.e(98419), a.e(11719), a.e(13592), a.e(6743), a.e(5234), a.e(85376), a.e(67252), a.e(42709), a.e(44903), a.e(92181), a.e(7251), a.e(72143), a.e(67612), a.e(53478), a.e(75559), a.e(86793), a.e(34), a.e(54253), a.e(26665), a.e(67984), a.e(605), a.e(75681)]).then(a.bind(a, 949290))),
                n = (0, a(815048)._h)(i, e => e.PermissionsInviteWithModal)
        },
        243326: (e, t, a) => {
            a.d(t, {
                k: () => n
            });
            var i = a(296540);

            function n({
                requests: e,
                feature: t,
                userId: a
            }) {
                let [o, r] = (0, i.useState)("loading");
                return (0, i.useEffect)(() => {
                    t && r(function(e, t, a) {
                        var i;
                        if (!t || !a) return "unrequested";
                        let n = null == (i = t[e]) ? void 0 : i.find(e => e.created_by_id === a);
                        return n && n.request_status || "unrequested"
                    }(t, e, a))
                }, [e, t, a]), [o, r]
            }
            a(898992), a(672577)
        },
        245337: (e, t, a) => {
            a.d(t, {
                a: () => n
            });
            let i = new(a(815048)).O2("SpecialReleaseAppSwitcherItem", async () => await a.e(38096).then(a.bind(a, 767998))),
                n = (0, a(815048)._h)(i, e => e.SpecialReleaseAppSwitcherItem)
        },
        249583: (e, t, a) => {
            a.d(t, {
                Y: () => i
            });

            function i(e) {
                if (!e || (0, a(916804).I)(e)) return {
                    canShowInviteMembers: !1,
                    canRequestMembers: !1
                };
                let t = !e.canEditMembership() && !e.getDisableMembershipRequests() && (0, a(724175).x)();
                return {
                    canShowInviteMembers: e.canEditMembership() || t,
                    canRequestMembers: t
                }
            }
        },
        252941: (e, t, a) => {
            a.d(t, {
                M: () => r,
                W: () => n
            });
            let i = new(a(815048)).O2("teamspaceDirectory", () => Promise.all([a.e(75134), a.e(33503), a.e(60262), a.e(10188), a.e(1843), a.e(49587)]).then(a.bind(a, 41947))),
                n = (0, a(815048)._h)(i, e => e.TeamspaceDirectoryView),
                o = new(a(815048)).O2("TeamspaceDirectoryOpenInSidePeekButton", async () => await Promise.all([a.e(75134), a.e(33503), a.e(60262), a.e(10188), a.e(1843), a.e(49587)]).then(a.bind(a, 707510))),
                r = (0, a(815048)._h)(o, e => e.TeamspaceDirectoryOpenInSidePeekButton)
        },
        253092: (e, t, a) => {
            a.r(t), a.d(t, {
                alarmIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.91 0.78 16.18 16.85",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M5.791 1.886a.625.625 0 1 0-.801-.96L2.138 3.31a.625.625 0 1 0 .802.96zm4.834 3.839a.625.625 0 1 0-1.25 0v3.65H6.4a.625.625 0 0 0 0 1.25H10c.345 0 .625-.28.625-.625z"
                        }), (0, i.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0M14.13 1.006a.625.625 0 0 0 .079.88l2.851 2.383a.625.625 0 1 0 .802-.96L15.01.927a.625.625 0 0 0-.88.079"
                        })]
                    })
                },
                o = (0, a(104509).wt)("alarm", n, "default")
        },
        254266: (e, t, a) => {
            a.d(t, {
                j: () => s,
                C: () => l
            }), a(16280), a(944114), a(964979);
            var i = () => a(906745),
                n = a(296540);
            let o = {
                date: 0,
                usage: 0,
                monthly: 0,
                annual: 0,
                onDemand: 0
            };
            var r = () => a(695216);

            function s(e) {
                let {
                    usageData: t,
                    servicePeriodStartMs: a,
                    servicePeriodEndMs: n
                } = e, s = Math.min(i().DateTime.utc().startOf("day").toMillis(), i().DateTime.fromMillis(n).toUTC().startOf("day").toMillis()), l = i().DateTime.fromMillis(a).toUTC().startOf("day").toMillis(), d = new Map;
                for (let e of t) d.set(e.date, e);
                let c = [],
                    u = o;
                for (let e = l; e < s; e += r().nD) {
                    let t = d.get(e);
                    t ? (c.push(t), u = t) : c.push({ ...u,
                        date: e
                    })
                }
                return c
            }

            function l(e, t, o) {
                let r = (0, a(533992).v3)(),
                    [l, d] = (0, n.useState)(void 0),
                    [c, u] = (0, n.useState)(!0),
                    p = (0, n.useRef)(null),
                    m = (0, n.useCallback)(async () => {
                        var n, l;
                        if (!e || !t || !o) {
                            null == (l = p.current) || l.abort(), p.current = null, u(!1);
                            return
                        }
                        null == (n = p.current) || n.abort(), p.current = null, u(!0);
                        try {
                            p.current = new AbortController;
                            let i = await r.api.callCellCompatibleApi({
                                eventName: "getAIDailyCreditUsage",
                                environment: r,
                                data: {
                                    spaceId: e,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: o,
                                    forceMetronomeDataPath: (0, a(717274).Sc)()
                                },
                                cellNavigation: {
                                    spaceId: e
                                },
                                abortSignal: p.current.signal
                            });
                            if ("failed" === i.type) return void u(!1);
                            if (1 === i.data.version) d({ ...i.data,
                                usageData: s({
                                    usageData: i.data.usageData,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: o
                                })
                            });
                            else if (2 === i.data.version) d({ ...i.data,
                                dailyBreakdowns: s({
                                    usageData: i.data.dailyBreakdowns,
                                    servicePeriodStartMs: t,
                                    servicePeriodEndMs: o
                                })
                            });
                            else throw Error("Invalid response version");
                            u(!1)
                        } catch (n) {
                            if (n instanceof DOMException && "AbortError" === n.name) return;
                            a(773352).log({
                                level: "error",
                                from: "useAIDailyUsage",
                                type: "fetchDailyUsageFailed",
                                data: {
                                    miscDataToConvertToString: {
                                        error: n,
                                        spaceId: e,
                                        servicePeriodStart: i().DateTime.fromMillis(t).toISO(),
                                        servicePeriodEnd: i().DateTime.fromMillis(o).toISO(),
                                        userId: r.currentUser.id
                                    }
                                }
                            }), u(!1)
                        }
                    }, [r, e, t, o]);
                return (0, n.useEffect)(() => (m(), () => {
                    var e;
                    null == (e = p.current) || e.abort()
                }), [m]), {
                    data: l,
                    isLoading: c
                }
            }
        },
        269298: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                lockFillIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 12.05 15.66",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6 5.95a4 4 0 1 1 8 0v1.433a2.426 2.426 0 0 1 2.025 2.392v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4c0-1.203.876-2.201 2.025-2.392zm6.75 1.4v-1.4a2.75 2.75 0 1 0-5.5 0v1.4zm-2.2 5.458a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 0 0 1.1 0z"
                    })
                },
                n = (0, a(104509).wt)("lockFill", i, "fill")
        },
        269929: (e, t, a) => {
            a.d(t, {
                q: () => i
            }), a(814603), a(147566), a(198721);

            function i(e) {
                let {
                    environment: t,
                    utmSource: i,
                    utmCampaign: n
                } = e, o = (0, a(427846)._)(t), r = (null == o ? void 0 : o.id) ? ? "", s = (null == o ? void 0 : o.getEmail()) ? ? "", l = (null == o ? void 0 : o.getName()) ? ? "", d = l, c = "", u = l.indexOf(" "); - 1 !== u && (d = l.slice(0, u), c = l.slice(u + 1));
                let p = new URLSearchParams;
                return p.set("User-ID", r), p.set("userId", r), p.set("email", s), p.set("firstName", d), p.set("lastName", c), p.set("utm_source", i), p.set("utm_campaign", n), `${a(168962).JZ.setupSessions}?${p.toString()}`
            }
        },
        280996: (e, t, a) => {
            a.d(t, {
                b: () => o,
                T: () => r()
            }), a(581454);
            var i = a(296540),
                n = a(474848);
            let o = i.memo(function(e) {
                let {
                    store: t = a(2009).w
                } = e, o = (0, a(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, n.jsx)(n.Fragment, {
                    children: o.map(e => {
                        let {
                            id: t,
                            internalRenderModal: a,
                            isOpen: o
                        } = e, r = a(o);
                        return (0, n.jsx)(i.Fragment, {
                            children: r
                        }, t)
                    })
                })
            });
            var r = () => a(796123)
        },
        292239: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var i = a(296540),
                n = a(474848);

            function o({
                scrollerStore: e,
                type: t,
                dividerColor: r,
                errorMargin: s = 4
            }) {
                let l = (0, a(682985).K8)(() => e.state.elementRef, [e]),
                    d = (0, a(239160).Xg)(l),
                    c = (0, a(239160).CR)(l),
                    u = (0, a(239160).sj)(l),
                    p = (0, a(239160).yE)(l),
                    m = (0, a(239160).o7)(l),
                    g = (0, a(239160).HJ)(l),
                    f = (0, i.useMemo)(() => {
                        if (!e) return !1;
                        switch (t) {
                            case "top":
                                return Math.round(p) > s;
                            case "bottom":
                                return Math.abs(Math.round(p) - (c - m)) > s;
                            case "left":
                                return Math.round(u) > s;
                            case "right":
                                return Math.abs(Math.round(u) - (d - g)) > s
                        }
                    }, [e, t, s, d, c, u, p, m, g]),
                    b = "left" === t || "right" === t,
                    h = (0, a(960253).I)(() => ({
                        divider: {
                            flexShrink: 0,
                            boxShadow: f ? b ? `1px 0 0 ${r??a(632079).Tj.border.secondaryTranslucent}` : `0 1px 0 ${r??a(632079).Tj.border.secondaryTranslucent}` : "0 0 0 transparent",
                            transition: "box-shadow 300ms",
                            ...b ? {
                                width: 1,
                                height: "100%",
                                marginInlineStart: -1
                            } : {
                                height: 1,
                                width: "100%",
                                marginTop: -1
                            },
                            zIndex: 99
                        }
                    }), [b, f, r]);
                return (0, n.jsx)("div", {
                    style: h.divider
                })
            }
        },
        300846: (e, t, a) => {
            function i() {
                let e = a(218744).default.getConfigKey("special_releases_config", "specialReleases");
                if (!e || 0 === Object.keys(e).length) return;
                let [t, i] = Object.entries(e).sort(([, e], [, t]) => t.localeCompare(e))[0];
                return {
                    name: t,
                    date: i
                }
            }

            function n() {
                return (0, a(682985).K8)(() => i(), [])
            }

            function o() {
                return (0, a(682985).K8)(() => {
                    var e;
                    return null == (e = i()) ? void 0 : e.date
                }, [])
            }
            a.d(t, {
                V: () => n,
                p: () => o
            })
        },
        303322: (e, t, a) => {
            a.d(t, {
                y: () => n
            });
            let i = (0, a(109939).YK)({
                favorites: {
                    id: "sidebar.favoritesSection.header",
                    defaultMessage: "Favorites"
                },
                private: {
                    id: "sidebar.privateSection.header",
                    defaultMessage: "Private"
                },
                shared: {
                    id: "sidebar.sharedSection.header",
                    defaultMessage: "Shared"
                },
                recents: {
                    id: "sidebar.recentsSection.header",
                    defaultMessage: "Recents"
                },
                myMeetings: {
                    id: "sidebar.meetingsSection.header",
                    defaultMessage: "AI meeting notes"
                },
                teamspaces: {
                    id: "sidebarOutliner.teamsSection.teamsLabel",
                    defaultMessage: "Teamspaces"
                },
                agents: {
                    id: "sidebar.agentsSection.header",
                    defaultMessage: "Agents"
                },
                meetings_today: {
                    id: "sidebar.slipperySlope.meetingsToday.heading",
                    defaultMessage: "Upcoming events"
                }
            });

            function n(e, t) {
                return t.formatMessage(i[e])
            }
        },
        312688: (e, t, a) => {
            a.d(t, {
                l: () => o
            });
            var i = a(296540),
                n = a(474848);

            function o(e) {
                let {
                    messageKey: t,
                    button: o
                } = e, r = (0, a(533992).v3)();
                (0, i.useEffect)(() => {
                    a(357709).DL(r, {
                        callout_key: t,
                        placement_key: "Tooltip"
                    })
                }, [r, t]);
                let s = (0, i.useCallback)(e => {
                        a(357709).Y5(r, {
                            callout_key: t,
                            click_type: "primary_cta",
                            placement_key: "Tooltip"
                        }), e && e()
                    }, [r, t]),
                    l = (0, i.useCallback)(() => {
                        a(357709).Sq(r, {
                            callout_key: t,
                            dismiss_type: "announcement_card_dismiss",
                            placement_key: "Tooltip"
                        }), (0, a(59579).a)(r, t)
                    }, [r, t]);
                return (0, n.jsx)(a(725571).S, { ...e,
                    button: { ...o,
                        onClick: () => {
                            s(o.onClick)
                        }
                    },
                    onDismiss: l
                })
            }
        },
        316376: (e, t, a) => {
            a.r(t), a.d(t, {
                createDatabaseFromTodoBlocks: () => o,
                getConsecutiveTodoBlocks: () => s,
                getPreviousTodoBlocks: () => r,
                maybeTriggerDatabasePromoNudgeOnCreate: () => n
            }), a(944114), a(898992), a(803949), a(581454);
            var i = () => a(955630);
            async function n(e) {
                var t;
                let {
                    blockStore: i,
                    environment: n
                } = e, d = i.getParentBlockStore();
                if (!d || r(d, i, 3).length < 3) return;
                let c = (0, a(904434).R$)(n),
                    u = null == c || null == (t = c.getSettings()) || null == (t = t.adoption_entry_points) ? void 0 : t.database_nudge_on_create_todo;
                if (u && (u.length >= 3 || Date.now() - u[u.length - 1] < a(695216).nD)) return;
                if (!await (0, a(804677).E)(n, "database_nudge_on_create_todo") || !a(218744).default.checkGate({
                        gateName: "adoption_database_newbie_lifecycle_campaign"
                    })) return;
                let p = s(d, i);
                if (d.table !== a(832375).evP) return;
                let m = {
                        todoBlocks: p.map(e => {
                            let t = e.getBlockTitleStore().getValue() || [],
                                a = e.isChecked();
                            return {
                                id: e.id,
                                titleValue: t,
                                isChecked: a
                            }
                        }),
                        currentBlockId: i.id,
                        parentBlock: {
                            id: d.id,
                            table: d.table,
                            spaceId: d.getSpaceId()
                        }
                    },
                    g = a(962299).A.getIntl();
                (0, a(408441).trackDatabaseEntrypointCta)({
                    environment: e.environment,
                    feature: "create_database",
                    action: "view",
                    from: "database_nudge_on_create_todo"
                }), (0, a(462391).P$)("database_nudge_on_create_todo") ? ((0, a(531175).i)({
                    environment: n,
                    messageKey: "database_nudge_on_create_todo"
                }), a(819652).Iz({
                    message: g.formatMessage(l.databasePromoDescription),
                    presentationType: "persistent",
                    id: "database-promo-nudge",
                    title: a(962299).A.formatMessage(l.databasePromoTitle),
                    onUserDismiss: () => {
                        a(357709).Sq(n, {
                            callout_key: "database_nudge_on_create_todo",
                            placement_key: "Toast",
                            dismiss_type: "toast_dismiss"
                        }), (0, a(408441).trackDatabaseEntrypointCta)({
                            environment: e.environment,
                            feature: "create_database",
                            action: "dismiss",
                            from: "database_nudge_on_create_todo"
                        })
                    },
                    actions: {
                        primary: {
                            title: a(962299).A.formatMessage(l.databasePromoPrimaryAction),
                            onAction: () => {
                                a(357709).Y5(n, {
                                    callout_key: "database_nudge_on_create_todo",
                                    placement_key: "Toast",
                                    click_type: "primary_cta"
                                }), (0, a(408441).trackDatabaseEntrypointCta)({
                                    environment: e.environment,
                                    feature: "create_database",
                                    action: "click",
                                    from: "database_nudge_on_create_todo"
                                }), o({
                                    environment: e.environment,
                                    nudgeData: m
                                }), a(819652).UW({
                                    id: "database-promo-nudge"
                                })
                            }
                        }
                    }
                })) : (0, a(531175).i)({
                    environment: n,
                    messageKey: "database_nudge_on_create_todo",
                    options: {},
                    metadata: {
                        nudgeData: m
                    }
                }), a(357709).DL(n, {
                    callout_key: "database_nudge_on_create_todo",
                    placement_key: "Toast"
                }), (0, a(658703).p)(n, {
                    entryPoint: "database_nudge_on_create_todo"
                })
            }

            function o(e) {
                let t, n, {
                        environment: o,
                        nudgeData: r
                    } = e,
                    s = new(a(970831)).B(o, {
                        table: a(832375).evP,
                        id: r.parentBlock.id
                    });
                if (!s) return;
                let l = "",
                    d = [];
                (0, a(377796).createAndCommit)({
                    environment: o,
                    userAction: "create_database_from_todos",
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: r.parentBlock.spaceId
                    },
                    perform: e => {
                        let c, u = a(124937).Wv({
                            environment: o,
                            type: i().xd.collectionView,
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            transaction: e,
                            spaceId: r.parentBlock.spaceId
                        });
                        t = u.id, (0, a(173157).z)({
                            store: u,
                            transaction: e,
                            data: {
                                parent_id: r.parentBlock.id,
                                parent_table: r.parentBlock.table,
                                alive: !0
                            }
                        }), a(579695).NI({
                            parentStore: s.getContentStore(),
                            childStore: u,
                            transaction: e,
                            after: r.currentBlockId
                        });
                        let p = {
                                title: {
                                    name: "Name",
                                    type: "title"
                                },
                                [l = (0, a(295447).Z1)({
                                    environment: o,
                                    table: a(832375).VlP,
                                    spaceId: r.parentBlock.spaceId
                                })]: (0, a(366710).D)("Status", a(962299).A.getIntl())
                            },
                            m = a(124937).eC({
                                environment: o,
                                table: a(832375).VlP,
                                value: {
                                    id: (0, a(295447).Z1)({
                                        environment: o,
                                        table: a(832375).VlP,
                                        spaceId: r.parentBlock.spaceId
                                    }),
                                    name: a(247438).x9d("Tasks"),
                                    schema: p,
                                    format: {
                                        collection_page_properties: [{
                                            property: l,
                                            visible: !0
                                        }]
                                    },
                                    parent_id: u.id,
                                    parent_table: "block",
                                    space_id: r.parentBlock.spaceId,
                                    alive: !0,
                                    version: 0,
                                    ...(0, a(510768).$)(o)
                                },
                                inMemoryRecordCache: s.inMemoryRecordCache,
                                transaction: e
                            });
                        n = m.id, (0, a(173157).z)({
                            store: u,
                            transaction: e,
                            data: {
                                collection_id: m.id,
                                view_ids: []
                            }
                        });
                        let g = a(124937).eC({
                            environment: o,
                            table: a(832375).Gy1,
                            value: {
                                id: (0, a(295447).Z1)({
                                    environment: o,
                                    table: a(832375).Gy1,
                                    spaceId: r.parentBlock.spaceId
                                }),
                                type: "table",
                                name: "Default view",
                                parent_id: u.id,
                                parent_table: "block",
                                space_id: r.parentBlock.spaceId,
                                alive: !0,
                                version: 0,
                                query2: {
                                    sort: [{
                                        property: l,
                                        direction: "ascending"
                                    }]
                                }
                            },
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            transaction: e
                        });
                        (0, a(173157).z)({
                            store: u,
                            transaction: e,
                            data: {
                                view_ids: [g.id]
                            }
                        });
                        let f = a(124937).eC({
                            environment: o,
                            table: a(832375).Gy1,
                            value: {
                                id: (0, a(295447).Z1)({
                                    environment: o,
                                    table: a(832375).Gy1,
                                    spaceId: r.parentBlock.spaceId
                                }),
                                type: "board",
                                name: "Board view",
                                parent_id: u.id,
                                parent_table: "block",
                                space_id: r.parentBlock.spaceId,
                                alive: !0,
                                version: 0,
                                query2: {
                                    group_by: l
                                },
                                format: {
                                    board_columns_by: {
                                        type: "status",
                                        property: l,
                                        groupBy: "option",
                                        sort: {
                                            type: "ascending"
                                        },
                                        hideEmptyGroups: !1
                                    }
                                }
                            },
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            transaction: e
                        });
                        if ((0, a(173157).z)({
                                store: u,
                                transaction: e,
                                data: {
                                    view_ids: [g.id, f.id]
                                }
                            }), r.todoBlocks.forEach(t => {
                                let {
                                    titleValue: n,
                                    isChecked: u
                                } = t;
                                if (0 === n.length) return;
                                let p = Array.isArray(n) ? n : [],
                                    g = a(124937).Wv({
                                        environment: o,
                                        type: i().xd.page,
                                        inMemoryRecordCache: s.inMemoryRecordCache,
                                        transaction: e,
                                        spaceId: r.parentBlock.spaceId
                                    });
                                d.push(g.id), c || (c = g), p.length > 0 && a(41403).yr({
                                    environment: o,
                                    store: g.getBlockTitleStore(),
                                    tokens: p,
                                    index: 0,
                                    transaction: e,
                                    updateSelection: !1
                                }), (0, a(173157).z)({
                                    store: g,
                                    transaction: e,
                                    data: {
                                        parent_id: m.id,
                                        parent_table: "collection",
                                        alive: !0
                                    }
                                }), (0, a(173157).z)({
                                    store: g.getPropertiesStore(),
                                    transaction: e,
                                    data: {
                                        [l]: u ? (0, a(561872).U8)("Done") : (0, a(561872).U8)("Not started")
                                    }
                                })
                            }), !a(128817).checkIsTutorialDone("database_onboarding")) {
                            var b, h, y, v, _, S;
                            let t, i, n = (0, a(904434).R$)(o),
                                r = (b = m, h = g, y = l, v = f, _ = c, t = {
                                    collectionId: b.id,
                                    collectionViewId: h.id,
                                    statusPropertyId: y
                                }, i = _ ? {
                                    databasePageId: _.id
                                } : {}, {
                                    database_onboarding_status_property_tooltip: {
                                        stepType: "database_onboarding_status_property_tooltip",
                                        ...t,
                                        ...i
                                    },
                                    database_onboarding_add_property_tooltip: {
                                        stepType: "database_onboarding_add_property_tooltip",
                                        ...t
                                    },
                                    database_onboarding_database_page_tooltip: {
                                        stepType: "database_onboarding_database_page_tooltip",
                                        ...t,
                                        ...i
                                    },
                                    database_onboarding_board_view_tooltip: {
                                        stepType: "database_onboarding_board_view_tooltip",
                                        ...t,
                                        collectionBoardViewId: v.id
                                    }
                                });
                            if (n) {
                                (0, a(862759).m)({
                                    userSettingsStore: n,
                                    transaction: e,
                                    data: {
                                        tutorial_step_settings: { ...null == (S = n.getSettings()) ? void 0 : S.tutorial_step_settings,
                                            database_onboarding: r
                                        }
                                    }
                                }), a(128817).tutorialGoToStep({
                                    environment: o,
                                    tutorialId: "database_onboarding",
                                    tutorialStepId: "database_onboarding_status_property_tooltip",
                                    transaction: e
                                })
                            }
                        }
                    }
                }), t && n && (a(549960).vH(o, {
                    type: i().xd.collectionView,
                    from: "lifecycle_nudge",
                    creating_block_id: t,
                    collection_id: n,
                    teamStore: void 0
                }), l && a(465513).Z(o, {
                    from: "lifecycle_nudge",
                    collection_id: n,
                    property_type: "status"
                }), d.forEach(e => {
                    a(549960).vH(o, {
                        type: i().xd.page,
                        from: "lifecycle_nudge",
                        creating_block_id: e,
                        collection_id: n,
                        new_page_id: e,
                        teamStore: void 0
                    })
                }))
            }

            function r(e, t, a) {
                let n = e.getContentStores();
                if (!n || 0 === n.length) return [];
                let o = n.findIndex(e => {
                    var a;
                    return (null == e || null == (a = e.pointer) ? void 0 : a.id) === t.pointer.id
                });
                if (-1 === o) return [];
                let r = [];
                for (let e = o; e >= 0; e--) {
                    let t = n[e];
                    if (t)
                        if (t.isType(i().xd.toDo)) {
                            if (r.unshift(t), a && r.length >= a) break
                        } else break
                }
                return r
            }

            function s(e, t) {
                let a = e.getContentStores();
                if (!a || 0 === a.length) return [];
                let n = a.findIndex(e => {
                    var a;
                    return (null == e || null == (a = e.pointer) ? void 0 : a.id) === t.pointer.id
                });
                if (-1 === n) return [];
                let o = a[n];
                if (!o || !o.isType(i().xd.toDo)) return [];
                let r = [];
                for (let e = n; e >= 0; e--) {
                    let t = a[e];
                    if (t)
                        if (t.isType(i().xd.toDo)) r.unshift(t);
                        else break
                }
                for (let e = n + 1; e < a.length; e++) {
                    let t = a[e];
                    if (t)
                        if (t.isType(i().xd.toDo)) r.push(t);
                        else break
                }
                return r
            }
            let l = (0, a(109939).YK)({
                databasePromoTitle: {
                    id: "database.promo.title",
                    defaultMessage: "Track tasks smarter with a database"
                },
                databasePromoDescription: {
                    id: "database.promo.description",
                    defaultMessage: "Sort and filter by status to stay organized. Create it with /database."
                },
                databasePromoPrimaryAction: {
                    id: "database.promo.primaryAction",
                    defaultMessage: "Try database"
                }
            })
        },
        319020: (e, t, a) => {
            a.d(t, {
                G: () => n,
                _: () => i
            });
            let i = .7,
                n = 1
        },
        321412: (e, t, a) => {
            a.d(t, {
                b: () => l
            });
            var i = a(296540),
                n = a(474848);
            let o = {
                highlight: {
                    height: "calc(100% + 12px)",
                    width: "calc(100% + 24px)",
                    insetBlockStart: "-6px",
                    insetInlineStart: "-12px",
                    position: "absolute",
                    backgroundColor: a(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    pointerEvents: "none"
                }
            };

            function r({
                itemId: e,
                itemRef: t
            }) {
                let s = (0, a(533992).v3)(),
                    l = (0, i.useContext)(a(700587).U),
                    d = (0, a(682985).K8)(() => a(488301).J.state.highlightedSetting === e, [e]);
                return (0, i.useEffect)(() => {
                    d && t.current && (0, a(341471).h)({
                        element: t.current,
                        environment: s,
                        scrollerContext: l,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [d, s, t, l]), (0, n.jsx)(a(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    visible: !!d,
                    config: {
                        duration: 250,
                        timingFunction: "ease-in-out"
                    },
                    style: o.highlight
                })
            }
            let s = {
                flex: 3,
                minWidth: 200
            };

            function l({
                id: e,
                title: t,
                titleId: o,
                byline: d,
                bylineId: c,
                item: u,
                badge: p,
                layout: m = "inline"
            }) {
                let g = (0, i.useRef)(null),
                    f = (0, a(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === m ? {
                                flexDirection: "column"
                            } : {
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        },
                        settingItem: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            ..."stacked" === m ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [m]);
                return (0, n.jsxs)("div", {
                    ref: g,
                    style: f.settingContainer,
                    children: [(0, n.jsx)("div", {
                        style: s,
                        children: (0, n.jsx)(a(741489).j, {
                            title: t,
                            titleId: o,
                            byline: d,
                            bylineId: c,
                            badge: p
                        })
                    }), (0, n.jsx)("div", {
                        style: f.settingItem,
                        children: u
                    }), (0, n.jsx)(r, {
                        itemId: e,
                        itemRef: g
                    })]
                })
            }
        },
        322450: (e, t, a) => {
            function i(e = !1) {
                return e ? "workspace_owners_only" : "all_workspace_members"
            }

            function n(e) {
                let {
                    policy: t,
                    userRole: n,
                    userPermissionGroups: o,
                    isOwnersOnlyDefaultEnabled: r
                } = e, s = i(r), l = n && (0, a(642157).Km)(n);
                switch (t ? ? s) {
                    case "disabled":
                        return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                    case "workspace_owners_only":
                        if (!l) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                        break;
                    case "all_workspace_members":
                        break;
                    case "custom":
                        if (!(null == o ? void 0 : o.some(e => {
                                var t;
                                return (null == (t = e.settings) ? void 0 : t.can_create_custom_agents) === !0
                            })) && !l) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        }
                }
                return {
                    canCreate: !0
                }
            }
            a.d(t, {
                D: () => i,
                K: () => n
            }), a(898992), a(737550)
        },
        336960: (e, t, a) => {
            function i(e) {
                a(149402).w.open(e)
            }

            function n() {
                a(149402).w.close()
            }
            a.d(t, {
                H: () => n,
                d: () => i
            })
        },
        337439: (e, t, a) => {
            a.d(t, {
                p: () => i
            });
            async function i() {
                return (await a.e(32675).then(a.bind(a, 271417))).navigateToLibraryPage
            }
        },
        344685: (e, t, a) => {
            a.d(t, {
                Y: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let {
                    messageKey: t
                } = e, n = {
                    id: "",
                    key: t,
                    type: "static",
                    category: a(292609).lU[t].category,
                    props: {}
                };
                return (0, i.jsx)(a(436281).Ue, {
                    children: (0, i.jsx)(a(105875).g, { ...e,
                        message: n
                    })
                })
            }
        },
        351298: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightRightFillIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.56",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "m17.619 9.381-5.4-5.4A.875.875 0 1 0 10.98 5.22l3.907 3.906H2.934c-.447 0-.809.392-.809.875s.362.875.809.875h11.954l-3.907 3.906a.875.875 0 1 0 1.238 1.238l5.4-5.4a.875.875 0 0 0 0-1.238"
                    })
                },
                n = (0, a(104509).wt)("arrowStraightRightFill", i, "fill")
        },
        352600: (e, t, a) => {
            a.d(t, {
                D: () => i
            });

            function i(e) {
                if (a(272755).g.state.isOpen) return;
                let t = e.RouterStore.state.route;
                if (!(0, a(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(t)) return;
                if ((0, a(548124).getIsChatPanelOpen)(e)) return void(0, a(984107).dismissChatSidebar)();
                let i = a(728372).AppStoreMainEditorCurrentBlockStore.state || (0, a(346596).k)(e);
                (0, a(358667).openChatPanel)({
                    environment: e,
                    store: i,
                    chatPanelState: {
                        isOpen: !0
                    }
                })
            }
        },
        355039: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            var i = a(474848);
            let n = function({
                hasActivePlan: e
            }) {
                var t;
                let n = (0, a(533992).v3)(),
                    o = e ? (0, i.jsx)(a(109939).sA, {
                        id: "upgradeMobileButton.manageButton.label",
                        defaultMessage: "Manage Plan"
                    }) : (0, i.jsx)(a(109939).sA, {
                        id: "upgradeMobileButton.upgradeButton.label",
                        defaultMessage: "Upgrade Plan"
                    });
                return (0, i.jsx)(a(64960).Ay, {
                    onClick: (t = n, () => {
                        let {
                            mobileNative: e
                        } = t;
                        e && e.openUpgradeModal({
                            spaceId: (0, a(496722).a)(),
                            from: "mobile_sidebar",
                            showActivePlan: !0
                        })
                    }),
                    children: (0, i.jsx)(a(380559).u, {
                        left: (0, i.jsx)(a(16275).I, {
                            icon: a(96699).arrowInCircleUpFillSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        }),
                        disableMobileBorder: !0,
                        children: o
                    })
                })
            }
        },
        356164: (e, t, a) => {
            a.d(t, {
                VV: () => r,
                WE: () => d,
                cO: () => u,
                eh: () => c,
                fE: () => s,
                hX: () => l,
                jH: () => p,
                vH: () => o
            }), a(898992), a(430670);
            let i = (0, a(109939).YK)({
                leftTeam: {
                    id: "teamPermissionsActions.leftTeam",
                    defaultMessage: "Left {teamName}"
                },
                leftTeamNoName: {
                    id: "teamPermissionsActions.leftTeamNoName",
                    defaultMessage: "Left teamspace"
                },
                leftYetStillInTeam: {
                    id: "teamPermissionsActions.leftYetStillInTeam",
                    defaultMessage: "You are still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because you are a member of the following groups: {groupsString}"
                },
                removedYetStillInTeam: {
                    id: "teamPermissionsActions.removedYetStillInTeam",
                    defaultMessage: "{hasMemberName, select, true {{memberName}} other {The removed user}} is still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because they are a member of the following groups: {groupsString}"
                },
                joinedTeam: {
                    id: "teamPermissionsActions.joinedTeam",
                    defaultMessage: "Joined {teamName}"
                },
                joinedTeamUsingAdminPrivileges: {
                    id: "teamPermissionsActions.joinedTeamUsingAdminPrivileges",
                    defaultMessage: "Joined {teamName} using admin privileges"
                },
                upgradedSelfToOwner: {
                    id: "teamPermissionsActions.upgradedSelfToOwnerUsingAdminPrivileges",
                    defaultMessage: "Became owner of {teamName} using admin privileges"
                },
                archivedTeam: {
                    id: "teamPermissionsActions.archivedTeam",
                    defaultMessage: "Archived {teamName}"
                },
                restoredTeam: {
                    id: "teamPermissionsActions.restoredTeam",
                    defaultMessage: "Restored {teamName}"
                },
                restoredTeamNoName: {
                    id: "teamPermissionsActions.restoredTeamNoName",
                    defaultMessage: "Restored teamspace"
                },
                duplicatedTeam: {
                    id: "teamPermissionsActions.duplicatedTeam",
                    defaultMessage: "Duplicated {teamName}"
                },
                duplicatedTeamNoName: {
                    id: "teamPermissionsActions.duplicatedTeamNoName",
                    defaultMessage: "Duplicated teamspace"
                }
            });

            function n(e, t, i) {
                let n = a(962299).A.formatMessage(e, { ...t
                });
                a(436555).D6({
                    label: n,
                    durationMs: i
                })
            }

            function o(e) {
                return n(i.upgradedSelfToOwner, {
                    teamName: e
                })
            }

            function r({
                teamName: e,
                usingAdminPrivileges: t
            }) {
                return n(t ? i.joinedTeamUsingAdminPrivileges : i.joinedTeam, {
                    teamName: e
                })
            }

            function s(e) {
                return e ? n(i.leftTeam, {
                    teamName: e
                }) : n(i.leftTeamNoName)
            }

            function l(e, t) {
                let o = (0, a(890142).l)(t.flatMap(e => e.name || []));
                n(i.leftYetStillInTeam, {
                    hasTeamName: void 0 !== e,
                    teamName: e,
                    groupsString: o
                }, a(441742).LX)
            }

            function d(e, t, o) {
                let r = (0, a(890142).l)(o.flatMap(e => e.name || []));
                n(i.removedYetStillInTeam, {
                    hasMemberName: void 0 !== e,
                    hasTeamName: void 0 !== t,
                    memberName: e,
                    teamName: t,
                    groupsString: r
                }, a(441742).LX)
            }

            function c(e) {
                return n(i.archivedTeam, {
                    teamName: e
                })
            }

            function u(e) {
                return e ? n(i.restoredTeam, {
                    teamName: e
                }) : n(i.restoredTeamNoName)
            }

            function p(e) {
                return e ? n(i.duplicatedTeam, {
                    teamName: e
                }) : n(i.duplicatedTeamNoName)
            }
        },
        358667: (e, t, a) => {
            a.r(t), a.d(t, {
                openChatPanel: () => i
            }), a(16280), a(814603), a(147566), a(198721);

            function i(e) {
                var t;
                let i, {
                        environment: n,
                        store: o,
                        chatPanelState: r,
                        source: s = "button"
                    } = e,
                    l = a(680007).default.mark("agent_time_to_render"),
                    d = (0, a(420459).G4)();
                a(562733).zI.setState({ ...a(562733).zI.state,
                    agentTimeToRenderMetric: l,
                    openSource: s,
                    completionContext: d
                });
                let c = r ? ? {},
                    u = c.isNewThread,
                    p = "threadId" in c && !!c.threadId;
                !u && !p && a(973240).L.threadId && a(973240).L.updatedAt && a(973240).L.updatedAt + 6e5 > Date.now() && (c = { ...c,
                    threadId: a(973240).L.threadId
                }), (0, a(487246).a)();
                let m = (0, a(548124).getMergedChatSidebarRouteData)({
                        environment: n,
                        update: c
                    }),
                    g = (0, a(548124).routeArgsGivenChatSidebarRouteData)(m),
                    f = n.RouterStore.state.route;
                if (o)
                    if ((null == o ? void 0 : o.table) === a(832375).evP) i = (0, a(483227).Ef)({
                        environment: n,
                        updates: { ...g,
                            scrollToBlockId: void 0,
                            store: o
                        }
                    });
                    else if ((null == o ? void 0 : o.table) === a(832375).C0E) {
                    let e = {};
                    "agent" === f.name && (e = {
                        workflowViewType: f.workflowViewType,
                        workflowViewId: f.workflowViewId,
                        workflowPrompt: f.workflowPrompt,
                        agentChatThreadId: f.agentChatThreadId
                    }), i = (0, a(453573).Lm)({
                        workflowId: o.id,
                        params: {
                            workflowViewType: "agent",
                            ...g,
                            ...e
                        }
                    })
                } else(0, a(722371).HB)(o);
                else if (!o && (0, a(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(f)) {
                    let e = new URL(window.location.href);
                    g.chatThreadId && e.searchParams.set(a(737869).P5, g.chatThreadId), i = e.toString()
                }
                if (!i) throw Error(`Cannot open chat panel on route ${f.name} without a store`);
                let b = a(728372).AppStoreMainEditorCurrentBlockStore.state !== o;
                (0, a(79266).navigate)({
                    environment: n,
                    url: i,
                    redirect: !b
                });
                let h = (0, a(828560).hw)(),
                    y = a(562733).zI.state.chatPanelMode;
                h || (h && "sidebar" === y ? (0, a(16822).h)({
                    environment: n,
                    isExpanded: !0,
                    from: "slippery_slope_experiment",
                    saveDetailsSidebarPreference: !1
                }) : function(e) {
                    let {
                        environment: t
                    } = e;
                    !(0, a(712358).K)(t) || (0, a(548124).getIsChatPanelOpen)(t) || (a(984858).sidebarExpandedStore.setState(!1), a(475097).default.setSidebarExpandedStoreState(!1), a(562733).zI.setState({ ...a(562733).zI.state,
                        reopenMainSidebarOnClose: !0
                    }))
                }({
                    environment: n
                }));
                let v = null == (t = (0, a(328765).S)()) ? void 0 : t.id;
                v && (n.api.callApi({
                    eventName: "warmSearchCache",
                    environment: n,
                    data: {
                        spaceId: v
                    }
                }), n.api.callCellCompatibleApi({
                    eventName: "warmVectorDBCache",
                    environment: n,
                    data: {
                        spaceId: v
                    },
                    cellNavigation: {
                        spaceId: v
                    }
                })), (async () => {
                    try {
                        (await Promise.all([a.e(36556), a.e(55373), a.e(36192), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(5721), a.e(64696), a.e(94495)]).then(a.bind(a, 305721))).trackAgentOpened({
                            environment: n,
                            from: s,
                            leftNotionSidebarOpenState: a(984858).sidebarExpandedStore.state
                        })
                    } catch (e) {}
                })()
            }
        },
        362650: (e, t, a) => {
            function i(e, t) {
                var i;
                let n = a(92513).JW();
                i = {
                    modal_id: n,
                    currency_code: a(653828).H.selectedCurrencyCodeStoreState,
                    ...t.analyticsArgs,
                    desiredProducts: t.desiredProducts,
                    desiredInterval: t.desiredInterval
                }, (0, a(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_open",
                        eventProperties: i
                    }
                }), a(856863).j.open({
                    modalId: n,
                    ...t
                })
            }

            function n(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_exit",
                        eventProperties: {
                            modal_id: {
                                modalId: t
                            }.modalId
                        }
                    }
                }), a(856863).j.setState({
                    open: !1
                })
            }
            a.d(t, {
                A: () => n,
                o: () => i
            })
        },
        372365: (e, t, a) => {
            a.r(t), a.d(t, {
                clockSmallIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 3.955a.625.625 0 0 0-.625.625v2.795H5.12a.625.625 0 1 0 0 1.25H8c.345 0 .625-.28.625-.625V4.58A.625.625 0 0 0 8 3.955"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, a(104509).wt)("clockSmall", n, "small")
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
        383155: (e, t, a) => {
            a.r(t), a.d(t, {
                blockLimitIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.72 1.77 17.28 16.45",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10.302 1.853a.63.63 0 0 0-.604 0l-6.65 3.669c-.2.11-.323.32-.323.547v7.862c0 .228.124.437.323.547l6.65 3.67a.63.63 0 0 0 .604 0l2.801-1.546a4.6 4.6 0 0 1-.713-1.034l-1.765.973v-6.434l5.4-2.98v1.797a4.7 4.7 0 0 1 1.25.04V6.07a.63.63 0 0 0-.323-.547zM3.975 7.127l5.4 2.98v6.434l-5.4-2.98zM15.356 6.07 10 9.024 4.644 6.069 10 3.114z"
                        }), (0, i.jsx)("path", {
                            d: "M13.592 15.449a3.5 3.5 0 1 1 5.816-3.897 3.5 3.5 0 0 1-5.816 3.897M16.5 11.03a.5.5 0 0 0-.5.5v2.031a.5.5 0 0 0 1 0v-2.03a.5.5 0 0 0-.5-.5m0 5a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
                        })]
                    })
                },
                o = (0, a(104509).wt)("blockLimit", n, "default")
        },
        384712: (e, t, a) => {
            a.r(t), a.d(t, {
                LoggedOutPublicSharingPageSidebar: () => m
            });
            var i = a(296540),
                n = a(474848);
            let o = {
                title: {
                    fontSize: 14,
                    fontWeight: a(699422).Wy.medium,
                    color: a(632079).Tj.text.primary
                },
                description: {
                    fontSize: 14,
                    color: a(632079).Tj.text.secondary,
                    lineHeight: 1.4,
                    marginBottom: 4
                },
                signupButton: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "fit-content",
                    paddingInline: 12,
                    fontSize: 13
                },
                illustration: {
                    width: 120,
                    height: 60
                },
                illustrationImage: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }
            };

            function r({
                version: e,
                onClose: t
            }) {
                let i = (0, a(133144).s)({
                        shouldRedirectForExistingUsersOnly: !0
                    }),
                    s = (0, a(960253).e)();
                return (0, n.jsxs)(a(4458).VP, {
                    padding: 20,
                    minWidth: 300,
                    gap: 8,
                    children: [(0, n.jsx)("div", {
                        style: o.illustration,
                        children: (0, n.jsx)("img", {
                            src: "dark" === s ? a(896221).A.images.sidebar.menLyingDownReadingDarkModePng : a(896221).A.images.sidebar.menLyingDownReadingPng,
                            style: o.illustrationImage,
                            alt: "Person reading illustration"
                        })
                    }), (0, n.jsx)("div", {
                        style: o.title,
                        children: "create_new_page" === e ? (0, n.jsx)(a(109939).sA, {
                            id: "loggedOutPublicSidebar.signupPopup.title.createNewPage",
                            defaultMessage: "Create your first page"
                        }) : (0, n.jsx)(a(109939).sA, {
                            id: "loggedOutPublicSidebar.signupPopup.title.default",
                            defaultMessage: "Ready to explore more?"
                        })
                    }), (0, n.jsx)("div", {
                        style: o.description,
                        children: "create_new_page" === e ? (0, n.jsx)(a(109939).sA, {
                            id: "loggedOutPublicSidebar.signupPopup.description.createNewPage",
                            defaultMessage: "Sign up to set up a free workspace and create your first page today"
                        }) : (0, n.jsx)(a(109939).sA, {
                            id: "loggedOutPublicSidebar.signupPopup.description.default",
                            defaultMessage: "Sign up to set up a free workspace and start building with Notion today"
                        })
                    }), (0, n.jsx)(a(912946).A, {
                        colorPalette: "blue",
                        style: o.signupButton,
                        onClick: () => {
                            i("sidebar"), t()
                        },
                        size: "md",
                        children: (0, n.jsx)(a(109939).sA, {
                            id: "loggedOutPublicSidebar.signupPopup.signupButton",
                            defaultMessage: "Sign up or login →"
                        })
                    })]
                })
            }
            let s = {
                container: {
                    position: "absolute",
                    bottom: 32,
                    insetInlineStart: 16,
                    insetInlineEnd: 16,
                    zIndex: 100,
                    display: "block"
                },
                modal: {
                    background: a(632079).Tj.background.secondary,
                    borderRadius: 12,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08);",
                    padding: 16,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    border: `1px solid ${a(632079).Tj.border.secondary}`
                },
                iconContainer: {
                    flexShrink: 0,
                    marginTop: 2
                },
                content: {
                    flex: 1,
                    minWidth: 0
                },
                title: {
                    fontSize: 14,
                    fontWeight: a(699422).Wy.semibold,
                    color: a(632079).Tj.text.primary,
                    marginBottom: 4,
                    lineHeight: 1.3
                },
                description: {
                    fontSize: 13,
                    color: a(632079).Tj.text.secondary,
                    marginBottom: 12,
                    lineHeight: 1.4
                },
                button: {
                    background: "transparent",
                    border: "none",
                    color: a(632079).Tj.text.primary,
                    fontSize: 13,
                    fontWeight: a(699422).Wy.medium,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: 0,
                    lineHeight: 1,
                    transition: "opacity 0.15s ease"
                },
                arrow: {
                    fontSize: 12,
                    transition: "transform 0.15s ease"
                }
            };

            function l({
                onSignupClick: e
            }) {
                return (0, n.jsx)("div", {
                    style: s.container,
                    children: (0, n.jsxs)("div", {
                        style: s.modal,
                        children: [(0, n.jsx)("div", {
                            style: s.iconContainer,
                            children: (0, n.jsx)(a(16275).I, {
                                icon: a(574657).checkmarkCircleFillSmallIcon,
                                size: "sm",
                                colorVariant: "primary"
                            })
                        }), (0, n.jsxs)("div", {
                            style: s.content,
                            children: [(0, n.jsx)("div", {
                                style: s.title,
                                children: (0, n.jsx)(a(109939).sA, {
                                    id: "loggedOutPublicSidebar.floatingModal.title",
                                    defaultMessage: "Ready to explore more?"
                                })
                            }), (0, n.jsx)("div", {
                                style: s.description,
                                children: (0, n.jsx)(a(109939).sA, {
                                    id: "loggedOutPublicSidebar.floatingModal.description",
                                    defaultMessage: "Sign up or login to start building with Notion today"
                                })
                            }), (0, n.jsxs)("button", {
                                style: s.button,
                                onClick: e,
                                type: "button",
                                children: [(0, n.jsx)(a(109939).sA, {
                                    id: "loggedOutPublicSidebar.floatingModal.button",
                                    defaultMessage: "Sign up or login"
                                }), (0, n.jsx)("span", {
                                    style: s.arrow,
                                    children: "→"
                                })]
                            })]
                        })]
                    })
                })
            }

            function d({
                onClick: e
            }) {
                let [t, o] = (0, i.useState)(!1), r = (0, a(960253).I)(() => ({
                    button: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingInline: 8,
                        border: "none",
                        background: t ? a(632079).Tj.background.tertiaryTranslucent : "transparent",
                        borderRadius: 6,
                        cursor: "pointer",
                        fontSize: 12,
                        fontWeight: a(699422).Wy.medium,
                        lineHeight: 1,
                        color: a(632079).Tj.text.secondary,
                        letterSpacing: "0.5px",
                        textAlign: "start",
                        transition: "background-color 0.15s ease",
                        height: 30,
                        marginBottom: 4
                    }
                }), [t]);
                return (0, n.jsxs)(a(406910).p, {
                    style: r.button,
                    onMouseEnter: () => o(!0),
                    onMouseLeave: () => o(!1),
                    onClick: e,
                    children: [(0, n.jsx)("span", {
                        children: (0, n.jsx)(a(109939).sA, {
                            id: "loggedOutPublicSidebar.private",
                            defaultMessage: "Private"
                        })
                    }), (0, n.jsx)(a(16275).I, {
                        icon: a(638501).plusSmallIcon,
                        colorVariant: "secondary",
                        size: "sm"
                    })]
                })
            }
            let c = {
                marginInlineEnd: 8
            };

            function u({
                icon: e,
                content: t,
                onClick: o
            }) {
                let [r, s] = (0, i.useState)(!1), l = (0, a(960253).I)(() => ({
                    button: {
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        padding: "4px 8px",
                        border: "none",
                        background: r ? a(632079).Tj.background.tertiaryTranslucent : "transparent",
                        borderRadius: 6,
                        cursor: "pointer",
                        fontSize: 14,
                        color: a(632079).Tj.text.secondary,
                        textAlign: "start",
                        transition: "background-color 0.15s ease"
                    }
                }), [r]);
                return (0, n.jsxs)("button", {
                    style: l.button,
                    onMouseEnter: () => s(!0),
                    onMouseLeave: () => s(!1),
                    onClick: o,
                    type: "button",
                    children: [e ? (0, n.jsx)("div", {
                        style: c,
                        children: e
                    }) : void 0, t]
                })
            }
            let p = {
                container: {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: a(632079).Tj.background.secondary,
                    boxShadow: `inset calc(var(--direction, 1) * -1px) 0 0 0 ${a(632079).Tj.border.secondary}`
                },
                headerContainer: {
                    marginInlineStart: 10
                },
                actionsContainer: {
                    flexGrow: 0,
                    flexShrink: 0,
                    paddingBottom: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    marginInlineStart: a(132261).bG,
                    marginInlineEnd: a(132261).bG
                },
                outlinerContainer: {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    paddingInlineStart: a(132261).bG,
                    paddingInlineEnd: a(132261).bG,
                    marginTop: 4
                }
            };

            function m() {
                let e = (0, a(133144).s)({
                        shouldRedirectForExistingUsersOnly: !0
                    }),
                    t = (0, a(682985).K8)(() => a(218744).default.getEligibleGroup({
                        experimentId: "awtl_logged_out_sidebar",
                        defaultGroup: "control"
                    }), []),
                    i = "directly_open_signup_modal" === t;
                return "control" === t ? null : (0, n.jsxs)("div", {
                    style: p.container,
                    children: [(0, n.jsx)("div", {
                        style: p.headerContainer,
                        children: (0, n.jsx)(a(940907).e, {
                            onClick: () => {
                                e("sidebar")
                            }
                        })
                    }), (0, n.jsxs)("div", {
                        style: p.actionsContainer,
                        children: [i ? (0, n.jsx)(u, {
                            icon: (0, n.jsx)(a(16275).I, {
                                icon: a(153828).P,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            content: "Home",
                            onClick: () => {
                                e("sidebar")
                            }
                        }) : (0, n.jsx)(a(656252).A, {
                            popupType: a(182718).nl.Popup,
                            placementToOrigin: "bottom",
                            originGap: 4,
                            content: ({
                                close: e
                            }) => (0, n.jsx)(r, {
                                version: "default",
                                onClose: e
                            }),
                            children: e => (0, n.jsx)(u, { ...e,
                                icon: (0, n.jsx)(a(16275).I, {
                                    icon: a(153828).P,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                content: "Home",
                                onClick: t => {
                                    e.onClick(t)
                                }
                            })
                        }), i ? (0, n.jsx)(u, {
                            onClick: () => {
                                e("sidebar")
                            },
                            icon: (0, n.jsx)(a(16275).I, {
                                icon: a(789701).y,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            content: "Inbox"
                        }) : (0, n.jsx)(a(656252).A, {
                            popupType: a(182718).nl.Popup,
                            placementToOrigin: "bottom",
                            originGap: 4,
                            content: ({
                                close: e
                            }) => (0, n.jsx)(r, {
                                version: "default",
                                onClose: e
                            }),
                            children: e => (0, n.jsx)(u, { ...e,
                                icon: (0, n.jsx)(a(16275).I, {
                                    icon: a(789701).y,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                content: "Inbox",
                                onClick: t => {
                                    e.onClick(t)
                                }
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        style: p.outlinerContainer,
                        children: [i ? (0, n.jsx)(d, {
                            onClick: () => {
                                e("sidebar")
                            }
                        }) : (0, n.jsx)(a(656252).A, {
                            popupType: a(182718).nl.Popup,
                            placementToOrigin: "bottom",
                            originGap: 4,
                            content: ({
                                close: e
                            }) => (0, n.jsx)(r, {
                                version: "create_new_page",
                                onClose: e
                            }),
                            children: e => (0, n.jsx)(d, { ...e,
                                onClick: t => {
                                    e.onClick(t)
                                }
                            })
                        }), i ? (0, n.jsx)(u, {
                            icon: (0, n.jsx)(a(16275).I, {
                                icon: a(638501).plusSmallIcon,
                                colorVariant: "secondary",
                                size: "sm"
                            }),
                            content: "Create new page",
                            onClick: () => {
                                e("sidebar")
                            }
                        }) : (0, n.jsx)(a(656252).A, {
                            popupType: a(182718).nl.Popup,
                            placementToOrigin: "bottom",
                            originGap: 4,
                            content: ({
                                close: e
                            }) => (0, n.jsx)(r, {
                                version: "create_new_page",
                                onClose: e
                            }),
                            children: e => (0, n.jsx)(u, { ...e,
                                icon: (0, n.jsx)(a(16275).I, {
                                    icon: a(638501).plusSmallIcon,
                                    colorVariant: "secondary",
                                    size: "sm"
                                }),
                                content: "Create new page",
                                onClick: t => {
                                    e.onClick(t)
                                }
                            })
                        })]
                    }), (0, n.jsx)(l, {
                        onSignupClick: () => {
                            e("sidebar")
                        }
                    })]
                })
            }
        },
        387012: (e, t, a) => {
            a.d(t, {
                F: () => eu
            }), a(16280);
            var i = a(296540),
                n = a(474848);
            let o = (0, a(109939).YK)({
                title: {
                    id: "ai_meeting_notes_app_download.title",
                    defaultMessage: "AI Meeting Notes, better on the Notion app"
                },
                body: {
                    id: "ai_meeting_notes_app_download.body",
                    defaultMessage: "Capture all sides of video calls and get notifications to start transcribing as meetings begin"
                },
                cta: {
                    id: "ai_meeting_notes_app_download.cta",
                    defaultMessage: "Download Notion app"
                }
            });

            function r() {
                let {
                    navigate: e
                } = (0, i.useContext)(a(44894).E), t = (0, a(533992).v3)(), r = (0, a(109939).tz)(), s = (0, a(542061).E)(), l = (0, i.useCallback)(() => {
                    s.current && e({
                        environment: t,
                        url: s.current,
                        openInNew: "tab"
                    })
                }, [t, s, e]), d = (0, i.useCallback)(() => {
                    l(), (0, a(59579).a)(t, "ai_meeting_notes_browser_summary_app_download")
                }, [t, l]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "ai_meeting_notes_browser_summary_app_download",
                    title: r.formatMessage(o.title),
                    body: r.formatMessage(o.body),
                    buttons: [{
                        text: r.formatMessage(o.cta),
                        onClick: d,
                        leftIcon: () => (0, n.jsx)(a(16275).I, {
                            icon: a(242912).arrowStraightDownSmallIcon,
                            size: "xs",
                            colorVariant: "primary"
                        })
                    }]
                })
            }
            let s = a.p + "76daacbe9b6b9f70.png",
                l = {
                    marginInlineStart: 0,
                    alignSelf: "flex-start"
                },
                d = (0, a(109939).YK)({
                    badgeWithDaysLeft: {
                        id: "aiMeetingNotesExplodingOfferNudge.badge",
                        defaultMessage: " {daysLeft, plural, one {# day left} other {# days left}}"
                    },
                    title: {
                        id: "aiMeetingNotesExplodingOfferNudge.title",
                        defaultMessage: "Save 50% on AI Meeting Notes"
                    },
                    body: {
                        id: "aiMeetingNotesExplodingOfferNudge.body",
                        defaultMessage: "Upgrade to Business to keep using AI Meeting Notes."
                    },
                    cta: {
                        id: "aiMeetingNotesExplodingOfferNudge.cta",
                        defaultMessage: "Get offer now"
                    }
                });

            function c(e) {
                let {
                    messageKey: t
                } = e, o = (0, a(533992).v3)(), r = (0, a(109939).tz)(), c = (0, a(972740).L)(), u = (0, a(226309)._3)({
                    spaceId: null == c ? void 0 : c.id
                }), p = (0, a(682985).K8)(() => (0, a(97700).n)({
                    campaign: "aimn",
                    space: null == c ? void 0 : c.getModel()
                }), [c]), m = (0, i.useCallback)(() => {
                    (0, a(902777).F)({
                        environment: o,
                        spaceStore: c,
                        billingData: u,
                        product: "business",
                        from: "aimn_offer_announcement",
                        campaign: "aimn"
                    })
                }, [o, c, u]);
                return p ? (0, n.jsx)(a(312688).l, {
                    messageKey: t,
                    imageUrl: s,
                    badge: (0, n.jsx)(a(746434).E, {
                        content: (0, n.jsxs)(a(4458).fI, {
                            gap: 2,
                            children: [(0, n.jsx)(a(16275).I, {
                                size: "xs",
                                icon: a(372365).clockSmallIcon,
                                colorPalette: "blue",
                                colorVariant: "secondary"
                            }), r.formatMessage(d.badgeWithDaysLeft, {
                                daysLeft: p
                            })]
                        }),
                        color: "blue",
                        style: l
                    }),
                    title: r.formatMessage(d.title),
                    body: r.formatMessage(d.body),
                    button: {
                        text: r.formatMessage(d.cta),
                        onClick: m
                    }
                }) : null
            }
            let u = (0, a(109939).YK)({
                title: {
                    id: "contentReskinV2Announcement.title",
                    defaultMessage: "Updated line spacing"
                },
                body: {
                    id: "contentReskinV2Announcement.body",
                    defaultMessage: "Your pages now have more space between lines, for a cleaner reading experience. <link>Learn more</link>"
                }
            });

            function p() {
                let e = (0, a(109939).tz)();
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "content_reskin_v2_announcement",
                    title: e.formatMessage(u.title),
                    body: (0, n.jsx)(a(109939).sA, { ...u.body,
                        values: {
                            link: e => (0, n.jsx)(a(428217).V, {
                                href: "https://www.notion.com/blog/updating-the-design-of-notion-pages",
                                external: !0,
                                children: e
                            })
                        }
                    })
                })
            }
            let m = (0, a(109939).YK)({
                titleWindows: {
                    id: "desktop_download_sidebar.title.windows",
                    defaultMessage: "Try Notion for Windows"
                },
                titleMac: {
                    id: "desktop_download_sidebar.title.mac",
                    defaultMessage: "Try Notion for Mac"
                },
                titleDefault: {
                    id: "desktop_download_sidebar.title.desktop",
                    defaultMessage: "Try Notion for Desktop"
                },
                bodyCopyPerformance: {
                    id: "desktop_download_sidebar.body.copy_performance",
                    defaultMessage: "Get up to 30% faster loading time with the Notion desktop app."
                },
                cta: {
                    id: "desktop_download_sidebar.cta",
                    defaultMessage: "Get the app"
                }
            });

            function g() {
                let {
                    navigate: e
                } = (0, i.useContext)(a(44894).E), t = (0, a(533992).v3)(), o = (0, a(533992).Y0)(), r = (0, a(109939).tz)(), s = o.isWindows ? m.titleWindows : o.isMac ? m.titleMac : m.titleDefault, l = m.bodyCopyPerformance, d = (0, a(542061).E)(), c = (0, i.useCallback)(() => {
                    d.current && e({
                        environment: t,
                        url: d.current,
                        openInNew: "tab"
                    })
                }, [t, d, e]), u = (0, i.useCallback)(() => {
                    c(), (0, a(59579).a)(t, "desktop_download_sidebar")
                }, [t, c]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "desktop_download_sidebar",
                    title: r.formatMessage(s),
                    body: r.formatMessage(l),
                    buttons: [{
                        text: r.formatMessage(m.cta),
                        onClick: u,
                        leftIcon: () => (0, n.jsx)(a(16275).I, {
                            icon: a(242912).arrowStraightDownSmallIcon,
                            size: "xs",
                            colorVariant: "primary"
                        })
                    }]
                })
            }
            let f = (0, a(109939).YK)({
                title: {
                    id: "resurrectionOfferSidebarAnnouncement.title",
                    defaultMessage: "Work smarter"
                },
                bodyPlus: {
                    id: "resurrectionOfferSidebarAnnouncement.bodyPlus",
                    defaultMessage: "Unlimited content, charts and more. Get Plus at 50% off for 3 months."
                },
                bodyBusiness: {
                    id: "resurrectionOfferSidebarAnnouncement.bodyBusiness",
                    defaultMessage: "Notion AI, premium integrations, and more. Get Business at 25% off for 3 months."
                },
                cta: {
                    id: "resurrectionOfferSidebarAnnouncement.upgradeAction",
                    defaultMessage: "Redeem now"
                }
            });

            function b({
                entrypoint: e
            }) {
                let t = (0, a(533992).v3)(),
                    o = (0, a(109939).tz)(),
                    r = (0, a(972740).L)(),
                    s = (0, a(226309)._3)({
                        spaceId: null == r ? void 0 : r.id
                    }),
                    l = "business_resurrection_offer_sidebar" === e,
                    d = l ? "business" : "plus",
                    c = l ? "business_resurrection_offer" : "resurrection_offer",
                    u = l ? f.bodyBusiness : f.bodyPlus;
                (0, a(383953).w)(() => {
                    (0, a(104310).u)({
                        event: {
                            eventName: "offer_viewed",
                            eventProperties: {
                                offer_campaign: c,
                                entrypoint: e
                            }
                        }
                    })
                });
                let p = (0, i.useCallback)(() => {
                    (0, a(902777).F)({
                        environment: t,
                        spaceStore: r,
                        billingData: s,
                        product: d,
                        from: e,
                        campaign: c
                    }), (0, a(59579).a)(t, e)
                }, [t, r, s, d, e, c]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: e,
                    title: o.formatMessage(f.title),
                    body: o.formatMessage(u),
                    imageSources: {
                        light: a(896221).A.images.pricing.light.rocketPng,
                        dark: a(896221).A.images.pricing.dark.rocketPng
                    },
                    buttons: [{
                        text: o.formatMessage(f.cta),
                        onClick: p,
                        rightIcon: a(351298).arrowStraightRightFillIcon
                    }]
                })
            }
            let h = (0, a(109939).YK)({
                title: {
                    defaultMessage: "Startups get up to 6 months free of Plus and AI",
                    id: "callouts.startupSidebarCallout.title"
                },
                body: {
                    defaultMessage: "Get access to premium features and add unlimited members in your student org workspace.",
                    id: "callouts.startupSidebarCallout.body"
                },
                cta: {
                    defaultMessage: "Apply now",
                    id: "callouts.startupSidebarCallout.cta"
                }
            });

            function y() {
                let {
                    navigate: e
                } = (0, i.useContext)(a(44894).E), t = (0, a(109939).tz)(), o = (0, a(533992).v3)(), r = (0, i.useCallback)(() => {
                    e({
                        environment: o,
                        url: a(168962).JZ.startupsApplication,
                        openInNew: "tab"
                    })
                }, [o, e]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "startup_sidebar_footer",
                    title: t.formatMessage(h.title),
                    body: t.formatMessage(h.body),
                    buttons: [{
                        text: t.formatMessage(h.cta),
                        rightIcon: a(351298).arrowStraightRightFillIcon,
                        onClick: r
                    }]
                })
            }
            let v = (0, a(109939).YK)({
                title: {
                    defaultMessage: "Student orgs get our free Plus plan here",
                    id: "sidebar.studentPlanPrompt.title"
                },
                body: {
                    defaultMessage: "Get access to premium features and add unlimited members in your student org workspace.",
                    id: "sidebar.studentPlanPrompt.body"
                },
                cta: {
                    defaultMessage: "Apply now",
                    id: "sidebar.studentPlanPrompt.cta"
                }
            });

            function _() {
                let {
                    navigate: e
                } = (0, i.useContext)(a(44894).E), t = (0, a(109939).tz)(), o = (0, a(533992).v3)(), r = (0, i.useCallback)(() => {
                    (0, a(104310).u)({
                        event: {
                            eventName: "click_sidebar_student_org_promo",
                            eventProperties: {}
                        }
                    }), e({
                        environment: o,
                        url: a(168962).JZ.studentGroupSignup,
                        openInNew: "tab"
                    })
                }, [o, e]), s = (0, i.useCallback)(() => {
                    let e;
                    (e = (0, a(904434).R$)(o)) && (0, a(377796).createAndCommit)({
                        environment: o,
                        userAction: "userSettingsActions.setDismissStudentOrgPrompt",
                        canUndo: !0,
                        cellTarget: "main",
                        perform: t => {
                            (0, a(862759).m)({
                                userSettingsStore: e,
                                transaction: t,
                                data: {
                                    dismissed_sidebar_student_org_prompt: !0
                                }
                            })
                        }
                    })
                }, [o]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "student_org_prompt",
                    title: t.formatMessage(v.title),
                    body: t.formatMessage(v.body),
                    buttons: [{
                        text: t.formatMessage(v.cta),
                        rightIcon: a(351298).arrowStraightRightFillIcon,
                        onClick: r
                    }],
                    onDismiss: s
                })
            }
            let S = (0, a(109939).YK)({
                titleV1: {
                    id: "try_notion_for_work_sidebar_callout_revamped.v1.title",
                    defaultMessage: "Keep work and personal life separate"
                },
                contentV1: {
                    id: "try_notion_for_work_sidebar_callout_revamped.v1.content",
                    defaultMessage: "Add your work email to create a space just for work. Switch accounts anytime."
                },
                titleV2: {
                    id: "try_notion_for_work_sidebar_callout_revamped.v2.title",
                    defaultMessage: "Using Notion for work is easy"
                },
                contentV2: {
                    id: "try_notion_for_work_sidebar_callout_revamped.v2.content",
                    defaultMessage: "Add your work email to create a space just for work. Switch accounts anytime."
                },
                titleV3: {
                    id: "try_notion_for_work_sidebar_callout_revamped.v3.title",
                    defaultMessage: "Try a workspace made for work"
                },
                contentV3: {
                    id: "try_notion_for_work_sidebar_callout_revamped.v3.content",
                    defaultMessage: "Add your work email to unlock a space with project and meeting tools."
                },
                cta: {
                    id: "try_notion_for_work_sidebar_callout_revamped.cta",
                    defaultMessage: "Add your work account"
                }
            });

            function w() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    o = (0, a(604306).r)("b2c2b_sidebar_callout_flow"),
                    r = (0, i.useMemo)(() => {
                        switch (o) {
                            case "copy1":
                                return t.formatMessage(S.titleV1);
                            case "copy2":
                                return t.formatMessage(S.titleV2);
                            case "copy3":
                                return t.formatMessage(S.titleV3);
                            default:
                                return a(773352).log({
                                    data: {
                                        miscDataToConvertToString: {
                                            message: "Control group should not be shown"
                                        }
                                    },
                                    from: "TryNotionForWorkSidebarCallout",
                                    level: "error",
                                    type: "renderCalloutTitle"
                                }), ""
                        }
                    }, [o, t]),
                    s = (0, i.useMemo)(() => {
                        switch (o) {
                            case "copy1":
                                return t.formatMessage(S.contentV1);
                            case "copy2":
                                return t.formatMessage(S.contentV2);
                            case "copy3":
                                return t.formatMessage(S.contentV3);
                            default:
                                return a(773352).log({
                                    data: {
                                        miscDataToConvertToString: {
                                            message: "Control group should not be shown"
                                        }
                                    },
                                    from: "TryNotionForWorkSidebarCallout",
                                    level: "error",
                                    type: "renderCalloutContent"
                                }), ""
                        }
                    }, [o, t]),
                    l = (0, i.useCallback)(() => {
                        (0, a(13565).P1)("notion_for_work"), a(436614).B.setState({
                            open: !0,
                            isTryNotionForWork: !0
                        }), (0, a(59579).a)(e, "try_notion_for_work_sidebar_callout_revamped")
                    }, [e]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "try_notion_for_work_sidebar_callout_revamped",
                    imageSources: {
                        light: a(896221).A.images.sidebar.menLyingDownReadingPng,
                        dark: a(896221).A.images.sidebar.menLyingDownReadingDarkModePng
                    },
                    imageHeight: 40,
                    imageMarginLeft: 8,
                    imageMarginTop: 4,
                    title: r,
                    body: s,
                    buttons: [{
                        text: t.formatMessage(S.cta),
                        onClick: l,
                        rightIcon: () => (0, n.jsx)(a(16275).I, {
                            icon: a(988824).arrowStraightRightIcon,
                            size: "xs",
                            colorVariant: "primary"
                        })
                    }]
                })
            }
            let x = (0, a(109939).YK)({
                title: {
                    defaultMessage: "Invite members",
                    id: "inviteMembersNudge.message"
                },
                body: {
                    defaultMessage: "Collaborate with your team.",
                    id: "inviteMembersNudge.body"
                }
            });

            function k({
                permissionsInviteStore: e
            }) {
                let t = (0, a(109939).tz)(),
                    o = (0, a(972740).L)(),
                    r = (0, a(394810).h)(o),
                    {
                        canShowInviteMembers: s,
                        canRequestMembers: l
                    } = (0, a(682985).K8)(() => (0, a(249583).Y)(o), [o]),
                    {
                        shouldShow: d,
                        campaign: c
                    } = (0, a(812971).j)(),
                    u = (0, i.useCallback)(() => {
                        if (o && s && e) {
                            if (o.canEditMembership()) {
                                let t;
                                d && c ? (t = "updated_expansion_offer", (0, a(336960).d)({
                                    campaign: c
                                })) : null == e || e.setState({ ...e.state,
                                    modalOpen: !0
                                }), a(179701).vX({
                                    type: "invite",
                                    from: "sidebar_footer",
                                    variant: t
                                })
                            }
                            l && (a(310961).A.open(), a(179701).vX({
                                type: "request",
                                from: "sidebar_footer"
                            }))
                        }
                    }, [l, o, e, s, d, c]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a(344685).Y, {
                        messageKey: "invite_members_sidebar_callout",
                        icon: a(447364).inviteMemberIcon,
                        title: t.formatMessage(x.title),
                        body: t.formatMessage(x.body),
                        onClick: u
                    }), o && e && r ? (0, n.jsx)(a(239697).H, {
                        targetStore: o,
                        spaceStore: o,
                        permissionsInviteStore: e,
                        membersOnly: !0,
                        shouldGrow: !1,
                        disabled: !1,
                        isSubscribed: !1,
                        origin: (0, n.jsx)("div", {}),
                        upgradeButtonName: "space_permission_settings",
                        analyticsFrom: "sidebar_footer_invite_button",
                        onInviteClick: a(163451).$D,
                        onInviteComplete: a(163451).c3
                    }) : void 0]
                })
            }
            let M = (0, a(109939).YK)({
                title: {
                    id: "setup_sessions_instant_booking_callout.title",
                    defaultMessage: "Need help with Notion?"
                },
                body: {
                    id: "setup_sessions_instant_booking_callout.body",
                    defaultMessage: "Talk to a live Notion expert for free."
                },
                cta: {
                    id: "setup_sessions_instant_booking_callout.cta",
                    defaultMessage: "Chat now"
                }
            });

            function I() {
                let e = (0, a(109939).tz)(),
                    t = (0, i.useCallback)(() => {
                        a(755185).w({
                            utm_source: "setup_sessions_instant_booking",
                            utm_campaign: "setup_sessions_instant_booking_callout"
                        })
                    }, []);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "setup_sessions_instant_booking",
                    title: e.formatMessage(M.title),
                    body: e.formatMessage(M.body),
                    icon: a(109925).phoneIcon,
                    buttons: [{
                        text: e.formatMessage(M.cta),
                        onClick: t,
                        rightIcon: a(351298).arrowStraightRightFillIcon
                    }]
                })
            }
            let C = {
                    WorkspaceDiscoverySidebarCallout: new(a(815048)).O2("WorkspaceDiscoverySidebarCallout", async () => a.e(48792).then(a.bind(a, 470467)))
                },
                A = (0, a(815048)._h)(C.WorkspaceDiscoverySidebarCallout, e => e.WorkspaceDiscoverySidebarCallout),
                T = (0, a(109939).YK)({
                    title: {
                        id: "collaboration_callout.title",
                        defaultMessage: "Find friends to collaborate with"
                    },
                    body: {
                        id: "collaboration_callout.body",
                        defaultMessage: "Import your contacts to start collaborating with your friends."
                    },
                    cta: {
                        id: "collaboration_callout.ctaImportContacts",
                        defaultMessage: "Import contacts"
                    }
                });

            function j() {
                let e = (0, a(109939).tz)(),
                    t = (0, i.useCallback)(() => {
                        a(599754).Ow({
                            currentPage: "members",
                            tab: "members"
                        }), a(806457).F.openImportDropdown({
                            shouldAddMembers: !1
                        })
                    }, []);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "collaboration_callout",
                    title: e.formatMessage(T.title),
                    body: e.formatMessage(T.body),
                    icon: a(857711).personCropCircleBadgePlusIcon,
                    buttons: [{
                        text: e.formatMessage(T.cta),
                        onClick: t,
                        rightIcon: a(351298).arrowStraightRightFillIcon
                    }]
                })
            }
            async function P(e) {
                let {
                    environment: t,
                    panelType: i
                } = e;
                ! function(e) {
                    let {
                        panel_type: t,
                        action_type: i
                    } = e;
                    (0, a(104310).u)({
                        event: {
                            eventName: "click_sharing_panel",
                            eventProperties: {
                                panel_type: t,
                                action_type: i
                            }
                        }
                    })
                }({
                    panel_type: i,
                    action_type: "create"
                }), await a(807717).startOnboarding(t, {
                    type: "create-or-join",
                    source: "public_share_link"
                })
            }
            let B = (0, a(109939).YK)({
                title: {
                    id: "sidebar.createPagePanel.title",
                    defaultMessage: "Create a new page"
                },
                body: {
                    id: "sidebar.createPagePanel.description",
                    defaultMessage: "Start from scratch with a blank page."
                },
                cta: {
                    id: "sidebar.createPagePanel.button",
                    defaultMessage: "New page"
                }
            });

            function D() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    o = (0, i.useCallback)(async () => {
                        await P({
                            environment: e,
                            panelType: "create_page"
                        })
                    }, [e]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "anyone_with_the_link_sidebar_callout",
                    title: t.formatMessage(B.title),
                    body: t.formatMessage(B.body),
                    icon: a(822084).pageIcon,
                    buttons: [{
                        text: t.formatMessage(B.cta),
                        onClick: o,
                        rightIcon: a(351298).arrowStraightRightFillIcon
                    }]
                })
            }

            function N(e) {
                var t, o, r, s, l;
                let d = (0, a(533992).v3)(),
                    c = (0, a(109939).tz)(),
                    u = d.currentUser.id,
                    p = (0, a(682985).K8)(() => (0, a(717274).up)(), []),
                    m = (0, a(723240).r)(),
                    g = (0, a(217844)._)({
                        name: "ai_usage",
                        spaceId: m,
                        userId: u,
                        amount: 1
                    }),
                    {
                        canUserRequestUpgrade: f,
                        openModal: b,
                        userHasPendingRequest: h
                    } = (0, a(726546).E)({
                        type: "feature",
                        featureAvailability: g,
                        entrypoint: "ai_limit_nudge_sidebar",
                        analyticsEntrypoint: "ai_limit_nudge_sidebar",
                        isOptimisticUpsell: !1
                    });
                if ((0, i.useEffect)(() => {
                        a(357709).DL(d, {
                            callout_key: "ai_limit_nudge",
                            placement_key: "SidebarFooter"
                        })
                    }, [d]), !u) return null;
                let y = p && f,
                    v = p && h;
                if ("settings" === e.source || void 0 === g || "unlimited" === g.limit.total || !g.upsell) return null;
                let _ = g.upsell,
                    S = Number(g.limit.current / g.limit.total);
                if (S < a(319020)._) return null;
                let w = S >= a(319020).G ? "limit_reached" : "warning",
                    x = (t = w, o = c, "warning" === t ? o.formatMessage({
                        id: "addOnLimitUsage.approachingAiLimitDescription",
                        defaultMessage: "You're actively using AI. Upgrade to get to ideas and answers, faster"
                    }) : o.formatMessage({
                        id: "addOnLimitUsage.reachedAiLimitDescription",
                        defaultMessage: "You're out of free responses"
                    })),
                    k = v ? (0, n.jsx)(a(109939).sA, {
                        id: "addOnLimitUsage.requestedAiLimitTooltip",
                        defaultMessage: "You’ve already requested Notion AI to your workspace owner."
                    }) : null,
                    M = c.formatMessage({
                        id: "spaceSettings.sidebar.addOnUpgradeLink",
                        defaultMessage: "Notion AI"
                    }),
                    I = (r = w, s = c, l = y, v ? s.formatMessage({
                        id: "addOnLimitUsage.hasAlreadyRequested",
                        defaultMessage: "Requested"
                    }) : l ? s.formatMessage({
                        id: "addOnLimitUsage.requestAiCta",
                        defaultMessage: "Request Notion AI"
                    }) : "warning" === r ? s.formatMessage({
                        id: "addOnLimitUsage.approachingLimitCta",
                        defaultMessage: "Unlock Notion AI"
                    }) : s.formatMessage({
                        id: "addOnLimitUsage.reachedLimitCta",
                        defaultMessage: "Upgrade now"
                    }));
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "ai_limit_nudge",
                    title: M,
                    body: (0, n.jsxs)(n.Fragment, {
                        children: [x, k ? (0, n.jsx)(a(496624).B, {
                            tooltipMessage: k,
                            tooltipWidth: "250px"
                        }) : null]
                    }),
                    icon: a(273344).aiFaceIcon,
                    onDismiss: () => (function(e, t, i) {
                        var n;
                        let o = a(728372).AppStoreCurrentUserSettingsStore.state;
                        if (!o) return;
                        let r = {
                            addOnLimitNotifications: function(e, t, i) {
                                if (i) {
                                    if ("warning" === t) {
                                        if ("settings" === e) return {
                                            disableWarningNotificationInSettings: !0,
                                            disableWarningNotificationInSidebar: i.disableWarningNotificationInSidebar,
                                            disableLimitNotificationInSettings: i.disableLimitNotificationInSettings,
                                            disableLimitNotificationInSidebar: i.disableLimitNotificationInSidebar,
                                            expirationDate: i.expirationDate
                                        };
                                        if ("sidebar" === e) return {
                                            disableWarningNotificationInSettings: i.disableWarningNotificationInSettings,
                                            disableWarningNotificationInSidebar: !0,
                                            disableLimitNotificationInSettings: i.disableLimitNotificationInSettings,
                                            disableLimitNotificationInSidebar: i.disableLimitNotificationInSidebar,
                                            expirationDate: i.expirationDate
                                        }
                                    }
                                    if ("limit_reached" === t) {
                                        if ("settings" === e) return {
                                            disableWarningNotificationInSettings: i.disableWarningNotificationInSettings,
                                            disableWarningNotificationInSidebar: i.disableWarningNotificationInSidebar,
                                            disableLimitNotificationInSettings: !0,
                                            disableLimitNotificationInSidebar: i.disableLimitNotificationInSidebar,
                                            expirationDate: i.expirationDate
                                        };
                                        if ("sidebar" === e) return {
                                            disableWarningNotificationInSettings: i.disableWarningNotificationInSettings,
                                            disableWarningNotificationInSidebar: i.disableWarningNotificationInSidebar,
                                            disableLimitNotificationInSettings: i.disableLimitNotificationInSettings,
                                            disableLimitNotificationInSidebar: !0,
                                            expirationDate: i.expirationDate
                                        }
                                    }
                                }
                                return {
                                    disableWarningNotificationInSettings: "warning" === t && "settings" === e,
                                    disableWarningNotificationInSidebar: "warning" === t && "sidebar" === e,
                                    disableLimitNotificationInSettings: "limit_reached" === t && "settings" === e,
                                    disableLimitNotificationInSidebar: "limit_reached" === t && "sidebar" === e,
                                    expirationDate: (0, a(25825).K1)({
                                        date: Date.now(),
                                        daysToAdd: 7
                                    })
                                }
                            }(t, i, null == (n = o.getSettings()) ? void 0 : n.addOnLimitNotifications)
                        };
                        (0, a(377796).createAndCommit)({
                            userAction: "addOnLimitNotifications.ai.markNotificationAsDismissed",
                            environment: e,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: e => {
                                (0, a(862759).m)({
                                    transaction: e,
                                    userSettingsStore: o,
                                    data: r
                                })
                            }
                        }), (0, a(59579).a)(e, "ai_limit_nudge"), a(357709).Sq(e, {
                            callout_key: "ai_limit_nudge",
                            dismiss_type: "sidebar_dismiss",
                            placement_key: "SidebarFooter"
                        })
                    })(d, e.source, w),
                    buttons: [{
                        text: I,
                        onClick: () => {
                            var t, i, n, o, r;
                            return t = d, i = e.source, n = y, o = _, r = b, void(n ? r() : a(907063).K(t, {
                                from: "sidebar" === i ? "ai_limit_sidebar" : "ai_limit_settings",
                                upsell: o,
                                spaceStore: (0, a(328765).S)()
                            }), a(357709).Y5(t, {
                                callout_key: "ai_limit_nudge",
                                click_type: "primary_cta",
                                placement_key: "SidebarFooter"
                            }))
                        },
                        rightIcon: v ? void 0 : a(351298).arrowStraightRightFillIcon,
                        leftIcon: v ? () => (0, n.jsx)(a(16275).I, {
                            icon: a(93042).checkmarkCircleFillIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        }) : void 0,
                        disabled: v
                    }]
                })
            }

            function L(e) {
                return (0, n.jsx)(a(436281).Ue, {
                    children: (0, n.jsx)(a(436281).wY, { ...e
                    })
                })
            }
            let R = {
                button: {
                    width: "100%",
                    border: `1px solid ${a(632079).Tj.border.primary}`,
                    borderRadius: 6
                },
                buttonContainer: {
                    width: "100%"
                },
                cardContainer: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: 12,
                    paddingInlineEnd: 14,
                    paddingBottom: 20,
                    paddingInlineStart: 14,
                    gap: 8,
                    borderTop: `1px solid ${a(632079).Tj.state.hover}`
                },
                dismissButton: {
                    position: "relative",
                    top: 0,
                    insetInlineEnd: 0,
                    insetInlineStart: 4,
                    background: "none"
                },
                filledBar: {
                    color: a(632079).Tj.icon.tertiary
                },
                icon: {
                    width: 16,
                    color: a(632079).Tj.icon.secondary
                },
                unfilledBar: {
                    color: a(632079).Tj.background.tertiaryTranslucent
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function O(e) {
                let {
                    title: t,
                    description: i,
                    cta: o,
                    onClick: r,
                    onDismiss: s,
                    icon: l,
                    iconStyle: d,
                    progressFilledColor: c,
                    progressPercent: u,
                    isButtonDisabled: p,
                    iconGroup: m,
                    iconColorPalette: g,
                    iconColorVariant: f
                } = e, b = void 0 !== u;
                return (0, n.jsxs)("div", {
                    style: R.cardContainer,
                    children: [(0, n.jsxs)(a(4458).fI, {
                        paddingInlineStart: 2,
                        alignItems: "center",
                        className: "autolayout-fill-width",
                        justifyContent: "space-between",
                        style: R.positionRelative,
                        children: [l ? l({ ...R.icon,
                            ...d
                        }) : null, m ? (0, n.jsx)(a(708966).Q, {
                            iconGroup: m,
                            variantName: "default",
                            size: "lg",
                            colorPalette: g,
                            colorVariant: f
                        }) : null, void 0 !== s ? (0, n.jsx)(a(226512).R, {
                            onClick: s,
                            style: R.dismissButton
                        }) : void 0]
                    }), (0, n.jsxs)(a(4458).VP, {
                        paddingInline: 6,
                        alignItems: "flex-start",
                        gap: 12,
                        width: "100%",
                        children: [(0, n.jsxs)(a(4458).VP, {
                            gap: b ? 8 : 4,
                            style: R.positionRelative,
                            alignSelf: "stretch",
                            children: [(0, n.jsx)(a(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: t
                            }), b ? (0, n.jsx)(a(819197).z, {
                                percentage: 100 * u,
                                height: 6,
                                filledColor: c ? ? R.filledBar.color,
                                unfilledColor: R.unfilledBar.color
                            }) : void 0, (0, n.jsx)(a(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: i
                            })]
                        }), (0, n.jsx)("div", {
                            style: R.buttonContainer,
                            children: (0, n.jsx)(a(548436).A, {
                                size: "lg",
                                onClick: r,
                                disabled: p,
                                disabledFeedback: p,
                                style: R.button,
                                children: (0, n.jsx)(a(111010).D, {
                                    styleKey: "bodySmMedium",
                                    colorVariant: "primary",
                                    children: o
                                })
                            })
                        })]
                    })]
                })
            }

            function E(e) {
                let {
                    spaceId: t
                } = e, i = (0, a(533992).v3)(), n = (0, a(345776).T)();
                return (0, a(682985).K8)(() => {
                    if (!t || !n) return;
                    let e = (0, a(840752).M)({
                        spaceId: t,
                        userId: n,
                        enforceIdsCheck: !1,
                        debugFrom: "useBlockUsageDataUsageAndPercentageForSidebarSpace"
                    });
                    if (e) return {
                        blockUsage: (0, a(19676).h)(i, e, t),
                        percentageUsed: (0, a(983888).B)(i, e, t)
                    }
                }, [i, t, n])
            }

            function U(e) {
                let {
                    spaceId: t
                } = e, i = (0, a(533992).v3)(), n = (0, a(345776).T)();
                return (0, a(682985).K8)(() => {
                    if (!t || !n) return !1;
                    let e = (0, a(840752).M)({
                        spaceId: t,
                        userId: n,
                        enforceIdsCheck: !1,
                        debugFrom: "useCanShowBlockLimitUpsell"
                    });
                    return !!e && (0, a(66642).z)(i, e, t)
                }, [i, t, n])
            }
            let V = {
                width: "210px"
            };

            function F(e) {
                let {
                    spaceStore: t
                } = e, o = (0, a(533992).v3)(), r = (0, a(109939).tz)(), s = (0, a(682985).K8)(() => (0, a(717274).Km)(o), [o]), l = null == t ? void 0 : t.id, d = U({
                    spaceId: l
                }), c = (0, a(226309).IG)({
                    spaceId: l
                }), u = E({
                    spaceId: l
                });
                (0, i.useEffect)(() => {
                    a(357709).DL(o, {
                        callout_key: "block_limit_nudge",
                        placement_key: "SidebarFooter"
                    })
                }, [o]);
                let {
                    handleClick: p
                } = (0, a(79268).C)({
                    upsell: {
                        type: "product",
                        product: "plus",
                        limit: {
                            type: "none"
                        },
                        trialability: "none"
                    },
                    source: "block_limit_sidebar",
                    spaceStore: t
                }), m = (0, i.useCallback)(() => {
                    c ? (p(), a(357709).Y5(o, {
                        callout_key: "block_limit_nudge",
                        variant: "approaching_block_limit",
                        click_type: "primary_cta",
                        placement_key: "SidebarFooter"
                    })) : a(599754).Ow({
                        currentPage: "members"
                    })
                }, [o, c, p]), g = c ? r.formatMessage(a(519707).XZ.reachedBlockLimitCta) : r.formatMessage(a(519707).XZ.reachedBlockLimitCtaForMembers);
                return d ? s ? (0, n.jsx)(a(51831).m, {
                    placement: "right",
                    style: V,
                    content: () => r.formatMessage(a(519707).xc.approachingBlockLimitTooltip),
                    textWrap: !0,
                    children: e => (0, n.jsx)("span", { ...e,
                        children: (0, n.jsx)(L, {
                            title: r.formatMessage(a(519707).xc.approachingBlockLimitTitle),
                            body: r.formatMessage(a(519707).xc.approachingBlockLimitDescription),
                            icon: a(383155).blockLimitIcon,
                            iconColor: "yellow",
                            buttons: [{
                                text: g,
                                rightIcon: a(351298).arrowStraightRightFillIcon,
                                onClick: m
                            }]
                        })
                    })
                }) : (0, n.jsx)(O, {
                    title: r.formatMessage(a(519707).XZ.approachingBlockLimitTitle),
                    description: (0, n.jsxs)(n.Fragment, {
                        children: [r.formatMessage(a(519707).XZ.approachingBlockLimitDescription), (0, n.jsx)(a(496624).B, {
                            tooltipMessage: r.formatMessage(a(519707).XZ.approachingBlockLimitTooltip, {
                                percentageUsed: (0, n.jsx)(a(109939).Gr, {
                                    value: u.percentageUsed,
                                    style: "percent",
                                    maximumSignificantDigits: 2,
                                    maximumFractionDigits: 0
                                })
                            })
                        })]
                    }),
                    cta: c ? (0, n.jsx)(a(109939).sA, {
                        id: "spaceSettings.sidebar.button.upgrade",
                        defaultMessage: "Upgrade plan"
                    }) : (0, n.jsx)(a(109939).sA, {
                        id: "spaceSettings.sidebar.button.contactWorkspaceOwner",
                        defaultMessage: "Contact a workspace owner"
                    }),
                    iconGroup: a(92168).k,
                    iconColorPalette: "blue",
                    iconColorVariant: "tertiary",
                    onClick: m
                }) : null
            }
            let W = {
                tooltip: {
                    width: "210px"
                },
                tooltipDescription: {
                    color: a(632079).Tj.text.inverseSecondary
                }
            };

            function z() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(972740).L)(),
                    o = (0, a(109939).tz)(),
                    r = (0, a(682985).K8)(() => t && (0, a(742197).G)(e, t), [e, t]),
                    s = (0, a(682985).K8)(() => (0, a(717274).Km)(e), [e]),
                    l = (0, a(682985).K8)(() => (0, a(641466).Mh)(e), [e]),
                    d = (0, a(682985).K8)(() => (0, a(641466).PK)(), []),
                    c = (0, a(226309).IG)({
                        spaceId: null == t ? void 0 : t.id
                    }),
                    u = l && d > 0,
                    {
                        handleClick: p,
                        upgradeEligibility: m
                    } = (0, a(79268).C)({
                        upsell: {
                            type: "product",
                            product: "plus",
                            limit: {
                                type: "none"
                            },
                            trialability: "none"
                        },
                        source: "block_limit_sidebar",
                        spaceStore: t
                    }),
                    g = (0, a(5091).K)(t, e, m),
                    f = (0, i.useCallback)(() => {
                        (0, a(272799).openBusinessTrialCCUpfrontModal)({
                            openedFrom: "block_limit_reached_nudge",
                            trialCampaign: "business_cc_14d_block_limit",
                            showBillingIntervalSelect: !1
                        })
                    }, []),
                    b = (0, i.useCallback)(() => {
                        !c || u ? a(599754).Ow({
                            currentPage: "members"
                        }) : p()
                    }, [c, u, p]);
                if (!r) return null;
                let h = c ? u ? o.formatMessage(a(519707).XZ.manageMembersCta) : o.formatMessage(a(519707).XZ.reachedBlockLimitCta) : o.formatMessage(a(519707).XZ.reachedBlockLimitCtaForMembers);
                if (s) {
                    let e = u ? o.formatMessage(a(519707).xc.enteringGracePeriodTooltip) : o.formatMessage(a(519707).xc.afterGracePeriodTooltip),
                        t = u ? o.formatMessage(a(519707).xc.enteringGracePeriodTooltipSubtitle) : null,
                        {
                            notificationTitle: i,
                            notificationDescription: s
                        } = function(e) {
                            let {
                                intl: t,
                                inGracePeriod: i,
                                remainingDays: n,
                                spaceName: o
                            } = e;
                            return {
                                notificationTitle: i ? t.formatMessage(a(519707).xc.enteringGracePeriodTitle, {
                                    dayCount: n
                                }) : t.formatMessage(a(519707).xc.afterGracePeriodTitle),
                                notificationDescription: i ? t.formatMessage(a(519707).xc.enteringGracePeriodDescription, {
                                    spaceName: o
                                }) : t.formatMessage(a(519707).xc.afterGracePeriodDescription)
                            }
                        }({
                            intl: o,
                            inGracePeriod: u,
                            remainingDays: d,
                            spaceName: r
                        });
                    return (0, n.jsx)(a(51831).m, {
                        placement: "right",
                        style: W.tooltip,
                        content: () => (0, n.jsxs)(n.Fragment, {
                            children: [e, (0, n.jsx)("div", {
                                style: W.tooltipDescription,
                                children: t
                            })]
                        }),
                        textWrap: !0,
                        children: e => (0, n.jsx)("span", { ...e,
                            children: (0, n.jsx)(L, {
                                title: i,
                                body: s,
                                icon: a(383155).blockLimitIcon,
                                iconColor: u ? "yellow" : "red",
                                buttons: g ? [{
                                    text: o.formatMessage(a(519707).xc.startTrial),
                                    rightIcon: a(351298).arrowStraightRightFillIcon,
                                    onClick: f
                                }] : [{
                                    text: h,
                                    rightIcon: a(351298).arrowStraightRightFillIcon,
                                    onClick: b
                                }]
                            })
                        })
                    })
                }
                return (0, n.jsx)(O, {
                    title: o.formatMessage(a(519707).XZ.reachedBlockLimitTitle),
                    description: (0, n.jsxs)(n.Fragment, {
                        children: [o.formatMessage(a(519707).XZ.reachedBlockLimitDescription, {
                            spaceName: r
                        }), (0, n.jsx)(a(496624).B, {
                            tooltipMessage: o.formatMessage(a(519707).XZ.reachedBlockLimitTooltip)
                        })]
                    }),
                    cta: c ? o.formatMessage(a(519707).XZ.reachedBlockLimitCta) : (0, n.jsx)(a(109939).sA, {
                        id: "spaceSettings.sidebar.button.contactWorkspaceOwner",
                        defaultMessage: "Contact a workspace owner"
                    }),
                    iconGroup: a(92168).k,
                    iconColorPalette: "red",
                    iconColorVariant: "tertiary",
                    onClick: b
                })
            }
            let K = {
                buttonHover: {
                    opacity: 1,
                    background: a(632079).Tj.background.secondary,
                    transition: "background 100ms ease-out"
                },
                tooltipDescription: {
                    color: a(632079).Tj.text.inverseSecondary
                },
                nudgeButton: {
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "6px",
                    width: "100%"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function H({
                upsellVariant: e
            }) {
                let t = (0, a(533992).v3)(),
                    o = (0, i.useCallback)(() => {
                        (0, a(952567).Q)(t, {
                            from: "sidebar_upgrade_nudge"
                        }), a(599754).Ow({
                            currentPage: "plans",
                            openedFrom: "upsell",
                            upsellType: "sidebar_upgrade_nudge"
                        })
                    }, [t]);
                return "none" === e ? null : (0, n.jsx)(a(4458).fI, {
                    alignItems: "center",
                    paddingTop: 12,
                    paddingBottom: 0,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    children: (0, n.jsx)(a(4458).VP, {
                        style: K.positionRelative,
                        flex: "1 1 0",
                        children: "upgrade" === e ? (0, n.jsx)(a(51831).m, {
                            content: () => (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(a(109939).sA, {
                                    id: "upgradeNudge.tooltip.title",
                                    defaultMessage: "Do more with Notion"
                                }), (0, n.jsx)("div", {
                                    style: K.tooltipDescription,
                                    children: (0, n.jsx)(a(109939).sA, {
                                        id: "upgradeNudge.tooltip.description",
                                        defaultMessage: "Upgrade to access premium features"
                                    })
                                })]
                            }),
                            originGap: 6,
                            placement: "right",
                            children: e => (0, n.jsx)(a(590422).Q, { ...e,
                                style: K.nudgeButton,
                                hoveredStyle: K.buttonHover,
                                onClick: o,
                                children: (0, n.jsx)(a(380559).u, {
                                    left: (0, n.jsx)(a(708966).Q, {
                                        iconGroup: a(92168).k,
                                        variantName: "fill",
                                        colorVariant: "secondary"
                                    }),
                                    disableMobileBorder: !0,
                                    children: (0, n.jsx)(a(109939).sA, {
                                        id: "upgradeNudge.upsellMessage.upgradePlan",
                                        defaultMessage: "Upgrade plan"
                                    })
                                })
                            })
                        }) : null
                    })
                })
            }
            let q = "post_business_trial_coupon_callout",
                Y = {
                    marginInlineStart: 0,
                    alignSelf: "flex-start"
                };

            function G(e) {
                let {
                    calloutKey: t
                } = e, o = (0, a(109939).tz)(), r = (0, a(533992).v3)(), s = (0, a(972740).L)(), l = (0, a(226309)._3)({
                    spaceId: null == s ? void 0 : s.id
                }), {
                    campaign: d
                } = (0, a(435276).V)(q), c = (0, a(682985).K8)(() => {
                    if (!d || !s) return null;
                    let e = a(218744).default.getConfig({
                        configName: "offers_metadata"
                    });
                    return (0, a(97700).n)({
                        campaign: d,
                        space: s.getModel(),
                        billingData: l,
                        offerMetadata: e
                    })
                }, [d, s, l]);
                (0, a(383953).w)(() => {
                    a(357709).DL(r, {
                        callout_key: t,
                        placement_key: "SidebarFooter"
                    })
                });
                let u = (0, i.useCallback)(() => {
                    (0, a(902777).F)({
                        environment: r,
                        spaceStore: s,
                        billingData: l,
                        product: "business",
                        from: q,
                        campaign: d
                    }), a(357709).Y5(r, {
                        callout_key: t,
                        click_type: "primary_cta",
                        placement_key: "SidebarFooter"
                    })
                }, [r, s, l, t, d]);
                return (0, n.jsx)(a(312688).l, {
                    messageKey: t,
                    title: o.formatMessage($.title),
                    imageUrl: a(896221).A.images.characterAiLaptopPng,
                    body: o.formatMessage($.description),
                    badge: (0, n.jsx)(a(746434).E, {
                        content: (0, n.jsxs)(a(4458).fI, {
                            gap: 2,
                            children: [(0, n.jsx)(a(16275).I, {
                                size: "xs",
                                icon: a(372365).clockSmallIcon,
                                colorPalette: "blue",
                                colorVariant: "secondary"
                            }), c ? o.formatMessage($.badgeWithDaysLeft, {
                                daysLeft: c
                            }) : o.formatMessage($.badge)]
                        }),
                        color: "blue",
                        style: Y
                    }),
                    button: {
                        text: o.formatMessage($.buttonText),
                        onClick: u
                    }
                })
            }
            let $ = (0, a(109939).YK)({
                    badgeWithDaysLeft: {
                        id: "postBusinessTrialCouponCallout.badge",
                        defaultMessage: " {daysLeft, plural, one {# day left} other {# days left}}"
                    },
                    badge: {
                        id: "postBusinessTrialCouponCallout.badge_no_days_left",
                        defaultMessage: "Limited time offer"
                    },
                    title: {
                        id: "postBusinessTrialCouponCallout.title",
                        defaultMessage: "Save 50% when you return to Notion Business"
                    },
                    description: {
                        id: "postBusinessTrialCouponCallout.description",
                        defaultMessage: "You still have time to unlock the power of Notion AI to summarize documents, draft content, and automate tasks."
                    },
                    buttonText: {
                        id: "postBusinessTrialCouponCallout.upgradeButton",
                        defaultMessage: "Claim offer"
                    }
                }),
                J = (0, a(109939).YK)({
                    title: {
                        id: "SidebarUpgradeNudge.title",
                        defaultMessage: "Do more with Notion"
                    },
                    description: {
                        id: "SidebarUpgradeNudge.description",
                        defaultMessage: "Upgrade for access to premium features."
                    },
                    cta: {
                        id: "SidebarUpgradeNudge.cta",
                        defaultMessage: "View plans"
                    }
                });

            function X() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)();
                return (0, i.useEffect)(() => {
                    a(357709).DL(e, {
                        callout_key: "sidebar_upgrade_nudge",
                        placement_key: "SidebarFooter"
                    })
                }, [e]), (0, n.jsx)(O, {
                    title: t.formatMessage(J.title),
                    description: t.formatMessage(J.description),
                    cta: t.formatMessage(J.cta),
                    icon: a(989556).arrowInCircleUpSmallIcon,
                    onClick: () => {
                        var t;
                        return t = e, void((0, a(952567).Q)(t, {
                            from: "sidebar_upgrade_nudge"
                        }), a(599754).Ow({
                            openedFrom: "upsell",
                            upsellType: "sidebar_upgrade_nudge",
                            currentPage: "plans"
                        }), a(357709).Y5(t, {
                            callout_key: "sidebar_upgrade_nudge",
                            click_type: "primary_cta",
                            placement_key: "SidebarFooter"
                        }))
                    },
                    onDismiss: () => {
                        var t;
                        let i;
                        return t = e, (0, a(104310).u)({
                            event: {
                                eventName: "sidebar_upgrade_nudge_dismiss",
                                eventProperties: {}
                            }
                        }), void((i = a(728372).AppStoreCurrentUserSettingsStore.state) && ((0, a(377796).createAndCommit)({
                            userAction: "sidebarUpgradeNudge.markNotificationAsDismissed",
                            environment: t,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: e => {
                                (0, a(862759).m)({
                                    transaction: e,
                                    userSettingsStore: i,
                                    data: {
                                        dismissed_sidebar_upgrade_nudge: !0
                                    }
                                })
                            }
                        }), (0, a(59579).a)(t, "sidebar_upgrade_nudge"), a(357709).Sq(t, {
                            callout_key: "sidebar_upgrade_nudge",
                            dismiss_type: "sidebar_dismiss",
                            placement_key: "SidebarFooter"
                        })))
                    }
                })
            }
            let Z = "expansion_offer_sidebar_callout",
                Q = {
                    heroContainer: {
                        height: 186,
                        borderBottom: `1px solid ${a(632079).Tj.border.secondary}`
                    },
                    heroImage: {
                        height: "100%",
                        objectFit: "contain"
                    }
                },
                ee = (0, a(109939).YK)({
                    title: {
                        id: "expansionOfferSidebarCallout.title",
                        defaultMessage: "{remainingMembers, plural, one {Add another member} other {Add members}} to claim 50% off next month"
                    },
                    body: {
                        id: "expansionOfferSidebarCallout.body",
                        defaultMessage: "Invite {remainingMembers, plural, one {# more member} other {# more members}} to unlock 50% off your next month of Notion {planName}."
                    },
                    cta: {
                        id: "expansionOfferSidebarCallout.cta",
                        defaultMessage: "{remainingMembers, plural, one {Add another person} other {Add members}}"
                    }
                });

            function et() {
                let e = (0, a(109939).tz)(),
                    t = (0, a(533992).v3)(),
                    o = (0, a(972740).L)(),
                    r = (0, a(226309)._3)({
                        spaceId: null == o ? void 0 : o.id
                    }),
                    [s] = (0, a(97668).Yb)(() => o ? (0, a(423127).Xd)({
                        billingData: r,
                        spaceStore: o,
                        environment: t
                    }) : Promise.resolve(void 0), [r, o, t]),
                    l = s.value,
                    d = null == l ? void 0 : l.campaign;
                (0, a(383953).w)(() => {
                    d && (0, a(104310).u)({
                        event: {
                            eventName: "offer_viewed",
                            eventProperties: {
                                offer_campaign: d,
                                entrypoint: Z
                            }
                        }
                    })
                });
                let c = (0, i.useCallback)(() => {
                        (0, a(476114).H)({
                            environment: t,
                            message: {
                                id: "",
                                key: Z,
                                type: "static",
                                category: "upsell_offer",
                                props: {}
                            },
                            overwrite: !0
                        })
                    }, [t]),
                    u = (0, i.useCallback)(() => {
                        d && (a(179701).vX({
                            type: "invite",
                            from: "expansion_offer_sidebar_callout",
                            variant: "updated_expansion_offer"
                        }), (0, a(336960).d)({
                            campaign: d
                        }), (0, a(59579).a)(t, Z), c())
                    }, [d, t, c]);
                if (!(null != l && l.shouldShowCallout) || !d) return null;
                let p = Math.max((0, a(521469).Zy)(d) - l.membersAdded, 0);
                if (0 === p) return null;
                let m = (0, a(192159).AI)(r),
                    g = (0, a(262166).u2)({
                        product: m,
                        intl: e
                    });
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: Z,
                    title: e.formatMessage(ee.title, {
                        remainingMembers: p
                    }),
                    body: e.formatMessage(ee.body, {
                        remainingMembers: p,
                        planName: g
                    }),
                    heroElement: (0, n.jsx)(a(4458).VP, {
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: 12,
                        paddingBottom: 12,
                        style: Q.heroContainer,
                        children: (0, n.jsx)("img", {
                            src: a(896221).A.images.offers.expansionOfferGiftBoxPng,
                            alt: "Expansion offer gift box",
                            style: Q.heroImage
                        })
                    }),
                    onDismiss: c,
                    buttons: [{
                        text: e.formatMessage(ee.cta, {
                            remainingMembers: p
                        }),
                        onClick: u,
                        rightIcon: a(351298).arrowStraightRightFillIcon,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }]
                })
            }
            let ea = (0, a(109939).YK)({
                learnMore: {
                    id: "onboardingReverseTrialSidebar.button.learnMore",
                    defaultMessage: "Learn more"
                },
                title: {
                    id: "onboardingReverseTrialSidebar.title",
                    defaultMessage: "Your {planName} trial starts today"
                },
                titleDaysAgo: {
                    id: "onboardingReverseTrialSidebar.title.daysAgo",
                    defaultMessage: "Your {planName} trial started {daysAgo, plural, one {{daysAgo} day ago} other {{daysAgo} days ago}}"
                },
                bodyPlusWithAi: {
                    id: "onboardingReverseTrialSidebar.body.plusWithAi",
                    defaultMessage: "Try our most loved features on the Plus plan with Core AI, free for {trialLength} days"
                },
                body: {
                    id: "onboardingReverseTrialSidebar.body",
                    defaultMessage: "Try our most loved team features on the {planName} plan, free for {trialLength} days"
                },
                titleMpPlusWithAi: {
                    id: "onboardingReverseTrialSidebar.title.mp.plusWithAi",
                    defaultMessage: "Free {planName}"
                },
                bodyMpPlusWithAi: {
                    id: "onboardingReverseTrialSidebar.body.mp.plusWithAi",
                    defaultMessage: "We’ve given you free access to Plus and core Notion AI features"
                },
                titleMp: {
                    id: "onboardingReverseTrialSidebar.title.mp",
                    defaultMessage: "Free {planName} for your team"
                },
                bodyMp: {
                    id: "onboardingReverseTrialSidebar.body.mp",
                    defaultMessage: "We’ve given you free access to {planName} with all of Notion’s best collaboration features"
                }
            });

            function ei() {
                let e = (0, a(109939).tz)(),
                    t = (0, a(533992).v3)(),
                    o = (0, a(236946).p)();
                (0, a(383953).w)(() => {
                    o && a(357709).DL(t, {
                        callout_key: "onboarding_reverse_trial_sidebar",
                        placement_key: "SidebarFooter"
                    })
                });
                let r = (0, i.useCallback)(() => {
                    (0, a(396076).fR)({
                        openedFrom: "onboarding_sidebar"
                    }), a(357709).Y5(t, {
                        callout_key: "onboarding_reverse_trial_sidebar",
                        click_type: "primary_cta",
                        placement_key: "SidebarFooter"
                    })
                }, [t]);
                if (!o || "trial" !== o.offer.type || !(0, a(875472).rM)(o)) return null;
                let s = (0, a(262166).R$)({
                        products: o.offer.products,
                        intl: e
                    }),
                    {
                        title: l,
                        description: d
                    } = function({
                        claimedTrial: e,
                        planName: t,
                        intl: i
                    }) {
                        let n = (0, a(875472).ER)(e),
                            o = (0, a(875472).b_)(e.offer).get("days"),
                            r = o - n,
                            s = "trial" === e.offer.type ? e.offer.products : [],
                            l = (0, a(795676).A)(s, ["plus", "ai"]);
                        return ["onboarding", "admin_tool"].includes(e.entrypoint) ? {
                            title: 0 === r ? i.formatMessage(ea.title, {
                                planName: t
                            }) : i.formatMessage(ea.titleDaysAgo, {
                                planName: t,
                                daysAgo: r
                            }),
                            description: l ? i.formatMessage(ea.bodyPlusWithAi, {
                                trialLength: o
                            }) : i.formatMessage(ea.body, {
                                planName: t,
                                trialLength: o
                            })
                        } : l ? {
                            title: i.formatMessage(ea.titleMpPlusWithAi, {
                                planName: t
                            }),
                            description: i.formatMessage(ea.bodyMpPlusWithAi)
                        } : {
                            title: i.formatMessage(ea.titleMp, {
                                planName: t
                            }),
                            description: i.formatMessage(ea.bodyMp, {
                                planName: t
                            })
                        }
                    }({
                        claimedTrial: o,
                        planName: s,
                        intl: e
                    });
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "onboarding_reverse_trial_sidebar",
                    imageSources: {
                        light: a(896221).A.images.pricing.timedTrialGiftboxTransparentPng,
                        dark: a(896221).A.images.pricing.timedTrialGiftboxTransparentPng
                    },
                    title: l,
                    body: d,
                    buttons: [{
                        text: e.formatMessage(ea.learnMore),
                        rightIcon: a(351298).arrowStraightRightFillIcon,
                        onClick: r
                    }]
                })
            }
            let en = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.07 2.65 19.85 13.34",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M6.802 3.759a.625.625 0 1 0-.804-.958l-1.49 1.25a.625.625 0 1 0 .804.958zm7.2-.958a.625.625 0 0 0-.804.958l1.49 1.25a.625.625 0 1 0 .804-.958zm3.976 2.255a.55.55 0 0 1 .746.222A9.9 9.9 0 0 1 19.92 10a9.76 9.76 0 0 1-1.155 4.65.55.55 0 0 1-.97-.52A8.66 8.66 0 0 0 18.82 10a8.8 8.8 0 0 0-1.064-4.198.55.55 0 0 1 .222-.746"
                        }), (0, n.jsx)("path", {
                            d: "M17.003 6.208a.55.55 0 1 0-.966.524c.528.973.833 2.094.833 3.268a6.76 6.76 0 0 1-.795 3.211.55.55 0 0 0 .97.518A7.86 7.86 0 0 0 17.97 10a7.95 7.95 0 0 0-.967-3.792M2.022 5.056a.55.55 0 0 1 .222.746A8.8 8.8 0 0 0 1.18 10c0 1.518.367 2.9 1.025 4.13a.55.55 0 0 1-.97.52A9.76 9.76 0 0 1 .08 10c0-1.704.434-3.314 1.196-4.722a.55.55 0 0 1 .746-.222"
                        }), (0, n.jsx)("path", {
                            d: "M3.964 6.732a.55.55 0 1 0-.967-.524A7.95 7.95 0 0 0 2.03 10c0 1.362.333 2.62.925 3.73a.55.55 0 0 0 .97-.519A6.76 6.76 0 0 1 3.13 10c0-1.174.305-2.295.834-3.268m6.661-.072a.625.625 0 0 0-1.25 0v2.715H7.19a.625.625 0 0 0 0 1.25H10c.345 0 .625-.28.625-.625z"
                        }), (0, n.jsx)("path", {
                            d: "M3.905 10A6.096 6.096 0 0 1 10 3.905 6.096 6.096 0 0 1 16.095 10a6.096 6.096 0 0 1-12.19 0M10 5.155A4.846 4.846 0 0 0 5.155 10a4.846 4.846 0 0 0 9.69 0A4.846 4.846 0 0 0 10 5.155"
                        })]
                    })
                },
                eo = (0, a(104509).wt)("alarmVibrating", en, "default");

            function er({
                claimedTrial: e,
                billingData: t,
                permissionsInviteStore: o
            }) {
                let r = (0, a(192159).DS)(t),
                    s = (0, a(875472).ER)(e, r),
                    l = (0, a(875472).b_)(e.offer).as("days"),
                    d = (0, a(875472).i)(e),
                    c = i.useMemo(() => "trial" === e.offer.type ? e.offer.products : [], [e.offer]),
                    u = (0, a(875472).Kp)(e).includes("ai"),
                    p = l > 30,
                    m = (0, a(109939).tz)(),
                    g = (0, a(533992).v3)(),
                    f = (0, a(972740).L)(),
                    b = (0, a(651755).q)("trial_sidebar_footer", o),
                    h = i.useCallback(() => {
                        (0, a(352600).D)(g)
                    }, [g]),
                    y = (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore);
                (0, a(383953).w)(() => {
                    (0, a(104310).u)({
                        event: {
                            eventName: "trial_sidebar_alert_viewed",
                            eventProperties: {
                                trial_length: l,
                                days_remaining: s
                            }
                        }
                    })
                });
                let v = (0, a(682985).K8)(() => {
                        var e;
                        return !!(null == y || null == (e = y.getSettings()) ? void 0 : e.reverse_trial_sidebar_alert_dismissed_at)
                    }, [y]),
                    _ = i.useCallback(() => {
                        y && ((0, a(104310).u)({
                            event: {
                                eventName: "trial_sidebar_alert_dismissed",
                                eventProperties: {}
                            }
                        }), (0, a(377796).createAndCommit)({
                            userAction: "ReverseTrialSidebarAlert.handleDismiss",
                            environment: g,
                            cellTarget: "main",
                            canUndo: !0,
                            perform: e => {
                                (0, a(862759).m)({
                                    transaction: e,
                                    userSettingsStore: y,
                                    data: {
                                        reverse_trial_sidebar_alert_dismissed_at: Date.now()
                                    }
                                })
                            }
                        }))
                    }, [y, g]),
                    {
                        handleClick: S
                    } = (0, a(79268).C)({
                        upsell: {
                            type: "product",
                            product: d,
                            limit: {
                                type: "none"
                            },
                            trialability: "none"
                        },
                        source: "timed_trial_sidebar",
                        spaceStore: f
                    }),
                    w = i.useMemo(() => {
                        let e = Math.ceil(l / 2),
                            t = (0, a(262166).R$)({
                                products: c,
                                intl: m
                            }),
                            i = {
                                title: u ? m.formatMessage({
                                    id: "reverseTrialSidebarAlert.daysLeft.noTrialName",
                                    defaultMessage: "{daysRemaining, plural, one {{daysRemaining} day left in your trial} other {{daysRemaining} days left in your trial}}"
                                }, {
                                    daysRemaining: s
                                }) : m.formatMessage({
                                    id: "reverseTrialSidebarAlert.daysLeft",
                                    defaultMessage: "{daysRemaining, plural, one {{daysRemaining} day left in your {plan} trial} other {{daysRemaining} days left in your {plan} trial}}"
                                }, {
                                    daysRemaining: s,
                                    plan: t
                                }),
                                body: m.formatMessage({
                                    id: "reverseTrialSidebarAlert.freePlan.body",
                                    defaultMessage: "If you choose not to upgrade, you'll be on a free plan with limited usage of Notion"
                                }),
                                icon: a(253092).alarmIcon,
                                iconColor: "orange",
                                buttons: [{
                                    text: m.formatMessage({
                                        id: "reverseTrialSidebarAlert.upgradeAction",
                                        defaultMessage: "Keep using {plan}"
                                    }, {
                                        plan: t
                                    }),
                                    onClick: () => S(),
                                    rightIcon: a(351298).arrowStraightRightFillIcon
                                }]
                            };
                        return 0 === s ? { ...i,
                            title: m.formatMessage({
                                id: "reverseTrialSidebarAlert.lastDay",
                                defaultMessage: "Today is the last day of your {plan} plan trial"
                            }, {
                                plan: t
                            }),
                            icon: a(772683).clockIcon,
                            buttons: [{ ...i.buttons[0],
                                onClick: () => (0, a(396076).W$)({
                                    openedFrom: "sidebar",
                                    trialPlan: d
                                })
                            }]
                        } : s <= 2 ? { ...i,
                            icon: eo,
                            buttons: [{ ...i.buttons[0],
                                onClick: () => (0, a(396076).W$)({
                                    openedFrom: "sidebar",
                                    trialPlan: d
                                })
                            }]
                        } : s <= 4 ? i : p || s > e ? void 0 : u ? { ...i,
                            body: m.formatMessage({
                                id: "reverseTrialSidebarAlert.coreAi.useQna",
                                defaultMessage: "Get instant answers from all your pages, databases, and knowledge"
                            }),
                            onDismiss: _,
                            buttons: [{
                                text: m.formatMessage({
                                    id: "reverseTrialSidebarAlert.useQna.action",
                                    defaultMessage: "Search with AI"
                                }),
                                onClick: h,
                                rightIcon: a(351298).arrowStraightRightFillIcon
                            }]
                        } : { ...i,
                            body: m.formatMessage({
                                id: "reverseTrialSidebarAlert.inviteMembers.title",
                                defaultMessage: "Make sure to invite team members and get the most out of Notion {plan}"
                            }, {
                                plan: t
                            }),
                            onDismiss: _,
                            buttons: [{
                                text: m.formatMessage({
                                    id: "reverseTrialSidebarAlert.inviteMembers.action",
                                    defaultMessage: "Invite members"
                                }),
                                onClick: b,
                                rightIcon: a(351298).arrowStraightRightFillIcon
                            }]
                        }
                    }, [s, _, b, S, h, u, m, p, l, d, c]);
                return !w || v && s > 4 ? null : (0, n.jsx)(a(436281).Ue, {
                    children: (0, n.jsx)(a(436281).wY, { ...w
                    })
                })
            }
            let es = (0, a(109939).YK)({
                title: {
                    id: "import_data_prompt.title",
                    defaultMessage: "Try out data import!"
                },
                body: {
                    id: "import_data_prompt.body",
                    defaultMessage: "Use data from another platform to launch your next project in Notion."
                },
                buttonText: {
                    id: "import_data_prompt.buttonText",
                    defaultMessage: "Get started"
                }
            });

            function el() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)();
                (0, a(383953).w)(() => {
                    (0, a(784293).t)({
                        environment: e,
                        action: "view",
                        from: "import_sidebar_announcement"
                    })
                });
                let o = (0, i.useCallback)(() => {
                    let t = a(47797).A.getOrCreateFlowId();
                    a(691968).kY({
                        from: "import_sidebar_announcement",
                        flowId: t
                    }), a(599754).Ow({
                        currentPage: "imports",
                        openedFrom: "import_sidebar_announcement"
                    }), (0, a(784293).t)({
                        environment: e,
                        action: "click",
                        from: "import_sidebar_announcement"
                    }), (0, a(59579).a)(e, "import_data_prompt")
                }, [e]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "import_data_prompt",
                    title: t.formatMessage(es.title),
                    body: t.formatMessage(es.body),
                    imageHeight: 28,
                    imageSources: {
                        light: a(896221).A.images.onboarding.useCaseImportLightPng,
                        dark: a(896221).A.images.onboarding.useCaseImportDarkPng
                    },
                    buttons: [{
                        text: t.formatMessage(es.buttonText),
                        rightIcon: a(351298).arrowStraightRightFillIcon,
                        onClick: o
                    }],
                    onDismiss: () => {
                        (0, a(784293).t)({
                            environment: e,
                            action: "dismiss",
                            from: "import_sidebar_announcement"
                        })
                    }
                })
            }
            let ed = (0, a(109939).YK)({
                title: {
                    id: "sidebar.onboardingWorkflowTemplate.title",
                    defaultMessage: "Finish where you left off"
                },
                body: {
                    id: "sidebar.onboardingWorkflowTemplate.description",
                    defaultMessage: "Set up your database to stay organized"
                },
                cta: {
                    id: "sidebar.onboardingWorkflowTemplate.button",
                    defaultMessage: "Continue building"
                }
            });

            function ec() {
                let e = (0, a(533992).v3)(),
                    [t, o] = (0, i.useState)(null),
                    r = (0, a(109939).tz)(),
                    s = (0, a(723240).r)(),
                    l = (0, a(682985).K8)(() => {
                        var e, t;
                        let i = a(728372).AppStoreCurrentUserSettingsStore.state;
                        if (!i) return [];
                        let n = (null == (e = i.getSettings()) ? void 0 : e.onboarding_workflow_template_blocks) || {},
                            o = null == (t = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id;
                        return o && null != n && n[o] ? n[o] : []
                    }, []),
                    d = null == l ? void 0 : l[0];
                (0, i.useEffect)(() => {
                    if (d) {
                        let t = new(a(970831)).B(e, {
                            table: a(832375).evP,
                            id: d,
                            spaceId: s || void 0
                        });
                        o(t), t.load()
                    }
                }, [e, d, s]);
                let c = (0, a(682985).K8)(() => {
                        if (!t) return;
                        let e = t.getFormat();
                        if ("workflow_template_placeholder" === e.collection_view_sub_type && e.placeholder_workflow_template_id && t.isCollectionView()) return {
                            collectionTemplateId: e.placeholder_workflow_template_id,
                            collectionViewBlockStore: t
                        }
                    }, [t]),
                    u = (0, i.useCallback)(async () => {
                        if (!c) return;
                        let {
                            collectionTemplateId: t,
                            collectionViewBlockStore: i
                        } = c, {
                            getCollectionTemplateFromId: n
                        } = await a(708370).t.load(), o = n(t);
                        if (!o) throw Error("Collection template not found");
                        let {
                            onNavigateToPlaceholderWorkflowTemplateBlock: r
                        } = await a(903673).O.load();
                        r({
                            environment: e,
                            collectionTemplate: o,
                            collectionViewBlockStore: i
                        }), (0, a(59579).a)(e, "onboarding_workflow_template_callout"), (0, a(658703).p)(e, {
                            entryPoint: "onboarding_workflow_template_sidebar_announcement"
                        })
                    }, [e, c]);
                return (0, n.jsx)(a(344685).Y, {
                    messageKey: "onboarding_workflow_template_callout",
                    title: r.formatMessage(ed.title),
                    body: r.formatMessage(ed.body),
                    icon: a(402524).P,
                    buttons: [{
                        text: r.formatMessage(ed.cta),
                        onClick: u,
                        rightIcon: a(351298).arrowStraightRightFillIcon
                    }],
                    onDismiss: () => {
                        (0, a(658703).p)(e, {
                            entryPoint: "onboarding_workflow_template_sidebar_announcement"
                        })
                    }
                })
            }

            function eu({
                billingData: e,
                permissionsInviteStore: t,
                spaceStore: i
            }) {
                let o = (0, a(236946).p)(),
                    s = function(e, t) {
                        let i = (0, a(682985).K8)(() => {
                                var e;
                                return !!(null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.reverse_trial_sidebar_alert_dismissed_at)
                            }, []),
                            n = (0, a(192159).DS)(e),
                            o = (0, a(192159).i5)(e);
                        if (!t || !o || o < n || (0, a(278662).tX)([t]) || !((0, a(159899).DH)(t.offer.campaign) && !(null != e && e.paymentMethod))) return !1;
                        let r = (0, a(875472).ER)(t, n);
                        return !(r > Math.ceil((0, a(875472).b_)(t.offer).as("days") / 2)) && (i && r > 4 ? null : !(r < 0))
                    }(e, o),
                    l = (0, a(682985).K8)(() => a(696190).default.getMessagesForPlacement("SidebarFooter"), []),
                    d = null == i ? void 0 : i.id,
                    u = (0, a(776371).w)(d),
                    m = function(e) {
                        let {
                            spaceStore: t
                        } = e, i = (0, a(533992).v3)(), n = null == t ? void 0 : t.id, o = U({
                            spaceId: n
                        }), r = E({
                            spaceId: n
                        }), s = r && r.blockUsage > 0, l = r && r.percentageUsed >= a(284397).e, d = (0, a(682985).K8)(() => {
                            var e;
                            return !!(null == t || null == (e = t.getSettings()) ? void 0 : e.reach_block_limit_time)
                        }, [t]), c = (0, a(682985).K8)(() => d && (0, a(717274).Km)(i) && 0 >= (0, a(641466).PK)(), [d, i]);
                        return !!(o && s && (l || c))
                    }({
                        spaceStore: i
                    });
                return (0, a(682985).K8)(() => s && o ? {
                    type: "footer",
                    component: () => (0, n.jsx)(er, {
                        claimedTrial: o,
                        billingData: e,
                        permissionsInviteStore: t
                    })
                } : m ? {
                    type: "footer",
                    component: () => (0, n.jsx)(z, {})
                } : l.length > 0 ? function(e) {
                    let {
                        message: t,
                        permissionsInviteStore: i,
                        spaceStore: o
                    } = e;
                    if ("static" === t.type) {
                        let e = (0, a(462391).h2)(t.key);
                        if (!e) throw Error(`Invalid static message key: ${t.key}`);
                        switch (e) {
                            case "anyone_with_the_link_sidebar_callout":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(D, {})
                                };
                            case "startup_sidebar_footer":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(y, {})
                                };
                            case "sidebar_upgrade_nudge":
                                return {
                                    type: "footer",
                                    component: () => (0, n.jsx)(X, {})
                                };
                            case "ai_limit_nudge":
                                return {
                                    type: "footer",
                                    component: () => (0, n.jsx)(N, {
                                        source: "sidebar"
                                    })
                                };
                            case "resurrection_offer_sidebar":
                            case "business_resurrection_offer_sidebar":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(b, {
                                        entrypoint: e
                                    })
                                };
                            case "block_limit_nudge":
                                return {
                                    type: "footer",
                                    component: () => (0, n.jsx)(F, {
                                        spaceStore: o
                                    })
                                };
                            case "expansion_offer_sidebar_callout":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(et, {})
                                };
                            case "student_org_prompt":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(_, {})
                                };
                            case "desktop_download_sidebar":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(g, {})
                                };
                            case "ai_meeting_notes_browser_summary_app_download":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(r, {})
                                };
                            case "onboarding_reverse_trial_sidebar":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(ei, {})
                                };
                            case "ai_connector_outlook_sidebar_notification":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(a(310639).LazyAIConnectorSidebarNotification, {
                                        connector: "outlook"
                                    })
                                };
                            case "ai_connector_google-calendar_sidebar_notification":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(a(310639).LazyAIConnectorSidebarNotification, {
                                        connector: "google-calendar"
                                    })
                                };
                            case "ai_connector_asana_sidebar_notification":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(a(310639).LazyAIConnectorSidebarNotification, {
                                        connector: "asana"
                                    })
                                };
                            case "ai_connector_box_sidebar_notification":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(a(310639).LazyAIConnectorSidebarNotification, {
                                        connector: "box"
                                    })
                                };
                            case "ai_connector_salesforce_sidebar_notification":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(a(310639).LazyAIConnectorSidebarNotification, {
                                        connector: "salesforce"
                                    })
                                };
                            case "ai_connector_confluence_sidebar_notification":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(a(310639).LazyAIConnectorSidebarNotification, {
                                        connector: "confluence"
                                    })
                                };
                            case "import_data_prompt":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(el, {})
                                };
                            case "collaboration_callout":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(j, {})
                                };
                            case "business_coupon_eligibility_midpoint_callout":
                            case "business_coupon_eligibility_final_callout":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(G, {
                                        calloutKey: e
                                    })
                                };
                            case "aimn_exploding_offer_nudge_d3":
                            case "aimn_exploding_offer_nudge_d1":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(c, {
                                        messageKey: e
                                    })
                                };
                            case "onboarding_workflow_template_callout":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(ec, {})
                                };
                            case "try_notion_for_work_sidebar_callout_revamped":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(w, {})
                                };
                            case "workspace_discovery_sidebar_callout":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(A, {})
                                };
                            case "invite_members_sidebar_callout":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(k, {
                                        permissionsInviteStore: i
                                    })
                                };
                            case "setup_sessions_instant_booking":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(I, {})
                                };
                            case "content_reskin_v2_announcement":
                                return {
                                    type: "card",
                                    component: () => (0, n.jsx)(p, {})
                                }
                        }
                    } else if ("sidebar" === t.type) return {
                        type: "card",
                        component: () => (0, n.jsx)(a(443220).L, {
                            message: t
                        })
                    }
                }({
                    message: l[0],
                    permissionsInviteStore: t,
                    spaceStore: i
                }) : "upgrade" === u ? {
                    type: "footer",
                    component: () => (0, n.jsx)(H, {
                        upsellVariant: u
                    })
                } : {
                    type: "footer",
                    component: () => null
                }, [s, o, m, l, u, t, e, i])
            }
        },
        390015: (e, t, a) => {
            a.d(t, {
                q: () => i
            });
            let i = a(546605).Store.createValue({
                open: !1
            }, {
                name: "AiUsageCheckoutModalStore"
            })
        },
        394810: (e, t, a) => {
            a.d(t, {
                h: () => i
            });

            function i(e) {
                var t;
                let {
                    spaceId: i,
                    currentUserId: n
                } = (0, a(682985).K8)(() => {
                    var t;
                    return {
                        spaceId: null == e ? void 0 : e.id,
                        currentUserId: null == (t = a(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id
                    }
                }, [e]), o = (0, a(217844)._)({
                    name: "members",
                    spaceId: i,
                    userId: n,
                    amount: "unknown"
                }), r = null == o || null == (t = o.limit) ? void 0 : t.total;
                return !!r && ("unlimited" === r || r > 1)
            }
        },
        396076: (e, t, a) => {
            function i(e) {
                a(139449).v.setState({
                    open: !0,
                    ...e
                })
            }

            function n() {
                a(139449).v.setState({
                    open: !1
                })
            }

            function o(e) {
                a(629108).E.setState({
                    open: !0,
                    ...e
                })
            }
            a.d(t, {
                W$: () => o,
                fR: () => i,
                iv: () => n
            })
        },
        396826: (e, t, a) => {
            a.r(t), a.d(t, {
                aiFaceFillIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.96 2.31 13.64 15.02",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10.401 5.452a4.118 4.118 0 0 1 7.088.036.825.825 0 0 1-1.425.832 2.468 2.468 0 0 0-4.247-.02L6.57 15.062l3.9.631a.825.825 0 1 1-.263 1.628l-5.102-.826a.827.827 0 0 1-.576-1.238z"
                        }), (0, i.jsx)("path", {
                            d: "M11.685 8.61a1.278 1.278 0 1 1 2.524.408 1.278 1.278 0 0 1-2.524-.409M5.474 7.603a1.278 1.278 0 1 1 2.524.408 1.278 1.278 0 0 1-2.524-.408M4.225 3.367a4.12 4.12 0 0 1 5.858.375.826.826 0 0 1-1.246 1.08 2.47 2.47 0 0 0-3.51-.225.826.826 0 0 1-1.102-1.23"
                        })]
                    })
                },
                o = (0, a(104509).wt)("aiFaceFill", n, "fill")
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
        402524: (e, t, a) => {
            a.d(t, {
                P: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.79 14.42",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M18.507 11.112c.362 0 .655.293.655.656v4.369a.656.656 0 0 1-1.311 0V13.35l-4.997 4.997a.655.655 0 1 1-.927-.928l4.997-4.997h-2.786a.655.655 0 1 1 0-1.31z"
                        }), (0, i.jsx)("path", {
                            d: "M15.5 4.125c1.174 0 2.125.951 2.125 2.125v3.612h-1.25v-.987h-5.75v2.25h1.72a2 2 0 0 0-.103.448l-.01.195.01.195q.024.214.091.412h-1.708v2.25h2.33l-1.25 1.25H4.5a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125zM3.625 13.75c0 .483.392.875.875.875h4.875v-2.25h-5.75zm0-2.625h5.75v-2.25h-5.75zm.875-5.75a.875.875 0 0 0-.875.875v1.375h5.75v-2.25zm6.125 2.25h5.75V6.25a.875.875 0 0 0-.875-.875h-4.875z"
                        })]
                    })
                },
                o = (0, a(104509).wt)("collectionArrow", n, "default")
        },
        405072: (e, t, a) => {
            a.d(t, {
                J: () => i
            });

            function i(e) {
                var t;
                let {
                    isMobileNative: i,
                    isAndroid: n
                } = e, o = a(218744).default.checkGate({
                    gateName: "android_show_language_settings"
                }), r = null == (t = (0, a(663250).getMobileNativeDeviceInfo)()) ? void 0 : t.mobileNativeAndroidApiLevel;
                return o && i && n && "number" == typeof r && r >= 33
            }
        },
        405907: (e, t, a) => {
            a.d(t, {
                I: () => o,
                i: () => s
            });
            var i = a(296540),
                n = a(474848);

            function o(e) {
                let t = (0, a(533992).v3)(),
                    i = (0, a(533992).Y0)(),
                    o = (0, a(109939).tz)(),
                    r = (0, a(682985).O$)(a(984858).sidebarMouseEnteredStore),
                    l = (0, a(682985).O$)(a(584257).b),
                    d = (0, a(682985).O$)((0, a(348295).$)(t)),
                    c = o.formatMessage({
                        defaultMessage: "Close sidebar",
                        id: "sidebarUnexpandButton.closeSidebar.tooltip"
                    }),
                    u = (!i.isElectronMac || !d) && !l && r;
                return (0, n.jsx)(s, {
                    isVisible: u,
                    icon: a(437959).S,
                    caption: c,
                    onClick: () => {
                        (0, a(568071).O)(t)
                    },
                    keyboardShortcutName: "toggleSidebar",
                    style: e.style,
                    hoveredStyle: e.hoveredStyle
                })
            }
            let r = {
                keyboardShortcut: {
                    color: a(632079).Tj.text.inverseSecondary
                },
                button: {
                    fill: a(632079).Tj.icon.secondary,
                    width: 24,
                    height: 24,
                    borderRadius: 9999
                }
            };

            function s(e) {
                let t = (0, a(533992).Y0)(),
                    [o, s] = (0, a(768397).s)(),
                    [l, d] = (0, i.useState)(!e.isVisible),
                    c = e.isVisible || s;
                (0, i.useEffect)(() => {
                    c && d(!1)
                }, [c]);
                let u = (0, i.useCallback)(() => {
                        c || d(!0)
                    }, [c]),
                    p = (0, i.useMemo)(() => ({
                        position: "relative",
                        marginInlineStart: 10,
                        ...a(986939).A.isMobile && {
                            height: "100%"
                        },
                        ...r.button,
                        ...e.style,
                        ...l && a(69916).Qg
                    }), [e.style, l]);
                return (0, n.jsx)(a(51831).m, {
                    content: () => (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("div", {
                            children: e.caption
                        }), e.keyboardShortcutName ? (0, n.jsx)(a(693592).A, {
                            style: r.keyboardShortcut,
                            name: e.keyboardShortcutName
                        }) : void 0]
                    }),
                    originGap: 6,
                    placement: t.isElectron ? "right" : "bottom",
                    children: t => (0, n.jsx)(a(654979).A, {
                        tag: a(374533).A,
                        ref: o,
                        animate: {
                            opacity: +!!c
                        },
                        onAnimationEnd: u,
                        ariaLabel: e.caption,
                        size: "sm",
                        shape: "default",
                        icon: {
                            icon: e.icon,
                            size: "default",
                            style: {
                                fill: "inherit"
                            }
                        },
                        style: p,
                        hoveredStyle: e.hoveredStyle,
                        onClick: e.onClick,
                        className: a(828432).P7S,
                        ...t
                    })
                })
            }
        },
        408441: (e, t, a) => {
            a.r(t), a.d(t, {
                trackDatabaseEntrypointCta: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    ...i
                } = e;
                (0, a(104310).u)({
                    event: {
                        eventName: "database_entrypoint_cta",
                        eventProperties: i
                    }
                })
            }
        },
        420459: (e, t, a) => {
            a.d(t, {
                G4: () => r,
                gu: () => n,
                rs: () => o
            }), a(18107), a(967357);
            var i = () => a(970831);

            function n(e) {
                let t = e ? ? ("editing" === a(358377).default.state.mode ? a(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let n = t.start.store,
                    o = n.getRecordStoreUIRoot(),
                    r = a(521595).n.findNodeFromStore(n),
                    s = (0, a(534012).T)(n),
                    l = null == s ? void 0 : s.getRecordStoreUIParent(),
                    d = (0, a(730994).K3)(o),
                    c = s && s instanceof i().B && s !== o ? s : void 0,
                    u = c ? ? r;
                if (o && o instanceof i().B && u) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: o,
                    currentBlock: c,
                    origin: u,
                    currentParent: l,
                    scrollerStore: d,
                    isPageTitle: o.id === n.id
                }
            }

            function o() {
                let {
                    stores: e
                } = a(584265).default.state, t = a(358377).default.state, n = "empty" !== t.mode ? t.multiSelection : void 0, o = "empty" !== t.mode ? t.multiSelection.start.store : void 0, r = o ? o.getRecordStoreUIRoot() : void 0;
                if (!(r instanceof i().B)) {
                    let e, t = null == o ? void 0 : o.getRecordStoreUIParent();
                    for (; null != t;) t instanceof i().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (r = e)
                }
                if (n && r && r instanceof i().B) {
                    let t = (0, a(534012).T)(n.end.store),
                        i = null == t ? void 0 : t.getRecordStoreUIParent(),
                        o = (0, a(730994).K3)(r);
                    if (t && i) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: n,
                        currentPage: r,
                        origin: t,
                        endBlock: t,
                        endBlockParent: i,
                        scrollerStore: o
                    }
                }
            }

            function r() {
                if (a(584265).default.state.stores.length > 0) {
                    let e = a(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== a(584265).default.state.stores.length) return;
                            let e = a(584265).default.state.stores[0];
                            if (!(e instanceof i().B)) return;
                            let t = e.getTitleStore();
                            if (t) return {
                                start: {
                                    store: t,
                                    index: 0
                                },
                                end: {
                                    store: t,
                                    index: 0
                                }
                            }
                        }();
                        return e ? n(e) : function() {
                            let {
                                stores: e
                            } = a(584265).default.state, t = e[0], n = e.at(-1), o = t ? t.getRecordStoreUIRoot() : void 0;
                            if (o && o instanceof i().B && n) {
                                let t = (0, a(730994).K3)(o);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: o,
                                    origin: n,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, a(971541).k)(e.multiSelection) ? n() : o()
                }
            }
        },
        423127: (e, t, a) => {
            function i(e) {
                let {
                    mostRecentOfferDate: t,
                    daysToAdd: i,
                    billingData: n
                } = e, o = (0, a(192159).DS)(n).toMillis();
                return (0, a(25825).K1)({
                    date: t,
                    daysToAdd: i
                }) < o
            }

            function n({
                memberCount: e,
                billingData: t,
                spaceId: i,
                environment: o
            }) {
                return !!e && !!t && !!i && !!(0, a(262166).dL)((0, a(192159).AI)(t)) && !(e > 10) && !(e < 2) && !!a(617995).I.getData(o, {
                    spaceId: i,
                    offerCampaign: "expansion_offer"
                }) && (0, a(717274).Nu)()
            }
            async function o({
                billingData: e,
                spaceStore: t,
                environment: i
            }) {
                var n;
                let [s, l] = await Promise.all([r({
                    billingData: e,
                    spaceStore: t,
                    environment: i
                }), (0, a(832129).x)({
                    environment: i,
                    spaceId: t.id
                })]), {
                    eligible: d,
                    campaign: c
                } = s;
                if (!d || !l) return {
                    shouldShow: !1,
                    campaign: void 0
                };
                let u = t.getModel();
                return (null == u || null == (n = u.getSettings()) || null == (n = n.offer_member_count) ? void 0 : n.find(e => e.campaign === c)) || !(l > 4) ? {
                    shouldShow: !0,
                    campaign: c
                } : {
                    shouldShow: !1,
                    campaign: void 0
                }
            }
            async function r({
                billingData: e,
                spaceStore: t,
                environment: n
            }) {
                if (!e || !(0, a(226309).qc)(e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let o = (0, a(192159).AI)(e);
                if (!((0, a(262166).$P)(o) || (0, a(262166).tL)(o)) || "month" !== (0, a(192159).N4)("plan", e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let s = (0, a(521469).UB)(o);
                if (!s) return {
                    eligible: !1,
                    campaign: void 0
                };
                let l = a(218744).default.getEligibleGroup({
                    experimentId: s,
                    defaultGroup: a(218745).STATSIG_DEFAULT_GROUP,
                    disableExposureLogging: !0
                });
                if ("control" === l || l === a(218745).STATSIG_DEFAULT_GROUP) return {
                    eligible: !1,
                    campaign: void 0
                };
                let d = (0, a(521469).$E)(o, l);
                if (!d) return {
                    eligible: !1,
                    campaign: void 0
                };
                let c = t.getModel();
                if ((0, a(521469).fd)(c, d)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let u = await a(185995).default.awaitData(n, {
                    spaceId: t.id
                });
                if (u) {
                    let {
                        isEligible: t
                    } = function(e) {
                        let {
                            campaign: t,
                            offerStatuses: n,
                            billingData: o
                        } = e, r = n.filter(a(90119).GK), s = [], l = (0, a(875472).e8)(r, "coupon"), d = !l || i({
                            mostRecentOfferDate: l.endDateMs,
                            daysToAdd: a(361200).offerEligibilityMap[t].couponRefreshDays,
                            billingData: o
                        });
                        d || s.push({
                            reason: "Coupon cooldown period has not passed",
                            extra: {
                                mostRecentCoupon: l,
                                requiredCouponRefreshDays: a(361200).offerEligibilityMap[t].couponRefreshDays
                            }
                        });
                        let c = (0, a(875472).e8)(r, "trial"),
                            u = !c || i({
                                mostRecentOfferDate: c.endDateMs,
                                daysToAdd: a(361200).offerEligibilityMap[t].trialRefreshDays,
                                billingData: o
                            });
                        return u || s.push({
                            reason: "Trial cooldown period has not passed",
                            extra: {
                                mostRecentTrial: c,
                                requiredTrialRefreshDays: a(361200).offerEligibilityMap[t].trialRefreshDays
                            }
                        }), {
                            isEligible: d && u,
                            ineligibleReasons: s
                        }
                    }({
                        campaign: d,
                        offerStatuses: u,
                        billingData: e
                    });
                    if (!t) return {
                        eligible: !1,
                        campaign: void 0
                    }
                }
                return {
                    eligible: !0,
                    campaign: d
                }
            }
            async function s({
                billingData: e,
                spaceStore: t,
                environment: i
            }) {
                let {
                    eligible: n,
                    campaign: o
                } = await r({
                    billingData: e,
                    spaceStore: t,
                    environment: i
                });
                if (!n || !o) return;
                let l = t.getModel(),
                    d = (0, a(521469)._w)(l, o);
                if (d) return {
                    shouldShowCallout: !0,
                    campaign: o,
                    membersAdded: d.membersAdded ? ? 0
                }
            }

            function l({
                initialTimestamp: e,
                dismissalKey: t,
                billingData: i
            }) {
                var n, o;
                let r = (0, a(192159).DS)(i).toMillis();
                if (r - e > 30 * Number(a(627179).nD)) return !1;
                let s = null == (n = a(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : n.getSettings(),
                    d = null == s || null == (o = s.callout_dismissal_timestamps) ? void 0 : o.find(e => e.name === t);
                return !(null != d && d.timestamp && (r - d.timestamp) / Number(a(627179).nD) < 3) && !0
            }
            a.d(t, {
                dM: () => n,
                Xd: () => s,
                ju: () => l,
                TO: () => o
            }), a(898992), a(672577), a(944114), a(354520)
        },
        432376: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let o = n
        },
        432428: (e, t, a) => {
            a.d(t, {
                V: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        isKeyboardShortcutsOpen: !1,
                        toggleSource: void 0,
                        openCount: 0
                    }
                }
            }
            let o = new n;
            (0, a(202146).exposeDebugValue)("keyboardShortcutsModalStore", o)
        },
        437188: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            var i = a(474848);
            let n = function({
                collectionViewName: e,
                collectionViewType: t
            }) {
                return e ? (0, i.jsx)(a(93594).A, {
                    children: e
                }) : "page" === t ? (0, i.jsx)(a(109939).sA, {
                    id: "database.collectionView.untitledName.untitled",
                    defaultMessage: "Untitled"
                }) : (0, i.jsx)(a(109939).sA, { ...a(4587).X[t]
                })
            }
        },
        437959: (e, t, a) => {
            a.d(t, {
                S: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.42 3.97 12.16 12.06",
                    directional: !0,
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3.608 10.442a.625.625 0 0 1 0-.884l5.4-5.4a.625.625 0 0 1 .884.884L4.934 10l4.958 4.958a.625.625 0 1 1-.884.884z"
                        }), (0, i.jsx)("path", {
                            d: "m14.508 4.158-5.4 5.4a.625.625 0 0 0 0 .884l5.4 5.4a.625.625 0 1 0 .884-.884L10.434 10l4.958-4.958a.625.625 0 1 0-.884-.884"
                        })]
                    })
                },
                o = (0, a(104509).wt)("arrowChevronDoubleBackward", n, "default")
        },
        443220: (e, t, a) => {
            a.d(t, {
                L: () => o
            }), a(944114);
            var i = a(296540),
                n = a(474848);

            function o(e) {
                let {
                    message: t
                } = e, o = (0, a(533992).v3)(), r = (0, i.useCallback)(() => {
                    t.props.buttonLink ? window.open(t.props.buttonLink) : t.props.action && (0, a(853429).Wq)({
                        action: t.props.action,
                        environment: o,
                        metadata: t.props.metadata
                    })
                }, [t, o]), s = [];
                if (t.props.buttonText) {
                    let e = t.props.buttonColor;
                    s.push({
                        text: t.props.buttonText,
                        rightIcon: a(351298).arrowStraightRightFillIcon,
                        onClick: r,
                        colorPalette: e,
                        colorVariant: "gray" !== e && e ? "accentPrimary" : "primary"
                    })
                }
                let l = t.props.imageSize ? ? "default",
                    d = t.props.imageHeight ? ? ("small" === l ? 40 : "tall" === l ? 120 : 56);
                return (0, n.jsx)(a(436281).Ue, {
                    children: (0, n.jsx)(a(105875).g, {
                        message: t,
                        title: t.props.title,
                        body: t.props.body,
                        buttons: s,
                        imageSources: t.props.imageUrl ? {
                            light: t.props.imageUrl,
                            dark: t.props.imageUrlDarkMode ? ? t.props.imageUrl
                        } : void 0,
                        imageHeight: d,
                        imageUseFullBleed: t.props.imageUseFullBleed
                    })
                })
            }
        },
        447364: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                inviteMemberIcon: () => o
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
                o = (0, a(104509).wt)("inviteMember", n, "default")
        },
        473106: (e, t, a) => {
            a.d(t, {
                p: () => i
            });

            function i() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(723240).r)(),
                    i = (0, a(972740).L)(),
                    n = (0, a(855361).S)({
                        environment: e,
                        spaceId: t
                    }),
                    o = (0, a(84163).J)(i),
                    r = (0, a(226309).lh)({
                        spaceId: t
                    }),
                    s = (0, a(682985).K8)(() => (0, a(832139).A)(), []);
                return (0, a(682985).K8)(() => !s && !!(0, a(663842).m)({
                    environment: e
                }) && !!r && !!o && 1 === n && ((0, a(907620).T)("supportsAiIAP") ? (0, a(226309).UU)(r) || !(0, a(192159).Fq)(r) : !(0, a(226309).UU)(r) && !(0, a(192159).Fq)(r)), [e, r, o, n, s])
            }
        },
        478530: (e, t, a) => {
            a.d(t, {
                I: () => i
            });

            function i({
                spaceId: e
            }) {
                let t = (0, a(533992).v3)(),
                    n = (0, a(682985).K8)(() => e ? a(477870).L.getData(t, {
                        spaceId: e
                    }) : "no_space_id", [t, e]);
                return "no_space_id" === n ? {
                    isLoading: !1,
                    requests: {}
                } : {
                    isLoading: void 0 === n,
                    requests: n ? ? {}
                }
            }
        },
        479110: (e, t, a) => {
            a.d(t, {
                P: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        releases: null,
                        fetchedAt: void 0,
                        locale: void 0
                    }
                }
                constructor() {
                    super();
                    const e = a(363256).e.withListenerIgnored(() => a(739422).l.getState());
                    if (e) {
                        const t = this.getInitialState();
                        super.setState({ ...t,
                            ...e
                        })
                    }
                }
            }
            let o = new n
        },
        485059: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarSectionWithPopup: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let {
                    type: t,
                    content: n,
                    spacePlan: o
                } = e, r = (0, a(718012).V)(), s = (0, a(153223).u)();
                return "team" === o && "teams" === t ? (0, i.jsx)(a(24884).n, {
                    step: "teamspaces",
                    inAppCalloutStore: r,
                    teamIds: s,
                    renderTooltip: e => (0, i.jsx)(a(715539).f, { ...e
                    }),
                    children: n
                }) : "team" === o && "private" === t ? (0, i.jsx)(a(24884).n, {
                    step: "private",
                    inAppCalloutStore: r,
                    teamIds: s,
                    renderTooltip: e => (0, i.jsx)(a(715539).Ow, { ...e
                    }),
                    children: n
                }) : n
            }
        },
        487016: (e, t, a) => {
            a.d(t, {
                Bi: () => s,
                My: () => r,
                ZM: () => d,
                _M: () => l,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454);
            var i = () => a(388507),
                n = () => a(715144),
                o = () => a(717673);

            function r({
                transaction: e,
                collectionStore: t,
                propertyTemplates: a
            }) {
                var s, l;
                let d = (null == (s = t.getParentBlockStore()) ? void 0 : s.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of a) {
                    let a = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    a && c.push({
                        property: a.id,
                        visible: !(0, i().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let a = (null == (l = t.getPropertyFormatsStore("table_properties")) ? void 0 : l.getValue()) ? ? [],
                            i = new Set(a.map(e => e.property)),
                            o = c.filter(e => !i.has(e.property));
                        0 !== o.length && (0, n().z)({
                            stores: [t],
                            update: {
                                table_properties: [...a, ...o]
                            },
                            transaction: e
                        })
                    }
            }

            function s({
                transaction: e,
                collectionStore: t,
                propertyTemplates: a
            }) {
                let i = [];
                for (let e of a) {
                    let a = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    a && i.push({
                        property: a.id,
                        visible: !0
                    })
                }
                let r = t.getFormat().collection_page_properties ? ? [],
                    l = new Set(r.map(e => e.property)),
                    d = i.filter(e => !l.has(e.property));
                d.length && (0, n().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...r, ...d]
                    },
                    transaction: e
                })
            }

            function l({
                environment: e,
                newPageStore: t,
                result: i
            }) {
                if ("accepted_template" === i.type || "accepted_empty_collection" === i.type) {
                    let n = t.getSpaceId();
                    (0, a(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        perform: n => {
                            let o = t.getTitleValue();
                            if ((0, a(173157).z)({
                                    store: t,
                                    transaction: n,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === i.type && !(0, a(247438).w9s)(o)) {
                                let r = a(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: i.blockId
                                }).getTitleStore();
                                r && a(41403).yr({
                                    environment: e,
                                    transaction: n,
                                    tokens: o,
                                    index: 0,
                                    store: r
                                })
                            }
                            let r = t.getParentStore();
                            if ((null == r ? void 0 : r.table) === a(682956).ev) {
                                let e = r.getContentIds();
                                (0, a(173157).z)({
                                    store: r,
                                    transaction: n,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function d({
                environment: e,
                userAction: t,
                result: i,
                existingCollectionViewBlockStore: n,
                existingCollectionStore: o
            }) {
                if ("canceled" !== i.type) {
                    if ("accepted_empty_collection" === i.type && o) {
                        let n = o.getKeyStore("name"),
                            r = (0, a(247438).x9d)(i.newCollectionTitle);
                        if (n) {
                            let i = o.getSpaceId();
                            (0, a(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: i ? {
                                    spaceWithId: i
                                } : void 0,
                                perform: t => a(41403).R9({
                                    environment: e,
                                    store: n,
                                    transaction: t,
                                    value: r
                                })
                            })
                        }
                    }
                    if (n) {
                        var r;
                        let e = null == (r = (0, a(444610).U)(n)) ? void 0 : r.settingsStore;
                        e && (0, a(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === i.type && null != n && n.isCollectionView() && !(null != n && n.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, a(444610).U)(n),
                            o = n.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === i.collectionId
                            });
                        if (!t || !o) return;
                        (0, a(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: o.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let i = t.id;
                if (!t.isDefined()) {
                    let n = await (0, a(389323).$)({
                        environment: e,
                        blockId: i
                    });
                    if (!n) return;
                    e = await a(274662).T({
                        environment: e,
                        newCurrentUserId: n
                    }), t = new(a(970831)).B(e, {
                        table: a(682956).ev,
                        id: i
                    }), await t.load()
                }
                let n = t.getSpaceId();
                if (!n) throw Error("Space ID not found for collection block");
                let o = (0, a(593303).k)(n);
                if (!o) throw Error(`Space view not found for space ID: ${n}`);
                let r = a(728372).AppStoreSidebarSpaceStore.state;
                (null == r ? void 0 : r.id) !== n && await (0, a(269948).y)({
                    environment: e,
                    spaceViewStore: o
                });
                let s = t.getFormat();
                if ((null == s ? void 0 : s.collection_view_sub_type) === "workflow_template_placeholder" && null != s && s.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: i
                    } = await a(708370).t.load(), n = i(s.placeholder_workflow_template_id);
                    if (!n) throw Error(`Collection template "${s.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: o
                    } = await a(903673).O.load();
                    o({
                        environment: e,
                        collectionTemplate: n,
                        collectionViewBlockStore: t
                    })
                } else(0, a(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: a(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        489561: (e, t, a) => {
            a.d(t, {
                CA: () => r
            }), a(16280), a(898992), a(354520), a(581454);
            let i = Symbol("JSON Schema"),
                n = Symbol("JSON Schema Components"),
                o = Symbol("No JSON Schema"),
                r = (0, a(722371).MU)((0, a(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [n]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [n]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [n]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [n]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [n]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [n]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [n]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [n]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [n]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [n]: {}
                            },
                            a = e[0];
                        return "boolean" == typeof a ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof a ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [n]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [n]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [n]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[i],
                        [n]: e[i][n]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[i]).filter(e => e !== o),
                        [n]: Object.assign({}, ...e.map(e => e[i][n]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[i],
                        [n]: t[i][n]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: r
                    }) => ({
                        type: "object",
                        properties: (0, a(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[i] !== o).map(([e, t]) => [e, t[i]])),
                        ...r && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [n]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[i][n]))
                    }),
                    union: e => {
                        let t = (0, a(381453).hS)(e.map(e => e[i]).filter(e => e !== o), e => JSON.stringify(e)),
                            r = (0, a(381453).hS)(e.map(e => e[i][n]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [n]: Object.assign({}, ...r)
                        } : {
                            anyOf: t,
                            [n]: Object.assign({}, ...r)
                        }
                    },
                    intersection: e => {
                        let t = (0, a(381453).hS)(e.map(e => e[i]).filter(e => e !== o), e => JSON.stringify(e)),
                            r = (0, a(381453).hS)(e.map(e => e[i][n]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [n]: Object.assign({}, ...r)
                        } : {
                            allOf: t,
                            [n]: Object.assign({}, ...r)
                        }
                    },
                    gte: (e, t) => {
                        let a = e[i];
                        return a !== o ? { ...a,
                            minimum: t
                        } : a
                    },
                    gt: (e, t) => {
                        let a = e[i];
                        return a !== o ? { ...a,
                            exclusiveMinimum: t
                        } : a
                    },
                    lte: (e, t) => {
                        let a = e[i];
                        return a !== o ? { ...a,
                            maximum: t
                        } : a
                    },
                    lt: (e, t) => {
                        let a = e[i];
                        return a !== o ? { ...a,
                            exclusiveMaximum: t
                        } : a
                    },
                    maxLength: (e, t) => {
                        let a = e[i];
                        if (a === o) return a;
                        if ("type" in a) {
                            if ("string" === a.type) return { ...a,
                                maxLength: t
                            };
                            else if ("array" === a.type) return { ...a,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let a = e[i];
                        if (a === o) return a;
                        if ("type" in a) {
                            if ("string" === a.type) return { ...a,
                                minLength: t
                            };
                            else if ("array" === a.type) return { ...a,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[i];
                        if (t === o) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[i];
                        if (t === o) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, a(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, a(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var r;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [n]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [n]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [n]: {}
                                }, {
                                    type: "null",
                                    [n]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [n]: {}
                                }],
                                [n]: t[n]
                            };
                            if (r = t, (0, a(722371).Gv)(r) && 0 === Object.keys(r).length) return t;
                            (0, a(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...o) => 1 === o.length && (0, a(722371).Gv)(o[0]) && ("id" in o[0] || "title" in o[0] || "description" in o[0] || "examples" in o[0]) ? (...r) => {
                    let {
                        description: s,
                        examples: l,
                        id: d,
                        title: c
                    } = o[0], u = { ...c && {
                            title: c
                        },
                        description: s,
                        ...l && {
                            examples: l
                        },
                        ...t(...r)
                    };
                    return d && (u = {
                        $ref: `#/components/schemas/${d}`,
                        [n]: { ...u[n],
                            [d]: u
                        }
                    }), {
                        [i]: u,
                        ...a(969475)[e](...r)
                    }
                } : {
                    [i]: t(...o),
                    ...a(969475)[e](...o),
                    describe: t => r[e]({
                        description: t
                    })(...o)
                }]));
            Symbol("Exact empty object ({})"), r.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        496624: (e, t, a) => {
            a.d(t, {
                B: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                position: "absolute",
                marginInlineStart: 4,
                marginTop: 2
            };

            function o(e) {
                var t;
                let {
                    tooltipMessage: o,
                    customContainerStyles: r,
                    tooltipWidth: s,
                    overlayContainerZIndex: l
                } = e, d = (t = s, (0, a(960253).I)(() => ({
                    tooltip: {
                        width: t ? ? "300px"
                    }
                }), [t]));
                return (0, i.jsx)(a(51831).m, {
                    placement: "right",
                    style: d.tooltip,
                    content: () => o,
                    textWrap: !0,
                    overlayContainerZIndex: l,
                    children: e => (0, i.jsx)("span", { ...e,
                        style: { ...n,
                            ...r
                        },
                        children: (0, i.jsx)(a(16275).I, {
                            icon: a(211052).questionMarkCircleSmallIcon,
                            size: "xs",
                            colorVariant: "tertiary"
                        })
                    })
                })
            }
        },
        497857: (e, t, a) => {
            a.d(t, {
                h: () => n
            }), a(296540);
            var i = a(474848);

            function n() {
                return (0, i.jsx)(a(16275).I, {
                    icon: a(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        499267: (e, t, a) => {
            function i(e) {
                let {
                    store: t,
                    toggleSource: a
                } = e;
                t.update(e => {
                    let t = !e.isKeyboardShortcutsOpen;
                    return { ...e,
                        isKeyboardShortcutsOpen: t,
                        toggleSource: t ? a : e.toggleSource,
                        openCount: t ? e.openCount + 1 : e.openCount
                    }
                })
            }

            function n(e) {
                let {
                    store: t
                } = e;
                return t.state.isKeyboardShortcutsOpen
            }
            a.d(t, {
                W: () => n,
                j: () => i
            })
        },
        503473: (e, t, a) => {
            a.d(t, {
                j: () => r
            });
            var i = a(296540),
                n = a(474848);
            let o = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function r(e) {
                let {
                    children: t,
                    style: r,
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
                        ...a(952687).A.props(o, r),
                        ...e,
                        children: t
                    })
                })
            }
        },
        511101: (e, t, a) => {
            a.d(t, {
                m: () => i
            });
            let i = "notion-modal-underlay"
        },
        519707: (e, t, a) => {
            a.d(t, {
                Ks: () => i,
                XZ: () => n,
                sm: () => o,
                xc: () => r
            });
            let i = (0, a(109939).YK)({
                    paymentMethodUnverified: {
                        id: "subscriptions.paymentMethodUnverified",
                        defaultMessage: "Your payment is being processed. Please try again when your payment has completed."
                    },
                    otherPaymentMethod: {
                        id: "subscriptions.otherPaymentMethod",
                        defaultMessage: "Other"
                    },
                    adminOnlyAction: {
                        id: "subscriptions.adminOnlyAction",
                        defaultMessage: "Only workspace owners can perform this action."
                    },
                    iosSubscriptionRestriction: {
                        id: "subscriptions.iosSubscriptionRestriction",
                        defaultMessage: "You’re currently subscribed through an in-app purchase with Apple. To change your subscription, cancel your subscription with Apple first."
                    },
                    androidSubscriptionRestriction: {
                        id: "subscriptions.androidSubscriptionRestriction",
                        defaultMessage: "You’re currently subscribed through an in-app purchase with Google. To change your subscription, cancel your subscription with Google first."
                    },
                    mixedSubscriptionRestriction: {
                        id: "subscriptions.mixedSubscriptionRestriction",
                        defaultMessage: "You’re currently subscribed through Notion and an in-app purchase. To change your subscription, cancel your subscription with your mobile app store first."
                    },
                    galaxyAppRestriction: {
                        id: "subscriptions.galaxyAppRestriction",
                        defaultMessage: "This action is currently not available on the Samsung Galaxy app."
                    }
                }),
                n = (0, a(109939).YK)({
                    approachingBlockLimitTitle: {
                        id: "nudges.approachingBlockLimit.title",
                        defaultMessage: "Upgrade to go unlimited"
                    },
                    approachingBlockLimitDescription: {
                        id: "nudges.approachingBlockLimit.description",
                        defaultMessage: "Continue using Notion to collaborate with others"
                    },
                    approachingBlockLimitTooltip: {
                        id: "nudges.approachingBlockLimit.tooltip",
                        defaultMessage: "You’re reaching the maximum number of free blocks given on your plan ({percentageUsed}). You won’t be able to create more content unless you upgrade to the Plus plan."
                    },
                    reachedBlockLimitTitle: {
                        id: "nudges.reachedBlockLimit.title",
                        defaultMessage: "Keep using Notion"
                    },
                    reachedBlockLimitDescription: {
                        id: "nudges.reachedBlockLimit.description",
                        defaultMessage: "{spaceName} has used 100% of the free blocks in the workspace"
                    },
                    manageMembersCta: {
                        id: "nudges.manageMembers.cta",
                        defaultMessage: "Manage members"
                    },
                    reachedBlockLimitCta: {
                        id: "nudges.reachedBlockLimit.cta",
                        defaultMessage: "Upgrade plan"
                    },
                    reachedBlockLimitCtaForMembers: {
                        id: "spaceSettings.sidebar.button.contactWorkspaceOwner",
                        defaultMessage: "Contact a workspace owner"
                    },
                    reachedBlockLimitTooltip: {
                        id: "nudges.reachedBlockLimit.tooltip",
                        defaultMessage: "You’ve reached the maximum number of free blocks for your plan (100%). You won’t be able to create more content unless you upgrade to the Plus plan."
                    }
                }),
                o = (0, a(109939).YK)({
                    creditUsage: {
                        id: "aiUsageDashboard.creditUsage.usage",
                        defaultMessage: "{usage} / {limit} Notion credits"
                    },
                    creditUsagePublicBeta: {
                        id: "aiUsageDashboard.creditUsage.usagePublicBeta",
                        defaultMessage: "{usage} Notion credits used this month"
                    }
                }),
                r = (0, a(109939).YK)({
                    approachingBlockLimitTitle: {
                        id: "blockLimit.approachingBlockLimit.title",
                        defaultMessage: "Running out of free blocks"
                    },
                    approachingBlockLimitDescription: {
                        id: "blockLimit.approachingBlockLimit.description",
                        defaultMessage: "You’ve used most of this workspace’s 1,000 free blocks"
                    },
                    approachingBlockLimitTooltip: {
                        id: "blockLimit.approachingBlockLimit.tooltip",
                        defaultMessage: "You won’t be able to create new content unless you upgrade to a paid plan"
                    },
                    enteringGracePeriodTitle: {
                        id: "blockLimit.enteringGracePeriod.title",
                        defaultMessage: "{dayCount, plural, one {1 day} other {{dayCount} days}} left to upgrade"
                    },
                    enteringGracePeriodDescription: {
                        id: "blockLimit.enteringGracePeriod.description",
                        defaultMessage: "This workspace is out of free blocks for you and your team"
                    },
                    enteringGracePeriodTooltip: {
                        id: "blockLimit.enteringGracePeriod.tooltip",
                        defaultMessage: "Notion is free & unlimited for workspaces with 1 member"
                    },
                    enteringGracePeriodTooltipSubtitle: {
                        id: "blockLimit.enteringGracePeriod.tooltipDescription",
                        defaultMessage: "You can manage members via the People tab in settings"
                    },
                    afterGracePeriodTitle: {
                        id: "blockLimit.afterGracePeriod.title",
                        defaultMessage: "Keep using Notion"
                    },
                    afterGracePeriodDescription: {
                        id: "blockLimit.afterGracePeriod.description",
                        defaultMessage: "You’ve used all of this workspace’s free blocks"
                    },
                    afterGracePeriodTooltip: {
                        id: "blockLimit.afterGracePeriod.tooltip",
                        defaultMessage: "You can only create new content when you upgrade your plan"
                    },
                    startTrial: {
                        id: "blockLimit.startTrial",
                        defaultMessage: "Start trial"
                    }
                })
        },
        521469: (e, t, a) => {
            function i(e) {
                switch (e) {
                    case "plus":
                        return "plus_expansion_offer";
                    case "business":
                        return "business_expansion_offer";
                    default:
                        return
                }
            }

            function n(e, t) {
                if ("plus" === e) {
                    if ("one_member" === t) return "plus_expansion_one_member";
                    if ("two_member" === t) return "plus_expansion_two_member"
                }
                if ("business" === e) {
                    if ("one_member" === t) return "business_expansion_one_member";
                    if ("two_member" === t) return "business_expansion_two_member"
                }
            }

            function o(e) {
                switch (e) {
                    case "plus_expansion_one_member":
                    case "business_expansion_one_member":
                        return 1;
                    case "plus_expansion_two_member":
                    case "business_expansion_two_member":
                        return 2;
                    default:
                        return 3
                }
            }

            function r(e, t) {
                if (!e) return !1;
                let a = s(e, t);
                return !!a && (a.membersAdded ? ? 0) >= o(t)
            }

            function s(e, t) {
                var a;
                if (e) return null == e || null == (a = e.getSettings()) || null == (a = a.offer_member_count) ? void 0 : a.find(e => e.campaign === t)
            }
            a.d(t, {
                $E: () => n,
                UB: () => i,
                Zy: () => o,
                _w: () => s,
                fd: () => r
            }), a(898992), a(672577)
        },
        531175: (e, t, a) => {
            a.d(t, {
                i: () => i
            });
            async function i(e) {
                let {
                    environment: t,
                    messageKey: i,
                    options: n,
                    metadata: o
                } = e, r = await a(497345).f.load();
                await r.maybeShowPendingMessagesImpl({
                    environment: t,
                    messageKeys: [i],
                    options: n,
                    metadata: o
                })
            }
        },
        542061: (e, t, a) => {
            a.d(t, {
                a: () => r,
                E: () => o
            }), a(16280);
            var i = a(296540);
            a(898992), a(672577), a(640088).Ju.downloadMac, a(640088).Ju.downloadMacUniversal, a(640088).Ju.downloadMacIntel, a(640088).Ju.downloadMacAppleSilicon, a(640088).Ju.downloadWindows, a(640088).Ju.downloadWindowsArm, a(640088).Ju.downloadWindowsMsix, a(640088).Ju.downloadWindowsMsixArm;
            let n = [{
                route: a(640088).Ju.downloadMac,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: a(640088).Ju.downloadMacIntel,
                architecture: "x86",
                operatingSystem: "mac",
                target: "mac"
            }, {
                route: a(640088).Ju.downloadMacUniversal,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: a(640088).Ju.downloadMacAppleSilicon,
                architecture: "arm",
                operatingSystem: "mac",
                target: "macArm64"
            }, {
                route: a(640088).Ju.downloadWindows,
                architecture: "x86",
                operatingSystem: "windows",
                target: "windows"
            }, {
                route: a(640088).Ju.downloadWindowsArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "windowsArm64"
            }, {
                route: a(640088).Ju.downloadWindowsMsix,
                architecture: "x86",
                operatingSystem: "windows",
                target: "msix"
            }, {
                route: a(640088).Ju.downloadWindowsMsixArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "msixArm64"
            }];

            function o() {
                let e = (0, i.useRef)(null),
                    t = (0, a(533992).Y0)();
                return (0, i.useEffect)(() => {
                    r(t).then(t => {
                        e.current = t ? ? null
                    }).catch(e => {
                        throw Error(e)
                    })
                }, [t]), e
            }
            async function r(e) {
                var t;
                if (!("userAgentData" in navigator))
                    if (e.isMac) return a(640088).Ju.downloadMacUniversal;
                    else return a(640088).Ju.downloadWindows;
                let i = navigator.userAgentData,
                    o = await (null == i || null == (t = i.getHighEntropyValues) ? void 0 : t.call(i, ["architecture"])),
                    r = function(e, t) {
                        let a = function(e = "") {
                            let t = e.toLowerCase();
                            return t.startsWith("arm") ? "arm" : t.startsWith("x86") || "intel" === t ? "x86" : null
                        }(e);
                        if (!a || "mac" !== t && "windows" !== t) return null;
                        let i = n.find(e => e.architecture === a && e.operatingSystem === t);
                        return (null == i ? void 0 : i.route) || null
                    }(null == o ? void 0 : o.architecture, e.os);
                return r || null
            }
        },
        553608: (e, t, a) => {
            a.d(t, {
                C8: () => u,
                Dz: () => s,
                GC: () => m,
                GL: () => g,
                YY: () => p,
                dM: () => d,
                h9: () => l,
                jX: () => r,
                oF: () => c,
                uj: () => o
            });
            let i = {
                    JiraSyncInfoPopup: new(a(815048)).O2("JiraSyncInfoPopup", async () => await Promise.all([a.e(75134), a.e(68744)]).then(a.bind(a, 295597))),
                    ImproveJiraSyncPopup: new(a(815048)).O2("ImproveJiraSyncPopup", async () => await Promise.all([a.e(75134), a.e(2686)]).then(a.bind(a, 473119))),
                    JiraDCAuthModal: new(a(815048)).O2("JiraDCAuthModal", async () => await Promise.all([a.e(75134), a.e(17250), a.e(56809), a.e(28763)]).then(a.bind(a, 190229))),
                    ExternalImportAndSyncIndicator: new(a(815048)).O2("ExternalImportAndSyncIndicator", async () => await Promise.all([a.e(75134), a.e(98288)]).then(a.bind(a, 292460))),
                    JiraSyncedAllProjectsTooltip: new(a(815048)).O2("JiraSyncedAllProjectsTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncedAllIssuesTooltip: new(a(815048)).O2("JiraSyncedAllIssuesTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncedDatabaseViewsAndFiltersTooltip: new(a(815048)).O2("JiraSyncedDatabaseViewsAndFiltersTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncSourceTooltip: new(a(815048)).O2("JiraSyncSourceTooltip", async () => await a.e(21446).then(a.bind(a, 417580))),
                    JiraSyncedSettingsToSetupProjectsAndIssuesTooltip: new(a(815048)).O2("JiraSyncedSettingsToSetupProjectsAndIssuesTooltip", async () => await a.e(21446).then(a.bind(a, 417580)))
                },
                n = {
                    JiraSyncTeamSpaceModal: new(a(815048)).O2("JiraSyncTeamSpaceModal", async () => Promise.all([a.e(75134), a.e(40994), a.e(80139), a.e(17250), a.e(28048), a.e(55940), a.e(12560), a.e(33503), a.e(21969), a.e(74145), a.e(56809), a.e(48860), a.e(18682), a.e(79349), a.e(47414), a.e(96579), a.e(21753), a.e(9817), a.e(29447), a.e(75189), a.e(41075), a.e(56188)]).then(a.bind(a, 76948)))
                },
                o = (0, a(815048)._h)(n.JiraSyncTeamSpaceModal, e => e.default),
                r = (0, a(815048)._h)(i.JiraSyncedAllProjectsTooltip, e => e.JiraSyncedAllProjectsTooltip),
                s = (0, a(815048)._h)(i.JiraDCAuthModal, e => e.default),
                l = (0, a(815048)._h)(i.JiraSyncedAllIssuesTooltip, e => e.JiraSyncedAllIssuesTooltip),
                d = (0, a(815048)._h)(i.JiraSyncedDatabaseViewsAndFiltersTooltip, e => e.JiraSyncedDatabaseViewsAndFiltersTooltip),
                c = (0, a(815048)._h)(i.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip, e => e.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip),
                u = (0, a(815048)._h)(i.JiraSyncSourceTooltip, e => e.JiraSyncSourceTooltip),
                p = (0, a(815048)._h)(i.JiraSyncInfoPopup, e => e.JiraSyncInfoPopup),
                m = (0, a(815048)._h)(i.ImproveJiraSyncPopup, e => e.ImproveJiraSyncPopup),
                g = (0, a(815048)._h)(i.ExternalImportAndSyncIndicator, e => e.ExternalImportAndSyncIndicator)
        },
        553635: (e, t, a) => {
            a.d(t, {
                t3: () => r,
                sD: () => s,
                VD: () => l
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var i = a(296540);
            let n = "ai_meetings_notes_custom_instructions",
                o = new Set;

            function r(e = {}) {
                return "on" === function(e = {}) {
                    return a(218744).default.getEligibleGroup({
                        experimentId: n,
                        defaultGroup: "control",
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function s(e = {}) {
                return "on" === function(e = {}) {
                    return (0, a(604306).r)(n, {
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function l(e) {
                let {
                    blockId: t,
                    shouldLog: r
                } = e;
                (0, i.useEffect)(() => {
                    !r || o.has(t) || (o.add(t), a(218744).default.manuallyLogExperimentExposure(n))
                }, [t, r])
            }
        },
        556809: (e, t, a) => {
            a.d(t, {
                a: () => r
            });
            var i = a(296540);

            function n(e) {
                a(561599).A.state.openModals.has(e) && (a(561599).A.state.openModals.delete(e), a(561599).A.emit())
            }
            var o = a(474848);

            function r(e) {
                let {
                    open: t,
                    onOpen: r,
                    transitionAppearance: s = "modal"
                } = e, l = (0, i.useRef)();
                void 0 === l.current && (l.current = a(92513).JW());
                let c = l.current,
                    u = (0, a(682985).uB)(e.store, a(432376).A),
                    p = (0, a(682985).K8)(() => u.state.open, [u]),
                    m = (0, i.useRef)(!1),
                    g = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === s,
                        isShowingTabBar: (0, a(682985).O$)(a(584257).b)
                    }),
                    f = (0, i.useCallback)(() => {
                        if (!m.current && t) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), a(561599).A.state.openModals.has(c) || (a(561599).A.state.openModals.add(c), a(561599).A.emit()), r && r();
                        else m.current && !t && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), n(c));
                        m.current = t
                    }, [c, u, r, t]);
                return (0, i.useEffect)(() => {
                    f()
                }, [f]), (0, a(637030).X)(() => {
                    n(c)
                }), (0, o.jsx)(a(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, o.jsx)(a(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, o.jsx)(a(654979).A, {
                            tag: d,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: g ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var a, i, n;
                                return a = t, i = u, n = e.onClosed, void(a ? i.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (i.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == n || n()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: g,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: u,
                            isWash: e.isWash,
                            transitionAppearance: s
                        })
                    })
                })
            }

            function s({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: i,
                store: n
            }) {
                let r = (0, a(682985).uB)(n, a(432376).A),
                    l = (0, a(682985).K8)(() => r.state.openAnimationCompleted, [r]);
                return t || l || i ? (0, o.jsx)(o.Fragment, {
                    children: e
                }) : null
            }
            let l = i.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: i,
                    isWash: n,
                    ariaLabel: r,
                    ariaLabelledBy: l,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: m,
                    store: g
                }, f) {
                    let b = (0, a(682985).uB)(g, a(432376).A),
                        h = (0, a(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: a(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: i ? a(632079).Tj.popoverWaxPaperBackground : n ? a(632079).Tj.background.secondary : a(632079).Tj.background.elevated,
                                backdropFilter: i ? "blur(40px)" : "none",
                                WebkitBackdropFilter: i ? "blur(40px)" : "none"
                            }
                        }), [c, i, n]);
                    return (0, o.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": r,
                        "aria-labelledby": l,
                        "aria-describedby": d,
                        style: h.dialog,
                        ref: f,
                        children: [e ? (0, o.jsx)(a(226512).R, {
                            onClick: t
                        }) : void 0, (0, o.jsx)(s, {
                            children: u,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: m,
                            store: b
                        })]
                    })
                }),
                d = i.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: i,
                    showCloseIcon: n,
                    onDismiss: r,
                    isWaxPaper: s,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: p,
                    innerStyle: m,
                    children: g,
                    preventHideChildrenWhileOpening: f,
                    style: b,
                    className: h,
                    backgroundStyle: y,
                    transitionAppearance: v,
                    store: _
                }, S) {
                    let w = (0, a(336995).A)(t),
                        x = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, a(722371).HB)(e)
                            }
                        }(v),
                        {
                            mobileTopPadding: k,
                            mobileBottomPadding: M
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, a(533992).v3)();
                            return {
                                mobileTopPadding: (0, a(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, a(571354).n)()
                            }
                        }();
                    return (0, o.jsxs)("div", {
                        style: {
                            paddingTop: k,
                            paddingBottom: M,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...b
                        },
                        ...w,
                        className: h,
                        ref: S,
                        children: [(0, o.jsx)(a(781036).B, {
                            backgroundStyle: y,
                            onDismiss: r
                        }), (0, o.jsx)(a(654979).A, {
                            tag: l,
                            skip: i,
                            visible: e,
                            ...x,
                            forceCompositeLayer: !0,
                            showCloseIcon: n,
                            onDismiss: r,
                            isWaxPaper: s,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: p,
                            style: m,
                            children: g,
                            disableAnimation: i,
                            preventHideChildrenWhileOpening: f,
                            store: _
                        })]
                    })
                })
        },
        559096: (e, t, a) => {
            a.r(t), a.d(t, {
                loadLocalSubtree: () => s
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(803949), a(581454);
            var i = () => a(986939),
                n = () => a(430733),
                o = () => a(832375),
                r = () => a(247438);

            function s(e) {
                let {
                    environment: t,
                    blockId: s,
                    inMemoryRecordCache: l,
                    options: d
                } = e, c = t.currentUser.id, u = a(412951).RecordMap.create(), p = new Set, m = [{
                    pointer: {
                        table: o().evP,
                        id: s
                    },
                    parentId: "doesn't matter"
                }];
                for (; m.length > 0;) {
                    let e = m.shift();
                    if (!e || p.has(e.pointer.id)) continue;
                    let t = s === e.pointer.id,
                        g = function(e) {
                            let t, {
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m,
                                isRootRequest: g
                            } = e;
                            return (0, a(496282).Yt)(s, o().evP) ? t = function(e) {
                                var t, s, l, d, c, u, p, m;
                                let {
                                    pointer: g,
                                    recordMap: f,
                                    inMemoryRecordCache: b,
                                    currentUserId: h,
                                    cursors: y,
                                    cursor: v,
                                    options: _,
                                    isRootRequest: S
                                } = e, w = b.getRecord({
                                    pointer: g,
                                    userId: h
                                }), x = null == w ? void 0 : w.value;
                                if (!x) return _.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: g
                                } : void 0;
                                let k = _.excludeCrdtData ? a(877308).ir(x) : x;
                                if (_.includeLegacyTransclusionBlockValues) {
                                    if (!S && k.parent_id !== v.parentId && !v.isBlockContentChild) return
                                } else if (!S && k.parent_id !== v.parentId) return;
                                if (k.type === a(955630).xd.externalObjectInstance && !_.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: g
                                };
                                if (f.setValue(g, k), !_.skipNavigableChildren) {
                                    for (let e of a(993189).Bj6.fromBlock(k).getCollectionPointers()) {
                                        let t = b.getRecord({
                                            pointer: e,
                                            userId: h
                                        });
                                        if (t) {
                                            if ((null == (c = t.value) ? void 0 : c.parent_table) !== o().evP || (null == (u = t.value) ? void 0 : u.parent_id) !== k.id) continue
                                        } else {
                                            if (_.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        y.push({
                                            pointer: e,
                                            parentId: k.id
                                        })
                                    }
                                    if (k.view_ids)
                                        for (let e of k.view_ids) y.push({
                                            pointer: {
                                                table: o().Gy1,
                                                id: e,
                                                spaceId: k.space_id
                                            },
                                            parentId: k.id
                                        })
                                }
                                if (!_.skipBlockContent && (!_.skipTransclusionContainerChildren || "transclusion_container" !== k.type) && (!_.skipNavigableChildren || !(0, a(955630).$I)(k.type)))
                                    for (let e of a(993189).Bj6.fromBlock(k).getRenderableContentIds()) y.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e
                                        },
                                        parentId: k.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of a(993189).Bj6.fromBlock(k).getNonContentChildren()) y.push({
                                    pointer: {
                                        table: o().evP,
                                        id: e
                                    },
                                    parentId: k.id,
                                    isBlockContentChild: !0
                                });
                                if (k.type === a(955630).xd.externalObjectInstance)
                                    for (let e of (null == (p = k.format) ? void 0 : p.related_external_object_uris_to_instance_ids) && Object.values(null == (m = k.format) ? void 0 : m.related_external_object_uris_to_instance_ids) || []) y.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    });
                                if (!_.skipNavigableChildren && k.properties)
                                    for (let e of Object.values(k.properties).filter(a(722371).O9))
                                        for (let t of e)
                                            for (let e of r().uPN(t)) {
                                                if (r().jIt(e)) {
                                                    let t = r().v55(e);
                                                    y.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: t
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                                if (r().sh$(e)) {
                                                    let t = r().cQR(e),
                                                        a = (0, n().lX)({
                                                            url: t,
                                                            baseUrl: i().A.domainBaseUrl,
                                                            publicDomainName: i().A.publicDomainName
                                                        });
                                                    a && y.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: a
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                                if (r().N53(e)) {
                                                    let t = r().T$c(e);
                                                    t && y.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: t,
                                                            spaceId: k.space_id
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                            }
                                if ("form" === k.type && null != (t = k.format) && t.form_layout_pointer && y.push({
                                        pointer: k.format.form_layout_pointer,
                                        parentId: k.id
                                    }), null != (s = k.format) && s.automation_id && y.push({
                                        pointer: {
                                            table: o().yBS,
                                            id: k.format.automation_id,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    }), null != (l = k.format) && l.workflow_id && y.push({
                                        pointer: {
                                            table: o().C0E,
                                            id: k.format.workflow_id,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    }), k.format && "database_agent_ids" in k.format && Array.isArray(k.format.database_agent_ids))
                                    for (let e of k.format.database_agent_ids) y.push({
                                        pointer: {
                                            table: o().C0E,
                                            id: e,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    });
                                null != (d = k.format) && d.ai_instructions_page_pointer && y.push({
                                    pointer: k.format.ai_instructions_page_pointer,
                                    parentId: k.id
                                })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m,
                                isRootRequest: g
                            }) : (0, a(496282).Yt)(s, o().VlP) ? t = function(e) {
                                var t, a;
                                let {
                                    pointer: i,
                                    recordMap: n,
                                    inMemoryRecordCache: r,
                                    currentUserId: s,
                                    cursors: l,
                                    cursor: d,
                                    options: c
                                } = e;
                                if (!c.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: i
                                };
                                let u = r.getRecord({
                                    pointer: i,
                                    userId: s
                                });
                                if (!(null != u && u.value)) return c.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                if (u.value.parent_id !== d.parentId) return;
                                let p = u.value;
                                for (let e of (n.setValue(i, p), r.forEachRecord({
                                        userId: s,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === o().evP && e && e.parent_id === i.id && e.alive && l.push({
                                                pointer: e.pointer,
                                                parentId: i.id
                                            })
                                        }
                                    }), (null == (t = p.format) ? void 0 : t.automation_ids) ? ? [])) l.push({
                                    pointer: {
                                        table: o().yBS,
                                        id: e,
                                        spaceId: p.space_id
                                    },
                                    parentId: p.id
                                });
                                p.schema && (Object.values(p.schema).forEach(e => {
                                    e && "button" === e.type && e.automation_id && l.push({
                                        pointer: {
                                            id: e.automation_id,
                                            spaceId: p.space_id,
                                            table: o().yBS
                                        },
                                        parentId: p.id
                                    })
                                }), Object.values(p.schema).forEach(e => {
                                    if (null != e && e.default_workflow_id) {
                                        let t = e.default_workflow_id;
                                        l.push({
                                            pointer: {
                                                table: o().C0E,
                                                id: t,
                                                spaceId: p.space_id
                                            },
                                            parentId: d.parentId
                                        })
                                    }
                                })), null != (a = p.format) && a.layout_pointer && l.push({
                                    pointer: p.format.layout_pointer,
                                    parentId: p.id
                                })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, a(496282).Yt)(s, o().Gy1) ? t = function(e) {
                                var t, a;
                                let {
                                    pointer: i,
                                    recordMap: n,
                                    inMemoryRecordCache: o,
                                    currentUserId: r,
                                    cursors: s,
                                    cursor: l,
                                    options: d
                                } = e, c = o.getRecord({
                                    pointer: i,
                                    userId: r
                                });
                                if (!(null != c && c.value)) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                (c.value.parent_id === l.parentId || l.skipParentIdCheck) && ("form_editor" === c.value.type && null != (t = c.value.format) && t.form_block_pointer && s.push({
                                    pointer: c.value.format.form_block_pointer,
                                    parentId: c.value.id
                                }), null != (a = c.value.format) && a.dashboard_layout_pointer && s.push({
                                    pointer: c.value.format.dashboard_layout_pointer,
                                    parentId: c.value.id
                                }), n.setValue(i, c.value))
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, a(496282).Yt)(s, o().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: i,
                                    currentUserId: n,
                                    cursors: r,
                                    cursor: s,
                                    options: l
                                } = e, d = i.getRecord({
                                    pointer: t,
                                    userId: n
                                });
                                if (!(null != d && d.value)) return l.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (d.value.parent_id === s.parentId)
                                    for (let e of (a.setValue(t, d.value), d.value.action_ids ? ? [])) r.push({
                                        pointer: {
                                            table: o().SC1,
                                            id: e,
                                            spaceId: d.value.space_id
                                        },
                                        parentId: d.value.id
                                    })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, a(496282).Yt)(s, o().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: i,
                                    currentUserId: n,
                                    cursors: r,
                                    cursor: s,
                                    options: l
                                } = e, d = i.getRecord({
                                    pointer: t,
                                    userId: n
                                });
                                if (!(null != d && d.value)) return l.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: s.pointer
                                } : void 0;
                                if (d.value.parent_id === s.parentId)
                                    for (let e of (a.setValue(t, d.value), d.value.blocks ? ? [])) r.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e,
                                            spaceId: d.value.space_id
                                        },
                                        parentId: d.value.id
                                    })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, a(496282).Yt)(s, o().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: i,
                                    currentUserId: n,
                                    cursor: o,
                                    options: r
                                } = e, s = i.getRecord({
                                    pointer: t,
                                    userId: n
                                });
                                if (!(null != s && s.value)) return r.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: o.pointer
                                } : void 0;
                                s.value.parent_id === o.parentId && a.setValue(t, s.value)
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursor: p,
                                options: m
                            }) : (0, a(496282).Yt)(s, o().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: i,
                                    recordMap: n,
                                    inMemoryRecordCache: r,
                                    currentUserId: s,
                                    cursors: l,
                                    options: d
                                } = e, c = r.getRecord({
                                    pointer: i,
                                    userId: s
                                }), u = null == c ? void 0 : c.value;
                                if (!u) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                let p = u.parent_id !== e.cursor.parentId ? { ...u,
                                        parent_id: e.cursor.parentId
                                    } : u,
                                    m = ((null == (t = p.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let i = r.getRecord({
                                                pointer: (0, a(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: p.space_id
                                                }),
                                                userId: s
                                            });
                                            return (null == i || null == (t = i.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (p = { ...p,
                                        modules: { ...p.modules,
                                            dashboard_layout_schema: m
                                        }
                                    }, n.setValue(i, p), a(993189).Bj6.fromValue(o().zx0, p).getBlockChildrenPointers())) l.push({
                                    pointer: e,
                                    parentId: i.id
                                });
                                let g = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: o().Gy1,
                                        spaceId: p.space_id
                                    };
                                    return l.push({
                                        pointer: t,
                                        parentId: i.id,
                                        skipParentIdCheck: !0
                                    }), e
                                };
                                (0, a(322268).E)(p.modules, e => {
                                    if ("formQuestion" === e.type) {
                                        let t = {
                                            id: e.formQuestionId,
                                            table: o().lo9,
                                            spaceId: p.space_id
                                        };
                                        l.push({
                                            pointer: t,
                                            parentId: i.id
                                        })
                                    } else if ("view" === e.type) g(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && g(t)
                                })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, a(496282).Yt)(s, o().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: i,
                                    currentUserId: n,
                                    options: o
                                } = e, r = i.getRecord({
                                    pointer: t,
                                    userId: n
                                });
                                if (!(null != r && r.value)) return o.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                a.setValue(t, r.value)
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: u,
                            inMemoryRecordCache: l,
                            currentUserId: c,
                            cursors: m,
                            cursor: e,
                            options: d,
                            isRootRequest: t
                        });
                    if (g) return g;
                    p.add(e.pointer.id)
                }
                return {
                    type: "success",
                    recordMap: u
                }
            }
        },
        561599: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let o = new n,
                r = o;
            (0, a(202146).exposeDebugValue)("GlobalModalStore", o)
        },
        568071: (e, t, a) => {
            a.d(t, {
                O: () => i
            });

            function i(e) {
                (0, a(16822).h)({
                    environment: e,
                    isExpanded: !1,
                    from: "sidebar_unexpand_button",
                    saveDetailsSidebarPreference: !0
                }), (a(550830).default.isVisible() || (0, a(875439).shouldShowLoggedOutPublicSharingSidebar)(e)) && (0, a(713167).V)()
            }
        },
        582471: (e, t, a) => {
            a.d(t, {
                Y: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                o = {
                    position: "relative"
                };

            function r(e) {
                let {
                    iconAndTitle: t,
                    description: r
                } = e;
                return t || r ? (0, i.jsxs)(a(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: o,
                    children: [t, r ? (0, i.jsx)(a(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: n,
                        children: r
                    }) : null]
                }) : null
            }
        },
        583124: (e, t, a) => {
            function i() {
                if (!a(218744).default.checkGate({
                        gateName: "meeting_notes_auto_share_setting"
                    })) return !0;
                let e = a(728372).AppStoreSidebarSpaceViewStore.state,
                    t = null == e ? void 0 : e.getSettings();
                return (null == t ? void 0 : t.disable_auto_share_meeting_notes) !== void 0 && !t.disable_auto_share_meeting_notes
            }

            function n() {
                let e = (0, a(83208).X)("meeting_notes_auto_share_setting"),
                    t = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore);
                return (0, a(682985).K8)(() => {
                    if (!e) return !0;
                    let a = null == t ? void 0 : t.getSettings();
                    return (null == a ? void 0 : a.disable_auto_share_meeting_notes) !== void 0 && !a.disable_auto_share_meeting_notes
                }, [t, e])
            }
            a.d(t, {
                V: () => n,
                W: () => i
            })
        },
        588222: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => n,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                n = (0, a(104509).wt)("arrowChevronSingleRightFillSmall", i, "fillSmall")
        },
        591637: (e, t, a) => {
            a.d(t, {
                a: () => o
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

            function o(e) {
                var t;
                let {
                    caption: o,
                    layout: r,
                    sectionGap: s,
                    secondaryButtonTooltip: l
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !o) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === r ? (0, i.jsxs)(a(4458).VP, {
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
                        }, t)), o ? (0, i.jsx)("div", {
                            style: n.caption,
                            children: o
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
                }) : "horizontal-right" === r ? (0, i.jsxs)(a(4458).fI, {
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
                }) : "horizontal-space-between" === r ? (0, i.jsxs)(a(4458).fI, {
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
                }) : void(0, a(722371).HB)(r)
            }
        },
        597313: (e, t, a) => {
            a.d(t, {
                d: () => r
            });
            var i = a(296540),
                n = a(474848);
            let o = {
                hovered: {
                    background: a(632079).Tj.sidebarItemSelectedBackground
                }
            };

            function r() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    r = (0, a(83208).X)("onboarding_agent_prompt_debug"),
                    l = (0, a(665002).g)(),
                    d = (0, i.useCallback)(() => {
                        (0, a(79266).navigate)({
                            environment: e,
                            url: a(168962).JZ.onboardingAgentDebug
                        })
                    }, [e]);
                return r ? (0, n.jsx)(a(51831).m, {
                    content: () => t.formatMessage(s.tooltip),
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, n.jsx)(a(64960).Ay, { ...e,
                        onClick: d,
                        style: { ...a(132261).DX.baseSidebarItem,
                            ...l && {
                                transition: "none"
                            }
                        },
                        hoveredStyle: o.hovered,
                        children: (0, n.jsx)(a(380559).u, {
                            left: (0, n.jsx)(a(16275).I, {
                                icon: a(890468).sparklesIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: t.formatMessage(s.label)
                        })
                    })
                }) : null
            }
            let s = (0, a(109939).YK)({
                label: {
                    id: "sidebarAgentPromptDebugButton.label",
                    defaultMessage: "Onboarding Agent Debug"
                },
                tooltip: {
                    id: "sidebarAgentPromptDebugButton.tooltip",
                    defaultMessage: "Debug onboarding agent prompt"
                }
            })
        },
        612670: (e, t, a) => {
            a.d(t, {
                F: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    svg: (0, a(474848).jsx)("path", {
                        fillRule: "evenodd",
                        d: "M17.4685918,3.4486694c-.276062-.4232178-.7411499-.6759033-1.2441406-.6759033-.1889648,0-.3743896.0357056-.5512085.1061401L3.0777837,7.8930664c-.40271.1603394-.6936035.5178223-.7687378.9447021s.0762329.8622437.4000244,1.1503906l2.4732056,2.2012329v4.2337646c0,.6617432.793457,1.0004272,1.2713013.5426636l1.9723511-1.8895264,2.0613403,1.8346558c.2311401.2056885.52771.3162842.8310547.3162842.088501,0,.1775513-.0094604.2657471-.0286255.390625-.0849609.71698-.3516235.8781738-.7174683l5.1207275-11.6225586c.2032471-.4614868.1604614-.9884644-.1143799-1.4099121ZM16.4390508,4.3546143l-5.1207275,11.6225586-3.963623-3.52771,5.2460327-5.0794067c.064209-.065918.0716553-.168457.0177002-.243042-.0568237-.0785522-.1638184-.1014404-.2478638-.0530396l-6.562439,3.9990234-2.2680054-2.0185547,12.5956421-5.0142822c.0299683-.0119019.0598755-.017395.0886841-.017395.15979,0,.2867432.1680908.2145996.3318481Z",
                        clipRule: "evenodd"
                    })
                },
                n = (0, a(104509).wt)("mail", i, "default")
        },
        623644: (e, t, a) => {
            a.d(t, {
                NX: () => n,
                gp: () => r,
                h9: () => o,
                i6: () => l,
                rj: () => s,
                tw: () => i
            }), a(581454);
            let i = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                n = ["2022-06-28", "2025-09-03", "2026-03-11"],
                o = "2026-03-11",
                r = "2022-06-28",
                s = "2026-03-11";
            a(489561).CA.literals(...i);
            let l = "2025-09-03"
        },
        629108: (e, t, a) => {
            a.d(t, {
                E: () => i
            });
            let i = a(546605).Store.createValue({
                open: !1
            }, {
                name: "TrialEndModalStore"
            })
        },
        637303: (e, t, a) => {
            a.d(t, {
                u: () => i
            });

            function i(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "template_gallery_public_page_topbar_click",
                        eventProperties: e
                    },
                    opts: {
                        dontWait: !0
                    }
                })
            }
        },
        637847: (e, t, a) => {
            a.d(t, {
                j: () => i
            });

            function i(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "click_mail_sidebar_link",
                        eventProperties: {}
                    }
                })
            }
        },
        639323: (e, t, a) => {
            a.d(t, {
                M: () => i
            });

            function i({
                teamStore: e,
                environment: t
            }) {
                if (a(986939).A.isMobile) return;
                let n = (0, a(646044).p)(e),
                    o = a(791869).A.findDropTargetFromKey(n);
                if (o) {
                    let i = o.getNode();
                    if (!(i instanceof HTMLElement)) return;
                    if (a(862921).A.SidebarScroller) {
                        var r;
                        let n = (null == (r = a(862921).A.SidebarScroller.getNode()) ? void 0 : r.offsetTop) || 0,
                            o = a(862921).A.SidebarScroller.getNode();
                        (0, a(661767).V)({
                            element: o,
                            environment: t,
                            options: {
                                top: i.offsetTop - n,
                                left: 0,
                                behavior: "smooth"
                            }
                        }), a(854722).A.setState(e.id), setTimeout(() => {
                            a(854722).A.state === e.id && a(854722).A.setState(void 0)
                        }, 1500)
                    }
                }
            }
        },
        639938: (e, t, a) => {
            a.d(t, {
                $: () => o,
                V: () => n
            }), a(581454);
            let i = (0, a(109939).YK)({
                permissionDeniedTooltip: {
                    id: "permissions.agentCreation.denied",
                    defaultMessage: "Contact a workspace owner to create agents"
                }
            });

            function n() {
                let e = (0, a(972740).L)(),
                    t = (0, a(876252).$)(),
                    i = (0, a(682985).K8)(() => !!(null == e ? void 0 : e.getZeroRetentionEnabled()), [e]),
                    n = (0, a(83208).X)("agent_creation_permissions"),
                    o = (0, a(83208).X)("custom_agents_allow_hipaa"),
                    r = (0, a(83208).X)("agent_creation_default_owners_only");
                return (0, a(682985).K8)(() => {
                    if (i && !o) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    if (!n) return {
                        canCreate: !0
                    };
                    let s = null == e ? void 0 : e.getModel(),
                        l = null == s ? void 0 : s.getSettings();
                    if (!e || !t || !s || !l) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    let d = (0, a(993077).dp)(e, t.id).getMembershipTypeAsRoleOrNone(),
                        c = a(68809).f.getSpacePermissionGroupIds({
                            spaceId: e.id
                        }),
                        u = (0, a(381453).oE)(Array.from(c).map(t => {
                            let i = (0, a(13717).E)({
                                spaceStore: e,
                                groupId: t
                            });
                            if (i) {
                                let e = i.getSettings();
                                return {
                                    settings: e ? {
                                        can_create_custom_agents: e.can_create_custom_agents
                                    } : void 0
                                }
                            }
                        })),
                        p = {
                            policy: l.custom_agent_creation_policy,
                            userRole: d && "none" !== d ? d : void 0,
                            userPermissionGroups: u,
                            isOwnersOnlyDefaultEnabled: r
                        };
                    return (0, a(322450).K)(p)
                }, [e, t, n, r, i, o])
            }

            function o() {
                let e = n(),
                    t = (0, a(109939).tz)().formatMessage(i.permissionDeniedTooltip);
                return {
                    canCreate: e.canCreate,
                    reason: e.reason,
                    tooltipMessage: t
                }
            }
        },
        646044: (e, t, a) => {
            a.d(t, {
                p: () => i
            });

            function i(e) {
                return `TeamToggle_${e.id}`
            }
        },
        649344: (e, t, a) => {
            a.d(t, {
                v: () => r
            });
            var i = a(296540);
            async function n(e) {
                let {
                    environment: t,
                    query: i,
                    limit: n,
                    spaceId: o
                } = e, r = 0 === i.trim().length ? {
                    field: "lastEdited",
                    direction: "desc"
                } : {
                    field: "relevance"
                }, s = a(821603).N2({
                    isDeletedOnly: !0,
                    navigableBlockContentOnly: !0,
                    excludeTemplates: !1,
                    editedBy: e.editedByIds || [],
                    ancestors: e.ancestorIds || [],
                    inTeams: e.teamspaceIds || []
                }), l = await t.idCreator.getSpaceIdCreator(o), {
                    filters: d,
                    excludedBlockIds: c
                } = (0, a(255139).CT)({
                    peopleBlocksToInclude: "none",
                    spaceIdCreator: l,
                    filters: s,
                    excludedBlockIds: void 0
                }), u = t.api.callApi({
                    eventName: "search",
                    environment: t,
                    data: {
                        type: a(821603).Vz.BlocksInSpace,
                        query: i,
                        filters: d,
                        sort: r,
                        limit: n,
                        spaceId: o,
                        source: "trash",
                        excludedBlockIds: c
                    }
                }), p = await u;
                if ("failed" === p.type) throw p.error; {
                    let {
                        results: e,
                        recordMap: t,
                        total: i
                    } = p.data;
                    return {
                        results: e.map(e => e.id),
                        recordMap: a(412951).RecordMapWithRole.create(t),
                        endOfResultsReached: i === e.length
                    }
                }
            }
            async function o(e) {
                let t = a(728372).AppStoreSidebarSpaceStore.state,
                    i = a(728372).AppStoreCurrentUserStore.state;
                return !!t && !!i && 0 === (await n({
                    environment: e,
                    query: "",
                    limit: 1,
                    spaceId: t.id,
                    ancestorIds: [],
                    editedByIds: [],
                    teamspaceIds: []
                })).results.length
            }

            function r({
                environment: e
            }) {
                let t = (0, a(682985).K8)(() => a(198125).Ay.state.isTrashEmpty, []),
                    n = (0, a(83208).X)("hide_sidebar_inbox_and_trash"),
                    s = (0, a(682985).K8)(() => {
                        var t;
                        let i = (0, a(904434).R$)(e);
                        return (null == i || null == (t = i.getSettings()) ? void 0 : t.adoption_sidebar_trash) ? ? !1
                    }, [e]),
                    [{
                        value: l
                    }] = (0, a(97668).Yb)(async () => !!s || !n || !await o(e), [e, s, n]);
                return (0, i.useEffect)(() => {
                    let i;
                    n && !s && !t && (i = (0, a(904434).R$)(e)) && (0, a(377796).createAndCommit)({
                        environment: e,
                        userAction: "userSettingsActions.markAdoptionTrashShown",
                        canUndo: !1,
                        cellTarget: "main",
                        perform: e => {
                            (0, a(862759).m)({
                                userSettingsStore: i,
                                transaction: e,
                                data: {
                                    adoption_sidebar_trash: !0
                                }
                            })
                        }
                    })
                }, [n, s, t, e]), !n || !t || l || s
            }
            a(581454)
        },
        651443: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarCard: () => r
            });
            var i = a(296540),
                n = a(474848);
            let o = {
                position: "sticky",
                bottom: 0,
                marginTop: "auto"
            };

            function r(e) {
                let t = (0, a(853284).U)(),
                    r = (0, a(972740).L)(),
                    s = null == r ? void 0 : r.id,
                    l = (0, i.useMemo)(() => (0, a(64273).nc)(), []),
                    d = (0, a(226309)._3)({
                        spaceId: s
                    }),
                    c = (0, a(387012).F)({
                        billingData: d,
                        permissionsInviteStore: l,
                        spaceStore: r
                    }),
                    u = (0, i.useMemo)(() => (null == c ? void 0 : c.type) === "card" ? (null == c ? void 0 : c.component()) ? ? void 0 : void 0, [c]);
                return (0, n.jsx)("div", {
                    style: o,
                    children: t ? u : (0, n.jsx)(a(682738).MaybeInAppActivityRenderer, {
                        children: u
                    })
                })
            }
        },
        651755: (e, t, a) => {
            a.d(t, {
                q: () => n
            });
            var i = a(296540);

            function n(e, t) {
                let n = (0, a(972740).L)(),
                    {
                        showMembersButton: o,
                        canRequestMembers: r
                    } = (0, a(682985).K8)(() => {
                        if (!n || (0, a(916804).I)(n) || !t) return {
                            showMembersButton: !1,
                            canRequestMembers: !1
                        };
                        let e = !n.canEditMembership() && !n.getDisableMembershipRequests() && (0, a(724175).x)();
                        return {
                            showMembersButton: n.canEditMembership() || e,
                            canRequestMembers: e
                        }
                    }, [n, t]);
                return (0, i.useCallback)(() => {
                    n && o && (n.canEditMembership() && (null == t || t.setState({ ...t.state,
                        modalOpen: !0
                    }), a(179701).vX({
                        type: "invite",
                        from: e
                    })), r && (a(310961).A.open(), a(179701).vX({
                        type: "request",
                        from: e
                    })))
                }, [n, o, r, t, e])
            }
        },
        666236: (e, t, a) => {
            a.d(t, {
                P: () => i
            });

            function i(e) {
                let {
                    environment: t
                } = e;
                (0, a(79266).navigate)({
                    environment: t,
                    url: a(168962).JZ.marketplace,
                    redirect: !1
                })
            }
        },
        717885: (e, t, a) => {
            a.d(t, {
                a: () => i
            });

            function i(e) {
                let {
                    environment: t
                } = e, [{
                    status: i,
                    error: n,
                    value: o
                }] = (0, a(97668).Yb)(async () => {
                    let e = await t.api.callMainCellApi({
                        eventName: "getEmailDomainSettings",
                        environment: t,
                        data: {}
                    });
                    if ("success" === e.type) return e.data;
                    if ("failed" !== e.type) return (0, a(722371).HB)(e);
                    throw e.error
                }, [t]);
                return {
                    loading: "pending" === i || "idle" === i,
                    error: n,
                    isNotionMailDisabled: !!(null == o ? void 0 : o.settings.disable_notion_mail)
                }
            }
        },
        724175: (e, t, a) => {
            a.d(t, {
                x: () => i
            });

            function i() {
                return (0, a(881016).d)()
            }
        },
        725571: (e, t, a) => {
            a.d(t, {
                S: () => r,
                g: () => n
            }), a(296540);
            var i = a(474848);
            let n = 8,
                o = {
                    container: {
                        backgroundColor: "transparent",
                        margin: 8,
                        display: "flex"
                    },
                    card: {
                        maxWidth: 232,
                        minWidth: 232,
                        borderRadius: 12,
                        border: `1px solid ${a(632079).Tj.border.primary}`,
                        boxShadow: "0px 12px 36px -6px rgba(29, 27, 22, 0.08)",
                        position: "relative",
                        backgroundColor: a(632079).Tj.background.elevated
                    },
                    dismissButton: {
                        position: "absolute",
                        top: 12,
                        insetInlineEnd: 12,
                        width: 24,
                        height: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 12,
                        background: a(632079).Tj.background.elevated
                    },
                    dismissButtonHover: {
                        background: a(632079).Tj.whiteButtonHoveredBackground
                    },
                    image: {
                        background: "white",
                        borderStartStartRadius: 12,
                        borderStartEndRadius: 12,
                        alignSelf: "stretch",
                        height: 142,
                        width: "100%",
                        objectFit: "cover"
                    },
                    badge: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 16,
                        padding: "0px 4px",
                        gap: 2,
                        borderRadius: 4,
                        background: a(632079).Tj.blue.background.secondaryTranslucent,
                        width: "fit-content"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function r(e) {
                let {
                    title: t,
                    body: n,
                    button: r,
                    imageUrl: s,
                    onDismiss: l,
                    badge: d
                } = e, c = (0, a(109939).tz)();
                return (0, i.jsx)("div", {
                    style: o.container,
                    children: (0, i.jsxs)(a(4458).VP, {
                        style: o.card,
                        className: "autolayout-fill-width",
                        children: [(0, i.jsx)(a(989059).A, {
                            src: s,
                            style: o.image
                        }), (0, i.jsxs)(a(4458).VP, {
                            gap: 6,
                            paddingBlock: 12,
                            paddingInlineEnd: 16,
                            paddingInlineStart: 12,
                            style: o.positionRelative,
                            children: ["string" == typeof d ? (0, i.jsx)("div", {
                                style: o.badge,
                                children: (0, i.jsx)(a(111010).D, {
                                    styleKey: "captionSmMedium",
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary",
                                    children: d
                                })
                            }) : d, (0, i.jsx)(a(111010).D, {
                                styleKey: "bodySemibold",
                                colorVariant: "primary",
                                children: t
                            }), (0, i.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: n
                            })]
                        }), (0, i.jsx)(a(4458).VP, {
                            paddingInline: 12,
                            paddingBottom: 12,
                            style: o.positionRelative,
                            children: (0, i.jsx)(a(548436).A, {
                                size: "md",
                                onClick: () => r.onClick(),
                                children: (0, i.jsx)(a(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: r.text
                                })
                            })
                        }), l ? (0, i.jsx)(a(374533).A, {
                            ariaLabel: c.formatMessage({
                                id: "dismiss.dismissButton.label",
                                defaultMessage: "Dismiss"
                            }),
                            hoveredStyle: o.dismissButtonHover,
                            icon: a(25094).xMarkSmallIcon,
                            onClick: l,
                            style: o.dismissButton
                        }) : void 0]
                    })
                })
            }
        },
        726342: (e, t, a) => {
            a.d(t, {
                u: () => i
            });

            function i(e) {
                return e instanceof a(681735).h || e instanceof a(695906).SpaceStore || e instanceof a(970831).B
            }
        },
        726546: (e, t, a) => {
            a.d(t, {
                E: () => n
            });
            var i = a(296540);

            function n(e) {
                let t, n, {
                        type: o,
                        analyticsEntrypoint: r,
                        entrypoint: s,
                        isOptimisticUpsell: l
                    } = e,
                    d = (0, a(972740).L)(),
                    c = null == d ? void 0 : d.id,
                    u = (0, a(345776).T)(),
                    p = (0, a(226309).lh)({
                        spaceId: c
                    }),
                    m = (0, a(985435).y)(p);
                if ("product" !== o || (0, a(192159).eh)(p, e.product)) {
                    if ("feature" === o && (l || !(0, a(94418).e2)(e.featureAvailability))) {
                        var g;
                        let a = null == (g = e.featureAvailability) ? void 0 : g.upsell;
                        (null == a ? void 0 : a.type) === "product" && (t = a.product)
                    }
                } else t = e.product;
                t && (0, a(880280).rU)(t) && (n = t);
                let {
                    requests: f
                } = (0, a(478530).I)({
                    spaceId: c
                }), [b, h] = (0, a(243326).k)({
                    feature: n,
                    requests: f,
                    userId: u
                }), y = m && "unrequested" === b, v = (0, i.useCallback)(() => {
                    if (!n || !y) return a(763230).lQ;
                    (0, a(104310).u)({
                        event: {
                            eventName: "upgrade_request_button_clicked",
                            eventProperties: {
                                feature: n,
                                entrypoint: r
                            }
                        }
                    }), a(839250).Q.update(e => ({
                        open: !0,
                        feature: n,
                        userId: u,
                        setRequestState: h,
                        entrypoint: s
                    }))
                }, [y, n, r, u, h, s]);
                return n ? {
                    openModal: v,
                    requestState: b,
                    canUserRequestUpgrade: y,
                    isUserEligibleToRequestUpgrade: m,
                    userHasPendingRequest: "pending" === b
                } : {
                    openModal: v,
                    requestState: "unrequested",
                    canUserRequestUpgrade: !1,
                    isUserEligibleToRequestUpgrade: !1,
                    userHasPendingRequest: !1
                }
            }
        },
        739422: (e, t, a) => {
            a.d(t, {
                l: () => i
            });
            let i = new(a(245541)).R({
                key: "helpButtonReleaseNotes",
                namespace: a(274919).Bq,
                important: !1,
                trackingType: "necessary"
            })
        },
        741489: (e, t, a) => {
            a.d(t, {
                j: () => n
            }), a(296540);
            var i = a(474848);

            function n({
                title: e,
                titleId: t,
                byline: o,
                bylineId: r,
                badge: s
            }) {
                return (0, i.jsxs)(a(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, i.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, i.jsx)(a(111010).D, {
                            id: t,
                            styleKey: a(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), s]
                    }), o ? (0, i.jsx)(a(111010).D, {
                        id: r,
                        styleKey: a(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: o
                    }) : void 0]
                })
            }
        },
        746204: (e, t, a) => {
            a.d(t, {
                w: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                n = (0, a(104509).wt)("arrowChevronSingleLeftFill", i, "fill")
        },
        747754: (e, t, a) => {
            a.r(t), a.d(t, {
                PublicPageSidebarContent: () => s
            }), a(296540);
            var i = a(474848);
            let n = {
                    height: "100%"
                },
                o = {
                    display: "block"
                };

            function r(e) {
                let t = (0, a(682985).uB)(void 0, a(593423).A),
                    r = (0, a(533992).Y0)(),
                    {
                        spaceStore: s,
                        sectionLabel: l = (0, i.jsx)(a(109939).sA, {
                            id: "publicPageSidebarScrollableOutliner.templateSectionLabel",
                            defaultMessage: "Template includes"
                        }),
                        rootBlockId: d
                    } = e,
                    c = (0, a(682985).K8)(() => {
                        var e;
                        return null == (e = a(686494).A.state.publicPageData) ? void 0 : e.spaceId
                    }, []),
                    u = (0, a(682985).O$)(a(728372).AppStoreMainEditorCurrentBlockStore),
                    p = (0, a(682985).K8)(() => u && d && c ? [a(970831).B.createChildStore(u, {
                        table: a(832375).evP,
                        id: d,
                        spaceId: c
                    })] : [], [u, d, c]),
                    m = (0, a(960253).I)(() => ({
                        scrollBorderContainer: {
                            width: r.isPhone ? void 0 : "calc(100% - 1px)"
                        }
                    }), [r.isPhone]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: m.scrollBorderContainer,
                        children: (0, i.jsx)(a(292239).A, {
                            scrollerStore: t,
                            type: "top"
                        })
                    }), (0, i.jsx)(a(126767).H, {
                        type: a(644154).A.Y,
                        store: t,
                        style: n,
                        children: (0, i.jsx)(a(615096).ty, {
                            type: a(171231).yy,
                            from: "main_sidebar",
                            sectionLabel: l,
                            shouldPersistToggleState: !0,
                            spaceStore: s,
                            spaceViewStore: void 0,
                            showAddButton: !1,
                            labelTooltip: null,
                            renderSidebar: () => (0, i.jsx)(a(770275).T, {
                                id: a(171231).yy,
                                type: a(171231).yy,
                                childStores: p,
                                parentStore: void 0,
                                disabled: !0,
                                style: o,
                                itemDepth: 0,
                                itemOpenByDefault: !0,
                                "aria-labelledby": "template-includes",
                                isHeaderless: !1,
                                from: "main_sidebar"
                            })
                        })
                    }, a(171231).yy)]
                })
            }

            function s(e) {
                var t;
                let n = (0, a(682985).O$)(a(728372).AppStoreMainEditorCurrentBlockStore),
                    o = (0, a(682985).K8)(() => a(686494).A.state.publicPageData, []),
                    s = (0, a(682985).K8)(() => {
                        if (n && null != o && o.spaceId) return a(695906).SpaceStore.createChildStore(n, {
                            table: a(832375).NXh,
                            id: o.spaceId
                        })
                    }, [n, o]);
                return s ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a(940907).e, {}), (0, i.jsx)(r, {
                        spaceStore: s,
                        rootBlockId: null == o || null == (t = o.template) ? void 0 : t.blockId
                    })]
                }) : null
            }
        },
        752153: (e, t, a) => {
            function i(e, t) {
                return n(l(e, t))
            }

            function n(e) {
                return void 0 !== e && (e === a(212169).q_ || e === a(212169).YD)
            }

            function o(e, t) {
                if (n(t)) return;
                let i = a(212169).c$[e],
                    o = i.steps.findIndex(e => e.id === t);
                return -1 === o ? i.steps[0].id : o === i.steps.length - 1 ? a(212169).q_ : i.steps[o + 1].id
            }

            function r(e, t) {
                let a = l(e, t);
                if (!(!a || n(a))) return o(t, a)
            }

            function s(e, t) {
                let i = l(e, t);
                if (i) {
                    var o;
                    let e = a(212169).c$[t];
                    if (n(i)) return null == (o = e.steps.at(-1)) ? void 0 : o.id;
                    let r = e.steps.findIndex(e => e.id === i);
                    return -1 !== r && 0 !== r ? e.steps[r - 1].id : void 0
                }
            }

            function l(e, t) {
                var i;
                if (!e) return;
                let n = ((null == (i = e.getSettings()) ? void 0 : i.tutorials) || {})[t];
                return void 0 === n ? a(212169).c$[t].steps[0].id : n
            }
            a.d(t, {
                KD: () => s,
                gt: () => l,
                i9: () => r,
                ll: () => n,
                tb: () => o,
                x$: () => i
            }), a(18107), a(967357)
        },
        755185: (e, t, a) => {
            function i(e = {}) {
                var t;
                let {
                    utm_source: n,
                    utm_campaign: o,
                    utm_medium: r,
                    utm_content: s,
                    utm_term: l
                } = e, d = a(728372).AppStoreCurrentUserStore.state, c = null == d ? void 0 : d.id, u = null == d ? void 0 : d.getEmail(), p = (null == d || null == (t = d.getFullName(a(962299).A.intl)) ? void 0 : t.trim()) || "", m = p, g = "", f = p.indexOf(" "); - 1 !== f && (m = p.slice(0, f), g = p.slice(f + 1));
                let b = (0, a(328765).S)(),
                    h = null == b ? void 0 : b.getSubscriptionTier();
                a(251953).M.setState({ ...a(251953).M.state,
                    isModalOpen: !0,
                    userId: c,
                    email: u,
                    firstName: m,
                    lastName: g,
                    plan: h,
                    utm_source: n,
                    utm_campaign: o,
                    utm_medium: r,
                    utm_content: s,
                    utm_term: l
                })
            }

            function n(e) {
                let {
                    environment: t
                } = e;
                a(251953).M.setState({ ...a(251953).M.state,
                    isModalOpen: !1
                });
                let i = new URL(window.location.href);
                i.searchParams.delete("setupSessions"), i.searchParams.delete("User-ID"), i.searchParams.delete("email"), i.searchParams.delete("firstName"), i.searchParams.delete("lastName"), i.searchParams.delete("utm_source"), i.searchParams.delete("utm_campaign"), i.searchParams.delete("utm_medium"), i.searchParams.delete("utm_content"), i.searchParams.delete("utm_term"), (0, a(79266).navigate)({
                    environment: t,
                    url: i.toString()
                })
            }
            a.d(t, {
                M: () => n,
                w: () => i
            }), a(814603), a(147566), a(198721)
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
        774073: (e, t, a) => {
            function i() {
                var e;
                let t = a(728372).AppStoreSidebarSpaceStore.state;
                return (null == t || null == (e = t.getSettingsStore()) || null == (e = e.getKeyStore("audio_consent_on_transcription")) ? void 0 : e.getValue()) ? ? !1
            }

            function n() {
                var e;
                let t;
                if (!a(728372).AppStoreSidebarSpaceViewStore.getState()) return !1;
                let n = i(),
                    o = !!(t = a(728372).AppStoreSidebarSpaceViewStore.getState()) && ((null == (e = t.getSettings()) ? void 0 : e.audio_consent_on_transcription) ? ? !0);
                return n || o
            }

            function o() {
                return (0, a(682985).K8)(() => n(), [])
            }

            function r() {
                return (0, a(682985).K8)(() => (function() {
                    var e;
                    if (!n()) return !1;
                    if (i()) return !0;
                    let t = a(728372).AppStoreSidebarSpaceViewStore.getState();
                    return !!(null == t || null == (e = t.getSettings()) ? void 0 : e.audio_consent_nux_dismissed_v2)
                })(), [])
            }

            function s(e) {
                let {
                    state: t,
                    canUse: n,
                    dismissedAnnotations: o
                } = e;
                return !(!n || i() || o.includes("audio-consent-nux")) && !!(0, a(869708).ne)() && "initial" === t.state
            }

            function l(e) {
                let {
                    environment: t,
                    state: n,
                    canUse: o,
                    dismissedAnnotations: r,
                    store: s
                } = e;
                if (!o || i() || r.includes("audio-consent-nux") || "idle" !== n.state && "summarizing" !== n.state) return !1;
                let l = t.currentUser.id;
                return !!l && (0, a(869708).vX)(s, l)
            }
            a.d(t, {
                L0: () => l,
                Nt: () => r,
                R: () => s,
                Ru: () => i,
                f1: () => o,
                yz: () => n
            })
        },
        776371: (e, t, a) => {
            function i(e) {
                let {
                    billingData: t,
                    memberCount: i
                } = e, n = (0, a(192159).AI)(t), o = (0, a(262166).dL)(n), r = (0, a(262166).sP)(n);
                return o && i < 5 ? "invite" : o ? "upgrade" : i < 5 && !r ? "invite" : "none"
            }

            function n(e) {
                let t = (0, a(533992).v3)(),
                    n = (0, a(226309).lh)({
                        spaceId: e
                    }),
                    o = (0, a(855361).S)({
                        environment: t,
                        spaceId: e
                    }) ? ? 1;
                return n ? i({
                    billingData: n,
                    memberCount: o
                }) : "none"
            }
            a.d(t, {
                w: () => n,
                x: () => i
            })
        },
        781036: (e, t, a) => {
            a.d(t, {
                B: () => o
            });
            var i = a(296540),
                n = a(474848);

            function o({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, i.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, a(960831).j)(!0)
                    }), a(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, a(960831).j)(!1), a(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let r = (0, a(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: t
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: a(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, n.jsx)("div", {
                    role: "presentation",
                    style: r.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: a(511101).m
                })
            }
        },
        786221: (e, t, a) => {
            a.d(t, {
                HL: () => u,
                L5: () => c,
                Pl: () => L,
                parseCSV: () => N,
                ph: () => d
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(823215), a(354520), a(672577), a(430670), a(803949), a(581454), a(908872), a(737550);
            var i = () => a(627179),
                n = () => a(773352),
                o = () => a(247438);
            let r = "PartialMatch",
                s = "FullMatch",
                l = (0, a(109939).YK)({
                    titleColumnName: {
                        id: "database.titleColumn.name",
                        defaultMessage: "Title"
                    },
                    genericColumnName: {
                        id: "database.genericColumn.name",
                        defaultMessage: "Column {columnNumber}"
                    }
                });

            function d(e) {
                let {
                    table: t,
                    deps: {
                        intl: i,
                        randomShortID: n,
                        isPhoneNumber: r
                    },
                    options: {
                        useCsvAdaptiveSchema: s,
                        addHeadersToCollectionEnabled: d
                    }
                } = e, c = function(e, t, i, n, o = !1, r, s, d) {
                    var c;
                    let g = (e = e.filter(e => e.some(e => !!(e.text || "").trim()))).length > 0 ? e[0].length : 0,
                        f = e.map((e, t) => ({
                            row: e,
                            rowIndex: t
                        })).filter(({
                            row: e
                        }) => e.length !== g);
                    if (f.length > 0) {
                        let e = f[0];
                        throw new(a(101787)).yI4("CsvImportError", {
                            data: {},
                            clientData: {
                                type: "csv_import_inconsistent_columns",
                                messageValues: {
                                    numTitleColumns: g,
                                    numBadRows: f.length,
                                    firstBadRowIndex: e.rowIndex + 1,
                                    firstBadRow: JSON.stringify(e.row.map(e => e.text)),
                                    firstBadRowLength: e.row.length
                                }
                            }
                        })
                    }
                    let b = null == (c = e[0]) ? void 0 : c.length;
                    null == r || r.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(b));
                    let h = null == s ? void 0 : s.columnHeaders,
                        v = void 0 !== h && h.length > 0,
                        S = [];
                    v ? (S = h.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != s && s.useFirstRowAsHeaders && e.shift()) : 1 === e.length || d ? S = e[0].map((e, a) => t.formatMessage(l.genericColumnName, {
                        columnNumber: a + 1
                    })) : e.length > 1 && (S = e[0].map(e => e.text), e.shift());
                    let w = e,
                        {
                            types: k,
                            schema: M,
                            pages: I
                        } = v && h ? function(e) {
                            let {
                                body: t,
                                intl: i,
                                randomShortID: n,
                                headerTitles: o,
                                headersMetadata: r,
                                isPreTypedCSV: s,
                                csvEvalContext: l
                            } = e, d = performance.now(), {
                                types: c,
                                notToImportColumnIndex: u
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: i,
                                    randomShortID: n
                                } = e, o = [];
                                return {
                                    types: i.flatMap((e, i) => {
                                        if (e.doNotImport) return o.push(i), [];
                                        let r = a(763230).D_;
                                        return "checkbox" === e.propertyType ? r = e => y(e) : "number" === e.propertyType ? r = e => _(e) : "date" === e.propertyType && "format" in e ? r = a => x(a, t, e.format) : "date" === e.propertyType && (r = e => x(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : n(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: r
                                        }]
                                    }),
                                    notToImportColumnIndex: o
                                }
                            }({
                                intl: i,
                                columns: r,
                                randomShortID: n
                            }), g = performance.now() - d;
                            null == l || l.set("columnTypeInferenceTimeTakenMS", g);
                            let {
                                pages: f,
                                selectPropertyOptions: b
                            } = m({
                                body: t,
                                types: c,
                                isPreTypedCSV: s,
                                notToImportColumnIndex: u
                            });
                            if (b)
                                for (let e of c) b[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: i,
                                        propertyType: n
                                    } = e;
                                    return ("multi_select" === n ? i.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : i.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, a) => a.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
                                        id: t(),
                                        value: e,
                                        color: (0, a(326044).Z)([])
                                    }))
                                }({
                                    randomShortID: n,
                                    optionValues: b[e.id],
                                    propertyType: e.schema.type
                                }));
                            let {
                                schema: h
                            } = p({
                                body: t,
                                intl: i,
                                randomShortID: n,
                                headers: o,
                                types: c,
                                isPreTypedCSV: s
                            });
                            return {
                                types: c,
                                schema: h,
                                pages: f
                            }
                        }({
                            body: w,
                            intl: t,
                            randomShortID: i,
                            headerTitles: S,
                            headersMetadata: h,
                            isPreTypedCSV: v,
                            csvEvalContext: r
                        }) : function(e) {
                            let {
                                body: t,
                                intl: a,
                                randomShortID: i,
                                isPhoneNumber: n,
                                useCsvAdaptiveSchema: o,
                                headers: r,
                                isPreTypedCSV: s,
                                csvEvalContext: l
                            } = e, d = performance.now(), {
                                types: c
                            } = u({
                                body: t,
                                intl: a,
                                randomShortID: i,
                                isPhoneNumber: n,
                                useCsvAdaptiveSchema: o,
                                csvEvalContext: l
                            }), g = performance.now() - d;
                            null == l || l.set("columnTypeInferenceTimeTakenMS", g);
                            let {
                                schema: f
                            } = p({
                                body: t,
                                intl: a,
                                randomShortID: i,
                                headers: r,
                                types: c,
                                isPreTypedCSV: s
                            }), {
                                pages: b
                            } = m({
                                body: t,
                                types: c,
                                isPreTypedCSV: s
                            });
                            return {
                                types: c,
                                schema: f,
                                pages: b
                            }
                        }({
                            body: w,
                            intl: t,
                            randomShortID: i,
                            isPhoneNumber: n,
                            useCsvAdaptiveSchema: o,
                            headers: S,
                            isPreTypedCSV: v,
                            csvEvalContext: r
                        });
                    return {
                        schema: M,
                        types: k,
                        pages: I
                    }
                }(t, i, n, r, s, e.csvEvalContext, e.metadata, d);
                return function(e) {
                    let {
                        actor: t,
                        blockType: i,
                        root: n,
                        parent: r,
                        name: s,
                        format: l,
                        deps: {
                            randomID: d,
                            spaceIdCreator: c,
                            addFileIdsToBlock: u,
                            createCollectionAsyncWithStatusLabel: p
                        },
                        options: {
                            ignoreBlockCount: m,
                            legacyNonCrdt: g
                        },
                        pages: f,
                        schema: b,
                        columnIds: h
                    } = e, y = e.collectionId ? ? (null == c ? void 0 : c.idInSavedSpace(a(46241).V)) ? ? d(), v = e.collectionViewId ? ? (null == c ? void 0 : c.idInSavedSpace(a(435544).G)) ? ? d(), _ = [], S = [], w = [], {
                        operations: x
                    } = a(993189).WBy.create({
                        id: y,
                        parent: n.existing ? n.record.pointer : {
                            id: n.id,
                            table: a(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        name: o().x9d(s),
                        schema: b,
                        format: {
                            collection_page_properties: a(381453).oE(h.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...p && {
                                sync_state: {
                                    syncing: !0,
                                    last_synced_at: Date.now()
                                },
                                static_import_collection_type: a(565546).IE.CsvImport
                            }
                        },
                        createdBy: t
                    });
                    _.push(...x);
                    let k = {
                            id: n.existing ? n.record.id : n.id,
                            type: i,
                            collection_id: y,
                            format: {
                                collection_pointer: {
                                    table: a(46241).V,
                                    id: y,
                                    spaceId: r.spaceId
                                }
                            },
                            view_ids: [v],
                            createdBy: t,
                            parentPointer: r,
                            space_id: r.spaceId
                        },
                        {
                            createOrUpdateBlockOperations: M
                        } = a(877308).Rf({
                            blockModelArgs: k,
                            existingBlock: n.existing ? n.record : void 0,
                            legacyNonCrdt: g
                        });
                    if (_.push(...M), p) {
                        let {
                            operations: e
                        } = a(993189).lqf.create({
                            id: v,
                            type: "table",
                            name: "Show All",
                            parent: n.existing ? n.record.pointer : {
                                id: n.id,
                                table: a(682956).ev,
                                spaceId: r.spaceId
                            },
                            space_id: r.spaceId,
                            format: {
                                collection_pointer: (0, a(9247).Z8)({
                                    collectionId: y,
                                    spaceId: r.spaceId
                                }),
                                table_properties: a(381453).oE(h.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...l
                            },
                            createdBy: t
                        });
                        _.push(...e)
                    }
                    let I = function(e) {
                        let {
                            actor: t,
                            collectionId: i,
                            spaceId: n,
                            pages: o,
                            randomID: r,
                            spaceIdCreator: s,
                            options: l
                        } = e;
                        return o.map(o => {
                            let d = (null == s ? void 0 : s.idInSavedSpace(a(682956).ev)) ? ? r(),
                                {
                                    model: c,
                                    operations: u
                                } = a(993189).zgg.create({
                                    id: d,
                                    parentPointer: {
                                        id: i,
                                        table: a(46241).V,
                                        spaceId: n
                                    },
                                    space_id: n,
                                    type: a(955630).xd.page,
                                    createdBy: t,
                                    properties: o,
                                    ...l.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                p = [...u];
                            if (e.addFileIdsToBlock) {
                                let e = (0, a(781539).c)(c, "", "").fileIds;
                                e.length > 0 && p.push(a(488307).op.update({
                                    pointer: c.pointer,
                                    path: [],
                                    args: {
                                        file_ids: e.map(e => e.id)
                                    }
                                }))
                            }
                            return {
                                id: d,
                                operations: p
                            }
                        })
                    }({
                        actor: t,
                        collectionId: y,
                        addFileIdsToBlock: u,
                        spaceId: r.spaceId,
                        pages: f,
                        randomID: d,
                        spaceIdCreator: c,
                        options: {
                            ignoreBlockCount: m
                        }
                    });
                    for (let {
                            operations: e
                        } of I) S.push(...e);
                    let {
                        operations: C
                    } = a(993189).lqf.create({
                        id: v,
                        type: "table",
                        name: "Show All",
                        parent: n.existing ? n.record.pointer : {
                            id: n.id,
                            table: a(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        format: {
                            collection_pointer: (0, a(9247).Z8)({
                                collectionId: y,
                                spaceId: r.spaceId
                            }),
                            table_properties: a(381453).oE(h.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...l
                        },
                        page_sort: I.map(e => e.id).slice(0, a(9247).WF),
                        createdBy: t
                    });
                    if (S.push(...C), !p) return {
                        operations: [..._, ...S]
                    }; {
                        let e = {
                                table: a(46241).V,
                                id: y,
                                spaceId: r.spaceId
                            },
                            t = a(488307).op.update({
                                pointer: e,
                                path: ["format", "sync_state"],
                                args: {
                                    syncing: !1,
                                    last_synced_at: Date.now()
                                }
                            });
                        return w.push(t), {
                            operations: S,
                            createCollectionOperations: _,
                            collectionFinishedOperations: w
                        }
                    }
                }({ ...c,
                    columnIds: c.types.map(e => e.id),
                    ...e
                })
            }

            function c(e) {
                let {
                    table: t,
                    actor: i,
                    parent: n,
                    tableId: o,
                    deps: {
                        randomID: r,
                        spaceIdCreator: s,
                        randomShortID: l
                    },
                    options: {
                        legacyNonCrdt: d,
                        ignoreBlockCount: c,
                        hasHeaderRow: u,
                        hasHeaderColumn: p
                    }
                } = e, m = [], g = t.length ? t[0].map(e => l()) : [], f = t.map(e => (null == s ? void 0 : s.idInSavedSpace(a(682956).ev)) ? ? r());
                return m.push(...a(993189).zgg.create({
                    id: o,
                    type: a(955630).xd.table,
                    content: f,
                    format: {
                        table_block_column_order: g,
                        ...u ? {
                            table_block_column_header: !0
                        } : {},
                        ...p ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: n,
                    space_id: n.spaceId,
                    createdBy: i,
                    ignore_block_count: !!c || void 0,
                    legacyNonCrdt: d
                }).operations), m.push(...f.flatMap((e, r) => {
                    let s = (0, a(722371).MU)(g.flatMap((e, a) => {
                        var i;
                        let n = null == (i = t[r]) || null == (i = i[a]) ? void 0 : i.textValue;
                        return n ? [
                            [e, n]
                        ] : []
                    }));
                    return a(993189).zgg.create({
                        id: e,
                        type: a(955630).xd.tableRow,
                        parentPointer: {
                            id: o,
                            table: a(682956).ev,
                            spaceId: n.spaceId
                        },
                        space_id: n.spaceId,
                        properties: s,
                        createdBy: i,
                        legacyNonCrdt: d
                    }).operations
                })), {
                    operations: m
                }
            }

            function u(e) {
                let {
                    body: t,
                    intl: o,
                    randomShortID: l,
                    isPhoneNumber: d,
                    useCsvAdaptiveSchema: c,
                    csvEvalContext: u
                } = e, p = [{
                    test: j.bind(null, d),
                    sampledSchemaIsComplete: !0
                }, {
                    test: S,
                    sampledSchemaIsComplete: !0
                }, {
                    test: I,
                    sampledSchemaIsComplete: !0
                }, {
                    test: A,
                    sampledSchemaIsComplete: !0
                }, {
                    test: k,
                    sampledSchemaIsComplete: !0
                }, {
                    test: v,
                    sampledSchemaIsComplete: !1
                }, {
                    test: P,
                    sampledSchemaIsComplete: !1
                }, {
                    test: B,
                    sampledSchemaIsComplete: !1
                }, {
                    test: D,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: a(381453).oE(a(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, o, l, d, c) {
                        let u = t.filter(e => !!e);
                        if (0 === u.length) return D(e, u);
                        if (d) {
                            let a = u.length > 1e3 ? function(e) {
                                let t = e.length,
                                    a = [];
                                for (let i = 0; i < 1e3; i++) {
                                    let i = Math.floor(Math.random() * t);
                                    a.push(e[i])
                                }
                                return a
                            }(u) : u;
                            for (let d of l) {
                                let l = d.test(e, a, o);
                                if (l) {
                                    let a = l;
                                    if (!1 === l.isFullMatch) {
                                        n().log({
                                            level: "info",
                                            from: "csvHelper",
                                            type: "csvColumnTypes",
                                            data: {
                                                message: "Partial column type match detected, setting data type as string",
                                                columnType: l.schema.type,
                                                matchType: "Partial"
                                            }
                                        }), a = D(e, t);
                                        let o = (null == c ? void 0 : c.get(r)) || 0;
                                        (0, i().Et)(o) && (null == c || c.set(r, o + 1))
                                    } else n().log({
                                        level: "info",
                                        from: "csvHelper",
                                        type: "csvColumnTypes",
                                        data: {
                                            message: "Complete column type match detected",
                                            columnType: l.schema.type,
                                            matchType: "Full"
                                        }
                                    });
                                    let o = (null == c ? void 0 : c.get(s)) || 0;
                                    return (0, i().Et)(o) && (null == c || c.set(s, o + 1)), a
                                }
                            }
                        } else {
                            let t = u.filter(e => !a(381453).Im(e)).slice(0, 100);
                            for (let a of l) {
                                let l = a.test(e, t, o);
                                if (l) {
                                    let d = a.sampledSchemaIsComplete || t.length === u.length ? l : a.test(e, u, o);
                                    if (d) {
                                        if (!1 === d.isFullMatch) {
                                            n().log({
                                                level: "info",
                                                from: "csvHelper",
                                                type: "csvColumnTypes",
                                                data: {
                                                    message: "Partial column type match detected, Potential data loss due to parsing failures",
                                                    columnType: d.schema.type,
                                                    matchType: "Partial"
                                                }
                                            });
                                            let e = (null == c ? void 0 : c.get(r)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(r, e + 1))
                                        } else {
                                            let e = (null == c ? void 0 : c.get(s)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(s, e + 1))
                                        }
                                        return d
                                    }
                                }
                            }
                        }
                        return D(e, [])
                    }(o, e.map(e => null == e ? void 0 : e.text), l, p, c, u)))
                }
            }

            function p(e) {
                let {
                    body: t,
                    intl: a,
                    randomShortID: i,
                    headers: n,
                    types: r,
                    isPreTypedCSV: s
                } = e, d = n.map(() => !1);
                if (!s) {
                    for (let e = 0; e < n.length; e++)
                        if ("text" === r[e].schema.type)
                            for (let a = 0; a < t.length; a++) {
                                let i = t[a][e].textValue;
                                if (i) {
                                    for (let n of i)
                                        if (o().BEe(n)) {
                                            d[e] = !0, a = t.length;
                                            break
                                        }
                                }
                            }
                }
                let c = !0,
                    u = {
                        title: {
                            type: "title",
                            name: a.formatMessage(l.titleColumnName)
                        }
                    };
                return n.forEach((e, t) => {
                    let a = r[t];
                    if (a)
                        if ("text" !== a.schema.type || !c || d[t] || s)
                            if (s && "title" === a.schema.type) {
                                let t = u.title;
                                t && (t.name = e)
                            } else {
                                let t = a.id ? ? i();
                                a.id || (a.id = t), u[t] = { ...a.schema,
                                    name: e
                                }
                            }
                    else {
                        c = !1, a.id = "title", a.schema = {
                            type: "title",
                            name: e
                        };
                        let t = u.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: u
                }
            }

            function m(e) {
                let {
                    body: t,
                    types: i,
                    isPreTypedCSV: n,
                    notToImportColumnIndex: r
                } = e, s = {};
                return {
                    pages: t.map(e => {
                        null != r && r.length && (e = e.filter((e, t) => !r.includes(t)));
                        let t = {};
                        return i.forEach((i, r) => {
                            if (i) {
                                let {
                                    id: l,
                                    schema: d,
                                    coerce: c
                                } = i, {
                                    type: u
                                } = d;
                                if (l) {
                                    let i = e[r] || "";
                                    if ("url" === u) t[l] = a(561872).jw(i.text);
                                    else if ("date" === u) t[l] = a(561872).m5(c(i.text));
                                    else if ("text" === u) t[l] = i.textValue || o().x9d(c(i.text));
                                    else if ("file" === u) t[l] = i.textValue || [];
                                    else if ("select" === u || "multi_select" === u) {
                                        let e = [];
                                        if (e = "multi_select" === u ? i.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, a) => a.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : i.text.trim() ? [i.text.trim()] : [], n)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                s[l] || (s[l] = []), s[l].find(t => t.toLowerCase() === e.toLowerCase()) || s[l].push(e)
                                            }
                                        t[l] = o().x9d(c(i.text))
                                    } else t[l] = o().x9d(c(i.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: n ? s : void 0
                }
            }
            let g = ["yes", "Yes", "true", "True", "checked"],
                f = ["no", "No", "false", "False", "unchecked"];

            function b(e) {
                return g.some(t => e === t) || f.some(t => e === t)
            }

            function h(e, t) {
                return e.length === t.length
            }

            function y(e) {
                return g.some(t => e === t) ? a(745680).I1 : a(745680).oP
            }

            function v(e, t) {
                if (t.every(b)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: b,
                    coerce: e => y(e)
                }
            }

            function _(e) {
                let t = a(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function S(e, t) {
                let n = t.map(a(700369).sA),
                    o = n[0];
                if (o && n.every(e => !!(e && e.format === o.format))) return {
                    schema: {
                        type: "number",
                        number_format: o.format
                    },
                    validate(e) {
                        let t = a(700369).sA(e);
                        return !i().pN(t) && t.format === o.format
                    },
                    coerce: e => _(e)
                }
            }

            function w(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!a(629518).JC(t, e)
            }

            function x(e, t, i) {
                let n = e.includes("→");
                return a(629518).JC(e, t, n ? void 0 : i)
            }

            function k(e, t) {
                let a = t.filter(t => w(e, t));
                if (a.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => w(e, t),
                    coerce: t => x(t, e),
                    isFullMatch: h(t, a)
                }
            }

            function M(e) {
                return e.length < 320 && e.includes("@") && a(159523).t6(e, "email")
            }

            function I(e, t) {
                let i = t.filter(M);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: M,
                    coerce: a(763230).D_,
                    isFullMatch: h(t, i)
                }
            }

            function C(e) {
                return e.length < 320 && a(159523).t6(e, "url")
            }

            function A(e, t) {
                let i = t.filter(C);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: C,
                    coerce: a(763230).D_,
                    isFullMatch: h(t, i)
                }
            }

            function T(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function j(e, t, i) {
                let n = T.bind(null, e),
                    o = i.filter(n);
                if (o.length >= i.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: n,
                    coerce: a(763230).D_,
                    isFullMatch: h(i, o)
                }
            }

            function P(e, t, i) {
                var n, o, r, s;
                let l = [];
                t.forEach(e => e.split(",").forEach(e => l.push(e.trim())));
                let d = a(561872).ki(l),
                    c = new Set(d);
                if (n = d.length, (o = l.length) > t.length && (r = n, s = o, r > 0 && r ** 2 < s)) return {
                    schema: {
                        type: "multi_select",
                        options: d.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, a(326044).Z)([])
                        }))
                    },
                    validate: e => c.has(e),
                    coerce: a(763230).D_
                }
            }

            function B(e, t, i) {
                var n, o;
                let r = a(561872).ki(t),
                    s = new Set(r);
                if (n = r.length, o = t.length, n > 0 && n ** 2 < o) return {
                    schema: {
                        type: "select",
                        options: r.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, a(326044).Z)([])
                        }))
                    },
                    validate: e => s.has(e),
                    coerce: a(763230).D_
                }
            }

            function D(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: a(763230).D_
                }
            }

            function N(e, t) {
                t || (t = function(e, t) {
                    let a = ",",
                        i = 0,
                        n = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let a = [],
                                i = [],
                                n = "",
                                o = !1;
                            for (let r = 0; r < e.length; r++) {
                                let s = e[r],
                                    l = e[r + 1];
                                '"' === s ? o && '"' === l ? (n += '"', r++) : o = !o : s !== t || o ? "\n" !== s && "\r" !== s || o ? n += s : (i.push(n), i.length > 0 && a.push(i), i = [], n = "", "\r" === s && "\n" === l && r++) : (i.push(n), n = "")
                            }
                            return (n || i.length > 0) && (i.push(n), a.push(i)), a.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(n, e);
                        if (t.length <= 1) continue;
                        let o = t.map(e => e.length),
                            r = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(o),
                            s = o.filter(e => e === r).length / o.length,
                            l = r >= 6 ? .6 : .7;
                        if (r <= 1 || s < l) continue;
                        let d = t.flat().filter(t => t.includes(e)).length / (t.length * r),
                            c = 100 * s + 10 * r - 50 * d;
                        c > i && (i = c, a = e)
                    }
                    return a
                }(e, [",", ";", "	", "|"]));
                let a = [],
                    i = [],
                    n = "",
                    o = !1;
                for (let r = 0; r < e.length; r++) {
                    let s = e[r],
                        l = e[r + 1];
                    if ('"' === s) o && '"' === l ? (n += '"', r++) : o = !o;
                    else if (s !== t || o)
                        if ("\n" !== s && ("\r" !== s || "\n" === l) || o) {
                            if ("\r" === s && "\n" === l && !o) continue;
                            n += s
                        } else i.push(n), a.push(i), i = [], n = "";
                    else i.push(n), n = ""
                }
                return (n || i.length > 0) && (i.push(n), a.push(i)), a
            }
            let L = [{
                type: "title",
                name: "Title"
            }, {
                type: "text",
                name: "Text"
            }, {
                type: "number",
                name: "Number"
            }, {
                type: "select",
                name: "Select"
            }, {
                type: "multi_select",
                name: "Multi-select"
            }, {
                type: "status",
                name: "Status"
            }, {
                type: "date",
                name: "Date"
            }, {
                type: "checkbox",
                name: "Checkbox"
            }, {
                type: "url",
                name: "URL"
            }, {
                type: "email",
                name: "Email"
            }, {
                type: "phone_number",
                name: "Phone Number"
            }, {
                type: "person",
                name: "Person"
            }, {
                type: "dont_import",
                name: "Don't import"
            }]
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
                showAsyncModalComponent: () => o,
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
                        r({
                            asyncModal: n,
                            store: t
                        })
                    } catch (e) {
                        i(e)
                    }
                })
            }

            function o(e, t = a(2009).w) {
                return n(t => i.createElement(e, t), t)
            }

            function r(e) {
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
                    store: o = a(2009).w
                } = e, r = a(92513).JW(), c = d({
                    id: r,
                    store: o
                }), u = l({
                    id: r,
                    promiseResolve: i,
                    store: o
                }), p = s({
                    id: r,
                    promiseResolve: i,
                    store: o
                });
                return {
                    id: r,
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
                addAsyncModal: r,
                createAsyncModal: c,
                createOnClosed: d,
                createOnDismiss: l,
                createResolve: s,
                getAsyncModal: u,
                updateAsyncModal: p
            }
        },
        799843: (e, t, a) => {
            a.d(t, {
                DG: () => d,
                OH: () => s,
                nl: () => r,
                x$: () => l
            });
            let i = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.year",
                        defaultMessage: "{numYears, plural, one {{numYears} year ago} other {{numYears} years ago}}"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.day",
                        defaultMessage: "{numDays, plural, one {{numDays} day ago} other {{numDays} days ago}}"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.week",
                        defaultMessage: "{numWeeks, plural, one {{numWeeks} week ago} other {{numWeeks} weeks ago}}"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.hour",
                        defaultMessage: "{numHours, plural, one {{numHours} hour ago} other {{numHours} hours ago}}"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.minute",
                        defaultMessage: "{numMinutes, plural, one {{numMinutes} minute ago} other {{numMinutes} minutes ago}}"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.second",
                        defaultMessage: "Just now"
                    }
                }),
                n = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.ultraCompactYear",
                        defaultMessage: "{numYears}y"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.ultraCompactDay",
                        defaultMessage: "{numDays}d"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.ultraCompactWeek",
                        defaultMessage: "{numWeeks}w"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.ultraCompactHour",
                        defaultMessage: "{numHours}h"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.ultraCompactMinute",
                        defaultMessage: "{numMinutes}m"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.ultraCompactSeconds",
                        defaultMessage: "Just now"
                    }
                }),
                o = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.compactYear",
                        defaultMessage: "{numYears}y ago"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.compactDay",
                        defaultMessage: "{numDays}d ago"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.compactWeek",
                        defaultMessage: "{numWeeks}w ago"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.compactHour",
                        defaultMessage: "{numHours}h ago"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.compactMinute",
                        defaultMessage: "{numMinutes}m ago"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.compactSecond",
                        defaultMessage: "Just now"
                    }
                });

            function r(e, {
                useCompactFormat: t,
                useUltraCompactFormat: s,
                useLowercase: l,
                roundDownYears: d,
                useWeeks: c,
                showDaysToOneWeek: u,
                nowOverrideMs: p = Date.now()
            } = {}) {
                let m = s ? n : t ? o : i,
                    g = new Date(e),
                    f = a(962299).A.getIntl().locale,
                    b = new Date(p),
                    h = Number(b) - e;
                if (h >= a(627179).Gq && d) {
                    let e = Math.floor(h / a(627179).Gq);
                    return a(962299).A.formatMessage(m.year, {
                        numYears: e
                    })
                }
                if (g.getFullYear() !== b.getFullYear()) return g.toLocaleDateString(f, s ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let y = Math.floor(h / a(627179).nD);
                if (y < 28 && y > 7 && c || u && 7 === y) {
                    let e = Math.floor(y / 7);
                    return a(962299).A.formatMessage(m.week, {
                        numWeeks: e
                    })
                }
                if (u && y > 6 || !u && y >= 3) return g.toLocaleDateString(f, {
                    month: "short",
                    day: "numeric"
                });
                if (y >= 1) return a(962299).A.formatMessage(m.day, {
                    numDays: y
                });
                let v = Math.floor(h / a(627179).pT);
                if (v >= 1) return a(962299).A.formatMessage(m.hour, {
                    numHours: v
                });
                let _ = Math.floor(h / a(627179).Xb);
                return _ >= 1 ? a(962299).A.formatMessage(m.minute, {
                    numMinutes: _
                }) : l ? a(962299).A.formatMessage(m.second).toLocaleLowerCase() : a(962299).A.formatMessage(m.second)
            }

            function s(e, t) {
                let i = t - e,
                    n = Math.floor(i / a(627179).Gq),
                    o = Math.floor(i / a(627179).nD),
                    r = Math.floor(i / a(627179).pT),
                    s = Math.floor(i / a(627179).Xb),
                    l = Math.floor(i / a(627179).TD);
                return n >= 1 ? a(962299).A.formatMessage(a(362008).jX.year, {
                    numYears: n
                }) : o >= 1 ? a(962299).A.formatMessage(a(362008).jX.day, {
                    numDays: o
                }) : r >= 1 ? a(962299).A.formatMessage(a(362008).jX.hour, {
                    numHours: r
                }) : s >= 1 ? a(962299).A.formatMessage(a(362008).jX.minute, {
                    numMinutes: s
                }) : a(962299).A.formatMessage(a(362008).jX.second, {
                    numSeconds: l
                })
            }

            function l(e, t) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function d(e) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        801113: (e, t, a) => {
            a.d(t, {
                $C: () => n,
                Hi: () => i,
                Qy: () => o,
                Uu: () => r,
                ek: () => s,
                jq: () => l,
                pz: () => d
            });
            let i = 52,
                n = 45,
                o = 44,
                r = 44;

            function s(e) {
                return e ? r : o
            }

            function l(e) {
                return 2 * s(e)
            }

            function d(e, t, i) {
                return (e && !t ? (0, a(196441).n$)(i) : 12) + 30
            }
        },
        804677: (e, t, a) => {
            a.d(t, {
                E: () => i
            });
            async function i(e, t) {
                let i = await a(497345).f.load();
                return await i.isPendingMessageEligibleImpl(e, t)
            }
        },
        806457: (e, t, a) => {
            a.d(t, {
                F: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        forceImportDropdownOpen: !1,
                        shouldAddMembers: !0
                    }
                }
                closeImportDropdown() {
                    this.setState({
                        forceImportDropdownOpen: !1,
                        shouldAddMembers: !0
                    })
                }
                openImportDropdown(e) {
                    this.setState({
                        forceImportDropdownOpen: !0,
                        shouldAddMembers: e.shouldAddMembers
                    })
                }
            }
            let o = new n
        },
        828294: (e, t, a) => {
            function i(e) {
                let t = (0, a(83208).X)(e);
                return "on" === (0, a(604306).r)("agent_writer_custom_skills") || t
            }

            function n(e) {
                return "on" === a(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || a(218744).default.checkGate({
                    gateName: e
                })
            }
            a.d(t, {
                N: () => i,
                a: () => n
            })
        },
        833503: (e, t, a) => {
            a.d(t, {
                s: () => b
            });
            var i = a(296540),
                n = () => a(722371),
                o = () => a(770808),
                r = a(474848);

            function s(e) {
                let {
                    children: t,
                    isSizeTransitionAnimated: n,
                    onSizeChanged: s
                } = e, l = (0, i.useMemo)(() => (0, o().Ve)(e.areaConstraint), [e.areaConstraint]), {
                    preferredSize: d,
                    ref: c
                } = (0, a(218381).e)(l), u = (0, i.useMemo)(() => (function(e) {
                    let {
                        areaConstraint: t,
                        preferredSize: i
                    } = e;
                    return {
                        width: (0, a(627179).qE)({
                            value: (null == i ? void 0 : i.width) ? ? 0,
                            min: t.width.min,
                            max: t.width.max
                        }),
                        height: (0, a(627179).qE)({
                            value: (null == i ? void 0 : i.height) ? ? 0,
                            min: t.height.min,
                            max: t.height.max
                        })
                    }
                })({
                    areaConstraint: l,
                    preferredSize: d
                }), [l, d]), p = function(e) {
                    let {
                        actualSize: t,
                        preferredSize: a,
                        areaConstraint: i
                    } = e, n = "allow" === i.width.scroll, o = "allow" === i.height.scroll, r = n && (null == a ? void 0 : a.width) !== void 0 && t.width < a.width, s = o && (null == a ? void 0 : a.width) !== void 0 && t.height < a.height;
                    return {
                        actualSize: t,
                        constrainedSize: {
                            minWidth: i.width.min,
                            maxWidth: n ? void 0 : i.width.max,
                            minHeight: i.height.min,
                            maxHeight: o ? void 0 : i.height.max
                        },
                        isWidthScrollbarVisible: r,
                        isHeightScrollbarVisible: s
                    }
                }({
                    actualSize: u,
                    preferredSize: d,
                    areaConstraint: l
                }), m = function(e) {
                    let {
                        actualSize: t,
                        areaConstraint: i,
                        isSizeTransitionAnimated: n
                    } = e, r = (0, a(11012).j)(100), {
                        prefersReducedMotion: s
                    } = (0, a(533992).Y0)(), l = (0, o().bv)(i);
                    return (0, a(960253).I)(() => {
                        let e = "allow" === i.width.scroll,
                            a = "allow" === i.height.scroll;
                        return {
                            wrapper: {
                                position: "relative"
                            },
                            content: {
                                height: null == t ? void 0 : t.height,
                                overflowX: e ? "auto" : "clip",
                                overflowY: a ? "auto" : "clip",
                                WebkitOverflowScrolling: "touch",
                                width: null == t ? void 0 : t.width,
                                transition: n && r && !s ? "0.25s ease width, 0.25s ease height" : void 0
                            },
                            measure: {
                                display: "flex",
                                flexDirection: "column",
                                height: l.height ? "fit-content" : "100%",
                                maxHeight: i.height.max,
                                maxWidth: i.width.max,
                                minHeight: i.height.min,
                                minWidth: i.width.min,
                                width: l.width ? "fit-content" : "100%"
                            }
                        }
                    }, [t, i, n, r, s, l])
                }({
                    actualSize: u,
                    areaConstraint: l,
                    isSizeTransitionAnimated: n
                });
                return (0, i.useEffect)(() => {
                    null == s || s(u, d)
                }, [u, s, d]), (0, r.jsx)(a(858803).w.Provider, {
                    value: p,
                    children: (0, r.jsx)("div", {
                        style: m.wrapper,
                        children: (0, r.jsx)("div", {
                            style: m.content,
                            children: (0, r.jsx)("div", {
                                ref: c,
                                className: "measure",
                                style: m.measure,
                                children: t
                            })
                        })
                    })
                })
            }
            a(898992), a(354520), a(581454);
            var l = () => a(381453);

            function d(e) {
                let t = 0,
                    a = Number.MAX_SAFE_INTEGER;
                for (let i of e) {
                    if (!i) continue;
                    let e = (0, o().Vo)(i),
                        n = (0, l().qE)(e.max, 0, Number.MAX_SAFE_INTEGER);
                    t = Math.max(t, (0, l().qE)(e.min, 0, n)), a = Math.min(a, n)
                }
                let i = function(e) {
                    let t;
                    for (let a of e) {
                        let e = null == a ? void 0 : a.scroll;
                        switch (e) {
                            case "disallow":
                                return "disallow";
                            case "allow":
                                t = "allow";
                                break;
                            case void 0:
                                break;
                            default:
                                (0, n().HB)(e)
                        }
                    }
                    return t
                }(e);
                return {
                    type: "range",
                    min: (0, l().qE)(t, 0, a),
                    max: a,
                    scroll: i
                }
            }

            function c(e) {
                let t = e.filter(Boolean);
                return {
                    width: d(t.map(e => null == e ? void 0 : e.width)),
                    height: d(t.map(e => null == e ? void 0 : e.height))
                }
            }

            function u(e) {
                let {
                    minimumOutsideSpacing: t
                } = e, n = (0, a(118872).lW)();
                return (0, i.useMemo)(() => {
                    let e = n.width - t.left - t.right,
                        a = n.height - t.top - t.bottom;
                    return (0, o().Ve)({
                        width: {
                            type: "max",
                            length: e
                        },
                        height: {
                            type: "max",
                            length: a
                        }
                    })
                }, [t.bottom, t.left, t.right, t.top, n.height, n.width])
            }

            function p(e) {
                let t, {
                        allowMenuList: o,
                        allowDismissByEscape: l = !0,
                        anchor: d = "center",
                        animateSizeTransition: p = !0,
                        ariaLabel: m,
                        ariaLabelledBy: g,
                        ariaDescribedBy: f,
                        keyboardAreaPriority: b,
                        children: h,
                        transition: y,
                        showCloseIcon: v,
                        borderRadius: _,
                        backgroundAppearance: S,
                        transitionAppearance: w
                    } = e,
                    [x, k] = (0, i.useState)(!1);
                (0, a(202146).exposeDebugValue)("screenshotMode", () => {
                    k(e => !e)
                });
                let M = function(e) {
                        let {
                            partial: t,
                            defaultLength: a = 0
                        } = e;
                        switch (null == t ? void 0 : t.type) {
                            case "sides":
                                return {
                                    type: "sides",
                                    left: t.left ? ? a,
                                    right: t.right ? ? a,
                                    top: t.top ? ? a,
                                    bottom: t.bottom ? ? a
                                };
                            case "axes":
                                return {
                                    type: "sides",
                                    left: t.horizontal ? ? a,
                                    right: t.horizontal ? ? a,
                                    top: t.vertical ? ? a,
                                    bottom: t.vertical ? ? a
                                };
                            case "all":
                                return {
                                    type: "sides",
                                    left: t.length ? ? a,
                                    right: t.length ? ? a,
                                    top: t.length ? ? a,
                                    bottom: t.length ? ? a
                                };
                            case void 0:
                                return {
                                    type: "sides",
                                    left: a,
                                    right: a,
                                    top: a,
                                    bottom: a
                                };
                            default:
                                (0, n().HB)(t)
                        }
                    }({
                        partial: e.minimumOutsideSpacing,
                        defaultLength: 40
                    }),
                    I = u({
                        minimumOutsideSpacing: M
                    });
                e.areaConstraint && (t = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "desktop"
                }) : e.areaConstraint);
                let C = c([I, t]),
                    A = function(e) {
                        let {
                            screenshotMode: t,
                            anchor: i,
                            minimumOutsideSpacing: o,
                            borderRadius: r
                        } = e;
                        return (0, a(960253).I)(() => {
                            let e, s, l;
                            switch (i) {
                                case "top":
                                    e = "flex-start", s = o.top;
                                    break;
                                case "bottom":
                                    e = "flex-end", l = o.bottom;
                                    break;
                                case "center":
                                case void 0:
                                    e = "center";
                                    break;
                                default:
                                    (0, n().HB)(i)
                            }
                            return {
                                innerStyle: {
                                    borderRadius: r ? ? 12,
                                    display: "flex",
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                outerStyle: {
                                    alignItems: e,
                                    paddingTop: s,
                                    paddingBottom: l
                                },
                                overlay: t ? {
                                    background: a(632079).Tj.background.primary,
                                    transition: "0.2s ease background"
                                } : {},
                                fullScreenOverlay: {
                                    background: a(632079).Tj.background.primary
                                }
                            }
                        }, [i, t, o.bottom, o.top, r])
                    }({
                        screenshotMode: x,
                        anchor: d,
                        minimumOutsideSpacing: M,
                        borderRadius: _
                    }),
                    T = (0, r.jsx)(a(790124).A, {
                        capture: !0,
                        keyboardAreaPriority: b,
                        allowEsc: !0,
                        allowMenuList: o,
                        children: () => (0, r.jsx)(s, {
                            areaConstraint: C,
                            isSizeTransitionAnimated: p,
                            children: (0, r.jsx)(a(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? h({
                                    displayMode: "desktop",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    });
                return (0, r.jsx)(a(19187).e.Provider, {
                    value: y.onDismiss,
                    children: (0, r.jsx)(a(556809).a, {
                        ariaDescribedBy: f,
                        ariaLabel: m,
                        ariaLabelledBy: g,
                        backgroundStyle: "full-screen" === w ? A.fullScreenOverlay : A.overlay,
                        innerStyle: A.innerStyle,
                        isWaxPaper: "waxPaper" === S,
                        isWash: "wash" === S,
                        transitionAppearance: w,
                        onClosed: y.onClosed,
                        onDismiss: l ? y.onDismiss : void 0,
                        open: y.isOpen,
                        preventHideChildrenWhileOpening: !0,
                        children: T,
                        showCloseIcon: v,
                        style: A.outerStyle,
                        className: e.className
                    })
                })
            }
            let m = {
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto"
                },
                g = {
                    height: "var(--full-viewport-height)"
                };

            function f(e) {
                var t, n, o;
                let l, d, {
                        allowDismissByEscape: p = !0,
                        animateSizeTransition: f = !0,
                        ariaLabel: b,
                        ariaLabelledBy: h,
                        ariaDescribedBy: y,
                        children: v,
                        transition: _
                    } = e,
                    S = u({
                        minimumOutsideSpacing: {
                            type: "sides",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }
                    }),
                    {
                        isTablet: w
                    } = (0, a(533992).Y0)();
                null != (t = e.deprecatedCompatibilityOverrides) && t.tabletsUsePhoneDisplayMode && w && (l = {
                    width: {
                        type: "fixed",
                        length: a(182718).bJ
                    }
                }), e.areaConstraint && (d = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "phone"
                }) : e.areaConstraint);
                let x = c([S, l, {
                        width: {
                            type: "fill",
                            scroll: null == (n = d) || null == (n = n.width) ? void 0 : n.scroll
                        },
                        height: null == (o = d) ? void 0 : o.height
                    }]),
                    k = (0, i.useCallback)(() => (0, r.jsx)(a(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, r.jsx)(s, {
                            areaConstraint: x,
                            isSizeTransitionAnimated: f,
                            children: (0, r.jsx)(a(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? v({
                                    displayMode: "phone",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    }), [x, f, v]);
                return (0, r.jsx)(a(19187).e.Provider, {
                    value: _.onDismiss,
                    children: (0, r.jsx)(a(182718).zD, {
                        ariaLabel: b,
                        ariaLabelledBy: h,
                        ariaDescribedBy: y,
                        open: _.isOpen,
                        popupType: a(423291).n.BottomSheet,
                        onDismiss: p ? _.onDismiss : void 0,
                        onClosed: _.onClosed,
                        slideUpWrapStyle: g,
                        style: m,
                        content: k,
                        className: e.className,
                        bottomSheetBackgroundColor: "elevated"
                    })
                })
            }

            function b(e) {
                let {
                    isOpen: t,
                    onClosed: i,
                    onDismiss: o,
                    deprecatedCompatibilityOverrides: s,
                    startClosingOnDismiss: l
                } = e, d = function(e) {
                    let {
                        isPhone: t
                    } = (0, a(533992).Y0)();
                    return null != e && e.tabletsUsePhoneDisplayMode ? a(986939).A.isMobile ? "phone" : "desktop" : t ? "phone" : "desktop"
                }(s), c = (0, a(245372).j)({
                    isOpen: t,
                    onClosed: i,
                    onDismiss: o,
                    startClosingOnDismiss: l
                });
                if (!c.shouldRender) return null;
                switch (d) {
                    case "phone":
                        return (0, r.jsx)(f, { ...e,
                            transition: c
                        });
                    case "desktop":
                        return (0, r.jsx)(p, { ...e,
                            transition: c
                        });
                    default:
                        (0, n().HB)(d)
                }
            }
        },
        839250: (e, t, a) => {
            a.d(t, {
                Q: () => i
            });
            let i = a(546605).Store.createValue({
                open: !1
            }, {
                name: "UpgradeRequestFormModalStore"
            })
        },
        848135: (e, t, a) => {
            a.d(t, {
                B: () => n
            });
            var i = a(296540);

            function n() {
                let e = (0, i.useRef)(null),
                    [t, a] = (0, i.useState)(!1),
                    n = (0, i.useCallback)(() => {
                        let t = e.current;
                        t && a(t.matches(":hover"))
                    }, []);
                return [(0, i.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", n), t.addEventListener("mouseleave", n), e.current = t, n()) : e.current && (e.current.removeEventListener("mouseenter", n), e.current.removeEventListener("mouseleave", n), e.current = null)
                }, [n]), t, e]
            }
        },
        853429: (e, t, a) => {
            function i({
                action: e,
                environment: t,
                metadata: n
            }) {
                switch (e.type) {
                    case "link":
                        window.open(e.link);
                        break;
                    case "open_settings":
                        let o = (0, a(872017).D)(e.page);
                        o && a(599754).Ow({
                            currentPage: o
                        });
                        break;
                    case "view_block":
                        let r = new(a(970831)).B(t, {
                            table: a(832375).evP,
                            id: e.blockId
                        });
                        r.isDefined() && (0, a(545586).navigateToBlock)({
                            environment: t,
                            store: r,
                            pageVisitSource: a(254656).y8.Sidebar
                        });
                        break;
                    case "create_database":
                        let s = function(e) {
                            if (e && "object" == typeof e && "nudgeData" in e && e.nudgeData && "object" == typeof e.nudgeData) {
                                let t = e.nudgeData;
                                if ("todoBlocks" in t && "currentBlockId" in t && "parentBlock" in t) return t
                            }
                            return null
                        }(n);
                        s && (0, a(316376).createDatabaseFromTodoBlocks)({
                            environment: t,
                            nudgeData: s
                        });
                        break;
                    case "open_agent":
                        (0, a(909212).re)() && a(310639).assistantDependency.load().then(a => {
                            a.agentActions.openNewAgentSidebarFromMainBlock({
                                environment: t,
                                primeTextInput: e.query
                            })
                        });
                        break;
                    case "create_transcription_block":
                        (async () => {
                            try {
                                (await a(68067).$.load()).createAndNavigateToTranscriptionBlock({
                                    environment: t,
                                    from: e.from,
                                    title: "new_page"
                                })
                            } catch (e) {
                                a(773352).log({
                                    level: "error",
                                    from: "handleInAppMessageAction",
                                    type: "failed_to_lazy_load_transcription_create_actions",
                                    error: (0, a(416607).convertErrorToLog)(e)
                                })
                            }
                        })();
                        break;
                    case "open_trial_modal":
                        ! function(e) {
                            let {
                                modalType: t
                            } = e;
                            switch (t) {
                                case "business_trial_start":
                                    a(272799).openBusinessTrialStartModal({
                                        openedFrom: "sidebar_upgrade_nudge",
                                        potentialCampaigns: ["stacked_business_trial", "stacked_business_trial_14d", "business_reverse"]
                                    });
                                    break;
                                case "business_trial_ending":
                                    a(272799).openBusinessTrialEndingModal({
                                        openedFrom: "self_serve_business_trial_ending_soon_nudge",
                                        modalState: "initial"
                                    });
                                    break;
                                case "business_trial_explore":
                                    a(272799).openBusinessTrialExplorePlanModal({
                                        openedFrom: "self_serve_business_trial_nudge"
                                    });
                                    break;
                                default:
                                    (0, a(722371).HB)(t)
                            }
                        }(e);
                        break;
                    case "open_meetings_tab":
                        (0, a(104310).u)({
                            event: {
                                eventName: "ai_meetings_tab_click",
                                eventProperties: {
                                    source: "in_app_message"
                                }
                            }
                        }), (0, a(79266).navigate)({
                            environment: t,
                            url: a(168962).JZ.meet
                        });
                        break;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function n(e) {
                return "tooltip" === e.type && "object" == typeof e.props && "tooltipOrigin" in e.props && "bottom_assistant" === e.props.tooltipOrigin
            }

            function o(e) {
                return "toast" === e.type ? (e.type, !0) : (e.type, !1)
            }
            a.d(t, {
                Wq: () => i,
                Z2: () => n,
                lN: () => o
            })
        },
        854615: (e, t, a) => {
            a.d(t, {
                D: () => i,
                R: () => n
            });
            let i = (0, a(109939).YK)({
                openInLibrary: {
                    id: "useOpenInLibraryActions.openInLibrary",
                    defaultMessage: "Open in Library"
                },
                customizeSidebar: {
                    id: "useOpenInLibraryActions.customizeSidebar",
                    defaultMessage: "Customize sidebar"
                }
            });

            function n(e) {
                let {
                    type: t,
                    onSelect: n
                } = e, o = (0, a(533992).v3)(), r = (0, a(853284).U)(), s = (0, a(83208).X)("slippery_slope_sidebar_customization"), l = (0, a(83208).X)("library_meetings_tab"), d = (0, a(784331).nr)(), c = (0, a(413388)._B)(t), u = (0, a(784331).cd)() && c && ("agents" !== c || d) && ("myMeetings" !== c || l), p = r && s && (u || "notion_apps" === t);
                return [...!r && u && c ? [(0, a(233319).Ls)({
                    key: "openInLibrary",
                    displayName: i.openInLibrary,
                    analyticsName: i.openInLibrary.defaultMessage,
                    validators: [],
                    svg: a(360610).H,
                    closeParentMenu: !0,
                    action: async () => {
                        (await (0, a(337439).p)())({
                            event: void 0,
                            analyticsFrom: "sidebar_overflow_menu",
                            environment: o,
                            viewName: c
                        }), n()
                    }
                })] : [], ...p ? [(0, a(233319).Ls)({
                    key: "customizeSidebar",
                    displayName: i.customizeSidebar,
                    analyticsName: i.customizeSidebar.defaultMessage,
                    validators: [],
                    svg: a(213039).M,
                    closeParentMenu: !0,
                    action: () => {
                        a(87945).F.setState(!0), n()
                    }
                })] : []]
            }
        },
        854722: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            let i = a(546605).Store.createValue(void 0, {
                name: "TeamHighlightStore"
            })
        },
        856863: (e, t, a) => {
            a.d(t, {
                j: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
            }
            let o = new n
        },
        857711: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                personCropCircleBadgePlusIcon: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.5 2.37 17.12 17.13",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 5.992 7.45q.197-.587.228-1.23a6.4 6.4 0 0 0 4.454-.62c-.547-1.049-1.697-1.789-3.05-1.789a3.55 3.55 0 0 0-1.739.45q-.241-.587-.626-1.081A4.8 4.8 0 0 1 10 12.561c1.754 0 3.298.934 4.087 2.332A6.375 6.375 0 1 0 3.78 11.406q-.643.032-1.23.227A7.7 7.7 0 0 1 2.375 10"
                        }), (0, i.jsx)("path", {
                            d: "M4 12.5a3.5 3.5 0 0 0-1.137.189A3.502 3.502 0 0 0 4 19.5a3.5 3.5 0 1 0 0-7m-2.594 3.531c0-.345.28-.625.625-.625h1.375v-1.375a.625.625 0 0 1 1.25 0v1.375h1.375a.625.625 0 0 1 0 1.25H4.656v1.375a.625.625 0 1 1-1.25 0v-1.375H2.031a.625.625 0 0 1-.625-.625m6.349-9.862C8.277 5.519 9.05 5.125 10 5.125s1.723.393 2.245 1.044c.51.635.75 1.474.75 2.346s-.24 1.71-.75 2.346c-.522.65-1.294 1.044-2.245 1.044-.95 0-1.723-.394-2.245-1.044-.51-.635-.75-1.474-.75-2.346s.24-1.711.75-2.346m.975.782c-.293.365-.475.909-.475 1.564s.182 1.198.475 1.564c.281.35.694.576 1.27.576s.989-.226 1.27-.576c.294-.366.475-.909.475-1.564s-.181-1.199-.475-1.564c-.281-.35-.693-.576-1.27-.576-.576 0-.989.225-1.27.576"
                        })]
                    })
                },
                o = (0, a(104509).wt)("personCropCircleBadgePlus", n, "default")
        },
        861842: (e, t, a) => {
            a.d(t, {
                D6: () => m,
                Jf: () => r,
                Zr: () => l,
                _: () => n,
                bO: () => c,
                kO: () => s,
                nT: () => p,
                p5: () => g
            }), a(410838), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(672577), a(581454), a(737550);
            let i = (0, a(109939).YK)({
                unableToCreateTranscriptionBlockForCalendarEvent: {
                    id: "calendarEventActions.unableToCreateTranscriptionBlockForCalendarEvent",
                    defaultMessage: "A transcription block could not be created for this calendar event."
                },
                sharedBlockWithParticipants: {
                    id: "upcomingMeetings.sharedBlockWithParticipants",
                    defaultMessage: "Participants in your workspace have edit access to this page."
                },
                sharedBlockWithParticipantsCta: {
                    id: "upcomingMeetings.sharedBlockWithParticipants.cta",
                    defaultMessage: "Manage access"
                },
                transcriptionBlockAlreadyExists: {
                    id: "upcomingMeetings.transcriptionBlockAlreadyExists",
                    defaultMessage: "A meeting note already exists for this calendar event."
                },
                transcriptionBlockAlreadyStarted: {
                    id: "calendarEventActions.transcriptionBlockAlreadyStarted",
                    defaultMessage: "This meeting is already being transcribed."
                },
                transcriptionBlockAlreadyStartedByUser: {
                    id: "calendarEventActions.transcriptionBlockAlreadyStartedByUser",
                    defaultMessage: "{transcriberName} is already transcribing"
                }
            });

            function n(e) {
                let {
                    environment: t,
                    transcriptionBlockStore: n
                } = e;
                (0, a(113955).L)({
                    item: {
                        label: a(962299).A.formatMessage(i.sharedBlockWithParticipants)
                    },
                    showButton: !0,
                    buttonText: a(962299).A.formatMessage(i.sharedBlockWithParticipantsCta),
                    onClick: () => {
                        (0, a(729619).Tk)({
                            environment: t,
                            store: n
                        })
                    }
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    from: n,
                    event: o,
                    parent: r,
                    peekMode: s
                } = e, l = (0, a(583124).W)(), d = (await a(68067).$.load()).createAndNavigateToTranscriptionBlock({
                    environment: t,
                    from: n,
                    title: "title_with_event",
                    pageVisitSource: a(254656).y8.UpcomingMeetingCalendarEvent,
                    peekMode: s,
                    calendarEvent: o,
                    sharedNote: l,
                    parent: r
                });
                if (!d) {
                    a(773352).log({
                        level: "error",
                        from: "calendarEventActions",
                        type: "unableToCreateTranscriptionBlockForCalendarEvent",
                        data: {
                            miscDataToConvertToString: {
                                eventId: o.id,
                                from: n,
                                parentId: r && "string" != typeof r ? r.id : r
                            }
                        }
                    }), a(436555).D6({
                        label: a(962299).A.formatMessage(i.unableToCreateTranscriptionBlockForCalendarEvent)
                    });
                    return
                }
                return d
            }
            async function r(e) {
                let {
                    environment: t,
                    event: n,
                    from: r,
                    parent: s,
                    peekMode: d,
                    method: c
                } = e, p = !1, m = (0, a(328765).S)();
                if (!m) return {
                    createdNewTranscriptionBlock: !1
                };
                let g = await l({
                    event: n,
                    environment: t,
                    spaceStore: m
                });
                if (g)(await a(68067).$.load()).navigateToTranscriptionBlock({
                    environment: t,
                    blockStore: g,
                    pageVisitSource: a(254656).y8.UpcomingMeetingCalendarEvent,
                    peekMode: d
                });
                else {
                    if (!(g = await o({
                            environment: t,
                            from: r,
                            event: n,
                            parent: s,
                            peekMode: d
                        }))) return {
                        createdNewTranscriptionBlock: !1
                    };
                    p = !0
                }
                return "side_peek" === d && await a(475097).default.waitUntil(() => {
                    var e;
                    return a(475097).default.isSidePeekOpen() && !!(null == (e = a(475097).default.peekTargetStore.state) ? void 0 : e.isReady())
                }), "upcoming_meeting_create_meeting_note" !== r || p || a(436555).D6({
                    label: a(962299).A.formatMessage(i.transcriptionBlockAlreadyExists)
                }), u({
                    environment: t,
                    event: n,
                    createdNewTranscriptionBlock: p,
                    transcriptionBlockStore: g
                }), (0, a(414824).R)({
                    environment: t,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingNoteClicked",
                            eventId: n.id,
                            product: "notion",
                            from: r,
                            method: c
                        }
                    }
                }), {
                    createdNewTranscriptionBlock: p,
                    transcriptionBlockStore: g
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    event: n,
                    from: o,
                    peekMode: s,
                    autoStart: l = !0,
                    method: d
                } = e, {
                    createdNewTranscriptionBlock: c,
                    transcriptionBlockStore: u
                } = await r({
                    environment: t,
                    from: o,
                    event: n,
                    peekMode: s,
                    method: d
                });
                if (u && "initial" !== (0, a(869708).by)(u).state) {
                    var p;
                    let e = null == (p = u.getModel()) || null == (p = p.getFormat().transcription_state_history) ? void 0 : p.findLast(e => "transcribing" === e.state);
                    if (e) {
                        let n = a(962299).A.getIntl(),
                            o = new(a(807825)).L(t, {
                                id: e.actor_id,
                                table: e.actor_table
                            }).getDisplayName(n);
                        a(436555).D6({
                            label: a(962299).A.formatMessage(i.transcriptionBlockAlreadyStartedByUser, {
                                transcriberName: o
                            })
                        })
                    } else a(436555).D6({
                        label: a(962299).A.formatMessage(i.transcriptionBlockAlreadyStarted)
                    });
                    return {
                        createdNewTranscriptionBlock: c,
                        transcriptionBlockStore: u
                    }
                }
                if (l && u) {
                    let e = await a(785576).w.load();
                    await e.startTranscription({
                        environment: t,
                        blockStore: u,
                        from: o,
                        audioConsentEnabled: (0, a(774073).yz)()
                    })
                } else if (l) {
                    let e = await a(666234).k.load();
                    await e.startTranscribingBlockOnPageFromTrustedSource({
                        environment: t,
                        from: o
                    })
                }
                return {
                    createdNewTranscriptionBlock: c,
                    transcriptionBlockStore: u
                }
            }
            async function l(e) {
                let t, {
                        event: i,
                        spaceStore: n,
                        environment: o
                    } = e,
                    {
                        blockAttachments: r
                    } = i,
                    s = o.api.callApi({
                        environment: o,
                        eventName: "getTranscriptionBlockForEvent",
                        data: {
                            eventUid: i.uid,
                            spaceId: n.id
                        }
                    });
                null != r && r.length && (t = d({
                    event: i,
                    spaceStore: n
                }));
                let l = await s;
                if ("failed" === l.type) return t;
                let c = new Set(l.data.transcriptionBlockPointers.map(e => e.id)),
                    u = new Set((null == r ? void 0 : r.map(e => e.id)) ? ? []),
                    p = (0, a(981990)._)(c, u);
                return 0 === p.size ? t : (a(773352).log({
                    level: "warning",
                    from: "maybeGetTranscriptionBlockStoreFromEvent",
                    type: "missingTranscriptionRecordPointer",
                    data: {
                        miscDataToConvertToString: {
                            missingPointers: Array.from(p),
                            verifiedPointers: Array.from(c),
                            localPointers: Array.from(u),
                            eventId: i.id,
                            spaceId: n.id
                        }
                    }
                }), (0, a(440143).Y)().update(e => {
                    let t = null == e ? void 0 : e.events.find(e => e.accountId === i.accountId && e.calendarId === i.calendarId && e.id === i.id);
                    return t && (t.blockAttachments = [...Array.from(p).map(e => ({
                        spaceId: n.id,
                        table: "block",
                        id: e
                    })), ...t.blockAttachments ? ? []]), e
                }), t = d({
                    event: i,
                    spaceStore: n
                }))
            }
            async function d(e) {
                var t, i;
                let {
                    event: n,
                    spaceStore: o,
                    timeoutMs: r = 4e3
                } = e, s = (null == (t = n.blockAttachments) ? void 0 : t.map(e => a(970831).B.createChildStore(o, e))) ? ? [];
                if (0 === s.length) return;
                let l = new(a(345426)).ComputedStore(() => (0, a(787971).gw)({
                        event: n,
                        transcriptionBlockStores: s
                    }), {
                        debugName: `getPrimaryTranscriptionBlockStoreFromEvent-${n.uid}`
                    }),
                    d = l.getState();
                if ("LOADING" === d.reason && (d = await new Promise(e => {
                        let t = window.setTimeout(() => {
                                e(void 0), l.removeListener(a)
                            }, r),
                            a = i => {
                                "LOADING" !== i.getState().reason && (e(i.getState()), clearTimeout(t), l.removeListener(a))
                            };
                        l.addListener(a)
                    })), null != (i = d) && i.primaryTranscriptionBlockStore) return d.primaryTranscriptionBlockStore
            }

            function c(e) {
                var t;
                return null == (t = e.attendees) ? void 0 : t.some(e => e.notionUserId && !e.self)
            }
            async function u(e) {
                let {
                    environment: t,
                    event: i,
                    transcriptionBlockStore: o,
                    createdNewTranscriptionBlock: r
                } = e;
                r && o && (0, a(583124).W)() && (o.isReady() || await o.load(), (0, a(404926).r)({
                    environment: t,
                    store: o
                }) || c(i) && n({
                    environment: t,
                    transcriptionBlockStore: o
                }))
            }
            async function p(e) {
                let {
                    event: t,
                    from: i,
                    environment: n,
                    calendarBotId: o,
                    peekMode: s
                } = e, l = !(await r({
                    environment: n,
                    from: i,
                    event: t,
                    peekMode: s ? ? "side_peek"
                })).createdNewTranscriptionBlock, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: n
                    } = e, o = (0, a(712358).K)(i);
                    switch (t) {
                        case "upcoming_meeting":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_clicked",
                                eventProperties: n
                            };
                        case "upcoming_meeting_primary_note":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_primary_note_clicked",
                                eventProperties: n
                            };
                        case "in_app_meeting_notification_upcoming_stage":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_event_clicked",
                                eventProperties: { ...n,
                                    is_sidebar_expanded: o
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: i,
                    environment: n,
                    eventProperties: {
                        calendar_event_id: t.id,
                        has_existing_meeting_note: l
                    }
                });
                d && (0, a(104310).u)({
                    event: d
                }), o && (0, a(414824).R)({
                    environment: n,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingNoteOpened",
                            eventId: t.id,
                            calendarId: t.calendarId,
                            from: i,
                            hasExistingNote: l
                        }
                    },
                    botId: o
                })
            }
            async function m(e) {
                let {
                    event: t,
                    from: i,
                    environment: n,
                    calendarBotId: o,
                    peekMode: r
                } = e, l = !(await s({
                    environment: n,
                    event: t,
                    from: i,
                    peekMode: r ? ? "side_peek"
                })).createdNewTranscriptionBlock, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: n
                    } = e, o = (0, a(712358).K)(i);
                    switch (t) {
                        case "upcoming_meeting_start_transcribing":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_start_transcribing_clicked",
                                eventProperties: n
                            };
                        case "in_app_meeting_notification_upcoming_stage_start_transcribing":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...n,
                                    is_sidebar_expanded: o,
                                    from: "primary_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_and_start_transcribing":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...n,
                                    is_sidebar_expanded: o,
                                    from: "primary_join_and_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_start_transcribing_only":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...n,
                                    is_sidebar_expanded: o,
                                    from: "dropdown_transcribe_only_button"
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: i,
                    environment: n,
                    eventProperties: {
                        calendar_event_id: t.id,
                        has_existing_meeting_note: l
                    }
                });
                d && (0, a(104310).u)({
                    event: d
                }), o && (0, a(414824).R)({
                    environment: n,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingTranscriptionStarted",
                            eventId: t.id,
                            calendarId: t.calendarId,
                            from: i,
                            hasExistingNote: l
                        }
                    },
                    botId: o
                })
            }

            function g(e) {
                var t, i;
                let {
                    event: n,
                    from: o,
                    environment: r,
                    calendarBotId: s
                } = e, l = null == (t = n.conferencing) ? void 0 : t.providerName, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: n
                    } = e, o = (0, a(712358).K)(i);
                    switch (t) {
                        case "upcoming_meetings":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_join_meeting_clicked",
                                eventProperties: n
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_and_transcribe":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_join_meeting_clicked",
                                eventProperties: { ...n,
                                    is_sidebar_expanded: o,
                                    from: "primary_join_and_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_meeting_only":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_join_meeting_clicked",
                                eventProperties: { ...n,
                                    is_sidebar_expanded: o,
                                    from: "dropdown_join_meeting_only_button"
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: o,
                    environment: r,
                    eventProperties: {
                        calendar_event_id: n.id,
                        conferencing_provider: l
                    }
                });
                if (d && (0, a(104310).u)({
                        event: d
                    }), s) {
                    let e = "upcoming_meetings" === o ? "upcomingMeetings" : "transcription_confirmation_deeplink" === o ? void 0 : o;
                    (0, a(414824).R)({
                        environment: r,
                        data: {
                            type: "track",
                            payload: {
                                event: "joinMeeting",
                                eventId: n.id,
                                calendarId: n.calendarId,
                                conferencingProvider: l,
                                method: e
                            }
                        },
                        botId: s
                    })
                }
                null != (i = n.conferencing) && i.url && (0, a(624621).L)({
                    environment: r,
                    url: n.conferencing.url
                })
            }
        },
        872017: (e, t, a) => {
            a.d(t, {
                D: () => o,
                O: () => n
            });
            let i = ["profile", "plans", "members"];

            function n(e) {
                return !!(0, a(722371).Xk)(i, e)
            }

            function o(e) {
                switch (e) {
                    case "profile":
                    case "manage_emails":
                    case "notifications_and_settings":
                    case "user_settings":
                    case "notifications":
                    case "mail_and_calendar":
                    case "connected_apps":
                    case "language_and_region":
                    case "offline":
                    case "settings":
                    case "members":
                    case "plans":
                    case "billing":
                    case "ai_usage_dashboard":
                    case "subscription":
                    case "security":
                    case "identity_provisioning":
                    case "admin_content_search":
                    case "integrations":
                    case "integrations_mcp":
                    case "imports":
                    case "teams":
                    case "audit_log":
                    case "analytics":
                    case "sites":
                    case "public_pages":
                    case "custom_emoji":
                    case "verified_pages":
                    case "requests":
                    case "workspace_discovery":
                    case "experiments":
                    case "performance_toolbar":
                    case "personalization":
                    case "user_similarity_scores":
                    case "collection_debug":
                    case "offline_mode_debug":
                    case "ai":
                    case "design_previews":
                    case "mobile_native":
                        return e;
                    default:
                        return
                }
            }
        },
        872301: (e, t, a) => {
            a.d(t, {
                p: () => n
            });
            let i = new(a(815048)).O2("HelpButtonContent", async () => await a.e(42481).then(a.bind(a, 342848))),
                n = (0, a(815048)._h)(i, e => e.HelpButtonContent)
        },
        876252: (e, t, a) => {
            a.d(t, {
                $: () => i
            });

            function i() {
                return (0, a(682985).O$)(a(728372).AppStoreCurrentUserStore)
            }
        },
        887652: (e, t, a) => {
            function i(e) {
                let {
                    teamStore: t,
                    userId: a
                } = e;
                return function(e) {
                    let {
                        rawMembership: t,
                        userId: a
                    } = e;
                    return t.find(e => "user" === e.entity_type && e.user_id === a && "none" !== e.type)
                }({
                    rawMembership: t.getRawMembership(),
                    userId: a
                })
            }
            a.d(t, {
                p: () => i
            }), a(898992), a(672577)
        },
        892166: (e, t, a) => {
            a.d(t, {
                U: () => n
            });
            var i = a(296540);

            function n(e, t) {
                let {
                    navigate: n
                } = (0, i.useContext)(a(44894).E), o = (0, a(533992).v3)(), {
                    isPhone: r
                } = (0, a(533992).Y0)(), s = (0, i.useContext)(a(19187).e);
                return (0, i.useCallback)(i => {
                    if ((0, a(104310).u)({
                            event: {
                                eventName: e,
                                eventProperties: {}
                            }
                        }), r) null == s || s(), n({
                        environment: o,
                        url: "/nativetab/templates",
                        redirect: !0
                    });
                    else {
                        let e = "click" === i.type && (i.metaKey || i.ctrlKey);
                        (null == t ? void 0 : t.forceOpenInNewTab) || e ? n({
                            environment: o,
                            url: a(168962).JZ.marketplace,
                            openInNew: "tab",
                            makeTabActive: !e && o.device.isDesktop
                        }) : (0, a(666236).P)({
                            environment: o
                        })
                    }
                }, [o, e, t, r, s, n])
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
        896053: (e, t, a) => {
            a.d(t, {
                V: () => i
            });
            let i = (0, a(815048)._h)(new(a(815048)).O2("SidebarTrash", async () => await Promise.all([a.e(75134), a.e(9773), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(26361), a.e(80139), a.e(67542), a.e(97732), a.e(23519), a.e(63771), a.e(45213), a.e(53847), a.e(12354), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(64696), a.e(12001), a.e(40198), a.e(31243), a.e(14886), a.e(39225), a.e(2626), a.e(64453), a.e(4779), a.e(83490), a.e(8953)]).then(a.bind(a, 914770))), e => e.SidebarTrash)
        },
        902777: (e, t, a) => {
            a.d(t, {
                F: () => l
            }), a(296540);
            var i = a(474848);
            let n = {
                    textAlign: "center"
                },
                o = {
                    position: "relative"
                };

            function r({
                onDismiss: e
            }) {
                let t = (0, a(109939).tz)(),
                    s = (0, a(533992).v3)(),
                    l = (0, a(723240).r)(),
                    d = s.currentUser.id,
                    c = (0, a(217844)._)({
                        name: "ai_usage",
                        spaceId: l,
                        userId: d,
                        amount: 1
                    }),
                    u = (0, a(682985).K8)(() => {
                        if (c && "cumulative" === c.limit.type && "unlimited" !== c.limit.total) return c.limit.total - c.limit.current
                    }, [c]),
                    p = (0, a(226309)._3)({
                        spaceId: l
                    }),
                    m = (0, a(192159).i5)(p);
                if (void 0 === u || !(0, a(722371).O9)(m)) return null;
                let g = (0, a(262166).u2)({
                    product: (0, a(192159).AI)(p),
                    intl: t
                });
                return (0, i.jsxs)(a(4458).VP, {
                    gap: 24,
                    paddingInline: 24,
                    paddingTop: 24,
                    paddingBottom: 20,
                    className: "autolayout-fill-width",
                    style: o,
                    children: [(0, i.jsx)(a(582471).Y, {
                        iconAndTitle: u > 0 ? (0, i.jsxs)(a(4458).VP, {
                            gap: 12,
                            alignItems: "center",
                            className: "autolayout-fill-width",
                            style: o,
                            children: [(0, i.jsx)(a(16275).I, {
                                icon: a(396826).aiFaceFillIcon,
                                size: "xl",
                                colorVariant: "secondary"
                            }), (0, i.jsx)(a(111010).D, {
                                styleKey: "titleSmSemibold",
                                colorVariant: "primary",
                                style: n,
                                children: (0, i.jsx)(a(109939).sA, {
                                    id: "ineligibleForAiPurchaseModal.title",
                                    defaultMessage: "You still have {responsesLeft, plural, one {{responsesLeft} free AI response} other {{responsesLeft} free AI responses}}",
                                    values: {
                                        responsesLeft: u
                                    }
                                })
                            })]
                        }) : (0, i.jsx)(a(209590).Z, {
                            iconGroup: a(92168).k,
                            iconColorVariant: "secondary",
                            title: (0, i.jsx)(a(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.title.outOfResponses",
                                defaultMessage: "You’ll be able to purchase AI in {daysLeft, plural, one {{daysLeft} day} other {{daysLeft} days}}",
                                values: {
                                    daysLeft: (0, a(875472).PZ)(m)
                                }
                            })
                        }),
                        description: (0, i.jsx)(a(111010).D, {
                            styleKey: "bodySmRegular",
                            colorVariant: "primary",
                            children: u > 0 ? (0, i.jsx)(a(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.description.responsesLeft",
                                defaultMessage: "You’ll be able to purchase Notion AI after finishing your free {planName} plan trial",
                                values: {
                                    planName: g
                                }
                            }) : (0, i.jsx)(a(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.description",
                                defaultMessage: "Since you’re on a free {planName} plan trial, you can only purchase Notion AI after the trial ends",
                                values: {
                                    planName: g
                                }
                            })
                        })
                    }), (0, i.jsx)(a(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "outline",
                            label: (0, i.jsx)(a(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.primaryAction",
                                defaultMessage: "Got it"
                            }),
                            onClick: e
                        }]
                    }), (0, i.jsx)(a(226512).R, {})]
                })
            }
            async function s(e) {
                return await a(280996).T.showAsyncModal(t => (0, i.jsx)(a(833503).s, {
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
                    children: () => (0, i.jsx)(r, {
                        onDismiss: t.onDismiss,
                        ...e
                    })
                }))
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    billingData: n,
                    product: o,
                    from: r,
                    pageSection: l,
                    isTrial: d,
                    isEligibleForAgentBusinessTrial: c,
                    dismissMobilePlansModal: u,
                    postUpgradeCallback: p,
                    campaign: m
                } = e;
                if (i) {
                    if ((0, a(192159).N8)(n)) return void(0, a(613065).cz)();
                    if ("ai" === o && (0, a(192159).TB)(n)) return void s({
                        environment: t
                    });
                    if ("enterprise" === o) {
                        let o = await a(375592).T.awaitData(t, {
                                userId: t.currentUser.id || ""
                            }),
                            r = n && {
                                type: "admin",
                                ...n
                            };
                        if ((0, a(208117).q)({
                                environment: t,
                                externalOrgSummary: o,
                                spaceStore: i,
                                billingData: r
                            })) return void(0, a(613065).lK)({
                            initialQuestion: "interest_in_enterprise",
                            openedFrom: e.from
                        })
                    }
                    if (e.isTrial) return void a(821587).e_({
                        openedFrom: e.from,
                        potentialCampaigns: m && !(0, a(889089).w)(m) ? [m] : [],
                        isEligibleForAgentBusinessTrial: c
                    });
                    if (a(218744).default.checkGate({
                            gateName: "usage_based_pricing_pfa_checks_purchased_credits_enabled"
                        }) && "ai_credit_pack" === o) return void(0, a(82861).x9)();
                    if (null != n && n.subscription && null != n && n.paymentMethod)(0, a(362650).o)(t, {
                        desiredProducts: [o],
                        from: r,
                        analyticsArgs: {
                            from: r,
                            pageSection: l
                        },
                        postUpgradeCallback: p,
                        campaign: m
                    });
                    else {
                        let {
                            subscriptionTier: e,
                            addOnFeature: t
                        } = (0, a(645040).Qt)(o) ? {
                            subscriptionTier: (0, a(192159).AI)(n),
                            addOnFeature: o
                        } : {
                            subscriptionTier: o,
                            addOnFeature: void 0
                        };
                        await (0, a(371151).qI)({
                            subscriptionTier: e,
                            addOnFeature: t,
                            from: r,
                            campaign: m,
                            isTrial: d,
                            dismissMobilePlansModal: u,
                            postUpgradeCallback: p
                        })
                    }
                }
            }
        },
        903443: (e, t, a) => {
            a.d(t, {
                Yk: () => l,
                Qj: () => d,
                Ct: () => p
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(581454);
            let i = "1.4.0";
            class n {
                storageKeyPrefix = "notion-sidebar-";
                store = new(a(274919)).Ay({
                    namespace: a(274919).Bq,
                    important: !1,
                    trackingType: "performance"
                });
                loggingEnabled = Math.random() < a(218744).default.getConfigKey("sidebar_cache_logging_config", "sample_rate");
                constructor(e) {
                    this.environment = e
                }
                async get(e) {
                    try {
                        await this.store.waitUntilReady();
                        let t = this.storageKeyPrefix + e,
                            {
                                duration: a,
                                result: n
                            } = o(() => this.store.get(t));
                        if (!n) return void this.logRead({
                            duration: a,
                            status: "missing"
                        });
                        if (n.version === i) return this.logRead({
                            duration: a,
                            status: "success",
                            result: n
                        }), n;
                        this.logRead({
                            duration: a,
                            status: "stale",
                            result: n
                        }), this.clear(e);
                        return
                    } catch (e) {
                        this.logRead({
                            status: "failure"
                        });
                        return
                    }
                }
                set(e, t) {
                    try {
                        let a = this.storageKeyPrefix + e,
                            {
                                duration: i
                            } = o(() => this.store.set(a, t));
                        this.logWrite({
                            duration: i,
                            status: "success",
                            result: t
                        })
                    } catch (e) {
                        this.logWrite({
                            status: "failure",
                            result: t
                        })
                    }
                }
                clear(e) {
                    try {
                        let t = this.storageKeyPrefix + e;
                        this.store.remove(t)
                    } catch (e) {}
                }
                logRead({
                    duration: e,
                    status: t,
                    result: i
                }) {
                    this.loggingEnabled && (0, a(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "read",
                                status: t,
                                size_kb: i && "object" == typeof i ? this.calculateSizeKb(i) : 0,
                                source: "local_storage"
                            }
                        }
                    })
                }
                logWrite({
                    duration: e,
                    status: t,
                    result: i
                }) {
                    this.loggingEnabled && (0, a(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "write",
                                status: t,
                                size_kb: this.calculateSizeKb(i),
                                source: "local_storage"
                            }
                        }
                    })
                }
                calculateSizeKb(e) {
                    try {
                        let t = JSON.stringify(e),
                            a = new Blob([t]).size;
                        return Math.round(a / 1024)
                    } catch {
                        return 0
                    }
                }
            }

            function o(e) {
                let t = performance.now(),
                    a = e();
                return {
                    duration: Math.round(performance.now() - t),
                    result: a
                }
            }
            class r {
                cache;
                pendingResults = new Map;
                results = new Map;
                cachedThisSession = new Set;
                disabledCacheKeys = new Set;
                getCache(e) {
                    return this.cache || (this.cache = new n(e)), this.cache
                }
                getCachedSidebarStateResult(e, t) {
                    let a = `${e}:${t}`;
                    if (!this.disabledCacheKeys.has(a)) return this.results.get(a)
                }
                async getCachedSidebarState(e, t, a) {
                    let i = `${e}:${t}`;
                    if (this.disabledCacheKeys.has(i)) return;
                    if (this.results.has(i)) return this.results.get(i);
                    if (this.pendingResults.has(i)) return this.pendingResults.get(i);
                    let n = this.readFromStorage(e, t, a).then(e => {
                        if (!this.disabledCacheKeys.has(i)) return this.results.set(i, e), e
                    }).catch(() => {});
                    return this.pendingResults.set(i, n), n
                }
                async readFromStorage(e, t, i) {
                    let n = s(e, t),
                        o = await this.getCache(i).get(n);
                    if (o) try {
                        var r, d;
                        return r = o, d = i, {
                            isCached: !0,
                            spaceViewId: r.spaceViewId,
                            spaceId: r.spaceId,
                            spaceName: r.spaceName,
                            userId: r.userId,
                            isMember: r.isMember,
                            isPersonalSpace: r.isPersonalSpace,
                            showBookmarksSection: r.showBookmarksSection,
                            showWorkspaceSection: r.showWorkspaceSection,
                            showSharedSection: r.showSharedSection,
                            showPrivateSection: r.showPrivateSection,
                            showChatsSection: r.showChatsSection,
                            showSharedOverflowButton: r.showSharedOverflowButton,
                            showPrivateOverflowButton: r.showPrivateOverflowButton,
                            showOnlyPrivateSection: r.showOnlyPrivateSection,
                            shownSidebarSectionCount: r.shownSidebarSectionCount,
                            showTeamsOverflowButton: r.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: r.stickTemplateItemsToBottom,
                            showTeamSection: r.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: r.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: r.showEmptySharedSection,
                            showNotionAppsSection: r.showNotionAppsSection,
                            showMeetingsTodaySection: r.showMeetingsTodaySection,
                            showMeetingsSection: r.showMeetingsSection,
                            showRecentsSection: r.showRecentsSection,
                            allSharedPagesStores: [],
                            allPrivatePagesStores: [],
                            userJoinedTeamsStores: [],
                            visibleNotionApps: r.visibleNotionApps,
                            visibleSharedPagesStores: r.visibleSharedPagesStores.map(e => l(e, d)),
                            visiblePrivatePagesStores: r.visiblePrivatePagesStores.map(e => l(e, d)),
                            bookmarkedPagesStores: r.bookmarkedPagesStores.map(e => l(e, d)),
                            workspacePagesStores: r.workspacePagesStores.map(e => l(e, d)),
                            visibleTeamsStores: r.visibleTeamsStores.map(e => {
                                var t, i;
                                let n;
                                return t = e, i = d, n = new(a(681735)).h(i, t.pointer), void 0 !== t.name || void 0 !== t.icon || t.pages.length > 0 ? (0, a(9722).x)({
                                    store: n,
                                    environment: i,
                                    name: t.name ? ? "",
                                    icon: t.icon,
                                    cachedTeamPagesStores: t.pages.map(e => l(e, i))
                                }) : n
                            }),
                            visibleWorkflowStores: r.visibleWorkflowStores.map(e => {
                                var t, i;
                                let n;
                                return t = e, i = d, n = new(a(360851)).N(i, t.pointer), void 0 !== t.title || void 0 !== t.icon ? (0, a(595850).J)({
                                    store: n,
                                    environment: i,
                                    name: t.title ? ? "",
                                    icon: t.icon
                                }) : n
                            }),
                            allSidebarWorkflowStores: [],
                            isTeamContentReady: !0,
                            userSharedPagesForSpaceHasLoaded: !0,
                            sidebarOrder: r.sidebarOrder
                        }
                    } catch (e) {
                        this.getCache(i).clear(n);
                        return
                    }
                }
                cacheSidebarState({
                    spaceId: e,
                    userId: t,
                    sidebarState: a,
                    environment: n
                }) {
                    let o = s(e, t),
                        r = `${e}:${t}`;
                    if (!this.cachedThisSession.has(r)) try {
                        var l;
                        let e = {
                            spaceViewId: (l = a).spaceViewId,
                            spaceId: l.spaceId,
                            spaceName: l.spaceName,
                            userId: l.userId,
                            isMember: l.isMember,
                            isPersonalSpace: l.isPersonalSpace,
                            showBookmarksSection: l.showBookmarksSection,
                            showWorkspaceSection: l.showWorkspaceSection,
                            showSharedSection: l.showSharedSection,
                            showPrivateSection: l.showPrivateSection,
                            showChatsSection: l.showChatsSection,
                            showSharedOverflowButton: l.showSharedOverflowButton,
                            showPrivateOverflowButton: l.showPrivateOverflowButton,
                            showOnlyPrivateSection: l.showOnlyPrivateSection,
                            shownSidebarSectionCount: l.shownSidebarSectionCount,
                            showTeamsOverflowButton: l.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: l.stickTemplateItemsToBottom,
                            showTeamSection: l.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: l.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: l.showEmptySharedSection,
                            showNotionAppsSection: l.showNotionAppsSection,
                            showMeetingsTodaySection: l.showMeetingsTodaySection,
                            showMeetingsSection: l.showMeetingsSection,
                            showRecentsSection: l.showRecentsSection,
                            visibleNotionApps: l.visibleNotionApps,
                            visibleSharedPagesStores: l.visibleSharedPagesStores.map(d),
                            visiblePrivatePagesStores: l.visiblePrivatePagesStores.map(d),
                            bookmarkedPagesStores: l.bookmarkedPagesStores.map(d),
                            workspacePagesStores: l.workspacePagesStores.map(d),
                            visibleTeamsStores: l.visibleTeamsStores.map(c),
                            visibleWorkflowStores: l.visibleWorkflowStores.map(u),
                            sidebarOrder: l.sidebarOrder,
                            cachedAt: Date.now(),
                            version: i
                        };
                        this.getCache(n).set(o, e), this.cachedThisSession.add(r)
                    } catch (e) {}
                }
                disableCache({
                    spaceId: e,
                    userId: t
                }) {
                    let a = `${e}:${t}`;
                    this.disabledCacheKeys.has(a) || (this.disabledCacheKeys.add(a), this.pendingResults.delete(a), this.results.delete(a))
                }
                isCacheDisabled(e, t) {
                    let a = `${e}:${t}`;
                    return this.disabledCacheKeys.has(a)
                }
                clearCachedSidebarState({
                    spaceId: e,
                    userId: t,
                    environment: a
                }) {
                    let i = s(e, t),
                        n = `${e}:${t}`;
                    this.getCache(a).clear(i), this.pendingResults.delete(n), this.results.delete(n)
                }
            }

            function s(e, t) {
                return `sidebar-state-${e}-${t}`
            }

            function l(e, t) {
                let i = new(a(970831)).B(t, e.pointer);
                return void 0 !== e.title || void 0 !== e.icon ? i.createFastRenderBlockStore(e.title ? ? [], e.icon) : i
            }

            function d(e) {
                let t = e.isDefined() ? e.getTitleValue() : [],
                    a = e.isDefined() ? e.getIcon() : void 0,
                    i = null == a ? void 0 : a.icon;
                return {
                    pointer: e.pointer,
                    title: t,
                    icon: i
                }
            }

            function c(e) {
                let t = e.isDefined() ? e.getName() : "",
                    i = e.isDefined() ? e.getRawIcon() : void 0,
                    n = e.isDefined() ? (0, a(709633).O)({
                        teamStore: e
                    }) : [];
                return {
                    pointer: e.pointer,
                    name: t,
                    icon: i,
                    pages: n.map(d)
                }
            }

            function u(e) {
                let t = e.isDefined() ? e.getData() : void 0,
                    a = null == t ? void 0 : t.name,
                    i = null == t ? void 0 : t.icon;
                return {
                    pointer: e.pointer,
                    title: a,
                    icon: i
                }
            }
            let p = new r
        },
        909751: (e, t, a) => {
            a.d(t, {
                W: () => i
            });

            function i(e) {
                let {
                    enabled: t
                } = e, i = (0, a(533992).v3)(), n = (0, a(109939).tz)(), {
                    releases: o,
                    fetchedAt: r,
                    locale: s
                } = (0, a(682985).O$)(a(479110).P), l = (0, a(682985).K8)(() => a(218744).default.getConfigKey("release_notes_cache_config", "ttlMs"), []), d = (0, a(619157).v9)((0, a(599412).H)(n)), c = Date.now(), u = t && (null === o || s !== d || void 0 === r || c - r > l);
                return (0, a(97668).Yb)(async () => {
                    if (!u) return;
                    let e = await i.api.callApi({
                            eventName: "getReleaseNotes",
                            environment: i,
                            data: {
                                locale: d
                            }
                        }),
                        t = Date.now(),
                        n = "success" === e.type ? {
                            releases: e.data.releaseNotes,
                            fetchedAt: t,
                            locale: d
                        } : {
                            releases: [],
                            fetchedAt: t,
                            locale: d
                        };
                    a(739422).l.setState("success" === e.type && e.data.releaseNotes.length > 0 ? n : void 0), a(479110).P.setState(n)
                }, [d, i, u]), {
                    releases: o
                }
            }
        },
        917441: (e, t, a) => {
            a.d(t, {
                Lp: () => r,
                Rx: () => l,
                a$: () => s
            });
            var i = a(296540),
                n = a(474848);
            let o = (0, i.createContext)(null);

            function r({
                children: e
            }) {
                let t = (0, a(533992).v3)(),
                    s = (0, a(804011).r)(t),
                    l = (0, a(119965).V)(),
                    {
                        deferSidebarLoadingWhenCollapsed: d
                    } = (0, a(42491).b8)(t.currentUser.id),
                    c = !(0, a(682985).K8)(() => (0, a(712358).K)(t), [t]) && d && l,
                    [u, p] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    let e = setTimeout(() => {
                        p(!0)
                    }, 2e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, []);
                let {
                    currentUserId: m,
                    spaceId: g,
                    isFreshStateReady: f
                } = (0, a(682985).K8)(() => {
                    var e, t, i, n;
                    null != (e = a(728372).AppStoreCurrentUserStore.state) && e.id && null != (t = (0, a(328765).S)()) && t.id && (0, a(635339).yd)("user_and_space_stores_loaded");
                    let o = null == (i = a(728372).AppStoreCurrentUserStore.state) ? void 0 : i.id,
                        r = null == (n = (0, a(328765).S)()) ? void 0 : n.id;
                    if (c) return {
                        currentUserId: o,
                        spaceId: r,
                        isFreshStateReady: !1
                    };
                    let l = s.state,
                        d = a(329464).A.state.initialRenderCompleted;
                    return {
                        currentUserId: o,
                        spaceId: r,
                        isFreshStateReady: (0, a(982853).XA)({
                            sidebarState: l,
                            userId: o,
                            spaceId: r,
                            isInitialPageRenderCompleted: d
                        })
                    }
                }, [s, c]), b = (0, a(83208).X)("enable_greedy_sidebar_initial_render"), h = (0, a(168814).X)(), y = (0, a(982853).cT)({
                    isFreshStateReady: f,
                    userId: m,
                    spaceId: g
                }), v = !!((0, a(682985).K8)(() => {
                    let e = null == y ? void 0 : y.state;
                    return m === (null == e ? void 0 : e.userId) && g === (null == e ? void 0 : e.spaceId)
                }, [y, m, g]) && (h || b) && !f && !u);
                return (0, n.jsx)(o.Provider, {
                    value: v ? y : s,
                    children: e
                })
            }

            function s() {
                let e = (0, i.useContext)(o),
                    t = (0, a(533992).v3)(),
                    n = (0, a(804011).r)(t);
                return e ? ? n
            }

            function l() {
                return (0, a(682985).O$)(s())
            }
            o.displayName = "SidebarStateContext"
        },
        920976: (e, t, a) => {
            a.d(t, {
                F: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, i.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                o = (0, a(104509).wt)("aiFacePlus", n, "default")
        },
        929092: (e, t, a) => {
            a.r(t), a.d(t, {
                AiLandingPageExperimentSwitcher: () => o
            });
            var i = a(296540),
                n = a(474848);

            function o(e) {
                let t = e.sidebarItemHoverStore,
                    n = (e.sidebarTooltipStore, (0, a(109939).tz)(), (0, a(682985).O$)(t)),
                    o = n.isSidebarItemHovered || n.isSidebarItemFocused,
                    [r, s] = ((0, a(960253).I)(() => ({
                        iconContainer: {
                            pointerEvents: o ? "auto" : "none",
                            opacity: +!!o,
                            transition: "opacity 0.1s ease-in-out"
                        }
                    }), [o]), (0, a(848135).B)());
                return (0, i.useEffect)(() => {
                    t.setState({ ...t.state,
                        isActionButton2Hovered: s
                    })
                }, [s, t]), (0, i.useCallback)(e => {
                    let i = e.target;
                    i instanceof HTMLElement && (0, a(768397).p)(i) && t.setState({ ...t.state,
                        isActionButton2Focused: !0
                    })
                }, [t]), (0, i.useCallback)(() => {
                    t.setState({ ...t.state,
                        isActionButton2Focused: !1
                    })
                }, [t]), null
            }(0, a(109939).YK)({
                aiLandingPageExperimentSwitcher: {
                    id: "aiLandingPageExperimentSwitcher",
                    defaultMessage: "AI Landing Page Experiment Switcher"
                }
            }), a(710426).MR.button
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
        938020: (e, t, a) => {
            a.d(t, {
                E4: () => d,
                QX: () => c,
                i3: () => s,
                u5: () => n,
                xS: () => r,
                xf: () => o
            }), a(944114), a(898992), a(354520), a(672577);
            var i = () => a(593186);

            function n(e) {
                return e.includes(",") || e.includes('"') || e.includes("\n") ? `"${e.replace(/"/g,'""')}"` : e
            }

            function o(e) {
                return e ? new Date(e).toISOString().slice(0, 10) : ""
            }

            function r(e, t, i = !1) {
                var n;
                if ((0, a(28299).bf)(e, t)) return "Deleted";
                let o = e.getDataStore().getValue(),
                    s = (null == o ? void 0 : o.status) === "paused" && (0, a(425749).cE)(null == o || null == (n = o.paused_reason) ? void 0 : n.reason);
                return (i ? s : s || !(0, a(28299).Wc)(e)) ? "Disabled" : "Active"
            }

            function s(e) {
                let t = e.getPermissionItems();
                if (t.find(e => "space_permission" === e.type && "none" !== e.role)) return "All workspace members";
                let i = t.filter(e => (0, a(642157).B2)(e) && "none" !== e.role).length,
                    n = t.filter(e => (0, a(642157).Ds)(e) && "none" !== e.role).length,
                    o = [];
                return i > 0 && o.push(`${i} user${1!==i?"s":""}`), n > 0 && o.push(`${n} group${1!==n?"s":""}`), o.length > 0 ? o.join(", ") : "Nobody"
            }
            let l = (0, a(109939).YK)({
                defaultModel: {
                    id: "adminContentSearchTab.agentsTable.model.default",
                    defaultMessage: "Auto"
                }
            });

            function d(e, t) {
                if (!e) return t ? t.formatMessage(l.defaultModel) : "Auto";
                let i = a(215389).U_.get(e);
                return (null == i ? void 0 : i.displayName) ? ? e
            }

            function c(e, t) {
                if (!e || !Array.isArray(e)) return "—";
                let n = e.find(e => "notion" === e.type),
                    o = !!n && (0, a(445568).isWebAccessEnabled)(n.permissions),
                    r = e.filter(e => "notion" !== e.type),
                    s = [];
                for (let e of (o && s.push("Web access"), r)) {
                    let a = i().Nh[e.type];
                    a && s.push(a.getName(t))
                }
                return s.length > 0 ? s.join(", ") : "—"
            }
        },
        940907: (e, t, a) => {
            a.d(t, {
                e: () => o
            }), a(296540);
            var i = a(474848);

            function n(e) {
                return (0, i.jsx)(a(988022).p, {
                    style: e.containerStyle,
                    disabled: !0,
                    iconLeading: a(792668).notionIcon,
                    children: "Notion"
                })
            }

            function o({
                onClick: e
            }) {
                let t = (0, a(533992).v3)(),
                    r = (0, a(682985).K8)(() => a(682141).A.getState().isActive, []),
                    s = (0, a(960253).I)(() => ({
                        notionLogoContainer: {
                            fontWeight: a(699422).Wy.semibold,
                            fontSize: 15,
                            padding: 0,
                            cursor: r ? "default" : "pointer"
                        }
                    }), [r]);
                return (0, i.jsxs)(a(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: a(801113).Hi,
                    flexShrink: 0,
                    flexGrow: 0,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 16,
                    children: [r ? (0, i.jsx)(n, {
                        containerStyle: s.notionLogoContainer
                    }) : (0, i.jsx)("span", {
                        onClick: async () => {
                            e ? e() : await a(968318).$4(t)
                        },
                        children: (0, i.jsx)(n, {
                            containerStyle: s.notionLogoContainer
                        })
                    }), (0, i.jsx)(a(405907).I, {})]
                })
            }
        },
        941451: (e, t, a) => {
            function i() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    i = (0, a(83208).X)("adoption_enable_changelog_footer_updates"),
                    o = (0, a(300846).p)(),
                    r = (0, a(226904).$)({
                        environment: e,
                        releaseDate: o,
                        enabled: i
                    });
                (0, a(909751).W)({
                    enabled: i
                });
                let s = (0, a(682985).K8)(() => (0, a(59899).x)(), []),
                    l = (0, a(682985).K8)(() => {
                        var t;
                        return (null == (t = (0, a(209507).f)({
                            environment: e
                        })) ? void 0 : t.releaseDate) || a(92609).m
                    }, [e]),
                    d = !!l && !!s && !!i && l < s && "render-new" !== r,
                    c = d ? t.formatMessage(n.tooltipBadged) : t.formatMessage(n.tooltip);
                return {
                    buttonLabel: t.formatMessage(n.caption),
                    changelogFooterUpdatesEnabled: i,
                    latestReleaseDate: s,
                    renderBadge: d,
                    tooltipLabel: c
                }
            }
            a.d(t, {
                s: () => i
            });
            let n = (0, a(109939).YK)({
                caption: {
                    id: "sidebar.appSwitcher.help.caption",
                    defaultMessage: "Help"
                },
                tooltip: {
                    id: "sidebar.appSwitcher.help.tooltip",
                    defaultMessage: "Help, contact, more…"
                },
                tooltipBadged: {
                    id: "sidebar.appSwitcher.help.tooltipBadged",
                    defaultMessage: "What’s new, help, contact, more…"
                }
            })
        },
        952567: (e, t, a) => {
            a.d(t, {
                Q: () => i
            });

            function i(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "click_upgrade_button",
                        eventProperties: t
                    }
                })
            }
        },
        960831: (e, t, a) => {
            a.d(t, {
                j: () => i
            });

            function i(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.setOverlay) ? void 0 : t.call(a(775657).electronApi, e)
            }
        },
        968318: (e, t, a) => {
            a.d(t, {
                aL: () => r,
                T7: () => o,
                Hi: () => s,
                $4: () => n
            }), a(296540);
            var i = a(474848);
            async function n(e) {
                (0, a(510504).L)({
                    variant: "open_notion"
                }), (0, a(637303).u)({
                    target: "open_notion"
                }), await (0, a(295615).VE)(e, {
                    utmContent: "topbar_cta",
                    nextRoute: a(168962).JZ.root
                })
            }

            function o(e, t) {
                let {
                    RouterStore: n
                } = e, o = n.state.route, r = (0, a(330870).a)();
                if ((0, a(104310).u)({
                        event: {
                            eventName: "public_page_topbar_edit_click",
                            eventProperties: {}
                        },
                        opts: {
                            dontWait: !0
                        }
                    }), "page" === o.name && o.requestedOnPublicDomain && r) {
                    let t = (0, a(483227).Ay)({
                        store: r,
                        preferPublicLink: !1,
                        pageVisitSource: a(254656).y8.EditPublicPage,
                        disableSlug: !0,
                        embedded: !1
                    });
                    (0, a(857400).navigateOnBaseUrl)({
                        environment: e,
                        url: t,
                        openInNewTab: o.embedded
                    });
                    return
                }
                e.currentUser.isLoggedIn() ? a(647095).ui({
                    showCancel: !0,
                    keepFocus: !1,
                    message: (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "When you start editing, your name, email and photo may become visible to anyone who can view the page.",
                        id: "action.startPublicEditDialog.message"
                    }),
                    items: [{
                        label: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Continue",
                            id: "action.startPublicEditDialog.continueLabel"
                        }),
                        color: "blue",
                        onAccept() {
                            a(827482).A.setState({
                                editing: !0,
                                commenting: !0
                            })
                        }
                    }]
                }) : (a(687544).iZ({
                    currentUserId: e.currentUser.id,
                    blockId: t
                }), (0, a(857400).navigateOnBaseUrl)({
                    environment: e,
                    url: a(168962).JZ.login
                }))
            }

            function r(e, t) {
                let {
                    RouterStore: i
                } = e, n = i.state.route, o = (0, a(330870).a)();
                if ((0, a(104310).u)({
                        event: {
                            eventName: "public_page_topbar_comment_click",
                            eventProperties: {}
                        },
                        opts: {
                            dontWait: !0
                        }
                    }), "page" === n.name && n.requestedOnPublicDomain && o) {
                    let t = (0, a(483227).Ay)({
                        store: o,
                        preferPublicLink: !1,
                        pageVisitSource: a(254656).y8.CommentPublicPage,
                        disableSlug: !0,
                        embedded: !1
                    });
                    (0, a(857400).navigateOnBaseUrl)({
                        environment: e,
                        url: t,
                        openInNewTab: n.embedded
                    });
                    return
                }
                a(687544).iZ({
                    currentUserId: e.currentUser.id,
                    blockId: t
                }), (0, a(857400).navigateOnBaseUrl)({
                    environment: e,
                    url: a(168962).JZ.login
                })
            }

            function s(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "report_form_clicked",
                        eventProperties: {
                            form_id: t
                        }
                    }
                }), (0, a(857400).navigateOnBaseUrl)({
                    environment: e,
                    url: a(168962).JZ.reportInappropriateForm
                })
            }
        },
        982853: (e, t, a) => {
            a.d(t, {
                Jf: () => r,
                XA: () => n,
                cT: () => o
            }), a(898992), a(823215);
            var i = a(296540);

            function n({
                sidebarState: e,
                userId: t,
                spaceId: a,
                isInitialPageRenderCompleted: i
            }) {
                return !!e && !!t && !!a && !e.isCached && !!e.visiblePrivatePagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleSharedPagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.bookmarkedPagesStores.slice(0, 10).every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleWorkflowStores.every(e => e.isReady()) && !!e.isTeamContentReady && !!i && !0
            }

            function o({
                isFreshStateReady: e,
                userId: t,
                spaceId: n
            }) {
                let {
                    enableSidebarStateCache: r
                } = (0, a(42491).b8)(t), [s] = (0, i.useState)(() => a(546605).Store.createValue(r && t && n ? a(903443).Ct.getCachedSidebarStateResult(n, t) : void 0, {
                    name: "cachedSidebarStateStore"
                }));
                (0, i.useEffect)(() => {
                    r && e && t && n && a(903443).Ct.disableCache({
                        spaceId: n,
                        userId: t
                    })
                }, [r, e, t, n]);
                let l = (0, a(533992).v3)();
                return (0, i.useEffect)(() => {
                    r && t && n && !a(903443).Ct.isCacheDisabled(n, t) && a(903443).Ct.getCachedSidebarState(n, t, l).then(e => s.setState(e))
                }, [t, n, l, r, s]), s
            }

            function r({
                sidebarState: e
            }) {
                let t = (0, a(533992).v3)(),
                    {
                        userId: o,
                        spaceId: s,
                        isInitialPageRenderCompleted: l
                    } = (0, a(682985).K8)(() => {
                        var e, t;
                        return {
                            userId: null == (e = a(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id,
                            spaceId: null == (t = (0, a(328765).S)()) ? void 0 : t.id,
                            isInitialPageRenderCompleted: a(329464).A.state.initialRenderCompleted
                        }
                    }, []),
                    {
                        enableSidebarStateCache: d
                    } = (0, a(42491).b8)(o);
                (0, i.useEffect)(() => {
                    !n({
                        sidebarState: e,
                        userId: o,
                        spaceId: s,
                        isInitialPageRenderCompleted: l
                    }) || o && s && e && (d ? a(903443).Ct.cacheSidebarState({
                        spaceId: s,
                        userId: o,
                        sidebarState: e,
                        environment: t
                    }) : a(903443).Ct.clearCachedSidebarState({
                        spaceId: s,
                        userId: o,
                        environment: t
                    }))
                }, [o, s, l, e, d, t])
            }
        },
        982993: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        siteSettingContentType: "initial"
                    }
                }
            }
            let o = new n
        },
        984107: (e, t, a) => {
            a.d(t, {
                dismissChatSidebar: () => i
            });

            function i() {
                "open" === a(562733).zI.state.chatPanelVisibility && a(562733).zI.update(e => ({ ...e,
                    chatPanelVisibility: "closing",
                    editorWidthUsed: 0,
                    explicitlyAddedTextSelection: void 0
                }))
            }
        },
        985269: (e, t, a) => {
            a.r(t), a.d(t, {
                OutlinerToggleOpenSetupModalButton: () => o
            }), a(296540);
            var i = a(474848);
            let n = {
                button: {
                    height: a(986939).A.isMobile ? 32 : 20,
                    width: a(986939).A.isMobile ? 32 : 20,
                    border: "none",
                    borderRadius: 3,
                    marginInlineStart: 4 * !a(986939).A.isMobile
                }
            };

            function o({
                origin: e,
                parentStore: t,
                onClick: r
            }) {
                let s = (0, a(109939).tz)(),
                    l = (0, a(682985).K8)(() => (function({
                        origin: e,
                        parentStore: t,
                        intl: i
                    }) {
                        switch (e) {
                            case "team":
                                {
                                    let e = t.table === a(832375).yKj ? t.getName() : void 0;
                                    if (e) return i.formatMessage({
                                        id: "outlinerToggleAddPageOrTemplateButton.team",
                                        defaultMessage: "Add to {teamName}"
                                    }, {
                                        teamName: e
                                    });
                                    return i.formatMessage({
                                        id: "outlinerToggleAddPageOrTemplateButton.team.unknownTeamName",
                                        defaultMessage: "Add to teamspace pages"
                                    })
                                }
                            case "private":
                                return i.formatMessage({
                                    id: "outlinerToggleAddPageOrTemplateButton.private",
                                    defaultMessage: "Add to private pages"
                                });
                            default:
                                (0, a(722371).HB)(e)
                        }
                    })({
                        origin: e,
                        parentStore: t,
                        intl: s
                    }), [e, t, s]);
                return (0, i.jsx)(a(51831).m, {
                    textWrap: !1,
                    content: () => l,
                    placement: "top",
                    children: o => (0, i.jsx)(a(64960).Ay, {
                        style: n.button,
                        ariaLabel: l,
                        onClick: () => {
                            null == r || r(), (0, a(220210).openTemplateOnboardingModal)({
                                parentStore: t,
                                template: void 0,
                                version: (0, a(220210).getTemplateOnboardingVersion)({
                                    template: void 0
                                }),
                                origin: "team" === e ? "sidebar_team_new_page" : "sidebar_private_new_page"
                            })
                        },
                        ...o,
                        children: (0, i.jsx)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            height: a(986939).A.isMobile ? 32 : 20,
                            width: a(986939).A.isMobile ? 32 : 20,
                            children: (0, i.jsx)(a(16275).I, {
                                icon: a(638501).plusSmallIcon,
                                size: "sm",
                                colorVariant: a(986939).A.isMobile ? "tertiary" : "secondary"
                            })
                        })
                    })
                })
            }
        },
        985435: (e, t, a) => {
            a.d(t, {
                y: () => i
            });

            function i(e) {
                let t = (0, a(993077).U2)(),
                    i = (0, a(682985).K8)(() => !!((null == t ? void 0 : t.isMember()) && !(null != t && t.isWorkspaceOwner())), [t]),
                    n = (0, a(972740).L)(),
                    o = (0, a(682985).K8)(() => null == n ? void 0 : n.getDisableMemberUpgradeRequests(), [n]);
                return !(a(986939).A.isMobile || o || !(0, a(262166).jR)((0, a(192159).AI)(e)) || (0, a(192159).et)(e)) && i
            }
        },
        989556: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowInCircleUpSmallIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 4.585a.63.63 0 0 0-.442.183l-2.08 2.08a.625.625 0 0 0 .884.884l1.013-1.013v4.07a.625.625 0 1 0 1.25 0V6.72l1.013 1.013a.625.625 0 0 0 .884-.884l-2.08-2.08A.63.63 0 0 0 8 4.585"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, a(104509).wt)("arrowInCircleUpSmall", n, "small")
        }
    }
]);