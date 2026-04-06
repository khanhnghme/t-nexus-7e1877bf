"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [92903], {
        112359: (e, t, s) => {
            s.d(t, {
                v: () => n
            });

            function n(e, t, n) {
                let i = (0, s(748814).a)(e, t, n ? "@" : "");
                return (0, s(239236).m)(e, i)
            }
        },
        810737: (e, t, s) => {
            s.d(t, {
                t: () => n
            });

            function n() {
                if (s(986939).A.isMobile) return !1;
                let e = s(728372).AppStoreCurrentUserSettingsStore.state;
                if (!e) return !1;
                let t = (0, s(996903).i)(e);
                return ("number" != typeof t || !(t > 7)) && "on" === s(218744).default.getEligibleGroup({
                    experimentId: "slash_menu_tooltip",
                    defaultGroup: "control"
                })
            }
        },
        876073: (e, t, s) => {
            s.r(t), s.d(t, {
                SlashMenu: () => A
            });
            var n = s(296540);

            function i(e) {
                return (0, s(112359).v)(e.textStore, e.oldTextValue, !e.isAddMenu)
            }
            s(18107), s(967357), s(898992), s(354520);
            let o = (0, s(109939).YK)({
                addButtonPlaceholder: {
                    defaultMessage: "Type to filter…",
                    id: "text.commandsMenuOpen.placeholder"
                },
                slashInsertionPlaceholder: {
                    defaultMessage: "Type to search",
                    id: "slashMenu.slashInsertion.placeholder"
                }
            });
            class l {
                lruKeyStore = new(s(245541)).R({
                    key: "frequentlyUsedSlashMenuActions",
                    namespace: "SlashMenu",
                    important: !1,
                    trackingType: "necessary"
                });
                load() {
                    let e = this.lruKeyStore.state,
                        t = {};
                    try {
                        t = e && JSON.parse(e) || {}
                    } catch (e) {}
                    return t
                }
                get() {
                    return this.load()
                }
                track(e) {
                    let t = this.load(),
                        s = t[e.key];
                    (null == s ? void 0 : s.frequency) !== void 0 && (null == s ? void 0 : s.lastAccessed) !== void 0 ? (s.frequency += 1, s.lastAccessed = Date.now()) : t[e.key] = {
                        frequency: 1,
                        lastAccessed: Date.now()
                    }, this.lruKeyStore.setState(JSON.stringify(t))
                }
            }
            let r = new l;
            s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(581454), s(430670), s(908872);
            class a {
                UNVISITED_FRECENCY_SCORE = 1;
                getFrecencyRankedActions(e, t) {
                    let s = Date.now();
                    return Object.keys(e).sort((n, i) => {
                        let o = e => Math.ceil(e.frequency * this.getWeightForVisit(s, e.lastAccessed, t)),
                            l = e[n],
                            r = e[i],
                            a = (null == l ? void 0 : l.frequency) !== void 0 && (null == l ? void 0 : l.lastAccessed) !== void 0 ? o(l) : this.UNVISITED_FRECENCY_SCORE,
                            u = (null == r ? void 0 : r.frequency) !== void 0 && (null == r ? void 0 : r.lastAccessed) !== void 0 ? o(r) : this.UNVISITED_FRECENCY_SCORE;
                        return a === u ? 0 : u - a
                    })
                }
                getWeightForVisit(e, t, n) {
                    let {
                        TIME_BUCKETS: i,
                        DEFAULT_BUCKET_WEIGHT: o
                    } = n, l = s(906745).DateTime.fromMillis(e).diff(s(906745).DateTime.fromMillis(t), "hours").as("hours");
                    for (let e of i)
                        if (l <= e.hours) return e.weight;
                    return o
                }
            }
            let u = ["action more"];
            var c = s(474848);
            let d = {
                    paddingTop: 2,
                    paddingInlineEnd: 8,
                    paddingBottom: 2,
                    paddingInlineStart: 2
                },
                p = {
                    position: "relative"
                };

            function f() {
                let {
                    subscriptionsDependencies: e
                } = (0, s(907225).h)(), {
                    renderUpgradeButton: t
                } = e, n = (0, s(67499).S)(), i = (0, s(682985).K8)(() => (0, s(888).$)(n), [n]);
                return (0, c.jsxs)(s(4458).VP, {
                    gap: 8,
                    paddingBlock: 10,
                    paddingInline: 12,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    className: "autolayout-fill-width",
                    style: p,
                    children: [(0, c.jsx)("div", {
                        style: d,
                        children: (0, c.jsx)(s(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, c.jsx)(s(109939).sA, {
                                id: "blockLimitUpsell.label",
                                defaultMessage: "Unlimited blocks on Plus"
                            })
                        })
                    }), t({
                        upsell: {
                            type: "product",
                            product: "plus",
                            limit: {
                                type: "none"
                            },
                            trialability: "none"
                        },
                        spaceStore: i
                    })]
                })
            }
            let h = {
                divider: {
                    color: s(632079).Tj.border.secondaryTranslucent
                },
                shortcut: {
                    color: s(632079).Tj.text.tertiary,
                    fontSize: 12,
                    whiteSpace: "nowrap"
                }
            };

            function g(e) {
                let {
                    sectionsIsEmpty: t,
                    focused: n,
                    onClick: i
                } = e, o = (0, s(109939).tz)().formatMessage({
                    id: "slashMenuItems.typeOnPage.message",
                    defaultMessage: "Close menu"
                }), l = (0, s(682985).K8)(() => (0, s(114525).j)(), []);
                return (0, c.jsxs)(c.Fragment, {
                    children: [t ? void 0 : (0, c.jsx)(s(346268).c, {
                        size: 2,
                        style: h.divider
                    }), (0, c.jsx)(s(844565).A, {
                        children: (0, c.jsx)(s(95582).A, {
                            focused: n,
                            onClick: i,
                            title: o,
                            right: (0, c.jsx)("span", {
                                style: h.shortcut,
                                children: "esc"
                            }),
                            desktopTitleStyle: l
                        })
                    })]
                })
            }
            let m = (0, s(109939).YK)({
                suggestedSectionTitle: {
                    id: "slashMenu.suggestedSection.title",
                    defaultMessage: "Suggested"
                }
            });

            function y(e) {
                let {
                    sections: t,
                    slashMenuState: o,
                    menuProps: l,
                    isEmptyBlock: d
                } = e, p = (0, s(533992).v3)(), {
                    subscriptionsDependencies: h,
                    selectionDependencies: y,
                    analyticsDependencies: _,
                    blockSelectionDependencies: S,
                    textActionsDependencies: A,
                    transactionDependencies: k,
                    actionMenuListDependencies: x
                } = (0, s(907225).h)(), M = (0, s(682985).K8)(() => i(o), [o]), b = (0, s(682985).K8)(() => S.getSelectedStores(), [S]), T = (0, s(67499).S)(), C = (0, s(682985).K8)(() => h.validateCanCreateBlock(p, (0, s(888).$)(T)), [p, T, h]), E = (0, s(682985).K8)(() => (0, s(717274).Km)(p), [p]), I = (0, n.useMemo)(() => ({
                    environment: p,
                    blocks: b,
                    originRect: o.selectionRect,
                    publicEditMode: void 0,
                    analyticsFrom: "slash_menu",
                    pageContext: T
                }), [p, b, o.selectionRect, T]), K = (0, s(682985).O$)(s(764615).rA), j = void 0 !== M, w = (0, s(682985).uB)(void 0, s(419110).$), R = (0, s(682985).K8)(() => w.getState().focus.footerFocused, [w]), B = (0, n.useCallback)(() => {
                    (0, s(104310).u)({
                        event: {
                            eventName: "close_slash_menu",
                            eventProperties: {
                                id: o.id,
                                source: "click_type_on_page"
                            }
                        }
                    }), (0, s(259413).V)({
                        environment: p,
                        dismissed: !0,
                        trackCreateBlock: _.trackCreateBlock
                    })
                }, [p, o.id, _]), P = j ? (0, c.jsx)(g, {
                    focused: R ? ? !1,
                    filter: M,
                    sectionsIsEmpty: K,
                    onClick: B,
                    isAddMenu: o.isAddMenu
                }) : void 0, O = j ? {
                    onFooterEnter: B
                } : {}, N = !!M && !K, V = (0, s(682985).K8)(() => ({
                    desktopTitleStyle: (0, s(114525).j)(),
                    itemMarginLeft: 0,
                    itemMarginRight: 4
                }), []), F = function(e) {
                    let {
                        slashMenuState: t,
                        filter: n
                    } = e, {
                        registryDependencies: i
                    } = (0, s(907225).h)(), {
                        GlobalBlockRegistry: o
                    } = i, l = (0, s(682985).K8)(() => {
                        let e = t.textStore,
                            n = (0, s(138913).O)(e, o);
                        return (null == n ? void 0 : n.blockContext) === s(166654).R.WorkflowInstructionsInInlineComposer
                    }, [t, o]);
                    return !n && !l
                }({
                    slashMenuState: o,
                    filter: M
                }), D = function({
                    showSuggestedSection: e
                }) {
                    let t = (0, s(83208).X)("slash_menu_suggested_meeting_notes"),
                        n = (0, s(67499).S)(),
                        i = (0, s(682985).K8)(() => !s(986939).A.isMobile && (0, s(272659).V)({
                            pageContext: n
                        }), [n]);
                    return e ? [{
                        actionKey: `insert ${s(955630).xd.transcription}`,
                        isEnabled: () => t,
                        position: "first"
                    }, {
                        actionKey: "insert ai_image",
                        isEnabled: () => i,
                        position: "first"
                    }, {
                        actionKey: `insert ${s(955630).sh.aiFreePromptBlock}`,
                        isEnabled: () => !1,
                        position: "first"
                    }] : []
                }({
                    showSuggestedSection: F
                }), U = (0, s(682985).K8)(() => {
                    if (F) {
                        let e = function(e) {
                            let {
                                sections: t,
                                isEmptyBlock: n,
                                context: i,
                                suggestedActionBoosts: o,
                                validateAction: l
                            } = e, c = function(e) {
                                let {
                                    sections: t,
                                    isEmptyBlock: s,
                                    suggestionCount: n,
                                    context: i,
                                    suggestedActionBoosts: o,
                                    validateAction: l
                                } = e, c = t.flatMap(e => e.actions).reduce((e, t) => (e[t.key] = t, e), {});
                                return function(e) {
                                    let {
                                        suggestedActions: t,
                                        suggestedActionBoosts: s,
                                        allAvailableActionsByKey: n
                                    } = e, i = s.filter(e => e.isEnabled() && n[e.actionKey]).slice(0, 2);
                                    if (0 === i.length) return t;
                                    let o = i.map(e => ({ ...n[e.actionKey],
                                            isBoosted: !0,
                                            boostPosition: e.position
                                        })),
                                        l = new Set(i.map(e => e.actionKey)),
                                        r = t.filter(e => !l.has(String(e.key))),
                                        a = Math.max(0, i.length - (t.length - r.length)),
                                        u = r.slice(0, r.length - a);
                                    return [...o.filter(e => "first" === e.boostPosition), ...u, ...o.filter(e => "last" === e.boostPosition)]
                                }({
                                    suggestedActions: (function(e) {
                                        let {
                                            suggestionCount: t,
                                            actionsByKey: s,
                                            frecencyRankedActions: n,
                                            isEmptyBlock: i,
                                            context: o,
                                            validateAction: l
                                        } = e, r = 0, a = Object.entries(s).filter(([e, t]) => {
                                            if (!l(t, o) || !n.includes(e) || u.includes(e)) return !1;
                                            if (e.match("(action color).*")) {
                                                if (i) return !0;
                                                r++
                                            }
                                            if (e.match("(turn into|action).*")) {
                                                if (i) return !1;
                                                r--
                                            }
                                            return r++, !0
                                        });
                                        if (!i && r < t) return [];
                                        let c = a.sort(([e, t], [s, i]) => n.indexOf(e) - n.indexOf(s)).slice(0, t).map(([e, t]) => e);
                                        return c.length < t ? [] : c
                                    })({
                                        suggestionCount: n,
                                        actionsByKey: c,
                                        frecencyRankedActions: function(e) {
                                            let {
                                                actions: t
                                            } = e;
                                            return new a().getFrecencyRankedActions(t, {
                                                TIME_BUCKETS: [{
                                                    hours: 4,
                                                    weight: 100
                                                }, {
                                                    hours: 12,
                                                    weight: 80
                                                }, {
                                                    hours: 24,
                                                    weight: 70
                                                }, {
                                                    hours: 72,
                                                    weight: 60
                                                }, {
                                                    hours: 168,
                                                    weight: 50
                                                }, {
                                                    hours: 336,
                                                    weight: 40
                                                }, {
                                                    hours: 672,
                                                    weight: 30
                                                }],
                                                DEFAULT_BUCKET_WEIGHT: 20
                                            })
                                        }({
                                            actions: r.get()
                                        }),
                                        isEmptyBlock: s,
                                        context: i,
                                        validateAction: l
                                    }).map(e => c[e]),
                                    suggestedActionBoosts: o,
                                    allAvailableActionsByKey: c
                                })
                            }({
                                suggestionCount: 4,
                                sections: t,
                                isEmptyBlock: n,
                                context: i,
                                suggestedActionBoosts: o,
                                validateAction: l
                            });
                            return c.length ? {
                                key: s(124858).IZ,
                                title: s(962299).A.formatMessage(m.suggestedSectionTitle),
                                actions: c
                            } : void 0
                        }({
                            sections: t,
                            isEmptyBlock: d,
                            context: I,
                            suggestedActionBoosts: D,
                            validateAction: x.validateAction
                        });
                        return e ? [e, ...t] : t
                    }
                    return t
                }, [I, d, t, F, D, x.validateAction]), L = (0, s(682985).K8)(() => {
                    let e = s(764615).Ay.state;
                    return e.open ? e.comboboxProps : void 0
                }, [], {
                    debugName: "slashMenuItems-comboboxProps"
                });
                return (0, c.jsxs)(s(747369).A, { ...l,
                    footer: P,
                    children: [E && !C ? (0, c.jsx)(f, {}) : null, (0, c.jsx)(v, {
                        showHeader: N,
                        children: (0, c.jsx)(x.ActionMenuList, {
                            sections: U,
                            onAccept: (e, t, n, i, o) => {
                                var l;
                                if (!C) return h.showBlockingExperienceToast(p, (0, s(888).$)(T));
                                let a = null == T || null == (l = T.spaceStore) ? void 0 : l.id;
                                k.createAndCommit({
                                    userAction: "SlashMenu.handleAccept",
                                    environment: p,
                                    cellTarget: a ? {
                                        spaceWithId: a
                                    } : void 0,
                                    canUndo: !0,
                                    perform: t => {
                                        ! function(e) {
                                            let {
                                                transaction: t,
                                                environment: n,
                                                action: i,
                                                sectionKey: o,
                                                searchEventSource: l,
                                                itemIndex: a,
                                                editSelection: u,
                                                trackBlockAction: c,
                                                trackCreateBlock: d,
                                                getSelectedStores: p,
                                                IM_SORRY_DANGEROUSLY_setValue: f
                                            } = e, h = s(764615).Ay.state;
                                            if (h.open) {
                                                let {
                                                    textStore: e,
                                                    oldTextValue: g,
                                                    oldSelection: m,
                                                    filter: y,
                                                    id: v
                                                } = h, _ = p()[0];
                                                if (_) {
                                                    let e = _.getType(),
                                                        t = _.getFormat();
                                                    c(n, {
                                                        analyticsName: i.analyticsName,
                                                        action_type: i.analyticsActionType,
                                                        from: "slash_menu",
                                                        block_id: _.id,
                                                        block_type: e,
                                                        is_toggleable: e ? (0, s(955630).Yt)(e, t) : void 0,
                                                        slash_menu_filter_length: y.length,
                                                        slash_menu_section: o,
                                                        parent_collection_id: _.getParentCollectionIdUpToTwoLevels(),
                                                        slash_menu_id: v,
                                                        is_boosted: i.isBoosted,
                                                        boost_position: i.boostPosition
                                                    })
                                                }
                                                f({
                                                    environment: n,
                                                    store: e,
                                                    value: g,
                                                    transaction: t
                                                }), (0, s(104310).u)({
                                                    event: {
                                                        eventName: "slash_menu_search",
                                                        eventProperties: {
                                                            id: h.id,
                                                            source: l || (h.filter ? {
                                                                type: "query",
                                                                query: h.filter
                                                            } : {
                                                                type: "scroll",
                                                                rank: void 0 !== a ? a + 1 : void 0
                                                            })
                                                        }
                                                    }
                                                }), r.track(i), (0, s(259413).V)({
                                                    dismissed: !1,
                                                    trackCreateBlock: d
                                                });
                                                let S = (0, s(534012).T)(e);
                                                S && u({
                                                    environment: n,
                                                    store: S
                                                }), (0, s(627974).t)({
                                                    store: e,
                                                    selection: m
                                                })
                                            }
                                        }({
                                            environment: p,
                                            transaction: t,
                                            action: e,
                                            sectionKey: i,
                                            itemIndex: o,
                                            editSelection: y.edit,
                                            trackBlockAction: _.trackBlockAction,
                                            trackCreateBlock: _.trackCreateBlock,
                                            getSelectedStores: S.getSelectedStores,
                                            IM_SORRY_DANGEROUSLY_setValue: A.setValue
                                        })
                                    }
                                })
                            },
                            context: I,
                            filter: M,
                            flattenSectionsOnSearch: !0,
                            initialFocus: 0,
                            resetFocusOnMouseOut: !0,
                            useLimit: !0,
                            showNoResultsMessage: !1,
                            menuListStore: w,
                            renderItemStyles: V,
                            comboboxProps: L,
                            ...O
                        })
                    })]
                })
            }

            function v({
                showHeader: e,
                children: t
            }) {
                return e ? (0, c.jsx)(s(844565).A, {
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "slashMenuItems.filteredResults",
                        defaultMessage: "Filtered results"
                    }),
                    children: t
                }) : t
            }

            function _(e) {
                let {
                    sections: t,
                    slashMenuState: n,
                    isEmptyBlock: i
                } = e, o = (0, s(533992).v3)(), l = (0, s(533992).Y0)(), {
                    analyticsDependencies: r
                } = (0, s(907225).h)(), {
                    trackCreateBlock: a
                } = r, u = (0, s(718012).V)(), d = (0, s(153223).u)(), p = n.isAddMenu ? 8 : 12, f = l.isMobileNative && !l.isTablet && !l.isIpad, h = `min(448px, ${s(986939).A.isMobile?"25vh":"40vh"})`;
                return (0, c.jsx)(s(182718).zD, {
                    popupType: l.isMobileNative && !l.isTablet ? s(423291).n.SlideUp : s(423291).n.Popup,
                    open: !0,
                    originRect: n.selectionRect,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: p,
                    disableMouseCapture: !0,
                    disableContentScroll: !0,
                    preventBlockRenderQueueOnEnter: !0,
                    onDismiss: () => {
                        (0, s(104310).u)({
                            event: {
                                eventName: "close_slash_menu",
                                eventProperties: {
                                    id: n.id,
                                    source: "esc"
                                }
                            }
                        }), (0, s(259413).V)({
                            environment: o,
                            dismissed: !0,
                            trackCreateBlock: a
                        })
                    },
                    content: () => (0, c.jsx)(s(24884).n, {
                        step: "create_page_beyond_text",
                        showSidebarOverlays: !1,
                        onBackButtonClick: () => (0, s(259413).V)({
                            environment: o,
                            dismissed: !0,
                            trackCreateBlock: a
                        }),
                        onNextButtonClick: () => (0, s(259413).V)({
                            environment: o,
                            dismissed: !0,
                            trackCreateBlock: a
                        }),
                        inAppCalloutStore: u,
                        teamIds: d,
                        children: (0, c.jsx)(S, {
                            sections: t,
                            slashMenuState: n,
                            isMobileNative: f,
                            environment: o,
                            menuMaxHeight: h,
                            isEmptyBlock: i
                        })
                    }),
                    trapFocus: !1
                })
            }

            function S(e) {
                let t, {
                        analyticsDependencies: n
                    } = (0, s(907225).h)(),
                    {
                        trackCreateBlock: i
                    } = n,
                    {
                        sections: o,
                        slashMenuState: l,
                        isMobileNative: r,
                        environment: a,
                        menuMaxHeight: u,
                        isEmptyBlock: d
                    } = e;
                return t = r ? {
                    menuType: s(649476).gu.ActionSheet
                } : {
                    menuType: s(649476).gu.Popup,
                    width: "fr-FR" === s(849917).locale ? 375 : 324,
                    maxHeight: u,
                    onClickOutside: () => {
                        (0, s(104310).u)({
                            event: {
                                eventName: "close_slash_menu",
                                eventProperties: {
                                    id: l.id,
                                    source: "click_outside"
                                }
                            }
                        }), (0, s(259413).V)({
                            environment: a,
                            dismissed: !0,
                            trackCreateBlock: i
                        })
                    }
                }, (0, c.jsx)(y, {
                    sections: o,
                    slashMenuState: l,
                    menuProps: t,
                    isEmptyBlock: d
                })
            }

            function A() {
                let e, t, l, r = (0, s(533992).v3)(),
                    a = (0, s(682985).O$)(s(764615).Ay),
                    u = a.open && a.isAddMenu,
                    d = (0, s(682985).K8)(() => a.open ? s(358377).default.state : void 0, [a]),
                    p = function(e) {
                        let {
                            slashMenuState: t,
                            environment: i
                        } = e, {
                            actionRegistryDependencies: o
                        } = (0, s(907225).h)(), {
                            getInsertAndSlashActionsStore: l
                        } = o, r = (0, n.useMemo)(() => t.open ? l(i) : void 0, [i, t.open, l]);
                        return (0, s(682985).K8)(() => t.open && r ? t.isAddMenu ? r.state.insertActions : r.state.slashActions : [], [t, r])
                    }({
                        slashMenuState: a,
                        environment: r
                    }),
                    f = a.open && !a.oldTextValue;
                return (e = (0, s(682985).K8)(() => s(764615).Ay.state.open, []), t = (0, n.useRef)(!0), l = (0, s(533992).v3)(), (0, n.useEffect)(() => {
                    let e = s(764615).Ay.state.open;

                    function n(n) {
                        if (n.state.open && !e) {
                            let e = t.current ? "slash_menu_first_open_lag" : "slash_menu_open_lag";
                            s(680007).default.mark(e)
                        }
                        e = n.state.open
                    }
                    return s(764615).Ay.addListener(n), () => {
                        s(764615).Ay.removeListener(n)
                    }
                }, []), (0, n.useEffect)(() => {
                    if (e) {
                        let e = t.current ? "slash_menu_first_open_lag" : "slash_menu_open_lag";
                        s(680007).default.measure(e, {}), t.current = !1
                    }
                }, [l, e]), ! function({
                    slashMenuState: e,
                    isAddMenu: t,
                    textSelectionState: l
                }) {
                    let r = (0, n.useCallback)(t => {
                        if (!e.open) return;
                        if (!t) return void e.temporaryInputDataStore.setState(void 0);
                        let n = t.input === t.prefix ? "addMenu" === t.type ? s(962299).A.formatMessage(o.addButtonPlaceholder) : s(962299).A.formatMessage(o.slashInsertionPlaceholder) : "";
                        e.temporaryInputDataStore.setState({
                            prefix: t.prefix,
                            suffix: "",
                            completion: n,
                            prefixIcon: void 0
                        })
                    }, [e]);
                    (0, n.useEffect)(() => {
                        if (!e.open || (null == l ? void 0 : l.mode) !== "editing") return;
                        let s = i(e);
                        void 0 !== s ? t ? r({
                            type: "addMenu",
                            input: s,
                            prefix: ""
                        }) : r({
                            type: "slash",
                            input: `/${s}`,
                            prefix: "/"
                        }) : r(void 0)
                    }, [e, t, r, l])
                }({
                    slashMenuState: a,
                    isAddMenu: u,
                    textSelectionState: d
                }), ! function({
                    environment: e,
                    slashMenuState: t,
                    textSelectionState: i
                }) {
                    let {
                        educationDependencies: o
                    } = (0, s(907225).h)();
                    (0, n.useEffect)(() => {
                        var n;
                        if (!t.open || !i || "editing" !== i.mode) return;
                        let l = s(728372).AppStoreCurrentUserSettingsStore.state;
                        l && !(null != (n = l.getSettings()) && n.pressed_slash_tooltip) && (0, s(810737).t)() && o.completePressSlashTooltip(e)
                    }, [e, t, i, o])
                }({
                    environment: r,
                    slashMenuState: a,
                    textSelectionState: d
                }), ! function({
                    environment: e,
                    slashMenuState: t,
                    textSelectionState: o
                }) {
                    let {
                        analyticsDependencies: l
                    } = (0, s(907225).h)(), {
                        trackCreateBlock: r
                    } = l;
                    (0, n.useEffect)(() => {
                        if (!t.open || !o || "editing" !== o.mode) return;
                        let n = i(t),
                            l = s(764615).rA.state,
                            a = 0,
                            u = t;
                        n && (l ? a = n.length - t.lettersAtLastResult : (u = { ...t,
                            lettersAtLastResult: (null == n ? void 0 : n.length) ? ? 0,
                            filter: n
                        }, s(764615).Ay.setState(u)));
                        let {
                            multiSelection: c
                        } = o;
                        t.open && (!(0, s(689461).K)(c) || c.start.store !== u.textStore || function({
                            filter: e,
                            resultsEmpty: t,
                            numLettersSinceNoResult: n,
                            textStore: i
                        }) {
                            if (void 0 === e || t && n > 3) return !0;
                            if (1 === e.length) {
                                let t = e.at(-1);
                                if (t && /\s/g.test(t)) {
                                    let e = i.getValue();
                                    if (e && e.length >= 1) {
                                        let t = (0, s(247438).q4_)(e);
                                        return !(2 === t.length && t.startsWith("/"))
                                    }
                                }
                            } else if (e.length >= 2) return e.endsWith("  ");
                            return !1
                        }({
                            filter: n,
                            resultsEmpty: l,
                            numLettersSinceNoResult: a,
                            textStore: u.textStore
                        })) && ((0, s(104310).u)({
                            event: {
                                eventName: "close_slash_menu",
                                eventProperties: {
                                    id: t.id,
                                    source: n ? "auto_close" : "backspace"
                                }
                            }
                        }), (0, s(259413).V)({
                            environment: e,
                            dismissed: !0,
                            trackCreateBlock: r
                        }))
                    }, [e, t, o, r])
                }({
                    environment: r,
                    slashMenuState: a,
                    textSelectionState: d
                }), a.open) ? (0, c.jsx)(_, {
                    sections: p,
                    slashMenuState: a,
                    isEmptyBlock: f
                }) : null
            }
        }
    }
]);