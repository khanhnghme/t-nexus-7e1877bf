! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "02d10295-b88e-4324-8d1b-cee80126c1a2", e._sentryDebugIdIdentifier = "sentry-dbid-02d10295-b88e-4324-8d1b-cee80126c1a2")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68600], {
        968600: function(e, n, d) {
            d.r(n), d.d(n, {
                WindowsLogo: function() {
                    return o
                }
            });
            var s = d(552322);
            let o = (0, d(507285).defineIcon)({
                className: "windowsLogo",
                viewBox: "0 0 88 88",
                svg: (0, s.jsx)("path", {
                    d: "m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z"
                })
            })
        }
    }
]);