! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            i = (new e.Error).stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "214892e7-e8c8-4dce-b6f6-3cd2468ee0b9", e._sentryDebugIdIdentifier = "sentry-dbid-214892e7-e8c8-4dce-b6f6-3cd2468ee0b9")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33564], {
        935612: function(e, i, n) {
            "use strict";
            n.d(i, {
                Qw: function() {
                    return g
                },
                v9: function() {
                    return s
                },
                JQ: function() {
                    return o
                },
                As: function() {
                    return h
                },
                it: function() {
                    return m
                },
                Mi: function() {
                    return f
                },
                hj: function() {
                    return l
                }
            });
            var a = n(552322),
                t = n(72779),
                r = n.n(t),
                c = n(202784),
                d = n(137549);
            let l = (0, c.forwardRef)(function({
                    children: e,
                    align: i = "start",
                    noMargin: n = !1,
                    className: t,
                    ...c
                }, l) {
                    return (0, a.jsx)("div", {
                        ref: l,
                        className: r()(d.header, {
                            [d.alignStart]: "start" === i,
                            [d.alignCenter]: "center" === i,
                            [d.noMargin]: n
                        }, t),
                        ...c,
                        children: e
                    })
                }),
                g = (0, c.forwardRef)(function({
                    children: e
                }, i) {
                    return (0, a.jsx)("div", {
                        className: d.content,
                        ref: i,
                        children: e
                    })
                }),
                s = (0, c.forwardRef)(function(e, i) {
                    return (0, a.jsx)("span", { ...e,
                        className: r()(d.eyebrow, e.className),
                        ref: i
                    })
                }),
                o = (0, c.forwardRef)(function({
                    children: e,
                    level: i,
                    className: n,
                    id: t,
                    ...c
                }, l) {
                    let g = `h${i}`;
                    return (0, a.jsx)(g, {
                        id: t,
                        className: r()(d.heading, n),
                        ...c,
                        ref: l,
                        children: e
                    })
                });
            var u = n(930066);

            function h({
                children: e,
                url: i,
                tempShouldLinksHaveArrows: n = !1,
                "data-analytics-name": t
            }) {
                return (0, a.jsx)(u.u, {
                    href: i,
                    color: "theme",
                    underline: "hover",
                    "data-analytics-name": t,
                    "data-analytics-event": "click_link",
                    arrowType: n ? "right" : void 0,
                    children: e
                })
            }
            let m = (0, c.forwardRef)(function({
                    children: e
                }, i) {
                    return (0, a.jsx)("div", {
                        className: d.ctas,
                        ref: i,
                        children: e
                    })
                }),
                f = (0, c.forwardRef)(function({
                    children: e
                }, i) {
                    return (0, a.jsx)("p", {
                        className: d.subheading,
                        ref: i,
                        children: e
                    })
                })
        },
        594572: function(e, i, n) {
            "use strict";
            n.d(i, {
                iA: function() {
                    return d
                },
                iG: function() {
                    return r
                }
            });
            var a = n(882374),
                t = n(640820);
            let r = {
                    heading: a.zGw(t.nP(), a.vs(({
                        children: [e]
                    }) => e.value)),
                    text: a.zGw(t.An(), a.vs(({
                        children: [e]
                    }) => e.value)),
                    image: a.zGw(t.lt(), a.vs(({
                        children: [e]
                    }) => ({
                        src: e.url,
                        alt: e.alt
                    }))),
                    link: a.zGw(t.Gi(), a.vs(({
                        children: [e]
                    }) => {
                        let [i] = e.children;
                        return {
                            href: e.url,
                            children: i.value
                        }
                    })),
                    list: a.zGw(t.pb(), a.vs(e => e.children.flatMap(e => e.children).flatMap(({
                        children: [e]
                    }) => e.value))),
                    markdown: t.Ri(),
                    quote: a.zGw(t.Mm(), a.vs(({
                        children: [e]
                    }) => {
                        let [i] = e.children;
                        return i.value
                    })),
                    youtube: a.zGw(t.Gi(), a.vs(({
                        children: [e]
                    }) => e.url), a.vs(e => new URL(e)), a.vs(({
                        pathname: e
                    }) => e.split("/").map(e => e.trim()).filter(Boolean)), a.bcc([a.i0J("embed"), a.zGw(a.Z_8(), a.SzQ(/^[a-zA-Z0-9_-]{11}$/))]), a.vs(([, e]) => ({
                        id: e
                    })))
                },
                c = a.Ryn({
                    src: a.Z_8(),
                    alt: a.Z_8(),
                    height: a.jtO(a.Rxh()),
                    width: a.jtO(a.Rxh())
                }),
                d = a.Ryn({ ...c.entries,
                    id: a.Z_8(),
                    height: a.Rxh(),
                    width: a.Rxh()
                });
            a.Ryn({
                heading: r.heading,
                subheading: r.text,
                primaryCTA: r.link,
                secondaryCTA: r.link,
                poster: r.image,
                video: r.image,
                mobilePoster: r.image,
                mobileVideo: r.image
            }), a.bcc([r.heading, r.text, r.image, r.image, r.image]), a.bcc([r.heading, r.text, r.image, r.image, r.image, r.image, r.image, r.image]), a.bcc([r.heading, r.heading, r.link, r.image]), a.bcc([r.heading, r.heading, r.link, r.image, r.image]), a.bcc([r.heading, r.heading, r.link, r.image, r.image, r.image]), a.bcc([r.heading, r.heading, r.link, r.image, r.image, r.image, r.image]), a.bcc([r.heading, r.heading, r.link, r.image, r.image, r.image, r.image, r.image]), a.Ryn({
                title: r.heading,
                items: a.bcc([r.link, r.link, r.link, r.link, r.link])
            }), a.Ryn({
                text: r.heading,
                body: r.text,
                link: r.link,
                mobileImage: r.image,
                image: r.image
            }), a.Ryn({
                heading: a.jtO(r.heading),
                featuredTestimonial: a.bcc([r.image, r.quote, r.link, r.image, r.youtube]),
                testimonials: a.bcc([a.bcc([r.image, r.link]), a.bcc([r.image, r.link]), a.bcc([r.image, r.link]), a.bcc([r.image, r.link]), a.bcc([r.image, r.link]), a.bcc([r.image, r.link])]),
                stats: a.bcc([r.text, r.text, r.text, r.text, r.text, r.text, r.text])
            });
            let l = a.bcc([r.text, r.heading, r.text, r.link]);
            a.Ryn({
                image: r.image,
                heading: r.heading,
                body: r.text,
                link: r.link,
                useCases: a.bcc([l, l, l, l, l, l, l, l])
            })
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