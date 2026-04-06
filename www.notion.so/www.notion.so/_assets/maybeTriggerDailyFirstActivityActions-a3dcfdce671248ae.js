"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [86304], {
        150513: (e, t, n) => {
            n.d(t, {
                _e: () => a,
                lu: () => o,
                y7: () => i
            }), n(581454);
            let i = "2ae17954-d9c2-807e-864e-f70fa5f34f6b",
                r = new Map;

            function a(e, t) {
                let n, i = Object.fromEntries((!(n = r.get(t)) && (n = new Intl.DateTimeFormat("en-CA", {
                        timeZone: t,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    }), r.set(t, n)), n).formatToParts(new Date(e - 144e5)).map(e => [e.type, e.value])),
                    a = i.year ? ? "0000",
                    o = i.month ? ? "00",
                    l = i.day ? ? "00";
                return `${a}-${o}-${l}`
            }

            function o(e) {
                let {
                    currentTime: t,
                    timeZone: n
                } = e;
                return !(function(e) {
                    let {
                        currentTime: t,
                        timeZone: n
                    } = e, i = new Intl.DateTimeFormat("en-US", {
                        timeZone: n,
                        weekday: "short"
                    }).format(new Date(t));
                    return "Sat" === i || "Sun" === i
                }({
                    currentTime: t,
                    timeZone: n
                }) || function(e) {
                    let {
                        currentTime: t,
                        timeZone: n
                    } = e;
                    return parseInt(new Intl.DateTimeFormat("en-US", {
                        timeZone: n,
                        hour: "numeric",
                        hour12: !1
                    }).format(new Date(t)), 10) >= 13
                }({
                    currentTime: t,
                    timeZone: n
                }))
            }
        },
        388647: (e, t, n) => {
            function i(e) {
                return "on" === function(e) {
                    let {
                        disableExposureLogging: t
                    } = e;
                    return n(218744).default.checkGate({
                        gateName: "force_enable_script_agent",
                        disableExposureLogging: t
                    }) ? "on" : n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_script_agent",
                        defaultGroup: "control",
                        disableExposureLogging: t,
                        enableEventTrailLogging: !0
                    })
                }(e)
            }

            function r(e = {}) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => i({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => r,
                p: () => i
            })
        },
        603533: (e, t, n) => {
            async function i(e) {
                let t = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (t && t.getSpaceId() === e) return await t.load(), t
            }
            async function r(e) {
                var t, r;
                let {
                    environment: a,
                    userId: o,
                    spaceId: l
                } = e, [{
                    isEligibleForDailyBrief: u,
                    isDailyBriefDebugEnabled: c
                }, s] = await Promise.all([n.e(94105).then(n.bind(n, 477954)), n.e(96267).then(n.bind(n, 711336))]), {
                    getCurrentLocalDateBucket: d,
                    getUserFirstActiveTodayPreferenceKey: g,
                    isDailyBriefSuppressed: _
                } = s;
                if (!u()) return !1;
                let f = Date.now(),
                    p = (null == (t = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) ? void 0 : t.time_zone) ? ? (0, n(714350).P)(),
                    m = d(f),
                    y = n(255482).K.get({
                        userId: o,
                        key: g(l)
                    });
                if ((null == y ? void 0 : y.dateBucket) === m) return !1;
                let b = await i(l);
                if (!b) return !1;
                let v = b.getSettings();
                if ((null == v ? void 0 : v.user_daily_first_active_local_date_bucket) === m) return n(255482).K.set({
                    userId: o,
                    key: g(l),
                    value: {
                        dateBucket: m,
                        triggeredAt: v.user_daily_first_active_at_utc ? ? f
                    }
                }), !1;
                if (n(255482).K.set({
                        userId: o,
                        key: g(l),
                        value: {
                            dateBucket: m,
                            triggeredAt: f
                        }
                    }), (0, n(377796).createAndCommit)({
                        environment: a,
                        userAction: "dailyFirstActivityActions.markTriggered",
                        canUndo: !1,
                        cellTarget: {
                            spaceWithId: l
                        },
                        perform: e => {
                            n(380762).AG(b, e, {
                                user_daily_first_active_local_date_bucket: m,
                                user_daily_first_active_at_utc: f
                            })
                        }
                    }), !c() && !(0, n(150513).lu)({
                        currentTime: f,
                        timeZone: p
                    })) return !0;
                if (!_(null == v || null == (r = v.agent_personalization_settings) ? void 0 : r.daily_brief_prompt)) {
                    let e = (0, n(388647).p)({
                        environment: a,
                        disableExposureLogging: !0
                    });
                    a.api.callApi({
                        eventName: "ensureDailyBriefForToday",
                        environment: a,
                        data: {
                            spaceId: l,
                            enableScriptAgent: e,
                            setUnreadState: (0, n(828560).hw)()
                        }
                    })
                }
                return !0
            }
            n.d(t, {
                maybeTriggerDailyFirstActivity: () => r
            })
        }
    }
]);