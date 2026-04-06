! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2f2fe7e5-7eb2-4413-8983-060ec7d50db8", e._sentryDebugIdIdentifier = "sentry-dbid-2f2fe7e5-7eb2-4413-8983-060ec7d50db8")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15345], {
        941734: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/product", function() {
                return t(13712)
            }])
        },
        13712: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSP: function() {
                    return s
                }
            });
            var d = t(552322),
                r = t(550950),
                i = t(224799),
                o = t(222126),
                s = !0;
            n.default = function(e) {
                let n = (0, o.d)("marketing_download_apps_rich_screens");
                return "agents" === e.variant ? (0, d.jsx)(r.K, { ...e,
                    downloadAppsExperimentVariant: n
                }) : (0, d.jsx)(i.U, { ...e,
                    downloadAppsExperimentVariant: n
                })
            }
        }
    },
    function(e) {
        e.O(0, [41664, 25675, 59680, 35411, 12123, 59138, 41619, 16501, 40820, 73187, 45670, 93975, 3547, 92888, 49774, 40179], function() {
            return e(e.s = 941734)
        }), _N_E = e.O()
    }
]);