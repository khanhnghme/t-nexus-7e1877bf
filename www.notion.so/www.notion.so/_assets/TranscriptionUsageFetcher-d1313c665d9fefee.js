"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [30879], {
        984272: (e, t, a) => {
            a.r(t), a.d(t, {
                TranscriptionUsageFetcher: () => l
            });
            var i = a(296540);

            function l() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(723240).r)(),
                    l = (0, a(345776).T)(),
                    n = (0, i.useCallback)(async () => {
                        if (!t || !l) return;
                        let i = await e.api.callApi({
                            eventName: "getTranscriptionUsage",
                            environment: e,
                            data: {
                                spaceId: t
                            }
                        });
                        if ("success" === i.type) {
                            let e = i.data;
                            "rateLimited" === e.type ? a(992308).W.setState({
                                type: "rateLimited",
                                retryAfterSec: e.retryAfterSec
                            }) : "available" === e.eligibility ? a(992308).W.setState({
                                type: "available",
                                usage: e.usage,
                                limit: e.limit
                            }) : "unavailable" === e.eligibility ? a(992308).W.setState({
                                type: "unavailable"
                            }) : (0, a(722371).HB)(e.eligibility)
                        }
                    }, [e, t, l]);
                return (0, i.useEffect)(() => {
                    n()
                }, [n, t, l]), null
            }
        }
    }
]);