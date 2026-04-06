"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [36733], {
        328616: (e, n, t) => {
            t.r(n), t.d(n, {
                createClient: () => s,
                generateNewClientSessionId: () => r,
                getCurrentClientSessionId: () => i
            }), t(814603), t(147566), t(198721);
            let o = t(92513).JW();

            function r() {
                o = t(92513).JW()
            }

            function i() {
                return o
            }

            function s(e) {
                let n = window.location.hostname.endsWith(".notion.com"),
                    r = (t(986939).A.isAdminMode || t(986939).A.isLocalDevelopment ? void 0 : t(218744).default.getConfigKey(n ? "audio_processor_client_config_com" : "audio_processor_client_config", "url_override")) ? ? t(986939).A.audioProcessor.url,
                    {
                        maxReconnectDelayMs: i,
                        minReconnectDelayMs: s,
                        jwtToken: c,
                        isReauth: a
                    } = e,
                    l = new URLSearchParams({
                        sessionId: o
                    });
                c && l.set("token", c), a && l.set("isReauth", "true");
                let u = `${r}?${l.toString()}`;
                return new(t(471136))(u, {
                    reconnect: {
                        max: i,
                        min: s,
                        "reconnect timeout": 2500,
                        retries: 1e20
                    },
                    timeout: 2500,
                    credentials: !0,
                    transport: {
                        withCredentials: !0,
                        closeOnBeforeunload: !1
                    },
                    transportOverrides: {
                        transports: ["websocket"]
                    }
                })
            }
        },
        443560: (e, n, t) => {
            t.r(n), t.d(n, {
                createClient: () => o
            });

            function o(e) {
                let {
                    maxReconnectDelayMs: n,
                    minReconnectDelayMs: o
                } = e, r = t(92513).JW(), i = t(986939).A.proxyServiceHosts && window.location.host === t(986939).A.proxyServiceHosts.base ? t(986939).A.messageStore.url : e.urlOverride ? ? t(986939).A.messageStore.url, s = `${i}?sessionId=${encodeURIComponent(r)}`;
                return new(t(471136))(s, {
                    reconnect: {
                        max: n,
                        min: o,
                        retries: 1e20
                    },
                    credentials: !0,
                    transport: {
                        withCredentials: !0,
                        closeOnBeforeunload: e.closeOnBeforeunload ? ? !0
                    }
                })
            }
        }
    }
]);