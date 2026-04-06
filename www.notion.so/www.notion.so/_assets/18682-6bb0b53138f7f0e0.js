"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18682], {
        13717: (e, t, r) => {
            function l(e) {
                let {
                    spaceStore: t,
                    groupId: l
                } = e;
                return r(398652).C.createChildStore(t, (0, r(659341).S4)({
                    spacePermissionGroupId: l,
                    spaceId: t.id
                }))
            }

            function i(e) {
                let {
                    spaceStore: t,
                    groupId: l,
                    userId: i
                } = e;
                return r(291886).m.createChildStore(t, (0, r(867863).BZ)({
                    spacePermissionGroupId: l,
                    spaceId: t.id,
                    userId: i
                }))
            }
            r.d(t, {
                A: () => i,
                E: () => l
            })
        },
        69906: (e, t, r) => {
            r.d(t, {
                td: () => c,
                mL: () => s,
                Ti: () => _,
                r9: () => p,
                Ul: () => g
            }), r(944114), r(898992), r(354520), r(672577), r(581454), r(737550);
            var l, i = r(296540),
                o = r(474848);
            let n = {
                margin: "0 10px",
                maxHeight: "20vh",
                overflowY: "auto"
            };

            function a(e) {
                let t, l, {
                        filter: a,
                        parentStore: s,
                        updateValue: d,
                        onClose: u,
                        desktopTopActions: c,
                        mobileMenuTitle: p,
                        mobileMoreActions: m
                    } = e,
                    g = (0, r(713311).ET)(),
                    h = (0, i.useMemo)(() => (0, r(400473).gc)(a) ? (0, r(400473).GK)(a) : [], [a]),
                    y = (0, r(533992).Y0)(),
                    v = (0, r(682985).K8)(() => {
                        let e = g.collectionViewStore(),
                            t = null == e ? void 0 : e.getCollectionSource();
                        if ((null == t ? void 0 : t.type) !== "typed") return [];
                        let l = t.aggregatedCollections;
                        return l ? (0, r(213832)._E)(l).map(e => r(356912).m.createChildStore(s, {
                            table: r(832375).VlP,
                            id: e.collectionPointer.id
                        })) : []
                    }, [g, s]),
                    f = (0, r(682985).K8)(() => r(381453).oE(h.map(e => {
                        if (e.value) return r(356912).m.createChildStore(s, {
                            table: r(832375).VlP,
                            id: e.value
                        })
                    })), [h, s]),
                    x = (0, r(682985).K8)(() => f.map(e => (0, o.jsx)(r(628462).A, {
                        format: r(986939).A.isMobile ? r(696654).NY.Large : r(696654).NY.Small,
                        value: (0, o.jsx)(r(655608).A, {
                            collectionStore: e
                        }),
                        onClickRemove: () => {
                            let t = h.find(t => t.value === e.id);
                            t && d(r(381453).FF(h, t))
                        },
                        showRemoveButton: !0,
                        isSingle: !1,
                        shouldShrink: !0,
                        backgroundColor: "transparent",
                        showTooltip: "overflow"
                    }, e.id)), [f, h, d]),
                    [j, A] = (0, i.useState)(""),
                    S = (0, r(109939).tz)(),
                    C = (0, r(682985).K8)(() => "" === j ? v : (0, r(821048).Ay)(j, v, e => r(247438).q4_(e.getName() ? ? [])), [j, v]),
                    b = (0, r(682985).uB)(void 0, r(419110).$),
                    k = (0, r(682985).K8)(() => [{
                        key: "collections",
                        items: C.map(e => {
                            let t = !!h.find(t => "exact" === t.type && t.value === e.id);
                            return {
                                key: e.id,
                                render: l => (0, o.jsx)(r(103558).A, { ...l,
                                    store: e,
                                    isChecked: t
                                }),
                                action: () => {
                                    let t = {
                                        type: "exact",
                                        value: e.id
                                    };
                                    d(h.some(e => e.value === t.value) ? h.filter(e => e.value !== t.value) : h.concat(t))
                                }
                            }
                        }),
                        render: e => (0, o.jsx)(r(844565).A, { ...e
                        })
                    }], [C, h, d]),
                    M = (0, o.jsx)(r(160319).Ay, {
                        focus: !r(986939).A.isMobile || void 0,
                        focusAfterAnimation: !0,
                        format: r(160319).le.FilterValue,
                        tokens: x,
                        placeholder: S.formatMessage({
                            defaultMessage: "Search for one or more sources",
                            id: "database.filterValue.locationType.searchPlaceholder"
                        }),
                        onRemoveLastToken: () => {
                            d(h.slice(0, h.length - 1))
                        },
                        onClearButtonClick: () => {
                            d([]), null == u || u()
                        },
                        value: j,
                        onChange: e => {
                            A(e.target.value)
                        },
                        dontShowBorderBottom: y.isAndroid,
                        showClearButton: !0,
                        style: n
                    }),
                    F = (0, o.jsxs)(r(844565).A, {
                        children: [r(986939).A.isMobile ? void 0 : c, M]
                    });
                return (t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: p,
                    left: m,
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: u,
                    header: F
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: 260,
                    header: F,
                    disableHeaderBorder: !0
                }, (0, r(400473).gc)(a)) ? (l = g ? 0 === v.length || "" !== j && 0 === C.length ? (0, o.jsx)(r(844565).A, {
                    children: (0, o.jsx)(r(498341).u, {
                        title: (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "No results",
                            id: "database.filterValue.selectType.noResults.message"
                        })
                    })
                }) : (0, o.jsx)(r(558045).A, {
                    type: r(558045).O.Vertical,
                    initialFocus: 0,
                    sections: k,
                    store: b,
                    onAccept: () => {
                        A("")
                    }
                }) : (0, o.jsx)(r(844565).A, {
                    children: (0, o.jsx)(r(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 8,
                        children: (0, o.jsx)(r(517334).k, {})
                    })
                }), (0, o.jsx)(r(747369).A, { ...t,
                    children: l
                })) : null
            }
            let s = ((l = {})[l.AdvancedFilter = 0] = "AdvancedFilter", l[l.PropertyFilter = 1] = "PropertyFilter", l[l.ConditionalColorRule = 2] = "ConditionalColorRule", l),
                d = (0, r(109939).YK)({
                    startingMessage: {
                        defaultMessage: "Select or type a date…",
                        id: "search.dateMenu.dateMessage"
                    },
                    chevronDownAriaLabel: {
                        id: "filterDateMenu.chevronDownAriaLabel.ariaLabel",
                        defaultMessage: "Dropdown to select a date relative to today"
                    },
                    pageContainingThisView: {
                        defaultMessage: "This page",
                        id: "database.filterValue.pageContainingThisView"
                    }
                }),
                u = r(546605).Store.createClass("", {
                    name: "QueryStore"
                });

            function c(e) {
                let {
                    schema: t,
                    propertyFilter: l,
                    propertyNameOverride: n,
                    parentStore: a,
                    onClose: s,
                    onChange: d,
                    onChangeDebounced: c,
                    collectionViewId: p,
                    collectionContextStore: m,
                    allowRelativePersonFilter: g,
                    allowRelativeDateFilter: h,
                    hideTopActions: y,
                    ...v
                } = e, f = (0, r(682985).uB)(void 0, r(510969).A), x = (0, r(682985).uB)(void 0, r(510969).A), j = (0, r(682985).uB)(void 0, r(419110).$), A = (0, r(682985).uB)(void 0, u), S = (0, r(682985).K8)(() => {
                    var e;
                    return (null == m || null == (e = m.collectionViewStore()) ? void 0 : e.getType()) === "form_editor"
                }, [m]);
                (0, r(655854).A)({
                    capture: !S,
                    preventType: r(644154).A.Y
                });
                let C = (0, i.useCallback)(e => {
                    null == s || s()
                }, [s]);
                return (0, o.jsx)(r(369064).N, {
                    debugName: "CollectionFilterValueMenu",
                    capture: !0,
                    onEsc: C,
                    children: (0, o.jsx)(eg, {
                        propertyFilter: l,
                        schema: t,
                        propertyNameOverride: n,
                        parentStore: a,
                        onChange: d,
                        onChangeDebounced: c,
                        onClose: s,
                        collectionViewId: p,
                        collectionContextStore: m,
                        allowRelativePersonFilter: g,
                        allowRelativeDateFilter: h,
                        queryStore: A,
                        menuListStore: j,
                        dateFilterPopupStore: x,
                        dateRangeFilterPopupStore: f,
                        hideTopActions: y,
                        ...v
                    })
                })
            }

            function p(e) {
                let {
                    query: t,
                    propertySchema: l,
                    selectedValues: i,
                    updateValue: n,
                    isMobile: a,
                    styles: s,
                    isFormEditorView: d
                } = e, u = l.options || [];
                return (t ? (0, r(821048).Ay)(t, u, e => e.value) : u).map(e => {
                    let t = !!i.find(t => t.value === e.value);
                    return {
                        key: e.value,
                        render: l => (0, o.jsx)(r(95582).A, {
                            icon: (0, o.jsx)(r(349050).S, {
                                onClick: l.onClick,
                                checked: t,
                                size: 14,
                                style: s.checkboxIcon,
                                disallowTabbing: !0
                            }),
                            title: d ? e.value : (0, o.jsx)(r(593100).O, {
                                format: a ? r(696654).NY.Large : r(696654).NY.Medium,
                                isSingle: !0,
                                value: e.value,
                                color: e.color,
                                showRemoveButton: !1
                            }),
                            isTokenTitle: !0,
                            ...l
                        }),
                        action: () => {
                            n(t ? i.filter(({
                                value: t
                            }) => t !== e.value) : [...i, {
                                type: "exact",
                                value: e.value
                            }])
                        }
                    }
                })
            }

            function m(e) {
                return Array.isArray(e) ? 0 === e.length ? {
                    type: "exact",
                    value: void 0
                } : 1 === e.length ? e[0] : e : e
            }

            function g(e) {
                return e === s.AdvancedFilter || e === s.PropertyFilter
            }

            function h(e, t) {
                return !!e.find(e => r(381453).n4(e, t))
            }

            function y() {
                return (0, o.jsx)(r(109939).sA, {
                    defaultMessage: "Me",
                    id: "database.filterValue.personType.firstPersonPropertyValue.title"
                })
            }

            function v(e, t, l) {
                let {
                    filter: i
                } = l;
                (0, r(400473).s1)(i) ? null == t || t({ ...i,
                    subfilter: { ...i.subfilter,
                        value: m(e)
                    }
                }): null == t || t({ ...i,
                    value: m(e)
                })
            }

            function f(e, t, l) {
                let {
                    filter: i
                } = l;
                (0, r(400473).s1)(i) ? null == t || t({ ...i,
                    subfilter: e
                }): null == t || t(e)
            }

            function x(e, t, l, i, o) {
                return () => {
                    v(e ? t.filter(e => !r(381453).n4(e, l)) : [...t, l], o, i)
                }
            }

            function j({
                filter: e,
                onChange: t,
                propertyFilter: l,
                onClose: i
            }) {
                return (0, r(400473).t6)(e.value) ? null : (0, o.jsx)(r(844565).A, {
                    topBorder: !0,
                    children: (0, o.jsx)(r(95582).A, {
                        focused: !1,
                        title: (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Clear",
                            id: "database.filterValue.clear.message"
                        }),
                        onClick: () => {
                            v({
                                type: "exact",
                                value: void 0
                            }, t, l), null == i || i()
                        }
                    })
                })
            }
            async function A(e, t, l, i) {
                let o = await r(308825).T.searchActions.load(),
                    n = i.locale,
                    {
                        users: a,
                        bots: s
                    } = await o.searchSpaceActors({
                        environment: l,
                        query: e,
                        membersOnly: !1,
                        userLocale: n,
                        limit: 20
                    }),
                    d = o.searchSpaceGroups({
                        query: e,
                        intl: i
                    });
                return await Promise.all([...a.map(async ({
                    id: e
                }) => {
                    let l = (0, r(517013).v3)(t, {
                        table: r(832375).oo9,
                        id: e
                    });
                    await l.load()
                }), ...s.map(async e => {
                    let l = (0, r(517013).v3)(t, {
                        table: r(832375).GPl,
                        id: e.id,
                        spaceId: e.space_id
                    });
                    await l.load()
                })]), {
                    users: a,
                    bots: s,
                    groups: d
                }
            }
            async function S(e, t, l) {
                let {
                    query: i,
                    spaceId: o,
                    collectionId: n
                } = e;
                if (!o || !n) return [];
                let a = await r(308825).T.searchActions.load(),
                    {
                        results: s
                    } = await a.searchPagesInCollection({
                        environment: l,
                        query: i,
                        collectionId: n,
                        limit: 20,
                        spaceId: o,
                        excludeTemplates: !0,
                        source: "relation_menu",
                        includePublicPagesWithoutExplicitAccess: !0,
                        boostRecentlyViewedPages: !1
                    });
                return 0 === s.length ? [] : (await Promise.all(s.map(async e => {
                    let l = (0, r(517013).v3)(t, {
                        table: r(832375).evP,
                        id: e
                    });
                    await l.load()
                })), s)
            }
            let C = {
                style0: {
                    color: r(632079).Tj.text.tertiary
                }
            };

            function b({
                filter: e
            }) {
                return (0, o.jsx)("span", {
                    style: C.style0,
                    children: (0, r(323700).J)(e.operator).toLocaleLowerCase()
                })
            }
            let k = {
                style0: {
                    width: "260px"
                },
                style1: {
                    marginInlineEnd: 4,
                    marginInlineStart: 2,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    borderRadius: 6,
                    flexShrink: 0
                },
                style2: {
                    display: "flex",
                    alignItems: "center",
                    ...!r(986939).A.isMobile && {
                        color: r(632079).Tj.text.secondary,
                        fill: r(632079).Tj.icon.tertiary,
                        fontWeight: 500,
                        fontSize: 12
                    }
                },
                style3: {
                    marginInlineEnd: 4
                }
            };

            function M({
                propertySchema: e,
                propertyFilter: t,
                onChange: l
            }) {
                let i = t.filter;
                if (!(0, r(400473).gc)(i) || !(0, r(725462).n)(i)) return (0, o.jsx)(o.Fragment, {
                    children: e.name
                });
                let n = {
                    width: 190,
                    items: r(910369).$N,
                    selectedItem: (0, r(972835).C)(i),
                    getKey: e => e,
                    onSelect: e => {
                        f({ ...i,
                            use_end: (0, r(357484).Z)(e)
                        }, l, t)
                    },
                    renderItem: e => (0, o.jsx)(r(51831).m, {
                        content: () => (0, r(323700).WG)(e.value),
                        placement: "right",
                        textWrap: !0,
                        style: k.style0,
                        children: t => (0, o.jsx)(r(95582).A, {
                            title: (0, r(323700).h0)(e.value),
                            ...(0, r(63390).A)(e, t)
                        })
                    }),
                    children: e => (0, o.jsx)(r(64960).Ay, { ...e,
                        style: k.style1,
                        children: (0, o.jsxs)("div", {
                            style: k.style2,
                            children: [(0, o.jsx)("span", {
                                style: k.style3,
                                children: (0, r(323700).h0)((0, r(972835).C)(i))
                            }), (0, o.jsx)(r(16275).I, {
                                icon: r(469102).arrowChevronSingleDownFillSmallIcon,
                                size: "xxs"
                            })]
                        })
                    })
                };
                return (0, o.jsx)(r(691509).A, { ...n,
                    menuTypeOverride: (0, r(649476).PK)()
                })
            }
            let F = {
                style0: {
                    marginInlineEnd: 4,
                    marginInlineStart: 2,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    borderRadius: 6,
                    flexShrink: 0
                },
                style1: {
                    display: "flex",
                    alignItems: "center",
                    ...!r(986939).A.isMobile && {
                        color: r(632079).Tj.text.tertiary,
                        fontSize: 12
                    }
                },
                style2: {
                    marginInlineEnd: 4
                }
            };

            function T({
                propertyFilter: e,
                onChange: t
            }) {
                let l = (0, r(109939).tz)(),
                    {
                        filter: i
                    } = e;
                if (!(0, r(400473).s1)(i)) return null;
                let n = {
                    width: 190,
                    items: r(400473).$X,
                    getKey: e => e,
                    selectedItem: i.operator,
                    onSelect: e => {
                        null == t || t({ ...i,
                            operator: e
                        })
                    },
                    renderItem: e => (0, o.jsx)(r(95582).A, {
                        title: (0, r(323700).wE)(e.value, l),
                        ...e
                    }),
                    children: e => (0, o.jsx)(r(64960).Ay, { ...e,
                        style: F.style0,
                        children: (0, o.jsxs)("div", {
                            style: F.style1,
                            children: [(0, o.jsx)("span", {
                                style: F.style2,
                                children: (0, r(323700).wE)(i.operator, l).toLocaleLowerCase()
                            }), (0, o.jsx)(r(16275).I, {
                                icon: r(469102).arrowChevronSingleDownFillSmallIcon,
                                size: "xxs"
                            })]
                        })
                    })
                };
                return (0, o.jsx)(r(691509).A, { ...n,
                    menuTypeOverride: (0, r(649476).PK)()
                })
            }
            let w = {
                style0: {
                    marginInlineEnd: 4,
                    marginInlineStart: 2,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    borderRadius: 6,
                    flexShrink: 0
                },
                style1: {
                    display: "flex",
                    alignItems: "center",
                    ...!r(986939).A.isMobile && {
                        color: r(632079).Tj.text.secondary,
                        fill: r(632079).Tj.icon.tertiary,
                        fontWeight: 500,
                        fontSize: 12
                    }
                },
                style2: {
                    marginInlineEnd: 4
                }
            };

            function I({
                propertyFilter: e,
                schema: t,
                parentStore: l,
                onChange: i,
                context: n
            }) {
                let {
                    property: a
                } = e, d = t[a], u = (0, r(400473).s1)(e.filter) ? e.filter.subfilter : e.filter, c = (0, r(682985).K8)(() => (0, r(400473).HF)({
                    schema: t,
                    property: a,
                    getRecordModel: l.getRecordModel
                }), [l, a, t]);
                if ((0, r(400473).s1)(u)) return null;
                let p = {
                    width: 190,
                    items: (0, r(400473).U6)({
                        filterValueType: c,
                        isConditionalColorRuleContext: n === s.ConditionalColorRule,
                        propertySchema: d
                    }),
                    selectedItem: u.operator,
                    getKey: e => e,
                    onSelect: t => {
                        f((0, r(323700).iI)({
                            filterValueType: c,
                            filter: u,
                            operator: t,
                            context: "propertyFilter"
                        }), i, e)
                    },
                    renderItem: e => (0, o.jsx)(r(95582).A, {
                        title: (0, r(323700).J)(e.value),
                        ...e
                    }),
                    children: e => (0, o.jsx)(r(64960).Ay, { ...e,
                        style: w.style0,
                        children: (0, o.jsxs)("div", {
                            style: w.style1,
                            children: [(0, o.jsx)("span", {
                                style: w.style2,
                                children: (0, r(323700).J)(u.operator).toLocaleLowerCase()
                            }), (0, o.jsx)(r(16275).I, {
                                icon: r(469102).arrowChevronSingleDownFillSmallIcon,
                                size: "xxs"
                            })]
                        })
                    })
                };
                return (0, o.jsx)(r(691509).A, { ...p,
                    menuTypeOverride: (0, r(649476).PK)()
                })
            }
            let P = {
                maxWidth: 240,
                whiteSpace: void 0
            };

            function R({
                parent: e,
                canUserConfigureFilters: t,
                canUserFilterAdditionalSources: l,
                onDelete: n,
                onAddToCombinatorFilter: a,
                onAddAdditionalSourcesClicked: s
            }) {
                let d = r(986939).A.isMobile ? {
                        menuType: r(649476).gu.ActionSheet
                    } : {
                        menuType: r(649476).gu.Popup,
                        maxHeight: r(400473).mi
                    },
                    u = (0, i.useMemo)(() => [{
                        key: "actions",
                        render: e => (0, o.jsx)(r(844565).A, {
                            disableMobilePadding: !0,
                            ...e
                        }),
                        items: t ? r(381453).oE([{
                            key: "delete",
                            render: e => (0, o.jsx)(r(95582).A, { ...e,
                                title: (0, o.jsx)(r(109939).sA, {
                                    id: "database.filterValue.deleteFilter.title",
                                    defaultMessage: "Delete filter"
                                }),
                                icon: (0, o.jsx)(r(16275).I, {
                                    icon: r(968411).trashIcon
                                }),
                                isRedOnHover: !0
                            }),
                            action: () => {
                                e.close(), null == n || n()
                            }
                        }, l && s ? {
                            key: "addAdditionalSources",
                            action: () => {
                                e.close(), s()
                            },
                            render: e => (0, o.jsx)(r(392285).y, { ...e
                            })
                        } : void 0, a ? {
                            key: "merge",
                            render: e => (0, o.jsx)(r(51831).m, {
                                placement: "right",
                                style: P,
                                content: () => (0, o.jsx)("div", {
                                    children: (0, o.jsx)(r(152989).N, {})
                                }),
                                children: t => (0, o.jsx)(r(95582).A, { ...(0, r(63390).A)(e, t),
                                    title: (0, o.jsx)(r(109939).sA, {
                                        id: "database.filterValue.mergeIntoAdvancedFilter.title",
                                        defaultMessage: "Add to advanced filter"
                                    }),
                                    icon: (0, o.jsx)(r(16275).I, {
                                        icon: r(895105).filterIcon
                                    })
                                })
                            }),
                            action: () => {
                                e.close(), a()
                            }
                        } : void 0]) : []
                    }], [a, n, e, t, l, s]);
                return (0, o.jsx)(r(747369).A, { ...d,
                    children: (0, o.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        sections: u,
                        initialFocus: void 0
                    })
                })
            }

            function O({
                propertySchema: e,
                propertyFilter: t,
                propertyNameOverride: l,
                onChange: i
            }) {
                return (0, r(160075).q)(e) ? (0, o.jsx)(M, {
                    propertyFilter: t,
                    onChange: i,
                    propertySchema: e
                }) : (0, o.jsx)(r(503473).j, {
                    children: l ? ? e.name
                })
            }
            let B = {
                style0: {
                    width: 16,
                    height: 16
                },
                style1: {
                    marginInlineEnd: -4
                },
                style2: { ...!r(986939).A.isMobile && {
                        height: 20,
                        width: 20
                    }
                },
                style3: {
                    width: 240
                }
            };

            function N({
                canUserConfigureFilters: e,
                onDelete: t,
                onAddToCombinatorFilter: l,
                context: i,
                canUserFilterAdditionalSources: n,
                onAddAdditionalSourcesClicked: a
            }) {
                let d = (0, r(109939).tz)();
                return i === s.ConditionalColorRule ? (0, o.jsx)(r(374533).A, {
                    icon: r(968411).trashIcon,
                    onClick: t,
                    ariaLabel: d.formatMessage({
                        id: "database.filterValue.deleteConditionalColorRule.title",
                        defaultMessage: "Delete conditional color rule"
                    }),
                    iconStyle: B.style0,
                    colorVariant: "secondary",
                    style: B.style1
                }) : (0, o.jsx)(r(656252).A, {
                    popupType: r(986939).A.isMobile ? r(182718).nl.SlideUp : r(182718).nl.Popup,
                    content: r => (0, o.jsx)(R, {
                        parent: r,
                        context: i,
                        canUserConfigureFilters: e,
                        onDelete: t,
                        onAddToCombinatorFilter: l,
                        canUserFilterAdditionalSources: n,
                        onAddAdditionalSourcesClicked: a
                    }),
                    style: B.style3,
                    originGap: 2,
                    placementToOrigin: "right",
                    alignmentToOrigin: "start",
                    children: t => e && (0, o.jsx)(r(374533).A, {
                        ariaLabel: d.formatMessage({
                            id: "database.filterValue.dotsIcon.ariaLabel",
                            defaultMessage: "More actions"
                        }),
                        icon: r(361226).ellipsisSmallIcon,
                        style: B.style2,
                        ...t
                    })
                })
            }
            let V = {
                style0: {
                    flexShrink: 1,
                    ...r(699422).RC
                }
            };

            function _({
                propertyFilter: e,
                onChange: t,
                schema: l,
                propertyNameOverride: i,
                parentStore: n,
                hideTopActions: a,
                ...d
            }) {
                let {
                    context: u
                } = d;
                if (a || u === s.AdvancedFilter) return null;
                let {
                    property: c
                } = e, p = l[c];
                if (!p) return null;
                let m = () => (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("span", {
                            style: V.style0,
                            children: (0, o.jsx)(O, {
                                propertyFilter: e,
                                onChange: t,
                                propertySchema: p,
                                propertyNameOverride: i
                            })
                        }), (0, r(400473).s1)(e.filter) ? (0, o.jsx)(T, {
                            propertyFilter: e,
                            onChange: t
                        }) : void 0, (0, o.jsx)(I, {
                            propertyFilter: e,
                            schema: l,
                            parentStore: n,
                            onChange: t,
                            context: u
                        })]
                    }),
                    g = () => (0, o.jsx)(N, { ...d
                    });
                return u === s.ConditionalColorRule ? (0, o.jsx)(E, {
                    renderPropertyComponents: m,
                    renderMoreActionsComponent: g
                }) : (0, o.jsx)(K, {
                    renderPropertyComponents: m,
                    renderMoreActionsComponent: g
                })
            }
            let L = {
                propertyComponents: {
                    display: "flex",
                    color: r(632079).Tj.text.tertiary,
                    fontSize: 12,
                    alignItems: "flex-start",
                    paddingTop: 4,
                    paddingBottom: 4,
                    flexShrink: 1,
                    minWidth: 1
                }
            };

            function E({
                renderPropertyComponents: e,
                renderMoreActionsComponent: t
            }) {
                return (0, o.jsxs)(r(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingInlineEnd: 8,
                    paddingInlineStart: 8,
                    children: [(0, o.jsx)("div", {
                        style: L.propertyComponents,
                        children: e()
                    }), t()]
                })
            }
            let D = {
                container: {
                    display: "flex",
                    color: r(632079).Tj.text.tertiary,
                    fontSize: 12,
                    alignItems: "flex-start",
                    paddingTop: 4,
                    paddingInlineEnd: 8,
                    paddingBottom: 2,
                    paddingInlineStart: 8
                },
                spacer: {
                    flexGrow: 1
                }
            };

            function K({
                renderPropertyComponents: e,
                renderMoreActionsComponent: t
            }) {
                return (0, o.jsxs)("div", {
                    style: D.container,
                    children: [e(), (0, o.jsx)("div", {
                        style: D.spacer
                    }), t()]
                })
            }
            let W = {
                style1: {
                    fontWeight: r(699422).Wy.medium,
                    flexShrink: 1,
                    marginInlineStart: 8,
                    maxWidth: 150,
                    ...r(699422).RC
                }
            };

            function H({
                propertyFilter: e,
                schema: t,
                propertyNameOverride: l,
                context: i,
                onChange: n,
                parentStore: a
            }) {
                let {
                    property: d
                } = e, u = t[d];
                return u ? i === s.PropertyFilter ? (0, o.jsxs)(r(4458).fI, {
                    children: [(0, o.jsx)("span", {
                        style: W.style1,
                        children: (0, o.jsx)(O, {
                            propertyFilter: e,
                            onChange: n,
                            propertySchema: u,
                            propertyNameOverride: l
                        })
                    }), (0, r(400473).s1)(e.filter) ? (0, o.jsx)(T, {
                        propertyFilter: e,
                        onChange: n
                    }) : void 0, (0, o.jsx)(I, {
                        propertyFilter: e,
                        schema: t,
                        parentStore: a,
                        onChange: n,
                        context: i
                    })]
                }) : (0, o.jsx)(o.Fragment, {
                    children: u.name
                }) : null
            }

            function z({
                context: e,
                canUserConfigureFilters: t,
                onDelete: r,
                onAddToCombinatorFilter: l,
                canUserFilterAdditionalSources: i,
                onAddAdditionalSourcesClicked: n
            }) {
                return e !== s.PropertyFilter ? null : (0, o.jsx)(N, {
                    canUserConfigureFilters: t,
                    onDelete: r,
                    onAddToCombinatorFilter: l,
                    context: e,
                    canUserFilterAdditionalSources: i,
                    onAddAdditionalSourcesClicked: n
                })
            }

            function q({
                filter: e,
                onChange: t,
                propertyFilter: l,
                schema: i,
                propertyNameOverride: n,
                parentStore: a,
                onClose: s,
                ...d
            }) {
                let u, {
                        context: c
                    } = d,
                    p = (0, r(109939).tz)(),
                    m = (0, o.jsx)(r(310324).Ay, {
                        focus: !0,
                        focusInitial: !0,
                        focusAfterAnimation: !0,
                        value: (0, r(400473).gc)(e) && e.value.value ? e.value.value : "",
                        onChange: e => {
                            v({
                                type: "exact",
                                value: e.target.value
                            }, t, l)
                        },
                        onClearButtonClick: () => {
                            v({
                                type: "exact",
                                value: void 0
                            }, t, l)
                        },
                        placeholder: p.formatMessage({
                            defaultMessage: "Type a value…",
                            id: "database.filterValue.textType.searchPlaceholder"
                        }),
                        showClearButton: !0
                    }),
                    h = (0, o.jsxs)(r(844565).A, {
                        disableMobileBorders: !0,
                        children: [r(986939).A.isMobile ? void 0 : (0, o.jsx)(_, {
                            propertyFilter: l,
                            onChange: t,
                            schema: i,
                            propertyNameOverride: n,
                            parentStore: a,
                            ...d
                        }), (0, r(400473).gc)(e) ? m : void 0]
                    });
                return u = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: l,
                        schema: i,
                        propertyNameOverride: n,
                        context: c,
                        onChange: t,
                        parentStore: a
                    }),
                    left: (0, o.jsx)(z, { ...d
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == s ? void 0 : s(),
                    header: h
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: g(c) ? 220 : void 0,
                    header: h
                }, (0, o.jsx)(r(747369).A, { ...u
                })
            }
            let U = {
                paddingBottom: 8
            };

            function Y({
                filter: e,
                onChange: t,
                propertyFilter: l,
                schema: i,
                propertyNameOverride: n,
                parentStore: a,
                onClose: s,
                ...d
            }) {
                let u, {
                        context: c
                    } = d,
                    p = (0, r(109939).tz)(),
                    m = (0, o.jsx)(r(310324).Ay, {
                        focus: !0,
                        focusInitial: !0,
                        focusAfterAnimation: !0,
                        value: (0, r(400473).gc)(e) && "number" == typeof e.value.value ? e.value.value.toString() : "",
                        inputLeft: (0, o.jsx)(b, {
                            filter: e
                        }),
                        onChange: e => {
                            v({
                                type: "exact",
                                value: (0, r(368864).q)(e.target.value, p)
                            }, t, l)
                        },
                        onClearButtonClick: () => {
                            v({
                                type: "exact",
                                value: void 0
                            }, t, l)
                        },
                        placeholder: p.formatMessage({
                            defaultMessage: "Type a value…",
                            id: "database.filterValue.numberType.searchPlaceholder"
                        }),
                        showClearButton: !0,
                        style: U
                    }),
                    h = (0, o.jsxs)(r(844565).A, {
                        disableMobileBorders: !0,
                        disableMobilePadding: !0,
                        children: [r(986939).A.isMobile ? void 0 : (0, o.jsx)(_, {
                            propertyFilter: l,
                            onChange: t,
                            schema: i,
                            propertyNameOverride: n,
                            parentStore: a,
                            ...d
                        }), (0, r(400473).gc)(e) ? m : void 0]
                    });
                return u = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: l,
                        schema: i,
                        propertyNameOverride: n,
                        context: c,
                        onChange: t,
                        parentStore: a
                    }),
                    left: (0, o.jsx)(z, { ...d
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == s ? void 0 : s(),
                    header: h
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: g(c) ? 220 : void 0,
                    header: h
                }, (0, o.jsx)(r(747369).A, { ...u
                })
            }

            function G(e, t, r) {
                t.setState(e), r.setState({
                    focus: {
                        section: 0,
                        indexLocal: 0,
                        indexGlobal: 0,
                        footerFocused: !1
                    }
                })
            }
            let $ = {
                style0: { ...!r(986939).A.isMobile && {
                        paddingTop: 0,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 8
                    }
                },
                style1: {
                    paddingTop: 2,
                    gap: 4
                }
            };

            function Z({
                filter: e,
                schema: t,
                propertyFilter: l,
                propertyNameOverride: n,
                parentStore: a,
                onChange: s,
                onClose: d,
                queryStore: u,
                menuListStore: c,
                collectionContextStore: m,
                hideTopActions: h,
                ...y
            }) {
                let {
                    context: f
                } = y, x = (0, r(109939).tz)(), {
                    isAndroid: j
                } = (0, r(533992).Y0)(), A = (0, r(682985).O$)(u), S = (0, r(682985).K8)(() => (0, r(698087).YF)(t, l, a), [t, l, a]), [C, b] = (0, r(739271).s)(), k = (0, r(682985).K8)(() => {
                    let e = null == m ? void 0 : m.collectionViewStore();
                    return (null == e ? void 0 : e.getType()) === "form_editor"
                }, [m]), {
                    items: M,
                    tokenizedInput: F
                } = (0, i.useMemo)(() => {
                    if (!S || !(0, r(532792).l)(S)) return {
                        items: [],
                        tokenizedInput: null
                    };
                    let t = S.options || [],
                        i = (0, r(400473).gc)(e) ? (0, r(400473).v0)(e) ? (0, r(400473).Zl)(e) : (0, r(400473).SM)(e) : [],
                        n = i.map(e => {
                            if (void 0 === e.value) return null;
                            let n = (0, r(561872).jy)(t, e.value);
                            return n ? (0, o.jsx)(r(593100).O, {
                                format: r(986939).A.isMobile ? r(696654).NY.Large : r(696654).NY.Small,
                                isSingle: !0,
                                value: n.value,
                                color: n.color,
                                showRemoveButton: !0,
                                onClickRemove: () => {
                                    v(r(381453).FF(i, e), s, l)
                                }
                            }, n.id) : null
                        }),
                        a = (0, o.jsx)("div", {
                            style: $.style0,
                            children: (0, o.jsx)(r(160319).Ay, {
                                focus: !r(986939).A.isMobile || void 0,
                                focusAfterAnimation: !0,
                                format: r(160319).le.FilterValue,
                                tokens: k ? [] : n,
                                placeholder: x.formatMessage({
                                    defaultMessage: "Select one or more options…",
                                    id: "database.filterValue.selectType.searchPlaceholder"
                                }),
                                onRemoveLastToken: () => {
                                    v(i.slice(0, i.length - 1), s, l)
                                },
                                onClearButtonClick: () => {
                                    v([], s, l), null == d || d()
                                },
                                value: A,
                                onChange: e => {
                                    G(e.target.value, u, c)
                                },
                                dontShowBorderBottom: j,
                                showClearButton: !0,
                                tokenWrapStyle: $.style1,
                                ...C
                            })
                        });
                    return {
                        items: p({
                            query: A,
                            propertySchema: S,
                            selectedValues: i,
                            updateValue: e => {
                                v(e, s, l)
                            },
                            isMobile: r(986939).A.isMobile,
                            styles: {
                                checkboxIcon: {
                                    fill: r(632079).Tj.icon.primary,
                                    pointerEvents: "none"
                                }
                            },
                            isFormEditorView: k
                        }),
                        tokenizedInput: a
                    }
                }, [S, e, k, x, A, j, C, s, l, d, u, c]);
                if (!S || !(0, r(532792).l)(S)) return null;
                let T = (0, o.jsxs)(r(844565).A, {
                        desktopStyle: {
                            marginTop: 8 * !!k
                        },
                        children: [r(986939).A.isMobile || k ? void 0 : (0, o.jsx)(_, {
                            propertyFilter: l,
                            onChange: s,
                            schema: t,
                            propertyNameOverride: n,
                            parentStore: a,
                            hideTopActions: h,
                            ...y
                        }), (0, r(400473).gc)(e) ? F : void 0]
                    }),
                    w = r(986939).A.isMobile ? {
                        menuType: r(649476).gu.Modal,
                        title: (0, o.jsx)(H, {
                            propertyFilter: l,
                            schema: t,
                            propertyNameOverride: n,
                            context: f,
                            onChange: s,
                            parentStore: a
                        }),
                        left: (0, o.jsx)(z, { ...y
                        }),
                        right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                        }),
                        onClickRight: () => null == d ? void 0 : d(),
                        header: T
                    } : {
                        menuType: r(649476).gu.Popup,
                        maxHeight: r(400473).mi,
                        width: g(f) ? 260 : void 0,
                        header: T,
                        disableHeaderBorder: !0,
                        tokenInputHeader: !0
                    };
                return (0, o.jsx)(r(747369).A, { ...w,
                    children: (0, r(400473).gc)(e) ? (0, o.jsxs)(o.Fragment, {
                        children: [0 === M.length ? (0, o.jsx)(r(844565).A, {
                            children: (0, o.jsx)(r(498341).u, {
                                title: (0, o.jsx)(r(109939).sA, {
                                    defaultMessage: "No results",
                                    id: "database.filterValue.selectType.noResults.message"
                                })
                            })
                        }) : void 0, M.length > 0 ? (0, o.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "select",
                                items: M
                            }],
                            store: c,
                            onAccept: () => {
                                G("", u, c)
                            },
                            comboboxProps: b
                        }) : void 0]
                    }) : void 0
                })
            }
            let Q = {
                tokenInputContainer: { ...!r(986939).A.isMobile && {
                        paddingTop: 4,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 8
                    }
                },
                tokenWrapStyle: {
                    alignItems: "center",
                    gap: 4
                },
                actorTokenStyle: {
                    margin: 0
                },
                inputStyle: {
                    maxHeight: "20vh"
                }
            };

            function X({
                filter: e,
                error: t,
                results: l,
                schema: n,
                propertyFilter: a,
                propertyNameOverride: s,
                parentStore: d,
                onChange: u,
                allowRelativePersonFilter: c,
                onClose: p,
                queryStore: m,
                menuListStore: h,
                hideTopActions: f,
                ...x
            }) {
                let j, {
                        context: A
                    } = x,
                    S = (0, r(533992).v3)(),
                    C = (0, r(109939).tz)(),
                    {
                        device: b
                    } = S,
                    k = (0, r(682985).O$)(m),
                    M = (0, r(682985).K8)(() => (0, r(698087).YF)(n, a, d), [n, a, d]),
                    [F, T] = (0, r(739271).s)(),
                    w = (0, i.useMemo)(() => (0, r(400473).gc)(e) ? (0, r(19484).W)(e) : [], [e]),
                    I = (0, r(682985).K8)(() => r(381453).oE(w.map(e => {
                        if ("exact" === e.type && e.value && e.value.table !== r(832375).naB) {
                            let t = (0, r(197018).xC)({
                                pointer: e.value,
                                getRecordValue: d.getRecordValue
                            });
                            return {
                                kind: "actor",
                                value: e,
                                actor: t,
                                id: e.value.id
                            }
                        }
                        if ("exact" === e.type && e.value && e.value.table === r(832375).naB) {
                            let t = (0, r(659341).S4)({
                                spacePermissionGroupId: e.value.id,
                                spaceId: e.value.spaceId
                            });
                            return {
                                kind: "group",
                                value: e,
                                groupPointer: t
                            }
                        }
                        if ("relative" === e.type && "me" === e.value && c) return {
                            kind: "me",
                            value: e
                        }
                    })), [c, w, d]),
                    P = (0, i.useMemo)(() => I.map((e, t) => "actor" === e.kind ? (0, o.jsx)(r(72461).Ay, {
                        actor: e.actor,
                        format: r(986939).A.isMobile ? r(72461).Ay.Format.Large : r(72461).Ay.Format.Small,
                        showRemoveButton: !0,
                        onClickRemove: () => {
                            v(r(381453).FF(w, e.value), u, a)
                        },
                        shouldShrink: !0,
                        isSingle: !1,
                        hasPersonHoverCard: !1,
                        style: Q.actorTokenStyle
                    }, e.id) : "group" === e.kind ? (0, o.jsx)(r(590285).AQ, {
                        groupPointer: e.groupPointer,
                        parentStore: d,
                        format: r(986939).A.isMobile ? r(72461).Ay.Format.Large : r(72461).Ay.Format.Small,
                        showRemoveButton: !0,
                        onClickRemove: () => {
                            v(r(381453).FF(w, e.value), u, a)
                        },
                        shouldShrink: !0,
                        isSingle: !1
                    }, e.groupPointer.id) : (0, o.jsx)(r(628462).A, {
                        format: r(986939).A.isMobile ? r(696654).NY.Large : r(696654).NY.Small,
                        value: (0, o.jsx)(y, {}),
                        onClickRemove: () => {
                            v(r(381453).FF(w, e.value), u, a)
                        },
                        showRemoveButton: !0,
                        isSingle: !1,
                        shouldShrink: !0,
                        backgroundColor: "transparent",
                        showTooltip: "overflow"
                    }, t)), [I, w, u, d, a]);
                if (!M) return null;
                let R = (0, o.jsx)("div", {
                        style: Q.tokenInputContainer,
                        children: (0, o.jsx)(r(160319).Ay, {
                            focus: !r(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            format: r(160319).le.FilterValue,
                            tokens: P,
                            tokenWrapStyle: Q.tokenWrapStyle,
                            placeholder: C.formatMessage({
                                defaultMessage: "Search for one or more people…",
                                id: "database.filterValue.personType.searchPlaceholder"
                            }),
                            style: Q.inputStyle,
                            onRemoveLastToken: () => {
                                v(w.slice(0, w.length - 1), u, a)
                            },
                            onClearButtonClick: () => {
                                v([], u, a), null == p || p()
                            },
                            value: k,
                            onChange: e => {
                                G(e.target.value, m, h)
                            },
                            dontShowBorderBottom: b.isAndroid,
                            showClearButton: !0,
                            ...F
                        })
                    }),
                    O = (0, o.jsxs)(r(844565).A, {
                        children: [r(986939).A.isMobile ? void 0 : (0, o.jsx)(_, {
                            propertyFilter: a,
                            onChange: u,
                            schema: n,
                            propertyNameOverride: s,
                            parentStore: d,
                            hideTopActions: f,
                            ...x
                        }), (0, r(400473).gc)(e) ? R : void 0]
                    });
                j = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: a,
                        schema: n,
                        propertyNameOverride: s,
                        context: A,
                        onChange: u,
                        parentStore: d
                    }),
                    left: (0, o.jsx)(z, { ...x
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == p ? void 0 : p(),
                    header: O
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: g(A) ? 260 : void 0,
                    header: O,
                    disableHeaderBorder: !0
                };
                let B = r(381453).oE((l && l.users || []).map(e => {
                        let t;
                        return t = !!w.find(t => {
                            var r;
                            return "exact" === t.type && (null == (r = t.value) ? void 0 : r.id) === e.id
                        }), {
                            key: e.id,
                            render: l => (0, o.jsx)(r(95582).A, { ...l,
                                title: (0, o.jsx)(r(72461).t_, {
                                    isSingle: !0,
                                    shouldShrink: !0,
                                    format: r(986939).A.isMobile ? r(72461).t_.Format.Large : r(72461).t_.Format.Medium,
                                    userValue: e,
                                    showRemoveButton: !1,
                                    hasPersonHoverCard: !1
                                }),
                                isTokenTitle: !0,
                                isChecked: t
                            }),
                            action: () => {
                                v(t ? w.filter(t => {
                                    var r;
                                    return "exact" !== t.type || (null == (r = t.value) ? void 0 : r.id) !== e.id
                                }) : [...w, {
                                    type: "exact",
                                    value: {
                                        table: r(832375).oo9,
                                        id: e.id
                                    }
                                }], u, a)
                            }
                        }
                    })),
                    N = r(381453).oE((l && l.groups || []).map(e => {
                        let t, l;
                        return t = w.some(t => {
                            var r;
                            return "exact" === t.type && (null == (r = t.value) ? void 0 : r.id) === e.id
                        }), {
                            key: (l = e.getGroupPointer()).id,
                            render: t => (0, o.jsx)(r(729460)._, {
                                group: e,
                                menuListItemProps: t
                            }),
                            action: () => {
                                v(t ? w.filter(e => {
                                    var t;
                                    return "exact" !== e.type || (null == (t = e.value) ? void 0 : t.id) !== l.id
                                }) : [...w, {
                                    type: "exact",
                                    value: l
                                }], u, a)
                            }
                        }
                    })),
                    V = ["created_by", "last_edited_by"].includes(M.type) ? r(381453).oE((l && l.bots || []).map(e => {
                        let t;
                        return t = !!w.find(t => {
                            var r;
                            return "exact" === t.type && (null == (r = t.value) ? void 0 : r.id) === e.id
                        }), {
                            key: e.id,
                            render: l => (0, o.jsx)(r(95582).A, { ...l,
                                title: (0, o.jsx)(r(72461).v7, {
                                    isSingle: !0,
                                    shouldShrink: !0,
                                    format: r(986939).A.isMobile ? r(72461).v7.Format.Large : r(72461).v7.Format.Medium,
                                    botValue: e,
                                    showRemoveButton: !1
                                }),
                                isTokenTitle: !0,
                                isChecked: t
                            }),
                            action: () => {
                                v(t ? w.filter(t => {
                                    var r;
                                    return "exact" !== t.type || (null == (r = t.value) ? void 0 : r.id) !== e.id
                                }) : [...w, {
                                    type: "exact",
                                    value: {
                                        table: r(832375).GPl,
                                        id: e.id
                                    }
                                }], u, a)
                            }
                        }
                    })) : [];
                if (c && (!k || "me".includes(k))) {
                    let e = !!w.find(e => "relative" === e.type && "me" === e.value);
                    B.unshift({
                        key: "me",
                        render: t => (0, o.jsx)(r(95582).A, { ...t,
                            title: (0, o.jsx)(y, {}),
                            isChecked: e,
                            style: r(986939).A.isMobile ? void 0 : {
                                fontSize: 14
                            }
                        }),
                        action: () => {
                            v(e ? w.filter(({
                                value: e
                            }) => "me" !== e) : [...w, {
                                type: "relative",
                                value: "me"
                            }], u, a)
                        }
                    })
                }
                let L = [];
                return (B.length > 0 || N.length > 0) && L.push({
                    key: "user property",
                    items: [...B, ...N]
                }), V.length > 0 && L.push({
                    key: "bot property",
                    render: e => (0, o.jsx)(r(844565).A, { ...e,
                        title: "Pick a bot"
                    }),
                    items: V
                }), (0, o.jsx)(r(747369).A, { ...j,
                    children: (0, r(400473).gc)(e) ? (0, o.jsxs)(o.Fragment, {
                        children: [t ? (0, o.jsx)(r(844565).A, {
                            children: (0, o.jsx)(r(498341).u, {
                                title: (0, o.jsx)(r(109939).sA, {
                                    defaultMessage: "Something went wrong.",
                                    id: "database.filterValue.personType.searchPersonPropertyMenuItem.errorMessage"
                                })
                            })
                        }) : void 0, 0 === L.length && l && !t ? (0, o.jsx)(r(844565).A, {
                            children: (0, o.jsx)(r(498341).u, {
                                title: (0, o.jsx)(r(109939).sA, {
                                    defaultMessage: "No results",
                                    id: "database.filterValue.personType.noResults.message"
                                })
                            })
                        }) : void 0, L.length > 0 ? (0, o.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            initialFocus: 0,
                            sections: L,
                            store: h,
                            onAccept: () => {
                                G("", m, h)
                            },
                            comboboxProps: T
                        }) : void 0, l || t ? void 0 : (0, o.jsx)(r(844565).A, {
                            children: (0, o.jsx)(r(200261).A, {})
                        })]
                    }) : void 0
                })
            }

            function J({
                filter: e,
                propertyFilter: t,
                schema: l,
                propertyNameOverride: i,
                onChange: n,
                parentStore: a,
                onClose: d,
                menuListStore: u,
                collectionContextStore: c,
                ...p
            }) {
                var m;
                let h, {
                        context: y
                    } = p,
                    f = (0, r(682985).K8)(() => {
                        let e = null == c ? void 0 : c.collectionViewStore();
                        return (null == e ? void 0 : e.getType()) === "form_editor"
                    }, [c]);
                h = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: t,
                        schema: l,
                        propertyNameOverride: i,
                        context: y,
                        onChange: n,
                        parentStore: a
                    }),
                    left: (0, o.jsx)(z, { ...p
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == d ? void 0 : d()
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: g(y) ? 220 : void 0,
                    footer: (0, o.jsx)(j, {
                        onChange: n,
                        propertyFilter: t,
                        onClose: d,
                        filter: e
                    })
                };
                let x = null == (m = e.value) ? void 0 : m.value;
                return (0, o.jsxs)(r(747369).A, { ...h,
                    children: [y === s.PropertyFilter ? (0, o.jsx)(r(844565).A, {
                        disableMobilePadding: !0,
                        children: r(986939).A.isMobile || f ? void 0 : (0, o.jsx)(_, {
                            propertyFilter: t,
                            onChange: n,
                            schema: l,
                            propertyNameOverride: i,
                            parentStore: a,
                            ...p
                        })
                    }) : void 0, (0, o.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "select",
                            render: e => (0, o.jsx)(r(844565).A, {
                                style: y === s.PropertyFilter ? {
                                    paddingTop: 0
                                } : void 0,
                                ...e
                            }),
                            items: [{
                                key: "unchecked",
                                render: e => (0, o.jsx)(r(95582).A, { ...e,
                                    title: (0, o.jsx)(r(109939).sA, {
                                        defaultMessage: "Unchecked",
                                        id: "database.filterValue.checkboxType.unchecked.title"
                                    }),
                                    isTokenTitle: !0,
                                    isChecked: !1 === x
                                }),
                                action: () => {
                                    v({
                                        type: "exact",
                                        value: !1
                                    }, n, t), null == d || d("selectOption")
                                }
                            }, {
                                key: "checked",
                                render: e => (0, o.jsx)(r(95582).A, { ...e,
                                    title: (0, o.jsx)(r(109939).sA, {
                                        defaultMessage: "Checked",
                                        id: "database.filterValue.checkboxType.checked.title"
                                    }),
                                    isTokenTitle: !0,
                                    isChecked: !0 === x
                                }),
                                action: () => {
                                    v({
                                        type: "exact",
                                        value: !0
                                    }, n, t), null == d || d("selectOption")
                                }
                            }]
                        }],
                        store: u,
                        onAccept: () => null == d ? void 0 : d("selectOption"),
                        captureKeyboardOnlyWhenFocused: !0
                    }), r(986939).A.isMobile ? (0, o.jsx)(j, {
                        onChange: n,
                        propertyFilter: t,
                        onClose: d,
                        filter: e
                    }) : void 0]
                })
            }
            let ee = {
                tokenInputContainer: { ...!r(986939).A.isMobile && {
                        paddingTop: 4,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 8
                    }
                },
                tokenWrapStyle: {
                    paddingTop: 2,
                    gap: "5px 3px"
                },
                tokenStyle: {
                    margin: 0
                },
                inputStyle: {
                    maxHeight: "20vh",
                    overflowY: "auto"
                }
            };

            function et({
                filter: e,
                error: t,
                results: l,
                schema: n,
                propertyFilter: a,
                propertyNameOverride: s,
                parentStore: u,
                onChange: c,
                onClose: p,
                collectionViewId: m,
                queryStore: y,
                menuListStore: f,
                collectionContextStore: j,
                allowCurrentPageInRelatedCollectionFilter: A,
                hideTopActions: S,
                ...C
            }) {
                let b, {
                        context: k
                    } = C,
                    M = (0, r(533992).v3)(),
                    F = (0, r(109939).tz)(),
                    {
                        device: T
                    } = M,
                    w = (0, r(682985).O$)(y),
                    I = (0, r(682985).K8)(() => (0, r(698087).YF)(n, a, u), [n, a, u]),
                    P = (0, r(682985).K8)(() => (function(e) {
                        var t, l, i;
                        let {
                            collectionViewId: o,
                            parentStore: n,
                            collectionContextStore: a
                        } = e;
                        if (o) {
                            let e = null == (i = r(547131).p.createChildStore(n, {
                                table: r(832375).Gy1,
                                id: o
                            }).getParentBlockStore()) ? void 0 : i.getNearestAncestorTemplateStore();
                            if (e) return e
                        }
                        let s = null == a || null == (t = a.dashboardWidgetStore.state) ? void 0 : t.dashboardCollectionViewBlockStore.getNearestAncestorTemplateStore();
                        return s || (null == a || null == (l = a.collectionViewBlockStore()) ? void 0 : l.getNearestAncestorTemplateStore())
                    })({
                        collectionViewId: m,
                        parentStore: u,
                        collectionContextStore: j
                    }), [m, u, j]),
                    R = (0, r(682985).K8)(() => null == P ? void 0 : P.getAssociatedCollectionId(), [P]),
                    O = (0, i.useMemo)(() => (0, r(400473).gc)(e) ? (0, r(400473).Rh)(e) : [], [e]),
                    B = (0, r(682985).K8)(() => {
                        let e = (0, r(698087).YF)(n, a, u);
                        return e && (0, r(795e3).n)(e) ? {
                            appConfigUri: (0, r(856235).LQ)(e, u),
                            schema: (0, r(856235).D3)(e, M)
                        } : {}
                    }, [n, a, u, M]),
                    N = (0, r(682985).K8)(() => (function(e, t, l, i, n) {
                        let {
                            appConfigUri: a,
                            schema: s
                        } = i;
                        if (!s || !a || !(0, r(530095).KN)(s, a)) return [];
                        let d = (0, r(613211).qk)(s, a),
                            u = r(613211).n$[a];
                        return r(381453).oE(d.map(i => {
                            if (!e || i.includes(e)) {
                                let e = {
                                        type: "relative",
                                        value: {
                                            type: "builtin",
                                            variable: i
                                        }
                                    },
                                    a = h(t, e);
                                return {
                                    key: i,
                                    render: e => (0, o.jsx)(r(95582).A, { ...e,
                                        title: (0, o.jsx)(r(109939).sA, { ...u[i].messageDescriptor
                                        }),
                                        isChecked: a
                                    }),
                                    action: x(a, t, e, l, n)
                                }
                            }
                        }))
                    })(w, O, a, B, c), [w, O, a, B, c]),
                    V = (0, r(682985).K8)(() => A ? function(e, t, l, i, n) {
                        let a = e.formatMessage(d.pageContainingThisView);
                        if (!t || a.toLowerCase().includes(t)) {
                            let e = {
                                    type: "relative",
                                    value: {
                                        type: "current_page_in_related_collection"
                                    }
                                },
                                t = h(l, e);
                            return {
                                key: e.value.type,
                                render: e => (0, o.jsx)(r(95582).A, { ...e,
                                    title: a,
                                    isChecked: t
                                }),
                                action: x(t, l, e, i, n)
                            }
                        }
                    }(F, w, O, a, c) : void 0, [F, w, O, a, c, A]),
                    [L, E] = (0, r(739271).s)();
                if (!I || !(0, r(795e3).n)(I)) return null;
                let D = (0, r(114588).z)(I);
                if (!D) return null;
                let K = r(381453).oE(O.map((e, t) => {
                        if (!e.value) return null;
                        let l = {
                                format: r(986939).A.isMobile ? r(696654).NY.Large : r(696654).NY.Small,
                                shouldWrap: !1,
                                showRemoveButton: !0,
                                isSingle: !1,
                                shouldShrink: !0,
                                onClickRemove: () => {
                                    v(r(381453).FF(O, e), c, a)
                                },
                                style: ee.tokenStyle
                            },
                            {
                                appConfigUri: i
                            } = B;
                        return (0, o.jsx)(r(164238).g, {
                            value: e,
                            tokenProps: l,
                            parentStore: u,
                            relatedCollectionAppConfigUri: i
                        }, t)
                    })),
                    W = (0, o.jsx)("div", {
                        style: ee.tokenInputContainer,
                        children: (0, o.jsx)(r(160319).Ay, {
                            focus: !r(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            format: r(160319).le.FilterValue,
                            tokens: K,
                            placeholder: F.formatMessage({
                                defaultMessage: "Search for one or more pages…",
                                id: "database.filterValue.relationType.searchPlaceholder"
                            }),
                            onRemoveLastToken: () => {
                                v(O.slice(0, O.length - 1), c, a)
                            },
                            onClearButtonClick: () => {
                                v([], c, a), null == p || p()
                            },
                            value: w,
                            onChange: e => {
                                G(e.target.value, y, f)
                            },
                            dontShowBorderBottom: T.isAndroid,
                            style: ee.inputStyle,
                            tokenWrapStyle: ee.tokenWrapStyle,
                            showClearButton: !0,
                            ...L
                        })
                    }),
                    q = (0, o.jsxs)(r(844565).A, {
                        children: [r(986939).A.isMobile ? void 0 : (0, o.jsx)(_, {
                            propertyFilter: a,
                            onChange: c,
                            schema: n,
                            propertyNameOverride: s,
                            parentStore: u,
                            hideTopActions: S,
                            ...C
                        }), (0, r(400473).gc)(e) ? W : void 0]
                    });
                b = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: a,
                        schema: n,
                        propertyNameOverride: s,
                        context: k,
                        onChange: c,
                        parentStore: u
                    }),
                    left: (0, o.jsx)(z, { ...C
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == p ? void 0 : p(),
                    header: q
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: g(k) ? 260 : void 0,
                    header: q,
                    disableHeaderBorder: !0
                }, l && !w && P && D && R === D && (l = r(381453).sb([P.id, ...l]));
                let U = [];
                if (l) {
                    let e = l.map(e => {
                        let t = {
                                type: "exact",
                                value: e
                            },
                            l = h(O, t),
                            i = r(970831).B.createChildStore(u, {
                                table: r(832375).evP,
                                id: e
                            });
                        return {
                            key: e,
                            action: x(l, O, t, a, c),
                            render: e => (0, o.jsx)(r(103558).A, {
                                store: i,
                                isChecked: l,
                                hidePath: !0,
                                showTooltipOnOverflow: !0,
                                ...e
                            })
                        }
                    });
                    U = ((0, r(400473).s1)(a.filter) ? [] : N).concat(e), V && (U = [V, ...U])
                }
                return (0, o.jsx)(r(747369).A, { ...b,
                    children: (0, r(400473).gc)(e) ? (0, o.jsxs)(o.Fragment, {
                        children: [t ? (0, o.jsx)(r(844565).A, {
                            children: (0, o.jsx)(r(498341).u, {
                                title: (0, o.jsx)(r(109939).sA, {
                                    defaultMessage: "Something went wrong.",
                                    id: "database.filterValue.relationType.searchRelationPropertyMenuItem.errorMessage"
                                })
                            })
                        }) : void 0, 0 === U.length && l && !t ? (0, o.jsx)(r(844565).A, {
                            children: (0, o.jsx)(r(498341).u, {
                                title: (0, o.jsx)(r(109939).sA, {
                                    defaultMessage: "No results",
                                    id: "database.filterValue.relationType.noResults.message"
                                })
                            })
                        }) : void 0, l || t ? void 0 : (0, o.jsx)(r(844565).A, {
                            children: (0, o.jsx)(r(200261).A, {})
                        }), U.length > 0 ? (0, o.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "results",
                                items: U
                            }],
                            store: f,
                            onAccept: () => {
                                G("", y, f)
                            },
                            comboboxProps: E
                        }) : void 0]
                    }) : void 0
                })
            }

            function er({
                filter: e,
                schema: t,
                propertyFilter: l,
                parentStore: i,
                onChange: n,
                allowRelativeDateFilter: a,
                dateRangeFilterPopupStore: s
            }) {
                let d, u = (0, r(682985).K8)(() => (0, r(698087).YF)(t, l, i), [t, l, i]);
                if (!u) return null;
                if ((0, r(400473).Cw)(e) && "exact" === e.value.type && e.value.value) {
                    let t = e.value.value;
                    d = {
                        starting: t.start_date ? {
                            type: "date",
                            start_date: t.start_date
                        } : void 0,
                        ending: t.end_date ? {
                            type: "date",
                            start_date: t.end_date
                        } : void 0
                    }
                } else d = (0, r(400473).Cw)(e) && "relative" === e.value.type ? e.value : {
                    starting: void 0,
                    ending: void 0
                };
                let c = {
                    disableMenuWrap: !0,
                    title: u.name,
                    value: d,
                    onUpdate: t => {
                        var r, i;
                        if (t.error) return null;
                        let o = { ...d,
                                ...t.value
                            },
                            a = null == (r = o.starting) ? void 0 : r.start_date,
                            s = null == (i = o.ending) ? void 0 : i.start_date;
                        f({
                            operator: "date_is_within",
                            use_end: "use_end" in e ? null == e ? void 0 : e.use_end : void 0,
                            value: {
                                type: "exact",
                                value: a || s ? {
                                    type: "daterange",
                                    start_date: a,
                                    end_date: s
                                } : void 0
                            }
                        }, n, l)
                    },
                    allowRelativeRangeFilter: a,
                    relativeRangePopupStore: s,
                    onUpdateRelativeFilter: t => {
                        f({ ...e,
                            value: t
                        }, n, l)
                    }
                };
                return (0, o.jsx)(r(102870).A, { ...c
                })
            }
            let el = {
                inputOuterStyle: {
                    background: "transparent",
                    paddingInlineEnd: 0,
                    boxShadow: "none"
                },
                style0: {
                    width: 12,
                    height: 12
                },
                style1: { ...!r(986939).A.isMobile && {
                        height: 20,
                        width: 20
                    },
                    color: r(632079).Tj.icon.secondary
                }
            };

            function ei({
                filter: e,
                events: t,
                onChange: l,
                propertyFilter: i,
                allowRelativeDateFilter: n,
                dateFilterPopupStore: a
            }) {
                let s = (0, r(109939).tz)();
                return (0, o.jsx)(r(695760).A, { ...t,
                    placeholder: s.formatMessage(d.startingMessage),
                    focused: "exact" === e.value.type,
                    value: e.value,
                    inputOuterStyle: r(986939).A.isMobile ? el.inputOuterStyle : void 0,
                    onUpdate: t => {
                        var r;
                        if (t.error) return null;
                        let o = null == (r = t.value) ? void 0 : r.start_date;
                        f({ ...e,
                            value: {
                                type: "exact",
                                value: o ? {
                                    type: "date",
                                    start_date: o
                                } : void 0
                            }
                        }, l, i)
                    },
                    inputRight: n && (0, o.jsx)(r(374533).A, {
                        icon: r(469102).arrowChevronSingleDownFillSmallIcon,
                        iconStyle: el.style0,
                        ariaLabel: s.formatMessage(d.chevronDownAriaLabel),
                        style: el.style1,
                        onClick: () => {
                            a.setState({
                                open: !0
                            })
                        }
                    }),
                    hideClearButton: "relative" === e.value.type || void 0,
                    isRightLastElementOfInput: !0
                })
            }
            let eo = {
                style0: {
                    fill: r(632079).Tj.icon.primary,
                    pointerEvents: "none"
                },
                style1: {
                    paddingTop: 0
                }
            };

            function en({
                filter: e,
                onChange: t,
                propertyFilter: l,
                schema: i,
                propertyNameOverride: n,
                parentStore: a,
                onClose: d,
                menuListStore: u,
                ...c
            }) {
                let p, {
                        context: m
                    } = c,
                    g = (0, r(400473).gc)(e) ? (0, r(400473).ms)(e) : [],
                    h = g.map(({
                        value: e
                    }) => e),
                    y = r(435137).FG.map(e => {
                        let i = h.includes(e);
                        return {
                            key: e,
                            render: t => (0, o.jsx)(r(95582).A, {
                                icon: (0, o.jsx)(r(349050).S, {
                                    checked: i,
                                    size: 14,
                                    style: eo.style0,
                                    disallowTabbing: !0
                                }),
                                title: (0, r(323700).w0)({
                                    type: "exact",
                                    value: e
                                }),
                                ...t
                            }),
                            action: () => {
                                i ? v(g.filter(({
                                    value: t
                                }) => t !== e), t, l) : v([...g, {
                                    type: "exact",
                                    value: e
                                }], t, l)
                            }
                        }
                    });
                return p = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: l,
                        schema: i,
                        propertyNameOverride: n,
                        context: m,
                        onChange: t,
                        parentStore: a
                    }),
                    left: (0, o.jsx)(z, { ...c
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == d ? void 0 : d()
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: 220,
                    footer: (0, o.jsx)(j, {
                        onChange: t,
                        propertyFilter: l,
                        onClose: d,
                        filter: e
                    })
                }, (0, o.jsxs)(r(747369).A, { ...p,
                    children: [m === s.PropertyFilter ? (0, o.jsx)(r(844565).A, {
                        disableMobilePadding: !0,
                        children: r(986939).A.isMobile ? void 0 : (0, o.jsx)(_, {
                            propertyFilter: l,
                            onChange: t,
                            schema: i,
                            propertyNameOverride: n,
                            parentStore: a,
                            ...c
                        })
                    }) : void 0, (0, o.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "select",
                            render: e => (0, o.jsx)(r(844565).A, {
                                style: eo.style1,
                                ...e
                            }),
                            items: y
                        }],
                        store: u
                    })]
                })
            }

            function ea({
                filter: e,
                parentStore: t,
                schema: l,
                propertyFilter: i,
                propertyNameOverride: n,
                onChange: a,
                allowRelativePersonFilter: s,
                onClose: d,
                queryStore: u,
                menuListStore: c,
                hideTopActions: p,
                ...m
            }) {
                let g = (0, r(533992).v3)(),
                    h = (0, r(109939).tz)(),
                    y = (0, r(682985).O$)(u);
                return (0, o.jsx)(r(814255).A, {
                    request: y,
                    performRequest: e => A(e, t, g, h),
                    render: (r, g) => (0, o.jsx)(X, {
                        schema: l,
                        propertyFilter: i,
                        propertyNameOverride: n,
                        parentStore: t,
                        onChange: a,
                        allowRelativePersonFilter: s,
                        onClose: d,
                        queryStore: u,
                        menuListStore: c,
                        filter: e,
                        error: r,
                        results: g,
                        hideTopActions: p,
                        ...m
                    })
                })
            }

            function es({
                filter: e,
                schema: t,
                propertyFilter: l,
                propertyNameOverride: i,
                parentStore: n,
                onChange: a,
                onClose: s,
                collectionViewId: d,
                queryStore: u,
                menuListStore: c,
                collectionContextStore: p,
                allowCurrentPageInRelatedCollectionFilter: m,
                hideTopActions: g,
                ...h
            }) {
                let y = (0, r(533992).v3)(),
                    v = (0, r(682985).O$)(u),
                    f = (0, r(723240).r)(),
                    x = (0, r(682985).K8)(() => {
                        var e;
                        return null == (e = r(686494).A.state.publicPageData) ? void 0 : e.spaceId
                    }, []),
                    j = (0, r(682985).K8)(() => (0, r(698087).YF)(t, l, n), [t, l, n]),
                    A = f || x;
                if (!j || !(0, r(795e3).n)(j) || !A) return null;
                let C = (0, r(114588).z)(j);
                return C ? (0, o.jsx)(r(814255).A, {
                    request: {
                        query: v,
                        spaceId: A,
                        collectionId: C
                    },
                    performRequest: e => S(e, n, y),
                    render: (r, y) => (0, o.jsx)(et, {
                        schema: t,
                        propertyFilter: l,
                        propertyNameOverride: i,
                        parentStore: n,
                        onChange: a,
                        onClose: s,
                        collectionViewId: d,
                        queryStore: u,
                        menuListStore: c,
                        collectionContextStore: p,
                        filter: e,
                        error: r,
                        results: y,
                        allowCurrentPageInRelatedCollectionFilter: m,
                        hideTopActions: g,
                        ...h
                    })
                }) : null
            }
            let ed = {
                wrapper: {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    paddingBottom: 8,
                    paddingTop: 4,
                    ...r(986939).A.isMobile && {
                        paddingTop: 16,
                        paddingBottom: 8,
                        background: r(632079).Tj.background.primary
                    }
                },
                label: {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    paddingBottom: 8,
                    paddingTop: 4,
                    ...r(986939).A.isMobile && {
                        paddingTop: 8,
                        paddingBottom: 8,
                        background: r(632079).Tj.background.primary
                    }
                }
            };

            function eu({
                filter: e,
                onChange: t,
                propertyFilter: l,
                allowRelativeDateFilter: i,
                dateFilterPopupStore: n
            }) {
                let a = (0, r(682985).O$)(r(97892).X);
                if (!(0, r(400473).gc)(e)) return null;
                let s = "exact" === e.value.type ? e.value.value : (0, r(25825).fN)(e.value);
                return s && !(0, r(943003).$P)(s) ? null : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(r(844565).A, {
                        disableMobileBorders: !0,
                        children: (0, o.jsx)("div", {
                            style: ed.wrapper,
                            children: (0, o.jsx)(r(151012).A, {
                                firstDayOfWeek: a,
                                selectValue: void 0 !== s,
                                value: s ? r(25825).C6.notionDateToLuxon(s).toMillis() : Date.now(),
                                onChange: e => {
                                    v({
                                        type: "exact",
                                        value: (0, r(25825).p6)(e, (0, r(714350).P)())
                                    }, t, l)
                                }
                            })
                        })
                    }), "relative" === e.value.type ? (0, o.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: (0, o.jsx)("div", {
                            style: ed.label,
                            children: (0, o.jsx)(r(324489).V, {
                                isSmall: !0,
                                children: (0, o.jsx)(r(109939).sA, {
                                    id: "collectionFilterMenu.dateFilter.relativeDateFilter.description",
                                    defaultMessage: "Filter will update with the current date"
                                })
                            })
                        })
                    }) : void 0]
                })
            }

            function ec({
                filter: e,
                propertyFilter: t,
                schema: l,
                propertyNameOverride: i,
                onChange: n,
                parentStore: a,
                onClose: d,
                allowRelativeDateFilter: u,
                dateFilterPopupStore: c,
                dateRangeFilterPopupStore: p,
                hideTopActions: m,
                ...h
            }) {
                let y, v = h.context;
                y = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: t,
                        schema: l,
                        propertyNameOverride: i,
                        context: v,
                        onChange: n,
                        parentStore: a
                    }),
                    left: (0, o.jsx)(z, { ...h
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == d ? void 0 : d()
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: g(v) ? 260 : void 0
                };
                let x = !r(986939).A.isMobile,
                    j = (0, r(400473).gc)(e) && !(0, r(400473).Cw)(e);
                return (0, o.jsxs)(r(747369).A, { ...y,
                    children: [x || j ? (0, o.jsxs)(r(844565).A, {
                        disableMobileBorders: !0,
                        isInput: v !== s.PropertyFilter,
                        children: [x ? (0, o.jsx)(_, {
                            propertyFilter: t,
                            onChange: n,
                            schema: l,
                            propertyNameOverride: i,
                            parentStore: a,
                            hideTopActions: m,
                            ...h
                        }) : void 0, j ? (0, o.jsx)(r(55821).A, {
                            type: "date",
                            filterValue: e.value,
                            onUpdate: r => {
                                f({ ...e,
                                    value: r
                                }, n, t)
                            },
                            disabled: "exact" === e.value.type && u,
                            buttonPopupStore: c,
                            children: r => (0, o.jsx)(ei, {
                                onChange: n,
                                propertyFilter: t,
                                allowRelativeDateFilter: u,
                                dateFilterPopupStore: c,
                                filter: e,
                                events: r
                            })
                        }) : void 0]
                    }) : void 0, (0, r(400473).gc)(e) ? (0, r(400473).Cw)(e) ? (0, o.jsx)(er, {
                        schema: l,
                        propertyFilter: t,
                        parentStore: a,
                        onChange: n,
                        allowRelativeDateFilter: u,
                        dateRangeFilterPopupStore: p,
                        filter: e
                    }) : (0, o.jsx)(eu, {
                        onChange: n,
                        propertyFilter: t,
                        allowRelativeDateFilter: u,
                        dateFilterPopupStore: c,
                        filter: e
                    }) : void 0]
                })
            }

            function ep({
                filter: e,
                schema: t,
                propertyFilter: l,
                propertyNameOverride: i,
                parentStore: n,
                onChange: a,
                onClose: s,
                ...d
            }) {
                let u, {
                        context: c
                    } = d,
                    p = (0, r(682985).K8)(() => (0, r(698087).YF)(t, l, n), [t, l, n]);
                if (!p || "file" !== p.type) return null;
                let m = (0, o.jsx)(r(844565).A, {
                    children: r(986939).A.isMobile ? void 0 : (0, o.jsx)(_, {
                        propertyFilter: l,
                        onChange: a,
                        schema: t,
                        propertyNameOverride: i,
                        parentStore: n,
                        ...d
                    })
                });
                return u = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: l,
                        schema: t,
                        propertyNameOverride: i,
                        context: c,
                        onChange: a,
                        parentStore: n
                    }),
                    left: (0, o.jsx)(z, { ...d
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == s ? void 0 : s(),
                    header: m
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: 260,
                    header: m,
                    disableHeaderBorder: !0,
                    tokenInputHeader: !0
                }, (0, o.jsx)(r(747369).A, { ...u
                })
            }

            function em({
                filter: e,
                schema: t,
                propertyFilter: l,
                propertyNameOverride: i,
                parentStore: n,
                onChange: a,
                onClose: s,
                ...d
            }) {
                let u, {
                        context: c
                    } = d,
                    p = (0, r(682985).K8)(() => (0, r(698087).YF)(t, l, n), [t, l, n]);
                if (!p || "place" !== p.type) return null;
                let m = (0, o.jsx)(r(844565).A, {
                    children: r(986939).A.isMobile ? void 0 : (0, o.jsx)(_, {
                        propertyFilter: l,
                        onChange: a,
                        schema: t,
                        propertyNameOverride: i,
                        parentStore: n,
                        ...d
                    })
                });
                return u = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: (0, o.jsx)(H, {
                        propertyFilter: l,
                        schema: t,
                        propertyNameOverride: i,
                        context: c,
                        onChange: a,
                        parentStore: n
                    }),
                    left: (0, o.jsx)(z, { ...d
                    }),
                    right: (0, o.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => null == s ? void 0 : s(),
                    header: m
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: 260,
                    header: m,
                    disableHeaderBorder: !0,
                    tokenInputHeader: !0
                }, (0, o.jsx)(r(747369).A, { ...u
                })
            }

            function eg({
                propertyFilter: e,
                schema: t,
                propertyNameOverride: l,
                parentStore: n,
                onChange: s,
                onChangeDebounced: d,
                onClose: u,
                collectionViewId: c,
                collectionContextStore: p,
                allowRelativePersonFilter: m,
                allowRelativeDateFilter: g,
                queryStore: h,
                menuListStore: y,
                dateFilterPopupStore: f,
                dateRangeFilterPopupStore: x,
                hideTopActions: j,
                ...A
            }) {
                let {
                    context: S
                } = A, {
                    property: C,
                    filter: b
                } = e, k = (0, r(682985).K8)(() => (0, r(400473).HF)({
                    schema: t,
                    property: C,
                    getRecordModel: n.getRecordModel
                }), [n, C, t]), M = t[C], F = (0, r(682985).K8)(() => !!p && !!M && function({
                    collectionContextStore: e,
                    propertySchema: t
                }) {
                    var l;
                    if (!(0, r(795e3).n)(t)) return !1;
                    let i = (0, r(353387).a)(e);
                    if (!i.viewsModuleContextStore.state) return !1;
                    let o = null == (l = i.viewsModuleContextStore.getCurrentPageCollectionStore()) ? void 0 : l.id;
                    return void 0 !== o && (0, r(114588).z)(t) === o
                }({
                    collectionContextStore: p,
                    propertySchema: M
                }), [p, M]), T = (0, r(400473).s1)(b) ? b.subfilter : b, w = (0, i.useCallback)(t => {
                    v(t, s, e)
                }, [s, e]);
                if ("text" === k) return (0, r(995906).Y)(T) ? (0, o.jsx)(q, {
                    onChange: d,
                    propertyFilter: e,
                    schema: t,
                    propertyNameOverride: l,
                    parentStore: n,
                    onClose: u,
                    filter: T,
                    ...A
                }) : null;
                if ("relation" === k) return (0, r(400473).Pq)(T) ? (0, o.jsx)(es, {
                    schema: t,
                    propertyFilter: e,
                    propertyNameOverride: l,
                    parentStore: n,
                    onChange: s,
                    onClose: u,
                    collectionViewId: c,
                    collectionContextStore: p,
                    queryStore: h,
                    menuListStore: y,
                    filter: T,
                    allowCurrentPageInRelatedCollectionFilter: F,
                    hideTopActions: j,
                    ...A
                }) : null;
                if ("checkbox" === k) return (0, r(400473).Ui)(T) ? (0, o.jsx)(J, {
                    menuListStore: y,
                    propertyFilter: e,
                    schema: t,
                    propertyNameOverride: l,
                    onChange: s,
                    parentStore: n,
                    onClose: u,
                    filter: T,
                    collectionContextStore: p,
                    ...A
                }) : null;
                if ("select" === k || "multi_select" === k) return (0, r(400473).v0)(T) || (0, r(400473).as)(T) ? (0, o.jsx)(Z, {
                    schema: t,
                    propertyFilter: e,
                    propertyNameOverride: l,
                    parentStore: n,
                    onChange: s,
                    onClose: u,
                    queryStore: h,
                    menuListStore: y,
                    filter: T,
                    collectionContextStore: p,
                    hideTopActions: j,
                    ...A
                }) : null;
                if ("status" === k) return (0, r(400473).H$)(T) ? (0, o.jsx)(r(670277).A, {
                    propertyFilter: e,
                    schema: t,
                    filter: T,
                    parentStore: n,
                    updateValue: w,
                    onClose: u,
                    desktopTopActions: (0, o.jsx)(_, {
                        propertyFilter: e,
                        onChange: s,
                        schema: t,
                        propertyNameOverride: l,
                        parentStore: n,
                        hideTopActions: j,
                        ...A
                    }),
                    mobileMenuTitle: (0, o.jsx)(H, {
                        propertyFilter: e,
                        schema: t,
                        propertyNameOverride: l,
                        context: S,
                        onChange: s,
                        parentStore: n
                    }),
                    mobileMoreActions: (0, o.jsx)(z, { ...A
                    }),
                    collectionContextStore: p,
                    context: S
                }) : null;
                if ("person" === k) return (0, r(784923).I)(T) ? (0, o.jsx)(ea, {
                    parentStore: n,
                    schema: t,
                    propertyFilter: e,
                    propertyNameOverride: l,
                    onChange: s,
                    allowRelativePersonFilter: m,
                    onClose: u,
                    queryStore: h,
                    menuListStore: y,
                    filter: T,
                    hideTopActions: j,
                    ...A
                }) : null;
                if ("number" === k) return (0, r(818966).M)(T) ? (0, o.jsx)(Y, {
                    onChange: d,
                    propertyFilter: e,
                    schema: t,
                    propertyNameOverride: l,
                    parentStore: n,
                    onClose: u,
                    filter: T,
                    ...A
                }) : null;
                if ("date" === k) return (0, r(725462).n)(T) ? (0, o.jsx)(ec, {
                    propertyFilter: e,
                    schema: t,
                    propertyNameOverride: l,
                    onChange: s,
                    parentStore: n,
                    onClose: u,
                    allowRelativeDateFilter: g,
                    dateFilterPopupStore: f,
                    dateRangeFilterPopupStore: x,
                    filter: T,
                    hideTopActions: j,
                    ...A
                }) : null;
                if ("file" === k) return (0, r(400473).B6)(T) ? (0, o.jsx)(ep, {
                    onChange: s,
                    propertyFilter: e,
                    schema: t,
                    propertyNameOverride: l,
                    parentStore: n,
                    onClose: u,
                    filter: T,
                    ...A
                }) : null;
                if ("location" === k) return (0, r(400473).G)(T) ? (0, o.jsx)(a, {
                    filter: T,
                    parentStore: n,
                    updateValue: w,
                    onClose: u,
                    desktopTopActions: (0, o.jsx)(_, {
                        propertyFilter: e,
                        onChange: s,
                        schema: t,
                        propertyNameOverride: l,
                        parentStore: n,
                        ...A
                    }),
                    mobileMenuTitle: (0, o.jsx)(H, {
                        propertyFilter: e,
                        schema: t,
                        propertyNameOverride: l,
                        context: S,
                        onChange: s,
                        parentStore: n
                    }),
                    mobileMoreActions: (0, o.jsx)(z, { ...A
                    })
                }) : null;
                if ("verification" === k) return (0, r(400473).uU)(T) ? (0, o.jsx)(en, {
                    onChange: s,
                    propertyFilter: e,
                    schema: t,
                    propertyNameOverride: l,
                    parentStore: n,
                    onClose: u,
                    filter: T,
                    menuListStore: y,
                    ...A
                }) : null;
                if ("place" === k) return (0, r(400473).Ol)(T) ? (0, o.jsx)(em, {
                    onChange: s,
                    propertyFilter: e,
                    schema: t,
                    propertyNameOverride: l,
                    parentStore: n,
                    onClose: u,
                    filter: T,
                    ...A
                }) : null;
                (0, r(722371).HB)(k)
            }
        },
        105427: (e, t, r) => {
            r.d(t, {
                y: () => i
            }), r(296540);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M9.501 2.391a8 8 0 0 1 .998 0 .625.625 0 0 1-.081 1.247 7 7 0 0 0-.836 0 .625.625 0 0 1-.08-1.247m3.034 1.053a.625.625 0 0 1 .838-.284q.45.222.863.5a.625.625 0 0 1-.695 1.038 6 6 0 0 0-.722-.417.625.625 0 0 1-.284-.837m-5.072 0a.625.625 0 0 1-.284.837q-.375.185-.722.417a.625.625 0 0 1-.695-1.038q.414-.278.863-.5a.625.625 0 0 1 .838.284m8.009 2.147a.625.625 0 0 1 .867.172q.278.414.5.863a.625.625 0 0 1-1.12.554 6 6 0 0 0-.418-.722.625.625 0 0 1 .171-.867m-10.946 0c.287.192.363.58.171.867q-.232.346-.417.722a.625.625 0 1 1-1.12-.554q.221-.45.499-.863a.625.625 0 0 1 .867-.172m12.418 3.327a.625.625 0 0 1 .664.583 8 8 0 0 1 0 .998.625.625 0 0 1-1.248-.081 6 6 0 0 0 0-.836.625.625 0 0 1 .584-.664m-13.89 0c.345.022.606.32.583.664a7 7 0 0 0 0 .836.625.625 0 0 1-1.247.08 8 8 0 0 1 0-.997.625.625 0 0 1 .664-.583m13.501 3.618c.31.153.437.528.284.838q-.222.45-.5.863a.625.625 0 1 1-1.038-.695q.231-.346.417-.722a.625.625 0 0 1 .837-.284m-13.112 0a.625.625 0 0 1 .837.284q.185.375.417.722a.625.625 0 0 1-1.038.695 8 8 0 0 1-.5-.864.625.625 0 0 1 .284-.837m2.147 2.937a.625.625 0 0 1 .867-.171q.346.231.722.417a.625.625 0 1 1-.554 1.12 8 8 0 0 1-.863-.499.625.625 0 0 1-.172-.867m8.818 0a.625.625 0 0 1-.172.867 8 8 0 0 1-.864.5.625.625 0 0 1-.553-1.12q.375-.187.722-.418a.625.625 0 0 1 .867.171m-5.491 1.472a.625.625 0 0 1 .664-.584 6 6 0 0 0 .836 0 .625.625 0 0 1 .08 1.248 8 8 0 0 1-.997 0 .625.625 0 0 1-.583-.664"
                    })
                },
                i = (0, r(104509).wt)("circleDotted", l, "default")
        },
        151012: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var l = r(296540),
                i = r(474848);
            let o = {
                    paddingInlineEnd: 8,
                    paddingBottom: 8,
                    paddingInlineStart: 8,
                    paddingTop: 4
                },
                n = function({
                    firstDayOfWeek: e,
                    value: t,
                    selectValue: n = !0,
                    onChange: a,
                    onFocus: s,
                    onBlur: d,
                    disabledDays: u,
                    className: c
                }) {
                    let p = (0, l.useMemo)(() => new Date(t), [t]),
                        [m, g] = (0, l.useState)(p),
                        h = (0, l.useRef)(t);
                    (0, l.useLayoutEffect)(() => {
                        h.current !== t && (g(new Date(t)), h.current = t)
                    }, [t]);
                    let y = (0, l.useCallback)((e, t, r) => {
                        a(e.getTime())
                    }, [a]);
                    return (0, i.jsx)("div", {
                        style: o,
                        children: (0, i.jsx)(r(116267).n, {
                            locale: r(849917).locale,
                            className: c ? ? "notion-calendar-picker",
                            numberOfMonths: 1,
                            weekStartsOn: e,
                            modifiers: n ? {
                                value: p
                            } : {},
                            showOutsideDays: !0,
                            fixedWeeks: !0,
                            onDayClick: y,
                            onMonthSelected: g,
                            disabled: u,
                            month: m,
                            onDayBlur: d,
                            onDayFocus: s
                        })
                    })
                }
        },
        152989: (e, t, r) => {
            r.d(t, {
                K: () => i,
                N: () => o
            }), r(296540);
            var l = r(474848);

            function i() {
                return (0, l.jsx)(r(109939).sA, {
                    defaultMessage: "Add filter rule",
                    id: "database.filterMenu.addFilterRuleButtonTitle"
                })
            }

            function o() {
                return (0, l.jsx)(r(109939).sA, {
                    id: "database.filterValue.mergeIntoAdvancedFilter.tooltip",
                    defaultMessage: "Use an advanced filter to group filter rules and use AND/OR conditions."
                })
            }
        },
        160075: (e, t, r) => {
            r.d(t, {
                q: () => l
            });

            function l(e) {
                return "date" === e.type || "formula" === e.type && "date" === (0, r(345091).getFormulaPropertySchemaResultType)(e) || "rollup" === e.type && void 0 !== e.aggregation && "date_range" === e.aggregation
            }
        },
        164238: (e, t, r) => {
            r.d(t, {
                g: () => i
            }), r(296540);
            var l = r(474848);

            function i({
                value: e,
                tokenProps: t = {},
                parentStore: o,
                relatedCollectionAppConfigUri: n,
                key: a
            }) {
                if (!e.value) return null;
                let s = {
                        format: r(986939).A.isMobile ? r(696654).NY.Large : r(696654).NY.Small,
                        isSingle: !1,
                        ...t
                    },
                    d = e.type;
                if ("exact" === d) return (0, l.jsx)(r(448860).A, {
                    blockId: e.value,
                    parentStore: o,
                    ...s
                }, a);
                if ("relative" === d) {
                    var u;
                    return "current_page_in_related_collection" === e.value.type ? (0, l.jsx)(r(628462).A, {
                        value: (0, l.jsx)(r(109939).sA, {
                            defaultMessage: "This page",
                            id: "database.filterValue.pageContainingThisView"
                        }),
                        backgroundColor: "transparent",
                        showTooltip: "overflow",
                        ...s
                    }, a) : n && "builtin" === e.value.type ? (0, l.jsx)(r(628462).A, {
                        value: (0, l.jsx)(r(109939).sA, { ...null == (u = r(613211).n$[n]) || null == (u = u[e.value.variable]) ? void 0 : u.messageDescriptor
                        }),
                        backgroundColor: "transparent",
                        showTooltip: "overflow",
                        ...s
                    }, a) : null
                }(0, r(722371).HB)(d)
            }
        },
        357484: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });

            function l(e) {
                return r(910369).D$[e]
            }
        },
        368864: (e, t, r) => {
            r.d(t, {
                q: () => l
            });

            function l(e, t) {
                return (0, r(700369).$J)(e, r(218744).default.checkGate({
                    gateName: "localized_parse_number"
                }) ? t : void 0)
            }
        },
        392285: (e, t, r) => {
            r.d(t, {
                y: () => i
            }), r(296540);
            var l = r(474848);

            function i(e) {
                return (0, l.jsx)(r(95582).A, { ...e,
                    icon: (0, l.jsx)(r(16275).I, {
                        icon: r(829968).gearIcon
                    }),
                    title: (0, l.jsx)(r(109939).sA, {
                        defaultMessage: "Filter multiple sources",
                        id: "dashboard.globalFilters.addAdditionalSources"
                    })
                })
            }
        },
        405461: (e, t, r) => {
            function l(e) {
                let {
                    intl: t,
                    groupName: l
                } = e;
                return l || t.formatMessage(r(95384).D.untitledGroupName)
            }

            function i(e) {
                var t;
                return (null == (t = r(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function o(e) {
                let {
                    userIds: t,
                    limit: l,
                    spaceStore: i
                } = e;
                if (!i) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let o = l ? t.slice(0, l) : t;
                return {
                    limitedUserStores: r(381453).oE(o.map(e => r(807825).L.createChildStore(i, {
                        table: r(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - o.length
                }
            }

            function n({
                userStores: e,
                spaceStore: t,
                intl: l
            }) {
                return r(381453).Ul(e, e => e.getSearchName(l)).sort((e, l) => {
                    if (!t) return 0;
                    let i = (0, r(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        o = (0, r(993077).dp)(t, l.id).getMembershipTypeAsRoleOrNone();
                    return i && o ? r(642157).hV.indexOf(o) - r(642157).hV.indexOf(i) : 0
                })
            }

            function a(e) {
                var t;
                let {
                    spaceStore: l,
                    spaceUserStore: i
                } = e;
                if (!l) return !1;
                let o = (null == i ? void 0 : i.getMembershipType()) ? ? "none",
                    n = null == (t = l.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (o) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === n;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, r(722371).HB)(o)
                }
            }

            function s(e) {
                let {
                    groupId: t,
                    delta: l
                } = e, i = r(801062).h.getGroupData(t);
                i && r(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, i.memberCount + l)
                })
            }

            function d(e) {
                let {
                    members: t,
                    query: r
                } = e, l = r.trim().toLowerCase();
                return "" === l ? t : t.filter(e => e.name.toLowerCase().includes(l) || void 0 !== e.email && e.email.toLowerCase().includes(l))
            }

            function u(e) {
                let {
                    memberUserIds: t,
                    spaceStore: l,
                    groupId: i,
                    currentUserId: o
                } = e;
                return t.map(e => {
                    let t = r(807825).L.createChildStore(l, {
                            table: r(832375).oo9,
                            id: e
                        }),
                        n = (0, r(13717).A)({
                            spaceStore: l,
                            groupId: i,
                            userId: e
                        }),
                        a = r(229903).V.createChildStore(l, (0, r(729052).i1)({
                            userId: e,
                            spaceId: l.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === o,
                        isOwner: "owner" === n.getMembershipType(),
                        isWorkspaceOwner: l.canAdmin(),
                        isRestrictedMember: a.isRestrictedMember() ? ? !0
                    }
                })
            }

            function c(e) {
                let {
                    users: t,
                    existingMemberIds: r
                } = e, l = new Set(r);
                return t.filter(e => !l.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function p(e) {
                let {
                    groupId: t,
                    groupStore: l
                } = e;
                r(801062).h.updateGroup(t, {
                    group: l.getModel()
                })
            }
            r.d(t, {
                A9: () => c,
                Fz: () => u,
                Ny: () => a,
                Pf: () => l,
                cp: () => n,
                gA: () => o,
                mi: () => d,
                s: () => s,
                sd: () => p,
                xQ: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454)
        },
        575395: (e, t, r) => {
            r.d(t, {
                OR: () => i,
                RS: () => a
            }), r(296540);
            var l = r(474848);
            let i = {
                    [r(998833).QV]: (0, l.jsx)(r(109939).sA, { ...r(998833).oz.statusGroupNameTodo
                    }),
                    [r(998833).jc]: (0, l.jsx)(r(109939).sA, { ...r(998833).oz.statusGroupNameInProgress
                    }),
                    [r(998833).P0]: (0, l.jsx)(r(109939).sA, { ...r(998833).oz.statusGroupNameComplete
                    }),
                    [r(998833).nX]: (0, l.jsx)(r(109939).sA, { ...r(62899).DZ.current
                    }),
                    [r(998833).p7]: (0, l.jsx)(r(109939).sA, { ...r(62899).DZ.future
                    })
                },
                o = {
                    [r(998833).QV]: r(105427).y,
                    [r(998833).jc]: r(913642).p,
                    [r(998833).P0]: r(853160).checkmarkCircleIcon
                },
                n = {
                    display: "inline-flex",
                    alignItems: "center"
                };

            function a(e) {
                let {
                    group: t,
                    disableGroup: a,
                    style: s,
                    showIcon: d,
                    showColor: u
                } = e, c = o[t.name] ? ? r(105427).y, p = t.color ? ? r(998833).ml[t.name];
                return (0, l.jsxs)("div", {
                    style: { ...s,
                        ...n
                    },
                    children: [d ? c({
                        display: "inline-block",
                        width: r(104509).Ev.default,
                        height: r(104509).Ev.default,
                        fill: u ? r(632079).Tj[p].icon.accentPrimary : r(632079).Tj.icon.secondary
                    }) : void 0, (0, l.jsx)("span", {
                        style: {
                            paddingInlineStart: d ? 4 : void 0,
                            color: u ? r(632079).Tj[p].text.accentPrimary : void 0
                        },
                        children: i[t.name] ? ? t.name
                    }), a ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(r(884877).A, {
                            size: 4
                        }), (0, l.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: e => (0, l.jsx)("div", { ...e,
                                children: a.tooltipCaption
                            }),
                            disableTooltip: void 0 === a.tooltipCaption,
                            children: e => (0, l.jsx)("div", { ...e,
                                children: (0, l.jsx)(r(16275).I, {
                                    icon: r(930113).lockFillSmallIcon,
                                    size: "xs"
                                })
                            })
                        })]
                    }) : null]
                })
            }
        },
        593100: (e, t, r) => {
            r.d(t, {
                O: () => i,
                q: () => o
            }), r(296540);
            var l = r(474848);

            function i(e) {
                let {
                    value: t,
                    color: i,
                    format: o,
                    showEllipsis: n,
                    onClickRemove: a,
                    showRemoveButton: s,
                    isSingle: d,
                    shouldShrink: u,
                    hideTooltip: c,
                    description: p,
                    tooltipPlacement: m,
                    removeBackground: g,
                    ...h
                } = e, y = (0, r(960253).I)(() => ({
                    token: { ...n && r(699422).RC,
                        ...g && {
                            paddingInlineStart: 0,
                            paddingInlineEnd: 0
                        }
                    }
                }), [n, g]), {
                    textColor: v,
                    backgroundColor: f
                } = (0, r(632079).LD)(r(632079).Tj, i);
                return t ? (0, l.jsx)(r(628462).A, {
                    format: o,
                    value: (0, l.jsx)(r(93594).A, {
                        children: t
                    }),
                    description: p,
                    onClickRemove: a,
                    showRemoveButton: s,
                    isSingle: d,
                    color: v,
                    backgroundColor: g ? "transparent" : f,
                    shouldShrink: u,
                    tooltipPlacement: m,
                    showTooltip: c ? "never" : "overflow",
                    style: y.token,
                    ...h
                }) : null
            }

            function o(e) {
                let t, {
                        value: i,
                        color: o,
                        format: n,
                        showEllipsis: a,
                        onClickRemove: s,
                        showRemoveButton: d,
                        isSingle: u,
                        shouldShrink: c,
                        groupColor: p,
                        tooltipPlacement: m,
                        description: g,
                        hideTooltip: h,
                        ...y
                    } = e,
                    v = (0, r(960253).I)(() => ({
                        token: { ...a && r(699422).RC
                        }
                    }), [a]);
                if (!i) return null;
                let {
                    textColor: f,
                    backgroundColor: x
                } = (0, r(632079).LD)(r(632079).Tj, o ? ? p ? ? "gray");
                return t = o || p || "gray", (0, l.jsx)(r(628462).A, {
                    format: n,
                    value: (0, l.jsx)(r(93594).A, {
                        children: i
                    }),
                    description: g,
                    onClickRemove: s,
                    showRemoveButton: d,
                    isSingle: u,
                    color: f,
                    backgroundColor: x,
                    shouldShrink: c,
                    showTooltip: h ? "never" : "overflow",
                    style: v.token,
                    isRound: !0,
                    showColoredDot: t,
                    tooltipPlacement: m,
                    ...y
                })
            }
        },
        655608: (e, t, r) => {
            r.d(t, {
                A: () => o
            }), r(296540);
            var l = r(474848);
            let i = {
                    maxWidth: 180
                },
                o = function(e) {
                    let {
                        collectionStore: t
                    } = e, o = (0, r(682985).K8)(() => t.getIcon(), [t]);
                    return (0, l.jsxs)(r(4458).fI, {
                        columnGap: 4,
                        alignItems: "center",
                        children: [(0, l.jsx)(r(569553).B6, {
                            disabled: !0,
                            icon: o,
                            iconRecordCategory: "collection",
                            isEmptyPage: !1,
                            size: 20
                        }), (0, l.jsx)(r(627918).A, {
                            store: t,
                            style: i
                        })]
                    })
                }
        },
        670277: (e, t, r) => {
            r.d(t, {
                A: () => p,
                T: () => m
            }), r(944114), r(898992), r(354520), r(737550);
            var l = r(296540),
                i = () => r(349050),
                o = () => r(95582),
                n = () => r(696654),
                a = () => r(593100),
                s = () => r(575395),
                d = () => r(698087),
                u = r(474848);
            let c = {
                checkboxIcon: {
                    fill: r(632079).Tj.icon.primary
                },
                style0: {
                    paddingTop: 0
                },
                style1: {
                    paddingInlineStart: 16
                },
                style2: {
                    fontWeight: r(699422).Wy.medium,
                    marginTop: 2
                },
                style3: {
                    marginInlineStart: 3
                }
            };

            function p(e) {
                let t, {
                        propertyFilter: i,
                        schema: n,
                        filter: a,
                        parentStore: s,
                        updateValue: p,
                        onClose: g,
                        desktopTopActions: h,
                        mobileMenuTitle: y,
                        mobileMoreActions: v,
                        collectionContextStore: f,
                        context: x
                    } = e,
                    j = (0, r(533992).v3)(),
                    [A, S] = (0, l.useState)([]),
                    [C, b] = (0, l.useState)(!1),
                    k = (0, r(682985).K8)(() => (0, d().YF)(n, i, s), [n, i, s]),
                    M = (0, r(682985).K8)(() => (0, r(400473).gc)(a) ? (0, r(400473).V6)(a) : [], [a]),
                    F = (0, r(682985).K8)(() => {
                        if (!k || "status" !== k.type) return [];
                        let e = k.options ? ? [],
                            t = null == f ? void 0 : f.collectionStoreResultsInViewOrder();
                        return !C && t && (null == f ? void 0 : f.contextTypeFromStoreState) === "collectionTypedView" ? e.filter(e => t.some(t => {
                            var r;
                            return null == (r = e.collectionIds) ? void 0 : r.includes(t.id)
                        })) : e
                    }, [k, C, f]),
                    T = (0, r(682985).K8)(() => {
                        if (!k || "status" !== k.type) return [];
                        let e = [],
                            t = k.groups ? ? [],
                            r = k.options ? ? [];
                        for (let l of t) {
                            let t = (0, d().Ze)({
                                group: l,
                                options: r,
                                filterValues: M
                            });
                            if ("partial" !== t.groupCheckState) continue;
                            let i = r.filter(e => {
                                var t;
                                return null == (t = l.optionIds) ? void 0 : t.includes(e.id)
                            }).filter(e => t.optionCheckedInfo.get(e.id));
                            e.push(...i)
                        }
                        return e
                    }, [k, M]),
                    w = (0, r(682985).K8)(() => {
                        if (!k || "status" !== k.type) return [];
                        let e = k.options ? ? [];
                        return A ? e.filter(e => !A.some(t => t.id === e.id)) : []
                    }, [k, A]);
                (0, l.useEffect)(() => {
                    S(() => r(381453).hS([...F, ...A, ...T], "id"))
                }, [F]);
                let I = (0, r(682985).K8)(() => k && "status" === k.type ? m({
                    propertySchema: k,
                    statusFilterValues: M,
                    updateValue: p,
                    isMobile: r(986939).A.isMobile,
                    styles: {
                        checkboxIcon: c.checkboxIcon
                    },
                    visibleOptions: A,
                    shouldShowHiddenSources: C,
                    setShouldShowHiddenSources: b
                }) : [], [k, p, A, C, b, M]);
                if (!k || "status" !== k.type) return null;
                let P = (0, u.jsx)(r(844565).A, {
                    desktopStyle: {
                        paddingBottom: 4 * (x === r(69906).mL.ConditionalColorRule)
                    },
                    children: r(986939).A.isMobile ? void 0 : h
                });
                t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: y,
                    left: v,
                    right: (0, u.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: g,
                    header: P
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: r(400473).mi,
                    width: (0, r(69906).Ul)(x) ? 260 : void 0,
                    header: P,
                    disableHeaderBorder: !0,
                    tokenInputHeader: !0
                };
                let R = (0, u.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "groups",
                            items: I,
                            render: e => (0, u.jsx)(r(844565).A, { ...e,
                                title: "",
                                style: c.style0
                            })
                        }]
                    }),
                    O = w && w.length > 0 && !C ? (0, u.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: (0, u.jsx)(o().A, {
                            icon: (0, u.jsx)(r(16275).I, {
                                icon: r(40411).a
                            }),
                            title: (0, u.jsx)(r(109939).sA, {
                                id: "collectionFilterValueMenu.statusFilterValueMenu.hiddenStatusOptionsDescription",
                                defaultMessage: "{numHiddenOptions, plural, one {{numHiddenOptions} other status option} other {{numHiddenOptions} other status options}}",
                                values: {
                                    numHiddenOptions: w.length
                                }
                            }),
                            focused: !1,
                            onClick: () => {
                                b(!0), f && (0, r(893783).X)({
                                    environment: j,
                                    collectionContextStore: f,
                                    action: "expand_property_filter",
                                    original_view_type: void 0,
                                    property_type: "status"
                                })
                            }
                        })
                    }) : null,
                    B = (0, u.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: (0, u.jsx)(o().A, {
                            title: (0, u.jsx)(r(109939).sA, {
                                defaultMessage: "Clear selection",
                                id: "database.filterValue.selectType.clearSelection.message"
                            }),
                            focused: !1,
                            onClick: () => {
                                p([])
                            }
                        })
                    });
                return (0, u.jsx)(r(747369).A, { ...t,
                    children: (0, r(400473).gc)(a) ? (0, u.jsxs)(u.Fragment, {
                        children: [R, O, B]
                    }) : void 0
                })
            }

            function m(e) {
                let {
                    propertySchema: t,
                    statusFilterValues: r,
                    updateValue: l,
                    isMobile: p,
                    styles: m,
                    visibleOptions: g,
                    shouldShowHiddenSources: h
                } = e, y = t.groups ? ? [], v = t.options ? ? [], f = [];
                for (let e of y) {
                    let t = () => {
                            let t = (0, d().fe)({
                                groups: y,
                                options: v,
                                currentFilterValues: r,
                                value: {
                                    type: "is_group",
                                    value: e.name
                                }
                            });
                            t && l(t)
                        },
                        x = (0, d().Ze)({
                            group: e,
                            options: v,
                            filterValues: r
                        }),
                        j = v.filter(t => {
                            var r;
                            return (null == (r = e.optionIds) ? void 0 : r.includes(t.id)) && (h || (null == g ? void 0 : g.some(e => e.id === t.id)))
                        }),
                        A = [];
                    for (let t of j) {
                        let s = () => {
                            let e = (0, d().fe)({
                                groups: y,
                                options: v,
                                currentFilterValues: r,
                                value: {
                                    type: "is_option",
                                    value: t.value
                                }
                            });
                            e && l(e)
                        };
                        A.push({
                            key: `option-${t.id}`,
                            action: s,
                            render: r => (0, u.jsx)(o().A, { ...r,
                                icon: (0, u.jsx)(i().S, {
                                    checked: x.optionCheckedInfo.get(t.id) ? ? !1,
                                    size: 14,
                                    onClick: s,
                                    style: m.checkboxIcon
                                }),
                                title: (0, u.jsx)(a().q, {
                                    format: p ? n().NY.Large : n().NY.Medium,
                                    isSingle: !0,
                                    value: t.value,
                                    color: t.color,
                                    showRemoveButton: !1,
                                    groupColor: e.color
                                }),
                                style: c.style1
                            })
                        })
                    }
                    f.push({
                        key: `group-${e.id}`,
                        action: t,
                        render: r => (0, u.jsx)(o().A, { ...r,
                            icon: (0, u.jsx)(i().S, {
                                checked: x.groupCheckState,
                                size: 14,
                                onClick: t,
                                style: m.checkboxIcon
                            }),
                            title: (0, u.jsx)(s().RS, {
                                style: c.style2,
                                group: e,
                                showIcon: !0,
                                showColor: !0
                            }),
                            textWrapperStyle: c.style3
                        })
                    }, ...A)
                }
                return f
            }
        },
        698087: (e, t, r) => {
            function l(e) {
                let {
                    schema: t,
                    filters: l,
                    getRecordModel: o,
                    spaceIdCreator: n,
                    collectionSource: a
                } = e, s = [];
                for (let e of Object.keys(t)) {
                    let r = i({
                        property: e,
                        schema: t,
                        getRecordModel: o,
                        spaceIdCreator: n,
                        collectionSource: a
                    });
                    r && s.push(r)
                }
                let d = s.filter(e => !l.find(t => (0, r(400473).yX)(t.filter) && t.filter.property === e.property));
                return r(381453).Ul(d, e => {
                    let r = t[e.property];
                    return (null == r ? void 0 : r.name) || ""
                })
            }

            function i(e) {
                let {
                    property: t,
                    schema: l,
                    getRecordModel: i,
                    spaceIdCreator: o,
                    collectionSource: n
                } = e, a = l[t];
                if (a && !(0, r(561872).ah)(a, n)) return;
                let s = (0, r(323700).SN)({
                    property: t,
                    schema: l,
                    getRecordModel: i,
                    spaceIdCreator: o
                });
                return {
                    property: t,
                    filter: s
                }
            }

            function o(e) {
                return {
                    property: (0, r(9247).ol)(e),
                    filter: {
                        operator: "string_contains",
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    }
                }
            }

            function n(e) {
                let t = e.currentCombinatorFilterStore.state,
                    r = e.currentPropertyFiltersStore.state.filter(e => !p(e.id)).map(e => e.filter),
                    l = [...(null == t ? void 0 : t.filters) || [], ...r];
                return { ...t,
                    filters: l,
                    operator: "and"
                }
            }

            function a(e, t) {
                let r = e.currentCombinatorFilterStore.state,
                    l = e.currentPropertyFiltersStore.state.filter(e => e.id !== t.id),
                    i = [...(null == r ? void 0 : r.filters) || [], t.filter];
                return {
                    combinatorFilter: {
                        operator: "and",
                        ...r,
                        filters: i
                    },
                    propertyFilters: l
                }
            }

            function s(e) {
                let {
                    groups: t,
                    options: l,
                    currentFilterValues: i,
                    value: o
                } = e, n = i.filter(e => "is_group" === e.type).map(e => t.find(t => t.name === e.value)).filter(r(722371).O9), a = i.filter(e => "is_option" === e.type).map(e => l.find(t => t.value === e.value)).filter(r(722371).O9);
                for (let e of t) {
                    let t = e.optionIds ? ? [];
                    if (n.some(t => t.id === e.id)) a = a.filter(e => !t.includes(e.id));
                    else if (t.length > 0) {
                        let r = a.filter(e => !t.includes(e.id));
                        r.length + t.length === a.length && (a = r, n = [...n, e])
                    }
                }
                if ("is_option" === o.type) {
                    let e = l.find(e => e.value === o.value);
                    if (!e) return;
                    let r = a.filter(t => t.id !== e.id);
                    if (r.length < a.length) a = r;
                    else {
                        let r = t.find(t => {
                                var r;
                                return null == (r = t.optionIds) ? void 0 : r.includes(e.id)
                            }),
                            i = n.find(e => e.id === (null == r ? void 0 : r.id));
                        if (i) {
                            let t = l.filter(t => {
                                var r;
                                return (null == (r = i.optionIds) ? void 0 : r.includes(t.id)) && t.id !== e.id
                            });
                            n = n.filter(e => e.id !== i.id), a = [...a, ...t]
                        } else {
                            a = [...a, e];
                            let t = (null == r ? void 0 : r.optionIds) ? ? [];
                            if (r && t.length > 0) {
                                let e = a.filter(e => !t.includes(e.id));
                                e.length + t.length === a.length && (a = e, n = [...n, r])
                            }
                        }
                    }
                } else if ("is_group" === o.type) {
                    let e = t.find(e => e.name === o.value);
                    if (!e) return;
                    let r = n.filter(t => t.id !== e.id);
                    if (r.length < n.length) n = r;
                    else {
                        let t = e.optionIds ? ? [];
                        n = [...n, e], a = a.filter(e => !t.includes(e.id))
                    }
                } else(0, r(722371).HB)(o.type);
                return [...n.map(e => ({
                    type: "is_group",
                    value: e.name
                })), ...a.map(e => ({
                    type: "is_option",
                    value: e.value
                }))]
            }

            function d(e) {
                let {
                    group: t,
                    options: r,
                    filterValues: l
                } = e, i = l.some(e => "is_group" === e.type && e.value === t.name), o = r.filter(e => {
                    var r;
                    return null == (r = t.optionIds) ? void 0 : r.includes(e.id)
                }), n = new Map;
                for (let e of o) {
                    let t = l.some(t => "is_option" === t.type && t.value === e.value) || i;
                    n.set(e.id, t)
                }
                let a = Array.from(n.values()),
                    s = a.some(e => e),
                    d = a.every(e => e) && a.length > 0;
                return {
                    groupCheckState: !!i || !!d || !!s && "partial",
                    optionCheckedInfo: n
                }
            }

            function u(e) {
                var t;
                let {
                    collectionStore: l,
                    collectionContextStore: i,
                    environment: o
                } = e, n = i.relativeVariableStore.state, a = i.currentPropertyFiltersStore.state, s = i.currentCombinatorFilterStore.state, d = a.filter(e => !(0, r(400473).t_)(e.filter)).map(e => e.filter);
                if (0 === d.length && !s) return;
                let u = null == l ? void 0 : l.getModel(),
                    c = null == (t = i.collectionViewStore()) ? void 0 : t.getCollectionSource(),
                    p = i.normalizedSchemaStore.state,
                    m = (0, r(353387).b)(i);
                return {
                    filter: {
                        filters: s ? [...d, s] : d,
                        operator: "and"
                    },
                    propertyMapping: void 0,
                    context: {
                        schema: u && c ? (0, r(333042).zC)({
                            sourceType: c.type,
                            defaultSchema: p,
                            collection: u,
                            getRecordModel: (null == l ? void 0 : l.getRecordModel) ? ? r(993189).b4_.constant(void 0)
                        }) : p,
                        userId: o.currentUser.id,
                        userTimeZone: (0, r(714350).P)(),
                        userStartOfWeek: r(97892).X.state,
                        intl: r(962299).A.getIntl(),
                        relativeVariableResult: n,
                        currentPageInRelatedCollection: m,
                        collectionFeatureGates: (0, r(457103).i)()
                    },
                    sourceCollectionId: null == l ? void 0 : l.id
                }
            }

            function c(e, t, l) {
                let {
                    property: i
                } = t, o = e[i];
                if (!o || "rollup" !== o.type || !o.relation_property || !o.target_property) return o; {
                    let t = e[o.relation_property];
                    if (t && (0, r(795e3).n)(t)) {
                        let e = (0, r(390768).N)(t);
                        if (e) {
                            let t = l.getRecordModel(e);
                            if (!t) return;
                            let r = t.getNormalizedSchema(l.getRecordModel);
                            if (r) {
                                let e = r[o.target_property];
                                if (e && "rollup" !== e.type) return e
                            }
                        }
                    }
                }
            }

            function p(e) {
                return e === r(11448).IZ || e === r(11448).QW || e === r(236523).O || e === r(236523).j
            }

            function m(e) {
                return e.currentPropertyFiltersStore.state.filter(e => !(0, r(400473).t_)(e.filter)).length + +!!(e.currentCombinatorFilterStore.state && (0, r(845001).q)(e.capabilitiesStore, e.permissionScopesStore))
            }

            function g(e) {
                var t;
                let r = e.currentCombinatorFilterStore.state;
                return (null == r || null == (t = r.filters) ? void 0 : t.length) || 0
            }
            r.d(t, {
                S2: () => g,
                tG: () => m,
                AU: () => u,
                SO: () => i,
                LQ: () => l,
                MI: () => o,
                YF: () => c,
                Pi: () => n,
                $4: () => a,
                Ze: () => d,
                vu: () => p,
                fe: () => s
            }), r(944114), r(898992), r(823215), r(354520), r(672577), r(581454), r(737550)
        },
        729460: (e, t, r) => {
            r.d(t, {
                _: () => o
            });
            var l = r(296540),
                i = r(474848);

            function o(e) {
                let {
                    group: t,
                    menuListItemProps: o,
                    spaceStore: n,
                    iconSizeOverride: a,
                    right: s
                } = e, d = (0, r(109939).tz)(), u = (0, r(682985).K8)(() => {
                    let e = n ? ? r(728372).AppStoreSidebarSpaceStore.state;
                    if (e && t.icon) return {
                        pointer: {
                            table: e.table,
                            id: e.id
                        },
                        icon: t.icon
                    }
                }, [t, n]), c = (0, l.useMemo)(() => (0, r(405461).Pf)({
                    intl: d,
                    groupName: t.name
                }), [t.name, d]), p = a || (r(986939).A.isMobile ? r(636518).nd : r(636518).pg);
                return (0, i.jsx)(r(95582).A, { ...o,
                    icon: u ? (0, i.jsx)(r(569553).B6, {
                        disabled: !0,
                        size: p,
                        icon: u,
                        isEmptyPage: !1,
                        title: c
                    }) : (0, i.jsx)(r(391343).A, {
                        size: p
                    }),
                    title: c,
                    right: s
                })
            }
        },
        972835: (e, t, r) => {
            r.d(t, {
                C: () => l
            });

            function l(e) {
                let t = e.use_end;
                return void 0 === t || !1 === t ? "start_date" : !0 === t ? "end_date" : void(0, r(722371).HB)(t)
            }
        }
    }
]);