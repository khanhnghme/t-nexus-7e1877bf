"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [64049], {
        16088: (e, t, r) => {
            r.d(t, {
                Hs: () => s,
                B$: () => d,
                m: () => y,
                x1: () => x,
                RQ: () => c,
                RZ: () => f,
                H2: () => u,
                IU: () => p,
                Ms: () => g,
                Aq: () => S,
                LS: () => m
            }), r(898992), r(354520), r(672577), r(581454), r(296540);
            var o, i = r(474848);

            function n() {
                return (0, i.jsx)(r(109939).sA, {
                    defaultMessage: "Changes saved for everyone.",
                    id: "database.filterBar.saved.title"
                })
            }

            function l(e) {
                let {
                    collectionContextStore: t,
                    temporaryState: o
                } = e, n = (0, r(533992).v3)();
                return (0, i.jsx)(r(531119).Ag, {
                    onClick: () => {
                        (0, r(462446).t)({
                            environment: n,
                            preventSelectText: !0
                        }), r(436555).N2(), p({
                            environment: n,
                            collectionContextStore: t,
                            temporaryState: o
                        })
                    },
                    children: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Undo",
                        id: "database.filterBar.undo.title"
                    })
                })
            }
            var a = () => r(421439);
            let s = ((o = {})[o.All = 0] = "All", o[o.Filters = 1] = "Filters", o[o.Sorts = 2] = "Sorts", o);

            function d(e) {
                let {
                    environment: t,
                    collectionContextStore: o,
                    targetCollectionViewStore: d,
                    preventSnackbarNotification: c,
                    type: u,
                    transaction: p
                } = e;
                if ("dashboard" === d.getType()) return void
                function(e) {
                    let {
                        environment: t,
                        collectionContextStore: o,
                        targetCollectionViewStore: a,
                        preventSnackbarNotification: s,
                        transaction: d
                    } = e, c = o.temporaryStateStore.state, u = (0, r(951390).Ml)(o, "persisted", {
                        forceUseTemporaryStateInBuildMode: !0
                    });
                    if (u.dashboardGlobalFilters) {
                        var p;
                        (0, r(715144).z)({
                            stores: [a],
                            update: {
                                dashboard_global_filters: null == (p = u.dashboardGlobalFilters.value) ? void 0 : p.filter(e => e.targets && e.targets.length > 0)
                            },
                            transaction: d
                        })
                    }
                    m({
                        environment: t,
                        collectionContextStore: o,
                        temporaryState: void 0 !== c.sorts || void 0 !== c.combinatorFilter || void 0 !== c.propertyFilters ? { ...c,
                            dashboardGlobalFilters: void 0
                        } : void 0
                    }), s || r(436555).D6({
                        label: (0, i.jsx)(n, {}),
                        right: (0, i.jsx)(l, {
                            collectionContextStore: o,
                            temporaryState: c
                        })
                    })
                }({
                    environment: t,
                    collectionContextStore: o,
                    targetCollectionViewStore: d,
                    preventSnackbarNotification: c,
                    transaction: p
                });
                let S = o.temporaryStateStore.state,
                    f = o.getCurrentPropertyFiltersValue(!1),
                    g = d.getPropertyFiltersStore(),
                    y = (0, r(951390).Ml)(o, "persisted", {
                        forceUseTemporaryStateInBuildMode: !0
                    });
                if (u === s.All || u === s.Filters) {
                    for (let e of (y.combinatorFilter && (0, r(66177).f)({
                            collectionViewStore: d,
                            update: {
                                filter: y.combinatorFilter.value || null
                            },
                            transaction: p
                        }), y.filters.removed))(0, a().y4)({
                        store: g,
                        operation: {
                            pointer: g.pointer,
                            command: "keyedObjectListRemove",
                            path: g.path,
                            args: {
                                remove: {
                                    id: e
                                }
                            }
                        },
                        transaction: p
                    });
                    for (let {
                            id: e,
                            beforeId: t
                        } of y.filters.moveOps) {
                        let r = f.find(t => t.id === e);
                        r && (t ? (0, a().y4)({
                            store: g,
                            operation: {
                                pointer: g.pointer,
                                command: "keyedObjectListBefore",
                                path: g.path,
                                args: {
                                    before: {
                                        id: t
                                    },
                                    value: r
                                }
                            },
                            transaction: p
                        }) : (0, a().y4)({
                            store: g,
                            operation: {
                                pointer: g.pointer,
                                command: "keyedObjectListAfter",
                                path: g.path,
                                args: {
                                    value: r
                                }
                            },
                            transaction: p
                        }))
                    }
                    for (let e of y.filters.updated) {
                        let t = f.find(t => t.id === e);
                        t && (0, a().y4)({
                            store: g,
                            operation: {
                                pointer: g.pointer,
                                command: "keyedObjectListUpdate",
                                path: g.path,
                                args: {
                                    value: t
                                }
                            },
                            transaction: p
                        })
                    }
                }(u === s.All || u === s.Sorts) && y.sorts && (0, r(66177).f)({
                    collectionViewStore: d,
                    update: {
                        sort: y.sorts.value || null
                    },
                    transaction: p
                }), m({
                    environment: t,
                    collectionContextStore: o,
                    temporaryState: u === s.All ? void 0 : u === s.Filters ? { ...S,
                        combinatorFilter: void 0,
                        propertyFilters: void 0
                    } : { ...S,
                        sorts: void 0
                    }
                }), c || r(436555).D6({
                    label: (0, i.jsx)(n, {}),
                    right: (0, i.jsx)(l, {
                        collectionContextStore: o,
                        temporaryState: S
                    })
                })
            }

            function c(e) {
                let {
                    environment: t,
                    intl: o,
                    collectionContextStore: i,
                    transaction: n
                } = e, l = i.collectionViewStore(), a = i.isFullScreenStore.state, c = i.isRootChildStore.state, u = i.isInPeekRendererStore.state;
                if (!l) return;
                let p = i.collectionViewBlockStore(),
                    m = (0, r(855925).t)({
                        environment: t,
                        collectionViewBlockStore: p,
                        collectionViewStore: l,
                        intl: o,
                        transaction: n
                    });
                !m || (d({
                    environment: t,
                    type: s.All,
                    collectionContextStore: i,
                    targetCollectionViewStore: m,
                    transaction: n
                }), m && ("chart" === m.getType() && r(988540).Z({
                    environment: t,
                    collectionContextStore: i,
                    collectionViewId: m.id,
                    from: "filter_save_as_new_view"
                }), (0, r(532013).t)({
                    environment: t,
                    collectionContextStore: i,
                    collectionViewId: m.id,
                    isFullScreen: a,
                    isRootChild: c,
                    isInPeekRenderer: u
                }), r(374176).default.afterNextFlush(() => {
                    (0, r(200371).O)({
                        collectionContextStore: i,
                        collectionSettingsStore: i.settingsStore,
                        selectViewNameInitial: !0
                    })
                })))
            }

            function u(e) {
                let {
                    environment: t,
                    collectionContextStore: o
                } = e, i = o.currentPropertyFiltersStore.state, n = (0, r(951390).Ml)(o, "normalized").filters.added, l = i.filter(e => !(n.includes(e.id) && (0, r(400473).t_)(e.filter)));
                m({
                    environment: t,
                    collectionContextStore: o,
                    temporaryState: { ...o.temporaryStateStore.state,
                        propertyFilters: {
                            value: l
                        }
                    }
                })
            }

            function p(e) {
                let {
                    collectionContextStore: t
                } = e;
                m(e), t.isInLibraryBlock() || function(e) {
                    let {
                        environment: t,
                        collectionContextStore: o
                    } = e, i = (0, r(845001).q)(o.capabilitiesStore, o.permissionScopesStore);
                    if (o.isDashboardWidget()) return;
                    let n = o.collectionViewStore(),
                        l = o.collectionViewBlockStore();
                    if (n && l && (o.isUnlistedViewStore.state && o.isInlineViewStore.state || (0, r(404926).r)({
                            environment: t,
                            store: l
                        }) && i)) {
                        let e = n.getSpaceId();
                        (0, r(377796).createAndCommit)({
                            userAction: "collectionFilterActions.applyTemporaryStateIfPrivate",
                            environment: t,
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                d({
                                    environment: t,
                                    collectionContextStore: o,
                                    type: s.All,
                                    targetCollectionViewStore: n,
                                    preventSnackbarNotification: !0,
                                    transaction: e
                                })
                            }
                        })
                    }
                }(e)
            }

            function m(e) {
                var t;
                let {
                    environment: o,
                    collectionContextStore: i,
                    temporaryState: n
                } = e, l = i.collectionViewStore();
                if (!l) return;
                let a = i.getIsInDashboardBuildMode(),
                    c = n && (n.dashboardGlobalFilters || n.propertyFilters || n.combinatorFilter || n.sorts);
                if (a && c) {
                    (function(e) {
                        let {
                            environment: t,
                            collectionContextStore: o,
                            temporaryState: i
                        } = e, n = o.collectionViewStore();
                        if (!n) return;
                        let l = o.temporaryStateStore.state;
                        o.temporaryStateStore.setState(i);
                        let a = n.getSpaceId();
                        (0, r(377796).createAndCommit)({
                            userAction: "collectionFilterActions.autoApplyDashboardBuildMode",
                            environment: t,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                d({
                                    environment: t,
                                    type: s.All,
                                    collectionContextStore: o,
                                    targetCollectionViewStore: n,
                                    preventSnackbarNotification: !0,
                                    transaction: e
                                })
                            }
                        }), o.temporaryStateStore.setState(l)
                    })({
                        environment: o,
                        collectionContextStore: i,
                        temporaryState: n
                    }), i.groupsStore.resetAllLimits();
                    return
                }
                let u = o.currentUser.id;
                i.temporaryStateStore.setState(n || {}), (0, r(343137).A)({
                    currentUserId: u,
                    collectionViewId: l.id,
                    viewsModuleCurrentPageId: i.viewsModuleContextStore.isInLayoutBuilder() || null == (t = i.viewsModuleContextStore.currentPageStore()) ? void 0 : t.id,
                    temporaryState: n
                }), i.groupsStore.resetAllLimits()
            }

            function S(e) {
                let {
                    environment: t,
                    seen: o
                } = e, i = r(728372).AppStoreCurrentUserSettingsStore.state;
                i && (0, r(377796).createAndCommit)({
                    userAction: "collectionFilterActions.setSeenFiltersIntroTooltip",
                    environment: t,
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                seen_filters_tooltip: o
                            }
                        })
                    }
                })
            }

            function f({
                transaction: e,
                newGroups: t,
                collectionContextStore: o,
                environment: i
            }) {
                var n;
                let l = o.collectionViewStore(),
                    a = o.currentCombinatorFilterStore.state,
                    c = (0, r(381453).mg)(a),
                    u = null == c || null == (n = c.filters) ? void 0 : n.find(r(400473).B9),
                    p = (0, r(951390).I6)(o);
                if (!l || !c || !c.filters || !u) return;
                let S = u.filter.value.filter(e => "exact" === e.type).map(e => e.value).filter(r(722371).O9),
                    g = t.map(e => e.value).filter(r(910675).D1).map(e => e.value).filter(r(910675).WO).map(e => e.id),
                    y = (0, r(381453).FF)(g, ...S);
                0 !== y.length && (u.filter.value = [...u.filter.value, ...y.map(e => ({
                    type: "exact",
                    value: e
                }))], m({
                    environment: i,
                    collectionContextStore: o,
                    temporaryState: { ...o.temporaryStateStore.state,
                        combinatorFilter: {
                            value: c
                        }
                    }
                }), p || d({
                    environment: i,
                    collectionContextStore: o,
                    type: s.Filters,
                    targetCollectionViewStore: l,
                    preventSnackbarNotification: !0,
                    transaction: e
                }))
            }

            function g(e, t) {
                var o;
                let i = null == (o = e.collectionViewStore()) ? void 0 : o.id;
                i && t && ((0, r(311232).E)({
                    userId: t,
                    collectionViewId: i,
                    isOpen: !1
                }), e.filtersBarOpenStore.setState(!1))
            }

            function y(e) {
                var t, o, i;
                let {
                    collectionContextStore: n,
                    environment: l,
                    property: a,
                    schema: s
                } = e, d = n.currentPropertyFiltersStore.state, c = d.find(e => e.filter.property === a);
                if (c) return c;
                let u = (null == (t = n.collectionViewBlockStore()) ? void 0 : t.getRecordModel) ? ? r(993189).b4_.constant(void 0),
                    m = l.idCreator.getSpaceIdCreatorSync((null == (o = n.collectionViewStore()) || null == (o = o.pointer) ? void 0 : o.spaceId) ? ? ""),
                    S = (0, r(698087).SO)({
                        property: a,
                        schema: s,
                        getRecordModel: u,
                        spaceIdCreator: m,
                        collectionSource: null == (i = n.collectionViewStore()) ? void 0 : i.getCollectionSource()
                    });
                if (!S) return;
                let f = {
                    id: r(92513).JW(),
                    filter: S
                };
                return p({
                    environment: l,
                    collectionContextStore: n,
                    temporaryState: { ...n.temporaryStateStore.state,
                        propertyFilters: {
                            value: [...d, f]
                        }
                    }
                }), f
            }

            function x(e) {
                let {
                    collectionContextStore: t,
                    environment: o
                } = e, i = t.currentCombinatorFilterStore.state;
                if (i) return i;
                let n = r(400473).Lx;
                return p({
                    environment: o,
                    collectionContextStore: t,
                    temporaryState: { ...t.temporaryStateStore.state,
                        combinatorFilter: {
                            value: n
                        }
                    }
                }), n
            }
        },
        97726: (e, t, r) => {
            r.d(t, {
                n: () => l
            });
            var o = r(296540),
                i = r(474848);
            let n = {
                diffDot: {
                    position: "absolute",
                    top: -2,
                    insetInlineEnd: -2,
                    background: r(632079).Tj.orange.icon.accentPrimary,
                    border: `1px solid ${r(632079).Tj.background.primary}`,
                    width: 9,
                    height: 9,
                    borderRadius: 9
                }
            };

            function l(e) {
                let {
                    icon: t,
                    title: l,
                    on: a,
                    disabled: s,
                    hasDiff: d,
                    wrapStyle: c,
                    innerStyle: u,
                    hideChevron: p
                } = e, m = (0, r(107332).P)({
                    variant: "tint",
                    colorPalette: "blue",
                    colorVariant: "accentPrimary"
                }), S = (0, r(107332).P)({
                    variant: "plain",
                    colorVariant: "secondary"
                }), f = (0, r(960253).I)(() => {
                    let e = a || s ? m : S;
                    return {
                        container: {
                            borderRadius: 14,
                            display: "inline-flex",
                            ...d && {
                                position: "relative"
                            },
                            ...c
                        },
                        filterPill: {
                            fontSize: 14,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            whiteSpace: "nowrap",
                            borderRadius: 32,
                            height: r(986939).A.isMobile ? 28 : 24,
                            lineHeight: r(986939).A.isMobile ? "28px" : "24px",
                            padding: "0 8px",
                            ...e.resting,
                            ...u
                        },
                        hovered: { ...e.hovered
                        },
                        pressed: { ...e.pressed
                        }
                    }
                }, [d, c, a, s, u, m, S]), g = (0, o.useCallback)(e => {
                    "Escape" === e.key && e.currentTarget.blur()
                }, []);
                return (0, i.jsxs)("div", {
                    style: f.container,
                    children: [(0, i.jsxs)(r(64960).Ay, {
                        disabled: s,
                        disabledFeedback: !0,
                        style: f.filterPill,
                        hoveredStyle: f.hovered,
                        pressedStyle: f.pressed,
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        onClick: e.onClick,
                        onDoubleClick: e.onDoubleClick,
                        onKeyDown: g,
                        children: [t, l, p ? void 0 : (0, i.jsx)(r(16275).I, {
                            icon: r(595453).arrowChevronSingleDownSmallIcon,
                            size: "xs",
                            fitToViewBox: "horizontal"
                        })]
                    }), d ? (0, i.jsx)("div", {
                        style: n.diffDot
                    }) : void 0]
                })
            }
        },
        204992: (e, t, r) => {
            r.d(t, {
                t: () => o
            });

            function o(e) {
                return e <= 0 ? "" : e % 2 == 0 ? r(828432).nhj : r(828432).ueJ
            }
        },
        242912: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowStraightDownSmallIcon: () => i,
                iconDefinition: () => o
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8 2.125a.61.61 0 0 0-.625.599v9.017L4.122 8.488a.625.625 0 1 0-.884.884l4.32 4.32c.244.244.64.244.884 0l4.32-4.32a.625.625 0 0 0-.884-.884l-3.253 3.253V2.724A.61.61 0 0 0 8 2.125"
                    })
                },
                i = (0, r(104509).wt)("arrowStraightDownSmall", o, "small")
        },
        254790: (e, t, r) => {
            r.d(t, {
                Ay: () => i,
                C3: () => p,
                tl: () => s
            }), r(898992), r(354520), r(581454), r(296540);
            var o = r(474848);
            let i = function({
                schema: e,
                propertyFilter: t,
                parentStore: i,
                valueOnly: n,
                style: l
            }) {
                let d = (0, r(682985).K8)(() => {
                        let o = e[t.property];
                        if (o && (0, r(795e3).n)(o)) return (0, r(856235).LQ)(o, i)
                    }, [e, t, i]),
                    {
                        filter: c
                    } = t,
                    u = (0, r(400473).s1)(c) ? c.subfilter : c,
                    m = (0, r(818966).M)(u) && !(0, r(400473).fZ)(c),
                    S = { ...l,
                        maxWidth: void 0
                    };
                return (0, o.jsx)("span", {
                    style: (0, r(725462).n)(u) ? S : l,
                    children: (0, o.jsx)(r(109939).sA, {
                        defaultMessage: "{propertyName}{colonSeparator} {filterOperator} {propertyValue}",
                        id: "database.filterBarFilterValue.title",
                        values: {
                            propertyName: n ? void 0 : (0, o.jsx)(a, {
                                propertyFilter: t,
                                schema: e
                            }),
                            colonSeparator: n || m ? void 0 : ":",
                            filterOperator: (0, o.jsx)(s, {
                                propertyFilter: t
                            }),
                            propertyValue: (0, o.jsx)(p, {
                                propertyFilter: t,
                                schema: e,
                                parentStore: i,
                                relatedCollectionAppConfigUri: d
                            })
                        }
                    })
                })
            };

            function n() {
                return (0, o.jsx)(r(109939).sA, {
                    defaultMessage: "Not",
                    id: "database.filterBarFilterValue.notOperator"
                })
            }
            let l = {
                style0: {
                    fontWeight: r(699422).Wy.medium
                }
            };

            function a({
                propertyFilter: e,
                schema: t
            }) {
                let r = t[e.property];
                return r ? (0, o.jsx)("span", {
                    style: l.style0,
                    children: r.name
                }) : null
            }

            function s({
                propertyFilter: e
            }) {
                let {
                    filter: t
                } = e, i = (0, r(400473).s1)(t) ? t.subfilter : t;
                if ((0, r(995906).Y)(i))
                    if ("string_contains" === i.operator || "string_is" === i.operator);
                    else if ("string_does_not_contain" === i.operator || "string_is_not" === i.operator) return (0, o.jsx)(n, {});
                else return (0, o.jsx)(o.Fragment, {
                    children: (0, r(323700).J)(i.operator)
                });
                else if ((0, r(818966).M)(i)) return (0, o.jsx)(o.Fragment, {
                    children: (0, r(323700).J)(i.operator)
                });
                else if ((0, r(400473).Ui)(i)) {
                    if ("checkbox_is_not" === i.operator) return (0, o.jsx)(n, {})
                } else if ((0, r(400473).v0)(i))
                    if ("enum_is" === i.operator);
                    else if ("enum_is_not" === i.operator) return (0, o.jsx)(n, {});
                else return (0, o.jsx)(o.Fragment, {
                    children: (0, r(323700).J)(i.operator)
                });
                else if ((0, r(400473).as)(i)) {
                    if ("enum_contains" === i.operator);
                    else if ("enum_does_not_contain" === i.operator) return (0, o.jsx)(n, {});
                    else if ("enum_contains_all" !== i.operator) return (0, o.jsx)(o.Fragment, {
                        children: (0, r(323700).J)(i.operator)
                    })
                } else if ((0, r(400473).H$)(i))
                    if ("status_is" === i.operator);
                    else if ("status_is_not" === i.operator) return (0, o.jsx)(n, {});
                else return (0, o.jsx)(o.Fragment, {
                    children: (0, r(323700).J)(i.operator)
                });
                else if ((0, r(400473).Pq)(i))
                    if ("relation_contains" === i.operator);
                    else if ("relation_does_not_contain" === i.operator) return (0, o.jsx)(n, {});
                else return (0, o.jsx)(o.Fragment, {
                    children: (0, r(323700).J)(i.operator)
                });
                else if ((0, r(784923).I)(i))
                    if ("person_contains" === i.operator);
                    else if ("person_does_not_contain" === i.operator) return (0, o.jsx)(n, {});
                else return (0, o.jsx)(o.Fragment, {
                    children: (0, r(323700).J)(i.operator)
                });
                else if ((0, r(400473).G)(i)) {
                    if ("location_is" === i.operator);
                    else if ("location_is_not" === i.operator) return (0, o.jsx)(n, {})
                } else if ((0, r(725462).n)(i))
                    if ("date_is" === i.operator);
                    else {
                        if ("date_is_after" === i.operator) return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "After",
                            id: "database.filterValue.dateType.dateIsAfter.title"
                        });
                        if ("date_is_before" === i.operator) return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Before",
                            id: "database.filterValue.dateType.dateIsBefore.title"
                        });
                        if ("date_is_on_or_after" === i.operator) return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "On or after",
                            id: "database.filterValue.dateType.dateIsOnOrAfter.title"
                        });
                        if ("date_is_on_or_before" === i.operator) return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "On or before",
                            id: "database.filterValue.dateType.dateIsOnOrBefore.title"
                        });
                        if (!(0, r(400473).Cw)(i)) return (0, o.jsx)(o.Fragment, {
                            children: (0, r(323700).J)(i.operator)
                        });
                        let e = i.value;
                        if (!(e.value && "exact" === e.type && (0, r(943003).jS)(e.value))) return (0, o.jsx)(o.Fragment, {
                            children: (0, r(323700).kz)(e)
                        });
                        if (e.value.start_date && e.value.end_date);
                        else if (e.value.start_date) return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Starting",
                            id: "database.filterValue.dateType.starting.title"
                        });
                        else if (e.value.end_date) return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Ending",
                            id: "database.filterValue.dateType.ending.title"
                        })
                    }
                else if ((0, r(400473).uU)(i))
                    if ("verification_is" === i.operator);
                    else if ("verification_is_not" === i.operator) return (0, o.jsx)(n, {});
                else return (0, o.jsx)(o.Fragment, {
                    children: (0, r(323700).J)(i.operator)
                });
                else(0, r(722371).HB)(i);
                return null
            }
            let d = {
                whiteSpace: "pre"
            };

            function c({
                index: e
            }) {
                return (0, o.jsx)("span", {
                    style: d,
                    children: (0, o.jsx)(r(109939).sA, {
                        defaultMessage: ", ",
                        id: "database.filterValue.commaSeparator"
                    })
                }, e)
            }
            let u = {
                display: "inline"
            };

            function p({
                propertyFilter: e,
                schema: t,
                parentStore: i,
                relatedCollectionAppConfigUri: n
            }) {
                let {
                    filter: l
                } = e, a = (0, r(400473).s1)(l) ? l.subfilter : l;
                if (!(0, r(400473).gc)(a)) return null;
                if ((0, r(995906).Y)(a) || (0, r(818966).M)(a)) {
                    let e = a.value.value;
                    if (void 0 !== e) return (0, o.jsx)("span", {
                        children: e
                    })
                } else if ((0, r(400473).Ui)(a)) {
                    let e = a.value.value;
                    if (!0 === e) return (0, o.jsx)("span", {
                        children: (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Checked",
                            id: "database.filterValue.checkboxType.checked.title"
                        })
                    });
                    if (!1 === e) return (0, o.jsx)("span", {
                        children: (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Unchecked",
                            id: "database.filterValue.checkboxType.unchecked.title"
                        })
                    })
                } else if ((0, r(400473).v0)(a) || (0, r(400473).as)(a)) {
                    let e = (0, r(400473).v0)(a) ? (0, r(400473).Zl)(a) : (0, r(400473).SM)(a),
                        t = r(381453).oE(e.map(({
                            value: e
                        }) => e));
                    return 0 === t.length ? null : (0, o.jsx)("span", {
                        children: (0, r(405843).G)(t, e => (0, o.jsx)(c, {
                            index: e
                        }))
                    })
                } else if ((0, r(400473).H$)(a)) {
                    let e = (0, r(400473).V6)(a),
                        t = r(381453).oE(e.map(({
                            value: e
                        }) => e));
                    return 0 === t.length ? null : (0, o.jsx)("span", {
                        children: (0, r(405843).G)(t, e => (0, o.jsx)(c, {
                            index: e
                        }))
                    })
                } else if ((0, r(400473).Pq)(a)) {
                    let e = (0, r(400473).Rh)(a),
                        t = r(381453).oE(e.map((e, t) => {
                            if (!e.value) return null;
                            let l = e.type;
                            if ("exact" === l) {
                                let t = r(970831).B.createChildStore(i, {
                                    table: r(832375).evP,
                                    id: e.value
                                });
                                return (0, o.jsx)(r(627918).A, {
                                    style: u,
                                    store: t
                                }, e.value)
                            }
                            if ("relative" === l) {
                                if ("builtin" === e.value.type) {
                                    var a;
                                    return n ? (0, o.jsx)("span", {
                                        children: (0, o.jsx)(r(109939).sA, { ...null == (a = r(613211).n$[n]) || null == (a = a[e.value.variable]) ? void 0 : a.messageDescriptor
                                        })
                                    }, t) : null
                                } else if ("current_page_in_related_collection" === e.value.type) return (0, o.jsx)("span", {
                                    children: (0, o.jsx)(r(109939).sA, {
                                        defaultMessage: "This page",
                                        id: "database.filterAndSort.currentPagePropertyValue.title"
                                    })
                                }, t)
                            } else(0, r(722371).HB)(l)
                        }));
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, r(405843).G)(t, e => (0, o.jsx)(c, {
                            index: e
                        }))
                    })
                } else if ((0, r(784923).I)(a)) return (0, o.jsx)(m, {
                    useFilter: a,
                    parentStore: i
                });
                else if ((0, r(400473).G)(a)) {
                    let e = (0, r(400473).GK)(a),
                        t = r(381453).oE(e.map(e => {
                            if (e.value) {
                                let t = e.value,
                                    n = r(356912).m.createChildStore(i, {
                                        table: r(832375).VlP,
                                        id: t
                                    });
                                return (0, o.jsx)(r(627918).A, {
                                    style: u,
                                    store: n
                                }, t)
                            }
                        }));
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, r(405843).G)(t, e => (0, o.jsx)(c, {
                            index: e
                        }))
                    })
                } else if ((0, r(725462).n)(a)) {
                    let i, n = t[e.property],
                        l = (n && "date" === n.type ? n.date_format : void 0) || r(943003).vz;
                    if ("exact" === a.value.type) {
                        let e = a.value;
                        if (e.value) {
                            if ((0, r(943003).$P)(e.value)) i = e.value;
                            else if ((0, r(943003).jS)(e.value)) {
                                let t = (0, r(943003).dq)(e.value);
                                t && (i = t.value)
                            }
                        }
                    } else if (!(0, r(400473).Cw)(a)) return (0, o.jsx)(o.Fragment, {
                        children: (0, r(323700).RR)(a.value)
                    });
                    if (i) return (0, o.jsx)(r(246467).A, {
                        style: u,
                        value: i,
                        dateFormat: l,
                        shortenDateAndRange: !0
                    })
                } else if ((0, r(400473).uU)(a)) {
                    let e = (0, r(400473).ms)(a).filter(({
                        value: e
                    }) => !!e).map(r(323700).w0);
                    return 0 === e.length ? null : (0, o.jsx)("span", {
                        children: (0, r(405843).G)(e, e => (0, o.jsx)(c, {
                            index: e
                        }))
                    })
                } else(0, r(722371).HB)(a);
                return null
            }

            function m({
                parentStore: e,
                useFilter: t
            }) {
                let i = (0, r(109939).tz)(),
                    n = (0, r(19484).W)(t),
                    l = (0, r(682985).K8)(() => r(381453).oE(n.map((t, n) => {
                        if ("relative" === t.type) return (0, o.jsx)("span", {
                            children: (0, o.jsx)(r(109939).sA, {
                                defaultMessage: "Me",
                                id: "database.filterValue.personType.firstPersonPropertyValue.title"
                            })
                        }, n);
                        if (t.value) {
                            let a = t.value;
                            if (a.table === r(832375).oo9) {
                                let t = r(807825).L.createChildStore(e, {
                                    table: a.table,
                                    id: a.id
                                });
                                return (0, o.jsx)("span", {
                                    children: (0, r(413818).c6)(i, t.getModel())
                                }, n)
                            }
                            if (a.table === r(832375).GPl) {
                                let t = r(447003).v.createChildStore(e, {
                                    table: a.table,
                                    id: a.id
                                });
                                return (0, o.jsx)("span", {
                                    children: (0, r(697006).Hg)(t.getModel())
                                }, n)
                            }
                            if (a.table === r(832375).naB) {
                                var l;
                                let t = r(398652).C.createChildStore(e, {
                                    table: a.table,
                                    id: (0, r(659341).gK)({
                                        spaceId: a.spaceId,
                                        spacePermissionGroupId: a.id
                                    }),
                                    spaceId: a.spaceId
                                });
                                return (0, o.jsx)("span", {
                                    children: null == (l = t.getModel()) ? void 0 : l.getName()
                                }, n)
                            }
                        }
                    })), [n, e, i]);
                return (0, o.jsx)(o.Fragment, {
                    children: (0, r(405843).G)(l, e => (0, o.jsx)(c, {
                        index: e
                    }))
                })
            }
        },
        298571: (e, t, r) => {
            function o(e) {
                var t;
                let o = (0, r(845001).q)(e.capabilitiesStore, e.permissionScopesStore),
                    i = !!(null == (t = function(e) {
                        var t, r;
                        if (e.isInViewTabLayout() && (null == (t = e.collectionViewStore()) ? void 0 : t.getType()) !== "page") return null == (r = e.collectionViewStore()) ? void 0 : r.getCollectionStore()
                    }(e)) ? void 0 : t.canEditCollection());
                return o || e.isEphemeralView() || i
            }

            function i(e) {
                var t;
                return !!e.isInViewTabLayout() && (null == (t = e.collectionViewBlockStore()) ? void 0 : t.canEdit())
            }

            function n(e) {
                var t;
                if (!e.isDashboardWidget()) return !1;
                let o = null == (t = e.dashboardWidgetStore.state) ? void 0 : t.dashboardCollectionContextStore;
                return !!o && ((0, r(845001).q)(o.capabilitiesStore, o.permissionScopesStore) || i(o))
            }
            r.d(t, {
                HD: () => o,
                bW: () => i,
                vS: () => n
            })
        },
        311232: (e, t, r) => {
            r.d(t, {
                E: () => o
            });

            function o(e) {
                let t = (0, r(900229).N)(e.collectionViewId);
                r(255482).K.set({
                    userId: e.userId,
                    key: t,
                    value: e.isOpen
                })
            }
        },
        411323: (e, t, r) => {
            r.d(t, {
                Ni: () => l,
                U7: () => n,
                rY: () => s
            }), r(296540);
            var o = r(474848);
            let i = {
                minWidth: 240
            };

            function n({
                origin: e
            }) {
                return (0, o.jsx)(r(992351).B, {
                    origin: e,
                    placementToOrigin: "bottom",
                    style: i,
                    tutorialId: "sprints-onboarding",
                    tutorialStepId: "current-sprint-view-tooltip",
                    header: (0, o.jsx)(r(109939).sA, {
                        id: "SprintsBoardOnboardingTooltip.SprintBoardView.header",
                        defaultMessage: "Manage the current sprint"
                    }),
                    content: (0, o.jsx)(r(109939).sA, {
                        id: "SprintsBoardOnboardingTooltip.SprintBoardView.content",
                        defaultMessage: "Add tasks and update task status as your team makes progress during the sprint."
                    })
                })
            }

            function l({
                origin: e
            }) {
                return (0, o.jsx)(r(992351).B, {
                    origin: e,
                    placementToOrigin: "bottom",
                    tutorialId: "sprints-onboarding",
                    tutorialStepId: "sprint-task-tooltip",
                    header: (0, o.jsx)(r(109939).sA, {
                        id: "SprintsBoardOnboardingTooltip.SprintBoardItem.header",
                        defaultMessage: "Change tasks status"
                    }),
                    content: (0, o.jsx)(r(109939).sA, {
                        id: "SprintsBoardOnboardingTooltip.SprintBoardItem.content",
                        defaultMessage: "Drag this task to “In progress”."
                    })
                })
            }
            let a = {
                minWidth: 240
            };

            function s({
                origin: e
            }) {
                return (0, o.jsx)(r(992351).B, {
                    origin: e,
                    placementToOrigin: "bottom",
                    style: a,
                    tutorialId: "sprints-onboarding",
                    tutorialStepId: "complete-sprint-button-tooltip",
                    header: (0, o.jsx)(r(109939).sA, {
                        id: "SprintsBoardOnboardingTooltip.CompleteSprintButton.header",
                        defaultMessage: "Complete this sprint"
                    }),
                    content: (0, o.jsx)(r(109939).sA, {
                        id: "SprintsBoardOnboardingTooltip.CompleteSprintButton.content",
                        defaultMessage: "Click the button when you’re done with this sprint."
                    })
                })
            }
        },
        418659: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowUpDownSmallIcon: () => i,
                iconDefinition: () => o
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.67 2.48 12.66 11.03",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M11.349 2.672a.625.625 0 0 0-.884 0L7.666 5.471a.625.625 0 1 0 .884.883l1.732-1.73v8.262a.625.625 0 1 0 1.25 0V4.623l1.73 1.731a.625.625 0 0 0 .885-.883zM5.093 2.49a.625.625 0 0 0-.625.624v8.263l-1.73-1.731a.625.625 0 1 0-.885.883l2.798 2.799c.244.244.64.244.884 0l2.798-2.798a.625.625 0 0 0-.883-.884l-1.732 1.73V3.115a.625.625 0 0 0-.625-.625"
                    })
                },
                i = (0, r(104509).wt)("arrowUpDownSmall", o, "small")
        },
        546299: (e, t, r) => {
            r.d(t, {
                q: () => n
            }), r(898992), r(354520), r(581454);
            var o = r(296540),
                i = r(474848);
            let n = o.memo(function(e) {
                let {
                    collectionContextStore: t,
                    collectionSettingsStore: n,
                    collectionViewStore: l,
                    context: a,
                    filter: s,
                    schema: d
                } = e, c = (0, r(533992).v3)(), u = (0, r(682985).K8)(() => (0, r(298571).HD)(t), [t]), p = (0, r(682985).K8)(() => {
                    var e;
                    return s ? null == t || null == (e = t.collectionStore()) || null == (e = e.getSchema()[s.filter.property]) ? void 0 : e.type : void 0
                }, [t, s]), m = (0, o.useCallback)(e => {
                    r(986939).A.isMobile && "selectOption" !== e && r(16088).H2({
                        environment: c,
                        collectionContextStore: t
                    }), (0, r(72762).o)({
                        collectionSettingsStore: n
                    })
                }, [t, n, c]), S = (0, o.useCallback)(e => {
                    var o;
                    if (!s) return;
                    let i = null == (o = t.remoteResultStore.state) ? void 0 : o.sizeHint,
                        n = r(680007).default.DO_NOT_USE_markLegacy("collections.update_filter_lag");
                    r(680007).default.measureAfterNextFlush(n, {
                        getData: () => r(752242).K6({
                            from: "property_filter",
                            property_type: p,
                            collectionContextStore: t,
                            sizeHintAtStart: i
                        })
                    });
                    let l = s.filter,
                        a = t.currentPropertyFiltersStore.state.map(t => t.id === s.id ? { ...s,
                            filter: { ...l,
                                filter: e
                            }
                        } : t);
                    r(16088).IU({
                        environment: c,
                        collectionContextStore: t,
                        temporaryState: { ...t.temporaryStateStore.state,
                            propertyFilters: {
                                value: a
                            }
                        }
                    }), (0, r(893783).X)({
                        environment: c,
                        collectionContextStore: t,
                        action: "update_property_filter",
                        original_view_type: void 0,
                        property_type: p
                    })
                }, [t, c, s, p]), f = (0, r(84235).Y)(S, 250), g = (0, o.useCallback)(() => {
                    var e;
                    if (!s) return;
                    let o = t.currentPropertyFiltersStore.state.filter(e => e.id !== s.id);
                    r(16088).IU({
                        environment: c,
                        collectionContextStore: t,
                        temporaryState: { ...t.temporaryStateStore.state,
                            propertyFilters: {
                                value: o
                            }
                        }
                    }), (0, r(893783).X)({
                        environment: c,
                        collectionContextStore: t,
                        action: "delete_property_filter",
                        original_view_type: void 0,
                        property_type: null == t || null == (e = t.collectionStore()) || null == (e = e.getSchema()[s.filter.property]) ? void 0 : e.type
                    })
                }, [t, c, s]), y = (0, o.useCallback)(() => {
                    var e;
                    if (!s) return;
                    let {
                        combinatorFilter: o,
                        propertyFilters: i
                    } = (0, r(698087).$4)(t, s);
                    r(16088).IU({
                        environment: c,
                        collectionContextStore: t,
                        temporaryState: { ...t.temporaryStateStore.state,
                            propertyFilters: {
                                value: i
                            },
                            combinatorFilter: {
                                value: o
                            }
                        }
                    });
                    let n = a === r(684605).aV.FilterBar ? t.filterBarCombinatorFilterSettingsStore : t.filterOptionsCombinatorFilterSettingsStore;
                    (0, r(132425).R)({
                        collectionSettingsStore: n,
                        item: {
                            type: "filter"
                        }
                    }), (0, r(893783).X)({
                        environment: c,
                        collectionContextStore: t,
                        action: "merge_filter_into_combinator",
                        property_type: null == t || null == (e = t.collectionStore()) || null == (e = e.getSchema()[s.filter.property]) ? void 0 : e.type
                    })
                }, [t, a, c, s]);
                return (0, i.jsx)(r(69906).td, {
                    canUserFilterAdditionalSources: !1,
                    collectionViewId: l.id,
                    propertyFilter: s.filter,
                    schema: d,
                    parentStore: l,
                    onChange: S,
                    onChangeDebounced: f,
                    onClose: m,
                    onDelete: g,
                    onAddToCombinatorFilter: y,
                    context: r(69906).mL.PropertyFilter,
                    canUserConfigureFilters: u,
                    allowRelativeDateFilter: !0,
                    allowRelativePersonFilter: !0,
                    collectionContextStore: t
                })
            })
        },
        684605: (e, t, r) => {
            r.d(t, {
                N9: () => p,
                aV: () => d,
                he: () => y
            }), r(898992), r(354520), r(672577), r(803949), r(581454);
            var o, i = r(296540),
                n = r(474848);

            function l({
                collectionContextStore: e,
                collectionSettingsStore: t
            }) {
                let o = (0, r(682985).K8)(() => t.state.open, [t]),
                    a = (0, i.useCallback)(e => {
                        e && (0, r(444306).Rp)(e.target) || (0, r(72762).o)({
                            collectionSettingsStore: t
                        })
                    }, [t]),
                    d = (0, i.useCallback)(() => (0, n.jsx)(r(23889).m$, {
                        context: r(368538).B.FilterBar,
                        collectionContextStore: e,
                        collectionSettingsStore: t,
                        hideDesktopHeader: !0
                    }), [e, t]);
                return (0, i.useEffect)(() => () => (0, r(72762).o)({
                    collectionSettingsStore: t
                }), []), (0, n.jsx)(r(182718).zD, {
                    popupType: r(986939).A.isMobile ? r(423291).n.SlideUp : r(423291).n.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    open: o,
                    onDismiss: a,
                    disableMouseCapture: !0,
                    enableOutsideClickDismiss: !0,
                    originGap: 4,
                    content: d,
                    children: (0, n.jsx)(s, {
                        collectionContextStore: e,
                        collectionSettingsStore: t
                    })
                })
            }
            let a = {
                title: {
                    marginTop: -1,
                    maxWidth: 220,
                    ...r(699422).RC
                }
            };

            function s({
                collectionContextStore: e,
                collectionSettingsStore: t
            }) {
                let o, l = (0, r(533992).v3)(),
                    [d, c, u] = (0, r(682985).K8)(() => [e.currentSortsStore.state, (0, r(951390).Ml)(e, "normalized"), e.normalizedSchemaStore.state], [e]),
                    p = (0, r(682985).K8)(() => (0, r(298571).bW)(e), [e]),
                    m = (0, r(845001).x)(e.capabilitiesStore, e.permissionScopesStore),
                    S = d[0],
                    f = S ? u[S.property] : void 0,
                    g = (0, i.useCallback)(() => {
                        (0, r(893783).X)({
                            environment: l,
                            collectionContextStore: e,
                            action: "click_sort"
                        }), (0, r(132425).R)({
                            collectionSettingsStore: t,
                            item: {
                                type: "sort"
                            }
                        })
                    }, [e, t, l]);
                return o = 1 === d.length ? S && "descending" === S.direction ? r(309087).arrowStraightDownFillSmallIcon : r(567738).arrowStraightUpFillSmallIcon : r(418659).arrowUpDownSmallIcon, (0, n.jsx)(r(97726).n, {
                    on: !0,
                    hasDiff: !!((m || p) && c.sorts),
                    icon: (0, n.jsx)(r(16275).I, {
                        icon: o,
                        size: 1 === d.length ? "xs" : "sm",
                        colorPalette: "blue",
                        colorVariant: "accentPrimary",
                        fitToViewBox: "horizontal"
                    }),
                    title: (0, n.jsx)("span", {
                        style: a.title,
                        children: 1 === d.length && f ? f.name : (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "{sortCount} sorts",
                            id: "database.filterBar.sorts.label",
                            values: {
                                sortCount: d.length
                            }
                        })
                    }),
                    onClick: g
                })
            }
            let d = ((o = {})[o.FilterBar = 0] = "FilterBar", o[o.SettingsFilters = 1] = "SettingsFilters", o),
                c = r(546605).Store.createClass({
                    open: !1,
                    stack: []
                }, {
                    name: "CreateFilterSettingsStore"
                }),
                u = {
                    style1: {
                        position: "relative",
                        flexGrow: 0,
                        overflow: "hidden"
                    },
                    style2: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        paddingTop: 8,
                        paddingBottom: 8
                    },
                    style2Reskin: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        ...r(57461).dE
                    },
                    style3: {
                        display: "flex",
                        alignItems: "start",
                        paddingTop: 6,
                        marginInlineStart: "auto",
                        flexShrink: 0
                    }
                };

            function p({
                collectionContextStore: e,
                showHoverActionsStore: t,
                createFilterSettingsStore: o,
                saveControlMoreActionsButtonPopupStore: l
            }) {
                var a;
                let s = (0, r(682985).uB)(l, r(510969).A),
                    d = (0, r(682985).uB)(o, c),
                    f = (0, r(682985).K8)(() => (0, r(951390).y_)(e), [e]),
                    g = (0, r(682985).K8)(() => {
                        let t = e.filterBarFlashTriggerStore.state;
                        return (0, r(204992).t)(t)
                    }, [e.filterBarFlashTriggerStore]);
                (0, r(637030).X)(() => {
                    e.filterBarFlashTriggerStore.setState(0)
                });
                let x = (0, r(682985).O$)(e.currentPropertyFiltersStore),
                    b = (0, r(682985).K8)(() => e.currentSortsStore.state.length, [e.currentSortsStore]),
                    C = (0, r(682985).K8)(() => e.filterBarSortSettingsStore.state.open, [e]),
                    _ = "map" !== (0, r(682985).K8)(() => {
                        var t;
                        return null == (t = e.collectionViewStore()) ? void 0 : t.getType()
                    }, [e]) && (b > 0 || C),
                    A = (0, r(682985).O$)(e.isUnlistedViewStore),
                    k = (0, r(682985).K8)(() => (0, r(298571).HD)(e) ? e.currentCombinatorFilterStore.state : void 0, [e]),
                    w = (0, r(682985).uB)(void 0, r(593423).A),
                    I = null == (a = (0, r(28630).Oz)(e)) ? void 0 : a.background,
                    T = (0, i.useCallback)(t => {
                        e.filtersBarOpenStore.setState(!0)
                    }, [e]),
                    M = "ARCHIVED" !== (0, r(682985).O$)(e.archiveStatusStore),
                    F = (0, r(960253).I)(() => ({
                        border: {
                            width: "100%",
                            borderTop: !M || A ? "none" : `1px solid ${r(632079).Tj.border.primary}`,
                            marginTop: 4 * !!M,
                            zIndex: 86
                        },
                        container: {
                            width: "100%",
                            zIndex: 86,
                            borderRadius: "4px",
                            ...A && {
                                paddingInlineStart: 16,
                                paddingInlineEnd: 16
                            }
                        }
                    }), [A, M]),
                    B = (0, r(643160).yf)();
                return (0, n.jsx)("div", {
                    style: F.border,
                    children: (0, n.jsx)("div", {
                        style: F.container,
                        className: g,
                        onClick: T,
                        tabIndex: 0,
                        role: "button",
                        children: (0, n.jsxs)(r(4458).fI, {
                            paddingTop: 4 * !!M,
                            children: [(0, n.jsxs)("div", {
                                style: u.style1,
                                children: [(0, n.jsxs)(r(136508)._, {
                                    store: w,
                                    type: r(644154).A.X,
                                    style: B ? u.style2Reskin : u.style2,
                                    children: [_ ? (0, n.jsx)(S, {
                                        collectionContextStore: e
                                    }) : void 0, _ ? (0, n.jsx)(y, {}) : void 0, k ? (0, n.jsx)(m, {
                                        collectionContextStore: e
                                    }) : void 0, (0, n.jsx)(v, {
                                        collectionContextStore: e,
                                        createFilterSettingsStore: d,
                                        propertyFilters: x
                                    }), (0, n.jsx)(j, {
                                        collectionContextStore: e,
                                        showHoverActionsStore: t,
                                        createFilterSettingsStore: d
                                    })]
                                }), (0, n.jsx)(r(97798).A, {
                                    store: w,
                                    backgroundColor: I
                                })]
                            }), (0, n.jsxs)("div", {
                                style: u.style3,
                                children: [f ? (0, n.jsx)(h, {
                                    collectionContextStore: e,
                                    showHoverActionsStore: t,
                                    saveControlMoreActionsButtonPopupStore: s
                                }) : void 0, (0, n.jsx)(r(908958).A, {
                                    collectionContextStore: e
                                })]
                            })]
                        })
                    })
                })
            }

            function m({
                collectionContextStore: e
            }) {
                return (0, n.jsx)(r(941414).l, {
                    context: d.FilterBar,
                    collectionSettingsStore: e.filterBarCombinatorFilterSettingsStore,
                    collectionContextStore: e
                })
            }

            function S({
                collectionContextStore: e
            }) {
                return (0, n.jsx)(l, {
                    collectionContextStore: e,
                    collectionSettingsStore: e.filterBarSortSettingsStore
                }, "sort")
            }

            function f({
                filter: e,
                collectionContextStore: t,
                onClick: o
            }) {
                let i = (0, r(682985).K8)(() => t.getFilterBarItemSettingsStore(e.id), [t, e.id]);
                return (0, n.jsx)(r(856927).A, {
                    id: e.id,
                    context: d.FilterBar,
                    collectionContextStore: t,
                    collectionSettingsStore: i,
                    onClick: o
                }, e.id)
            }
            let g = {
                style0: {
                    borderInlineEnd: `1px solid ${r(632079).Tj.border.secondaryTranslucent}`,
                    height: 24,
                    marginInline: 6
                }
            };

            function y() {
                return (0, n.jsx)("div", {
                    style: g.style0
                })
            }
            let x = {
                display: "flex",
                flexShrink: 0
            };

            function v({
                propertyFilters: e,
                collectionContextStore: t,
                createFilterSettingsStore: o
            }) {
                let l = (0, r(533992).v3)(),
                    a = (0, r(682985).O$)(t.canConfigureBlockStore),
                    [s] = (0, r(682985).K8)(() => [t.currentPropertyFiltersStore.state], [t]),
                    d = (0, i.useCallback)(e => {
                        (0, r(72762).o)({
                            collectionSettingsStore: o
                        }), (0, r(72762).o)({
                            collectionSettingsStore: t.filterBarSortSettingsStore
                        }), (0, r(72762).o)({
                            collectionSettingsStore: t.filterBarCombinatorFilterSettingsStore
                        }), s.filter(t => !e || t.id !== e).forEach(e => {
                            let o = t.getFilterBarItemSettingsStore(e.id);
                            (0, r(72762).o)({
                                collectionSettingsStore: o
                            })
                        })
                    }, [t, o, s]);
                if (!a) return (0, n.jsx)(n.Fragment, {
                    children: e.map(e => (0, n.jsx)(f, {
                        filter: e,
                        collectionContextStore: t,
                        onClick: d
                    }, e.id))
                }); {
                    let o = e.map(e => e.id);
                    return (0, n.jsx)(r(66467).Ay, {
                        direction: "horizontal",
                        keys: o,
                        disableVerticalEdgeScroll: !0,
                        disableHorizontalEdgeScroll: !0,
                        renderKey: r => {
                            let o = e.find(e => e.id === r);
                            if (o) return (0, n.jsx)(f, {
                                collectionContextStore: t,
                                filter: o,
                                onClick: d
                            })
                        },
                        style: x,
                        gap: 6,
                        onDrop: e => (function(e, t, o) {
                            if (!o.collectionViewBlockStore()) return;
                            let i = o.currentPropertyFiltersStore.state,
                                n = r(381453).oE(e.map(e => i.find(t => t.id === e)));
                            r(16088).IU({
                                environment: t,
                                collectionContextStore: o,
                                temporaryState: { ...o.temporaryStateStore.state,
                                    propertyFilters: {
                                        value: n
                                    }
                                }
                            }), (0, r(893783).X)({
                                environment: t,
                                collectionContextStore: o,
                                action: "reorder_filters"
                            })
                        })(e, l, t)
                    })
                }
            }

            function h({
                collectionContextStore: e,
                showHoverActionsStore: t,
                saveControlMoreActionsButtonPopupStore: o
            }) {
                return (0, n.jsx)(r(23889)._Q, {
                    context: "FilterBar",
                    collectionContextStore: e,
                    showHoverActionsStore: t,
                    moreActionsButtonPopupStore: o
                })
            }

            function b({
                collectionContextStore: e,
                createFilterSettingsStore: t
            }) {
                return (0, n.jsx)(r(23889).m$, {
                    context: r(368538).B.FilterBar,
                    collectionContextStore: e,
                    collectionSettingsStore: t,
                    hideDesktopHeader: !0
                })
            }
            let C = {
                fontSize: 14,
                borderRadius: 12,
                paddingInlineStart: 5,
                paddingInlineEnd: 9,
                marginInlineEnd: 12
            };

            function j({
                collectionContextStore: e,
                showHoverActionsStore: t,
                createFilterSettingsStore: o
            }) {
                let l = (0, r(533992).v3)(),
                    a = (0, i.useCallback)(e => {
                        !(e && "click" === e.type && (0, r(444306).Rp)(e.target)) && (0, r(72762).o)({
                            collectionSettingsStore: o
                        })
                    }, [o]),
                    s = (0, i.useCallback)(() => (0, n.jsx)(b, {
                        collectionContextStore: e,
                        createFilterSettingsStore: o
                    }), [e, o]),
                    d = (0, i.useCallback)(() => {
                        (0, r(893783).X)({
                            environment: l,
                            collectionContextStore: e,
                            action: "click_new_filter"
                        }), (0, r(132425).R)({
                            collectionSettingsStore: o,
                            item: {
                                type: "createFilter"
                            }
                        })
                    }, [l, e, o]),
                    c = (0, r(682985).K8)(() => o.state.open, [o]),
                    u = (0, r(682985).K8)(() => t.state || c, [t, c]);
                return (0, n.jsx)(r(182718).zD, {
                    open: c,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    popupType: r(986939).A.isMobile ? r(182718).nl.BottomSheet : r(182718).nl.Popup,
                    bottomSheetInitialState: "half",
                    content: s,
                    disableMouseCapture: !0,
                    enableOutsideClickDismiss: !0,
                    originGap: 4,
                    onDismiss: a,
                    children: (0, n.jsx)(r(654979).A, {
                        tag: r(988022).p,
                        visible: u,
                        animate: {
                            opacity: 1
                        },
                        initial: {
                            opacity: 0
                        },
                        exit: {
                            opacity: 0
                        },
                        iconLeading: {
                            icon: r(638501).plusSmallIcon,
                            size: "xs"
                        },
                        size: "sm",
                        colorVariant: "tertiary",
                        hovered: c,
                        onClick: d,
                        style: C,
                        children: (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "Filter",
                            id: "database.filterBar.addButton.title"
                        })
                    })
                })
            }
        },
        856927: (e, t, r) => {
            r.d(t, {
                A: () => l
            }), r(898992), r(354520), r(672577);
            var o = r(296540),
                i = r(474848);
            let n = {
                    fill: "currentColor"
                },
                l = o.memo(function({
                    id: e,
                    context: t,
                    collectionContextStore: l,
                    collectionSettingsStore: s,
                    onClick: d
                }) {
                    let c = (0, r(533992).v3)(),
                        u = (0, r(960253).e)(),
                        {
                            filter: p,
                            isReadOnly: m
                        } = (0, r(682985).K8)(() => {
                            var t;
                            let o = (t = e, l.currentPropertyFiltersStore.state.find(e => e.id === t)),
                                i = !!(o && (0, r(698087).vu)(o.id));
                            return {
                                filter: o,
                                isReadOnly: i
                            }
                        }, [l, e]),
                        S = (0, r(682985).K8)(() => {
                            let t = (0, r(951390).Ml)(l, "normalized");
                            return t.filters.updated.includes(e) || t.filters.added.includes(e) || t.filters.moved.includes(e)
                        }, [l, e]),
                        f = (0, r(682985).K8)(() => l.collectionViewStore(), [l]),
                        g = (0, r(682985).O$)(l.normalizedSchemaStore),
                        y = (0, r(682985).K8)(() => s.state.open, [s]),
                        x = (null == p ? void 0 : p.id) === r(236523).O || (null == p ? void 0 : p.id) === r(236523).j,
                        v = (0, o.useCallback)(e => {
                            e && (0, r(444306).Rp)(e.target) || (0, r(72762).o)({
                                collectionSettingsStore: s
                            })
                        }, [s]),
                        h = (0, o.useCallback)(() => {
                            var e;
                            d && d(null == p ? void 0 : p.id), p && (s.state.open ? (0, r(72762).o)({
                                collectionSettingsStore: s
                            }) : (0, r(132425).R)({
                                collectionSettingsStore: s,
                                item: {
                                    type: "filter"
                                }
                            }), (0, r(893783).X)({
                                environment: c,
                                collectionContextStore: l,
                                action: "click_property_filter",
                                original_view_type: void 0,
                                property_type: null == l || null == (e = l.collectionStore()) || null == (e = e.getSchema()[p.filter.property]) ? void 0 : e.type
                            }))
                        }, [l, s, c, p, d]),
                        b = (0, o.useCallback)((e, t) => {
                            if (!f || !p) return null;
                            let o = p.filter,
                                l = !(0, r(400473).t_)(o),
                                s = g[o.property],
                                d = (null == s ? void 0 : s.icon) && (0, r(111012).T8)(s.icon),
                                c = (0, r(564725).xI)({
                                    size: "sm",
                                    type: d ? "custom" : "system",
                                    isMobile: r(986939).A.isMobile
                                });
                            return (0, i.jsx)(r(97726).n, {
                                icon: s && (0, i.jsx)(r(221535).zB, {
                                    type: s.type,
                                    icon: s.icon,
                                    size: c,
                                    theme: r(632079).Tj,
                                    themeMode: u,
                                    style: n
                                }),
                                title: l ? (0, i.jsx)(r(254790).Ay, {
                                    propertyFilter: o,
                                    schema: g,
                                    style: a(),
                                    parentStore: f
                                }) : (0, i.jsx)("span", {
                                    style: a(),
                                    children: null == s ? void 0 : s.name
                                }),
                                on: l,
                                hasDiff: S,
                                disabled: t,
                                hideChevron: t,
                                onClick: h,
                                ...e
                            }, p.id)
                        }, [f, p, h, S, g, u]),
                        C = (0, o.useCallback)(() => x ? (0, i.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: () => (0, i.jsx)(r(109939).sA, {
                                id: "database.filterBarPropertyFilter.cannotConfigureSubitemDisplayMode",
                                defaultMessage: "To modify this filter, first change the subitem display mode."
                            }),
                            children: e => b(e, !0)
                        }) : (0, i.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: () => (0, i.jsx)(r(109939).sA, {
                                id: "database.filterBarPropertyFilter.cannotConfigure",
                                defaultMessage: "This filter cannot be modified on this view."
                            }),
                            children: e => b(e, !0)
                        }), [b, x]),
                        j = (0, o.useCallback)(() => f && p ? (0, i.jsx)(r(546299).q, {
                            collectionContextStore: l,
                            collectionSettingsStore: s,
                            collectionViewStore: f,
                            context: t,
                            filter: p,
                            schema: g
                        }) : null, [l, s, f, t, p, g]);
                    return m ? C() : (0, i.jsx)(r(182718).zD, {
                        popupType: r(986939).A.isMobile ? r(423291).n.SlideUp : r(423291).n.Popup,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        open: y,
                        onDismiss: v,
                        disableMouseCapture: !0,
                        enableOutsideClickDismiss: !0,
                        originGap: 4,
                        content: j,
                        trapFocus: !0,
                        children: m ? C() : b(void 0, !1)
                    })
                }, r(795676).A);

            function a() {
                return {
                    maxWidth: 180,
                    ...r(699422).RC
                }
            }
        },
        883298: (e, t, r) => {
            r.d(t, {
                Dl: () => S,
                U2: () => s,
                Zk: () => f,
                _R: () => i,
                bE: () => g,
                c: () => u,
                cJ: () => m,
                eN: () => p,
                e_: () => l,
                g4: () => a,
                qy: () => c
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(803949), r(581454), r(737550);
            var o = () => r(875964);

            function i(e) {
                let {
                    environment: t,
                    transaction: o,
                    tasksBlockStore: i,
                    sprintsBlockStore: l
                } = e, a = l.getCollectionPointerIfSingleSource(), s = i.getCollectionPointerIfSingleSource();
                if (!a || !s) return;
                let d = r(356912).m.createChildStore(l, a),
                    c = d.getRole() ? ? "none";
                !(0, r(138798).q_)(c, "editor") || d.getAutomationStores().some(e => e.isCompleteSprintAutomation()) || n({
                    environment: t,
                    transaction: o,
                    sprintCollectionStore: d,
                    taskCollectionStore: r(356912).m.createChildStore(i, s),
                    sprintSettingsConfig: r(308292).AL
                })
            }

            function n(e) {
                var t;
                let {
                    environment: o,
                    sprintSettingsConfig: i,
                    transaction: n,
                    sprintCollectionStore: l,
                    taskCollectionStore: a
                } = e, s = l.getSpaceId(), d = (0, r(295447).Z1)({
                    environment: o,
                    table: r(832375).yBS,
                    spaceId: s
                }), c = (0, r(295447).Z1)({
                    environment: o,
                    table: r(832375).SC1,
                    spaceId: s
                });
                r(124937).eC({
                    environment: o,
                    table: r(832375).yBS,
                    inMemoryRecordCache: l.inMemoryRecordCache,
                    value: {
                        id: d,
                        parent_id: l.id,
                        parent_table: l.table,
                        alive: !0,
                        space_id: s,
                        status: i.autoCompleteSprints ? "active" : "disabled",
                        trigger: {
                            id: r(92513).JW(),
                            type: "recurrence",
                            recurrence: {
                                frequency: "week",
                                interval: (t = i).recurrenceConfig.interval,
                                weekdays: t.recurrenceConfig.weekdays,
                                start_date: (0, r(943003).Rz)(r(906745).DateTime.local().set({
                                    hour: 0,
                                    minute: 0,
                                    second: 0,
                                    millisecond: 0
                                }).toJSDate()),
                                timezone: (0, r(25825).dB)(),
                                hour: 0,
                                minute: 0
                            }
                        },
                        action_ids: [c]
                    },
                    transaction: n
                }), (0, r(715144).z)({
                    stores: [l],
                    update: {
                        automation_ids: [...l.getFormat().automation_ids ? ? [], d]
                    },
                    transaction: n
                }), r(124937).vt({
                    environment: o,
                    table: r(832375).SC1,
                    inMemoryRecordCache: l.inMemoryRecordCache,
                    transaction: n,
                    args: {
                        id: c,
                        version: 1,
                        parent_id: d,
                        parent_table: r(832375).yBS,
                        type: "complete_sprint",
                        alive: !0,
                        space_id: s,
                        config: {
                            sprint_collection: l.getSpaceShardedPointer(),
                            task_collection: a.getSpaceShardedPointer(),
                            complete_sprint_action: i.actionConfig.complete_sprint_action
                        }
                    }
                })
            }

            function l(e) {
                let {
                    environment: t,
                    automationStore: o,
                    transaction: i,
                    newDuration: n,
                    currentSprintBlockStore: l
                } = e;
                (0, r(173157).z)({
                    store: o.getTriggerStore().getKeyStore("recurrence"),
                    data: {
                        interval: n
                    },
                    transaction: i
                }), d({
                    environment: t,
                    transaction: i,
                    automationStore: o,
                    currentSprintBlockStore: l
                })
            }

            function a(e) {
                let {
                    environment: t,
                    automationStore: o,
                    transaction: i,
                    newWeekday: n,
                    currentSprintBlockStore: l
                } = e;
                (0, r(173157).z)({
                    store: o.getTriggerStore().getKeyStore("recurrence"),
                    data: {
                        weekdays: [n]
                    },
                    transaction: i
                }), d({
                    environment: t,
                    transaction: i,
                    automationStore: o,
                    currentSprintBlockStore: l
                })
            }

            function s(e) {
                let {
                    environment: t,
                    actionStore: o,
                    automationStore: i,
                    transaction: n,
                    newAutocompleteStatus: l,
                    currentSprintBlockStore: a
                } = e;
                (0, r(173157).z)({
                    store: i,
                    data: {
                        status: l ? "active" : "disabled"
                    },
                    transaction: n
                }), d({
                    environment: t,
                    transaction: n,
                    automationStore: i,
                    currentSprintBlockStore: a
                });
                let s = i.getParentPointer();
                if (!s || s.table !== r(832375).VlP) return;
                let c = (0, r(637286).Q)(t),
                    u = {
                        automation_id: i.id,
                        automation_actions: [{
                            automation_action_id: o.id,
                            type: "complete_sprint"
                        }],
                        automation_triggers: [{
                            type: "recurrence"
                        }],
                        collection_id: s.id
                    };
                l ? (0, r(589563).Ah)(c, u) : (0, r(589563).vN)(c, u)
            }

            function d(e) {
                let {
                    automationStore: t,
                    currentSprintBlockStore: o,
                    transaction: i,
                    environment: n
                } = e;
                if (!t.isActive()) return;
                let l = t.getRecurrence();
                if (!l) return;
                let a = (0, r(433837).Vv)(l);
                if (!a) return;
                let s = o.getPropertyValue(r(11448).Hx.Dates);
                if (!s) return;
                let d = (0, r(247438).Cok)(s)[0];
                if (!d || "daterange" !== d.type) return;
                let c = d.start_date,
                    {
                        start_date: u,
                        end_date: p
                    } = (0, r(433837).Me)({
                        currentSprintStartDate: c,
                        sprintSchedule: a
                    });
                (0, r(173157).z)({
                    store: t.getTriggerStore().getKeyStore("recurrence"),
                    data: {
                        start_date: (0, r(943003).Rz)(r(906745).DateTime.fromISO(u).plus({
                            minutes: 1
                        }).toJSDate())
                    },
                    transaction: i
                }), r(793358).D5({
                    store: o,
                    propertyId: r(11448).Hx.Dates,
                    transaction: i,
                    environment: n,
                    type: "dateValue",
                    dateValue: {
                        type: "daterange",
                        start_date: c,
                        end_date: p
                    }
                })
            }

            function c(e) {
                let {
                    transaction: t,
                    newRemainingTasksBehavior: o,
                    actionStore: i
                } = e;
                (0, r(173157).z)({
                    store: i.getConfigStore(),
                    data: {
                        complete_sprint_action: o
                    },
                    transaction: t
                })
            }
            async function u(e) {
                var t;
                let {
                    appTemplatesSetupActions: o,
                    appTemplatesSprintBoardActions: i,
                    appConfigs: n
                } = await r(929925).Aw.load(), {
                    environment: l,
                    collectionContextStore: a,
                    from: s
                } = e, d = a.collectionStore(), c = null == d ? void 0 : d.getParentCollectionViewBlockStore(), u = null == c ? void 0 : c.getParentStore(), p = null == d || null == (t = d.getFormat()) ? void 0 : t.app_config_uri, m = p && (0, r(765629).l)(n(), p), S = d ? (0, r(593303).k)(d.getSpaceId()) : void 0;
                if (!d || !c || !u || !S || u.table !== r(832375).NXh && u.table !== r(832375).evP && u.table !== r(832375).yKj || !m) return;
                let f = c.getFormat().app_id,
                    g = f ? await l.api.callApi({
                        eventName: "getCollectionViewBlocksByAppId",
                        environment: l,
                        data: {
                            spaceId: c.getSpaceId(),
                            appId: f
                        }
                    }) : void 0,
                    x = (null == g ? void 0 : g.type) === "success" && g.data.result.length ? g.data.result.map(e => r(970831).B.createChildStore(u, {
                        table: r(832375).evP,
                        id: e.blockId,
                        spaceId: c.getSpaceId()
                    })) : [c];
                await y({
                    environment: l,
                    taskCollectionStore: d,
                    executeFn: () => {
                        let e = c.getSpaceId(),
                            t = (0, r(377796).createAndCommit)({
                                userAction: "sprintSettingsActions.handleTurnOnSprints",
                                environment: l,
                                canUndo: !0,
                                cellTarget: e ? {
                                    spaceWithId: e
                                } : void 0,
                                perform: e => {
                                    let t = (0, r(355940).We)(),
                                        n = o.applyTypedFeatures({
                                            environment: l,
                                            spaceViewStore: S,
                                            appParentStore: u,
                                            appUri: m.uri,
                                            features: [{
                                                type: "simple",
                                                featureUri: t.uri
                                            }],
                                            transaction: e,
                                            createOrModify: "modify",
                                            appCollectionViewBlockStores: x
                                        }),
                                        d = i.createSprintPage({
                                            environment: l,
                                            spaceViewStore: S,
                                            appParentStore: u,
                                            transaction: e,
                                            blockStores: n,
                                            creationEntryPoint: {
                                                type: "sprint_settings"
                                            }
                                        });
                                    (0, r(72762).o)({
                                        collectionSettingsStore: a.settingsStore
                                    });
                                    let c = s ? {
                                        feature: {
                                            id: r(11448).yx.TaskToSprintRelation,
                                            from: s,
                                            type: "notion://projects/tasks_with_sprints_feature"
                                        }
                                    } : {};
                                    return (0, r(461749).Z)({
                                        environment: l,
                                        collectionStore: a.collectionStore(),
                                        collectionViewStore: a.collectionViewStore(),
                                        from: "view_settings",
                                        property: r(11448).yx.TaskToSprintRelation,
                                        property_type: "relation",
                                        is_suggested_property: !0,
                                        property_id: r(11448).yx.TaskToSprintRelation,
                                        ...c
                                    }), d
                                }
                            });
                        t.serverCommitResult.then(() => {
                            let e = t.performResult;
                            e && (0, r(836924).Y)({
                                environment: l,
                                store: e,
                                pageVisitSource: r(254656).y8.Create
                            })
                        })
                    }
                })
            }
            async function p(e) {
                let {
                    environment: t,
                    collectionContextStore: i,
                    sprintSettingsContext: n,
                    sprintBoardViewBlockIds: l
                } = e, {
                    sprintCollectionStore: a,
                    automationContext: s,
                    currentCollectionViewBlockStore: d,
                    sprintCollectionViewBlockStore: c,
                    taskCollectionStore: u,
                    taskCollectionViewBlockStore: p
                } = n;
                if (!a || !c || !s) return;
                let m = p.getSpaceId(),
                    S = [...c.getCollectionPointerIfSingleSource() ? [c] : [], ...l.map(e => new(r(970831)).B(t, {
                        id: e,
                        table: r(832375).evP,
                        spaceId: m
                    }))];
                d.id === p.id ? (0, r(72762).o)({
                    collectionSettingsStore: i.settingsStore
                }) : (0, r(836924).Y)({
                    environment: t,
                    store: p,
                    pageVisitSource: r(254656).y8.LeaveOrRemove
                });
                let {
                    automationActions: f
                } = await r(879267).QV.automations.load(), {
                    automationStore: g
                } = s;
                await y({
                    environment: t,
                    taskCollectionStore: u,
                    executeFn: () => {
                        (0, r(377796).createAndCommit)({
                            userAction: "sprintSettingsActions.handleTurnOffSprints",
                            environment: t,
                            canUndo: !0,
                            cellTarget: m ? {
                                spaceWithId: m
                            } : void 0,
                            perform: e => {
                                p.id === c.id && (0, r(279187).removeCollectionFromCollectionViewBlock)({
                                        collectionViewBlockStore: p,
                                        collectionStore: a,
                                        transaction: e
                                    }),
                                    function(e) {
                                        let {
                                            transaction: t,
                                            blocksToDelete: i,
                                            environment: n,
                                            taskCollectionStore: l,
                                            sprintCollectionStore: a
                                        } = e;
                                        (0, r(173157).z)({
                                            store: a,
                                            transaction: t,
                                            data: {
                                                alive: !1
                                            }
                                        }), (0, o().B)({
                                            environment: n,
                                            collectionStore: l,
                                            schema: l.getSchema(),
                                            property: r(11448).yx.TaskToSprintRelation,
                                            transaction: t,
                                            permanentlyDelete: !0
                                        }), r(51932).oD({
                                            environment: n,
                                            blocks: i,
                                            transaction: t,
                                            permanentlyDelete: !0
                                        })
                                    }({
                                        environment: t,
                                        transaction: e,
                                        blocksToDelete: S,
                                        sprintCollectionStore: a,
                                        taskCollectionStore: u
                                    }), f.disableAutomation({
                                        automationStore: g,
                                        environment: t,
                                        transaction: e
                                    }), f.deleteAutomation({
                                        automationStore: g,
                                        environment: t,
                                        transaction: e
                                    })
                            }
                        }), (0, r(431666).i)({
                            environment: t,
                            collectionStore: i.collectionStore(),
                            collectionViewStore: i.collectionViewStore(),
                            property_type: "relation",
                            from: "view_settings",
                            property: r(11448).yx.TaskToSprintRelation
                        })
                    }
                })
            }

            function m(e) {
                let {
                    environment: t,
                    userSettingsStore: o
                } = e;
                (0, r(377796).createAndCommit)({
                    userAction: "sprintSettingsActions.handleSeenSprintsEngagementBanner",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: o,
                            data: {
                                seen_sprint_settings_engagement_banner: !0
                            },
                            transaction: e
                        })
                    }
                })
            }

            function S(e) {
                e.settingsStore.setState({
                    open: !0,
                    stack: [{
                        type: "main"
                    }, {
                        type: "sprintSettings"
                    }]
                })
            }

            function f(e) {
                let {
                    environment: t,
                    collectionContextStore: o,
                    currentViewBlockStore: i,
                    taskCollectionViewBlockStore: n
                } = e, l = o.collectionViewStore();
                if (!l) return;
                let a = l.getFormat(),
                    s = l.getRawQuery(),
                    d = n.getSpaceId();
                (0, r(377796).createAndCommit)({
                    userAction: "sprintSettingsActions.handleManageSprintFromThisView",
                    environment: t,
                    canUndo: !0,
                    cellTarget: d ? {
                        spaceWithId: d
                    } : void 0,
                    perform: e => {
                        if ((0, r(548709).F)({
                                collectionViewStore: l,
                                transaction: e,
                                update: {
                                    name: r(962299).A.formatMessage(r(355940).DZ.tasksCurrentSprintV2ViewName),
                                    query2: { ...s,
                                        filter: void 0
                                    },
                                    format: { ...a,
                                        collection_view_icon: "/icons/playback-play-button_gray.svg",
                                        property_filters: r(355940).Wo,
                                        app_config_uri: r(11448).Lu,
                                        hide_linked_collection_name: !0
                                    }
                                }
                            }), i.id === n.id) {
                            var t;
                            let o = (null == (t = i.getFormat()) ? void 0 : t.app_uri_map) ? ? {},
                                s = a.app_config_uri;
                            s && delete o[s], (0, r(715144).z)({
                                stores: [n],
                                update: {
                                    app_uri_map: { ...o,
                                        [r(11448).Lu]: l.id
                                    }
                                },
                                transaction: e
                            })
                        }
                    }
                })
            }

            function g(e) {
                let {
                    environment: t,
                    sprintSettingsContext: o
                } = e;
                if (!o) return;
                let i = o.sprintCollectionStore,
                    l = (null == i ? void 0 : i.getRole()) ? ? "none";
                if (i && (0, r(138798).q_)(l, "editor") && o.automationContextLoaded && !o.automationContext) {
                    let e = i.getSpaceId();
                    (0, r(377796).createAndCommit)({
                        userAction: "sprintSettingsActions.ensureCompleteSprintAutomation",
                        environment: t,
                        canUndo: !0,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        perform: e => {
                            n({
                                environment: t,
                                transaction: e,
                                sprintCollectionStore: i,
                                taskCollectionStore: o.taskCollectionStore,
                                sprintSettingsConfig: r(308292).AL
                            })
                        }
                    })
                }
            }
            async function y(e) {
                let {
                    executeFn: t,
                    environment: r,
                    taskCollectionStore: o
                } = e;
                await x({
                    environment: r,
                    taskCollectionStore: o
                }), t()
            }
            async function x(e) {
                var t;
                let {
                    environment: i,
                    taskCollectionStore: n
                } = e, l = n.getFormat().app_uri_map, a = r(11448).yx.TaskToSprintRelation, s = n.getSchema(), d = (null == l ? void 0 : l[a]) ? ? a, c = s[d];
                if (!c || !(0, r(795e3).n)(c)) return;
                let u = null == (t = (0, r(390768).N)(c)) ? void 0 : t.id;
                if (!u) return;
                let p = new Set([d]);
                Object.entries(s).forEach(([e, t]) => {
                    var o;
                    t && (0, r(795e3).n)(t) && (null == (o = (0, r(390768).N)(t)) ? void 0 : o.id) === u && p.add(e)
                });
                let m = n.getSpaceId(),
                    {
                        serverCommitResult: S
                    } = (0, r(377796).createAndCommit)({
                        userAction: "sprintSettingsActions.clearSprintRelationDataFromTaskCollection",
                        environment: i,
                        canUndo: !0,
                        cellTarget: m ? {
                            spaceWithId: m
                        } : void 0,
                        perform: e => {
                            for (let t of p)(0, o().B)({
                                environment: i,
                                transaction: e,
                                permanentlyDelete: !0,
                                collectionStore: n,
                                schema: s,
                                property: t
                            });
                            null == l || delete l[a], l && (0, r(715144).z)({
                                stores: [n],
                                transaction: e,
                                update: {
                                    app_uri_map: l
                                }
                            })
                        }
                    });
                await S
            }
        },
        908958: (e, t, r) => {
            r.d(t, {
                A: () => $
            });
            var o = r(296540);

            function i(e, t) {
                (0, r(195857).DO_NOT_USE_trackLegacy)("complete_sprint_action", t)
            }
            r(898992), r(354520), r(581454);
            var n = () => r(546605),
                l = r(474848);
            let a = (0, r(109939).YK)({
                    completedPercentSummary: {
                        id: "completeAutomationSprintModal.sprintSummary.completedPercentSummary",
                        defaultMessage: "{completedTaskCount} / {totalTaskCount} total tasks"
                    },
                    selectNextSprintLabel: {
                        id: "completeAutomationSprintModal.sprintSummary.selectNextSprintLabel",
                        defaultMessage: "Next sprint"
                    },
                    selectDatesForNextSprintLabel: {
                        id: "completeAutomationSprintModal.sprintSummary.selectDatesForNextSprintLabel",
                        defaultMessage: "Start and end dates"
                    },
                    nextSprintDatesLabel: {
                        id: "completeAutomationSprintModal.sprintSummary.nextSprintDatesLabel",
                        defaultMessage: "Next sprint dates"
                    },
                    cancelButton: {
                        id: "completeAutomationSprintModal.sprintSummary.cancel",
                        defaultMessage: "Cancel"
                    },
                    fallbackSprintName: {
                        id: "completeAutomationSprintModal.sprintName.placeholder",
                        defaultMessage: "Sprint"
                    }
                }),
                s = {
                    height: 44,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    width: void 0
                },
                d = { ...s,
                    marginTop: 12,
                    marginBottom: 18
                },
                c = {
                    modalContainer: {
                        width: 400,
                        display: "flex",
                        fontSize: r(418676).vQ,
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: 20
                    },
                    header: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: r(986939).A.isMobile ? 18 : 16,
                        fontWeight: r(699422).Wy.semibold
                    },
                    subheader: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: r(632079).Tj.text.tertiary,
                        marginBottom: 16,
                        gap: 8
                    },
                    separator: {
                        height: 2,
                        width: 2,
                        borderRadius: 2,
                        backgroundColor: r(632079).Tj.icon.tertiary
                    },
                    flexRow: {
                        display: "flex",
                        ...r(986939).A.isMobile ? {
                            flexDirection: "column",
                            fontSize: 14,
                            color: r(632079).Tj.text.secondary
                        } : {
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: 24,
                            marginBottom: 16
                        }
                    },
                    button: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 8,
                        ...r(986939).A.isMobile && s
                    },
                    subheaderShimmer: {
                        borderRadius: 4,
                        marginTop: 6,
                        width: 200,
                        height: 16,
                        ...r(986939).A.isMobile && {
                            height: 22
                        }
                    },
                    flexRowShimmerBox1: {
                        borderRadius: 4,
                        width: 60,
                        height: 16,
                        ...r(986939).A.isMobile && d
                    },
                    flexRowShimmerBox2: {
                        borderRadius: 4,
                        width: 80,
                        height: 16,
                        ...r(986939).A.isMobile && d
                    },
                    flexRowShimmerBox3: {
                        borderRadius: 4,
                        width: 140,
                        height: 16,
                        ...r(986939).A.isMobile && d
                    },
                    dropdownButton: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 4,
                        ...r(986939).A.isMobile && { ...d,
                            border: `1px solid ${r(632079).Tj.border.secondary}`,
                            justifyContent: "space-between"
                        }
                    }
                };

            function u({
                onDismiss: e,
                ...t
            }) {
                let {
                    isOpen: n
                } = t, a = (0, r(533992).v3)(), s = (0, o.useId)(), d = o => {
                    e();
                    let n = !1;
                    (0, r(722371).Gv)(o) && (0, r(722371).O9)(o.clickedCancel) && (n = !0 === o.clickedCancel), i(a, { ...(0, r(752242).sl)(t.taskCollectionContextStore),
                        action: n ? "cancel_modal" : "dismiss_modal"
                    })
                };
                return (0, l.jsx)(r(979479).A, {
                    ariaLabelledBy: s,
                    isOpen: n,
                    onDismiss: () => d(),
                    content: () => (0, l.jsx)(p, { ...t,
                        onDismiss: d,
                        titleAriaId: s
                    })
                })
            }

            function p(e) {
                var t;
                let {
                    completeSprintAutomationContext: i,
                    setIsLoading: s,
                    taskCollectionContextStore: d,
                    onDismiss: u,
                    completeSprintAutomationState: p,
                    onAutomationComplete: m,
                    titleAriaId: g
                } = e, {
                    currentSprintId: b,
                    querySprintsResult: j,
                    currentSprintTaskSummary: _
                } = p, k = (0, r(109939).tz)(), w = (0, r(533992).v3)(), {
                    value: T
                } = (0, r(815048).fJ)(r(864850).T.formulas), {
                    value: M
                } = (0, r(815048).fJ)(r(879267).QV.automationTypecheck), {
                    value: F
                } = (0, r(815048).fJ)(r(879267).QV.automationActionRegistry), B = (0, r(682985).O$)(r(728372).AppStoreCurrentUserSettingsStore), V = i.sprintCollectionStore, P = (0, r(682985).K8)(() => {
                    var e;
                    let t = null == (e = i.automationContext) ? void 0 : e.automationStore;
                    return null == t ? void 0 : t.getRecurrence()
                }, [i]), D = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = i.automationContext) || null == (e = e.automationActionStore.getConfig()) ? void 0 : e.complete_sprint_action) ? ? "complete_sprint_and_move_incomplete_tasks_to_next_sprint"
                }, [null == (t = i.automationContext) ? void 0 : t.automationActionStore]), R = (0, r(682985).K8)(() => V.getSpaceId(), [V]), O = (0, r(682985).K8)(() => {
                    if (b) return r(970831).B.createChildStore(V, {
                        id: b,
                        table: r(832375).evP,
                        spaceId: V.getSpaceId()
                    })
                }, [b, V]), z = (0, r(682985).K8)(() => O ? (0, r(112293).tS)({
                    intl: k,
                    environment: w,
                    store: O,
                    untitledFallback: a.fallbackSprintName
                }) : k.formatMessage(a.fallbackSprintName), [O, k, w]), K = (0, r(682985).K8)(() => v({
                    sprintBlockStore: O,
                    sprintCollectionStore: V
                }), [O, V]), L = (0, r(682985).K8)(() => h({
                    sprintDateRange: K,
                    intl: k
                }), [K, k]), [N, U] = o.useState(), E = (0, r(682985).K8)(() => n().Store.createValue(D), [D]), W = o.useMemo(() => {
                    if (!P || !(null != K && K.end_date)) return;
                    let e = (0, r(433837).Vv)(P);
                    if (e) return (0, r(433837).Z3)({
                        currentSprintEndDate: K.end_date,
                        sprintSchedule: e
                    })
                }, [P, null == K ? void 0 : K.end_date]), H = (0, r(682985).K8)(() => {
                    if ((null == N ? void 0 : N.type) === "pointer") return v({
                        sprintBlockStore: r(970831).B.createChildStore(V, N.pointer),
                        sprintCollectionStore: V
                    })
                }, [N, V]), [G, J] = o.useState(void 0), $ = o.useMemo(() => {
                    if (G && (0, r(943003).oM)(G)) return G
                }, [G]), q = o.useMemo(() => {
                    if (!j) return;
                    let {
                        nextSprintIds: e,
                        futureSprintIds: t
                    } = j;
                    return e.length > 0 ? e : t
                }, [j]), Q = (0, r(682985).K8)(() => {
                    if (void 0 === q) return;
                    let e = q[0];
                    return e ? {
                        type: "pointer",
                        pointer: {
                            id: e,
                            table: r(832375).evP,
                            spaceId: R
                        }
                    } : {
                        type: "actionId"
                    }
                }, [q, R]), Y = (0, r(682985).K8)(() => {
                    var e;
                    return !(null == B || null == (e = B.getSettings()) ? void 0 : e.seen_sprint_settings_engagement_banner)
                }, [B]);
                o.useEffect(() => {
                    Q && U(Q)
                }, [Q, U]), o.useEffect(() => {
                    J(H ? ? W)
                }, [H, W, J]);
                let Z = o.useCallback(async () => {
                        if (u(), !T || !M || !F || !N || !$ || !i.automationContext) return;
                        s(!0);
                        let e = (null == _ ? void 0 : _.incompleteTaskCount) === 0 ? "complete_sprint" : E.state;
                        if (!i.automationContext) return;
                        let t = {
                                type: "recurrence",
                                recurrence: {
                                    type: "completeSprint",
                                    completeSprintActionType: e,
                                    nextSprintDateRange: $
                                },
                                automationStore: i.automationContext.automationStore,
                                intl: k,
                                parentRecordStore: i.currentCollectionViewBlockStore,
                                formulasModule: T,
                                isLoggedIn: w.currentUser.isLoggedIn(),
                                automationTypecheckModule: M,
                                automationActionRegistryModule: F
                            },
                            o = () => {
                                m()
                            },
                            {
                                automationExecutionActions: n
                            } = await r(879267).QV.automations.load();
                        await n.executeClientAutomation({
                            environment: w,
                            clientContext: t,
                            onUndo: () => {
                                s(!0), o(), s(!1)
                            }
                        }), o(), s(!1)
                    }, [u, T, N, $, i.automationContext, i.currentCollectionViewBlockStore, M, F, s, null == _ ? void 0 : _.incompleteTaskCount, E, k, w, m]),
                    {
                        status: X
                    } = (0, r(950234).L)({
                        value: p,
                        validateLoaded: e => !1 === e.isLoading,
                        waitTimeInMs: Number(r(627179).Xb)
                    });
                if ("pending" !== X && p.isLoading) return (0, l.jsx)(S, {
                    titleAriaId: g,
                    onDismiss: u,
                    sprintCollectionStore: V
                });
                if (p.isLoading) return (0, l.jsx)(f, {
                    titleAriaId: g,
                    onDismiss: u
                });
                let {
                    incompleteTaskCount: ee
                } = p.currentSprintTaskSummary, et = !!N && !!$, er = void 0 !== q && q.length > 0;
                return (0, l.jsxs)("div", {
                    style: c.modalContainer,
                    children: [(0, l.jsx)("div", {
                        style: c.header,
                        id: g,
                        children: (0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.sprintSummary.title",
                            defaultMessage: "{sprintName} summary",
                            values: {
                                sprintName: z
                            }
                        })
                    }), (0, l.jsx)(x, {
                        currentSprintFormattedDateRange: L,
                        currentSprintTaskSummary: _
                    }), Y ? (0, l.jsx)(y, {
                        collectionContextStore: d,
                        userSettingsStore: B,
                        onDismissModal: u
                    }) : void 0, er ? (0, l.jsxs)("div", {
                        style: c.flexRow,
                        children: [k.formatMessage(a.selectNextSprintLabel), (0, l.jsx)(A, {
                            nextSprintInput: N,
                            setNextSprintInput: U,
                            completeSprintAutomationContext: i,
                            sprintPageIds: q
                        })]
                    }) : void 0, (0, l.jsxs)("div", {
                        style: c.flexRow,
                        children: [er ? k.formatMessage(a.selectDatesForNextSprintLabel) : k.formatMessage(a.nextSprintDatesLabel), (0, l.jsx)(I, {
                            sprintDateRange: G,
                            setSprintDateRange: J
                        })]
                    }), ee > 0 ? (0, l.jsxs)("div", {
                        style: c.flexRow,
                        children: [(0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.sprintSummary.incompleteTasksLabel",
                            defaultMessage: "{incompleteTaskCount, plural, one {{incompleteTaskCount} incomplete task} other {{incompleteTaskCount} incomplete tasks}}",
                            values: {
                                incompleteTaskCount: ee
                            }
                        }), (0, l.jsx)(C, {
                            actionTypeStore: E
                        })]
                    }) : void 0, (0, l.jsx)(r(912946).A, {
                        colorPalette: "blue",
                        disabled: !et,
                        onClick: () => {
                            Z()
                        },
                        style: c.button,
                        children: (0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.sprintSummary.completeSprintButton",
                            defaultMessage: "Complete {sprintName}",
                            values: {
                                sprintName: z
                            }
                        })
                    }), (0, l.jsx)(r(988022).p, {
                        onClick: () => u({
                            clickedCancel: !0
                        }),
                        style: c.button,
                        children: k.formatMessage(a.cancelButton)
                    })]
                })
            }
            let m = {
                marginTop: 24
            };

            function S(e) {
                let {
                    onDismiss: t,
                    sprintCollectionStore: o,
                    titleAriaId: i
                } = e, n = (0, r(533992).v3)(), s = (0, r(109939).tz)(), d = (0, r(682985).K8)(() => o.getParentBlockStore(), [o]);
                return (0, l.jsxs)("div", {
                    style: c.modalContainer,
                    children: [(0, l.jsx)("div", {
                        style: c.header,
                        id: i,
                        children: (0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.missingCurrentSprint.title",
                            defaultMessage: "No current sprint found"
                        })
                    }), (0, l.jsx)(r(912946).A, {
                        colorPalette: "blue",
                        onClick: () => {
                            d && (0, r(545586).navigateToBlock)({
                                environment: n,
                                store: d,
                                pageVisitSource: r(254656).y8.LinkInPage
                            })
                        },
                        style: { ...c.button,
                            ...m
                        },
                        children: (0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.missingCurrentSprint.navigateToSprintsDatabase",
                            defaultMessage: "Fix in Sprints database"
                        })
                    }), (0, l.jsx)(r(988022).p, {
                        onClick: t,
                        style: c.button,
                        children: s.formatMessage(a.cancelButton)
                    })]
                })
            }

            function f(e) {
                let {
                    onDismiss: t,
                    titleAriaId: o
                } = e, i = (0, r(109939).tz)();
                return (0, l.jsxs)("div", {
                    style: c.modalContainer,
                    children: [(0, l.jsx)("div", {
                        style: c.header,
                        id: o,
                        children: (0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.sprintSummary.titlePlaceholder",
                            defaultMessage: "Sprint summary"
                        })
                    }), (0, l.jsx)("div", {
                        style: c.subheader,
                        children: (0, l.jsx)(r(795830).P, {
                            style: c.subheaderShimmer
                        })
                    }), (0, l.jsxs)("div", {
                        style: c.flexRow,
                        children: [i.formatMessage(a.selectNextSprintLabel), (0, l.jsx)(r(795830).P, {
                            style: c.flexRowShimmerBox1
                        })]
                    }), (0, l.jsxs)("div", {
                        style: c.flexRow,
                        children: [i.formatMessage(a.selectDatesForNextSprintLabel), (0, l.jsx)(r(795830).P, {
                            style: c.flexRowShimmerBox2
                        })]
                    }), (0, l.jsxs)("div", {
                        style: c.flexRow,
                        children: [(0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.sprintSummary.incompleteTasksPlaceholder",
                            defaultMessage: "Incomplete tasks"
                        }), (0, l.jsx)(r(795830).P, {
                            style: c.flexRowShimmerBox3
                        })]
                    }), (0, l.jsx)(r(912946).A, {
                        colorPalette: "blue",
                        disabled: !0,
                        onClick: r(763230).lQ,
                        style: c.button,
                        children: (0, l.jsx)(r(109939).sA, {
                            id: "completeAutomationSprintModal.sprintSummary.completeSprintButtonPlaceholder",
                            defaultMessage: "Complete sprint"
                        })
                    }), (0, l.jsx)(r(988022).p, {
                        onClick: t,
                        style: c.button,
                        children: i.formatMessage(a.cancelButton)
                    })]
                })
            }
            let g = {
                banner: {
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    backgroundColor: r(632079).Tj.blue.background.secondaryTranslucent,
                    borderRadius: 4,
                    padding: 12,
                    marginBottom: 12,
                    fontSize: 12,
                    lineHeight: 1.5,
                    gap: 8
                },
                bannerContent: {
                    flex: "1 1 auto",
                    color: r(632079).Tj.text.primary
                },
                bannerTitle: {
                    fontWeight: r(699422).Wy.regular
                },
                repeatIcon: {
                    flex: "0 0 auto",
                    marginBlockStart: 3
                },
                closeButton: {
                    marginTop: -3,
                    borderRadius: "50%"
                },
                link: {
                    color: r(632079).Tj.blue.text.accentPrimary
                }
            };

            function y(e) {
                let t = (0, r(109939).tz)(),
                    {
                        collectionContextStore: o,
                        userSettingsStore: i,
                        onDismissModal: n
                    } = e,
                    a = (0, r(533992).v3)();
                return (0, l.jsxs)("div", {
                    style: g.banner,
                    children: [(0, l.jsx)("div", {
                        style: g.repeatIcon,
                        children: (0, l.jsx)(r(16275).I, {
                            icon: r(63974).o,
                            size: "sm",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary"
                        })
                    }), (0, l.jsx)("div", {
                        style: g.bannerContent,
                        children: (0, l.jsx)("div", {
                            style: g.bannerTitle,
                            children: (0, l.jsx)(r(109939).sA, {
                                id: "completeAutomationSprintModal.turnOnAutomaticSprints.banner.title",
                                defaultMessage: "Complete your sprints automatically. Turn on Automated sprints in <linkToSprintSettings>Settings</linkToSprintSettings>.",
                                values: {
                                    linkToSprintSettings: (...e) => (0, l.jsx)(r(428217).V, {
                                        onClick: () => void(i && (n(), r(883298).cJ({
                                            environment: a,
                                            userSettingsStore: i
                                        }), r(883298).Dl(o))),
                                        disableUnderline: !0,
                                        style: g.link,
                                        children: e
                                    })
                                }
                            })
                        })
                    }), (0, l.jsx)(r(374533).A, {
                        icon: r(25094).xMarkSmallIcon,
                        ariaLabel: t.formatMessage({
                            id: "completeAutomationSprintModal.dismissBannerButton",
                            defaultMessage: "Dismiss banner button"
                        }),
                        style: g.closeButton,
                        onClick: () => void(i && r(883298).cJ({
                            environment: a,
                            userSettingsStore: i
                        }))
                    })]
                })
            }

            function x(e) {
                let {
                    currentSprintFormattedDateRange: t,
                    currentSprintTaskSummary: o
                } = e, i = (0, r(109939).tz)(), n = o ? i.formatMessage(a.completedPercentSummary, {
                    completedTaskCount: o.completedTaskCount,
                    totalTaskCount: o.totalTaskCount
                }) : void 0, s = t && o ? (0, l.jsxs)(l.Fragment, {
                    children: [t, (0, l.jsx)("div", {
                        style: c.separator
                    }), n]
                }) : t || n;
                return void 0 === s ? null : (0, l.jsx)("div", {
                    style: c.subheader,
                    children: s
                })
            }

            function v(e) {
                let {
                    sprintBlockStore: t,
                    sprintCollectionStore: o
                } = e;
                if (!t) return;
                let i = o.getPropertyMapping(),
                    n = null == i ? void 0 : i[r(11448).Hx.Dates];
                if (!n) return;
                let l = t.getPropertyValue(n);
                if (!l) return;
                let a = (0, r(247438).Cok)(l)[0];
                if (a) return (0, r(943003).HB)(a)
            }

            function h(e) {
                let {
                    sprintDateRange: t,
                    intl: o
                } = e;
                if (t && (0, r(943003).oM)(t)) return (0, r(850640).ZF)({
                    value: t,
                    allowRelativeDates: !1,
                    shortenDateAndRange: !0,
                    displayInUserTimezone: !0,
                    intl: o
                })
            }
            let b = {
                complete_sprint_and_move_incomplete_tasks_to_next_sprint: (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintModal.sprintSummary.moveToNextSprintOption",
                    defaultMessage: "Move to next sprint"
                }),
                complete_sprint_and_move_incomplete_tasks_to_backlog: (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintModal.sprintSummary.moveToBacklogOption",
                    defaultMessage: "Move to backlog"
                }),
                complete_sprint: (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintModal.sprintSummary.keepInThisSprintOption",
                    defaultMessage: "Keep in current sprint"
                })
            };

            function C(e) {
                let {
                    actionTypeStore: t
                } = e, o = (0, r(682985).O$)(t);
                return (0, l.jsx)(r(656252).A, {
                    popupType: r(986939).A.isMobile ? r(656252).z.SlideUp : r(656252).z.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    content: e => (0, l.jsx)(_, {
                        actionTypeStore: t,
                        buttonPopupParent: e
                    }),
                    children: e => (0, l.jsxs)(r(988022).p, { ...e,
                        style: c.dropdownButton,
                        children: [b[o], (0, l.jsx)(r(16275).I, {
                            icon: r(595453).arrowChevronSingleDownSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        })]
                    })
                })
            }
            let j = ["complete_sprint_and_move_incomplete_tasks_to_next_sprint", "complete_sprint_and_move_incomplete_tasks_to_backlog", "complete_sprint"];

            function _(e) {
                let t, {
                        actionTypeStore: o,
                        buttonPopupParent: i
                    } = e,
                    n = (0, r(682985).K8)(() => j.map(e => {
                        let t = e === o.state;
                        return {
                            key: e,
                            action: () => {
                                o.setState(e), i.close()
                            },
                            render: o => (0, l.jsx)(r(95582).A, { ...o,
                                title: b[e],
                                isChecked: t
                            })
                        }
                    }), [o, i]);
                return t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.ActionSheet
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    minWidth: 230
                }, (0, l.jsx)(r(747369).A, { ...t,
                    children: (0, l.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "sprint_automations",
                            items: n
                        }]
                    })
                })
            }

            function A(e) {
                let {
                    nextSprintInput: t,
                    completeSprintAutomationContext: o,
                    setNextSprintInput: i,
                    sprintPageIds: n
                } = e, {
                    sprintCollectionStore: s
                } = o, d = (0, r(533992).v3)(), u = (0, r(109939).tz)(), p = (0, r(682985).K8)(() => {
                    if (void 0 === t) return (0, l.jsx)(r(109939).sA, {
                        id: "completeAutomationSprintModal.sprintSelect.empty",
                        defaultMessage: "Select sprint"
                    });
                    if ("actionId" === t.type) return (0, l.jsx)(r(109939).sA, {
                        id: "completeAutomationSprintModal.sprintSelect.newSprint",
                        defaultMessage: "New sprint"
                    });
                    if ("pointer" === t.type) {
                        let e = r(970831).B.createChildStore(s, t.pointer);
                        return (0, r(112293).tS)({
                            intl: u,
                            environment: d,
                            store: e,
                            untitledFallback: a.fallbackSprintName
                        })
                    }(0, r(722371).HB)(t)
                }, [t, u, s, d]), m = (0, r(960253).I)(() => ({
                    button: { ...void 0 === t && {
                            color: r(632079).Tj.text.tertiary
                        }
                    }
                }), [t]), S = { ...c.dropdownButton,
                    ...m.button
                };
                return 0 === n.length || 1 === n.length ? (0, l.jsx)(r(988022).p, {
                    style: S,
                    disabled: !0,
                    children: p
                }) : (0, l.jsx)(r(656252).A, {
                    popupType: r(986939).A.isMobile ? r(656252).z.SlideUp : r(656252).z.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    content: e => (0, l.jsx)(w, {
                        buttonPopupParent: e,
                        completeSprintAutomationContext: o,
                        sprintPageIds: n,
                        nextSprintInput: t,
                        setNextSprintInput: i
                    }),
                    children: e => (0, l.jsxs)(r(988022).p, { ...e,
                        style: S,
                        children: [p, (0, l.jsx)(r(16275).I, {
                            icon: r(595453).arrowChevronSingleDownSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        })]
                    })
                })
            }
            let k = {
                recordTitle: { ...r(986939).A.isMobile && {
                        marginInlineEnd: 12
                    }
                }
            };

            function w(e) {
                let t, {
                        sprintPageIds: i,
                        completeSprintAutomationContext: n,
                        buttonPopupParent: a,
                        nextSprintInput: s,
                        setNextSprintInput: d
                    } = e,
                    {
                        sprintCollectionStore: c
                    } = n,
                    u = (0, r(682985).K8)(() => c.getSpaceId(), [c]),
                    p = (0, r(682985).K8)(() => (0, r(856235).B7)({
                        collectionStore: n.taskCollectionStore,
                        property: r(11448).yx.TaskToSprintRelation
                    }).filter(e => e.visible && ("title" === e.property || n.sprintCollectionSchema[e.property])), [n]),
                    m = (0, o.useMemo)(() => new(r(405597)).A, []),
                    S = "purple",
                    f = (0, r(632079).LD)(r(632079).Tj, S),
                    g = o.useMemo(() => {
                        let e = (null == s ? void 0 : s.type) === "actionId";
                        return {
                            key: "new_sprint",
                            action: () => {
                                d({
                                    type: "actionId"
                                }), a.close()
                            },
                            render: t => (0, l.jsx)(r(95582).A, { ...t,
                                icon: (0, l.jsx)(r(16275).I, {
                                    icon: r(581923).plusIcon
                                }),
                                title: (0, l.jsxs)(r(4458).fI, {
                                    gap: 4,
                                    children: [(0, l.jsx)(r(109939).sA, {
                                        id: "completeAutomationSprintModal.selectSprintDropdown.createNew",
                                        defaultMessage: "New sprint"
                                    }), (0, l.jsx)(r(628462).A, {
                                        isRound: !0,
                                        showRemoveButton: !1,
                                        value: (0, l.jsx)(r(109939).sA, {
                                            id: "completeAutomationSprintModal.selectSprintDropdown.createNewToken",
                                            defaultMessage: "Next"
                                        }),
                                        format: r(696654).NY.Medium,
                                        isSingle: !0,
                                        color: f.textColor,
                                        backgroundColor: f.backgroundColor,
                                        showColoredDot: S
                                    })]
                                }),
                                isChecked: e
                            })
                        }
                    }, [s, a, d, f]),
                    y = (0, r(682985).K8)(() => i.map(e => {
                        let t = {
                                id: e,
                                table: r(832375).evP,
                                spaceId: u
                            },
                            o = r(970831).B.createChildStore(c, t),
                            i = o.getIcon(),
                            n = (null == s ? void 0 : s.type) === "pointer" && r(496282).L3.isEqual(s.pointer, t);
                        return {
                            key: e,
                            action: () => {
                                d({
                                    type: "pointer",
                                    pointer: t
                                }), a.close()
                            },
                            render: e => (0, l.jsx)(r(95582).A, { ...e,
                                icon: i && (0, l.jsx)(r(569553).B6, {
                                    disabled: !0,
                                    icon: i,
                                    isEmptyPage: !1,
                                    size: 20
                                }),
                                title: (0, l.jsx)(r(4458).fI, {
                                    maxHeight: 22,
                                    alignItems: "center",
                                    children: p.map(e => "title" === e.property ? (0, l.jsx)(r(627918).A, {
                                        store: o,
                                        style: k.recordTitle
                                    }, "title") : (0, l.jsx)(r(625399).qm, {
                                        store: o,
                                        property: e.property,
                                        disabled: !1,
                                        locked: !1,
                                        surface: "relation",
                                        tableWrap: !1,
                                        blockPropertyValueOverlayStore: m,
                                        collectionStore: c
                                    }, e.property)).filter(r(722371).O9)
                                }),
                                isChecked: n
                            })
                        }
                    }), [c, m, a, s, p, u, d, i]),
                    x = o.useMemo(() => y.length > 0 ? y : [g], [y, g]);
                return t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.ActionSheet
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    minWidth: 230
                }, (0, l.jsx)(r(747369).A, { ...t,
                    children: (0, l.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "sprints",
                            items: x
                        }]
                    })
                })
            }

            function I(e) {
                let {
                    sprintDateRange: t,
                    setSprintDateRange: i
                } = e, n = (0, r(109939).tz)(), a = o.useMemo(() => h({
                    sprintDateRange: t,
                    intl: n
                }), [t, n]), s = (0, r(960253).I)(() => ({
                    button: { ...!a && {
                            color: r(632079).Tj.text.tertiary
                        }
                    }
                }), [a]), d = (0, o.useMemo)(() => a || (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintModal.sprintSummary.nextSprintDate.placeholder",
                    defaultMessage: "Select dates"
                }), [a]);
                return (0, l.jsx)(r(656252).A, {
                    popupType: r(986939).A.isMobile ? r(656252).z.SlideUp : r(656252).z.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    content: e => (0, l.jsx)(T, {
                        sprintDateRange: t,
                        setSprintDateRange: i,
                        onDismiss: () => {
                            e.close()
                        }
                    }),
                    children: e => (0, l.jsxs)(r(988022).p, { ...e,
                        style: { ...c.dropdownButton,
                            ...s.button
                        },
                        children: [d, (0, l.jsx)(r(16275).I, {
                            icon: r(595453).arrowChevronSingleDownSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        })]
                    })
                })
            }

            function T(e) {
                let t, {
                        sprintDateRange: i,
                        setSprintDateRange: n,
                        onDismiss: a
                    } = e,
                    s = o.useMemo(() => ({
                        starting: null != i && i.start_date ? {
                            type: "date",
                            start_date: i.start_date
                        } : void 0,
                        ending: null != i && i.end_date ? {
                            type: "date",
                            start_date: i.end_date
                        } : void 0
                    }), [i]);
                return t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    right: (0, l.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: a
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    paddingTop: 6
                }, (0, l.jsxs)(r(747369).A, { ...t,
                    children: [(0, l.jsx)(r(844565).A, {
                        children: (0, l.jsx)(r(102870).A, {
                            title: void 0,
                            disableMenuWrap: !0,
                            allowRelativeRangeFilter: !0,
                            value: s,
                            onUpdate: e => {
                                var t, r;
                                if (e.error) return;
                                let o = { ...s,
                                    ...e.value
                                };
                                n({
                                    type: "daterange",
                                    start_date: null == (t = o.starting) ? void 0 : t.start_date,
                                    end_date: null == (r = o.ending) ? void 0 : r.start_date
                                })
                            },
                            onDismiss: a
                        })
                    }), (0, l.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: (0, l.jsx)(r(95582).A, {
                            focused: !1,
                            onClick: () => {
                                n(void 0)
                            },
                            title: (0, l.jsx)(r(109939).sA, {
                                id: "completeAutomationSprintModal.sprintSummary.datePicker.clear",
                                defaultMessage: "Clear"
                            })
                        })
                    })]
                })
            }

            function M(e) {
                if (!e || "aggregation" !== e.type || "text" !== e.aggregationResult.type) return;
                let t = e.aggregationResult.value,
                    r = null == t ? void 0 : t.split("/");
                if (!r || 2 !== r.length) return;
                let o = Number(r[0]),
                    i = Number(r[1]);
                return {
                    completedTaskCount: o,
                    incompleteTaskCount: i - o,
                    totalTaskCount: i,
                    completedTaskPercent: 0 === i ? 0 : o / i
                }
            }

            function F(e) {
                if (!e) return;
                let t = e.getPropertyMapping(),
                    o = null == t ? void 0 : t[r(11448).yx.TaskToSprintRelation];
                if (o) return r(355940).jj.filter.property = o, { ...r(355940).jj.filter,
                    property: o
                }
            }

            function B(e, t) {
                if (!t) return;
                let o = t.getPropertyMapping(),
                    i = F(t);
                if (!i) return;
                let n = null == o ? void 0 : o[r(11448).yx.Status];
                if (!n) return;
                let l = t.getSchema()[n];
                if (!l || "status" !== l.type) return;
                let a = (0, r(308292).Q6)(e, l);
                if (a) return {
                    type: "aggregation",
                    filter: {
                        operator: "and",
                        filters: [i]
                    },
                    aggregation: {
                        aggregator: {
                            operator: "count_per_group",
                            groupName: a
                        },
                        property: n
                    }
                }
            }
            r(672577);
            class V extends n().Store {
                getInitialState() {
                    return {
                        isLoading: !0,
                        currentSprintId: void 0,
                        querySprintsResult: void 0,
                        currentSprintTaskSummary: void 0
                    }
                }
                updateCurrentSprint(e) {
                    let {
                        querySprintsResult: t,
                        currentSprintTaskSummary: r
                    } = this.state;
                    void 0 !== e && void 0 !== t && void 0 !== r ? this.setState({
                        isLoading: !1,
                        currentSprintId: e,
                        querySprintsResult: t,
                        currentSprintTaskSummary: r
                    }) : e ? this.setState({ ...this.state,
                        currentSprintId: e
                    }) : this.setState({ ...this.state,
                        isLoading: !0,
                        currentSprintId: e
                    })
                }
                updateNextAndFutureSprints(e) {
                    let {
                        currentSprintId: t,
                        currentSprintTaskSummary: r
                    } = this.state;
                    void 0 !== t && void 0 !== e && void 0 !== r ? this.setState({
                        isLoading: !1,
                        currentSprintId: t,
                        querySprintsResult: e,
                        currentSprintTaskSummary: r
                    }) : e ? this.setState({ ...this.state,
                        querySprintsResult: e
                    }) : this.setState({ ...this.state,
                        isLoading: !0,
                        querySprintsResult: e
                    })
                }
                updateCurrentSprintTaskSummary(e) {
                    let {
                        currentSprintId: t,
                        querySprintsResult: r
                    } = this.state;
                    void 0 !== t && void 0 !== r && void 0 !== e ? this.setState({
                        isLoading: !1,
                        currentSprintId: t,
                        querySprintsResult: r,
                        currentSprintTaskSummary: e
                    }) : e ? this.setState({ ...this.state,
                        currentSprintTaskSummary: e
                    }) : this.setState({ ...this.state,
                        isLoading: !0,
                        currentSprintTaskSummary: e
                    })
                }
            }

            function P(e) {
                let {
                    taskCollectionContextStore: t,
                    completeSprintAutomationContext: i,
                    children: n,
                    isModalOpen: a
                } = e, {
                    sprintCollectionStore: s
                } = i, d = s.id, c = (0, r(533992).v3)(), u = (0, o.useMemo)(() => new V, []), p = (0, r(682985).O$)(u), m = (0, r(682985).K8)(() => {
                    var e;
                    let r = t.relativeVariableStore.state;
                    return null == r || null == (e = r[d]) ? void 0 : e.current
                }, [d, t]);
                o.useEffect(() => {
                    u.updateCurrentSprint(m)
                }, [m, u]);
                let [{
                    value: S
                }] = (0, r(97668).Yb)(async () => await R({
                    environment: c,
                    completeSprintAutomationContext: i
                }), [m, c, i]);
                o.useEffect(() => {
                    u.updateNextAndFutureSprints(S)
                }, [S, u]);
                let f = (0, r(109939).tz)(),
                    [{
                        value: g
                    }] = (0, r(97668).Yb)(async () => await D({
                        intl: f,
                        environment: c,
                        completeSprintAutomationContext: i
                    }), [m, c, i, a]);
                return o.useEffect(() => {
                    u.updateCurrentSprintTaskSummary(g)
                }, [g, u]), (0, l.jsx)(l.Fragment, {
                    children: n({
                        completeSprintAutomationState: p,
                        onAutomationComplete: () => {
                            u.reset()
                        }
                    })
                })
            }
            async function D(e) {
                var t;
                let {
                    environment: o,
                    completeSprintAutomationContext: i,
                    intl: n
                } = e, {
                    taskCollectionStore: l
                } = i, a = B(n, l);
                if (!a) return;
                let s = F(l);
                if (!s) return;
                let d = {
                        filter: {
                            operator: "and",
                            filters: [s]
                        },
                        userId: o.currentUser.id,
                        userTimeZone: (0, r(714350).P)(),
                        searchQuery: "",
                        sort: [],
                        reducers: {
                            completed_tasks_in_current_sprint: a
                        }
                    },
                    c = null == (t = l.getParentBlockStore()) ? void 0 : t.getCollectionViewStores()[0],
                    u = l.getSpaceId();
                if (!c) return;
                let p = await o.api.callApi({
                    eventName: "queryCollection",
                    environment: o,
                    data: {
                        clientType: "notion_app",
                        source: {
                            type: "collection",
                            id: l.id,
                            spaceId: u
                        },
                        collectionView: {
                            id: c.id,
                            spaceId: u
                        },
                        loader: d
                    },
                    tracking: {
                        src: "complete_sprint_modal_sprint_picker"
                    }
                });
                if ("success" === p.type) return M(p.data.result.reducerResults.completed_tasks_in_current_sprint)
            }
            async function R(e) {
                var t;
                let {
                    environment: o,
                    completeSprintAutomationContext: i
                } = e, {
                    sprintCollectionStore: n
                } = i, l = function(e) {
                    var t, o;
                    let {
                        sprintCollectionStore: i,
                        sprintCollectionSchema: n
                    } = e, l = i.getPropertyMapping(), a = null == l ? void 0 : l[r(11448).Hx.StatusV2];
                    if (!a) return;
                    let s = n[a];
                    if (!s || "status" !== s.type) return;
                    let d = null == (t = s.options) || null == (t = t.find(e => e.id === r(11448).tO)) ? void 0 : t.value,
                        c = null == (o = s.options) || null == (o = o.find(e => e.id === r(11448).Jd)) ? void 0 : o.value;
                    if (!d || !c) return;
                    let u = r(613211).n$[r(11448).av].next.reducer.getCombinatorFilter(n);
                    if (!u) return;
                    let p = {
                        type: "results",
                        filter: {
                            operator: "and",
                            filters: [{
                                property: a,
                                filter: {
                                    operator: "status_is",
                                    value: {
                                        type: "is_option",
                                        value: c
                                    }
                                }
                            }]
                        },
                        limit: 5
                    };
                    return {
                        [r(11448).tO]: {
                            type: "results",
                            filter: u,
                            limit: 5
                        },
                        [r(11448).Jd]: p
                    }
                }(i), a = n.getPropertyMapping(), s = null == a ? void 0 : a[r(11448).Hx.Dates], d = null == a ? void 0 : a[r(11448).Hx.UniqueId];
                if (!l || !s || !d) return;
                let c = {
                        userId: o.currentUser.id,
                        userTimeZone: (0, r(714350).P)(),
                        searchQuery: void 0,
                        sort: [{
                            property: s,
                            direction: "ascending"
                        }, {
                            property: d,
                            direction: "ascending"
                        }],
                        reducers: l
                    },
                    u = null == (t = n.getParentBlockStore()) ? void 0 : t.getCollectionViewStores()[0],
                    p = n.getSpaceId();
                if (!u) return;
                let m = await o.api.callApi({
                    eventName: "queryCollection",
                    environment: o,
                    data: {
                        clientType: "notion_app",
                        source: {
                            type: "collection",
                            id: n.id,
                            spaceId: p
                        },
                        collectionView: {
                            id: u.id,
                            spaceId: p
                        },
                        loader: c
                    },
                    tracking: {
                        src: "complete_sprint_modal_sprint_picker"
                    }
                });
                if ("success" !== m.type) return;
                let S = m.data.result.reducerResults[r(11448).tO],
                    f = m.data.result.reducerResults[r(11448).Jd];
                if ("results" === S.type && "results" === f.type) return {
                    nextSprintIds: S.blockIds,
                    futureSprintIds: f.blockIds
                }
            }

            function O(e) {
                let {
                    percentage: t
                } = e;
                return (0, l.jsx)(r(578083).l, {
                    numberValue: t,
                    numberFormat: void 0,
                    numberPrecision: void 0,
                    numberShowAs: {
                        type: "ring",
                        maxValue: 1,
                        color: "blue",
                        showValue: !1
                    },
                    shouldRenderTooltip: !1,
                    progressSize: 15
                })
            }
            let z = {
                    width: 16,
                    height: "auto"
                },
                K = function(e) {
                    let {
                        isLoading: t,
                        taskSummary: o,
                        styles: i
                    } = e;
                    return (0, l.jsx)("div", {
                        style: { ...z,
                            ...i
                        },
                        children: t ? (0, l.jsx)(r(517334).k, {}) : (0, l.jsx)(O, {
                            percentage: (null == o ? void 0 : o.completedTaskPercent) ? ? 0
                        })
                    })
                };

            function L(e) {
                let {
                    taskCollectionContextStore: t,
                    children: o
                } = e, i = (0, r(682985).K8)(() => (0, r(951390).y_)(t), [t]), n = (0, r(682985).K8)(() => t.collectionStore(), [t]), a = (0, r(109939).tz)(), s = (0, r(682985).K8)(() => B(a, n), [n, a]);
                return !s || i ? null : (0, l.jsx)(r(505019).A, {
                    id: "completed_tasks_in_current_sprint_view",
                    collectionContextStore: t,
                    reducer: s,
                    render: e => {
                        let t = M(e.state);
                        return t ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(U, {
                                currentSprintTasksInView: t
                            }), o(t)]
                        }) : null
                    }
                })
            }
            let N = {
                summary: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: 5,
                    color: r(632079).Tj.text.tertiary,
                    fontSize: r(699422).J.UIRegular.desktop,
                    fontWeight: r(699422).Wy.regular,
                    whiteSpace: "nowrap"
                }
            };

            function U(e) {
                let {
                    currentSprintTasksInView: t
                } = e, {
                    isPhone: o
                } = (0, r(533992).Y0)();
                return o ? null : (0, l.jsxs)("div", {
                    style: N.summary,
                    children: [(0, l.jsx)(K, {
                        styles: {
                            paddingTop: 1
                        },
                        isLoading: !1,
                        taskSummary: t
                    }), (0, l.jsx)(r(109939).sA, {
                        id: "completeAutomationSprintAutomation.inlineSummary.completedPercentSummary",
                        defaultMessage: "{completedTaskCount} / {totalTaskCount} tasks",
                        values: {
                            completedTaskCount: t.completedTaskCount,
                            totalTaskCount: t.totalTaskCount
                        }
                    })]
                })
            }

            function E(e) {
                let {
                    collectionContextStore: t,
                    completeSprintAutomationContext: n
                } = e, a = (0, r(533992).v3)(), [s, d] = o.useState(!1), [c, p] = o.useState(!1), m = o.useCallback(() => {
                    p(!1)
                }, [p]), S = n.permissionsContext.canEdit, f = (0, r(682985).O$)(r(728372).AppStoreCurrentUserSettingsStore), g = () => {
                    p(!0), "complete-sprint-button-tooltip" === (0, r(752153).gt)(f, "sprints-onboarding") && r(128817).tutorialGoToNextStep(a, "sprints-onboarding"), i(a, { ...(0, r(752242).sl)(t),
                        action: "open_modal"
                    })
                };
                return S ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(P, {
                        completeSprintAutomationContext: n,
                        taskCollectionContextStore: t,
                        isModalOpen: c,
                        children: ({
                            completeSprintAutomationState: e,
                            onAutomationComplete: r
                        }) => (0, l.jsx)(u, {
                            completeSprintAutomationContext: n,
                            isOpen: c,
                            onDismiss: m,
                            setIsLoading: d,
                            taskCollectionContextStore: t,
                            completeSprintAutomationState: e,
                            onAutomationComplete: r
                        })
                    }), (0, l.jsx)(L, {
                        taskCollectionContextStore: t,
                        children: () => (0, l.jsx)(W, {
                            taskCollectionContextStore: t,
                            onClick: g,
                            isLoading: s
                        })
                    })]
                }) : null
            }

            function W(e) {
                let {
                    taskCollectionContextStore: t,
                    onClick: i,
                    isLoading: n
                } = e, {
                    isPhone: a
                } = (0, r(533992).Y0)(), s = o.useRef(null), d = function(e) {
                    let {
                        isPhone: t
                    } = e;
                    return (0, r(960253).I)(() => ({
                        button: {
                            height: 26,
                            marginInlineStart: 8,
                            fontWeight: r(699422).Wy.medium,
                            ...t && {
                                flexGrow: 1,
                                borderRadius: 8,
                                height: 44
                            }
                        }
                    }), [t])
                }({
                    isPhone: a
                }), c = (0, r(682985).K8)(() => t.collectionViewBlockStore(), [t]), u = (0, r(723240).r)(), p = (0, r(682985).K8)(() => null == c ? void 0 : c.getSpaceId(), [c]);
                return c ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r(548436).A, {
                        size: "lg",
                        ref: s,
                        onClick: i,
                        style: d.button,
                        disabled: n,
                        disabledFeedback: n,
                        children: (0, l.jsx)(r(109939).sA, {
                            defaultMessage: "Complete sprint",
                            id: "completeSprintAutomationButton.label"
                        })
                    }), p === u ? (0, l.jsx)(r(411323).rY, {
                        origin: s
                    }) : void 0]
                }) : (0, l.jsx)(l.Fragment, {})
            }
            let H = {
                summary: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginInlineStart: 17,
                    columnGap: 5,
                    color: r(632079).Tj.text.tertiary,
                    fontSize: r(699422).J.UIRegular.desktop,
                    fontWeight: r(699422).Wy.regular,
                    whiteSpace: "nowrap"
                },
                icon: {
                    height: "auto",
                    paddingTop: 2
                }
            };

            function G(e) {
                var t;
                let {
                    collectionContextStore: o,
                    sprintAutomationContext: i
                } = e, {
                    isPhone: n
                } = (0, r(533992).Y0)(), a = (0, r(682985).K8)(() => {
                    var e;
                    let t = null == (e = i.automationContext) ? void 0 : e.automationStore.getRunAt();
                    if (!t) return;
                    let o = r(906745).DateTime.fromMillis(t, {
                            zone: "utc"
                        }).toLocal().startOf("day"),
                        n = r(906745).DateTime.now().startOf("day"),
                        l = o.diff(n, "days").days;
                    return l < 1 ? "soon" : 1 === l ? "today" : 2 === l ? "tomorrow" : l - 1
                }, [null == (t = i.automationContext) ? void 0 : t.automationStore]);
                return a ? (0, l.jsx)(L, {
                    taskCollectionContextStore: o,
                    children: () => n ? null : (0, l.jsxs)("div", {
                        style: H.summary,
                        children: [(0, l.jsx)(r(16275).I, {
                            icon: r(934080).J,
                            size: "sm",
                            style: H.icon
                        }), (0, l.jsx)(J, {
                            daysRemaining: a
                        })]
                    })
                }) : null
            }

            function J(e) {
                let {
                    daysRemaining: t
                } = e;
                return "soon" === t ? (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintAutomation.inlineSummary.endingSoon",
                    defaultMessage: "Ending soon"
                }) : "today" === t ? (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintAutomation.inlineSummary.endsToday",
                    defaultMessage: "Ends today"
                }) : "tomorrow" === t ? (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintAutomation.inlineSummary.endsTomorrow",
                    defaultMessage: "Ends tomorrow"
                }) : (0, l.jsx)(r(109939).sA, {
                    id: "completeAutomationSprintAutomation.inlineSummary.daysRemaining",
                    defaultMessage: "Ends in {daysRemaining} days",
                    values: {
                        daysRemaining: t
                    }
                })
            }
            let $ = function(e) {
                var t;
                let {
                    collectionContextStore: o
                } = e, i = (0, r(682985).K8)(() => o.completeSprintButtonContextStore.state, [o]), n = (0, r(682985).K8)(() => {
                    var e;
                    return !!(null == i || null == (e = i.automationContext) ? void 0 : e.automationStore.isActive())
                }, [null == i || null == (t = i.automationContext) ? void 0 : t.automationStore]);
                return i ? n ? (0, l.jsx)(G, {
                    collectionContextStore: o,
                    sprintAutomationContext: i
                }) : (0, l.jsx)(E, {
                    collectionContextStore: o,
                    completeSprintAutomationContext: i
                }) : null
            }
        },
        921048: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => o,
                magnifyingGlassSmallIcon: () => i
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                i = (0, r(104509).wt)("magnifyingGlassSmall", o, "small")
        },
        941414: (e, t, r) => {
            r.d(t, {
                l: () => n
            }), r(898992), r(803949);
            var o = r(296540),
                i = r(474848);

            function n({
                collectionContextStore: e,
                collectionSettingsStore: t
            }) {
                let l = (0, r(533992).v3)(),
                    [s, d] = (0, r(682985).K8)(() => [t.state.open, e.currentCombinatorFilterStore.state], [e, t]),
                    c = (0, o.useCallback)(() => (0, i.jsx)(r(23889).m$, {
                        context: r(368538).B.FilterBar,
                        collectionContextStore: e,
                        collectionSettingsStore: t,
                        hideDesktopHeader: !0
                    }), [e, t]),
                    u = (0, o.useCallback)(o => {
                        var i;
                        !(o && (0, r(444306).Rp)(o.target)) && ((0, r(72762).o)({
                            collectionSettingsStore: t
                        }), d && (null == (i = d.filters) ? void 0 : i.length) === 0 && r(16088).IU({
                            environment: l,
                            collectionContextStore: e,
                            temporaryState: { ...e.temporaryStateStore.state,
                                combinatorFilter: {
                                    value: void 0
                                }
                            }
                        }))
                    }, [e, t, l, d]);
                return (0, o.useEffect)(() => () => (0, r(72762).o)({
                    collectionSettingsStore: t
                }), []), (0, i.jsx)(r(182718).zD, {
                    popupType: r(986939).A.isMobile ? r(423291).n.SlideUp : r(423291).n.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    open: s,
                    onDismiss: u,
                    disableMouseCapture: !0,
                    enableOutsideClickDismiss: !0,
                    originGap: 4,
                    content: c,
                    children: (0, i.jsx)(a, {
                        collectionContextStore: e,
                        collectionSettingsStore: t
                    })
                })
            }
            let l = {
                title: {
                    maxWidth: 180,
                    ...r(699422).RC
                }
            };

            function a({
                collectionContextStore: e,
                collectionSettingsStore: t
            }) {
                var n;
                let s = (0, r(533992).v3)(),
                    [d, c] = (0, r(682985).K8)(() => [!!(0, r(951390).Ml)(e, "normalized").combinatorFilter, e.currentCombinatorFilterStore.state], [e]),
                    u = (0, o.useCallback)(() => {
                        c && (e.currentPropertyFiltersStore.state.forEach(t => {
                            let o = e.getFilterOptionsItemSettingsStore(t);
                            (0, r(72762).o)({
                                collectionSettingsStore: o
                            })
                        }), (0, r(132425).R)({
                            collectionSettingsStore: t,
                            item: {
                                type: "filter"
                            }
                        }), (0, r(893783).X)({
                            environment: s,
                            collectionContextStore: e,
                            action: "click_combinator_filter"
                        }))
                    }, [e, t, s, c]);
                return c ? (0, i.jsx)(r(97726).n, {
                    icon: (0, i.jsx)(r(16275).I, {
                        icon: r(103499).filterSmallIcon,
                        size: "sm",
                        colorPalette: "blue",
                        colorVariant: "accentPrimary",
                        fitToViewBox: "horizontal"
                    }),
                    title: (0, i.jsx)("span", {
                        style: l.title,
                        children: (0, i.jsx)(r(109939).sA, {
                            defaultMessage: "{ruleCount, plural, one {{ruleCount} rule} other {{ruleCount} rules}}",
                            id: "database.filterBar.advancedFilterRulesCount.title",
                            values: {
                                ruleCount: (null == (n = c.filters) ? void 0 : n.length) || 0
                            }
                        })
                    }),
                    on: !0,
                    hasDiff: d,
                    onClick: u
                }, "combinator") : null
            }
        },
        951390: (e, t, r) => {
            function o(e, t, o) {
                var i, n, l, a;
                let s, d, c = e.collectionViewStore();
                if (!c) return {
                    combinatorFilter: void 0,
                    filters: {
                        moveOps: [],
                        removed: [],
                        updated: [],
                        moved: [],
                        added: []
                    },
                    sorts: void 0
                };
                let u = !e.getIsInDashboardBuildMode() || !!(null == o ? void 0 : o.forceUseTemporaryStateInBuildMode),
                    p = "persisted" === t ? c.getQueryStore().getKeyStore("sort").getValue() || [] : (null == (i = e.normalizedQueryStore.state) ? void 0 : i.sort) || [],
                    m = e.getCurrentSortsValue(!u),
                    S = "persisted" === t ? c.getQueryStore().getKeyStore("filter").getValue() : null == (n = e.normalizedQueryStore.state) ? void 0 : n.filter,
                    f = e.getCurrentCombinatorFilterValue(!u),
                    g = "persisted" === t ? (null == (l = c.getPropertyFiltersStore().getValue()) ? void 0 : l.sort((0, r(655135).I)())) || [] : (s = (a = e).normalizedSchemaStore.state, d = a.normalizedFormatStore.state.property_filters || [], r(381453).oE(d.filter(e => {
                        let t = (0, r(9658).hs)(e.filter, s),
                            o = a.collectionViewBlockStore();
                        if (s[e.filter.property] && t && (0, r(400473).tn)(s, e.filter.property, t.filter, null == o ? void 0 : o.getRecordModel)) return t && {
                            id: e.id,
                            filter: t
                        }
                    }).sort((0, r(655135).I)()))),
                    y = e.getCurrentPropertyFiltersValue(!u),
                    x = "dashboard" === c.getType(),
                    v = x ? "persisted" === t ? c.getFormatStore().getKeyStore("dashboard_global_filters").getValue() : e.normalizedFormatStore.state.dashboard_global_filters : void 0,
                    h = x ? e.getCurrentDashboardGlobalFiltersValue(!u) : void 0,
                    b = g.map(e => e.id),
                    C = y.map(e => e.id),
                    {
                        beforeOps: j,
                        removeOps: _
                    } = (0, r(219083).i)(b, C),
                    A = Array.from(_).filter(e => !C.includes(e)),
                    k = Object.keys(j).map(e => ({
                        id: e,
                        beforeId: j[e]
                    })),
                    w = k.filter(({
                        id: e
                    }) => b.includes(e)).map(({
                        id: e
                    }) => e),
                    I = k.filter(({
                        id: e
                    }) => !b.includes(e)).map(({
                        id: e
                    }) => e),
                    T = y.filter(e => g.find(t => {
                        if (e.id !== t.id) return !1;
                        let o = r(381453).mg(t),
                            i = r(381453).mg(e);
                        return !r(381453).n4((0, r(799150).A)(i, "ignore-class-instances"), (0, r(799150).A)(o, "ignore-class-instances"))
                    })).map(e => e.id);
                return {
                    combinatorFilter: r(381453).n4(S, f) ? void 0 : {
                        value: f
                    },
                    filters: {
                        moveOps: k,
                        removed: A,
                        updated: T,
                        moved: w,
                        added: I
                    },
                    sorts: r(381453).n4(p, m) ? void 0 : {
                        value: m
                    },
                    dashboardGlobalFilters: function({
                        sourceDashboardGlobalFilters: e,
                        localDashboardGlobalFilters: t
                    }) {
                        let o = (null == e ? void 0 : e.filter(e => e.targets && e.targets.length > 0)) ? ? [],
                            i = (null == t ? void 0 : t.filter(e => e.targets && e.targets.length > 0)) ? ? [];
                        return r(381453).n4(o, i) ? void 0 : {
                            value: i
                        }
                    }({
                        sourceDashboardGlobalFilters: v,
                        localDashboardGlobalFilters: h
                    })
                }
            }

            function i(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = o(e, "normalized");
                return !!(t.filters.moved.length > 0 || t.filters.added.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.sorts || void 0 !== t.dashboardGlobalFilters)
            }

            function n(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = o(e, "normalized");
                return !!(t.filters.moved.length > 0 || t.filters.added.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.dashboardGlobalFilters)
            }

            function l(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = o(e, "normalized"),
                    i = e.currentPropertyFiltersStore.state.filter(e => !(0, r(400473).t_)(e.filter));
                return !!(t.filters.added.some(e => i.some(t => t.id === e)) || t.filters.moved.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.dashboardGlobalFilters)
            }

            function a(e) {
                return !e.getIsInDashboardBuildMode() && void 0 !== o(e, "normalized").sorts
            }
            r.d(t, {
                I6: () => n,
                Ml: () => o,
                gv: () => a,
                y_: () => i,
                ye: () => l
            }), r(898992), r(354520), r(672577), r(581454), r(737550)
        },
        992351: (e, t, r) => {
            r.d(t, {
                B: () => l
            });
            var o = r(296540);
            let i = new Map;
            var n = r(474848);

            function l({
                tutorialId: e,
                tutorialStepId: t,
                onPrimaryButtonClick: a,
                displayStore: s,
                calloutId: d,
                enableTracking: c = !1,
                ...u
            }) {
                var p;
                let m, S, f = (0, r(533992).v3)(),
                    g = (p = `${e}.${t}`, m = !i.get(p), (S = (0, o.useRef)(m)).current && i.set(p, !0), (0, o.useEffect)(() => () => {
                        S.current && i.set(p, !1)
                    }, [p]), S.current),
                    y = (0, r(718012).V)(),
                    {
                        currentStep: x,
                        isLoading: v
                    } = (0, r(682985).K8)(() => {
                        var t;
                        return {
                            isLoading: !(null != (t = r(728372).AppStoreCurrentUserSettingsStore.state) && t.getSettings()),
                            currentStep: (0, r(752153).gt)(r(728372).AppStoreCurrentUserSettingsStore.state, e)
                        }
                    }, [e]);
                if ((0, o.useEffect)(() => {
                        v || x !== t || !g ? null == s || s.setState(!1) : null == s || s.setState(!0)
                    }, [v, x, t, g, s]), v || x !== t || !g) return null;
                let h = r(212169).c$[e],
                    b = h.steps.findIndex(e => e.id === t),
                    C = h.steps.length,
                    j = o => {
                        c && (0, r(104310).u)({
                            event: {
                                eventName: "tutorial_tooltip_action",
                                eventProperties: {
                                    step: b + 1,
                                    total_steps: C,
                                    tutorial_id: e,
                                    tutorial_step_id: t,
                                    action_type: o
                                }
                            }
                        })
                    },
                    _ = (0, n.jsx)(r(788139).k, {
                        onCloseClick: () => {
                            r(128817).dismissTutorial(f, e), j("dismiss")
                        },
                        onPrimaryButtonClick: t => {
                            r(128817).tutorialGoToNextStep(f, e), null == a || a(t), j("next")
                        },
                        onBackButtonClick: () => {
                            r(128817).tutorialGoToPrevStep(f, e), j("back")
                        },
                        numSteps: C,
                        currStepIndex: b,
                        ...u
                    });
                return d ? (0, n.jsx)(r(397732).B, {
                    calloutId: d,
                    shouldShow: !0,
                    inAppCalloutStore: y,
                    children: _
                }) : _
            }
        }
    }
]);