! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "64092e38-c708-4cfc-8099-8092291aecee", e._sentryDebugIdIdentifier = "sentry-dbid-64092e38-c708-4cfc-8099-8092291aecee")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4651], {
        780428: function(e, t, n) {
            "use strict";
            n.d(t, {
                W5: function() {
                    return l
                },
                p: function() {
                    return _
                },
                bL: function() {
                    return c
                },
                qZ: function() {
                    return h
                },
                g4: function() {
                    return g
                },
                oW: function() {
                    return b
                },
                O4: function() {
                    return f
                }
            });
            var r = n(552322),
                a = n(72779),
                o = n.n(a),
                i = n(202784),
                s = n(121662);
            let l = (0, i.forwardRef)(function({
                    as: e,
                    href: t,
                    ariaLabel: n,
                    className: a,
                    children: i,
                    layout: l = "regular",
                    prefetch: c,
                    ...d
                }, _) {
                    return (0, r.jsx)("article", { ...d,
                        className: o()(s.bento, a, {
                            [s.layoutWide]: "wide" === l
                        }),
                        ref: _,
                        children: (0, r.jsxs)("div", {
                            className: s.bentoInner,
                            children: [t ? (0, r.jsx)(e ? ? "a", {
                                href: t,
                                className: s.bentoAnchor,
                                "aria-label": n,
                                prefetch: c ? ? !1,
                                children: "\xa0"
                            }) : null, i]
                        })
                    })
                }),
                c = (0, i.forwardRef)(function({
                    className: e,
                    children: t,
                    ...n
                }, a) {
                    return (0, r.jsx)("header", { ...n,
                        className: o()(s.bentoHeader, e),
                        ref: a,
                        children: t
                    })
                });
            var d = n(797187);
            let _ = (0, i.forwardRef)(function({
                className: e,
                children: t,
                ...n
            }, a) {
                return (0, r.jsx)(d.y, { ...n,
                    ref: a,
                    as: "div",
                    variant: "globalCaption",
                    className: o()(s.bentoEyebrow, e),
                    children: t
                })
            });
            var u = n(874737);
            let f = (0, i.forwardRef)(function({
                    className: e,
                    children: t,
                    hasArrow: n = !0,
                    forceWrap: a,
                    ...i
                }, l) {
                    return (0, r.jsxs)("div", {
                        className: o()(s.bentoTitleWrapper, e, {
                            [s.bentoTitleWrapperForceWrap]: a
                        }),
                        children: [(0, r.jsx)(d.y, {
                            variant: "cardTitle",
                            as: "h2",
                            className: s.bentoTitle,
                            ...i,
                            ref: l,
                            children: t
                        }), n ? (0, r.jsx)(u.E, {
                            arrowType: "right",
                            className: s.bentoArrow
                        }) : null]
                    })
                }),
                h = (0, i.forwardRef)(function({
                    as: e,
                    className: t,
                    src: n,
                    mobileSrc: a,
                    align: i = "center",
                    ...l
                }, c) {
                    return (0, r.jsxs)("picture", {
                        className: o()(s.bentoImagePicture, t, {
                            [s.alignLeft]: "left" === i,
                            [s.alignCenter]: "center" === i,
                            [s.alignRight]: "right" === i
                        }),
                        ref: c,
                        children: [a ? (0, r.jsx)("source", {
                            srcSet: a,
                            media: "(max-width: 839px)"
                        }) : null, (0, r.jsx)(e ? ? "img", { ...l,
                            className: s.bentoImage,
                            src: n
                        })]
                    })
                }),
                b = (0, i.forwardRef)(function({
                    className: e,
                    children: t,
                    corners: n = "stylized",
                    ...a
                }, l) {
                    let c = i.Children.toArray(t).filter(e => !!i.isValidElement(e) && e.type === h).length;
                    return (0, r.jsx)("div", { ...a,
                        className: o()(s.bentoMedia, e, {
                            [s.unstyled]: "none" === n,
                            [s.noBezel]: "simple" === n,
                            [s.stackedImages]: 2 === c
                        }),
                        ref: l,
                        children: t
                    })
                });
            var y = n(914775);
            let g = (0, i.forwardRef)(function({
                as: e,
                className: t,
                src: n,
                mobileSrc: a,
                position: i = "SE",
                offsetX: l = 0,
                offsetY: c = 0,
                containerWidth: d,
                height: _,
                width: u,
                ...f
            }, h) {
                let b = {
                    [(0, y.Ay)("--layer-offset-x")]: `${l}px`,
                    [(0, y.Ay)("--layer-offset-y")]: `${c}px`,
                    width: d ? ? `${u}`
                };
                return (0, r.jsx)("div", {
                    className: o()(s.bentoLayer, t, {
                        [s.positionNorthWest]: "NW" === i,
                        [s.positionNorth]: "N" === i,
                        [s.positionNorthEast]: "NE" === i,
                        [s.positionWest]: "W" === i,
                        [s.positionEast]: "E" === i,
                        [s.positionSouthWest]: "SW" === i,
                        [s.positionSouth]: "S" === i,
                        [s.positionSouthEast]: "SE" === i
                    }),
                    style: b,
                    ref: h,
                    children: (0, r.jsxs)("picture", {
                        className: s.bentoLayerPicture,
                        children: [a ? (0, r.jsx)("source", {
                            srcSet: a,
                            media: "(max-width: 839px)"
                        }) : null, (0, r.jsx)(e ? ? "img", { ...f,
                            className: s.bentoLayerImage,
                            src: n,
                            width: u,
                            height: _
                        })]
                    })
                })
            })
        },
        604651: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AgentBentos: function() {
                    return j
                }
            });
            var r = n(552322),
                a = n(935612),
                o = n(429056),
                i = n(72779),
                s = n.n(i),
                l = n(741664),
                c = n.n(l),
                d = n(202784),
                _ = n(780428),
                u = n(208365),
                f = n(719110),
                h = n(903195),
                b = n(962753),
                y = n(50227),
                g = n(458742);

            function p(e) {
                if (e) return (0, b.N)({
                    src: e.src,
                    alt: "",
                    width: e.width,
                    height: e.height
                }).props.src
            }

            function m({
                item: e
            }) {
                let t = (0, y.F)(),
                    {
                        layout: n,
                        palettes: a,
                        align: o,
                        eyebrow: i,
                        heading: l,
                        link: m,
                        image: x,
                        isNew: w,
                        mobileImage: j,
                        secondImage: N,
                        secondMobileImage: W
                    } = e,
                    S = (0, d.useCallback)(() => {
                        f.t(t, {
                            name: "bento_cta",
                            href: m.href,
                            label: `${i}. ${l}`
                        })
                    }, [t, m.href, i, l]);
                return (0, r.jsx)(u.f6, {
                    theme: "twentytwentysix",
                    palettes: a,
                    children: ({
                        className: t
                    }) => (0, r.jsxs)(_.W5, {
                        as: c(),
                        href: m.href,
                        ariaLabel: m.children,
                        layout: n,
                        className: s()(t, {
                            [g.bentoWide]: "wide" === n
                        }),
                        onClick: S,
                        children: [(0, r.jsxs)(_.bL, {
                            children: [(0, r.jsxs)(_.p, {
                                children: [i, w ? (0, r.jsx)(u.f6, {
                                    theme: "twentytwentysix",
                                    palettes: [],
                                    children: (0, r.jsx)(h.Ct, {
                                        variant: "tertiary-rounded",
                                        messageType: "new"
                                    })
                                }) : null]
                            }), (0, r.jsx)(_.O4, {
                                children: l
                            })]
                        }), (0, r.jsxs)(_.oW, {
                            corners: N ? "stylized" : "simple",
                            children: [(0, r.jsx)(_.qZ, {
                                as: b.E,
                                ...x,
                                loading: "lazy",
                                mobileSrc: p(j),
                                align: o
                            }), N ? (0, r.jsx)(_.qZ, {
                                as: b.E,
                                ...N,
                                loading: "lazy",
                                mobileSrc: p(W)
                            }) : null, e.layerImage ? (0, r.jsx)(_.g4, {
                                as: b.E,
                                ...e.layerImage,
                                loading: "lazy",
                                position: e.layerPosition,
                                containerWidth: e.layerWidth ? ? `${e.layerImage.width/2}px`,
                                offsetX: e.layerOffsetX,
                                offsetY: e.layerOffsetY,
                                className: e.layerClassName
                            }) : null]
                        })]
                    })
                })
            }

            function x({
                items: e
            }) {
                return (0, r.jsx)("div", {
                    className: g.bentoGrid,
                    children: e.map(e => (0, r.jsx)(m, {
                        item: e
                    }, e.link.href))
                })
            }
            let w = [{
                layout: "wide",
                palettes: ["yellow"],
                align: "right",
                layerPosition: "SE",
                layerWidth: "80px",
                layerOffsetX: 12,
                layerOffsetY: 12
            }, {
                layout: "regular",
                palettes: ["red"],
                align: "center",
                layerPosition: "S",
                layerWidth: "75%",
                layerOffsetY: 12,
                layerClassName: g.layerDropShadow
            }, {
                layout: "regular",
                palettes: [],
                align: "center",
                layerPosition: "SE",
                layerWidth: "27%",
                layerOffsetX: 34,
                layerOffsetY: 12
            }, {
                layout: "regular",
                palettes: ["teal"],
                align: "right"
            }, {
                layout: "regular",
                palettes: [],
                align: "center"
            }, {
                layout: "wide",
                palettes: ["brown"],
                align: "right"
            }];

            function j({
                cards: e,
                agentsBentoHeadline: t,
                aiBentoHeadline: n
            }) {
                let i = (0, o.Z)(),
                    s = (0, o.Z)(),
                    l = e.map((e, t) => ({ ...e,
                        ...w[t]
                    }));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("section", {
                        id: i,
                        className: g.bentoSection,
                        "data-analytics-name": "HomepageAgentBentos",
                        "data-analytics-scroll-point": !0,
                        children: [(0, r.jsx)(a.hj, {
                            noMargin: !0,
                            children: (0, r.jsx)(a.JQ, {
                                level: 2,
                                children: t
                            })
                        }), (0, r.jsx)(x, {
                            items: l.slice(0, 3)
                        })]
                    }), (0, r.jsxs)("section", {
                        id: s,
                        className: g.bentoSection,
                        "data-analytics-name": "HomepageProductBentos",
                        "data-analytics-scroll-point": !0,
                        children: [(0, r.jsx)(a.hj, {
                            noMargin: !0,
                            children: (0, r.jsx)(a.JQ, {
                                level: 2,
                                children: n
                            })
                        }), (0, r.jsx)(x, {
                            items: l.slice(3, 6)
                        })]
                    })]
                })
            }
        },
        935612: function(e, t, n) {
            "use strict";
            n.d(t, {
                Qw: function() {
                    return c
                },
                v9: function() {
                    return d
                },
                JQ: function() {
                    return _
                },
                As: function() {
                    return f
                },
                it: function() {
                    return h
                },
                Mi: function() {
                    return b
                },
                hj: function() {
                    return l
                }
            });
            var r = n(552322),
                a = n(72779),
                o = n.n(a),
                i = n(202784),
                s = n(137549);
            let l = (0, i.forwardRef)(function({
                    children: e,
                    align: t = "start",
                    noMargin: n = !1,
                    className: a,
                    ...i
                }, l) {
                    return (0, r.jsx)("div", {
                        ref: l,
                        className: o()(s.header, {
                            [s.alignStart]: "start" === t,
                            [s.alignCenter]: "center" === t,
                            [s.noMargin]: n
                        }, a),
                        ...i,
                        children: e
                    })
                }),
                c = (0, i.forwardRef)(function({
                    children: e
                }, t) {
                    return (0, r.jsx)("div", {
                        className: s.content,
                        ref: t,
                        children: e
                    })
                }),
                d = (0, i.forwardRef)(function(e, t) {
                    return (0, r.jsx)("span", { ...e,
                        className: o()(s.eyebrow, e.className),
                        ref: t
                    })
                }),
                _ = (0, i.forwardRef)(function({
                    children: e,
                    level: t,
                    className: n,
                    id: a,
                    ...i
                }, l) {
                    let c = `h${t}`;
                    return (0, r.jsx)(c, {
                        id: a,
                        className: o()(s.heading, n),
                        ...i,
                        ref: l,
                        children: e
                    })
                });
            var u = n(930066);

            function f({
                children: e,
                url: t,
                tempShouldLinksHaveArrows: n = !1,
                "data-analytics-name": a
            }) {
                return (0, r.jsx)(u.u, {
                    href: t,
                    color: "theme",
                    underline: "hover",
                    "data-analytics-name": a,
                    "data-analytics-event": "click_link",
                    arrowType: n ? "right" : void 0,
                    children: e
                })
            }
            let h = (0, i.forwardRef)(function({
                    children: e
                }, t) {
                    return (0, r.jsx)("div", {
                        className: s.ctas,
                        ref: t,
                        children: e
                    })
                }),
                b = (0, i.forwardRef)(function({
                    children: e
                }, t) {
                    return (0, r.jsx)("p", {
                        className: s.subheading,
                        ref: t,
                        children: e
                    })
                })
        },
        121662: function(e) {
            e.exports = {
                bento: "bento_bento__IFnc_",
                bentoAnchor: "bento_bentoAnchor__Z2SBx",
                bentoInner: "bento_bentoInner__luLfd",
                layoutWide: "bento_layoutWide__Wg5mc",
                bentoHeader: "bento_bentoHeader__v_SR2",
                bentoTitleWrapper: "bento_bentoTitleWrapper__hiPxt",
                bentoArrow: "bento_bentoArrow__XFyfN",
                bentoMedia: "bento_bentoMedia__WgRnV",
                bentoEyebrow: "bento_bentoEyebrow__5Pr9r",
                bentoTitle: "bento_bentoTitle__ndE4v",
                bentoTitleWrapperForceWrap: "bento_bentoTitleWrapperForceWrap__l4Xbm",
                bentoImagePicture: "bento_bentoImagePicture__cWlrb",
                alignLeft: "bento_alignLeft__IxOEy",
                alignCenter: "bento_alignCenter__07ghJ",
                alignRight: "bento_alignRight__j8B9X",
                bentoImage: "bento_bentoImage__3mmqI",
                stackedImages: "bento_stackedImages__XE3Sr",
                unstyled: "bento_unstyled__W7OVO",
                noBezel: "bento_noBezel__hpgs5",
                bentoLayer: "bento_bentoLayer__b5pZT",
                bentoLayerPicture: "bento_bentoLayerPicture__BVuth",
                bentoLayerImage: "bento_bentoLayerImage__TUJy8",
                positionSouthWest: "bento_positionSouthWest__JHztp",
                positionSouth: "bento_positionSouth__XXoFm",
                positionSouthEast: "bento_positionSouthEast__y4_W_",
                positionWest: "bento_positionWest__7eW7s",
                positionEast: "bento_positionEast__SVfdX",
                positionNorthWest: "bento_positionNorthWest__wahEN",
                positionNorth: "bento_positionNorth__yu9iw",
                positionNorthEast: "bento_positionNorthEast__0Ca5y"
            }
        },
        458742: function(e) {
            e.exports = {
                bentoSection: "bentos_bentoSection__5jULI",
                bentoGrid: "bentos_bentoGrid__LBfZl",
                bentoWide: "bentos_bentoWide__XtuBE",
                layerDropShadow: "bentos_layerDropShadow__Qz0hH"
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