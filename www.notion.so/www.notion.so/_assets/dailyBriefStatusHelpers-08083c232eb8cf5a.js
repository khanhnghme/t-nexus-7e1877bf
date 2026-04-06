"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [96267], {
        150513: (e, t, n) => {
            n.d(t, {
                _e: () => i,
                lu: () => o,
                y7: () => r
            }), n(581454);
            let r = "2ae17954-d9c2-807e-864e-f70fa5f34f6b",
                a = new Map;

            function i(e, t) {
                let n, r = Object.fromEntries((!(n = a.get(t)) && (n = new Intl.DateTimeFormat("en-CA", {
                        timeZone: t,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    }), a.set(t, n)), n).formatToParts(new Date(e - 144e5)).map(e => [e.type, e.value])),
                    i = r.year ? ? "0000",
                    o = r.month ? ? "00",
                    u = r.day ? ? "00";
                return `${i}-${o}-${u}`
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
                    } = e, r = new Intl.DateTimeFormat("en-US", {
                        timeZone: n,
                        weekday: "short"
                    }).format(new Date(t));
                    return "Sat" === r || "Sun" === r
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
        711336: (e, t, n) => {
            n.r(t), n.d(t, {
                SUPPRESSED_INDEFINITELY: () => r,
                getCurrentLocalDateBucket: () => a,
                getDailyBriefInfoForToday: () => u,
                getUserFirstActiveTodayPreferenceKey: () => i,
                isDailyBriefSuppressed: () => o
            });
            let r = -1;

            function a(e) {
                var t;
                let r = (null == (t = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) ? void 0 : t.time_zone) ? ? (0, n(714350).P)();
                return (0, n(150513)._e)(e, r)
            }

            function i(e) {
                return `${e}:user_first_active_today`
            }

            function o(e) {
                let t = null == e ? void 0 : e.suppressed_until;
                return null != t && (t === r || Date.now() < t)
            }

            function u(e) {
                let t = null == e ? void 0 : e.status,
                    n = null == e ? void 0 : e.generated_for_date;
                if (!t || n !== a(Date.now())) return;
                let r = "generating" === t || "ready" === t || "viewed" === t || "attempt_failed" === t ? (null == e ? void 0 : e.latest_daily_brief_thread_id) ? ? void 0 : void 0;
                return {
                    status: t,
                    threadId: r
                }
            }
        }
    }
]);