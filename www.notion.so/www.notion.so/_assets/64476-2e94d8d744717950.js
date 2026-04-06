"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [64476], {
        167978: (e, t, r) => {
            r.d(t, {
                A: () => i
            }), r(414783);
            var o = r(296540),
                n = r(474848);

            function a({
                chartOptions: e,
                containerHeight: t,
                getResponsiveChartOptions: i
            }) {
                let l = (0, r(193294).V0)(),
                    s = (0, o.useRef)(null),
                    [d, c] = (0, o.useState)(),
                    [u, g] = (0, o.useState)(!1),
                    p = (0, r(682985).K8)(() => i ? { ...e,
                        ...i(d, void 0)
                    } : e, [e, d, i]);
                (0, o.useEffect)(() => {
                    try {
                        let e = r(414783).chart(s.current, p);
                        return l.setState({ ...l.state,
                            chart: e,
                            responsiveChartOptions: i ? i(r(937503).o0, r(56224).bg.medium) : {}
                        }), () => {
                            l.reset(), e.destroy()
                        }
                    } catch (e) {
                        g(!0), (0, r(419750).O8)(e, {
                            from: "ResizableChart",
                            type: "HighchartsError"
                        })
                    }
                }, [l, p, i]), (0, o.useEffect)(() => {
                    let e = window.matchMedia("print"),
                        t = e => {
                            var t;
                            let r = l.state.chart;
                            if (!r || !s.current) return;
                            let o = null == (t = s.current.parentElement) ? void 0 : t.offsetWidth;
                            o && r.setSize(o, void 0, !1)
                        };
                    return e.addEventListener("change", t), () => {
                        e.removeEventListener("change", t)
                    }
                }, [l]);
                let h = (0, o.useRef)(null),
                    y = (0, o.useCallback)(e => {
                        if (null !== e)(h.current = new ResizeObserver(e => {
                            let t = l.state.chart;
                            if (!t) return;
                            let r = e[0].contentRect.width;
                            t.setSize(r, void 0, !1), c(r)
                        })).observe(e);
                        else if (h.current) {
                            var t;
                            null == (t = h.current) || t.disconnect(), h.current = null
                        }
                    }, [l]);
                return u ? (0, n.jsx)(r(819173).A, {
                    chartError: "highcharts_error"
                }) : (0, n.jsx)("div", {
                    ref: y,
                    children: (0, n.jsx)("div", {
                        ref: s
                    })
                })
            }

            function i(e) {
                let {
                    loadingProps: t,
                    containerHeight: r
                } = e;
                return t.isInitialLoading ? t.initialLoadingSvg() : (0, n.jsx)("div", {
                    style: {
                        height: r,
                        ...e.paddingInlineStart && {
                            paddingInlineStart: e.paddingInlineStart
                        },
                        ...e.paddingInlineEnd && {
                            paddingInlineEnd: e.paddingInlineEnd
                        },
                        ...e.paddingTop && {
                            paddingTop: e.paddingTop
                        },
                        ...e.paddingBottom && {
                            paddingBottom: e.paddingBottom
                        },
                        ...e.marginTop && {
                            marginTop: e.marginTop
                        }
                    },
                    className: t.isThrottledLoading ? "notion-shimmer-timeline notion-shimmer-timeline-transition" : e.className,
                    children: (0, n.jsx)(a, { ...e
                    })
                })
            }
        },
        206911: (e, t, r) => {
            r.d(t, {
                V: () => i
            }), r(296540);
            var o = r(474848);
            let n = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                a = {
                    position: "relative"
                };

            function i(e) {
                let {
                    icon: t,
                    title: i,
                    description: l,
                    secondaryDescription: s,
                    source: d,
                    ...c
                } = e;
                return (0, o.jsxs)(r(4458).VP, {
                    paddingBlock: 20,
                    gap: 6,
                    width: 340,
                    alignItems: "center",
                    justifyContent: "center",
                    style: a,
                    children: [(0, o.jsx)(r(16275).I, {
                        icon: t,
                        size: "xl",
                        colorVariant: "tertiary"
                    }), (0, o.jsxs)(r(4458).VP, {
                        gap: 16,
                        alignItems: "center",
                        justifyContent: "center",
                        style: a,
                        alignSelf: "stretch",
                        children: [(0, o.jsxs)(r(4458).VP, {
                            gap: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            style: a,
                            alignSelf: "stretch",
                            children: [(0, o.jsx)("span", {
                                style: n,
                                children: (0, o.jsx)(r(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "secondary",
                                    children: i
                                })
                            }), (0, o.jsx)("span", {
                                style: n,
                                children: (0, o.jsx)(r(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: l
                                })
                            }), s ? (0, o.jsx)(r(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "tertiary",
                                children: s
                            }) : null]
                        }), (0, o.jsx)(r(754951).UpgradeButton, {
                            display: "button",
                            width: "hug",
                            source: d,
                            ...c
                        })]
                    })]
                })
            }
        },
        235161: (e, t, r) => {
            r.d(t, {
                z: () => n
            }), r(296540);
            var o = r(474848);

            function n({
                chartType: e,
                showCopy: t
            }) {
                var i;
                let l, s, d, c = (l = (0, r(713311).Ks)(), s = (0, r(682985).K8)(() => !!(null == l ? void 0 : l.isDashboardWidget()), [l]), d = (0, r(960253).e)(), (0, r(960253).I)(() => ({
                    text: {
                        color: r(632079).Tj.text.tertiary,
                        fontSize: 14
                    },
                    container: {
                        color: "dark" === d ? r(632079).Tj.palette.gray["500"] : r(632079).Tj.palette.gray["200"],
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        ...(0, r(716188)._)(s)
                    }
                }), [s, d]));
                return (0, o.jsxs)("div", {
                    className: "line" === (i = e) ? "line-chart-loading" : "donut" === i ? "donut-chart-loading" : "number" === i ? "number-chart-loading" : "column-chart-loading",
                    style: c.container,
                    children: [(0, o.jsx)(a, {
                        chartType: e
                    }), t ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(r(884877).A, {
                            size: 8
                        }), (0, o.jsx)("div", {
                            style: c.text,
                            children: (0, o.jsx)(r(109939).sA, {
                                defaultMessage: "Preparing your chart",
                                id: "charts.initialLoading"
                            })
                        })]
                    }) : void 0]
                })
            }

            function a({
                chartType: e
            }) {
                if ("line" === e) return (0, o.jsx)(l, {});
                if ("column" === e) return (0, o.jsx)(i, {});
                if ("bar" === e) return (0, o.jsx)(i, {});
                if ("donut" === e) return (0, o.jsx)(d, {});
                if ("number" === e) return (0, o.jsx)(s, {});
                else return (0, o.jsx)(i, {})
            }

            function i() {
                return (0, o.jsxs)("svg", {
                    width: "72",
                    height: "72",
                    viewBox: "0 0 72 72",
                    fill: "none",
                    children: [(0, o.jsx)("line", {
                        className: "column-loader-1",
                        x1: "11",
                        y1: "35",
                        x2: "11",
                        y2: "53",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("line", {
                        className: "column-loader-2",
                        x1: "24",
                        y1: "19",
                        x2: "24",
                        y2: "53",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("line", {
                        className: "column-loader-3",
                        x1: "63",
                        y1: "25",
                        x2: "63",
                        y2: "53",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("line", {
                        className: "column-loader-4",
                        x1: "37",
                        y1: "29",
                        x2: "37",
                        y2: "53",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("line", {
                        className: "column-loader-5",
                        x1: "50",
                        y1: "35",
                        x2: "50",
                        y2: "53",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        strokeLinecap: "round"
                    })]
                })
            }

            function l() {
                return (0, o.jsx)("svg", {
                    width: "72",
                    height: "72",
                    viewBox: "0 0 72 72",
                    fill: "none",
                    children: (0, o.jsx)("path", {
                        d: "M4 54L10.7601 43.0148C11.4087 41.9609 12.8491 41.743 13.7804 42.5579L18.1597 46.3898C19.1109 47.2221 20.5861 46.9743 21.2132 45.8769L25.9913 37.5152C26.8134 36.0765 28.9281 36.2042 29.5711 37.7313L34.0639 48.4018C34.7639 50.0644 37.1339 50.0234 37.7761 48.3376L43.794 32.5408C43.9286 32.1875 44.1605 31.8796 44.463 31.6528L50.6123 27.0408C51.4086 26.4436 52.5228 26.5228 53.2265 27.2265L58.0379 32.0379C59.0032 33.0032 60.6305 32.7391 61.241 31.5181L68 18",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    })
                })
            }

            function s() {
                return (0, o.jsxs)("svg", {
                    width: "68",
                    height: "76",
                    viewBox: "0 0 34 38",
                    fill: "none",
                    children: [(0, o.jsx)("style", {
                        children: `
				@keyframes number-pulse {
					0%, 100% { opacity: 0.5; transform: scale(0.6); }
					50% { opacity: 0.8; transform: scale(0.5); }
				}
				.number-loader {
					animation: number-pulse 2.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
					transform-origin: center;
				}
			`
                    }), (0, o.jsx)("defs", {
                        children: (0, o.jsxs)("mask", {
                            id: "number-hash-mask",
                            children: [(0, o.jsx)("path", {
                                d: "M5.01489 12.2007H31.1926",
                                stroke: "white",
                                strokeWidth: "4",
                                strokeLinecap: "round"
                            }), (0, o.jsx)("path", {
                                d: "M2 24.261H28.1777",
                                stroke: "white",
                                strokeWidth: "4",
                                strokeLinecap: "round"
                            }), (0, o.jsx)("path", {
                                d: "M7.09937 36.0004L13.8994 2.0004",
                                stroke: "white",
                                strokeWidth: "4",
                                strokeLinecap: "round"
                            }), (0, o.jsx)("path", {
                                d: "M19.1599 36.0004L25.9599 2.0004",
                                stroke: "white",
                                strokeWidth: "4",
                                strokeLinecap: "round"
                            })]
                        })
                    }), (0, o.jsx)("g", {
                        className: "number-loader",
                        children: (0, o.jsx)("rect", {
                            x: "0",
                            y: "0",
                            width: "34",
                            height: "38",
                            fill: "currentColor",
                            mask: "url(#number-hash-mask)"
                        })
                    })]
                })
            }

            function d() {
                return (0, o.jsxs)("svg", {
                    width: "72",
                    height: "72",
                    viewBox: "0 0 72 72",
                    fill: "none",
                    children: [(0, o.jsx)("circle", {
                        className: "outer-loader",
                        cx: "36",
                        cy: "36",
                        r: "24",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("circle", {
                        className: "inner-loader",
                        cx: "36",
                        cy: "36",
                        r: "12",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    })]
                })
            }
        },
        716188: (e, t, r) => {
            function o(e) {
                return 8 * !e
            }

            function n(e) {
                return e ? {
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    padding: 10
                } : {
                    height: r(632188).iZ,
                    position: "relative",
                    top: -o(!1)
                }
            }
            r.d(t, {
                H: () => o,
                _: () => n
            })
        },
        819173: (e, t, r) => {
            r.d(t, {
                A: () => x
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 15.78 15.67",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M16.328 11.844a1.79 1.79 0 0 1 1.788 1.789v.882a1 1 0 0 1 .788.977v2.295a1 1 0 0 1-1 1H14.75a1 1 0 0 1-1-1v-2.295a1 1 0 0 1 .79-.977v-.882a1.79 1.79 0 0 1 1.788-1.79m0 4.108a.644.644 0 1 0-.001 1.289.644.644 0 0 0 0-1.289m0-3.108a.79.79 0 0 0-.789.789v.86h1.577v-.86a.79.79 0 0 0-.788-.79M5.75 5.625c.621 0 1.125.504 1.125 1.125v9c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-9c0-.621.504-1.125 1.125-1.125zm-1.375 10h1.25v-8.75h-1.25zm6.375-6c.621 0 1.125.504 1.125 1.125v5c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-5c0-.621.504-1.125 1.125-1.125zm-1.375 6h1.25v-4.75h-1.25z"
                        }), (0, n.jsx)("path", {
                            d: "M15.75 3.125c.621 0 1.125.504 1.125 1.125v6.852a3 3 0 0 0-.282-.045l-.265-.013q-.367.002-.703.099V4.375h-1.25v7.562a2.58 2.58 0 0 0-.636 1.696v.432a1.76 1.76 0 0 0-.614.78V4.25c0-.621.504-1.125 1.125-1.125z"
                        })]
                    })
                },
                i = (0, r(104509).wt)("chartBarXAxisLock", a, "default"),
                l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.61 1.59 16.77 16.82",
                    svg: (0, n.jsx)("path", {
                        d: "M4.243 4.094c.621 0 1.125.503 1.125 1.125v9l-.006.115a1.125 1.125 0 0 1-1.119 1.01h-1.5a1.125 1.125 0 0 1-1.125-1.125v-9c0-.621.504-1.125 1.125-1.125zm-1.375 10h1.25v-8.75h-1.25zm6.375-6c.621 0 1.125.503 1.125 1.125v2.029l-1.25 2.165v-4.07h-1.25v4.75h.858l-.722 1.25h-.26a1.125 1.125 0 0 1-1.126-1.124v-5c0-.621.504-1.125 1.125-1.125zm5-6.5c.621 0 1.125.503 1.125 1.125v6.36a2.6 2.6 0 0 0-1.25-.65V2.844h-1.25V8.46a2.6 2.6 0 0 0-1.25.754V2.719c0-.621.504-1.125 1.125-1.125zm-1.819 8.769a1.312 1.312 0 0 1 2.273 0l3.507 6.075a1.313 1.313 0 0 1-1.137 1.968h-7.014a1.313 1.313 0 0 1-1.137-1.968zm1.062 5.423a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m0-3.662a.55.55 0 0 0-.55.55v1.875a.55.55 0 0 0 1.1 0v-1.875a.55.55 0 0 0-.55-.55"
                    })
                },
                s = (0, r(104509).wt)("chartBarXAxisWarning", l, "default"),
                d = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 16.77 16.82",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M13.93 11.894a1.313 1.313 0 0 1 2.274 0l3.507 6.075a1.313 1.313 0 0 1-1.137 1.968H11.56a1.313 1.313 0 0 1-1.137-1.968zm1.062 5.423a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m0-3.662a.55.55 0 0 0-.55.55v1.875a.55.55 0 0 0 1.1 0v-1.875a.55.55 0 0 0-.55-.55"
                        }), (0, n.jsx)("path", {
                            d: "M3.75 3.125c.345 0 .625.28.625.625v5.098l3.017-2.64.097-.07a.626.626 0 0 1 .756.098l3.035 3.036 3.485-3.484H12.75a.626.626 0 0 1 0-1.25h3.5c.345 0 .625.28.625.624l.001 3.501a.626.626 0 0 1-1.252 0V6.697L11.723 10.6a.625.625 0 0 1-.884 0L7.774 7.533l-3.399 2.975v4.242c0 .483.392.875.875.875h4.981l-.721 1.25H5.25a2.125 2.125 0 0 1-2.125-2.125v-11c0-.345.28-.625.625-.625"
                        })]
                    })
                },
                c = (0, r(104509).wt)("chartLineUptrendWarning", d, "default"),
                u = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.5 3.07 16.39 16.87",
                    svg: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M13.533 3.09c.34.06.568.383.508.723L13.43 7.28h2.435a.625.625 0 0 1 0 1.25H13.21l-.491 2.782-1.826 3.162.307-1.744H7.78l-.65 3.684a.626.626 0 0 1-1.23-.217l.61-3.467H4.125a.625.625 0 1 1 0-1.25H6.73l.52-2.95H4.865a.625.625 0 0 1 0-1.25h2.606l.648-3.683a.625.625 0 0 1 1.232.217L8.739 7.28h3.422l.649-3.683a.625.625 0 0 1 .723-.506M8 11.48h3.422l.52-2.951H8.52zm5.925.418a1.313 1.313 0 0 1 2.273 0l3.507 6.075a1.313 1.313 0 0 1-1.137 1.969h-7.014a1.313 1.313 0 0 1-1.137-1.969zm1.061 5.423a.625.625 0 1 0 .001 1.25.625.625 0 0 0 0-1.25m0-3.662a.55.55 0 0 0-.55.55v1.875a.55.55 0 1 0 1.1 0v-1.875a.55.55 0 0 0-.55-.55",
                        clipRule: "evenodd"
                    })
                },
                g = (0, r(104509).wt)("chartNumberWarning", u, "default"),
                p = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.36 2.37 17.52 17.57",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M13.93 11.894a1.313 1.313 0 0 1 2.273 0l3.507 6.075a1.313 1.313 0 0 1-1.137 1.968H11.56a1.313 1.313 0 0 1-1.137-1.968zm1.061 5.422a.626.626 0 1 0 .001 1.252.626.626 0 0 0 0-1.252m0-3.662a.55.55 0 0 0-.55.55v1.875a.55.55 0 1 0 1.1 0v-1.875a.55.55 0 0 0-.55-.55M7.99 2.644a.624.624 0 0 1 .327 1.205A6.38 6.38 0 0 0 3.625 10 6.374 6.374 0 0 0 9.8 16.37l-.536.93a3 3 0 0 0-.138.273 7.624 7.624 0 0 1-1.137-14.93"
                        }), (0, n.jsx)("path", {
                            d: "M7.857 6.475a.625.625 0 0 1 .65 1.068 2.875 2.875 0 1 0 3.905 4.022.62.62 0 0 1 .302-.243L11.2 13.945a4.125 4.125 0 0 1-3.343-7.47M10 2.375A7.625 7.625 0 0 1 17.625 10c0 .345-.28.625-.625.625h-.11a2.66 2.66 0 0 0-3.606-.041.62.62 0 0 1-.409-.584A2.875 2.875 0 0 0 10 7.125a.625.625 0 0 1-.625-.625V3c0-.345.28-.625.625-.625m.625 3.547a4.13 4.13 0 0 1 3.452 3.453h2.267a6.376 6.376 0 0 0-5.719-5.72z"
                        })]
                    })
                },
                h = (0, r(104509).wt)("donutChartWarning", p, "default"),
                y = (0, r(109939).YK)({
                    generic: {
                        id: "CollectionChartError.somethingWrong",
                        defaultMessage: "Something is wrong with your chart data."
                    },
                    timeout: {
                        id: "CollectionChartError.queryCollectionTimeoutBody",
                        defaultMessage: "Oops! Your chart is taking too long to load."
                    },
                    offline: {
                        id: "CollectionChartError.offlineBody",
                        defaultMessage: "Go online to view this chart"
                    }
                }),
                f = (0, r(109939).YK)({
                    fixable: {
                        id: "CollectionChartError.fixableButton",
                        defaultMessage: "Help me fix"
                    },
                    queryCollectionTimeout: {
                        id: "CollectionChartError.queryCollectionTimeoutButton",
                        defaultMessage: "Learn more"
                    },
                    learnMore: {
                        id: "CollectionChartError.learnMoreButton",
                        defaultMessage: "Learn more"
                    }
                }),
                m = {
                    offlineErrorIcon: {
                        fill: r(632079).Tj.text.secondary
                    },
                    offlineErrorTitle: {
                        fontSize: 14,
                        color: r(632079).Tj.text.secondary,
                        fontWeight: void 0
                    },
                    style0: {
                        width: "100%"
                    }
                },
                x = function(e) {
                    var t;
                    let {
                        chartError: a,
                        collectionSettingsStore: i,
                        chartType: l
                    } = e, d = (0, r(533992).v3)(), c = (0, r(713311).Ks)(), u = (0, r(682985).K8)(() => !!(null == c ? void 0 : c.isDashboardWidget()), [c]), g = (0, o.useCallback)(() => {
                        if ((0, r(948033).QW)(a) && i) i.setState({
                            open: !0,
                            stack: [{
                                type: "main"
                            }]
                        });
                        else if ("queryCollection_timeout" === a) {
                            let e = (0, r(442564).x)("database.loadTimesAndPerformance");
                            (0, r(624621).L)({
                                environment: d,
                                url: e
                            })
                        } else {
                            let e = (0, r(442564).x)("guides.charts");
                            (0, r(624621).L)({
                                environment: d,
                                url: e
                            })
                        }
                    }, [a, i, d]), p = (0, r(960253).I)(() => ({
                        offlineErrorWrapper: { ...(0, r(716188)._)(u),
                            width: "100%"
                        }
                    }), [u]);
                    return "offline" === a ? (0, n.jsx)(r(272782).Ay, {
                        title: C(a),
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(460237).C,
                            size: 25,
                            style: m.offlineErrorIcon
                        }),
                        style: p.offlineErrorWrapper,
                        titleStyle: m.offlineErrorTitle
                    }) : "paywall" === a ? (0, n.jsx)(_, {}) : (0, n.jsx)(b, {
                        icon: l ? j[l] : s,
                        body: C(a),
                        buttonMessage: (t = a, (0, r(948033).QW)(t) ? (0, n.jsx)(r(109939).sA, { ...f.fixable
                        }) : "queryCollection_timeout" === t ? (0, n.jsx)(r(109939).sA, { ...f.queryCollectionTimeout
                        }) : (0, n.jsx)(r(109939).sA, { ...f.learnMore
                        })),
                        onClick: g
                    })
                };

            function _() {
                var e;
                let t, a, l = (0, r(533992).v3)(),
                    s = (0, r(972740).L)(),
                    d = (0, r(682985).K8)(() => (0, r(916804).I)(s), [s]),
                    c = (0, r(713311).Ks)(),
                    u = (0, r(682985).K8)(() => !!(null == c ? void 0 : c.isDashboardWidget()), [c]),
                    g = (0, o.useMemo)(() => (0, r(663842).m)({
                        environment: l
                    }), [l]),
                    p = l.device.isMobileNative && !g,
                    h = (0, r(682985).K8)(() => (0, r(59406).w)(l), [l]),
                    y = d || h,
                    f = (0, r(217844)._)({
                        name: "view_chart",
                        spaceId: null == s ? void 0 : s.id,
                        userId: null == (e = l.currentUser) ? void 0 : e.id,
                        amount: "unknown"
                    }),
                    x = (0, r(94418).Xq)(f);
                return t = h || d ? (0, n.jsx)(r(109939).sA, {
                    id: "CollectionChartError.paywallTitleSignedOut",
                    defaultMessage: "This workspace has already used its 1 free chart."
                }) : (0, n.jsx)(r(109939).sA, {
                    id: "CollectionChartError.paywallTitle",
                    defaultMessage: "Your workspace has already used its 1 free chart."
                }), !y && p ? a = (0, n.jsx)(r(109939).sA, {
                    id: "CollectionChartError.paywallBodyMobileNative",
                    defaultMessage: "Unfortunately, unlimited charts cannot be purchased on mobile."
                }) : y || (a = (0, n.jsx)(r(109939).sA, {
                    id: "CollectionChartError.paywallBody",
                    defaultMessage: "Upgrade to get unlimited charts. <learnmore>Learn more.</learnmore>",
                    values: {
                        learnmore: e => (0, n.jsx)(r(428217).V, {
                            href: (0, r(442564).x)("guides.charts"),
                            external: !0,
                            hoverColor: "blue",
                            children: e
                        })
                    }
                })), x ? (0, n.jsx)(r(4458).fI, {
                    gap: "inherit",
                    alignItems: "center",
                    justifyContent: "center",
                    style: { ...m.style0,
                        ...(0, r(716188)._)(u)
                    },
                    children: (0, n.jsx)(r(206911).V, {
                        icon: i,
                        title: t,
                        description: a,
                        source: "database_chart_paywall",
                        upsell: x,
                        spaceStore: s
                    })
                }) : null
            }
            let v = {
                errorIcon: {
                    width: 48,
                    height: 48,
                    fill: r(632079).Tj.icon.tertiary
                },
                message: {
                    color: r(632079).Tj.text.tertiary,
                    textAlign: "center",
                    textWrap: "balance"
                },
                button: {
                    width: "fit-content",
                    height: "initial",
                    fontSize: 14,
                    fontWeight: r(699422).Wy.medium,
                    border: `1px solid ${r(632079).Tj.border.primaryTranslucent}`,
                    lineHeight: "18px",
                    padding: "7px 12px"
                }
            };

            function b(e) {
                let t = (0, r(713311).Ks)(),
                    o = (0, r(682985).K8)(() => !!(null == t ? void 0 : t.isDashboardWidget()), [t]),
                    a = (0, r(960253).I)(() => ({
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            textAlign: "center",
                            ...(0, r(716188)._)(o),
                            fontSize: 14
                        }
                    }), [o]);
                return (0, n.jsxs)("div", {
                    style: a.container,
                    children: [e.icon ? e.icon(v.errorIcon) : (0, n.jsx)(r(16275).I, {
                        icon: s,
                        style: v.errorIcon
                    }), (0, n.jsx)(r(884877).A, {
                        size: 16
                    }), (0, n.jsx)("span", {
                        style: v.message,
                        children: e.body
                    }), (0, n.jsx)(r(884877).A, {
                        size: 16
                    }), e.buttonMessage ? (0, n.jsx)(r(988022).p, {
                        style: v.button,
                        onClick: e.onClick,
                        iconLeading: e.buttonIcon ? {
                            icon: e.buttonIcon,
                            size: "sm",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary"
                        } : void 0,
                        children: (0, n.jsx)("span", {
                            children: e.buttonMessage
                        })
                    }) : void 0]
                })
            }
            let j = {
                column: s,
                bar: s,
                line: c,
                donut: h,
                number: g,
                placeholder: s
            };

            function C(e) {
                if ((0, r(948033).QW)(e));
                else if ("queryCollection_timeout" === e) return (0, n.jsx)(r(109939).sA, { ...y.timeout
                });
                else if ("offline" === e) return (0, n.jsx)(r(109939).sA, { ...y.offline
                });
                return (0, n.jsx)(r(109939).sA, { ...y.generic
                })
            }
        },
        898431: (e, t, r) => {
            r.d(t, {
                A: () => u
            }), r(898992), r(581454), r(737550), r(414783);
            var o = r.n(r(444802)),
                n = r.n(r(923280)),
                a = r.n(r(309264)),
                i = r.n(r(984834)),
                l = r.n(r(214808));

            function s(e) {
                return {
                    maxPointWidth: 16,
                    borderRadius: 2,
                    pointPadding: .22,
                    groupPadding: .22,
                    borderColor: e.background.primary,
                    borderWidth: .5
                }
            }

            function d(e) {
                return {
                    dataLabels: { ...c(e)
                    },
                    lineWidth: 1.25,
                    states: {
                        hover: {
                            lineWidth: 1.25
                        }
                    },
                    marker: {
                        states: {
                            hover: {
                                radius: 3,
                                lineColor: e.background.primary
                            }
                        },
                        symbol: "circle",
                        enabled: !1
                    }
                }
            }

            function c(e) {
                return {
                    style: {
                        fontWeight: "normal",
                        color: e.text.secondary,
                        textOutline: "none",
                        fontSize: "12px"
                    },
                    x: -1
                }
            }
            n()(r(414783)), a()(r(414783)), i()(r(414783)), o()(r(414783)), l()(r(414783));
            let u = function(e) {
                return {
                    chart: {
                        inverted: !1,
                        animation: !1,
                        backgroundColor: "transparent",
                        style: {
                            cursor: "default",
                            fontSize: "12px",
                            fontFamily: r(699422).Tf.sans
                        },
                        marginTop: 20
                    },
                    colors: ["#2383E2"],
                    xAxis: {
                        title: {
                            margin: 16,
                            style: {
                                color: e.text.primary,
                                fontWeight: "600",
                                fontSize: "12px"
                            }
                        },
                        crosshair: {
                            color: e.buttonHoveredBackground
                        },
                        labels: {
                            distance: 8,
                            style: {
                                color: e.text.secondary,
                                fontSize: "12px",
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            }
                        },
                        lineColor: e.border.primary,
                        lineWidth: 1,
                        gridLineDashStyle: "Dot",
                        gridLineColor: e.border.primary,
                        gridLineWidth: 1.25,
                        tickWidth: 0,
                        tickColor: e.border.primary,
                        minPadding: 0,
                        maxPadding: 0,
                        dateTimeLabelFormats: {
                            day: "%b %e",
                            week: "%b %e"
                        },
                        tickPixelInterval: 100
                    },
                    yAxis: {
                        title: {
                            margin: 16,
                            style: {
                                color: e.text.primary,
                                fontWeight: "600",
                                fontSize: "12px"
                            }
                        },
                        labels: {
                            distance: 8,
                            style: {
                                color: e.text.secondary,
                                fontSize: "12px"
                            }
                        },
                        stackLabels: { ...c(e)
                        },
                        lineColor: e.border.primary,
                        lineWidth: 1,
                        gridLineDashStyle: "Dot",
                        gridLineColor: e.border.primary,
                        gridLineWidth: 1.25,
                        allowDecimals: !1
                    },
                    plotOptions: {
                        column: {
                            dataLabels: { ...c(e)
                            },
                            ...s(e)
                        },
                        bar: {
                            dataLabels: { ...c(e)
                            },
                            ...s(e)
                        },
                        pie: {
                            dataLabels: {
                                enabled: !1,
                                connectorColor: e.border.primary,
                                connectorWidth: 1,
                                connectorShape: "straight",
                                connectorPadding: 2,
                                style: {
                                    fontWeight: "normal",
                                    color: e.text.tertiary,
                                    textOutline: "none",
                                    fontSize: "10px"
                                },
                                useHTML: !0
                            },
                            borderRadius: 0,
                            borderWidth: 1,
                            borderColor: e.background.primary,
                            point: {
                                events: {
                                    legendItemClick() {
                                        let e = this.series.points.map(e => e.visible);
                                        if (e[this.index] = !e[this.index], !e.some(e => e)) return !1
                                    }
                                }
                            }
                        },
                        area: d(e),
                        areaspline: d(e),
                        series: {
                            animation: !1,
                            borderColor: "transparent",
                            events: {
                                legendItemClick() {
                                    let e = this.chart.series.map(e => e.visible);
                                    if (e[this.index] = !e[this.index], !e.some(e => e)) return !1
                                }
                            }
                        }
                    },
                    legend: {
                        symbolRadius: 2,
                        symbolHeight: 8,
                        symbolPadding: 4,
                        useHTML: !0,
                        itemStyle: {
                            fontSize: "12px",
                            color: e.text.secondary,
                            paddingTop: "2px"
                        },
                        rtl: (0, r(619157).A1)(),
                        navigation: {
                            enabled: !0,
                            activeColor: e.text.secondary,
                            inactiveColor: e.text.disabled,
                            style: {
                                color: e.text.secondary
                            }
                        },
                        itemHiddenStyle: {
                            color: e.text.disabled
                        },
                        itemHoverStyle: {
                            color: e.text.accentPrimary
                        },
                        maxHeight: 100
                    },
                    caption: {
                        align: "center",
                        style: {
                            color: e.text.secondary,
                            fontSize: "12px",
                            fontWeight: "normal",
                            useHTML: !0,
                            direction: (0, r(619157).A1)() ? "rtl" : "ltr"
                        }
                    },
                    tooltip: {
                        animation: !1,
                        shared: !0,
                        style: {
                            direction: (0, r(619157).A1)() ? "rtl" : "ltr"
                        }
                    },
                    exporting: {
                        enabled: !1,
                        fallbackToExportServer: !1,
                        allowHTML: !0
                    },
                    credits: {
                        enabled: !1
                    },
                    accessibility: {
                        enabled: !0
                    }
                }
            }
        },
        937503: (e, t, r) => {
            r.d(t, {
                AI: () => c,
                PB: () => p,
                XC: () => d,
                Yp: () => n,
                Zz: () => a,
                eq: () => u,
                ev: () => f,
                iq: () => s,
                j2: () => h,
                jQ: () => g,
                jV: () => o,
                kC: () => y,
                o0: () => i,
                p0: () => l
            });
            let o = (0, r(109939).YK)({
                    chart: {
                        defaultMessage: "chart",
                        id: "chartExport.chart"
                    },
                    exportChart: {
                        defaultMessage: "Save chart as…",
                        id: "chartExport.exportChart"
                    },
                    exportChartPreview: {
                        defaultMessage: "Preview",
                        id: "chartExport.exportChartPreview"
                    },
                    exportChartBackground: {
                        defaultMessage: "Background",
                        id: "chartExport.exportChartBackground"
                    },
                    copyPng: {
                        defaultMessage: "Copy as PNG",
                        id: "chartExport.copyAsPng"
                    },
                    downloadPng: {
                        defaultMessage: "Download PNG",
                        id: "chartExport.downloadPng"
                    },
                    downloadSvg: {
                        defaultMessage: "Download SVG",
                        id: "chartExport.downloadSVG"
                    },
                    madeWithNotion: {
                        defaultMessage: "Made with Notion",
                        id: "chartExport.madeWithNotion"
                    }
                }),
                n = 200,
                a = 2,
                i = 800,
                l = 500,
                s = 120,
                d = 96,
                c = 64,
                u = 240,
                g = 192,
                p = 128;

            function h(e) {
                let t = {
                    width: i,
                    height: l
                };
                return "none" === e && (t = {
                    width: i + u,
                    height: l + g
                }), {
                    chart: t,
                    plotOptions: {
                        pie: {
                            size: 240
                        }
                    }
                }
            }
            let y = 20,
                f = 8
        },
        948033: (e, t, r) => {
            r.d(t, {
                QW: () => s,
                dG: () => i,
                ic: () => l,
                lc: () => a,
                xG: () => d,
                ye: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            let o = new Set(["groupBy_property_not_configured", "groupBy_property_deleted", "groupBy_property_not_groupable", "groupBy_formula_not_groupable", "aggregation_property_not_configured", "aggregation_invalid", "aggregation_deleted", "stackBy_property_not_groupable", "stackBy_formula_not_groupable", "stackBy_property_deleted", "name_property_not_configured", "name_property_deleted", "name_property_invalid", "property_value_property_not_configured", "property_value_property_deleted", "property_value_property_invalid"]);

            function n({
                chartConfig: e,
                collectionSchema: t
            }) {
                if (!e || "placeholder" === e.type) return "chart_config_not_found";
                if (void 0 === e.dataConfig) return "data_model_invalid";
                if ("groups_reducer" === e.dataConfig.type) {
                    let n = e.dataConfig.groupBy;
                    if (!n) return "groupBy_property_not_configured";
                    let a = (0, r(561872)._g)({
                        schema: t,
                        property: n.property
                    });
                    if (!a) return "groupBy_property_deleted";
                    let i = (0, r(910675).Eg)(a);
                    if ("formula" === a.type && !i) return "groupBy_formula_not_groupable";
                    if (!i) return "groupBy_property_not_groupable";
                    let l = e.dataConfig.aggregationConfig;
                    if (!l) return "aggregation_property_not_configured";
                    if ("count" !== l.aggregation.aggregator) {
                        let e = l.aggregation.property,
                            o = (0, r(561872)._g)({
                                schema: t,
                                property: e
                            });
                        if (!o) return "aggregation_deleted";
                        if ((0, r(288299).FM)(l.aggregation) && o && !(0, r(56224).JW)(o) || (0, r(383243).J)(l.aggregation.aggregator) && o && !(0, r(56224).RO)(o) || (0, r(288299).ET)(l.aggregation.aggregator) && o && !(0, r(56224).y3)(o)) return "aggregation_invalid";
                        if ((null == o ? void 0 : o.type) === "formula" && "unique" === l.aggregation.aggregator) {
                            let e = (0, r(345091).getFormulaPropertySchemaResultType)(o);
                            if (!(0, r(56224).UK)(e)) return "aggregation_invalid"
                        }
                    }
                    if ((0, r(828660).m8)(e)) {
                        var o;
                        let n = null == (o = e.dataConfig.aggregationConfig.stackOptions) ? void 0 : o.groupBy.property;
                        if (n) {
                            let e = (0, r(561872)._g)({
                                schema: t,
                                property: n
                            });
                            if (!e) return "stackBy_property_deleted";
                            let o = (0, r(910675).Eg)(e);
                            if ("formula" === e.type && !o) return "stackBy_formula_not_groupable";
                            if (!o) return "stackBy_property_not_groupable"
                        }
                    }
                } else if ("results_reducer" === e.dataConfig.type) {
                    let o = e.dataConfig.nameProperty;
                    if (!o) return "name_property_not_configured";
                    let n = (0, r(561872)._g)({
                        schema: t,
                        property: o
                    });
                    if (!n) return "name_property_deleted";
                    if (!(0, r(105639).tH)(n)) return "name_property_invalid";
                    let a = e.dataConfig.valueProperty;
                    if (!a) return "property_value_property_not_configured";
                    let i = (0, r(561872)._g)({
                        schema: t,
                        property: a
                    });
                    if (!i) return "property_value_property_deleted";
                    if (!(0, r(105639).Iw)(i)) return "property_value_property_invalid"
                } else {
                    if ("number_reducer" !== e.dataConfig.type) return "data_model_invalid";
                    let o = e.dataConfig.aggregationConfig;
                    if (!o) return "aggregation_property_not_configured";
                    if ("count" !== o.aggregation.aggregator) {
                        let e = o.aggregation.property,
                            n = (0, r(561872)._g)({
                                schema: t,
                                property: e
                            });
                        if (!n) return "aggregation_deleted";
                        if ((0, r(288299).FM)(o.aggregation) && n && !(0, r(56224).JW)(n) || (0, r(383243).J)(o.aggregation.aggregator) && n && !(0, r(56224).RO)(n) || (0, r(288299).ET)(o.aggregation.aggregator) && n && !(0, r(56224).y3)(n)) return "aggregation_invalid"
                    }
                }
            }

            function a(e) {
                return "groupBy_property_not_configured" === e || "groupBy_property_deleted" === e || "groupBy_property_not_groupable" === e || "groupBy_formula_not_groupable" === e || "name_property_not_configured" === e || "name_property_deleted" === e || "name_property_invalid" === e
            }

            function i(e) {
                return "aggregation_property_not_configured" === e || "aggregation_deleted" === e || "aggregation_invalid" === e || "property_value_property_not_configured" === e || "property_value_property_deleted" === e || "property_value_property_invalid" === e
            }

            function l(e) {
                return "stackBy_property_deleted" === e || "stackBy_property_not_groupable" === e || "stackBy_formula_not_groupable" === e || "stackBy_property_no_values" === e
            }

            function s(e) {
                return o.has(e)
            }

            function d(e) {
                return "stackBy_property_no_values" === e
            }
        }
    }
]);