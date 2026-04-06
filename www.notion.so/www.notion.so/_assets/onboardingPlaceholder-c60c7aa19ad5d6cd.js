"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31426, 71831], {
        10638: (e, n, t) => {
            t.r(n), t.d(n, {
                shouldShowOnboardingPlaceholder: () => r
            });

            function r(e) {
                var n;
                let {
                    pageStore: r,
                    firstGettingStartedPageId: i,
                    postOnboardingAgentConfig: o
                } = e;
                if (!i) return !1;
                let a = r.id === i;
                if (!o.thread_id || !(0, t(596244).B)(o)) return !1;
                let g = (0, t(811853).hasOnboardingAgentMutatedFirstBlock)({
                        postOnboardingAgentConfig: o
                    }),
                    d = (0, t(73233).getOnboardingAgentVariant)(),
                    l = t(218744).default.getEligibleGroup({
                        experimentId: "uxr_debug_onboarding_agent",
                        disableExposureLogging: !0
                    });
                return a && !g && ("v1" === (n = d) || "v2" === n || "v3" === n || (0, t(565719).w)(l))
            }
        },
        73233: (e, n, t) => {
            t.d(n, {
                getOnboardingAgentVariant: () => r
            });

            function r({
                disableExposureLogging: e = !0
            } = {}) {
                let n = t(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1_no_layer",
                    disableExposureLogging: e
                });
                return void 0 !== n && "control" !== n ? n : t(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1",
                    disableExposureLogging: !0
                })
            }
        },
        565719: (e, n, t) => {
            t.d(n, {
                w: () => r
            });

            function r(e) {
                return "v1" === e || "v2" === e || "v3" === e
            }
        },
        811853: (e, n, t) => {
            t.r(n), t.d(n, {
                hasOnboardingAgentMutatedFirstBlock: () => r
            });

            function r(e) {
                let {
                    postOnboardingAgentConfig: n
                } = e;
                return !!(0, t(596244).B)(n) && !!n.has_mutated_block
            }
        }
    }
]);