"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [13326], {
        323052: (e, t, r) => {
            function n(e) {
                return (e = e.replace(/([0-9A-Za-z\-]+)-([0-9a-f]+)/g, (e, ...t) => `[REDACTED]-${t[1]}`)).startsWith("/api/") ? new URL(e, "https://example.com").pathname : e
            }

            function o(e, t) {
                if (e && "object" == typeof e)
                    for (let r of t) {
                        let t = e[r];
                        "string" == typeof t && (e[r] = n(t))
                    }
            }
            r.r(t), r.d(t, {
                default: () => i
            }), r(898992), r(354520), r(814603), r(147566), r(198721);
            let a = !1;

            function i(e) {
                a || (a = !0, (0, r(846657).Ko)(), function(e) {
                    let {
                        Sentry: t,
                        config: a,
                        getErrorsSampleRate: i,
                        getTracesSampleRate: l,
                        getReplaysSessionSampleRate: s,
                        getReplaysOnErrorSampleRate: d,
                        getIsProfilingEnabled: u,
                        getProfilesSampleRate: c,
                        getSentryMetricSamplingOverrides: p
                    } = e;
                    if ("local" === a.env) return;
                    let f = i(),
                        g = l(),
                        b = s(),
                        h = d(),
                        y = u(),
                        v = c(),
                        m = p();
                    t.init({
                        dsn: "https://704fe3b1898d4ccda1d05fe1ee79a1f7@o324374.ingest.sentry.io/5741876",
                        beforeSend: e => (e.tags = { ...e.tags,
                            isExperimentalBuild: a.buildTarget === r(508066).w6
                        }, a.isLocalhost && 1) ? null : e,
                        beforeSendTransaction(e) {
                            if (a.isLocalhost && 1) return null;
                            let t = e.spans;
                            return e.spans = null == t ? void 0 : t.filter(e => {
                                let t, n = e.description;
                                if (!n) return !0;
                                let o = "number" == typeof(t = null == m ? void 0 : m[n]) ? t : void 0;
                                return void 0 === o || (0, r(69741).rQ)(100 * o)
                            }), e
                        },
                        beforeBreadcrumb(e) {
                            let t = ("http" === e.type ? o(e.data, ["url"]) : "navigation" === e.category && o(e.data, ["from", "to"]), e);
                            return a.isLocalhost && 1 ? null : t
                        },
                        environment: a.env,
                        release: a.version,
                        attachStacktrace: !0,
                        integrations: [t.globalHandlersIntegration({
                            onerror: !0,
                            onunhandledrejection: !1
                        }), ...g > 0 ? [t.browserTracingIntegration()] : [], ...b > 0 || h > 0 ? [t.replayIntegration({
                            beforeAddRecordingEvent: e => {
                                if ("performanceSpan" === e.data.tag && e.data.payload.op.startsWith("navigation")) {
                                    let t = e.data.payload.description;
                                    "string" == typeof t && (e.data.payload.description = n(t))
                                }
                                return e
                            }
                        })] : [], ...y ? [t.browserProfilingIntegration()] : []],
                        ignoreErrors: ["ResizeObserver loop completed with undelivered notifications.", /^HttpRequestError/],
                        sampleRate: f,
                        tracesSampler: e => {
                            let t = m[e.name ? ? ""];
                            return "number" == typeof t ? t : g
                        },
                        replaysSessionSampleRate: b,
                        replaysOnErrorSampleRate: h,
                        profilesSampleRate: v
                    }), t.getGlobalScope().setExtra("clientVersion", a.version), t.getGlobalScope().addEventProcessor(e => (function(e) {
                        let {
                            request: t
                        } = e;
                        t && (o(t, ["url"]), o(t.headers, ["Referer"]));
                        let r = "urls" in e && Array.isArray(e.urls) ? e.urls : void 0;
                        return r && function(e) {
                            for (let t = 0; t <= e.length; t++) {
                                let r = e[t];
                                "string" == typeof r && (e[t] = n(r))
                            }
                        }(r), e
                    })(e))
                }(e), (0, r(846657).WS)(e.Sentry), r(335776).A.sdk = e.Sentry)
            }
        }
    }
]);