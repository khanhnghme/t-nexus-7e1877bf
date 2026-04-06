! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0d8a990e-1fd9-4c14-971a-06eb9b3fae9a", e._sentryDebugIdIdentifier = "sentry-dbid-0d8a990e-1fd9-4c14-971a-06eb9b3fae9a")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68412, 15185], {
        968412: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                LessToolsMWN: function() {
                    return d
                }
            });
            var t = r(552322),
                a = r(962753),
                i = r(387396),
                s = r(935612),
                c = r(429056),
                o = r(237469);

            function d({
                id: e,
                text: n,
                body: r,
                link: d,
                image: l,
                mobileImage: u
            }) {
                let f = (0, c.Z)();
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(s.hj, {
                        id: e,
                        children: [(0, t.jsxs)(s.Qw, {
                            children: [(0, t.jsx)(s.JQ, {
                                level: 2,
                                id: e,
                                children: n
                            }), (0, t.jsx)(s.Mi, {
                                children: r
                            }), d ? (0, t.jsx)(s.it, {
                                children: (0, t.jsx)(s.As, {
                                    url: d.href,
                                    "data-analytics-name": "less_tools_section_link",
                                    tempShouldLinksHaveArrows: !0,
                                    children: d.children
                                })
                            }) : null]
                        }), (0, t.jsx)("picture", {
                            className: o.illustration,
                            children: (0, t.jsx)(a.E, { ...l,
                                alt: l.alt || "",
                                loading: "lazy"
                            })
                        })]
                    }), (0, t.jsx)(i.T, {
                        id: f,
                        theme: "light",
                        trackScrollPoint: !0,
                        showHeading: !1,
                        variant: "block"
                    })]
                })
            }
        },
        935612: function(e, n, r) {
            "use strict";
            r.d(n, {
                Qw: function() {
                    return d
                },
                v9: function() {
                    return l
                },
                JQ: function() {
                    return u
                },
                As: function() {
                    return _
                },
                it: function() {
                    return h
                },
                Mi: function() {
                    return g
                },
                hj: function() {
                    return o
                }
            });
            var t = r(552322),
                a = r(72779),
                i = r.n(a),
                s = r(202784),
                c = r(137549);
            let o = (0, s.forwardRef)(function({
                    children: e,
                    align: n = "start",
                    noMargin: r = !1,
                    className: a,
                    ...s
                }, o) {
                    return (0, t.jsx)("div", {
                        ref: o,
                        className: i()(c.header, {
                            [c.alignStart]: "start" === n,
                            [c.alignCenter]: "center" === n,
                            [c.noMargin]: r
                        }, a),
                        ...s,
                        children: e
                    })
                }),
                d = (0, s.forwardRef)(function({
                    children: e
                }, n) {
                    return (0, t.jsx)("div", {
                        className: c.content,
                        ref: n,
                        children: e
                    })
                }),
                l = (0, s.forwardRef)(function(e, n) {
                    return (0, t.jsx)("span", { ...e,
                        className: i()(c.eyebrow, e.className),
                        ref: n
                    })
                }),
                u = (0, s.forwardRef)(function({
                    children: e,
                    level: n,
                    className: r,
                    id: a,
                    ...s
                }, o) {
                    let d = `h${n}`;
                    return (0, t.jsx)(d, {
                        id: a,
                        className: i()(c.heading, r),
                        ...s,
                        ref: o,
                        children: e
                    })
                });
            var f = r(930066);

            function _({
                children: e,
                url: n,
                tempShouldLinksHaveArrows: r = !1,
                "data-analytics-name": a
            }) {
                return (0, t.jsx)(f.u, {
                    href: n,
                    color: "theme",
                    underline: "hover",
                    "data-analytics-name": a,
                    "data-analytics-event": "click_link",
                    arrowType: r ? "right" : void 0,
                    children: e
                })
            }
            let h = (0, s.forwardRef)(function({
                    children: e
                }, n) {
                    return (0, t.jsx)("div", {
                        className: c.ctas,
                        ref: n,
                        children: e
                    })
                }),
                g = (0, s.forwardRef)(function({
                    children: e
                }, n) {
                    return (0, t.jsx)("p", {
                        className: c.subheading,
                        ref: n,
                        children: e
                    })
                })
        },
        237469: function(e) {
            e.exports = {
                illustration: "lessToolsMWN_illustration__8tDu8"
            }
        },
        137549: function(e) {
            e.exports = {
                header: "sectionHeaderV2_header__ngFed",
                content: "sectionHeaderV2_content__Nyl3t",
                eyebrow: "sectionHeaderV2_eyebrow__3XJSM",
                heading: "sectionHeaderV2_heading__YaBrD",
                subheading: "sectionHeaderV2_subheading__JZQJm",
                ctas: "sectionHeaderV2_ctas__HkHjI",
                alignStart: "sectionHeaderV2_alignStart__fM8HU",
                noMargin: "sectionHeaderV2_noMargin__ELgLA",
                alignCenter: "sectionHeaderV2_alignCenter__DkJGq",
                image: "sectionHeaderV2_image__FzA4u"
            }
        }
    }
]);