"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [12690], {
        86484: (e, t, n) => {
            n.d(t, {
                B5: () => l,
                CJ: () => a,
                Sf: () => d,
                md: () => r,
                wb: () => s
            }), n(814603), n(147566), n(198721);
            let i = {
                dateRangeFilter: {
                    everything: !0
                },
                excludeCreatedByFilter: {
                    everything: !0
                },
                createdByFilter: {
                    everything: !1,
                    notion: !0
                },
                titleOnlyFilter: {
                    everything: !1,
                    notion: !0
                },
                ancestorsFilter: {
                    everything: !1,
                    notion: !0
                },
                teamspacesFilter: {
                    everything: !1,
                    notion: !0
                }
            };

            function a(e, t) {
                return !!e && !!(i[t][e] || i[t].everything)
            }
            let r = (0, n(755439).xS)({
                page: !0,
                collection: !1,
                createPage: !1,
                user: !0,
                inviteUserToWorkspace: !1,
                inviteUserToPage: !1,
                date: !0,
                reminder: !1,
                bot: !1,
                group: !1,
                team: !0,
                heading: !1,
                templateVariable: !1,
                formulaContextVariable: !1,
                slackSpecialMention: !1,
                property: !1,
                propertyValue: !1
            });

            function s(e) {
                switch (e) {
                    case "pull-request":
                        return "Pull Request";
                    case "issue":
                        return "Issue";
                    case "code":
                        return "Code";
                    default:
                        return null
                }
            }

            function l(e) {
                if (!e) return e;
                let t = e;
                return (t = (t = (t = d(t = (t = (t = (t = t.replace(/<gzkNfoUU>/g, "§§HIGHLIGHT_START§§")).replace(/<\/gzkNfoUU>/g, "§§HIGHLIGHT_END§§")).replace(/<(.*?)\|([^>]*)>/g, (e, t, n) => {
                    try {
                        return new URL(n), o(n)
                    } catch {
                        if (n.length > 0) return n;
                        return t
                    }
                })).replace(/<(\S+(?:\s+\S+)*)>/g, (e, t) => {
                    try {
                        return new URL(t), o(t)
                    } catch {
                        return t
                    }
                }))).replace(/§§HIGHLIGHT_START§§/g, "<gzkNfoUU>")).replace(/§§HIGHLIGHT_END§§/g, "</gzkNfoUU>")).replace(/&amp;/g, "&")
            }

            function o(e) {
                if (!e || "" === e.trim() || e.trim().includes(" ")) return e;
                let t = e.trim(),
                    i = n(758654).qg(t),
                    a = i.host;
                if (i.protocol && a || (a = (i = n(758654).qg(`http://${t}`)).host), !a) return e;
                a = a.replace(/^www./i, "");
                let r = i.pathname || "",
                    s = i.hash || "";
                if (r.length + s.length <= 20) return `${a}${r}${s}`;
                let l = r + s,
                    o = l.slice(0, 3),
                    d = l.slice(-3);
                return `(${a}${o}…${d})`
            }

            function d(e) {
                let t = e;
                return (t = t.replace(/(&gt;)/g, ">")).replace(/(&lt;)/g, "<")
            }
        },
        231246: (e, t, n) => {
            n.d(t, {
                SZ: () => r,
                UO: () => s,
                lx: () => l
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            var i = n(296540),
                a = n(474848);

            function r({
                mode: e,
                title: t,
                teamIds: i,
                onChange: s,
                disabled: o,
                focused: u,
                onMenuDismiss: p,
                onMenuOpen: h,
                parentStore: f,
                isRemovable: x,
                onFilterRemove: y,
                autoOpen: j
            }) {
                let b = (0, n(533992).v3)(),
                    v = (0, n(109939).tz)(),
                    S = (0, n(821603).fg)(i);
                return (0, a.jsx)(n(454860).A, {
                    mode: e,
                    title: t,
                    icon: n(767816).teamspaceIcon,
                    items: S || [],
                    onChange: s,
                    disabled: o,
                    focused: u,
                    renderFilter: (e, t) => (0, a.jsx)(g, {
                        item: e,
                        args: t,
                        parentStore: f
                    }),
                    renderToken: (e, t) => (0, a.jsx)(m, {
                        item: e,
                        handlers: t,
                        teamIds: i,
                        parentStore: f
                    }),
                    renderItemForSummary: e => (0, a.jsx)(d, {
                        item: e,
                        parentStore: f
                    }),
                    addItemLabel: (0, a.jsx)(n(109939).sA, {
                        defaultMessage: "Add a teamspace",
                        id: "search.filterMenu.addATeamButton.label"
                    }),
                    labelText: {
                        title: t,
                        tokenInputPlaceholder: v.formatMessage({
                            defaultMessage: "Search teamspaces",
                            id: "search.filterMenu.searchTeams.placeholder"
                        }),
                        componentDebugName: "SearchTeamFilter"
                    },
                    performRequest: e => l(e, b),
                    renderResultMenuItem: (e, t) => (0, a.jsx)(c, {
                        item: e,
                        props: t,
                        parentStore: f
                    }),
                    onMenuDismiss: p,
                    onMenuOpen: h,
                    hasItemsSelected: !!(S && (null == S ? void 0 : S.length) > 0),
                    isRemovable: x,
                    onFilterRemove: y,
                    autoOpen: j
                })
            }
            let s = 20;
            async function l({
                query: e,
                current: t
            }, i) {
                var a;
                let r = new Set(t),
                    o = n(728372).AppStoreSidebarSpaceViewStore.state,
                    d = (0, n(328765).S)(),
                    c = null == (a = n(728372).AppStoreCurrentUserStore.state) ? void 0 : a.id;
                if (!o || !d || !c) return [];
                let u = await (0, n(455205).getActiveTeamsMetadataForUserInSpace)({
                        userId: c,
                        spaceStore: d,
                        environment: i
                    }),
                    m = (0, n(485129).d)({
                        spaceStore: d,
                        teams: u
                    }).map(e => e.store);
                if (!e) {
                    let e = new Set((0, n(679321).r)(o).map(e => e.id));
                    if (m.map(e => e.id).forEach(t => e.add(t)), e.size > 0) return [...e]
                }
                let g = await n(308825).T.searchActions.load();
                return (await g.searchTeams({
                    query: e,
                    spaceViewStore: o,
                    teamStores: m
                })).filter(e => !r.has(e.id)).slice(0, s).map(e => e.id)
            }

            function o(e, t) {
                return n(681735).h.createChildStore(t, {
                    table: n(832375).yKj,
                    id: e
                })
            }

            function d({
                item: e,
                parentStore: t
            }) {
                return (0, a.jsx)(a.Fragment, {
                    children: o(e, t).getName()
                })
            }

            function c({
                item: e,
                props: t,
                parentStore: a
            }) {
                let r = o(e, a);
                return (0, i.createElement)(n(996712).A, { ...t,
                    key: e,
                    teamStore: r
                })
            }
            let u = {
                background: "transparent"
            };

            function m({
                item: e,
                handlers: t,
                teamIds: r,
                parentStore: s
            }) {
                let l = (0, n(821603).fg)(r),
                    d = (null == l ? void 0 : l.length) === 1,
                    c = (0, n(682985).K8)(() => o(e, s), [e, s]),
                    g = (0, n(682985).K8)(() => c.getName(), [c]),
                    p = (0, n(682985).K8)(() => c.getIcon(), [c]),
                    h = (0, i.useMemo)(() => function(e) {
                        return (0, a.jsx)(n(569553).B6, {
                            disabled: !0,
                            icon: p,
                            iconRecordCategory: "teamspace",
                            isEmptyPage: !1,
                            size: e
                        })
                    }, [p]);
                return c ? (0, a.jsx)(n(376921).Ay, {
                    format: n(986939).A.isMobile ? n(376921).mI.Large : n(376921).mI.Small,
                    showRemoveButton: !0,
                    isSingle: d,
                    onClickRemove: t.onRemove,
                    renderAvatar: h,
                    title: g,
                    style: u
                }) : null
            }

            function g({
                item: e,
                args: t,
                parentStore: i
            }) {
                let {
                    disabled: r,
                    onRemove: s,
                    onClick: l
                } = t, d = {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: n(986939).A.isMobile ? 12 : 4,
                        paddingBottom: n(986939).A.isMobile ? 12 : 4
                    },
                    menuItemTitle: {
                        width: "100%"
                    },
                    labeledMenuItemTitle: {
                        display: "inline-flex",
                        alignItems: "center"
                    },
                    menuItemLabel: {
                        marginInlineEnd: 12
                    }
                }, c = o(e, i), u = (0, a.jsx)(n(706893).A, {
                    disabled: r,
                    onClick: s
                });
                return (0, a.jsx)(n(996712).A, {
                    disabled: r,
                    focused: !1,
                    teamStore: c,
                    right: u,
                    style: d.menuItem,
                    desktopTitleStyle: d.menuItemTitle,
                    onClick: l
                }, e)
            }
        },
        258442: (e, t, n) => {
            n.d(t, {
                t: () => r
            });
            var i = n(296540),
                a = n(474848);
            let r = i.memo(function(e) {
                let {
                    coverHeight: t,
                    coverSizeFormat: i,
                    emptyGalleryCoverStyle: r
                } = e, s = (0, n(960253).I)(() => ({
                    container: {
                        height: (0, n(623549).F)(t, i),
                        ...r
                    }
                }), [t, i, r]);
                return (0, a.jsx)("div", {
                    style: s.container
                })
            })
        },
        331436: (e, t, n) => {
            n.d(t, {
                E: () => l
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);
            let a = {
                    display: "flex",
                    alignItems: "center"
                },
                r = {
                    marginInlineEnd: 4
                },
                s = (0, n(109939).YK)({
                    searchPages: {
                        defaultMessage: "Search pages",
                        id: "searchPageFilter.searchTokenFilter.tokenInput.placeholder"
                    }
                });

            function l({
                mode: e,
                title: t,
                blockIds: a,
                onChange: r,
                disabled: d,
                focused: p,
                peopleBlocksToInclude: h,
                onMenuDismiss: f,
                onMenuOpen: x,
                parentStore: y
            }) {
                let j = (0, n(109939).tz)(),
                    b = (0, n(533992).v3)();
                return (0, i.jsx)(n(454860).A, {
                    mode: e,
                    hasItemsSelected: (null == a ? void 0 : a.length) > 0,
                    title: t,
                    icon: n(865213).Y,
                    items: a,
                    onChange: r,
                    focused: p,
                    renderFilter: (e, t) => (0, i.jsx)(g, {
                        item: e,
                        args: t,
                        parentStore: y
                    }),
                    renderToken: (e, t) => (0, i.jsx)(u, {
                        item: e,
                        handlers: t,
                        blockIds: a,
                        parentStore: y
                    }),
                    renderItemForSummary: e => (0, i.jsx)(c, {
                        item: e,
                        parentStore: y
                    }),
                    addItemLabel: (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Add another page",
                        id: "searchPageFilter.searchTokenFilter.addAPage.button"
                    }),
                    labelText: {
                        title: t,
                        tokenInputPlaceholder: j.formatMessage(s.searchPages),
                        componentDebugName: "SearchPageFilter"
                    },
                    performRequest: ({
                        query: e,
                        current: t
                    }) => o({
                        query: e,
                        current: t,
                        peopleBlocksToInclude: h
                    }, b),
                    renderResultMenuItem: (e, t) => (0, i.jsx)(m, {
                        item: e,
                        props: t,
                        parentStore: y
                    }),
                    disabled: d,
                    onMenuDismiss: f,
                    onMenuOpen: x
                })
            }
            async function o(e, t) {
                let {
                    query: i,
                    current: a,
                    peopleBlocksToInclude: r
                } = e, s = n(728372).AppStoreSidebarSpaceStore.state;
                if (!s) return [];
                let l = await n(308825).T.searchActions.load(),
                    o = i ? (await l.searchPageIds({
                        environment: t,
                        query: i,
                        limit: 20,
                        spaceId: s.id,
                        requireEditPermissions: !1,
                        excludeTemplates: !1,
                        source: "ancestor_filter_page_search",
                        boostRecentlyViewedPages: !0,
                        spaceStore: s,
                        peopleBlocksToInclude: r
                    })).results : n(601860).NK.state.map(e => e.pageId),
                    d = new Set(a);
                return o.filter(e => !d.has(e))
            }

            function d(e, t) {
                return n(970831).B.createChildStore(t, {
                    table: n(832375).evP,
                    id: e
                })
            }

            function c({
                item: e,
                parentStore: t
            }) {
                let a = d(e, t);
                return (0, i.jsx)(n(627918).A, {
                    store: a,
                    shouldWrap: !0,
                    maxLength: 50
                })
            }

            function u({
                item: e,
                handlers: t,
                blockIds: s,
                parentStore: l
            }) {
                let o = 1 === s.length,
                    c = d(e, l),
                    m = (0, n(682985).K8)(() => c.getIcon(), [c]),
                    g = (0, n(682985).K8)(() => (0, n(569553).Te)(c), [c]),
                    p = (0, i.jsxs)("div", {
                        style: a,
                        children: [(0, i.jsx)(n(569553).B6, {
                            disabled: !0,
                            icon: m,
                            iconRecordCategory: g,
                            isEmptyPage: !1,
                            size: 20,
                            style: r
                        }), (0, i.jsx)(n(627918).A, {
                            store: c
                        })]
                    });
                return (0, i.jsx)(n(628462).A, {
                    format: n(986939).A.isMobile ? n(696654).NY.Large : n(696654).NY.Small,
                    value: p,
                    showRemoveButton: !0,
                    onClickRemove: t.onRemove,
                    isSingle: o,
                    shouldShrink: !0,
                    backgroundColor: "transparent",
                    shouldWrap: !1
                })
            }

            function m({
                item: e,
                props: t,
                parentStore: a
            }) {
                let r = (0, n(682985).K8)(() => d(e, a), [e, a]);
                return (0, i.jsx)(n(103558).A, { ...t,
                    store: r
                })
            }

            function g({
                item: e,
                args: t,
                parentStore: a
            }) {
                let {
                    disabled: r,
                    onRemove: s,
                    onClick: l
                } = t, o = {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: n(986939).A.isMobile ? 12 : 4,
                        paddingBottom: n(986939).A.isMobile ? 12 : 4
                    },
                    menuItemTitle: {
                        width: "100%"
                    },
                    labeledMenuItemTitle: {
                        display: "inline-flex",
                        alignItems: "center"
                    },
                    menuItemLabel: {
                        marginInlineEnd: 12
                    }
                }, c = d(e, a), u = (0, i.jsx)(n(706893).A, {
                    disabled: r,
                    onClick: s
                });
                return (0, i.jsx)(n(103558).A, {
                    disabled: r,
                    focused: !1,
                    store: c,
                    right: u,
                    style: o.menuItem,
                    desktopTitleStyle: o.menuItemTitle,
                    onClick: l
                })
            }
        },
        492205: (e, t, n) => {
            n.d(t, {
                J: () => a
            }), n(296540);
            var i = n(474848);

            function a({
                title: e,
                value: t,
                disabled: r,
                icon: s,
                style: d,
                onChange: c,
                focused: u,
                mode: m
            }) {
                return n(986939).A.isMobile ? (0, i.jsx)(o, {
                    title: e,
                    value: t,
                    disabled: r,
                    icon: s,
                    style: d,
                    onChange: c,
                    focused: u,
                    mode: m
                }) : (0, i.jsx)(l, {
                    title: e,
                    icon: s,
                    value: t,
                    style: d,
                    onChange: c,
                    focused: u,
                    mode: m
                })
            }

            function r() {
                return {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: n(986939).A.isMobile ? 12 : 4,
                        paddingBottom: n(986939).A.isMobile ? 12 : 4
                    },
                    icon: {
                        height: 14,
                        width: 14,
                        fill: "currentColor"
                    },
                    sectionMenuItem: {
                        display: "flex"
                    }
                }
            }

            function s({
                mode: e,
                title: t,
                icon: a,
                value: l,
                style: o,
                onChange: d,
                focused: c
            }) {
                let u = r(),
                    m = {
                        menuItem: {
                            color: n(632079).Tj.text.secondary
                        }
                    },
                    g = { ...u.menuItem,
                        ...m.menuItem,
                        ...o
                    };
                return e === n(454860).C.Pill ? (0, i.jsx)(n(97726).n, {
                    on: l,
                    hideChevron: !0,
                    title: (0, i.jsx)("span", {
                        children: t
                    }),
                    onClick: () => {
                        d(!l)
                    },
                    icon: (0, i.jsx)(n(16275).I, {
                        icon: a,
                        fitToViewBox: "horizontal"
                    })
                }) : (0, i.jsx)(n(296060).A, {
                    title: t,
                    icon: a(u.icon),
                    on: l,
                    onClick: () => {
                        d(!l)
                    },
                    style: g,
                    focused: c
                })
            }

            function l({
                mode: e,
                title: t,
                icon: a,
                value: o,
                style: d,
                onChange: c,
                focused: u
            }) {
                return (0, i.jsx)(n(543588).A, {
                    marginAfter: !1,
                    style: r().sectionMenuItem,
                    children: (0, i.jsx)(s, {
                        title: t,
                        icon: a,
                        value: o,
                        style: d,
                        onChange: c,
                        mode: e,
                        focused: u
                    })
                })
            }

            function o({
                mode: e,
                title: t,
                value: a,
                disabled: r,
                icon: l,
                style: d,
                onChange: c,
                focused: u
            }) {
                return e === n(454860).C.Button ? (0, i.jsx)(s, {
                    title: t,
                    icon: l,
                    value: a,
                    style: d,
                    onChange: c,
                    mode: e,
                    focused: u
                }) : (0, i.jsx)(n(835187).A, {
                    disabled: r,
                    onClick: () => {
                        c(!a)
                    },
                    label: t,
                    isToggle: !0,
                    isToggleActive: a
                })
            }
        },
        549920: (e, t, n) => {
            n.d(t, {
                m: () => l
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                today: (0, a.jsx)(n(109939).sA, {
                    defaultMessage: "Today",
                    id: "searchDateFilter.quickActions.today.label"
                }),
                pastWeek: (0, a.jsx)(n(109939).sA, {
                    defaultMessage: "Last 7 days",
                    id: "searchDateFilter.quickActions.last7Days.label"
                }),
                pastMonth: (0, a.jsx)(n(109939).sA, {
                    defaultMessage: "Last 30 days",
                    id: "searchDateFilter.quickActions.last30Days.label"
                })
            };

            function s({
                date: e,
                onClick: t,
                onDismiss: i
            }) {
                let l, o = (0, n(714350).P)(),
                    d = n(25825).Ec(o),
                    c = r[e];
                return "today" === e ? l = d : "pastWeek" === e ? l = n(25825).t0(o) : "pastMonth" === e ? l = n(25825).ZG(o) : (0, n(722371).HB)(e), (0, a.jsx)(n(95582).A, {
                    focused: !1,
                    title: c,
                    onClick: e => {
                        t({
                            value: {
                                starting: {
                                    type: "date",
                                    start_date: l.start_date
                                },
                                ending: {
                                    type: "date",
                                    start_date: d.start_date
                                }
                            }
                        }), i(e)
                    }
                })
            }

            function l(e) {
                let {
                    initialValue: t,
                    dateFilterType: r,
                    onMenuDismiss: s,
                    title: l,
                    icon: o,
                    disabled: d,
                    onMenuOpen: c,
                    dateFormat: m,
                    mode: g,
                    onChange: p,
                    isRemovable: h,
                    onRemove: f,
                    autoOpen: x
                } = e, {
                    current: y
                } = (0, i.useRef)(e.store ? ? new(n(560600)).A({
                    initialDateRange: t,
                    shouldAlsoUpdateSearchStore: !1
                }));
                (0, i.useEffect)(() => {
                    y.state.dateFilterType !== r && y.update(e => ({ ...e,
                        dateFilterType: r
                    }))
                }, [r, y]);
                let j = (0, i.useRef)(!1);
                return (0, i.useEffect)(() => {
                    !x || y.state.isOpen || j.current || (u(y, d, c), j.current = !0)
                }, [x, y, d, c]), n(986939).A.isMobile ? (0, a.jsx)(C, {
                    onMenuDismiss: s,
                    title: l,
                    disabled: d,
                    onMenuOpen: c,
                    dateFormat: m,
                    icon: o,
                    store: y,
                    mode: g,
                    onChange: p
                }) : (0, a.jsx)(I, {
                    onMenuDismiss: s,
                    title: l,
                    disabled: d,
                    onMenuOpen: c,
                    icon: o,
                    store: y,
                    onChange: p,
                    isRemovable: h,
                    onRemove: f
                })
            }

            function o(e) {
                let {
                    dateFilterType: t,
                    nextState: n,
                    store: i,
                    onChange: a
                } = e;
                if (i.update(e => ({ ...e,
                        temporaryDateRange: { ...i.state.temporaryDateRange,
                            ...n
                        },
                        dateFilterType: t
                    })), a) {
                    let e = void 0 !== n.starting && void 0 !== n.ending,
                        i = void 0 === n.starting && void 0 === n.ending;
                    (e || i) && a(t, {
                        starting: n.starting,
                        ending: n.ending
                    })
                }
            }

            function d(e) {
                return ({
                    lastEditedTime: (0, a.jsx)(n(109939).sA, {
                        id: "search.filterMenu.moreFilters.lastEdited",
                        defaultMessage: "Last edited"
                    }),
                    createdTime: (0, a.jsx)(n(109939).sA, {
                        id: "search.filterMenu.moreFilters.created",
                        defaultMessage: "Created"
                    })
                })[e]
            }

            function c(e) {
                e.preventDefault && e.preventDefault()
            }

            function u(e, t, n) {
                t || (n && n(), e.setState({ ...e.state,
                    isOpen: !0,
                    focus: "starting"
                }))
            }

            function m(e, t, i, a) {
                let {
                    temporaryDateRange: r,
                    dateFilterType: s
                } = t.state;
                !(0, n(784626).a)(e) && (o({
                    dateFilterType: s,
                    nextState: r,
                    store: t,
                    onChange: a
                }), t.setState({ ...t.state,
                    isOpen: !1
                }), i && i())
            }

            function g(e, t) {
                let {
                    dateFilterType: n
                } = e.state;
                o({
                    dateFilterType: n,
                    nextState: {
                        starting: void 0,
                        ending: void 0
                    },
                    store: e,
                    onChange: t
                }), e.clearTemporaryDateRange()
            }
            let p = {
                style0: {
                    paddingInlineStart: 4,
                    paddingInlineEnd: 4,
                    borderRadius: 4,
                    flexShrink: 0
                },
                style1: {
                    display: "flex",
                    alignItems: "center",
                    ...!n(986939).A.isMobile && {
                        color: n(632079).Tj.text.secondary,
                        fill: n(632079).Tj.icon.tertiary,
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: "16px"
                    }
                },
                style2: {
                    marginInlineEnd: 4
                }
            };

            function h({
                store: e,
                onChange: t
            }) {
                let i = (0, n(682985).K8)(() => e.state.dateFilterType, [e]),
                    r = (0, n(682985).K8)(() => e.state.temporaryDateRange ? ? {
                        starting: void 0,
                        ending: void 0
                    }, [e]);
                return (0, a.jsx)(n(691509).A, { ...{
                        width: 190,
                        items: ["createdTime", "lastEditedTime"],
                        selectedItem: i,
                        getKey: e => e,
                        onSelect: n => (function(e, t, n, i) {
                            let {
                                dateFilterType: a
                            } = n.state;
                            o({
                                dateFilterType: e,
                                nextState: t,
                                store: n,
                                onChange: i
                            }), e !== a && (o({
                                dateFilterType: a,
                                nextState: {
                                    starting: void 0,
                                    ending: void 0
                                },
                                store: n,
                                onChange: i
                            }), n.setState({ ...n.state,
                                dateFilterType: e
                            }))
                        })(n, r, e, t),
                        renderItem: e => (0, a.jsx)(n(95582).A, {
                            title: d(e.value),
                            ...e
                        }),
                        children: e => (0, a.jsx)(n(64960).Ay, { ...e,
                            style: p.style0,
                            children: (0, a.jsxs)("div", {
                                style: p.style1,
                                children: [(0, a.jsx)("span", {
                                    style: p.style2,
                                    children: d(i)
                                }), (0, a.jsx)(n(16275).I, {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })]
                            })
                        })
                    },
                    menuTypeOverride: (0, n(649476).PK)()
                })
            }
            let f = {
                height: 14,
                width: 14,
                fill: "currentColor"
            };

            function x({
                disabled: e,
                onMenuOpen: t,
                icon: r,
                title: s,
                store: l
            }) {
                let o = (0, i.useCallback)(() => u(l, e, t), [l, e, t]);
                return (0, a.jsx)(n(95582).A, {
                    disabled: e,
                    focused: !1,
                    icon: r(f),
                    title: s,
                    onClick: o
                })
            }

            function y({
                disabled: e,
                onMenuOpen: t,
                title: r,
                store: s,
                dateFormat: l,
                onChange: o
            }) {
                let d = (0, n(109939).tz)(),
                    c = (0, i.useCallback)(() => g(s, o), [s, o]),
                    m = (0, i.useCallback)(() => u(s, e, t), [s, e, t]),
                    p = (0, n(682985).K8)(() => s.state.temporaryDateRange ? ? {
                        starting: void 0,
                        ending: void 0
                    }, [s]),
                    h = (0, a.jsxs)(n(4458).fI, {
                        gap: 6,
                        inline: !0,
                        children: [(0, a.jsx)(n(16275).I, {
                            icon: n(428602).Y,
                            size: "sm"
                        }), (0, n(752533).t)(p, d, l)]
                    });
                return (0, a.jsx)(n(835187).A, {
                    disabled: e,
                    onClick: m,
                    onClickClear: c,
                    label: r,
                    title: h
                })
            }

            function j({
                disabled: e,
                onMenuOpen: t,
                icon: r,
                title: s,
                store: l
            }) {
                let o = (0, i.useCallback)(() => u(l, e, t), [l, e, t]),
                    d = (0, n(682985).K8)(() => {
                        let {
                            starting: e,
                            ending: t
                        } = l.state.temporaryDateRange;
                        return !!e && !!t
                    }, [l]);
                return (0, a.jsx)(n(97726).n, {
                    on: !!d,
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: r,
                        fitToViewBox: "horizontal"
                    }),
                    title: (0, a.jsx)("span", {
                        children: s
                    }),
                    onClick: o
                })
            }
            let b = {
                clearButton: {
                    color: n(632079).Tj.text.secondary,
                    fill: n(632079).Tj.icon.tertiary,
                    fontWeight: n(699422).Wy.medium,
                    fontSize: 12,
                    lineHeight: "16px",
                    paddingInlineStart: 4,
                    paddingInlineEnd: 4,
                    borderRadius: 4,
                    flexShrink: 0
                },
                showBottomDivider: {
                    boxShadow: `0 1px 0 ${n(632079).Tj.border.secondaryTranslucent}`
                }
            };

            function v({
                onMenuDismiss: e,
                title: t,
                store: r,
                onChange: l,
                isRemovable: d,
                onRemove: c
            }) {
                let u = (0, n(682985).K8)(() => r.state.dateFilterType, [r]),
                    p = (0, n(682985).K8)(() => r.state.temporaryDateRange, [r]),
                    f = !n(986939).A.isMobile,
                    x = (0, i.useCallback)(t => m(t, r, e, l), [r, e, l]),
                    y = (0, i.useCallback)(e => {
                        if (e.error) return;
                        r.setState({ ...r.state,
                            temporaryDateRange: { ...p,
                                ...e.value
                            }
                        });
                        let {
                            starting: t,
                            ending: n
                        } = r.state.temporaryDateRange;
                        t && n && o({
                            dateFilterType: u,
                            nextState: {
                                starting: t,
                                ending: n
                            },
                            store: r,
                            onChange: l
                        })
                    }, [u, p, r, l]),
                    j = (0, i.useCallback)(() => g(r, l), [r, l]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n(844565).A, {
                        children: (0, a.jsxs)(n(4458).fI, {
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            paddingTop: 4,
                            paddingInlineEnd: 4,
                            paddingBottom: 2,
                            paddingInlineStart: 4,
                            children: [(0, a.jsx)(h, {
                                store: r,
                                onChange: l
                            }), (0, a.jsx)(n(64960).Ay, {
                                style: b.clearButton,
                                onClick: j,
                                children: f ? (0, a.jsx)(n(109939).sA, {
                                    defaultMessage: "Clear",
                                    id: "searchDateFilter.clearButton.label"
                                }) : (0, a.jsx)(n(109939).sA, {
                                    defaultMessage: "Clear date",
                                    id: "searchDateFilter.clearDateButton.label"
                                })
                            })]
                        })
                    }), (0, a.jsxs)(n(844565).A, {
                        style: b.showBottomDivider,
                        children: [(0, a.jsx)(s, {
                            date: "today",
                            onClick: y,
                            onDismiss: x
                        }), (0, a.jsx)(s, {
                            date: "pastWeek",
                            onClick: y,
                            onDismiss: x
                        }), (0, a.jsx)(s, {
                            date: "pastMonth",
                            onClick: y,
                            onDismiss: x
                        })]
                    }), (0, a.jsx)(n(102870).A, {
                        title: t,
                        value: p,
                        onUpdate: y,
                        store: r,
                        onDismiss: x,
                        hideDateInputMenuItems: !0
                    }), d && c ? (0, a.jsx)(n(726219).x, {
                        onRemove: c
                    }) : void 0]
                })
            }
            let S = {
                display: "flex"
            };

            function I({
                onMenuDismiss: e,
                title: t,
                disabled: r,
                onMenuOpen: s,
                icon: l,
                store: o,
                onChange: d,
                isRemovable: u,
                onRemove: g
            }) {
                let p = (0, n(682985).K8)(() => o.state.isOpen, [o]),
                    h = (0, i.useCallback)(t => m(t, o, e, d), [o, e, d]);
                return (0, a.jsx)(n(543588).A, {
                    style: S,
                    children: (0, a.jsx)(n(369064).N, {
                        debugName: "SearchGenericDateFilter",
                        capture: p,
                        onUp: c,
                        onDown: c,
                        onEnter: c,
                        children: (0, a.jsx)(n(182718).zD, {
                            popupType: n(423291).n.Popup,
                            open: p,
                            content: () => (0, a.jsx)(v, {
                                onMenuDismiss: e,
                                title: t,
                                store: o,
                                onChange: d,
                                isRemovable: u,
                                onRemove: g
                            }),
                            onDismiss: h,
                            placementToOrigin: "bottom",
                            alignmentToOrigin: "start",
                            keepFocus: !0,
                            children: (0, a.jsx)(j, {
                                disabled: r,
                                onMenuOpen: s,
                                icon: l,
                                title: t,
                                store: o
                            })
                        })
                    })
                })
            }

            function C({
                mode: e,
                onMenuDismiss: t,
                title: r,
                disabled: s,
                onMenuOpen: l,
                dateFormat: o,
                icon: d,
                store: c,
                onChange: u
            }) {
                let g = (0, i.useCallback)(e => m(e, c, t, u), [c, t, u]),
                    p = (0, i.useCallback)(() => (0, a.jsx)(v, {
                        onMenuDismiss: t,
                        title: r,
                        store: c,
                        onChange: u
                    }), [t, r, c, u]),
                    h = (0, n(682985).K8)(() => c.state.isOpen, [c]),
                    f = e === n(454860).C.Section ? (0, a.jsx)(y, {
                        disabled: s,
                        onMenuOpen: l,
                        title: r,
                        store: c,
                        dateFormat: o,
                        onChange: u
                    }) : (0, a.jsx)(x, {
                        disabled: s,
                        onMenuOpen: l,
                        icon: d,
                        title: r,
                        store: c
                    });
                return (0, a.jsx)(n(182718).zD, {
                    popupType: n(423291).n.SlideUp,
                    open: h,
                    content: p,
                    onDismiss: g,
                    preventScaleTransition: !0,
                    children: f
                })
            }
        },
        554181: (e, t, n) => {
            n.d(t, {
                E: () => i
            });

            function i(e) {
                let t = e.getSchema();
                if (t)
                    for (let [i, a] of Object.entries(t)) {
                        var n;
                        if (a && "text" === a.type && (null == (n = a.ai_inference) ? void 0 : n.type) === "summarize") {
                            let t = e.getPropertyValue(i);
                            if (t) return t
                        }
                    }
            }
        },
        623549: (e, t, n) => {
            n.d(t, {
                F: () => i
            });

            function i(e, t) {
                if (e) return e;
                switch (t) {
                    case "large":
                        return n(904315).A.card.desktop.large.height;
                    case "small":
                        return n(904315).A.card.desktop.small.height;
                    default:
                        return n(904315).A.card.desktop.medium.height
                }
            }
        },
        742726: (e, t, n) => {
            n.d(t, {
                z: () => r
            }), n(296540);
            var i = n(474848);
            let a = new(n(815048)).O2("CollectionItemCover", async () => {
                    let {
                        CollectionItemCover: e
                    } = await n.e(79883).then(n.bind(n, 192348));
                    return {
                        CollectionItemCover: e
                    }
                }),
                r = (0, n(815048)._h)(a, e => e.CollectionItemCover, {
                    renderLoading: (e, t) => {
                        let {
                            coverHeight: a,
                            coverSizeFormat: r,
                            emptyGalleryCoverStyle: s,
                            showEmptyGalleryCover: l
                        } = t;
                        return l ? (0, i.jsx)(n(258442).t, {
                            coverHeight: a,
                            coverSizeFormat: r,
                            emptyGalleryCoverStyle: s
                        }) : null
                    }
                })
        },
        765846: (e, t, n) => {
            n.d(t, {
                Cd: () => s,
                Wd: () => o,
                yq: () => d
            });
            var i = n(296540),
                a = n(474848);
            let r = "bodyRegular";

            function s(e) {
                let {
                    fontSize: t,
                    lineHeight: i
                } = n(649316).U[e];
                return {
                    fontSize: t,
                    lineHeight: i
                }
            }
            let l = (0, i.createContext)(void 0);

            function o({
                children: e,
                isFullPage: t
            }) {
                let s = (0, n(316258).jw)(),
                    d = (0, i.useMemo)(() => ({
                        bodyStyleKey: t ? ? s.isType("fullPage", "inferenceTranscriptChatView") ? "bodyLgRegular" : r
                    }), [s, t]);
                return (0, a.jsx)(l.Provider, {
                    value: d,
                    children: e
                })
            }

            function d() {
                let e = (0, i.useContext)(l);
                return e || {
                    bodyStyleKey: r
                }
            }
            l.displayName = "AgentFontContext"
        }
    }
]);