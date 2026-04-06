"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [74063, 84444], {
        2825: (e, t, i) => {
            i.d(t, {
                A: () => n,
                b: () => o
            }), i(581454);
            var a = i(296540),
                r = i(474848);
            let n = 1,
                s = {
                    sectionTitle: {
                        fontWeight: i(699422).Wy.medium,
                        padding: 0
                    },
                    sectionIcon: {
                        flexShrink: 0,
                        width: 16,
                        height: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginInlineEnd: 8
                    },
                    chevronIcon: {
                        width: i(104509).Ev.xs,
                        height: i(104509).Ev.xs,
                        marginInlineStart: 12,
                        transition: "transform 200ms ease-out"
                    }
                };

            function o(e) {
                var t, o, d, c;
                let {
                    sections: g,
                    expandAllWhenSectionsChange: m = !1,
                    overrideExpandedState: p,
                    chevronPosition: h = "end",
                    styleOverrides: y,
                    borderedStyle: f = !1,
                    compactMode: b = !1,
                    buttonPadding: v
                } = e, x = (t = y, o = f, d = b, c = v, (0, i(960253).I)(() => {
                    let e = (null == t ? void 0 : t.sectionBackground) ? ? i(632079).Tj.background.secondary,
                        a = (null == t ? void 0 : t.sectionButtonBackground) ? ? i(632079).Tj.background.secondary,
                        r = (null == t ? void 0 : t.sectionButtonHoverBackground) ? ? i(632079).Tj.background.secondaryTranslucent;
                    return {
                        container: {
                            display: "grid",
                            gap: 8,
                            ...d ? {
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        },
                        sectionWrapper: o ? {
                            background: "transparent",
                            borderRadius: 8,
                            border: `${n}px solid ${i(632079).Tj.border.secondary}`,
                            ...d ? {
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        } : {
                            background: e,
                            borderRadius: 8,
                            ...d ? {
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        },
                        sectionButton: {
                            background: o ? "transparent" : a,
                            borderRadius: 8,
                            padding: c ? ? (d ? "6px 10px" : "8px 12px"),
                            ...d ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonWithDividerExpanded: {
                            background: o ? "transparent" : a,
                            borderBottom: `${n}px solid ${o?i(632079).Tj.border.secondary:i(632079).Tj.border.primary}`,
                            padding: c ? ? (d ? "6px 10px" : "8px 12px"),
                            borderStartStartRadius: 8,
                            borderStartEndRadius: 8,
                            borderEndStartRadius: 0,
                            borderEndEndRadius: 0,
                            ...d ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonWithDividerCollapsed: {
                            background: o ? "transparent" : a,
                            borderBottom: o ? void 0 : `1px solid ${i(632079).Tj.border.primary}`,
                            padding: c ? ? (d ? "6px 10px" : "8px 12px"),
                            borderRadius: 8,
                            ...d ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonPressed: {
                            background: u.pressed
                        },
                        sectionButtonHovered: {
                            background: r
                        },
                        titleWrapper: d ? {
                            flex: 1,
                            minWidth: 0,
                            overflow: "hidden"
                        } : {},
                        sectionContent: {
                            padding: d ? 10 : 12,
                            ...d ? {
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        }
                    }
                }, [null == t ? void 0 : t.sectionBackground, null == t ? void 0 : t.sectionButtonBackground, null == t ? void 0 : t.sectionButtonHoverBackground, d, o, c])), [j, S] = (0, a.useState)(() => {
                    let e = {};
                    for (let t of g) !t.hidden && t.initialExpanded && (e[t.key] = !0);
                    return e
                }), I = (0, a.useCallback)(e => {
                    S(t => ({ ...t,
                        [e]: !t[e]
                    }))
                }, []);
                (0, a.useEffect)(() => {
                    if (m) {
                        let e = {};
                        for (let t of g) t.hidden || (e[t.key] = !0);
                        S(e)
                    }
                }, [g, m]), (0, a.useEffect)(() => {
                    (null == p ? void 0 : p.mode) === "onceOnChange" && S(e => ({ ...e,
                        ...p.sections
                    }))
                }, [p]);
                let C = (0, a.useMemo)(() => p && "always" === p.mode ? { ...j,
                    ...p.sections
                } : j, [j, p]);
                return (0, r.jsx)("div", {
                    style: x.container,
                    children: g.map(e => {
                        if (e.hidden) return null;
                        let t = !!C[e.key],
                            i = !1 !== e.collapsible;
                        return (0, r.jsx)(l, {
                            section: e,
                            isExpanded: t,
                            isCollapsible: i,
                            chevronPosition: h,
                            onToggle: I,
                            styles: { ...x,
                                ...s
                            },
                            borderedStyle: f
                        }, e.key)
                    })
                })
            }

            function l(e) {
                let {
                    section: t,
                    isExpanded: a,
                    isCollapsible: n,
                    chevronPosition: s,
                    onToggle: o,
                    styles: l,
                    borderedStyle: u
                } = e, g = t.headerDivider ? a ? l.sectionButtonWithDividerExpanded : l.sectionButtonWithDividerCollapsed : l.sectionButton, m = (0, r.jsx)(d, {
                    section: t,
                    isExpanded: a,
                    isCollapsible: n,
                    chevronPosition: s,
                    styles: l
                });
                return (0, r.jsxs)("div", {
                    style: l.sectionWrapper,
                    children: [(0, r.jsx)("div", {
                        children: n ? (0, r.jsx)(i(64960).Ay, {
                            onClick: () => o(t.key),
                            style: g,
                            hoveredStyle: l.sectionButtonHovered,
                            children: m
                        }) : (0, r.jsx)("div", {
                            style: g,
                            children: m
                        })
                    }), t.content ? (0, r.jsx)(c, {
                        content: t.content,
                        isExpanded: a,
                        contentStyle: t.sectionContentStyleOverride ? ? l.sectionContent,
                        borderedStyle: u
                    }) : void 0]
                })
            }

            function d(e) {
                let {
                    section: t,
                    isExpanded: a,
                    isCollapsible: n,
                    chevronPosition: s,
                    styles: o
                } = e, l = n ? (0, r.jsx)(i(16275).I, {
                    icon: i(120011).arrowChevronSingleRightIcon,
                    style: { ...o.chevronIcon,
                        transform: `rotateZ(${90*!!a}deg)`
                    }
                }) : void 0, d = t.disableUILabelWrap ? t.title : (0, r.jsx)(i(324489).V, {
                    style: o.sectionTitle,
                    children: t.title
                }), c = t.secondaryLabel ? t.disableUILabelWrap ? t.secondaryLabel : (0, r.jsx)(i(324489).V, {
                    isSecondaryColor: !0,
                    children: t.secondaryLabel
                }) : void 0;
                return "start" === s && n ? (0, r.jsxs)(i(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [(0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        style: o.titleWrapper,
                        children: [(0, r.jsx)(i(16275).I, {
                            icon: i(120011).arrowChevronSingleRightIcon,
                            style: { ...o.chevronIcon,
                                marginInlineStart: 0,
                                marginInlineEnd: 8,
                                transform: `rotateZ(${90*!!a}deg)`
                            }
                        }), t.icon ? (0, r.jsx)("div", {
                            style: o.sectionIcon,
                            children: t.icon
                        }) : void 0, d]
                    }), (0, r.jsx)(i(4458).fI, {
                        alignItems: "center",
                        children: c
                    })]
                }) : (0, r.jsxs)(i(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [(0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        style: o.titleWrapper,
                        children: [t.icon ? (0, r.jsx)("div", {
                            style: o.sectionIcon,
                            children: t.icon
                        }) : void 0, d]
                    }), (0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        children: [c, l]
                    })]
                })
            }

            function c({
                content: e,
                isExpanded: t,
                contentStyle: a,
                borderedStyle: n
            }) {
                return (0, r.jsx)(i(203066).N, {
                    initial: !1,
                    children: t ? (0, r.jsx)(i(153321).P.div, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: .25,
                            ease: "easeInOut"
                        },
                        style: {
                            overflow: "hidden",
                            background: n ? void 0 : i(632079).Tj.background.primary
                        },
                        children: (0, r.jsx)("div", {
                            style: a,
                            children: e
                        })
                    }) : void 0
                })
            }
            let u = (0, i(133251)._S)({
                color: i(632079).Tj.background.secondaryTranslucent,
                pressedAdjustmentFactor: 1
            })
        },
        162819: (e, t, i) => {
            i.d(t, {
                o: () => r
            });
            var a = i(296540);

            function r(e) {
                let {
                    spaceStore: t
                } = e, r = (0, i(533992).v3)(), n = (0, i(993077).U2)(t), {
                    isMember: s,
                    spaceId: o
                } = (0, i(682985).K8)(() => ({
                    isMember: (null == n ? void 0 : n.isMember()) ? ? !1,
                    spaceId: null == t ? void 0 : t.id
                }), [n, t]);
                return (0, a.useEffect)(() => {
                    o && s && (0, i(829489).$W)({
                        environment: r,
                        spaceId: o
                    })
                }, [r, o, s]), (0, i(682985).K8)(() => i(653828).H.state.prices, [])
            }
        },
        184444: (e, t, i) => {
            function a(e) {
                return (0, i(682985).K8)(() => (0, i(993638).eJ)({
                    billingData: e
                }), [e])
            }

            function r() {
                return (0, i(682985).K8)(() => {
                    var e;
                    return (0, i(262166).OX)(null == (e = i(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.getSubscriptionTier())
                }, [])
            }
            i.d(t, {
                bw: () => a,
                on: () => g().o,
                IU: () => o,
                g4: () => l().g,
                kP: () => r,
                Wo: () => s,
                o2: () => d().o,
                bR: () => u
            });
            var n = i(296540);

            function s() {
                let e = (0, i(533992).v3)(),
                    t = (0, i(682985).K8)(() => i(375592).T.getData(e, {
                        userId: e.currentUser.id || ""
                    }), [e]),
                    [a, r] = (0, n.useState)();
                return (0, n.useEffect)(() => {
                    r(!!t && "company_employee_count" in t && parseInt(t.company_employee_count) > 99)
                }, [t]), a
            }

            function o(e) {
                let {
                    spaceId: t,
                    environment: a
                } = e, r = (0, i(855361).S)({
                    environment: a,
                    spaceId: t
                }) ? ? 1, n = (0, i(226309).lh)({
                    spaceId: t
                }), s = (0, i(682985).K8)(() => (0, i(993638).eJ)({
                    billingData: n
                }), [n]), [{
                    value: o
                }] = (0, i(97668).Yb)(() => a.api.callApi({
                    eventName: "isEmailEducation",
                    environment: a,
                    data: {}
                }), [a]);
                return !!o && "failed" !== o.type && !!o.data.isEligible && !!n && !(0, i(192159).KH)(n, "plan") && s && 1 === r
            }
            var l = () => i(585279),
                d = () => i(162819);

            function c(e) {
                var t;
                let {
                    settings: i,
                    campaign: a
                } = e;
                return null == i || null == (t = i.offers_metadata) || null == (t = t[a]) ? void 0 : t.modal_seen_at
            }

            function u(e, t = {}) {
                let a = (0, i(533992).v3)(),
                    r = (0, i(972740).L)(),
                    s = t.isEnabled ? ? !0,
                    o = (0, i(682985).K8)(() => {
                        var t;
                        if (r) return null == (t = r.getSetting("offers_metadata")) || null == (t = t[e]) ? void 0 : t.modal_seen_at
                    }, [r, e]),
                    l = (0, n.useCallback)(() => {
                        void 0 === o && function(e) {
                            let {
                                environment: t,
                                spaceStore: a,
                                campaign: r
                            } = e;
                            a && void 0 === c({
                                settings: a.getSettings(),
                                campaign: r
                            }) && (0, i(377796).createAndCommit)({
                                environment: t,
                                userAction: "offers.saveOfferModalSeen",
                                cellTarget: {
                                    spaceWithId: a.id
                                },
                                canUndo: !1,
                                perform: e => {
                                    let t = a.getSettingsStore().getValue();
                                    void 0 === t || void 0 === c({
                                        settings: t,
                                        campaign: r
                                    }) && (0, i(818116).R)(a, e, function(e) {
                                        var t;
                                        let {
                                            settings: i,
                                            campaign: a,
                                            seenAtTimestampMs: r
                                        } = e;
                                        return { ...i,
                                            offers_metadata: { ...i.offers_metadata ? ? {},
                                                [a] : { ...(null == (t = i.offers_metadata) ? void 0 : t[a]) ? ? {},
                                                    modal_seen_at : r
                                                }
                                            }
                                        }
                                    }({
                                        settings: t,
                                        campaign: r,
                                        seenAtTimestampMs: Date.now()
                                    }))
                                }
                            })
                        }({
                            environment: a,
                            spaceStore: r,
                            campaign: e
                        })
                    }, [a, r, e, o]);
                return (0, n.useEffect)(() => {
                    s && l()
                }, [s, l]), l
            }
            var g = () => i(555017)
        },
        215470: (e, t, i) => {
            i.d(t, {
                Kl: () => d,
                iV: () => n,
                jm: () => s
            }), i(944114), i(898992), i(354520), i(581454);
            var a = i(296540),
                r = i(474848);
            let n = ["M8.833 7.26a2.522 2.522 0 0 1 4.34.022.551.551 0 0 1-.95.555 1.422 1.422 0 0 0-2.446-.012L6.676 13l2.255.366a.55.55 0 0 1-.176 1.085L5.7 13.956a.55.55 0 0 1-.384-.825z", "M10.518 8.605a.705.705 0 1 1-.225 1.393.705.705 0 0 1 .225-1.393m-3.719-.602a.706.706 0 1 1-.227 1.393.706.706 0 0 1 .227-1.393M5.146 5.999a2.524 2.524 0 0 1 3.586.23.55.55 0 0 1-.83.72 1.426 1.426 0 0 0-2.023-.13.55.55 0 1 1-.733-.82", "M11.258 1.236c4.03 0 7.097 4.047 7.098 8.764s-3.069 8.762-7.098 8.763H8.743l-.375-.012C4.524 18.509 1.645 14.569 1.645 10c0-4.717 3.068-8.763 7.097-8.764zm-2.516 1.1c-3.202 0-5.998 3.31-5.998 7.664 0 4.355 2.796 7.663 5.998 7.663S14.74 14.355 14.74 10s-2.795-7.664-5.998-7.664m6.846 5.354c.164.74.253 1.516.253 2.31 0 3.134-1.356 5.97-3.446 7.522 2.699-.674 4.86-3.693 4.86-7.522a9.7 9.7 0 0 0-.275-2.31zm-.979-2.622q.396.718.672 1.523h1.35a8 8 0 0 0-.784-1.523zm-2.215-2.591a7.6 7.6 0 0 1 1.499 1.492h1.054c-.74-.738-1.614-1.258-2.553-1.492"],
                s = "M11.258 1.236c4.03 0 7.097 4.047 7.098 8.764s-3.069 8.762-7.098 8.763H8.743l-.375-.012C4.524 18.509 1.645 14.569 1.645 10c0-4.717 3.068-8.763 7.097-8.764z",
                o = (0, i(109939).YK)({
                    currentSeriesName: {
                        id: "aiUsageDashboard.creditUsage.chart.series.current",
                        defaultMessage: "Current"
                    },
                    estimatedSeriesName: {
                        id: "aiUsageDashboard.creditUsage.chart.series.estimated",
                        defaultMessage: "Estimated"
                    },
                    monthlyLimitSeriesName: {
                        id: "aiUsageDashboard.creditUsage.chart.series.monthlyLimit",
                        defaultMessage: "Monthly limit"
                    },
                    dailySeriesName: {
                        id: "aiUsageDashboard.creditUsage.chart.series.daily",
                        defaultMessage: "Daily usage"
                    },
                    creditsUnit: {
                        id: "upgradeAction.credits",
                        defaultMessage: "credits"
                    },
                    tooltipCredits: {
                        id: "aiUsageDashboard.creditUsage.chart.tooltip.credits",
                        defaultMessage: "{credits} credits"
                    },
                    tooltipEstimatedCredits: {
                        id: "aiUsageDashboard.creditUsage.chart.tooltip.estimatedCredits",
                        defaultMessage: "{credits} {estimatedStart}estimated{estimatedEnd} credits"
                    }
                }),
                l = {
                    chartWrapper: {
                        position: "relative",
                        margin: -i(393819).e,
                        padding: i(393819).e
                    },
                    chartReveal: {
                        clipPath: "inset(0 100% 0 0)"
                    }
                };

            function d({
                servicePeriodStartDate: e,
                servicePeriodEndDate: t,
                dailyUsageData: n,
                isDailyUsageLoading: s,
                isPublicBeta: c = !1,
                isCurrentPeriod: u = !1,
                servicePeriodUsage: g,
                viewMode: m
            }) {
                let p = (0, i(960253).e)(),
                    h = (0, i(632079).O4)({
                        theme: p
                    }),
                    y = (0, i(682985).uB)(void 0, i(466054).A),
                    f = (0, i(109939).tz)(),
                    b = e.toUTC().startOf("day").toMillis(),
                    v = t.toUTC().startOf("day").toMillis(),
                    [x, j] = (0, a.useState)([]),
                    S = (0, a.useRef)(null),
                    I = (0, a.useCallback)(e => {
                        let t = S.current;
                        t && (e >= 1 ? t.style.clipPath = "none" : t.style.clipPath = `inset(0 ${(1-e)*100}% 0 0)`)
                    }, []),
                    {
                        usageData: C,
                        projectionData: w,
                        totalMonthlyLimit: M
                    } = (0, a.useMemo)(() => {
                        let e = (null == n ? void 0 : n.usageData) ? ? [];
                        if (void 0 !== g) {
                            let t = i(906745).DateTime.utc().startOf("day").toMillis(),
                                a = e[e.length - 1];
                            if (!a || t > a.date) return {
                                usageData: [...e, {
                                    date: t,
                                    usage: g
                                }],
                                projectionData: (null == n ? void 0 : n.projectionData) ? ? [],
                                totalMonthlyLimit: (null == n ? void 0 : n.totalMonthlyLimit) ? ? 0
                            }
                        }
                        return {
                            usageData: e,
                            projectionData: (null == n ? void 0 : n.projectionData) ? ? [],
                            totalMonthlyLimit: (null == n ? void 0 : n.totalMonthlyLimit) ? ? 0
                        }
                    }, [n, g]),
                    k = (0, a.useMemo)(() => {
                        let e = h.border.inversePrimary,
                            t = h.border.secondary,
                            a = h.blue.border.secondary,
                            r = C.map(e => ({
                                x: e.date,
                                y: e.usage
                            }));
                        if ("daily" === m) {
                            let e = r.map((e, t) => ({
                                x: e.x,
                                y: 0 === t ? e.y : e.y - r[t - 1].y
                            }));
                            return [{
                                name: f.formatMessage(o.dailySeriesName),
                                type: "column",
                                data: e,
                                color: i(620107).x.blue[0],
                                borderRadius: 2,
                                pointWidth: 8,
                                borderWidth: 1,
                                borderColor: h.background.primary,
                                zIndex: 2,
                                enableMouseTracking: !0,
                                stickyTracking: !1,
                                findNearestPointBy: "xy",
                                states: {
                                    hover: {
                                        brightness: .08
                                    },
                                    inactive: {
                                        opacity: 1
                                    }
                                }
                            }]
                        }
                        let n = i(906745).DateTime.utc().startOf("day").toMillis(),
                            s = w.filter(e => e.date < n).map(e => ({
                                x: e.date,
                                y: e.usage
                            })),
                            l = w.filter(e => e.date >= n).map(e => ({
                                x: e.date,
                                y: e.usage
                            })),
                            d = [{
                                name: f.formatMessage(o.currentSeriesName),
                                type: "line",
                                data: r,
                                color: e,
                                dashStyle: "Solid",
                                lineWidth: 1.5,
                                zIndex: 2,
                                enableMouseTracking: !0,
                                stickyTracking: !1,
                                findNearestPointBy: "xy",
                                states: {
                                    hover: {
                                        halo: null,
                                        lineWidthPlus: 0
                                    }
                                },
                                marker: {
                                    enabled: !1,
                                    symbol: "circle",
                                    states: {
                                        hover: {
                                            enabled: !0,
                                            radius: 2,
                                            fillColor: "#000000",
                                            lineColor: "#FFFFFF",
                                            lineWidth: 1
                                        }
                                    }
                                }
                            }];
                        if (u && (s.length > 0 && d.push({
                                name: f.formatMessage(o.estimatedSeriesName),
                                type: "line",
                                data: s,
                                color: t,
                                dashStyle: "Solid",
                                lineWidth: 1.5,
                                zIndex: 1,
                                enableMouseTracking: !1,
                                showInLegend: !1,
                                marker: {
                                    enabled: !1
                                },
                                states: {
                                    hover: {
                                        halo: null,
                                        lineWidthPlus: 0
                                    }
                                }
                            }), l.length > 0)) {
                            let e = s.length > 0 ? [s[s.length - 1], ...l] : l;
                            d.push({
                                name: f.formatMessage(o.estimatedSeriesName),
                                type: "line",
                                data: e,
                                color: t,
                                dashStyle: "Solid",
                                lineWidth: 1.5,
                                zIndex: 1,
                                enableMouseTracking: !0,
                                stickyTracking: !1,
                                findNearestPointBy: "xy",
                                states: {
                                    hover: {
                                        halo: null,
                                        lineWidthPlus: 0
                                    }
                                },
                                marker: {
                                    enabled: !1,
                                    symbol: "circle",
                                    states: {
                                        hover: {
                                            enabled: !0,
                                            radius: 2,
                                            fillColor: "#000000",
                                            lineColor: "#FFFFFF",
                                            lineWidth: 1
                                        }
                                    }
                                }
                            })
                        }
                        return c || d.push({
                            name: f.formatMessage(o.monthlyLimitSeriesName),
                            id: "monthlyLimit",
                            type: "line",
                            data: w.length > 0 ? [
                                [w[0].date, M],
                                [w[w.length - 1].date, M]
                            ] : [],
                            color: a,
                            dashStyle: "Solid",
                            marker: {
                                enabled: !1
                            },
                            lineWidth: 2,
                            dataLabels: {
                                enabled: !0,
                                formatter() {
                                    if (0 !== this.point.index) return "";
                                    let e = "number" == typeof this.y ? this.y : M;
                                    return `${f.formatNumber(e)} ${f.formatMessage(o.creditsUnit)}`
                                },
                                align: "left",
                                verticalAlign: "bottom",
                                x: 0,
                                y: 12,
                                backgroundColor: h.background.primary,
                                style: {
                                    color: h.blue.text.accentPrimary,
                                    fontWeight: "normal",
                                    textOutline: "none"
                                },
                                padding: 6,
                                borderRadius: 6,
                                borderWidth: 0,
                                allowOverlap: !0,
                                crop: !1,
                                overflow: "allow"
                            },
                            zIndex: 3
                        }), d
                    }, [h, f, C, w, M, c, u, m]),
                    T = (0, a.useMemo)(() => {
                        let e = (0, i(898431).A)(h),
                            t = "daily" === m,
                            a = {
                                time: {
                                    timezone: "UTC"
                                },
                                chart: {
                                    type: t ? "column" : "line",
                                    height: 200,
                                    spacingTop: 0,
                                    spacingLeft: 0,
                                    spacingRight: 0,
                                    spacingBottom: 0,
                                    animation: !1,
                                    events: {
                                        render() {
                                            if (t) return;
                                            let e = this;
                                            requestAnimationFrame(() => {
                                                requestAnimationFrame(() => {
                                                    let t = e.series[0];
                                                    if (!t || 0 === t.points.length) return;
                                                    let a = e.plotLeft,
                                                        r = e.plotTop;
                                                    j(t.points.map(e => ({
                                                        x: (e.plotX ? ? 0) + a + i(393819).e,
                                                        y: (e.plotY ? ? 0) + r + i(393819).e
                                                    })))
                                                })
                                            })
                                        }
                                    }
                                },
                                title: {
                                    text: void 0
                                },
                                xAxis: {
                                    type: "datetime",
                                    min: b,
                                    max: v,
                                    tickPositioner() {
                                        let e = b + (v - b) / 2,
                                            t = i(906745).DateTime.fromMillis(e, {
                                                zone: "utc"
                                            }).startOf("day").toMillis();
                                        return t === b || t === v ? [b, v] : [b, t, v]
                                    },
                                    gridLineWidth: 0,
                                    minorGridLineWidth: 0,
                                    tickLength: 4,
                                    tickWidth: 1,
                                    tickColor: h.border.primary,
                                    labels: {
                                        formatter() {
                                            let e = this.value;
                                            if ("number" != typeof e) return String(e);
                                            let t = new Date(e);
                                            return f.formatDate(t, {
                                                month: "short",
                                                day: "numeric",
                                                timeZone: "UTC"
                                            })
                                        },
                                        style: {
                                            color: h.text.secondary
                                        }
                                    },
                                    title: {
                                        text: void 0
                                    },
                                    lineColor: h.border.primary,
                                    lineWidth: 1,
                                    crosshair: !t && {
                                        width: 1,
                                        color: {
                                            linearGradient: {
                                                x1: 0,
                                                y1: 0,
                                                x2: 0,
                                                y2: 1
                                            },
                                            stops: [
                                                [0, "rgba(0, 0, 0, 0)"],
                                                [.15, h.border.primary],
                                                [.85, h.border.primary],
                                                [1, "rgba(0, 0, 0, 0)"]
                                            ]
                                        },
                                        zIndex: 1
                                    }
                                },
                                yAxis: {
                                    gridLineWidth: 0,
                                    minorGridLineWidth: 0,
                                    lineWidth: 0,
                                    tickLength: 0,
                                    tickWidth: 0,
                                    min: 0,
                                    softMax: 1,
                                    maxPadding: .02,
                                    minPadding: 0,
                                    endOnTick: !1,
                                    startOnTick: !1,
                                    labels: {
                                        enabled: !1
                                    },
                                    plotLines: [{
                                        id: "baseline",
                                        value: 0,
                                        color: h.border.primary,
                                        width: 1,
                                        zIndex: 2
                                    }],
                                    visible: !0
                                },
                                tooltip: {
                                    enabled: !0,
                                    shared: !1,
                                    useHTML: !0,
                                    shape: "rect",
                                    backgroundColor: h.background.accentPrimary,
                                    borderWidth: 0,
                                    borderRadius: 6,
                                    shadow: {
                                        color: "rgba(0, 0, 0, 0.08)",
                                        offsetX: 0,
                                        offsetY: 4,
                                        width: 12
                                    },
                                    style: {
                                        color: h.text.inversePrimary
                                    },
                                    padding: 0,
                                    formatter() {
                                        if ("number" != typeof this.x || "number" != typeof this.y) return !1;
                                        let e = f.formatDate(new Date(this.x), {
                                                month: "short",
                                                day: "numeric",
                                                timeZone: "UTC"
                                            }),
                                            t = f.formatMessage(o.estimatedSeriesName),
                                            i = this.series.name === t ? f.formatMessage(o.tooltipEstimatedCredits, {
                                                credits: f.formatNumber(this.y),
                                                estimatedStart: "",
                                                estimatedEnd: ""
                                            }) : f.formatMessage(o.tooltipCredits, {
                                                credits: f.formatNumber(this.y)
                                            });
                                        return `<div style="padding: 5px 8px; font-size: 12px; line-height: 1.4;"><div style="font-weight: 600; color: ${h.text.inversePrimary};">${e}</div><div style="color: ${h.text.inverseSecondary};">${i}</div></div>`
                                    }
                                },
                                plotOptions: {
                                    series: {
                                        animation: !1,
                                        enableMouseTracking: !1,
                                        states: {
                                            hover: {
                                                enabled: !0
                                            },
                                            inactive: {
                                                opacity: 1
                                            }
                                        },
                                        marker: {
                                            enabled: !1
                                        },
                                        events: {
                                            legendItemClick: () => !1
                                        }
                                    }
                                },
                                legend: {
                                    enabled: !1
                                },
                                series: k
                            };
                        return a.yAxis && !Array.isArray(a.yAxis) && (a.yAxis.labels = {
                            enabled: !1
                        }, a.yAxis.title = {
                            text: void 0
                        }, a.yAxis.gridLineWidth = 0, a.yAxis.minorGridLineWidth = 0), i(381453).h1(e, a)
                    }, [h, k, f, b, v, m]),
                    A = "cumulative" === m;
                return (0, r.jsx)(i(4458).VP, {
                    gap: 12,
                    children: (0, r.jsx)(i(193294).Zh, {
                        value: y,
                        children: (0, r.jsxs)("div", {
                            style: l.chartWrapper,
                            children: [(0, r.jsx)("div", {
                                ref: A ? S : void 0,
                                style: A ? l.chartReveal : void 0,
                                children: (0, r.jsx)(i(167978).A, {
                                    loadingProps: {
                                        isInitialLoading: s,
                                        isThrottledLoading: !1,
                                        initialLoadingSvg: () => (0, r.jsx)(i(235161).z, {
                                            chartType: "daily" === m ? "column" : "line",
                                            showCopy: !1
                                        })
                                    },
                                    chartOptions: T,
                                    containerHeight: 200
                                })
                            }), A ? (0, r.jsx)(i(393819).E, {
                                waypoints: x,
                                isLoading: s,
                                onAnimationFrame: I
                            }, b) : void 0]
                        })
                    })
                })
            }
        },
        272782: (e, t, i) => {
            i.d(t, {
                l1: () => r,
                P6: () => o,
                Ay: () => l
            }), i(296540);
            var a = i(474848);
            let r = 16,
                n = {
                    description: {
                        margin: "0 auto",
                        textAlign: "center",
                        fontSize: 14,
                        color: i(632079).Tj.text.tertiary
                    },
                    button: {
                        marginTop: 12,
                        fontSize: 14,
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.primary
                    }
                },
                s = {
                    display: "inline",
                    padding: "1px 2px",
                    borderRadius: 3,
                    textDecoration: "underline"
                };

            function o(e) {
                return (0, a.jsx)(i(64960).Ay, {
                    style: s,
                    onClick: e.onClick,
                    children: e.children
                })
            }
            let l = function(e) {
                let {
                    title: t,
                    description: s,
                    icon: o,
                    style: l,
                    titleStyle: d,
                    buttonText: c,
                    buttonOnClick: u,
                    buttonIcon: g,
                    secondaryButtonText: m,
                    secondaryButtonOnClick: p
                } = e, h = (0, i(960253).I)(() => ({
                    wrapper: {
                        minHeight: 250,
                        height: 1,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 4,
                        padding: r,
                        ...l
                    },
                    title: {
                        fontSize: 16,
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.tertiary,
                        textAlign: "center",
                        marginBottom: -2,
                        ...d
                    }
                }), [l, d]);
                return (0, a.jsxs)("div", {
                    style: h.wrapper,
                    children: [o, (0, a.jsx)("div", {
                        style: h.title,
                        children: t
                    }), s ? (0, a.jsx)("div", {
                        style: n.description,
                        children: s
                    }) : void 0, c ? (0, a.jsx)(i(548436).A, {
                        size: "lg",
                        onClick: u,
                        style: n.button,
                        iconLeading: g ? {
                            icon: g,
                            size: "xs"
                        } : void 0,
                        children: c
                    }) : void 0, m ? (0, a.jsx)(i(548436).A, {
                        size: "lg",
                        onClick: p,
                        style: n.button,
                        children: m
                    }) : void 0]
                })
            }
        },
        363709: (e, t, i) => {
            i.d(t, {
                r: () => r
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.26 12.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8.625 2.5a.625.625 0 1 0-1.25 0v1.964a.625.625 0 1 0 1.25 0zm3.705 2.053a.625.625 0 0 0-.883-.884l-1.389 1.389a.625.625 0 0 0 .884.884zM14.125 8c0 .345-.28.625-.625.625h-1.964a.625.625 0 1 1 0-1.25H13.5c.345 0 .625.28.625.625m-2.678 4.331a.625.625 0 1 0 .884-.884l-1.39-1.389a.625.625 0 0 0-.883.884zM8 14.125a.625.625 0 0 1-.625-.625v-1.964a.625.625 0 1 1 1.25 0V13.5c0 .345-.28.625-.625.625m-4.33-2.678a.625.625 0 0 0 .883.884l1.389-1.389a.625.625 0 0 0-.884-.884zM1.875 8c0-.345.28-.625.625-.625h1.964a.625.625 0 1 1 0 1.25H2.5A.625.625 0 0 1 1.875 8m2.678-4.331a.625.625 0 1 0-.884.884l1.39 1.389a.625.625 0 1 0 .883-.884z"
                    })
                },
                r = (0, i(104509).wt)("burstSmall", a, "small")
        },
        393819: (e, t, i) => {
            i.d(t, {
                E: () => o,
                e: () => n
            }), i(944114), i(581454);
            var a = i(296540),
                r = i(474848);
            let n = 17,
                s = {
                    container: {
                        position: "absolute",
                        pointerEvents: "none",
                        zIndex: 99
                    },
                    glowAndTail: {
                        opacity: .5
                    },
                    glowTailSvg: {
                        position: "absolute",
                        display: "block",
                        width: 200,
                        height: 200,
                        insetInlineStart: -83,
                        top: -83,
                        pointerEvents: "none"
                    },
                    coinSvg: {
                        position: "absolute",
                        display: "block",
                        width: 34,
                        height: 34,
                        insetInlineStart: 0,
                        top: 0,
                        borderRadius: "50%",
                        zIndex: 10
                    },
                    glowCircleAnimation: {
                        animation: "aiCoinGlowPulse 2s cubic-bezier(0.45, 0, 0.55, 1) infinite",
                        transformOrigin: "0px 0px"
                    }
                };

            function o({
                waypoints: e,
                isLoading: t,
                onAnimationFrame: n
            }) {
                let {
                    x: l,
                    y: d,
                    tailAngle: c,
                    isAnimating: u,
                    visible: g
                } = function(e, t) {
                    let i = (0, a.useRef)(!1),
                        r = (0, a.useRef)(0),
                        n = (0, a.useRef)(t);
                    n.current = t;
                    let [s, o] = (0, a.useState)({
                        x: 0,
                        y: 0,
                        tailAngle: Math.PI,
                        isAnimating: !1,
                        visible: !1
                    });
                    return (0, a.useEffect)(() => {
                        let t;
                        if (e.length < 2) {
                            1 === e.length && (o({
                                x: e[0].x,
                                y: e[0].y,
                                tailAngle: Math.PI,
                                isAnimating: !1,
                                visible: !0
                            }), n.current(1));
                            return
                        }
                        if (i.current) {
                            let t = e[0],
                                i = e[e.length - 1],
                                a = Math.atan2(i.y - t.y, i.x - t.x) + Math.PI;
                            o({
                                x: i.x,
                                y: i.y,
                                tailAngle: a,
                                isAnimating: !1,
                                visible: !0
                            });
                            return
                        }
                        let a = [0];
                        for (let t = 1; t < e.length; t++) {
                            let i = e[t].x - e[t - 1].x,
                                r = e[t].y - e[t - 1].y;
                            a.push(a[t - 1] + Math.sqrt(i * i + r * r))
                        }
                        let s = a[a.length - 1];
                        if (0 === s) {
                            let t = e[e.length - 1];
                            o({
                                x: t.x,
                                y: t.y,
                                tailAngle: Math.PI,
                                isAnimating: !1,
                                visible: !0
                            }), i.current = !0, n.current(1);
                            return
                        }
                        let l = e[0],
                            d = e[e.length - 1],
                            c = Math.atan2(d.y - l.y, d.x - l.x) + Math.PI;
                        return o({
                            x: e[0].x,
                            y: e[0].y,
                            tailAngle: c,
                            isAnimating: !0,
                            visible: !0
                        }), r.current = requestAnimationFrame(function l(d) {
                            void 0 === t && (t = d + 100);
                            let u = d - t;
                            if (u < 0) {
                                o({
                                    x: e[0].x,
                                    y: e[0].y,
                                    tailAngle: c,
                                    isAnimating: !0,
                                    visible: !0
                                }), n.current(0), r.current = requestAnimationFrame(l);
                                return
                            }
                            let g = Math.min(u / 800, 1),
                                m = (g < .5 ? 4 * g * g * g : 1 - Math.pow(-2 * g + 2, 3) / 2) * s,
                                p = 0;
                            for (let e = 1; e < a.length; e++) {
                                if (a[e] >= m) {
                                    p = e - 1;
                                    break
                                }
                                p = e - 1
                            }
                            let h = a[p],
                                y = a[p + 1] - h,
                                f = y > 0 ? (m - h) / y : 0,
                                b = e[p],
                                v = e[p + 1];
                            o({
                                x: b.x + (v.x - b.x) * f,
                                y: b.y + (v.y - b.y) * f,
                                tailAngle: c,
                                isAnimating: g < 1,
                                visible: !0
                            }), n.current(g), g < 1 ? r.current = requestAnimationFrame(l) : i.current = !0
                        }), () => {
                            r.current > 0 && cancelAnimationFrame(r.current)
                        }
                    }, [e]), s
                }(e, n);
                if (t || 0 === e.length) return null;
                let m = 180 * c / Math.PI;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("style", {
                        children: `
				@keyframes aiCoinFloat {
					0%, 100% { transform: translateY(2px); }
					50% { transform: translateY(-2px); }
				}
				@keyframes aiCoinGlowPulse {
					0%, 100% { r: 16; }
					50% { r: 18; }
				}
			`
                    }), (0, r.jsxs)("div", {
                        style: { ...s.container,
                            insetInlineStart: l - 17,
                            top: d - 17,
                            opacity: +!!g,
                            animation: u ? void 0 : "aiCoinFloat 2s ease-in-out infinite"
                        },
                        children: [(0, r.jsx)("div", {
                            style: { ...s.glowAndTail,
                                opacity: u ? .7 : .5
                            },
                            children: (0, r.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 200 200",
                                style: s.glowTailSvg,
                                "aria-hidden": "true",
                                children: [(0, r.jsx)("defs", {
                                    children: (0, r.jsxs)("linearGradient", {
                                        id: "aiCoinTailGradient",
                                        x1: "0%",
                                        y1: "100%",
                                        x2: "100%",
                                        y2: "100%",
                                        children: [(0, r.jsx)("stop", {
                                            offset: "0%",
                                            stopColor: "rgba(255, 177, 16, 1)"
                                        }), (0, r.jsx)("stop", {
                                            offset: "60%",
                                            stopColor: "rgba(255, 177, 16, 0)"
                                        }), (0, r.jsx)("stop", {
                                            offset: "100%",
                                            stopColor: "rgba(255, 177, 16, 0)"
                                        })]
                                    })
                                }), (0, r.jsx)("g", {
                                    transform: "translate(100, 100)",
                                    children: (0, r.jsx)("circle", {
                                        cx: "0",
                                        cy: "0",
                                        r: 20,
                                        fill: "rgba(255, 177, 16, 1)",
                                        style: s.glowCircleAnimation
                                    })
                                }), (0, r.jsx)("g", {
                                    transform: `translate(100, 100) rotate(${m})`,
                                    children: (0, r.jsx)("path", {
                                        d: "M 70 0 L 0 -16.5 L 0 16.5 Z",
                                        fill: "url(#aiCoinTailGradient)"
                                    })
                                })]
                            })
                        }), (0, r.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 34 34",
                            style: s.coinSvg,
                            "aria-hidden": "true",
                            children: [(0, r.jsx)("circle", {
                                cx: "17",
                                cy: "17",
                                r: "17",
                                fill: "#F5C84B",
                                fillOpacity: "0.5"
                            }), (0, r.jsxs)("g", {
                                transform: "translate(17 17) scale(-1.4 1.4) translate(-10 -10)",
                                children: [(0, r.jsx)("path", {
                                    d: i(215470).jm,
                                    fill: "#FFFFFF"
                                }), i(215470).iV.map((e, t) => (0, r.jsx)("path", {
                                    d: e,
                                    fill: "rgba(101, 81, 33, 1)"
                                }, t))]
                            })]
                        })]
                    })]
                })
            }
        },
        413552: (e, t, i) => {
            async function a(e, t) {
                var a;
                let {
                    offerCampaign: r,
                    offerCode: n,
                    ...s
                } = t;
                if (r && (!s.spaceId || null != (a = (0, i(328765).S)()) && a.canAdmin())) {
                    if (s.spaceId) return i(617995).I.awaitData(e, {
                        spaceId: s.spaceId,
                        offerCampaign: r,
                        offerCode: n,
                        deviceId: s.deviceId
                    });
                    if (s.deviceId) {
                        let t = await e.api.callApi({
                            eventName: "getCustomerOffer",
                            environment: e,
                            data: { ...s,
                                offerCampaign: r,
                                offerCode: n
                            }
                        });
                        if ("failed" === t.type) return;
                        if ("offer" in t.data && t.data.offer) return t.data.offer
                    }
                }
            }
            i.d(t, {
                Cy: () => a,
                L6: () => s,
                VY: () => r
            }), i(898992), i(737550);
            let r = (0, i(381453).sg)(n, 1e3, {
                leading: !0,
                trailing: !1
            });
            async function n(e) {
                let {
                    environment: t,
                    spaceId: a,
                    offerCampaign: r,
                    entrypoint: n
                } = e, s = await t.api.callApi({
                    eventName: "applyCustomerOffer",
                    environment: t,
                    data: {
                        spaceId: a,
                        offerCampaign: r,
                        entrypoint: n ? ? "unknown"
                    }
                });
                return "failed" === s.type ? void i(647095).Qg(s) : (await i(185995).default.resetData(t, {
                    spaceId: a
                }), s)
            }
            async function s(e) {
                let {
                    environment: t,
                    spaceId: i,
                    offerCampaign: r,
                    deviceId: n
                } = e;
                return void 0 !== await a(t, {
                    spaceId: i,
                    offerCampaign: r,
                    deviceId: n
                })
            }
        },
        451199: (e, t, i) => {
            i.d(t, {
                A: () => s,
                p: () => n
            });
            var a = i(296540),
                r = i(474848);
            let n = 8,
                s = a.forwardRef(function({
                    isSelected: e,
                    radioButtonColor: t = "blue"
                }, a) {
                    let {
                        radioButtonStyle: s,
                        dotStyle: o
                    } = (0, i(960253).I)(() => {
                        let a = "blue" === t ? i(632079).Tj.blue.icon.accentPrimary : i(632079).Tj.red.icon.accentPrimary;
                        return {
                            radioButtonStyle: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                width: 16,
                                height: 16,
                                borderRadius: 16,
                                marginInlineEnd: n,
                                background: e ? a : i(632079).Tj.whiteButtonBackground,
                                border: e ? "none" : `1px solid ${i(632079).Tj.border.strongTranslucent}`,
                                transition: "background 100ms ease-out"
                            },
                            dotStyle: {
                                width: 6,
                                height: 6,
                                borderRadius: 6,
                                background: i(632079).Tj.text.inversePrimary,
                                transition: "opacity 100ms ease-out",
                                opacity: +!!e
                            }
                        }
                    }, [e, t]);
                    return (0, r.jsx)("div", {
                        ref: a,
                        style: s,
                        children: (0, r.jsx)("div", {
                            style: o
                        })
                    })
                })
        },
        466054: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var a = () => i(546605);
            class r extends a().Store {
                getInitialState() {
                    return {
                        chart: void 0,
                        responsiveChartOptions: void 0,
                        previewCanvasState: void 0,
                        exportBackgroundColor: "gradient"
                    }
                }
                updatePreviewState = e => {
                    this.update(t => ({ ...t,
                        previewCanvasState: e(t.previewCanvasState)
                    }))
                }
            }
            let n = r
        },
        516963: (e, t, i) => {
            i.d(t, {
                X: () => r
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.31 11.26 11.31",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M3 2.318a.625.625 0 0 0-.625.625v8.807c0 1.036.84 1.875 1.875 1.875H13a.625.625 0 1 0 0-1.25H4.25a.625.625 0 0 1-.625-.625v-1.295l2.217-1.94 2.098 2.098a.625.625 0 0 0 .884 0l3.551-3.551v1.315a.625.625 0 0 0 1.25 0v-2.8A.625.625 0 0 0 13 4.952h-2.8a.625.625 0 0 0 0 1.25h1.267L8.382 9.287l-2.07-2.07a.625.625 0 0 0-.853-.028L3.625 8.794V2.943A.625.625 0 0 0 3 2.318"
                    })
                },
                r = (0, i(104509).wt)("chartLineUptrendSmall", a, "small")
        },
        519707: (e, t, i) => {
            i.d(t, {
                Ks: () => a,
                XZ: () => r,
                sm: () => n,
                xc: () => s
            });
            let a = (0, i(109939).YK)({
                    paymentMethodUnverified: {
                        id: "subscriptions.paymentMethodUnverified",
                        defaultMessage: "Your payment is being processed. Please try again when your payment has completed."
                    },
                    otherPaymentMethod: {
                        id: "subscriptions.otherPaymentMethod",
                        defaultMessage: "Other"
                    },
                    adminOnlyAction: {
                        id: "subscriptions.adminOnlyAction",
                        defaultMessage: "Only workspace owners can perform this action."
                    },
                    iosSubscriptionRestriction: {
                        id: "subscriptions.iosSubscriptionRestriction",
                        defaultMessage: "You’re currently subscribed through an in-app purchase with Apple. To change your subscription, cancel your subscription with Apple first."
                    },
                    androidSubscriptionRestriction: {
                        id: "subscriptions.androidSubscriptionRestriction",
                        defaultMessage: "You’re currently subscribed through an in-app purchase with Google. To change your subscription, cancel your subscription with Google first."
                    },
                    mixedSubscriptionRestriction: {
                        id: "subscriptions.mixedSubscriptionRestriction",
                        defaultMessage: "You’re currently subscribed through Notion and an in-app purchase. To change your subscription, cancel your subscription with your mobile app store first."
                    },
                    galaxyAppRestriction: {
                        id: "subscriptions.galaxyAppRestriction",
                        defaultMessage: "This action is currently not available on the Samsung Galaxy app."
                    }
                }),
                r = (0, i(109939).YK)({
                    approachingBlockLimitTitle: {
                        id: "nudges.approachingBlockLimit.title",
                        defaultMessage: "Upgrade to go unlimited"
                    },
                    approachingBlockLimitDescription: {
                        id: "nudges.approachingBlockLimit.description",
                        defaultMessage: "Continue using Notion to collaborate with others"
                    },
                    approachingBlockLimitTooltip: {
                        id: "nudges.approachingBlockLimit.tooltip",
                        defaultMessage: "You’re reaching the maximum number of free blocks given on your plan ({percentageUsed}). You won’t be able to create more content unless you upgrade to the Plus plan."
                    },
                    reachedBlockLimitTitle: {
                        id: "nudges.reachedBlockLimit.title",
                        defaultMessage: "Keep using Notion"
                    },
                    reachedBlockLimitDescription: {
                        id: "nudges.reachedBlockLimit.description",
                        defaultMessage: "{spaceName} has used 100% of the free blocks in the workspace"
                    },
                    manageMembersCta: {
                        id: "nudges.manageMembers.cta",
                        defaultMessage: "Manage members"
                    },
                    reachedBlockLimitCta: {
                        id: "nudges.reachedBlockLimit.cta",
                        defaultMessage: "Upgrade plan"
                    },
                    reachedBlockLimitCtaForMembers: {
                        id: "spaceSettings.sidebar.button.contactWorkspaceOwner",
                        defaultMessage: "Contact a workspace owner"
                    },
                    reachedBlockLimitTooltip: {
                        id: "nudges.reachedBlockLimit.tooltip",
                        defaultMessage: "You’ve reached the maximum number of free blocks for your plan (100%). You won’t be able to create more content unless you upgrade to the Plus plan."
                    }
                }),
                n = (0, i(109939).YK)({
                    creditUsage: {
                        id: "aiUsageDashboard.creditUsage.usage",
                        defaultMessage: "{usage} / {limit} Notion credits"
                    },
                    creditUsagePublicBeta: {
                        id: "aiUsageDashboard.creditUsage.usagePublicBeta",
                        defaultMessage: "{usage} Notion credits used this month"
                    }
                }),
                s = (0, i(109939).YK)({
                    approachingBlockLimitTitle: {
                        id: "blockLimit.approachingBlockLimit.title",
                        defaultMessage: "Running out of free blocks"
                    },
                    approachingBlockLimitDescription: {
                        id: "blockLimit.approachingBlockLimit.description",
                        defaultMessage: "You’ve used most of this workspace’s 1,000 free blocks"
                    },
                    approachingBlockLimitTooltip: {
                        id: "blockLimit.approachingBlockLimit.tooltip",
                        defaultMessage: "You won’t be able to create new content unless you upgrade to a paid plan"
                    },
                    enteringGracePeriodTitle: {
                        id: "blockLimit.enteringGracePeriod.title",
                        defaultMessage: "{dayCount, plural, one {1 day} other {{dayCount} days}} left to upgrade"
                    },
                    enteringGracePeriodDescription: {
                        id: "blockLimit.enteringGracePeriod.description",
                        defaultMessage: "This workspace is out of free blocks for you and your team"
                    },
                    enteringGracePeriodTooltip: {
                        id: "blockLimit.enteringGracePeriod.tooltip",
                        defaultMessage: "Notion is free & unlimited for workspaces with 1 member"
                    },
                    enteringGracePeriodTooltipSubtitle: {
                        id: "blockLimit.enteringGracePeriod.tooltipDescription",
                        defaultMessage: "You can manage members via the People tab in settings"
                    },
                    afterGracePeriodTitle: {
                        id: "blockLimit.afterGracePeriod.title",
                        defaultMessage: "Keep using Notion"
                    },
                    afterGracePeriodDescription: {
                        id: "blockLimit.afterGracePeriod.description",
                        defaultMessage: "You’ve used all of this workspace’s free blocks"
                    },
                    afterGracePeriodTooltip: {
                        id: "blockLimit.afterGracePeriod.tooltip",
                        defaultMessage: "You can only create new content when you upgrade your plan"
                    },
                    startTrial: {
                        id: "blockLimit.startTrial",
                        defaultMessage: "Start trial"
                    }
                })
        },
        555017: (e, t, i) => {
            i.d(t, {
                o: () => a
            });

            function a(e) {
                let t = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => {
                    var a;
                    if (!e) return !1;
                    let r = i(547631).a.getData(t, {
                        spaceId: e
                    });
                    if (!r) return;
                    let n = null == (a = r.premiumCredits) ? void 0 : a.servicePeriodStartMs;
                    return (0, i(192159).di)({
                        servicePeriodStart: n ? new Date(n) : void 0,
                        experimentService: i(218744).default,
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        560306: (e, t, i) => {
            i.d(t, {
                S: () => r
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8.638 12.834a.625.625 0 1 1 .16 1.24 6.2 6.2 0 0 1-1.597 0 .625.625 0 0 1 .161-1.24 5 5 0 0 0 1.276 0m-5.382-1.981a.625.625 0 0 1 .876.115c.26.338.563.64.9.9a.625.625 0 1 1-.761.991 6.2 6.2 0 0 1-1.13-1.13.626.626 0 0 1 .115-.876m8.612.115a.625.625 0 1 1 .992.761 6.2 6.2 0 0 1-1.13 1.13.626.626 0 0 1-.762-.99c.338-.26.64-.563.9-.901M9.45 5.81a.55.55 0 0 1 .944.567l-2.4 4a.55.55 0 0 1-.89.075l-1.6-1.867a.55.55 0 0 1 .836-.716l1.103 1.286zm-6.823.852a.625.625 0 0 1 .54.7 5 5 0 0 0 0 1.276.625.625 0 0 1-1.24.16 6.2 6.2 0 0 1 0-1.597.625.625 0 0 1 .7-.539m10.746 0a.625.625 0 0 1 .7.54 6.2 6.2 0 0 1 0 1.597.625.625 0 0 1-1.239-.161 5 5 0 0 0 0-1.276.625.625 0 0 1 .54-.7M4.27 3.14a.626.626 0 0 1 .762.992c-.337.26-.64.562-.9.9a.625.625 0 1 1-.991-.761 6.2 6.2 0 0 1 1.13-1.13m6.582.115a.626.626 0 0 1 .877-.115c.424.325.804.706 1.13 1.13a.626.626 0 0 1-.992.761 5 5 0 0 0-.9-.9.625.625 0 0 1-.115-.876M8 1.875q.406 0 .799.052a.625.625 0 0 1-.161 1.239 5 5 0 0 0-1.276 0 .625.625 0 0 1-.16-1.24q.392-.05.798-.051"
                    })
                },
                r = (0, i(104509).wt)("checkmarkCircleDashSmall", a, "small")
        },
        575349: (e, t, i) => {
            i.d(t, {
                I: () => n
            }), i(296540);
            var a = i(474848);
            let r = {
                tabTitleStyle: {
                    padding: 8,
                    borderRadius: 999,
                    fontSize: 14,
                    color: i(632079).Tj.text.secondary,
                    fontWeight: i(699422).Wy.medium
                },
                selectedTabTitleStyle: {
                    padding: 8,
                    borderRadius: 999,
                    background: i(632079).Tj.background.secondary,
                    fontSize: 14,
                    color: i(632079).Tj.text.primary,
                    fontWeight: i(699422).Wy.medium
                },
                tabBorderStyle: {
                    display: "none"
                }
            };

            function n({
                tabs: e,
                selectedIndex: t,
                onChange: s,
                marginBottom: o = 0,
                tabGap: l = 8
            }) {
                let d = (0, i(960253).I)(() => ({
                    tabBar: {
                        padding: 6,
                        margin: -6,
                        marginBottom: o - 6
                    },
                    tabStyle: {
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginInlineEnd: l,
                        borderRadius: 999
                    },
                    selectedTabStyle: {
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginInlineEnd: l,
                        borderRadius: 999
                    }
                }), [o, l]);
                return (0, a.jsx)(i(540336).LZ, {
                    tabs: e,
                    selectedIndex: t,
                    onChange: s,
                    style: d.tabBar,
                    tabStyle: d.tabStyle,
                    selectedTabStyle: d.selectedTabStyle,
                    tabTitleStyle: r.tabTitleStyle,
                    selectedTabTitleStyle: r.selectedTabTitleStyle,
                    tabBorderStyle: r.tabBorderStyle,
                    hideTabBorder: !0
                })
            }
        },
        585279: (e, t, i) => {
            i.d(t, {
                g: () => r
            });
            var a = i(296540);

            function r(e) {
                var t;
                let r = (0, i(533992).v3)(),
                    [n, s] = (0, a.useState)(),
                    o = (0, i(723240).r)(),
                    l = (null == (t = (0, i(187041).g)({
                        spaceId: o
                    })) ? void 0 : t.length) ? ? 0;
                return (0, a.useEffect)(() => {
                    !async function() {
                        o && s(await (0, i(413552).L6)({
                            environment: r,
                            spaceId: o,
                            offerCampaign: e
                        }))
                    }()
                }, [r, o, e, l]), n
            }
        },
        609686: (e, t, i) => {
            function a(e) {
                var t, i;
                let {
                    workflowData: a
                } = e;
                return {
                    creditLimit: (null == a || null == (t = a.usage_limit) ? void 0 : t.type) === "creditLimit" ? a.usage_limit.maximum : void 0,
                    creditLimitByWorkspaceAdmin: (null == a || null == (i = a.usage_limit_by_workspace_admin) ? void 0 : i.type) === "creditLimit" ? a.usage_limit_by_workspace_admin.maximum : void 0
                }
            }

            function r(e) {
                let {
                    creditLimit: t,
                    creditLimitByWorkspaceAdmin: i
                } = a(e);
                return void 0 !== t && void 0 !== i ? Math.min(t, i) : t ? ? i
            }
            i.d(t, {
                j: () => a,
                l: () => r
            })
        },
        701433: (e, t, i) => {
            i.d(t, {
                I: () => o,
                S: () => n
            });
            var a = i(296540),
                r = i(474848);
            let n = (0, i(109939).YK)({
                    noMonthlyLimit: {
                        id: "agentTopbar.credits.preview.noMonthlyLimit",
                        defaultMessage: "Unlimited"
                    },
                    setLimit: {
                        id: "agentTopbar.credits.preview.setLimit",
                        defaultMessage: "Set limit"
                    },
                    monthlyLimitInvalid: {
                        id: "agentTopbar.credits.preview.monthlyLimitInvalid",
                        defaultMessage: "Enter a whole number greater than or equal to 0"
                    },
                    monthlyLimitTooLarge: {
                        id: "agentTopbar.credits.preview.monthlyLimitTooLarge.v2",
                        defaultMessage: "Exceeds limit set by workspace admin"
                    }
                }),
                s = {
                    popupInput: {
                        width: "100%",
                        height: 28,
                        paddingInline: 8,
                        background: i(632079).Tj.background.secondary,
                        borderRadius: 6
                    },
                    tableCellInput: {
                        width: "100%",
                        minWidth: 0,
                        height: "100%",
                        padding: 0,
                        border: `1px solid ${i(632079).Tj.border.primary}`,
                        borderRadius: 6,
                        background: i(632079).Tj.background.elevated,
                        boxShadow: i(632079).Tj.shadow.base.lg,
                        outline: "none"
                    },
                    tableCellInputInner: {
                        fontSize: 14,
                        lineHeight: "20px",
                        padding: "9px 10px"
                    },
                    errorText: {
                        paddingInlineStart: 2
                    }
                };

            function o(e) {
                let {
                    ariaLabel: t,
                    initialValue: o,
                    creditLimitByWorkspaceAdmin: l,
                    isWorkspaceAdmin: d,
                    onSave: c,
                    onSaveSuccess: u,
                    surface: g = "popup"
                } = e, m = (0, i(109939).tz)(), p = String(o ? ? ""), [h, y] = (0, a.useState)(p), [f, b] = (0, a.useState)(), [v, x] = (0, a.useState)(!1), j = (0, a.useRef)(!1), S = (0, a.useCallback)(async () => {
                    if (j.current) return !1;
                    let e = function(e) {
                        let {
                            draftLimit: t,
                            initialLimit: a,
                            creditLimitByWorkspaceAdmin: r,
                            isWorkspaceAdmin: s,
                            intl: o
                        } = e;
                        if (t === a) return {
                            type: "unchanged"
                        };
                        let l = function(e) {
                            let {
                                draftLimit: t,
                                creditLimitByWorkspaceAdmin: a,
                                isWorkspaceAdmin: r,
                                intl: s
                            } = e;
                            if ("" === t) return;
                            let o = (0, i(368864).q)(t, s);
                            return void 0 === o ? s.formatMessage(n.monthlyLimitInvalid) : Number.isFinite(o) ? !Number.isInteger(o) || o < 0 ? s.formatMessage(n.monthlyLimitInvalid) : !r && void 0 !== a && o > a ? s.formatMessage(n.monthlyLimitTooLarge) : void 0 : s.formatMessage(n.monthlyLimitTooLarge)
                        }({
                            draftLimit: t,
                            intl: o,
                            creditLimitByWorkspaceAdmin: r,
                            isWorkspaceAdmin: s
                        });
                        return void 0 !== l ? {
                            type: "invalid",
                            message: l
                        } : {
                            type: "save",
                            value: "" === t ? void 0 : (0, i(368864).q)(t, o)
                        }
                    }({
                        draftLimit: h,
                        initialLimit: p,
                        intl: m,
                        creditLimitByWorkspaceAdmin: l,
                        isWorkspaceAdmin: d
                    });
                    if ("invalid" === e.type) return b(e.message), !1;
                    if (b(void 0), "unchanged" === e.type) return null == u || u(), !0;
                    j.current = !0, x(!0);
                    try {
                        let t = await c(e.value);
                        return t && (null == u || u()), t
                    } finally {
                        j.current = !1, x(!1)
                    }
                }, [l, h, p, m, d, c, u]), I = (0, a.useCallback)(() => {
                    S()
                }, [S]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(36481).p, {
                        "aria-label": t,
                        value: h,
                        placeholder: m.formatMessage(n.noMonthlyLimit),
                        onChange: e => {
                            f && b(void 0), y(e.currentTarget.value)
                        },
                        onKeyDown: e => {
                            "Escape" !== e.key && e.stopPropagation(), "Enter" === e.key && (e.preventDefault(), I())
                        },
                        onBlur: I,
                        disabled: v,
                        inputMode: "numeric",
                        focusInitial: !0,
                        errorOutline: !!f,
                        suppressFocusRing: "tableCell" === g,
                        inputStyle: "tableCell" === g ? s.tableCellInputInner : void 0,
                        style: "tableCell" === g ? s.tableCellInput : s.popupInput
                    }), "tableCell" !== g && f ? (0, r.jsx)("div", {
                        style: s.errorText,
                        children: (0, r.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: f
                        })
                    }) : void 0]
                })
            }
        },
        777206: (e, t, i) => {
            i.d(t, {
                V: () => n,
                b: () => r
            });
            let a = (0, i(109939).YK)({
                saveFailed: {
                    id: "workflows.creditLimit.saveFailed",
                    defaultMessage: "Failed to save credit limit"
                }
            });
            async function r(e) {
                var t;
                let {
                    workflowStore: r,
                    creditLimit: n,
                    currentCreditUsage: o,
                    environment: l
                } = e;
                if ((0, i(909212).Ks)()) return "failed" !== (await l.api.callApi({
                    eventName: "saveWorkflowCreditUsageLimit",
                    environment: l,
                    data: {
                        workflowId: r.id,
                        spaceId: r.pointer.spaceId,
                        creditLimit: n,
                        currentCreditUsage: o
                    }
                })).type || (i(436555).D6({
                    label: i(962299).A.formatMessage(a.saveFailed)
                }), !1);
                let d = void 0 === n ? void 0 : {
                        type: "creditLimit",
                        maximum: n
                    },
                    c = r.getDraftData(),
                    u = null == c || null == (t = c.paused_reason) ? void 0 : t.reason,
                    g = function(e) {
                        let {
                            isPaused: t,
                            currentPausedReason: i,
                            currentCreditUsage: a,
                            usageLimit: r
                        } = e, n = (null == r ? void 0 : r.type) === "creditLimit" && void 0 !== a && a >= r.maximum;
                        return t ? "creditLimit" === i || "runawayCreditUsage" === i ? void 0 === r ? "clearPausedState" : void 0 === a || n ? "noChange" : "clearPausedState" : "runLimit" === i ? void 0 === r ? "clearPausedState" : n ? "setCreditLimitPause" : "clearPausedState" : "noChange" : n ? "setCreditLimitPause" : "noChange"
                    }({
                        isPaused: (null == c ? void 0 : c.status) === "paused",
                        currentPausedReason: u,
                        currentCreditUsage: o,
                        usageLimit: d
                    });
                return (0, i(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveCreditUsageLimit",
                    environment: l,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: r.pointer.spaceId
                    },
                    perform: e => {
                        (0, i(421439).y4)({
                            store: r,
                            operation: i(861988).$L({
                                pointer: r.pointer,
                                usageLimit: d
                            }),
                            transaction: e
                        }), "clearPausedState" === g ? s({
                            workflowStore: r,
                            transaction: e,
                            clearedPausedReason: u
                        }) : "setCreditLimitPause" === g && ((0, i(421439).y4)({
                            store: r,
                            operation: {
                                pointer: r.pointer,
                                command: "set",
                                path: ["data", "paused_reason"],
                                args: {
                                    date: Date.now(),
                                    reason: "creditLimit"
                                }
                            },
                            transaction: e
                        }), (0, i(421439).y4)({
                            store: r,
                            operation: {
                                pointer: r.pointer,
                                command: "set",
                                path: ["data", "status"],
                                args: "paused"
                            },
                            transaction: e
                        }))
                    }
                }), !0
            }

            function n(e) {
                let {
                    workflowStore: t,
                    environment: a
                } = e;
                if (t.table !== i(832375).C0E) return;
                let r = t.getDraftData() ? ? t.getData();
                (0, i(377796).createAndCommit)({
                    userAction: "WorkflowActions.clearWorkflowPause",
                    environment: a,
                    canUndo: !1,
                    cellTarget: {
                        spaceWithId: t.pointer.spaceId
                    },
                    perform: e => {
                        var i;
                        s({
                            workflowStore: t,
                            transaction: e,
                            clearedPausedReason: null == r || null == (i = r.paused_reason) ? void 0 : i.reason
                        })
                    }
                })
            }

            function s(e) {
                let {
                    workflowStore: t,
                    transaction: a,
                    clearedPausedReason: r
                } = e;
                (0, i(421439).y4)({
                    store: t,
                    operation: {
                        pointer: t.pointer,
                        command: "set",
                        path: ["data", "paused_reason"],
                        args: void 0
                    },
                    transaction: a
                }), "runawayCreditUsage" === r && (0, i(421439).y4)({
                    store: t,
                    operation: {
                        pointer: t.pointer,
                        command: "set",
                        path: ["data", "runaway_pause_acknowledged_at"],
                        args: Date.now()
                    },
                    transaction: a
                }), (0, i(421439).y4)({
                    store: t,
                    operation: {
                        pointer: t.pointer,
                        command: "set",
                        path: ["data", "status"],
                        args: "runnable"
                    },
                    transaction: a
                })
            }
        },
        890152: (e, t, i) => {
            i.d(t, {
                a: () => U,
                P: () => B
            });
            var a = i(296540);
            i(581454);
            var r = i(474848);
            let n = {
                    actionItem: {
                        flex: 1,
                        paddingInline: 12,
                        backgroundColor: i(632079).Tj.background.primary,
                        borderRadius: 12,
                        boxShadow: "0px 0px 0px 1px rgba(42, 28, 0, 0.07), 0px 12px 32px rgba(25, 25, 25, 0.03)",
                        overflow: "hidden"
                    },
                    iconWrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 32,
                        height: 32,
                        borderRadius: 6,
                        flexShrink: 0
                    },
                    metricShimmer: {
                        width: 120,
                        height: 16,
                        borderRadius: 4
                    }
                },
                s = {
                    iconWrapperBlue: { ...n.iconWrapper,
                        backgroundColor: i(632079).Tj.blue.background.primary
                    },
                    iconWrapperYellow: { ...n.iconWrapper,
                        backgroundColor: i(632079).Tj.yellow.background.primary
                    },
                    iconWrapperOrange: { ...n.iconWrapper,
                        backgroundColor: i(632079).Tj.orange.background.primary
                    }
                };

            function o({
                spaceId: e,
                servicePeriodStartMs: t,
                servicePeriodEndMs: l
            }) {
                let {
                    stats: d,
                    isLoading: c
                } = function(e) {
                    let t = (0, i(533992).v3)(),
                        {
                            spaceId: r,
                            servicePeriodStart: n,
                            servicePeriodEnd: s
                        } = e,
                        o = `{AIUsageCustomAgentStats}:${r}:${n}:${s}`,
                        l = (0, a.useMemo)(() => i(255482).K.get({
                            userId: t.currentUser.id,
                            key: o
                        }), [t.currentUser.id, o]),
                        [d] = (0, i(97668).Yb)(async () => {
                            if (r && void 0 !== n && void 0 !== s) try {
                                let e = await (0, i(82861).yE)({
                                    environment: t,
                                    spaceId: r,
                                    servicePeriodStart: n,
                                    servicePeriodEnd: s
                                });
                                return i(255482).K.set({
                                    userId: t.currentUser.id,
                                    key: o,
                                    value: e
                                }), e
                            } catch (e) {
                                throw i(773352).log({
                                    level: "error",
                                    from: "useCustomAgentStats",
                                    type: "fetchCustomAgentStatsFailed",
                                    data: {
                                        miscDataToConvertToString: {
                                            error: e,
                                            spaceId: r,
                                            servicePeriodStart: n,
                                            servicePeriodEnd: s,
                                            userId: t.currentUser.id
                                        }
                                    }
                                }), e
                            }
                        }, [t, r, n, s, o], {
                            debugName: "useCustomAgentStats"
                        });
                    return {
                        stats: d.value ? ? l,
                        isLoading: !l && ("pending" === d.status || "idle" === d.status)
                    }
                }({
                    spaceId: e,
                    servicePeriodStart: t,
                    servicePeriodEnd: l
                });
                return (0, r.jsxs)(i(4458).fI, {
                    gap: 12,
                    children: [(0, r.jsxs)(i(4458).VP, {
                        gap: 8,
                        paddingTop: 12,
                        paddingBottom: 10,
                        style: n.actionItem,
                        children: [(0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: [(0, r.jsx)("div", {
                                style: s.iconWrapperBlue,
                                children: (0, r.jsx)(i(130867).j, {
                                    iconName: "wrench",
                                    size: 24,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                })
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "secondary",
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "creditsInAction.agentBuilders.header",
                                    defaultMessage: "Agent builders"
                                })
                            })]
                        }), c ? (0, r.jsx)(i(795830).P, {
                            style: n.metricShimmer
                        }) : (0, r.jsx)(i(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "creditsInAction.agentBuilders.metric",
                                defaultMessage: "{count} members creating Custom Agents",
                                values: {
                                    count: (0, r.jsx)(i(109939).Gr, {
                                        value: (null == d ? void 0 : d.uniqueCreatorCount) ? ? 0
                                    })
                                }
                            })
                        })]
                    }), (0, r.jsxs)(i(4458).VP, {
                        gap: 8,
                        paddingTop: 12,
                        paddingBottom: 10,
                        style: n.actionItem,
                        children: [(0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: [(0, r.jsx)("div", {
                                style: s.iconWrapperYellow,
                                children: (0, r.jsx)(i(130867).j, {
                                    iconName: "chart-line",
                                    size: 24,
                                    colorPalette: "yellow",
                                    colorVariant: "accentPrimary"
                                })
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "secondary",
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "creditsInAction.agentsInAction.header",
                                    defaultMessage: "Agents in action"
                                })
                            })]
                        }), c ? (0, r.jsx)(i(795830).P, {
                            style: n.metricShimmer
                        }) : (0, r.jsx)(i(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "creditsInAction.agentsInAction.metric",
                                defaultMessage: "{count} live Custom Agents this month",
                                values: {
                                    count: (0, r.jsx)(i(109939).Gr, {
                                        value: (null == d ? void 0 : d.customAgentCount) ? ? 0
                                    })
                                }
                            })
                        })]
                    }), (0, r.jsxs)(i(4458).VP, {
                        gap: 8,
                        paddingTop: 12,
                        paddingBottom: 10,
                        style: n.actionItem,
                        children: [(0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: [(0, r.jsx)("div", {
                                style: s.iconWrapperOrange,
                                children: (0, r.jsx)(i(130867).j, {
                                    iconName: "run",
                                    size: 24,
                                    colorPalette: "orange",
                                    colorVariant: "accentPrimary"
                                })
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "secondary",
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "creditsInAction.agentsDrivingValue.header",
                                    defaultMessage: "Agents driving value"
                                })
                            })]
                        }), c ? (0, r.jsx)(i(795830).P, {
                            style: n.metricShimmer
                        }) : (0, r.jsx)(i(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "creditsInAction.agentsDrivingValue.metric",
                                defaultMessage: "{count} runs completed",
                                values: {
                                    count: (0, r.jsx)(i(109939).Gr, {
                                        value: (null == d ? void 0 : d.totalRunCount) ? ? 0
                                    })
                                }
                            })
                        })]
                    })]
                })
            }
            i(944114);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.26",
                    svg: (0, r.jsx)("path", {
                        d: "M11.4 2.375c-.566 0-1.025.46-1.025 1.025v9.2c0 .567.459 1.026 1.025 1.026h1.2c.566 0 1.025-.46 1.025-1.025V3.4c0-.567-.459-1.026-1.025-1.026zm.225 10v-8.75h.75v8.75zm-8.225-8c-.566 0-1.025.46-1.025 1.025v7.2c0 .567.459 1.026 1.025 1.026h1.2c.566 0 1.025-.46 1.025-1.025V5.4c0-.567-.459-1.026-1.025-1.026zm.225 8v-6.75h.75v6.75zm3.775-4.8c-.566 0-1.025.46-1.025 1.025v4c0 .566.459 1.025 1.025 1.025h1.2c.566 0 1.025-.459 1.025-1.025v-4c0-.566-.459-1.025-1.025-1.025zm.225 4.8v-3.55h.75v3.55z"
                    })
                },
                d = (0, i(104509).wt)("chartBarXAxisSmall", l, "small"),
                c = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.45 2.39 11.11 11.16",
                    svg: (0, r.jsx)("path", {
                        d: "M3 2.393a.55.55 0 0 1 .55.55v5.61l1.958-1.711.087-.063a.55.55 0 0 1 .664.087L8.382 8.99 12.2 5.171a.55.55 0 0 1 .777.777l-4.206 4.207a.55.55 0 0 1-.695.07l-.083-.07-2.148-2.147-2.295 2.008v1.734a.7.7 0 0 0 .7.7H13l.111.01a.55.55 0 0 1 0 1.078L13 13.55H4.25a1.8 1.8 0 0 1-1.8-1.8V2.942a.55.55 0 0 1 .55-.55"
                    })
                },
                u = (0, i(104509).wt)("chartLineSmall", c, "small"),
                g = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M5.7 9.7a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m2.3 0a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m-2.3-2a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m2.3 0a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m2.3 0a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M11.8 2.375c1.008 0 1.825.817 1.825 1.825v7.6a1.825 1.825 0 0 1-1.825 1.825H4.2A1.825 1.825 0 0 1 2.375 11.8V4.2c0-1.008.817-1.825 1.825-1.825zM3.625 6.149v5.65c0 .318.258.576.575.576h7.6a.575.575 0 0 0 .575-.575V6.15zM4.2 3.625a.575.575 0 0 0-.575.575v.85h8.75V4.2a.575.575 0 0 0-.575-.575z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                m = (0, i(104509).wt)("calendarAltSmall", g, "small"),
                p = {
                    display: "inline-flex",
                    alignItems: "center"
                };

            function h(e) {
                let {
                    currentDateRange: t,
                    canGoPrevious: a,
                    canGoNext: n,
                    onPrevious: s,
                    onNext: o,
                    isCurrentRange: l
                } = e, d = (0, i(109939).tz)(), c = d.formatDate(t.start, {
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC"
                }), u = d.formatDate(t.displayEnd, {
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC"
                }), g = l ? d.formatMessage(y.current) : d.formatMessage(y.dateRange, {
                    startDate: c,
                    endDate: u
                }), h = l ? d.formatMessage(y.dateRange, {
                    startDate: c,
                    endDate: u
                }) : void 0, f = (0, r.jsx)(i(988022).p, {
                    size: "sm",
                    colorVariant: "secondary",
                    iconLeading: {
                        icon: m
                    },
                    children: g
                });
                return (0, r.jsxs)(i(4458).fI, {
                    gap: 2,
                    alignItems: "center",
                    children: [(0, r.jsx)(i(374533).A, {
                        ariaLabel: d.formatMessage(y.previousDateRange),
                        icon: i(241996).s,
                        size: "sm",
                        colorVariant: "secondary",
                        onClick: s,
                        disabled: !a
                    }), h ? (0, r.jsx)(i(51831).m, {
                        content: () => h,
                        children: e => (0, r.jsx)("span", { ...e,
                            style: p,
                            children: f
                        })
                    }) : f, (0, r.jsx)(i(374533).A, {
                        ariaLabel: d.formatMessage(y.nextDateRange),
                        icon: i(491469).arrowChevronSingleRightSmallIcon,
                        size: "sm",
                        colorVariant: "secondary",
                        onClick: o,
                        disabled: !n
                    })]
                })
            }
            let y = (0, i(109939).YK)({
                    dateRange: {
                        id: "aiUsageDashboard.dateRange",
                        defaultMessage: "{startDate} - {endDate}"
                    },
                    previousDateRange: {
                        id: "aiUsageDashboard.previousDateRange",
                        defaultMessage: "Previous date range"
                    },
                    nextDateRange: {
                        id: "aiUsageDashboard.nextDateRange",
                        defaultMessage: "Next date range"
                    },
                    current: {
                        id: "aiUsageDashboard.current",
                        defaultMessage: "Current Period"
                    }
                }),
                f = (0, i(109939).YK)({
                    resetsDate: {
                        id: "aiUsageDashboard.creditUsage.resetsDate",
                        defaultMessage: "Resets {date}"
                    },
                    moreActions: {
                        id: "aiUsageDashboard.creditUsage.moreActions",
                        defaultMessage: "More actions"
                    },
                    chart: {
                        id: "aiUsageDashboard.creditUsage.moreActions.chart",
                        defaultMessage: "Chart"
                    },
                    exportCsv: {
                        id: "aiUsageDashboard.creditUsage.moreActions.exportCsv",
                        defaultMessage: "Export CSV"
                    },
                    cumulative: {
                        id: "aiUsageDashboard.creditUsage.moreActions.cumulative",
                        defaultMessage: "Cumulative"
                    },
                    daily: {
                        id: "aiUsageDashboard.creditUsage.moreActions.daily",
                        defaultMessage: "Daily"
                    }
                });

            function b(e) {
                let {
                    usage: t,
                    limit: a,
                    currentDateRange: n,
                    canGoPrevious: s = !1,
                    canGoNext: o = !1,
                    onPrevious: l,
                    onNext: c,
                    isCurrentRange: g = !1,
                    isPublicBeta: m = !1,
                    onAddCreditsClick: p,
                    isLoading: y = !1,
                    viewMode: b,
                    onViewModeChange: v,
                    csvExportEnabled: x,
                    isExporting: j,
                    onExportCsv: S
                } = e, I = (0, i(109939).tz)(), C = t ? ? 0, w = y ? "—" : m ? I.formatMessage(i(519707).sm.creditUsagePublicBeta, {
                    usage: I.formatNumber(C)
                }) : I.formatMessage(i(519707).sm.creditUsage, {
                    usage: I.formatNumber(C),
                    limit: I.formatNumber(a ? ? 0)
                }), M = {
                    start: n.start,
                    end: n.displayEnd,
                    displayEnd: n.displayEnd
                }, k = n.end ? I.formatMessage(f.resetsDate, {
                    date: I.formatDate(n.end, {
                        month: "short",
                        day: "numeric",
                        timeZone: "UTC"
                    })
                }) : void 0, T = I.formatMessage("daily" === b ? f.daily : f.cumulative), A = [{
                    key: "cumulative",
                    render: e => (0, r.jsx)(i(95582).A, { ...e,
                        title: I.formatMessage(f.cumulative),
                        icon: (0, r.jsx)(i(16275).I, {
                            icon: i(516963).X,
                            size: "sm"
                        }),
                        isChecked: "cumulative" === b
                    }),
                    action: e => v("cumulative")
                }, {
                    key: "daily",
                    render: e => (0, r.jsx)(i(95582).A, { ...e,
                        title: I.formatMessage(f.daily),
                        icon: (0, r.jsx)(i(16275).I, {
                            icon: d,
                            size: "sm"
                        }),
                        isChecked: "daily" === b
                    }),
                    action: e => v("daily")
                }];
                return (0, r.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 12,
                        children: [(0, r.jsx)(i(111010).D, {
                            styleKey: "titleSmSemibold",
                            colorVariant: "primary",
                            children: w
                        }), k ? (0, r.jsx)(i(746434).E, {
                            color: "gray",
                            content: k
                        }) : void 0]
                    }), M ? (0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 12,
                        children: [(0, r.jsx)(i(656252).A, {
                            popupType: i(656252).z.Popup,
                            placementToOrigin: "bottom",
                            alignmentToOrigin: "end",
                            originGap: 4,
                            content: e => {
                                let t = [{
                                    key: "chart",
                                    action: e => void 0,
                                    render: (t, a) => (0, r.jsx)(i(816231).A, { ...t,
                                        onFocus: a.onFocus,
                                        title: I.formatMessage(f.chart),
                                        icon: (0, r.jsx)(i(16275).I, {
                                            icon: u,
                                            size: "sm"
                                        }),
                                        right: (0, r.jsx)(i(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            children: T
                                        }),
                                        renderExtension: t => (0, r.jsx)(i(747369).A, {
                                            menuType: i(649476).gu.Popup,
                                            width: 200,
                                            ...t,
                                            children: (0, r.jsx)(i(558045).A, {
                                                type: i(558045).O.Vertical,
                                                initialFocus: void 0,
                                                sections: [{
                                                    key: "chart-view-mode-section",
                                                    render: e => (0, r.jsx)(i(844565).A, { ...e
                                                    }),
                                                    items: A.map(t => ({ ...t,
                                                        action: i => {
                                                            t.action(i), e.close()
                                                        }
                                                    }))
                                                }]
                                            })
                                        }),
                                        children: (e, t) => (0, r.jsx)(i(95582).A, { ...e,
                                            ref: t
                                        })
                                    })
                                }];
                                return x && S && t.push({
                                    key: "export-csv",
                                    render: e => (0, r.jsx)(i(95582).A, { ...e,
                                        title: I.formatMessage(f.exportCsv),
                                        icon: (0, r.jsx)(i(16275).I, {
                                            icon: i(6957).B,
                                            size: "sm"
                                        }),
                                        disabled: j
                                    }),
                                    action: t => {
                                        S(), e.close()
                                    }
                                }), (0, r.jsx)(i(747369).A, {
                                    menuType: i(649476).gu.Popup,
                                    width: 240,
                                    children: (0, r.jsx)(i(558045).A, {
                                        type: i(558045).O.Vertical,
                                        initialFocus: void 0,
                                        sections: [{
                                            key: "actions",
                                            render: e => (0, r.jsx)(i(844565).A, { ...e
                                            }),
                                            items: t
                                        }]
                                    })
                                })
                            },
                            children: e => (0, r.jsx)(i(374533).A, { ...e,
                                icon: i(361226).ellipsisSmallIcon,
                                size: "sm",
                                colorVariant: "secondary",
                                ariaLabel: I.formatMessage(f.moreActions)
                            })
                        }), (0, r.jsx)(h, {
                            currentDateRange: M,
                            canGoPrevious: s,
                            canGoNext: o,
                            onPrevious: l,
                            onNext: c,
                            isCurrentRange: g
                        }), p ? (0, r.jsx)(i(265779).E, {
                            size: "md",
                            colorPalette: "blue",
                            onClick: p,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "aiUsageDashboard.creditUsage.addCredits",
                                defaultMessage: "Add Notion credits"
                            })
                        }) : void 0]
                    }) : void 0]
                })
            }
            i(898992), i(354520);
            let v = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 2.12 9.25 11.75",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.628 7.246a.515.515 0 0 0-.61.398l-.167.795h-.795a.515.515 0 1 0 0 1.03h.579l-.119.562h-.74a.515.515 0 1 0 0 1.03H6.3l-.123.583a.515.515 0 0 0 1.008.212l.167-.795h.725l-.123.583a.515.515 0 0 0 1.008.212l.168-.795h.814a.515.515 0 0 0 0-1.03h-.598l.118-.562h.76a.515.515 0 0 0 0-1.03h-.543l.123-.583a.515.515 0 1 0-1.008-.212l-.167.795h-.725l.122-.583a.515.515 0 0 0-.398-.61m-.059 2.785.118-.562h.725l-.118.562z"
                        }), (0, r.jsx)("path", {
                            d: "M5.125 2.125a1.75 1.75 0 0 0-1.75 1.75v8.25c0 .966.784 1.75 1.75 1.75h5.75a1.75 1.75 0 0 0 1.75-1.75V6.591c0-.464-.184-.91-.513-1.237L9.396 2.638a1.75 1.75 0 0 0-1.237-.513zm-.5 1.75a.5.5 0 0 1 .5-.5h2.604v1.831c0 .98.794 1.775 1.775 1.775h1.871v5.144a.5.5 0 0 1-.5.5h-5.75a.5.5 0 0 1-.5-.5zm4.254 1.331V3.888l1.943 1.943H9.504a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                x = (0, i(104509).wt)("docHashtagSmall", v, "small"),
                j = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.27 2.48 9.81 11.61",
                    svg: (0, r.jsx)("path", {
                        d: "M8.242 3.253c-1.2-.84-2.75-1-4.095-.423l-.554.237a.53.53 0 0 0-.318.483v10.02a.525.525 0 1 0 1.05 0v-3.374l.235-.1a3.18 3.18 0 0 1 3.08.318 4.23 4.23 0 0 0 4.32.318l.825-.412a.53.53 0 0 0 .29-.47v-6.3a.525.525 0 0 0-.76-.47l-.824.413a3.18 3.18 0 0 1-3.25-.24"
                    })
                },
                S = (0, i(104509).wt)("flagFillSmall", j, "fillSmall"),
                I = {
                    iconContainer: {
                        position: "relative",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        overflow: "hidden",
                        flexShrink: 0
                    },
                    emojiContainer: {
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        flexShrink: 0
                    },
                    nameText: { ...i(699422).RC,
                        fontWeight: i(699422).Wy.regular,
                        minWidth: 0,
                        flex: 1,
                        maxWidth: 150
                    },
                    nameLink: { ...i(699422).RC,
                        fontWeight: i(699422).Wy.regular,
                        minWidth: 0,
                        flex: 1,
                        maxWidth: 150,
                        cursor: "pointer",
                        color: "inherit",
                        textDecoration: "none"
                    },
                    noDataContainer: {
                        padding: 24,
                        textAlign: "center",
                        color: i(632079).Tj.text.secondary
                    },
                    statusBadgeLive: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        height: 20,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 8,
                        borderRadius: 100,
                        backgroundColor: i(632079).Tj.blue.background.tertiaryTranslucent
                    },
                    statusBadgeDisabled: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        height: 20,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 8,
                        borderRadius: 100,
                        backgroundColor: i(632079).Tj.background.tertiaryTranslucent
                    },
                    entityTypePillCustomAgent: {
                        display: "inline-flex",
                        alignItems: "center",
                        height: 20,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 6,
                        borderRadius: 4,
                        backgroundColor: i(632079).Tj.gray.background.secondaryTranslucent,
                        whiteSpace: "nowrap"
                    },
                    entityTypePillDatabaseAgent: {
                        display: "inline-flex",
                        alignItems: "center",
                        height: 20,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 6,
                        borderRadius: 4,
                        backgroundColor: i(632079).Tj.yellow.background.secondaryTranslucent,
                        whiteSpace: "nowrap"
                    },
                    style0: {
                        overflow: "hidden",
                        minWidth: 0
                    },
                    createdByCell: {
                        overflow: "hidden",
                        minWidth: 0,
                        cursor: "pointer"
                    },
                    style1: {
                        paddingBlockEnd: 12
                    },
                    style3: {
                        overflowX: "auto",
                        transition: "opacity 150ms ease"
                    },
                    refreshing: {
                        opacity: .5,
                        pointerEvents: "none"
                    },
                    shimmerIcon: {
                        width: 20,
                        height: 20,
                        borderRadius: 10
                    },
                    shimmerText: {
                        width: 100,
                        height: 14,
                        borderRadius: 4
                    },
                    shimmerTextShort: {
                        width: 60,
                        height: 14,
                        borderRadius: 4
                    },
                    shimmerBadge: {
                        width: 60,
                        height: 20,
                        borderRadius: 100
                    },
                    activityShimmer: {
                        width: 40,
                        height: 16,
                        borderRadius: 4
                    },
                    sortButton: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        padding: 0,
                        font: "inherit"
                    },
                    sortChevron: {
                        position: "absolute",
                        insetInlineEnd: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: i(632079).Tj.icon.tertiary,
                        transition: "transform 200ms ease"
                    },
                    sortChevronAsc: {
                        transform: "translateY(-50%) rotate(180deg)"
                    },
                    setLimitButton: {
                        width: "100%",
                        minWidth: 0,
                        minHeight: "auto",
                        padding: 0
                    },
                    setLimitButtonHovered: {
                        background: "transparent"
                    },
                    editingCreditLimitCell: {
                        width: 188,
                        height: 48,
                        flexShrink: 0,
                        marginInline: -14,
                        marginBlock: -5
                    }
                };

            function C({
                row: e
            }) {
                let t = (0, i(533992).v3)(),
                    n = (0, a.useMemo)(() => (0, i(453573).Lm)({
                        workflowId: e.id,
                        params: {
                            workflowViewType: "settings"
                        }
                    }), [e.id]),
                    s = (0, a.useCallback)(e => {
                        e.preventDefault(), e.stopPropagation(), (0, i(599754).os)(), (0, i(79266).navigate)({
                            environment: t,
                            url: n
                        })
                    }, [t, n]);
                return (0, r.jsx)("a", {
                    href: n,
                    onClick: s,
                    style: I.nameLink,
                    title: e.name,
                    children: e.name
                })
            }

            function w({
                row: e,
                spaceStore: t
            }) {
                let n = (0, i(533992).v3)(),
                    s = (0, a.useMemo)(() => {
                        if (e.createdByUserId) return new(i(807825)).L(n, {
                            table: i(832375).oo9,
                            id: e.createdByUserId
                        })
                    }, [n, e.createdByUserId]),
                    o = (0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        style: I.createdByCell,
                        children: [e.createdByIconUrl && (0, i(312028).A)(e.createdByIconUrl) ? (0, r.jsx)("div", {
                            style: I.emojiContainer,
                            children: e.createdByIconUrl
                        }) : e.createdByIconUrl ? (0, r.jsx)(i(738251).A, {
                            url: e.createdByIconUrl,
                            isAuthenticated: !1,
                            stripGoogleIconQuery: !0,
                            width: 20,
                            render: (t, i) => (0, r.jsx)("img", {
                                src: i ? ? e.createdByIconUrl,
                                style: I.iconContainer,
                                alt: ""
                            })
                        }) : (0, r.jsx)(i(4458).fI, {
                            style: I.iconContainer,
                            alignItems: "center",
                            justifyContent: "center",
                            className: "autolayout-fill-width",
                            children: (0, r.jsx)(i(16275).I, {
                                icon: i(623290).personIcon,
                                size: "default",
                                colorVariant: "secondary"
                            })
                        }), (0, r.jsx)("div", {
                            style: I.nameText,
                            children: e.createdByName
                        })]
                    });
                return (0, r.jsx)(i(532755).D, {
                    userStore: s,
                    spaceStore: t,
                    from: "ai_usage_dashboard",
                    children: o
                })
            }

            function M({
                row: e,
                spaceId: t
            }) {
                let n = (0, i(533992).v3)(),
                    s = (0, i(109939).tz)(),
                    [o, l] = (0, a.useState)(!1),
                    d = (0, a.useMemo)(() => {
                        if ("custom_agent" === e.entityType || "database_agent" === e.entityType) return new(i(360851)).N(n, {
                            table: i(832375).C0E,
                            id: e.id,
                            spaceId: t
                        })
                    }, [n, e.entityType, e.id, t]),
                    c = (0, i(83208).X)("database_agent_credit_usage"),
                    {
                        isWorkspaceAdmin: u,
                        displayedCreditLimit: g,
                        creditLimitByWorkspaceAdmin: m,
                        canEditLimit: p
                    } = (0, i(682985).K8)(() => {
                        var t;
                        let a = (null == d || null == (t = d.getSpaceStore()) ? void 0 : t.canAdmin()) ? ? !1,
                            r = (null == d ? void 0 : d.getDraftData()) ? ? (null == d ? void 0 : d.getData()),
                            {
                                creditLimit: n,
                                creditLimitByWorkspaceAdmin: s
                            } = (0, i(609686).j)({
                                workflowData: r
                            }),
                            o = r ? n : e.creditLimit,
                            l = r ? s : e.creditLimitByWorkspaceAdmin,
                            u = void 0 !== d && ("database_agent" !== e.entityType || c) && (d.canEdit() || a);
                        return {
                            isWorkspaceAdmin: a,
                            displayedCreditLimit: a ? l : o,
                            creditLimitByWorkspaceAdmin: l,
                            canEditLimit: u
                        }
                    }, [d, e.creditLimit, e.creditLimitByWorkspaceAdmin, e.entityType, c]),
                    h = (0, a.useCallback)(t => !!d && (0, i(777206).b)({
                        creditLimit: t,
                        currentCreditUsage: e.creditsUsed,
                        environment: n,
                        workflowStore: d
                    }), [n, e.creditsUsed, d]),
                    y = (0, a.useCallback)(() => l(!0), []),
                    f = (0, a.useCallback)(() => l(!1), []);
                if (o) return (0, r.jsx)("div", {
                    style: I.editingCreditLimitCell,
                    children: (0, r.jsx)(i(701433).I, {
                        ariaLabel: s.formatMessage(T.creditLimitColumn),
                        initialValue: g,
                        creditLimitByWorkspaceAdmin: m,
                        isWorkspaceAdmin: u,
                        onSave: h,
                        onSaveSuccess: f,
                        surface: "tableCell"
                    })
                });
                if (void 0 === g) return p ? (0, r.jsx)(i(988022).p, {
                    "aria-label": s.formatMessage(i(701433).S.setLimit),
                    onClick: y,
                    style: I.setLimitButton,
                    hoveredStyle: I.setLimitButtonHovered,
                    children: (0, r.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "tertiary",
                        children: s.formatMessage(i(701433).S.setLimit)
                    })
                }) : null;
                let b = (0, r.jsx)(i(111010).D, {
                    styleKey: "bodyRegular",
                    children: s.formatNumber(g)
                });
                return p ? (0, r.jsx)(i(988022).p, {
                    "aria-label": s.formatMessage(T.creditLimitColumn),
                    onClick: y,
                    style: I.setLimitButton,
                    hoveredStyle: I.setLimitButtonHovered,
                    children: b
                }) : b
            }

            function k(e) {
                let {
                    spaceId: t,
                    spaceStore: n,
                    servicePeriodStartMs: s,
                    servicePeriodEndMs: o,
                    canViewAll: l,
                    onCsvExportStateChange: d
                } = e, c = (0, i(109939).tz)(), u = (0, i(533992).v3)(), [g, m] = (0, a.useState)(void 0), [p, h] = (0, a.useState)(1), [y, f] = (0, a.useState)("desc"), [b, v] = (0, a.useState)(() => l ? "all" : "mine"), j = (0, i(83208).X)("database_agent_rebrand"), [k, A] = (0, a.useState)(void 0), D = (0, i(668745).lW)(k, 250, Object.is), [B, P] = (0, a.useState)(!1), L = (0, a.useCallback)(e => {
                    A(e)
                }, []), U = (0, a.useCallback)(async () => {
                    P(!0);
                    try {
                        await (0, i(82861).rg)({
                            environment: u,
                            spaceId: t,
                            servicePeriodStartMs: s,
                            servicePeriodEndMs: o,
                            sortDirection: y,
                            createdByUserId: "mine" === b ? u.currentUser.id : void 0,
                            isRebrand: j
                        })
                    } finally {
                        P(!1)
                    }
                }, [u, j, t, s, o, y, b]);
                (0, a.useEffect)(() => {
                    m(void 0), h(1)
                }, [t, s, y, b, D]);
                let E = (0, a.useCallback)(() => {
                        f(e => "desc" === e ? "asc" : "desc")
                    }, []),
                    {
                        entities: R,
                        next_cursor: W,
                        previous_cursor: z,
                        canViewAllAgents: V,
                        isLoading: K,
                        isRefreshing: _
                    } = function(e) {
                        let t = (0, i(533992).v3)(),
                            {
                                spaceId: r,
                                servicePeriodStart: n,
                                servicePeriodEnd: s,
                                limit: o,
                                cursor: l,
                                sortDirection: d,
                                entityTable: c,
                                createdByUserId: u,
                                searchQuery: g,
                                entityType: m
                            } = e,
                            p = `{AIUsageTopEntities}:${[e.spaceId,e.servicePeriodStart,e.servicePeriodEnd,e.limit??"",e.cursor??"",e.sortDirection??"",e.entityTable??"",e.createdByUserId??"",e.searchQuery??"",e.entityType??""].join(":")}`,
                            h = (0, a.useMemo)(() => i(255482).K.get({
                                userId: t.currentUser.id,
                                key: p
                            }), [t.currentUser.id, p]),
                            [y] = (0, i(97668).Yb)(async () => {
                                if (r && void 0 !== n && void 0 !== s) try {
                                    let e = await (0, i(82861).vm)({
                                        environment: t,
                                        spaceId: r,
                                        servicePeriodStart: n,
                                        servicePeriodEnd: s,
                                        limit: o,
                                        cursor: l,
                                        sortDirection: d,
                                        entityTable: c,
                                        createdByUserId: u,
                                        searchQuery: g,
                                        entityType: m
                                    });
                                    return i(255482).K.set({
                                        userId: t.currentUser.id,
                                        key: p,
                                        value: e
                                    }), e
                                } catch (e) {
                                    throw i(773352).log({
                                        level: "error",
                                        from: "useTopEntitiesByUsage",
                                        type: "fetchTopEntitiesFailed",
                                        data: {
                                            miscDataToConvertToString: {
                                                error: e,
                                                spaceId: r,
                                                servicePeriodStart: n,
                                                servicePeriodEnd: s,
                                                limit: o,
                                                cursor: l,
                                                userId: t.currentUser.id
                                            }
                                        }
                                    }), e
                                }
                            }, [t, r, n, s, o, l, d, c, u, g, m, p], {
                                debugName: "useTopEntitiesByUsage"
                            }),
                            f = y.value ? ? h,
                            b = "pending" === y.status || "idle" === y.status;
                        return {
                            entities: null == f ? void 0 : f.entities,
                            next_cursor: null == f ? void 0 : f.next_cursor,
                            previous_cursor: null == f ? void 0 : f.previous_cursor,
                            canViewAllAgents: null == f ? void 0 : f.canViewAllAgents,
                            isLoading: !h && b,
                            isRefreshing: !!h && b
                        }
                    }((0, a.useMemo)(() => ({
                        spaceId: t,
                        servicePeriodStart: s,
                        servicePeriodEnd: o,
                        limit: 10,
                        cursor: g,
                        sortDirection: y,
                        entityTable: "workflow",
                        createdByUserId: "mine" === b ? u.currentUser.id : void 0,
                        searchQuery: D || void 0
                    }), [t, s, o, g, y, b, u.currentUser.id, D])),
                    N = V ? ? l,
                    F = (0, i(83208).X)("enable_space_credit_usage_export"),
                    $ = (0, i(682985).K8)(() => (0, i(909212).Ks)(), []),
                    O = (0, a.useMemo)(() => N ? ["all", "mine"] : ["mine"], [N]),
                    Y = (0, a.useCallback)(e => {
                        v(O[e] ? ? "mine")
                    }, [O]),
                    G = (0, a.useMemo)(() => O.map(e => {
                        switch (e) {
                            case "all":
                                return (0, r.jsx)(a.Fragment, {
                                    children: c.formatMessage(T.filterAll)
                                }, "all");
                            case "mine":
                                return (0, r.jsx)(a.Fragment, {
                                    children: c.formatMessage(T.filterMine)
                                }, "mine")
                        }
                    }), [c, O]),
                    {
                        activityCounts: H,
                        isLoading: q
                    } = function(e) {
                        var t, r;
                        let n = (0, i(533992).v3)(),
                            {
                                spaceId: s,
                                servicePeriodStart: o,
                                servicePeriodEnd: l,
                                workflowIds: d
                            } = e,
                            c = (0, a.useMemo)(() => d.join(","), [d]),
                            u = (r = {
                                spaceId: s,
                                servicePeriodStart: o,
                                servicePeriodEnd: l,
                                workflowIdsKey: c
                            }, `{AIUsageActivityCounts}:${r.spaceId}:${r.servicePeriodStart}:${r.servicePeriodEnd}:${r.workflowIdsKey}`),
                            g = (0, a.useMemo)(() => i(255482).K.get({
                                userId: n.currentUser.id,
                                key: u
                            }), [n.currentUser.id, u]),
                            [m] = (0, i(97668).Yb)(async () => {
                                if (!s || void 0 === o || void 0 === l || !c) return;
                                let e = c.split(",").filter(Boolean);
                                if (0 !== e.length) try {
                                    let t = await (0, i(82861).Ku)({
                                        environment: n,
                                        spaceId: s,
                                        servicePeriodStart: o,
                                        servicePeriodEnd: l,
                                        workflowIds: e
                                    });
                                    return i(255482).K.set({
                                        userId: n.currentUser.id,
                                        key: u,
                                        value: t
                                    }), t
                                } catch (t) {
                                    throw i(773352).log({
                                        level: "error",
                                        from: "useAIActivityCounts",
                                        type: "fetchAIActivityCountsFailed",
                                        data: {
                                            miscDataToConvertToString: {
                                                error: t,
                                                spaceId: s,
                                                servicePeriodStart: o,
                                                servicePeriodEnd: l,
                                                workflowIdsCount: e.length,
                                                userId: n.currentUser.id
                                            }
                                        }
                                    }), t
                                }
                            }, [n, s, o, l, c, u], {
                                debugName: "useAIActivityCounts"
                            });
                        return {
                            activityCounts: null == (t = m.value ? ? g) ? void 0 : t.activityCounts,
                            isLoading: !g && ("pending" === m.status || "idle" === m.status)
                        }
                    }({
                        spaceId: t,
                        servicePeriodStart: s,
                        servicePeriodEnd: o,
                        workflowIds: (0, a.useMemo)(() => R ? R.filter(e => "custom_agent" === e.entityType || "database_agent" === e.entityType).map(e => e.id) : [], [R])
                    }),
                    Q = (0, a.useRef)(null),
                    [X, Z] = (0, a.useState)(void 0);
                (0, a.useEffect)(() => {
                    !K && R && !D && Q.current && Z(Q.current.offsetHeight)
                }, [K, R, D]);
                let J = (0, a.useMemo)(() => ({ ...I.style3,
                        ...void 0 !== X && {
                            minHeight: X
                        },
                        ..._ && I.refreshing
                    }), [X, _]),
                    ee = void 0 !== z,
                    et = void 0 !== W,
                    ei = (0, a.useMemo)(() => K ? Array.from({
                        length: 10
                    }, (e, t) => ({
                        id: `skeleton-${t}`,
                        isClickable: !1,
                        entityType: "custom_agent",
                        name: "",
                        creditsUsed: 0,
                        activityCount: void 0,
                        isLoading: !0
                    })) : R ? R.map(e => {
                        let t = e.name ? ? c.formatMessage(T.unknownEntity),
                            i = e.sourceDatabaseTitle,
                            a = "database_agent" === e.entityType && i ? c.formatMessage(T.databaseAgentName, {
                                agentName: t,
                                sourceDatabaseTitle: i
                            }) : t;
                        return {
                            id: e.id,
                            isClickable: !1,
                            entityType: e.entityType,
                            iconUrl: e.icon,
                            sourceDatabaseIcon: e.sourceDatabaseIcon,
                            name: a,
                            creditsUsed: e.usage,
                            creditLimit: e.creditLimit,
                            creditLimitByWorkspaceAdmin: e.creditLimitByWorkspaceAdmin,
                            activityCount: "custom_agent" === e.entityType || "database_agent" === e.entityType ? null == H ? void 0 : H[e.id] : void 0,
                            status: e.status,
                            createdByUserId: e.createdById,
                            createdByName: e.createdByName,
                            createdByIconUrl: e.createdByIcon
                        }
                    }) : [], [R, c, K, H]),
                    ea = N && F && ei.length > 0 && !K;
                (0, a.useEffect)(() => {
                    d && (ea ? d({
                        enabled: !0,
                        isExporting: B,
                        download: U
                    }) : d(void 0))
                }, [ea, B, U, d]);
                let er = (0, a.useMemo)(() => [{
                        id: "name",
                        headerTitle: (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: i(652134).aiFaceSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(T.customAgentColumn)
                            })]
                        }),
                        widthData: {
                            width: 200
                        },
                        sortable: !1,
                        headerStyle: {
                            paddingInlineStart: 6,
                            boxShadow: "none",
                            borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`
                        },
                        rowStyle: {
                            paddingInlineStart: 6,
                            overflow: "hidden",
                            height: 36
                        },
                        renderCell: e => {
                            let t;
                            if (e.isLoading) return (0, r.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                gap: 6,
                                style: I.style0,
                                children: [(0, r.jsx)(i(795830).P, {
                                    style: I.shimmerIcon
                                }), (0, r.jsx)(i(795830).P, {
                                    style: I.shimmerText
                                })]
                            });
                            let a = "custom_agent" === e.entityType;
                            return (0, r.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                gap: 6,
                                style: I.style0,
                                children: [(t = e.iconUrl || e.sourceDatabaseIcon) && (0, i(312028).A)(t) ? (0, r.jsx)("div", {
                                    style: I.emojiContainer,
                                    children: t
                                }) : t && (0, i(111012).T8)(t) ? (0, r.jsx)("img", {
                                    src: t,
                                    style: I.iconContainer,
                                    alt: ""
                                }) : t ? (0, r.jsx)(i(738251).A, {
                                    url: t,
                                    isAuthenticated: !1,
                                    stripGoogleIconQuery: !0,
                                    width: 20,
                                    render: (e, i) => (0, r.jsx)("img", {
                                        src: i ? ? t,
                                        style: I.iconContainer,
                                        alt: ""
                                    })
                                }) : (0, r.jsx)(i(4458).fI, {
                                    style: I.iconContainer,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    className: "autolayout-fill-width",
                                    children: (0, r.jsx)(i(16275).I, {
                                        icon: i(623290).personIcon,
                                        size: "default",
                                        colorVariant: "secondary"
                                    })
                                }), a ? (0, r.jsx)(C, {
                                    row: e
                                }) : (0, r.jsx)("div", {
                                    style: I.nameText,
                                    title: e.name,
                                    children: e.name
                                })]
                            })
                        }
                    }, {
                        id: "creditsUsed",
                        headerTitle: (0, r.jsxs)("button", {
                            style: I.sortButton,
                            onClick: E,
                            "aria-label": c.formatMessage(T.sortCreditsUsed),
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: i(225206).y,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(T.creditsUsedColumn)
                            }), (0, r.jsx)(i(16275).I, {
                                icon: i(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm",
                                style: { ...I.sortChevron,
                                    ..."asc" === y && I.sortChevronAsc
                                }
                            })]
                        }),
                        widthData: {
                            width: 180
                        },
                        sortable: !1,
                        headerStyle: {
                            position: "relative",
                            paddingInlineStart: 6,
                            boxShadow: "none",
                            borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`
                        },
                        rowStyle: {
                            borderInlineStart: `1px solid ${i(632079).Tj.border.secondary}`,
                            height: 36
                        },
                        renderCell: e => e.isLoading ? (0, r.jsx)(i(795830).P, {
                            style: I.shimmerTextShort
                        }) : (0, r.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            children: e.creditsUsed.toLocaleString()
                        })
                    }, {
                        id: "creditLimit",
                        headerTitle: (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: S,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(T.creditLimitColumn)
                            })]
                        }),
                        widthData: {
                            width: 160
                        },
                        sortable: !1,
                        headerStyle: {
                            paddingInlineStart: 6,
                            boxShadow: "none",
                            borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`
                        },
                        rowStyle: {
                            borderInlineStart: `1px solid ${i(632079).Tj.border.secondary}`,
                            height: 36
                        },
                        renderCell: e => e.isLoading ? (0, r.jsx)(i(795830).P, {
                            style: I.shimmerTextShort
                        }) : (0, r.jsx)(M, {
                            row: e,
                            spaceId: n.id
                        })
                    }, {
                        id: "activityCount",
                        headerTitle: (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: i(437102).checkmarkCircleSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(T.activityCountColumn)
                            })]
                        }),
                        widthData: {
                            width: 180
                        },
                        sortable: !1,
                        headerStyle: {
                            paddingInlineStart: 6,
                            boxShadow: "none",
                            borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`
                        },
                        rowStyle: {
                            borderInlineStart: `1px solid ${i(632079).Tj.border.secondary}`,
                            height: 36
                        },
                        renderCell: e => e.isLoading ? (0, r.jsx)(i(795830).P, {
                            style: I.shimmerTextShort
                        }) : "custom_agent" !== e.entityType && "database_agent" !== e.entityType ? null : q ? (0, r.jsx)(i(795830).P, {
                            style: I.activityShimmer
                        }) : (0, r.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            children: (e.activityCount ? ? 0).toLocaleString()
                        })
                    }, {
                        id: "status",
                        headerTitle: (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: i(363709).r,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(T.statusColumn)
                            })]
                        }),
                        widthData: {
                            width: 100
                        },
                        sortable: !1,
                        headerStyle: {
                            paddingInlineStart: 6,
                            boxShadow: "none",
                            borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`
                        },
                        rowStyle: {
                            borderInlineStart: `1px solid ${i(632079).Tj.border.secondary}`,
                            height: 36
                        },
                        renderCell: e => {
                            if (e.isLoading) return (0, r.jsx)(i(795830).P, {
                                style: I.shimmerBadge
                            });
                            if (!e.status) return null;
                            let t = "live" === e.status;
                            return (0, r.jsxs)("div", {
                                style: t ? I.statusBadgeLive : I.statusBadgeDisabled,
                                children: [(0, r.jsx)("div", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: t ? i(632079).Tj.blue.icon.accentPrimary : i(632079).Tj.text.tertiary
                                    }
                                }), (0, r.jsx)(i(111010).D, {
                                    styleKey: "bodyRegular",
                                    children: t ? c.formatMessage(T.statusLive) : c.formatMessage(T.statusDisabled)
                                })]
                            })
                        }
                    }, {
                        id: "entityType",
                        headerTitle: (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: x,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(T.entityTypeColumn)
                            })]
                        }),
                        widthData: {
                            width: 140
                        },
                        sortable: !1,
                        headerStyle: {
                            paddingInlineStart: 6,
                            boxShadow: "none",
                            borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`
                        },
                        rowStyle: {
                            borderInlineStart: `1px solid ${i(632079).Tj.border.secondary}`,
                            height: 36
                        },
                        renderCell: e => {
                            if (e.isLoading) return (0, r.jsx)(i(795830).P, {
                                style: I.shimmerBadge
                            });
                            let t = "database_agent" === e.entityType;
                            return (0, r.jsx)("div", {
                                style: t ? I.entityTypePillDatabaseAgent : I.entityTypePillCustomAgent,
                                children: (0, r.jsx)(i(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorPalette: t ? "yellow" : void 0,
                                    colorVariant: t ? "secondary" : "primary",
                                    children: t ? c.formatMessage(j ? T.entityTypeAiAutofill : T.entityTypeDatabaseAgent) : c.formatMessage(T.entityTypeCustomAgent)
                                })
                            })
                        }
                    }, {
                        id: "createdBy",
                        headerTitle: (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: i(125040).personSmallIcon,
                                colorVariant: "secondary"
                            }), (0, r.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: c.formatMessage(T.createdByColumn)
                            })]
                        }),
                        widthData: {
                            width: 180
                        },
                        sortable: !1,
                        headerStyle: {
                            paddingInlineStart: 6,
                            boxShadow: "none",
                            borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`
                        },
                        rowStyle: {
                            borderInlineStart: `1px solid ${i(632079).Tj.border.secondary}`,
                            overflow: "hidden",
                            height: 36
                        },
                        renderCell: e => e.isLoading ? (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            style: I.style0,
                            children: [(0, r.jsx)(i(795830).P, {
                                style: I.shimmerIcon
                            }), (0, r.jsx)(i(795830).P, {
                                style: I.shimmerText
                            })]
                        }) : e.createdByName ? (0, r.jsx)(w, {
                            row: e,
                            spaceStore: n
                        }) : null
                    }], [E, c, q, j, y, n]),
                    en = (0, a.useMemo)(() => {
                        let e = er;
                        return $ || (e = e.filter(e => "creditLimit" !== e.id)), e
                    }, [er, $]),
                    es = (0, a.useMemo)(() => {
                        let e = (0, i(474438).rC)({
                            columnRenderInfo: en
                        });
                        return { ...e,
                            container: { ...e.container,
                                width: void 0,
                                marginTop: 0
                            }
                        }
                    }, [en]);
                return (0, r.jsxs)("div", {
                    style: I.style1,
                    children: [(0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                        children: [(0, r.jsx)(i(575349).I, {
                            tabs: G,
                            selectedIndex: O.indexOf(b),
                            onChange: Y,
                            marginBottom: 0
                        }), (0, r.jsx)(i(910839).O, {
                            onSearchQueryChange: L
                        })]
                    }), (0, r.jsx)("div", {
                        ref: Q,
                        style: J,
                        children: (0, r.jsx)(i(474438).WE, {
                            columnRenderInfo: en,
                            rows: ei,
                            styles: es,
                            showRowBorders: !0,
                            hideHeaderRowPadding: !0,
                            maxRowHeight: 36,
                            renderNoRowsComponent: () => (0, r.jsx)("div", {
                                style: I.noDataContainer,
                                children: c.formatMessage(T.noData)
                            })
                        })
                    }), (0, r.jsxs)(i(4458).fI, {
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: 8,
                        paddingTop: 12,
                        children: [(0, r.jsx)(i(374533).A, {
                            ariaLabel: c.formatMessage(T.previousPage),
                            icon: i(241996).s,
                            onClick: () => {
                                z && (m(z), h(e => Math.max(1, e - 1)))
                            },
                            disabled: !ee || K
                        }), (0, r.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: c.formatMessage(T.pageIndicator, {
                                page: p
                            })
                        }), (0, r.jsx)(i(374533).A, {
                            ariaLabel: c.formatMessage(T.nextPage),
                            icon: i(491469).arrowChevronSingleRightSmallIcon,
                            onClick: () => {
                                W && (m(W), h(e => e + 1))
                            },
                            disabled: !et || K
                        })]
                    })]
                })
            }
            let T = (0, i(109939).YK)({
                    customAgentColumn: {
                        id: "aiUsageDashboard.topEntities.customAgentColumn",
                        defaultMessage: "Custom Agent"
                    },
                    entityTypeColumn: {
                        id: "aiUsageDashboard.topEntities.entityTypeColumn",
                        defaultMessage: "Type"
                    },
                    entityTypeCustomAgent: {
                        id: "aiUsageDashboard.topEntities.entityTypeCustomAgent",
                        defaultMessage: "Custom Agent"
                    },
                    entityTypeDatabaseAgent: {
                        id: "aiUsageDashboard.topEntities.entityTypeDatabaseAgent",
                        defaultMessage: "Database Agent"
                    },
                    entityTypeAiAutofill: {
                        id: "aiUsageDashboard.topEntities.entityTypeAiAutofill",
                        defaultMessage: "Custom Agent, Autofill"
                    },
                    creditsUsedColumn: {
                        id: "aiUsageDashboard.topEntities.creditsUsedColumn",
                        defaultMessage: "Credits used"
                    },
                    creditLimitColumn: {
                        id: "aiUsageDashboard.topEntities.creditLimitColumn",
                        defaultMessage: "Credit limit"
                    },
                    activityCountColumn: {
                        id: "aiUsageDashboard.topEntities.activityCountColumn",
                        defaultMessage: "Runs completed"
                    },
                    statusColumn: {
                        id: "aiUsageDashboard.topEntities.statusColumn",
                        defaultMessage: "Status"
                    },
                    createdByColumn: {
                        id: "aiUsageDashboard.topEntities.createdByColumn",
                        defaultMessage: "Created by"
                    },
                    statusLive: {
                        id: "aiUsageDashboard.topEntities.statusLive",
                        defaultMessage: "Live"
                    },
                    statusDisabled: {
                        id: "aiUsageDashboard.topEntities.statusDisabled",
                        defaultMessage: "Disabled"
                    },
                    noData: {
                        id: "aiUsageDashboard.topEntities.noData",
                        defaultMessage: "No data available"
                    },
                    unknownEntity: {
                        id: "aiUsageDashboard.topEntities.unknownEntity",
                        defaultMessage: "Unknown"
                    },
                    previousPage: {
                        id: "aiUsageDashboard.topEntities.previousPage",
                        defaultMessage: "Previous page"
                    },
                    nextPage: {
                        id: "aiUsageDashboard.topEntities.nextPage",
                        defaultMessage: "Next page"
                    },
                    pageIndicator: {
                        id: "aiUsageDashboard.topEntities.pageIndicator",
                        defaultMessage: "Page {page}"
                    },
                    sortCreditsUsed: {
                        id: "aiUsageDashboard.topEntities.sortCreditsUsed",
                        defaultMessage: "Sort by credits used"
                    },
                    filterAll: {
                        id: "aiUsageDashboard.topEntities.filterAll",
                        defaultMessage: "Custom Agents"
                    },
                    filterMine: {
                        id: "aiUsageDashboard.topEntities.filterMine",
                        defaultMessage: "Mine"
                    },
                    databaseAgentName: {
                        id: "aiUsageDashboard.topEntities.databaseAgentName",
                        defaultMessage: "{agentName} in {sourceDatabaseTitle}"
                    }
                }),
                A = 2 * i(695216).lG,
                D = new(i(245541)).R({
                    key: "aiCreditsInfoBannerDismissedAtMs",
                    namespace: i(274919).Bq,
                    important: !1,
                    trackingType: "necessary"
                }),
                B = (0, i(109939).YK)({
                    creditsBannerTitle: {
                        id: "aiUsageDashboard.creditsBanner.title",
                        defaultMessage: "Custom Agents are free during beta."
                    },
                    creditsBannerDescription: {
                        id: "aiUsageDashboard.creditsBanner.description",
                        defaultMessage: "Starting May 4, 2026, they’ll use Notion credits (available as an add-on). Track usage to plan ahead."
                    },
                    creditsBannerLearnMore: {
                        id: "aiUsageDashboard.creditsBanner.learnMore",
                        defaultMessage: "Learn how credits work"
                    },
                    creditsBannerDismiss: {
                        id: "aiUsageDashboard.creditsBanner.dismiss",
                        defaultMessage: "Dismiss credits info banner"
                    }
                }),
                P = {
                    style0: {
                        paddingBlockEnd: 12
                    },
                    monthlyUsageSection: {},
                    cardsTableGap: {
                        height: 32
                    },
                    analyticsLink: {
                        cursor: "pointer",
                        userSelect: "none"
                    },
                    bannerContainer: {
                        paddingBlockEnd: 8
                    },
                    infoBanner: {
                        position: "relative",
                        display: "flex",
                        alignItems: "flex-start",
                        paddingBlock: 8,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 8,
                        borderRadius: 10,
                        boxShadow: i(632079).Tj.shadow.outline.diffuse,
                        backgroundColor: i(632079).Tj.background.primary,
                        overflow: "hidden"
                    },
                    infoBannerIconContainer: {
                        paddingBlockStart: 4
                    },
                    infoBannerBody: {
                        display: "flex",
                        flex: "1 0 0",
                        position: "relative",
                        alignItems: "flex-start",
                        minWidth: 0
                    },
                    infoBannerContent: {
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 364,
                        gap: 10,
                        paddingBlock: 4
                    },
                    infoBannerAvatarWrapper: {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        insetInlineStart: 396,
                        insetInlineEnd: -8,
                        overflow: "hidden"
                    },
                    infoBannerAvatars: {
                        height: "100%",
                        width: "auto",
                        display: "block"
                    },
                    infoBannerCta: {
                        height: "auto",
                        paddingBlock: 4,
                        alignSelf: "flex-start"
                    },
                    infoBannerDismiss: {
                        position: "absolute",
                        top: 8,
                        insetInlineEnd: 8,
                        zIndex: 1
                    }
                };

            function L() {
                let e = (0, i(109939).tz)(),
                    t = (0, a.useRef)(null),
                    n = (0, i(729787).wY)(t),
                    s = void 0 !== n && n.width >= 560;
                return (0, i(682985).K8)(() => {
                    let e = D.getState();
                    return !!e && Date.now() - e <= A
                }, []) ? null : (0, r.jsx)("div", {
                    style: P.bannerContainer,
                    children: (0, r.jsxs)("div", {
                        ref: t,
                        style: P.infoBanner,
                        children: [(0, r.jsxs)(i(4458).fI, {
                            flex: "1 0 0",
                            gap: 8,
                            alignItems: "flex-start",
                            minWidth: 0,
                            children: [(0, r.jsx)("div", {
                                style: P.infoBannerIconContainer,
                                children: (0, r.jsx)(i(16275).I, {
                                    icon: i(61107).infoCircleIcon,
                                    colorVariant: "tertiary"
                                })
                            }), (0, r.jsxs)("div", {
                                style: P.infoBannerBody,
                                children: [(0, r.jsxs)("div", {
                                    style: P.infoBannerContent,
                                    children: [(0, r.jsxs)("div", {
                                        children: [(0, r.jsx)(i(111010).D, {
                                            styleKey: "bodyMedium",
                                            colorVariant: "primary",
                                            children: e.formatMessage(B.creditsBannerTitle)
                                        }), (0, r.jsx)(i(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            children: e.formatMessage(B.creditsBannerDescription)
                                        })]
                                    }), (0, r.jsx)(i(912946).A, {
                                        size: "md",
                                        style: P.infoBannerCta,
                                        iconLeading: {
                                            icon: i(166568).arrowUpRightSquareSmallIcon
                                        },
                                        onClick: () => window.open((0, i(442564).x)("guides.customAgentPricing"), "_blank"),
                                        children: e.formatMessage(B.creditsBannerLearnMore)
                                    })]
                                }), s ? (0, r.jsx)("div", {
                                    style: P.infoBannerAvatarWrapper,
                                    children: (0, r.jsx)("img", {
                                        src: "/images/custom-agents/ai-credits-info-banner-avatars.png",
                                        alt: "",
                                        style: P.infoBannerAvatars
                                    })
                                }) : void 0]
                            })]
                        }), (0, r.jsx)("div", {
                            style: P.infoBannerDismiss,
                            children: (0, r.jsx)(i(374533).A, {
                                icon: i(25094).xMarkSmallIcon,
                                size: "md",
                                onClick: () => {
                                    D.setState(Date.now())
                                },
                                ariaLabel: e.formatMessage(B.creditsBannerDismiss)
                            })
                        })]
                    })
                })
            }

            function U({
                spaceStore: e
            }) {
                var t;
                let n = e.id,
                    s = (0, i(533992).v3)(),
                    {
                        navigate: l
                    } = (0, a.useContext)(i(44894).E),
                    d = (0, i(84163).J)(e),
                    c = (0, i(717274).QH)(),
                    [u, g] = (0, a.useState)(0),
                    [m, p] = (0, a.useState)("cumulative"),
                    h = (0, a.useRef)(void 0),
                    [y, f] = (0, a.useState)(!1),
                    v = (0, a.useCallback)(e => {
                        h.current = e, f((null == e ? void 0 : e.enabled) ? ? !1)
                    }, []),
                    {
                        dateRanges: x,
                        isLoadingPeriods: j
                    } = function(e) {
                        let t = (0, i(533992).v3)(),
                            [r, n] = (0, a.useState)([]),
                            [s, o] = (0, a.useState)(!0);
                        return (0, a.useEffect)(() => {
                            !async function() {
                                if (!e) return o(!1);
                                o(!0);
                                try {
                                    let a = await t.api.callApi({
                                        eventName: "getAIUsageDashboardServicePeriods",
                                        environment: t,
                                        data: {
                                            spaceId: e,
                                            forceMetronomeDataPath: (0, i(717274).Sc)()
                                        }
                                    });
                                    if ("failed" === a.type) return void o(!1);
                                    let r = a.data.periods.map(e => ({
                                        start: new Date(e.start),
                                        end: new Date(e.end),
                                        displayEnd: new Date(e.displayEnd ? ? e.end)
                                    }));
                                    n(r)
                                } catch (a) {
                                    i(773352).log({
                                        level: "error",
                                        from: "useAIUsageDashboardServicePeriods",
                                        type: "fetchServicePeriodsFailed",
                                        data: {
                                            miscDataToConvertToString: {
                                                error: a,
                                                spaceId: e,
                                                userId: t.currentUser.id
                                            }
                                        }
                                    })
                                } finally {
                                    o(!1)
                                }
                            }()
                        }, [t, e]), {
                            dateRanges: r,
                            isLoadingPeriods: s
                        }
                    }(n),
                    S = x[x.length - 1 - u],
                    I = null == S ? void 0 : S.start.getTime(),
                    C = x[x.length - 1],
                    w = (0, i(682985).K8)(() => (0, i(192159).di)({
                        servicePeriodStart: null == C ? void 0 : C.start,
                        experimentService: i(218744).default,
                        spaceId: n
                    }), [null == C ? void 0 : C.start, n]),
                    M = S ? i(906745).DateTime.fromJSDate(S.start).toMillis() : void 0,
                    T = S ? i(906745).DateTime.fromJSDate(S.end).toMillis() : void 0,
                    {
                        data: A,
                        isLoading: D
                    } = (0, i(254266).C)(n, M, T),
                    B = (0, a.useCallback)(() => {
                        l({
                            environment: s,
                            url: "/?target=analytics",
                            redirect: !0
                        })
                    }, [s, l]);
                if (j) return (0, r.jsx)(i(4458).fI, {
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, r.jsx)(i(517334).k, {})
                });
                if ((null == A ? void 0 : A.version) !== 1) return (0, r.jsx)("div", {});
                if (0 === x.length) return null;
                let E = 0 === u,
                    R = null == A ? void 0 : A.totalMonthlyUsage,
                    W = null == A ? void 0 : A.totalMonthlyLimit;
                return (0, r.jsxs)(r.Fragment, {
                    children: [w ? null : (0, r.jsx)(L, {}), (0, r.jsx)("div", {
                        style: P.style0,
                        children: (0, r.jsx)(b, {
                            usage: R,
                            limit: W,
                            currentDateRange: S,
                            canGoPrevious: u < x.length - 1,
                            canGoNext: u > 0,
                            onPrevious: () => g(u + 1),
                            onNext: () => g(u - 1),
                            isCurrentRange: E,
                            isPublicBeta: !w,
                            onAddCreditsClick: w ? () => {} : void 0,
                            isLoading: D,
                            viewMode: m,
                            onViewModeChange: p,
                            csvExportEnabled: y,
                            isExporting: (null == (t = h.current) ? void 0 : t.isExporting) ? ? !1,
                            onExportCsv: y ? () => {
                                var e;
                                null == (e = h.current) || e.download()
                            } : void 0
                        })
                    }), (0, r.jsx)(i(215470).Kl, {
                        servicePeriodStartDate: i(906745).DateTime.fromJSDate(S.start),
                        servicePeriodEndDate: i(906745).DateTime.fromJSDate(S.displayEnd),
                        dailyUsageData: A,
                        isDailyUsageLoading: D,
                        isPublicBeta: !w,
                        isCurrentPeriod: E,
                        servicePeriodUsage: E ? R : void 0,
                        viewMode: m
                    }), n && I ? (0, r.jsxs)("div", {
                        style: P.monthlyUsageSection,
                        children: [(0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: 16,
                            paddingBottom: 16,
                            children: [(0, r.jsx)(i(111010).D, {
                                styleKey: "titleSmSemibold",
                                colorVariant: "primary",
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "creditsInAction.title",
                                    defaultMessage: "This month’s usage"
                                })
                            }), (0, r.jsx)(i(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: (0, r.jsx)("div", {
                                    style: P.analyticsLink,
                                    onClick: B,
                                    role: "link",
                                    tabIndex: 0,
                                    children: (0, r.jsxs)(i(4458).fI, {
                                        alignItems: "center",
                                        gap: 4,
                                        children: [(0, r.jsx)(i(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "tertiary",
                                            children: (0, r.jsx)(i(109939).sA, {
                                                id: "creditsInAction.analyticsLink",
                                                defaultMessage: "AI Analytics Dashboard"
                                            })
                                        }), (0, r.jsx)(i(16275).I, {
                                            icon: i(166568).arrowUpRightSquareSmallIcon,
                                            size: 16,
                                            colorVariant: "tertiary"
                                        })]
                                    })
                                })
                            })]
                        }), (0, r.jsx)(o, {
                            spaceId: n,
                            servicePeriodStartMs: I,
                            servicePeriodEndMs: S.end.getTime()
                        }), (0, r.jsx)("div", {
                            style: P.cardsTableGap
                        }), (0, r.jsx)(k, {
                            spaceId: n,
                            spaceStore: e,
                            servicePeriodStartMs: I,
                            servicePeriodEndMs: S.end.getTime(),
                            canViewAll: d || c,
                            onCsvExportStateChange: v
                        })]
                    }) : void 0]
                })
            }
        },
        993096: (e, t, i) => {
            i.d(t, {
                FK: () => I,
                Mb: () => j,
                Wo: () => a,
                aZ: () => r,
                ze: () => S
            });
            let a = 500,
                r = 100,
                n = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                s = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "enterprise"
                    },
                    upsell: void 0
                },
                o = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "business"
                    },
                    upsell: void 0
                },
                l = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "advanced"
                    }
                },
                d = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "personal_ai"
                    },
                    upsell: void 0
                },
                c = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "advanced"
                    }
                },
                u = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "personal",
                        featureSet: "advanced"
                    }
                },
                g = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "core"
                    }
                },
                m = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                p = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                h = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                y = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "business"
                    },
                    upsell: void 0
                },
                f = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                b = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "enterprise"
                    },
                    upsell: void 0
                },
                v = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                x = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                };

            function j({
                billingData: e
            }) {
                let t = (0, i(192159).YF)(e),
                    a = (0, i(192159).N8)(e),
                    r = (0, i(192159).eh)(e, "plus"),
                    S = (0, i(192159).eh)(e, "business"),
                    I = (0, i(192159).eh)(e, "enterprise"),
                    C = (0, i(192159).eh)(e, "ai"),
                    w = (0, i(192159).eh)(e, "student"),
                    M = (0, i(192159).eh)(e, "personal");
                if (a)
                    if (C && (r || S || I)) return n;
                    else if (e && (0, i(192159).PB)(e)) return I ? s : o;
                else return l;
                if (w)
                    if (C) return m;
                    else return p;
                if (S)
                    if (C) return h;
                    else return y;
                if (I)
                    if (C) return f;
                    else return b;
                if (t)
                    if (C && M) return d;
                    else if (M && !C) return c;
                else if (C && !M) return u;
                else return g;
                else if (C) return v;
                else return x
            }

            function S({
                billingData: e
            }) {
                var t;
                return (null == (t = j({
                    billingData: e
                })) || null == (t = t.upsell) ? void 0 : t.product) === "ai"
            }

            function I(e) {
                return e * r
            }
        },
        993638: (e, t, i) => {
            i.d(t, {
                Ft: () => y,
                HN: () => m,
                MA: () => c,
                Sk: () => g,
                Yn: () => b,
                e9: () => d,
                eJ: () => f,
                g9: () => u,
                su: () => h
            }), i(944114), i(898992), i(672577), i(737550);
            let a = (0, i(109939).YK)({
                unableToCancelError: {
                    id: "midtermSubscriptionHelpers.unableToCancel",
                    defaultMessage: "We cannot cancel your scheduled changes right now. Please contact support for more help."
                },
                cancellationSuccess: {
                    id: "midtermSubscriptionHelpers.cancellationSucceeded",
                    defaultMessage: "Pending changes have been canceled"
                }
            });

            function r(e) {
                return (0, i(262166).dL)(e) ? "free" : (0, i(262166).wb)(e) ? "education" : (0, i(262166).sP)(e) ? "singlePlayerPlus" : (0, i(262166).$P)(e) ? "plus" : (0, i(262166).tL)(e) ? "business" : (0, i(262166).OX)(e) ? "enterprise" : "legacy"
            }
            let n = (0, i(109939).YK)({
                    freePlan: {
                        defaultMessage: "Free Plan",
                        id: "freePlan.title"
                    },
                    educationPlusPlan: {
                        defaultMessage: "Education Plus Plan",
                        id: "educationPlusPlan.title"
                    },
                    plusPlan: {
                        defaultMessage: "Plus Plan",
                        id: "plusPlan.title"
                    },
                    businessPlan: {
                        id: "businessPlan.title",
                        defaultMessage: "Business Plan"
                    },
                    enterprisePlan: {
                        defaultMessage: "Enterprise Plan",
                        id: "enterprisePlan.label"
                    },
                    legacyPlan: {
                        defaultMessage: "Legacy Plan",
                        id: "legacyPlan.label"
                    }
                }),
                s = {
                    free: {
                        planTitle: n.freePlan
                    },
                    singlePlayerPlus: {
                        planTitle: n.plusPlan
                    },
                    education: {
                        planTitle: n.educationPlusPlan
                    },
                    plus: {
                        planTitle: n.plusPlan
                    },
                    business: {
                        planTitle: n.businessPlan
                    },
                    enterprise: {
                        planTitle: n.enterprisePlan
                    },
                    legacy: {
                        planTitle: n.legacyPlan
                    }
                },
                o = (0, i(109939).YK)({
                    notionAI: {
                        defaultMessage: "Notion AI",
                        id: "notionAI.title"
                    },
                    removeAI: {
                        defaultMessage: "Remove AI",
                        id: "notionAI.remove.title"
                    }
                }),
                l = (0, i(109939).YK)({
                    month: {
                        defaultMessage: "Monthly billing",
                        id: "billingInterval.monthly"
                    },
                    year: {
                        defaultMessage: "Annual billing",
                        id: "billingInterval.annual"
                    }
                });

            function d() {
                return i(962299).A.formatMessage(a.unableToCancelError)
            }

            function c() {
                return i(962299).A.formatMessage(a.cancellationSuccess)
            }

            function u(e) {
                let t = (0, i(192159).pm)(null == e ? void 0 : e.subscription);
                if (!t) return;
                let a = (0, i(192159).PP)(e),
                    r = (0, i(192159).lQ)(e);
                return {
                    oldTier: (0, i(958059).Gf)(a) ? ? "free",
                    newTier: (0, i(958059).Gf)(r) ? ? "free",
                    oldAIAddOn: (0, i(958059).V_)(a).find(e => "ai" === e),
                    newAIAddOn: (0, i(958059).V_)(r).find(e => "ai" === e),
                    oldAiCreditPackQuantity: (0, i(192159).Oq)(a.items),
                    newAiCreditPackQuantity: (0, i(192159).Oq)(r.items),
                    oldInterval: (0, i(958059).yw)(a),
                    newInterval: (0, i(958059).yw)(r),
                    phaseOneEndDate: t.startDate
                }
            }

            function g(e) {
                let t = u(e);
                return !!t && !!t.newInterval && t.oldInterval !== t.newInterval
            }

            function m(e) {
                let t = u(e);
                return !!t && t.oldTier !== t.newTier
            }
            let p = (0, i(109939).YK)({
                bannerQuantityChange: {
                    defaultMessage: "Notion Credits: {oldAiCreditsQuantity} → {newAiCreditsQuantity}",
                    id: "bannerQuantityMessages.bannerQuantityChange"
                }
            });

            function h(e) {
                let t, a, n = u(e),
                    d = [];
                if (!n) return {
                    scheduledChanges: d,
                    periodEndDate: null
                };
                let {
                    newTier: c,
                    oldTier: g,
                    oldAIAddOn: m,
                    newAIAddOn: h,
                    oldAiCreditPackQuantity: y,
                    newAiCreditPackQuantity: f,
                    oldInterval: b,
                    newInterval: v,
                    phaseOneEndDate: x
                } = n;
                g !== c && d.push(function(e, t) {
                    let a = r(e),
                        n = i(962299).A.formatMessage(s[a].planTitle);
                    if (!t) return "";
                    let o = r(t),
                        l = i(962299).A.formatMessage(s[o].planTitle);
                    return `${n} ${(0,i(619157).A1)()?"←":"→"} ${l}`
                }(g, c)), m !== h && d.push((t = i(962299).A.formatMessage(m ? o.notionAI : o.removeAI), a = i(962299).A.formatMessage(h ? o.notionAI : o.removeAI), `${t} ${(0,i(619157).A1)()?"←":"→"} ${a}`));
                let j = (0, i(192159).qV)(e).isRecurring,
                    S = (0, i(192159).Le)(e).isRecurring,
                    I = j !== S;
                return (y !== f || I) && d.push(function(e) {
                    let {
                        oldAiCreditPackQuantity: t,
                        newAiCreditPackQuantity: a,
                        oldStateHasAllocatedCredits: r,
                        newStateHasAllocatedCredits: n
                    } = e, s = r ? i(993096).Wo : 0, o = n ? i(993096).Wo : 0;
                    return i(962299).A.formatMessage(p.bannerQuantityChange, {
                        oldAiCreditsQuantity: ((0, i(993096).FK)(t) + s).toLocaleString(),
                        newAiCreditsQuantity: ((0, i(993096).FK)(a) + o).toLocaleString()
                    })
                }({
                    oldAiCreditPackQuantity: y,
                    newAiCreditPackQuantity: f,
                    oldStateHasAllocatedCredits: j,
                    newStateHasAllocatedCredits: S
                })), b !== v && d.push(function(e, t) {
                    if (!e || !t) return "";
                    let a = i(962299).A.formatMessage("month" === e ? l.month : l.year),
                        r = i(962299).A.formatMessage("month" === t ? l.month : l.year);
                    return `${a} ${(0,i(619157).A1)()?"←":"→"} ${r}`
                }(b, v)), {
                    scheduledChanges: d,
                    periodEndDate: x
                }
            }

            function y(e, t) {
                var a;
                if (!e) return;
                let r = (0, i(192159).PP)(e).items,
                    n = (0, i(192159).lQ)(e).items;
                if ((0, i(192159).HO)(r, n).some(([e, a]) => (0, i(192159).IE)(e ? ? a) === t && e && !a)) return null == (a = (0, i(192159).pm)(e.subscription)) ? void 0 : a.startDate
            }

            function f({
                billingData: e
            }) {
                let t = (0, i(226309).a9)(e);
                if (!t || (0, i(192159).et)(e)) return !1;
                let a = (0, i(192159).bO)(t),
                    r = (0, i(192159).N8)(t);
                return !a && !r
            }

            function b(e) {
                let t = (0, i(192159).V9)(e),
                    a = (0, i(192159).ji)(e).length > 0;
                return !(t && i(126365).xd.includes(t)) || !!(a && i(126365).iV.includes(t)) || !1
            }
        }
    }
]);