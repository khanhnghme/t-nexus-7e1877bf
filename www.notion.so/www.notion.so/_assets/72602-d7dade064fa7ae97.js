"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [72602], {
        37759: (e, t, r) => {
            function o(e) {
                let {
                    chartConfig: t,
                    collectionViewBlockStore: o,
                    format: a,
                    dataPoint: n,
                    clickEvent: i,
                    schema: l,
                    collectionContextStore: u,
                    intl: g,
                    query2: p,
                    temporaryViewState: d
                } = e;
                if (!o || (null == t ? void 0 : t.dataConfig.type) !== "groups_reducer") return;
                (0, r(705660).SQ)(i, r(705660).y$.Click);
                let s = function(e) {
                        let {
                            dataPoint: t,
                            propertySchema: o,
                            groupByFormat: a,
                            aggregation: n,
                            intl: i
                        } = e, l = t.name ? ? t.x.toString();
                        return o ? (0, r(614416).w$)({
                            propertySchema: o,
                            groupByFormat: a,
                            aggregation: n,
                            highChartsLabel: l,
                            intl: i
                        }) : l
                    }({
                        dataPoint: n,
                        propertySchema: (0, r(561872)._g)({
                            schema: l,
                            property: t.dataConfig.groupBy.property
                        }),
                        groupByFormat: null == t ? void 0 : t.dataConfig.groupBy,
                        aggregation: null == t ? void 0 : t.dataConfig.aggregationConfig.aggregation,
                        intl: g
                    }),
                    c = function(e) {
                        var t, o, a;
                        let n, {
                            chartConfig: i,
                            dataPoint: l,
                            format: u,
                            schema: g,
                            collectionViewBlockStore: p,
                            query2: d,
                            temporaryViewState: s
                        } = e;
                        if (!i || "placeholder" === i.type || (0, r(828660).__)(i) || "results_reducer" === i.dataConfig.type || !i.dataConfig.groupBy || !l || !p || !p.pointer.spaceId) return void r(773352).log({
                            level: "error",
                            from: "chartDrilldownHelpers",
                            type: "chartDrilldownMissingRequiredData",
                            error: {
                                name: "chartDrilldownHelpers",
                                message: "Unexpected error"
                            },
                            data: {
                                miscDataToConvertToString: {
                                    chartConfig: i,
                                    dataPoint: l,
                                    collectionViewBlockStore: p
                                }
                            }
                        });
                        let c = i.dataConfig.groupBy.property,
                            f = (0, r(783969).Q)(p, c),
                            y = {
                                type: "table",
                                parent_id: p.pointer.id,
                                parent_table: p.pointer.table,
                                alive: !0,
                                space_id: p.pointer.spaceId,
                                format: {
                                    is_unlisted: !0,
                                    collection_pointer: null == u ? void 0 : u.collection_pointer,
                                    property_filters: (null == s || null == (t = s.propertyFilters) ? void 0 : t.value) ? ? (null == u ? void 0 : u.property_filters),
                                    table_properties: f
                                },
                                query2: { ...d,
                                    filter: (null == s || null == (o = s.combinatorFilter) ? void 0 : o.value) ? ? (null == d ? void 0 : d.filter)
                                }
                            };
                        return l.groupFormat && (n = (0, r(21312).K8)({
                            schema: g,
                            propertyMapping: void 0,
                            groupBy: i.dataConfig.groupBy,
                            group: l.groupFormat,
                            timeZone: (0, r(714350).P)()
                        })), n && ((0, r(400473).dU)(n) ? null != (a = y.query2) && a.filter ? y.query2.filter = (0, r(400473).GV)([y.query2.filter, n]) : y.query2.filter = n : (0, r(400473).yX)(n) && (y.format.property_filters = [...y.format.property_filters ? ? [], {
                            filter: n,
                            id: (0, r(4962).Ay)()
                        }])), "groups_reducer" === i.dataConfig.type && (0, r(828660).m8)(i) && i.dataConfig.aggregationConfig.stackOptions && (y.format.collection_group_by = function(e) {
                            var t;
                            if (!(null != (t = e.aggregationConfig) && t.stackOptions)) return;
                            let r = e.aggregationConfig.stackOptions.groupBy;
                            return r.hideEmptyGroups = !0, r
                        }(i.dataConfig)), y
                    }({
                        chartConfig: t,
                        format: a,
                        dataPoint: n,
                        schema: l,
                        collectionViewBlockStore: o,
                        query2: p,
                        temporaryViewState: d
                    });
                if (!c) return;
                let f = (0, r(752242).sl)(u);
                (0, r(104310).u)({
                    event: {
                        eventName: "collection_chart_drilldown_click",
                        eventProperties: { ...f,
                            drilldown_type: "grouped",
                            from: "chart_data_point"
                        }
                    }
                }), r(738923).Q.openCollectionDrilldownView({
                    collectionViewValue: c,
                    collectionViewBlockStore: o,
                    viewsModuleContext: u.viewsModuleContextStore.state,
                    title: s,
                    archiveStatus: u.archiveStatusStore.state
                })
            }

            function a(e) {
                var t;
                let {
                    collectionStore: o,
                    dataPoint: a,
                    clickEvent: n,
                    environment: i,
                    collectionContextStore: l
                } = e;
                if (!(null != a && null != (t = a.pagePointer) && t.id) || !o) return;
                (0, r(705660).SQ)(n, r(705660).y$.Click);
                let u = r(970831).B.createChildStore(o, a.pagePointer),
                    g = (0, r(483227).Ay)({
                        store: u,
                        fullyQualified: !1,
                        pageVisitSource: r(254656).y8.Expand,
                        showMoveTo: !1,
                        openInCenterPeek: !0
                    });
                if (!g) return;
                let p = (0, r(752242).sl)(l);
                (0, r(104310).u)({
                    event: {
                        eventName: "collection_chart_drilldown_click",
                        eventProperties: { ...p,
                            drilldown_type: "results",
                            from: "chart_data_point"
                        }
                    }
                }), (0, r(79266).navigate)({
                    environment: i,
                    url: g
                })
            }
            async function n(e) {
                var t, o;
                let {
                    environment: a,
                    collectionViewStore: n,
                    collectionViewBlockStore: i,
                    acceptMoveToArgs: l,
                    transaction: u,
                    intl: g
                } = e;
                if (!n) return;
                let p = r(124937).Wv({
                        environment: a,
                        inMemoryRecordCache: a.defaultRecordCache.inMemoryRecordCache,
                        type: "collection_view",
                        transaction: u
                    }),
                    d = (0, r(855925).t)({
                        environment: a,
                        transaction: u,
                        collectionViewStore: n,
                        collectionViewBlockStore: p,
                        intl: g,
                        copyNameExactly: !0
                    });
                if (d) {
                    if (!d.getFormatStore().getKeyValue("collection_pointer")) {
                        let e = null == (o = i.getCollectionPointers()) ? void 0 : o[0];
                        (0, r(173157).z)({
                            store: d.getFormatStore().getKeyStore("collection_pointer"),
                            data: e,
                            transaction: u
                        })
                    }
                    return (0, r(173157).z)({
                        store: d.getFormatStore(),
                        data: {
                            is_unlisted: null
                        },
                        transaction: u
                    }), await r(351198).Ai({ ...l,
                        blocksToMove: [p],
                        transaction: u
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "collection_chart_drilldown_save",
                            eventProperties: {
                                collection_id: null == (t = n.getCollectionStore()) ? void 0 : t.id,
                                collection_view_id: n.id,
                                collection_view_block_id: i.pointer.id,
                                new_collection_view_block_id: p.pointer.id
                            }
                        }
                    }), p
                }
            }
            r.d(t, {
                Sp: () => o,
                sw: () => a,
                Iz: () => n
            }), r(898992), r(354520)
        },
        56224: (e, t, r) => {
            r.d(t, {
                CN: () => F,
                D0: () => m,
                D5: () => L,
                Dt: () => d,
                GL: () => s,
                HI: () => u,
                I9: () => p,
                JQ: () => f,
                JW: () => k,
                PC: () => y,
                RO: () => B,
                Rb: () => S,
                SK: () => b,
                UK: () => q,
                VY: () => i,
                Wl: () => o,
                YU: () => C,
                Yp: () => v,
                _x: () => h,
                bg: () => g,
                fn: () => P,
                hw: () => a,
                i8: () => T,
                io: () => n,
                kq: () => l,
                q_: () => R,
                tG: () => c,
                xS: () => w,
                y3: () => x,
                zn: () => D
            });
            let o = ["greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "equal", "not_equal"],
                a = ["Solid", "Dash"],
                n = 10,
                i = ["gray", "blue", "yellow", "green", "purple", "teal", "orange", "pink", "red"],
                l = ["auto", "colorful"],
                u = [...i, ...l],
                g = {
                    small: "small",
                    medium: "medium",
                    large: "large",
                    extra_large: "extra_large"
                };

            function p(e) {
                switch (e) {
                    case g.small:
                        return 150;
                    case g.medium:
                        return 250;
                    case g.large:
                        return 300;
                    case g.extra_large:
                        return 400;
                    default:
                        (0, r(722371).HB)(e)
                }
            }
            let d = {
                    off: "off",
                    bottom: "bottom",
                    side: "side"
                },
                s = {
                    avatar: "avatar",
                    avatar_name: "avatar_name",
                    name: "name"
                },
                c = {
                    none: "none",
                    x_axis: "x_axis",
                    y_axis: "y_axis",
                    both: "both"
                },
                f = {
                    none: "none",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    both: "both"
                },
                y = {
                    normal: "normal",
                    percent: "percent",
                    side_by_side: "side_by_side"
                },
                m = {
                    none: "none",
                    value: "value",
                    name: "name",
                    name_and_value: "name_and_value"
                };

            function _(e) {
                return !!e && r(910675).BI.includes(e)
            }

            function v(e) {
                let t = (0, r(345091).getFormulaPropertySchemaBaseResultType)(e);
                return "text" === t || "number" === t || "checkbox" === t || "person" === t || "date" === t
            }

            function C(e, t) {
                var o, a, n;
                let i, l = e.chartFormat;
                if ("groups_reducer" === e.dataConfig.type) {
                    let {
                        chartFormat: o,
                        chartGroupByFormat: a
                    } = function(e, t, o, a) {
                        let n = (0, r(561872)._g)({
                            schema: a,
                            property: e.property
                        });
                        if (n && "donut" === o && (0, r(34969).e0)(n)) {
                            let o = (0, r(910675).MP)(e);
                            return {
                                chartFormat: { ...t,
                                    mainSort: r(34969).S0.yDescending
                                },
                                chartGroupByFormat: o
                            }
                        }
                        return {
                            chartFormat: t,
                            chartGroupByFormat: e
                        }
                    }(null == e || null == (n = e.dataConfig) ? void 0 : n.groupBy, null == e ? void 0 : e.chartFormat, "donut", t);
                    l = o, i = { ...e.dataConfig,
                        groupBy: a,
                        aggregationConfig: {
                            aggregation: e.dataConfig.aggregationConfig.aggregation
                        }
                    }
                } else "results_reducer" === e.dataConfig.type ? (i = e.dataConfig, l = { ...l,
                    mainSort: r(34969).S0.yDescending
                }) : (0, r(722371).HB)(e.dataConfig);
                R(e) && l && ((null == (o = l) ? void 0 : o.donutDataLabels) === void 0 || (null == (a = l) ? void 0 : a.donutDataLabels) === m.none) ? l.donutDataLabels = m.value : !R(e) && l && (l.donutDataLabels = m.none);
                let u = { ...e,
                    type: "donut",
                    dataConfig: i
                };
                return l && (u.chartFormat = l), u
            }

            function h(e, t) {
                let o;
                "groups_reducer" === e.dataConfig.type ? o = { ...e.dataConfig,
                    aggregationConfig: { ...e.dataConfig.aggregationConfig,
                        seriesFormat: {
                            displayType: t
                        },
                        stackOptions: void 0
                    }
                } : "results_reducer" === e.dataConfig.type ? o = { ...e.dataConfig,
                    valueSeriesFormat: {
                        displayType: t
                    }
                } : (0, r(722371).HB)(e.dataConfig);
                let a = e.chartFormat;
                return a && a.donutDataLabels && a.donutDataLabels !== m.none ? a.axisShowDataLabels = !0 : a && (a.donutDataLabels === m.none || void 0 === a.donutDataLabels) && (a.axisShowDataLabels = !1), { ...e,
                    type: t,
                    dataConfig: o
                }
            }

            function b(e, t) {
                let o;
                if ("groups_reducer" === e.dataConfig.type) {
                    var a;
                    let r = null == e || null == (a = e.dataConfig) ? void 0 : a.groupBy;
                    o = { ...e.dataConfig,
                        groupBy: r,
                        aggregationConfig: { ...e.dataConfig.aggregationConfig,
                            seriesFormat: {
                                displayType: t
                            }
                        }
                    }
                } else "results_reducer" === e.dataConfig.type ? o = { ...e.dataConfig,
                    valueSeriesFormat: {
                        displayType: t
                    }
                } : (0, r(722371).HB)(e.dataConfig);
                return { ...e,
                    type: t,
                    dataConfig: o
                }
            }
            let S = {
                main: r(34969).S0.xAscending,
                stacked: r(34969).S0.manual
            };

            function F({
                chartConfig: e,
                xAxisPropertyId: t,
                newDataConfigType: o,
                groupBy: a,
                aggregation: n,
                valueProperty: i
            }) {
                let l = "groups_reducer" === e.dataConfig.type ? e.dataConfig.aggregationConfig.seriesFormat : e.dataConfig.valueSeriesFormat;
                "groups_reducer" === o ? e.dataConfig = {
                    type: "groups_reducer",
                    groupBy: a,
                    aggregationConfig: {
                        aggregation: n,
                        seriesFormat: l,
                        stackOptions: "groups_reducer" === e.dataConfig.type ? e.dataConfig.aggregationConfig.stackOptions : void 0
                    }
                } : "results_reducer" === o ? e.dataConfig = {
                    type: "results_reducer",
                    nameProperty: t,
                    valueProperty: i,
                    valueSeriesFormat: l
                } : (0, r(722371).HB)(o);
                let u = "formula" === a.type ? a.groupBy.sort : a.sort;
                return e.chartFormat = { ...e.chartFormat,
                    mainSort: (0, r(34969).gN)(u)
                }, e
            }

            function w({
                property: e,
                propertySchema: t,
                groupByOption: o,
                hideEmptyGroups: a
            }) {
                let n = t.type;
                if ((0, r(910675).Eg)(t)) {
                    if ((0, r(910675)._o)(n)) {
                        if (o && _(o)) return {
                            type: n,
                            property: e,
                            groupBy: o,
                            sort: {
                                type: "ascending"
                            }
                        }
                    } else if ((0, r(910675).KI)(n) || "select" === n || "multi_select" === n) return {
                        type: n,
                        property: e,
                        sort: {
                            type: "ascending"
                        }
                    };
                    else if ((0, r(910675).iF)(n)) {
                        if (o && o && r(910675).PC.includes(o)) return {
                            type: n,
                            property: e,
                            groupBy: o,
                            sort: {
                                type: "ascending"
                            }
                        }
                    } else if ("number" === n) return {
                        type: n,
                        property: e,
                        groupBy: {
                            type: "unique"
                        },
                        start: -1,
                        end: -1,
                        size: -1,
                        sort: {
                            type: "ascending"
                        }
                    };
                    else if ("formula" === n) {
                        let a = (0, r(345091).getFormulaPropertySchemaResultType)(t);
                        if ("number" === a) return {
                            type: "formula",
                            property: e,
                            groupBy: {
                                type: "number",
                                groupBy: {
                                    type: "unique"
                                },
                                start: -1,
                                end: -1,
                                size: -1,
                                sort: {
                                    type: "ascending"
                                }
                            }
                        };
                        if ("date" === a && _(o)) return {
                            type: "formula",
                            property: e,
                            groupBy: {
                                type: "date",
                                groupBy: o,
                                sort: {
                                    type: "ascending"
                                }
                            }
                        }
                    } else if ("person" === n) return {
                        type: n,
                        property: e,
                        sort: {
                            type: "manual"
                        }
                    };
                    return (0, r(910675).V0)({
                        property: e,
                        propertySchema: t,
                        hideEmptyGroups: a
                    })
                }
            }

            function x(e) {
                return "status" === e.type
            }

            function B(e) {
                let t = "formula" === e.type ? (0, r(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return "checkbox" === e.type || "checkbox" === t
            }

            function k(e) {
                let t = "formula" === e.type ? (0, r(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return (0, r(728722).A)(e) || "number" === t
            }

            function D(e) {
                let t = "formula" === e.type ? (0, r(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return (0, r(910675)._o)(e.type) || "date" === t
            }

            function P(e) {
                let t = "formula" === e.type ? (0, r(345091).getFormulaPropertySchemaResultType)(e) : void 0;
                return (0, r(568249).J)(e) || "person" === t
            }

            function T(e) {
                if ("formula" === e.type) {
                    let t = (0, r(345091).getFormulaPropertySchemaResultType)(e);
                    return (0, r(910675)._o)(t)
                }
                return (0, r(910675)._o)(e.type)
            }

            function q(e) {
                return "text" === e || "number" === e || "person" === e || "date" === e
            }

            function L(e) {
                if (e && (0, r(828660).m8)(e)) {
                    var t;
                    return "groups_reducer" !== e.dataConfig.type || !e.dataConfig.aggregationConfig.stackOptions || (null == (t = e.chartFormat) ? void 0 : t.axisGroupStyle) !== "percent"
                }
                return !1
            }

            function R(e) {
                if (!L(e)) return !1;
                if (e && (0, r(828660).m8)(e)) {
                    var t, o;
                    return (null == (t = e.chartFormat) ? void 0 : t.axisShowDataLabels) === void 0 || (null == (o = e.chartFormat) ? void 0 : o.axisShowDataLabels)
                }
                return !1
            }
        }
    }
]);