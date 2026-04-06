"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14416, 78257], {
        77386: (e, t, r) => {
            r.d(t, {
                J2: () => o,
                NF: () => l,
                gA: () => i,
                jl: () => g,
                p6: () => y,
                rQ: () => c
            }), r(581454), r(296540);
            var n = r(474848);
            let i = 24,
                o = 440,
                l = 480,
                a = {
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    gap: 8
                },
                s = {
                    textAlign: "center"
                },
                d = {
                    textAlign: "center"
                };

            function c(e) {
                let {
                    icon: t,
                    title: i,
                    byline: o,
                    bylineWidthOverride: l
                } = e;
                return (0, n.jsxs)("div", {
                    style: a,
                    children: [t, (0, n.jsx)(r(111010).D, {
                        styleKey: "titleSmSemibold",
                        style: s,
                        children: i
                    }), (0, n.jsx)(r(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: l ? { ...d,
                            width: l
                        } : d,
                        children: o
                    })]
                })
            }
            let u = {
                cancelButton: { ...r(399842).W,
                    height: 32,
                    color: r(632079).Tj.text.secondary
                }
            };

            function g(e) {
                let {
                    primaryText: t,
                    primaryAction: i,
                    primaryDisabled: o,
                    secondaryText: l,
                    secondaryAction: a,
                    isLightRed: s,
                    isDarkRed: d,
                    isLoading: c
                } = e, g = !(s || d), p = (0, r(960253).I)(() => ({
                    container: {
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: g ? "row-reverse" : "column",
                        alignItems: "center",
                        justifyContent: g ? "flex-start" : "flex-end",
                        gap: 8,
                        padding: "0 20px",
                        marginInlineStart: -20,
                        width: "calc(100% + 40px)"
                    },
                    fullWidth: g ? {} : {
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }), [g]);
                return (0, n.jsxs)("div", {
                    style: p.container,
                    children: [s ? (0, n.jsx)(r(265779).E, {
                        size: "lg",
                        onClick: i,
                        colorPalette: s ? "red" : void 0,
                        disabled: o,
                        style: p.fullWidth,
                        children: c ? (0, n.jsx)(r(517334).k, {}) : t
                    }) : (0, n.jsx)(r(912946).A, {
                        size: "lg",
                        onClick: i,
                        disabled: o,
                        style: p.fullWidth,
                        colorPalette: d ? "red" : "blue",
                        children: c ? (0, n.jsx)(r(517334).k, {}) : t
                    }), (0, n.jsx)(r(988022).p, {
                        size: "lg",
                        onClick: a,
                        style: { ...p.fullWidth,
                            ...u.cancelButton
                        },
                        children: l
                    })]
                })
            }
            let p = {
                style0: { ...(0, r(418676).pA)(1),
                    textOverflow: "ellipsis"
                },
                selectorContainer: {
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    boxShadow: "0px 2px 4px 0px #0000000a",
                    borderRadius: 8
                },
                headerText: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column"
                },
                selectorHeader: {
                    padding: "4px 12px",
                    borderBottom: `1px solid ${r(632079).Tj.border.secondary}`,
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 1fr"
                },
                selectorHeaderWithAction: {
                    paddingTop: 4,
                    paddingInlineEnd: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 12,
                    borderBottom: `1px solid ${r(632079).Tj.border.secondary}`,
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 1fr"
                },
                selectorBody: {
                    paddingInline: 12,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyItems: "center",
                    width: "100%",
                    maxHeight: 204,
                    overflowX: "hidden",
                    overflowY: "auto"
                },
                selectorBodyRow: {
                    display: "grid",
                    gridTemplateColumns: "24px minmax(auto, 50%) 1fr",
                    width: "100%",
                    paddingBlock: 8,
                    gap: 8,
                    borderTop: `1px solid ${r(632079).Tj.border.secondary}`
                }
            };

            function y(e) {
                let {
                    items: t,
                    selectedIds: i,
                    disabledIds: o,
                    onSelectHeader: l,
                    onSelect: a,
                    titleText: s,
                    headerText: d,
                    headerAction: c
                } = e, u = void 0 !== i && void 0 !== o && a && l, g = void 0 !== o ? t.length - o.length : 0, y = (() => {
                    if (void 0 === i) return !1;
                    let e = 0;
                    for (let r of t) i.includes(r.id) && (e += 1);
                    return 0 !== e && (e !== g ? "partial" : 0 !== g)
                })();
                return (0, n.jsxs)(r(4458).VP, {
                    gap: 8,
                    marginBottom: 4,
                    children: [(0, n.jsx)(r(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: s
                    }), (0, n.jsxs)("div", {
                        style: p.selectorContainer,
                        children: [(0, n.jsxs)("div", {
                            style: { ...c ? p.selectorHeaderWithAction : p.selectorHeader,
                                gridTemplateColumns: u ? "24px 1fr 1fr" : "1fr 1fr"
                            },
                            children: [u ? (0, n.jsx)(r(4458).VP, {
                                justifyContent: "center",
                                alignItems: "flex-start",
                                children: (0, n.jsx)(r(349050).S, {
                                    checked: y,
                                    size: 14,
                                    onClick: l
                                })
                            }) : null, (0, n.jsx)(r(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                style: p.headerText,
                                children: d
                            }), (0, n.jsx)(r(4458).fI, {
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                children: c
                            })]
                        }), (0, n.jsx)("div", {
                            style: p.selectorBody,
                            children: t.map(({
                                id: e,
                                icon: t,
                                name: l,
                                caption: s,
                                byline: d
                            }, c) => (0, n.jsxs)("div", {
                                style: { ...p.selectorBodyRow,
                                    borderTopWidth: +(0 !== c),
                                    gridTemplateColumns: u ? "24px minmax(auto, 50%) 1fr" : "minmax(auto, 50%) 1fr"
                                },
                                children: [u ? (0, n.jsx)(r(4458).VP, {
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    children: (0, n.jsx)(r(349050).S, {
                                        checked: i.includes(e) || o.includes(e),
                                        size: 14,
                                        onClick: () => a(e),
                                        disabled: o.includes(e),
                                        style: {
                                            opacity: o.includes(e) ? .3 : 1
                                        }
                                    })
                                }) : null, (0, n.jsxs)(r(4458).fI, {
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 8,
                                    children: [(0, n.jsx)(r(4458).fI, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 28,
                                        width: 28,
                                        children: t
                                    }), (0, n.jsxs)(r(4458).VP, {
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        gap: 2,
                                        children: [(0, n.jsx)(r(111010).D, {
                                            styleKey: "bodyMedium",
                                            style: p.style0,
                                            children: l
                                        }), s ? (0, n.jsx)(r(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "secondary",
                                            style: p.style0,
                                            children: s
                                        }) : null]
                                    })]
                                }), (0, n.jsx)(r(4458).fI, {
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    children: d
                                })]
                            }, e))
                        })]
                    })]
                })
            }
        },
        120011: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowChevronSingleRightIcon: () => i,
                iconDefinition: () => n
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "7.22 3.97 6.66 12.06",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M13.692 10.442a.625.625 0 0 0 0-.884l-5.4-5.4a.625.625 0 1 0-.884.884L12.366 10l-4.958 4.958a.625.625 0 0 0 .884.884z"
                    })
                },
                i = (0, r(104509).wt)("arrowChevronSingleRight", n, "default")
        },
        193294: (e, t, r) => {
            r.d(t, {
                V0: () => a,
                Zh: () => l,
                lC: () => s
            }), r(16280);
            var n = r(296540),
                i = r(474848);
            let o = n.createContext(void 0);

            function l(e) {
                return (0, i.jsx)(o.Provider, {
                    value: e.value,
                    children: e.children
                })
            }

            function a() {
                let e = n.useContext(o);
                if (!e) throw Error("useChartStore must be used within a ChartContextProvider");
                return e
            }

            function s() {
                return n.useContext(o)
            }
            o.displayName = "ChartContext"
        },
        199532: (e, t, r) => {
            r.d(t, {
                Ay: () => o,
                CL: () => a,
                bL: () => l
            });
            var n = r(296540),
                i = r(474848);
            let o = function({
                    schema: e,
                    sort: t,
                    disabled: r,
                    onChange: o,
                    index: l,
                    collectionViewType: a,
                    collectionContextStore: s
                }) {
                    let c = e[t.property];
                    return c ? (0, i.jsxs)(n.Fragment, {
                        children: [(0, i.jsx)(u, {
                            disabled: r,
                            schema: e,
                            sort: t,
                            onChange: o,
                            index: l,
                            collectionViewType: a,
                            collectionContextStore: s,
                            propertySchema: c
                        }), (0, i.jsx)(d, {
                            sort: t,
                            index: l,
                            onChange: o,
                            collectionViewType: a,
                            collectionContextStore: s,
                            disabled: r
                        })]
                    }) : null
                },
                l = {
                    ascending: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Ascending",
                        id: "collectionSortMenuRow.sortDirectionSelectMenu.ascending"
                    }),
                    descending: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Descending",
                        id: "collectionSortMenuRow.sortDirectionSelectMenu.descending"
                    })
                },
                a = (0, r(109939).YK)({
                    menuTitle: {
                        id: "collectionSortMenuRow.sortDirectionSelectMenu.title",
                        defaultMessage: "Sort"
                    },
                    emptyPlaceholder: {
                        id: "collectionSortMenuRow.sortDirectionSelectMenu.placeholder",
                        defaultMessage: "Empty"
                    }
                }),
                s = {
                    opacity: 1
                };

            function d({
                sort: e,
                index: t,
                onChange: n,
                collectionViewType: o,
                collectionContextStore: c,
                disabled: u
            }) {
                let g = (0, r(533992).v3)(),
                    p = (0, r(109939).tz)(),
                    y = e.direction,
                    m = {
                        menuTitle: p.formatMessage(a.menuTitle),
                        items: [...r(829035).FU],
                        getKey: e => e,
                        selectedItem: y,
                        disabled: u,
                        onSelect: i => {
                            n(t, { ...e,
                                direction: i
                            }), c ? (0, r(893783).X)({
                                environment: g,
                                action: "set_sort_direction",
                                sort_direction: i,
                                collectionContextStore: c
                            }) : o && (0, r(921276).D)(g, {
                                view_type: o,
                                action: "set_sort_direction"
                            })
                        },
                        renderItem: e => (0, i.jsx)(r(95582).A, {
                            title: l[e.value],
                            ...e
                        }),
                        children: e => (0, i.jsx)(r(332082).A, { ...e,
                            placeholder: p.formatMessage(a.emptyPlaceholder),
                            title: y && l[y],
                            disabled: u,
                            desktopStyle: s
                        })
                    };
                return (0, i.jsx)(r(691509).A, { ...m,
                    menuTypeOverride: (0, r(649476).PK)()
                }, "direction")
            }
            let c = {
                opacity: 1
            };

            function u({
                propertySchema: e,
                disabled: t,
                schema: n,
                sort: o,
                onChange: l,
                index: a,
                collectionViewType: s,
                collectionContextStore: d
            }) {
                let g = (0, r(533992).v3)(),
                    p = (0, r(682985).K8)(() => {
                        var e;
                        return null == d || null == (e = d.collectionViewStore()) ? void 0 : e.getCollectionSource()
                    }, [d]);
                return (0, i.jsx)(r(656252).A, {
                    popupType: r(986939).A.isMobile ? r(656252).z.SlideUp : r(656252).z.Popup,
                    content: e => (0, i.jsx)(r(645153).A, {
                        isRelationProperty: !1,
                        schema: n,
                        onAccept: e => {
                            l(a, { ...o,
                                property: e
                            }), d ? (0, r(893783).X)({
                                environment: g,
                                action: "set_sort_property",
                                collectionContextStore: d
                            }) : s && (0, r(921276).D)(g, {
                                view_type: s,
                                action: "set_sort_property"
                            })
                        },
                        onClose: e.close,
                        allowProperty: e => (0, r(829035).oH)(e, p)
                    }),
                    disabled: t,
                    children: n => (0, i.jsx)(r(36772).A, { ...n,
                        propertySchema: e,
                        disabled: t,
                        textWrapperStyle: c
                    })
                })
            }
        },
        251885: (e, t, r) => {
            r.d(t, {
                b: () => n,
                y: () => i
            });
            let n = (0, r(109939).YK)({
                noData: {
                    defaultMessage: "No data",
                    id: "chartError.noData"
                },
                badYAxisRange: {
                    defaultMessage: "No data due to axis range",
                    id: "chartError.badYAxisRange"
                },
                unconfiguredProperty: {
                    id: "chartError.unconfiguredProperty",
                    defaultMessage: "Property is not configured. Please make another selection."
                },
                unsupportedProperty: {
                    id: "chartError.unsupportedProperty",
                    defaultMessage: "This property type is not supported. Please select another property"
                },
                unsupportedFormula: {
                    id: "chartError.unsupportedFormula",
                    defaultMessage: "This formula is not supported. Please select another property or adjust your formula."
                },
                deletedProperty: {
                    id: "chartError.deletedProperty",
                    defaultMessage: "This property has been deleted. Please select another property."
                },
                invalidAggregation: {
                    id: "chartError.invalidAggregation",
                    defaultMessage: "Previously selected property is no longer valid with the current aggregation. Please make another selection."
                },
                invalidPropertyValueChart: {
                    id: "chartError.invalidPropertyValueChart",
                    defaultMessage: "Selected property is no longer valid with the previous configured chart. Please make another selection."
                },
                noValues: {
                    id: "chartError.noValues",
                    defaultMessage: "This property has no values. Please add some values or select another property."
                }
            });

            function i(e) {
                switch (e) {
                    case "groupBy_property_not_configured":
                    case "aggregation_property_not_configured":
                    case "name_property_not_configured":
                    case "property_value_property_not_configured":
                        return r(962299).A.formatMessage(n.unconfiguredProperty);
                    case "groupBy_property_not_groupable":
                    case "stackBy_property_not_groupable":
                        return r(962299).A.formatMessage(n.unsupportedProperty);
                    case "groupBy_formula_not_groupable":
                    case "stackBy_formula_not_groupable":
                        return r(962299).A.formatMessage(n.unsupportedFormula);
                    case "groupBy_property_deleted":
                    case "stackBy_property_deleted":
                    case "aggregation_deleted":
                    case "name_property_deleted":
                    case "property_value_property_deleted":
                        return r(962299).A.formatMessage(n.deletedProperty);
                    case "aggregation_invalid":
                        return r(962299).A.formatMessage(n.invalidAggregation);
                    case "stackBy_property_no_values":
                        return r(962299).A.formatMessage(n.noValues);
                    case "name_property_invalid":
                    case "property_value_property_invalid":
                        return r(962299).A.formatMessage(n.invalidPropertyValueChart)
                }
            }
        },
        328797: (e, t, r) => {
            r.d(t, {
                I: () => n
            });

            function n({
                rowId: e,
                heightConfig: t,
                ignoreDragState: i = !1
            }) {
                var o;
                return o = (!i && e ? r(514976).s.maybeGetDraggingHeightForRow(e) : void 0) ? ? function(e) {
                    if (e) {
                        if ("fixed" === e.type) return e.heightPx;
                        (0, r(722371).HB)(e.type)
                    }
                }(t), (0, r(627179).qE)({
                    value: o ? ? r(876375).PQ,
                    min: r(876375).I4,
                    max: r(876375).Ez
                })
            }
        },
        399842: (e, t, r) => {
            r.d(t, {
                W: () => n
            });
            let n = {
                height: 28,
                paddingInlineStart: 8,
                paddingInlineEnd: 8,
                paddingTop: 4,
                paddingBottom: 4,
                fontWeight: r(699422).Wy.medium
            }
        },
        404078: (e, t, r) => {
            function n(e) {
                return void 0 !== e && "auto" !== e && "colorful" !== e
            }

            function i(e, t) {
                if ("auto" === e);
                else if ("colorful" === e) return r(620107).O.colorful.slice(0, 6);
                else if (o(e)) {
                    let n = "gray" === e ? "dark" === t ? "white" : "black" : e;
                    return r(620107).O[n]
                } else(0, r(722371).HB)(e)
            }

            function o(e) {
                return r(56224).VY.includes(e)
            }

            function l(e, t, n) {
                let i = function(e, t, n) {
                    let i;
                    if ("auto" === e) return;
                    i = "gray" === e ? "dark" === n ? "white" : "black" : e;
                    let l = r(620107).O[i];
                    return t && o(e) ? [l[0], l[3]] : l
                }(e, t, n);
                if (i) return o(e) && t ? {
                    colorAxis: {
                        minColor: i[1],
                        maxColor: i[0],
                        showInLegend: !1
                    },
                    colors: i
                } : {
                    colorAxis: void 0,
                    colors: i
                }
            }

            function a(e, t) {
                return r(111012).l8[t][e]
            }

            function s({
                collectionContextStore: e,
                groupValue: t,
                index: n,
                groupBy: i,
                theme: o,
                themeMode: a,
                environment: d
            }) {
                var c, u;
                let g = e.normalizedSchemaStore.state,
                    p = e.normalizedFormatStore.state;
                if ((null == (c = p.chart_config) ? void 0 : c.type) === "placeholder" || void 0 === t.value)
                    if ("light" === a) return r(620107).O.translucentGray[0];
                    else return r(620107).O.translucentGray[1];
                let y = g[i.property],
                    m = y && ((0, r(532792).l)(y) || (0, r(422672).D)(y)),
                    f = (null == (u = p.chart_config) || null == (u = u.chartFormat) ? void 0 : u.colorTheme) || "auto";
                if ("auto" === f && m) {
                    let e = (0, r(933047).$e)({
                        environment: d,
                        groupFormat: {
                            property: i.property,
                            value: t
                        },
                        schema: g,
                        format: p,
                        theme: o,
                        themeMode: a,
                        ignoreDisableColorColumns: !0
                    });
                    if (e) return e.chartColor
                }
                let h = l("auto" === f ? "colorful" : f, !1, a),
                    x = (null == h ? void 0 : h.colors) || r(620107).O.colorful,
                    v = n % x.length;
                return x[v]
            }

            function d(e) {
                let {
                    color: t,
                    hideLineFillArea: n,
                    isStacked: i
                } = e;
                return n ? {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, "rgba(0, 0, 0, 0)"],
                        [1, "rgba(0, 0, 0, 0)"]
                    ]
                } : i ? (0, r(650342).X4)(t, .1) : {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, (0, r(650342).X4)(t, .1)],
                        [1, (0, r(650342).X4)(t, 0)]
                    ]
                }
            }

            function c(e) {
                return e === r(56224).PC.normal || e === r(56224).PC.percent
            }

            function u(e) {
                return {
                    pattern: {
                        path: {
                            d: "M 2.5 7.5 L 10.5 -0.5 M -0.5 4.5 L 4.5 -0.5 M 4.5 10.5 L 10.5 4.5",
                            strokeWidth: 1,
                            stroke: e
                        },
                        width: 6,
                        height: 6,
                        backgroundColor: (0, r(650342).X4)(e, .1)
                    }
                }
            }
            r.d(t, {
                BV: () => i,
                FI: () => a,
                H0: () => u,
                HH: () => s,
                LF: () => n,
                NF: () => m,
                Pi: () => o,
                Q1: () => g,
                US: () => c,
                nH: () => y,
                tm: () => d,
                wW: () => l
            });
            let g = ["gradient", "blue", "red", "yellow", "grey", "none"],
                p = (0, r(109939).YK)({
                    gradient: {
                        defaultMessage: "Gradient",
                        id: "chart.export.background.gradient"
                    },
                    blue: {
                        defaultMessage: "Blue",
                        id: "chart.export.background.blue"
                    },
                    red: {
                        defaultMessage: "Red",
                        id: "chart.export.background.red"
                    },
                    yellow: {
                        defaultMessage: "Yellow",
                        id: "chart.export.background.yellow"
                    },
                    grey: {
                        defaultMessage: "Grey",
                        id: "chart.export.background.grey"
                    },
                    none: {
                        defaultMessage: "None",
                        id: "chart.export.background.none"
                    }
                });

            function y(e) {
                return p[e]
            }

            function m(e) {
                let {
                    theme: t,
                    color: n,
                    hovered: i,
                    themeMode: o
                } = e, l = "light" === o ? i ? 100 : 50 : i ? 600 : 500;
                switch (n) {
                    case "blue":
                        return t.palette.blue[l];
                    case "red":
                        return t.palette.red[l];
                    case "yellow":
                        return t.palette.yellow[l];
                    case "grey":
                        return t.palette.gray[l];
                    case "none":
                        let a = i ? t.buttonHoveredBackground : t.popoverBackground;
                        return `linear-gradient(to top right, ${a} calc(50% - 1px), ${r(632079).Tj.border.secondaryTranslucent}, ${a} calc(50% + 1px) )`;
                    case "gradient":
                        let s = i ? `linear-gradient(${t.buttonHoveredBackground}, ${t.buttonHoveredBackground}), ` : "";
                        return `${s}${"dark"===o?"linear-gradient(123deg, #3C3F41 40.15%, #4A2F27 89.33%)":"linear-gradient(123deg, #FEF5E9 40.15%, #FEE9E9 89.33%)"}`;
                    default:
                        (0, r(722371).HB)(n)
                }
            }
        },
        431647: (e, t, r) => {
            r.d(t, {
                Z: () => n,
                $: () => s
            }), r(898992), r(672577);
            let n = r(56224).bg.medium,
                i = {
                    [r(56224).bg.small]: 300,
                    [r(56224).bg.medium]: 400,
                    [r(56224).bg.large]: 600,
                    [r(56224).bg.extra_large]: 800
                },
                o = r(876375).I4 - 50,
                l = r(876375).Ez - 50 - o,
                a = [{
                    maxHeight: o + .25 * l,
                    format: r(56224).bg.small
                }, {
                    maxHeight: o + .5 * l,
                    format: r(56224).bg.medium
                }, {
                    maxHeight: o + .75 * l,
                    format: r(56224).bg.large
                }];

            function s({
                chartHeightFormat: e
            }) {
                let t = (0, r(713311).Ks)();
                return (0, r(682985).K8)(() => (function({
                    collectionContextStore: e,
                    chartHeightFormat: t
                }) {
                    let o = e && function(e) {
                        var t, r;
                        let {
                            viewModule: n,
                            dashboardViewStore: i
                        } = (null == (t = e.dashboardWidgetStore) ? void 0 : t.state) ? ? {};
                        if (n) return null == i || null == (r = i.getDashboardLayoutStore()) || null == (r = r.getDashboardModules()) ? void 0 : r.find(e => e.modules.find(e => e.id === n.id))
                    }(e);
                    if (o) {
                        let e = (0, r(328797).I)({
                            rowId: o.id,
                            heightConfig: o.heightConfig,
                            ignoreDragState: !1
                        }) - 50;
                        return {
                            pixelHeight: e,
                            semanticHeight: function(e) {
                                for (let {
                                        maxHeight: t,
                                        format: r
                                    } of a)
                                    if (e < t) return r;
                                return r(56224).bg.extra_large
                            }(e)
                        }
                    }
                    let l = t ? ? n;
                    return {
                        pixelHeight: i[l],
                        semanticHeight: l
                    }
                })({
                    collectionContextStore: t,
                    chartHeightFormat: e
                }), [t, e], {
                    recomputeSchedule: {
                        type: "debounce",
                        debounceMs: 200,
                        initialValue: {
                            pixelHeight: 0,
                            semanticHeight: e ? ? n
                        },
                        maxWait: 1e3,
                        leading: !0,
                        trailing: !0
                    }
                })
            }
        },
        507391: (e, t, r) => {
            r.d(t, {
                d: () => i,
                h: () => l
            }), r(296540);
            var n = r(474848);

            function i({
                dateTs: e,
                useSecondaryColorTitle: t,
                includeTime: o,
                tooltip: l,
                omitTooltip: a
            }) {
                let s = (0, n.jsx)(r(394327).s7, {
                    useThinTitle: !0,
                    useSecondaryColorTitle: t,
                    title: o ? (0, r(799843).x$)(e, !0) : (0, r(799843).DG)(e)
                });
                return a ? s : (0, n.jsx)(r(51831).m, {
                    content: () => l ? ? (0, r(799843).x$)(e),
                    children: e => (0, n.jsx)("div", { ...e,
                        children: s
                    })
                })
            }
            let o = {
                width: "50%"
            };

            function l() {
                return (0, n.jsx)(r(394327).mf, {
                    titleStyles: o
                })
            }
        },
        575422: (e, t, r) => {
            r.d(t, {
                m: () => i
            });
            let n = (0, r(109939).YK)({
                untitledAgent: {
                    id: "workflow.emptyWorkflowTitle",
                    defaultMessage: "Untitled agent"
                }
            });

            function i(e, t, r) {
                var i;
                return {
                    name: e.getName() || r || t.formatMessage(n.untitledAgent),
                    icon: e.getRawIcon() || "",
                    isLite: (null == (i = e.getData()) ? void 0 : i.isLite) ? ? !1
                }
            }
        },
        594429: (e, t, r) => {
            r.d(t, {
                S: () => o
            });
            var n = r(296540),
                i = r(474848);

            function o({
                onCancel: e,
                onSubmit: t,
                headerText: l,
                bylineText: a,
                submitText: s
            }) {
                let [d, c] = (0, n.useState)(!1);
                return (0, i.jsx)(r(833503).s, {
                    isOpen: !0,
                    onDismiss: e,
                    areaConstraint: {
                        width: {
                            type: "min",
                            length: r(77386).NF
                        }
                    },
                    children: () => (0, i.jsx)(r(314084).t, {
                        header: (0, i.jsx)(r(582471).Y, {
                            iconAndTitle: (0, i.jsx)(r(209590).Z, {
                                iconGroup: r(940227).F,
                                iconColorPalette: "red",
                                iconColorVariant: "accentPrimary",
                                title: l
                            }),
                            description: a
                        }),
                        footer: (0, i.jsx)(r(591637).a, {
                            primaryButtons: [{
                                buttonType: "destructive",
                                label: s,
                                onClick: async () => {
                                    c(!0), await t(), c(!1)
                                },
                                isDisabled: d
                            }],
                            secondaryButtons: [{
                                buttonType: "dismiss",
                                label: (0, i.jsx)(r(109939).sA, {
                                    id: "destructiveActionModal.button.cancel",
                                    defaultMessage: "Cancel"
                                })
                            }],
                            layout: "vertical"
                        })
                    })
                })
            }
        },
        614416: (e, t, r) => {
            r.d(t, {
                _G: () => b,
                $k: () => c,
                w$: () => j,
                H$: () => f,
                l9: () => S,
                NH: () => v,
                jY: () => m,
                JI: () => h,
                ck: () => y,
                i5: () => x,
                EN: () => C,
                gc: () => u,
                wK: () => p
            });
            var n = r(296540),
                i = r(474848);
            let o = n.memo(function(e) {
                let {
                    size: t,
                    style: r,
                    icon: n,
                    baseUrl: o,
                    getRecordModel: a
                } = e;
                return (0, i.jsx)("div", {
                    style: {
                        height: t,
                        width: t,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                        verticalAlign: "top",
                        marginTop: 1,
                        ...r
                    },
                    children: (0, i.jsx)(l, {
                        icon: n,
                        size: t,
                        baseUrl: o,
                        getRecordModel: a
                    })
                })
            });

            function l({
                icon: e,
                size: t,
                baseUrl: n,
                getRecordModel: o
            }) {
                if (!e) return null;
                let a = (e, o) => {
                        let l = r(587031).wY({
                            url: e,
                            baseUrl: n,
                            fullyQualified: !0,
                            permissionRecord: o,
                            width: .888 * t,
                            userId: void 0
                        });
                        return (0, i.jsx)("img", {
                            alt: "icon",
                            src: l,
                            style: {
                                width: .888 * t,
                                height: .888 * t,
                                objectFit: "cover",
                                borderRadius: 4,
                                marginTop: 1
                            }
                        })
                    },
                    s = (0, r(565546).WO)(e.icon);
                switch (s.type) {
                    case "unicode_emoji":
                        return (0, i.jsx)("div", {
                            style: {
                                fontSize: .9 * t
                            },
                            children: s.emoji.unicode
                        });
                    case "custom_emoji":
                        let d = r(993189).xm7.resolveCustomEmojiIcon(e, o);
                        if (d) return a(d.icon, d.pointer);
                        return null;
                    case "app_package_asset":
                    case "notion_icon":
                    case "url":
                        return a(e.icon, e.pointer);
                    default:
                        (0, r(722371).HB)(s)
                }
            }
            let a = function(e) {
                let {
                    botValue: t,
                    avatarSize: n,
                    baseUrl: o,
                    theme: l,
                    style: a
                } = e;
                if (null != t && t.icon) {
                    let s = r(728601).GM(t.icon) ? r(587031).x8({
                        url: t.icon,
                        width: e.avatarSize,
                        fullyQualified: !0,
                        stripGoogleIconQuery: !0,
                        baseUrl: o,
                        userId: void 0
                    }) : t.icon;
                    return (0, i.jsx)("div", {
                        style: { ...(0, r(189113).fo)({
                                theme: l,
                                avatarSize: n
                            }),
                            ...a
                        },
                        children: (0, i.jsx)("img", {
                            src: s,
                            style: {
                                display: "block",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        })
                    })
                }
                if (null == t || !t.name) return (0, i.jsx)("span", {
                    children: "🤖"
                }); {
                    let e = t.name[0];
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)("div", {
                            style: { ...(0, r(189113).ws)({
                                    theme: l,
                                    avatarSize: n
                                }),
                                ...a
                            },
                            children: (0, i.jsx)("div", {
                                children: e
                            })
                        })
                    })
                }
            };

            function s(e) {
                let {
                    group: t,
                    getRecordModel: n,
                    size: o = 20,
                    baseUrl: l,
                    theme: a,
                    groupIconStyles: s
                } = e, c = { ...(0, r(189113).fo)({
                        theme: a,
                        avatarSize: o
                    }),
                    ...e.avatarBackground
                };
                if (null != t && t.icon) {
                    let e = (0, r(565546).WO)(t.icon);
                    switch (e.type) {
                        case "unicode_emoji":
                            return (0, i.jsx)("div", {
                                style: c,
                                children: (0, i.jsx)("div", {
                                    style: {
                                        fontSize: .9 * o
                                    },
                                    children: e.emoji.unicode
                                })
                            });
                        case "custom_emoji":
                            let a = (0, r(659341).S4)({
                                    spacePermissionGroupId: t.id,
                                    spaceId: t.space_id
                                }),
                                s = r(993189).xm7.resolveCustomEmojiIcon({
                                    pointer: a,
                                    icon: t.icon
                                }, n);
                            if (!s) break;
                            let d = r(587031).wY({
                                url: s.icon,
                                baseUrl: l,
                                fullyQualified: !0,
                                permissionRecord: s.pointer,
                                width: o,
                                userId: void 0
                            });
                            return (0, i.jsx)("div", {
                                style: c,
                                children: (0, i.jsx)("img", {
                                    src: d,
                                    alt: t.name,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }
                                })
                            });
                        case "app_package_asset":
                        case "notion_icon":
                        case "url":
                            let u = r(728601).GM(t.icon) ? r(587031).x8({
                                url: t.icon,
                                width: o,
                                fullyQualified: !0,
                                stripGoogleIconQuery: !0,
                                baseUrl: l,
                                userId: void 0
                            }) : t.icon;
                            return (0, i.jsx)("div", {
                                style: c,
                                children: (0, i.jsx)("img", {
                                    src: u,
                                    alt: t.name,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }
                                })
                            });
                        default:
                            (0, r(722371).HB)(e)
                    }
                }
                return (0, i.jsx)(d, {
                    groupIconStyles: s
                })
            }

            function d(e) {
                let {
                    groupIconStyles: t
                } = e;
                return (0, i.jsx)("div", {
                    style: null == t ? void 0 : t.iconContainer,
                    children: (0, r(407598).peopleFillIcon)(null == t ? void 0 : t.icon)
                })
            }
            let c = (0, r(109939).YK)({
                titlePlaceholder: {
                    defaultMessage: "Untitled",
                    id: "chartLabelFormatHelpers.untitledBlock"
                }
            });

            function u(e, t, o) {
                let l = o ? 16 : 20,
                    d = (0, r(960253).I)(() => ({
                        wrapper: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            minWidth: 0
                        },
                        initialStyle: {
                            backgroundColor: r(632079).Tj.background.elevated,
                            border: `1px solid ${r(632079).Tj.border.primary}`,
                            color: r(632079).Tj.text.secondary
                        },
                        avatarStyle: {
                            background: "none"
                        },
                        botStyle: {
                            backgroundColor: r(632079).Tj.background.elevated,
                            border: `1px solid ${r(632079).Tj.border.primary}`,
                            color: r(632079).Tj.text.secondary,
                            fontSize: o ? 8 : 10
                        },
                        avatarWrapper: {
                            flexShrink: 0
                        },
                        nameWrapper: {
                            minWidth: 0,
                            ...r(699422).RC
                        }
                    }), [o]),
                    c = (0, r(47187).E)({
                        size: l
                    });
                return (0, n.useCallback)((n, u) => {
                    var g, p, y;
                    let m, f, h;
                    if (!u) return n.toString();
                    if (u.actorPointer && e)
                        if ((0, r(659341).I6)(u.actorPointer)) f = e((0, r(659341).S4)({
                            spacePermissionGroupId: u.actorPointer.id,
                            spaceId: u.actorPointer.spaceId
                        })), h = (0, r(405461).Pf)({
                            intl: t,
                            groupName: null == (p = f) ? void 0 : p.name
                        });
                        else {
                            let n = (0, r(197018).xC)({
                                pointer: u.actorPointer,
                                getRecordModel: e
                            });
                            h = null == (y = f = null == n ? void 0 : n.asActor) ? void 0 : y.getDisplayName(t)
                        }
                    return h || (h = n || t.formatMessage(r(993189).Fvx.messages.anonymousPlaceholder)), m = (null == (g = f) ? void 0 : g.table) === "space_permission_group" && e && f instanceof r(993189).G1c ? (0, i.jsx)(s, {
                        group: f,
                        getRecordModel: e,
                        size: l,
                        baseUrl: r(986939).A.domainBaseUrl,
                        theme: (0, r(632079).x0)(),
                        avatarBackground: d.avatarStyle,
                        groupIconStyles: c
                    }) : f instanceof r(993189).Fvx && f.isUser() ? (0, i.jsx)(r(189113).Ay, {
                        userValue: f,
                        avatarSize: l,
                        baseUrl: r(986939).A.domainBaseUrl,
                        theme: (0, r(632079).x0)(),
                        fontSize: o ? 8 : 10,
                        initialStyle: d.initialStyle,
                        avatarStyle: d.avatarStyle
                    }) : f instanceof r(993189).HaY && f.isBot() ? (0, i.jsx)(a, {
                        botValue: f,
                        avatarSize: l,
                        baseUrl: r(986939).A.domainBaseUrl,
                        theme: (0, r(632079).x0)(),
                        style: d.botStyle
                    }) : (0, i.jsx)(r(189113).Ay, {
                        userValue: {
                            name: "?"
                        },
                        avatarSize: l,
                        baseUrl: r(986939).A.domainBaseUrl,
                        theme: (0, r(632079).x0)(),
                        fontSize: o ? 8 : 10,
                        initialStyle: d.initialStyle,
                        avatarStyle: d.avatarStyle
                    }), r(595290).A.renderToStaticMarkup((0, i.jsxs)("div", {
                        style: d.wrapper,
                        children: [(0, i.jsx)("div", {
                            style: d.avatarWrapper,
                            children: m
                        }), o ? (0, i.jsx)("div", {
                            style: d.nameWrapper,
                            children: h
                        }) : null]
                    }))
                }, [e, t, o, d, c, l])
            }
            let g = {
                avatarWrapper: {
                    flexShrink: 0
                },
                titleWrapper: {
                    minWidth: 0,
                    ...r(699422).RC
                }
            };

            function p(e, t, l) {
                let a = t.formatMessage(c.titlePlaceholder);
                return (0, n.useCallback)((n, s) => {
                    let d;
                    if (!s || !e || (s.pagePointer && e && (d = e(s.pagePointer)), !d)) return n.toString() || a;
                    let c = d.getRenderTitleWithPlaceholder({
                            getRecordModel: e,
                            userTimeZone: l,
                            intl: t
                        }),
                        u = d.getRenderIcon({
                            getRecordModel: e
                        });
                    return r(595290).A.renderToStaticMarkup((0, i.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        minWidth: 0,
                        children: [u ? (0, i.jsx)("div", {
                            style: g.avatarWrapper,
                            children: (0, i.jsx)(o, {
                                getRecordModel: e,
                                icon: u,
                                size: 16,
                                baseUrl: r(986939).A.domainBaseUrl
                            })
                        }) : void 0, (0, i.jsx)("div", {
                            style: g.titleWrapper,
                            children: c
                        })]
                    }))
                }, [e, l, t, a])
            }

            function y(e) {
                var t, n, i, o;
                let l, a = (null == (t = e.aggregation) ? void 0 : t.aggregator) === "count" || (null == (n = e.aggregation) ? void 0 : n.aggregator) === "unique" ? "number" : h(e.propertySchema);
                return l = (null == (i = e.aggregation) ? void 0 : i.aggregator) === "count" || (null == (o = e.aggregation) ? void 0 : o.aggregator) === "unique" ? "precision_0" : e.numberPrecisionOverride && "precision_uncapped" !== e.numberPrecisionOverride && "precision_from_number_property" !== e.numberPrecisionOverride ? e.numberPrecisionOverride : x(e.propertySchema), t => "string" == typeof t ? t : l && "precision_uncapped" !== l ? (0, r(700369).ZV)(t, a, e.intl, "compact", l) : (0, r(700369).ZV)(C(t, 2), a, e.intl, "compact", void 0)
            }

            function m({
                groupBy: e,
                dateFormat: t,
                intl: r
            }) {
                return (n, i) => f({
                    dateString: i ? i.name : "string" == typeof n ? n : n.toString(),
                    dateFormat: t,
                    groupBy: e,
                    intl: r
                })
            }

            function f({
                dateString: e,
                dateFormat: t,
                groupBy: n,
                intl: i
            }) {
                let o = parseInt(e, 10);
                if (isNaN(o)) return e;
                switch (n) {
                    case "relative":
                    default:
                        return e;
                    case "day":
                        return (0, r(850640).ZF)({
                            value: {
                                type: "date",
                                start_date: r(906745).DateTime.fromMillis(o).toISODate()
                            },
                            date_format: t || r(943003).vz,
                            allowRelativeDates: !0,
                            intl: i
                        });
                    case "week":
                    case "month":
                    case "year":
                        let l = r(906745).DateTime.fromMillis(o),
                            a = {
                                type: n,
                                range: {
                                    type: "daterange",
                                    start_date: l.toISODate(),
                                    end_date: l.plus({
                                        [`${n}s`]: 1
                                    }).minus({
                                        days: 1
                                    }).toISODate()
                                }
                            };
                        return (0, r(933047).nc)({
                            value: a,
                            intl: i
                        })
                }
            }

            function h(e) {
                let t;
                return "number" === e.type ? t = e.number_format : "formula" === e.type && (t = e.number_format), t
            }

            function x(e) {
                return "number" === e.type || "formula" === e.type ? e.number_precision : void 0
            }

            function v({
                chartConfig: e,
                schema: t,
                highChartsLabel: n,
                highChartsValue: i,
                isMultiSeries: o,
                intl: l,
                numberPrecisionOverride: a
            }) {
                var s, d, c, u, g;
                let p, y, m, f, b = n,
                    S = i;
                if (!e) return {
                    label: b,
                    value: S
                };
                let _ = e.dataConfig;
                if (o) {
                    if ((0, r(828660).m8)(e) && "groups_reducer" === e.dataConfig.type) {
                        let n = e.dataConfig;
                        if (y = null == (s = n.aggregationConfig.stackOptions) ? void 0 : s.groupBy) {
                            let e = (0, r(561872)._g)({
                                schema: t,
                                property: y.property
                            });
                            e && (0, r(56224).zn)(e) && (m = e)
                        }
                        "count" !== (p = n.aggregationConfig.aggregation).aggregator && (f = (0, r(561872)._g)({
                            schema: t,
                            property: p.property
                        }))
                    }
                } else "groups_reducer" === _.type ? (y = _.groupBy, m = (0, r(561872)._g)({
                    schema: t,
                    property: _.groupBy.property
                }), "count" !== (p = _.aggregationConfig.aggregation).aggregator && (f = (0, r(561872)._g)({
                    schema: t,
                    property: p.property
                }))) : f = (0, r(561872)._g)({
                    schema: t,
                    property: _.valueProperty
                });
                if (b = m ? j({
                        propertySchema: m,
                        groupByFormat: y,
                        aggregation: void 0,
                        highChartsLabel: n,
                        intl: l
                    }) : b, S && "number" == typeof S && f && (0, r(56224).JW)(f)) {
                    let e = (null == (d = p) ? void 0 : d.aggregator) === "count" || (null == (c = p) ? void 0 : c.aggregator) === "unique" ? "number" : h(f),
                        t = (null == (u = p) ? void 0 : u.aggregator) === "count" || (null == (g = p) ? void 0 : g.aggregator) === "unique" ? "precision_0" : a ? ? x(f);
                    S = t && "precision_uncapped" !== t ? (0, r(700369).ZV)(S, e, l, "compact", t) : (0, r(700369).ZV)(C(S, 2), e, l, "compact")
                }
                return {
                    label: b,
                    value: S
                }
            }

            function j(e) {
                let {
                    propertySchema: t,
                    groupByFormat: n,
                    aggregation: i,
                    highChartsLabel: o,
                    intl: l
                } = e;
                if (t && (0, r(56224).JW)(t)) {
                    let e = (null == i ? void 0 : i.aggregator) === "count" || (null == i ? void 0 : i.aggregator) === "unique" ? "number" : h(t),
                        n = parseInt(o, 10);
                    return isNaN(n) || "percent" === e ? o : (0, r(700369).ZV)(n, e, l, "compact")
                }
                let a = (null == n ? void 0 : n.type) === "formula" ? n.groupBy : n;
                return t && (0, r(56224).i8)(t) && a && (0, r(910675).Ik)(a) ? f({
                    dateString: o,
                    dateFormat: t.date_format,
                    groupBy: a.groupBy,
                    intl: l
                }) : o
            }

            function b(e) {
                var t, r, n, i;
                return (null == (t = e.aggregation) ? void 0 : t.aggregator) !== "count" && (null == (r = e.aggregation) ? void 0 : r.aggregator) !== "unique" && !!("percent" === h(e.propertySchema) || void 0 !== e.userYAxisMax && void 0 !== e.userYAxisMin && 2 > Math.abs(e.userYAxisMax - e.userYAxisMin) || null != (n = e.userYAxisMax) && n.toString().includes(".") || null != (i = e.userYAxisMin) && i.toString().includes(".") || 1.2 > Math.abs(e.dataYAxisMax) && 1.2 > Math.abs(e.dataYAxisMin))
            }

            function S(e) {
                return e % 1 == 0 ? e : e.toFixed(1)
            }

            function C(e, t) {
                let r = Math.pow(10, t);
                return Math.round(e * r) / r
            }
        },
        640223: (e, t, r) => {
            function n({
                totalCount: e,
                shownCount: t
            }) {
                let r = e - t;
                return r > 0 ? r : 0
            }
            r.d(t, {
                p: () => v,
                l: () => d
            }), r(581454), r(296540);
            var i = r(474848);
            let o = {
                    small: 12,
                    medium: 24
                },
                l = -o.medium / 4,
                a = -o.small / 4,
                s = {
                    container: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        height: "auto",
                        paddingTop: 8,
                        paddingBottom: 8
                    },
                    containerSmall: {
                        paddingTop: 4,
                        paddingBottom: 4
                    },
                    iconContainer: {
                        marginInlineEnd: l,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    iconContainerSmall: {
                        marginInlineEnd: a
                    },
                    plusMore: {
                        opacity: .5,
                        marginInlineStart: 4,
                        display: "inline-block"
                    },
                    tooltip: {
                        color: r(632079).Tj.text.inversePrimary,
                        fontSize: 12
                    },
                    style0: {
                        marginInlineStart: 4 + -1 * l
                    },
                    style0Small: {
                        marginInlineStart: 4 + -1 * a
                    }
                };

            function d({
                userStores: e,
                isClickable: t,
                useSecondaryColorTitle: l,
                useIconsOnly: a,
                totalCount: c,
                customAvatarStyles: u,
                size: g = "medium"
            }) {
                let p = (0, r(109939).tz)(),
                    y = (0, r(533992).v3)(),
                    h = o[g],
                    x = "small" === g,
                    v = (0, r(960253).I)(() => ({
                        avatar: {
                            marginInlineEnd: x ? 6 : 4,
                            ...u
                        }
                    }), [u, x]),
                    j = e.slice(0, 4),
                    b = (0, r(682985).K8)(() => {
                        if (j[0]) return j.map(e => {
                            if (e) return e.computeWithRecordValues(({
                                getRecordValueAndSubscribe: t
                            }) => t(e))
                        })
                    }, [j]),
                    S = b && b[0],
                    C = (0, i.jsxs)("div", {
                        style: { ...s.container,
                            ...x && s.containerSmall
                        },
                        children: [(0, i.jsx)(r(321753).A, {
                            style: v.avatar,
                            userValue: S,
                            size: h
                        }), (0, i.jsx)(r(109939).sA, {
                            id: "baseTable.usersCell.userName",
                            defaultMessage: "{remainingCount, plural, =0 {<user>{firstUser}</user>} one {<user>{firstUser}</user><gray>+{remainingCount}</gray>} other {<user>{firstUser}</user><gray>+{remainingCount}</gray>}}",
                            values: {
                                firstUser: (0, r(413818).c6)(p, S),
                                remainingCount: n({
                                    totalCount: c || e.length,
                                    shownCount: 1
                                }),
                                user: (...e) => (0, i.jsx)(r(324489).V, {
                                    isSecondaryColor: l,
                                    isSmall: x,
                                    children: e
                                }),
                                gray: (...e) => (0, i.jsx)(r(324489).V, {
                                    style: s.plusMore,
                                    isSmall: x,
                                    children: e
                                })
                            }
                        })]
                    });
                if (a) {
                    let t = n({
                        totalCount: c || e.length,
                        shownCount: j.length
                    });
                    C = (0, i.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        children: [(0, i.jsx)(r(4458).fI, {
                            alignItems: "center",
                            children: null == b ? void 0 : b.map((e, t) => (0, i.jsx)("div", {
                                style: { ...s.iconContainer,
                                    ...x && s.iconContainerSmall
                                },
                                children: (0, i.jsx)(r(321753).A, {
                                    userValue: e,
                                    size: h
                                })
                            }, (null == e ? void 0 : e.id) || t))
                        }), t > 0 ? (0, i.jsx)(r(109939).sA, {
                            id: "baseTable.usersCell.remainingUsers",
                            defaultMessage: "<gray>+{remainingCount}</gray>",
                            values: {
                                remainingCount: t,
                                gray: (...e) => (0, i.jsx)(r(324489).V, {
                                    style: { ...s.plusMore,
                                        ...x ? s.style0Small : s.style0
                                    },
                                    isSmall: x,
                                    children: e
                                })
                            }
                        }) : void 0]
                    })
                }
                if (!t) return (0, i.jsx)(r(51831).m, {
                    disableTooltip: e.length <= 1,
                    content: () => (0, i.jsx)(i.Fragment, {
                        children: e.map((e, t) => (0, i.jsx)(r(324489).V, {
                            style: s.tooltip,
                            children: (0, i.jsx)(f, {
                                userStore: e
                            })
                        }, e ? e.id : t))
                    }),
                    children: e => (0, i.jsx)("div", { ...e,
                        children: C
                    })
                });
                let _ = e.map((e, t) => ({
                    key: null != e && e.id ? null == e ? void 0 : e.id : t,
                    render: t => (0, i.jsx)(m, {
                        userStore: e,
                        ...t
                    }),
                    action: () => null != e && e.getEmail ? (0, r(624621).L)({
                        environment: y,
                        url: `mailto:${null==e?void 0:e.getEmail()}`
                    }) : void 0
                }));
                return (0, i.jsx)(r(161176).ED, {
                    hideDropdownIcon: !0,
                    title: C,
                    items: _,
                    itemMaxWidth: 380
                })
            }
            let c = {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "auto",
                    paddingBlock: 8,
                    marginInline: 4
                },
                u = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginInlineStart: "auto",
                    opacity: .5
                },
                g = {
                    marginInlineStart: 8,
                    marginInlineEnd: 8
                },
                p = {
                    fontSize: 14,
                    lineHeight: 1.2,
                    maxWidth: 400
                },
                y = {
                    fontSize: 12,
                    lineHeight: 1.2,
                    opacity: .5,
                    maxWidth: 400
                };

            function m({
                userStore: e,
                ...t
            }) {
                let n = (0, r(682985).K8)(() => null == e ? void 0 : e.computeWithRecordValues(({
                    getRecordValueAndSubscribe: t
                }) => t(e)), [e]);
                return (0, i.jsxs)(r(988022).p, {
                    style: c,
                    ...t,
                    children: [(0, i.jsx)(r(4458).fI, {
                        justifyContent: "center",
                        alignItems: "center",
                        children: (0, i.jsx)(r(321753).A, {
                            userValue: n,
                            size: 24
                        })
                    }), (0, i.jsxs)("div", {
                        style: g,
                        children: [(0, i.jsx)(r(324489).V, {
                            style: p,
                            children: (0, i.jsx)(f, {
                                userStore: e
                            })
                        }), n ? (0, i.jsx)(r(324489).V, {
                            style: y,
                            children: n.email
                        }) : null]
                    }), (0, i.jsx)("div", {
                        style: u,
                        children: (0, i.jsx)(r(16275).I, {
                            icon: r(823811).o
                        })
                    })]
                })
            }

            function f(e) {
                let t = (0, r(109939).tz)(),
                    {
                        userStore: n
                    } = e,
                    o = (0, r(682985).K8)(() => null == n ? void 0 : n.computeWithRecordValues(({
                        getRecordValueAndSubscribe: e
                    }) => e(n)), [n]);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, r(413818).c6)(t, o)
                })
            }
            let h = {
                    borderRadius: "100%"
                },
                x = {
                    width: "80%"
                };

            function v() {
                return (0, i.jsx)(r(394327).mf, {
                    titleStyles: x,
                    includeIcon: !0,
                    iconStyles: h
                })
            }
        },
        651790: (e, t, r) => {
            r.r(t), r.d(t, {
                AgentIcon: () => o,
                DefaultAgentIcon: () => a
            });
            var n = r(296540),
                i = r(474848);

            function o(e) {
                let {
                    agentIcon: t,
                    workflowStore: o,
                    size: l,
                    animated: a = !1
                } = e, s = (0, r(83208).X)("animated_custom_agent_faces"), d = (0, n.useMemo)(() => (0, r(514827).D)({
                    workflowStore: o,
                    workflowIcon: t,
                    size: l,
                    animated: a && s
                }), [t, o, l, a, s]);
                return (0, i.jsx)(r(569553).B6, {
                    icon: d,
                    iconRecordCategory: "workflow",
                    isEmptyPage: !1,
                    size: l,
                    disabled: !0
                })
            }
            let l = {
                cursor: "default"
            };

            function a(e) {
                let t = (0, n.useCallback)(() => {
                    if (e.size < 22) return "xsmall";
                    if (e.size < 28) return "avatar";
                    if (e.size < 36) return "small";
                    if (e.size < 42) return "medium";
                    if (e.size < 48) return "medium_plus";
                    else if (e.size < 50) return "medium_large";
                    else if (e.size < 94) return "large";
                    else return "xlarge"
                }, [e.size]);
                return (0, i.jsx)(r(971375).x, {
                    variant: t(),
                    style: l
                })
            }
        },
        669707: (e, t, r) => {
            r.d(t, {
                e: () => n
            });
            let n = {
                section: {
                    paddingTop: 8,
                    paddingInlineEnd: 0,
                    paddingBottom: 0,
                    width: "100%"
                },
                row: {
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                    whiteSpace: "nowrap"
                },
                rightStyle: {
                    marginInlineEnd: 6
                }
            }
        },
        817746: (e, t, r) => {
            r.d(t, {
                A: () => o,
                B: () => u
            }), r(898992), r(354520), r(672577), r(581454), r(737550), r(296540);
            var n = r(474848);
            let i = (0, r(109939).YK)({
                    inputPlaceholder: {
                        defaultMessage: "Search for a property…",
                        id: "database.viewSettings.collectionSortMenu.inputPlaceholder"
                    },
                    deleteButtonTooltip: {
                        defaultMessage: "Remove sort rule",
                        id: "database.sortMenu.deleteButtonTooltip"
                    }
                }),
                o = function({
                    schema: e,
                    format: t,
                    sorts: o,
                    showDeleteAll: l,
                    disabled: a,
                    parentStore: s,
                    collectionContextStore: d,
                    onChange: c,
                    onDeleteAll: u
                }) {
                    let g = (0, r(109939).tz)(),
                        p = (0, r(533992).v3)(),
                        m = !!Object.keys(e).some(e => !o.find(t => t.property === e)),
                        f = l && o.length > 0,
                        h = (0, r(682985).K8)(() => {
                            var e;
                            return null == (e = d.collectionViewStore()) ? void 0 : e.getCollectionSource()
                        }, [d]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(y, {
                            sorts: o,
                            schema: e,
                            disabled: a,
                            parentStore: s,
                            collectionContextStore: d,
                            onChange: c
                        }), m || f ? (0, n.jsxs)(r(844565).A, {
                            children: [m ? (0, n.jsx)(r(656252).A, {
                                popupType: r(986939).A.isMobile ? r(182718).nl.SlideUp : r(182718).nl.Popup,
                                content: l => {
                                    let a;
                                    return a = r(986939).A.isMobile ? {
                                        menuType: r(649476).gu.ActionSheet
                                    } : {
                                        menuType: r(649476).gu.Popup,
                                        width: 280,
                                        height: 287
                                    }, (0, n.jsx)(r(747369).A, { ...a,
                                        children: (0, n.jsx)(r(491622).A, {
                                            schema: e,
                                            format: t,
                                            getProperties: () => Object.entries(e).filter(([e, t]) => !o.find(t => t.property === e) && (0, r(829035).oH)(t, h)).map(([e]) => e),
                                            onAccept: t => {
                                                (function(e, t, n, i, o, l) {
                                                    var a;
                                                    if (!e) return;
                                                    let s = null == (a = n[e]) ? void 0 : a.type;
                                                    o([...i, {
                                                        property: e,
                                                        direction: "ascending"
                                                    }]), (0, r(893783).X)({
                                                        environment: t,
                                                        action: "create_sort_accept",
                                                        collectionContextStore: l,
                                                        property_type: s
                                                    })
                                                })(t, p, e, o, c, d), l.close()
                                            },
                                            inputPlaceholder: g.formatMessage(i.inputPlaceholder)
                                        })
                                    })
                                },
                                children: e => (0, n.jsx)(r(209572).A, {
                                    icon: r(581923).plusIcon,
                                    isGray: !0,
                                    title: (0, n.jsx)(r(109939).sA, {
                                        id: "database.viewSettings.sortTab.newSort",
                                        defaultMessage: "Add sort"
                                    }),
                                    ...e
                                })
                            }) : void 0, f ? (0, n.jsx)(r(209572).A, {
                                icon: r(968411).trashIcon,
                                isRedOnHover: !0,
                                isGray: !0,
                                title: (0, n.jsx)(r(109939).sA, {
                                    id: "database.viewSettings.sortTab.deleteAllSorts",
                                    defaultMessage: "Delete sort"
                                }),
                                onClick: () => {
                                    var e, t, n, i;
                                    return e = p, t = c, n = d, i = u, void(t([]), null == i || i(), (0, r(893783).X)({
                                        environment: e,
                                        action: "delete_all_sorts",
                                        collectionContextStore: n
                                    }))
                                }
                            }) : void 0]
                        }) : void 0]
                    })
                };

            function l(e, t, n, i, o, l) {
                i(o.map((r, n) => n === e ? t : r)), (0, r(893783).X)({
                    environment: n,
                    collectionContextStore: l,
                    action: "update_sort"
                })
            }

            function a(e, t, n, i, o) {
                n(i.filter((t, r) => r !== e)), (0, r(893783).X)({
                    environment: t,
                    action: "delete_sort",
                    collectionContextStore: o
                })
            }
            let s = {
                style0: {
                    color: r(632079).oZ.red
                }
            };

            function d({
                index: e,
                onChange: t,
                sorts: i,
                collectionContextStore: o
            }) {
                let l = (0, r(533992).v3)();
                return (0, n.jsx)(r(95582).A, {
                    title: (0, n.jsx)("div", {
                        style: s.style0,
                        children: (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "Delete",
                            id: "database.viewSettings.sortTab.mobileDeleteButtonTitle"
                        })
                    }),
                    icon: (0, n.jsx)(r(16275).I, {
                        icon: r(968411).trashIcon,
                        colorPalette: "red",
                        colorVariant: "accentPrimary"
                    }),
                    onClick: () => a(e, l, t, i, o),
                    focused: !1
                })
            }
            let c = {
                style0: {
                    width: r(104509).Ev.sm,
                    height: r(104509).Ev.sm
                }
            };

            function u({
                onDeleteClick: e
            }) {
                let t = (0, r(109939).tz)();
                return (0, n.jsx)(r(51831).m, {
                    content: () => t.formatMessage(i.deleteButtonTooltip),
                    children: o => (0, n.jsx)(r(374533).A, {
                        ariaLabel: t.formatMessage(i.deleteButtonTooltip),
                        icon: r(25094).xMarkSmallIcon,
                        iconStyle: c.style0,
                        onClick: e,
                        ...o
                    })
                })
            }

            function g({
                sort: e,
                index: t,
                schema: i,
                disabled: o,
                parentStore: s,
                collectionContextStore: c,
                onChange: p,
                sorts: y
            }) {
                let m = (0, r(533992).v3)();
                return r(986939).A.isMobile ? (0, n.jsxs)(r(844565).A, {
                    children: [(0, n.jsx)(r(199532).Ay, {
                        index: t,
                        sort: e,
                        schema: i,
                        parentStore: s,
                        collectionContextStore: c,
                        onChange: (e, t) => l(e, t, m, p, y, c)
                    }), o ? void 0 : (0, n.jsx)(d, {
                        onChange: p,
                        sorts: y,
                        collectionContextStore: c,
                        index: t
                    })]
                }) : (0, n.jsx)(r(844565).A, {
                    isInput: !0,
                    desktopStyle: r(669707).e.section,
                    children: (0, n.jsx)(r(636518).Ay, {
                        showDragHandle: !r(986939).A.isMobile && !o,
                        title: (0, n.jsx)("div", {
                            style: r(669707).e.row,
                            onMouseDown: r(220684).t,
                            children: (0, n.jsx)(r(199532).Ay, {
                                index: t,
                                sort: e,
                                schema: i,
                                parentStore: s,
                                collectionContextStore: c,
                                onChange: (e, t) => l(e, t, m, p, y, c)
                            })
                        }),
                        right: !o && (0, n.jsx)(u, {
                            onDeleteClick: () => a(t, m, p, y, c)
                        }),
                        rightStyle: r(669707).e.rightStyle
                    })
                })
            }
            let p = {
                marginBottom: 2
            };

            function y({
                sorts: e,
                schema: t,
                disabled: i,
                parentStore: o,
                collectionContextStore: l,
                onChange: a
            }) {
                let s = (0, r(533992).v3)();
                if (r(986939).A.isMobile) return (0, n.jsx)(n.Fragment, {
                    children: e.map((r, s) => (0, n.jsx)(g, {
                        schema: t,
                        disabled: i,
                        parentStore: o,
                        collectionContextStore: l,
                        onChange: a,
                        sorts: e,
                        sort: r,
                        index: s
                    }, s))
                }); {
                    let d = e.map((e, t) => t.toString());
                    return d.length > 0 ? (0, n.jsx)("div", {
                        style: p,
                        children: (0, n.jsx)(r(66467).Ay, {
                            direction: "vertical",
                            keys: d,
                            renderKey: r => (0, n.jsx)(g, {
                                schema: t,
                                disabled: i,
                                parentStore: o,
                                collectionContextStore: l,
                                onChange: a,
                                sorts: e,
                                sort: e[parseInt(r)],
                                index: parseInt(r)
                            }),
                            onDrop: t => {
                                a(r(381453).oE(t.map(t => e[parseInt(t)]))), (0, r(893783).X)({
                                    environment: s,
                                    action: "reorder_sorts",
                                    collectionContextStore: l
                                })
                            }
                        })
                    }) : null
                }
            }
        },
        876375: (e, t, r) => {
            r.d(t, {
                $r: () => g,
                CC: () => d,
                CT: () => p,
                Ez: () => b,
                FC: () => S,
                I4: () => j,
                NZ: () => f,
                Os: () => c,
                PQ: () => v,
                Ty: () => n,
                Wr: () => l,
                cQ: () => o,
                hv: () => h,
                ih: () => s,
                oF: () => a,
                pO: () => u,
                pt: () => y,
                rC: () => C,
                rz: () => m,
                uS: () => x,
                yV: () => i
            });
            let n = 16,
                i = 6,
                o = 12,
                l = 24,
                a = 8,
                s = 16,
                d = 40,
                c = 2,
                u = 14,
                g = 100,
                p = 50,
                y = 240,
                m = 12,
                f = 2,
                h = 12,
                x = 48,
                v = 320,
                j = 240,
                b = 740,
                S = "col-resize",
                C = "row-resize"
        }
    }
]);