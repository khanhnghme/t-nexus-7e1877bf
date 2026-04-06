"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [9817], {
        109817: (e, t, o) => {
            o.d(t, {
                tY: () => d,
                tv: () => c,
                G$: () => s
            }), o(944114), o(898992), o(354520), o(430670), o(581454);
            var l = o(296540),
                r = () => o(510969),
                n = o(474848);
            let i = (0, o(109939).YK)({
                operatorPlaceholder: {
                    defaultMessage: "Operator",
                    id: "database.filterMenu.operatorPlaceholder"
                }
            });

            function a(e) {
                let {
                    filterOperator: t,
                    onChange: l,
                    disableMargins: r
                } = e, a = (0, o(109939).tz)(), s = {
                    width: "auto",
                    menuTitle: a.formatMessage({
                        defaultMessage: "Operator",
                        id: "database.filterMenu.filterOperatorMenu.title"
                    }),
                    items: o(400473).Ak,
                    getKey: e => e,
                    selectedItem: t,
                    onSelect: l,
                    renderItem: e => (0, n.jsx)(o(95582).A, {
                        title: (0, o(323700).Az)(e.value, a),
                        caption: (0, o(323700).YL)(e.value, a),
                        ...e
                    }),
                    children: e => (0, n.jsx)(o(332082).A, { ...e,
                        title: t && (0, o(323700).Az)(t, a),
                        placeholder: a.formatMessage(i.operatorPlaceholder),
                        disableMargins: r
                    })
                };
                return (0, n.jsx)(o(691509).A, { ...s,
                    menuTypeOverride: (0, o(649476).PK)()
                }, "operator")
            }
            let s = 170,
                c = 400;

            function d(e) {
                let {
                    combinatorFilter: t,
                    index: r,
                    level: i,
                    schema: a,
                    onChange: s,
                    parentStore: c,
                    collectionContextStore: d,
                    collectionViewType: p,
                    collectionViewId: x
                } = e, f = (0, l.useRef)([]), h = (t.filters ? ? []).flatMap(e => (0, o(400473).LB)(e) ? [] : [e]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [I(t, i) ? void 0 : (0, n.jsx)("div", {
                        style: o(986939).A.isMobile ? void 0 : {
                            display: "grid",
                            gridTemplateColumns: `
             [boolean-start] 60px
             [boolean-end property-start] minmax(min-content, 120px)
             [property-end operator-start] 110px
             [operator-end value-start] auto
             [value-end menu-start] ${o(121795).sw}px
             [menu-end]
        `,
                            gridAutoRows: `minmax(${o(121795).sw}px, auto)`,
                            gridColumnGap: o(121795).NS,
                            gridRowGap: o(121795).Z3,
                            padding: `${o(121795).Z3}px ${o(121795).NS}px 0 ${o(121795).NS}px`,
                            justifyItems: "stretch",
                            alignItems: "start"
                        },
                        children: h.map((o, l) => (0, n.jsx)(u, {
                            childFilter: o,
                            newIndex: l,
                            schema: a,
                            level: i,
                            combinatorFilter: t,
                            onChange: s,
                            index: e.index,
                            collectionContextStore: d,
                            collectionViewType: p,
                            buttonPopupStores: f.current,
                            parentStore: c,
                            collectionViewId: x
                        }, l))
                    }), (0, n.jsx)(y, {
                        schema: a,
                        level: i,
                        combinatorFilter: t,
                        onChange: s,
                        index: r,
                        buttonPopupStores: f.current,
                        collectionContextStore: d,
                        collectionViewType: p
                    })]
                })
            }

            function u(e) {
                let {
                    childFilter: t,
                    newIndex: l,
                    ...r
                } = e;
                return (0, o(400473).dU)(t) ? o(986939).A.isMobile ? (0, n.jsx)(g, {
                    childFilter: t,
                    newIndex: l,
                    ...r
                }) : (0, n.jsx)(h, {
                    childFilter: t,
                    newIndex: l,
                    ...r
                }) : (0, o(400473).yX)(t) ? o(986939).A.isMobile ? (0, n.jsx)(x, {
                    childFilter: t,
                    newIndex: l,
                    ...r
                }) : (0, n.jsx)(p, {
                    childFilter: t,
                    newIndex: l,
                    ...r
                }) : null
            }

            function p(e) {
                let {
                    newIndex: t,
                    childFilter: r
                } = e;
                return (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsx)(o(416724).A, {
                        index: t,
                        propertyFilter: r,
                        schema: e.schema,
                        filterOperator: (0, n.jsx)(O, {
                            combinatorFilter: e.combinatorFilter,
                            onChange: e.onChange,
                            index: e.index,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            newIndex: t
                        }),
                        parentStore: e.parentStore,
                        onChange: (t, o) => k(t, o, e.combinatorFilter, e.onChange, e.index),
                        collectionContextStore: e.collectionContextStore,
                        collectionViewType: e.collectionViewType,
                        collectionViewId: e.collectionViewId
                    }, t), (0, n.jsx)(j, {
                        filter: r,
                        indexToChange: t,
                        level: e.level,
                        combinatorFilter: e.combinatorFilter,
                        onChange: e.onChange,
                        index: e.index,
                        collectionContextStore: e.collectionContextStore,
                        collectionViewType: e.collectionViewType,
                        buttonPopupStores: e.buttonPopupStores
                    })]
                }, t)
            }

            function x(e) {
                let {
                    childFilter: t,
                    newIndex: r
                } = e;
                return (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsx)(O, {
                        combinatorFilter: e.combinatorFilter,
                        onChange: e.onChange,
                        index: e.index,
                        collectionContextStore: e.collectionContextStore,
                        collectionViewType: e.collectionViewType,
                        newIndex: r
                    }), (0, n.jsxs)(o(844565).A, {
                        title: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Filter {index}",
                            id: "database.filterMenu.filterIndex",
                            values: {
                                index: r + 1
                            }
                        }),
                        children: [(0, n.jsx)(o(416724).A, {
                            index: r,
                            propertyFilter: t,
                            schema: e.schema,
                            filterOperator: null,
                            parentStore: e.parentStore,
                            onChange: (t, o) => k(t, o, e.combinatorFilter, e.onChange, e.index),
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            collectionViewId: e.collectionViewId
                        }, r), (0, n.jsx)(j, {
                            filter: t,
                            indexToChange: r,
                            level: e.level,
                            combinatorFilter: e.combinatorFilter,
                            onChange: e.onChange,
                            index: e.index,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            buttonPopupStores: e.buttonPopupStores
                        })]
                    })]
                }, r)
            }
            let f = {
                wrapperStyles: {
                    gridColumn: "property-start / value-end",
                    ...{
                        background: o(632079).Tj.background.secondaryTranslucent,
                        borderRadius: 6,
                        boxShadow: `0 0 0 1px ${o(632079).Tj.border.secondaryTranslucent}`,
                        margin: 1,
                        alignSelf: "stretch"
                    }
                }
            };

            function h(e) {
                let {
                    newIndex: t,
                    childFilter: o
                } = e;
                return (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsx)(O, {
                        combinatorFilter: e.combinatorFilter,
                        onChange: e.onChange,
                        index: e.index,
                        collectionContextStore: e.collectionContextStore,
                        collectionViewType: e.collectionViewType,
                        newIndex: t
                    }), (0, n.jsx)("div", {
                        style: f.wrapperStyles,
                        children: (0, n.jsx)(d, {
                            index: t,
                            level: e.level + 1,
                            combinatorFilter: o,
                            onChange: (t, o) => k(t, o, e.combinatorFilter, e.onChange, e.index),
                            parentStore: e.parentStore,
                            schema: e.schema,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            collectionViewId: e.collectionViewId
                        })
                    }), (0, n.jsx)(j, {
                        filter: o,
                        indexToChange: t,
                        level: e.level,
                        combinatorFilter: e.combinatorFilter,
                        onChange: e.onChange,
                        index: e.index,
                        collectionContextStore: e.collectionContextStore,
                        collectionViewType: e.collectionViewType,
                        buttonPopupStores: e.buttonPopupStores
                    })]
                }, t)
            }

            function g(e) {
                let {
                    childFilter: t,
                    newIndex: r
                } = e, i = (t.filters || []).length, a = (0, n.jsx)(o(109939).sA, {
                    defaultMessage: "Filter Group {index}",
                    id: "database.filterMenu.filterGroupIndex",
                    values: {
                        index: r + 1
                    }
                });
                return (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsx)(O, {
                        combinatorFilter: e.combinatorFilter,
                        onChange: e.onChange,
                        index: e.index,
                        collectionContextStore: e.collectionContextStore,
                        collectionViewType: e.collectionViewType,
                        newIndex: r
                    }), (0, n.jsxs)(o(844565).A, {
                        title: a,
                        children: [(0, n.jsx)(o(656252).A, {
                            buttonPopupStore: M(r, e.buttonPopupStores),
                            popupType: o(656252).z.SlideUp,
                            content: l => (0, n.jsx)(o(747369).A, {
                                menuType: o(649476).gu.Modal,
                                title: a,
                                left: (0, n.jsx)(o(109939).sA, { ...o(789722).W.back
                                }),
                                onClickLeft: l.close,
                                children: (0, n.jsx)(d, {
                                    index: r,
                                    level: e.level + 1,
                                    combinatorFilter: t,
                                    onChange: (t, o) => k(t, o, e.combinatorFilter, e.onChange, e.index),
                                    parentStore: e.parentStore,
                                    schema: e.schema,
                                    collectionContextStore: e.collectionContextStore,
                                    collectionViewType: e.collectionViewType,
                                    collectionViewId: e.collectionViewId
                                })
                            }),
                            children: l => (0, n.jsx)(o(95582).A, {
                                focused: !1,
                                ...l,
                                showExtensionArrow: !0,
                                right: i.toString(),
                                title: (0, o(323700).Dz)({
                                    filter: t,
                                    schema: e.schema
                                })
                            })
                        }), (0, n.jsx)(j, {
                            filter: t,
                            indexToChange: r,
                            level: e.level,
                            combinatorFilter: e.combinatorFilter,
                            onChange: e.onChange,
                            index: e.index,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            buttonPopupStores: e.buttonPopupStores
                        })]
                    })]
                }, r)
            }
            let m = {
                height: 32
            };

            function y(e) {
                let t = (0, o(533992).v3)(),
                    {
                        schema: l,
                        level: r,
                        combinatorFilter: i,
                        onChange: a,
                        index: s,
                        buttonPopupStores: c,
                        collectionContextStore: d,
                        collectionViewType: u
                    } = e;
                return o(986939).A.isMobile ? (0, n.jsxs)(o(844565).A, {
                    topBorder: I(i, r),
                    children: [(0, n.jsx)(_, {
                        props: {
                            onClick: () => R(t, l, i, a, s, d, u)
                        }
                    }), e.level < 2 ? (0, n.jsx)(P, {
                        props: {
                            onClick: () => b(t, l, i, a, s, d, u, c)
                        }
                    }) : void 0]
                }) : r < 2 ? (0, n.jsx)(o(844565).A, {
                    topBorder: I(i, r),
                    children: (0, n.jsx)(o(656252).A, {
                        alignmentToOrigin: "start",
                        popupType: o(423291).n.Popup,
                        content: e => (0, n.jsx)(o(558045).A, {
                            type: o(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "actions",
                                render: e => (0, n.jsx)(o(844565).A, { ...e
                                }),
                                items: [{
                                    key: "add_filter",
                                    render: e => (0, n.jsx)(_, {
                                        props: e
                                    }),
                                    action: o => {
                                        e.close(), R(t, l, i, a, s, d, u)
                                    }
                                }, {
                                    key: "add_filter_group",
                                    render: e => (0, n.jsx)(P, {
                                        props: e
                                    }),
                                    action: o => {
                                        e.close(), b(t, l, i, a, s, d, u, c)
                                    }
                                }]
                            }]
                        }),
                        children: e => (0, n.jsx)(o(438431).H, {
                            action: () => e.onClick(),
                            render: t => {
                                let {
                                    focused: l,
                                    ...r
                                } = t;
                                return (0, n.jsx)(o(391374).o, { ...e,
                                    ...r,
                                    focused: l,
                                    color: "secondary",
                                    style: m,
                                    title: (0, n.jsxs)(o(4458).fI, {
                                        gap: 6,
                                        alignItems: "center",
                                        children: [(0, n.jsx)(o(152989).K, {}), (0, n.jsx)(o(16275).I, {
                                            icon: o(595453).arrowChevronSingleDownSmallIcon,
                                            size: "xs",
                                            colorVariant: "secondary"
                                        })]
                                    })
                                })
                            }
                        })
                    })
                }) : (0, n.jsx)(o(844565).A, {
                    topBorder: I(i, r),
                    children: (0, n.jsx)(o(438431).H, {
                        action: () => R(t, e.schema, e.combinatorFilter, e.onChange, e.index, e.collectionContextStore, e.collectionViewType),
                        render: e => {
                            let {
                                focused: r,
                                ...c
                            } = e;
                            return (0, n.jsx)(o(391374).o, { ...c,
                                focused: e.focused,
                                color: "secondary",
                                style: m,
                                onClick: () => R(t, l, i, a, s, d, u),
                                title: (0, n.jsx)(o(152989).K, {})
                            })
                        }
                    })
                })
            }
            let v = {
                width: "100%"
            };

            function j(e) {
                let t = (0, o(109939).tz)();
                return o(986939).A.isMobile ? (0, n.jsx)(S, {
                    filter: e.filter,
                    indexToChange: e.indexToChange,
                    level: e.level,
                    parent: void 0,
                    combinatorFilter: e.combinatorFilter,
                    onChange: e.onChange,
                    index: e.index,
                    buttonPopupStores: e.buttonPopupStores,
                    collectionContextStore: e.collectionContextStore,
                    collectionViewType: e.collectionViewType
                }) : (0, n.jsx)(o(656252).A, {
                    popupType: o(423291).n.Popup,
                    content: t => (0, n.jsx)(S, {
                        filter: e.filter,
                        indexToChange: e.indexToChange,
                        level: e.level,
                        parent: t,
                        combinatorFilter: e.combinatorFilter,
                        onChange: e.onChange,
                        index: e.index,
                        buttonPopupStores: e.buttonPopupStores,
                        collectionContextStore: e.collectionContextStore,
                        collectionViewType: e.collectionViewType
                    }),
                    children: e => (0, n.jsx)(o(438431).H, {
                        action: () => e.onClick(),
                        render: e => (0, n.jsx)(o(374533).A, { ...e,
                            hovered: e.focused,
                            style: v,
                            size: "lg",
                            icon: o(397900).ellipsisIcon,
                            ariaLabel: t.formatMessage({
                                id: "collections.CollectionFilterCombinatorGrid.RowActions.threeDotActionMenu",
                                defaultMessage: "Edit filter actions"
                            })
                        })
                    })
                })
            }

            function S(e) {
                let {
                    filter: t,
                    indexToChange: l,
                    parent: r
                } = e, i = (0, o(533992).v3)(), a = (0, o(400473).dU)(t), s = a ? (0, n.jsx)(o(109939).sA, {
                    defaultMessage: "Remove",
                    id: "database.filterMenu.removeFilterGroupMenuTitle"
                }) : (0, n.jsx)(o(109939).sA, {
                    defaultMessage: "Remove",
                    id: "database.filterMenu.removeFilterMenuTitle"
                }), c = a ? (0, n.jsx)(o(109939).sA, {
                    defaultMessage: "Duplicate",
                    id: "database.filterMenu.duplicateFilterGroupMenuTitle"
                }) : (0, n.jsx)(o(109939).sA, {
                    defaultMessage: "Duplicate",
                    id: "database.filterMenu.duplicateFilterMenuTitle"
                }), d = [{
                    key: "delete",
                    action: () => {
                        var t, o, n;
                        r && r.close(), t = l, o = e.buttonPopupStores, n = e.combinatorFilter, V(e => e.splice(t, 1), n, e.onChange, e.index), M(t, o).reset(), o.splice(t, 1)
                    },
                    render: e => (0, n.jsx)(o(95582).A, { ...e,
                        icon: (0, n.jsx)(o(16275).I, {
                            icon: o(968411).trashIcon
                        }),
                        isRedOnHover: !0,
                        title: s
                    })
                }, {
                    key: "duplicate",
                    action: () => {
                        var t, n, a, s, c, d, u;
                        r && r.close(), t = l, n = e.combinatorFilter, a = e.onChange, s = e.index, c = e.collectionContextStore, d = e.collectionViewType, u = i, V(e => {
                            let o = e[t];
                            if (o) {
                                let l = { ...o
                                };
                                e.splice(t, 0, l)
                            }
                        }, n, a, s), c ? (0, o(893783).X)({
                            environment: u,
                            collectionContextStore: c,
                            action: "add_filter_group"
                        }) : (0, o(921276).D)(u, {
                            view_type: d,
                            action: "duplicate_filter"
                        })
                    },
                    render: e => (0, n.jsx)(o(95582).A, { ...e,
                        icon: (0, n.jsx)(o(16275).I, {
                            icon: o(703696).V
                        }),
                        title: c
                    })
                }];
                if ((0, o(400473).yX)(t) && e.level < 2 && d.push({
                        key: "turn_into_group",
                        action: () => {
                            r && r.close(), C(i, l, t, e.combinatorFilter, e.onChange, e.index, e.buttonPopupStores, e.collectionContextStore, e.collectionViewType)
                        },
                        render: e => (0, n.jsx)(o(95582).A, { ...e,
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(84697).arrowSquarePathUpDownIcon
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Turn into group",
                                id: "database.filterMenu.turnIntoGroupMenuTitle"
                            })
                        })
                    }), (0, o(400473).dU)(t) && t.filters && 1 === t.filters.length) {
                    let a = (0, o(400473).dU)(t.filters[0]) ? (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Unwrap group",
                        id: "database.filterMenu.unwrapGroupMenuTitle"
                    }) : (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Turn into filter",
                        id: "database.filterMenu.turnIntoFilterMenuTitle"
                    });
                    d.push({
                        key: "turn_into_filter",
                        action: () => {
                            var n, a, s, c, d, u, p, x;
                            let f;
                            r && r.close(), n = l, a = t, s = i, c = e.combinatorFilter, d = e.onChange, u = e.index, p = e.collectionContextStore, x = e.collectionViewType, (f = (a.filters || [])[0]) && !(0, o(400473).LB)(f) && k(n, f, c, d, u), p ? (0, o(893783).X)({
                                environment: s,
                                collectionContextStore: p,
                                action: "turn_into_filter"
                            }) : (0, o(921276).D)(s, {
                                view_type: x,
                                action: "turn_into_filter"
                            })
                        },
                        render: e => (0, n.jsx)(o(95582).A, { ...e,
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(84697).arrowSquarePathUpDownIcon
                            }),
                            title: a
                        })
                    })
                }
                let u = function e(t) {
                    if ((0, o(400473).dU)(t)) {
                        let l = (t.filters || []).filter(o(400473).dU);
                        return 1 + ((0, o(763230).T9)(l.map(e)) ? ? 0)
                    }
                    return 0
                }(t);
                return (0, o(400473).dU)(t) && e.level + u + 1 < 3 && d.push({
                    key: "wrap_in_group",
                    action: () => {
                        r && r.close(), C(i, l, t, e.combinatorFilter, e.onChange, e.index, e.buttonPopupStores, e.collectionContextStore, e.collectionViewType)
                    },
                    render: e => (0, n.jsx)(o(95582).A, { ...e,
                        icon: (0, n.jsx)(o(16275).I, {
                            icon: o(84697).arrowSquarePathUpDownIcon
                        }),
                        title: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Wrap in group",
                            id: "database.filterMenu.wrapInGroupMenuTitle"
                        }),
                        caption: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Create a filter group around this",
                            id: "database.filterMenu.wrapInGroupMenuCaption"
                        })
                    })
                }), (0, n.jsx)(o(558045).A, {
                    initialFocus: o(986939).A.isMobile ? void 0 : 0,
                    type: o(558045).O.Vertical,
                    sections: [{
                        key: "actions",
                        render: o(986939).A.isMobile ? e => (0, n.jsx)("div", { ...e
                        }) : e => (0, n.jsx)(o(844565).A, { ...e
                        }),
                        items: d
                    }]
                })
            }

            function C(e, t, l, r, n, i, a, s, c) {
                k(t, {
                    operator: T(r),
                    filters: [l]
                }, r, n, i), A(t, a), s ? (0, o(893783).X)({
                    environment: e,
                    collectionContextStore: s,
                    action: "turn_into_filter_group"
                }) : (0, o(921276).D)(e, {
                    view_type: c,
                    action: "turn_into_filter_group"
                })
            }

            function b(e, t, l, r, n, i, a, s) {
                let c = F(t, l),
                    d = {
                        operator: T(l),
                        filters: [c]
                    };
                A(V(e => e.push(d), l, r, n) - 1, s), i ? (0, o(893783).X)({
                    environment: e,
                    collectionContextStore: i,
                    action: "add_filter_group"
                }) : (0, o(921276).D)(e, {
                    view_type: a,
                    action: "add_filter_group"
                })
            }

            function A(e, t) {
                M(e, t).setState({
                    open: !0
                })
            }

            function M(e, t) {
                for (; t.length < e + 1;) {
                    let e = new(r()).A;
                    t.push(e)
                }
                return t[e]
            }

            function w(e) {
                let {
                    operator: t,
                    lowercase: l
                } = e;
                return "or" === t ? l ? (0, n.jsx)(o(109939).sA, {
                    id: "collectionFilterCombinatorGrid.filterOperator.or.lowercase",
                    defaultMessage: "or"
                }) : (0, n.jsx)(o(109939).sA, {
                    id: "collectionFilterCombinatorGrid.filterOperator.or",
                    defaultMessage: "Or"
                }) : "and" === t ? l ? (0, n.jsx)(o(109939).sA, {
                    id: "collectionFilterCombinatorGrid.filterOperator.and.lowercase",
                    defaultMessage: "and"
                }) : (0, n.jsx)(o(109939).sA, {
                    id: "collectionFilterCombinatorGrid.filterOperator.and",
                    defaultMessage: "And"
                }) : (0, o(722371).HB)(t)
            }

            function T(e) {
                return "or" === e.operator ? "and" : "or"
            }

            function F(e, t) {
                let l = (t.filters || []).filter(o(400473).yX),
                    r = l[l.length - 1];
                return r ? o(381453).mg(r) : (0, o(698087).MI)(e)
            }

            function V(e, t, o, l) {
                let r = [...t.filters || []],
                    n = e(r);
                return o(l, { ...t,
                    filters: r
                }), n
            }

            function I(e, t) {
                return (0, o(400473).U0)(e) && 0 === t
            }

            function _({
                props: e
            }) {
                let t = (0, n.jsx)(o(16275).I, {
                    icon: o(581923).plusIcon
                });
                return (0, n.jsx)(o(95582).A, {
                    focused: !1,
                    ...e,
                    icon: t,
                    title: (0, n.jsx)(o(152989).K, {})
                })
            }

            function P({
                props: e
            }) {
                let t = (0, n.jsx)(o(16275).I, {
                    icon: o(650750).squareOnSquarePlusIcon
                });
                return (0, n.jsx)(o(95582).A, {
                    focused: !1,
                    ...e,
                    icon: t,
                    title: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Add filter group",
                        id: "database.filterMenu.addFilterGroup2ButtonTitle"
                    }),
                    caption: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "A group to nest more filters",
                        id: "database.filterMenu.addFilterGroupButtonCaption"
                    })
                })
            }

            function k(e, t, o, l, r) {
                V(o => o.splice(e, 1, t), o, l, r)
            }

            function R(e, t, l, r, n, i, a) {
                let s = F(t, l);
                V(e => e.push(s), l, r, n), i ? (0, o(893783).X)({
                    environment: e,
                    collectionContextStore: i,
                    action: "add_filter"
                }) : (0, o(921276).D)(e, {
                    view_type: a,
                    action: "add_filter"
                })
            }

            function O({
                newIndex: e,
                combinatorFilter: t,
                onChange: l,
                index: r,
                collectionContextStore: i,
                collectionViewType: s
            }) {
                let c = (0, o(533992).v3)(),
                    d = t.operator,
                    u = {
                        justifySelf: "end"
                    },
                    p = { ...u,
                        lineHeight: "32px",
                        paddingInlineEnd: 4
                    };
                if (0 === e) return o(986939).A.isMobile ? null : (0, n.jsx)(o(324489).V, {
                    style: p,
                    children: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Where",
                        id: "database.filterMenu.where"
                    })
                });
                if (1 === e) {
                    let e = (0, n.jsx)(a, {
                        disableMargins: !0,
                        filterOperator: d,
                        onChange: e => {
                            l(r, { ...t,
                                operator: e
                            }), i ? (0, o(893783).X)({
                                environment: c,
                                collectionContextStore: i,
                                action: "set_filter_operator"
                            }) : (0, o(921276).D)(c, {
                                view_type: s,
                                action: "set_filter_operator"
                            })
                        }
                    });
                    return o(986939).A.isMobile ? (0, n.jsx)(o(844565).A, {
                        children: e
                    }) : (0, n.jsx)("div", {
                        style: u,
                        children: e
                    })
                }
                return o(986939).A.isMobile ? null : (0, n.jsx)(o(324489).V, {
                    style: p,
                    children: (0, n.jsx)(w, {
                        operator: d
                    })
                })
            }
        },
        121795: (e, t, o) => {
            o.d(t, {
                NS: () => n,
                Z3: () => r,
                sw: () => i,
                Pq: () => s
            }), o(296540);
            var l = o(474848);
            let r = 8,
                n = 8,
                i = 32,
                a = {
                    height: 38,
                    paddingTop: 6
                };

            function s({
                title: e,
                helpButton: t,
                onCancel: r,
                desktopMinWidth: n,
                desktopMaxWidth: i,
                desktopWidth: a,
                children: d
            }) {
                return (0, l.jsx)(o(790124).A, {
                    capture: !0,
                    allowEsc: !0,
                    allowUndo: !0,
                    children: s => {
                        let u;
                        return u = o(986939).A.isMobile ? {
                            menuType: o(649476).gu.Modal,
                            title: e,
                            right: (0, l.jsx)(o(109939).sA, { ...o(789722).W.done
                            }),
                            onClickRight: r,
                            ...s
                        } : {
                            menuType: o(649476).gu.Popup,
                            ...n && {
                                minWidth: n
                            },
                            ...i && {
                                maxWidth: i
                            },
                            ...a && {
                                width: a
                            },
                            ...s
                        }, (0, l.jsx)(o(747369).A, { ...u,
                            header: e && (0, l.jsx)(c, {
                                title: e,
                                helpButton: t
                            }),
                            children: d
                        })
                    }
                })
            }

            function c({
                title: e,
                helpButton: t
            }) {
                return o(986939).A.isMobile ? null : (0, l.jsx)(o(636518).Ay, {
                    style: a,
                    title: e,
                    right: t
                })
            }
        },
        416724: (e, t, o) => {
            o.d(t, {
                A: () => f
            }), o(898992), o(354520), o(737550);
            var l = o(296540),
                r = o(474848);
            let n = {
                    width: "260px"
                },
                i = {
                    width: "100px"
                };

            function a(e) {
                let {
                    filter: t
                } = e, l = (0, o(109939).tz)(), a = {
                    width: 190,
                    menuTitle: l.formatMessage({
                        defaultMessage: "Date Options",
                        id: "database.filterMenu.mobileDateFilterModeMenu.title"
                    }),
                    items: o(910369).$N,
                    selectedItem: (0, o(972835).C)(t),
                    getKey: e => e,
                    onSelect: l => {
                        let r = { ...t,
                            use_end: (0, o(357484).Z)(l)
                        };
                        e.onChange(r)
                    },
                    renderItem: e => (0, r.jsx)(o(51831).m, {
                        content: () => (0, o(323700).WG)(e.value),
                        placement: "right",
                        textWrap: !0,
                        style: n,
                        children: t => (0, r.jsx)(o(95582).A, {
                            title: (0, o(323700).h0)(e.value),
                            ...(0, o(63390).A)(e, t)
                        })
                    }),
                    children: e => (0, r.jsx)(o(332082).A, { ...e,
                        placeholder: l.formatMessage({
                            defaultMessage: "Date Options",
                            id: "database.filterMenu.dateFilterModeMenu.label"
                        }),
                        title: (0, r.jsx)(o(324489).V, {
                            children: (0, o(323700).h0)((0, o(972835).C)(t))
                        }),
                        disableMargins: !0,
                        desktopStyle: i
                    })
                };
                return (0, r.jsx)(o(691509).A, { ...a,
                    menuTypeOverride: (0, o(649476).PK)()
                }, "date-filter-mode")
            }

            function s(e) {
                let t = (0, o(533992).v3)(),
                    l = (0, o(109939).tz)(),
                    {
                        filterValueType: n,
                        filter: i
                    } = e,
                    a = (0, o(400473).U6)({
                        filterValueType: n
                    }),
                    s = {
                        width: 190,
                        menuTitle: l.formatMessage({
                            defaultMessage: "Comparator",
                            id: "database.filterMenu.mobileComparatorValueMenu.title"
                        }),
                        items: a,
                        selectedItem: i.operator,
                        getKey: e => e,
                        onSelect: l => {
                            let r = (0, o(323700).iI)({
                                filterValueType: n,
                                filter: i,
                                operator: l,
                                context: "combinator"
                            });
                            e.onChange(r), e.collectionContextStore ? (0, o(893783).X)({
                                environment: t,
                                collectionContextStore: e.collectionContextStore,
                                action: "set_filter_comparator"
                            }) : (0, o(921276).D)(t, {
                                view_type: e.collectionViewType,
                                action: "set_filter_comparator"
                            })
                        },
                        renderItem: e => (0, r.jsx)(o(95582).A, {
                            title: (0, o(323700).J)(e.value),
                            ...e
                        }),
                        children: e => (0, r.jsx)(o(332082).A, { ...e,
                            placeholder: l.formatMessage({
                                defaultMessage: "Comparator",
                                id: "database.filterMenu.comparatorMenuDropdownButton.label"
                            }),
                            title: (0, r.jsx)(o(324489).V, {
                                children: (0, o(323700).J)(i.operator)
                            }),
                            disableMargins: !0
                        })
                    };
                return (0, r.jsx)(o(691509).A, { ...s,
                    menuTypeOverride: (0, o(649476).PK)()
                }, "comparator")
            }
            let c = (0, o(109939).YK)({
                setFilter: {
                    defaultMessage: "Set filter",
                    id: "database.filterMenu.rollupPropertyValue.mobileMenu.title"
                }
            });

            function d(e) {
                let t = (0, o(109939).tz)();
                if ((0, o(400473).s1)(e.filter)) return (0, r.jsx)(p, {
                    intl: t,
                    onChange: e.onChange,
                    collectionContextStore: e.collectionContextStore,
                    collectionViewType: e.collectionViewType,
                    property: e.property,
                    schema: e.schema,
                    parentStore: e.parentStore,
                    collectionViewId: e.collectionViewId,
                    filter: e.filter
                });
                let n = (0, o(400473).HF)({
                    schema: e.schema,
                    property: e.property,
                    getRecordModel: e.parentStore.getRecordModel
                });
                if (!(0, o(400473).$S)(n, e.filter)) {
                    let t = (0, o(323700).xt)(n);
                    return (0, r.jsxs)(l.Fragment, {
                        children: [(0, r.jsx)(s, {
                            filterValueType: n,
                            filter: t,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            onChange: e.onChange
                        }), (0, r.jsx)(o(773609).A, {
                            filterValueType: n,
                            filter: t,
                            schema: e.schema,
                            property: e.property,
                            parentStore: e.parentStore,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            collectionViewId: e.collectionViewId,
                            onChange: e.onChange
                        })]
                    })
                }
                let i = (0, r.jsx)(o(109939).sA, { ...o(323700).Jk[n],
                    values: {
                        property: (0, r.jsx)(o(109939).sA, {
                            id: "collectionFilterMenuFilter.property.name",
                            defaultMessage: "Property"
                        }),
                        operator: (0, r.jsx)(s, {
                            filterValueType: n,
                            filter: e.filter,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            onChange: e.onChange
                        }),
                        operatorValue: (0, r.jsx)(o(773609).A, {
                            filterValueType: n,
                            filter: e.filter,
                            schema: e.schema,
                            property: e.property,
                            parentStore: e.parentStore,
                            collectionContextStore: e.collectionContextStore,
                            collectionViewType: e.collectionViewType,
                            collectionViewId: e.collectionViewId,
                            onChange: e.onChange
                        })
                    }
                });
                return o(986939).A.isMobile ? i : (0, r.jsx)("div", {
                    style: {
                        alignItems: "center",
                        display: "grid",
                        gridAutoFlow: "column",
                        gridAutoColumns: "1fr",
                        gridColumnEnd: e.isArrayFilter ? void 0 : "span 2",
                        gridColumnGap: `${o(121795).NS}px`,
                        gridTemplateRows: `${o(121795).sw}px`,
                        gridTemplateColumns: "[value-start] max-content auto [value-end operator-start] auto"
                    },
                    children: i
                })
            }
            let u = {
                style0: {
                    minWidth: 70
                },
                style1: {
                    gridColumnEnd: "span 2"
                },
                style2: {
                    display: "grid",
                    gridAutoFlow: "column",
                    gridAutoColumns: "1fr",
                    gridColumnEnd: "span 2",
                    gridColumnGap: `${o(121795).NS}px`,
                    gridTemplateColumns: "max-content",
                    gridTemplateRows: `${o(121795).sw}px`
                }
            };

            function p({
                filter: e,
                intl: t,
                onChange: n,
                collectionContextStore: i,
                collectionViewType: a,
                property: s,
                schema: x,
                parentStore: f,
                collectionViewId: h
            }) {
                let g = (0, o(533992).v3)(),
                    m = {
                        menuTitle: t.formatMessage(c.setFilter),
                        items: o(400473).$X,
                        getKey: e => e,
                        selectedItem: e.operator,
                        onSelect: t => {
                            n({ ...e,
                                operator: t
                            }), i ? (0, o(893783).X)({
                                environment: g,
                                collectionContextStore: i,
                                action: "set_rollup_set_filter"
                            }) : (0, o(921276).D)(g, {
                                view_type: a,
                                action: "set_rollup_set_filter"
                            })
                        },
                        renderItem: e => (0, r.jsx)(o(95582).A, {
                            title: (0, o(323700).wE)(e.value, t),
                            ...e
                        }),
                        children: l => (0, r.jsx)(o(332082).A, { ...l,
                            placeholder: t.formatMessage(c.setFilter),
                            title: (0, o(323700).wE)(e.operator, t),
                            disableMargins: !0,
                            desktopStyle: u.style0
                        })
                    },
                    {
                        targetProperty: y,
                        targetCollectionSchema: v
                    } = (0, o(682985).K8)(() => {
                        var e, t;
                        if ((null == x || null == (e = x[s]) ? void 0 : e.type) === "rollup") {
                            let e = null == (t = f.pointer) ? void 0 : t.spaceId;
                            if (!e) return {
                                targetProperty: void 0,
                                targetCollectionSchema: void 0
                            };
                            let l = g.idCreator.getSpaceIdCreatorSync(e),
                                r = (0, o(26837).eY)({
                                    schema: x,
                                    property: s,
                                    getRecordModel: f.getRecordModel,
                                    spaceIdCreator: l
                                });
                            return (null == r ? void 0 : r.rollupType) === "person" ? {
                                targetProperty: void 0,
                                targetCollectionSchema: void 0
                            } : {
                                targetProperty: null == r ? void 0 : r.targetProperty,
                                targetCollectionSchema: null == r ? void 0 : r.targetCollectionSchema
                            }
                        }
                        return {
                            targetProperty: s,
                            targetCollectionSchema: x
                        }
                    }, [s, x, f, g]);
                if (!y || !v) return (0, r.jsx)("div", {
                    style: u.style1
                });
                let j = (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsx)(o(691509).A, { ...m,
                        menuTypeOverride: (0, o(649476).PK)()
                    }, "set_filter"), (0, r.jsx)(d, {
                        collectionViewId: h,
                        filter: e.subfilter,
                        schema: v,
                        property: y,
                        parentStore: f,
                        collectionContextStore: i,
                        collectionViewType: a,
                        onChange: t => {
                            n({ ...e,
                                subfilter: t
                            })
                        },
                        isArrayFilter: !0
                    })]
                });
                return o(986939).A.isMobile ? j : (0, r.jsx)("div", {
                    style: u.style2,
                    children: j
                })
            }
            let x = {
                    width: "100%"
                },
                f = function({
                    schema: e,
                    propertyFilter: t,
                    parentStore: n,
                    index: i,
                    collectionContextStore: s,
                    collectionViewType: c,
                    onChange: u,
                    filterOperator: p,
                    collectionViewId: f,
                    disablePropertyChange: h = !1
                }) {
                    let g = (0, o(533992).v3)(),
                        m = (0, o(561872)._g)({
                            schema: e,
                            property: t.property
                        }),
                        y = (0, o(682985).K8)(() => {
                            let e = null == s ? void 0 : s.collectionViewStore();
                            return null == e ? void 0 : e.getCollectionSource()
                        }, [s]),
                        v = (0, o(682985).K8)(() => (0, o(400473).tn)(e, t.property, t.filter, n.getRecordModel), [n, t, e]);
                    if (!m || !v) return null;
                    let j = (0, o(725462).n)(t.filter) && (0, o(400473).gc)(t.filter) && (0, o(160075).q)(m),
                        S = j ? {
                            width: "120px",
                            marginInlineEnd: "4px"
                        } : {},
                        C = (0, r.jsxs)(l.Fragment, {
                            children: [(0, r.jsx)(o(656252).A, {
                                popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                                disabled: h,
                                content: l => (0, r.jsx)(o(645153).A, {
                                    isRelationProperty: !1,
                                    schema: e,
                                    onAccept: l => (function(e, t, l, r, n, i, a, s, c) {
                                        let {
                                            property: d,
                                            filter: u
                                        } = r, p = l[d], x = l[e], f = {
                                            property: e,
                                            filter: u
                                        }, h = x && (0, o(400473).tn)(l, e, u, n.getRecordModel), g = x && "relation" === x.type && d !== e, m = p && ("created_by" === p.type || "last_edited_by" === p.type) && x && "person" === x.type, y = (0, o(784923).I)(u) && !(0, o(400473).fZ)(u) && (0, o(19484).W)(u).some(e => "exact" === e.type && e.value && "bot" === e.value.table);
                                        if (!h || g || m && y || !(0, o(9658).hs)(f, l)) {
                                            var v;
                                            f.filter = (0, o(323700).SN)({
                                                schema: l,
                                                property: e,
                                                getRecordModel: n.getRecordModel,
                                                spaceIdCreator: t.idCreator.getSpaceIdCreatorSync((null == (v = n.pointer) ? void 0 : v.spaceId) ? ? "")
                                            })
                                        }
                                        null == c || c(i, f), a ? (0, o(893783).X)({
                                            environment: t,
                                            collectionContextStore: a,
                                            action: "set_filter_property"
                                        }) : (0, o(921276).D)(t, {
                                            view_type: s,
                                            action: "set_filter_property"
                                        })
                                    })(l, g, e, t, n, i, s, c, u),
                                    onClose: l.close,
                                    allowProperty: e => (0, o(561872).ah)(e, y)
                                }),
                                children: e => (0, r.jsx)(o(36772).A, { ...e,
                                    propertySchema: m,
                                    disableMargins: !0,
                                    disabled: h,
                                    textWrapperStyle: { ...x,
                                        ...S
                                    }
                                })
                            }), j ? (0, r.jsx)(a, {
                                filter: t.filter,
                                onChange: e => {
                                    let o = { ...t,
                                        filter: e
                                    };
                                    null == u || u(i, o)
                                }
                            }) : void 0]
                        });
                    return (0, r.jsxs)(l.Fragment, {
                        children: [p, o(986939).A.isMobile ? C : (0, r.jsx)(o(4458).fI, {
                            children: C
                        }), (0, r.jsx)(o(109939).sA, {
                            id: "collectionFilterMenuRow.propertyConjunction.label",
                            defaultMessage: " "
                        }), (0, r.jsx)(d, {
                            filter: t.filter,
                            schema: e,
                            property: t.property,
                            parentStore: n,
                            collectionViewId: f,
                            collectionContextStore: s,
                            collectionViewType: c,
                            onChange: e => {
                                let o = { ...t,
                                    filter: e
                                };
                                null == u || u(i, o)
                            },
                            isArrayFilter: !1
                        })]
                    })
                }
        },
        773609: (e, t, o) => {
            o.d(t, {
                A: () => i,
                j: () => n
            }), o(898992), o(354520), o(581454), o(296540);
            var l = o(474848);
            let r = (0, o(109939).YK)({
                dateTitle: {
                    defaultMessage: "Date",
                    id: "database.filterMenu.mobileDateSelectMenu.title"
                },
                emptyPlaceholder: {
                    defaultMessage: "Empty",
                    id: "database.filterMenu.dateSelectMenu.emptyPlaceholder"
                }
            });

            function n(e) {
                return e ? (0, l.jsx)(o(109939).sA, {
                    defaultMessage: "Select one",
                    id: "database.personPropertyValue.selectPersonOrGroup.searchPlaceholderWithLimit"
                }) : (0, l.jsx)(o(109939).sA, {
                    defaultMessage: "Select as many as you like",
                    id: "database.personPropertyValue.selectPersonOrGroup.searchPlaceholder"
                })
            }
            let i = function({
                schema: e,
                property: t,
                parentStore: r,
                filter: n,
                collectionViewId: i,
                filterValueType: a,
                onChange: s,
                collectionContextStore: d,
                collectionViewType: p
            }) {
                let f = (0, o(109939).tz)(),
                    h = (0, l.jsx)("span", {});
                if ("date" === a) return (0, o(725462).n)(n) ? (0, o(400473).fZ)(n) ? h : (0, o(400473).Cw)(n) ? (0, l.jsx)(y, {
                    intl: f,
                    parentStore: r,
                    schema: e,
                    collectionViewId: i,
                    property: t,
                    onChange: s,
                    collectionContextStore: d,
                    collectionViewType: p,
                    filter: n
                }) : (0, l.jsx)(m, {
                    intl: f,
                    collectionViewId: i,
                    property: t,
                    schema: e,
                    parentStore: r,
                    onChange: s,
                    collectionContextStore: d,
                    collectionViewType: p,
                    filter: n
                }) : h;
                if ("text" === a) {
                    if (!(0, o(995906).Y)(n) || (0, o(400473).fZ)(n)) return h;
                    if ("string_has_no_alphabet_prefix" === n.operator) return null;
                    let e = n.value;
                    return (0, l.jsx)(o(976338).o, {
                        value: e.value,
                        onChange: e => {
                            s({ ...n,
                                value: {
                                    type: "exact",
                                    value: e
                                }
                            })
                        }
                    })
                }
                if ("number" === a) {
                    if (!(0, o(818966).M)(n) || (0, o(400473).fZ)(n)) return h;
                    let e = n.value;
                    return (0, l.jsx)(o(976338).o, {
                        value: void 0 === e.value ? "" : e.value.toString(),
                        onChange: e => {
                            let t = (0, o(368864).q)(e, f);
                            s({ ...n,
                                value: {
                                    type: "exact",
                                    value: t
                                }
                            })
                        }
                    })
                }
                if ("checkbox" === a) {
                    if (!(0, o(400473).Ui)(n) || !i) return h;
                    let a = n.value;
                    return (0, l.jsx)(o(656252).A, {
                        popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                        content: a => (0, l.jsx)(o(69906).td, {
                            canUserFilterAdditionalSources: !1,
                            collectionViewId: i,
                            propertyFilter: {
                                property: t,
                                filter: n
                            },
                            schema: e,
                            onChange: e => {
                                s(e)
                            },
                            onClose: a.close,
                            parentStore: r,
                            context: o(69906).mL.AdvancedFilter,
                            allowRelativePersonFilter: !0,
                            collectionContextStore: d
                        }),
                        children: e => (0, l.jsx)(c, {
                            operatorValue: a,
                            events: e
                        })
                    })
                }
                if ("select" === a || "multi_select" === a || "status" === a) {
                    if (!((0, o(400473).v0)(n) || (0, o(400473).as)(n) || (0, o(400473).H$)(n)) || !i || (0, o(400473).fZ)(n)) return h;
                    let a = e[t];
                    if (!a) return h;
                    let c = (0, o(400473).v0)(n) ? (0, o(400473).Zl)(n) : (0, o(400473).as)(n) ? (0, o(400473).SM)(n) : (0, o(400473).Wc)(a, (0, o(400473).V6)(n));
                    return (0, l.jsx)(o(656252).A, {
                        popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                        content: a => (0, l.jsx)(o(69906).td, {
                            canUserFilterAdditionalSources: !1,
                            collectionViewId: i,
                            propertyFilter: {
                                property: t,
                                filter: n
                            },
                            schema: e,
                            onChange: e => {
                                s(e)
                            },
                            onClose: a.close,
                            parentStore: r,
                            context: o(69906).mL.AdvancedFilter,
                            allowRelativePersonFilter: !0,
                            collectionContextStore: d
                        }),
                        children: o => (0, l.jsx)(g, {
                            schema: e,
                            property: t,
                            operatorValues: c,
                            events: o
                        })
                    })
                }
                if ("location" === a) {
                    if (!(0, o(400473).G)(n)) return h;
                    let a = (0, o(400473).GK)(n);
                    return (0, l.jsx)(o(656252).A, {
                        popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                        content: a => (0, l.jsx)(o(69906).td, {
                            canUserFilterAdditionalSources: !1,
                            collectionViewId: i,
                            propertyFilter: {
                                property: t,
                                filter: n
                            },
                            schema: e,
                            onChange: e => {
                                s(e)
                            },
                            onClose: a.close,
                            parentStore: r,
                            context: o(69906).mL.AdvancedFilter,
                            allowRelativePersonFilter: !0,
                            collectionContextStore: d
                        }),
                        children: e => (0, l.jsx)(x, {
                            parentStore: r,
                            operatorValues: a,
                            events: e
                        })
                    })
                }
                if ("relation" === a) {
                    if (!(0, o(400473).Pq)(n) || !i || (0, o(400473).fZ)(n)) return h;
                    let a = (0, o(400473).Rh)(n);
                    return (0, l.jsx)(o(656252).A, {
                        popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                        content: a => (0, l.jsx)(o(69906).td, {
                            canUserFilterAdditionalSources: !1,
                            collectionViewId: i,
                            propertyFilter: {
                                property: t,
                                filter: n
                            },
                            schema: e,
                            onChange: e => {
                                s(e)
                            },
                            onClose: a.close,
                            parentStore: r,
                            context: o(69906).mL.AdvancedFilter,
                            allowRelativePersonFilter: !0,
                            collectionContextStore: d
                        }),
                        children: o => (0, l.jsx)(C, {
                            parentStore: r,
                            operatorValues: a,
                            events: o,
                            schema: e,
                            property: t
                        })
                    })
                }
                if ("person" === a) {
                    if (!(0, o(784923).I)(n) || !i || (0, o(400473).fZ)(n)) return h;
                    let a = (0, o(19484).W)(n);
                    return (0, l.jsx)(o(656252).A, {
                        popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                        content: a => (0, l.jsx)(o(69906).td, {
                            canUserFilterAdditionalSources: !1,
                            collectionViewId: i,
                            propertyFilter: {
                                property: t,
                                filter: n
                            },
                            schema: e,
                            onChange: e => {
                                s(e)
                            },
                            onClose: a.close,
                            parentStore: r,
                            context: o(69906).mL.AdvancedFilter,
                            allowRelativePersonFilter: !0,
                            collectionContextStore: d
                        }),
                        children: e => (0, l.jsx)(S, {
                            parentStore: r,
                            operatorValues: a,
                            events: e
                        })
                    })
                }
                if ("file" === a) {
                    if (!(0, o(400473).B6)(n) || (0, o(400473).fZ)(n)) return h;
                    (0, o(722371).HB)(n)
                }
                if ("verification" === a) return (0, o(400473).uU)(n) ? (0, l.jsx)(o(656252).A, {
                    popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                    content: a => (0, l.jsx)(o(69906).td, {
                        canUserFilterAdditionalSources: !1,
                        collectionViewId: i,
                        propertyFilter: {
                            property: t,
                            filter: n
                        },
                        schema: e,
                        onChange: e => {
                            s(e)
                        },
                        onClose: a.close,
                        parentStore: r,
                        context: o(69906).mL.AdvancedFilter,
                        allowRelativePersonFilter: !1,
                        collectionContextStore: d
                    }),
                    children: e => (0, l.jsx)(u, {
                        operatorValues: (0, o(400473).ms)(n),
                        events: e
                    })
                }) : h;
                if ("place" === a) {
                    if (!(0, o(400473).Ol)(n) || (0, o(400473).fZ)(n)) return h;
                    (0, o(722371).HB)(n)
                }(0, o(722371).HB)(a)
            };

            function a() {
                return {
                    maxWidth: o(109817).tv
                }
            }

            function s(e) {
                return {
                    paddingTop: e ? 6 : void 0,
                    overflow: "hidden"
                }
            }

            function c({
                operatorValue: e,
                events: t
            }) {
                let r = null == e ? void 0 : e.value;
                return (0, l.jsx)(o(332082).A, { ...t,
                    disableMargins: !0,
                    placeholder: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Select a value",
                        id: "database.filterOperatorValue.checkboxPlaceholder.title"
                    }),
                    title: "boolean" == typeof r && (0, l.jsx)(o(349050).S, {
                        checked: r,
                        size: 16,
                        disabled: !0
                    })
                })
            }
            let d = {
                whiteSpace: "pre"
            };

            function u({
                operatorValues: e,
                events: t
            }) {
                let r = e.filter(({
                    value: e
                }) => !!e).map(o(323700).w0);
                return (0, l.jsx)(o(332082).A, { ...t,
                    disableMargins: !0,
                    placeholder: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Select an option",
                        id: "CollectionFilterMenuFilterOperatorValue.verificationFilterSelect.placeholder"
                    }),
                    title: r.length && (0, l.jsx)("span", {
                        children: (0, o(405843).G)(r, e => (0, l.jsx)("span", {
                            style: d,
                            children: (0, l.jsx)(o(109939).sA, {
                                defaultMessage: ", ",
                                id: "CollectionFilterMenuFilterOperatorValue.verificationFilterSelect.commaSeparator"
                            })
                        }, e))
                    })
                })
            }
            let p = {
                marginTop: 0,
                marginInlineEnd: 10,
                marginBottom: 6,
                marginInlineStart: 0
            };

            function x({
                operatorValues: e,
                events: t,
                parentStore: r
            }) {
                return (0, l.jsx)(o(332082).A, { ...t,
                    disableMargins: !0,
                    desktopStyle: a(),
                    innerStyle: s(e.length > 0),
                    placeholder: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Select a location",
                        id: "databaseLocationOperators.selectPlaceholder"
                    }),
                    title: e.length > 0 && e.map(e => e.value && (0, l.jsx)("div", {
                        style: p,
                        children: (0, l.jsx)(o(655608).A, {
                            collectionStore: o(356912).m.createChildStore(r, {
                                table: "collection",
                                id: e.value
                            })
                        })
                    }, e.value))
                })
            }
            let f = {
                style0: {
                    minWidth: 165
                },
                style1: { ...o(699422).RC
                }
            };

            function h({
                operatorValue: e,
                events: t,
                isRange: r,
                schema: n,
                property: i
            }) {
                let a, s = n[i],
                    c = s && "date" === s.type ? s.date_format : void 0;
                if ("exact" === e.type && e.value) {
                    if ((0, o(943003).$P)(e.value)) a = e.value;
                    else if ((0, o(943003).jS)(e.value)) {
                        let t = (0, o(943003).dq)(e.value);
                        t && (a = t.value)
                    }
                }
                return (0, l.jsx)(o(332082).A, { ...t,
                    placeholder: r ? (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Select a range",
                        id: "database.filterAndSort.dateRangePropertyValue.placeholder"
                    }) : (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Select a date",
                        id: "database.filterAndSort.datePropertyValue.placeholder"
                    }),
                    desktopStyle: f.style0,
                    title: a && (0, l.jsx)("span", {
                        style: f.style1,
                        children: (0, l.jsx)(o(246467).A, {
                            value: a,
                            dateFormat: c || o(943003).vz
                        })
                    }),
                    disableMargins: !0
                })
            }

            function g({
                operatorValues: e,
                events: t,
                schema: r,
                property: n
            }) {
                let i = r[n],
                    c = i && ((0, o(532792).l)(i) || "status" === i.type) && i.options || [];
                return (0, l.jsx)(o(332082).A, { ...t,
                    disableMargins: !0,
                    desktopStyle: a(),
                    innerStyle: s(e.length > 0),
                    placeholder: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Select an option",
                        id: "collections.operatorValueSelect.placeholder"
                    }),
                    title: e.length > 0 && (0, l.jsx)(l.Fragment, {
                        children: e.map(e => {
                            if (void 0 === e.value) return null;
                            let t = (0, o(561872).jy)(c, e.value);
                            return t ? (0, l.jsx)(o(593100).O, {
                                format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium,
                                isSingle: !1,
                                value: t.value,
                                color: t.color,
                                showRemoveButton: !1
                            }, e.value) : null
                        })
                    })
                })
            }

            function m({
                filter: e,
                intl: t,
                collectionViewId: n,
                property: i,
                schema: a,
                parentStore: s,
                onChange: c,
                collectionContextStore: d,
                collectionViewType: u
            }) {
                let p = (0, o(533992).v3)();
                if (!n) return null;
                let x = {
                        menuTitle: t.formatMessage(r.dateTitle),
                        items: o(910369).ty,
                        getKey: e => "relative" === e.type ? e.value : e.type,
                        selectedItem: e.value,
                        onSelect: t => {
                            c({ ...e,
                                value: t
                            }), d ? (0, o(893783).X)({
                                environment: p,
                                collectionContextStore: d,
                                action: "set_filter_value_type"
                            }) : (0, o(921276).D)(p, {
                                view_type: u,
                                action: "set_filter_value_type"
                            })
                        },
                        renderItem: e => (0, l.jsx)(o(95582).A, {
                            title: (0, o(323700).RR)(e.value),
                            ...e
                        }),
                        children: n => (0, l.jsx)(o(332082).A, { ...n,
                            disableMargins: !0,
                            placeholder: t.formatMessage(r.emptyPlaceholder),
                            title: (0, o(323700).RR)(e.value)
                        })
                    },
                    f = e.value;
                if ("exact" === f.type) {
                    let t = (0, l.jsx)(o(109939).sA, {
                            id: "collectionFilterMenuFilterOperatorValue.date.exact.order",
                            defaultMessage: "{exact}{dateValue}",
                            values: {
                                exact: (0, l.jsx)(o(691509).A, { ...x,
                                    menuTypeOverride: (0, o(649476).PK)()
                                }, "date-filter-value-type"),
                                dateValue: (0, l.jsx)(o(656252).A, {
                                    popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                                    content: t => (0, l.jsx)(o(69906).td, {
                                        canUserFilterAdditionalSources: !1,
                                        collectionViewId: n,
                                        propertyFilter: {
                                            property: i,
                                            filter: e
                                        },
                                        schema: a,
                                        onChange: e => {
                                            c(e)
                                        },
                                        onClose: t.close,
                                        parentStore: s,
                                        context: o(69906).mL.AdvancedFilter,
                                        allowRelativePersonFilter: !0,
                                        collectionContextStore: d
                                    }),
                                    children: e => (0, l.jsx)(h, {
                                        schema: a,
                                        property: i,
                                        operatorValue: f,
                                        events: e,
                                        isRange: !1
                                    })
                                })
                            }
                        }),
                        r = p.device.isDesktop ? {
                            display: "grid",
                            justifyContent: "stretch",
                            gridTemplateColumns: "1fr 1fr",
                            gridColumnGap: o(121795).NS,
                            width: "100%"
                        } : void 0;
                    return (0, l.jsx)("div", {
                        style: r,
                        children: t
                    })
                }
                return (0, l.jsx)(o(691509).A, { ...x,
                    menuTypeOverride: (0, o(649476).PK)()
                }, "date-filter-value-type")
            }

            function y({
                filter: e,
                intl: t,
                parentStore: n,
                schema: i,
                collectionViewId: a,
                property: s,
                onChange: c,
                collectionContextStore: d,
                collectionViewType: u
            }) {
                let p = (0, o(533992).v3)();
                if (!a) return null;
                let x = {
                        menuTitle: t.formatMessage(r.dateTitle),
                        items: o(910369).py,
                        getKey: e => (0, o(461249).q)(e),
                        selectedItem: e.value,
                        onSelect: t => {
                            c({ ...e,
                                value: t
                            }), d ? (0, o(893783).X)({
                                environment: p,
                                collectionContextStore: d,
                                action: "set_filter_value_type"
                            }) : (0, o(921276).D)(p, {
                                view_type: u,
                                action: "set_filter_value_type"
                            })
                        },
                        renderItem: e => (0, l.jsx)(o(95582).A, {
                            title: (0, o(323700).kz)(e.value),
                            ...e
                        }),
                        children: n => (0, l.jsx)(o(332082).A, { ...n,
                            disableMargins: !0,
                            placeholder: t.formatMessage(r.emptyPlaceholder),
                            title: (0, o(323700).kz)(e.value)
                        })
                    },
                    f = e.value;
                if ("exact" === f.type) {
                    let t = (0, l.jsx)(o(109939).sA, {
                            id: "collectionFilterMenuFilterOperatorValue.dateRange.exact.order",
                            defaultMessage: "{dateValue}",
                            values: {
                                dateValue: (0, l.jsx)(o(656252).A, {
                                    popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                                    content: t => (0, l.jsx)(o(69906).td, {
                                        canUserFilterAdditionalSources: !1,
                                        collectionViewId: a,
                                        propertyFilter: {
                                            property: s,
                                            filter: e
                                        },
                                        schema: i,
                                        onChange: e => {
                                            c(e)
                                        },
                                        onClose: t.close,
                                        parentStore: n,
                                        context: o(69906).mL.AdvancedFilter,
                                        allowRelativePersonFilter: !0,
                                        collectionContextStore: d
                                    }),
                                    children: e => (0, l.jsx)(h, {
                                        schema: i,
                                        property: s,
                                        operatorValue: f,
                                        events: e,
                                        isRange: !0
                                    })
                                })
                            }
                        }),
                        r = p.device.isDesktop ? {
                            display: "grid",
                            justifyContent: "stretch",
                            gridTemplateColumns: "1fr 1fr",
                            gridColumnGap: o(121795).NS,
                            width: "100%"
                        } : void 0;
                    return (0, l.jsx)("div", {
                        style: r,
                        children: t
                    })
                }
                return "relative" === f.type && ("custom" === f.value || "surrounding" === f.value) ? (0, l.jsx)(o(708797).i, {
                    renderAsQueryDropdown: o(986939).A.isMobile,
                    filter: f,
                    onUpdate: t => {
                        c({ ...e,
                            value: t
                        }), d ? (0, o(893783).X)({
                            environment: p,
                            collectionContextStore: d,
                            action: "set_filter_value_type"
                        }) : (0, o(921276).D)(p, {
                            view_type: u,
                            action: "set_filter_value_type"
                        })
                    }
                }) : (0, l.jsx)(o(691509).A, { ...x,
                    menuTypeOverride: (0, o(649476).PK)()
                }, "date-filter-value-type")
            }
            let v = {
                marginTop: 1,
                marginInlineEnd: 10,
                marginBottom: 6
            };

            function j({
                operatorValue: e,
                parentStore: t
            }) {
                var r;
                let n = (0, o(682985).K8)(() => e.value && ("relative" !== e.type || "me" !== e.value) && (0, o(197018).Pu)(e.value) ? (0, o(197018).xC)({
                    pointer: e.value,
                    getRecordValue: t.getRecordValue
                }) : void 0, [e, t]);
                if (!e.value) return null;
                if ("me" !== e.value && e.value.table === o(832375).naB) {
                    let r = (0, o(659341).S4)({
                        spacePermissionGroupId: e.value.id,
                        spaceId: e.value.spaceId
                    });
                    return (0, l.jsx)(o(11444).UISpacePermissionGroupToken, {
                        parentStore: t,
                        groupPointer: r,
                        isSingle: !1,
                        shouldShrink: !1,
                        format: o(986939).A.isMobile ? o(72461).t_.Format.Large : o(72461).t_.Format.Medium,
                        showRemoveButton: !1
                    }, r.id)
                }
                return "relative" === e.type && "me" === e.value ? (0, l.jsx)("span", {
                    style: v,
                    children: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Me",
                        id: "database.filterAndSort.firstPersonPropertyValue.title"
                    }, "relative")
                }) : n ? (0, l.jsx)(o(72461).Ay, {
                    actor: n,
                    isSingle: !1,
                    shouldShrink: !1,
                    format: o(986939).A.isMobile ? o(72461).t_.Format.Large : o(72461).t_.Format.Medium,
                    showRemoveButton: !1,
                    hasPersonHoverCard: !1
                }, null == (r = n.asActor) ? void 0 : r.id) : null
            }

            function S({
                operatorValues: e,
                events: t,
                parentStore: r
            }) {
                return (0, l.jsx)(o(332082).A, { ...t,
                    placeholder: n(void 0),
                    disableMargins: !0,
                    desktopStyle: a(),
                    innerStyle: s(e.length > 0),
                    title: e.length > 0 && e.map(e => {
                        var t;
                        return (0, l.jsx)(j, {
                            operatorValue: e,
                            parentStore: r
                        }, `${e.type}__${"me"===e.value?"me":null==(t=e.value)?void 0:t.id}`)
                    })
                })
            }

            function C({
                operatorValues: e,
                events: t,
                parentStore: r,
                schema: n,
                property: i
            }) {
                let c = (0, o(960253).e)(),
                    d = n[i],
                    u = (0, o(682985).K8)(() => {
                        if (d && (0, o(795e3).n)(d)) return (0, o(856235).LQ)(d, r)
                    }, [d, r]);
                return (0, l.jsx)(o(332082).A, { ...t,
                    disableMargins: !0,
                    desktopStyle: a(),
                    innerStyle: s(e.length > 0),
                    placeholder: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Select a page",
                        id: "databaseRelationOperators.selectPlaceholder"
                    }),
                    title: e.length > 0 && e.map((e, t) => {
                        if (!e.value) return null;
                        let n = e.type,
                            i = {
                                isSingle: !1,
                                shouldShrink: !1,
                                format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium
                            };
                        if ("exact" === n) return (0, l.jsx)(o(448860).A, {
                            blockId: e.value,
                            parentStore: r,
                            ...i
                        }, e.value);
                        if ("relative" === n) {
                            if ("builtin" === e.value.type) return u ? (0, l.jsx)(o(696654).Ay, {
                                value: (0, l.jsx)(o(109939).sA, { ...o(613211).n$[u][e.value.variable].messageDescriptor
                                }),
                                backgroundColor: "transparent",
                                theme: o(632079).Tj,
                                themeMode: c,
                                ...i
                            }, t) : null;
                            else if ("current_page_in_related_collection" === e.value.type) return (0, l.jsx)(o(696654).Ay, {
                                value: (0, l.jsx)(o(109939).sA, {
                                    defaultMessage: "This page",
                                    id: "database.filterAndSort.currentPagePropertyValue.title"
                                }),
                                backgroundColor: "transparent",
                                theme: o(632079).Tj,
                                themeMode: c,
                                ...i
                            }, t)
                        } else(0, o(722371).HB)(n)
                    })
                })
            }
        },
        976338: (e, t, o) => {
            o.d(t, {
                o: () => a
            });
            var l = o(296540),
                r = o(474848);
            let n = (0, o(109939).YK)({
                    value: {
                        defaultMessage: "Value",
                        id: "database.filterAndSort.propertyValueInput.placeholder"
                    }
                }),
                i = {
                    focused: {
                        background: o(632079).Tj.buttonHoveredBackground
                    },
                    unfocused: {
                        background: "transparent"
                    },
                    style0: {
                        marginInlineStart: 48
                    },
                    style1: {
                        display: "flex"
                    }
                };

            function a({
                value: e,
                onChange: t
            }) {
                let c = (0, o(109939).tz)(),
                    d = (0, l.useRef)(null),
                    [u, p] = (0, l.useState)(!1),
                    x = (0, l.useCallback)(() => p(!0), [p]),
                    f = (0, l.useCallback)(() => p(!1), [p]),
                    h = (0, l.useCallback)(e => {
                        t(e.target.value)
                    }, [t]),
                    g = (0, l.useCallback)(() => {
                        if (d.current) {
                            var e;
                            (null == (e = window) ? void 0 : e.document.activeElement) === d.current && d.current.blur(), f()
                        }
                    }, [f]),
                    m = e || "";
                return (0, r.jsx)("div", {
                    style: { ...i.style1,
                        ...s()
                    },
                    onClick: x,
                    children: o(986939).A.isMobile ? (0, r.jsx)(o(310324).Ay, {
                        value: m,
                        onChange: h,
                        placeholder: c.formatMessage(n.value),
                        onBlur: f,
                        rightMobileEditLabel: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Edit",
                            id: "database.filterAndSort.mobileEditButton.label"
                        }),
                        textWrapperStyle: i.style0
                    }) : (0, r.jsx)(o(438431).H, {
                        action: x,
                        render: e => (0, r.jsx)("div", {
                            ref: e.ref,
                            onMouseEnter: e.onMouseEnter,
                            style: { ...e.focused && !u ? i.focused : i.unfocused,
                                ...s()
                            },
                            children: (0, r.jsx)(o(790124).A, {
                                capture: u,
                                children: e => (0, r.jsx)("div", { ...e,
                                    style: s(),
                                    children: (0, r.jsx)(o(36481).p, {
                                        focus: u,
                                        ref: d,
                                        value: m,
                                        onChange: h,
                                        placeholder: c.formatMessage(n.value),
                                        onBlur: f,
                                        onCancel: g,
                                        style: {
                                            marginInlineEnd: 8,
                                            paddingInlineStart: 6,
                                            paddingInlineEnd: 0,
                                            width: 80,
                                            height: 30,
                                            ...s(),
                                            minWidth: o(109817).G$
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            }

            function s() {
                return {
                    margin: 0,
                    width: "100%",
                    height: "100%",
                    transition: "background 120ms ease-in"
                }
            }
        }
    }
]);