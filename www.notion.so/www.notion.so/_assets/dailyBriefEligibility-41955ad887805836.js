"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [94105], {
        318329: (e, t, n) => {
            n.d(t, {
                K_: () => a,
                Lf: () => s
            });
            var i = () => n(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    isBackendConnected: !1,
                    externalSourceName: void 0,
                    emailAddresses: [],
                    sessionId: n(92513).JW(),
                    analyticsFrom: "unknown",
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    isLoaded: !1,
                    isNotionMailProhibited: !1
                }
            }
            class o extends i().Store {
                getInitialState() {
                    return a()
                }
            }
            let s = new o;
            (0, n(202146).exposeDebugValue)("notionMailAIConnectorStore", s)
        },
        477954: (e, t, n) => {
            function i() {
                if (n(986939).A.isMobile || !n(218744).default.checkGate({
                        gateName: "agent_daily_brief"
                    })) return !1;
                let e = "authenticated" === n(875925).gv.state.status,
                    t = "authenticated" === n(318329).Lf.state.status;
                return e && t
            }

            function a() {
                return n(218744).default.checkGate({
                    gateName: "daily_brief_debug"
                })
            }
            n.r(t), n.d(t, {
                isDailyBriefDebugEnabled: () => a,
                isEligibleForDailyBrief: () => i
            })
        },
        875925: (e, t, n) => {
            n.d(t, {
                VK: () => a,
                gv: () => s
            });
            var i = () => n(546605);

            function a() {
                return {
                    currentScreen: "none",
                    status: "not_started",
                    isBackendConnected: !1,
                    externalSourceName: void 0,
                    emailAddresses: [],
                    sessionId: n(92513).JW(),
                    analyticsFrom: "unknown",
                    isConnected: !1,
                    isPersonalAuthComplete: !1,
                    isDisconnecting: !1,
                    isLoaded: !1,
                    isNotionCalendarProhibited: !1
                }
            }
            class o extends i().Store {
                getInitialState() {
                    return a()
                }
            }
            let s = new o;
            (0, n(202146).exposeDebugValue)("notionCalendarAIConnectorStore", s)
        }
    }
]);