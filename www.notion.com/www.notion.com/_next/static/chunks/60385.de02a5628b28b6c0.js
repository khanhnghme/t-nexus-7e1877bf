! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new t.Error).stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "0ebb8986-9981-4f77-8a72-fbe79600d17a", t._sentryDebugIdIdentifier = "sentry-dbid-0ebb8986-9981-4f77-8a72-fbe79600d17a")
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60385, 99546], {
        28636: function(t, n, e) {
            "use strict";
            e.d(n, {
                OD: function() {
                    return f
                },
                ko: function() {
                    return l
                },
                IU: function() {
                    return d
                },
                Nh: function() {
                    return _
                },
                Jg: function() {
                    return s
                }
            });
            var r = e(552322),
                a = e(72779),
                o = e.n(a),
                i = e(202784),
                c = e(797187),
                u = e(803887);
            let f = (0, i.forwardRef)(function({
                    as: t = "div",
                    variant: n = "default",
                    direction: e = "row",
                    align: a = "center",
                    className: i,
                    children: f,
                    ...l
                }, d) {
                    return (0, r.jsx)(c.y, {
                        as: t,
                        className: o()(u.accreditation, i, {
                            [u.compact]: "compact" === n,
                            [u.column]: "column" === e,
                            [u.alignStart]: "start" === a
                        }),
                        variant: "globalCaption",
                        ref: d,
                        ...l,
                        children: f
                    })
                }),
                l = (0, i.forwardRef)(function({
                    className: t,
                    children: n,
                    ...e
                }, a) {
                    return (0, r.jsx)("div", { ...e,
                        className: o()(u.avatar, t),
                        ref: a,
                        children: n
                    })
                }),
                d = (0, i.forwardRef)(function({
                    className: t,
                    children: n,
                    ...e
                }, a) {
                    return (0, r.jsx)("div", { ...e,
                        className: o()(u.logo, t),
                        ref: a,
                        children: n
                    })
                }),
                s = (0, i.forwardRef)(function({
                    className: t,
                    children: n,
                    ...e
                }, a) {
                    return (0, r.jsx)("span", {
                        className: o()(u.infoName, t),
                        ref: a,
                        ...e,
                        children: n
                    })
                }),
                _ = (0, i.forwardRef)(function({
                    className: t,
                    children: n,
                    ...e
                }, a) {
                    return (0, r.jsx)("span", {
                        className: o()(u.infoMeta, t),
                        ref: a,
                        ...e,
                        children: n
                    })
                })
        },
        544571: function(t, n, e) {
            "use strict";
            e.d(n, {
                pu: function() {
                    return u
                },
                Ij: function() {
                    return l
                },
                w5: function() {
                    return d
                }
            });
            var r = e(552322),
                a = e(72779),
                o = e.n(a),
                i = e(202784),
                c = e(372786);
            let u = (0, i.forwardRef)(function({
                as: t,
                className: n,
                children: e,
                align: a = "center",
                ...i
            }, u) {
                return (0, r.jsx)(t ? ? "figure", { ...i,
                    className: o()(c.quote, n, {
                        [c.quoteAlignStart]: "start" === a
                    }),
                    ref: u,
                    children: e
                })
            });
            var f = e(797187);
            let l = (0, i.forwardRef)(function({
                    className: t,
                    children: n,
                    ...e
                }, a) {
                    return (0, r.jsx)(f.y, { ...e,
                        variant: "globalQuote",
                        as: "blockquote",
                        className: o()(c.blockquote, t),
                        ref: a,
                        children: n
                    })
                }),
                d = (0, i.forwardRef)(function({
                    className: t,
                    children: n,
                    ...e
                }, a) {
                    return (0, r.jsx)("figcaption", { ...e,
                        className: t,
                        ref: a,
                        children: n
                    })
                })
        },
        60385: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                ForbesQuote: function() {
                    return i
                }
            });
            var r = e(552322);
            e(202784);
            var a = e(28636),
                o = e(544571);

            function i({
                id: t,
                quoteText: n,
                quoteLogo: e,
                className: i
            }) {
                return (0, r.jsx)("div", {
                    id: t,
                    className: i,
                    "data-analytics-scroll-point": !0,
                    "data-analytics-name": "HomepageQuote",
                    children: (0, r.jsxs)(o.pu, {
                        children: [(0, r.jsx)(o.Ij, {
                            children: n
                        }), (0, r.jsx)(o.w5, {
                            children: (0, r.jsx)(a.OD, {
                                direction: "column",
                                children: (0, r.jsx)(a.IU, {
                                    children: (0, r.jsx)("img", {
                                        src: e.src,
                                        alt: e.alt,
                                        width: 80,
                                        height: 20,
                                        loading: "lazy"
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        803887: function(t) {
            t.exports = {
                accreditation: "accreditation_accreditation___0Fyv",
                avatar: "accreditation_avatar__IAg3T",
                logo: "accreditation_logo__zDy_d",
                infoName: "accreditation_infoName__6ROSb",
                infoMeta: "accreditation_infoMeta__VckDn",
                compact: "accreditation_compact__JZP2K",
                column: "accreditation_column__k8wDl",
                alignStart: "accreditation_alignStart__DkdVz"
            }
        },
        372786: function(t) {
            t.exports = {
                quote: "quote_quote__Xm7_A",
                quoteAlignStart: "quote_quoteAlignStart__d5VQd",
                blockquote: "quote_blockquote__l8_UC",
                figcaption: "quote_figcaption___SVIP"
            }
        }
    }
]);