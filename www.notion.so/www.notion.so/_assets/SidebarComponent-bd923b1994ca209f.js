"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5140, 43239, 72982, 82853], {
        7534: (e, t, a) => {
            a.d(t, {
                d: () => s
            });
            var r = a(296540),
                i = a(474848);

            function s({
                children: e,
                scrollerStore: t,
                scrollerStyle: o
            }) {
                let n = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore),
                    d = (0, a(917441).Rx)(),
                    {
                        isTablet: l
                    } = (0, a(533992).Y0)(),
                    c = (0, a(994732).x)(),
                    u = (0, a(682985).K8)(() => a(475097).default.isCenterPeekOpen() || a(752085).A.state.open, []),
                    p = (0, a(960253).I)(() => ({
                        scroller: {
                            paddingTop: 6,
                            flexGrow: 1,
                            ...o
                        }
                    }), [o]),
                    m = (0, r.useCallback)(e => {
                        a(862921).A.SidebarScroller = e
                    }, []);
                return d ? n ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a(292239).A, {
                        type: "top",
                        scrollerStore: t
                    }), (0, i.jsx)(a(318981).A, {
                        store: n,
                        droppable: !0,
                        disableRectangularSelection: !0,
                        disableEditNearestBlock: !0,
                        disable: u,
                        render: ({
                            selectableEvents: r
                        }) => (0, i.jsx)(a(126767).H, {
                            type: a(644154).A.Y,
                            store: t,
                            style: p.scroller,
                            ref: m,
                            preventType: l ? c : void 0,
                            ...r,
                            children: e
                        }, d.spaceViewId)
                    })]
                }) : (0, i.jsx)(a(126767).H, {
                    type: a(644154).A.Y,
                    store: t,
                    style: p.scroller,
                    ref: m,
                    preventType: void 0,
                    children: e
                }, d.spaceViewId) : null
            }
        },
        13717: (e, t, a) => {
            function r(e) {
                let {
                    spaceStore: t,
                    groupId: r
                } = e;
                return a(398652).C.createChildStore(t, (0, a(659341).S4)({
                    spacePermissionGroupId: r,
                    spaceId: t.id
                }))
            }

            function i(e) {
                let {
                    spaceStore: t,
                    groupId: r,
                    userId: i
                } = e;
                return a(291886).m.createChildStore(t, (0, a(867863).BZ)({
                    spacePermissionGroupId: r,
                    spaceId: t.id,
                    userId: i
                }))
            }
            a.d(t, {
                A: () => i,
                E: () => r
            })
        },
        75170: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var r = () => a(546605);
            let i = [];
            class s extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        createOrUpdateMenuState: void 0,
                        tabSpacesState: {
                            tabSpaces: {},
                            orderedTabSpaceIds: i,
                            ungroupedTabCount: 0,
                            activeTabSectionId: "ungrouped"
                        }
                    }
                }
            }
            let o = new s;
            (0, a(202146).exposeDebugValue)("ElectronTabSpacesMenuStore", o);
            let n = o
        },
        85071: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                integrationIcon: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                i = (0, a(104509).wt)("integration", r, "default")
        },
        85183: (e, t, a) => {
            a.d(t, {
                a: () => i
            }), a(898992), a(354520), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(823215), a(581454);
            var r = a(296540);

            function i({
                sidebarState: e,
                showLockedSidebar: t,
                isLibraryEnabled: s,
                isPhone: o
            }) {
                var n;
                let d, l, c, u, p = (0, a(972740).L)(),
                    m = (0, a(879101).n)({
                        key: ["sidebar", "sectionOrder", null == p ? void 0 : p.id, null == p ? void 0 : p.userId],
                        computedState: null == e ? void 0 : e.sidebarOrder
                    }),
                    h = (0, a(498e3).K)({
                        sidebarOrder: m ? ? [],
                        sidebarState: e,
                        showLockedSidebar: t
                    }),
                    g = (n = {
                        sidebarSections: h.filter(e => (0, a(190566).Yw)(e))
                    }, d = (0, a(482170).l)(n.sidebarSections, a(795676).A), l = (0, a(972740).L)(), c = (0, a(682985).K8)(() => {
                        if (!d) return [];
                        let e = d.map(e => a(678703).Lw.fromSpaceStore({
                            spaceIdCreator: null == l ? void 0 : l.getSpaceIdCreator(),
                            spaceStore: l,
                            sectionType: e
                        }));
                        if (e.every(e => null == e ? void 0 : e.isReady())) return e.filter(e => !(null == e ? void 0 : e.isHidden())).map(e => null == e ? void 0 : e.getSectionType()).filter(a(722371).O9)
                    }, [l, d]), u = (0, a(879101).n)({
                        key: ["sidebar", "visibleSections", null == l ? void 0 : l.id, null == l ? void 0 : l.userId],
                        computedState: (0, a(482170).l)(c, a(795676).A)
                    }), (0, r.useMemo)(() => u ? new Set(u) : void 0, [u])),
                    S = h.filter(e => !(!o && (0, a(190566).Yw)(e)) || (null == g ? void 0 : g.has(e)));
                return (0, a(482170).l)(S, a(795676).A)
            }
        },
        87945: (e, t, a) => {
            a.d(t, {
                F: () => r
            });
            let r = a(546605).Store.createValue(!1, {
                name: "slipperySlopeSidebarCustomizationModeStore"
            })
        },
        137032: (e, t, a) => {
            a.d(t, {
                z: () => r
            });

            function r(e) {
                a(984858).sidebarWidthStore.setState(e.width), (0, a(936221).U)(e.environment) < a(655567).gJ && a(270912).VN({
                    environment: e.environment,
                    from: "sidebar_expand"
                }), (0, a(455108).Z)()
            }
        },
        153262: (e, t, a) => {
            a.d(t, {
                Jg: () => i,
                bM: () => r,
                hG: () => s,
                ic: () => o
            });
            let r = "150ms ease";

            function i() {
                return {
                    borderRadius: 6
                }
            }
            let s = a(986939).A.isMobile ? {} : { ...i(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${r}`
            };

            function o() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        153828: (e, t, a) => {
            a.d(t, {
                P: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 3.05 15 13.82",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z"
                    })
                },
                i = (0, a(104509).wt)("home", r, "default")
        },
        160856: (e, t, a) => {
            function r(e) {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                t && (0, a(377796).createAndCommit)({
                    userAction: "SidebarPersonalHomeButton.markAsSeen",
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                seen_personal_home: !0
                            }
                        })
                    }
                })
            }

            function i(e) {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                t && (a(563591).default.setState({
                    type: "inactive"
                }), (0, a(377796).createAndCommit)({
                    userAction: "SidebarPersonalHomeButton.markHomeTooltipAsSeen",
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                personal_home_delayed_tooltip_dismissed_at: Date.now()
                            }
                        })
                    }
                }))
            }

            function s(e) {
                let {
                    environment: t,
                    newSeenWelcomeHomeValue: r
                } = e, i = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i) return;
                let s = i.pointer.spaceId;
                (0, a(377796).createAndCommit)({
                    userAction: "SidebarPersonalHomeSettings.markWelcomeAnimationAsSeen",
                    environment: t,
                    canUndo: !0,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    perform: e => {
                        let t = i.getSettingsStore().getKeyStore("personal_home").getKeyStore("seen_welcome_animation");
                        (0, a(368198).K)({
                            store: t,
                            transaction: e,
                            value: r
                        })
                    }
                })
            }

            function o(e) {
                let {
                    environment: t,
                    tipType: r,
                    completed: i
                } = e, s = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let o = s.getPersonalHomeTipsSettings(),
                    n = { ...o,
                        progress_data: { ...o.progress_data,
                            [r]: {
                                completed: i
                            }
                        }
                    };
                (0, a(377796).createAndCommit)({
                    userAction: "LearnHomePanel.updateProgress",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                personal_home_tips_settings: n
                            }
                        })
                    }
                })
            }

            function n(e) {
                let {
                    environment: t,
                    hide: r
                } = e, i = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i) return;
                let s = { ...i.getPersonalHomeTipsSettings(),
                    hide_completed: r
                };
                (0, a(377796).createAndCommit)({
                    userAction: "LearnHomePanel.hideCompleted",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                personal_home_tips_settings: s
                            }
                        })
                    }
                })
            }

            function d(e) {
                let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                t && (0, a(377796).createAndCommit)({
                    environment: e,
                    userAction: "personalHomeActions.markPersonalHomeSidebarItemClicked",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                personal_home_sidebar_item_clicked_at: Date.now()
                            }
                        })
                    }
                })
            }

            function l(e) {
                let {
                    blockId: t,
                    enabledFeatures: r,
                    userId: i
                } = e, s = (0, a(722371).WP)(r).flatMap(([e, t]) => {
                    if (!t) return [];
                    switch (e) {
                        case "tasks":
                            return [(0, a(933062).NY)("myTasksAssignedToMeCollectionView")];
                        case "customDb":
                            let r = (0, a(933062).NY)("customDb");
                            return [r && (0, a(235029).cf)({
                                userId: i,
                                viewBlockId: r
                            })];
                        case "similarUsersAndTrending":
                            return [(0, a(933062).NY)("similarUsersCollectionView"), (0, a(933062).NY)("trendingCollectionView")];
                        case "recents":
                        case "templates":
                        case "tips":
                        case "calendar":
                        case "suggested":
                        case "trending":
                        case "shortcuts":
                            return [];
                        default:
                            (0, a(722371).HB)(e)
                    }
                }).filter(a(722371).O9), {
                    isHomeKey: o,
                    homeCollectionViewIdsKey: n
                } = (0, a(683397).h)(t);
                a(467008).A.set(o, !0), a(467008).A.set(n, s)
            }
            a.d(t, {
                F$: () => d,
                Oh: () => l,
                Qs: () => n,
                Wy: () => r,
                aX: () => s,
                it: () => o,
                tL: () => i
            }), a(898992), a(354520), a(430670)
        },
        208847: (e, t, a) => {
            a.d(t, {
                ke: () => c,
                cj: () => m,
                Oc: () => u,
                aQ: () => p
            });
            var r = a(296540);
            let i = {
                    LazyAiLandingPageExperimentSwitcher: new(a(815048)).O2("LazyAiLandingPageExperimentSwitcher", () => Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(35837), a.e(25867), a.e(88595), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(43444), a.e(23979), a.e(73259), a.e(87971), a.e(4779), a.e(55067), a.e(50354), a.e(14231), a.e(18406), a.e(97615), a.e(48095), a.e(10188), a.e(18802), a.e(20957), a.e(53157), a.e(58033), a.e(79563), a.e(6782), a.e(74936), a.e(5309), a.e(76060), a.e(2209)]).then(a.bind(a, 929092)))
                },
                s = (0, a(815048)._h)(i.LazyAiLandingPageExperimentSwitcher, e => e.AiLandingPageExperimentSwitcher);
            var o = a(474848);
            let n = (0, a(109939).YK)({
                    experimentSwitcherTooltip: {
                        id: "aiLandingPageExperimentSwitcherTooltip",
                        defaultMessage: "[dev only] experience switcher"
                    },
                    chatHistoryTooltip: {
                        id: "aiSidebarItem.askNotionAi.history.tooltip",
                        defaultMessage: "Chat history"
                    }
                }),
                d = {
                    tooltip: {
                        width: 200
                    },
                    shortcutLabel: {
                        color: a(632079).Tj.text.inverseSecondary
                    },
                    style0: {
                        display: "flex",
                        flexDirection: "row",
                        marginInlineEnd: -4,
                        justifyContent: "center",
                        gap: 3
                    }
                },
                l = {
                    tooltip: {
                        width: 200
                    },
                    shortcutLabel: {
                        color: a(632079).Tj.text.inverseSecondary
                    }
                };

            function c(e) {
                let {
                    styles: t
                } = e, r = (0, a(682985).K8)(() => "home_available" === a(563591).default.getState().type, []);
                return (0, o.jsx)(a(51831).m, {
                    content: () => (0, o.jsxs)("div", {
                        style: l.tooltip,
                        children: [(0, o.jsx)("div", {
                            children: (0, o.jsx)(a(109939).sA, {
                                id: "sidebarPersonalHomeButton.tooltip",
                                defaultMessage: "Notion AI, recent pages, and more"
                            })
                        }), (0, o.jsx)(a(693592).A, {
                            style: l.shortcutLabel,
                            name: "openHome"
                        })]
                    }),
                    disableTooltip: r,
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, o.jsx)(a(590422).Q, { ...e,
                        style: a(132261).DX.baseSidebarItem,
                        hoveredStyle: null == t ? void 0 : t.buttonHoveredStyle,
                        onClick: () => {
                            a(346472).A.open()
                        },
                        children: (0, o.jsx)(a(380559).u, {
                            left: (0, o.jsx)(a(16275).I, {
                                icon: a(153828).P,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            disableMobileBorder: !0,
                            children: (0, o.jsx)(a(109939).sA, {
                                id: "sidebarPersonalHomeButton.label",
                                defaultMessage: "Home"
                            })
                        })
                    })
                })
            }

            function u() {
                return p.tooltipNoAi
            }
            let p = (0, a(109939).YK)({
                    tooltipNoAi: {
                        id: "sidebarPersonalHomeButton.tooltipNoAi",
                        defaultMessage: "See recent pages, upcoming tasks & more"
                    },
                    label: {
                        id: "sidebarPersonalHomeButton.label",
                        defaultMessage: "Home"
                    },
                    oldHomeLabel: {
                        id: "sidebarPersonalHomeButton.oldHomeLabel",
                        defaultMessage: "Old home"
                    }
                }),
                m = r.memo(function(e) {
                    let {
                        styles: t
                    } = e, i = (0, a(533992).v3)(), l = (0, a(682985).K8)(() => {
                        let e = a(728372).AppStoreSidebarSpaceViewStore.state;
                        if (e) return a(933062).x$(e)
                    }, []), c = (0, a(682985).K8)(() => {
                        let e = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                        return !!e && a(933062).Nh(e.id)
                    }, []), m = (0, a(682985).K8)(() => "home_available" === a(563591).default.getState().type, []), h = (0, a(682985).K8)(() => {
                        let e = null == l ? void 0 : l.getModel();
                        return e && l && (0, a(492569).Q)({
                            model: e,
                            getRecordModel: l.getRecordModel,
                            pageVisitSource: a(254656).y8.SidebarHome,
                            addPagePrefix: (0, a(700473).wasRequestedOnAlternateDomain)()
                        })
                    }, [l]), g = (0, a(853284).U)(), {
                        sidebarTooltipStore: S,
                        sidebarItemHoverStore: b,
                        handleFocus: f,
                        handleBlur: v,
                        handleMouseMove: y,
                        handleMouseLeave: w
                    } = (0, a(783242).W)(), x = (0, r.useCallback)(() => {
                        (0, a(160856).Wy)(i), (0, a(160856).F$)(i), (0, a(167552).ZL)({
                            environment: i,
                            from: "sidebar"
                        }), m && (0, a(160856).tL)(i), a(550830).default.isVisible() && (0, a(477810).VI)({
                            environment: i
                        })
                    }, [i, m]), A = (0, a(960253).I)(() => ({
                        linkBoxStyle: { ...a(132261).DX.baseSidebarItem,
                            ...c && a(132261).DX.currentSelectedSidebarItem
                        }
                    }), [c]), M = (0, a(682985).O$)(b), _ = (0, a(682985).K8)(() => u(), []), j = (0, r.useCallback)(() => {
                        let {
                            isActionButtonFocused: e,
                            isActionButtonHovered: t,
                            isActionButton2Focused: r,
                            isActionButton2Hovered: i
                        } = M;
                        return t ? (0, o.jsx)(a(109939).sA, { ...n.chatHistoryTooltip
                        }) : i ? (0, o.jsx)(a(109939).sA, { ...n.experimentSwitcherTooltip
                        }) : e ? (0, o.jsx)(a(109939).sA, { ...n.chatHistoryTooltip
                        }) : r ? (0, o.jsx)(a(109939).sA, { ...n.experimentSwitcherTooltip
                        }) : (0, o.jsxs)("div", {
                            style: d.tooltip,
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)(a(109939).sA, { ..._
                                })
                            }), (0, o.jsx)(a(693592).A, {
                                style: d.shortcutLabel,
                                name: "openHome"
                            })]
                        })
                    }, [M, _]);
                    return (0, o.jsx)(a(51831).m, {
                        store: S,
                        content: j,
                        disableTooltip: m,
                        originGap: 6,
                        textWrap: !0,
                        placement: "right",
                        children: e => (0, o.jsx)(a(590422).Q, { ...e,
                            style: A.linkBoxStyle,
                            hoveredStyle: null == t ? void 0 : t.buttonHoveredStyle,
                            href: h,
                            onClick: x,
                            onFocus: t => {
                                var a;
                                null == (a = e.onFocus) || a.call(e, t), f(t)
                            },
                            onBlur: t => {
                                var a;
                                null == (a = e.onBlur) || a.call(e, t), v()
                            },
                            "aria-current": c ? "page" : void 0,
                            children: (0, o.jsx)(a(380559).u, {
                                left: (0, o.jsx)(a(16275).I, {
                                    icon: a(153828).P,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                disableMobileBorder: !0,
                                right: (0, o.jsx)("div", {
                                    style: d.style0,
                                    children: (0, o.jsx)(s, {
                                        sidebarItemHoverStore: b,
                                        sidebarTooltipStore: S
                                    })
                                }),
                                onMouseMove: y,
                                onMouseLeave: w,
                                children: (0, o.jsx)(a(109939).sA, { ...g ? p.oldHomeLabel : p.label
                                })
                            })
                        })
                    })
                })
        },
        212169: (e, t, a) => {
            a.d(t, {
                Ud: () => o,
                YD: () => s,
                c$: () => r,
                q_: () => i
            });
            let r = {
                    "sprints-onboarding": {
                        steps: [{
                            id: "current-sprint-view-tooltip"
                        }, {
                            id: "sprint-task-tooltip"
                        }, {
                            id: "complete-sprint-button-tooltip"
                        }]
                    },
                    "enhanced-qna-onboarding": {
                        steps: [{
                            id: "find-in-tooltip"
                        }, {
                            id: "mention-tooltip"
                        }]
                    },
                    "jira-sync-onboarding": {
                        steps: [{
                            id: "all-projects-tooltip"
                        }, {
                            id: "all-issues-tooltip"
                        }, {
                            id: "database-views-and-filters-tooltip"
                        }, {
                            id: "settings-to-setup-projects-and-issues"
                        }]
                    },
                    "project-management-import-onboarding": {
                        steps: [{
                            id: "your-teamspace-tooltip"
                        }, {
                            id: "all-projects-tooltip"
                        }, {
                            id: "navigate-to-project-tasks-tooltip"
                        }, {
                            id: "project-customization-tooltip"
                        }, {
                            id: "related-tasks-database-views-tooltip"
                        }]
                    },
                    "ai-comment-onboarding": {
                        steps: [{
                            id: "ai-comment-onboarding-tooltip"
                        }]
                    },
                    database_onboarding: {
                        steps: [{
                            id: "database_onboarding_status_property_tooltip"
                        }, {
                            id: "database_onboarding_add_property_tooltip"
                        }, {
                            id: "database_onboarding_database_page_tooltip"
                        }, {
                            id: "database_onboarding_board_view_tooltip"
                        }]
                    },
                    "new-user-home-workspace-tour": {
                        steps: [{
                            id: "teamspaces"
                        }]
                    }
                },
                i = "completed",
                s = "dismissed";

            function o(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        213039: (e, t, a) => {
            a.d(t, {
                M: () => s
            }), a(296540);
            var r = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                s = (0, a(104509).wt)("sliders", i, "default")
        },
        252426: (e, t, a) => {
            a.d(t, {
                a: () => i,
                h: () => r
            });
            let r = .5,
                i = .3
        },
        292239: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var r = a(296540),
                i = a(474848);

            function s({
                scrollerStore: e,
                type: t,
                dividerColor: o,
                errorMargin: n = 4
            }) {
                let d = (0, a(682985).K8)(() => e.state.elementRef, [e]),
                    l = (0, a(239160).Xg)(d),
                    c = (0, a(239160).CR)(d),
                    u = (0, a(239160).sj)(d),
                    p = (0, a(239160).yE)(d),
                    m = (0, a(239160).o7)(d),
                    h = (0, a(239160).HJ)(d),
                    g = (0, r.useMemo)(() => {
                        if (!e) return !1;
                        switch (t) {
                            case "top":
                                return Math.round(p) > n;
                            case "bottom":
                                return Math.abs(Math.round(p) - (c - m)) > n;
                            case "left":
                                return Math.round(u) > n;
                            case "right":
                                return Math.abs(Math.round(u) - (l - h)) > n
                        }
                    }, [e, t, n, l, c, u, p, m, h]),
                    S = "left" === t || "right" === t,
                    b = (0, a(960253).I)(() => ({
                        divider: {
                            flexShrink: 0,
                            boxShadow: g ? S ? `1px 0 0 ${o??a(632079).Tj.border.secondaryTranslucent}` : `0 1px 0 ${o??a(632079).Tj.border.secondaryTranslucent}` : "0 0 0 transparent",
                            transition: "box-shadow 300ms",
                            ...S ? {
                                width: 1,
                                height: "100%",
                                marginInlineStart: -1
                            } : {
                                height: 1,
                                width: "100%",
                                marginTop: -1
                            },
                            zIndex: 99
                        }
                    }), [S, g, o]);
                return (0, i.jsx)("div", {
                    style: b.divider
                })
            }
        },
        303322: (e, t, a) => {
            a.d(t, {
                y: () => i
            });
            let r = (0, a(109939).YK)({
                favorites: {
                    id: "sidebar.favoritesSection.header",
                    defaultMessage: "Favorites"
                },
                private: {
                    id: "sidebar.privateSection.header",
                    defaultMessage: "Private"
                },
                shared: {
                    id: "sidebar.sharedSection.header",
                    defaultMessage: "Shared"
                },
                recents: {
                    id: "sidebar.recentsSection.header",
                    defaultMessage: "Recents"
                },
                myMeetings: {
                    id: "sidebar.meetingsSection.header",
                    defaultMessage: "AI meeting notes"
                },
                teamspaces: {
                    id: "sidebarOutliner.teamsSection.teamsLabel",
                    defaultMessage: "Teamspaces"
                },
                agents: {
                    id: "sidebar.agentsSection.header",
                    defaultMessage: "Agents"
                },
                meetings_today: {
                    id: "sidebar.slipperySlope.meetingsToday.heading",
                    defaultMessage: "Upcoming events"
                }
            });

            function i(e, t) {
                return t.formatMessage(r[e])
            }
        },
        330602: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            let r = a(546605).Store.createValue(!1)
        },
        337439: (e, t, a) => {
            a.d(t, {
                p: () => r
            });
            async function r() {
                return (await a.e(32675).then(a.bind(a, 271417))).navigateToLibraryPage
            }
        },
        348295: (e, t, a) => {
            a.d(t, {
                $: () => r
            });
            let r = a(381453).Bj(e => new(a(345426)).ComputedStore(() => {
                let t = a(728372).AppStoreMainEditorCurrentBlockStore.state,
                    r = t && t.isCollectionView(),
                    i = (0, a(548124).getChatPanelState)(e),
                    s = (null == i ? void 0 : i.isOpen) ? ? !1;
                return a(200083).A.state.isKeyboardMode && !a(330602).A.state && !a(11446).A.isActive() && !r && !a(930179).default.state.open && !a(847591).Ay.state.open && !(0, a(659262).y)() && 0 === a(465361).A.state.banners.length && !a(585823).gZ.state && !a(75170).A.state.open && !s
            }, {
                debugName: "appHelpers.shouldHideTopbarStore"
            }))
        },
        398126: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                presentIcon: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.72 1.77 14.56 15.51",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.625 4.535a2.765 2.765 0 0 1 3.307-2.711l.07.014a3.26 3.26 0 0 1 2.01 1.297 3.34 3.34 0 0 1 2.044-1.309c1.706-.34 3.319.96 3.319 2.71 0 .558-.166 1.079-.452 1.514h.777c.87 0 1.575.705 1.575 1.575v1.9c0 .613-.35 1.144-.861 1.404V15.7c0 .87-.705 1.575-1.575 1.575H5.16c-.87 0-1.575-.705-1.575-1.575v-4.77a1.58 1.58 0 0 1-.861-1.405v-1.9c0-.87.705-1.575 1.575-1.575h.776a2.75 2.75 0 0 1-.451-1.515m6 2.765v2.55H15.7c.18 0 .325-.145.325-.325v-1.9A.325.325 0 0 0 15.7 7.3zm-1.25 0H4.3a.325.325 0 0 0-.325.325v1.9c0 .18.145.325.325.325h5.075zm0-1.25V5.038c0-.96-.678-1.786-1.618-1.974l-.07-.014a1.515 1.515 0 1 0-.297 3zm3.25 0c.83-.008 1.5-.683 1.5-1.515 0-.95-.882-1.671-1.824-1.483a2.084 2.084 0 0 0-1.676 2.035v.963zm-2 5.05v4.925h4.214c.18 0 .325-.145.325-.325v-4.6zm-1.25 0h-4.54v4.6c0 .18.146.325.326.325h4.214z"
                    })
                },
                i = (0, a(104509).wt)("present", r, "default")
        },
        417066: (e, t, a) => {
            a.d(t, {
                P: () => i
            });
            let r = new Map;

            function i({
                environment: e,
                skipServerFetch: t,
                includeTopSpaces: r = !1,
                limit: o
            }) {
                return (0, a(97668).Yb)(async () => await s({
                    environment: e,
                    includeTopSpaces: r,
                    limit: o,
                    skipServerFetch: t
                }), [e, t, r, o])
            }
            async function s(e) {
                let {
                    environment: t,
                    includeTopSpaces: a,
                    limit: i,
                    skipServerFetch: s
                } = e, o = t.currentUser.id, n = `${a}-${i??"default"}`, d = r.get(n);
                if (d && d.userId === o) return d.response;
                if (s) return;
                let l = await t.api.callMainCellApi({
                    eventName: "hasJoinableSpaces",
                    environment: t,
                    data: {
                        includeTopSpaces: a,
                        limit: i
                    }
                });
                if ("failed" !== l.type && o) return r.set(n, {
                    userId: o,
                    response: l.data
                }), l.data
            }
        },
        455205: (e, t, a) => {
            a.r(t), a.d(t, {
                FETCHABLE_TEAM_TYPES: () => o,
                fetchUnfetchedTeams: () => d,
                fetchUnfetchedTeamsFromLocalStorage: () => c,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => m,
                getTeamMetadataFromStore: () => g,
                getTeamStore: () => h,
                refetchTeams: () => l
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520);
            var r = () => a(988752);
            async function i(e) {
                let {
                    actorUserId: t,
                    targetUserId: r,
                    spaceId: i,
                    teamTypes: s,
                    teamIds: o,
                    environment: n
                } = e;
                if (!(0, a(422280).GL)({
                        actorUserId: t,
                        targetUserId: r,
                        teamTypes: s
                    })) throw new(a(101787)).qQk("User does not have permission to fetch teams for another user.");
                let d = await n.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: n,
                    data: {
                        spaceId: i,
                        teamTypes: Array.from(s),
                        teamIds: "all" === o ? void 0 : Array.from(o),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, a(958692).X7)() && void 0,
                        targetUserId: r
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: i
                    }
                });
                if ("failed" === d.type) throw d.error;
                let {
                    teams: l,
                    hasUnjoinedActiveTeams: c
                } = d.data;
                return {
                    teams: l,
                    ...void 0 !== c && {
                        hasUnjoinedActiveTeams: c
                    }
                }
            }
            let s = new(a(245541)).R({
                    key: "localStorageTeams",
                    namespace: a(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                o = ["Joined", "UnjoinedActive", "Archived"];
            async function n(e) {
                let {
                    userId: t,
                    spaceId: o,
                    teamTypesToUpdate: n,
                    teamIdsToUpdate: d,
                    environment: l,
                    canTruncateRecordMap: c,
                    sort: u
                } = e, p = r().E.getOrCreateUnit(t, o);
                if (0 === n.size || "all" !== d && 0 === d.size) return void await p.pendingUpdates;
                let m = i({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: o,
                    teamTypes: n,
                    teamIds: d,
                    environment: l,
                    canTruncateRecordMap: c,
                    sort: u
                });
                r().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: o,
                        fetchedTeamsPromise: m,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: n,
                        teamIdsToUpdate: d
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: r,
                            teamsResponse: i
                        } = e;
                        if (!a(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: o
                        } = i, n = o.filter(e => "Joined" === e.type), d = o.filter(e => "UnjoinedActive" === e.type), l = o.filter(e => "Archived" === e.type), c = n.concat(d, l).slice(0, 1e3);
                        s.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [r] : { ...i,
                                    teams: c
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: o,
                        teamsResponse: {
                            teams: Object.values(p.teams),
                            hasUnjoinedActiveTeams: p.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teamTypes: i,
                    environment: s,
                    canTruncateRecordMap: o,
                    sort: d
                } = e, l = r().E.getOrCreateUnit(t, a), c = new Set(Array.from(i.values()).filter(e => "server" !== l.lastFetchSourceOfTeamType[e]));
                await n({
                    userId: t,
                    spaceId: a,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: "all",
                    environment: s,
                    canTruncateRecordMap: o,
                    sort: d
                })
            }
            async function l(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teamIds: i,
                    environment: s
                } = e, d = r().E.getOrCreateUnit(t, a), l = new Set(o.filter(e => "server" === d.lastFetchSourceOfTeamType[e]));
                await n({
                    userId: t,
                    spaceId: a,
                    teamTypesToUpdate: l,
                    teamIdsToUpdate: i,
                    environment: s
                })
            }

            function c() {
                let e = s.getState();
                for (let t in e)
                    for (let a in e[t]) {
                        let i = r().E.getOrCreateUnit(t, a),
                            s = new Set(o.filter(e => "none" === i.lastFetchSourceOfTeamType[e]));
                        0 !== s.size && r().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: a,
                            fetchedTeamsPromise: Promise.resolve(e[t][a]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: s,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    teamTypes: i,
                    environment: s
                } = e;
                return await d({
                    userId: t,
                    spaceId: a.id,
                    teamTypes: i,
                    environment: s
                }), r().E.readTeams(t, a.id, i).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    environment: r
                } = e;
                return await u({
                    userId: t,
                    spaceStore: a,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: r
                })
            }
            async function m(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    environment: r
                } = e;
                return await u({
                    userId: t,
                    spaceStore: a,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: r
                })
            }

            function h(e) {
                let {
                    teamId: t,
                    spaceStore: r
                } = e;
                return a(681735).h.createChildStore(r, {
                    table: a(832375).yKj,
                    id: t
                })
            }

            function g(e) {
                var t;
                let {
                    teamStore: i,
                    userId: s,
                    spaceStore: o
                } = e, n = r().E.readMembershipCount({
                    userId: s,
                    spaceId: o.id,
                    teamId: i.id
                }), d = i.getArchivedBy() ? "Archived" : (0, a(220530).f)({
                    userId: s,
                    teamStore: i,
                    userPermissionGroups: a(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? "Joined" : "UnjoinedActive", l = (0, a(228091).a)({
                    teamStore: i,
                    userId: s,
                    userPermissionGroups: a(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? ? "none";
                return {
                    id: i.id,
                    title: i.getName() ? ? "",
                    icon: null == (t = i.getIcon()) ? void 0 : t.icon,
                    type: d,
                    membershipSummary: n,
                    lastEditedTime: 0 === i.getLastEditedTime() ? void 0 : i.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: i.getDisablePublicAccess(),
                        disableGuests: i.getDisableGuests(),
                        disableExport: i.getDisableExport()
                    },
                    teamRole: l,
                    isDefaultTeam: i.isDefault(),
                    accessLevel: i.getTeamAccessLevel(),
                    description: i.getDescription()
                }
            }
        },
        471108: (e, t, a) => {
            a.d(t, {
                A: () => s
            }), a(581454), a(296540);
            var r = a(474848);
            let i = {
                display: "flex",
                alignItems: "center",
                marginBottom: 11
            };

            function s({
                skipFadeinDelay: e
            }) {
                let {
                    isElectronMac: t,
                    isTablet: o,
                    isAndroid: n
                } = (0, a(533992).Y0)(), d = (0, a(533992).v3)(), l = (0, a(682985).O$)(a(584257).b), c = t && !l, u = (0, a(682985).O$)(a(984858).sidebarExpandedStore), {
                    paddingTop: p,
                    paddingLeft: m
                } = (0, a(682985).K8)(() => {
                    let {
                        WindowSizeStore: e
                    } = d;
                    return {
                        paddingTop: e.getSafePaddingTopPx(0),
                        paddingLeft: e.getSafePaddingLeftPx(0)
                    }
                }, [d]), h = (0, a(682985).K8)(() => u ? a(984858).sidebarWidthStore.state : 0, [u]), g = (0, a(960253).I)(() => {
                    let e = {
                            width: 20,
                            height: 20,
                            borderRadius: 4
                        },
                        t = {
                            height: 10,
                            minHeight: 10,
                            borderRadius: 10
                        };
                    return {
                        sidebar: {
                            backgroundColor: a(632079).Tj.background.secondary,
                            boxShadow: `inset calc(var(--direction, 1) * -1px) 0 0 0 ${a(632079).Tj.border.secondary}`,
                            display: u ? "flex" : "none",
                            minWidth: h,
                            flexDirection: "column",
                            padding: "12px 14px",
                            paddingInlineStart: Math.max(m, 14),
                            ...o && n ? {
                                paddingTop: p + 10
                            } : {},
                            overflow: "hidden"
                        },
                        heroSection: {
                            paddingTop: 36 * !!c,
                            marginBottom: 22,
                            display: "flex",
                            alignItems: "center"
                        },
                        heroSectionIcon: {
                            padding: "1px",
                            ...e,
                            width: 22,
                            height: 22
                        },
                        heroSectionTitle: {
                            width: 177,
                            marginInlineStart: 8,
                            ...t
                        },
                        toplevelMenu: {
                            marginBottom: 20,
                            width: 78,
                            ...t
                        },
                        toplevelMenuLast: {
                            marginBottom: 36,
                            width: 135,
                            ...t
                        },
                        sectionHeader: {
                            marginBottom: 14,
                            width: 56,
                            ...t
                        },
                        pageIcon: { ...e
                        },
                        pageTitle: {
                            marginInlineStart: 8,
                            ...t
                        }
                    }
                }, [u, h, c, p, m, o, n]), S = (0, r.jsxs)("div", {
                    style: g.heroSection,
                    children: [(0, r.jsx)(a(795830).P, {
                        style: g.heroSectionIcon,
                        emphasized: !0
                    }), (0, r.jsx)(a(795830).P, {
                        style: g.heroSectionTitle,
                        emphasized: !0
                    })]
                }), b = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a(795830).P, {
                        style: g.toplevelMenu,
                        emphasized: !0
                    }), (0, r.jsx)(a(795830).P, {
                        style: g.toplevelMenu,
                        emphasized: !0
                    }), (0, r.jsx)(a(795830).P, {
                        style: g.toplevelMenu,
                        emphasized: !0
                    }), (0, r.jsx)(a(795830).P, {
                        style: g.toplevelMenuLast,
                        emphasized: !0
                    })]
                }), f = (0, r.jsx)(a(795830).P, {
                    style: g.sectionHeader,
                    emphasized: !0
                }), v = a(87337).J.map((t, s) => t.map((t, o) => {
                    var n;
                    return (0, r.jsxs)("div", {
                        style: { ...!e && (0 === (n = s) ? {} : {
                                animation: `1s ease-in ${n}s 1 normal both running fadein`
                            }),
                            ...i
                        },
                        children: [(0, r.jsx)(a(795830).P, {
                            style: g.pageIcon,
                            emphasized: !0
                        }), (0, r.jsx)(a(795830).P, {
                            style: { ...g.pageTitle,
                                width: 80 + 20 * t
                            },
                            emphasized: !0
                        })]
                    }, `${s}-${o}`)
                }));
                return (0, r.jsxs)("div", {
                    style: g.sidebar,
                    children: [S, b, f, v]
                })
            }
        },
        476743: (e, t, a) => {
            a.d(t, {
                a: () => r
            });

            function r() {
                return (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        487415: (e, t, a) => {
            a.d(t, {
                O: () => s
            }), a(296540);
            var r = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.42 3.97 12.16 12.06",
                    directional: !0,
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "m5.492 4.158 5.4 5.4a.625.625 0 0 1 0 .884l-5.4 5.4a.625.625 0 1 1-.884-.884L9.566 10 4.608 5.042a.625.625 0 1 1 .884-.884"
                        }), (0, r.jsx)("path", {
                            d: "m16.392 10.442-5.4 5.4a.625.625 0 0 1-.884-.884L15.066 10l-4.958-4.958a.625.625 0 0 1 .884-.884l5.4 5.4a.625.625 0 0 1 0 .884"
                        })]
                    })
                },
                s = (0, a(104509).wt)("arrowChevronDoubleForward", i, "default")
        },
        505134: (e, t, a) => {
            a.d(t, {
                G: () => r
            });

            function r() {
                let e = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore);
                return (0, a(682985).K8)(() => {
                    if (null != e && e.isReady()) return (0, a(916804).I)(e)
                }, [e])
            }
        },
        508609: (e, t, a) => {
            a.d(t, {
                A: () => i,
                g: () => r
            });
            let r = a(546605).Store.createValue(null, {
                name: "InAppActivityOverlayElemStore"
            });

            function i(e) {
                r.setState(e)
            }
        },
        552013: (e, t, a) => {
            function r({
                environment: e,
                notionApps: t
            }) {
                let i = a(728372).AppStoreSidebarSpaceViewStore.state;
                i && (0, a(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.moveNotionApp",
                    environment: e,
                    canUndo: !0,
                    cellTarget: i.pointer.spaceId ? {
                        spaceWithId: i.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        a(380762).AG(i, e, { ...i.getSettings(),
                            notion_apps: {
                                order: t
                            }
                        })
                    }
                })
            }

            function i(e) {
                let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                t && (0, a(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.hideNotionAppsSection",
                    environment: e,
                    canUndo: !0,
                    cellTarget: t.pointer.spaceId ? {
                        spaceWithId: t.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        let r = t.getNotionAppsOrder();
                        a(380762).AG(t, e, {
                            notion_apps: {
                                hidden: !0,
                                order: r
                            }
                        })
                    }
                })
            }

            function s(e) {
                let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                t && (0, a(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.showNotionAppsSection",
                    environment: e,
                    canUndo: !0,
                    cellTarget: t.pointer.spaceId ? {
                        spaceWithId: t.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        let r = t.getNotionAppsOrder();
                        a(380762).AG(t, e, {
                            notion_apps: {
                                hidden: !1,
                                order: r
                            }
                        })
                    }
                })
            }
            a.d(t, {
                G6: () => r,
                nQ: () => i,
                sh: () => s
            })
        },
        577280: (e, t, a) => {
            a.d(t, {
                w: () => i
            }), a(296540);
            var r = a(474848);

            function i(e) {
                let {
                    labelType: t
                } = e, i = "invited" === t ? a(805186).S.invitedLabel : "external" === t ? a(805186).S.externalLabel : a(805186).S.guestLabel;
                return (0, r.jsx)(a(746434).E, {
                    content: (0, r.jsx)(a(109939).sA, { ...i
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        609920: (e, t, a) => {
            a.d(t, {
                o: () => r
            });
            let r = (0, a(815048)._h)(new(a(815048)).O2("SidebarLibraryButton", async () => await Promise.all([a.e(36556), a.e(55373), a.e(36192), a.e(49806), a.e(79974), a.e(45414), a.e(52466), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(45213), a.e(5721), a.e(57688), a.e(64696), a.e(76135), a.e(16922), a.e(31190), a.e(41882)]).then(a.bind(a, 133474))), e => e.SidebarLibraryButton)
        },
        615079: (e, t, a) => {
            function r(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_space_switcher",
                        eventProperties: {}
                    }
                })
            }

            function i(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "space_switcher_select_space",
                        eventProperties: {}
                    }
                })
            }

            function s(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "space_switcher_logout_click",
                        eventProperties: {}
                    }
                })
            }

            function o(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "multi_account_add_or_create_account_clicked",
                        eventProperties: t
                    }
                })
            }

            function n(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "quick_workspace_creation_click",
                        eventProperties: {}
                    }
                })
            }
            a.d(t, {
                Bw: () => i,
                PL: () => r,
                Pz: () => s,
                dD: () => n,
                ff: () => o
            })
        },
        622110: (e, t, a) => {
            a.d(t, {
                c: () => r
            });

            function r() {
                let e = (0, a(505134).G)(),
                    t = (0, a(839362).W)(),
                    r = (0, a(682985).K8)(() => {
                        var e;
                        return null == (e = a(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettings()) ? void 0 : e.hide_meetings_tab
                    }, []);
                return !e && !!t && !r
            }
        },
        638501: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                plusSmallIcon: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.74 2.74 10.52 10.52",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"
                    })
                },
                i = (0, a(104509).wt)("plusSmall", r, "small")
        },
        646220: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                notionTemplateTintableIcon: () => s
            }), a(296540);
            var r = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, r.jsx)("path", {
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                s = (0, a(104509).wt)("notionTemplateTintable", i, "tintable")
        },
        659262: (e, t, a) => {
            a.d(t, {
                L: () => i,
                y: () => s
            });
            let r = Number(a(627179).Xb);

            function i() {
                var e, t;
                if (a(205885).A.state.online) {
                    if (null != (e = a(420153).A.state.connectionError) && e.startTime && Date.now() - (null == (t = a(420153).A.state.connectionError) ? void 0 : t.startTime) < r) return;
                    return a(420153).A.state.connectionError
                }
            }

            function s() {
                return !!i()
            }
        },
        691886: (e, t, a) => {
            a.d(t, {
                h: () => n
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var r = a(296540);

            function i(e) {
                a(449473).B8.setState({ ...a(449473).B8.state,
                    width: e.width
                }), (0, a(123538).Q)()
            }
            var s = a(474848);
            let o = new Set(["page", "secondary_sidebar"]);

            function n({
                type: e,
                sidebarRef: t
            }) {
                let p = (0, a(109939).tz)(),
                    b = (0, a(533992).v3)(),
                    [f, v] = (0, a(768397).s)(),
                    y = (0, r.useRef)(null),
                    w = (0, a(421573).A)(f, y),
                    x = (0, r.useRef)(!1),
                    A = (0, r.useCallback)(() => {
                        u({
                            isResizing: !1
                        }, e)
                    }, [e]),
                    M = (0, r.useCallback)(() => {
                        var t, a;
                        return t = b, a = e, void(x.current || g(a, t), u({
                            isResizing: !1
                        }, a))
                    }, [b, e]),
                    _ = (0, r.useCallback)(r => {
                        if (t.current) {
                            var s = r,
                                o = b,
                                n = t.current,
                                d = e,
                                l = x;
                            switch (a(239134).clear(o), l.current = !0, d) {
                                case "page":
                                    (0, a(137032).z)({
                                        width: m(s.currentX, n, d),
                                        environment: o
                                    });
                                    break;
                                case "update":
                                    i({
                                        width: m(s.currentX, n, d),
                                        environment: o
                                    });
                                    break;
                                case "peek":
                                    (0, a(17729).A)({
                                        width: m(s.currentX, n, d),
                                        environment: o
                                    });
                                    break;
                                case "secondary_sidebar":
                                    a(515492).Ay.setWidth(m(s.currentX, n, d));
                                    break;
                                default:
                                    (0, a(722371).HB)(d)
                            }
                            return
                        }
                    }, [b, e, t]),
                    j = (0, r.useCallback)(() => {
                        var t, r, i;
                        return t = b, r = e, i = x, void((0, a(471e3).I)({
                            environment: t
                        }), i.current = !1, u({ ...a(984858).sidebarResizingStore.state,
                            isResizing: !0
                        }, r))
                    }, [b, e]),
                    {
                        device: I
                    } = b,
                    k = (0, a(682985).O$)(a(395364).A),
                    T = (0, a(682985).K8)(() => ({
                        cursor: "col-resize",
                        height: "100%",
                        width: 12
                    }), [e]),
                    P = (0, a(682985).K8)(() => {
                        var t, r;
                        let i, s;
                        return t = e, r = b, i = (0, a(712358).K)(r), {
                            position: "absolute",
                            insetInlineStart: (s = "peek" === t || "update" === t) ? 0 : void 0,
                            insetInlineEnd: s ? void 0 : 0,
                            width: 1,
                            flexGrow: 0,
                            zIndex: "peek" === t ? 109 : 1,
                            top: i ? 0 : -1,
                            bottom: i ? 0 : -1,
                            pointerEvents: "auto",
                            backfaceVisibility: "hidden"
                        }
                    }, [e, b]),
                    C = (0, a(682985).K8)(() => {
                        var t, a;
                        let r, i, s = c(e);
                        return t = e, a = s, r = l(t), (i = d(t)) === r ? 0 : (a - i) / (r - i)
                    }, [e]),
                    B = (0, r.useRef)(!1),
                    [E, D] = (0, r.useState)(null);

                function R(e) {
                    D(e.clientY)
                }
                let L = (0, r.useCallback)(() => {
                    u({
                        isResizerHovered: B.current || v
                    }, e)
                }, [v, e]);

                function H() {
                    B.current = !0, L()
                }

                function O() {
                    B.current = !1, L()
                }(0, r.useEffect)(() => {
                    L()
                }, [v, L]);
                let z = (0, r.useCallback)(() => {
                        t.current && S(10, t.current, e, b)
                    }, [e, b, t]),
                    U = (0, r.useCallback)(() => {
                        t.current && S(-10, t.current, e, b)
                    }, [e, b, t]),
                    K = (0, a(619157).A1)() && !o.has(e) || !(0, a(619157).A1)() && o.has(e) ? "left" : "right",
                    N = "left" === K ? U : z,
                    V = "left" === K ? z : U,
                    W = (0, r.useCallback)(() => {
                        g(e, b)
                    }, [e, b]);
                return k || I.isChromebook ? null : (0, s.jsx)(a(369064).N, {
                    capture: v,
                    debugName: "SidebarResizer",
                    onLeft: N,
                    onRight: V,
                    onUp: a(763230).D_,
                    onDown: a(763230).D_,
                    onTab: a(763230).D_,
                    onUntab: a(763230).D_,
                    onEnter: W,
                    children: (0, s.jsx)(a(51831).m, {
                        content: () => (0, s.jsx)(h, {
                            type: e
                        }),
                        delayThreshold: 0,
                        originRectTransform: e => E ? new DOMRect(e.left, E, 0, 0) : e,
                        placement: "page" === e || "secondary_sidebar" === e ? "right" : "left",
                        originGap: 10,
                        children: e => (0, s.jsx)("div", {
                            style: P,
                            ...(0, a(63390).A)(e, {
                                onMouseMove: H,
                                onMouseLeave: O,
                                onMouseEnter: R
                            }),
                            children: (0, s.jsx)(a(245483).A, {
                                onDraggableDragStart: j,
                                onDraggableDragMove: _,
                                onDraggableDragEnd: M,
                                onDraggableDragCancel: A,
                                disableVerticalEdgeScroll: !0,
                                disableHorizontalEdgeScroll: !0,
                                render: e => (0, s.jsx)("div", {
                                    ref: w,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-label": p.formatMessage({
                                        id: "sidebarResizer.tooltip.resizeLabel",
                                        defaultMessage: "Resize with left and right arrow keys"
                                    }),
                                    "aria-orientation": "vertical",
                                    "aria-valuenow": Math.round(100 * C),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    style: T,
                                    ...e
                                })
                            })
                        })
                    })
                })
            }

            function d(e) {
                switch (e) {
                    case "page":
                        return (0, a(828560).hw)() ? a(984858).SLIPPERY_SLOPE_SIDEBAR_MIN_WIDTH : a(984858).SIDEBAR_MIN_WIDTH;
                    case "update":
                        return a(449473).Iz;
                    case "peek":
                        return a(475097).SIDEPEEK_MIN_WIDTH;
                    case "secondary_sidebar":
                        return a(515492).WR;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function l(e) {
                switch (e) {
                    case "page":
                        return (0, a(828560).hw)() ? 600 : 480;
                    case "secondary_sidebar":
                        return a(515492).y8;
                    case "update":
                        return a(132261).aL;
                    case "peek":
                        return (0, a(447036).QX)();
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function c(e) {
                switch (e) {
                    case "page":
                        return a(984858).sidebarWidthStore.state;
                    case "secondary_sidebar":
                        let t = a(984858).sidebarExpandedStore.state,
                            r = a(352202).n5();
                        return t ? a(984858).sidebarWidthStore.state + r : r;
                    case "update":
                        return a(449473).B8.state.width;
                    case "peek":
                        return a(475097).default.state.preferredSidePeekWidth;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function u(e, t) {
                switch (t) {
                    case "page":
                        a(984858).sidebarResizingStore.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "update":
                        a(449473).B8.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "secondary_sidebar":
                        a(550830).default.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "peek":
                        a(984858).peekResizingStore.setState(e.isResizing ? ? !1);
                        break;
                    default:
                        (0, a(722371).HB)(t)
                }
            }

            function p(e, t) {
                let r = l(t),
                    i = d(t);
                return (0, a(627179).qE)({
                    value: e,
                    min: i,
                    max: r
                })
            }

            function m(e, t, r) {
                let i, s = (0, a(619157).A1)();
                switch (r) {
                    case "page":
                        i = s ? window.innerWidth - e : e;
                        break;
                    case "secondary_sidebar":
                        let o = a(984858).sidebarExpandedStore.state ? a(984858).sidebarWidthStore.state : 0;
                        i = s ? window.innerWidth - e - o : e - o;
                        break;
                    case "peek":
                    case "update":
                        let n = t.getBoundingClientRect();
                        i = s ? e - n.left : n.right - e;
                        break;
                    default:
                        (0, a(722371).HB)(r)
                }
                return p(i, r)
            }

            function h({
                type: e
            }) {
                let t, r = (0, a(533992).v3)(),
                    i = (0, a(682985).K8)(() => (function(e, t) {
                        switch (e) {
                            case "page":
                                return (0, a(712358).K)(t);
                            case "update":
                                return (0, a(953099).N)(t);
                            case "peek":
                                return a(475097).default.state.open;
                            case "secondary_sidebar":
                                return a(550830).default.isOpen();
                            default:
                                (0, a(722371).HB)(e)
                        }
                    })(e, r), [e, r]),
                    o = a(632079).Tj.text.inverseSecondary,
                    n = (0, s.jsx)(a(693592).A, {
                        name: "toggleSidebar"
                    }),
                    d = e => (0, s.jsx)("span", {
                        style: {
                            color: o
                        },
                        children: e
                    });
                if (i) switch (e) {
                    case "secondary_sidebar":
                    case "update":
                        t = (0, s.jsx)(a(109939).sA, {
                            defaultMessage: "Close <invertedcolor>Click</invertedcolor>",
                            id: "sidebarResizer.tooltip.closeMessage.noShortcut",
                            values: {
                                invertedcolor: d,
                                keyboardShortcut: n
                            }
                        });
                        break;
                    default:
                        t = (0, s.jsx)(a(109939).sA, {
                            defaultMessage: "Close <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                            id: "sidebarResizer.tooltip.closeMessage",
                            values: {
                                invertedcolor: d,
                                keyboardShortcut: n
                            }
                        })
                } else t = (0, s.jsx)(a(109939).sA, {
                    defaultMessage: "Lock open <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                    id: "sidebarResizer.tooltip.lockMessage",
                    values: {
                        invertedcolor: d,
                        keyboardShortcut: n
                    }
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [t ? (0, s.jsxs)(s.Fragment, {
                        children: [t, (0, s.jsx)("br", {})]
                    }) : null, (0, s.jsx)(a(109939).sA, {
                        defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                        id: "sidebarResizer.tooltip.resizeMessage",
                        values: {
                            invertedcolor: d,
                            keyboardShortcut: n
                        }
                    })]
                })
            }

            function g(e, t) {
                switch (e) {
                    case "page":
                        (0, a(16822).h)({
                            environment: t,
                            isExpanded: !a(984858).sidebarExpandedStore.state,
                            from: "sidebar_resizer",
                            saveDetailsSidebarPreference: !0
                        }), a(984858).sidebarOpenStore.setState(!1);
                        break;
                    case "update":
                        (0, a(911046).u)({
                            environment: t,
                            isExpanded: !(0, a(953099).N)(t),
                            from: "drag",
                            saveDetailsSidebarPreference: !0
                        });
                        break;
                    case "peek":
                        a(270912).VN({
                            environment: t,
                            from: "resizer_click"
                        });
                        break;
                    case "secondary_sidebar":
                        a(477810).VI({
                            environment: t
                        });
                        break;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function S(e, t, r, s) {
                let o = c(r) + e;
                switch (r) {
                    case "page":
                        (0, a(137032).z)({
                            width: p(o, r),
                            environment: s
                        });
                        break;
                    case "update":
                        i({
                            width: p(o, r),
                            environment: s
                        });
                        break;
                    case "peek":
                        (0, a(17729).A)({
                            width: p(o, r),
                            environment: s
                        });
                        break;
                    case "secondary_sidebar":
                        let n = a(984858).sidebarExpandedStore.state ? a(984858).sidebarWidthStore.state : 0;
                        a(515492).Ay.setWidth(p(o - n, r));
                        break;
                    default:
                        (0, a(722371).HB)(r)
                }
            }
        },
        752153: (e, t, a) => {
            function r(e, t) {
                return i(d(e, t))
            }

            function i(e) {
                return void 0 !== e && (e === a(212169).q_ || e === a(212169).YD)
            }

            function s(e, t) {
                if (i(t)) return;
                let r = a(212169).c$[e],
                    s = r.steps.findIndex(e => e.id === t);
                return -1 === s ? r.steps[0].id : s === r.steps.length - 1 ? a(212169).q_ : r.steps[s + 1].id
            }

            function o(e, t) {
                let a = d(e, t);
                if (!(!a || i(a))) return s(t, a)
            }

            function n(e, t) {
                let r = d(e, t);
                if (r) {
                    var s;
                    let e = a(212169).c$[t];
                    if (i(r)) return null == (s = e.steps.at(-1)) ? void 0 : s.id;
                    let o = e.steps.findIndex(e => e.id === r);
                    return -1 !== o && 0 !== o ? e.steps[o - 1].id : void 0
                }
            }

            function d(e, t) {
                var r;
                if (!e) return;
                let i = ((null == (r = e.getSettings()) ? void 0 : r.tutorials) || {})[t];
                return void 0 === i ? a(212169).c$[t].steps[0].id : i
            }
            a.d(t, {
                KD: () => n,
                gt: () => d,
                i9: () => o,
                ll: () => i,
                tb: () => s,
                x$: () => r
            }), a(18107), a(967357)
        },
        766970: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                xMarkFillIcon: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                i = (0, a(104509).wt)("xMarkFill", r, "fill")
        },
        782622: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                pageFillIcon: () => s
            }), a(296540);
            var r = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M9.95 2.375h-3.7A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125V8.3H12a2.05 2.05 0 0 1-2.05-2.05zM13.3 14.25a.55.55 0 0 1-.55.55h-5.5a.55.55 0 1 1 0-1.1h5.5a.55.55 0 0 1 .55.55m-.55-1.95h-5.5a.55.55 0 1 1 0-1.1h5.5a.55.55 0 0 1 0 1.1"
                        }), (0, r.jsx)("path", {
                            d: "M15.665 7.2a2.1 2.1 0 0 0-.412-.581L11.63 2.997c-.17-.17-.367-.31-.581-.412V6.25c0 .525.425.95.95.95z"
                        })]
                    })
                },
                s = (0, a(104509).wt)("pageFill", i, "fill")
        },
        783242: (e, t, a) => {
            a.d(t, {
                W: () => o
            });
            var r = a(296540),
                i = () => a(546605);
            class s extends i().Store {
                getInitialState() {
                    return {
                        isSidebarItemHovered: !1,
                        isSidebarItemFocused: !1,
                        isActionButtonHovered: !1,
                        isActionButtonFocused: !1,
                        isActionButton2Hovered: !1,
                        isActionButton2Focused: !1
                    }
                }
            }

            function o() {
                let e = (0, a(682985).uB)(void 0, a(235146).A),
                    t = (0, a(682985).uB)(void 0, s),
                    i = (0, r.useCallback)(e => {
                        let r = e.target;
                        r instanceof HTMLElement && (0, a(768397).p)(r) && t.setState({ ...t.state,
                            isSidebarItemFocused: !0
                        })
                    }, [t]),
                    o = (0, r.useCallback)(() => {
                        t.setState({ ...t.state,
                            isSidebarItemFocused: !1
                        })
                    }, [t]),
                    n = (0, r.useCallback)(() => {
                        a(400198).A.state.isDragging || t.setState({ ...t.state,
                            isSidebarItemHovered: !0
                        })
                    }, [t]),
                    d = (0, r.useCallback)(() => {
                        t.setState({ ...t.state,
                            isSidebarItemHovered: !1
                        })
                    }, [t]);
                return {
                    sidebarTooltipStore: e,
                    sidebarItemHoverStore: t,
                    handleFocus: i,
                    handleBlur: o,
                    handleMouseMove: n,
                    handleMouseLeave: d
                }
            }
        },
        783892: (e, t, a) => {
            a.d(t, {
                C: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.375 4.125H4.5A2.125 2.125 0 0 0 2.375 6.25v.965h7zm-7 7.41v-3.07h7v3.07zm0 1.25v.965c0 1.174.951 2.125 2.125 2.125h4.875v-3.09zm8.25 0v3.09H15.5a2.125 2.125 0 0 0 2.125-2.125v-.965zm7-1.25v-3.07h-7v3.07zm0-5.285v.965h-7v-3.09H15.5c1.174 0 2.125.951 2.125 2.125"
                    })
                },
                i = (0, a(104509).wt)("viewTableFill", r, "fill")
        },
        789701: (e, t, a) => {
            a.d(t, {
                y: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                i = (0, a(104509).wt)("inbox", r, "default")
        },
        789722: (e, t, a) => {
            a.d(t, {
                W: () => r
            });
            let r = (0, a(109939).YK)({
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
        792492: (e, t, a) => {
            a.d(t, {
                D: () => r,
                P: () => i
            });
            let r = (0, a(109939).YK)({
                    agents: {
                        id: "sidebar.agents.button",
                        defaultMessage: "Agents"
                    },
                    notionAi: {
                        id: "sidebar.notionAi.button",
                        defaultMessage: "Notion AI"
                    },
                    inbox: {
                        id: "sidebar.inbox.button",
                        defaultMessage: "Inbox"
                    },
                    messages: {
                        id: "sidebar.messages.button",
                        defaultMessage: "Messages"
                    },
                    feed: {
                        id: "sidebarFeedButton.label",
                        defaultMessage: "Feed"
                    },
                    meetings: {
                        id: "sidebar.meetings.button",
                        defaultMessage: "Meetings"
                    },
                    tasks: {
                        id: "sidebar.tasks.button",
                        defaultMessage: "My Tasks"
                    },
                    library: {
                        id: "sidebar.library.button",
                        defaultMessage: "Library"
                    },
                    workers: {
                        id: "sidebar.workers.button",
                        defaultMessage: "Workers"
                    },
                    help: {
                        id: "sidebar.appSwitcher.help.caption",
                        defaultMessage: "Help"
                    },
                    trial: {
                        id: "sidebar.trial.button",
                        defaultMessage: "Trial Home"
                    }
                }),
                i = {
                    inbox: a(789701).y,
                    feed: a(128382).N,
                    library: a(360610).H,
                    workers: a(85071).integrationIcon,
                    present: a(398126).presentIcon
                }
        },
        799843: (e, t, a) => {
            a.d(t, {
                DG: () => l,
                OH: () => n,
                nl: () => o,
                x$: () => d
            });
            let r = (0, a(109939).YK)({
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
                s = (0, a(109939).YK)({
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

            function o(e, {
                useCompactFormat: t,
                useUltraCompactFormat: n,
                useLowercase: d,
                roundDownYears: l,
                useWeeks: c,
                showDaysToOneWeek: u,
                nowOverrideMs: p = Date.now()
            } = {}) {
                let m = n ? i : t ? s : r,
                    h = new Date(e),
                    g = a(962299).A.getIntl().locale,
                    S = new Date(p),
                    b = Number(S) - e;
                if (b >= a(627179).Gq && l) {
                    let e = Math.floor(b / a(627179).Gq);
                    return a(962299).A.formatMessage(m.year, {
                        numYears: e
                    })
                }
                if (h.getFullYear() !== S.getFullYear()) return h.toLocaleDateString(g, n ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let f = Math.floor(b / a(627179).nD);
                if (f < 28 && f > 7 && c || u && 7 === f) {
                    let e = Math.floor(f / 7);
                    return a(962299).A.formatMessage(m.week, {
                        numWeeks: e
                    })
                }
                if (u && f > 6 || !u && f >= 3) return h.toLocaleDateString(g, {
                    month: "short",
                    day: "numeric"
                });
                if (f >= 1) return a(962299).A.formatMessage(m.day, {
                    numDays: f
                });
                let v = Math.floor(b / a(627179).pT);
                if (v >= 1) return a(962299).A.formatMessage(m.hour, {
                    numHours: v
                });
                let y = Math.floor(b / a(627179).Xb);
                return y >= 1 ? a(962299).A.formatMessage(m.minute, {
                    numMinutes: y
                }) : d ? a(962299).A.formatMessage(m.second).toLocaleLowerCase() : a(962299).A.formatMessage(m.second)
            }

            function n(e, t) {
                let r = t - e,
                    i = Math.floor(r / a(627179).Gq),
                    s = Math.floor(r / a(627179).nD),
                    o = Math.floor(r / a(627179).pT),
                    n = Math.floor(r / a(627179).Xb),
                    d = Math.floor(r / a(627179).TD);
                return i >= 1 ? a(962299).A.formatMessage(a(362008).jX.year, {
                    numYears: i
                }) : s >= 1 ? a(962299).A.formatMessage(a(362008).jX.day, {
                    numDays: s
                }) : o >= 1 ? a(962299).A.formatMessage(a(362008).jX.hour, {
                    numHours: o
                }) : n >= 1 ? a(962299).A.formatMessage(a(362008).jX.minute, {
                    numMinutes: n
                }) : a(962299).A.formatMessage(a(362008).jX.second, {
                    numSeconds: d
                })
            }

            function d(e, t) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function l(e) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        799891: (e, t, a) => {
            a.d(t, {
                y: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                i = (0, a(104509).wt)("chatBubble", r, "default")
        },
        802160: (e, t, a) => {
            a.r(t), a.d(t, {
                Sidebar: () => T
            });
            var r = a(296540),
                i = a(474848);
            let s = {
                position: "fixed",
                top: 0,
                insetInlineStart: 0,
                insetInlineEnd: 0,
                bottom: 0,
                zIndex: 2,
                pointerEvents: "none",
                overflow: "hidden"
            };

            function o() {
                return (0, a(83208).X)("in_app_activity_renderer") ? (0, i.jsx)("div", {
                    ref: a(508609).A,
                    style: s
                }) : null
            }
            let n = (0, a(815048)._h)(new(a(815048)).O2("SidebarContentContainerSlipperySlope", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(98629), a.e(42838), a.e(30085), a.e(8142), a.e(8360), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(31243), a.e(86662), a.e(14886), a.e(39225), a.e(87971), a.e(2626), a.e(64453), a.e(4779), a.e(76361), a.e(56308), a.e(55067), a.e(83490), a.e(58360), a.e(82538), a.e(12690), a.e(60262), a.e(72805), a.e(2276), a.e(90735), a.e(50354), a.e(3723), a.e(40716), a.e(14231), a.e(78311), a.e(4287), a.e(44724), a.e(48095), a.e(69193), a.e(67098), a.e(10188), a.e(75484), a.e(97711), a.e(18802), a.e(59133), a.e(20957), a.e(32664), a.e(3055), a.e(67252), a.e(20491), a.e(70506), a.e(62146), a.e(23639), a.e(24394), a.e(72143), a.e(53478), a.e(38998), a.e(78295), a.e(38539), a.e(75651), a.e(31061)]).then(a.bind(a, 544212))), e => e.SidebarContentContainerSlipperySlope),
                d = (0, a(815048)._h)(new(a(815048)).O2("SidebarFooter", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(35837), a.e(25867), a.e(88595), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(43444), a.e(23979), a.e(73259), a.e(87971), a.e(4779), a.e(55067), a.e(50354), a.e(14231), a.e(18406), a.e(97615), a.e(48095), a.e(10188), a.e(18802), a.e(20957), a.e(53157), a.e(58033), a.e(79563), a.e(6782), a.e(74936), a.e(5309), a.e(76060), a.e(2209)]).then(a.bind(a, 125843))), e => e.SidebarFooter),
                l = (0, a(815048)._h)(new(a(815048)).O2("SidebarInboxButton", async () => await Promise.all([a.e(36556), a.e(55373), a.e(36192), a.e(49806), a.e(79974), a.e(45414), a.e(52466), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(45213), a.e(5721), a.e(57688), a.e(64696), a.e(76135), a.e(16922), a.e(31190), a.e(41882)]).then(a.bind(a, 751953))), e => e.SidebarInboxButton);
            a(898992), a(737550);
            let c = (0, a(815048)._h)(new(a(815048)).O2("SidebarAiButton", async () => await Promise.all([a.e(36556), a.e(55373), a.e(36192), a.e(49806), a.e(79974), a.e(45414), a.e(52466), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(45213), a.e(5721), a.e(57688), a.e(64696), a.e(76135), a.e(16922), a.e(31190), a.e(41882)]).then(a.bind(a, 936418))), e => e.SidebarAiButton),
                u = (0, a(815048)._h)(new(a(815048)).O2("SidebarMeetingsButton", async () => await Promise.all([a.e(36556), a.e(55373), a.e(36192), a.e(49806), a.e(79974), a.e(45414), a.e(52466), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(45213), a.e(5721), a.e(57688), a.e(64696), a.e(76135), a.e(16922), a.e(31190), a.e(41882)]).then(a.bind(a, 594049))), e => e.SidebarMeetingsButton),
                p = {
                    height: void 0,
                    alignSelf: "stretch"
                },
                m = {
                    shortcutLabel: {
                        color: a(632079).Tj.text.inverseSecondary
                    }
                };

            function h() {
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Find pages & information from your workspace",
                            id: "sidebar.quickFindSearch.tooltip"
                        })
                    }), (0, i.jsx)(a(693592).A, {
                        style: m.shortcutLabel,
                        name: "openLinkMenuOrOpenSearch"
                    })]
                })
            }
            let g = r.memo(function(e) {
                    let {
                        styles: t,
                        isPublicPageSearch: r
                    } = e, s = (0, a(533992).v3)(), o = (0, a(682985).K8)(() => (0, a(153262).ic)(), []), n = (0, a(682985).K8)(() => {
                        let e = a(838448).default.getActiveSession(),
                            t = null == e ? void 0 : e.assistantConfigurationStoreState,
                            r = "chat" === s.RouterStore.state.route.name;
                        return !!t && (0, a(815644).or)({
                            configurationState: t
                        }) && r
                    }, [s]);
                    return (0, i.jsx)(a(51831).m, {
                        content: () => (0, i.jsx)(h, {}),
                        originGap: 6,
                        placement: "right",
                        children: e => (0, i.jsx)(a(64960).Ay, { ...e,
                            onClick: () => {
                                a(635257)._N({
                                    environment: s,
                                    analyticsFrom: "sidebar",
                                    isPublicPageSearch: r
                                })
                            },
                            hoveredStyle: null == t ? void 0 : t.buttonHoveredStyle,
                            style: { ...a(132261).DX.baseSidebarItem,
                                ...n && a(132261).DX.currentSelectedSidebarItem
                            },
                            children: (0, i.jsx)(a(380559).u, {
                                left: (0, i.jsx)(a(16275).I, {
                                    icon: a(330274).magnifyingGlassIcon,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                style: o,
                                rightStyle: p,
                                children: (0, i.jsx)(a(109939).sA, {
                                    defaultMessage: "Search",
                                    id: "sidebar.search.label"
                                })
                            })
                        })
                    })
                }),
                S = {
                    container: {
                        flexGrow: 0,
                        flexShrink: 0,
                        paddingBottom: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        cursor: "pointer",
                        marginInlineStart: a(132261).bG,
                        marginInlineEnd: a(132261).bG
                    },
                    sidebarItemHoveredStyle: {
                        background: a(632079).Tj.sidebarItemSelectedBackground
                    }
                },
                b = {
                    sidebarItemButtonStyle: a(132261).DX.baseSidebarItem,
                    buttonHoveredStyle: S.sidebarItemHoveredStyle,
                    sidebarItemActiveStyle: a(132261).DX.currentSelectedSidebarItem
                };

            function f() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(917441).Rx)(),
                    s = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore),
                    {
                        currentUserRootStore: o,
                        currentUserStore: n,
                        sidebarSpaceViewStore: d
                    } = (0, a(682985).K8)(() => ({
                        currentUserRootStore: a(728372).AppStoreCurrentUserRootStore.state,
                        currentUserStore: a(728372).AppStoreCurrentUserStore.state,
                        sidebarSpaceViewStore: a(728372).AppStoreSidebarSpaceViewStore.state
                    }), []),
                    p = (0, a(718012).V)(),
                    m = (0, a(153223).u)(),
                    h = (0, a(682985).K8)(() => (0, a(484712).U)(d), [d]),
                    f = (null == t ? void 0 : t.isMember) || h,
                    y = (0, a(682985).K8)(() => (0, a(367584).i)({
                        spaceStore: s,
                        spaceViewStore: d,
                        userRootStore: o,
                        currentUserStore: n
                    }), [s, o, n, d]),
                    w = function({
                        environment: e
                    }) {
                        let t = (0, a(682985).K8)(() => {
                                let e = a(728372).AppStoreSidebarSpaceStore.state;
                                if (e) return e
                            }, []),
                            i = (0, a(876252).$)(),
                            s = (0, a(682985).K8)(() => {
                                let {
                                    results: e
                                } = a(995735).B.state, r = null == t ? void 0 : t.getSpaceId();
                                return e.some(e => e.spaceId === r && (e.unreceived.notificationIds.length > 0 || Object.values(e.unread).some(e => e > 0)))
                            }, [t]),
                            o = (0, a(83208).X)("hide_sidebar_inbox_and_trash"),
                            n = (0, a(682985).K8)(() => {
                                var t;
                                let r = (0, a(904434).R$)(e);
                                return (null == r || null == (t = r.getSettings()) ? void 0 : t.adoption_sidebar_inbox) ? ? !1
                            }, [e]),
                            [d] = (0, a(97668).Yb)(async () => {
                                if (n || !i || !t) return null;
                                let a = await e.api.callCellCompatibleApi({
                                    eventName: "getNotificationLog",
                                    environment: e,
                                    data: {
                                        spaceId: t.id,
                                        size: 1,
                                        type: "unread_and_read"
                                    },
                                    userId: i.id,
                                    cellNavigation: {
                                        spaceId: t.id
                                    }
                                });
                                return "failed" !== a.type && a.data.notificationIds.length > 0
                            }, [t, i, e, n]),
                            l = s || ((null == d ? void 0 : d.value) ? ? !1);
                        return (0, r.useEffect)(() => {
                            let t;
                            l && !n && (t = (0, a(904434).R$)(e)) && (0, a(377796).createAndCommit)({
                                environment: e,
                                userAction: "userSettingsActions.markAdoptionInboxShown",
                                canUndo: !1,
                                cellTarget: "main",
                                perform: e => {
                                    (0, a(862759).m)({
                                        userSettingsStore: t,
                                        transaction: e,
                                        data: {
                                            adoption_sidebar_inbox: !0
                                        }
                                    })
                                }
                            })
                        }, [e, l, n]), n || !o || l
                    }({
                        environment: e
                    }),
                    x = (0, r.useMemo)(() => ({
                        buttonHoveredStyle: S.sidebarItemHoveredStyle
                    }), []),
                    A = (0, a(784331).cd)(),
                    M = (0, a(682985).K8)(() => (0, a(916804).I)(s), [s]),
                    _ = (0, a(622110).c)(),
                    j = (0, a(682985).K8)(() => (0, a(494144).o)(d), [d]),
                    I = (0, a(648188).W)(),
                    k = (0, a(83208).X)("agent_skills_page"),
                    T = (0, a(83208).X)("software_factory_page"),
                    P = (0, a(682985).K8)(() => a(886556).z.isAiEnabled(), []),
                    C = (0, a(329534).y)();
                return (0, i.jsxs)("div", {
                    style: S.container,
                    children: [I ? (0, i.jsx)(a(955118).B, {}) : void 0, "new_trial_home" === C ? (0, i.jsx)(a(841935).td, {
                        store: s,
                        showProgressBar: !0
                    }) : void 0, (0, i.jsx)(a(678765).S, {}), (0, i.jsx)(g, {
                        styles: x
                    }), f ? (0, i.jsx)(a(24884).n, {
                        step: "home",
                        inAppCalloutStore: p,
                        teamIds: m,
                        renderTooltip: e => (0, i.jsx)(a(715539)._T, { ...e
                        }),
                        children: (0, i.jsx)(a(208847).cj, {
                            styles: x
                        })
                    }) : void 0, _ ? (0, i.jsx)(u, {
                        styles: x,
                        renderLoading: () => (0, i.jsx)(v, {
                            icon: a(681875).a,
                            message: a(792492).D.meetings
                        })
                    }) : void 0, y ? (0, i.jsx)(a(208847).ke, {
                        styles: x
                    }) : void 0, P ? (0, i.jsx)(c, {
                        styles: x,
                        renderLoading: () => (0, i.jsx)(v, {
                            icon: a(273344).aiFaceIcon,
                            message: a(792492).D.notionAi
                        })
                    }) : void 0, w ? (0, i.jsx)(l, {
                        styles: x,
                        renderLoading: () => (0, i.jsx)(v, {
                            icon: a(789701).y,
                            message: a(792492).D.inbox
                        })
                    }) : void 0, !A || j || M ? void 0 : (0, i.jsx)(a(609920).o, {
                        styles: x,
                        renderLoading: () => (0, i.jsx)(v, {
                            icon: a(360610).H,
                            message: a(792492).D.library
                        })
                    }), k ? (0, i.jsx)(a(652853).p, {
                        styles: b
                    }) : void 0, T ? (0, i.jsx)(a(80380).u, {
                        styles: b
                    }) : void 0, "old_trial_home" === C ? (0, i.jsx)(a(841935).td, {
                        store: s,
                        showProgressBar: !1
                    }) : void 0]
                })
            }

            function v({
                icon: e,
                message: t
            }) {
                let r = (0, a(109939).tz)();
                return (0, i.jsx)(a(380559).u, {
                    left: (0, i.jsx)(a(16275).I, {
                        icon: e,
                        colorVariant: "secondary",
                        size: "lg"
                    }),
                    children: r.formatMessage(t)
                })
            }
            a(672577);
            let y = {
                    SidebarBottomActions: new(a(815048)).O2("SidebarBottomActions", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(35837), a.e(25867), a.e(88595), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(43444), a.e(23979), a.e(73259), a.e(87971), a.e(4779), a.e(55067), a.e(50354), a.e(14231), a.e(18406), a.e(97615), a.e(48095), a.e(10188), a.e(18802), a.e(20957), a.e(53157), a.e(58033), a.e(79563), a.e(6782), a.e(74936), a.e(5309), a.e(76060), a.e(2209)]).then(a.bind(a, 97627)))
                },
                w = (0, a(815048)._h)(y.SidebarBottomActions, e => e.SidebarBottomActions),
                x = {
                    shortcutLabel: {
                        color: a(632079).Tj.text.inverseSecondary
                    }
                };

            function A(e) {
                let {
                    showTeamsOverflowButton: t,
                    visibleTeamsStores: s
                } = e, o = (0, a(533992).v3)(), {
                    sidebarSpaceStore: n,
                    sidebarSpaceViewStore: d
                } = (0, a(682985).K8)(() => ({
                    sidebarSpaceStore: a(728372).AppStoreSidebarSpaceStore.state,
                    sidebarSpaceViewStore: a(728372).AppStoreSidebarSpaceViewStore.state
                }), []), l = (0, a(682985).K8)(() => "inactive" !== a(563591).default.state.type, []), c = (0, r.useCallback)(e => {
                    (0, a(477810).ZT)({
                        environment: o,
                        contentType: "teams"
                    })
                }, [o]), u = (0, a(109939).tz)(), p = (0, a(303322).y)("teamspaces", u);
                return (0, i.jsx)(a(959526).s, {
                    content: (0, i.jsx)(a(615096).ty, {
                        type: a(171231).st,
                        from: "main_sidebar",
                        sectionLabel: p,
                        shouldPersistToggleState: !0,
                        spaceStore: n,
                        spaceViewStore: d,
                        showAddButton: !1,
                        labelTooltip: (0, i.jsx)(a(109939).sA, {
                            defaultMessage: "Teamspaces you have joined.",
                            id: "sidebarOutliner.teamsSection.tooltip"
                        }),
                        right: (0, i.jsx)(a(69371).N, {
                            type: "teamspaces",
                            spaceViewStore: d
                        }),
                        renderSidebar: ({
                            contentsAriaId: e
                        }) => (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a(679192).w, {
                                teams: s,
                                reorderable: !l,
                                id: e,
                                shouldPersistToggleState: !0,
                                teamOutlinerType: a(171231).st,
                                from: "main_sidebar"
                            }), t ? (0, i.jsx)(a(540048).H, {
                                onClick: c,
                                tooltipMessage: (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, i.jsx)(a(109939).sA, {
                                            defaultMessage: "Browse all teamspaces",
                                            id: "sidebar.openSidebarTeamBrowserButton.tooltip"
                                        })
                                    }), (0, i.jsx)(a(693592).A, {
                                        style: x.shortcutLabel,
                                        name: "toggleAllTeams"
                                    })]
                                }),
                                sidebarSectionType: "teamspaces"
                            }) : void 0]
                        })
                    }),
                    type: "teams"
                })
            }
            let M = {
                draggingStyle: {
                    opacity: .7
                },
                style1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: a(615096).kv,
                    paddingInlineStart: a(132261).bG,
                    paddingInlineEnd: a(132261).bG,
                    paddingBottom: 20
                }
            };

            function _({
                sidebarState: e
            }) {
                let {
                    spaceStore: t,
                    spaceViewStore: s,
                    currentUserRootStore: o,
                    currentUserStore: n,
                    currentUserSettingsStore: d
                } = (0, a(682985).K8)(() => {
                    let e = a(728372).AppStoreSidebarSpaceStore.state,
                        t = a(728372).AppStoreSidebarSpaceViewStore.state,
                        r = a(728372).AppStoreCurrentUserRootStore.state;
                    return {
                        spaceStore: e,
                        spaceViewStore: t,
                        currentUserRootStore: r,
                        currentUserStore: a(728372).AppStoreCurrentUserStore.state,
                        currentUserSettingsStore: a(728372).AppStoreCurrentUserSettingsStore.state
                    }
                }, []), {
                    showTeamSection: l,
                    showPrivateSection: c,
                    showSharedOverflowButton: u,
                    showPrivateOverflowButton: p,
                    showTeamsOverflowButton: m,
                    visibleTeamsStores: h,
                    showEmptySharedSection: g
                } = e, S = (0, a(533992).v3)(), b = !(0, a(682985).O$)(a(420153).l), f = (0, a(682985).K8)(() => (null == t ? void 0 : t.canEdit()) && b, [t, b]), v = (0, a(83208).X)("team_feed_as_any_other_db"), y = (0, a(784331).cd)(), x = (0, a(682985).K8)(() => s ? j("private", e, v) : [], [s, e, v]), I = (0, a(682985).K8)(() => s ? j("workspace", e, v) : [], [s, e, v]), k = (0, a(682985).K8)(() => (0, a(367584).i)({
                    spaceStore: t,
                    spaceViewStore: s,
                    userRootStore: o,
                    currentUserStore: n
                }), [t, o, n, s]), T = (0, a(85183).a)({
                    sidebarState: e,
                    showLockedSidebar: k,
                    isLibraryEnabled: y,
                    isPhone: !1
                }), P = T.find(a(171231).iu), C = (0, a(67499).S)(), B = (0, a(682985).K8)(() => void 0 !== s && (0, a(822209).X)({
                    environment: S,
                    spaceViewStore: s,
                    userSettingsStore: d
                }), [S, s, d]), E = (0, a(682985).K8)(() => {
                    if (s && t) return (0, a(576536).rE)({
                        typeWithTeam: {
                            type: "private"
                        },
                        spaceStore: t,
                        spaceViewStore: s
                    })
                }, [s, t]), D = (0, r.useCallback)(({
                    draggingStores: e
                }) => !!B && !!t && (0, a(576536).ox)({
                    environment: S,
                    draggingStores: e,
                    parentStore: E,
                    spaceStore: t,
                    pageContext: C
                }), [S, E, B, t, C]), {
                    value: R
                } = (0, a(815048).fJ)(a(411648).VI.duplicateActions), L = (0, r.useCallback)(e => {
                    (0, a(477810).ZT)({
                        environment: S,
                        contentType: "shared_pages"
                    }), a(707964).u4({
                        name: "panel_opened",
                        args: {
                            type: "shared"
                        }
                    })
                }, [S]), H = (0, a(993077).U2)(t), O = (0, r.useCallback)(async e => {
                    E && await a(245757).RM({
                        dropArgs: e,
                        environment: S,
                        type: "private",
                        isDroppingOnFullSection: !0,
                        parentStore: E,
                        duplicateActions: R,
                        spaceUserStore: H
                    })
                }, [R, S, E, H]);
                if (!x || !I) return null;
                let z = (0, i.jsx)(a(66467).Ay, {
                    shouldAnimateDrop: !0,
                    direction: "vertical",
                    keys: T,
                    gap: a(132261).sx,
                    draggingStyle: M.draggingStyle,
                    hoverCursorStyleOverride: "pointer",
                    renderKey: r => {
                        if ("favorites" === r) return y ? (0, i.jsx)(a(258381).L, {
                            sectionType: "favorites"
                        }) : (0, i.jsx)(a(615096).ty, {
                            type: "bookmarks",
                            from: "main_sidebar",
                            shouldPersistToggleState: !0,
                            spaceStore: t,
                            spaceViewStore: s,
                            showAddButton: !1,
                            labelTooltip: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Pages you have favorited.",
                                id: "sidebar.bookmarkedPagesSection.tooltip"
                            }),
                            right: s ? (0, i.jsx)(a(69371).N, {
                                type: "favorites",
                                spaceViewStore: s
                            }) : void 0,
                            renderSidebar: ({
                                labelAriaId: t,
                                contentsAriaId: r
                            }) => (0, i.jsx)(a(837764).W, {
                                type: "bookmarks",
                                sidebarState: e,
                                contentsAriaId: r,
                                labelAriaId: t
                            })
                        });
                        if ("meetings_today" !== r)
                            if ("recents" === r) return y ? (0, i.jsx)(a(258381).L, {
                                sectionType: "recents"
                            }) : void 0;
                            else if ("myMeetings" === r) return (0, i.jsx)(a(258381).L, {
                            sectionType: "myMeetings"
                        });
                        else if ("workspace" === r) return (0, i.jsx)(a(959526).s, {
                            content: (0, i.jsx)(a(615096).ty, {
                                type: "workspace",
                                from: "main_sidebar",
                                shouldPersistToggleState: !0,
                                spaceStore: t,
                                spaceViewStore: s,
                                showAddButton: b,
                                labelTooltip: (0, i.jsx)(a(109939).sA, {
                                    defaultMessage: "All workspace members can access these pages.",
                                    id: "sidebar.workspacePagesSection.tooltip"
                                }),
                                right: s ? (0, i.jsx)(a(69371).N, {
                                    type: "workspace",
                                    spaceViewStore: s
                                }) : void 0,
                                renderSidebar: ({
                                    labelAriaId: t,
                                    contentsAriaId: r
                                }) => (0, i.jsx)(a(837764).W, {
                                    type: "workspace",
                                    sidebarState: e,
                                    contentsAriaId: r,
                                    labelAriaId: t
                                })
                            }),
                            type: "workspace"
                        });
                        else if ("shared" === r) return y ? (0, i.jsx)(a(258381).L, {
                            sectionType: "shared"
                        }) : (0, i.jsx)(a(615096).ty, {
                            type: "shared",
                            from: "main_sidebar",
                            shouldPersistToggleState: !0,
                            spaceStore: t,
                            spaceViewStore: s,
                            showAddButton: !1,
                            labelTooltip: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Only people you shared with can access these pages.",
                                id: "sidebar.sharedPagesSection.tooltip"
                            }),
                            right: g || !s ? (0, i.jsx)(a(346813).Z, {}) : (0, i.jsx)(a(69371).N, {
                                type: "shared",
                                spaceViewStore: s
                            }),
                            renderSidebar: ({
                                labelAriaId: t,
                                contentsAriaId: r
                            }) => (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(a(837764).W, {
                                    type: "shared",
                                    sidebarState: e,
                                    contentsAriaId: r,
                                    labelAriaId: t
                                }), g ? (0, i.jsx)(a(866284).m, {}) : u && (0, i.jsx)(a(540048).H, {
                                    onClick: L,
                                    tooltipMessage: (0, i.jsx)(a(109939).sA, {
                                        defaultMessage: "All shared pages",
                                        id: "sidebar.openAllSharedPages.tooltip"
                                    }),
                                    sidebarSectionType: "shared"
                                })]
                            })
                        });
                        else if ("teamspaces" === r)
                            if (l) return (0, i.jsx)(A, {
                                showTeamsOverflowButton: m,
                                visibleTeamsStores: h,
                                isLibraryEnabled: y,
                                isFirstLibrarySection: "teamspaces" === P
                            });
                            else return (0, i.jsx)(a(945889).o, {});
                        else if ("private" === r) {
                            if (c) return y ? (0, i.jsx)(a(258381).L, {
                                sectionType: "private"
                            }) : (0, i.jsx)(a(472362).p, {
                                handleCanAcceptDrop: D,
                                handleDropOntoPrivateSection: O,
                                lastEditedSortedPrivateSection: B,
                                currentSpaceStore: t,
                                currentSpaceViewStore: s,
                                isTransactionQueueHealthy: b,
                                showPrivateOverflowButton: p
                            })
                        } else {
                            if ("agents" === r) return (0, i.jsx)(a(438390).K, {});
                            if ("notion_apps" === r) return (0, i.jsx)(a(774562).v, {});
                            (0, a(722371).HB)(r)
                        }
                    },
                    onDrop: (t, r) => {
                        s && (0, a(134604).h)({
                            environment: S,
                            sidebarState: e,
                            newSidebarOrder: (0, a(2681).v)({
                                newVisibleOrder: t,
                                previousFullOrder: T
                            }),
                            previousSidebarOrder: T,
                            dropArgs: r,
                            spaceViewStore: s
                        })
                    }
                });
                return (0, i.jsxs)(a(4458).VP, {
                    minHeight: "100%",
                    children: [(0, i.jsxs)("div", {
                        style: M.style1,
                        children: [z, f ? (0, i.jsx)(w, {}) : void 0]
                    }), (0, i.jsx)(a(612819).H, {})]
                })
            }

            function j(e, t, r) {
                return (0, a(576536).o_)({
                    typeWithTeam: {
                        type: e
                    },
                    sidebarState: t,
                    teamFeedAsAnyOtherDBEnabled: r
                })
            }
            let I = r.memo(function({
                    sidebarState: e
                }) {
                    let t = (0, a(682985).uB)(void 0, a(593423).A),
                        r = (0, a(718012).V)(),
                        s = (0, a(153223).u)(),
                        o = (0, a(853284).U)(),
                        n = (0, a(604306).r)("uxr_debug_onboarding_agent", {
                            disableExposureLogging: !0
                        }),
                        l = void 0 !== n && "control" !== n;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a(632890).G, {}), (0, i.jsx)(a(24884).n, {
                            step: "actions",
                            inAppCalloutStore: r,
                            teamIds: s,
                            renderTooltip: e => (0, i.jsx)(a(715539).Su, { ...e
                            }),
                            children: (0, i.jsx)(f, {})
                        }), (0, i.jsx)(a(7534).d, {
                            scrollerStore: t,
                            children: (0, i.jsx)(_, {
                                sidebarState: e
                            })
                        }), l && n ? (0, i.jsx)(a(108861).t, {
                            variant: n
                        }) : void 0, o ? void 0 : (0, i.jsx)(d, {
                            scrollerStore: t
                        })]
                    })
                }),
                k = r.memo(function({
                    isExpanded: e,
                    topPx: t
                }) {
                    let s = (0, a(533992).v3)(),
                        o = (0, a(917441).Rx)(),
                        n = !!o,
                        d = (0, a(168814).X)(),
                        l = (0, a(682985).K8)(() => {
                            var e;
                            if (!n) return !1;
                            let t = null == (e = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.id,
                                r = s.currentUser.id;
                            return !!t && !!r && a(295742).A.hasLoaded({
                                userId: r,
                                spaceId: t
                            })
                        }, [s, n]),
                        {
                            paddingTop: c,
                            paddingLeft: u,
                            paddingBottom: p
                        } = (0, a(682985).K8)(() => {
                            let {
                                WindowSizeStore: e
                            } = s;
                            return {
                                paddingTop: e.getSafePaddingTopPx(0),
                                paddingLeft: e.getSafePaddingLeftPx(0),
                                paddingBottom: e.getSafePaddingBottomPx(0)
                            }
                        }, [s]),
                        m = function({
                            isExpanded: e,
                            topPx: t,
                            paddingTop: r,
                            paddingLeft: i,
                            paddingBottom: s
                        }) {
                            return (0, a(960253).I)(() => ({
                                topLevelSidebar: {
                                    display: "flex",
                                    flexDirection: "column",
                                    height: e ? "100%" : "auto",
                                    maxHeight: e ? "100%" : `calc(100vh - ${3*t}px)`,
                                    justifyContent: "space-between",
                                    overflow: "hidden",
                                    position: "relative",
                                    paddingTop: r,
                                    paddingInlineStart: i,
                                    paddingBottom: s
                                }
                            }), [e, t, r, i, s])
                        }({
                            isExpanded: e,
                            topPx: t,
                            paddingTop: c,
                            paddingLeft: u,
                            paddingBottom: p
                        }),
                        h = (0, a(682985).K8)(() => {
                            var e;
                            return (0, a(59406).w)(s) && !!(null == (e = a(686494).A.state.publicPageData) ? void 0 : e.template)
                        }, [s]),
                        g = (0, a(682985).K8)(() => {
                            let {
                                shouldShowLoggedOutPublicSharingSidebar: e
                            } = a(875439);
                            return e(s)
                        }, [s]),
                        S = (0, a(682985).O$)(a(984858).sidebarShouldLogInitialRenderStore),
                        b = (0, r.useRef)(!1);
                    (0, r.useEffect)(() => {
                        b.current || (b.current = !0, (0, a(635339).yd)("sidebar_mounted"))
                    }, [null == o ? void 0 : o.isCached, l, d]);
                    let f = (0, r.useRef)(!1);
                    (0, r.useEffect)(() => {
                        l && !f.current && (f.current = !0)
                    }, [l]);
                    let v = (0, r.useRef)(!1);
                    (0, r.useEffect)(() => {
                        var e, t;
                        if (!l || v.current) return;
                        let r = null == (e = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.id,
                            i = null == (t = s.currentUser) ? void 0 : t.id;
                        r && i && (v.current = (0, a(435163).I)({
                            environment: s,
                            userId: i,
                            spaceId: r
                        }))
                    }, [l, s]), (0, r.useEffect)(() => {
                        var t, r;
                        if (!S) return;
                        if (null != o && o.isCached && (0, a(635339).yd)("initial_render_from_cache"), o && (0, a(635339).Hg)({
                                is_initial_page_render_done: d
                            }), !l) return void(0, a(635339).yd)("partial_render");
                        let i = a(635339).q6({
                            environment: s
                        });
                        if (!(null != i && i.initial_render)) return;
                        let n = i.initial_render_from_cache ? ? i.initial_render,
                            c = { ...a(635339).Tc(),
                                subMetrics: i,
                                show_workspace_section: null == o ? void 0 : o.showWorkspaceSection,
                                get_spaces_prefetch_type: null == (t = a(719100).i.cache.getPrefetchAnalytic("getSpaces")) ? void 0 : t.type,
                                get_user_shared_pages_in_space_prefetch_type: null == (r = a(719100).i.cache.getPrefetchAnalytic(`getUserSharedPagesInSpace(${null==o?void 0:o.spaceId})`)) ? void 0 : r.type,
                                is_expanded: e,
                                is_cached: !!i.initial_render_from_cache
                            },
                            u = (0, a(680007).getPageOriginOrPrewarmedTabAppStartTime)(s.RouterStore);
                        if (void 0 === u) {
                            a(329464).A.update(e => ({ ...e,
                                prewarmedTabSidebarRenderData: c
                            })), a(728372).default.setSidebarRendered(), a(984858).sidebarShouldLogInitialRenderStore.setState(!1);
                            return
                        }
                        a(680007).default.measure({
                            metricName: "sidebar.initial_render",
                            startTime: u,
                            endTime: n
                        }, {
                            data: c,
                            shouldSendIfStatsigNotInitialized: !0
                        }), a(728372).default.setSidebarRendered(), a(984858).sidebarShouldLogInitialRenderStore.setState(!1)
                    }, [s, e, S, null == o ? void 0 : o.showWorkspaceSection, l, o, d]);
                    let y = e => {
                        let t = e.currentTarget;
                        t instanceof Element && t.scrollTo({
                            left: 0,
                            top: 0,
                            behavior: "instant"
                        })
                    };
                    return h ? (0, i.jsx)("div", {
                        style: m.topLevelSidebar,
                        onScroll: y,
                        children: (0, i.jsx)(a(32957).o, {})
                    }) : g && e ? (0, i.jsx)("div", {
                        style: m.topLevelSidebar,
                        onScroll: y,
                        children: (0, i.jsx)(a(214410).V, {})
                    }) : o ? (0, i.jsx)("div", {
                        style: m.topLevelSidebar,
                        onScroll: y,
                        children: (0, i.jsx)(I, {
                            sidebarState: o
                        })
                    }) : (0, i.jsx)(i.Fragment, {})
                });

            function T({
                isExpanded: e,
                isElectronMac: t,
                isTablet: s
            }) {
                let d = (0, a(109939).tz)(),
                    l = (0, a(533992).v3)(),
                    c = (0, r.useRef)(null),
                    [u, p] = (0, r.useState)(!1),
                    m = (0, r.useRef)(e),
                    h = (0, a(682985).O$)(a(984858).sidebarWidthStore),
                    g = (0, a(682985).O$)(a(984858).sidebarOpenStore),
                    S = (0, a(682985).O$)(a(984858).sidebarResizingStore),
                    b = (0, a(682985).O$)(a(984858).sidebarHoverPreviewDisabledStore),
                    f = (0, a(682985).K8)(() => a(896597).A.state.isFullScreen, []),
                    v = S.isResizerHovered || S.isResizing,
                    y = (0, a(682985).K8)(() => {
                        var e;
                        return !!(null == (e = a(584257).A.state.preferences) ? void 0 : e.isVibrancyEnabled)
                    }, []),
                    w = (0, a(682985).O$)(a(825244).P),
                    x = (0, a(853284).U)();
                (0, r.useEffect)(() => {
                    !x || 0 !== h && h < a(984858).SLIPPERY_SLOPE_SIDEBAR_MIN_WIDTH && (0, a(137032).z)({
                        width: a(984858).SLIPPERY_SLOPE_SIDEBAR_MIN_WIDTH,
                        environment: l
                    })
                }, [l, x, h]), (0, r.useEffect)(() => {
                    let e = a(218744).default.getEligibleGroup({
                            experimentId: "prefetch_shared_and_private_pages",
                            enableEventTrailLogging: !0
                        }),
                        t = a(218744).default.getEligibleGroup({
                            experimentId: "enable_sidebar_state_cache",
                            enableEventTrailLogging: !0
                        }),
                        r = a(218744).default.getEligibleGroup({
                            experimentId: "enable_strict_render_completion",
                            enableEventTrailLogging: !0
                        }),
                        i = a(218744).default.getEligibleGroup({
                            experimentId: "defer_sidebar_loading_when_collapsed",
                            enableEventTrailLogging: !0
                        }),
                        s = l.currentUser.id;
                    s && (0, a(42491).v8)({
                        userId: s,
                        gates: {
                            prefetchSharedAndPrivatePages: "on" === e,
                            enableSidebarStateCache: "on" === t,
                            enableStrictRenderCompletion: "on" === r,
                            deferSidebarLoadingWhenCollapsed: "on" === i
                        }
                    })
                }, [l.currentUser.id]), (0, r.useEffect)(() => {
                    m.current = e
                }, [e]), (0, r.useEffect)(() => {
                    a(984858).sidebarAnimatingStore.setState(u)
                }, [u]);
                let A = S.isResizing || w,
                    M = (0, a(841690).N)() + a(132261).qe,
                    _ = (0, r.useCallback)(() => {
                        a(984858).sidebarMouseEnteredStore.setState(!0)
                    }, []),
                    j = (0, r.useCallback)(e => {
                        t && f && e.relatedTarget === window || a(984858).sidebarMouseEnteredStore.setState(!1)
                    }, [t, f]),
                    I = (0, a(682985).K8)(() => (0, a(875439).shouldShowLoggedOutPublicSharingSidebar)(l), [l]),
                    P = g && !I || e,
                    C = (0, a(960253).e)(),
                    B = (0, a(960253).I)(() => {
                        let t = `inset calc(var(--direction, 1) * -1px) 0 0 0 ${a(632079).Tj.border.secondary}`,
                            r = {
                                boxShadow: v ? `inset calc(var(--direction, 1) * -2px) 0 0 0 ${a(632079).Tj.border.primaryTranslucent}` : t,
                                ...y && {
                                    boxShadow: v ? `inset calc(var(--direction, 1) * -2px) 0 0 0 ${a(632079).Tj.border.primaryTranslucent}` : t
                                }
                            };
                        return {
                            container: {
                                order: a(866217).A.appCursorListener.sidebar,
                                flexGrow: 0,
                                flexShrink: 0,
                                pointerEvents: "none",
                                position: "relative",
                                zIndex: g && !e ? 202 : 111,
                                background: a(632079).Tj.background.secondary,
                                ...I ? {
                                    overflow: "hidden"
                                } : {},
                                ...y && { ..."light" === C ? {
                                        background: `rgba(255, 255, 255, ${a(252426).h-.05})`
                                    } : {
                                        background: "rgba(255, 255, 255, 0)"
                                    }
                                },
                                ...r
                            },
                            wrap: { ...x ? {} : {
                                    color: a(632079).Tj.text.accentPrimary,
                                    fontWeight: a(699422).Wy.medium
                                },
                                height: "100%"
                            },
                            resizer: {
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                bottom: 0,
                                insetInlineEnd: 0,
                                borderStartEndRadius: 8,
                                borderEndEndRadius: 8,
                                zIndex: -1,
                                display: e ? "none" : "block"
                            },
                            content: {
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                bottom: 0,
                                display: "flex",
                                flexDirection: "column",
                                width: I ? h : 0,
                                overflow: "visible",
                                zIndex: 9,
                                pointerEvents: "none"
                            },
                            pane: {
                                display: "flex",
                                flexDirection: "column",
                                height: e ? "100%" : "auto",
                                position: "relative",
                                pointerEvents: P ? "auto" : "none",
                                visibility: (!I || e || g) && (P || u) ? "visible" : "hidden",
                                ...y && { ...!e && {
                                        borderStartEndRadius: 8,
                                        borderEndEndRadius: 8,
                                        backdropFilter: "blur(20px) brightness(110%) saturate(90%)"
                                    }
                                }
                            },
                            paneBackground: {
                                display: e ? "none" : "block",
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                bottom: 0,
                                insetInlineEnd: 0,
                                borderStartEndRadius: 8,
                                borderEndEndRadius: 8,
                                zIndex: -1,
                                background: a(632079).Tj.background.elevated,
                                boxShadow: (!I || e || g) && (P || u) ? a(632079).Tj.shadow.outline.lg : void 0,
                                ...y && {
                                    background: "rgba(0, 0, 0, 0)"
                                }
                            }
                        }
                    }, [v, y, e, P, I, g, u, h, C, x]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a(654979).A, {
                        tag: "nav",
                        animate: {
                            width: e ? h : 0
                        },
                        skip: A,
                        "aria-hidden": P ? void 0 : "true",
                        "aria-label": d.formatMessage({
                            id: "sidebar.ariaLabel",
                            defaultMessage: "Sidebar"
                        }),
                        style: B.container,
                        className: "notion-sidebar-container",
                        ref: e => {
                            c.current = e, l.device.isElectron && (e ? a(984858).sidebarSizeObserver.observe(e) : a(984858).sidebarSizeObserver.destroy())
                        },
                        children: (0, i.jsx)("div", {
                            style: B.wrap,
                            children: (0, i.jsx)("div", {
                                style: B.content,
                                onMouseMove: e => {
                                    b || u || (0, a(705660).SQ)(e, a(705660).y$.SidebarMouseMove, () => {
                                        (0, a(868892).h)({
                                            fromElectron: !1
                                        })
                                    })
                                },
                                children: (0, i.jsxs)(a(654979).A, {
                                    animate: function({
                                        isExpanded: e,
                                        isSidebarOpen: t,
                                        sidebarWidth: a,
                                        topPx: r,
                                        isSidebarWithNoCollapsedState: i
                                    }) {
                                        return e ? { ...i ? {} : {
                                                width: a
                                            },
                                            translateX: 0,
                                            translateY: 0,
                                            opacity: 1
                                        } : t ? { ...i ? {} : {
                                                width: a
                                            },
                                            translateX: 0,
                                            translateY: r,
                                            opacity: 1
                                        } : { ...i ? {} : {
                                                width: a
                                            },
                                            translateX: i ? -a : -a + 20,
                                            translateY: r,
                                            opacity: 0
                                        }
                                    }({
                                        isExpanded: e,
                                        isSidebarOpen: g,
                                        sidebarWidth: h,
                                        topPx: M,
                                        isSidebarWithNoCollapsedState: I
                                    }),
                                    skip: A,
                                    onAnimationStart: () => {
                                        p(!0)
                                    },
                                    onAnimationEnd: () => {
                                        p(!1)
                                    },
                                    style: B.pane,
                                    className: a(828432).pz7,
                                    onMouseMove: _,
                                    onMouseLeave: j,
                                    children: [(0, i.jsx)("div", {
                                        style: {
                                            position: "relative",
                                            top: -1 * a(132261).qe,
                                            height: a(132261).qe,
                                            background: "transparent",
                                            width: I ? "100%" : h,
                                            marginBottom: -1 * a(132261).qe
                                        }
                                    }), (0, i.jsx)("div", {
                                        style: B.paneBackground
                                    }), (0, i.jsx)("div", {
                                        style: B.resizer
                                    }), x ? (0, i.jsx)(n, {
                                        isExpanded: e,
                                        topPx: M,
                                        renderLoading: () => (0, i.jsx)(a(471108).A, {
                                            skipFadeinDelay: !0
                                        })
                                    }) : (0, i.jsx)(k, {
                                        isExpanded: e,
                                        topPx: M
                                    }), (0, i.jsx)(a(691886).h, {
                                        sidebarRef: c,
                                        type: "page"
                                    })]
                                })
                            })
                        })
                    }), (0, i.jsx)(o, {})]
                })
            }
        },
        815644: (e, t, a) => {
            function r(e) {
                let {
                    configurationState: t
                } = e;
                return t.deepFindRequested && a(886556).z.isDeepFindEnabled()
            }

            function i(e) {
                let {
                    configurationState: t,
                    assistantSurface: a
                } = e;
                return r({
                    configurationState: t
                }) && a.isType("fullPage")
            }
            a.d(t, {
                or: () => r,
                pV: () => i
            })
        },
        828294: (e, t, a) => {
            function r(e) {
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
                N: () => r,
                a: () => i
            })
        },
        841690: (e, t, a) => {
            a.d(t, {
                N: () => d,
                B: () => n
            });
            var r = () => a(546605);
            class i extends r().Store {
                getInitialState() {
                    return -1
                }
                getHeight(e) {
                    return -1 === this.state ? (0, a(801113).ek)(e.isElectronMac) : this.state
                }
                overrideHeight(e) {
                    this.setState(e)
                }
                reset() {
                    this.setState(-1)
                }
            }
            let s = new i("topbarHeight");

            function o(e) {
                s.overrideHeight(e.height)
            }

            function n() {
                return (0, a(729787).pP)(o)
            }

            function d() {
                let e = (0, a(533992).Y0)();
                return (0, a(682985).K8)(() => s.getHeight(e), [e])
            }
        },
        854615: (e, t, a) => {
            a.d(t, {
                D: () => r,
                R: () => i
            });
            let r = (0, a(109939).YK)({
                openInLibrary: {
                    id: "useOpenInLibraryActions.openInLibrary",
                    defaultMessage: "Open in Library"
                },
                customizeSidebar: {
                    id: "useOpenInLibraryActions.customizeSidebar",
                    defaultMessage: "Customize sidebar"
                }
            });

            function i(e) {
                let {
                    type: t,
                    onSelect: i
                } = e, s = (0, a(533992).v3)(), o = (0, a(853284).U)(), n = (0, a(83208).X)("slippery_slope_sidebar_customization"), d = (0, a(83208).X)("library_meetings_tab"), l = (0, a(784331).nr)(), c = (0, a(413388)._B)(t), u = (0, a(784331).cd)() && c && ("agents" !== c || l) && ("myMeetings" !== c || d), p = o && n && (u || "notion_apps" === t);
                return [...!o && u && c ? [(0, a(233319).Ls)({
                    key: "openInLibrary",
                    displayName: r.openInLibrary,
                    analyticsName: r.openInLibrary.defaultMessage,
                    validators: [],
                    svg: a(360610).H,
                    closeParentMenu: !0,
                    action: async () => {
                        (await (0, a(337439).p)())({
                            event: void 0,
                            analyticsFrom: "sidebar_overflow_menu",
                            environment: s,
                            viewName: c
                        }), i()
                    }
                })] : [], ...p ? [(0, a(233319).Ls)({
                    key: "customizeSidebar",
                    displayName: r.customizeSidebar,
                    analyticsName: r.customizeSidebar.defaultMessage,
                    validators: [],
                    svg: a(213039).M,
                    closeParentMenu: !0,
                    action: () => {
                        a(87945).F.setState(!0), i()
                    }
                })] : []]
            }
        },
        866217: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            let r = {
                appCursorListener: {
                    sidebar: 1,
                    secondarySidebar: 2,
                    editor: 3,
                    aiChat: 3,
                    marketplace: 3,
                    teamHome: 3,
                    aiChatSidebar: 4
                }
            }
        },
        868892: (e, t, a) => {
            a.d(t, {
                h: () => r
            });

            function r({
                fromElectron: e
            }) {
                !a(984858).sidebarHoverPreviewDisabledStore.state && (a(984858).sidebarOpenStore.state || a(818955).default.state.isActive || a(552556).A.isOpen() || (a(984858).sidebarOpenStore.setState(!0), e && a(984858).sidebarElectronMousePeekStore.setState(!0)))
            }
        },
        876252: (e, t, a) => {
            a.d(t, {
                $: () => r
            });

            function r() {
                return (0, a(682985).O$)(a(728372).AppStoreCurrentUserStore)
            }
        },
        877163: (e, t, a) => {
            a.d(t, {
                m: () => i
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                i = (0, a(104509).wt)("lightning", r, "default")
        },
        879101: (e, t, a) => {
            a.d(t, {
                n: () => i
            }), a(16280);
            var r = a(296540);

            function i(e) {
                let t = function(e) {
                        for (let t of e)
                            if (void 0 === t) return;
                        return e.join(":")
                    }(e.key),
                    i = (0, a(482170).l)(e.computedState, a(795676).k),
                    s = (0, a(83208).X)("sidebar_local_storage", {
                        disableExposureLogging: !0
                    }),
                    [o, n] = (0, r.useState)();
                (0, r.useEffect)(() => {
                    if (s && t) try {
                        n((0, a(49509).YN)(t))
                    } catch (e) {
                        a(419750).O8(Error("Malformed value(s) found in localStorage", {
                            cause: e
                        }), {
                            from: "useLocalStorageCachedState",
                            type: "ParseError",
                            data: {
                                key: t
                            }
                        })
                    }
                }, [s, t]);
                let d = (0, r.useMemo)(() => a(381453).sg(e => {
                    if (t) try {
                        (0, a(49509).yE)(t, e)
                    } catch (e) {
                        a(419750).O8(e, {
                            from: "useLocalStorageCachedState",
                            type: "WriteError",
                            data: {
                                key: t
                            }
                        })
                    }
                }), [t]);
                return ((0, r.useEffect)(() => {
                    s && void 0 !== i && d(i)
                }, [s, d, i]), s) ? i ? ? o : i
            }
        },
        890142: (e, t, a) => {
            a.d(t, {
                l: () => i
            });
            let r = (0, a(109939).YK)({
                twoItems: {
                    id: "formatSettings.twoItems",
                    defaultMessage: "{item1} and {item2}"
                },
                threeOrMoreItems: {
                    id: "formatSettings.threeOrMoreItems",
                    defaultMessage: "{item1}, and {numberOfOther} others"
                },
                twoItemsWithAmpersand: {
                    id: "formatSettings.twoItems.withAmpersand",
                    defaultMessage: "{item1} & {item2}"
                },
                threeOrMoreItemsWithAmpersand: {
                    id: "formatSettings.threeOrMoreItems.withAmpersand",
                    defaultMessage: "{item1}, & {numberOfOther} others"
                },
                threeOrMoreItemsWithAmpersandAndRemoveComma: {
                    id: "formatSettings.threeOrMoreItems.withAmpersandAndRemoveComma",
                    defaultMessage: "{item1} & {numberOfOther} others"
                }
            });

            function i(e, t) {
                let {
                    removeComma: i,
                    useAmpersand: s
                } = t || {};
                if (0 === e.length) return "";
                let o = e[0];
                if (1 === e.length) return o;
                let n = e[1];
                if (2 === e.length) return s ? a(962299).A.formatMessage(r.twoItemsWithAmpersand, {
                    item1: o,
                    item2: n
                }) : a(962299).A.formatMessage(r.twoItems, {
                    item1: o,
                    item2: n
                });
                let d = e.length - 1;
                return s ? i ? a(962299).A.formatMessage(r.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: o,
                    numberOfOther: d
                }) : a(962299).A.formatMessage(r.threeOrMoreItemsWithAmpersand, {
                    item1: o,
                    numberOfOther: d
                }) : a(962299).A.formatMessage(r.threeOrMoreItems, {
                    item1: o,
                    numberOfOther: d
                })
            }
        },
        903443: (e, t, a) => {
            a.d(t, {
                Yk: () => d,
                Qj: () => l,
                Ct: () => p
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(581454);
            let r = "1.4.0";
            class i {
                storageKeyPrefix = "notion-sidebar-";
                store = new(a(274919)).Ay({
                    namespace: a(274919).Bq,
                    important: !1,
                    trackingType: "performance"
                });
                loggingEnabled = Math.random() < a(218744).default.getConfigKey("sidebar_cache_logging_config", "sample_rate");
                constructor(e) {
                    this.environment = e
                }
                async get(e) {
                    try {
                        await this.store.waitUntilReady();
                        let t = this.storageKeyPrefix + e,
                            {
                                duration: a,
                                result: i
                            } = s(() => this.store.get(t));
                        if (!i) return void this.logRead({
                            duration: a,
                            status: "missing"
                        });
                        if (i.version === r) return this.logRead({
                            duration: a,
                            status: "success",
                            result: i
                        }), i;
                        this.logRead({
                            duration: a,
                            status: "stale",
                            result: i
                        }), this.clear(e);
                        return
                    } catch (e) {
                        this.logRead({
                            status: "failure"
                        });
                        return
                    }
                }
                set(e, t) {
                    try {
                        let a = this.storageKeyPrefix + e,
                            {
                                duration: r
                            } = s(() => this.store.set(a, t));
                        this.logWrite({
                            duration: r,
                            status: "success",
                            result: t
                        })
                    } catch (e) {
                        this.logWrite({
                            status: "failure",
                            result: t
                        })
                    }
                }
                clear(e) {
                    try {
                        let t = this.storageKeyPrefix + e;
                        this.store.remove(t)
                    } catch (e) {}
                }
                logRead({
                    duration: e,
                    status: t,
                    result: r
                }) {
                    this.loggingEnabled && (0, a(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "read",
                                status: t,
                                size_kb: r && "object" == typeof r ? this.calculateSizeKb(r) : 0,
                                source: "local_storage"
                            }
                        }
                    })
                }
                logWrite({
                    duration: e,
                    status: t,
                    result: r
                }) {
                    this.loggingEnabled && (0, a(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "write",
                                status: t,
                                size_kb: this.calculateSizeKb(r),
                                source: "local_storage"
                            }
                        }
                    })
                }
                calculateSizeKb(e) {
                    try {
                        let t = JSON.stringify(e),
                            a = new Blob([t]).size;
                        return Math.round(a / 1024)
                    } catch {
                        return 0
                    }
                }
            }

            function s(e) {
                let t = performance.now(),
                    a = e();
                return {
                    duration: Math.round(performance.now() - t),
                    result: a
                }
            }
            class o {
                cache;
                pendingResults = new Map;
                results = new Map;
                cachedThisSession = new Set;
                disabledCacheKeys = new Set;
                getCache(e) {
                    return this.cache || (this.cache = new i(e)), this.cache
                }
                getCachedSidebarStateResult(e, t) {
                    let a = `${e}:${t}`;
                    if (!this.disabledCacheKeys.has(a)) return this.results.get(a)
                }
                async getCachedSidebarState(e, t, a) {
                    let r = `${e}:${t}`;
                    if (this.disabledCacheKeys.has(r)) return;
                    if (this.results.has(r)) return this.results.get(r);
                    if (this.pendingResults.has(r)) return this.pendingResults.get(r);
                    let i = this.readFromStorage(e, t, a).then(e => {
                        if (!this.disabledCacheKeys.has(r)) return this.results.set(r, e), e
                    }).catch(() => {});
                    return this.pendingResults.set(r, i), i
                }
                async readFromStorage(e, t, r) {
                    let i = n(e, t),
                        s = await this.getCache(r).get(i);
                    if (s) try {
                        var o, l;
                        return o = s, l = r, {
                            isCached: !0,
                            spaceViewId: o.spaceViewId,
                            spaceId: o.spaceId,
                            spaceName: o.spaceName,
                            userId: o.userId,
                            isMember: o.isMember,
                            isPersonalSpace: o.isPersonalSpace,
                            showBookmarksSection: o.showBookmarksSection,
                            showWorkspaceSection: o.showWorkspaceSection,
                            showSharedSection: o.showSharedSection,
                            showPrivateSection: o.showPrivateSection,
                            showChatsSection: o.showChatsSection,
                            showSharedOverflowButton: o.showSharedOverflowButton,
                            showPrivateOverflowButton: o.showPrivateOverflowButton,
                            showOnlyPrivateSection: o.showOnlyPrivateSection,
                            shownSidebarSectionCount: o.shownSidebarSectionCount,
                            showTeamsOverflowButton: o.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: o.stickTemplateItemsToBottom,
                            showTeamSection: o.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: o.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: o.showEmptySharedSection,
                            showNotionAppsSection: o.showNotionAppsSection,
                            showMeetingsTodaySection: o.showMeetingsTodaySection,
                            showMeetingsSection: o.showMeetingsSection,
                            showRecentsSection: o.showRecentsSection,
                            allSharedPagesStores: [],
                            allPrivatePagesStores: [],
                            userJoinedTeamsStores: [],
                            visibleNotionApps: o.visibleNotionApps,
                            visibleSharedPagesStores: o.visibleSharedPagesStores.map(e => d(e, l)),
                            visiblePrivatePagesStores: o.visiblePrivatePagesStores.map(e => d(e, l)),
                            bookmarkedPagesStores: o.bookmarkedPagesStores.map(e => d(e, l)),
                            workspacePagesStores: o.workspacePagesStores.map(e => d(e, l)),
                            visibleTeamsStores: o.visibleTeamsStores.map(e => {
                                var t, r;
                                let i;
                                return t = e, r = l, i = new(a(681735)).h(r, t.pointer), void 0 !== t.name || void 0 !== t.icon || t.pages.length > 0 ? (0, a(9722).x)({
                                    store: i,
                                    environment: r,
                                    name: t.name ? ? "",
                                    icon: t.icon,
                                    cachedTeamPagesStores: t.pages.map(e => d(e, r))
                                }) : i
                            }),
                            visibleWorkflowStores: o.visibleWorkflowStores.map(e => {
                                var t, r;
                                let i;
                                return t = e, r = l, i = new(a(360851)).N(r, t.pointer), void 0 !== t.title || void 0 !== t.icon ? (0, a(595850).J)({
                                    store: i,
                                    environment: r,
                                    name: t.title ? ? "",
                                    icon: t.icon
                                }) : i
                            }),
                            allSidebarWorkflowStores: [],
                            isTeamContentReady: !0,
                            userSharedPagesForSpaceHasLoaded: !0,
                            sidebarOrder: o.sidebarOrder
                        }
                    } catch (e) {
                        this.getCache(r).clear(i);
                        return
                    }
                }
                cacheSidebarState({
                    spaceId: e,
                    userId: t,
                    sidebarState: a,
                    environment: i
                }) {
                    let s = n(e, t),
                        o = `${e}:${t}`;
                    if (!this.cachedThisSession.has(o)) try {
                        var d;
                        let e = {
                            spaceViewId: (d = a).spaceViewId,
                            spaceId: d.spaceId,
                            spaceName: d.spaceName,
                            userId: d.userId,
                            isMember: d.isMember,
                            isPersonalSpace: d.isPersonalSpace,
                            showBookmarksSection: d.showBookmarksSection,
                            showWorkspaceSection: d.showWorkspaceSection,
                            showSharedSection: d.showSharedSection,
                            showPrivateSection: d.showPrivateSection,
                            showChatsSection: d.showChatsSection,
                            showSharedOverflowButton: d.showSharedOverflowButton,
                            showPrivateOverflowButton: d.showPrivateOverflowButton,
                            showOnlyPrivateSection: d.showOnlyPrivateSection,
                            shownSidebarSectionCount: d.shownSidebarSectionCount,
                            showTeamsOverflowButton: d.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: d.stickTemplateItemsToBottom,
                            showTeamSection: d.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: d.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: d.showEmptySharedSection,
                            showNotionAppsSection: d.showNotionAppsSection,
                            showMeetingsTodaySection: d.showMeetingsTodaySection,
                            showMeetingsSection: d.showMeetingsSection,
                            showRecentsSection: d.showRecentsSection,
                            visibleNotionApps: d.visibleNotionApps,
                            visibleSharedPagesStores: d.visibleSharedPagesStores.map(l),
                            visiblePrivatePagesStores: d.visiblePrivatePagesStores.map(l),
                            bookmarkedPagesStores: d.bookmarkedPagesStores.map(l),
                            workspacePagesStores: d.workspacePagesStores.map(l),
                            visibleTeamsStores: d.visibleTeamsStores.map(c),
                            visibleWorkflowStores: d.visibleWorkflowStores.map(u),
                            sidebarOrder: d.sidebarOrder,
                            cachedAt: Date.now(),
                            version: r
                        };
                        this.getCache(i).set(s, e), this.cachedThisSession.add(o)
                    } catch (e) {}
                }
                disableCache({
                    spaceId: e,
                    userId: t
                }) {
                    let a = `${e}:${t}`;
                    this.disabledCacheKeys.has(a) || (this.disabledCacheKeys.add(a), this.pendingResults.delete(a), this.results.delete(a))
                }
                isCacheDisabled(e, t) {
                    let a = `${e}:${t}`;
                    return this.disabledCacheKeys.has(a)
                }
                clearCachedSidebarState({
                    spaceId: e,
                    userId: t,
                    environment: a
                }) {
                    let r = n(e, t),
                        i = `${e}:${t}`;
                    this.getCache(a).clear(r), this.pendingResults.delete(i), this.results.delete(i)
                }
            }

            function n(e, t) {
                return `sidebar-state-${e}-${t}`
            }

            function d(e, t) {
                let r = new(a(970831)).B(t, e.pointer);
                return void 0 !== e.title || void 0 !== e.icon ? r.createFastRenderBlockStore(e.title ? ? [], e.icon) : r
            }

            function l(e) {
                let t = e.isDefined() ? e.getTitleValue() : [],
                    a = e.isDefined() ? e.getIcon() : void 0,
                    r = null == a ? void 0 : a.icon;
                return {
                    pointer: e.pointer,
                    title: t,
                    icon: r
                }
            }

            function c(e) {
                let t = e.isDefined() ? e.getName() : "",
                    r = e.isDefined() ? e.getRawIcon() : void 0,
                    i = e.isDefined() ? (0, a(709633).O)({
                        teamStore: e
                    }) : [];
                return {
                    pointer: e.pointer,
                    name: t,
                    icon: r,
                    pages: i.map(l)
                }
            }

            function u(e) {
                let t = e.isDefined() ? e.getData() : void 0,
                    a = null == t ? void 0 : t.name,
                    r = null == t ? void 0 : t.icon;
                return {
                    pointer: e.pointer,
                    title: a,
                    icon: r
                }
            }
            let p = new o
        },
        917441: (e, t, a) => {
            a.d(t, {
                Lp: () => o,
                Rx: () => d,
                a$: () => n
            });
            var r = a(296540),
                i = a(474848);
            let s = (0, r.createContext)(null);

            function o({
                children: e
            }) {
                let t = (0, a(533992).v3)(),
                    n = (0, a(804011).r)(t),
                    d = (0, a(119965).V)(),
                    {
                        deferSidebarLoadingWhenCollapsed: l
                    } = (0, a(42491).b8)(t.currentUser.id),
                    c = !(0, a(682985).K8)(() => (0, a(712358).K)(t), [t]) && l && d,
                    [u, p] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = setTimeout(() => {
                        p(!0)
                    }, 2e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, []);
                let {
                    currentUserId: m,
                    spaceId: h,
                    isFreshStateReady: g
                } = (0, a(682985).K8)(() => {
                    var e, t, r, i;
                    null != (e = a(728372).AppStoreCurrentUserStore.state) && e.id && null != (t = (0, a(328765).S)()) && t.id && (0, a(635339).yd)("user_and_space_stores_loaded");
                    let s = null == (r = a(728372).AppStoreCurrentUserStore.state) ? void 0 : r.id,
                        o = null == (i = (0, a(328765).S)()) ? void 0 : i.id;
                    if (c) return {
                        currentUserId: s,
                        spaceId: o,
                        isFreshStateReady: !1
                    };
                    let d = n.state,
                        l = a(329464).A.state.initialRenderCompleted;
                    return {
                        currentUserId: s,
                        spaceId: o,
                        isFreshStateReady: (0, a(982853).XA)({
                            sidebarState: d,
                            userId: s,
                            spaceId: o,
                            isInitialPageRenderCompleted: l
                        })
                    }
                }, [n, c]), S = (0, a(83208).X)("enable_greedy_sidebar_initial_render"), b = (0, a(168814).X)(), f = (0, a(982853).cT)({
                    isFreshStateReady: g,
                    userId: m,
                    spaceId: h
                }), v = !!((0, a(682985).K8)(() => {
                    let e = null == f ? void 0 : f.state;
                    return m === (null == e ? void 0 : e.userId) && h === (null == e ? void 0 : e.spaceId)
                }, [f, m, h]) && (b || S) && !g && !u);
                return (0, i.jsx)(s.Provider, {
                    value: v ? f : n,
                    children: e
                })
            }

            function n() {
                let e = (0, r.useContext)(s),
                    t = (0, a(533992).v3)(),
                    i = (0, a(804011).r)(t);
                return e ? ? i
            }

            function d() {
                return (0, a(682985).O$)(n())
            }
            s.displayName = "SidebarStateContext"
        },
        920976: (e, t, a) => {
            a.d(t, {
                F: () => s
            }), a(296540);
            var r = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, r.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                s = (0, a(104509).wt)("aiFacePlus", i, "default")
        },
        928896: (e, t, a) => {
            a.d(t, {
                U: () => r
            });

            function r(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "reorder_outliner_section",
                        eventProperties: {
                            section: t.section,
                            previous_order: t.previous_order,
                            new_order: t.new_order,
                            from: t.from
                        }
                    }
                })
            }
        },
        980494: (e, t, a) => {
            a.d(t, {
                A: () => s
            }), a(296540);
            var r = a(474848);
            let i = {
                    style0: { ...a(699422).RC
                    }
                },
                s = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        s = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        o = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: n,
                            avatarShouldShowShadow: d,
                            avatarSize: l,
                            hasTooltip: c,
                            tooltipHeader: u,
                            hasPersonHoverCard: p,
                            spaceStore: m
                        } = e,
                        h = (0, a(109939).tz)(),
                        g = (0, a(682985).K8)(() => null == n ? void 0 : n.getDisplayName(h), [n, h]),
                        S = (0, r.jsxs)("div", {
                            style: s,
                            children: [(0, r.jsx)("div", {
                                style: o,
                                children: (0, r.jsx)(a(321753).A, {
                                    userStore: n,
                                    avatarShouldShowShadow: d,
                                    size: l,
                                    hasTooltip: c && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, r.jsx)("div", {
                                className: "notranslate",
                                style: i.style0,
                                children: g
                            })]
                        });
                    return p ? (0, r.jsx)(a(532755).D, {
                        userStore: n,
                        spaceStore: m,
                        from: e.personHoverCardEntrypoint,
                        children: S
                    }) : S
                }
        },
        982853: (e, t, a) => {
            a.d(t, {
                Jf: () => o,
                XA: () => i,
                cT: () => s
            }), a(898992), a(823215);
            var r = a(296540);

            function i({
                sidebarState: e,
                userId: t,
                spaceId: a,
                isInitialPageRenderCompleted: r
            }) {
                return !!e && !!t && !!a && !e.isCached && !!e.visiblePrivatePagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleSharedPagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.bookmarkedPagesStores.slice(0, 10).every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleWorkflowStores.every(e => e.isReady()) && !!e.isTeamContentReady && !!r && !0
            }

            function s({
                isFreshStateReady: e,
                userId: t,
                spaceId: i
            }) {
                let {
                    enableSidebarStateCache: o
                } = (0, a(42491).b8)(t), [n] = (0, r.useState)(() => a(546605).Store.createValue(o && t && i ? a(903443).Ct.getCachedSidebarStateResult(i, t) : void 0, {
                    name: "cachedSidebarStateStore"
                }));
                (0, r.useEffect)(() => {
                    o && e && t && i && a(903443).Ct.disableCache({
                        spaceId: i,
                        userId: t
                    })
                }, [o, e, t, i]);
                let d = (0, a(533992).v3)();
                return (0, r.useEffect)(() => {
                    o && t && i && !a(903443).Ct.isCacheDisabled(i, t) && a(903443).Ct.getCachedSidebarState(i, t, d).then(e => n.setState(e))
                }, [t, i, d, o, n]), n
            }

            function o({
                sidebarState: e
            }) {
                let t = (0, a(533992).v3)(),
                    {
                        userId: s,
                        spaceId: n,
                        isInitialPageRenderCompleted: d
                    } = (0, a(682985).K8)(() => {
                        var e, t;
                        return {
                            userId: null == (e = a(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id,
                            spaceId: null == (t = (0, a(328765).S)()) ? void 0 : t.id,
                            isInitialPageRenderCompleted: a(329464).A.state.initialRenderCompleted
                        }
                    }, []),
                    {
                        enableSidebarStateCache: l
                    } = (0, a(42491).b8)(s);
                (0, r.useEffect)(() => {
                    !i({
                        sidebarState: e,
                        userId: s,
                        spaceId: n,
                        isInitialPageRenderCompleted: d
                    }) || s && n && e && (l ? a(903443).Ct.cacheSidebarState({
                        spaceId: n,
                        userId: s,
                        sidebarState: e,
                        environment: t
                    }) : a(903443).Ct.clearCachedSidebarState({
                        spaceId: n,
                        userId: s,
                        environment: t
                    }))
                }, [s, n, d, e, l, t])
            }
        },
        996903: (e, t, a) => {
            a.d(t, {
                i: () => r
            });

            function r(e) {
                let t = e.getSettings(),
                    r = null == t ? void 0 : t.signup_time;
                return r ? (0, a(362008).Mn)(r) : null
            }
        }
    }
]);