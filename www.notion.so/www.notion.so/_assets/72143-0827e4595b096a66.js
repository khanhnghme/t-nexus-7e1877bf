"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [56809, 72143], {
        153262: (e, t, a) => {
            a.d(t, {
                Jg: () => i,
                bM: () => o,
                hG: () => n,
                ic: () => s
            });
            let o = "150ms ease";

            function i() {
                return {
                    borderRadius: 6
                }
            }
            let n = a(986939).A.isMobile ? {} : { ...i(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${o}`
            };

            function s() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        164177: (e, t, a) => {
            a.d(t, {
                j: () => n
            });
            var o = () => a(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let n = new i
        },
        199012: (e, t, a) => {
            a.d(t, {
                x: () => n
            }), a(898992), a(672577);
            var o = () => a(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        chosenSpaceId: void 0
                    }
                }
                getChosenSpaceId() {
                    let {
                        chosenSpaceId: e
                    } = this.state, t = a(728372).AppStoreSidebarSpaceStore.state;
                    return e || (null == t ? void 0 : t.id)
                }
                getChosenSpaceStore() {
                    var e;
                    return null == (e = this.getChosenSpaceViewStore()) ? void 0 : e.getSpaceStore()
                }
                getChosenSpaceViewStore() {
                    let {
                        chosenSpaceId: e
                    } = this.state, t = a(728372).AppStoreSidebarSpaceViewStore.state, o = a(728372).AppStoreCurrentUserRootStore.state;
                    return !e && t ? t : e && o ? o.getSpaceViewStores().find(t => t.getSpaceId() === e) : void 0
                }
            }
            let n = new i
        },
        219118: (e, t, a) => {
            a.d(t, {
                C: () => s,
                m: () => d
            }), a(16280), a(898992), a(823215), a(581454);
            var o = a(296540),
                i = a(474848);
            let n = {
                modal: {
                    maxHeight: "70vh"
                },
                loadingShimmer: {
                    padding: 16
                },
                privateMenuItem: {
                    marginInlineStart: 4,
                    marginInlineEnd: 4,
                    borderRadius: 4
                },
                menuItemFooterButton: {
                    color: a(632079).Tj.text.secondary,
                    fill: a(632079).Tj.icon.secondary
                }
            };

            function s(e) {
                let {
                    spaceStore: t,
                    spaceViewStore: s,
                    blocksToMove: r,
                    menuListStore: l,
                    onAccept: c,
                    moveToPagesOnly: u,
                    forceShowPrivatePageOption: p,
                    maxMenuItems: m = 7
                } = e, g = (0, a(533992).v3)(), v = (0, a(109939).tz)(), {
                    isMyTasksFullPage: h,
                    sidebarSpaceStore: f
                } = (0, a(682985).K8)(() => {
                    let e = a(728372).AppStoreSidebarSpaceStore.state,
                        t = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                    return {
                        isMyTasksFullPage: !!(t && (0, a(829435).s)(t.id)),
                        sidebarSpaceStore: e
                    }
                }, []), y = (0, a(682985).K8)(() => (0, a(679321).r)(s).map(e => e.id), [s]), S = (0, a(682985).K8)(() => a(880904).Ay.getDatabaseType(), []), M = (0, a(682985).K8)(() => a(488355).Hc(), []), b = function({
                    environment: e,
                    spaceStore: t,
                    joinedTeamIds: o,
                    parentStore: i,
                    moveToTargets: n,
                    overrideDatabaseType: s
                }) {
                    let r = (0, a(682985).K8)(() => {
                            let e = null == t ? void 0 : t.id;
                            if (e) {
                                var o = e;
                                if (a(577533).c.state && o === a(577533).c.state.spaceId) return a(577533).c.state.typedDatabases;
                                return
                            }
                        }, [null == t ? void 0 : t.id]),
                        l = (0, a(815048).fJ)(a(308825).T.searchActions),
                        [{
                            value: d,
                            status: c
                        }] = (0, a(97668).Yb)(async () => {
                            if (r) return r;
                            if (!t || !i) return;
                            let o = s ? ? a(880904).Ay.getDatabaseType();
                            if (!o || "resolved" !== l.status) return;
                            let d = l.value,
                                c = [],
                                u = ((await d.searchCollectionsWithRecents({
                                    environment: e,
                                    query: "",
                                    limit: 20,
                                    databaseType: [o],
                                    spaceStore: t,
                                    parentStore: t,
                                    collectionViewBlockStore: void 0,
                                    searchSessionId: a(880904).Ay.state.isOpen ? a(880904).Ay.state.flowId : void 0,
                                    peopleBlocksToInclude: "none"
                                })).results || []).map(e => a(356912).m.createChildStore(i, {
                                    table: a(832375).VlP,
                                    id: e
                                }));
                            return c = (0, a(745410).v)({
                                typedDatabases: u,
                                blocksToFilterParents: n
                            }), a(577533).c.setState({
                                typedDatabases: c,
                                spaceId: t.id
                            }), a(880904).Ay.update(e => e.isOpen && "untyped" === e.variant ? { ...e,
                                variant: "typed"
                            } : e), c
                        }, [r, t, i, s, l.status, l.value, e, n], {
                            debounce: a(767776).tu,
                            throttle: a(767776).tu
                        });
                    return r ? {
                        success: !0,
                        typedDatabases: r
                    } : "resolved" === c && d ? {
                        success: !0,
                        typedDatabases: d
                    } : {
                        success: !1,
                        loading: "resolved" !== c
                    }
                }({
                    environment: g,
                    spaceStore: t,
                    parentStore: t,
                    joinedTeamIds: y,
                    moveToTargets: r
                }), x = (0, o.useCallback)(e => ({
                    key: e.id,
                    render: o => (0, i.jsx)(a(909816).d, {
                        spaceStore: t,
                        collectionStore: e,
                        menuListItemProps: o
                    }),
                    action: () => c({
                        type: "collection",
                        id: e.id,
                        spaceId: t.id
                    })
                }), [t, c]), A = (0, a(682985).K8)(() => b.success ? b.typedDatabases.map(e => x(e)) : [], [b, x]);
                (0, o.useEffect)(() => {
                    let e = a(880904).Ay.state;
                    e.isOpen && "typed" === e.variant && (0 !== A.length || b.success || b.loading || a(880904).Ay.setState({ ...e,
                        variant: "untyped"
                    }))
                }, [A.length, b]);
                let j = (0, a(682985).K8)(() => (0, a(775945).VN)({
                        itemsToMove: r,
                        chosenSpaceStore: t,
                        forceShowPrivatePageOption: p,
                        sidebarSpaceStore: f
                    }), [p, t, r, f]),
                    I = (0, a(682985).K8)(() => r.every(e => e.isNavigableBlock()), [r]),
                    T = (0, o.useMemo)(() => a(986939).A.isMobile ? (0, a(907124).oG)({
                        query: "",
                        chosenSpaceStore: t
                    }, g, v, r, c, I, p) : {
                        key: "privateMenuItem",
                        render: e => (0, i.jsx)("div", {
                            style: n.privateMenuItem,
                            children: (0, i.jsx)(a(498057).E, {
                                spaceStore: t,
                                spaceViewStore: s,
                                store: void 0,
                                depth: 0,
                                onAccept: c,
                                itemsToMove: r,
                                moveToChildrenOnly: u,
                                menuListItemProps: e,
                                from: "moveToModalTyped",
                                environment: g
                            })
                        }),
                        action: () => {}
                    }, [I, g, p, v, u, c, t, s, r]),
                    k = h ? "home_tasks" : "home_tile_tasks",
                    w = (0, o.useMemo)(() => ({
                        key: "helpMenuItem",
                        render: () => (0, i.jsx)(a(95582).A, {
                            style: n.menuItemFooterButton,
                            icon: (0, i.jsx)(a(16275).I, {
                                icon: a(80094).questionMarkCircleIcon
                            }),
                            focused: !1,
                            title: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Don’t see your database?",
                                id: "moveToModalTyped.helpMenuItem.title"
                            }),
                            onClick: () => {
                                a(665887).A.setState({
                                    isOpen: !0,
                                    from: k
                                }), (0, a(167552).bS)({
                                    environment: g,
                                    from: k
                                })
                            }
                        }),
                        action: () => {}
                    }), [g, k]),
                    C = (0, o.useMemo)(() => ({
                        key: "createDatabaseItem",
                        render: () => (0, i.jsx)(a(827497).F, {
                            spaceStore: t,
                            spaceViewStore: s,
                            onDatabaseCreated: () => {
                                a(351198).VN({
                                    environment: g,
                                    clearSelection: !0
                                })
                            }
                        }),
                        action: () => {}
                    }), [g, t, s]);
                if (!b.success || 0 === A.length) return (0, i.jsx)("div", {
                    style: n.loadingShimmer,
                    children: (0, i.jsx)(a(394673).A, {
                        paragraphs: [{
                            lineHeight: 18,
                            lineMargin: 4,
                            sectionWidths: [100],
                            repeat: 1,
                            sectionMargin: 0
                        }, {
                            lineHeight: 14,
                            lineMargin: 4,
                            sectionWidths: [100, 40],
                            repeat: 1,
                            sectionMargin: -2
                        }]
                    })
                });
                if (!S) throw Error("Trying to show typed moveTo modal when database type is not available.");
                let B = (0, a(463082).$O)(S),
                    P = a(381453).oE([{
                        key: "suggested",
                        render: e => (0, i.jsx)(a(844565).A, { ...e,
                            title: M ? (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "{typedItemName} databases",
                                id: "moveToModalTyped.suggestedMenuSection.title",
                                values: {
                                    typedItemName: (0, a(252166).A)(B)
                                }
                            }) : (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Where would you like to create your {typedItemName}?",
                                id: "moveToModalTyped.suggestedMenuSection.titleNew",
                                values: {
                                    typedItemName: B
                                }
                            }),
                            right: M ? (0, i.jsx)(d, {
                                typedItemName: B
                            }) : null
                        }),
                        items: A.slice(0, m)
                    }, j && (0, a(722371).O9)(T) && {
                        key: "other",
                        render: e => (0, i.jsx)(a(844565).A, { ...e,
                            title: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Other",
                                id: "moveToModalTyped.otherSection.title"
                            })
                        }),
                        items: [T]
                    }, !M && {
                        key: "create-new-footer",
                        render: e => (0, i.jsx)(a(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [w, C]
                    }]);
                return (0, i.jsx)("div", {
                    style: n.modal,
                    children: (0, i.jsx)(a(558045).A, {
                        initialFocus: 0,
                        type: a(558045).O.Vertical,
                        sections: P || [],
                        store: l
                    })
                })
            }
            let r = {
                    width: 220
                },
                l = {
                    height: 18,
                    width: 18,
                    padding: 0,
                    marginTop: -4,
                    marginBottom: -4,
                    marginInlineEnd: -4
                };

            function d(e) {
                let {
                    typedItemName: t
                } = e, o = (0, a(109939).tz)();
                return a(986939).A.isMobile ? null : (0, i.jsx)(a(51831).m, {
                    placement: "bottom",
                    style: r,
                    textWrap: !0,
                    content: () => (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "{typedItemName} properties will be kept when moving to these locations",
                        id: "moveTypedMenu.tooltip",
                        values: {
                            typedItemName: (0, a(252166).A)(t)
                        }
                    }),
                    children: e => (0, i.jsx)(a(374533).A, {
                        ariaLabel: o.formatMessage({
                            id: "moveToModalTyped.helpIcon.ariaLabel",
                            defaultMessage: "Help icon for moving typed pages."
                        }),
                        icon: a(211052).questionMarkCircleSmallIcon,
                        colorVariant: "secondary",
                        style: l,
                        ...e
                    })
                })
            }
        },
        226512: (e, t, a) => {
            a.d(t, {
                R: () => n
            });
            var o = a(296540),
                i = a(474848);

            function n(e) {
                var t, n;
                let r, l = (0, a(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: p,
                        showBackground: m = !0
                    } = e,
                    g = (t = u, n = m, r = (0, a(781889).o)(), (0, a(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: n ? a(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: a(104509).Ev.lg,
                            width: a(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + r,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: n ? a(632079).Tj.buttonPressedBackground : a(632079).Tj.buttonHoveredBackground
                        }
                    }), [n, t, r])),
                    v = (0, o.useContext)(a(19187).e),
                    h = function(e) {
                        let {
                            onClick: t,
                            onDismiss: a
                        } = e, i = (0, o.useCallback)(e => {
                            null == t || t(e), null == a || a()
                        }, [t, a]);
                        return t || a ? i : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? v
                    });
                return h ? (0, i.jsx)(a(374533).A, {
                    ariaLabel: l.formatMessage(s.dismissModalAriaLabel),
                    icon: a(766970).xMarkFillIcon,
                    onClick: h,
                    style: g.button,
                    hoveredStyle: { ...g.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let s = (0, a(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        288442: (e, t, a) => {
            a.d(t, {
                y: () => c
            });
            var o = () => a(735303);
            let i = {
                    ko: () => a.e(2268).then(a.bind(a, 723608)),
                    es: () => a.e(95264).then(a.bind(a, 499735)),
                    de: () => a.e(35390).then(a.bind(a, 917797)),
                    fr: () => a.e(3272).then(a.bind(a, 32867)),
                    pt: () => a.e(27315).then(a.bind(a, 101699)),
                    zh: () => a.e(69945).then(a.bind(a, 560744)),
                    ja: () => a.e(77757).then(a.bind(a, 59910)),
                    da: () => a.e(9423).then(a.bind(a, 386963)),
                    fi: () => a.e(59337).then(a.bind(a, 23573)),
                    nb: () => a.e(2040).then(a.bind(a, 607288)),
                    nl: () => a.e(51106).then(a.bind(a, 59055)),
                    sv: () => a.e(53631).then(a.bind(a, 767056)),
                    th: () => a.e(17278).then(a.bind(a, 159935)),
                    id: () => a.e(5048).then(a.bind(a, 326497)),
                    vi: () => a.e(42853).then(a.bind(a, 631696)),
                    he: () => a.e(57481).then(a.bind(a, 127879)),
                    ar: () => a.e(29324).then(a.bind(a, 304206))
                },
                n = !1,
                s = !1;
            async function r(e) {
                for (let [a, i] of Object.entries(e.emojiLocaleKeywords)) {
                    var t;
                    o().fB[a] = { ...o().fB[a],
                        keywords: [...i, ...(null == (t = o().fB[a]) ? void 0 : t.keywords) || []]
                    }
                }
                await (0, a(895732).x)(), a(753281).A.update(({
                    emojiByName: t,
                    ...a
                }) => ({ ...a,
                    emojiByName: { ...t,
                        ...e.emojiByName
                    }
                }))
            }
            async function l() {
                s || (await r(await a.e(51872).then(a.bind(a, 348842))), s = !0)
            }
            async function d() {
                if (n) return;
                let [e] = a(849917).locale.split("-");
                e in i && (await r(await i[e]()), n = !0)
            }
            let c = (0, a(517122).A)(async () => {
                await l(), await d()
            })
        },
        303282: (e, t, a) => {
            a.d(t, {
                t: () => o
            }), a(581454);

            function o({
                allItemsToMoveAreNavigable: e,
                forceShowPrivatePageOption: t,
                isAddTo: i,
                isCreateIn: n,
                isTurnIntoPage: s,
                showDataSources: r,
                onAccept: l,
                parentBlockId: d,
                query: c,
                searchResults: u,
                itemsToMove: p
            }) {
                let m = (0, a(109939).tz)(),
                    g = (0, a(533992).v3)(),
                    v = (0, a(682985).K8)(() => (0, a(907124).wc)(), []),
                    h = (0, a(682985).K8)(() => (0, a(907124).NA)(), []),
                    [f] = (0, a(97668).Yb)(async () => v ? await (0, a(936500).pw)({
                        spaceStore: v,
                        currentUserId: g.currentUser.id
                    }) : void 0, [v, g.currentUser.id]),
                    [y] = (0, a(97668).Yb)(async () => !c && v ? await a(561966)._P(v, v.id) : void 0, [c, v]),
                    {
                        blockResults: S,
                        topLevelBlockResults: M,
                        templateResults: b,
                        recentPageResults: x
                    } = (0, a(682985).K8)(() => {
                        if (!v || !h) return {
                            blockResults: [],
                            topLevelBlockResults: [],
                            templateResults: [],
                            recentPageResults: []
                        };
                        let e = u.results.map(e => ({
                            blockId: e.id,
                            collectionId: e.isSurrogateCollection ? e.collectionId : void 0
                        }));
                        return (0, a(907124)._B)({
                            chosenSpaceStore: v,
                            chosenSpaceViewStore: h,
                            environment: g,
                            isCreateIn: n,
                            query: c,
                            recentPageIds: y.value,
                            searchResults: e,
                            itemsToMove: p
                        })
                    }, [v, h, g, n, c, y.value, u.results, p], {
                        equalityFn: a(381453).n4
                    }),
                    A = (0, a(682985).K8)(() => a(488355).n6(), []),
                    [j] = (0, a(97668).Yb)(async () => {
                        if (A && v && f.value) return await (0, a(907124).N$)({
                            chosenSpaceStore: v,
                            savedQuickAddParent: f.value,
                            query: c,
                            blockResults: S,
                            recentPageResults: x
                        }, g, n, l, p, i, e)
                    }, [A, v, f.value, c, S, x, g, n, l, p, i, e]);
                return (0, a(682985).K8)(() => A ? j.value ? ? [] : v && f.value ? n ? (0, a(907124).wU)({
                    allItemsToMoveAreNavigable: e,
                    blockResults: S,
                    chosenSpaceStore: v,
                    environment: g,
                    isAddTo: i,
                    isCreateIn: n,
                    showDataSources: r,
                    isTurnIntoPage: s,
                    onAccept: l,
                    parentBlockId: d,
                    query: c,
                    recentPageResults: x,
                    itemsToMove: p,
                    templateResults: b,
                    topLevelBlockResults: M
                }) : (0, a(907124).OC)({
                    allItemsToMoveAreNavigable: e,
                    blockResults: S,
                    chosenSpaceStore: v,
                    environment: g,
                    forceShowPrivatePageOption: t,
                    intl: m,
                    isAddTo: i,
                    isCreateIn: n,
                    showDataSources: r,
                    onAccept: l,
                    query: c,
                    recentPageResults: x,
                    savedQuickAddParent: f.value,
                    itemsToMove: p
                }) : [], [e, S, v, g, t, m, i, n, s, l, d, c, x, f.value, A, p, b, M, j.value, r])
            }
        },
        374241: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftSmallIcon: () => i,
                iconDefinition: () => o
            }), a(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                i = (0, a(104509).wt)("arrowStraightLeftSmall", o, "small")
        },
        432376: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var o = () => a(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let n = i
        },
        498057: (e, t, a) => {
            a.d(t, {
                E: () => m
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520);
            var o = a(296540),
                i = a(474848);

            function n({
                depth: e,
                isSidebar: t
            }) {
                let o = (0, a(960253).I)(() => ({
                    noChildrenLabelItem: {
                        paddingInlineStart: (e + 1) * 14 + 4,
                        fontSize: 14,
                        paddingBottom: 6,
                        color: a(632079).Tj.text.tertiary
                    }
                }), [e]);
                return (0, i.jsxs)(a(4458).fI, {
                    children: [(0, i.jsx)(a(890389).h, {
                        isSidebar: t
                    }), (0, i.jsx)("div", {
                        style: o.noChildrenLabelItem,
                        children: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "No pages inside",
                            id: "moveToMenu.outliner.noPagesInside.placeholder"
                        })
                    })]
                })
            }
            let s = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: 22,
                    height: 18,
                    marginInlineEnd: 4,
                    position: "relative"
                },
                r = {
                    marginInlineStart: 3
                },
                l = {
                    maxWidth: "80%"
                },
                d = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    maxWidth: "80%",
                    gap: 4
                },
                c = {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginInlineStart: 7
                };

            function u(e) {
                let {
                    store: t,
                    isAlias: o,
                    environment: n
                } = e, l = (0, a(682985).K8)(() => t ? t instanceof a(681735).h ? {
                    variant: "team"
                } : {
                    variant: "record",
                    icon: t.getIcon(),
                    iconRecordCategory: (0, a(569553).Te)(t),
                    isEmptyPage: t instanceof a(970831).B && t.isEmptyPage()
                } : {
                    variant: "user",
                    userStore: (0, a(427846)._)(n)
                }, [t, n]);
                return "team" === l.variant && t instanceof a(681735).h ? (0, i.jsx)("div", {
                    style: s,
                    children: (0, i.jsx)(a(729746).x, {
                        disabled: !0,
                        store: t,
                        size: 18
                    })
                }) : "record" === l.variant && t ? (0, i.jsxs)("div", {
                    style: s,
                    children: [(0, i.jsx)(a(569553).B6, {
                        icon: l.icon,
                        iconRecordCategory: l.iconRecordCategory,
                        isEmptyPage: l.isEmptyPage,
                        size: 18,
                        disabled: !0
                    }), o ? (0, i.jsx)(a(321825).H, {
                        size: "xs"
                    }) : void 0]
                }) : (0, i.jsx)(a(321753).A, {
                    size: 16,
                    userStore: l.userStore,
                    style: r
                })
            }

            function p(e) {
                let {
                    store: t
                } = e, o = (0, a(682985).K8)(() => t ? t.table === a(832375).yKj ? {
                    variant: "team",
                    isPrivateTeam: "private" === t.getTeamAccessLevel()
                } : {
                    variant: "record"
                } : {
                    variant: "private"
                }, [t]);
                return "private" !== o.variant && t ? "team" === o.variant && o.isPrivateTeam ? (0, i.jsxs)("div", {
                    style: d,
                    children: [(0, i.jsx)(a(627918).A, {
                        store: t
                    }), (0, i.jsx)(a(16275).I, {
                        icon: a(697198).lockSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    })]
                }) : (0, i.jsx)("div", {
                    style: l,
                    children: (0, i.jsx)(a(627918).A, {
                        store: t
                    })
                }) : (0, i.jsxs)("div", {
                    style: c,
                    children: [(0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Private pages",
                        id: "outliner.addToPrivatePages"
                    }), (0, i.jsx)(a(16275).I, {
                        icon: a(697198).lockSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    })]
                })
            }

            function m(e) {
                let {
                    store: t,
                    spaceStore: s,
                    spaceViewStore: r,
                    depth: l,
                    isAlias: d,
                    menuListItemProps: c,
                    from: m,
                    itemsToMove: g,
                    environment: v
                } = e, [h, f] = o.useState(!1), y = (0, a(960253).I)(() => ({
                    outlinerItem: {
                        display: "flex",
                        flexDirection: "row",
                        fontSize: 14,
                        height: 28,
                        paddingInlineStart: "moveToModalTyped" === m ? (l + 1) * 14 - 4 : (l + 1) * 14,
                        color: a(632079).Tj.text.primary,
                        alignItems: "center"
                    },
                    button: { ..."moveToModalTyped" === m ? {
                            borderRadius: 4
                        } : {}
                    }
                }), [l, m]);

                function S() {
                    let e = a(880904).Ay.state,
                        o = e.isOpen ? e.flowId : void 0;
                    f(!h), a(278947).aM(v, {
                        flowId: o,
                        is_toggled: !h,
                        destination_type: t ? t.table : "private_pages"
                    })
                }
                let M = (0, i.jsx)(u, {
                        store: t,
                        isAlias: d,
                        environment: v
                    }),
                    b = (0, i.jsx)(p, {
                        store: t
                    }),
                    x = (0, a(682985).K8)(() => {
                        let e = new Set([a(955630).xd.page, a(955630).xd.collectionViewPage, a(955630).xd.collectionView, a(955630).xd.alias]),
                            o = new Set([a(955630).xd.factory]),
                            i = [];
                        return t ? t instanceof a(681735).h ? i = (0, a(709633).O)({
                            teamStore: t,
                            includeArchivedPages: !0
                        }) : t instanceof a(356912).m ? i = [] : t.isCollectionView() ? i = t.hasSingleOwnedCollection() ? [] : t.getCollectionStores() ? ? [] : t instanceof a(970831).B && (i = (0, a(531353).yD)({
                            rootStore: t,
                            shouldSkipItemTypes: o,
                            shouldShowItemTypes: e
                        })) : i = (0, a(275619).I)({
                            environment: v,
                            spaceViewStore: r
                        }) ? ? [], i = i.filter(e => (0, a(488355).zP)(e, g, v))
                    }, [t, r, v, g]),
                    A = (0, a(682985).K8)(() => !(t instanceof a(356912).m) && (!(t instanceof a(970831).B && t.isCollectionView()) || x.length > 0), [t, x]),
                    j = 0 !== x.length ? (0, i.jsx)(a(565608).J, {
                        spaceStore: s,
                        spaceViewStore: r,
                        itemStores: x,
                        depth: l + 1,
                        onAccept: e.onAccept,
                        itemsToMove: g,
                        environment: v
                    }) : (0, i.jsx)(n, {
                        depth: l,
                        isSidebar: !0
                    });
                return (0, i.jsxs)("div", { ...c,
                    children: [(0, i.jsx)(a(64960).Ay, {
                        onClick: function() {
                            if (e.moveToChildrenOnly && A) return void S();
                            if (t)
                                if (t instanceof a(970831).B) {
                                    let o = !(0, a(488355).vN)(e.itemsToMove) && t.isCollectionView() ? t.getCollectionPointers() : void 0;
                                    o && o.length > 0 ? e.onAccept({
                                        type: "collection",
                                        id: o[0].id,
                                        spaceId: s.id
                                    }) : e.onAccept({
                                        type: "page",
                                        id: t.id,
                                        spaceId: s.id
                                    })
                                } else t instanceof a(356912).m ? e.onAccept({
                                    type: "collection",
                                    id: t.id,
                                    spaceId: s.id
                                }) : e.onAccept({
                                    type: "team",
                                    id: t.id,
                                    spaceId: s.id
                                });
                            else e.onAccept({
                                type: "space-private-pages",
                                spaceId: s.id
                            })
                        },
                        style: y.button,
                        children: (0, i.jsxs)("div", {
                            style: y.outlinerItem,
                            children: [A ? (0, i.jsx)(a(890389).f, {
                                isSidebar: !0,
                                fill: !0,
                                icon: "chevron",
                                open: h,
                                color: a(632079).Tj.icon.secondary,
                                onClick: S
                            }) : (0, i.jsx)(a(890389).h, {
                                isSidebar: !0
                            }), M, b]
                        })
                    }), h && l < 100 ? j : void 0]
                })
            }
        },
        511101: (e, t, a) => {
            a.d(t, {
                m: () => o
            });
            let o = "notion-modal-underlay"
        },
        517122: (e, t, a) => {
            a.d(t, {
                A: () => o
            });

            function o(e) {
                let t, a, o;
                return async (...i) => t ? (o = i, a) ? a : a = t.then(() => (a = void 0, t = e(...o))) : t = e(...i)
            }
        },
        556809: (e, t, a) => {
            a.d(t, {
                a: () => s
            });
            var o = a(296540);

            function i(e) {
                a(561599).A.state.openModals.has(e) && (a(561599).A.state.openModals.delete(e), a(561599).A.emit())
            }
            var n = a(474848);

            function s(e) {
                let {
                    open: t,
                    onOpen: s,
                    transitionAppearance: r = "modal"
                } = e, l = (0, o.useRef)();
                void 0 === l.current && (l.current = a(92513).JW());
                let c = l.current,
                    u = (0, a(682985).uB)(e.store, a(432376).A),
                    p = (0, a(682985).K8)(() => u.state.open, [u]),
                    m = (0, o.useRef)(!1),
                    g = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === r,
                        isShowingTabBar: (0, a(682985).O$)(a(584257).b)
                    }),
                    v = (0, o.useCallback)(() => {
                        if (!m.current && t) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), a(561599).A.state.openModals.has(c) || (a(561599).A.state.openModals.add(c), a(561599).A.emit()), s && s();
                        else m.current && !t && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), i(c));
                        m.current = t
                    }, [c, u, s, t]);
                return (0, o.useEffect)(() => {
                    v()
                }, [v]), (0, a(637030).X)(() => {
                    i(c)
                }), (0, n.jsx)(a(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, n.jsx)(a(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, n.jsx)(a(654979).A, {
                            tag: d,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: g ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var a, o, i;
                                return a = t, o = u, i = e.onClosed, void(a ? o.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (o.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == i || i()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: g,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: u,
                            isWash: e.isWash,
                            transitionAppearance: r
                        })
                    })
                })
            }

            function r({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: o,
                store: i
            }) {
                let s = (0, a(682985).uB)(i, a(432376).A),
                    l = (0, a(682985).K8)(() => s.state.openAnimationCompleted, [s]);
                return t || l || o ? (0, n.jsx)(n.Fragment, {
                    children: e
                }) : null
            }
            let l = o.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: o,
                    isWash: i,
                    ariaLabel: s,
                    ariaLabelledBy: l,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: m,
                    store: g
                }, v) {
                    let h = (0, a(682985).uB)(g, a(432376).A),
                        f = (0, a(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: a(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: o ? a(632079).Tj.popoverWaxPaperBackground : i ? a(632079).Tj.background.secondary : a(632079).Tj.background.elevated,
                                backdropFilter: o ? "blur(40px)" : "none",
                                WebkitBackdropFilter: o ? "blur(40px)" : "none"
                            }
                        }), [c, o, i]);
                    return (0, n.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": s,
                        "aria-labelledby": l,
                        "aria-describedby": d,
                        style: f.dialog,
                        ref: v,
                        children: [e ? (0, n.jsx)(a(226512).R, {
                            onClick: t
                        }) : void 0, (0, n.jsx)(r, {
                            children: u,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: m,
                            store: h
                        })]
                    })
                }),
                d = o.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: o,
                    showCloseIcon: i,
                    onDismiss: s,
                    isWaxPaper: r,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: p,
                    innerStyle: m,
                    children: g,
                    preventHideChildrenWhileOpening: v,
                    style: h,
                    className: f,
                    backgroundStyle: y,
                    transitionAppearance: S,
                    store: M
                }, b) {
                    let x = (0, a(336995).A)(t),
                        A = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, a(722371).HB)(e)
                            }
                        }(S),
                        {
                            mobileTopPadding: j,
                            mobileBottomPadding: I
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, a(533992).v3)();
                            return {
                                mobileTopPadding: (0, a(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, a(571354).n)()
                            }
                        }();
                    return (0, n.jsxs)("div", {
                        style: {
                            paddingTop: j,
                            paddingBottom: I,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...h
                        },
                        ...x,
                        className: f,
                        ref: b,
                        children: [(0, n.jsx)(a(781036).B, {
                            backgroundStyle: y,
                            onDismiss: s
                        }), (0, n.jsx)(a(654979).A, {
                            tag: l,
                            skip: o,
                            visible: e,
                            ...A,
                            forceCompositeLayer: !0,
                            showCloseIcon: i,
                            onDismiss: s,
                            isWaxPaper: r,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: p,
                            style: m,
                            children: g,
                            disableAnimation: o,
                            preventHideChildrenWhileOpening: v,
                            store: M
                        })]
                    })
                })
        },
        561599: (e, t, a) => {
            a.d(t, {
                A: () => s
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var o = () => a(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let n = new i,
                s = n;
            (0, a(202146).exposeDebugValue)("GlobalModalStore", n)
        },
        565608: (e, t, a) => {
            a.d(t, {
                J: () => s
            }), a(898992), a(581454), a(737550);
            var o = a(296540),
                i = a(474848);
            let n = {
                sectionHeader: {
                    color: a(632079).Tj.text.secondary,
                    fontSize: 12,
                    fontWeight: a(699422).Wy.medium,
                    paddingTop: 12,
                    paddingInlineEnd: 14,
                    paddingBottom: 4,
                    paddingInlineStart: 14
                }
            };

            function s(e) {
                let {
                    spaceStore: t,
                    spaceViewStore: s,
                    itemStores: r,
                    depth: l,
                    addedItems: d,
                    moveToPagesOnly: c,
                    itemsToMove: u,
                    onAccept: p,
                    environment: m
                } = e, g = (0, a(682985).K8)(() => r ? a(381453).oE(r.map(e => {
                    if ((0, a(488355).zP)(e, u, m)) {
                        let t = e instanceof a(970831).B && e.getType() === a(955630).xd.alias,
                            o = t ? e.getAliasTargetStore() : void 0,
                            i = o instanceof a(970831).B ? o : e,
                            n = e instanceof a(970831).B && e.isCollectionView() && e.hasMultipleOwnedCollections() && u.some(e => e instanceof a(970831).B);
                        return {
                            key: e.id,
                            targetStore: i,
                            isAlias: t,
                            moveToChildrenOnly: c && !(i instanceof a(970831).B) || n
                        }
                    }
                })) : [], [r, c, u, m]), v = (0, o.useMemo)(() => {
                    let e = g.map(e => (0, i.jsx)(a(498057).E, {
                        spaceStore: t,
                        spaceViewStore: s,
                        store: e.targetStore,
                        depth: l,
                        onAccept: p,
                        itemsToMove: u,
                        isAlias: e.isAlias,
                        moveToChildrenOnly: e.moveToChildrenOnly,
                        environment: m
                    }, e.key));
                    return d ? [...d, ...e] : e
                }, [g, d, t, s, l, p, u, m]);
                return (0, i.jsxs)(a(519451).A, {
                    debugName: "MoveToOutliner",
                    capture: !0,
                    allowEsc: !0,
                    allowLeft: !0,
                    children: [e.title ? (0, i.jsx)("div", {
                        style: n.sectionHeader,
                        children: (0, i.jsx)(a(324489).V, {
                            isSmall: !0,
                            children: e.title
                        })
                    }) : void 0, (0, i.jsx)("div", {
                        children: v
                    })]
                })
            }
        },
        577533: (e, t, a) => {
            a.d(t, {
                D: () => i,
                c: () => o
            });
            let o = a(546605).Store.createValue(void 0, {
                name: "CachedTypedDatabasesStore"
            });

            function i(e) {
                let t = o.state;
                t && o.setState({ ...t,
                    typedDatabases: [...t.typedDatabases, e]
                })
            }
        },
        634150: (e, t, a) => {
            a.d(t, {
                Xy: () => p,
                n5: () => c,
                v8: () => n
            }), a(898992), a(823215), a(354520), a(581454);
            var o = a(296540),
                i = a(474848);

            function n(e) {
                let {
                    autocompleteQuery: t,
                    blocksToMove: o,
                    forceShowPrivatePageOption: n = !1,
                    isAddTo: r,
                    isCreateIn: l,
                    isTurnIntoPage: d,
                    onAccept: c,
                    parentBlockId: u
                } = e, p = (0, a(682985).uB)(void 0, a(419110).$), m = (0, a(682985).K8)(() => (0, a(907124).wc)(), []), g = (0, a(682985).K8)(() => (0, a(907124).L2)(a(880904).Ay.state), []), v = (0, a(682985).K8)(() => (0, a(488355).iH)(o), [o]), h = (0, a(183464).W)({
                    type: a(821603).Vz.BlocksInSpace,
                    query: t,
                    limit: g,
                    source: "move_to_menu",
                    filters: {
                        requireEditPermissions: !1,
                        excludeTemplates: !1
                    },
                    options: {
                        disable: !1,
                        overrideSpaceStore: m
                    },
                    excludedBlockIds: [v].filter(e => void 0 !== e),
                    peopleBlocksToInclude: "none"
                }), f = (0, a(682985).K8)(() => o.length > 0 && o.every(e => e.isNavigableBlock()), [o]), y = (0, a(303282).t)({
                    allItemsToMoveAreNavigable: f,
                    forceShowPrivatePageOption: n,
                    isAddTo: r,
                    isCreateIn: l,
                    isTurnIntoPage: d,
                    onAccept: c,
                    parentBlockId: u,
                    query: t,
                    searchResults: h,
                    itemsToMove: o
                });
                return (0, i.jsx)(s, { ...e,
                    isLoading: h.isResultsLoading,
                    allItemsToMoveAreNavigable: f,
                    autocompleteComponent: (0, i.jsx)(a(897104).c, {
                        sections: y,
                        error: void 0,
                        menuListStore: p,
                        initialFocus: t ? 0 : void 0,
                        loading: h.isResultsLoading,
                        canLoadMore: h.hasMoreResults,
                        onLoadMore: () => {
                            var e;
                            return null == (e = h.fetchAdditionalServerResultsOnChange) ? void 0 : e.call(h, g)
                        }
                    })
                })
            }

            function s(e) {
                let t, {
                        blocksToMove: n,
                        isCreateIn: s,
                        onAccept: r,
                        isAddTo: d,
                        isTurnIntoPage: u,
                        autocompleteQuery: m,
                        onAutocompleteQueryChange: g,
                        onMouseEnter: v,
                        onCancel: h,
                        desktopWidth: f,
                        forceShowPrivatePageOption: y = !1,
                        isLoading: S,
                        allItemsToMoveAreNavigable: M,
                        autocompleteComponent: b
                    } = e,
                    x = (0, a(682985).uB)(void 0, a(419110).$),
                    A = (0, a(682985).K8)(() => (0, a(907124).R3)(), []),
                    j = (0, a(682985).K8)(() => a(880904).Ay.state.isOpen, []),
                    I = (0, a(682985).K8)(() => a(488355).n6(), []);
                if ((0, o.useEffect)(() => {
                        a(199012).x.reset()
                    }, [j]), !d && !s && !j) return null;
                t = a(986939).A.isMobile ? {
                    onMouseEnter: v,
                    menuType: a(649476).gu.Modal,
                    title: u ? (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Add to another page",
                        id: "moveBlockMenu.mobileNewPageInj.label"
                    }) : d ? (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Add new page in",
                        id: "moveBlockMenu.mobileAddTo.label"
                    }) : (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Move to",
                        id: "moveBlockMenu.mobileMoveTo.label"
                    }),
                    right: (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Done",
                        id: "moveBlockMenu.rightDoneButton.label"
                    }),
                    onClickRight: h,
                    height: "100%"
                } : {
                    onMouseEnter: v,
                    menuType: a(649476).gu.Popup,
                    width: f
                };
                let T = !m && !a(986939).A.isMobile || I && !m;
                return (0, i.jsxs)(a(519451).A, {
                    debugName: "MoveToOrCreateMenu",
                    capture: !0,
                    allowMenuList: !0,
                    allowEsc: !0,
                    allowLeft: !0,
                    allowTabUntab: !1,
                    allowUndo: !1,
                    children: [(0, i.jsx)(a(369064).N, {
                        debugName: "MoveToOrCreateMenu",
                        capture: !0,
                        onEsc: h
                    }), (0, i.jsxs)(a(747369).A, { ...t,
                        onClick: e => {
                            e.stopPropagation()
                        },
                        footer: (0, i.jsx)(c, {
                            isCreateIn: s,
                            isAddTo: d,
                            allItemsToMoveAreNavigable: M
                        }),
                        children: [A ? (0, i.jsx)(p, {
                            autocompleteQuery: m,
                            onAutocompleteQueryChange: g,
                            isAddTo: d,
                            isTurnIntoPage: u,
                            menuListStore: x,
                            isLoading: S
                        }) : void 0, T ? (0, i.jsx)(l, {
                            onAccept: r,
                            blocksToMove: n,
                            menuListStore: x,
                            allItemsToMoveAreNavigable: M,
                            forceShowPrivatePageOption: y
                        }) : b]
                    })]
                })
            }

            function r() {
                var e, t;
                return (null == (e = (0, a(907124).wc)()) ? void 0 : e.id) !== (null == (t = (0, a(328765).S)()) ? void 0 : t.id)
            }

            function l({
                onAccept: e,
                blocksToMove: t,
                menuListStore: o,
                allItemsToMoveAreNavigable: n,
                forceShowPrivatePageOption: s
            }) {
                let r = (0, a(533992).v3)(),
                    d = (0, a(682985).K8)(() => (0, a(907124).wc)(), []),
                    c = (0, a(682985).K8)(() => (0, a(907124).NA)(), []),
                    u = (0, a(682985).K8)(() => a(488355).n6(), []),
                    p = (0, a(682985).K8)(() => (0, a(916804).I)(d), [d]);
                if (!c || !d) return null;
                let m = !n || p;
                return u ? (0, i.jsx)(a(219118).C, {
                    spaceStore: d,
                    spaceViewStore: c,
                    onAccept: t => (0, a(907124).nG)(t, e, r),
                    blocksToMove: t,
                    menuListStore: o,
                    moveToPagesOnly: m,
                    forceShowPrivatePageOption: s,
                    maxMenuItems: 5
                }) : (0, i.jsx)(a(775945).Cr, {
                    spaceStore: d,
                    spaceViewStore: c,
                    onAccept: e,
                    itemsToMove: t,
                    moveToPagesOnly: m,
                    forceShowPrivatePageOption: s
                })
            }
            let d = {
                style0: {
                    fontWeight: a(699422).Wy.regular,
                    fontSize: a(986939).A.isMobile ? 16 : 12,
                    flexShrink: 1
                },
                style1: {
                    marginInlineEnd: a(986939).A.isMobile ? 6 : 4
                }
            };

            function c({
                isCreateIn: e,
                isAddTo: t,
                allItemsToMoveAreNavigable: o
            }) {
                let n = (0, a(109939).tz)(),
                    s = (0, a(533992).v3)(),
                    {
                        currentUserRootStore: r,
                        sidebarSpaceStore: l
                    } = (0, a(682985).K8)(() => ({
                        currentUserRootStore: a(728372).AppStoreCurrentUserRootStore.state,
                        sidebarSpaceStore: a(728372).AppStoreSidebarSpaceStore.state
                    }), []),
                    {
                        chosenSpaceStore: u,
                        chosenSpaceIcon: p,
                        chosenSpaceName: m
                    } = (0, a(682985).K8)(() => {
                        let e = (0, a(907124).wc)();
                        return {
                            chosenSpaceStore: e,
                            chosenSpaceIcon: null == e ? void 0 : e.getIcon(),
                            chosenSpaceName: e ? (0, a(742197).G)(s, e) : void 0
                        }
                    }, [s]),
                    g = (0, a(682985).K8)(() => o && !(null != l && l.getDisableMoveToSpace()) && !e && !t, [o, l, e, t]),
                    v = (0, a(682985).K8)(() => null == r ? void 0 : r.getSpaceViewStores(), [r]),
                    h = (0, a(682985).K8)(() => a(381453).hS(a(381453).oE(null == v ? void 0 : v.map(e => {
                        let t = e.getSpaceStore();
                        return !(0, a(916804).I)(t) && t
                    })), e => e.id), [v]);
                if (!r || !u || !l || !g) return null;
                let f = {
                    menuTitle: n.formatMessage({
                        defaultMessage: "Workspaces",
                        id: "moveBlockMenu.spaceSwitcher.menuTitle"
                    }),
                    items: h,
                    selectedItem: u,
                    onSelect: e => {
                        a(199012).x.setState({
                            chosenSpaceId: e.id
                        })
                    },
                    getKey: e => e.id,
                    renderItem: e => (0, i.jsx)(a(95582).A, { ...e,
                        isChecked: e.value.id === u.id,
                        title: (0, a(742197).G)(s, e.value),
                        icon: (0, i.jsx)(a(569553).B6, {
                            icon: e.value.getIcon(),
                            isEmptyPage: !1,
                            size: 20,
                            disabled: !0,
                            title: (0, a(742197).G)(s, e.value)
                        })
                    }),
                    children: e => (0, i.jsxs)(a(988022).p, {
                        size: a(986939).A.isMobile ? "xl" : "sm",
                        style: d.style0,
                        ...e,
                        children: [(0, i.jsx)(a(569553).B6, {
                            disabled: !0,
                            icon: p,
                            iconRecordCategory: "workspace",
                            isEmptyPage: !1,
                            size: a(986939).A.isMobile ? 22 : 16,
                            title: m,
                            style: d.style1
                        }), (0, i.jsx)(a(503473).j, {
                            children: m
                        }), (0, i.jsx)(a(16275).I, {
                            icon: a(87963).arrowChevronSingleDownIcon,
                            style: {
                                width: a(986939).A.isMobile ? 18 : 10,
                                marginInlineStart: 4,
                                fill: a(632079).Tj.icon.tertiary
                            }
                        })]
                    }),
                    width: 150
                };
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(a(346268).c, {
                        size: 1
                    }), (0, i.jsx)(a(4458).VP, {
                        alignItems: "flex-end",
                        padding: 4,
                        children: (0, i.jsx)(a(691509).A, { ...f
                        }, "space-switcher")
                    })]
                })
            }
            let u = {
                moveToAnotherSpaceMessage: {
                    background: a(632079).Tj.palette.gray[30],
                    marginTop: a(986939).A.isMobile ? 12 : 8,
                    marginInlineStart: a(986939).A.isMobile ? 16 : 12,
                    marginInlineEnd: a(986939).A.isMobile ? 16 : 12,
                    padding: a(986939).A.isMobile ? 12 : 8,
                    borderRadius: 6
                },
                moveToAnotherSpaceIcon: {
                    fill: a(632079).Tj.palette.orange[400],
                    marginInlineEnd: 4,
                    alignSelf: "center",
                    display: "inline-block",
                    verticalAlign: "text-bottom"
                },
                moveToAnotherSpaceLink: {
                    color: a(632079).Tj.palette.gray[500],
                    fontWeight: a(699422).Wy.semibold,
                    marginTop: 4
                },
                style0: {
                    marginInlineEnd: 2
                },
                style1: {
                    marginBottom: -2
                }
            };

            function p({
                isLoading: e,
                autocompleteQuery: t,
                onAutocompleteQueryChange: o,
                isDataSource: n,
                isAddTo: s,
                isTurnIntoPage: l,
                menuListStore: d
            }) {
                let c = (0, a(109939).tz)(),
                    m = (0, a(682985).K8)(() => a(488355).n6() && a(880904).Ay.state.isOpen && "typed" === a(880904).Ay.state.variant && !a(577533).c.state, []),
                    g = (0, a(682985).K8)(() => (function({
                        intl: e,
                        isDataSource: t,
                        isAddTo: o,
                        isTurnIntoPage: i
                    }) {
                        if (t) return e.formatMessage({
                            defaultMessage: "Move data source to…",
                            id: "moveToMenuRenderer.moveDataSourceTo.label"
                        });
                        if (r()) return e.formatMessage({
                            defaultMessage: "Duplicate page…",
                            id: "moveToMenuRenderer.duplicateToSpace.label"
                        });
                        if (a(488355).n6()) {
                            let t = a(880904).Ay.getDatabaseType();
                            if (a(488355).Hc()) {
                                let o = (0, a(463082).$O)(t);
                                return e.formatMessage({
                                    defaultMessage: "Move {typedItemName} to…",
                                    id: "moveToMenuRenderer.moveTo.typedLabel"
                                }, {
                                    typedItemName: o
                                })
                            } {
                                let o = (0, a(463082).$O)(t);
                                return e.formatMessage({
                                    defaultMessage: "Search for a {typedItemName} database…",
                                    id: "moveToMenuRenderer.createIn.typedLabel"
                                }, {
                                    typedItemName: o
                                })
                            }
                        }
                        return i ? e.formatMessage({
                            defaultMessage: "Search page to add in…",
                            id: "moveToMenuRenderer.addNewPageIn.label"
                        }) : o ? e.formatMessage({
                            defaultMessage: "Search page to add to…",
                            id: "moveToMenuRenderer.addTo.label"
                        }) : e.formatMessage({
                            defaultMessage: "Move page to…",
                            id: "moveToMenuRenderer.moveTo.teamLabel"
                        })
                    })({
                        intl: c,
                        isDataSource: n,
                        isAddTo: s,
                        isTurnIntoPage: l
                    }), [c, n, s, l]),
                    v = (0, a(682985).K8)(() => r(), []),
                    h = (0, a(934877).A)({
                        visibility: e,
                        delayShow: 400
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a(844565).A, {
                        isInput: !a(986939).A.isMobile,
                        children: (0, i.jsx)(a(310324).Ay, {
                            onCancel: () => {
                                a(880904).Ay.state.isOpen && a(880904).Ay.setState({ ...a(880904).Ay.state,
                                    isOpen: !1
                                })
                            },
                            preventCaptureArrowShortcuts: !t,
                            disabled: m,
                            focus: !a(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            value: t,
                            onChange: e => {
                                o(e.target.value), d.setState({ ...d.state,
                                    focus: {
                                        section: 0,
                                        indexLocal: 0,
                                        indexGlobal: 0,
                                        footerFocused: !1
                                    }
                                })
                            },
                            placeholder: g,
                            inputLeft: (0, i.jsx)(a(310324).Zf, {
                                icon: a(921048).magnifyingGlassSmallIcon
                            }),
                            inputRight: h && (0, i.jsx)(a(517334).k, {
                                style: u.style0
                            }),
                            style: u.style1
                        })
                    }), v ? (0, i.jsxs)(a(324489).V, {
                        isMultiline: !0,
                        isSecondaryColor: !1,
                        style: u.moveToAnotherSpaceMessage,
                        children: [(0, i.jsx)(a(16275).I, {
                            icon: a(789777).exclamationMarkTriangleFillIcon,
                            size: "xs",
                            style: u.moveToAnotherSpaceIcon
                        }), (0, i.jsx)("span", {
                            children: (0, i.jsx)(a(109939).sA, {
                                id: "moveBlockMenu.duplicateToSpace.message",
                                defaultMessage: "You can only duplicate pages into another workspace — not move them."
                            })
                        }), (0, i.jsx)(a(68774).N, {
                            href: (0, a(442564).x)("guides.duplicateToSpace"),
                            style: u.moveToAnotherSpaceLink,
                            children: (0, i.jsx)(a(109939).sA, {
                                id: "moveBlockMenu.duplicateToSpace.learnMoreLink",
                                defaultMessage: "Learn more"
                            })
                        })]
                    }) : void 0]
                })
            }
        },
        701043: (e, t, a) => {
            a.d(t, {
                D: () => o
            });

            function o(e) {
                let t = (0, a(330870).a)();
                if (t) {
                    if (e && e.table === a(832375).evP) return {
                        pageStore: (0, a(637306).N)(e, 0) || t,
                        createInValue: {
                            type: "block",
                            id: e.id
                        }
                    };
                    if (e && (0, a(861823).W)(e)) {
                        let t = (0, a(637306).N)(e, 0);
                        if (t) return {
                            pageStore: t,
                            createInValue: {
                                type: "page",
                                id: t.id
                            }
                        }
                    }
                    return {
                        pageStore: t,
                        createInValue: {
                            type: "page",
                            id: t.id
                        }
                    }
                }
            }
        },
        775945: (e, t, a) => {
            a.d(t, {
                Cr: () => r,
                Fx: () => l,
                VN: () => d
            }), a(898992), a(823215), a(354520), a(581454), a(737550);
            var o = a(296540),
                i = a(474848);
            let n = {
                    height: 374,
                    maxHeight: "70vh",
                    paddingBottom: 12
                },
                s = {
                    width: "100%"
                };

            function r(e) {
                let {
                    spaceStore: t,
                    spaceViewStore: r,
                    itemsToMove: c,
                    moveToPagesOnly: u,
                    forceShowPrivatePageOption: p,
                    onAccept: m
                } = e, g = (0, a(109939).tz)(), v = (0, a(533992).v3)(), {
                    teams: h
                } = (0, a(413630).LN)({
                    spaceStore: t,
                    shouldCreateTeamStores: !0
                }), f = (0, a(682985).K8)(() => h.filter(e => e.canAddOrRemoveTopLevelPages()).slice(0, 7), [h]), y = (0, a(682985).K8)(() => l({
                    spaceStore: t,
                    itemsToMove: c
                }).filter(e => (0, a(488355).zP)(e, c, v)), [t, c, v]), S = (0, a(682985).K8)(() => (0, a(112127).f)({
                    environment: v,
                    spaceStore: t
                }).filter(e => (0, a(488355).zP)(e, c, v)), [v, t, c]), M = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), b = (0, a(682985).K8)(() => d({
                    itemsToMove: c,
                    chosenSpaceStore: t,
                    forceShowPrivatePageOption: p,
                    sidebarSpaceStore: M
                }), [p, t, c, M]), x = (0, o.useMemo)(() => {
                    if (b) return (0, i.jsx)(a(498057).E, {
                        spaceStore: t,
                        spaceViewStore: r,
                        store: void 0,
                        depth: 0,
                        onAccept: m,
                        itemsToMove: c,
                        moveToChildrenOnly: u,
                        environment: v
                    }, "MoveToModal private item")
                }, [m, c, t, r, u, v, b]);
                return t && r ? (0, i.jsx)("div", {
                    style: n,
                    children: (0, i.jsx)("div", {
                        style: s,
                        children: (0, i.jsxs)(a(4458).VP, {
                            height: "100%",
                            children: [(0, i.jsx)(a(565608).J, {
                                spaceStore: t,
                                spaceViewStore: r,
                                itemStores: y,
                                addedItems: [x],
                                moveToPagesOnly: u,
                                depth: 0,
                                title: g.formatMessage({
                                    defaultMessage: "Suggested",
                                    id: "moveToModal.suggestedSection.title"
                                }),
                                onAccept: e.onAccept,
                                itemsToMove: e.itemsToMove,
                                environment: v
                            }), f && f.length > 0 ? (0, i.jsx)(a(565608).J, {
                                spaceStore: t,
                                spaceViewStore: r,
                                itemStores: f,
                                moveToPagesOnly: u,
                                depth: 0,
                                title: g.formatMessage({
                                    defaultMessage: "Teamspaces",
                                    id: "moveToModal.teamsSection.title"
                                }),
                                onAccept: e.onAccept,
                                itemsToMove: e.itemsToMove,
                                environment: v
                            }) : void 0, S.length > 0 ? (0, i.jsx)(a(565608).J, {
                                spaceStore: t,
                                spaceViewStore: r,
                                itemStores: S,
                                moveToPagesOnly: u,
                                depth: 0,
                                title: g.formatMessage({
                                    defaultMessage: "Workspace",
                                    id: "moveToModal.workspaceSection.title"
                                }),
                                onAccept: e.onAccept,
                                itemsToMove: e.itemsToMove,
                                environment: v
                            }) : void 0]
                        })
                    })
                }) : null
            }

            function l({
                spaceStore: e,
                itemsToMove: t
            }) {
                let o = (0, a(488355).iH)(t);
                return a(420156).A.getWithoutSubscribing(e.id).map(({
                    store: e
                }) => e).filter(e => (null == e ? void 0 : e.pathIsAccessibleAndAlive()) && !t.some(t => "block" === t.table && t.id === e.id) && e.id !== o).slice(0, 7)
            }

            function d({
                itemsToMove: e,
                chosenSpaceStore: t,
                forceShowPrivatePageOption: o,
                sidebarSpaceStore: i
            }) {
                let n = (0, a(916804).I)(t),
                    s = e.every(e => e instanceof a(970831).B && (0, a(528991).K)(e)),
                    r = i && t.id !== i.id;
                return !n && (o || r || !s)
            }
        },
        781036: (e, t, a) => {
            a.d(t, {
                B: () => n
            });
            var o = a(296540),
                i = a(474848);

            function n({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, o.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, a(960831).j)(!0)
                    }), a(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, a(960831).j)(!1), a(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let s = (0, a(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: t
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: a(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, i.jsx)("div", {
                    role: "presentation",
                    style: s.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: a(511101).m
                })
            }
        },
        789722: (e, t, a) => {
            a.d(t, {
                W: () => o
            });
            let o = (0, a(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        799843: (e, t, a) => {
            a.d(t, {
                DG: () => d,
                OH: () => r,
                nl: () => s,
                x$: () => l
            });
            let o = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.year",
                        defaultMessage: "{numYears, plural, one {{numYears} year ago} other {{numYears} years ago}}"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.day",
                        defaultMessage: "{numDays, plural, one {{numDays} day ago} other {{numDays} days ago}}"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.week",
                        defaultMessage: "{numWeeks, plural, one {{numWeeks} week ago} other {{numWeeks} weeks ago}}"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.hour",
                        defaultMessage: "{numHours, plural, one {{numHours} hour ago} other {{numHours} hours ago}}"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.minute",
                        defaultMessage: "{numMinutes, plural, one {{numMinutes} minute ago} other {{numMinutes} minutes ago}}"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.second",
                        defaultMessage: "Just now"
                    }
                }),
                i = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.ultraCompactYear",
                        defaultMessage: "{numYears}y"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.ultraCompactDay",
                        defaultMessage: "{numDays}d"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.ultraCompactWeek",
                        defaultMessage: "{numWeeks}w"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.ultraCompactHour",
                        defaultMessage: "{numHours}h"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.ultraCompactMinute",
                        defaultMessage: "{numMinutes}m"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.ultraCompactSeconds",
                        defaultMessage: "Just now"
                    }
                }),
                n = (0, a(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.compactYear",
                        defaultMessage: "{numYears}y ago"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.compactDay",
                        defaultMessage: "{numDays}d ago"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.compactWeek",
                        defaultMessage: "{numWeeks}w ago"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.compactHour",
                        defaultMessage: "{numHours}h ago"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.compactMinute",
                        defaultMessage: "{numMinutes}m ago"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.compactSecond",
                        defaultMessage: "Just now"
                    }
                });

            function s(e, {
                useCompactFormat: t,
                useUltraCompactFormat: r,
                useLowercase: l,
                roundDownYears: d,
                useWeeks: c,
                showDaysToOneWeek: u,
                nowOverrideMs: p = Date.now()
            } = {}) {
                let m = r ? i : t ? n : o,
                    g = new Date(e),
                    v = a(962299).A.getIntl().locale,
                    h = new Date(p),
                    f = Number(h) - e;
                if (f >= a(627179).Gq && d) {
                    let e = Math.floor(f / a(627179).Gq);
                    return a(962299).A.formatMessage(m.year, {
                        numYears: e
                    })
                }
                if (g.getFullYear() !== h.getFullYear()) return g.toLocaleDateString(v, r ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let y = Math.floor(f / a(627179).nD);
                if (y < 28 && y > 7 && c || u && 7 === y) {
                    let e = Math.floor(y / 7);
                    return a(962299).A.formatMessage(m.week, {
                        numWeeks: e
                    })
                }
                if (u && y > 6 || !u && y >= 3) return g.toLocaleDateString(v, {
                    month: "short",
                    day: "numeric"
                });
                if (y >= 1) return a(962299).A.formatMessage(m.day, {
                    numDays: y
                });
                let S = Math.floor(f / a(627179).pT);
                if (S >= 1) return a(962299).A.formatMessage(m.hour, {
                    numHours: S
                });
                let M = Math.floor(f / a(627179).Xb);
                return M >= 1 ? a(962299).A.formatMessage(m.minute, {
                    numMinutes: M
                }) : l ? a(962299).A.formatMessage(m.second).toLocaleLowerCase() : a(962299).A.formatMessage(m.second)
            }

            function r(e, t) {
                let o = t - e,
                    i = Math.floor(o / a(627179).Gq),
                    n = Math.floor(o / a(627179).nD),
                    s = Math.floor(o / a(627179).pT),
                    r = Math.floor(o / a(627179).Xb),
                    l = Math.floor(o / a(627179).TD);
                return i >= 1 ? a(962299).A.formatMessage(a(362008).jX.year, {
                    numYears: i
                }) : n >= 1 ? a(962299).A.formatMessage(a(362008).jX.day, {
                    numDays: n
                }) : s >= 1 ? a(962299).A.formatMessage(a(362008).jX.hour, {
                    numHours: s
                }) : r >= 1 ? a(962299).A.formatMessage(a(362008).jX.minute, {
                    numMinutes: r
                }) : a(962299).A.formatMessage(a(362008).jX.second, {
                    numSeconds: l
                })
            }

            function l(e, t) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function d(e) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        827497: (e, t, a) => {
            a.d(t, {
                F: () => u
            });
            var o = a(296540),
                i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return !1
                }
            }
            let s = new n;
            var r = a(474848);
            let l = (0, a(109939).YK)({
                title: {
                    id: "tasksCreateNewDatabase.modal.title2",
                    defaultMessage: "Name your private task database"
                },
                placeholder: {
                    id: "tasksCreateNewDatabase.modal.placeholder",
                    defaultMessage: "{username}’s to-do list"
                },
                create: {
                    id: "tasksCreateNewDatabase.modal.create",
                    defaultMessage: "Create database"
                }
            });

            function d(e) {
                let {
                    handleCreateTaskDatabase: t
                } = e, i = (0, a(109939).tz)(), n = (0, a(876252).$)(), d = (0, a(682985).K8)(() => null == n ? void 0 : n.getDisplayName(i), [n, i]), [c, u] = (0, o.useState)(""), p = (0, a(682985).O$)(s), m = (0, o.useCallback)(() => {
                    c.trim() && (t(c), s.setState(!1))
                }, [c, t]), g = (0, o.useCallback)(() => {
                    s.setState(!1)
                }, []), v = (0, o.useCallback)(e => {
                    "Enter" === e.key && m()
                }, [m]), h = (0, o.useCallback)(e => {
                    u(e.target.value)
                }, [u]);
                return (0, r.jsx)(a(833503).s, {
                    isOpen: p,
                    onDismiss: g,
                    areaConstraint: {
                        height: {
                            type: "unlimited",
                            scroll: "allow"
                        },
                        width: {
                            type: "fixed",
                            length: 380
                        }
                    },
                    children: () => (0, r.jsx)(a(314084).t, {
                        showDismissButton: !0,
                        header: (0, r.jsx)(a(582471).Y, {
                            iconAndTitle: (0, r.jsx)(a(209590).Z, {
                                iconGroup: a(819534).u,
                                iconColorPalette: "gray",
                                iconColorVariant: "tertiary",
                                title: i.formatMessage(l.title)
                            })
                        }),
                        footer: (0, r.jsx)(a(591637).a, {
                            layout: "vertical",
                            primaryButtons: [{
                                buttonType: "primary",
                                label: i.formatMessage(l.create),
                                onClick: m
                            }],
                            secondaryButtons: [{
                                buttonType: "dismiss"
                            }]
                        }),
                        children: (0, r.jsx)(a(36481).p, {
                            value: c,
                            onChange: h,
                            placeholder: i.formatMessage(l.placeholder, {
                                username: d
                            }),
                            autoFocus: !0,
                            onKeyDown: v
                        })
                    })
                })
            }
            let c = {
                icon: {
                    fill: a(632079).Tj.icon.secondary
                },
                title: {
                    color: a(632079).Tj.text.secondary
                }
            };

            function u(e) {
                let {
                    spaceStore: t,
                    spaceViewStore: i,
                    onDatabaseCreated: n
                } = e, l = (0, a(533992).v3)(), u = (0, a(109939).tz)(), p = (0, o.useCallback)(e => {
                    let o, s;
                    (0, a(377796).createAndCommit)({
                        userAction: "createNewTaskDatabaseMenuItem.handleCreateTodoList",
                        environment: l,
                        cellTarget: {
                            spaceWithId: t.id
                        },
                        canUndo: !0,
                        perform(n) {
                            var r;
                            o = a(124937).Wv({
                                environment: l,
                                transaction: n,
                                type: "collection_view",
                                inMemoryRecordCache: l.defaultRecordCache.inMemoryRecordCache
                            }), a(579695).NI({
                                childStore: o,
                                parentStore: t,
                                transaction: n
                            });
                            let d = a(478311).initializeApp({
                                environment: l,
                                spaceViewStore: i,
                                appUri: a(932819).a6,
                                presetUri: "notion://tasks_collection_typedDBpreset",
                                appParentStore: t,
                                temporaryContainerBlockStore: o,
                                transaction: n,
                                from: "my_tasks",
                                skipNavigation: !0
                            });
                            (s = null == d || null == (r = d[0]) ? void 0 : r.getCollectionStoreIfSingleSource()) && a(41403).R9({
                                environment: l,
                                store: s.getNameStore(),
                                value: (0, a(247438).x9d)(e),
                                transaction: n
                            }), a(819652).HK({
                                id: "database_creation_toast",
                                title: u.formatMessage({
                                    id: "moveToModalTyped.databaseCreated.title",
                                    defaultMessage: "Database created"
                                }),
                                message: u.formatMessage({
                                    id: "moveToModalTyped.databaseCreated.message",
                                    defaultMessage: '"{name}" has been created'
                                }, {
                                    name: e
                                }),
                                presentationType: "persistent",
                                icon: a(437102).checkmarkCircleSmallIcon,
                                iconColorPalette: "green",
                                iconColorVariant: "accentPrimary",
                                actions: {
                                    primary: {
                                        title: u.formatMessage({
                                            id: "moveToModalTyped.databaseCreated.openDatabase",
                                            defaultMessage: "Open database"
                                        }),
                                        onAction: () => {
                                            (0, a(545586).navigateToBlock)({
                                                environment: l,
                                                store: null == d ? void 0 : d[0],
                                                pageVisitSource: a(254656).y8.PersonalHomePage
                                            }), a(819652).UW({
                                                id: "database_creation_toast"
                                            })
                                        }
                                    }
                                }
                            })
                        }
                    }), s && ((0, a(577533).D)(s), n && n(s.id))
                }, [l, u, n, t, i]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d, {
                        handleCreateTaskDatabase: p
                    }), (0, r.jsx)(a(209572).A, {
                        showChevron: !1,
                        icon: a(581923).plusIcon,
                        iconStyle: c.icon,
                        title: (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "New private task database",
                            id: "moveToModalTyped.createDatabaseItem.title"
                        }),
                        textWrapperStyle: c.title,
                        onClick: () => {
                            s.setState(!0)
                        }
                    })]
                })
            }
        },
        828294: (e, t, a) => {
            function o(e) {
                let t = (0, a(83208).X)(e);
                return "on" === (0, a(604306).r)("agent_writer_custom_skills") || t
            }

            function i(e) {
                return "on" === a(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || a(218744).default.checkGate({
                    gateName: e
                })
            }
            a.d(t, {
                N: () => o,
                a: () => i
            })
        },
        848135: (e, t, a) => {
            a.d(t, {
                B: () => i
            });
            var o = a(296540);

            function i() {
                let e = (0, o.useRef)(null),
                    [t, a] = (0, o.useState)(!1),
                    i = (0, o.useCallback)(() => {
                        let t = e.current;
                        t && a(t.matches(":hover"))
                    }, []);
                return [(0, o.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", i), t.addEventListener("mouseleave", i), e.current = t, i()) : e.current && (e.current.removeEventListener("mouseenter", i), e.current.removeEventListener("mouseleave", i), e.current = null)
                }, [i]), t, e]
            }
        },
        859941: (e, t, a) => {
            a.d(t, {
                a: () => o
            });

            function o() {
                let e = a(381453).XM(["Activities", "Objects", "Travel & Places"]),
                    t = a(753281).A.state.emojiByCategory[e];
                return a(381453).XM(t)
            }
        },
        876252: (e, t, a) => {
            a.d(t, {
                $: () => o
            });

            function o() {
                return (0, a(682985).O$)(a(728372).AppStoreCurrentUserStore)
            }
        },
        895732: (e, t, a) => {
            a.d(t, {
                A: () => i,
                x: () => n
            });
            var o = a(296540);

            function i() {
                (0, o.useEffect)(() => {
                    n()
                }, [])
            }
            let n = a(381453).Oo(async function() {
                let e = await a(765035).w.load();
                a(753281).A.setState((0, a(871871).Se)(e))
            })
        },
        897104: (e, t, a) => {
            a.d(t, {
                c: () => r
            }), a(898992), a(672577);
            var o = a(296540),
                i = a(474848);
            let n = {
                    button: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                        color: a(632079).Tj.text.tertiary,
                        ...a(986939).A.isMobile ? {
                            fontSize: a(699422).J.UIRegular.mobile,
                            lineHeight: a(699422).K_.UIRegular.mobile,
                            padding: 4
                        } : {
                            fontSize: a(699422).J.UIRegular.desktop,
                            lineHeight: a(699422).K_.UIRegular.desktop,
                            margin: "0px 4px 4px",
                            padding: 4,
                            borderRadius: 4
                        }
                    }
                },
                s = o.memo(function({
                    loading: e,
                    menuListItemProps: t
                }) {
                    return (0, i.jsxs)(a(64960).Ay, {
                        style: n.button,
                        ...t,
                        children: [(0, i.jsx)(a(16275).I, {
                            icon: a(309087).arrowStraightDownFillSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        }), (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Load more",
                            id: "moveToMenu.loadMoreButtonTitle"
                        }), e ? (0, i.jsx)(a(517334).k, {
                            size: 12
                        }) : void 0]
                    })
                });

            function r({
                sections: e,
                error: t,
                menuListStore: n,
                initialFocus: l,
                onLoadMore: d,
                canLoadMore: c,
                loading: u
            }) {
                let p = (0, o.useMemo)(() => c && (null == e ? void 0 : e.find(e => "pages" === e.key)), [c, e]);
                if (t) return (0, i.jsx)(a(844565).A, {
                    children: (0, i.jsx)(a(498341).u, {
                        title: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Something went wrong.",
                            id: "moveBlockMenu.errorOnMove.label"
                        })
                    })
                });
                if (e && 0 === e.length) return (0, i.jsx)(a(844565).A, {
                    children: (0, i.jsx)(a(498341).u, {
                        title: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "No results",
                            id: "moveBlockMenu.noResults.label"
                        })
                    })
                });
                let m = [...e || [], ...p ? [{
                    key: "moveTo load more section",
                    render: e => (0, i.jsx)(a(844565).A, {
                        disableDesktopPadding: !0,
                        ...e
                    }),
                    items: [{
                        key: "moveTo load more button",
                        render: e => (0, i.jsx)(s, {
                            menuListItemProps: e,
                            loading: u
                        }),
                        action: d
                    }]
                }] : []];
                return (0, i.jsx)("div", {
                    children: (0, i.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        initialFocus: l,
                        sections: m,
                        store: n
                    })
                })
            }
        },
        907124: (e, t, a) => {
            a.d(t, {
                wU: () => x,
                OC: () => j,
                wc: () => m,
                NA: () => g,
                L2: () => v,
                oG: () => M,
                N$: () => A,
                DZ: () => p,
                _B: () => k,
                R3: () => T,
                nG: () => h
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(430670), a(581454), a(296540);
            var o = () => a(970831),
                i = () => a(356912),
                n = () => a(832375),
                s = () => a(488355),
                r = a(474848);
            let l = {
                maxWidth: 240
            };

            function d(e) {
                let {
                    store: t,
                    menuListItemProps: o,
                    hidePath: i,
                    isDisabled: n,
                    disabledTooltip: s
                } = e, d = (0, a(960253).I)(() => ({
                    recordMenuItem: n ? {
                        color: a(632079).Tj.text.secondary
                    } : {}
                }), [n]);
                return (0, r.jsx)(a(51831).m, {
                    placement: "left",
                    textWrap: !0,
                    style: l,
                    disableTooltip: !n,
                    content: () => s,
                    children: e => (0, r.jsx)(a(103558).A, { ...(0, a(63390).A)(o, e),
                        disabled: n,
                        store: t,
                        hidePath: i,
                        style: d.recordMenuItem
                    })
                })
            }

            function c({
                spaceStore: e,
                value: t,
                showPath: l,
                isCreateIn: u,
                onAccept: p,
                showDataSources: m = !0,
                isMovingDataSource: g,
                environment: v
            }) {
                let h = function({
                    spaceStore: e,
                    value: t
                }) {
                    let {
                        type: s
                    } = t;
                    switch (s) {
                        case "page":
                            return o().B.createChildStore(e, {
                                table: n().evP,
                                id: t.id
                            });
                        case "collection":
                            return i().m.createChildStore(e, {
                                table: n().VlP,
                                id: t.id
                            });
                        case "space":
                            return a(695906).SpaceStore.createChildStore(e, {
                                table: n().NXh,
                                id: t.id
                            });
                        case "team":
                            return a(681735).h.createChildStore(e, {
                                table: n().yKj,
                                id: t.id
                            });
                        case "space-private-pages":
                            return;
                        default:
                            (0, a(722371).HB)(s)
                    }
                }({
                    spaceStore: e,
                    value: t
                });
                if (h)
                    if ((0, s().n6)() && h instanceof i().m) return [{
                        key: h.id,
                        render: t => (0, r.jsx)(a(909816).d, {
                            spaceStore: e,
                            collectionStore: h,
                            menuListItemProps: t
                        }),
                        action: () => p(t)
                    }];
                    else {
                        let e = function({
                            destinationStore: e,
                            isMovingDataSource: t,
                            environment: n
                        }) {
                            let l = (0, r.jsx)(a(109939).sA, {
                                    id: "moveBlockMenu.needEditAccessOrCanCreatePagesInCollection.tooltip",
                                    defaultMessage: "You need “Can edit” access or “Can create pages” access to “{parentName}” to move this page",
                                    values: {
                                        parentName: (0, r.jsx)(a(627918).A, {
                                            store: e,
                                            shouldWrap: !0
                                        })
                                    }
                                }),
                                d = (0, r.jsx)(a(109939).sA, {
                                    id: "moveBlockMenu.needEditAccess.tooltip",
                                    defaultMessage: "You need “Can edit” access to “{parentName}” to move this page",
                                    values: {
                                        parentName: (0, r.jsx)(a(627918).A, {
                                            store: e,
                                            shouldWrap: !0
                                        })
                                    }
                                });
                            if (e instanceof o().B && !(0, s().qT)({
                                    destinationStore: e,
                                    isMovingDataSource: t,
                                    environment: n
                                }))
                                if (e.isCollectionView()) return l;
                                else return d;
                            return e instanceof i().m && !(0, a(862085).gN)({
                                collectionStore: e,
                                environment: n
                            }) ? l : (0, a(966980).$R)(e) && !e.canAddOrRemoveTopLevelPages() ? (0, r.jsx)(a(109939).sA, {
                                id: "moveBlockMenu.TeamSidebarLocked.tooltip",
                                defaultMessage: "This teamspace has its sidebar locked. You must be a teamspace owner to move to this teamspace."
                            }) : void 0
                        }({
                            destinationStore: h,
                            isMovingDataSource: g,
                            environment: v
                        });
                        return [{
                            key: h.id,
                            render: t => (0, r.jsx)(d, {
                                store: h,
                                menuListItemProps: t,
                                hidePath: !!u && !l,
                                isDisabled: !!e,
                                disabledTooltip: e
                            }),
                            action: () => p(t)
                        }]
                    }
            }

            function u(e, t, a) {
                if (!a && e.collectionId) return {
                    type: "collection",
                    id: e.collectionId,
                    spaceId: t.id
                };
                if (!a) {
                    let a = o().B.createChildStore(t, {
                            table: n().evP,
                            id: e.blockId
                        }),
                        i = a.isCollectionView() ? a.getCollectionPointers() : void 0;
                    if (i && i.length > 0) return {
                        type: "collection",
                        id: i[0].id,
                        spaceId: t.id
                    }
                }
                return {
                    type: "page",
                    id: e.blockId,
                    spaceId: t.id
                }
            }
            let p = (0, a(109939).YK)({
                createSubpage: {
                    id: "moveToOrCreateMenu.createSubpage.description",
                    defaultMessage: "Create a new sub-page where your cursor is, inside the current block."
                },
                newPageIn: {
                    id: "moveToOrCreateMenu.newPageIn.description",
                    defaultMessage: "Create a new page inside any existing page, then link to it in one go."
                },
                privatePagesTitle: {
                    defaultMessage: "Private Pages",
                    id: "moveBlockMenu.privatePagesMenuTitle"
                },
                teamspacesTitle: {
                    defaultMessage: "Teamspaces",
                    id: "moveBlockMenu.teamsSection.title"
                },
                pagesTitle: {
                    defaultMessage: "Pages",
                    id: "moveBlockMenu.pagesSection.title"
                },
                suggestedTitle: {
                    defaultMessage: "Suggested",
                    id: "moveBlockMenu.suggestedSection.title"
                }
            });

            function m() {
                return a(199012).x.getChosenSpaceStore() ? ? (0, a(328765).S)()
            }

            function g() {
                return a(199012).x.getChosenSpaceViewStore() ? ? a(728372).AppStoreSidebarSpaceViewStore.state
            }

            function v(e) {
                return e.isOpen ? e.queryLimit : a(411216).p1
            }

            function h(e, t, o) {
                t(e);
                let i = a(880904).Ay.getDatabaseType();
                "collection" === e.type && (0, a(377796).createAndCommit)({
                    userAction: "TypedMoveToMenu.handleClick",
                    environment: o,
                    cellTarget: e.spaceId ? {
                        spaceWithId: e.spaceId
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        (0, a(90252).e)({
                            transaction: t,
                            databaseType: i,
                            collectionId: e.id,
                            spaceId: e.spaceId
                        })
                    }
                })
            }
            async function f(e, t, o, i, n) {
                let {
                    databaseType: s,
                    query: r,
                    searchSessionId: l
                } = e, d = m();
                if (!d) return [];
                let u = await a(308825).T.searchActions.load();
                return (await u.searchCollectionsWithRecents({
                    environment: o,
                    query: r,
                    limit: 20,
                    databaseType: s,
                    parentStore: d,
                    spaceStore: d,
                    collectionViewBlockStore: void 0,
                    searchSessionId: l,
                    peopleBlocksToInclude: "none"
                })).results.flatMap(e => c({
                    spaceStore: d,
                    value: {
                        type: "collection",
                        id: e,
                        spaceId: d.id
                    },
                    showPath: !0,
                    isCreateIn: i,
                    onAccept: i ? n : e => h(e, n, o),
                    isMovingDataSource: t,
                    environment: o
                })).filter(a(722371).O9)
            }

            function y(e, t, a, o, i, n, s) {
                let {
                    query: r,
                    savedQuickAddParent: l
                } = e, d = m();
                if (d && (t && !r && "space" === l.type || "page" === l.type)) return c({
                    spaceStore: d,
                    value: l,
                    showPath: !0,
                    isCreateIn: a,
                    onAccept: o,
                    showDataSources: n,
                    isMovingDataSource: i,
                    environment: s
                })
            }
            async function S(e, t, o, i, n) {
                if (!a(880904).Ay.state.isOpen || "untyped" === a(880904).Ay.state.variant || !a(577533).c.state) throw Error("Trying to render section when it's either not open, untyped, or typed but uninitialized (i.e. the typed databases are not fetched yet)");
                let s = a(880904).Ay.getDatabaseType(),
                    l = (0, a(463082).$O)(s),
                    {
                        typedDatabases: d
                    } = a(577533).c.state;
                return {
                    typedSuggestedMenuSection: {
                        key: "suggested",
                        render: e => (0, r.jsx)(a(844565).A, { ...e,
                            title: (0, r.jsx)(a(109939).sA, {
                                defaultMessage: "{typedItemName} databases",
                                id: "moveBlockMenu.typedSuggestedSection.title",
                                values: {
                                    typedItemName: (0, a(252166).A)(l)
                                }
                            }),
                            right: (0, r.jsx)(a(219118).m, {
                                typedItemName: l
                            })
                        }),
                        items: (await f({
                            query: e,
                            databaseType: s ? [s] : void 0,
                            searchSessionId: a(880904).Ay.state.flowId
                        }, n, t, o, i)).slice(0, 5)
                    },
                    typedSuggestedResults: d
                }
            }

            function M(e, t, o, i, n, s, l) {
                var d;
                let {
                    query: c,
                    chosenSpaceStore: u
                } = e, m = a(728372).AppStoreSidebarSpaceStore.state, g = p.privatePagesTitle, v = o.formatMessage(g).replace(/<[^>]*>/g, ""), h = c ? null == (d = (0, a(821048).It)(c, v)) ? void 0 : d.score : void 0, f = c && (h || 0) >= a(821048).sH;
                if ((!c || f) && s && (!u || (0, a(775945).VN)({
                        itemsToMove: i,
                        chosenSpaceStore: u,
                        forceShowPrivatePageOption: l,
                        sidebarSpaceStore: m
                    }))) return {
                    key: "private",
                    render: e => (0, r.jsx)(a(95582).A, {
                        icon: (0, r.jsx)(a(321753).A, {
                            size: 22,
                            userStore: (0, a(427846)._)(t)
                        }),
                        title: (0, r.jsxs)(a(4458).fI, {
                            children: [(0, r.jsx)("span", {
                                children: (0, r.jsx)(a(109939).sA, { ...g
                                })
                            }), (0, a(350277).z)({
                                spaceStore: u
                            }) > 0 ? (0, r.jsx)(a(4458).fI, {
                                marginInlineStart: 10,
                                alignItems: "center",
                                children: (0, r.jsx)(a(16275).I, {
                                    icon: a(697198).lockSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                })
                            }) : void 0]
                        }),
                        ...e
                    }),
                    action: () => {
                        n({
                            type: "space-private-pages",
                            spaceId: u.id
                        })
                    }
                }
            }

            function b(e, t, o, i, n, s) {
                if (e && !i) return [];
                let r = m(),
                    l = g();
                if (!r || !l) return [];
                let d = (0, a(679321).r)(l);
                return e && (d = (0, a(821048).Ay)(e, d, e => e.getName() || "")), d.flatMap(e => c({
                    spaceStore: r,
                    value: {
                        type: "team",
                        id: e.id,
                        spaceId: r.id
                    },
                    showPath: !1,
                    isCreateIn: t,
                    onAccept: o,
                    isMovingDataSource: n,
                    environment: s
                })).filter(a(722371).O9)
            }

            function x(e) {
                let {
                    allItemsToMoveAreNavigable: t,
                    blockResults: i,
                    chosenSpaceStore: l,
                    environment: d,
                    isAddTo: m,
                    isCreateIn: g,
                    isTurnIntoPage: v,
                    showDataSources: h,
                    onAccept: f,
                    parentBlockId: y,
                    query: S,
                    recentPageResults: M,
                    itemsToMove: x,
                    templateResults: A,
                    topLevelBlockResults: j
                } = e, I = [], T = new Set, k = e => {
                    if (!e) return !1;
                    let {
                        key: t
                    } = e;
                    return !T.has(t) && (T.add(t), !0)
                }, w = a(381453).oE([function(e, t, i, s, l, d) {
                    if (!l || !d || e.query) return;
                    let c = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                    if (!c) return;
                    let u = s ? o().B.createChildStore(c, {
                            table: n().evP,
                            id: s
                        }) : void 0,
                        m = (0, a(701043).D)(u);
                    if (m) return {
                        key: m.pageStore.id,
                        render: e => {
                            let o = o => (0, r.jsx)(a(95582).A, { ...(0, a(63390).A)(o || {}, e),
                                icon: (0, r.jsx)(a(16275).I, {
                                    icon: a(581923).plusIcon
                                }),
                                title: t.length > 1 ? (0, r.jsx)(a(109939).sA, {
                                    id: "moveBlockMenu.currentPage.pluralAddTitle",
                                    defaultMessage: "New sub-pages"
                                }) : (0, r.jsx)(a(109939).sA, {
                                    id: "moveBlockMenu.currentPage.singleAddTitle",
                                    defaultMessage: "New sub-page"
                                })
                            });
                            return a(986939).A.isMobile ? o() : (0, r.jsx)(a(51831).m, {
                                content: () => (0, r.jsx)(a(916612).A, {
                                    imageURL: a(896221).A.images.tooltips.pageMenu.newSubpagePng,
                                    imageWidth: 140,
                                    imageHeight: 100,
                                    caption: (0, r.jsx)(a(109939).sA, { ...p.createSubpage
                                    })
                                }),
                                placement: "right",
                                delayThreshold: 0,
                                children: e => o(e)
                            })
                        },
                        action: () => i(m.createInValue)
                    }
                }({
                    query: S
                }, x, f, y, m, g)]);
                !w.length || v || m || I.push({
                    key: "defaults",
                    render: e => (0, r.jsx)(a(844565).A, { ...e
                    }),
                    items: w
                });
                let C = a(381453).oE([...M.slice(0, 5).flatMap(e => c({
                    spaceStore: l,
                    value: u(e, l, (0, s().vN)(x)),
                    showPath: !v && !m,
                    isCreateIn: g,
                    showDataSources: h,
                    onAccept: f,
                    isMovingDataSource: (0, s().vN)(x),
                    environment: d
                })), ...i.slice(0, 10).flatMap(e => c({
                    spaceStore: l,
                    value: u(e, l, (0, s().vN)(x)),
                    showPath: !S,
                    isCreateIn: g,
                    showDataSources: h,
                    onAccept: f,
                    isMovingDataSource: (0, s().vN)(x),
                    environment: d
                })), ...j.slice(0, 10).flatMap(e => c({
                    spaceStore: l,
                    value: u(e, l, (0, s().vN)(x)),
                    showPath: !S,
                    isCreateIn: g,
                    showDataSources: h,
                    onAccept: f,
                    isMovingDataSource: (0, s().vN)(x),
                    environment: d
                }))].slice(0, 20).filter(k));
                C.length > 0 && I.push({
                    key: "blocks",
                    render: e => (0, r.jsx)(a(844565).A, { ...e,
                        title: (0, r.jsx)(a(109939).sA, { ...p.suggestedTitle
                        }),
                        topBorder: I.length > 0 && !v && !m
                    }),
                    items: C
                });
                let B = a(381453).oE(b(S, g, f, t, (0, s().vN)(x), d).filter(k));
                B.length > 0 && I.push({
                    key: "teams",
                    render: e => (0, r.jsx)(a(844565).A, { ...e,
                        title: (0, r.jsx)(a(109939).sA, { ...p.teamspacesTitle
                        }),
                        topBorder: I.length > 0
                    }),
                    items: B
                });
                let P = a(381453).oE(A.slice(0, 5).flatMap(e => c({
                    spaceStore: l,
                    value: u(e, l, (0, s().vN)(x)),
                    showPath: !0,
                    isCreateIn: g,
                    showDataSources: h,
                    onAccept: f,
                    isMovingDataSource: (0, s().vN)(x),
                    environment: d
                })).filter(k));
                return P.length > 0 && I.push({
                    key: "templates",
                    render: e => (0, r.jsx)(a(844565).A, { ...e,
                        title: m ? (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Add from template",
                            id: "moveBlockMenu.addFromTemplate.title"
                        }) : (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Move to template",
                            id: "moveBlockMenu.moveToTemplate.title"
                        }),
                        topBorder: I.length > 0
                    }),
                    items: P
                }), w.length && (v || m) && I.push({
                    key: "defaults",
                    render: e => (0, r.jsx)(a(844565).A, { ...e,
                        topBorder: I.length > 0
                    }),
                    items: w
                }), I
            }
            async function A(e, t, o, i, n, l, d) {
                let {
                    chosenSpaceStore: u,
                    savedQuickAddParent: m,
                    query: g,
                    blockResults: v,
                    recentPageResults: h
                } = e, {
                    typedSuggestedMenuSection: f,
                    typedSuggestedResults: M
                } = await S(g, t, o, i, (0, s().vN)(n));
                if (a(880904).Ay.state.isOpen && "aggregated_type" === a(880904).Ay.state.moveToContext) return [f].filter(e => e.items.length > 0);
                let x = s().Pk({
                        recentPageResults: h,
                        blockResults: v,
                        suggestedPages: M
                    }),
                    A = new Set(s().rD(n));
                A.size > 0 && (x = x.filter(e => !A.has(e.blockId)));
                let j = a(381453).hS(a(381453).qI(a(381453).oE([y({
                        query: g,
                        savedQuickAddParent: m
                    }, l, o, i, (0, s().vN)(n), void 0, t), ...x.map(({
                        blockId: e
                    }) => c({
                        spaceStore: u,
                        value: {
                            type: "page",
                            id: e,
                            spaceId: u.id
                        },
                        showPath: !g,
                        isCreateIn: o,
                        onAccept: i,
                        isMovingDataSource: (0, s().vN)(n),
                        environment: t
                    }))])), e => e.key),
                    I = a(381453).oE(b(g, o, i, d, (0, s().vN)(n), t)).slice(0, 5),
                    T = f.items.length > 0,
                    k = {
                        key: "teams",
                        render: e => (0, r.jsx)(a(844565).A, { ...e,
                            desktopStyle: {
                                paddingTop: 6 * !T,
                                paddingBottom: 6
                            },
                            title: (0, r.jsx)(a(109939).sA, { ...p.teamspacesTitle
                            })
                        }),
                        items: I
                    },
                    w = f.items.length > 0 && 0 === k.items.length;
                return [f, k, {
                    key: "pages",
                    render: e => (0, r.jsx)(a(844565).A, { ...e,
                        desktopStyle: {
                            paddingTop: 6 * !w,
                            paddingBottom: 6
                        },
                        title: (0, r.jsx)(a(109939).sA, { ...p.pagesTitle
                        })
                    }),
                    items: j
                }].filter(e => e.items.length > 0)
            }

            function j(e) {
                let t, {
                        allItemsToMoveAreNavigable: o,
                        blockResults: i,
                        chosenSpaceStore: n,
                        environment: l,
                        forceShowPrivatePageOption: d,
                        intl: m,
                        isAddTo: g,
                        isCreateIn: h,
                        showDataSources: f,
                        onAccept: S,
                        query: x,
                        recentPageResults: A,
                        savedQuickAddParent: j,
                        itemsToMove: I
                    } = e,
                    T = (t = 0 === x.length && n ? (0, a(775945).Fx)({
                        spaceStore: n,
                        itemsToMove: I
                    }) : [], {
                        key: "suggested",
                        render: e => (0, r.jsx)(a(844565).A, { ...e,
                            title: (0, r.jsx)(a(109939).sA, { ...p.suggestedTitle
                            })
                        }),
                        items: a(381453).oE([M({
                            query: x,
                            chosenSpaceStore: n
                        }, l, m, I, S, o, d), ...t.filter(e => s().zO(e, I)).flatMap(e => c({
                            spaceStore: n,
                            value: {
                                type: "page",
                                id: e.id,
                                spaceId: n.id
                            },
                            showPath: !1,
                            isCreateIn: h,
                            onAccept: S,
                            showDataSources: f,
                            isMovingDataSource: (0, s().vN)(I),
                            environment: l
                        }))])
                    }),
                    k = v(a(880904).Ay.state),
                    w = [...A.slice(0, 3), ...i.slice(0, k)],
                    C = {
                        key: "pages",
                        render: e => (0, r.jsx)(a(844565).A, { ...e,
                            title: (0, r.jsx)(a(109939).sA, { ...p.pagesTitle
                            })
                        }),
                        items: a(381453).hS(a(381453).qI(a(381453).oE([y({
                            query: x,
                            savedQuickAddParent: j
                        }, g, h, S, (0, s().vN)(I), f, l), ...w.map(e => c({
                            spaceStore: n,
                            value: u(e, n, (0, s().vN)(I)),
                            showPath: !x,
                            isCreateIn: h,
                            showDataSources: f,
                            onAccept: S,
                            isMovingDataSource: (0, s().vN)(I),
                            environment: l
                        }))])), e => e.key)
                    };
                return [T, {
                    key: "teams",
                    render: e => (0, r.jsx)(a(844565).A, { ...e,
                        title: (0, r.jsx)(a(109939).sA, { ...p.teamspacesTitle
                        })
                    }),
                    items: a(381453).oE(b(x, h, S, o, (0, s().vN)(I), l)).slice(0, 10)
                }, C].filter(e => e.items.length > 0)
            }

            function I(e, t) {
                return !(e instanceof i().m) && !!t && e.isTemplate()
            }

            function T() {
                return a(205885).A.state.online
            }

            function k({
                chosenSpaceStore: e,
                chosenSpaceViewStore: t,
                environment: r,
                isCreateIn: l,
                query: d,
                recentPageIds: c,
                searchResults: u,
                itemsToMove: p
            }) {
                let m = [],
                    g = [],
                    v = [],
                    h = [];
                if (d && u)
                    for (let t of u) {
                        let a = t.collectionId ? i().m.createChildStore(e.getPagesStore(), {
                            table: n().VlP,
                            id: t.collectionId
                        }) : o().B.createChildStore(e.getPagesStore(), {
                            table: n().evP,
                            id: t.blockId
                        });
                        s().zO(a, p) && (I(a, l) ? v.push(t) : m.push(t))
                    } else if (c) {
                        for (let i of (h = (h = c.map(t => ({
                                blockId: o().B.createChildStore(e.getPagesStore(), {
                                    table: n().evP,
                                    id: t
                                }).id
                            }))).filter(({
                                blockId: t
                            }) => {
                                let a = o().B.createChildStore(e.getPagesStore(), {
                                    table: n().evP,
                                    id: t
                                });
                                if (s().zO(a, p)) {
                                    let e = {
                                        blockId: a.id
                                    };
                                    return !I(a, l) || (v.push(e), !1)
                                }
                            }), function(e) {
                                let {
                                    environment: t,
                                    spaceStore: o,
                                    spaceViewStore: i
                                } = e, n = a(728372).AppStoreCurrentUserSettingsStore.state;
                                return i && o ? a(381453).KC((0, a(112127).f)({
                                    environment: t,
                                    spaceStore: o
                                }), (0, a(335751).c)({
                                    environment: t,
                                    spaceViewStore: i,
                                    userSettingsStore: n
                                }), (0, a(275619).I)({
                                    environment: t,
                                    spaceViewStore: i
                                }) ? ? []).filter(e => e.isNavigableBlock()) : []
                            }({
                                environment: r,
                                spaceStore: e,
                                spaceViewStore: t
                            })))
                            if (s().zO(i, p)) {
                                let e = {
                                    blockId: i.id
                                };
                                I(i, l) ? v.push(e) : g.push(e)
                            }
                    }
                return {
                    blockResults: m,
                    topLevelBlockResults: g,
                    templateResults: v,
                    recentPageResults: h
                }
            }
        },
        909816: (e, t, a) => {
            a.d(t, {
                d: () => n
            }), a(296540);
            var o = a(474848);
            let i = {
                caption: {
                    color: a(632079).Tj.text.tertiary,
                    fontSize: a(418676).Kw
                }
            };

            function n({
                spaceStore: e,
                collectionStore: t,
                menuListItemProps: s
            }) {
                return (0, o.jsx)(a(103558).A, {
                    caption: (0, o.jsx)("div", {
                        style: i.caption,
                        children: (0, o.jsx)(r, {
                            spaceStore: e,
                            collectionStore: t
                        })
                    }),
                    store: t,
                    ...s
                })
            }
            let s = {
                paddingInlineStart: 4,
                paddingInlineEnd: 4
            };

            function r({
                spaceStore: e,
                collectionStore: t
            }) {
                let i = (0, a(682985).K8)(() => (function({
                        spaceStore: e,
                        collectionStore: t
                    }) {
                        let i = (0, a(463082).X0)({
                            collectionStore: t
                        });
                        switch (i) {
                            case "team":
                                return null;
                            case "private":
                                return (0, o.jsx)(a(109939).sA, {
                                    id: "moveToHelpers.privatePageCaptionPrefix",
                                    defaultMessage: "Private"
                                });
                            case "shared":
                                return (0, o.jsx)(a(109939).sA, {
                                    id: "moveToHelpers.sharedPageCaptionPrefix",
                                    defaultMessage: "Shared"
                                });
                            default:
                                (0, a(722371).HB)(i)
                        }
                    })({
                        spaceStore: e,
                        collectionStore: t
                    }), [e, t]),
                    n = (0, a(682985).K8)(() => (0, a(307983).a6)(t), [t]) && (0, o.jsx)(a(307983).Ay, {
                        store: t,
                        showFullPathInTooltip: !0
                    });
                return n && i ? (0, o.jsxs)(a(4458).fI, {
                    children: [i, (0, o.jsx)("div", {
                        style: s,
                        children: "/"
                    }), n]
                }) : n && !i ? n : (0, o.jsx)(o.Fragment, {
                    children: i
                })
            }
        },
        930113: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => o,
                lockFillSmallIcon: () => i
            }), a(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.24 1.67 9.51 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.825 4.85a3.175 3.175 0 1 1 6.35 0v1.061a1.95 1.95 0 0 1 1.575 1.914v4.2a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95v-4.2c0-.949.677-1.74 1.575-1.914zm1.1 1.025h4.15V4.85a2.075 2.075 0 0 0-4.15 0zm2.525 4.299a1.05 1.05 0 1 0-.9 0v.976a.45.45 0 0 0 .9 0z"
                    })
                },
                i = (0, a(104509).wt)("lockFillSmall", o, "fillSmall")
        },
        960831: (e, t, a) => {
            a.d(t, {
                j: () => o
            });

            function o(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.setOverlay) ? void 0 : t.call(a(775657).electronApi, e)
            }
        },
        974024: (e, t, a) => {
            a.d(t, {
                f: () => o
            });
            let o = new(a(815048)).O2("pageCovers", async () => {
                let {
                    pageCovers: e
                } = await a.e(40198).then(a.bind(a, 123367));
                return e
            })
        }
    }
]);