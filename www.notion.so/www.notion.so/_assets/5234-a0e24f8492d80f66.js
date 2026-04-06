"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5234], {
        3451: (e, t, a) => {
            a.d(t, {
                x: () => r
            });

            function r() {
                return a(218744).default.getConfigKey("collection_reducer_request_settings", "chart").debounce_wait_ms
            }
        },
        145382: (e, t, a) => {
            a.d(t, {
                J: () => r
            });

            function r(e, t) {
                var r;
                let i = (null == (r = a(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : r.getSettingsStore().getKeyStore("start_day_of_week").getValue()) ? ? 0,
                    o = null == e ? void 0 : e.getFormatStore().getKeyStore("start_week_on").getValue(),
                    n = o;
                void 0 === o && (n = i), (0, a(715144).z)({
                    stores: [e],
                    update: {
                        start_week_on: n
                    },
                    transaction: t
                })
            }
        },
        190634: (e, t, a) => {
            a.d(t, {
                L: () => g
            }), a(581454);
            var r = a(296540),
                i = a(474848);
            let o = {
                    width: 14,
                    height: 14,
                    marginTop: 2
                },
                n = {
                    padding: 12
                };

            function l(e) {
                let t = (0, a(533992).Y0)(),
                    r = (0, a(960253).I)(() => {
                        let r, i = a(986939).A.isMobile ? a(632079).Tj.popoverBackground : a(632079).Tj.background.secondary;
                        return "yellow" === e.color && (i = a(632079).Tj.yellow.background.secondary, r = a(632079).Tj.yellow.text.secondary), {
                            container: {
                                display: "flex",
                                width: "100%",
                                position: "relative",
                                borderRadius: 6,
                                padding: t.isPhone ? 16 : 12,
                                backgroundColor: i
                            },
                            messageContainer: {
                                display: "flex",
                                flexDirection: "column",
                                fontSize: t.isPhone ? 14 : 12
                            },
                            title: {
                                fontWeight: a(699422).Wy.medium,
                                color: e.color ? r : void 0
                            },
                            caption: {
                                color: e.color ? r : a(632079).Tj.text.secondary
                            }
                        }
                    }, [t, e.color]);
                return (0, i.jsx)(a(844565).A, {
                    topBorder: !0,
                    shouldShowBottomDivider: a(986939).A.isMobile,
                    style: n,
                    children: (0, i.jsxs)("div", {
                        style: r.container,
                        children: [e.icon ? (0, i.jsxs)(i.Fragment, {
                            children: [t.isPhone ? void 0 : e.icon(o), (0, i.jsx)(a(884877).A, {
                                size: 8
                            })]
                        }) : void 0, (0, i.jsxs)("div", {
                            style: r.messageContainer,
                            children: [(0, i.jsx)("div", {
                                style: r.title,
                                children: e.title
                            }), (0, i.jsx)("div", {
                                style: r.caption,
                                children: e.caption
                            })]
                        })]
                    })
                })
            }
            let s = {
                    alignSelf: "center",
                    marginBottom: 12
                },
                u = {
                    fontSize: 12
                },
                d = {
                    maxHeight: 400
                },
                g = r.memo(function(e) {
                    let {
                        groupBy: t,
                        groupByKey: o,
                        groupsFormatKey: n,
                        collectionContextStore: g,
                        groupsDisplayState: p,
                        disableReorder: y
                    } = e, h = (0, a(533992).v3)(), m = (0, a(682985).O$)(g.normalizedSchemaStore), f = (0, a(682985).O$)(g.normalizedFormatStore), S = (0, a(682985).O$)(g.canConfigureBlockStore), b = (0, a(83208).X)("fix_mobile_drag_conflict"), v = (null == p ? void 0 : p.visibleGroups.length) === 0 && (null == p ? void 0 : p.hiddenGroups.length) > 0, x = (0, a(682985).K8)(() => (0, a(933047).Z3)({
                        disableReorder: !!y,
                        groupByKey: o,
                        format: f,
                        canConfigureBlock: S,
                        isMobile: a(986939).A.isMobile,
                        isFixMobileDragConflictEnabled: b
                    }), [y, o, f, S, b]), M = !!p && p.currentGroups.length > a(453308).O3 && p.hasMore, C = (0, r.useCallback)(() => {
                        var e;
                        if (!S) return;
                        let t = [];
                        t = v ? (null == p ? void 0 : p.hiddenGroups.map(e => ({ ...e,
                            hidden: void 0,
                            emptyHidden: void 0
                        }))) ? ? [] : (null == p ? void 0 : p.currentGroups.map(e => ({ ...e,
                            hidden: !0,
                            emptyHidden: void 0
                        }))) ? ? [];
                        let r = (0, a(780035).u8)({
                            isMobile: a(986939).A.isMobile
                        });
                        g.groupsLimitStore.setState(r);
                        let i = null == (e = g.collectionViewStore()) ? void 0 : e.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewGroup.handleHideAllClick",
                            environment: h,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, a(868844).o)({
                                    collectionContextStore: g,
                                    newGroups: t,
                                    groupsFormatKey: n,
                                    transaction: e
                                })
                            }
                        }), (0, a(893783).X)({
                            environment: h,
                            collectionContextStore: g,
                            action: "click_groups_hide_all"
                        })
                    }, [S, v, g, h, null == p ? void 0 : p.hiddenGroups, null == p ? void 0 : p.currentGroups, n]), w = (0, r.useMemo)(() => ({
                        topBorder: !0,
                        disableMobileBorders: !0,
                        noTextOverflow: !0,
                        title: (0, i.jsx)(a(109939).sA, { ...a(933047).K0.groups
                        }),
                        desktopTitleStyle: {
                            paddingTop: 4,
                            marginBottom: 8
                        }
                    }), []);
                    if (!p) return (0, i.jsx)(a(844565).A, { ...w,
                        children: (0, i.jsx)(a(517334).k, {
                            style: s
                        })
                    });
                    if (0 === p.currentGroups.length) return (0, i.jsx)(a(844565).A, { ...w,
                        children: (0, i.jsx)(a(636518).Ay, {
                            title: (0, i.jsx)(a(109939).sA, { ...a(933047).K0.noGroups
                            })
                        })
                    });
                    let T = p.currentGroups.map(e => (0, a(910675).Ix)(e));
                    return (0, i.jsxs)(i.Fragment, {
                        children: [M ? (0, i.jsx)(l, {
                            title: (0, i.jsx)(a(109939).sA, { ...a(933047).K0.groupLimitReachedTitle
                            }),
                            caption: (0, i.jsx)(a(109939).sA, { ...a(933047).K0.groupLimitReachedCaption
                            }),
                            color: "yellow"
                        }) : void 0, (0, i.jsx)(a(844565).A, {
                            topBorder: !M,
                            title: (0, i.jsx)(a(109939).sA, { ...a(933047).K0.groups
                            }),
                            desktopStyle: M ? {
                                position: "relative",
                                top: -12
                            } : void 0,
                            right: (0, i.jsx)(a(988022).p, {
                                size: "sm",
                                shouldShrink: !0,
                                colorPalette: "blue",
                                disabled: !S,
                                onClick: C,
                                style: u,
                                children: v ? (0, i.jsx)(a(109939).sA, {
                                    id: "database.groupMenu.showAllGroups",
                                    defaultMessage: "Show all"
                                }) : (0, i.jsx)(a(109939).sA, {
                                    id: "database.groupMenu.hideAllGroups",
                                    defaultMessage: "Hide all"
                                })
                            }),
                            children: (0, i.jsx)(a(126767).H, {
                                type: a(644154).A.Y,
                                style: d,
                                children: (0, i.jsx)(a(66467).Ay, {
                                    direction: "vertical",
                                    keys: T,
                                    disabled: !x,
                                    touchDragDelay: b ? 200 : void 0,
                                    renderKey: (e, a) => {
                                        let r = p.currentGroups[a];
                                        return (0, i.jsx)(c, {
                                            collectionContextStore: g,
                                            schema: m,
                                            groupsDisplayState: p,
                                            groupBy: t,
                                            groupFormat: r,
                                            groupsFormatKey: n,
                                            canReorder: x
                                        })
                                    },
                                    onDrop: e => {
                                        p && (0, a(51909).r)({
                                            environment: h,
                                            collectionContextStore: g,
                                            groupsFormatKey: n,
                                            groupByKey: o,
                                            currentGroups: p.currentGroups,
                                            newGroupIds: e,
                                            containsAllGroups: !0
                                        })
                                    }
                                })
                            })
                        })]
                    })
                }, a(795676).A),
                c = r.memo(function(e) {
                    let {
                        collectionContextStore: t,
                        schema: o,
                        groupsDisplayState: n,
                        groupBy: l,
                        groupFormat: s,
                        groupsFormatKey: u,
                        canReorder: d
                    } = e, g = (0, a(533992).v3)(), c = (0, a(109939).tz)(), [p, y] = (0, r.useState)(!1), [h, m] = (0, r.useState)(!1), f = (0, a(682985).O$)(t.canConfigureBlockStore), S = (0, r.useCallback)(e => {
                        (0, a(264066).m)({
                            environment: g,
                            collectionContextStore: t,
                            currentGroups: n.currentGroups,
                            groupsFormatKey: u,
                            groupFormat: s,
                            action: e
                        })
                    }, [u, g, t, n.currentGroups, s]), b = () => {
                        S("toggle_group_visibility")
                    }, v = () => {
                        S("toggle_group_pin")
                    }, x = {
                        onMouseEnter: () => {
                            m(!0)
                        },
                        onMouseLeave: () => {
                            m(!1)
                        }
                    }, M = {
                        onMouseEnter: () => {
                            y(!0)
                        },
                        onMouseLeave: () => {
                            y(!1)
                        }
                    }, C = (0, a(960253).I)(() => ({
                        title: {
                            marginInlineStart: -2,
                            opacity: s.hidden ? .4 : 1
                        }
                    }), [s.hidden]);
                    return (0, i.jsx)(a(636518).Ay, {
                        left: d ? (0, i.jsx)(a(544954).t, {}) : void 0,
                        title: (0, i.jsx)(a(903176).d, {
                            groupBy: l,
                            groupFormat: s,
                            currentGroups: n.currentGroups,
                            schema: o,
                            disabled: !0,
                            isHiddenGroup: !1,
                            collectionContextStore: t,
                            source: "collection_settings"
                        }),
                        titleStyle: C.title,
                        right: (0, i.jsxs)(i.Fragment, {
                            children: ["board_columns" === u ? (0, i.jsx)(a(51831).m, {
                                content: e => (0, i.jsx)(a(109939).sA, { ...e,
                                    ...s.pinned ? a(933047).K0.unpinGroup : a(933047).K0.pinGroup
                                }),
                                children: e => {
                                    let t = p && f;
                                    return s.pinned ? (0, i.jsx)(a(374533).A, { ...(0, a(63390).A)(e, M),
                                        icon: t ? a(546846).N : a(932540).S,
                                        colorVariant: "primary",
                                        ariaLabel: c.formatMessage(a(933047).K0.unpinGroup),
                                        onClick: v,
                                        disabled: !f
                                    }) : f ? (0, i.jsx)(a(374533).A, { ...(0, a(63390).A)(e, M),
                                        icon: t ? a(932540).S : a(546846).N,
                                        ariaLabel: c.formatMessage(a(933047).K0.pinGroup),
                                        onClick: v,
                                        disabled: n.pinnedGroups.groups.length >= a(453308).U5
                                    }) : null
                                }
                            }) : void 0, (0, i.jsx)(a(51831).m, {
                                content: e => (0, i.jsx)(a(109939).sA, { ...e,
                                    ...s.hidden ? a(933047).K0.showGroup : a(933047).K0.hideGroup
                                }),
                                children: e => {
                                    let t = h && f,
                                        r = t ? a(349608).M : a(399225).eyeFillSmallIcon,
                                        o = !t;
                                    return s.hidden && (r = t ? a(399225).eyeFillSmallIcon : a(349608).M, o = t), (0, i.jsx)(a(374533).A, { ...(0, a(63390).A)(e, x),
                                        icon: r,
                                        colorVariant: o ? "primary" : "secondary",
                                        ariaLabel: s.hidden ? c.formatMessage(a(933047).K0.showGroup) : c.formatMessage(a(933047).K0.hideGroup),
                                        onClick: b,
                                        disabled: !f
                                    })
                                }
                            })]
                        })
                    })
                })
        },
        215536: (e, t, a) => {
            a.d(t, {
                $1: () => _,
                FE: () => x,
                FZ: () => p,
                G_: () => o,
                Iq: () => M,
                Le: () => s,
                Nj: () => b,
                P3: () => m,
                QJ: () => v,
                Qn: () => T,
                RO: () => l,
                TP: () => u,
                TQ: () => f,
                WG: () => d,
                Zr: () => i,
                Zv: () => w,
                b$: () => h,
                bg: () => r,
                p7: () => A,
                pP: () => n,
                qu: () => g,
                uB: () => C,
                v5: () => y,
                zH: () => c
            }), a(944114);
            let r = (0, a(109939).YK)({
                    chartType: {
                        defaultMessage: "Chart type",
                        id: "database.viewSettings.mainTab.chartType.title"
                    },
                    chartDevFeedbackLink: {
                        defaultMessage: "Give dev feedback",
                        id: "database.viewSettings.mainTab.chartDevFeedbackLink"
                    },
                    chartData: {
                        defaultMessage: "Data",
                        id: "database.viewSettings.mainTab.chartData.title"
                    },
                    chartStyle: {
                        defaultMessage: "Style",
                        id: "database.viewSettings.mainTab.chartStyle.title"
                    },
                    chartMoreStyle: {
                        defaultMessage: "More style options",
                        id: "database.viewSettings.mainTab.moreChartStyles.title"
                    },
                    chartXAxis: {
                        defaultMessage: "X axis",
                        id: "database.viewSettings.mainTab.axisChart.xAxis"
                    },
                    chartXAxisGroupByUnique: {
                        defaultMessage: "Unique",
                        id: "database.viewSettings.mainTab.axisChart.xAxis.groupBy.unique"
                    },
                    chartAggregateByValues: {
                        defaultMessage: "Values",
                        id: "database.viewSettings.mainTab.axisChart.aggregateByValues"
                    },
                    chartGroupBy: {
                        defaultMessage: "Group by",
                        id: "database.viewSettings.mainTab.axisChart.groupBy"
                    },
                    chartYAxisRange: {
                        defaultMessage: "Range",
                        id: "database.viewSettings.mainTab.axisChart.yAxisRange"
                    },
                    chartYAxisRangeMenu: {
                        defaultMessage: "Set custom range",
                        id: "database.viewSettings.mainTab.axisChart.yAxisRangeMenu"
                    },
                    chartYAxisRangeAuto: {
                        defaultMessage: "Auto",
                        id: "database.viewSettings.mainTab.axisChart.yAxisRangeAuto"
                    },
                    chartYAxisRangeCustom: {
                        defaultMessage: "Custom",
                        id: "database.viewSettings.mainTab.axisChart.yAxisRangeCustom"
                    },
                    chartYAxisRangeReset: {
                        defaultMessage: "Reset",
                        id: "database.viewSettings.mainTab.axisChart.yAxisRangeReset"
                    },
                    chartYAxisRangeMinPlaceholder: {
                        defaultMessage: "Min",
                        id: "database.viewSettings.mainTab.axisChart.yAxisRangeMinPlaceholder"
                    },
                    chartYAxisRangeMaxPlaceholder: {
                        defaultMessage: "Max",
                        id: "database.viewSettings.mainTab.axisChart.yAxisRangeMaxPlaceholder"
                    },
                    chartSortBy: {
                        defaultMessage: "Sort by",
                        id: "database.viewSettings.mainTab.axisChart.sortBy"
                    },
                    chartYAxis: {
                        defaultMessage: "Y axis",
                        id: "database.viewSettings.mainTab.axisChart.yAxis"
                    },
                    chartCumulative: {
                        defaultMessage: "Cumulative",
                        id: "database.viewSettings.mainTab.axisChart.cumulative"
                    },
                    chartHelp: {
                        defaultMessage: "Learn about charts",
                        id: "database.viewSettings.mainTab.charts.learnMoreButton"
                    },
                    chartDuplicate: {
                        defaultMessage: "Duplicate chart",
                        id: "database.viewSettings.mainTab.charts.duplicate"
                    },
                    chartReset: {
                        defaultMessage: "Reset chart",
                        id: "database.viewSettings.mainTab.charts.reset"
                    },
                    chartWhatToShow: {
                        defaultMessage: "What to show",
                        id: "database.viewSettings.mainTab.charts.whatToShow"
                    },
                    chartSliceDonutBy: {
                        defaultMessage: "Slice donut by",
                        id: "database.viewSettings.mainTab.charts.sliceDonutBy"
                    },
                    chartSliceDonutAggregation: {
                        defaultMessage: "Slice by",
                        id: "database.viewSettings.mainTab.charts.sliceDonutAggregation"
                    },
                    noneMenuItem: {
                        defaultMessage: "None",
                        id: "database.viewSettings.mainTab.charts.noneMenuItem"
                    },
                    noResultsMenuItem: {
                        defaultMessage: "No results",
                        id: "chartSettingsPropertySearchMenuItem.search.noResults.title"
                    }
                }),
                i = (0, a(109939).YK)({
                    chartStyleTitle: {
                        defaultMessage: "Style",
                        id: "database.viewSettings.chartStyleTab.title"
                    },
                    chartColor: {
                        defaultMessage: "Color",
                        id: "database.viewSettings.chartStyleTab.chartColor"
                    },
                    chartHeight: {
                        defaultMessage: "Height",
                        id: "database.viewSettings.chartStyleTab.chartHeight"
                    },
                    chartSmoothLine: {
                        defaultMessage: "Smooth line",
                        id: "database.viewSettings.chartStyleTab.chartSmoothLine"
                    },
                    chartLineFillArea: {
                        defaultMessage: "Gradient area",
                        id: "database.viewSettings.chartStyleTab.chartLineFillArea"
                    },
                    chartWeightColorValue: {
                        defaultMessage: "Color by value",
                        id: "database.viewSettings.chartStyleTab.chartWeightColorValue"
                    },
                    chartGroupStyle: {
                        defaultMessage: "Group style",
                        id: "database.viewSettings.chartStyleTab.groupStyle"
                    },
                    chartGridLine: {
                        defaultMessage: "Grid line",
                        id: "database.viewSettings.chartStyleTab.chartGridLine"
                    },
                    chartAxisAvatarFormat: {
                        defaultMessage: "Label style",
                        id: "database.viewSettings.chartStyleTab.chartAxisAvatarFormat"
                    },
                    chartAxisName: {
                        defaultMessage: "Axis name",
                        id: "database.viewSettings.chartStyleTab.chartAxisName"
                    },
                    chartLegend: {
                        defaultMessage: "Legend",
                        id: "database.viewSettings.chartStyleTab.chartLegend"
                    },
                    chartCaption: {
                        defaultMessage: "Caption",
                        id: "database.viewSettings.chartStyleTab.chartCaption"
                    },
                    chartCaptionPlaceholder: {
                        defaultMessage: "Caption",
                        id: "database.viewSettings.chartStyleTab.chartCaptionPlaceholder"
                    },
                    chartHideEmptyGroups: {
                        defaultMessage: "Omit zero values",
                        id: "database.viewSettings.chartStyleTab.chartOmitZeroValues"
                    },
                    chartDataLabels: {
                        defaultMessage: "Data labels",
                        id: "database.viewSettings.chartStyleTab.chartDataLabels"
                    },
                    chartShowDonutValue: {
                        defaultMessage: "Show value",
                        id: "database.viewSettings.chartStyleTab.chartHideDonutValue"
                    },
                    chartHideNegativeValues: {
                        defaultMessage: "Hide negative values",
                        id: "database.viewSettings.chartStyleTab.chartHideNegativeValues"
                    },
                    chartValueCaption: {
                        defaultMessage: "Show value label",
                        id: "database.viewSettings.chartStyleTab.chartValueCaption"
                    },
                    chartValueLabelPlaceholder: {
                        defaultMessage: "Value label",
                        id: "database.viewSettings.chartStyleTab.chartValueLabelPlaceholder"
                    },
                    chartTitle: {
                        defaultMessage: "Chart title",
                        id: "database.viewSettings.chartStyleTab.chartTitle"
                    },
                    chartNumberColor: {
                        defaultMessage: "Color",
                        id: "database.viewSettings.chartStyleTab.chartNumberColor"
                    },
                    chartNumberColorDefault: {
                        defaultMessage: "Default",
                        id: "database.viewSettings.chartStyleTab.chartNumberColor.default"
                    },
                    chartNumberColorGray: {
                        defaultMessage: "Gray",
                        id: "database.viewSettings.chartStyleTab.chartNumberColor.gray"
                    }
                }),
                o = (0, a(109939).YK)({
                    none: {
                        defaultMessage: "None",
                        id: "database.viewSettings.chartStyleTab.gridOptions.none"
                    },
                    horizontal: {
                        defaultMessage: "Horizontal",
                        id: "database.viewSettings.chartStyleTab.gridOptions.horizontal"
                    },
                    vertical: {
                        defaultMessage: "Vertical",
                        id: "database.viewSettings.chartStyleTab.gridOptions.vertical"
                    },
                    both: {
                        defaultMessage: "Both",
                        id: "database.viewSettings.chartStyleTab.gridOptions.both"
                    }
                }),
                n = (0, a(109939).YK)({
                    auto: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.auto",
                        defaultMessage: "Auto"
                    },
                    colorful: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.colorful",
                        defaultMessage: "Colorful"
                    },
                    gray: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.gray",
                        defaultMessage: "Colorless"
                    },
                    blue: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.blue",
                        defaultMessage: "Blue"
                    },
                    yellow: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.yellow",
                        defaultMessage: "Yellow"
                    },
                    green: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.green",
                        defaultMessage: "Green"
                    },
                    purple: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.purple",
                        defaultMessage: "Purple"
                    },
                    teal: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.teal",
                        defaultMessage: "Teal"
                    },
                    orange: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.orange",
                        defaultMessage: "Orange"
                    },
                    pink: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.pink",
                        defaultMessage: "Pink"
                    },
                    red: {
                        id: "database.viewSettings.chartStyleTab.colorTheme.red",
                        defaultMessage: "Red"
                    }
                }),
                l = (0, a(109939).YK)({
                    avatar: {
                        defaultMessage: "Avatar",
                        id: "database.viewSettings.chartStyleTab.axisAvtarFormat.avatar"
                    },
                    avatar_name: {
                        defaultMessage: "Avatar and name",
                        id: "database.viewSettings.chartStyleTab.axisAvtarFormat.avatarName"
                    },
                    name: {
                        defaultMessage: "Name",
                        id: "database.viewSettings.chartStyleTab.axisAvtarFormat.name"
                    }
                }),
                s = (0, a(109939).YK)({
                    none: {
                        defaultMessage: "None",
                        id: "database.viewSettings.chartStyleTab.axisLabelOptions.none"
                    },
                    x_axis: {
                        defaultMessage: "X axis",
                        id: "database.viewSettings.chartStyleTab.axisLabelOptions.xAxis"
                    },
                    y_axis: {
                        defaultMessage: "Y axis",
                        id: "database.viewSettings.chartStyleTab.axisLabelOptions.yAxis"
                    },
                    both: {
                        defaultMessage: "Both",
                        id: "database.viewSettings.chartStyleTab.axisLabelOptions.both"
                    }
                }),
                u = (0, a(109939).YK)({
                    normal: {
                        defaultMessage: "Stacked",
                        id: "database.viewSettings.chartStyleTab.axisGroupStyleFormat.normal"
                    },
                    percent: {
                        defaultMessage: "Percent",
                        id: "database.viewSettings.chartStyleTab.axisGroupStyleFormat.percent"
                    },
                    side_by_side: {
                        defaultMessage: "Not stacked",
                        id: "database.viewSettings.chartStyleTab.axisGroupStyleFormat.side_by_side"
                    }
                }),
                d = (0, a(109939).YK)({
                    small: {
                        defaultMessage: "Small",
                        id: "database.viewSettings.chartStyleTab.chartSettingsChartHeightFormat.small"
                    },
                    medium: {
                        defaultMessage: "Medium",
                        id: "database.viewSettings.chartStyleTab.chartSettingsChartHeightFormat.medium"
                    },
                    large: {
                        defaultMessage: "Large",
                        id: "database.viewSettings.chartStyleTab.chartSettingsChartHeightFormat.large"
                    },
                    extra_large: {
                        defaultMessage: "Extra large",
                        id: "database.viewSettings.chartStyleTab.chartSettingsChartHeightFormat.extra_large"
                    }
                }),
                g = (0, a(109939).YK)({
                    off: {
                        defaultMessage: "Off",
                        id: "database.viewSettings.chartStyleTab.legendPosition.off"
                    },
                    bottom: {
                        defaultMessage: "Bottom",
                        id: "database.viewSettings.chartStyleTab.legendPosition.bottom"
                    },
                    side: {
                        defaultMessage: "Side",
                        id: "database.viewSettings.chartStyleTab.legendPosition.side"
                    }
                }),
                c = (0, a(109939).YK)({
                    none: {
                        defaultMessage: "None",
                        id: "database.viewSettings.chartStyleTab.donutDataLabels.none"
                    },
                    value: {
                        defaultMessage: "Value (%)",
                        id: "database.viewSettings.chartStyleTab.donutDataLabels.value"
                    },
                    name: {
                        defaultMessage: "Name",
                        id: "database.viewSettings.chartStyleTab.donutDataLabels.name"
                    },
                    name_and_value: {
                        defaultMessage: "Name and value (%)",
                        id: "database.viewSettings.chartStyleTab.donutDataLabels.nameAndValue"
                    }
                }),
                p = (0, a(109939).YK)({
                    column: {
                        id: "chartType.bar.vertical",
                        defaultMessage: "Vertical bar"
                    },
                    bar: {
                        id: "chartType.bar.horizontal",
                        defaultMessage: "Horizontal bar"
                    },
                    line: {
                        id: "chartType.line",
                        defaultMessage: "Line"
                    },
                    donut: {
                        id: "chartType.donut",
                        defaultMessage: "Donut"
                    },
                    number: {
                        id: "chartType.number",
                        defaultMessage: "Number"
                    }
                }),
                y = (0, a(109939).YK)({
                    addReferenceLine: {
                        defaultMessage: "Add reference line",
                        id: "database.viewSettings.chartStyleTab.referenceLine.addReferenceLine"
                    },
                    addMoreReferenceLines: {
                        defaultMessage: "Add reference line",
                        id: "database.viewSettings.chartStyleTab.referenceLine.addMoreReferenceLines"
                    },
                    referenceLine: {
                        defaultMessage: "Reference line",
                        id: "database.viewSettings.chartStyleTab.referenceLine.referenceLine"
                    },
                    value: {
                        defaultMessage: "Value",
                        id: "database.viewSettings.chartStyleTab.referenceLine.value"
                    },
                    deleteReferenceLine: {
                        defaultMessage: "Delete",
                        id: "database.viewSettings.chartStyleTab.referenceLine.deleteReferenceLine"
                    },
                    label: {
                        defaultMessage: "Label",
                        id: "database.viewSettings.chartStyleTab.referenceLine.label"
                    },
                    strokeStyle: {
                        defaultMessage: "Style",
                        id: "database.viewSettings.chartStyleTab.referenceLine.strokeStyle"
                    },
                    color: {
                        defaultMessage: "Color",
                        id: "database.viewSettings.chartStyleTab.referenceLine.color"
                    },
                    maxReferenceLinesReached: {
                        defaultMessage: "You’ve reached the maximum of 10 reference lines per chart",
                        id: "database.viewSettings.chartStyleTab.referenceLine.maxReferenceLinesReached"
                    },
                    emptyStateDescription: {
                        defaultMessage: "Add reference lines to set targets, mark thresholds, and bring clarity to your charts.",
                        id: "database.viewSettings.chartStyleTab.referenceLine.emptyStateDescription"
                    }
                }),
                h = (0, a(109939).YK)({
                    Solid: {
                        defaultMessage: "Solid",
                        id: "database.viewSettings.chartStyleTab.referenceLine.strokeStyle.solid"
                    },
                    Dash: {
                        defaultMessage: "Dash",
                        id: "database.viewSettings.chartStyleTab.referenceLine.strokeStyle.dash"
                    }
                }),
                m = (0, a(109939).YK)({
                    dynamicColor: {
                        defaultMessage: "Dynamic color",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.dynamicColor"
                    },
                    ifValue: {
                        defaultMessage: "If value",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.ifValue"
                    },
                    elseLabel: {
                        defaultMessage: "Else",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.else"
                    },
                    valuePlaceholder: {
                        defaultMessage: "Value",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.valuePlaceholder"
                    },
                    greater_than: {
                        defaultMessage: "Greater than",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.greaterThan"
                    },
                    greater_than_or_equal: {
                        defaultMessage: "Greater than or equal",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.greaterThanOrEqual"
                    },
                    less_than: {
                        defaultMessage: "Less than",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.lessThan"
                    },
                    less_than_or_equal: {
                        defaultMessage: "Less than or equal",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.lessThanOrEqual"
                    },
                    equal: {
                        defaultMessage: "Equal",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.equal"
                    },
                    not_equal: {
                        defaultMessage: "Not equal",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.notEqual"
                    },
                    addRule: {
                        defaultMessage: "Add rule",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.addRule"
                    },
                    ruleColor: {
                        defaultMessage: "Color",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.ruleColor"
                    },
                    deleteRule: {
                        defaultMessage: "Delete rule",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.deleteRule"
                    },
                    colorSettingIndex: {
                        defaultMessage: "Color setting {index}",
                        id: "database.viewSettings.chartStyleTab.conditionalColor.colorSettingIndex"
                    }
                });

            function f({
                aggregation: e,
                databaseType: t,
                intl: r
            }) {
                if ((0, a(288299).Iq)(e) && t) {
                    let e = (0, a(381453).ZH)((0, a(463082).$O)(t));
                    return r.formatMessage({
                        id: "chartYAxis.aggregate.count",
                        defaultMessage: "{value} count"
                    }, {
                        value: e
                    })
                } {
                    if ((0, a(288299).Iq)(e)) return r.formatMessage({
                        id: "chartYAxis.aggregate.unTypedCount",
                        defaultMessage: "Count"
                    });
                    if ("unique" === e.aggregator) return r.formatMessage({
                        id: "chartYAxis.aggregate.distinct",
                        defaultMessage: "Distinct"
                    });
                    let t = (0, a(288299).V1)(e);
                    return a(567224).SE[t]
                }
            }
            let S = (0, a(109939).YK)({
                aggregationOfProperty: {
                    defaultMessage: "{aggregationName} of {propertyName}",
                    id: "database.numberChart.defaultTitle.aggregationOfProperty"
                }
            });

            function b({
                chartConfig: e,
                collectionSchema: t,
                intl: r
            }) {
                let i = e.dataConfig.aggregationConfig.aggregation,
                    o = (0, a(288299).V1)(i),
                    n = a(567224).zY[o],
                    l = "property" in i ? i.property : void 0;
                if (!l) return n;
                let s = (0, a(561872)._g)({
                    schema: t,
                    property: l
                });
                return s ? r.formatMessage(S.aggregationOfProperty, {
                    aggregationName: n,
                    propertyName: s.name
                }) : n
            }

            function v({
                newChartType: e,
                chartConfig: t,
                environment: r,
                collectionViewStore: i,
                collectionContextStore: o,
                collectionSchema: n
            }) {
                var l, s, u, d, g, c;
                let p;
                if ("placeholder" === t.type || t.type === e) return;
                if ("donut" === e)
                    if ("donut" === t.type) return;
                    else {
                        let e;
                        (0, a(828660).m8)(t) ? p = (0, a(56224).YU)(t, n): (0, a(828660).__)(t) ? (l = t, s = n, p = (e = (0, a(105639).ZS)({
                            collectionSchema: s
                        })) && "groups_reducer" === e.dataConfig.type ? { ...e,
                            dataConfig: { ...e.dataConfig,
                                aggregationConfig: {
                                    aggregation: l.dataConfig.aggregationConfig.aggregation
                                }
                            },
                            chartFormat: l.chartFormat
                        } : {
                            type: "donut",
                            dataConfig: {
                                type: "groups_reducer",
                                groupBy: {
                                    type: "title",
                                    property: "title",
                                    groupBy: "exact",
                                    sort: {
                                        type: "ascending"
                                    }
                                },
                                aggregationConfig: {
                                    aggregation: l.dataConfig.aggregationConfig.aggregation
                                }
                            },
                            chartFormat: l.chartFormat
                        }) : (0, a(722371).HB)(t)
                    }
                else if ((0, a(828660).Ix)(e)) {
                    let r;
                    (0, a(828660).m8)(t) ? p = (0, a(56224).SK)(t, e): "donut" === t.type ? p = (0, a(56224)._x)(t, e) : (0, a(828660).__)(t) ? (u = t, d = e, g = n, p = (r = (0, a(105639).EZ)({
                        collectionSchema: g,
                        axisChartType: d
                    })) && "groups_reducer" === r.dataConfig.type ? { ...r,
                        dataConfig: { ...r.dataConfig,
                            aggregationConfig: { ...r.dataConfig.aggregationConfig,
                                aggregation: u.dataConfig.aggregationConfig.aggregation
                            }
                        },
                        chartFormat: u.chartFormat
                    } : {
                        type: d,
                        dataConfig: {
                            type: "groups_reducer",
                            groupBy: {
                                type: "title",
                                property: "title",
                                groupBy: "exact",
                                sort: {
                                    type: "ascending"
                                }
                            },
                            aggregationConfig: {
                                aggregation: u.dataConfig.aggregationConfig.aggregation,
                                seriesFormat: {
                                    displayType: d
                                },
                                stackOptions: void 0
                            }
                        },
                        chartFormat: u.chartFormat
                    }) : (0, a(722371).HB)(t)
                } else if ((0, a(828660).UZ)(e)) {
                    if ((0, a(828660).__)(t)) return;
                    p = {
                        type: "number",
                        dataConfig: {
                            type: "number_reducer",
                            aggregationConfig: {
                                aggregation: "groups_reducer" === (c = t).dataConfig.type ? c.dataConfig.aggregationConfig.aggregation : {
                                    aggregator: "count"
                                }
                            }
                        },
                        chartFormat: c.chartFormat
                    }
                } else(0, a(722371).HB)(e);
                let y = i.getSpaceId();
                (0, a(377796).createAndCommit)({
                    userAction: "chartSettings.setChartType",
                    environment: r,
                    cellTarget: y ? {
                        spaceWithId: y
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, a(173157).z)({
                            store: i.getFormatStore().getKeyStore("chart_config"),
                            data: p,
                            transaction: e
                        })
                    }
                }), (0, a(893783).X)({
                    environment: r,
                    collectionContextStore: o,
                    action: "charts_update_chart_type",
                    charts_analytics_context: (0, a(752242).nL)(o)
                })
            }

            function x() {
                return {
                    fill: a(632079).Tj.palette.orange[400]
                }
            }

            function M(e) {
                let t = e.type;
                if ("formula" === t) {
                    let t = (0, a(345091).getFormulaPropertySchemaResultType)(e);
                    return "text" === t || "checkbox" === t || "person" === t
                }
                return "title" === t || "text" === t || "url" === t || "email" === t || "phone_number" === t || "checkbox" === t || "person" === t || "select" === t || "multi_select" === t || "status" === t || "relation" === t || "created_by" === t || "last_edited_by" === t
            }

            function C(e, t) {
                let r = null == e ? void 0 : e.dataConfig;
                return (0, a(682985).K8)(() => {
                    let e;
                    if ((null == r ? void 0 : r.type) === "groups_reducer" ? e = r.groupBy.property : (null == r ? void 0 : r.type) === "results_reducer" && (e = r.nameProperty), e && t) return (0, a(561872)._g)({
                        schema: t,
                        property: e
                    })
                }, [r, t], {
                    equalityFn: a(381453).n4
                })
            }

            function w(e, t) {
                let r = null == e ? void 0 : e.dataConfig;
                return (0, a(682985).K8)(() => {
                    let e;
                    if ((null == r ? void 0 : r.type) === "groups_reducer" ? e = r.aggregationConfig.aggregation.property : (null == r ? void 0 : r.type) === "results_reducer" && (e = r.valueProperty), e) return (0, a(561872)._g)({
                        schema: t,
                        property: e
                    })
                }, [r, t], {
                    equalityFn: a(381453).n4
                })
            }

            function T({
                environment: e,
                collectionContextStore: t,
                chartConfig: r,
                sort: i
            }) {
                let o = [];
                "results_reducer" === r.dataConfig.type && ("x-ascending" === i ? o.push({
                    property: r.dataConfig.nameProperty,
                    direction: "ascending"
                }) : "x-descending" === i && o.push({
                    property: r.dataConfig.nameProperty,
                    direction: "descending"
                })), a(16088).IU({
                    environment: e,
                    collectionContextStore: t,
                    temporaryState: { ...t.temporaryStateStore.state,
                        sorts: {
                            value: o
                        }
                    }
                })
            }
            let A = {
                whatToShowRightText: {
                    maxWidth: a(986939).A.isMobile ? 250 : 125
                },
                sortByRightText: {
                    maxWidth: a(986939).A.isMobile ? 250 : 163
                },
                groupByRightText: {
                    maxWidth: a(986939).A.isMobile ? 250 : 151
                },
                donutSliceRightText: {
                    maxWidth: a(986939).A.isMobile ? 250 : 124
                },
                donutSliceValueRightText: {
                    maxWidth: a(986939).A.isMobile ? 250 : 125
                },
                avatarStyle: {
                    maxWidth: a(986939).A.isMobile ? 250 : 110
                },
                donutDataLabelsRightText: {
                    maxWidth: a(986939).A.isMobile ? 250 : 90
                }
            };

            function _(e, t) {
                return void 0 === e || void 0 === t ? 0 : (e + t) / 2
            }
        },
        223602: (e, t, a) => {
            a.d(t, {
                WK: () => m,
                bO: () => y,
                cS: () => f,
                dU: () => s,
                eD: () => h,
                hC: () => g,
                oz: () => n,
                rq: () => u
            }), a(581454);
            var r = a(296540),
                i = a(474848);
            let o = a(546605).Store.createClass(void 0, {
                name: "ReducerResultStore"
            });

            function n(e) {
                let {
                    collectionContextStore: t,
                    groupsFormatKey: r,
                    groupByKey: n,
                    collectionSettingsStore: l
                } = e, s = (0, a(533992).v3)(), u = (0, a(682985).uB)(void 0, o), g = (0, a(682985).O$)(t.normalizedSchemaStore), c = (0, a(682985).O$)(u), p = (0, a(682985).K8)(() => (0, a(910675).H2)(t.normalizedFormatStore.state, n, r), [t, n, r]), y = (0, a(258494).d)({
                    groupBy: p,
                    reducerResult: c
                }), h = (0, a(682985).K8)(() => {
                    var e, r, i;
                    let o;
                    return e = t, r = n, !!(o = null == (i = e.collectionViewStore()) ? void 0 : i.getType()) && (0, a(845001).q)(e.capabilitiesStore, e.permissionScopesStore) && (0, a(933047).Qt)({
                        viewType: o,
                        groupByKey: r
                    })
                }, [t, n]), m = p && "board_columns_by" === n && (0, a(9247).us)(p.type);
                return (0, i.jsxs)(a(669).A, {
                    collectionSettingsStore: l,
                    title: (0, i.jsx)(v, {
                        collectionSettingsStore: l,
                        collectionContextStore: t
                    }),
                    children: [(0, i.jsxs)(a(844565).A, {
                        children: [(0, i.jsx)(x, {
                            collectionContextStore: t,
                            collectionSettingsStore: l,
                            groupByKey: n,
                            groupsFormatKey: r,
                            groupBy: p
                        }), p && d({
                            groupBy: p,
                            schema: g
                        }) ? (0, i.jsx)(T, {
                            collectionContextStore: t,
                            collectionSettingsStore: l,
                            groupByKey: n,
                            groupsFormatKey: r,
                            groupBy: p
                        }) : void 0, p ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a(391333).T, {
                                groupBy: p
                            }), (0, i.jsx)(_, {
                                collectionContextStore: t,
                                groupByKey: n,
                                groupBy: p,
                                groupsFormatKey: r
                            }), (0, i.jsx)(B, {
                                groupByKey: n,
                                collectionContextStore: t,
                                groupsFormatKey: r,
                                groupsDisplayState: y,
                                groupBy: p
                            })]
                        }) : void 0, m ? (0, i.jsx)(C, {
                            collectionContextStore: t
                        }) : void 0]
                    }), p ? (0, i.jsx)(G, {
                        groupsFormatKey: r,
                        collectionContextStore: t,
                        groupByKey: n,
                        reducerResultStore: u,
                        groupsDisplayState: y
                    }) : void 0, (0, i.jsxs)(a(844565).A, {
                        topBorder: !0,
                        children: [p && h ? (0, i.jsx)(a(209572).A, {
                            isGray: !0,
                            icon: a(968411).trashIcon,
                            title: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Remove grouping",
                                id: "database.viewSettings.groupTab.removeButton.title"
                            }),
                            onClick: () => (function(e, t, r, i) {
                                let o = t.collectionViewStore();
                                if (!o) return;
                                let n = o.getSpaceId();
                                (0, a(377796).createAndCommit)({
                                    userAction: "CollectionSettingsViewGroup.handleRemoveClick",
                                    environment: e,
                                    cellTarget: n ? {
                                        spaceWithId: n
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        (0, a(715144).z)({
                                            stores: [o],
                                            update: {
                                                [r]: void 0,
                                                [i]: void 0
                                            },
                                            transaction: e
                                        })
                                    }
                                }), (0, a(893783).X)({
                                    environment: e,
                                    collectionContextStore: t,
                                    action: "click_remove_grouping"
                                })
                            })(s, t, n, r),
                            isRedOnHover: !0
                        }) : void 0, (0, i.jsx)(a(725843).A, {
                            href: (0, a(442564).x)("guides.databaseGroup"),
                            title: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Learn about grouping",
                                id: "database.viewSettings.groupTab.learnMoreButton.title"
                            }),
                            analyticsFrom: "view_settings_group"
                        })]
                    })]
                })
            }
            let l = {
                maxWidth: "clamp(100px, 40vw, 150px)"
            };

            function s(e) {
                let {
                    groupByPropertySchema: t
                } = e;
                return t ? (0, i.jsx)(a(151710).mA, {
                    propertySchema: t,
                    showIcon: !1,
                    style: l
                }) : null
            }

            function u(e, t) {
                return "collection_group_by" === e && "board" === t ? (0, i.jsx)(a(109939).sA, {
                    defaultMessage: "Sub-group by",
                    id: "database.viewSettings.groupTab.subGroupProperty"
                }) : (0, i.jsx)(a(109939).sA, {
                    defaultMessage: "Group by",
                    id: "database.viewSettings.groupTab.groupProperty"
                })
            }

            function d(e) {
                let t, {
                        groupBy: r,
                        schema: i
                    } = e,
                    o = i[r.property];
                if (o && (0, a(910675).Eg)(o)) {
                    if ("formula" === o.type) {
                        let e = (0, a(345091).getFormulaPropertySchemaResultType)(o);
                        if ("unknown" === e || "array" === e || "undefined" === e) return;
                        t = "block" === e ? "relation" : e
                    } else t = o.type;
                    if ((0, a(910675)._o)(t) || (0, a(910675).Vs)(t) || "number" === t || "status" === t) return t
                }
            }

            function g(e) {
                let t = d(e);
                if (t) {
                    if ((0, a(910675)._o)(t)) return (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Date by",
                        id: "database.viewSettings.groupByTypeTab.dateBy"
                    });
                    else if ((0, a(910675).Vs)(t)) return (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Text by",
                        id: "database.viewSettings.groupByTypeTab.textBy"
                    });
                    else if ("number" === t) return (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Number by",
                        id: "database.viewSettings.groupByTypeTab.numberBy"
                    });
                    else if ("status" === t) return (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Status by",
                        id: "database.viewSettings.groupByTypeTab.statusBy"
                    })
                }
            }

            function c(e) {
                return (0, a(910675).Ik)(e) ? e : "formula" === e.type && "date" === e.groupBy.type ? e.groupBy : void 0
            }

            function p(e) {
                return (0, a(910675).Vh)(e) ? e : "formula" === e.type && "text" === e.groupBy.type ? e.groupBy : void 0
            }

            function y(e) {
                return "number" === e.type ? e : "formula" === e.type && "number" === e.groupBy.type ? { ...e.groupBy,
                    property: e.property
                } : void 0
            }
            let h = (0, a(109939).YK)({
                    group: {
                        defaultMessage: "Group",
                        id: "database.groupMenu.statusGroupBy.group"
                    },
                    option: {
                        defaultMessage: "Option",
                        id: "database.groupMenu.statusGroupBy.option"
                    }
                }),
                m = (0, a(109939).YK)({
                    relative: {
                        defaultMessage: "Relative",
                        id: "database.groupMenu.dateGroupBy.relative"
                    },
                    day: {
                        defaultMessage: "Day",
                        id: "database.groupMenu.dateGroupBy.day"
                    },
                    week: {
                        defaultMessage: "Week",
                        id: "database.groupMenu.dateGroupBy.week"
                    },
                    month: {
                        defaultMessage: "Month",
                        id: "database.groupMenu.dateGroupBy.month"
                    },
                    year: {
                        defaultMessage: "Year",
                        id: "database.groupMenu.dateGroupBy.year"
                    }
                }),
                f = (0, a(109939).YK)({
                    relative: {
                        defaultMessage: "Relative",
                        id: "database.groupMenu.dateGroupBy.relative"
                    },
                    day: {
                        defaultMessage: "Days",
                        id: "database.groupMenu.dateGroupBy.days"
                    },
                    week: {
                        defaultMessage: "Weeks",
                        id: "database.groupMenu.dateGroupBy.weeks"
                    },
                    month: {
                        defaultMessage: "Months",
                        id: "database.groupMenu.dateGroupBy.months"
                    },
                    year: {
                        defaultMessage: "Years",
                        id: "database.groupMenu.dateGroupBy.years"
                    }
                });

            function S(e) {
                if ("relative" === e) return (0, i.jsx)(a(109939).sA, { ...m.relative
                });
                if ("day" === e) return (0, i.jsx)(a(109939).sA, { ...m.day
                });
                if ("week" === e) return (0, i.jsx)(a(109939).sA, { ...m.week
                });
                if ("month" === e) return (0, i.jsx)(a(109939).sA, { ...m.month
                });
                if ("year" === e) return (0, i.jsx)(a(109939).sA, { ...m.year
                });
                (0, a(722371).HB)(e)
            }

            function b(e) {
                return "exact" === e ? (0, i.jsx)(a(109939).sA, {
                    defaultMessage: "Exact",
                    id: "database.groupMenu.textGroupBy.exact"
                }) : "alphabet_prefix" === e ? (0, i.jsx)(a(109939).sA, {
                    defaultMessage: "Alphabetical",
                    id: "database.groupMenu.textGroupBy.alphabetical"
                }) : void(0, a(722371).HB)(e)
            }

            function v({
                collectionSettingsStore: e,
                collectionContextStore: t
            }) {
                let r = (0, a(682985).K8)(() => (0, a(92293).S)(e), [e]),
                    o = (0, a(682985).K8)(() => {
                        var e;
                        return null == (e = t.collectionViewStore()) ? void 0 : e.getType()
                    }, [t]);
                return r && "group" === r.type ? "collection_group_by" === r.groupByKey && "board" === o ? (0, i.jsx)(a(109939).sA, {
                    defaultMessage: "Sub-group",
                    id: "database.viewSettings.groupTab.subGroup.title"
                }) : (0, i.jsx)(a(109939).sA, {
                    defaultMessage: "Group",
                    id: "database.viewSettings.groupTab.group.title"
                }) : null
            }

            function x({
                groupBy: e,
                collectionContextStore: t,
                collectionSettingsStore: r,
                groupByKey: o,
                groupsFormatKey: n
            }) {
                let l = (0, a(533992).v3)(),
                    d = (0, a(682985).O$)(t.normalizedSchemaStore),
                    g = e ? d[e.property] : void 0,
                    c = (0, a(845001).x)(t.capabilitiesStore, t.permissionScopesStore),
                    p = (0, a(682985).K8)(() => {
                        var e;
                        return null == (e = t.collectionViewStore()) ? void 0 : e.getType()
                    }, [t]);
                return p ? (0, i.jsx)(a(209572).A, {
                    title: u(o, p),
                    showChevron: !0,
                    right: (0, i.jsx)(s, {
                        groupByPropertySchema: g
                    }),
                    onClick: () => {
                        (0, a(893783).X)({
                            environment: l,
                            collectionContextStore: t,
                            action: "click_group_by_property",
                            original_view_type: void 0,
                            property_type: null == g ? void 0 : g.type
                        }), (0, a(76790).a)({
                            collectionSettingsStore: r,
                            item: {
                                type: "groupByProperty",
                                groupByKey: o,
                                groupsFormatKey: n
                            }
                        })
                    },
                    disabled: !c
                }) : null
            }
            let M = {
                opacity: 1
            };

            function C(e) {
                let {
                    collectionContextStore: t
                } = e, o = (0, a(533992).v3)(), n = (0, a(845001).x)(t.capabilitiesStore, t.permissionScopesStore), l = (0, a(682985).O$)(t.normalizedFormatStore), s = (0, a(682985).K8)(() => (0, a(933047).FS)(l), [l]), u = (0, r.useCallback)(() => {
                    (0, a(813838).u)({
                        environment: o,
                        collectionContextStore: t
                    })
                }, [o, t]);
                return (0, i.jsx)(a(296060).A, {
                    title: (0, i.jsx)(a(109939).sA, {
                        id: "database.viewSettings.groupTab.colorColumns",
                        defaultMessage: "Color columns"
                    }),
                    on: !s,
                    focused: !1,
                    onClick: u,
                    disabled: !n,
                    textWrapperStyle: M
                })
            }
            let w = {
                minWidth: 190
            };

            function T({
                groupBy: e,
                collectionContextStore: t,
                collectionSettingsStore: r,
                groupByKey: o,
                groupsFormatKey: n
            }) {
                let l = (0, a(533992).v3)(),
                    s = (0, a(682985).O$)(t.normalizedSchemaStore),
                    u = (0, a(845001).x)(t.capabilitiesStore, t.permissionScopesStore),
                    m = "formula" === e.type ? { ...e.groupBy,
                        property: e.property
                    } : e;
                return (0, a(910675).Ik)(m) ? (0, i.jsx)(a(529983).A, {
                    title: g({
                        groupBy: m,
                        schema: s
                    }),
                    popupStyle: w,
                    selectedKey: m.groupBy,
                    options: a(910675).BI.map(e => ({
                        key: e,
                        type: "button",
                        title: S(e)
                    })),
                    onChange: e => (function(e, t, r, i, o) {
                        let n = (0, a(910675).H2)(r.normalizedFormatStore.state, i, o),
                            l = r.collectionViewStore();
                        if (!n || !l) return;
                        let s = c(n);
                        if (!s) return;
                        let u = l.getSpaceId();
                        if ((0, a(910675).Ik)(n))(0, a(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewGroup.handleDateGroupByTypeChange",
                            environment: t,
                            cellTarget: u ? {
                                spaceWithId: u
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, a(715144).z)({
                                    stores: [l],
                                    update: {
                                        [i]: { ...n,
                                            groupBy: e
                                        },
                                        [o]: void 0
                                    },
                                    transaction: t
                                }), "week" === e && (0, a(145382).J)(l, t)
                            }
                        });
                        else if ("formula" === n.type) {
                            let r = { ...a(381453).cJ(s, "property"),
                                    type: "date",
                                    groupBy: e
                                },
                                d = { ...n,
                                    groupBy: r
                                };
                            (0, a(377796).createAndCommit)({
                                userAction: "CollectionSettingsViewGroup.handleDateGroupByTypeChange",
                                environment: t,
                                cellTarget: u ? {
                                    spaceWithId: u
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    (0, a(715144).z)({
                                        stores: [l],
                                        update: {
                                            [i]: d,
                                            [o]: void 0
                                        },
                                        transaction: t
                                    }), "week" === e && (0, a(145382).J)(l, t)
                                }
                            })
                        }(0, a(893783).X)({
                            environment: t,
                            collectionContextStore: r,
                            action: "update_date_group_by"
                        })
                    })(e, l, t, o, n),
                    disabled: !u
                }) : (0, a(910675).Vh)(m) ? (0, i.jsx)(a(529983).A, {
                    title: g({
                        groupBy: m,
                        schema: s
                    }),
                    popupStyle: w,
                    selectedKey: m.groupBy,
                    options: a(910675).ah.map(e => ({
                        key: e,
                        type: "button",
                        title: b(e)
                    })),
                    onChange: e => (function(e, t, r, i, o) {
                        let n = (0, a(910675).H2)(r.normalizedFormatStore.state, i, o),
                            l = r.collectionViewStore();
                        if (!n || !l) return;
                        let s = p(n);
                        if (!s) return;
                        let u = l.getSpaceId();
                        if ((0, a(910675).Vh)(n))(0, a(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewGroup.handleTextGroupByTypeChange",
                            environment: t,
                            cellTarget: u ? {
                                spaceWithId: u
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, a(715144).z)({
                                    stores: [l],
                                    update: {
                                        [i]: { ...n,
                                            groupBy: e
                                        },
                                        [o]: void 0
                                    },
                                    transaction: t
                                })
                            }
                        });
                        else if ("formula" === n.type) {
                            let r = { ...a(381453).cJ(s, "property"),
                                    groupBy: e
                                },
                                d = { ...n,
                                    groupBy: r
                                };
                            (0, a(377796).createAndCommit)({
                                userAction: "CollectionSettingsViewGroup.handleTextGroupByTypeChange",
                                environment: t,
                                cellTarget: u ? {
                                    spaceWithId: u
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, a(715144).z)({
                                        stores: [l],
                                        update: {
                                            [i]: d,
                                            [o]: void 0
                                        },
                                        transaction: e
                                    })
                                }
                            })
                        }(0, a(893783).X)({
                            environment: t,
                            collectionContextStore: r,
                            action: "update_text_group_by"
                        })
                    })(e, l, t, o, n),
                    disabled: !u
                }) : "number" === m.type ? (0, i.jsx)(a(209572).A, {
                    title: g({
                        groupBy: m,
                        schema: s
                    }),
                    showChevron: !0,
                    right: function(e) {
                        let {
                            groupBy: t
                        } = e, r = d(e);
                        if (r) {
                            if ((0, a(910675)._o)(r)) {
                                let e = c(t);
                                if (e) return S(e.groupBy)
                            } else if ((0, a(910675).Vs)(r)) {
                                let e = p(t);
                                if (e) return b(e.groupBy)
                            } else if ("number" === r) {
                                let e = y(t);
                                if (e) return (0, i.jsx)(a(109939).sA, {
                                    defaultMessage: "{start} to {end}",
                                    id: "database.groupMenu.numberGroupBy.range",
                                    values: {
                                        start: e.start,
                                        end: e.end
                                    }
                                })
                            }
                        }
                    }({
                        groupBy: m,
                        schema: s
                    }),
                    onClick: () => {
                        (0, a(76790).a)({
                            collectionSettingsStore: r,
                            item: {
                                type: "groupByNumber",
                                groupByKey: o,
                                groupsFormatKey: n
                            }
                        })
                    },
                    disabled: !u
                }) : "status" === m.type ? (0, i.jsx)(a(529983).A, {
                    title: g({
                        groupBy: m,
                        schema: s
                    }),
                    popupStyle: w,
                    selectedKey: m.groupBy,
                    options: a(910675).PC.map(e => {
                        var t;
                        return {
                            key: e,
                            type: "button",
                            title: "group" === (t = e) ? (0, i.jsx)(a(109939).sA, { ...h.group
                            }) : "option" === t ? (0, i.jsx)(a(109939).sA, { ...h.option
                            }) : void(0, a(722371).HB)(t)
                        }
                    }),
                    onChange: e => (function(e, t, r, i, o) {
                        let n = (0, a(910675).H2)(r.normalizedFormatStore.state, i, o),
                            l = r.collectionViewStore();
                        if (!n || !l || (null == n ? void 0 : n.type) !== "status") return;
                        let s = l.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewGroup.handleStatusGroupByTypeChange",
                            environment: t,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, a(715144).z)({
                                    stores: [l],
                                    update: {
                                        [i]: { ...n,
                                            groupBy: e
                                        },
                                        [o]: void 0
                                    },
                                    transaction: t
                                })
                            }
                        }), (0, a(893783).X)({
                            environment: t,
                            collectionContextStore: r,
                            action: "update_status_group_by"
                        })
                    })(e, l, t, o, n),
                    disabled: !u
                }) : null
            }
            let A = {
                minWidth: 190
            };

            function _({
                groupBy: e,
                collectionContextStore: t,
                groupByKey: r,
                groupsFormatKey: o
            }) {
                let n = (0, a(109939).tz)(),
                    l = (0, a(533992).v3)(),
                    s = (0, a(682985).K8)(() => (0, a(910675).Nf)(e), [e]),
                    u = (0, a(845001).x)(t.capabilitiesStore, t.permissionScopesStore);
                if (s.length <= 1) return null;
                let d = (0, a(910675).Kq)(e);
                return (0, i.jsx)(a(529983).A, {
                    title: (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Sort",
                        id: "database.viewSettings.groupTab.sort"
                    }),
                    popupStyle: A,
                    selectedKey: d.type,
                    options: s.map(t => ({
                        key: t,
                        type: "button",
                        title: n.formatMessage((0, a(933047).rA)(e, t))
                    })),
                    onChange: e => {
                        var i;
                        let n = null == (i = t.collectionViewStore()) ? void 0 : i.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewGroup.handleSortTypeChange",
                            environment: l,
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            canUndo: !0,
                            perform: i => {
                                (0, a(760348).y)({
                                    sortType: e,
                                    environment: l,
                                    collectionContextStore: t,
                                    groupByKey: r,
                                    groupsFormatKey: o,
                                    transaction: i
                                })
                            }
                        })
                    },
                    disabled: !u
                })
            }
            let V = {
                opacity: 1
            };

            function B({
                groupBy: e,
                groupByKey: t,
                collectionContextStore: o,
                groupsFormatKey: n,
                groupsDisplayState: l
            }) {
                let s = (0, a(533992).v3)(),
                    u = (0, r.useCallback)(() => (function(e, t, r, i, o) {
                        let n = (0, a(910675).H2)(r.normalizedFormatStore.state, t, i);
                        if (!o) return;
                        let {
                            currentGroups: l
                        } = o, s = r.collectionViewStore();
                        if (!n || !s) return;
                        let u = !n.hideEmptyGroups,
                            d = s.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewGroup.handleHideEmptyGroupsClick",
                            environment: e,
                            cellTarget: d ? {
                                spaceWithId: d
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                if (u) {
                                    let t = l.map(e => !1 === e.hidden ? { ...e,
                                        hidden: void 0
                                    } : e);
                                    (0, a(868844).o)({
                                        collectionContextStore: r,
                                        newGroups: t,
                                        groupsFormatKey: i,
                                        transaction: e
                                    })
                                }(0, a(715144).z)({
                                    stores: [s],
                                    update: {
                                        [t]: { ...n,
                                            hideEmptyGroups: u
                                        }
                                    },
                                    transaction: e
                                })
                            }
                        }), (0, a(893783).X)({
                            environment: e,
                            collectionContextStore: r,
                            action: "toggle_hide_empty_groups"
                        })
                    })(s, t, o, n, l), [s, t, o, n, l]),
                    d = (0, a(845001).x)(o.capabilitiesStore, o.permissionScopesStore);
                return (0, i.jsx)(a(296060).A, {
                    title: (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Hide empty groups",
                        id: "database.viewSettings.groupTab.hideEmptyGroups"
                    }),
                    on: !!e.hideEmptyGroups,
                    focused: !1,
                    onClick: u,
                    disabled: !d,
                    textWrapperStyle: V
                })
            }

            function G({
                groupsFormatKey: e,
                collectionContextStore: t,
                groupByKey: r,
                reducerResultStore: o,
                groupsDisplayState: n
            }) {
                let l = (0, a(682985).O$)(t.normalizedSchemaStore),
                    s = (0, a(682985).K8)(() => (0, a(910675).H2)(t.normalizedFormatStore.state, r, e), [t, r, e]),
                    u = (0, a(682985).K8)(() => {
                        if (!s) return;
                        let i = t.normalizedFormatStore.state;
                        return (0, a(121133).p)({
                            groupBy: s,
                            schema: l,
                            format: i,
                            groupsFormatKey: e,
                            limit: a(453308).O3,
                            returnHiddenGroups: !0,
                            returnPinnedGroups: "board_columns_by" === r,
                            aggregation: void 0
                        })
                    }, [s, t.normalizedFormatStore, l, e, r]);
                return s ? u ? (0, i.jsx)(a(505019).A, {
                    id: (0, a(443773).Q)(e),
                    reducer: u,
                    collectionContextStore: t,
                    resultStore: o,
                    render: () => (0, i.jsx)(a(190634).L, {
                        collectionContextStore: t,
                        groupBy: s,
                        groupByKey: r,
                        groupsFormatKey: e,
                        groupsDisplayState: n
                    })
                }) : (0, i.jsx)(a(190634).L, {
                    collectionContextStore: t,
                    groupBy: s,
                    groupByKey: r,
                    groupsFormatKey: e,
                    groupsDisplayState: n
                }) : null
            }
        },
        306077: (e, t, a) => {
            a.d(t, {
                p: () => r
            });

            function r(e) {
                if ("placeholder" !== e.type && ("groups_reducer" === e.dataConfig.type || "number_reducer" === e.dataConfig.type)) return e.dataConfig.aggregationConfig.aggregation
            }
        },
        319853: (e, t, a) => {
            function r(e) {
                var t, r, i, o, n, u, d, g;
                let {
                    collectionContextStore: y,
                    groupedDataConfig: h,
                    xAxisType: m,
                    aggregationResults: v,
                    subGroupResults: x,
                    timezone: M,
                    theme: C,
                    themeMode: w,
                    environment: T,
                    intl: A,
                    groupTotals: _
                } = e, {
                    groupResults: V
                } = e, B = null == (t = y.collectionViewStore()) ? void 0 : t.getChartConfig();
                if (!B || "placeholder" === B.type || (0, a(828660).__)(B)) return;
                let G = h.groupBy;
                if (!G || !(0, a(910675).rj)(G.type)) return;
                let k = h.aggregationConfig;
                if (!k || !v) return;
                let F = y.normalizedSchemaStore.state,
                    P = (0, a(561872)._g)({
                        schema: F,
                        property: G.property
                    });
                if (!P) return;
                let j = null == B ? void 0 : B.chartFormat,
                    L = null == j ? void 0 : j.weightColorValue,
                    R = null == j ? void 0 : j.mainSort,
                    K = null == j ? void 0 : j.smoothLine,
                    N = !!(null == j ? void 0 : j.axisHideEmptyGroups),
                    D = "datetime" === m || "linear" === m;
                "formula" !== G.type && "descending" === G.sort.type && D && (V = V.reverse());
                let I = !D,
                    z = 0,
                    O = 0,
                    H = [],
                    Y = [],
                    E = k.seriesFormat.displayType,
                    W = null == (r = k.stackOptions) ? void 0 : r.groupBy;
                if (x && W) {
                    let e;
                    if (!(0, a(561872)._g)({
                            schema: F,
                            property: W.property
                        })) return;
                    let t = new Map,
                        r = null == j ? void 0 : j.axisCumulative,
                        i = 0;
                    for (let o of (x.forEach(e => {
                            let t = e.value,
                                o = c({
                                    collectionContextStore: y,
                                    groupBy: W,
                                    groupValue: t,
                                    removeUncategorizedDateOrNumber: !1,
                                    environment: T,
                                    intl: A,
                                    timezone: M
                                });
                            if (!o) return;
                            let n = (0, a(910675).AC)(t),
                                u = v[n],
                                d = u ? p(u) : void 0;
                            if (N && !d) return;
                            let g = l(o.stringValue, E, K),
                                {
                                    maxGroupValue: h,
                                    minGroupValue: m,
                                    dataPoints: f
                                } = s({
                                    collectionContextStore: y,
                                    subGroupKey: n,
                                    groupBy: G,
                                    hideEmptyGroups: N,
                                    groupResults: V,
                                    aggregationResults: v,
                                    groupTotals: _,
                                    timezone: M,
                                    environment: T,
                                    shouldSetDataPointColor: "line" !== E && !L,
                                    theme: C,
                                    themeMode: w,
                                    intl: A,
                                    useIndexAsX: I,
                                    removeUncategorizedDateOrNumber: D,
                                    seriesDisplayType: E
                                });
                            if (g.color = (0, a(404078).HH)({
                                    collectionContextStore: y,
                                    groupValue: t,
                                    index: i,
                                    groupBy: W,
                                    theme: C,
                                    themeMode: w,
                                    environment: T
                                }), "line" === E) {
                                var x;
                                g.fillColor = (0, a(404078).tm)({
                                    color: g.color,
                                    hideLineFillArea: !!(null == (x = B.chartFormat) ? void 0 : x.hideLineFillArea),
                                    isStacked: (0, a(404078).US)(null == j ? void 0 : j.axisGroupStyle)
                                })
                            }
                            if (r && S(B)) {
                                let {
                                    maxDataPoint: e,
                                    minDataPoint: t,
                                    cumulatedDataPoints: r
                                } = b(f);
                                g.data = r, "line" === E && j.axisGroupStyle === a(56224).PC.side_by_side ? (e > z && (z = e), t < O && (O = t)) : (z += e, O += t)
                            } else g.data = f, z = Math.max(h, z), O = Math.min(m, O);
                            H.push(g), i += 1
                        }), ("y-ascending" === R || "y-descending" === R) && (d = H, g = R, (e = (0, a(381453).mg)(d)).forEach(e => {
                            let t = e.data.sort((e, t) => "y-ascending" === g ? (e.total ? e.total : 0) - (t.total ? t.total : 0) : (t.total ? t.total : 0) - (e.total ? e.total : 0));
                            t.forEach((e, t) => {
                                e.x = t
                            }), e.data = t
                        }), H = e), H))
                        for (let e of o.data) t.set(e.x, e);
                    Y = Array.from(t).sort((e, t) => e[0] - t[0]).map(([e, t]) => t)
                } else {
                    let e = P.name,
                        {
                            maxGroupValue: t,
                            minGroupValue: r,
                            dataPoints: d
                        } = s({
                            collectionContextStore: y,
                            subGroupKey: void 0,
                            groupBy: G,
                            hideEmptyGroups: N,
                            groupResults: V,
                            aggregationResults: v,
                            groupTotals: _,
                            timezone: M,
                            environment: T,
                            shouldSetDataPointColor: "line" !== E && !(0, a(404078).LF)(null == j ? void 0 : j.colorTheme) && !L,
                            theme: C,
                            themeMode: w,
                            intl: A,
                            useIndexAsX: I,
                            removeUncategorizedDateOrNumber: D,
                            seriesDisplayType: E
                        }),
                        g = l(e.toString(), E, K);
                    if ("line" === E) {
                        let e = (null == (o = (0, a(404078).wW)((null == (n = B.chartFormat) ? void 0 : n.colorTheme) || "colorful", !1, w)) || null == (o = o.colors) ? void 0 : o[0]) || a(620107).O.colorful[0];
                        g.fillColor = (0, a(404078).tm)({
                            color: e,
                            hideLineFillArea: !!(null == (u = B.chartFormat) ? void 0 : u.hideLineFillArea),
                            isStacked: (0, a(404078).US)(null == j ? void 0 : j.axisGroupStyle)
                        })
                    }
                    if ((null == j ? void 0 : j.axisCumulative) && S(B)) {
                        let {
                            maxDataPoint: e,
                            minDataPoint: t,
                            cumulatedDataPoints: a
                        } = b(d);
                        g.data = a, z += e, O += t
                    } else g.data = d, z = Math.max(t, z), O = Math.min(r, O);
                    let c = null == (i = B.chartFormat) ? void 0 : i.mainSort;
                    (c === a(34969).S0.yAscending || c === a(34969).S0.yDescending) && (g.data = f(g.data, c)), Y = g.data, H.push(g)
                }
                return {
                    seriesData: H,
                    maxValue: z,
                    minValue: O,
                    dataPointsForXAxisLabels: Y
                }
            }

            function i(e) {
                var t, r, i, l;
                let {
                    groupedDataConfig: u,
                    collectionContextStore: d,
                    groupResults: g,
                    aggregationResults: c,
                    timezone: p,
                    environment: y,
                    theme: h,
                    themeMode: m,
                    intl: S,
                    groupTotals: b
                } = e, v = null == (t = d.collectionViewStore()) ? void 0 : t.getChartConfig();
                if (!v || "placeholder" === v.type) return;
                let x = d.normalizedSchemaStore.state,
                    M = u.groupBy,
                    C = (0, a(561872)._g)({
                        schema: x,
                        property: M.property
                    });
                if (!C) return;
                let w = C.name,
                    {
                        dataPoints: T
                    } = s({
                        collectionContextStore: d,
                        subGroupKey: void 0,
                        groupBy: M,
                        groupResults: g,
                        aggregationResults: c,
                        groupTotals: b,
                        timezone: p,
                        environment: y,
                        shouldSetDataPointColor: !(null == (r = v.chartFormat) ? void 0 : r.weightColorValue),
                        theme: h,
                        themeMode: m,
                        intl: S,
                        hideEmptyGroups: !0,
                        useIndexAsX: !0,
                        removeUncategorizedDateOrNumber: !1
                    }),
                    A = null == (i = v.chartFormat) ? void 0 : i.mainSort,
                    _ = n(o(T)),
                    V = a(218744).default.checkGate({
                        gateName: "donut_chart_negative_values"
                    }) && !(null != (l = v.chartFormat) && l.hideNegativeValues) ? _ : T;
                return A === a(34969).S0.yAscending || A === a(34969).S0.yDescending ? [{
                    name: w,
                    data: f(V, A)
                }] : [{
                    name: w,
                    data: V
                }]
            }

            function o(e) {
                return e && 0 !== e.length ? e.map(e => {
                    let t = { ...e
                    };
                    return void 0 !== t.y && (t.originalY = e.y, t.y = Math.abs(e.y)), t
                }) : []
            }

            function n(e) {
                return e && 0 !== e.length ? e.map(e => {
                    let t = { ...e
                    };
                    return void 0 !== t.originalY && t.originalY < 0 && "string" == typeof t.color && (t.color = (0, a(404078).H0)(t.color)), t
                }) : []
            }

            function l(e, t, a) {
                return {
                    name: e,
                    type: "line" === t ? a ? "areaspline" : "area" : t,
                    data: []
                }
            }

            function s({
                collectionContextStore: e,
                subGroupKey: t,
                groupBy: r,
                hideEmptyGroups: i,
                groupResults: o,
                aggregationResults: n,
                groupTotals: l,
                timezone: u,
                environment: d,
                shouldSetDataPointColor: g,
                theme: y,
                themeMode: h,
                intl: m,
                useIndexAsX: f,
                removeUncategorizedDateOrNumber: S,
                seriesDisplayType: b
            }) {
                var v;
                let x = 0,
                    M = 0,
                    C = [],
                    w = null == (v = e.collectionViewStore()) ? void 0 : v.getChartConfig();
                if (!w || "placeholder" === w.type || (0, a(828660).__)(w)) return {
                    maxGroupValue: x,
                    minGroupValue: M,
                    dataPoints: C
                };
                let T = 0;
                return o.forEach((o, s) => {
                    var v, A, _, V, B;
                    let G, k = o.value,
                        F = (0, a(910675).AC)(k),
                        P = n[t ? (0, a(910675).A)([t, F]) : F],
                        j = n[F];
                    if (!P || !j) return;
                    let L = c({
                            collectionContextStore: e,
                            groupBy: r,
                            removeUncategorizedDateOrNumber: S,
                            groupValue: k,
                            environment: d,
                            intl: m,
                            timezone: u
                        }),
                        R = p(P),
                        K = (null == (v = l.get(F)) ? void 0 : v.max) || 0,
                        N = (null == (A = l.get(F)) ? void 0 : A.min) || 0,
                        D = (null == (_ = l.get(F)) ? void 0 : _.total) || 0,
                        I = g && !t ? (0, a(404078).HH)({
                            collectionContextStore: e,
                            groupValue: k,
                            index: T,
                            groupBy: r,
                            theme: y,
                            themeMode: h,
                            environment: d
                        }) : void 0;
                    if (void 0 === L || void 0 === R || void 0 === K || void 0 === N || i && 0 === D) return;
                    let z = i && (null == (V = w.chartFormat) ? void 0 : V.axisGroupStyle) === "side_by_side" && 0 === R,
                        O = null == (B = w.chartFormat) ? void 0 : B.axisGroupStyle;
                    O === a(56224).PC.side_by_side ? (R > x && (x = R), R < M && (M = R)) : "line" === b && O === a(56224).PC.normal ? (x = Math.max(x, D), M = Math.min(M, D)) : (x = Math.max(x, K), M = Math.min(M, N)), f ? (G = {
                        x: t ? s : T,
                        y: R,
                        name: L.stringValue,
                        total: D
                    }, L.actorPointer && (G.actorPointer = L.actorPointer)) : G = {
                        x: L.numberValue,
                        y: R,
                        name: L.stringValue,
                        total: D
                    }, z && (G.visible = !1), I && (G.color = I), G.groupFormat = o, C.push(G), T += 1
                }), {
                    maxGroupValue: x,
                    minGroupValue: M,
                    dataPoints: C
                }
            }

            function u({
                collectionContextStore: e,
                resultsDataConfig: t,
                resultsChartReducerResults: r,
                chartType: i,
                timezone: s,
                theme: d,
                themeMode: g,
                intl: c,
                environment: p
            }) {
                var y, h, m, v, x, M, C;
                let w = null == (y = e.collectionViewStore()) ? void 0 : y.getChartConfig();
                if (!w || "placeholder" === w.type) return;
                let T = null == w ? void 0 : w.chartFormat,
                    A = null == T ? void 0 : T.weightColorValue,
                    _ = null == T ? void 0 : T.smoothLine,
                    V = e.normalizedSchemaStore.state,
                    B = (0, a(561872)._g)({
                        schema: V,
                        property: t.valueProperty
                    });
                if (!B) return;
                let G = !!(null == (h = w.chartFormat) ? void 0 : h.axisHideEmptyGroups),
                    k = [],
                    F = B.name,
                    P = "axis" === i ? t.valueSeriesFormat.displayType : "column",
                    {
                        maxDataPoint: j,
                        minDataPoint: L,
                        dataPoints: R
                    } = function({
                        collectionContextStore: e,
                        hideEmptyGroups: t,
                        resultsDataConfig: r,
                        resultsChartReducerResults: i,
                        shouldSetDataPointColor: o,
                        theme: n,
                        themeMode: l,
                        useIndexAsX: s,
                        timezone: u,
                        intl: d,
                        environment: g
                    }) {
                        var c, p, y;
                        let h = 0,
                            m = 0,
                            v = [],
                            x = e.normalizedFormatStore.state.chart_config,
                            M = e.collectionStore();
                        if (!M || !x || "placeholder" === x.type || (0, a(828660).__)(x) || !i) return {
                            maxDataPoint: h,
                            minDataPoint: m,
                            dataPoints: v
                        };
                        let C = 0,
                            w = (null == (c = x.chartFormat) ? void 0 : c.colorTheme) || "auto",
                            T = (0, a(404078).wW)("auto" === w ? "colorful" : w, !1, l),
                            A = e.normalizedSchemaStore.state,
                            _ = (0, a(561872)._g)({
                                schema: A,
                                property: r.nameProperty
                            }),
                            V = (0, a(561872)._g)({
                                schema: A,
                                property: r.valueProperty
                            }),
                            B = new Map,
                            G = new Map,
                            k = new Map;
                        if (i.blockIds.forEach(e => {
                                let i, n = a(970831).B.createChildStore(M, {
                                        table: "block",
                                        id: e,
                                        spaceId: M.getSpaceId()
                                    }),
                                    l = n.getModel(),
                                    c = (() => {
                                        if ((null == _ ? void 0 : _.type) === "formula") {
                                            if ("text" !== (0, a(345091).getFormulaPropertySchemaResultType)(_) || !l) return;
                                            return (0, a(299512).primitiveFormulaValueFromPropertySchema)({
                                                schema: A,
                                                property: r.nameProperty,
                                                blockModel: l,
                                                getRecordModel: n.getRecordModel,
                                                intl: d,
                                                userTimeZone: u,
                                                depth: 0,
                                                resultCache: B,
                                                regExpCache: G,
                                                formatDateCache: k,
                                                experimentService: a(218744).default,
                                                collectionFeatureGates: (0, a(457103).i)(),
                                                spaceIdCreator: g.idCreator.getSpaceIdCreatorSync(l.space_id),
                                                getRelationEdgeList: (0, a(323082).Y)({
                                                    environment: g,
                                                    spaceId: l.space_id
                                                })
                                            }) ? ? ""
                                        }
                                        let e = n.getPropertyValue(r.nameProperty),
                                            t = (0, a(458230).r4)({
                                                textValue: e,
                                                getRecordModel: n.getRecordModel,
                                                userTimeZone: u,
                                                intl: d
                                            });
                                        return (null == _ ? void 0 : _.type) === "title" ? t || d.formatMessage(a(614416).$k.titlePlaceholder) : t
                                    })(),
                                    p = (() => {
                                        if ((null == V ? void 0 : V.type) === "formula") {
                                            if ("number" !== (0, a(345091).getFormulaPropertySchemaResultType)(V) || !l) return;
                                            let e = (0, a(299512).primitiveFormulaValueFromPropertySchema)({
                                                schema: A,
                                                property: r.valueProperty,
                                                blockModel: l,
                                                getRecordModel: n.getRecordModel,
                                                intl: d,
                                                userTimeZone: u,
                                                depth: 0,
                                                resultCache: B,
                                                regExpCache: G,
                                                formatDateCache: k,
                                                experimentService: a(218744).default,
                                                collectionFeatureGates: (0, a(457103).i)(),
                                                spaceIdCreator: g.idCreator.getSpaceIdCreatorSync(l.space_id),
                                                getRelationEdgeList: (0, a(323082).Y)({
                                                    environment: g,
                                                    spaceId: l.space_id
                                                })
                                            });
                                            if ("number" != typeof e) return;
                                            return e
                                        }
                                        let e = n.getPropertyValue(r.valueProperty);
                                        return (0, a(588688).M)(e)
                                    })();
                                if (t && void 0 === p) return;
                                p && p > h && (h = p), p && p < m && (m = p);
                                let y = null == T ? void 0 : T.colors;
                                if (y && o) {
                                    let e = C % y.length;
                                    i = y[e]
                                }
                                if (s) {
                                    let e = {
                                        x: C,
                                        y: p,
                                        name: c,
                                        color: i
                                    };
                                    (null == _ ? void 0 : _.type) === "title" && l && (e.pagePointer = l.pointer), v.push(e)
                                }
                                C += 1
                            }), (null == x || null == (p = x.chartFormat) ? void 0 : p.axisCumulative) && S(x)) {
                            let {
                                maxDataPoint: e,
                                minDataPoint: t,
                                cumulatedDataPoints: a
                            } = b(v);
                            return {
                                maxDataPoint: e,
                                minDataPoint: t,
                                dataPoints: a
                            }
                        }
                        let F = null == (y = x.chartFormat) ? void 0 : y.mainSort;
                        if (F === a(34969).S0.yAscending || F === a(34969).S0.yDescending) {
                            let e = f(v, F);
                            return {
                                maxDataPoint: h,
                                minDataPoint: m,
                                dataPoints: e
                            }
                        }
                        return {
                            maxDataPoint: h,
                            minDataPoint: m,
                            dataPoints: v
                        }
                    }({
                        collectionContextStore: e,
                        hideEmptyGroups: G,
                        resultsDataConfig: t,
                        resultsChartReducerResults: r,
                        shouldSetDataPointColor: "line" !== P && !A,
                        theme: d,
                        themeMode: g,
                        useIndexAsX: !0,
                        timezone: s,
                        intl: c,
                        environment: p
                    }),
                    K = l(F.toString(), P, _);
                if ("line" === P) {
                    let e = (null == (v = (0, a(404078).wW)((null == (x = w.chartFormat) ? void 0 : x.colorTheme) || "colorful", !1, g)) || null == (v = v.colors) ? void 0 : v[0]) || a(620107).O.colorful[0];
                    K.fillColor = (0, a(404078).tm)({
                        color: e,
                        hideLineFillArea: !!(null == (M = w.chartFormat) ? void 0 : M.hideLineFillArea),
                        isStacked: (0, a(404078).US)(null == (C = w.chartFormat) ? void 0 : C.axisGroupStyle)
                    })
                }
                return "donut" === i && a(218744).default.checkGate({
                    gateName: "donut_chart_negative_values"
                }) && !(null != (m = w.chartFormat) && m.hideNegativeValues) ? K.data = n(o(R)) : K.data = R, k.push(K), {
                    maxValue: j,
                    minValue: L,
                    seriesData: k
                }
            }

            function d({
                groupedDataConfig: e,
                hideEmptyGroups: t,
                mainSort: r
            }) {
                if (t || "y-ascending" === r || "y-descending" === r) return "category";
                let {
                    type: i
                } = e.groupBy;
                return (0, a(910675).Ik)(e.groupBy) && "relative" !== e.groupBy.groupBy ? "datetime" : "number" === i ? "linear" : "category"
            }

            function g({
                mainSort: e,
                xAxisType: t
            }) {
                return "datetime" === t && "x-descending" === e || "linear" === t && "x-descending" === e
            }

            function c({
                collectionContextStore: e,
                groupBy: t,
                groupValue: r,
                removeUncategorizedDateOrNumber: i,
                environment: o,
                intl: n,
                timezone: l
            }) {
                var s, u, d;
                let g = e.collectionViewBlockStore();
                if (!g) return;
                let p = e.normalizedSchemaStore.state,
                    y = (0, a(561872)._g)({
                        schema: p,
                        property: t.property
                    });
                if (!y) return;
                let m = y.name;
                if (!r.value) {
                    if (i && ("number" === r.type && (null == y ? void 0 : y.type) === "number" || (0, a(910675).DH)(r))) return;
                    if ((0, a(910675).D1)(r) && (0, a(795e3).n)(y)) {
                        let e = g.getAssociatedCollectionStore();
                        return {
                            stringValue: h(m, !!e && (0, a(361435).Vu)({
                                collectionStore: e,
                                property: t.property,
                                propertySchema: y,
                                parentStore: e
                            }))
                        }
                    }
                    return {
                        stringValue: h(m)
                    }
                }
                if ((0, a(910675).DH)(r)) {
                    let e = (0, a(933047).nc)({
                            intl: n,
                            value: r.value
                        }),
                        i = "formula" === t.type ? t.groupBy : t;
                    if ((0, a(910675).Ik)(i) && "relative" === i.groupBy) return {
                        stringValue: e
                    };
                    if ("day" === r.value.type || "month" === r.value.type || "week" === r.value.type || "year" === r.value.type) {
                        let e = a(906745).DateTime.fromISO(r.value.range.start_date, {
                            zone: l
                        }).startOf("day").toMillis();
                        return {
                            stringValue: e.toString(),
                            numberValue: e
                        }
                    }
                    return {
                        stringValue: e
                    }
                }
                if ((0, a(910675).D1)(r) && (0, a(795e3).n)(y)) {
                    let e = r.value;
                    if ((0, a(910675).WO)(e)) {
                        let t = e.id,
                            r = a(970831).B.createChildStore(g, {
                                id: t,
                                table: a(832375).evP
                            });
                        return {
                            stringValue: (0, a(112293).tS)({
                                environment: o,
                                intl: n,
                                store: r
                            })
                        }
                    }
                    if ((0, a(910675).zx)(e)) {
                        let t = (0, a(856235).LQ)(y, g);
                        if (!t) return;
                        let r = null == (s = a(613211).n$[t]) || null == (s = s[e.value.variable]) ? void 0 : s.messageDescriptor;
                        return r ? {
                            stringValue: n.formatMessage(r)
                        } : void 0
                    }
                } else if ((0, a(910675).rM)(r)) {
                    let e = r.value,
                        t = null == e ? void 0 : e.type;
                    if ("by_group" === t && null != e && e.group) return (0, a(998833).wC)(e.group) ? {
                        stringValue: n.formatMessage((0, a(998833).gh)(e.group))
                    } : {
                        stringValue: e.group
                    };
                    if ("by_option" === t && null != e && e.option) return {
                        stringValue: null == e ? void 0 : e.option
                    }
                } else if ("select" === r.type || "multi_select" === r.type) return {
                    stringValue: r.value
                };
                else if ("number" === r.type) {
                    let t, i = r.value,
                        o = i.type,
                        l = null == (u = e.collectionViewStore()) ? void 0 : u.getChartConfig();
                    l && (0, a(828660).m8)(l) && (t = null == (d = l.chartFormat) ? void 0 : d.numberPrecisionOverride);
                    let s = (0, a(614416).ck)({
                        propertySchema: y,
                        aggregation: void 0,
                        intl: n,
                        numberPrecisionOverride: t
                    });
                    if (!s) return;
                    if ("range" === o) return {
                        stringValue: s(i.start),
                        numberValue: i.start
                    };
                    if ("unique" === o) return {
                        stringValue: s(i.value),
                        numberValue: i.value
                    };
                    "out_of_range" === o || (0, a(722371).HB)(o)
                } else if ((0, a(910675).GG)(r)) {
                    let e = r.value;
                    if ((0, a(659341).I6)(e)) {
                        let t = (0, a(659341).S4)({
                                spacePermissionGroupId: e.id,
                                spaceId: e.spaceId
                            }),
                            r = g.getRecordModel(t);
                        if (!r) return;
                        return {
                            stringValue: (0, a(405461).Pf)({
                                intl: n,
                                groupName: r.name
                            }),
                            actorPointer: e
                        }
                    }
                    let t = (0, a(197018).xC)({
                        pointer: e,
                        getRecordModel: g.getRecordModel
                    });
                    if (!t) return;
                    return {
                        stringValue: (0, a(197018).lR)(n, t),
                        actorPointer: e
                    }
                } else if ("checkbox" === r.type) return {
                    stringValue: y.name
                };
                else if ("title" === r.type) {
                    if ("exact" === r.value.type) return {
                        stringValue: r.value.value || n.formatMessage(a(614416).$k.titlePlaceholder)
                    }
                } else if ((0, a(910675).kO)(r)) {
                    if ("exact" === r.value.type) return {
                        stringValue: r.value.value
                    }
                } else if ("formula" === r.type && "formula" === t.type) return c({
                    collectionContextStore: e,
                    groupBy: t,
                    groupValue: r.value,
                    removeUncategorizedDateOrNumber: i,
                    environment: o,
                    intl: n,
                    timezone: l
                })
            }

            function p(e) {
                if (!e) return;
                let t = e.aggregationResult;
                if ("number" === t.type) return t.value
            }
            a.d(t, {
                AY: () => d,
                CL: () => v,
                CS: () => S,
                Tm: () => r,
                UX: () => u,
                cN: () => i,
                hu: () => m,
                p4: () => g
            }), a(944114), a(898992), a(803949), a(581454);
            let y = (0, a(109939).YK)({
                chartUncategorizedGroup: {
                    defaultMessage: "No {name}",
                    id: "database.chartView.uncategorizedGroupLabel"
                }
            });

            function h(e, t) {
                return t ? a(962299).A.formatMessage(a(361435).zX.sprintUncategorizedGroup, {
                    name: e ? ? a(962299).A.formatMessage(a(11448).TZ.sprint_plural)
                }) : a(962299).A.formatMessage(y.chartUncategorizedGroup, {
                    name: e ? ? (0, a(463082).oj)(void 0)
                })
            }

            function m(e) {
                if ("column" !== e.type && "bar" !== e.type) return !1; {
                    let r = e.dataConfig.type;
                    if ("groups_reducer" === r) {
                        var t;
                        return (null == (t = e.dataConfig.aggregationConfig.stackOptions) ? void 0 : t.groupBy) === void 0
                    }
                    if ("results_reducer" === r) return !0;
                    (0, a(722371).HB)(r)
                }
            }

            function f(e, t) {
                let r = (0, a(381453).mg)(e).sort((e, r) => {
                    let i = void 0 === e.y ? -1 / 0 : e.y,
                        o = void 0 === r.y ? -1 / 0 : r.y;
                    return t === a(34969).S0.yDescending ? o - i : i - o
                });
                return r.forEach((e, t) => {
                    e.x = t
                }), r
            }

            function S(e) {
                var t;
                let r = (0, a(828660).m8)(e),
                    i = "groups_reducer" === e.dataConfig.type ? e.dataConfig.aggregationConfig.aggregation.aggregator : "count",
                    o = null == (t = e.chartFormat) ? void 0 : t.mainSort;
                return r && ("count" === i || "sum" === i) && "x-ascending" === o
            }

            function b(e) {
                let t = 0,
                    a = 0,
                    r = [],
                    i = 0;
                for (let o of e) {
                    let e = o.y || 0,
                        n = { ...o,
                            y: e + i
                        };
                    r.push(n), (i += e) > a && (a = i), i < t && (t = i)
                }
                return {
                    maxDataPoint: a,
                    minDataPoint: t,
                    cumulatedDataPoints: r
                }
            }

            function v({
                groupedChartReducerResults: e,
                chartConfig: t,
                sortType: r
            }) {
                let i, o = null == e ? void 0 : e.aggregationResults;
                if (!o) return;
                let n = t.chartFormat,
                    l = null == n ? void 0 : n.mainSort;
                "main" === r && ("y-ascending" === l || "y-descending" === l) && (i = "y-ascending" === l ? "asc" : "desc");
                let s = null == n ? void 0 : n.axisHideEmptyGroups,
                    u = function(e) {
                        let {
                            groupResults: t,
                            aggregationResults: r,
                            subGroupResults: i
                        } = e, o = new Map;
                        return t.forEach(e => {
                            let t = e.value,
                                n = (0, a(910675).AC)(t),
                                l = 0,
                                s = 0;
                            if (i) i.forEach(e => {
                                let t = e.value,
                                    i = (0, a(910675).AC)(t),
                                    o = p(r[(0, a(910675).A)([i, n])]) || 0;
                                o > 0 && (l += o), o < 0 && (s += o)
                            });
                            else {
                                let e = p(r[n]) || 0;
                                e > l && (l = e), e < s && (s = e)
                            }
                            o.set(n, {
                                min: s,
                                max: l,
                                total: s + l
                            })
                        }), o
                    }({
                        aggregationResults: o,
                        groupResults: e.results,
                        subGroupResults: e.subGroupResults
                    });
                return {
                    aggregationResults: o,
                    yAxisSortOrder: i,
                    hideZeroAggregations: s || "donut" === t.type,
                    groupTotals: u
                }
            }
        },
        356560: (e, t, a) => {
            a.d(t, {
                i: () => o,
                p: () => n
            });
            var r = a(296540);
            let i = (0, a(109939).YK)({
                total: {
                    id: "charts.donut.aggregationValue.total",
                    defaultMessage: "Total"
                },
                totalPropertyName: {
                    id: "charts.donut.aggregationValue.totalPropertyName",
                    defaultMessage: "Total {propertyName}"
                },
                averagePropertyName: {
                    id: "charts.donut.aggregationValue.averagePropertyName",
                    defaultMessage: "Average {propertyName}"
                },
                minPropertyName: {
                    id: "charts.donut.aggregationValue.minPropertyName",
                    defaultMessage: "Min {propertyName}"
                },
                maxPropertyName: {
                    id: "charts.donut.aggregationValue.maxPropertyName",
                    defaultMessage: "Max {propertyName}"
                },
                medianPropertyName: {
                    id: "charts.donut.aggregationValue.medianPropertyName",
                    defaultMessage: "Median {propertyName}"
                },
                uniquePropertyName: {
                    id: "charts.donut.aggregationValue.uniquePropertyName",
                    defaultMessage: "Distinct {propertyName}"
                }
            });

            function o(e, t) {
                switch (e) {
                    case "sum":
                        return a(962299).A.formatMessage(i.totalPropertyName, {
                            propertyName: t
                        });
                    case "average":
                        return a(962299).A.formatMessage(i.averagePropertyName, {
                            propertyName: t
                        });
                    case "min":
                        return a(962299).A.formatMessage(i.minPropertyName, {
                            propertyName: t
                        });
                    case "max":
                        return a(962299).A.formatMessage(i.maxPropertyName, {
                            propertyName: t
                        });
                    case "median":
                        return a(962299).A.formatMessage(i.medianPropertyName, {
                            propertyName: t
                        });
                    case "unique":
                        return a(962299).A.formatMessage(i.uniquePropertyName, {
                            propertyName: t
                        });
                    default:
                        return a(962299).A.formatMessage(i.total)
                }
            }

            function n(e) {
                let {
                    aggregationReducerResult: t,
                    aggregationType: o,
                    property: n,
                    schema: l,
                    numberPrecisionOverride: s
                } = e, u = (0, a(109939).tz)();
                return (0, r.useMemo)(() => {
                    let e, r, d;
                    if (!t || !n) return;
                    let g = t.aggregationResult,
                        c = (0, a(561872)._g)({
                            schema: l,
                            property: n
                        });
                    if (!g || "number" !== g.type || !c) return;
                    let p = "count" === o || "unique" === o;
                    e = p ? "precision_0" : s && "precision_uncapped" !== s && "precision_from_number_property" !== s ? s : (0, a(614416).i5)(c);
                    let y = p ? "number" : (0, a(614416).JI)(c) ? ? "number";
                    r = g.value && (!e || "precision_uncapped" === e) ? (0, a(700369).ZV)((0, a(614416).EN)(g.value, 2), y, u, "compact", void 0) : (0, a(700369).ZV)(g.value, y, u, void 0, e);
                    let h = c.name;
                    switch (o) {
                        case "sum":
                            d = a(962299).A.formatMessage(i.totalPropertyName, {
                                propertyName: h
                            });
                            break;
                        case "average":
                            d = a(962299).A.formatMessage(i.averagePropertyName, {
                                propertyName: h
                            });
                            break;
                        case "min":
                            d = a(962299).A.formatMessage(i.minPropertyName, {
                                propertyName: h
                            });
                            break;
                        case "max":
                            d = a(962299).A.formatMessage(i.maxPropertyName, {
                                propertyName: h
                            });
                            break;
                        case "median":
                            d = a(962299).A.formatMessage(i.medianPropertyName, {
                                propertyName: h
                            });
                            break;
                        case "unique":
                            d = a(962299).A.formatMessage(i.uniquePropertyName, {
                                propertyName: h
                            });
                            break;
                        default:
                            d = a(962299).A.formatMessage(i.total)
                    }
                    return {
                        title: r,
                        subtitle: d
                    }
                }, [t, o, u, n, l, s])
            }
        },
        391333: (e, t, a) => {
            a.d(t, {
                T: () => n
            });
            var r = a(296540),
                i = a(474848);
            let o = {
                minWidth: 190
            };

            function n({
                groupBy: e
            }) {
                let t = (0, a(533992).v3)(),
                    l = (0, a(713311).ET)(),
                    {
                        viewType: s,
                        startWeekOn: u
                    } = (0, a(682985).K8)(() => {
                        let e = l.normalizedFormatStore.state;
                        return {
                            viewType: l.getViewType(),
                            startWeekOn: (null == e ? void 0 : e.start_week_on) ? ? 0
                        }
                    }, [l]),
                    d = (0, r.useCallback)(e => {
                        let r = l.collectionViewStore();
                        if (!r) return;
                        let i = r.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewGroup.handleStartWeekOnChange",
                            environment: t,
                            canUndo: !0,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            perform: t => {
                                (0, a(715144).z)({
                                    stores: [r],
                                    update: {
                                        start_week_on: e
                                    },
                                    transaction: t
                                })
                            }
                        })
                    }, [t, l]);
                if (!(0, a(910675).Ik)(e) && "formula" !== e.type || (0, a(910675).Ik)(e) && "week" !== e.groupBy) return null;
                if ("formula" === e.type) {
                    let t = e.groupBy;
                    if (!(0, a(910675).Ik)(t) || "week" !== t.groupBy) return null
                }
                return (0, i.jsx)(a(529983).A, {
                    title: (0, i.jsx)(a(109939).sA, {
                        id: "database.viewSettings.groupTab.startWeekOn",
                        defaultMessage: "Start week on"
                    }),
                    popupStyle: o,
                    selectedKey: u,
                    onChange: d,
                    icon: "chart" === s ? a(999129).M : void 0,
                    options: [{
                        key: 0,
                        type: "button",
                        title: (0, i.jsx)(a(109939).sA, {
                            id: "database.viewSettings.groupTab.startWeekOn.sunday",
                            defaultMessage: "Sunday"
                        })
                    }, {
                        key: 1,
                        type: "button",
                        title: (0, i.jsx)(a(109939).sA, {
                            id: "database.viewSettings.groupTab.startWeekOn.monday",
                            defaultMessage: "Monday"
                        })
                    }]
                })
            }
        },
        865584: (e, t, a) => {
            a.d(t, {
                f: () => i
            });
            let r = new(a(273917)).U((e, {
                spaceId: t,
                collectionViewId: a
            }) => `${e.currentUser.id}|${t}|${a}`, async (e, {
                spaceId: t,
                collectionViewId: a
            }) => {
                if (!t || !a) return {
                    canViewChart: !1,
                    canViewChartError: "paywall_error"
                };
                let r = await e.api.callApi({
                    eventName: "canViewChart",
                    environment: e,
                    data: {
                        spaceId: t,
                        collectionViewId: a
                    }
                });
                return "success" !== r.type ? {
                    canViewChart: !1,
                    canViewChartError: "paywall_error"
                } : {
                    canViewChart: r.data.can_view_chart,
                    canViewChartError: void 0
                }
            });

            function i({
                collectionContextStore: e
            }) {
                let t = (0, a(533992).v3)(),
                    r = (0, a(972740).L)(),
                    n = t.currentUser.id,
                    l = null == r ? void 0 : r.id,
                    {
                        collectionViewStore: s,
                        collectionViewBlockStore: u
                    } = (0, a(682985).K8)(() => ({
                        collectionViewStore: e.collectionViewStore(),
                        collectionViewBlockStore: e.collectionViewBlockStore()
                    }), [e]),
                    d = (0, a(682985).K8)(() => {
                        let t = null == s ? void 0 : s.id,
                            a = e.updateFreeChartsResultStore.state;
                        if (t && a && a.has(t)) return a.get(t)
                    }, [e.updateFreeChartsResultStore, s]),
                    g = (0, a(611285).P)({
                        name: "view_chart",
                        spaceId: l,
                        userId: n,
                        amount: "unknown"
                    }),
                    [{
                        value: c
                    }] = (0, a(97668).Yb)(async () => await o({
                        collectionViewStore: s,
                        collectionViewBlockStore: u,
                        environment: t,
                        spaceCanViewUnlimitedCharts: !!g,
                        updateFreeChartsResult: d
                    }), [s, u, t, g, d]),
                    {
                        canViewChart: p,
                        canViewChartError: y
                    } = c ? ? {
                        canViewChart: void 0,
                        canViewChartError: void 0
                    };
                return {
                    canViewChart: p,
                    canViewChartError: y
                }
            }
            async function o(e) {
                let {
                    collectionViewStore: t,
                    collectionViewBlockStore: i,
                    environment: o,
                    spaceCanViewUnlimitedCharts: n,
                    updateFreeChartsResult: l
                } = e, s = null == t ? void 0 : t.id, u = null == t ? void 0 : t.getSpaceId();
                if (!s || !u) return {
                    canViewChart: !1,
                    canViewChartError: "paywall_error"
                };
                if (n) return {
                    canViewChart: !0,
                    canViewChartError: void 0
                };
                if (await a(941701).transactionQueue.awaitRecordTransaction({
                        table: a(832375).Gy1,
                        id: s
                    }), null != l && l.isPending) return {
                    canViewChart: void 0,
                    canViewChartError: void 0
                };
                if (null == i ? void 0 : i.pathIsAccessibleAndAlive()) return (null == l ? void 0 : l.value) !== void 0 ? {
                    canViewChart: l.value,
                    canViewChartError: void 0
                } : await r.awaitData(o, {
                    spaceId: u,
                    collectionViewId: s
                }); {
                    let e = await r.awaitData(o, {
                        spaceId: u,
                        collectionViewId: s
                    });
                    return await r.awaitData(o, {
                        spaceId: u,
                        collectionViewId: s
                    }, !!e)
                }
            }
            a(202146).exposeDebugValue("CollectionViewCanViewChartStore", r)
        },
        891676: (e, t, a) => {
            a.d(t, {
                x: () => r
            });

            function r({
                chartConfig: e,
                chartError: t,
                collectionContextStore: i
            }) {
                let o = (0, a(682985).O$)(i.normalizedFormatStore);
                return (0, a(682985).K8)(() => {
                    if ((!t || (0, a(948033).xG)(t)) && e) return function({
                        chartConfig: e,
                        format: t
                    }) {
                        var r, i, o;
                        if ("placeholder" === e.type || (null == (r = e.dataConfig) ? void 0 : r.type) !== "groups_reducer") return;
                        let n = t.collection_groups || [],
                            l = t.chart_subgroups || [],
                            s = e.dataConfig.groupBy,
                            u = (0, a(828660).m8)(e) ? null == (i = e.dataConfig.aggregationConfig.stackOptions) ? void 0 : i.groupBy : void 0,
                            d = (0, a(306077).p)(e);
                        if (d) return {
                            version: "v2",
                            type: "groups",
                            omitZeroAggregationGroups: !!(null == (o = e.chartFormat) ? void 0 : o.axisHideEmptyGroups),
                            groupBy: (0, a(910675).w9)(s, t),
                            limit: a(453308).y5,
                            groupSortPreference: n,
                            aggregation: u ? {
                                type: "intersection_and_independent",
                                intersectionAggregation: d,
                                groupAggregation: d,
                                subGroupAggregation: d
                            } : {
                                type: "independent",
                                groupAggregation: d
                            },
                            subGroup: u ? {
                                groupBy: (0, a(910675).w9)(u, t),
                                limit: a(453308).av,
                                groupSortPreference: l
                            } : void 0
                        }
                    }({
                        chartConfig: e,
                        format: o
                    })
                }, [t, e, o], {
                    equalityFn: a(381453).n4
                })
            }
        }
    }
]);