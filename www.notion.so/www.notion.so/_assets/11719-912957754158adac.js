"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [11719], {
        17618: (e, t, o) => {
            o.d(t, {
                j: () => n
            });
            var r = o(296540),
                l = o(474848);

            function n(e) {
                let {
                    traceId: t,
                    feedbackState: n,
                    setFeedbackState: s,
                    feature: c,
                    iconHeight: d
                } = e, u = (0, o(960253).I)(() => ({
                    wrapper: { ...d ? {
                            height: d
                        } : {}
                    },
                    iconButton: { ...d ? {
                            height: d
                        } : {}
                    }
                }), [d]), {
                    thumbsUpType: p,
                    thumbsDownType: f
                } = (0, r.useMemo)(() => {
                    switch (c) {
                        case "ai_block":
                            return {
                                thumbsDownType: "ai_block_thumbs_down",
                                thumbsUpType: "ai_block_thumbs_up"
                            };
                        case "ai_autofill":
                            return {
                                thumbsDownType: "ai_autofill_thumbs_down",
                                thumbsUpType: "ai_autofill_thumbs_up"
                            };
                        default:
                            (0, o(722371).HB)(c)
                    }
                }, [c]), y = (0, o(109939).tz)(), g = (0, o(533992).v3)(), m = !(0, o(682985).O$)(o(205885).e), h = (0, r.useCallback)(() => {
                    o(550561).A.setState({ ...o(550561).A.state,
                        open: !0,
                        type: f,
                        traceId: t,
                        thumbsUpOrDown: "down"
                    }), s({
                        type: "thumbsdown",
                        userContent: "",
                        shareWithNotion: !0
                    }), i({
                        environment: g,
                        feature: c,
                        inferenceId: t,
                        feedbackType: "thumbsdown",
                        userContent: "",
                        shareWithNotion: !0
                    })
                }, [g, s, f, t, c]), v = (0, r.useCallback)(() => {
                    o(550561).A.setState({ ...o(550561).A.state,
                        open: !0,
                        type: p,
                        traceId: t,
                        thumbsUpOrDown: "up"
                    }), s({
                        type: "thumbsup",
                        userContent: "",
                        shareWithNotion: !0
                    }), i({
                        environment: g,
                        feature: c,
                        inferenceId: t,
                        feedbackType: "thumbsup",
                        userContent: "",
                        shareWithNotion: !0
                    })
                }, [g, s, p, t, c]);
                return (0, l.jsxs)("div", {
                    onClick: e => {
                        e.stopPropagation(), e.preventDefault()
                    },
                    style: u.wrapper,
                    children: [(0, l.jsx)(o(374533).A, {
                        onClick: v,
                        icon: a("thumbsup", (null == n ? void 0 : n.type) === "thumbsup"),
                        ariaLabel: y.formatMessage({
                            id: "AiFeatureFeedbackButtons.thumbsUp",
                            defaultMessage: "Helpful"
                        }),
                        disabled: m,
                        style: u.iconButton
                    }), (0, l.jsx)(o(374533).A, {
                        icon: a("thumbsdown", (null == n ? void 0 : n.type) === "thumbsdown"),
                        onClick: h,
                        ariaLabel: y.formatMessage({
                            id: "AiFeatureFeedbackButtons.thumbsDown",
                            defaultMessage: "Not helpful"
                        }),
                        disabled: m,
                        style: u.iconButton
                    })]
                })
            }

            function i(e) {
                let {
                    environment: t,
                    feature: r,
                    inferenceId: l,
                    feedbackType: n,
                    userContent: i,
                    shareWithNotion: a
                } = e;
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_feedback_given",
                        eventProperties: {
                            feature: r,
                            inference_id: l,
                            sentiment: "thumbsup" === n ? "thumbs_up" : "thumbs_down"
                        }
                    }
                }), o(942806).trackAIAction(t, {
                    type: "property_autofill",
                    inference_id: l,
                    feedback_type: n,
                    timestamp: new Date().toUTCString(),
                    user_comment: i,
                    share_with_notion: a
                })
            }

            function a(e, t) {
                switch (e) {
                    case "thumbsup":
                        if (t) return o(185655).P;
                        return o(770408).s;
                    case "thumbsdown":
                        if (t) return o(768318).m;
                        return o(169677).d
                }
            }
        },
        44797: (e, t, o) => {
            o.d(t, {
                G: () => r
            });

            function r() {
                let {
                    isIOS: e,
                    isIpad: t
                } = (0, o(533992).Y0)(), r = (0, o(83208).X)("ios_number_property_mab");
                return e && !t && r
            }
        },
        120080: (e, t, o) => {
            function r(e, t, r) {
                let l = t.getRecordStoreUIRoot(),
                    n = l instanceof o(970831).B && l.isPageBlock() && (0, o(444285).S)(l),
                    i = (0, o(861823).W)(l) && o(827482).A.getMode(e, l, r),
                    a = !!(0, o(45262).Q)(i);
                return !t.canEdit() || a || n
            }

            function l(e, t, o) {
                return !r(e, t, o)
            }
            o.d(t, {
                Y: () => r,
                k: () => l
            })
        },
        151086: (e, t, o) => {
            function r(e) {
                let {
                    store: t,
                    additionalStores: r,
                    collectionContextStore: l,
                    collectionSchema: n
                } = e;
                return l && (0, o(793550).br)({
                    store: t,
                    additionalStores: r,
                    collectionContextStore: l
                }) ? l.normalizedSchemaStore.state : n || t.getSchema() || {}
            }

            function l(e) {
                if (!(0, o(793550).br)({
                        store: e.store,
                        additionalStores: e.additionalStores,
                        collectionContextStore: e.collectionContextStore
                    })) return e.store.getAssociatedCollectionStore()
            }

            function n(e) {
                let t = l(e),
                    o = t ? t.getMappedProperty(e.property) : e.property;
                return r(e)[o]
            }

            function i({
                overlayState: e,
                pageContext: t
            }) {
                let {
                    store: r
                } = e, l = n(e);
                return l && (0, o(576348).ge)(null == t ? void 0 : t.publicEditModeStore.state, r) && o(9247).$M(l) && o(9247).om(l) && !e.collectionsBulkActionsToolbarStore
            }

            function a({
                overlayState: e
            }) {
                var t;
                let {
                    store: o
                } = e, r = o.getFormatStore(), l = null == r || null == (t = r.getKeyStore("agent_workflow_status").getValue()) ? void 0 : t[e.property];
                return (null == l ? void 0 : l.type) === "workflowRunCreated" && !e.collectionsBulkActionsToolbarStore
            }

            function s({
                overlayState: e
            }) {
                var t;
                let {
                    store: o
                } = e, r = o.getFormatStore(), l = null == r || null == (t = r.getKeyStore("agent_workflow_status").getValue()) ? void 0 : t[e.property];
                return (null == l ? void 0 : l.type) === "workflowRunCreated" && !e.collectionsBulkActionsToolbarStore
            }
            o.d(t, {
                A9: () => n,
                EN: () => r,
                K6: () => l,
                cL: () => i,
                rb: () => s,
                s8: () => a
            })
        },
        331941: (e, t, o) => {
            function r(e) {
                let {
                    environment: t,
                    place: r,
                    collectionContextStore: n,
                    query: i,
                    schema: a,
                    isFullScreen: s,
                    store: c
                } = e, d = "map_add_item", u = c.pointer.spaceId;
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionMapView.handleClick",
                    environment: t,
                    canUndo: !0,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    perform: e => {
                        let u = function(e) {
                            let {
                                environment: t,
                                transaction: r,
                                place: n,
                                query: i,
                                isFullScreen: a,
                                groupFormat: s,
                                collectionContextStore: c,
                                from: d
                            } = e;
                            if (!(0, o(194020).E)(t, (0, o(974410).f)(c.collectionStore()))) return;
                            let u = s ? [s] : [],
                                p = c.groupsStore.getGroupState(u);
                            if (!p) return;
                            c.searchQueryStore.state && (0, o(183502).S)({
                                searchQuery: "",
                                collectionContextStore: c,
                                isFullScreen: a
                            });
                            let f = (0, o(127872).Q)({
                                environment: t,
                                collectionContextStore: c,
                                groupsPointer: u,
                                shouldCoerce: !0,
                                templateStore: c.defaultPageTemplateStore.state,
                                transaction: r,
                                from: {
                                    createBlock: d
                                },
                                inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache
                            });
                            if (!f) return;
                            let y = f.newStore,
                                g = i.map_by;
                            if (g) return l({
                                environment: t,
                                store: y,
                                property: g,
                                place: n,
                                transaction: r
                            }), o(986939).A.isMobile ? (0, o(545586).navigateToBlock)({
                                environment: t,
                                store: y,
                                pageVisitSource: o(254656).y8.Create
                            }) : (0, o(908919).V)({
                                environment: t,
                                store: y,
                                peekMode: (0, o(28630).hH)(c),
                                resultsStore: null == p ? void 0 : p.resultsStore,
                                collectionContextStore: c,
                                pageVisitSource: o(254656).y8.Create
                            }), y
                        }({
                            environment: t,
                            transaction: e,
                            store: c,
                            query: i,
                            schema: a,
                            place: r,
                            isFullScreen: s,
                            groupFormat: void 0,
                            collectionContextStore: n,
                            from: d
                        });
                        o(549960).vH(t, {
                            from: d,
                            type: "page",
                            new_page_id: null == u ? void 0 : u.id,
                            creating_block_id: null == u ? void 0 : u.id,
                            ...(0, o(752242).sl)(n)
                        })
                    }
                })
            }

            function l(e) {
                let {
                    environment: t,
                    store: r,
                    place: l,
                    transaction: n,
                    property: i
                } = e, a = r.getAssociatedCollectionStore(), s = (null == a ? void 0 : a.getMappedProperty(i)) ? ? i, c = r.getPropertyStore(s), d = r.getTitleStore(), u = (null == l ? void 0 : l.name) ? ? (null == l ? void 0 : l.address), p = null == d ? void 0 : d.getValue(), f = (0, o(862060).eC)(c.getValue()), y = (0, o(862060).X1)(f), g = !p && u || (0, o(247438).AGB)(p, [
                    [String(y)]
                ]);
                return d && g && o(41403).R9({
                    environment: t,
                    store: d,
                    value: u ? [
                        [u]
                    ] : void 0,
                    transaction: n
                }), o(41403).R9({
                    environment: t,
                    store: c,
                    value: (0, o(862060).tk)(l),
                    transaction: n
                }), r
            }

            function n(e) {
                let {
                    environment: t,
                    transaction: r
                } = e, l = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!l) return;
                let n = e => {
                    (0, o(862759).m)({
                        userSettingsStore: l,
                        transaction: e,
                        data: {
                            map_view_new_button_clicked_at: Date.now()
                        }
                    })
                };
                r ? n(r) : (0, o(377796).createAndCommit)({
                    environment: t,
                    userAction: "collectionMapActions.markMapViewNewButtonClicked",
                    canUndo: !1,
                    cellTarget: "main",
                    perform: e => n(e)
                })
            }
            o.d(t, {
                Mj: () => r,
                WQ: () => l,
                gh: () => n
            })
        },
        395991: (e, t, o) => {
            o.d(t, {
                C4: () => eX,
                P5: () => te,
                IB: () => ty,
                Wk: () => tP,
                _H: () => tw
            }), o(18107), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(967357), o(898992), o(354520), o(672577), o(581454), o(737550);
            var r = o(296540),
                l = () => o(517013),
                n = () => o(76763),
                i = () => o(394517),
                a = () => o(465256),
                s = () => o(561872),
                c = () => o(694402),
                d = () => o(943003),
                u = () => o(932133),
                p = () => o(832375),
                f = () => o(247438),
                y = () => o(793358),
                g = () => o(356975);
            let m = new(o(815048)).O2("RollupPropertyMenu", () => o.e(97783).then(o.bind(o, 344831))),
                h = (0, o(815048)._h)(m, e => e.RollupPropertyMenu);
            var v = o.n(o(844751));

            function S(e) {
                return (0, o(682985).K8)(() => {
                    var t;
                    return (null == e || null == (t = e.collectionStore()) ? void 0 : t.isExternalSyncedCollection()) ? ? !1
                }, [e])
            }
            var b = o(474848);
            let x = {
                    style0: {
                        color: o(632079).Tj.text.inverseSecondary
                    },
                    style1: {
                        marginInlineEnd: 6
                    }
                },
                k = r.forwardRef(function(e, t) {
                    var r;
                    let {
                        locked: l,
                        option: n,
                        actionMenuOpen: i,
                        property: a,
                        collectionId: s,
                        analyticsFrom: c,
                        onChange: d,
                        onCloseActionMenu: u,
                        focused: p,
                        propertySchema: f,
                        onOpenActionMenu: y,
                        removeBackground: g
                    } = e;
                    return (0, b.jsx)(o(369064).N, {
                        debugName: "SelectPropertyMenuItem",
                        capture: i,
                        onEnter: o(763230).D_,
                        children: (0, b.jsx)(o(51831).m, {
                            content: e => (0, b.jsxs)("div", { ...e,
                                style: o(689266).Q$,
                                children: [(0, b.jsx)("div", {
                                    children: n.value
                                }), (0, b.jsx)("div", {
                                    style: x.style0,
                                    children: n.description
                                })]
                            }),
                            placement: "left",
                            disableTooltip: !(null != (r = n.description) && r.length),
                            children: r => (0, b.jsx)(o(95582).A, { ...(0, o(63390).A)(r, e),
                                ref: t,
                                title: (0, b.jsx)(o(593100).O, {
                                    format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium,
                                    value: n.value,
                                    color: n.color,
                                    hideTooltip: !0,
                                    showRemoveButton: !1,
                                    isSingle: !0,
                                    showEllipsis: !0,
                                    removeBackground: g
                                }),
                                desktopTitleStyle: x.style1,
                                isTokenTitle: !0,
                                right: !l && (0, b.jsx)(C, {
                                    property: a,
                                    collectionId: s,
                                    analyticsFrom: c,
                                    onChange: d,
                                    onCloseActionMenu: u,
                                    actionMenuOpen: i,
                                    focused: p,
                                    option: n,
                                    propertySchema: f,
                                    onOpenActionMenu: y
                                })
                            })
                        })
                    })
                });

            function C({
                property: e,
                collectionId: t,
                analyticsFrom: r,
                onChange: l,
                onCloseActionMenu: n,
                actionMenuOpen: i,
                focused: a,
                option: s,
                propertySchema: c,
                onOpenActionMenu: d
            }) {
                return (0, b.jsx)(o(942079).h, {
                    open: i,
                    origin: (0, b.jsx)(o(146349).A, {
                        onClick: () => d(s.value),
                        isMobile: o(986939).A.isMobile,
                        style: {
                            opacity: a || o(986939).A.isMobile ? 1 : 0
                        }
                    }),
                    option: s,
                    propertySchema: c,
                    property: e,
                    collectionId: t,
                    analyticsFrom: r,
                    onChange: l,
                    onClose: n
                })
            }
            let w = {
                footerMessage: {
                    padding: "8px 12px",
                    fontSize: "12px",
                    color: o(632079).Tj.text.secondary,
                    borderTop: `1px solid ${o(632079).Tj.border.secondary}`
                }
            };

            function A(e) {
                var t, l, n, i;
                let a, s, c, {
                        allowMultiple: d,
                        analyticsFrom: u,
                        autofillExplanation: f,
                        blockStore: y,
                        bulkAutofillButton: g,
                        canConfigureCollection: m,
                        collectionId: h,
                        disabled: x,
                        insertChar: k,
                        onAccept: C,
                        onChange: A,
                        property: M,
                        schema: I,
                        value: T,
                        additionalStores: B,
                        surface: E,
                        formQuestionStore: U
                    } = e,
                    L = (0, o(533992).v3)(),
                    {
                        isMobileNative: K
                    } = (0, o(533992).Y0)(),
                    W = (0, r.useRef)(void 0),
                    N = (0, o(713311).Ks)(),
                    H = (0, o(682985).uB)(void 0, o(419110).$),
                    [z, Y] = (0, o(739271).s)(),
                    $ = (0, o(682985).K8)(() => {
                        var e;
                        let t = null == N || null == (e = N.collectionStore()) ? void 0 : e.getSpaceShardedPointer();
                        if (t) return t;
                        let o = y.getSpaceId();
                        if (o) return {
                            id: h,
                            table: p().VlP,
                            spaceId: o
                        }
                    }, [N, y, h]),
                    [Q, q] = (0, r.useState)(""),
                    [G, X] = (0, r.useState)(void 0);
                (0, r.useEffect)(() => {
                    F(I, M, W), k && q(k)
                }, [k, M, I]);
                let J = (0, r.useCallback)(e => (function(e) {
                        let t, {
                            change: r,
                            allowMultiple: l,
                            analyticsFrom: n,
                            collectionPointer: i,
                            collectionContextStore: a,
                            createSelectColorRef: s,
                            environment: c,
                            onChange: d,
                            property: u,
                            schema: p,
                            setInputValue: f
                        } = e;
                        f("");
                        let y = p[u];
                        if (!y || !(0, o(532792).l)(y)) return;
                        let g = y.options || [];
                        if ("removeToken" === r.type) t = {
                            type: "selectPropertyMenuUpdateRemoveOption",
                            removeOption: r.removedToken
                        };
                        else if ("addTokens" === r.type) {
                            let e;
                            t = l ? {
                                type: "selectPropertyMenuUpdateAddOptions",
                                addOptions: e = r.newTokens
                            } : {
                                type: "selectPropertyMenuUpdateReplaceOptions",
                                options: e = r.newTokens.length > 0 ? [r.newTokens[r.newTokens.length - 1]] : []
                            };
                            let d = e.find(e => !g.find(t => t.value.toLowerCase() === e.toLowerCase()));
                            if (d) {
                                let e;
                                if (!i) return;
                                let r = {
                                    id: (0, o(92513).JW)(),
                                    value: d,
                                    color: s.current
                                };
                                e = "alphabetical" === y.auto_sort_options || "reverse_alphabetical" === y.auto_sort_options ? [(0, o(28630).og)({
                                    collectionPointer: i,
                                    property: u,
                                    propertySchema: y,
                                    newOption: r,
                                    isAscending: "alphabetical" === y.auto_sort_options
                                })] : [{
                                    pointer: i,
                                    command: "keyedObjectListAfter",
                                    path: ["schema", u, "options"],
                                    args: {
                                        value: r
                                    }
                                }], t.schemaOperations = e, F(p, u, s), a && (0, o(123491).L)(c, { ...(0, o(752242).sl)(a),
                                    property_type: y.type,
                                    action: "select_add_option",
                                    from: n
                                })
                            }
                        } else(0, o(722371).HB)(r);
                        if (a) {
                            let e = a.collectionStore();
                            if (e && e.isExternalSyncedCollection()) {
                                var m;
                                o(691968).j2({
                                    property_id: u,
                                    property_type: y.type,
                                    action: "option_select",
                                    integration: null == (m = e.getFormat()) ? void 0 : m.external_collection_type,
                                    collection_id: e.id,
                                    is_notion_only_property: (0, o(23803).sc)({
                                        collectionStore: e,
                                        propertyId: u,
                                        propertySchema: y,
                                        isExternallyImportedAndSyncedCollection: e.isExternallyImportedAndSyncedCollection()
                                    })
                                })
                            }
                        }
                        d(t)
                    })({
                        allowMultiple: d,
                        analyticsFrom: u,
                        collectionPointer: $,
                        collectionContextStore: N,
                        createSelectColorRef: W,
                        environment: L,
                        onChange: A,
                        property: M,
                        schema: I,
                        setInputValue: q,
                        ...e
                    }), [d, u, $, N, L, A, M, I]),
                    Z = (0, r.useCallback)(e => {
                        X(e)
                    }, []),
                    ee = (0, o(682985).K8)(() => {
                        if (!(0, o(22148).J)(E) || !U) return !1;
                        let e = (0, o(703049).hm)(I[M], U.getModel());
                        return void 0 !== e && T.length >= e
                    }, [U, E, M, I, T]),
                    et = S(N),
                    eo = (0, o(682985).K8)(() => !(0, o(23803).RL)({
                        isExternallyImportedAndSyncedCollection: et,
                        propertyId: M,
                        collectionStore: null == N ? void 0 : N.collectionStore(),
                        propertySchema: I[M]
                    }), [et, M, N, I]),
                    er = (0, o(682985).K8)(() => {
                        var e;
                        if (!N) return !1;
                        let t = null == (e = N.collectionStore()) ? void 0 : e.getFormat(),
                            r = I[M];
                        return (0, o(607689).dn)(t, r)
                    }, [N, M, I]),
                    el = (0, r.useMemo)(() => {
                        let e = I[M];
                        if (!er || !e || !(0, o(532792).l)(e)) return null;
                        let t = (0, b.jsx)("div", {
                            style: w.footerMessage,
                            children: (0, b.jsx)(O, {
                                environment: L,
                                property: M,
                                propertySchema: e,
                                collectionContextStore: N
                            })
                        });
                        return g && t ? (0, b.jsxs)("div", {
                            children: [g, t]
                        }) : g || t
                    }, [g, er, L, M, I, N]),
                    en = I[M],
                    ei = (0, o(682985).K8)(() => !!U && !!en && !!(0, o(532792).l)(en) && "dropdown" === (0, o(805999).KU)({
                        formQuestionStore: U,
                        propertySchema: en
                    }), [U, en]);
                if (!en || !(0, o(532792).l)(en)) return null;
                let ea = void 0 !== U ? (en.options || []).map(e => ({ ...e,
                        color: "default"
                    })) : en.options || [],
                    es = (t = Q, l = ea, n = m, i = eo, s = l.map(e => e.value), t ? (a = v().filter(t, s).map(e => e.original), !l.find(e => e.value.toLowerCase() === t.toLowerCase()) && t.trim().length > 0 && n && !i && a.push(t.trim().replace(/,/g, ""))) : a = s, a),
                    ec = 0 === es.length,
                    ed = (0, b.jsx)(_, {
                        inputComboboxProps: z,
                        openPropertyActionMenu: G,
                        disabled: x,
                        value: T,
                        inputValue: Q,
                        handleOnTokenInputChange: J,
                        setInputValue: q,
                        options: ea,
                        propertySchema: en,
                        autofillExplanation: f
                    });
                return (c = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.Modal,
                    title: en.name,
                    header: ed,
                    footer: el,
                    includeFixedHeaderSpacing: !0,
                    scrollerStyle: {
                        paddingBottom: o(69118).H
                    }
                } : {
                    menuType: o(649476).gu.Popup,
                    header: ed,
                    tokenInputHeader: !0,
                    footer: el
                }, x) ? (0, b.jsx)(o(747369).A, { ...c
                }) : (0, b.jsx)(o(747369).A, { ...c,
                    children: ec ? (0, b.jsx)(o(844565).A, {
                        title: !m || eo ? (0, b.jsx)(P, {}) : (0, b.jsx)(j, {}),
                        children: K ? (0, b.jsx)(o(498341).u, {
                            title: (0, b.jsx)(P, {})
                        }) : void 0
                    }) : (0, b.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        initialFocus: Q.length > 0 ? 0 : void 0,
                        sections: [{
                            key: 1,
                            render: e => (0, b.jsx)(R, {
                                collectionPointer: $,
                                property: M,
                                schema: I,
                                onChange: A,
                                canConfigureCollection: m,
                                shouldHideCreateNewOption: eo,
                                menuListStore: H,
                                args: e,
                                tokens: es
                            }),
                            items: function(e) {
                                let {
                                    analyticsFrom: t,
                                    canConfigureCollection: r,
                                    collectionId: l,
                                    createSelectColorRef: n,
                                    handleOnTokenInputChange: i,
                                    handleSetOpenPropertyActionMenu: a,
                                    onChange: s,
                                    openPropertyActionMenu: c,
                                    options: d,
                                    property: u,
                                    schema: p,
                                    tokens: f,
                                    value: y,
                                    additionalStores: g,
                                    isLimitReached: m,
                                    allowMultiple: h,
                                    shouldRemoveTokenBackground: v
                                } = e;
                                return f.map(e => {
                                    let f = d.find(t => t.value === e);
                                    return f || (f = d.find(t => t.value.toLowerCase() === e.toLowerCase())), {
                                        key: e,
                                        render: i => {
                                            if (f) return (0, b.jsx)(D, {
                                                analyticsFrom: t,
                                                canConfigureCollection: r,
                                                collectionId: l,
                                                handleSetOpenPropertyActionMenu: a,
                                                onChange: s,
                                                openPropertyActionMenu: c,
                                                option: f,
                                                property: u,
                                                props: i,
                                                schema: p,
                                                value: y,
                                                shouldRemoveTokenBackground: v
                                            }); {
                                                let t = {
                                                    id: (0, o(698596).Ay)(),
                                                    value: e,
                                                    color: n.current
                                                };
                                                return (0, b.jsx)(V, {
                                                    props: i,
                                                    newOption: t,
                                                    token: e
                                                })
                                            }
                                        },
                                        action: () => {
                                            h && m || !(g && g.length > 0) && y.find(t => t.toLowerCase() === e.toLowerCase()) || i({
                                                change: {
                                                    type: "addTokens",
                                                    newTokens: [e]
                                                }
                                            })
                                        }
                                    }
                                })
                            }({
                                analyticsFrom: u,
                                canConfigureCollection: m,
                                collectionId: h,
                                createSelectColorRef: W,
                                handleOnTokenInputChange: J,
                                handleSetOpenPropertyActionMenu: Z,
                                onChange: A,
                                openPropertyActionMenu: G,
                                options: ea,
                                property: M,
                                schema: I,
                                tokens: es,
                                value: T,
                                additionalStores: B,
                                isLimitReached: ee,
                                allowMultiple: d,
                                shouldRemoveTokenBackground: ei
                            })
                        }],
                        onAccept: (e, t, o) => {
                            C(o)
                        },
                        store: H,
                        comboboxProps: Y
                    })
                })
            }

            function _({
                inputComboboxProps: e,
                openPropertyActionMenu: t,
                disabled: l,
                value: n,
                inputValue: i,
                handleOnTokenInputChange: a,
                setInputValue: c,
                options: d,
                propertySchema: u,
                autofillExplanation: p
            }) {
                let {
                    isAndroid: f,
                    isPhone: y
                } = (0, o(533992).Y0)(), g = (0, o(109939).tz)(), m = (0, r.useCallback)(e => o(381453).oE(n.map(t => {
                    let r = (0, s().jy)(e, t);
                    if (r) return (0, b.jsx)(o(593100).O, {
                        value: r.value,
                        color: r.color,
                        showRemoveButton: !l,
                        isSingle: !0,
                        format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium,
                        shouldShrink: !0,
                        onClickRemove: () => {
                            a({
                                change: {
                                    type: "removeToken",
                                    removedToken: t
                                }
                            })
                        },
                        showEllipsis: !0
                    }, r.id)
                })), [l, a, n])(d), h = u.select_ai_inference, {
                    shouldShowLegacyAutofill: v
                } = (0, o(251955).D)({
                    aiInference: h
                }), S = (0, o(960253).I)(() => ({
                    tokenWrapStyle: { ...(0, o(642065)._Q)({
                            isPhone: y
                        }).table.token,
                        gap: 6
                    }
                }), [y]), x = (0, r.useCallback)(() => {
                    n.length > 0 && a({
                        change: {
                            type: "removeToken",
                            removedToken: n[n.length - 1]
                        }
                    })
                }, [a, n]);
                return (0, b.jsxs)(o(844565).A, {
                    disableDesktopPadding: !0,
                    children: [(0, b.jsx)(o(160319).Ay, {
                        focus: o(986939).A.isMobile ? void 0 : !t,
                        focusAfterAnimation: !0,
                        format: o(160319).le.Select,
                        tokens: m,
                        tokenWrapStyle: S.tokenWrapStyle,
                        placeholder: null != h && h.auto_update_on_edit && v ? g.formatMessage({
                            id: "database.selectPropertyEditMenu.searchPlaceholder.aiAutoUpdate",
                            defaultMessage: "Empty"
                        }) : g.formatMessage({
                            id: "database.selectPropertyEditMenu.searchPlaceholder",
                            defaultMessage: "Search for an option..."
                        }),
                        onRemoveLastToken: x,
                        value: i,
                        disabled: l,
                        hideInput: !1,
                        onChange: e => c(e.target.value),
                        dontShowBorderBottom: f || o(986939).A.isMobile,
                        ...e,
                        suppressFocusRing: !0
                    }), p]
                })
            }

            function P() {
                return (0, b.jsx)(o(109939).sA, {
                    id: "database.selectPropertyEditMenu.noResults",
                    defaultMessage: "No options found"
                })
            }

            function M() {
                return (0, b.jsx)(o(109939).sA, {
                    id: "database.selectPropertyEditMenu.selectOnlyPrompt",
                    defaultMessage: "Select an option"
                })
            }

            function j() {
                return (0, b.jsx)(o(109939).sA, {
                    id: "database.selectPropertyEditMenu.selectOrCreatePrompt",
                    defaultMessage: "Select an option or create one"
                })
            }
            let I = (0, o(109939).YK)({
                    limitedOptions: {
                        id: "database.selectPropertyEditMenu.externalCollection.limitedOptions",
                        defaultMessage: "Only options already assigned to issues in your Jira project are available"
                    },
                    limitedStatuses: {
                        id: "database.selectPropertyEditMenu.externalCollection.limitedStatuses",
                        defaultMessage: "Only statuses already assigned to issues in your Jira project are available"
                    }
                }),
                T = {
                    display: "inline-flex",
                    alignItems: "center",
                    marginInlineStart: "2px",
                    verticalAlign: "middle",
                    cursor: "pointer"
                };

            function O({
                environment: e,
                property: t,
                propertySchema: l,
                collectionContextStore: n
            }) {
                let i = (0, r.useCallback)(() => {
                        var e;
                        let r = null == n ? void 0 : n.collectionStore();
                        o(691968).j2({
                            property_id: t,
                            property_type: l.type,
                            action: "help_link_click_for_options_limitation",
                            integration: null == r || null == (e = r.getFormat()) ? void 0 : e.external_collection_type,
                            collection_id: null == r ? void 0 : r.id
                        })
                    }, [t, l.type, n]),
                    a = "status" === l.type;
                return (0, b.jsxs)("span", {
                    children: [(0, b.jsx)(o(109939).sA, { ...I[a ? "limitedStatuses" : "limitedOptions"]
                    }), (0, b.jsx)(o(68774).N, {
                        href: (0, o(442564).x)("guides.externalImportAndSync"),
                        style: T,
                        onClick: i,
                        children: (0, b.jsx)(o(708966).Q, {
                            iconGroup: o(799472).u,
                            variantName: "small"
                        })
                    })]
                })
            }
            let B = {
                marginInlineEnd: 6,
                lineHeight: 1.3
            };

            function V({
                props: e,
                newOption: t,
                token: r
            }) {
                return (0, b.jsx)(o(95582).A, { ...e,
                    title: (0, b.jsxs)(o(4458).fI, {
                        minWidth: 0,
                        children: [(0, b.jsx)("div", {
                            style: B,
                            children: (0, b.jsx)(o(109939).sA, {
                                id: "database.selectPropertyEditMenu.createLabel",
                                defaultMessage: "Create"
                            })
                        }), (0, b.jsx)(o(593100).O, {
                            value: t.value,
                            color: t.color,
                            showRemoveButton: !1,
                            isSingle: !0,
                            format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium,
                            showEllipsis: !0
                        })]
                    }),
                    isTokenTitle: !0
                })
            }

            function R({
                args: e,
                tokens: t,
                collectionPointer: l,
                property: n,
                schema: i,
                onChange: a,
                canConfigureCollection: s,
                shouldHideCreateNewOption: c,
                menuListStore: d
            }) {
                let u = (0, r.useCallback)(e => (function(e, t, r, l, n, i) {
                    if (!t) return;
                    let a = (0, o(910321).o)({
                        newOptions: e,
                        collectionPointer: t,
                        property: r,
                        schema: l
                    });
                    if (a) {
                        let e = l[r];
                        e && (0, o(532792).l)(e) && "manual" !== (e.auto_sort_options || "manual") && a.push({
                            pointer: t,
                            command: "update",
                            path: ["schema", r],
                            args: {
                                auto_sort_options: "manual"
                            }
                        }), n({
                            type: "selectPropertyMenuUpdateSchema",
                            schemaOperations: a
                        })
                    }
                    i.reset()
                })(e, l, n, i, a, d), [l, n, i, a, d]);
                return !s || c ? (0, b.jsx)(o(844565).A, { ...e,
                    title: (0, b.jsx)(M, {}),
                    children: e.children
                }) : (0, b.jsx)(o(844565).A, { ...e,
                    title: (0, b.jsx)(j, {}),
                    children: (0, b.jsx)(o(66467).Ay, {
                        direction: "vertical",
                        keys: t,
                        renderKey: o => e.children[t.indexOf(o)],
                        onDrop: u
                    })
                })
            }

            function D({
                analyticsFrom: e,
                canConfigureCollection: t,
                collectionId: r,
                handleSetOpenPropertyActionMenu: l,
                onChange: n,
                openPropertyActionMenu: i,
                option: a,
                property: s,
                props: c,
                schema: d,
                value: u,
                shouldRemoveTokenBackground: p
            }) {
                let f = a.value === i,
                    y = d[s];
                return y && (0, o(532792).l)(y) ? (0, b.jsx)(k, { ...c,
                    option: a,
                    showDragHandle: t && !o(986939).A.isMobile,
                    locked: !t,
                    property: s,
                    analyticsFrom: e,
                    collectionId: r,
                    onChange: e => (function(e, t, r, l, n) {
                        let i = r[t];
                        if (!i || !(0, o(532792).l)(i)) return;
                        let a = i.options || [],
                            s = [...a],
                            c = l.filter(e => {
                                let t = a.find(t => t.value === e);
                                return !t || s.some(e => e.id === t.id)
                            });
                        n(o(381453).n4(c, l) ? {
                            type: "selectPropertyMenuUpdateSchema",
                            schemaOperations: e
                        } : {
                            type: "selectPropertyMenuUpdateReplaceOptions",
                            options: c,
                            schemaOperations: e
                        })
                    })(e, s, d, u, n),
                    actionMenuOpen: f,
                    propertySchema: y,
                    onCloseActionMenu: l,
                    onOpenActionMenu: l,
                    removeBackground: p
                }) : null
            }

            function F(e, t, r) {
                let l = e[t];
                if (!l || !(0, o(532792).l)(l)) return;
                let n = l.options || [];
                r.current = (0, o(326044).Z)(n)
            }

            function E(e) {
                var t, r;
                let l;
                if (!e.collectionStore || !e.collectionType) return !1;
                let n = e.collectionStore.getFormat();
                return !!((null == n ? void 0 : n.external_collection_type) && (null == n || null == (t = n.sync_state) ? void 0 : t.enable_two_way_sync) && (!(l = null == (r = e.collectionStore) ? void 0 : r.getSpaceStore()) || (0, o(262166).OX)(l.getSubscriptionTier())))
            }
            o(16280);
            let U = {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 0",
                    width: "100%"
                },
                L = {
                    width: 14,
                    height: 14,
                    borderRadius: 12
                };

            function K({
                width: e
            }) {
                let t = (0, o(960253).I)(() => ({
                    line: {
                        height: 12,
                        borderRadius: 6,
                        width: e
                    }
                }), [e]);
                return (0, b.jsxs)("div", {
                    style: U,
                    children: [(0, b.jsx)(o(795830).P, {
                        style: L
                    }), (0, b.jsx)(o(795830).P, {
                        style: t.line
                    })]
                })
            }
            let W = {
                description: {
                    color: o(632079).Tj.text.inverseSecondary
                },
                footerMessage: {
                    padding: "8px 12px",
                    fontSize: "12px",
                    color: o(632079).Tj.text.secondary,
                    borderTop: `1px solid ${o(632079).Tj.border.secondary}`
                },
                style0: {
                    fontWeight: o(699422).Wy.medium,
                    marginTop: 2
                },
                style1: {
                    fontSize: 12
                }
            };

            function N(e) {
                var t, l, n;
                let {
                    propertySchema: i,
                    blockPropertyValueOverlayStore: a,
                    onChange: c
                } = e, d = (0, o(533992).v3)(), {
                    isPhone: u,
                    isAndroid: p
                } = (0, o(533992).Y0)(), [f, y] = (0, r.useState)(e.initialValue ? ? ""), [g, m] = (0, r.useState)(""), h = (0, o(109939).tz)(), x = (0, o(682985).K8)(() => {
                    let e = a.state;
                    if (e.isOpen) return e.collectionContextStore
                }, [a]), k = (0, o(682985).K8)(() => {
                    let e = a.state;
                    if (e.isOpen) return e.store
                }, [a]), C = (0, o(682985).K8)(() => null == x ? void 0 : x.collectionStore(), [x]), w = (0, o(682985).K8)(() => (null == x ? void 0 : x.permissionScopesStore.state.canConfigureCollection) && (null == x ? void 0 : x.contextTypeFromStoreState) !== "collectionPage", [x]), A = S(x), _ = (0, o(83208).X)("use_dynamic_options_for_jira_sync_status_field"), P = function(e) {
                    let {
                        propertySchema: t,
                        collectionStore: l,
                        blockStore: n,
                        property: i
                    } = e, a = (0, o(533992).v3)(), [s, c] = (0, r.useState)(null), [d, u] = (0, r.useState)(!1), [p, f] = (0, r.useState)(null), y = (0, o(682985).K8)(() => (0, o(106576).ot)({
                        collectionStore: l,
                        blockStore: n
                    }), [l, n]), g = (0, o(682985).K8)(() => {
                        let e = i && (0, o(23803).sc)({
                            propertyId: i,
                            collectionStore: l,
                            propertySchema: t,
                            isExternallyImportedAndSyncedCollection: null == l ? void 0 : l.isExternallyImportedAndSyncedCollection()
                        });
                        return E(y) && !e
                    }, [y, l, i, t]), m = (0, o(682985).K8)(() => (0, o(23803).JD)(l) && (0, o(23803)._M)() && g && n && l, [g, n, l]);
                    return (0, r.useEffect)(() => {
                        if (!m) {
                            c(null), u(!1), f(null);
                            return
                        }
                        let e = !1;
                        return async function() {
                            u(!0), f(null);
                            try {
                                let t = await o(660107).nR({
                                    environment: a,
                                    blockStore: n,
                                    collectionStore: l
                                });
                                e || (c(t), u(!1))
                            } catch (t) {
                                e || (f(t instanceof Error ? t : Error(String(t))), c(null), u(!1))
                            }
                        }(), () => {
                            e = !0
                        }
                    }, [m, n, l, a, i]), { ...(0, r.useMemo)(() => {
                            if (!g) return {
                                externalOptions: null,
                                isLoading: !1,
                                error: null
                            };
                            if (d) return {
                                externalOptions: null,
                                isLoading: !0,
                                error: p
                            };
                            if (p) return {
                                externalOptions: null,
                                isLoading: !1,
                                error: p
                            };
                            try {
                                return {
                                    externalOptions: (0, o(106576).WS)({
                                        context: y,
                                        staticOptions: t.options ? ? [],
                                        staticGroups: t.groups ? ? [],
                                        externalStatusOptions: s
                                    }),
                                    isLoading: !1,
                                    error: null
                                }
                            } catch (e) {
                                return {
                                    externalOptions: null,
                                    isLoading: !1,
                                    error: e instanceof Error ? e : Error(String(e))
                                }
                            }
                        }, [g, y, t, s, d, p]),
                        isExternalStatusProperty: g
                    }
                }({
                    propertySchema: i,
                    collectionStore: C,
                    blockStore: k,
                    property: e.property
                }), M = (0, o(682985).K8)(() => {
                    let e = a.state;
                    return !!e.isOpen && (0, o(793550).br)({
                        store: e.store,
                        additionalStores: e.additionalStores,
                        collectionContextStore: e.collectionContextStore
                    })
                }, [a]), j = M ? [] : (null == (t = P.externalOptions) ? void 0 : t.options) ? ? i.options ? ? [], I = (0, s().jy)(j, f), T = (null == (l = P.externalOptions) ? void 0 : l.groups) ? ? i.groups ? ? [], B = I && T.find(e => {
                    var t;
                    return null == (t = e.optionIds) ? void 0 : t.includes(I.id)
                }), [V, R] = (0, o(739271).s)(), D = I ? [(0, b.jsx)(o(593100).q, {
                    value: I.value,
                    color: I.color,
                    groupColor: null == B ? void 0 : B.color,
                    isSingle: !0,
                    format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium,
                    onClickRemove: () => {
                        y(""), c(void 0, void 0)
                    },
                    showRemoveButton: void 0 === i.defaultOption,
                    shouldShrink: !0,
                    showEllipsis: !0,
                    tooltipPlacement: "left",
                    hideTooltip: !!(null == (n = I.description) ? void 0 : n.length)
                }, "status")] : [], F = (0, o(960253).I)(() => ({
                    tokenWrapStyle: { ...(0, o(642065)._Q)({
                            isPhone: u
                        }).table.token,
                        gap: 6
                    }
                }), [u]), U = M ? null : (0, b.jsx)(o(160319).Ay, {
                    focus: !o(986939).A.isMobile || void 0,
                    focusAfterAnimation: !0,
                    format: o(160319).le.Select,
                    tokens: D,
                    tokenWrapStyle: F.tokenWrapStyle,
                    placeholder: h.formatMessage({
                        id: "database.selectPropertyEditMenu.searchStatusPlaceholder",
                        defaultMessage: "Search for an option"
                    }),
                    onRemoveLastToken: o(763230).lQ,
                    value: g,
                    disabled: e.disabled,
                    hideInput: e.disabled,
                    onChange: e => {
                        m(e.target.value)
                    },
                    dontShowBorderBottom: p,
                    ...V,
                    suppressFocusRing: !0
                }), L = (0, r.useMemo)(() => A && !_ ? (0, b.jsx)("div", {
                    style: W.footerMessage,
                    children: (0, b.jsx)(O, {
                        environment: d,
                        property: e.property,
                        propertySchema: i,
                        collectionContextStore: x
                    })
                }) : null, [A, _, d, e.property, i, x]), N = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.Modal,
                    title: i.name,
                    footer: L,
                    scrollerStyle: {
                        paddingBottom: o(69118).H
                    }
                } : {
                    menuType: o(649476).gu.Popup,
                    header: U,
                    footer: L,
                    tokenInputHeader: !0
                };
                if (e.disabled) return (0, b.jsx)(o(747369).A, { ...N
                });
                let z = j;
                if ("" !== g) {
                    let e = v().filter(g, j.map(e => e.value)).map(e => e.original);
                    z = j.filter(t => e.includes(t.value))
                }
                let Y = T.map(e => {
                        let t = z.filter(t => {
                            var o;
                            return null == (o = e.optionIds) ? void 0 : o.includes(t.id)
                        });
                        if (0 !== t.length) return {
                            group: e,
                            groupOptions: t
                        }
                    }).filter(o(722371).O9),
                    $ = Y.length > 1,
                    Q = function(e) {
                        let {
                            isLoading: t
                        } = e;
                        if (t) return {
                            items: o(23803).eg.map((e, t) => ({
                                key: `loading-shimmer-${String(e)}-${t}`,
                                render: t => (0, b.jsx)(o(95582).A, { ...t,
                                    disabled: !0,
                                    disabledFeedback: !1,
                                    focused: !1,
                                    title: (0, b.jsx)(K, {
                                        width: e
                                    })
                                }),
                                action: () => {}
                            })),
                            key: "loading-section",
                            render: e => (0, b.jsx)(o(844565).A, { ...e
                            })
                        }
                    }({
                        isLoading: P.isLoading
                    }),
                    q = M ? [{
                        items: T.map(t => ({
                            key: t.name,
                            render: e => (0, b.jsx)(o(95582).A, { ...e,
                                disabledFeedback: !0,
                                focused: e.focused,
                                title: (0, b.jsx)(o(575395).RS, {
                                    style: W.style0,
                                    group: t,
                                    showIcon: !0,
                                    showColor: !0
                                })
                            }),
                            action: () => {
                                H({
                                    environment: d,
                                    collectionContextStore: x,
                                    property: e.property,
                                    propertySchema: i
                                }), e.onChange(void 0, t.name)
                            }
                        })),
                        key: "all-groups",
                        render: e => (0, b.jsx)(o(844565).A, { ...e
                        })
                    }] : Y.map(({
                        group: t,
                        groupOptions: r
                    }, l) => ({
                        items: r.map(r => {
                            let l = e.shouldDisableOption ? e.shouldDisableOption(r.id) : {
                                disabled: !1
                            };
                            return {
                                key: r.value,
                                render: e => {
                                    var n;
                                    return (0, b.jsx)(o(51831).m, {
                                        disableTooltip: l.disabled && !(null != (n = r.description) && n.length),
                                        placement: "left",
                                        content: e => l.disabled ? l.disableReasonMessage : (0, b.jsxs)("div", { ...e,
                                            style: o(689266).Q$,
                                            children: [(0, b.jsx)("div", {
                                                children: r.value
                                            }), (0, b.jsx)("div", {
                                                style: W.description,
                                                children: r.description
                                            })]
                                        }),
                                        children: n => {
                                            var i;
                                            return (0, b.jsx)(o(95582).A, { ...(0, o(63390).A)(n, e),
                                                disabled: l.disabled,
                                                disabledFeedback: !0,
                                                focused: e.focused,
                                                title: (0, b.jsx)(o(593100).q, { ...n,
                                                    value: r.value,
                                                    color: r.color,
                                                    hideTooltip: !!(null == (i = r.description) ? void 0 : i.length),
                                                    tooltipPlacement: "left",
                                                    groupColor: t.color,
                                                    showRemoveButton: !1,
                                                    isSingle: !0,
                                                    format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium
                                                }),
                                                isTokenTitle: !0
                                            })
                                        }
                                    })
                                },
                                action: () => {
                                    H({
                                        environment: d,
                                        collectionContextStore: x,
                                        property: e.property,
                                        propertySchema: i
                                    }), e.onChange(r.value, t.name)
                                }
                            }
                        }),
                        key: `group-${l}`,
                        render: e => (0, b.jsx)(o(844565).A, { ...e,
                            topBorder: e.index > 0,
                            title: $ ? (0, b.jsx)(o(575395).RS, {
                                group: t,
                                showColor: !1,
                                style: W.style1
                            }) : null
                        })
                    })),
                    G = x && w && !A ? {
                        items: [{
                            key: "edit property",
                            render: e => (0, b.jsx)(o(95582).A, { ...e,
                                title: (0, b.jsx)(o(109939).sA, {
                                    defaultMessage: "Edit property",
                                    id: "database.tableHeaderCell.editProperty"
                                }),
                                icon: (0, b.jsx)(o(16275).I, {
                                    icon: o(213039).M
                                })
                            }),
                            action: () => {
                                let t = x.settingsStore;
                                x.collectionStore() && (e.onDismiss(), (0, o(935341).j)({
                                    environment: d,
                                    collectionContextStore: x,
                                    fit: "settings"
                                }), (0, o(200371).O)({
                                    collectionContextStore: x,
                                    collectionSettingsStore: t
                                }), (0, o(76790).a)({
                                    collectionSettingsStore: t,
                                    item: {
                                        type: "property",
                                        formatKey: x.getPropertyFormatKey(),
                                        property: e.property
                                    }
                                }))
                            }
                        }],
                        key: "edit-property",
                        render: e => (0, b.jsx)(o(844565).A, { ...e,
                            topBorder: e.index > 0
                        })
                    } : void 0;
                return (0, b.jsx)(o(747369).A, { ...N,
                    children: (0, b.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        initialFocus: g.length > 0 ? 0 : void 0,
                        sections: o(381453).oE([Q, ...P.isLoading ? [] : q, G]),
                        onAccept: (t, o, r) => {
                            e.onAccept(r)
                        },
                        comboboxProps: R
                    })
                })
            }

            function H(e) {
                var t;
                let {
                    collectionContextStore: r,
                    property: l,
                    propertySchema: n
                } = e, i = null == r ? void 0 : r.collectionStore();
                !i || i.isExternalSyncedCollection() && o(691968).j2({
                    property_id: l,
                    property_type: "status",
                    action: "option_select",
                    integration: null == (t = i.getFormat()) ? void 0 : t.external_collection_type,
                    collection_id: i.id,
                    is_notion_only_property: (0, o(23803).sc)({
                        collectionStore: i,
                        propertyId: l,
                        propertySchema: n,
                        isExternallyImportedAndSyncedCollection: i.isExternallyImportedAndSyncedCollection()
                    })
                })
            }
            let z = (0, o(109939).YK)({
                cannotSetSprintToCurrentTooltip: {
                    id: "SprintStatusPropertyMenu.cannotSetSprintToCurrentTooltip",
                    defaultMessage: "Current sprint already exists"
                },
                cannotSetSprintToNextTooltip: {
                    id: "SprintStatusPropertyMenu.cannotSetSprintToNextTooltip",
                    defaultMessage: "Next sprint already exists"
                },
                cannotSetSprintToLastTooltip: {
                    id: "SprintStatusPropertyMenu.cannotSetSprintToLastTooltip",
                    defaultMessage: "Last sprint already exists"
                }
            });

            function Y(e) {
                let {
                    blockPropertyValueOverlayStore: t
                } = e, l = (0, o(533992).v3)(), n = (0, o(713311).ET)(), i = (0, o(682985).O$)(n.normalizedSchemaStore), a = function({
                    sprintCollectionStore: e,
                    environment: t,
                    normalizedBlockSchema: r
                }) {
                    let [{
                        value: l,
                        status: n
                    }] = (0, o(97668).Yb)(async () => {
                        var l;
                        if (!e) return;
                        let n = e.getSchema(),
                            i = e.getFormat().app_config_uri;
                        if (!i || i !== o(103249).av) return;
                        let a = (0, o(613211).qk)(n, i).includes("last"),
                            s = o(613211).n$[i],
                            c = s.current.reducer.get(r),
                            d = s.next.reducer.get(r),
                            u = s.last.reducer.get(r);
                        if (!c || !d) return;
                        let p = {
                                userId: t.currentUser.id,
                                userTimeZone: (0, o(714350).P)(),
                                searchQuery: void 0,
                                reducers: {
                                    [o(11448).Xk]: c,
                                    [o(11448).tO]: d,
                                    ...a && u ? {
                                        [o(11448).el]: u
                                    } : {}
                                },
                                currentPageInRelatedCollection: void 0
                            },
                            f = null == (l = e.getParentBlockStore()) ? void 0 : l.getCollectionViewStores()[0],
                            y = e.getSpaceId();
                        if (!f) return;
                        let g = await t.api.callApi({
                            eventName: "queryCollection",
                            environment: t,
                            data: {
                                clientType: "notion_app",
                                source: {
                                    type: "collection",
                                    id: e.id,
                                    spaceId: y
                                },
                                collectionView: {
                                    id: f.id,
                                    spaceId: y
                                },
                                loader: p
                            },
                            tracking: {
                                src: "sprint_status_overlay_check"
                            }
                        });
                        if ("success" !== g.type) return;
                        let m = g.data.result.reducerResults[o(11448).Xk],
                            h = g.data.result.reducerResults[o(11448).tO];
                        if ("results" !== m.type || "results" !== h.type) return;
                        let v = m.blockIds.length > 0,
                            S = h.blockIds.length > 0;
                        if (!a) return {
                            hasCurrentSprint: v,
                            hasNextSprint: S,
                            hasLastSprint: !1
                        };
                        let b = g.data.result.reducerResults[o(11448).el];
                        if ("results" === b.type) return {
                            hasCurrentSprint: v,
                            hasNextSprint: S,
                            hasLastSprint: b.blockIds.length > 0
                        }
                    }, [t, r, e]);
                    if ("resolved" === n && l) return l
                }({
                    sprintCollectionStore: (0, o(682985).K8)(() => {
                        let e = t.state;
                        if (e.isOpen) return e.store.getAssociatedCollectionStore()
                    }, [t]),
                    environment: l,
                    normalizedBlockSchema: i
                }), s = (0, o(109939).tz)(), c = (0, r.useCallback)(e => void 0 === a && [o(11448).tO, o(11448).Xk, o(11448).el].includes(e) ? {
                    disabled: !0
                } : e === o(11448).tO && null != a && a.hasNextSprint ? {
                    disabled: !0,
                    disableReasonMessage: s.formatMessage(z.cannotSetSprintToNextTooltip)
                } : e === o(11448).Xk && null != a && a.hasCurrentSprint ? {
                    disabled: !0,
                    disableReasonMessage: s.formatMessage(z.cannotSetSprintToCurrentTooltip)
                } : e === o(11448).el && null != a && a.hasLastSprint ? {
                    disabled: !0,
                    disableReasonMessage: s.formatMessage(z.cannotSetSprintToLastTooltip)
                } : {
                    disabled: !1
                }, [a, s]);
                return (0, b.jsx)(N, { ...e,
                    shouldDisableOption: c
                })
            }
            var $ = () => o(41403),
                Q = () => o(421439),
                q = () => o(173157),
                G = () => o(546605);
            class X extends G().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let J = {
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: 180,
                    cursor: "zoom-in"
                },
                Z = {
                    flex: "auto",
                    overflow: "hidden"
                },
                ee = {
                    position: "relative",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    margin: 0,
                    alignSelf: "center",
                    width: "100%"
                };

            function et(e) {
                let t, l, n, {
                        disabled: i,
                        store: a,
                        name: s,
                        url: c,
                        onChange: d,
                        onDelete: u
                    } = e,
                    p = o(939438).rS({
                        url: e.url
                    }),
                    f = (0, r.useRef)(null),
                    y = (0, o(533992).v3)(),
                    g = (0, o(682985).uB)(void 0, X),
                    m = (0, o(682985).O$)(g),
                    h = (0, r.useCallback)(e => {
                        if (!m.open) return;
                        g.setState({ ...m,
                            inputValue: e
                        });
                        let t = o(728601).SB({
                            title: e,
                            source: c
                        });
                        d({
                            url: c,
                            name: t
                        })
                    }, [g, m, d, c]),
                    v = (0, r.useCallback)(() => {
                        g.setState({
                            open: !0,
                            inputValue: s
                        })
                    }, [g, s]),
                    S = (0, r.useCallback)(() => {
                        g.setState({
                            open: !1
                        })
                    }, [g]),
                    x = (0, r.useCallback)(() => {
                        u(c)
                    }, [u, c]),
                    k = (0, r.useCallback)(() => {
                        let e = () => {
                            o(595053).uR(y, {
                                url: c,
                                from: "FilePropertyMenuItem"
                            }), o(222365).KE(y, {
                                url: c,
                                download: !0,
                                downloadName: s,
                                permissionRecord: a.pointer
                            })
                        };
                        a.getCreatedById() === o(268033).xY.id ? (0, o(805999).TW)({
                            propertyType: "file",
                            onConfirm: e
                        }) : e()
                    }, [y, s, c, a]),
                    C = (0, r.useCallback)(() => {
                        let e = o(218744).default.getConfigKey("file_block_download", "force_download_extensions"),
                            t = o(728601).YR({
                                url: c,
                                forceDownloadExtensions: e
                            });
                        o(222365).OG(y, {
                            url: c,
                            type: "file",
                            from: "view_original",
                            downloadName: s,
                            permissionRecord: a.pointer,
                            download: t
                        })
                    }, [y, s, a.pointer, c]),
                    w = (0, r.useCallback)(() => {
                        if (!f.current) return;
                        let e = f.current.getBoundingClientRect(),
                            t = e.width / e.height;
                        o(515260).o9({
                            environment: y,
                            renderFullScreenNode: () => (0, b.jsx)(o(738251).A, {
                                url: c,
                                isAuthenticated: !0,
                                permissionRecord: a.pointer,
                                width: window.innerWidth,
                                render: (e, t) => (0, b.jsx)("img", {
                                    src: t,
                                    style: ee
                                })
                            }),
                            fullScreenNodeRect: e,
                            contentAspectRatio: t,
                            blockStore: a,
                            imageUrl: c
                        })
                    }, [y, a, c]),
                    A = (0, r.useCallback)(() => {
                        if (m.open) return (0, b.jsx)(en, {
                            url: e.url,
                            inputValue: m.inputValue,
                            isOpen: m.open,
                            handleFileRename: h,
                            handleCloseRenamePopover: S
                        })
                    }, [m, S, h, e.url]),
                    _ = (0, b.jsx)(eo, {
                        fileIsImage: p,
                        fileUrl: c,
                        disabled: i,
                        handleOpenFullscreenPreviewOfFile: w,
                        handleDownloadFile: k,
                        handleViewOriginalFile: C,
                        handleOpenRenamePopover: v,
                        handleDeleteFile: x
                    });
                return p ? (t = (0, b.jsx)(o(738251).A, {
                    url: c,
                    isAuthenticated: !0,
                    permissionRecord: e.store.pointer,
                    width: 300,
                    render: (e, t) => (0, b.jsx)("div", {
                        style: Z,
                        children: (0, b.jsx)("img", {
                            src: t,
                            style: J,
                            onClick: w,
                            ref: f
                        })
                    })
                }), l = {
                    paddingTop: o(986939).A.isMobile ? 12 : 8,
                    paddingBottom: o(986939).A.isMobile ? 12 : 8,
                    alignItems: "flex-start"
                }, (0, b.jsx)(o(95582).A, {
                    focused: !1,
                    showDragHandle: !i && !o(986939).A.isMobile,
                    style: l,
                    title: t,
                    right: _,
                    dontShrinkRight: !0
                })) : (n = (0, b.jsx)(o(95582).A, {
                    focused: !1,
                    showDragHandle: !e.disabled && !o(986939).A.isMobile,
                    onClick: C,
                    title: s,
                    icon: (0, b.jsx)(o(16275).I, {
                        icon: o(138266).B
                    }),
                    right: _,
                    dontShrinkRight: !0
                }), (0, b.jsx)(o(182718).zD, {
                    open: m.open,
                    popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                    content: A,
                    onDismiss: S,
                    children: n
                }))
            }

            function eo(e) {
                let {
                    disabled: t,
                    fileIsImage: l,
                    fileUrl: n,
                    handleOpenFullscreenPreviewOfFile: i,
                    handleDownloadFile: a,
                    handleViewOriginalFile: s,
                    handleOpenRenamePopover: c,
                    handleDeleteFile: d
                } = e, u = (0, r.useCallback)(e => (0, b.jsx)(o(146349).A, {
                    isMobile: o(986939).A.isMobile,
                    ...e
                }), []), p = (0, r.useCallback)(e => (0, b.jsx)(er, {
                    fileIsImage: l,
                    fileUrl: n,
                    disabled: t,
                    parent: e,
                    handleOpenFullscreenPreviewOfFile: i,
                    handleDownloadFile: a,
                    handleViewOriginalFile: s,
                    handleOpenRenamePopover: c,
                    handleDeleteFile: d
                }), [l, n, t, i, a, s, c, d]);
                return (0, b.jsx)(o(656252).A, {
                    popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                    bottomSheetInitialState: "half",
                    content: p,
                    children: u
                })
            }

            function er(e) {
                let {
                    parent: t,
                    disabled: l,
                    fileUrl: n,
                    fileIsImage: i,
                    handleOpenFullscreenPreviewOfFile: a,
                    handleDownloadFile: s,
                    handleViewOriginalFile: c,
                    handleOpenRenamePopover: d,
                    handleDeleteFile: u
                } = e, {
                    isNative: p
                } = (0, o(533992).v3)().device, f = (0, o(682985).K8)(() => o(218744).default.getConfigKey("file_block_download", "force_download_extensions"), []), y = (0, r.useMemo)(() => {
                    let e = [];
                    return i && e.push({
                        key: "fullscreen",
                        render: e => (0, b.jsx)(o(95582).A, { ...e,
                            title: (0, b.jsx)(o(109939).sA, {
                                defaultMessage: "Full screen",
                                id: "database.actionMenu.fileProperty.fullscreen.title"
                            })
                        }),
                        action: a
                    }), (o(728601)._J(n) || p) && e.push({
                        key: "download",
                        render: e => (0, b.jsx)(o(95582).A, { ...e,
                            title: (0, b.jsx)(o(109939).sA, {
                                defaultMessage: "Download",
                                id: "database.actionMenu.fileProperty.download.title"
                            })
                        }),
                        action: s
                    }), o(728601).YR({
                        url: n,
                        forceDownloadExtensions: f
                    }) || e.push({
                        key: "original",
                        render: e => (0, b.jsx)(o(95582).A, { ...e,
                            title: (0, b.jsx)(o(109939).sA, {
                                defaultMessage: "View original",
                                id: "database.actionMenu.fileProperty.viewOriginal.title"
                            })
                        }),
                        action: () => c()
                    }), l || i || e.push({
                        key: "rename",
                        render: e => (0, b.jsx)(o(95582).A, { ...e,
                            title: (0, b.jsx)(o(109939).sA, {
                                defaultMessage: "Rename",
                                id: "database.actionMenu.fileProperty.rename.title"
                            })
                        }),
                        action: d
                    }), l || e.push({
                        key: "delete",
                        render: e => (0, b.jsx)(o(95582).A, { ...e,
                            title: (0, b.jsx)(o(109939).sA, {
                                defaultMessage: "Delete",
                                id: "database.actionMenu.fileProperty.delete.title"
                            })
                        }),
                        action: u
                    }), e
                }, [l, i, n, f, u, a, d, c, s, p]), g = (0, r.useMemo)(() => [{
                    key: "section",
                    render: e => (0, b.jsx)(o(844565).A, { ...e
                    }),
                    items: y
                }], [y]), m = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.Modal,
                    title: (0, b.jsx)(o(109939).sA, {
                        defaultMessage: "File actions",
                        id: "database.actionMenu.fileProperty.actions.title"
                    })
                } : {
                    menuType: o(649476).gu.Popup,
                    width: 200
                };
                return (0, b.jsx)(o(747369).A, { ...m,
                    children: (0, b.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        initialFocus: 0,
                        onAccept: t.close,
                        sections: g
                    })
                })
            }
            let el = {
                renameInputWrapper: {
                    display: "flex",
                    alignItems: "center",
                    color: o(632079).Tj.text.primary,
                    fontSize: "13px",
                    padding: "4px 8px"
                },
                renameInput: {
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                    fontSize: 14,
                    lineHeight: "20px",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 10,
                    paddingInlineEnd: 10,
                    width: "100%",
                    borderRadius: 4,
                    boxShadow: `${o(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                    background: o(632079).Tj.background.secondaryTranslucent,
                    cursor: "text",
                    position: "relative"
                }
            };

            function en(e) {
                let {
                    url: t,
                    handleFileRename: l,
                    handleCloseRenamePopover: n,
                    isOpen: i,
                    inputValue: a
                } = e, s = (0, r.useCallback)(e => {
                    l(e.target.value)
                }, [l]), c = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.ActionSheet,
                    disableScroller: !0
                } : {
                    menuType: o(649476).gu.Popup,
                    width: 380
                };
                return i ? (0, b.jsx)(o(747369).A, { ...c,
                    children: (0, b.jsx)("div", {
                        style: el.renameInputWrapper,
                        children: (0, b.jsx)(o(36481).p, {
                            style: el.renameInput,
                            value: a,
                            placeholder: o(728601).Jt(t),
                            onChange: s,
                            onSubmit: n,
                            focusInitial: !0,
                            selectAll: !0
                        })
                    })
                }) : null
            }
            let ei = {
                marginTop: 1,
                marginInlineEnd: 6
            };

            function ea(e) {
                return (0, b.jsx)(o(636518).Ay, {
                    title: (0, b.jsxs)(o(4458).fI, {
                        children: [(0, b.jsx)(o(517334).k, {
                            style: ei
                        }), e.progressPercent ? (0, b.jsx)(o(547374).A, {
                            percentage: e.progressPercent
                        }) : e.progressText ? (0, b.jsx)("span", {
                            children: e.progressText
                        }) : null]
                    })
                })
            }
            let es = {
                paddingTop: 3,
                paddingBottom: 3
            };

            function ec(e) {
                let {
                    store: t,
                    uploadFiles: l,
                    value: n,
                    disabled: i,
                    onChange: a,
                    onDismiss: c,
                    property: d,
                    schema: u
                } = e, p = u[d], f = ed(n), y = (0, o(9247).rz)(p), g = (0, o(533992).v3)(), m = (0, o(109939).tz)(), h = (0, r.useRef)(), v = (0, r.useRef)(null), S = (0, o(682985).uB)(void 0, o(731106).A), {
                    isLoading: x,
                    progressPercent: k,
                    progressText: C
                } = (0, o(682985).O$)(S), w = (0, r.useCallback)((e, t) => {
                    let o = {
                        value: y ? s().JW({
                            rawFileValue: n,
                            updatedValue: e,
                            propertySchema: y
                        }) : e
                    };
                    t && (o.pastedSecureFile = t), a(o)
                }, [y, a, n]), A = (0, r.useCallback)(e => {
                    S.setState({
                        isLoading: !0,
                        progressPercent: 0
                    }), h.current = e
                }, [S]), _ = (0, r.useCallback)(e => {
                    let {
                        progressPercent: t,
                        progressText: o
                    } = e;
                    S.setState({ ...S.state,
                        progressPercent: t,
                        progressText: o
                    })
                }, [S]), P = (0, r.useCallback)(e => {
                    if (!h.current) return;
                    let t = h.current.map((t, o) => {
                        let r = e[o];
                        return {
                            name: t.name || r,
                            url: r
                        }
                    });
                    w(null != y && y.limit && t[0] ? [t[0]] : [...t, ...n]), S.reset()
                }, [w, n, null == y ? void 0 : y.limit, S]), M = (0, r.useCallback)(() => {
                    S.reset(), o(647095).f1((0, b.jsx)(o(109939).sA, {
                        id: "filePropertyMenu.uploadFileFailedError.message",
                        defaultMessage: "Upload failed."
                    }))
                }, [S]), j = (0, r.useCallback)(e => {
                    o(874443).I(), S.setState({
                        isLoading: !0,
                        progressPercent: 0
                    }), h.current = [e]
                }, [S]), I = (0, r.useCallback)(e => {
                    if (!h.current) return;
                    let t = h.current[0];
                    if (!t) return;
                    let r = {
                        name: t.name || e,
                        url: e
                    };
                    w(null != y && y.limit ? [r] : [...n, r]), S.reset(), o(874443).I()
                }, [w, n, null == y ? void 0 : y.limit, S]), T = (0, r.useCallback)(e => {
                    let {
                        originUrl: t,
                        pastedSecureFile: r
                    } = e, l = {
                        name: t,
                        url: r ? (0, o(728601).xm)(r) : t
                    };
                    w(null != y && y.limit ? [l] : [...n, l], r), S.reset(), o(874443).I()
                }, [w, n, null == y ? void 0 : y.limit, S]), O = (0, r.useCallback)(() => {
                    let e = v.current;
                    e && e instanceof Element && o(874443).W(g, {
                        originRect: e.getBoundingClientRect(),
                        originGap: 3,
                        isSmallWidth: !0,
                        showArrow: !0,
                        title: m.formatMessage({
                            id: "filePropertyMenu.header",
                            defaultMessage: "File"
                        }),
                        currentTab: "file",
                        tabs: [{
                            type: "file",
                            fileUpload: !0,
                            imageUpload: !1,
                            videoUpload: !1,
                            allowPaste: !0,
                            onUpload: e => {
                                o(385475).QM({
                                    environment: g,
                                    file: e[0],
                                    bucket: "secure",
                                    record: t.pointer,
                                    isFileBlock: !1,
                                    reportRichUploadMetrics: !0,
                                    onStart: j,
                                    onProgress: _,
                                    onComplete: I,
                                    onError: M
                                })
                            }
                        }, {
                            type: "embed",
                            onChange: T
                        }]
                    })
                }, [g, T, I, j, M, _, t.pointer, m]), B = (0, r.useCallback)(() => {
                    O()
                }, [O]), V = (0, r.useCallback)(e => {
                    o(385475).Zn({
                        environment: g,
                        files: e,
                        bucket: "secure",
                        record: t.pointer,
                        isFileBlock: !1,
                        onBatchStart: A,
                        onBatchProgress: _,
                        onBatchComplete: P,
                        onBatchError: M
                    })
                }, [g, t.pointer, A, _, P, M]), R = () => {
                    o(874443).I()
                };
                (0, r.useEffect)(() => (l ? o(385475).Zn({
                    environment: g,
                    files: l,
                    bucket: "secure",
                    record: t.pointer,
                    isFileBlock: !1,
                    onBatchStart: A,
                    onBatchProgress: _,
                    onBatchComplete: P,
                    onBatchError: M
                }) : ed(n) && !o(986939).A.isMobile && O(), R), []);
                let D = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.Modal,
                    title: (0, b.jsx)(o(109939).sA, {
                        defaultMessage: "File property",
                        id: "database.fileProperty.mobileMenu.title"
                    }),
                    right: (0, b.jsx)(o(109939).sA, { ...o(789722).W.done
                    }),
                    onClickRight: c
                } : {
                    menuType: o(649476).gu.Popup
                };
                return (0, b.jsx)(o(519451).A, {
                    debugName: "FilePropertyMenu",
                    capture: !0,
                    allowUndo: !0,
                    allowEsc: !0,
                    allowTabUntab: !0,
                    children: (0, b.jsxs)(o(747369).A, { ...D,
                        children: [(0, b.jsx)(ey, {
                            value: n,
                            disabled: i,
                            store: t,
                            onChange: a,
                            onDropFile: V
                        }), (0, b.jsxs)(o(844565).A, {
                            topBorder: !f && !i,
                            desktopStyle: { ...f && es
                            },
                            children: [x ? (0, b.jsx)(ea, {
                                progressPercent: k,
                                progressText: C
                            }) : void 0, x || i ? void 0 : (0, b.jsx)(o(391374).o, {
                                focused: !1,
                                color: "secondary",
                                onClick: B,
                                title: (null == y ? void 0 : y.limit) === 1 && n.length > 0 ? (0, b.jsx)(o(109939).sA, {
                                    id: "database.fileProperty.replaceLabel",
                                    defaultMessage: "Replace a file or image"
                                }) : (0, b.jsx)(o(109939).sA, {
                                    id: "database.fileProperty.focusedLabel",
                                    defaultMessage: "Add a file or image"
                                }),
                                ref: v
                            })]
                        })]
                    })
                })
            }

            function ed(e) {
                return 0 === e.length
            }

            function eu(e, t, o) {
                o({
                    value: t.map(t => t.url === e.url ? {
                        name: e.name,
                        url: e.url
                    } : t)
                })
            }

            function ep(e, t, o) {
                o({
                    value: t.filter(t => t.url !== e)
                })
            }

            function ef({
                url: e,
                value: t,
                disabled: r,
                store: l,
                onChange: n
            }) {
                let i = t.find(t => t.url === e);
                if (i) {
                    let e = i.url,
                        a = i.name;
                    return o(986939).A.isMobile ? (0, b.jsx)(o(844565).A, {
                        children: (0, b.jsx)(et, {
                            store: l,
                            name: a,
                            url: e,
                            onDelete: e => ep(e, t, n),
                            onChange: e => eu(e, t, n),
                            disabled: r
                        })
                    }) : (0, b.jsx)(et, {
                        store: l,
                        name: a,
                        url: e,
                        onDelete: e => ep(e, t, n),
                        onChange: e => eu(e, t, n),
                        disabled: r
                    })
                }
                return null
            }

            function ey({
                value: e,
                disabled: t,
                store: l,
                onChange: n,
                onDropFile: i
            }) {
                let a = o(381453).oE(e.map(e => e.url)),
                    [s, c] = (0, r.useState)(!1),
                    d = (0, o(960253).I)(() => ({
                        dropZone: {
                            width: "100%",
                            outline: s ? `2px solid ${o(632079).Tj.blue.border.accentPrimary}` : void 0,
                            borderRadius: s ? 8 : void 0
                        }
                    }), [s]);
                return 0 === a.length ? null : o(986939).A.isMobile || t ? (0, b.jsx)(r.Fragment, {
                    children: a.map(o => (0, b.jsx)(ef, {
                        url: o,
                        value: e,
                        disabled: t,
                        store: l,
                        onChange: n
                    }, o))
                }) : (0, b.jsx)(o(844565).A, {
                    children: (0, b.jsx)("div", {
                        onDragOver: e => {
                            e.preventDefault(), e.dataTransfer.dropEffect = "copy", c(!0)
                        },
                        onDragLeave: e => {
                            e.preventDefault(), c(!1)
                        },
                        onDrop: e => {
                            e.preventDefault(), c(!1), i(Array.from(e.dataTransfer.files))
                        },
                        style: d.dropZone,
                        children: (0, b.jsx)(o(66467).Ay, {
                            direction: "vertical",
                            keys: a,
                            renderKey: o => (0, b.jsx)(ef, {
                                url: o,
                                value: e,
                                disabled: t,
                                store: l,
                                onChange: n
                            }),
                            onDrop: t => {
                                n({
                                    value: o(381453).Ul(e, e => {
                                        let o = e.url;
                                        return o ? t.indexOf(o) : 1 / 0
                                    })
                                })
                            },
                            disabled: t
                        })
                    })
                })
            }
            let eg = r.memo(function(e) {
                    let {
                        disabled: t,
                        value: l,
                        insertChar: n,
                        format: i,
                        onChange: a,
                        isTable: s,
                        size: c
                    } = e, [d, u] = (0, r.useState)(""), p = (0, o(109939).tz)(), f = (0, r.useCallback)(e => {
                        let t = (0, o(368864).q)(e, p);
                        return "percent" === i && void 0 !== t && (t /= 100), t
                    }, [p, i]), y = (0, r.useRef)(!1);
                    (0, r.useEffect)(() => {
                        y.current || (u(o(700369).ZV(l, i, p) || ""), y.current = !0)
                    }, [i, p, l]);
                    let g = (0, o(44797).G)();
                    (0, r.useEffect)(() => {
                        if (!g) return;
                        let e = o(700369).$J(d, p);
                        e && l === -1 * e && (l > 0 ? u(d.replace("-", "")) : u(`-${d}`))
                    }, [g, i, p, l, d]), (0, r.useEffect)(() => {
                        n && (u(n), a(f(n)))
                    }, [n, a, f]);
                    let m = (0, r.useCallback)(e => {
                            let t = e.target.value;
                            u(t), a(f(t))
                        }, [a, f]),
                        h = (0, o(960253).I)(() => ({
                            input: {
                                textAlign: s ? "end" : "start"
                            },
                            inputContainer: { ...o(986939).A.isMobile ? "large" === c ? o(372120).vM : o(372120).Zz : "large" === c ? o(372120).qi : o(372120).qs,
                                display: "block"
                            }
                        }), [s, c]),
                        v = (0, o(533992).Y0)(),
                        S = !v.isIOS || v.isIpad ? "decimal" : (0, o(663250).hasDecimalSeparatorMismatch)() ? void 0 : g ? "decimal" : void 0;
                    return (0, b.jsx)(o(369064).N, {
                        debugName: "NumberPropertyValue",
                        capture: !t,
                        onDelete: o(763230).D_,
                        onSpace: o(763230).D_,
                        onBackspace: o(763230).D_,
                        onLeft: o(763230).D_,
                        onRight: o(763230).D_,
                        onUp: o(763230).D_,
                        onDown: o(763230).D_,
                        onSelectAll: o(763230).D_,
                        onRedo: o(763230).D_,
                        onUndo: o(763230).D_,
                        onCut: o(763230).D_,
                        onCopy: o(763230).D_,
                        onPaste: o(763230).D_,
                        onKeypress: o(763230).D_,
                        children: (0, b.jsx)(o(36481).p, {
                            style: h.inputContainer,
                            value: d,
                            format: "transparent",
                            onChange: m,
                            inputStyle: h.input,
                            focus: !t,
                            disabled: t,
                            inputMode: S
                        })
                    })
                }),
                em = {
                    input: { ...o(986939).A.isMobile ? o(372120).Zz : o(372120).qs,
                        display: "block"
                    }
                },
                eh = r.memo(function(e) {
                    let {
                        disabled: t,
                        inputType: l,
                        onChange: n,
                        value: i
                    } = e, a = (0, r.useCallback)(e => {
                        n(e.target.value)
                    }, [n]);
                    return (0, b.jsx)(o(369064).N, {
                        debugName: "URLPropertyValue",
                        capture: !t,
                        onBackspace: o(763230).D_,
                        onCopy: o(763230).D_,
                        onCut: o(763230).D_,
                        onDelete: o(763230).D_,
                        onDown: o(763230).D_,
                        onKeypress: o(763230).D_,
                        onLeft: o(763230).D_,
                        onPaste: o(763230).D_,
                        onRedo: o(763230).D_,
                        onRight: o(763230).D_,
                        onSelectAll: o(763230).D_,
                        onSpace: o(763230).D_,
                        onUndo: o(763230).D_,
                        onUp: o(763230).D_,
                        children: (0, b.jsx)(o(36481).p, {
                            disabled: t,
                            focus: !t,
                            format: "transparent",
                            onChange: a,
                            style: em.input,
                            type: l,
                            value: i
                        })
                    })
                });

            function ev(e, t) {
                let [l, n] = (0, r.useState)();
                return {
                    feedbackState: l,
                    setFeedbackState: n,
                    inferenceId: (0, o(682985).K8)(() => {
                        var t;
                        return null == (t = e.store) || null == (t = t.getFormat()) || null == (t = t.ai_property_inference_map) || null == (t = t[e.property]) ? void 0 : t.inference_id
                    }, [e])
                }
            }

            function eS({
                autofillBlockPropertyValueFeedbackButtonsState: e
            }) {
                return e.inferenceId ? (0, b.jsx)(o(4458).fI, {
                    alignItems: "center",
                    children: (0, b.jsx)(o(17618).j, {
                        traceId: e.inferenceId,
                        feedbackState: e.feedbackState,
                        setFeedbackState: e.setFeedbackState,
                        feature: "ai_autofill"
                    })
                }) : (function(e) {
                    let {
                        autofillBlockPropertyValueFeedbackButtonsState: t
                    } = e;
                    o(773352).log({
                        from: "AutofillUpdateButtonFailedToFetchFeedbackIndicators",
                        level: "error",
                        type: "Autofill",
                        data: {
                            miscDataToConvertToString: { ...t
                            }
                        }
                    })
                }({
                    autofillBlockPropertyValueFeedbackButtonsState: e
                }), null)
            }
            let eb = {
                style0: {
                    position: "absolute",
                    top: -36,
                    insetInlineEnd: 0,
                    borderRadius: 6,
                    fontSize: 14,
                    lineHeight: 1.2,
                    display: "flex",
                    whiteSpace: "nowrap",
                    background: o(632079).Tj.popoverBackground,
                    boxShadow: o(632079).Tj.shadow.outline.lg,
                    zIndex: -1,
                    padding: 2
                }
            };

            function ex({
                overlayState: e,
                propertySchema: t
            }) {
                let r = (0, o(682985).K8)(() => o(298176).m.isWriting(), []),
                    l = ev(e, t),
                    n = !(0, o(682985).O$)(o(205885).e);
                return o(986939).A.isMobile || n || r ? null : (0, b.jsx)(o(385827).s, {
                    allowSelectionWithin: !1,
                    children: (0, b.jsxs)("div", {
                        style: eb.style0,
                        children: [(0, b.jsx)(eC, {
                            overlayState: e,
                            propertySchema: t
                        }), (0, b.jsx)(eS, {
                            autofillBlockPropertyValueFeedbackButtonsState: l
                        })]
                    })
                })
            }
            let ek = {
                buttonStyle: {
                    display: "flex",
                    height: 28,
                    borderRadius: 4
                },
                updateTextStyle: {
                    fontWeight: o(699422).Wy.medium,
                    color: o(632079).Tj.purple.text.accentPrimary
                }
            };

            function eC({
                overlayState: e,
                propertySchema: t
            }) {
                let r = (0, o(533992).v3)();
                return (0, b.jsx)(o(988022).p, {
                    style: ek.buttonStyle,
                    onClick: () => {
                        if (t) {
                            var l, n, i;
                            o(447281).autofillPropertyForBlocks({
                                environment: r,
                                stores: [e.store],
                                property: e.property,
                                propertySchema: t,
                                userEventForAnalytics: "generate_from_overlay_button",
                                collectionStore: null == (l = e.collectionContextStore) ? void 0 : l.collectionStore(),
                                collectionViewStore: null == (n = e.collectionContextStore) ? void 0 : n.collectionViewStore(),
                                collectionViewBlockStore: null == (i = e.collectionContextStore) ? void 0 : i.collectionViewBlockStore(),
                                from: o(793550).zP(e.surface)
                            })
                        }
                    },
                    children: (0, b.jsxs)(o(4458).fI, {
                        gap: 4,
                        children: [(0, b.jsx)(o(16275).I, {
                            icon: o(438166).s,
                            size: "sm",
                            colorPalette: "purple",
                            colorVariant: "accentPrimary"
                        }), (0, b.jsx)("span", {
                            style: ek.updateTextStyle,
                            children: (0, b.jsx)(o(109939).sA, {
                                defaultMessage: "Update",
                                id: "database.propertyValues.reGenerateAiAutofill"
                            })
                        })]
                    })
                })
            }
            let ew = {
                dot: {
                    color: o(632079).Tj.text.tertiary
                }
            };

            function eA({
                overlayState: e,
                propertySchema: t,
                showSeparator: o
            }) {
                let r = ev(e, t);
                return (0, b.jsxs)(b.Fragment, {
                    children: [o ? (0, b.jsx)("div", {
                        style: ew.dot,
                        children: "•"
                    }) : null, (0, b.jsx)(eS, {
                        autofillBlockPropertyValueFeedbackButtonsState: r
                    })]
                })
            }

            function e_({
                overlayState: e,
                propertySchema: t,
                style: r
            }) {
                let l = (0, o(533992).v3)(),
                    n = (0, o(960253).I)(() => ({
                        linkStyle: {
                            color: o(632079).Tj.purple.text.accentPrimary,
                            fontSize: 12,
                            ...r
                        }
                    }), [r]);
                return (0, b.jsx)("div", {
                    style: n.linkStyle,
                    onClick: () => {
                        if (t) {
                            var r, n, i;
                            o(447281).autofillPropertyForBlocks({
                                environment: l,
                                stores: [e.store],
                                property: e.property,
                                propertySchema: t,
                                userEventForAnalytics: "generate_from_overlay_button",
                                collectionStore: null == (r = e.collectionContextStore) ? void 0 : r.collectionStore(),
                                collectionViewStore: null == (n = e.collectionContextStore) ? void 0 : n.collectionViewStore(),
                                collectionViewBlockStore: null == (i = e.collectionContextStore) ? void 0 : i.collectionViewBlockStore(),
                                from: o(793550).zP(e.surface)
                            })
                        }
                    },
                    children: (0, b.jsx)(o(109939).sA, {
                        defaultMessage: "Update",
                        id: "database.propertyValues.reGenerateAiAutofill"
                    })
                })
            }
            var eP = () => o(426048);
            let eM = {
                container: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    paddingBlock: 3,
                    borderRadius: 4
                },
                containerHovered: {
                    backgroundColor: o(632079).Tj.background.secondary
                },
                content: {
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }
            };

            function ej(e) {
                let {
                    citation: t
                } = e, r = "block" !== t.type && void 0 !== t.type && t.href, l = (0, o(697251).Qk)({
                    annotationType: t.type,
                    theme: o(632079).Tj
                });
                return (0, b.jsxs)(o(590422).Q, {
                    style: eM.container,
                    hoveredStyle: eM.containerHovered,
                    href: t.href || void 0,
                    external: !!r,
                    children: [(0, b.jsx)(o(4458).fI, {
                        flexShrink: 0,
                        width: 16,
                        height: 16,
                        alignItems: "center",
                        justifyContent: "center",
                        children: l
                    }), (0, b.jsx)(o(111010).D, {
                        style: eM.content,
                        styleKey: "captionMedium",
                        colorVariant: "primary",
                        children: t.title
                    })]
                })
            }
            let eI = (0, o(109939).YK)({
                sourcesHeader: {
                    defaultMessage: "{count, plural, one {# Source} other {# Sources}}",
                    id: "CitationSection.sourcesHeader"
                },
                toggleShowMoreCitations: {
                    defaultMessage: "Toggle show more citations",
                    id: "CitationSection.toggleShowMoreCitations"
                }
            });

            function eT(e, t) {
                return "title" in e && "string" == typeof e.title ? e.title : t
            }
            let eO = {
                container: {
                    borderTop: `1px solid ${o(632079).Tj.border.primary}`,
                    paddingBlock: 8,
                    paddingInline: 10,
                    flexShrink: 0
                },
                header: {
                    marginBottom: 4
                },
                showMoreButton: {
                    marginTop: 4,
                    width: "100%",
                    paddingBlock: 2
                }
            };

            function eB(e) {
                let {
                    overlayState: t
                } = e, l = (0, o(109939).tz)(), n = (0, o(551408).A)(), i = !(0, o(682985).O$)(o(205885).e), a = (0, o(972740).L)(), [s, c] = (0, r.useState)(!1), {
                    status: d,
                    runStore: u
                } = (0, o(674333).Q)(t.store, t.property), f = (0, o(682985).uB)(void 0, o(57168).ClientAIChatStore), y = (0, o(682985).K8)(() => {
                    var e;
                    return null == u || null == (e = u.getData()) ? void 0 : e.thread_id
                }, [u]), g = (0, o(682985).K8)(() => {
                    if (y && a) return o(174148).E.createChildStore(a, {
                        table: p().Toz,
                        id: y,
                        spaceId: a.id
                    })
                }, [y, a]), m = (0, o(682985).K8)(() => {
                    if (!g) return [];
                    let {
                        steps: e
                    } = (0, o(187353).A3)({
                        clientStore: f,
                        threadStore: g
                    });
                    return function(e) {
                        let t = [],
                            r = new Set;
                        for (let n of e)
                            if ("agent-tool-result" === n.type && (0, eP().gY)(n, "search")) {
                                var l;
                                for (let e of (null == (l = n.result) ? void 0 : l.extractedResults) ? ? []) {
                                    let l = e.id;
                                    if (r.has(l)) continue;
                                    r.add(l);
                                    let n = function(e) {
                                        let t = e.searchSourceType,
                                            r = e.id,
                                            l = function(e) {
                                                let t = e.searchSourceType;
                                                if ("notion" === t) return `${o(986939).A.domainBaseUrl}/${e.id.replace(/-/g,"")}`;
                                                let r = (0, o(932956).f9)(e.id);
                                                if (!r) return "";
                                                try {
                                                    return (0, o(313168).uf)({
                                                        citation: r,
                                                        baseUrl: o(986939).A.domainBaseUrl,
                                                        type: t
                                                    }) ? ? ""
                                                } catch {
                                                    return ""
                                                }
                                            }(e);
                                        if ("notion" === t) return {
                                            id: r,
                                            type: "block",
                                            title: eT(e, "Notion page"),
                                            href: l
                                        };
                                        if ("webpage" === t) return {
                                            id: r,
                                            type: "webpage",
                                            title: eT(e, "Web page"),
                                            href: l,
                                            domain: void 0
                                        };
                                        if ("helpdocs" === t) return {
                                            id: r,
                                            type: "helpdoc",
                                            title: eT(e, "Help doc"),
                                            href: l
                                        };
                                        if ("helpdoc-section" === t) return {
                                            id: r,
                                            type: "helpdoc-section",
                                            title: eT(e, "Help doc"),
                                            href: l
                                        };
                                        if ((0, o(281708).SC)(t)) return {
                                            id: r,
                                            type: t,
                                            title: eT(e, t),
                                            href: l
                                        }
                                    }(e);
                                    n && t.push(n)
                                }
                            }
                        return t
                    }(e)
                }, [f, g]), h = (0, r.useMemo)(() => s ? m.slice(0, 10) : m.slice(0, 5), [m, s]), v = Math.min(m.length - 5, 5), S = (0, r.useCallback)(() => {
                    c(e => !e)
                }, []);
                return o(986939).A.isMobile || !n || i || "completed" !== d.type || 0 === m.length ? null : (0, b.jsx)(o(385827).s, {
                    allowSelectionWithin: !1,
                    children: (0, b.jsxs)("div", {
                        style: eO.container,
                        children: [(0, b.jsx)("div", {
                            style: eO.header,
                            children: (0, b.jsx)(o(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                children: (0, b.jsx)(o(109939).sA, { ...eI.sourcesHeader,
                                    values: {
                                        count: m.length
                                    }
                                })
                            })
                        }), (0, b.jsx)(o(4458).VP, {
                            gap: 1,
                            children: h.map(e => (0, b.jsx)(ej, {
                                citation: e
                            }, e.id))
                        }), v > 0 ? (0, b.jsx)(o(374533).A, {
                            style: eO.showMoreButton,
                            icon: s ? o(336632).Y : o(595453).arrowChevronSingleDownSmallIcon,
                            colorVariant: "secondary",
                            size: "xs",
                            onClick: S,
                            ariaLabel: l.formatMessage(eI.toggleShowMoreCitations)
                        }) : void 0]
                    })
                })
            }
            let eV = (0, o(104509).xh)("pointer", {
                default: {
                    loader: () => o.e(20684).then(o.bind(o, 16492))
                },
                small: {
                    loader: () => o.e(20684).then(o.bind(o, 176746))
                },
                fill: {
                    loader: () => o.e(20684).then(o.bind(o, 988086))
                },
                fillSmall: {
                    loader: () => o.e(20684).then(o.bind(o, 417445))
                }
            }, ["location", "gps", "cursor", "arrow", "map"]);
            var eR = o.n(o(794148));
            async function eD({
                isElectron: e
            }) {
                if (e) return eF;
                if (!navigator.geolocation || !navigator.permissions) return "unsupported";
                try {
                    return (await navigator.permissions.query({
                        name: "geolocation"
                    })).state
                } catch (e) {
                    return "unsupported"
                }
            }
            let eF = "electronThereforeUnknown";
            async function eE({
                isElectron: e
            }) {
                let t, r = await eD({
                    isElectron: e
                });
                if ("unsupported" === r || "denied" === r) return;
                let l = function(e) {
                    if (eR()("denied" !== e), "granted" !== e) return "electronThereforeUnknown" === e ? 1 : 1e4
                }(r);
                try {
                    t = await new Promise((e, t) => {
                        navigator.geolocation ? navigator.geolocation.getCurrentPosition(e, t, {
                            enableHighAccuracy: !0,
                            timeout: l,
                            maximumAge: 0
                        }) : t(Error("Geolocation is not supported by this browser"))
                    })
                } catch (e) {
                    o(773352).log({
                        level: "error",
                        from: "getCurrentLocation",
                        type: "getCurrentPosition",
                        error: (0, o(416607).convertErrorToLog)(e)
                    })
                }
                return t ? {
                    latitude: t.coords.latitude,
                    longitude: t.coords.longitude
                } : void 0
            }

            function eU({
                propertyName: e,
                placeValue: t,
                onChange: l,
                onClose: n,
                insertChar: i
            }) {
                let a = (0, o(533992).Y0)().isElectron,
                    s = (0, o(533992).v3)(),
                    c = (0, o(657962).S)(),
                    [d, u] = (0, r.useState)(i || ""),
                    [{
                        value: p = []
                    }] = (0, o(97668).Yb)(async () => {
                        if (!d) return [];
                        let e = await eE({
                            isElectron: a
                        });
                        return (0, o(575007).VW)({
                            query: d,
                            service: c,
                            environment: s,
                            biasPosition: e
                        })
                    }, [s, d, c, a]),
                    f = (0, r.useCallback)(async e => {
                        if ("current-location" === e) {
                            let e = await eE({
                                    isElectron: a
                                }),
                                t = e && await (0, o(575007).fr)(e, c, s);
                            t && (l({
                                value: t,
                                placeLocationSource: "current_location"
                            }), u(""));
                            return
                        }
                        let t = await (0, o(575007).Ox)(e, c, s);
                        t && (u(""), l({
                            value: t,
                            placeLocationSource: "autocomplete_search"
                        }))
                    }, [l, s, c, a]),
                    y = (0, r.useCallback)(() => {
                        l({
                            value: void 0
                        })
                    }, [l]),
                    g = (0, r.useCallback)(e => {
                        !t || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey || (y(), u(e.key))
                    }, [t, y]),
                    m = {
                        menuType: o(649476).gu.Popup,
                        ...o(986939).A.isMobile && {
                            title: e,
                            menuType: o(649476).gu.Modal,
                            right: (0, b.jsx)(o(109939).sA, { ...o(789722).W.done
                            }),
                            onClickRight: n
                        },
                        ...!o(986939).A.isMobile && {
                            tokenInputHeader: !0,
                            maxHeight: 333
                        }
                    };
                return (0, b.jsx)(o(369064).N, {
                    debugName: "PlacePropertyValueOverlay",
                    capture: !0,
                    priority: 1,
                    onKeypress: g,
                    children: (0, b.jsx)(o(747369).A, { ...m,
                        header: (0, b.jsx)(eK, {
                            placeValue: t,
                            onClearLocationClick: y,
                            setQuery: u,
                            query: d
                        }),
                        footer: !t && d && (0, b.jsx)(ez, {}),
                        disableHeaderBorder: !p.length && !t,
                        children: t ? (0, b.jsx)(o(990762).Vt, {
                            place: t
                        }) : (0, b.jsx)(e$, {
                            results: p,
                            onSuggestionClick: f,
                            query: d
                        })
                    })
                })
            }
            let eL = {
                tokenInputMenuItem: {
                    background: o(632079).Tj.background.secondary,
                    borderBottom: `1px solid ${o(632079).Tj.border.secondary}`,
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0
                },
                tooltipIcon: {
                    marginTop: 5
                },
                tooltip: {
                    minWidth: 150
                },
                style0: {
                    padding: "4px 6px",
                    gap: 4
                }
            };

            function eK(e) {
                let t = (0, o(533992).Y0)(),
                    r = t.isElectron,
                    l = (0, o(109939).tz)(),
                    {
                        placeValue: n,
                        onClearLocationClick: i,
                        setQuery: a,
                        query: s
                    } = e;
                return (0, b.jsx)(o(160319).Ay, {
                    focus: !o(986939).A.isMobile || void 0,
                    focusAfterAnimation: !0,
                    hideInput: !!n,
                    format: o(160319).le.Place,
                    disabled: !!n,
                    right: r && !n ? (0, b.jsx)(o(51831).m, {
                        placement: "right",
                        style: eL.tooltip,
                        textWrap: !0,
                        content: () => l.formatMessage({
                            id: "placePropertyValueOverlay.currentLocation.grantLocationPermissionOnDesktop",
                            defaultMessage: "For best results, ensure location permissions are granted in your computer settings"
                        }),
                        children: e => (0, b.jsx)("div", { ...e,
                            style: eL.tooltipIcon,
                            children: (0, b.jsx)(o(708966).Q, {
                                iconGroup: o(773225).H,
                                style: eL.tooltipIcon,
                                variantName: "default"
                            })
                        })
                    }) : void 0,
                    tokens: n ? [(0, b.jsx)(eN, {
                        placeValue: n,
                        onClearLocationClick: i
                    }, "placeValue")] : [],
                    tokenWrapStyle: eL.style0,
                    placeholder: l.formatMessage({
                        id: "placePropertyValueOverlay.search.placeholder",
                        defaultMessage: "Search for a location..."
                    }),
                    value: s,
                    onChange: e => a(e.target.value),
                    dontShowBorderBottom: t.isAndroid,
                    onRemoveLastToken: i,
                    style: eL.tokenInputMenuItem
                })
            }
            let eW = {
                header: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: o(642065).Mi
                },
                closeIconButton: {
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    marginInlineEnd: 2,
                    marginInlineStart: 2
                }
            };

            function eN({
                placeValue: e,
                onClearLocationClick: t
            }) {
                let r = (0, o(109939).tz)();
                return (0, b.jsxs)("div", {
                    style: eW.header,
                    children: [(0, b.jsx)("div", {
                        children: (0, o(317389).H)({
                            placeAnnotation: (0, f().ZW1)(e),
                            index: 0
                        })
                    }), (0, b.jsx)(o(374533).A, {
                        style: eW.closeIconButton,
                        icon: o(766970).xMarkFillIcon,
                        onClick: t,
                        ariaLabel: r.formatMessage({
                            id: "placePropertyValueOverlay.clear",
                            defaultMessage: "Clear location field"
                        })
                    })]
                })
            }
            let eH = {
                disclaimerContainer: {
                    padding: "8px 12px",
                    borderTop: `1px solid ${o(632079).Tj.border.secondary}`,
                    backgroundColor: o(632079).Tj.background.primary
                },
                disclaimerText: {
                    fontSize: 12,
                    color: o(632079).Tj.text.tertiary,
                    lineHeight: 1.5
                },
                disclaimerLink: {
                    color: o(632079).Tj.text.tertiary,
                    textDecoration: "underline",
                    cursor: "pointer"
                }
            };

            function ez() {
                let e = (0, o(109939).tz)();
                return (0, b.jsx)("div", {
                    style: eH.disclaimerContainer,
                    children: (0, b.jsxs)("div", {
                        style: eH.disclaimerText,
                        children: [e.formatMessage({
                            id: "placePropertyValueOverlay.disclaimer",
                            defaultMessage: "Results may be limited. "
                        }), (0, b.jsx)("a", {
                            href: "https://www.notion.com/help/maps",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: eH.disclaimerLink,
                            children: e.formatMessage({
                                id: "placePropertyValueOverlay.disclaimer.learnMore",
                                defaultMessage: "Learn more"
                            })
                        }), "."]
                    })
                })
            }
            let eY = {
                style0: {
                    fontWeight: o(699422).Wy.bold
                }
            };

            function e$(e) {
                let {
                    results: t,
                    onSuggestionClick: l,
                    query: n
                } = e, i = (0, o(109939).tz)(), a = function() {
                    let e = (0, o(533992).Y0)().isElectron,
                        [t, l] = (0, r.useState)("pending");
                    return (0, r.useEffect)(() => {
                        let t;
                        return !async function() {
                            if (l(await eD({
                                    isElectron: e
                                })), navigator.permissions) try {
                                let o = await navigator.permissions.query({
                                        name: "geolocation"
                                    }),
                                    r = () => {
                                        e ? l(eF) : l(o.state)
                                    };
                                o.addEventListener("change", r), t = () => {
                                    o.removeEventListener("change", r)
                                }
                            } catch (e) {
                                o(773352).log({
                                    level: "error",
                                    from: "useGeolocationPermissionStatus",
                                    type: "geolocationPermissionStatus",
                                    error: (0, o(416607).convertErrorToLog)(e)
                                })
                            }
                        }(), () => {
                            var e;
                            null == (e = t) || e()
                        }
                    }, [e]), t
                }(), s = "granted" === a || "prompt" === a || "electronThereforeUnknown" === a, c = (0, r.useCallback)(() => {
                    s && l("current-location")
                }, [s, l]), d = t.map(e => {
                    let t = (0, o(575007).LI)(e),
                        {
                            matching: r,
                            nonMatching: i
                        } = (0, o(862060).Sd)({
                            suggestionTitle: e.title,
                            query: n
                        }),
                        a = (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)("span", {
                                style: eY.style0,
                                children: r
                            }), (0, b.jsx)("span", {
                                children: i
                            })]
                        });
                    return {
                        key: t,
                        action: () => l(e),
                        render: t => (0, b.jsx)(o(95582).A, { ...t,
                            title: a,
                            caption: e.title !== e.address ? e.address : void 0
                        })
                    }
                });
                return d.unshift({
                    key: "current-location",
                    action: c,
                    render: e => (0, b.jsx)(o(51831).m, {
                        disableTooltip: s,
                        placement: "right",
                        content: () => i.formatMessage({
                            id: "placePropertyValueOverlay.currentLocation.disabledTooltip",
                            defaultMessage: "No permission to get current location"
                        }),
                        children: t => (0, b.jsx)(o(95582).A, { ...e,
                            ...t,
                            disabled: !s,
                            disabledFeedback: !s,
                            title: i.formatMessage({
                                id: "placePropertyValueOverlay.currentLocation",
                                defaultMessage: "Current Location"
                            }),
                            icon: (0, b.jsx)(o(708966).Q, {
                                iconGroup: eV,
                                variantName: "small"
                            })
                        })
                    })
                }), (0, b.jsx)(o(558045).A, {
                    type: o(558045).O.Vertical,
                    initialFocus: 0,
                    sections: [{
                        items: d,
                        key: "results",
                        render: e => (0, b.jsx)(o(844565).A, { ...e
                        })
                    }]
                })
            }
            let eQ = {
                container: {
                    position: "absolute",
                    top: -28,
                    insetInlineEnd: 0,
                    borderRadius: 6,
                    fontSize: 14,
                    lineHeight: 1.2,
                    display: "flex",
                    gap: 8,
                    whiteSpace: "nowrap",
                    background: o(632079).Tj.popoverBackground,
                    boxShadow: o(632079).Tj.shadow.outline.lg,
                    zIndex: -1,
                    padding: 2
                }
            };

            function eq(e) {
                let {
                    overlayState: t
                } = e, r = (0, o(551408).A)(), l = !(0, o(682985).O$)(o(205885).e), {
                    status: n
                } = (0, o(674333).Q)(t.store, t.property);
                return o(986939).A.isMobile || !r || l || "completed" !== n.type && "failed" !== n.type ? null : (0, b.jsx)(o(385827).s, {
                    allowSelectionWithin: !1,
                    children: (0, b.jsx)("div", {
                        style: eQ.container,
                        children: (0, b.jsx)(o(622031)._X, {
                            blockStore: t.store,
                            propertyId: t.property,
                            variant: "default"
                        })
                    })
                })
            }
            let eG = Object.freeze({
                    property: !0
                }),
                eX = r.memo(function(e) {
                    let {
                        store: t
                    } = e, l = (0, o(533992).v3)(), n = (0, o(67499).S)();
                    (0, o(383953).l)(() => {
                        tg({
                            isFirstRender: !0
                        }, t, l)
                    }), o(363256).e.withListenerIgnored(() => {
                        tg({
                            isFirstRender: !1
                        }, t, l)
                    });
                    let i = (0, r.useRef)(void 0),
                        a = (0, o(682985).O$)(t),
                        c = (0, o(682985).K8)(() => {
                            if (!a.isOpen) return !1;
                            let e = a.store;
                            return !e.isDefined() || !1 === e.getAlive() || e.pathIsDead()
                        }, [a]);
                    r.useEffect(() => {
                        c && o(576186).VN({
                            environment: l,
                            blockPropertyValueOverlayStore: t
                        })
                    }, [l, c, t]);
                    let {
                        originRect: d,
                        mobileStyle: u,
                        style: p,
                        placementToOrigin: f
                    } = (0, o(682985).K8)(() => {
                        let e, t, r;
                        if (a.isOpen) {
                            let d = "page" === a.surface,
                                u = (0, o(151086).A9)(a),
                                p = u ? u.type : void 0,
                                f = a.store.canEdit(),
                                y = a.rect.top,
                                g = a.rect.left,
                                m = a.rect.width,
                                h = a.rect.height;
                            if (d ? (g -= 1, m += 1) : (y -= 1, g -= 1, m += 1, h += 2), ("number" === p || s().DY(p)) && o(986939).A.isMobile) {
                                let e = (0, o(849584).y)(l, o(707785).A.state.estimatedKeyboardWebViewOverlap, o(707785).A.state.nativeBottomBarHeight) + 24;
                                r = {
                                    overflowY: "auto",
                                    WebkitOverflowScrolling: "touch",
                                    width: Math.max(240, m),
                                    maxHeight: `calc(100vh - ${e}px)`
                                }
                            }
                            if ("number" === p) t = {
                                width: Math.max(240, m),
                                overflow: "visible"
                            };
                            else if ("date" === p) y += h - 1, t = {};
                            else if ("relation" === p) t = {
                                width: Math.max(o(6451).Qd, m),
                                minHeight: f ? 65 : void 0,
                                overflow: "hidden"
                            };
                            else if ("person" === p) t = {
                                width: Math.max(240, m),
                                overflow: "visible"
                            };
                            else if ("formula" === p) y += h - 1, t = {
                                borderRadius: 12
                            };
                            else if ("select" === p || "multi_select" === p) t = {
                                width: Math.max(300, m),
                                overflow: "visible"
                            };
                            else if ("rollup" === p) y -= 1, g += 1, t = {};
                            else if ("file" === p) t = {
                                minWidth: Math.max(240, m)
                            };
                            else if ("verification" === p) t = {
                                width: o(381453).qE(m, 265, 270)
                            };
                            else {
                                let e = 24 + 28 * !!(0, o(151086).cL)({
                                    overlayState: a,
                                    pageContext: n
                                });
                                t = {
                                    width: Math.max(240, m),
                                    minHeight: Math.min(h, window.innerHeight - e),
                                    maxHeight: window.innerHeight - e,
                                    overflow: "visible",
                                    display: "flex",
                                    flexDirection: "column"
                                }, "status" === p && o(793550).br({
                                    store: a.store,
                                    additionalStores: a.additionalStores,
                                    collectionContextStore: a.collectionContextStore
                                }) && (y += h - 1)
                            }
                            let v = a.collectionContextStore;
                            if (v) {
                                var i, c;
                                let e = v.subitemTreeStore.state,
                                    r = (0, o(17224).Qe)(e.children, e => e.value.store === a.store),
                                    l = null == r ? void 0 : r.length,
                                    n = null == (i = v.normalizedFormatStore.state) || null == (i = i.table_properties) ? void 0 : i.filter(e => e.visible),
                                    s = n && (null == (c = n[0]) ? void 0 : c.property) === a.property;
                                l && s && (t = { ...t,
                                    ...p && o(9247).YW(p) && {
                                        width: Math.max(90, m)
                                    }
                                })
                            }
                            e = new DOMRect(g, y, m, 0)
                        }
                        return {
                            originRect: e,
                            style: t,
                            mobileStyle: r,
                            placementToOrigin: "bottom"
                        }
                    }, [a, l, n]), y = (0, o(682985).K8)(() => {
                        let e = function(e) {
                                let {
                                    store: t
                                } = e;
                                if (!o(986939).A.isMobile) return {
                                    type: o(182718).nl.Popup
                                };
                                let r = t.state;
                                if (!r.isOpen) return {
                                    type: o(182718).nl.SlideUp
                                };
                                let l = (0, o(151086).A9)(r);
                                return l ? o(372120).Hp[l.type] : {
                                    type: o(182718).nl.SlideUp
                                }
                            }({
                                store: t
                            }),
                            r = !o(986939).A.isMobile || e.type === o(182718).nl.Popup,
                            n = {
                                key: function(e) {
                                    let t = e.state;
                                    if (!t.isOpen) return "ignore";
                                    let r = (0, o(151086).A9)(t);
                                    return r ? r.type : "ignore"
                                }(t),
                                popupType: e.type,
                                bottomSheetInitialState: e.type === o(182718).nl.BottomSheet ? e.bottomSheetInitialState : void 0,
                                open: a.isOpen,
                                originRect: d,
                                style: o(986939).A.isMobile ? u : p,
                                borderRadius: 6,
                                alignmentToOrigin: "start",
                                placementToOrigin: f,
                                preventScaleTransition: r,
                                preventOpacityTransition: r,
                                content: () => (function(e) {
                                    let {
                                        overlayState: t,
                                        store: r,
                                        environment: l
                                    } = e;
                                    return t.isOpen ? (0, b.jsx)(o(369064).N, {
                                        debugName: "BlockPropertyValueOverlay",
                                        capture: !0,
                                        onTab: e => tb(e, r, l),
                                        onUntab: e => tx(e, r, l),
                                        onEnter: () => tk(r, l),
                                        onDelete: o(763230).D_,
                                        onBackspace: o(763230).D_,
                                        children: (0, b.jsxs)(o(713311).RI, {
                                            value: t.collectionContextStore,
                                            children: [(0, b.jsx)(eZ, {
                                                overlayState: t
                                            }), (0, b.jsx)(e0, {
                                                overlayState: t
                                            }), (0, b.jsx)("div", {
                                                style: eJ,
                                                children: (0, b.jsx)(e8, {
                                                    overlayState: t,
                                                    store: r
                                                })
                                            }), (0, b.jsx)(e6, {
                                                overlayState: t
                                            })]
                                        })
                                    }, `${t.store.id}${t.property}`) : null
                                })({
                                    overlayState: a,
                                    store: t,
                                    environment: l
                                }),
                                onDismiss: () => {
                                    var e, r;
                                    return e = t, r = l, void(o(821243).xl(), o(576186).vF({
                                        environment: r,
                                        blockPropertyValueOverlayStore: e
                                    }))
                                }
                            };
                        return i.current = n, n
                    }, [l, u, d, a, f, t, p]);
                    return a.isOpen || !i.current ? (0, b.jsx)(o(182718).zD, { ...y
                    }) : (0, b.jsx)(o(182718).zD, { ...i.current,
                        open: !1
                    })
                }),
                eJ = {
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    flexGrow: 1,
                    height: "100%"
                };

            function eZ({
                overlayState: e
            }) {
                let t = (0, o(67499).S)(),
                    r = (0, o(682985).K8)(() => (0, o(151086).cL)({
                        overlayState: e,
                        pageContext: t
                    }), [e, t]),
                    l = (0, o(682985).K8)(() => r ? (0, o(151086).A9)(e) : void 0, [r, e]),
                    n = l && o(9247).YE(l),
                    {
                        shouldShowLegacyAutofill: i
                    } = (0, o(251955).D)({
                        aiInference: n
                    });
                return r && i ? (0, b.jsx)(ex, {
                    propertySchema: l,
                    overlayState: e
                }) : null
            }

            function e0({
                overlayState: e
            }) {
                return (0, o(682985).K8)(() => (0, o(151086).s8)({
                    overlayState: e
                }), [e]) ? (0, b.jsx)(eq, {
                    overlayState: e
                }) : null
            }

            function e6({
                overlayState: e
            }) {
                return (0, o(682985).K8)(() => (0, o(151086).rb)({
                    overlayState: e
                }), [e]) ? (0, b.jsx)(eB, {
                    overlayState: e
                }) : null
            }

            function e8({
                overlayState: e,
                store: t
            }) {
                let r = (0, o(682985).K8)(() => (0, o(151086).A9)(e), [e]);
                if ((0, o(682985).K8)(() => {
                        var t;
                        return (null == (t = (0, o(151086).K6)(e)) ? void 0 : t.isPageTreeCollection()) ? ? !1
                    }, [e]), (0, o(83208).X)("edge_relations"), !r) return null;
                let l = e9[r.type];
                return l ? (0, b.jsx)(l, {
                    store: t,
                    overlayState: e,
                    propertySchema: r,
                    propertyType: r.type
                }) : null
            }
            let e9 = {
                title: function({
                    overlayState: e,
                    propertyType: t,
                    store: l
                }) {
                    let n = (0, o(533992).v3)(),
                        {
                            clonedStore: i
                        } = e,
                        a = (0, r.useCallback)(() => tk(l, n), [l, n]),
                        s = (0, r.useCallback)(() => tS(l, n), [l, n]),
                        c = (0, r.useCallback)(e => tb(e, l, n), [l, n]),
                        d = (0, r.useCallback)(e => tx(e, l, n), [l, n]),
                        u = (0, r.useCallback)(() => (function(e, t) {
                            let r = e.state;
                            if (!r.isOpen) return;
                            let {
                                collectionContextStore: l,
                                surface: n,
                                property: i
                            } = r, a = r.store;
                            if ("table" !== n || !l) return void o(576186).VN({
                                environment: t,
                                blockPropertyValueOverlayStore: e
                            });
                            let s = l.collectionStore();
                            if (!s || !l.shouldAllowNewItemCreation({
                                    overrideAllowForTypedViews: !0
                                })) return void o(576186).VN({
                                environment: t,
                                blockPropertyValueOverlayStore: e
                            });
                            let c = [],
                                d = 0,
                                u = 0,
                                p = [...l.groupsStore.state.values()],
                                f = a.getRecordStoreUIParent(),
                                y = f ? p.find(e => e.groupUiParentStore === f) : void 0,
                                g = p.find(e => e.resultsStore.state.some(e => e.id === a.id)),
                                m = y ? ? g;
                            if (!m) return;
                            let h = m.resultsStore.state,
                                v = h.findIndex(e => e.id === a.id);
                            c = m.groupsPointer, u = h.length, d = -1 === v ? Math.max(u - 1, 0) : v;
                            let S = l.currentViewHasSort() ? u : d + 1;
                            o(576186).VN({
                                environment: t,
                                blockPropertyValueOverlayStore: e
                            });
                            let b = s.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "BlockPropertyValueOverlay.handleShiftEnter",
                                environment: t,
                                cellTarget: b ? {
                                    spaceWithId: b
                                } : void 0,
                                canUndo: !0,
                                perform: r => {
                                    let a = (0, o(127872).Q)({
                                        environment: t,
                                        collectionContextStore: l,
                                        groupsPointer: c,
                                        insertAtIndex: S,
                                        shouldCoerce: !0,
                                        templateStore: l.defaultPageTemplateStore.state,
                                        transaction: r,
                                        from: {
                                            createBlock: "table_selection_overlay_shift_enter"
                                        },
                                        inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache
                                    });
                                    a && a.coercionSucceeded && l.registerCallbackForItemMounted(a.newStore, () => {
                                        o(576186).ho({
                                            isNewBlock: !0,
                                            environment: t,
                                            blockPropertyValueOverlayStore: e,
                                            store: a.newStore,
                                            property: i,
                                            surface: n,
                                            collectionContextStore: l
                                        })
                                    })
                                }
                            })
                        })(l, n), [l, n]),
                        p = (0, r.useCallback)(() => tM(e, t, n, l), [e, t, n, l]),
                        f = (0, o(682985).K8)(() => i.getTitleStore() || i.getPropertyStore(e.property), [i, e.property]),
                        y = (0, o(682985).K8)(() => th(e, n), [e, n]),
                        g = (0, r.useMemo)(() => o(986939).A.isMobile ? e3 : e1, []);
                    return (0, b.jsx)("div", {
                        style: g,
                        children: (0, b.jsx)(o(53373).A, {
                            store: f,
                            disableSlashCommands: !0,
                            onEnter: a,
                            onEsc: s,
                            onTab: c,
                            onUntab: d,
                            onShiftEnter: u,
                            disableSelectAllBlocks: !0,
                            disableSelectionDrag: !0,
                            disableStyleAnnotations: !0,
                            disableInsertedDeletedAnnotations: !0,
                            onChange: p,
                            disabled: y,
                            pasteBehavior: "inline",
                            inPageFind: o(831719).Os.none,
                            disabledMentionTypes: eG
                        })
                    })
                },
                text: function({
                    overlayState: e,
                    propertySchema: t,
                    propertyType: l,
                    store: n
                }) {
                    let i, a = (0, o(533992).v3)(),
                        s = (0, o(109939).tz)(),
                        {
                            clonedStore: c
                        } = e,
                        d = (0, o(83208).X)("bullets_in_simple_tables_indentation"),
                        u = (0, r.useMemo)(() => ({
                            bulletIndentationEnabled: d
                        }), [d]),
                        p = (null == t ? void 0 : t.type) === "text" ? t.ai_inference : void 0,
                        {
                            shouldShowLegacyAutofill: y
                        } = (0, o(251955).D)({
                            aiInference: p
                        }),
                        g = (null == p ? void 0 : p.auto_update_on_edit) && y;
                    g && (i = s.formatMessage({
                        id: "BlockPropertyValueOverlay.textProperty.placeholder",
                        defaultMessage: "Empty"
                    }));
                    let m = (0, o(682985).K8)(() => n.state.isOpen && o(332190).A.getPropertyId() === n.state.property && o(332190).A.getBlockStore() === n.state.store, [n]),
                        h = (0, o(682985).K8)(() => c.getPropertyStore(e.property), [c, e.property]),
                        v = (0, r.useCallback)(e => !!h && (0, o(195251).RE)({
                            environment: a,
                            textStore: h,
                            editingState: e,
                            editorMode: "default",
                            userActionPrefix: "DbProperty",
                            options: u
                        }), [h, a, u]),
                        S = (0, r.useCallback)(() => {
                            let e = o(358377).default.state;
                            "editing" !== e.mode ? tk(n, a) : v(e) || tk(n, a)
                        }, [n, a, v]),
                        x = (0, r.useCallback)(() => {
                            var e;
                            let t = o(358377).default.state;
                            if ("editing" !== t.mode || !h) return;
                            let r = null == (e = (0, o(778758).H)(t.multiSelection)) ? void 0 : e.selection;
                            if (!r) return;
                            let l = h.getValue();
                            if (!l || 0 === l.length) return;
                            let n = f().q4_(l),
                                i = r.endIndex,
                                s = (0, o(195251).kg)(n, i);
                            (0, o(195251).Ei)({
                                environment: a,
                                textStore: h,
                                editingState: t,
                                userActionPrefix: "DbProperty",
                                text: n,
                                currentLineStart: s,
                                options: u
                            })
                        }, [h, a, u]),
                        k = (0, r.useCallback)(() => tS(n, a), [n, a]),
                        C = (0, r.useCallback)(e => {
                            h && (0, o(195251).$X)({
                                bulletIndentationEnabled: u.bulletIndentationEnabled,
                                textStore: h,
                                environment: a,
                                direction: "indent",
                                e
                            }) || tb(e, n, a)
                        }, [n, a, h, u]),
                        w = (0, r.useCallback)(e => {
                            h && (0, o(195251).$X)({
                                bulletIndentationEnabled: u.bulletIndentationEnabled,
                                textStore: h,
                                environment: a,
                                direction: "outdent",
                                e
                            }) || tx(e, n, a)
                        }, [n, a, h, u]),
                        A = (0, r.useCallback)(() => tM(e, l, a, n), [e, l, a, n]),
                        _ = (0, o(682985).K8)(() => th(e, a), [e, a]),
                        P = (0, r.useMemo)(() => o(986939).A.isMobile ? o(372120).Zz : o(372120).qs, []);
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsxs)("div", {
                            style: P,
                            children: [(0, b.jsx)(o(53373).A, {
                                store: h,
                                disableSlashCommands: !0,
                                onEnter: S,
                                onBackspace: x,
                                onEsc: k,
                                onTab: C,
                                onUntab: w,
                                disableSelectAllBlocks: !0,
                                disableSelectionDrag: !0,
                                onChange: A,
                                disabled: _,
                                disableStyleAnnotations: g,
                                pasteBehavior: "inline",
                                placeholder: i,
                                inPageFind: o(831719).Os.none,
                                hasTemporaryDiscussionOnProperty: m,
                                disabledMentionTypes: eG
                            }), (0, b.jsx)(e5, {
                                overlayState: e,
                                propertySchema: t
                            })]
                        }), (0, b.jsx)(e4, {
                            overlayState: e,
                            propertySchema: t
                        })]
                    })
                },
                relation: tt,
                rollup: function({
                    overlayState: e,
                    store: t,
                    ...l
                }) {
                    let n = tn(e),
                        i = (0, o(533992).v3)(),
                        a = (0, o(682985).K8)(() => (0, o(151086).EN)(e), [e]),
                        s = null == n ? void 0 : n.id,
                        c = (0, o(533992).WS)(),
                        d = ti(e),
                        u = tr(e),
                        p = (0, o(83208).X)("rollup_pinned_property_expand") && "compact_page" === e.surface && !c,
                        f = (0, o(682985).K8)(() => {
                            let t = (0, o(151086).K6)(e),
                                r = null == t ? void 0 : t.getParentBlockStore();
                            return th(e, i) || !(0, o(261105).v)({
                                collectionStore: t,
                                collectionViewBlockStore: r,
                                checkNavigableAncestorLocked: !1
                            }) || u
                        }, [e, i, u]),
                        y = (0, r.useCallback)(() => tv(t, i), [t, i]),
                        g = (0, r.useCallback)(e => (function(e, t, r) {
                            let l = t.state;
                            if (!l.isOpen) return;
                            let n = l.store.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "BlockPropertyValueOverlay.handleRollupPropertyMenuUpdate",
                                environment: r,
                                cellTarget: {
                                    spaceWithId: n
                                },
                                canUndo: !0,
                                perform: n => {
                                    ! function(e) {
                                        let {
                                            updatedSchema: t,
                                            transaction: r,
                                            store: l,
                                            environment: n
                                        } = e, i = l.state;
                                        if (i.isOpen && i.isOpen) {
                                            let e = (0, o(151086).K6)(i);
                                            e && (0, o(957395).F)({
                                                environment: n,
                                                collectionStore: e,
                                                update: t,
                                                transaction: r
                                            })
                                        }
                                    }({
                                        updatedSchema: {
                                            [l.property]: e.propertySchema
                                        },
                                        transaction: n,
                                        store: t,
                                        environment: r
                                    })
                                }
                            })
                        })(e, t, i), [t, i]);
                    return p ? n && s && d ? (0, b.jsx)(o(422575).qN, {
                        property: e.property,
                        propertySchema: d,
                        containerRef: null,
                        unmappedProperty: e.property,
                        innerProps: {
                            blockPropertyValueOverlayStore: t,
                            collectionStore: n,
                            disabled: f,
                            locked: !1,
                            tableWrap: !0,
                            store: e.clonedStore,
                            surface: "property_module",
                            collectionViewStore: void 0,
                            property: e.property
                        },
                        children: (0, b.jsx)(to, {
                            overlayState: e,
                            store: t,
                            collectionStore: n,
                            ...l
                        })
                    }) : null : (0, b.jsx)(h, {
                        context: "bpvOverlay",
                        property: e.property,
                        schema: a,
                        disabled: f,
                        onChange: g,
                        parentStore: e.store,
                        analyticsFrom: tp(e),
                        onDismiss: y
                    })
                },
                select: function({
                    overlayState: e,
                    store: t
                }) {
                    let l = (0, o(533992).v3)(),
                        n = tl(e),
                        i = tn(e),
                        a = ti(e),
                        c = ta(e),
                        d = tc(e),
                        u = ts(e),
                        p = (0, r.useCallback)(e => tC({
                            isKeyboardEnter: e,
                            store: t,
                            environment: l
                        }), [t, l]),
                        f = (0, r.useCallback)(() => tv(t, l), [t, l]),
                        y = (0, r.useCallback)(e => t_(e, l, t), [l, t]),
                        g = (0, o(682985).K8)(() => (null == i ? void 0 : i.id) || e.store.getSpaceId() || "", [i, e.store]);
                    if (!g || !a || "select" !== a.type) return null;
                    let m = s().L3(c, a.options || []);
                    return (0, b.jsx)(A, {
                        allowMultiple: !1,
                        value: m ? [m] : [],
                        property: e.property,
                        collectionId: g,
                        schema: n,
                        disabled: d,
                        canConfigureCollection: u,
                        onChange: y,
                        analyticsFrom: tp(e),
                        insertChar: e.insertChar,
                        onAccept: p,
                        onDismiss: f,
                        blockStore: e.store,
                        additionalStores: e.additionalStores,
                        autofillExplanation: (0, b.jsx)(e5, {
                            overlayState: e,
                            propertySchema: a
                        }),
                        bulkAutofillButton: (0, b.jsx)(e4, {
                            overlayState: e,
                            propertySchema: a
                        }),
                        surface: e.surface,
                        formQuestionStore: e.formQuestionStore
                    })
                },
                multi_select: function({
                    overlayState: e,
                    store: t,
                    propertySchema: l
                }) {
                    let n = (0, o(533992).v3)(),
                        i = tl(e),
                        a = tn(e),
                        c = ta(e),
                        d = tc(e),
                        u = ts(e),
                        p = (0, o(682985).K8)(() => {
                            if (!e.formQuestionStore) return !1;
                            let t = e.formQuestionStore.getModel();
                            return !!t && (0, o(703049).Fi)({
                                formQuestionModel: t,
                                propertySchema: l
                            })
                        }, [e.formQuestionStore, l]),
                        f = (0, r.useCallback)(e => t_(e, n, t), [n, t]),
                        y = (0, r.useCallback)(e => tC({
                            isKeyboardEnter: e,
                            store: t,
                            environment: n,
                            isMultiSelectWithLimitOne: p
                        }), [t, n, p]),
                        g = (0, r.useCallback)(() => tv(t, n), [t, n]),
                        m = (0, o(682985).K8)(() => (null == a ? void 0 : a.id) || e.store.getSpaceId(), [a, e.store]);
                    if (!m || !l || "multi_select" !== l.type) return null;
                    let h = s().o2(c, l.options || []);
                    return (0, b.jsx)(A, {
                        allowMultiple: !p,
                        value: h,
                        property: e.property,
                        collectionId: m,
                        schema: i,
                        disabled: d,
                        canConfigureCollection: u,
                        onChange: f,
                        analyticsFrom: tp(e),
                        insertChar: e.insertChar,
                        onAccept: y,
                        onDismiss: g,
                        blockStore: e.store,
                        additionalStores: e.additionalStores,
                        autofillExplanation: (0, b.jsx)(e5, {
                            overlayState: e,
                            propertySchema: l
                        }),
                        bulkAutofillButton: (0, b.jsx)(e4, {
                            overlayState: e,
                            propertySchema: l
                        }),
                        surface: e.surface,
                        formQuestionStore: e.formQuestionStore
                    })
                },
                status: function({
                    overlayState: e,
                    propertySchema: t,
                    store: l
                }) {
                    let n = (0, o(533992).v3)(),
                        i = ta(e),
                        a = tc(e),
                        c = (0, r.useMemo)(() => {
                            if (t && "status" === t.type) return {
                                initialValue: s().RZ(i, t),
                                property: e.property,
                                propertySchema: t,
                                disabled: a,
                                onDismiss: () => tv(l, n),
                                onChange: (r, i) => {
                                    r ? ((() => {
                                        let a = l.state;
                                        if (!a.isOpen || !a.store) return;
                                        let s = a.store,
                                            c = a.collectionContextStore,
                                            d = null == c ? void 0 : c.collectionStore();
                                        if (!s || !d || !E((0, o(106576).ot)({
                                                collectionStore: d,
                                                blockStore: s
                                            })) || (t.options || []).some(e => e.value === r)) return;
                                        let u = i ? ? "To-do",
                                            p = (t.groups ? ? []).findIndex(e => e.name === u); - 1 !== p && o(97137).Uk({
                                            modification: {
                                                type: "keyedObjectListAfter",
                                                newValue: r
                                            },
                                            property: e.property,
                                            propertySchema: t,
                                            environment: n,
                                            collectionStore: d,
                                            groupIndex: p
                                        })
                                    })(), t_({
                                        type: "selectPropertyMenuUpdateReplaceOptions",
                                        options: [r]
                                    }, n, l)) : i ? function(e, t, r) {
                                        var l, n;
                                        let i = r.state;
                                        if (!i.isOpen) return;
                                        if (e.groupType && o(218744).default.checkGate({
                                                gateName: "collections_bulk_action"
                                            }) && null != (l = i.collectionContextStore) && l.bulkSelectionStore.state.isSelectAll) {
                                            let r = tf(i)[0],
                                                l = null == r ? void 0 : r.getAssociatedCollectionStore();
                                            if (l) {
                                                let r = l.getSchema()[l.getMappedProperty(i.property)];
                                                if ((null == r ? void 0 : r.type) === "status") {
                                                    let l = (r.groups ? ? []).find(t => {
                                                            var o;
                                                            return t.name.toLowerCase() === (null == (o = e.groupType) ? void 0 : o.toLowerCase())
                                                        }),
                                                        a = null == l || null == (n = l.optionIds) ? void 0 : n.at(0),
                                                        s = (r.options ? ? []).find(e => e.id === a);
                                                    if (s) return (0, o(61149).U)({
                                                        environment: t,
                                                        collectionContextStore: i.collectionContextStore,
                                                        bulkAction: {
                                                            type: "editProperty",
                                                            propertyId: i.property,
                                                            value: [
                                                                [s.value]
                                                            ]
                                                        }
                                                    })
                                                }
                                            }
                                        }
                                        let a = i.store.getSpaceId();
                                        (0, o(377796).createAndCommit)({
                                            userAction: "BlockPropertyValueOverlay.handleStatusGroupPropertyMenuUpdate",
                                            environment: t,
                                            cellTarget: {
                                                spaceWithId: a
                                            },
                                            canUndo: !0,
                                            perform: o => {
                                                if (e.groupType) {
                                                    for (let r of tf(i)) {
                                                        var l;
                                                        let n = r.getAssociatedCollectionStore();
                                                        if (!n) continue;
                                                        let a = n.getSchema(),
                                                            s = n.getMappedProperty(i.property),
                                                            c = a[s];
                                                        if ((null == c ? void 0 : c.type) !== "status") continue;
                                                        let d = (c.groups ? ? []).find(t => {
                                                                var o;
                                                                return t.name.toLowerCase() === (null == (o = e.groupType) ? void 0 : o.toLowerCase())
                                                            }),
                                                            u = null == d || null == (l = d.optionIds) ? void 0 : l.at(0);
                                                        if (!u) continue;
                                                        let p = (c.options ? ? []).find(e => e.id === u);
                                                        if (!p) continue;
                                                        let f = r.getPropertyStore(s);
                                                        $().R9({
                                                            environment: t,
                                                            store: f,
                                                            value: [
                                                                [p.value]
                                                            ],
                                                            transaction: o
                                                        })
                                                    }
                                                    tw(i, t, r)
                                                }
                                            }
                                        })
                                    }({
                                        groupType: i
                                    }, n, l) : t.defaultOption ? t_({
                                        type: "selectPropertyMenuUpdateReplaceOptions",
                                        options: [t.defaultOption]
                                    }, n, l) : t_({
                                        type: "selectPropertyMenuUpdateReplaceOptions",
                                        options: []
                                    }, n, l)
                                },
                                onAccept: e => tC({
                                    isKeyboardEnter: e,
                                    store: l,
                                    environment: n
                                }),
                                blockPropertyValueOverlayStore: l
                            }
                        }, [t, i, a, e, l, n]);
                    return t && "status" === t.type && c ? e.property === o(11448).Hx.StatusV2 ? (0, b.jsx)(Y, { ...c
                    }) : (0, b.jsx)(N, { ...c
                    }) : null
                },
                person: function({
                    overlayState: e,
                    propertySchema: t,
                    store: l
                }) {
                    let n = (0, o(533992).v3)(),
                        c = tl(e),
                        d = ta(e),
                        u = (0, o(682985).K8)(() => {
                            var t;
                            return null == (t = e.collectionContextStore) ? void 0 : t.collectionStore()
                        }, [e.collectionContextStore]),
                        p = (0, o(682985).K8)(() => e.store.isTemplate(), [e]),
                        y = tc(e),
                        g = (0, r.useCallback)(() => tv(l, n), [l, n]),
                        m = (0, r.useCallback)(e => (function(e, t, r) {
                            let l = r.state;
                            if (!l.isOpen) return;
                            let {
                                collectionContextStore: n,
                                property: c,
                                surface: d
                            } = l, u = null == n ? void 0 : n.collectionStore(), p = null == u ? void 0 : u.getSchema()[c];
                            if (u && p && u.isExternalSyncedCollection()) {
                                var y;
                                o(691968).j2({
                                    property_id: c,
                                    property_type: (null == p ? void 0 : p.type) ? ? "person",
                                    action: "person_select",
                                    from: d,
                                    integration: null == (y = u.getFormat()) ? void 0 : y.external_collection_type,
                                    collection_id: u.id,
                                    is_notion_only_property: (0, o(23803).sc)({
                                        collectionStore: u,
                                        propertyId: c,
                                        propertySchema: p,
                                        isExternallyImportedAndSyncedCollection: u.isExternallyImportedAndSyncedCollection()
                                    })
                                })
                            }
                            let g = l.store.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "BlockPropertyValueOverlay.handlePersonPropertyMenuUpdate",
                                environment: t,
                                cellTarget: {
                                    spaceWithId: g
                                },
                                canUndo: !0,
                                perform: n => {
                                    if (o(627179).pN(e.schema) || tm({
                                            newSchema: e.schema,
                                            transaction: n,
                                            store: r,
                                            environment: t
                                        }), "personPropertyMenuUpdateAddPerson" === e.type) {
                                        for (let t of ty(l))
                                            for (let o of e.newValues)(0, Q().y4)({
                                                transaction: n,
                                                store: t,
                                                operation: {
                                                    path: t.path,
                                                    pointer: t.pointer,
                                                    command: "addPersonAfter",
                                                    args: {
                                                        pointer: o
                                                    }
                                                }
                                            });
                                        tw(l, t, r, {
                                            personAddedGroupMention: e.newValues.some(e => !(0, f().MMZ)(e) && (0, o(659341).I6)(e))
                                        }), (l.property === o(435137)._e.Owner || "notion://wiki/owner_property" === l.property) && (0, o(176349).y)({
                                            environment: t,
                                            blockStore: l.store,
                                            entrypoint: "property_menu",
                                            action: "add"
                                        })
                                    } else if ("personPropertyMenuUpdateRemovePerson" === e.type) {
                                        for (let t of ty(l))(0, Q().y4)({
                                            transaction: n,
                                            store: t,
                                            operation: {
                                                path: t.path,
                                                pointer: t.pointer,
                                                command: "removePerson",
                                                args: {
                                                    pointer: e.removedValue
                                                }
                                            }
                                        });
                                        tw(l, t, r), (l.property === o(435137)._e.Owner || "notion://wiki/owner_property" === l.property) && (0, o(176349).y)({
                                            environment: t,
                                            blockStore: l.store,
                                            entrypoint: "property_menu",
                                            action: "remove"
                                        })
                                    } else if ("personPropertyMenuUpdateReplacePerson" === e.type) {
                                        for (let o of tf(l)) {
                                            let r = o.getAssociatedCollectionStore(),
                                                c = r ? r.getMappedProperty(l.property) : l.property,
                                                d = o.getPropertyStore(c),
                                                u = [e.newValue];
                                            if ((null == p ? void 0 : p.type) === "person" && p.limit) {
                                                let t = o.getPropertyValue(l.property),
                                                    r = (0, a().K)({
                                                        textValue: t,
                                                        propertySchema: p,
                                                        blockCreatorPointer: o.getCreatedByPointer(),
                                                        skipDefault: !0
                                                    });
                                                u = s().AC({
                                                    rawPersonValue: r,
                                                    updatedValue: e.newValue,
                                                    propertySchema: p
                                                })
                                            }
                                            let f = (0, i().R)(u);
                                            $().R9({
                                                environment: t,
                                                store: d,
                                                value: f,
                                                transaction: n
                                            })
                                        }
                                        tw(l, t, r), (l.property === o(435137)._e.Owner || "notion://wiki/owner_property" === l.property) && (0, o(176349).y)({
                                            environment: t,
                                            blockStore: l.store,
                                            entrypoint: "property_menu",
                                            action: "replace"
                                        })
                                    } else(0, o(722371).HB)(e)
                                }
                            })
                        })(e, n, l), [n, l]),
                        h = (0, o(682985).K8)(() => e.store.getCreatedByPointer(), [e]);
                    if (!t || "person" !== t.type) return null;
                    let v = (0, o(955582).a)({
                            value: d,
                            isTemplatePage: p,
                            propertySchema: t,
                            blockCreatorPointer: p || (0, o(22148).J)(e.surface) ? void 0 : h
                        }),
                        S = (0, o(722371).O9)(t.default) && !d && 1 === v.length;
                    return (0, b.jsx)(o(893242).gw, {
                        value: v,
                        surface: e.surface,
                        valueIsUnpersistedDefaultValue: S,
                        propertySchema: t,
                        schema: c,
                        disabled: y,
                        onChange: m,
                        insertChar: e.insertChar,
                        onDismiss: g,
                        parentStore: e.store,
                        isTemplatePage: p,
                        formQuestionStore: e.formQuestionStore,
                        collectionStore: u
                    })
                },
                number: function({
                    overlayState: e,
                    store: t,
                    propertySchema: l
                }) {
                    let n = (0, o(533992).v3)(),
                        i = ta(e),
                        a = tc(e),
                        s = (0, r.useCallback)(e => (function(e, t, r) {
                            let l = r.state;
                            if (!l.isOpen) return;
                            let n = l.store.getSpaceId();
                            (0, o(973681).YX)({
                                newNumberValue: e,
                                environment: t,
                                stores: ty(l),
                                spaceId: n
                            }), tw(l, t, r)
                        })(e, n, t), [n, t]);
                    if (!l || "number" !== l.type) return null;
                    let c = "table" === e.surface,
                        d = o(588688).M(i),
                        u = (null == e ? void 0 : e.sizing) === "large" ? "large" : "default";
                    return (0, b.jsx)(eg, {
                        size: u,
                        value: d,
                        isTable: c,
                        format: l.number_format || "number",
                        disabled: a,
                        insertChar: e.insertChar,
                        onChange: s
                    })
                },
                date: function({
                    overlayState: e,
                    store: t,
                    propertySchema: l
                }) {
                    let n = (0, o(533992).v3)(),
                        i = ta(e),
                        a = tc(e),
                        s = ts(e),
                        c = (0, r.useCallback)(e => (function(e, t, r) {
                            let l = r.state;
                            if (!l.isOpen) return;
                            let n = l.store.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "BlockPropertyValueOverlay.handleDatePropertyValueChange",
                                environment: t,
                                cellTarget: {
                                    spaceWithId: n
                                },
                                canUndo: !0,
                                perform: o => {
                                    for (let n of tf(l)) !e || d().kC(e) ? (y().D5({
                                        environment: t,
                                        store: n,
                                        type: "dateValue",
                                        dateValue: e,
                                        propertyId: l.property,
                                        transaction: o
                                    }), e || tv(r, t)) : ((0, q().z)({
                                        store: n.getPropertiesStore(),
                                        transaction: o,
                                        data: {
                                            [l.property]: [f().wmz(f().Ii$({
                                                type: e
                                            }))]
                                        }
                                    }), tv(r, t)), tw(l, t, r)
                                }
                            })
                        })(e, n, t), [n, t]),
                        u = (0, r.useCallback)(e => (function(e, t, r) {
                            let l = t.state;
                            if (!l.isOpen) return;
                            let n = (0, o(151086).A9)(l);
                            if (!n || "date" !== n.type) return;
                            let i = (0, o(151086).EN)(l),
                                a = { ...n,
                                    date_format: e
                                },
                                s = { ...i,
                                    [l.property]: a
                                },
                                c = l.store.getSpaceId();
                            if ((0, o(377796).createAndCommit)({
                                    userAction: "BlockPropertyValueOverlay.handleDatePropertyDateFormatChange",
                                    environment: r,
                                    cellTarget: {
                                        spaceWithId: c
                                    },
                                    canUndo: !0,
                                    perform: e => {
                                        tm({
                                            newSchema: s,
                                            transaction: e,
                                            store: t,
                                            environment: r
                                        })
                                    }
                                }), a) {
                                var d;
                                tp(l), (0, o(123491).L)(r, {
                                    property_type: a.type,
                                    action: "date_change_format",
                                    from: tp(l),
                                    collection_id: null == (d = (0, o(151086).K6)(l)) ? void 0 : d.id
                                })
                            }
                        })(e, t, n), [n, t]),
                        p = (0, r.useCallback)(e => (function(e, t, r) {
                            let l = t.state;
                            if (!l.isOpen) return;
                            let n = (0, o(151086).A9)(l);
                            if (!n || "date" !== n.type) return;
                            let i = (0, o(151086).EN)(l),
                                a = { ...n,
                                    time_format: e
                                },
                                s = { ...i,
                                    [l.property]: a
                                },
                                c = l.store.getSpaceId();
                            if ((0, o(377796).createAndCommit)({
                                    userAction: "BlockPropertyValueOverlay.handleDatePropertyTimeFormatChange",
                                    environment: r,
                                    cellTarget: {
                                        spaceWithId: c
                                    },
                                    canUndo: !0,
                                    perform: e => {
                                        tm({
                                            newSchema: s,
                                            transaction: e,
                                            store: t,
                                            environment: r
                                        })
                                    }
                                }), a) {
                                var d;
                                tp(l), (0, o(123491).L)(r, {
                                    property_type: a.type,
                                    action: "date_change_format",
                                    from: tp(l),
                                    collection_id: null == (d = (0, o(151086).K6)(l)) ? void 0 : d.id
                                })
                            }
                        })(e, t, n), [n, t]),
                        g = (0, r.useCallback)(() => tv(t, n), [t, n]),
                        m = (0, o(682985).K8)(() => e.store.isTemplate(), [e]);
                    if (!l || "date" !== l.type) return null;
                    let h = (0, o(179358).b)(i),
                        v = l.default_reminder,
                        S = ["form_editor", "form_viewer"].includes(e.surface);
                    return (0, b.jsx)(o(815048).u2, {
                        dependency: o(750739).cm,
                        children: ({
                            DatePropertyMenu: t
                        }) => (0, b.jsx)(t, {
                            firstDayOfWeek: o(97892).X.state,
                            value: h,
                            surface: e.surface,
                            onChangeValue: c,
                            dateFormat: l.date_format,
                            onChangeDateFormat: u,
                            timeFormat: l.time_format,
                            defaultReminder: v,
                            disabled: a,
                            canConfigureCollection: s,
                            onChangeTimeFormat: p,
                            onDismiss: g,
                            shouldShowReminder: !S,
                            shouldShowControls: !S,
                            isTemplatePage: m,
                            formQuestionStore: e.formQuestionStore
                        })
                    })
                },
                file: function({
                    overlayState: e,
                    store: t
                }) {
                    let l = (0, o(533992).v3)(),
                        n = tl(e),
                        i = ta(e),
                        a = tc(e),
                        c = n[e.property],
                        d = s().pJ(i, c),
                        u = (0, r.useCallback)(() => tv(t, l), [t, l]),
                        p = (0, r.useCallback)(r => {
                            let n = e.store.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "BlockPropertyValueOverlay.renderFile",
                                environment: l,
                                cellTarget: {
                                    spaceWithId: n
                                },
                                canUndo: !0,
                                perform: n => {
                                    if (o(627179).pN(r.schema) || tm({
                                            newSchema: r.schema,
                                            transaction: n,
                                            store: t,
                                            environment: l
                                        }), !o(627179).pN(r.value)) {
                                        let o = e.store.getPropertyValue(e.property),
                                            i = s().NS(o),
                                            a = r.value;
                                        (null == c ? void 0 : c.type) === "file" && c.limit && (a = s().JW({
                                            rawFileValue: i,
                                            updatedValue: r.value,
                                            propertySchema: c
                                        }));
                                        let d = s().eQ(a);
                                        for (let t of ty(e)) $().R9({
                                            environment: l,
                                            store: t,
                                            value: d,
                                            transaction: n
                                        });
                                        tw(e, l, t)
                                    }
                                    r.pastedSecureFile && o(124937).Bn({
                                        store: e.store,
                                        source: r.pastedSecureFile.copiedSource,
                                        fileIds: [r.pastedSecureFile.fileId],
                                        transaction: n
                                    })
                                }
                            })
                        }, [l, t, e, c]);
                    return (0, b.jsx)(ec, {
                        store: e.store,
                        value: d,
                        property: e.property,
                        schema: n,
                        onDismiss: u,
                        uploadFiles: e.uploadFiles,
                        disabled: a,
                        onChange: p
                    })
                },
                url: td,
                phone_number: td,
                email: td,
                formula: function({
                    overlayState: e,
                    propertySchema: t,
                    store: l
                }) {
                    let n = (0, o(533992).v3)(),
                        i = tr(e),
                        a = tc(e),
                        s = ts(e),
                        c = tn(e),
                        d = (0, o(682985).K8)(() => e.store.getModel(), [e.store]),
                        u = (0, r.useCallback)(() => tv(l, n), [l, n]),
                        p = (0, r.useCallback)(e => (function(e, t) {
                            let {
                                newValue: r,
                                newType: l,
                                propertySchema: n,
                                property: i,
                                collectionStore: a
                            } = e, s = !r || o(381453).Im(r) ? { ...n,
                                formula2: void 0,
                                version: "v2"
                            } : { ...n,
                                formula2: {
                                    code: r,
                                    result_type: l
                                },
                                version: "v2"
                            }, c = a.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "CollectionFormulaOptions.handleFormulaChange",
                                environment: t,
                                cellTarget: {
                                    spaceWithId: c
                                },
                                canUndo: !0,
                                perform: e => {
                                    (0, o(957395).F)({
                                        environment: t,
                                        collectionStore: a,
                                        update: {
                                            [i]: s
                                        },
                                        transaction: e
                                    })
                                }
                            })
                        })(e, n), [n]),
                        f = a || !s || i;
                    return d && c && t && "formula" === t.type ? (0, b.jsx)(o(815048).u2, {
                        dependency: o(864850).T.formulas,
                        children: r => (0, b.jsx)(o(973124).C, {
                            handleClose: u,
                            property: e.property,
                            getRecordModel: e.store.getRecordModel,
                            propertySchema: t,
                            collectionStore: c,
                            handleSave: p,
                            formulas: r,
                            disabled: f,
                            blockStore: e.store,
                            analyticsFrom: tp(e)
                        })
                    }) : null
                },
                verification: function({
                    overlayState: e,
                    propertySchema: t,
                    store: l
                }) {
                    let n = (0, o(533992).v3)(),
                        i = ta(e),
                        a = (0, r.useCallback)(() => tv(l, n), [l, n]),
                        c = (0, r.useCallback)(t => {
                            let r = e.store.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "BlockPropertyValueOverlay.verification",
                                environment: n,
                                cellTarget: {
                                    spaceWithId: r
                                },
                                canUndo: !0,
                                perform: o => {
                                    let r = s().j2(t.value);
                                    for (let t of ty(e)) $().R9({
                                        environment: n,
                                        store: t,
                                        value: r,
                                        transaction: o
                                    });
                                    tw(e, n, l)
                                }
                            }), (0, o(176349).q)({
                                environment: n,
                                blockStore: e.store,
                                update: t
                            }), a()
                        }, [n, e, l, a]),
                        d = (0, o(435137).U1)(i),
                        u = (0, o(682985).K8)(() => e.store.isArchived(), [e.store]);
                    return (null == t ? void 0 : t.type) !== "verification" ? null : (0, b.jsx)(o(907851).Y, {
                        propertyName: t.name,
                        onChange: c,
                        verificationValue: d,
                        getRecordModel: e.store.getRecordModel,
                        blockId: e.store.id,
                        onClose: a,
                        showTitle: !0,
                        showCurrentStatusHeader: !0,
                        showRemoveVerificationButton: !0,
                        showVerificationFooter: !0,
                        showCustomHeader: !1,
                        entrypoint: "db_property_menu",
                        isPageArchived: u
                    })
                },
                place: function({
                    overlayState: e,
                    propertySchema: t,
                    propertyType: l,
                    store: n
                }) {
                    let i = (0, o(533992).v3)(),
                        a = ta(e),
                        s = (0, r.useCallback)(t => {
                            let {
                                store: r,
                                property: l
                            } = e, a = r.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "BlockPropertyValueOverlay.handlePlaceChange",
                                environment: i,
                                cellTarget: {
                                    spaceWithId: a
                                },
                                canUndo: !0,
                                perform: e => {
                                    (0, o(331941).WQ)({
                                        environment: i,
                                        store: r,
                                        property: l,
                                        place: t.value,
                                        transaction: e
                                    })
                                }
                            }), tw(e, i, n, {
                                placeLocationSource: t.placeLocationSource
                            })
                        }, [i, e, n]),
                        c = (0, r.useCallback)(() => {
                            tv(n, i)
                        }, [n, i]);
                    if ((null == t ? void 0 : t.type) !== "place") return null;
                    let d = (0, o(862060).eC)(a);
                    return (0, b.jsx)(eU, {
                        placeValue: d,
                        propertyName: t.name,
                        onChange: s,
                        onClose: c,
                        insertChar: e.insertChar
                    })
                },
                checkbox: void 0,
                created_by: void 0,
                created_time: void 0,
                last_edited_by: void 0,
                last_edited_time: void 0,
                last_visited_time: void 0,
                button: void 0,
                auto_increment_id: void 0,
                location: void 0
            };
            ({ ...e9,
                relation: o(169789).JK
            });
            let e1 = { ...o(372120).qs,
                    fontWeight: o(699422).Wy.medium
                },
                e3 = { ...o(372120).Zz,
                    fontWeight: o(699422).Wy.medium
                },
                e2 = {
                    aiWritingLabel: {
                        fontSize: 12,
                        color: o(632079).Tj.purple.text.accentPrimary,
                        display: "flex",
                        alignItems: "inline",
                        fontWeight: o(699422).Wy.medium,
                        padding: "8px 12px"
                    },
                    dot: {
                        color: o(632079).Tj.text.tertiary
                    },
                    autoUpdatingMobileLink: {
                        paddingInlineStart: 2,
                        paddingInlineEnd: 2
                    },
                    editMobileLink: {
                        marginTop: 6,
                        marginBottom: 2
                    },
                    style0: {
                        marginInlineStart: 4
                    },
                    style1: {
                        fontSize: 12
                    }
                };

            function e5({
                overlayState: e,
                propertySchema: t
            }) {
                let r = (0, o(67499).S)(),
                    l = (0, o(682985).K8)(() => (0, o(576348).O0)(), []),
                    n = (0, o(682985).K8)(() => o(298176).m.isWriting(), []),
                    i = !(0, o(682985).O$)(o(205885).e),
                    a = t && o(9247).$M(t) ? (0, o(9247).om)(t) : void 0,
                    {
                        shouldShowLegacyAutofill: s
                    } = (0, o(251955).D)({
                        aiInference: a
                    }),
                    c = (0, o(682985).K8)(() => (0, o(576348).ge)(null == r ? void 0 : r.publicEditModeStore.state, e.store), [r, e]);
                return l && !i && s ? n ? (0, b.jsxs)(o(324489).V, {
                    isSecondaryColor: !0,
                    style: e2.aiWritingLabel,
                    isSmall: !0,
                    isMultiline: !0,
                    children: [(0, b.jsx)(o(109939).sA, {
                        defaultMessage: "AI is writing",
                        id: "BlockPropertyValueOverlay.AIActionText.overlay"
                    }), (0, b.jsx)("div", {
                        style: e2.style0,
                        children: (0, b.jsx)(o(118845).A, {
                            colorPalette: "purple"
                        })
                    })]
                }) : null != a && a.auto_update_on_edit ? (0, b.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    paddingBlock: 8,
                    paddingInline: 12,
                    children: [(0, b.jsx)(o(324489).V, {
                        isSecondaryColor: !0,
                        style: e2.style1,
                        isSmall: !0,
                        isMultiline: !0,
                        children: (0, b.jsx)(o(109939).sA, {
                            defaultMessage: "Auto-updated by AI",
                            id: "BlockPropertyValueOverlay.helpText.overlay"
                        })
                    }), o(986939).A.isMobile && c ? (0, b.jsxs)(o(4458).fI, {
                        paddingInlineStart: 2,
                        alignItems: "center",
                        children: [(0, b.jsx)("div", {
                            style: e2.dot,
                            children: "•"
                        }), (0, b.jsx)(e_, {
                            overlayState: e,
                            propertySchema: t,
                            style: e2.autoUpdatingMobileLink
                        }), (0, b.jsx)(eA, {
                            overlayState: e,
                            propertySchema: t,
                            showSeparator: !0
                        })]
                    }) : void 0]
                }) : o(986939).A.isMobile && a && c ? (0, b.jsx)(e_, {
                    overlayState: e,
                    propertySchema: t,
                    style: e2.editMobileLink
                }) : null : null
            }
            let e7 = {
                button: {
                    width: "100%",
                    height: "auto",
                    borderTop: `1px solid ${o(632079).Tj.border.secondaryTranslucent}`
                },
                titleContainer: {
                    fontSize: 14,
                    whiteSpace: "normal"
                },
                descriptionContainer: {
                    fontSize: 12,
                    color: o(632079).Tj.text.secondary,
                    whiteSpace: "normal",
                    lineHeight: "1.4em"
                }
            };

            function e4({
                overlayState: e,
                propertySchema: t
            }) {
                let {
                    store: l
                } = e, n = null == t ? void 0 : t.name, i = (0, o(533992).v3)(), a = (0, o(67499).S)(), s = (0, o(682985).K8)(() => (0, o(576348).ge)(null == a ? void 0 : a.publicEditModeStore.state, l), [a, l]), c = !(0, o(682985).O$)(o(205885).e), d = (0, o(682985).K8)(() => {
                    var t;
                    return Math.max((null == (t = e.collectionsBulkActionsToolbarStore) ? void 0 : t.getNumberOfTextStoresBeingEdited()) ? ? 0, o(584265).default.state.stores.length)
                }, [e]), u = (0, o(682985).K8)(() => l.getSpaceId(), [l]), p = (0, o(345776).T)(), f = (0, o(217844)._)({
                    name: "collection_property_autofill",
                    spaceId: u,
                    userId: p,
                    amount: d
                }), y = (0, r.useCallback)(() => {
                    if (f) {
                        if (!(0, o(94418).e2)(f)) return void o(447281).triggerAiAutofillUpsell({
                            environment: i,
                            from: "ai_autofill_bulk_fill",
                            upsell: f.upsell,
                            store: l
                        });
                        ! function(e, t, r, l) {
                            let {
                                collectionsBulkActionsToolbarStore: n
                            } = e;
                            if (n)
                                if ((0, o(94418).e2)(t)) {
                                    var i, a, s;
                                    let t = n.state.textStoresBeingEdited;
                                    if (0 === t.length && (t = o(584265).default.state.stores), !(0, o(722371).EI)(t)) return;
                                    let l = (0, o(151086).A9)(e);
                                    if (!l) return;
                                    o(447281).autofillPropertyForBlocks({
                                        environment: r,
                                        stores: t,
                                        property: e.property,
                                        propertySchema: l,
                                        userEventForAnalytics: "generate_from_overlay_button",
                                        isBulkAction: !0,
                                        from: o(793550).zP(e.surface),
                                        collectionStore: null == (i = e.collectionContextStore) ? void 0 : i.collectionStore(),
                                        collectionViewStore: null == (a = e.collectionContextStore) ? void 0 : a.collectionViewStore(),
                                        collectionViewBlockStore: null == (s = e.collectionContextStore) ? void 0 : s.collectionViewBlockStore()
                                    })
                                } else o(447281).triggerAiAutofillUpsell({
                                    environment: r,
                                    from: "ai_autofill_bulk_fill",
                                    upsell: t.upsell,
                                    store: l
                                })
                        }(e, f, i, l)
                    }
                }, [e, f, i, l]);
                if (t && s && o(9247).$M(t) && (0, o(9247).om)(t)) {
                    if (d <= 1 || c || !f) return null;
                    let e = f.limit.amount;
                    return (0, b.jsx)(o(988022).p, {
                        style: e7.button,
                        onClick: () => y(),
                        children: (0, b.jsxs)(o(4458).fI, {
                            gap: 8,
                            paddingBlock: 8,
                            alignItems: "start",
                            children: [(0, b.jsx)(o(16275).I, {
                                icon: o(312528).x,
                                colorPalette: "purple",
                                colorVariant: "accentPrimary"
                            }), (0, b.jsxs)(o(4458).VP, {
                                gap: 4,
                                children: [(0, b.jsx)("div", {
                                    style: e7.titleContainer,
                                    children: n ? (0, b.jsx)(o(109939).sA, {
                                        defaultMessage: "Update “{propertyName}” with AI",
                                        id: "BlockPropertyValueOverlay.bulkAiAutofillButton.titleWithPropertyName",
                                        values: {
                                            propertyName: n
                                        }
                                    }) : (0, b.jsx)(o(109939).sA, {
                                        defaultMessage: "Update with AI",
                                        id: "BlockPropertyValueOverlay.bulkAiAutofillButton.title"
                                    })
                                }), (0, b.jsx)("div", {
                                    style: e7.descriptionContainer,
                                    children: (0, o(94418).e2)(f) ? (0, b.jsx)(o(109939).sA, {
                                        defaultMessage: "{numPages, select, 1 {Update {numPages} page} other {Update {numPages} pages}}",
                                        id: "BlockPropertyValueOverlay.bulkAiAutofillButton.countAndDescription",
                                        values: {
                                            numPages: d
                                        }
                                    }) : 0 === e ? (0, b.jsx)(o(109939).sA, {
                                        defaultMessage: "Upgrade Notion AI to update properties with AI",
                                        id: "BlockPropertyValueOverlay.bulkAiAutofillButton.largeBulkFillUpsellMessage.zeroPagesV2"
                                    }) : (0, b.jsx)(o(109939).sA, {
                                        defaultMessage: "Upgrade Notion AI to update more than {maxItems} pages at once",
                                        id: "BlockPropertyValueOverlay.bulkAiAutofillButton.largeBulkFillUpsellMessageV2",
                                        values: {
                                            maxItems: f.limit.amount
                                        }
                                    })
                                })]
                            })]
                        })
                    })
                }
                return null
            }
            let te = {
                RelationPropertyRenderer: tt
            };

            function tt({
                overlayState: e,
                store: t,
                edgeRelationValue: l
            }) {
                let n = (0, o(533992).v3)(),
                    i = tl(e),
                    a = (0, o(682985).K8)(() => s().n(tu(e)), [e]);
                l && (a = l);
                let c = tn(e),
                    d = ts(e),
                    u = (0, o(682985).K8)(() => e.store.getParentId(), [e]),
                    p = tc(e),
                    f = (0, r.useCallback)(() => tv(t, n), [t, n]),
                    y = (0, r.useCallback)(async e => {
                        let r = t.state;
                        r.isOpen && await tP({
                            update: e,
                            environment: n,
                            blockStore: r.store,
                            property: r.property,
                            propertySchema: (0, o(151086).A9)(r),
                            inMemoryRecordCache: r.store.inMemoryRecordCache,
                            editStores: tf(r),
                            collectionContextStore: r.collectionContextStore,
                            surface: r.surface
                        })
                    }, [n, t]),
                    g = (0, o(682985).K8)(() => {
                        var t;
                        return (null == (t = e.collectionContextStore) ? void 0 : t.collectionViewStore()) || void 0
                    }, [e]);
                return u ? (0, b.jsx)(o(6451).PF, {
                    blockPointers: a,
                    property: e.property,
                    collectionStore: c,
                    collectionId: u,
                    schema: i,
                    isDisabled: p,
                    canConfigureCollection: d,
                    onChange: y,
                    analyticsFrom: tp(e),
                    onClose: f,
                    blockStore: e.store,
                    overlayMode: e.mode,
                    insertChar: e.insertChar,
                    surface: e.surface,
                    formQuestionStore: e.formQuestionStore,
                    collectionViewStore: g
                }) : null
            }

            function to({
                overlayState: e,
                collectionStore: t,
                store: l
            }) {
                let n = (0, o(533992).WS)(),
                    i = (0, r.useMemo)(() => {
                        if (t) return new(o(345426)).ComputedStore(() => t.getSchema(), {
                            debugName: "BlockPropertyValueOverlay.collectionSchemaStore"
                        })
                    }, [t]),
                    a = (0, o(937975).KV)({
                        store: e.clonedStore,
                        property: e.property,
                        collectionStore: t,
                        collectionSchemaStore: i,
                        surface: "page"
                    }),
                    s = "result" === a.type ? a.propertyStylingType : void 0,
                    c = "result" === a.type ? a.rollupAggregationValue : void 0,
                    d = "result" === a.type ? a.rollupTokens : void 0,
                    u = !c && !d,
                    p = (0, o(960253).I)(() => {
                        let t = (0, o(642065)._Q)({
                            isPhone: n
                        });
                        return {
                            containerStyle: { ...!n ? {
                                    minWidth: e.rect.width,
                                    maxWidth: u ? e.rect.width : Math.max(400, e.rect.width),
                                    maxHeight: 280
                                } : {},
                                fontSize: o(642065).Mi,
                                ...t.page.default,
                                ..."checkbox" === s ? { ...t.page.checkbox
                                } : {},
                                ..."text" === s ? { ...t.page.text
                                } : {},
                                ..."button" === s ? { ...t.page.button
                                } : {}
                            }
                        }
                    }, [u, n, e.rect.width, s]),
                    f = (0, o(533992).v3)(),
                    {
                        RouterStore: y
                    } = f,
                    g = (0, r.useRef)(window.location.href),
                    m = (0, o(682985).K8)(() => y.state.route, [y]);
                return (r.useEffect(() => {
                    g.current !== window.location.href && tv(l, f)
                }, [m, f, l]), "loading" === a.type || "error" === a.type) ? null : (0, b.jsx)("div", {
                    style: p.containerStyle,
                    children: c ? ? d ? ? (0, b.jsx)(o(959110).ao, {})
                })
            }

            function tr(e) {
                return (0, o(682985).K8)(() => {
                    var t;
                    if (!e.isOpen) return !1;
                    let o = null == (t = e.collectionContextStore) ? void 0 : t.collectionStore();
                    if (!o) return !1;
                    let r = e.property;
                    return !!(o.getDatabaseType() && o.isTypedProperty(r))
                }, [e])
            }

            function tl(e) {
                return (0, o(682985).K8)(() => (0, o(151086).EN)(e), [e])
            }

            function tn(e) {
                return (0, o(682985).K8)(() => (0, o(151086).K6)(e), [e])
            }

            function ti(e) {
                return (0, o(682985).K8)(() => (0, o(151086).A9)(e), [e])
            }

            function ta(e) {
                return (0, o(682985).K8)(() => tu(e), [e])
            }

            function ts(e) {
                return (0, o(682985).K8)(() => {
                    if ("form_viewer" === e.surface) return !1;
                    let t = (0, o(151086).K6)(e),
                        r = null == t ? void 0 : t.getParentBlockStore();
                    return (0, o(261105).v)({
                        collectionStore: t,
                        collectionViewBlockStore: r,
                        checkNavigableAncestorLocked: !1
                    })
                }, [e])
            }

            function tc(e) {
                let t = (0, o(533992).v3)();
                return (0, o(682985).K8)(() => th(e, t), [e, t])
            }

            function td({
                overlayState: e,
                propertyType: t,
                store: l
            }) {
                let n = ta(e),
                    i = f().k4p(n),
                    a = tc(e),
                    c = (0, o(533992).v3)(),
                    d = (0, r.useCallback)(e => (function(e, t, r) {
                        let l = r.state;
                        if (!l.isOpen) return;
                        let n = s().jw(e),
                            i = l.store.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "BlockPropertyValueOverlay.handleURLValueChange",
                            environment: t,
                            cellTarget: {
                                spaceWithId: i
                            },
                            canUndo: !0,
                            perform: e => {
                                for (let o of ty(l)) $().R9({
                                    environment: t,
                                    store: o,
                                    value: n,
                                    transaction: e
                                })
                            }
                        }), tw(l, t, r), o(691968).oF({
                            pastedText: e,
                            source: "url_property"
                        })
                    })(e, c, l), [c, l]),
                    u = (0, r.useCallback)(() => tv(l, c), [l, c]),
                    p = "url";
                return "phone_number" === t ? p = "tel" : "email" === t && (p = "email"), (0, b.jsx)(eh, {
                    value: i,
                    inputType: p,
                    disabled: a,
                    onChange: d,
                    onDismiss: u
                })
            }

            function tu(e) {
                return e.store.getPropertyValue(e.property)
            }

            function tp(e) {
                return o(793550).zP(e.surface)
            }

            function tf(e) {
                return [e.store, ...e.additionalStores]
            }

            function ty(e) {
                return tf(e).map(t => {
                    let o = t.getAssociatedCollectionStore(),
                        r = o ? o.getMappedProperty(e.property) : e.property;
                    return t.getPropertyStore(r)
                })
            }

            function tg({
                isFirstRender: e
            }, t, r) {
                let l = t.state;
                if (!l.isOpen || !l.collectionContextStore) return;
                let n = o(680007).default.mark("collections.block_property_value_overlay_render");
                o(680007).default.measureAfterNextFlush(n, {
                    getData: () => {
                        var t;
                        return { ...o(752242).kz(l.collectionContextStore),
                            is_first_render: e,
                            property_type: null == (t = (0, o(151086).A9)(l)) ? void 0 : t.type,
                            from: o(793550).zP(l.surface)
                        }
                    }
                })
            }

            function tm(e) {
                let {
                    newSchema: t,
                    transaction: r,
                    store: l,
                    environment: n
                } = e, i = l.state;
                if (i.isOpen && i.isOpen) {
                    let e = (0, o(151086).K6)(i);
                    e && (0, o(667888).I)({
                        environment: n,
                        collectionStore: e,
                        update: {
                            schema: t
                        },
                        transaction: r
                    })
                }
            }

            function th(e, t) {
                if ((0, o(597845).Wi)(t, e.store.id)) return !0;
                let r = (0, o(151086).A9)(e),
                    l = r && o(9247).$M(r) && (0, o(9247).om)(r);
                if (l && l.auto_update_on_edit && (0, o(576348).O0)()) {
                    let {
                        shouldShowLegacyAutofill: e
                    } = (0, o(251955).a)({
                        isDatabaseAgentsEnabled: (0, o(551408).R)(),
                        aiInference: l
                    });
                    if (e) return !0
                }
                let n = (0, o(151086).K6)(e);
                return !(!n || (0, o(23803).RL)({
                    isExternallyImportedAndSyncedCollection: n.isExternallyImportedAndSyncedCollection(),
                    propertyId: e.property,
                    collectionStore: n,
                    propertySchema: r
                }) || (0, o(23803).JD)(n) && (null == r ? void 0 : r.synced_permissions) === "read_write") || e.readOnly || (0, o(120080).Y)(t, e.store, e.store.getSpaceStore()) || (0, o(235089).u)(e.property)
            }

            function tv(e, t) {
                o(576186).VN({
                    environment: t,
                    blockPropertyValueOverlayStore: e
                })
            }

            function tS(e, t) {
                o(576186).tY({
                    environment: t,
                    blockPropertyValueOverlayStore: e
                })
            }

            function tb(e, t, r) {
                e.preventDefault(), o(576186).XQ({
                    environment: r,
                    blockPropertyValueOverlayStore: t
                })
            }

            function tx(e, t, r) {
                e.preventDefault(), o(576186).gu({
                    environment: r,
                    blockPropertyValueOverlayStore: t
                })
            }

            function tk(e, t) {
                o(576186).iF({
                    environment: t,
                    blockPropertyValueOverlayStore: e
                })
            }

            function tC(e) {
                let {
                    isKeyboardEnter: t,
                    store: r,
                    environment: l,
                    isMultiSelectWithLimitOne: n
                } = e, i = r.state;
                if (!i.isOpen) return;
                let a = (0, o(151086).A9)(i);
                a && ("select" === a.type || "status" === a.type || "multi_select" === a.type && n) && o(374176).default.afterNextFlush(() => {
                    t ? o(576186).iF({
                        environment: l,
                        blockPropertyValueOverlayStore: r
                    }) : o(576186).tY({
                        environment: l,
                        blockPropertyValueOverlayStore: r
                    })
                })
            }

            function tw(e, t, r, l) {
                tA({
                    environment: t,
                    blockStore: e.store,
                    collectionContextStore: e.collectionContextStore,
                    propertyId: e.property,
                    propertySchema: (0, o(151086).A9)(e),
                    surface: e.surface,
                    isOpenFromBulkActionsToolbar: o(793550).pi(r),
                    ...l
                })
            }

            function tA(e) {
                let {
                    environment: t,
                    blockStore: r,
                    collectionContextStore: l,
                    propertyId: n,
                    propertySchema: i,
                    surface: a,
                    isOpenFromBulkActionsToolbar: c,
                    placeLocationSource: d,
                    personAddedGroupMention: u
                } = e, p = r.getType(), f = r.getAssociatedCollectionId();
                if (p && i && l) {
                    var y, g;
                    let e = o(793550).zP(a);
                    (0, o(85868).E)({
                        environment: t,
                        collection_id: f,
                        collection_view_id: null == (y = l.collectionViewStore()) ? void 0 : y.id,
                        collection_view_block_id: null == (g = l.collectionViewBlockStore()) ? void 0 : g.id,
                        block_id: r.id,
                        property: n,
                        property_type: i.type,
                        from: e,
                        isFromBulkActionsToolbar: c,
                        value_count: s().o6({
                            blockModel: r.getModel(),
                            property: n,
                            propertySchema: i,
                            getRecordModel: r.getRecordModel
                        }),
                        ...d && {
                            place_location_source: d
                        },
                        ...u && {
                            person_added_group_mention: u
                        }
                    })
                }
            }

            function t_(e, t, r) {
                var n;
                let i = r.state;
                if (!i.isOpen) return;
                if ("selectPropertyMenuUpdateReplaceOptions" === e.type && o(218744).default.checkGate({
                        gateName: "collections_bulk_action"
                    }) && null != (n = i.collectionContextStore) && n.bulkSelectionStore.state.isSelectAll) {
                    let r = s().rK(e.options);
                    (0, o(61149).U)({
                        environment: t,
                        collectionContextStore: i.collectionContextStore,
                        bulkAction: {
                            type: "editProperty",
                            propertyId: i.property,
                            value: r
                        }
                    });
                    return
                }
                let a = i.store.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "BlockPropertyValueOverlay.handleSelectPropertyMenuUpdate",
                    environment: t,
                    cellTarget: {
                        spaceWithId: a
                    },
                    canUndo: !0,
                    perform: n => {
                        if (o(627179).pN(e.schemaOperations) || function(e) {
                                let {
                                    operations: t,
                                    transaction: r,
                                    store: n,
                                    environment: i
                                } = e, a = n.state;
                                if (a.isOpen && a.isOpen) {
                                    let e = (0, o(151086).K6)(a);
                                    if (e) {
                                        let n = e.getSchema();
                                        for (let o of t)(0, Q().y4)({
                                            store: (0, l().v3)(e, o.pointer),
                                            operation: o,
                                            transaction: r
                                        });
                                        let a = e.getSchema();
                                        (0, o(352169).H)({
                                            environment: i,
                                            collectionStore: e,
                                            oldSchema: n,
                                            newSchema: a,
                                            transaction: r
                                        })
                                    }
                                }
                            }({
                                operations: e.schemaOperations,
                                transaction: n,
                                store: r,
                                environment: t
                            }), "selectPropertyMenuUpdateReplaceOptions" === e.type) {
                            let o = s().rK(e.options);
                            for (let e of ty(i)) $().R9({
                                environment: t,
                                store: e,
                                value: o,
                                transaction: n
                            });
                            tw(i, t, r)
                        } else if ("selectPropertyMenuUpdateAddOptions" === e.type) {
                            for (let t of ty(i))
                                for (let o of e.addOptions)(0, Q().y4)({
                                    transaction: n,
                                    store: t,
                                    operation: {
                                        path: t.path,
                                        pointer: t.pointer,
                                        command: "addSelectOptionAfter",
                                        args: {
                                            option: o
                                        }
                                    }
                                });
                            tw(i, t, r)
                        } else if ("selectPropertyMenuUpdateRemoveOption" === e.type) {
                            for (let t of ty(i))(0, Q().y4)({
                                transaction: n,
                                store: t,
                                operation: {
                                    path: t.path,
                                    pointer: t.pointer,
                                    command: "removeSelectOption",
                                    args: {
                                        option: e.removeOption
                                    }
                                }
                            });
                            tw(i, t, r)
                        } else "selectPropertyMenuUpdateSchema" === e.type || (0, o(722371).HB)(e)
                    }
                })
            }
            async function tP({
                update: e,
                environment: t,
                blockStore: r,
                property: l,
                propertySchema: i,
                inMemoryRecordCache: a,
                editStores: s,
                collectionContextStore: d,
                surface: y,
                coerceToViewOptions: m
            }) {
                var h;
                if (!i || "relation" !== i.type) return;
                let v = "relation" === i.type && (0, o(114588).z)(i),
                    S = v && new(o(356912)).m(t, {
                        table: p().VlP,
                        id: v
                    });
                if (!v || !S) return;
                await S.load();
                let b = o(218744).default.checkGate({
                        gateName: "edge_relations"
                    }),
                    x = b ? (0, o(935389).b)({
                        store: r,
                        property: l
                    }) : void 0,
                    k = r.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "BlockPropertyValueOverlay.handleRelationPropertyMenuUpdate",
                    environment: t,
                    cellTarget: {
                        spaceWithId: k
                    },
                    canUndo: !0,
                    perform: h => {
                        if (e.newPage) {
                            let r = f().x9d(e.newPage.name),
                                l = S.getRootPagePointer() ? ? S.pointer,
                                n = o(124937).Wv({
                                    environment: t,
                                    id: e.newPage.id,
                                    type: o(955630).xd.page,
                                    properties: {
                                        title: r
                                    },
                                    spaceId: e.newPage.spaceId,
                                    inMemoryRecordCache: a,
                                    transaction: h
                                });
                            if (l.table === p().evP) {
                                let e = new(o(970831)).B(t, l);
                                o(579695).NI({
                                    parentStore: e,
                                    childStore: n,
                                    transaction: h
                                })
                            } else l.table === p().VlP ? o(579695).X$({
                                parentStore: S,
                                childStore: n,
                                transaction: h
                            }) : (0, o(722371).HB)(l);
                            let i = S.getDefaultTemplatePageStore();
                            i && o(845422).TB({
                                title: {
                                    text: r
                                },
                                environment: t,
                                store: o(970831).B.createChildStore(S, n.pointer),
                                templateStore: i,
                                isKeyboard: !1,
                                isCreateIn: !1,
                                transaction: h,
                                from: "relation_property_menu_update"
                            }), (0, o(979052).k)({
                                environment: t,
                                collectionStore: S,
                                blockIds: [n.id],
                                action: "relation"
                            })
                        }
                        let v = e.newValues,
                            k = e.oldValues,
                            C = (0, o(219083).i)(k.map(c().jV), v.map(c().jV)),
                            w = o(381453).oE(Array.from(C.removeOps).map(e => {
                                if (!v.find(t => (0, c().jV)(t) === e)) return k.find(t => (0, c().jV)(t) === e)
                            })),
                            A = [],
                            _ = t.idCreator.getSpaceIdCreatorSync(r.getSpaceId());
                        for (let e in C.beforeOps) {
                            let o, l = v.find(t => (0, c().jV)(t) === e);
                            if (!l) continue;
                            if (b && x) {
                                let {
                                    forwardId: e
                                } = (0, u().h5)({
                                    edgeType: x,
                                    sourceId: r.id,
                                    targetId: l.id,
                                    spaceIdCreator: _
                                });
                                o = new(n()).n(t, {
                                    table: p().ITT,
                                    id: e,
                                    spaceId: r.getSpaceId()
                                })
                            }
                            let i = C.beforeOps[e];
                            if (!i) {
                                A.push({
                                    relationToAdd: l,
                                    edgeStore: o
                                });
                                continue
                            }
                            let a = v.find(e => (0, c().jV)(e) === i);
                            A.push({
                                relationToAdd: l,
                                before: a,
                                edgeStore: o
                            })
                        }
                        for (let e of s) {
                            for (let o of w) g().zB({
                                environment: t,
                                store: e,
                                propertyId: l,
                                id: o.id,
                                transaction: h,
                                edgeType: x
                            });
                            for (let o of A) o.before ? g().K6({
                                environment: t,
                                store: e,
                                propertyId: l,
                                id: o.relationToAdd.id,
                                position: {
                                    type: "before",
                                    before: o.before.id
                                },
                                transaction: h,
                                edgeType: x
                            }) : g().K6({
                                environment: t,
                                store: e,
                                propertyId: l,
                                id: o.relationToAdd.id,
                                position: {
                                    type: "after"
                                },
                                transaction: h,
                                edgeType: x
                            })
                        }
                        if (m) {
                            let {
                                groupFormat: l,
                                intl: n,
                                onAddOrLink: i
                            } = m;
                            if (!d) return;
                            let a = d.collectionStore();
                            if (!a) return;
                            let s = function(e) {
                                if (e.newPage) return {
                                    table: p().evP,
                                    id: e.newPage.id,
                                    spaceId: e.newPage.spaceId
                                };
                                let t = new Set(e.oldValues.map(e => e.id));
                                return e.newValues.find(e => !t.has(e.id))
                            }(e);
                            if (!s) return;
                            let c = o(970831).B.createChildStore(a, s);
                            if (!c) return;
                            let u = c.getModel();
                            if (!u) return;
                            let f = (0, o(443015).A)(d, !1);
                            (0, o(138798).Y1)(c.getRole() ? ? "none", "comment_only") && function(e) {
                                var t;
                                if (!e) return !1;
                                let r = Array.from((0, o(400473).W9)(e));
                                if (1 !== r.length) return !1;
                                let l = null == (t = r[0]) ? void 0 : t.filter;
                                if (!l || !(0, o(400473).Pq)(l) || "relation_contains" !== l.operator) return !1;
                                let n = (0, o(400473).Rh)(l);
                                if (1 !== n.length) return !1;
                                let i = n[0];
                                return (null == i ? void 0 : i.type) === "relative" && "current_page_in_related_collection" === i.value.type
                            }(f) && (f = void 0);
                            let {
                                update: y
                            } = o(21312).H3({
                                block: u,
                                schema: a.getSchema(),
                                propertyMapping: a.getPropertyMapping(),
                                userFilterContext: {
                                    userId: t.currentUser.id,
                                    userTimeZone: (0, o(714350).P)(),
                                    userStartOfWeek: o(97892).X.state
                                },
                                filter: f,
                                groupBy: d.getGroupByAndGroupFormats().groupBy,
                                groupsPointer: l ? [l] : [],
                                relativeVariableResult: d.relativeVariableStore.state,
                                currentPageInRelatedCollection: r.id,
                                getRecordModel: a.getRecordModel,
                                intl: n,
                                resultCache: new Map,
                                regExpCache: new Map,
                                formatDateCache: new Map,
                                experimentService: o(218744).default,
                                spaceIdCreator: t.idCreator.getSpaceIdCreatorSync(a.getSpaceId()),
                                getRelationEdgeList: (0, o(323082).Y)({
                                    environment: t,
                                    spaceId: a.getSpaceId()
                                }),
                                sourceCollectionId: a.id
                            });
                            o(249487).C({
                                environment: t,
                                store: c,
                                properties: y,
                                transaction: h
                            }), i && i(h, r, y)
                        }
                        tA({
                            environment: t,
                            blockStore: r,
                            collectionContextStore: d,
                            propertyId: l,
                            propertySchema: i,
                            surface: y,
                            isOpenFromBulkActionsToolbar: !1
                        })
                    }
                });
                let C = null == d || null == (h = d.collectionStore()) ? void 0 : h.pointer;
                S && C && (0, o(795e3).n)(i) && o(714416).id({
                    sourcePropertySchema: i,
                    sourcePropertyId: l,
                    sourceCollectionPointer: C,
                    relatedCollectionStore: S,
                    newRelationValues: e.newValues,
                    oldRelationValues: e.oldValues,
                    environment: t
                })
            }

            function tM(e, t, r, l) {
                let n;
                n = o(680007).default.mark("collections.property_overlay_typing_lag"), o(680007).default.measureAfterNextFlush(n, {
                    getData: () => ({ ...o(752242).kz(e.collectionContextStore),
                        property_type: t,
                        from: o(793550).zP(e.surface)
                    })
                });
                let {
                    store: i,
                    property: a,
                    additionalStores: s
                } = e, c = i.getPropertyStore(a).getValue(), d = i.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "BlockPropertyValueOverlay.handleTextChange",
                    environment: r,
                    cellTarget: {
                        spaceWithId: d
                    },
                    canUndo: !0,
                    perform: e => {
                        for (let t of s) $().R9({
                            environment: r,
                            store: t.getPropertyStore(a),
                            value: c,
                            transaction: e
                        })
                    }
                }), tw(e, r, l)
            }
        },
        487998: (e, t, o) => {
            async function r(e) {
                let t, r, {
                        environment: n,
                        isOnboarding: i,
                        invite: a,
                        spaceStore: s,
                        inviteTargets: c,
                        membershipType: d
                    } = e,
                    u = s.id,
                    p = await (0, o(975162).lX)(c, 10, async e => "newUser" === e.type ? {
                        type: "user",
                        membershipType: d,
                        userId: await (0, o(378880).J)(n, e),
                        inviteId: void 0
                    } : "existingUser" === e.type ? {
                        type: "user",
                        membershipType: d,
                        userId: e.value.id,
                        inviteId: void 0
                    } : (0, o(722371).HB)(e));
                try {
                    await (0, o(400308).$)({
                        environment: n,
                        spaceStore: s,
                        userIds: p.map(e => e.userId),
                        invite: a,
                        membershipType: d
                    }), t = !0
                } catch (e) {
                    t = !1, r = (0, o(161179).A)(e)
                }
                if (c.filter(e => "existingUser" === e.type || "newUser" === e.type).length > 0) {
                    var f, y;
                    let e = p.map(e => (0, o(283161).z)(e)),
                        l = e[0].role ? ? "editor";
                    t ? o(179701).Jg(n, {
                        role: l,
                        is_space: !0,
                        invite_targets: c,
                        is_onboarding: i,
                        invite_origin: a.inviteOrigin,
                        permission_items: e,
                        invite_message_length: (null == (f = a.inviteMessage) ? void 0 : f.length) ? ? 0,
                        invite_flow_id: a.inviteFlowId,
                        isProfessionalTeamUser: (0, o(904434).YD)(),
                        domainType: (0, o(904434).FX)(),
                        share_menu_session_id: o(880853).Ay.state.sessionId,
                        collection_id: void 0,
                        parent_collection_id: void 0
                    }) : o(179701).J8({
                        error: r,
                        role: l,
                        is_space: !0,
                        invite_targets: c,
                        is_onboarding: i,
                        invite_origin: a.inviteOrigin,
                        permission_items: e,
                        invite_message_length: (null == (y = a.inviteMessage) ? void 0 : y.length) ? ? 0,
                        invite_flow_id: a.inviteFlowId,
                        isProfessionalTeamUser: (0, o(904434).YD)(),
                        domainType: (0, o(904434).FX)(),
                        share_menu_session_id: o(880853).Ay.state.sessionId,
                        collection_id: void 0,
                        parent_collection_id: void 0
                    })
                }
                i || await o(371151).nO({
                    environment: n,
                    spaceStore: {
                        id: u
                    }
                });
                let g = (0, o(381453).Cr)((0, o(381453).oE)(c.map(e => {
                    if ("newUser" !== e.type && "existingUser" !== e.type) return;
                    let t = e.value;
                    if (null != t && t.email && null != t && t.id) return [t.email, t.id]
                })));
                return t && await l({
                    environment: n,
                    spaceStore: s
                }), {
                    success: t,
                    error: r,
                    invitedUsers: g,
                    requestedUsers: {}
                }
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceStore: r
                } = e;
                if (!r) return;
                let l = (0, o(616579).j)({
                        environment: t,
                        spaceId: r.id
                    }) ? ? 0,
                    n = r.getSettings().seen_expansion_offer ? ? !1;
                l > 1 && n && !(0, o(521469).fd)(null == r ? void 0 : r.getModel(), "expansion_offer") && await (0, o(832799).Ni)(t, "expansion_offer")
            }
            o.d(t, {
                F: () => r
            }), o(898992), o(354520), o(581454)
        },
        557620: (e, t, o) => {
            o.d(t, {
                A: () => r
            }), o(581454);

            function r(e) {
                let t = (0, o(533992).v3)();
                return (0, o(682985).K8)(() => {
                    var r;
                    let l = null == e ? void 0 : e.id;
                    if (l) return null == (r = o(428456).A.getData(t, {
                        spaceId: l
                    })) ? void 0 : r.map(e => e.domain)
                }, [t, e])
            }
        },
        575007: (e, t, o) => {
            let r;
            o.d(t, {
                i8: () => y,
                VW: () => g,
                fr: () => v,
                Ox: () => m,
                LI: () => h
            });
            var l = o.n(o(794148));
            async function n(e, t, r) {
                try {
                    let o = await t.api.callApi({
                        eventName: "getLocationSuggestions",
                        environment: t,
                        data: {
                            text: e,
                            biasPosition: r
                        }
                    });
                    if (!o || "success" !== o.type) return [];
                    return o.data.suggestions.filter(e => e.placeId).map(e => (l()(e.placeId), {
                        type: "aws",
                        title: e.title || "",
                        address: e.address || "",
                        awsPlaceId: e.placeId
                    }))
                } catch (e) {
                    return o(773352).log({
                        level: "error",
                        from: "AwsLocationService",
                        type: "getAwsLocationSuggestions",
                        error: (0, o(416607).convertErrorToLog)(e)
                    }), []
                }
            }
            async function i(e, t) {
                try {
                    let o = await t.api.callApi({
                        eventName: "getPlace",
                        environment: t,
                        data: {
                            placeId: e
                        }
                    });
                    if (!o || "success" !== o.type || !o.data.place) return;
                    return o.data.place
                } catch (e) {
                    o(773352).log({
                        level: "error",
                        from: "AwsLocationService",
                        type: "getAwsPlace",
                        error: (0, o(416607).convertErrorToLog)(e)
                    });
                    return
                }
            }
            async function a(e, t) {
                let {
                    latitude: r,
                    longitude: l
                } = e;
                try {
                    let e = await t.api.callApi({
                        eventName: "getLocationWithReverseGeocoding",
                        environment: t,
                        data: {
                            latitude: r,
                            longitude: l
                        }
                    });
                    if (!e || "success" !== e.type || !e.data.place) return {
                        lat: r,
                        lon: l
                    };
                    return e.data.place
                } catch (e) {
                    return o(773352).log({
                        level: "error",
                        from: "AwsLocationService",
                        type: "getAwsLocationWithReverseGeocoding",
                        error: (0, o(416607).convertErrorToLog)(e)
                    }), {
                        lat: r,
                        lon: l
                    }
                }
            }
            o(898992), o(354520), o(581454), o(16280);
            let s = new(o(754869)).aH({
                apiKey: o(986939).A.google.mapsApiKey,
                version: "weekly"
            });
            async function c() {
                let e = await s.importLibrary("places");
                return r || (r = new e.AutocompleteSessionToken), e
            }
            async function d() {
                return await s.importLibrary("geocoding")
            }
            async function u(e, t) {
                let o = {
                        input: e,
                        sessionToken: r,
                        locationBias: t ? {
                            lat: t.latitude,
                            lng: t.longitude
                        } : void 0
                    },
                    l = await c(),
                    {
                        suggestions: n
                    } = await l.AutocompleteSuggestion.fetchAutocompleteSuggestions(o);
                return n.filter(e => {
                    var t;
                    return null == (t = e.placePrediction) ? void 0 : t.placeId
                }).map(e => {
                    var t, o, r;
                    let l = null == (t = e.placePrediction) ? void 0 : t.placeId;
                    if (!l) throw Error("Place ID unexpectedly missing after filter");
                    return {
                        type: "google",
                        title: (null == (o = e.placePrediction) || null == (o = o.text) ? void 0 : o.toString()) || "",
                        address: (null == (r = e.placePrediction) || null == (r = r.text) ? void 0 : r.toString()) || "",
                        googlePlaceId: l
                    }
                })
            }
            async function p(e) {
                try {
                    var t, r;
                    let o = new(await c()).Place({
                        id: e
                    });
                    return await o.fetchFields({
                        fields: ["location", "displayName", "formattedAddress", "id"]
                    }), {
                        lat: (null == (t = o.location) ? void 0 : t.lat()) ? ? 0,
                        lon: (null == (r = o.location) ? void 0 : r.lng()) ? ? 0,
                        name: o.displayName || void 0,
                        address: o.formattedAddress || void 0,
                        googlePlaceId: o.id
                    }
                } catch (e) {
                    o(773352).log({
                        level: "error",
                        from: "GoogleLocationService",
                        type: "getGooglePlace",
                        error: (0, o(416607).convertErrorToLog)(e)
                    });
                    return
                }
            }
            async function f(e) {
                var t, r, l;
                let n, {
                        latitude: i,
                        longitude: a
                    } = e,
                    s = new(await d()).Geocoder;
                try {
                    n = null == (l = (await s.geocode({
                        location: {
                            lat: i,
                            lng: a
                        }
                    })).results) ? void 0 : l[0]
                } catch (e) {
                    o(773352).log({
                        level: "error",
                        from: "GoogleLocationService",
                        type: "getGoogleLocationWithReverseGeocoding",
                        error: (0, o(416607).convertErrorToLog)(e)
                    })
                }
                return {
                    lat: i,
                    lon: a,
                    address: null == (t = n) ? void 0 : t.formatted_address,
                    googlePlaceId: null == (r = n) ? void 0 : r.place_id
                }
            }

            function y(e) {
                let t = o(381453).oE([e.name, e.address]);
                return `https://www.google.com/maps/search/?api=1&query=${t.map(e=>encodeURIComponent(e)).join(",")}`
            }
            async function g({
                query: e,
                service: t,
                environment: r,
                biasPosition: l
            }) {
                switch (t) {
                    case "google":
                        return u(e, l);
                    case "aws":
                        return n(e, r, l);
                    default:
                        (0, o(722371).HB)(t)
                }
            }
            async function m(e, t, r) {
                l()(e.type === t, `Suggestion type "${e.type}" doesn't match provided service "${t}"`);
                let n = e.type;
                switch (n) {
                    case "google":
                        return p(e.googlePlaceId);
                    case "aws":
                        return i(e.awsPlaceId, r);
                    default:
                        (0, o(722371).HB)(n)
                }
            }

            function h(e) {
                let t = e.type;
                switch (t) {
                    case "google":
                        return e.googlePlaceId;
                    case "aws":
                        return e.awsPlaceId;
                    default:
                        (0, o(722371).HB)(t)
                }
            }
            async function v(e, t, r) {
                switch (t) {
                    case "google":
                        return f(e);
                    case "aws":
                        return a(e, r);
                    default:
                        (0, o(722371).HB)(t)
                }
            }
        },
        657962: (e, t, o) => {
            o.d(t, {
                S: () => r
            }), o(16280);

            function r() {
                let e = (0, o(604306).r)("location_search_service_rollout", {
                    disableExposureLogging: !1,
                    enableEventTrailLogging: !1
                });
                switch (o(773352).log({
                    from: "useLocationServiceType",
                    level: "debug",
                    type: "location_search_service_rollout",
                    data: {
                        miscDataToConvertToString: {
                            experimentValue: e
                        }
                    }
                }), e) {
                    case "control":
                        return "aws";
                    case "google":
                        return "google";
                    default:
                        throw Error(`Unsupported location service: ${e}`)
                }
            }
        },
        674333: (e, t, o) => {
            o.d(t, {
                Q: () => l
            });
            let r = (0, o(109939).YK)({
                processingRequest: {
                    id: "AgentWorkflowStatus.processingRequest",
                    defaultMessage: "Processing…"
                },
                workflowPaused: {
                    id: "AgentWorkflowStatus.workflowPaused",
                    defaultMessage: "Workflow paused"
                },
                workflowSkipped: {
                    id: "AgentWorkflowStatus.workflowSkipped",
                    defaultMessage: "Workflow was skipped"
                },
                insufficientPermissions: {
                    id: "AgentWorkflowStatus.workflowInsufficientPermissions",
                    defaultMessage: "Workflow was blocked: insufficient permissions"
                }
            });

            function l(e, t) {
                let l = (0, o(109939).tz)(),
                    n = (0, o(682985).K8)(() => {
                        var o;
                        let r = e.getFormatStore();
                        return null == r || null == (o = r.getKeyStore("agent_workflow_status").getValue()) ? void 0 : o[t]
                    }, [e, t], {
                        equalityFn: o(381453).n4
                    }),
                    i = (0, o(682985).K8)(() => {
                        if ((null == n ? void 0 : n.type) === "workflowRunCreated") {
                            let t = e.getSpaceId();
                            if (t) return o(849697).t.createChildStore(e, {
                                table: o(832375).QRx,
                                id: n.runPointer.id,
                                spaceId: t
                            })
                        }
                    }, [n, e]),
                    a = (0, o(682985).K8)(() => {
                        if (i) return i.getStatus()
                    }, [i]),
                    s = (0, o(682985).K8)(() => {
                        if (i) return i.getData()
                    }, [i]),
                    c = (0, o(682985).K8)(() => {
                        if (i) return i.getDequeueAfter()
                    }, [i]);
                return {
                    status: (0, o(682985).K8)(() => {
                        var e, t, d, u, p;
                        if (!n) return {
                            type: "idle"
                        };
                        if ("creatingTask" === n.type) return n.createdAtMs < Date.now() - 5 * o(695216).Xb ? {
                            type: "idle"
                        } : {
                            type: "creatingTask"
                        };
                        if ("processingInitiated" === n.type) return n.enqueuedAtMs < Date.now() - 2 * o(695216).pT ? {
                            type: "idle"
                        } : {
                            type: "queued",
                            enqueuedAtMs: n.enqueuedAtMs
                        };
                        if ("workflowRunCreated" === n.type) {
                            if (!a) return {
                                type: "idle"
                            };
                            switch (a) {
                                case "pending":
                                    if (c && c > Date.now()) return {
                                        type: "waiting"
                                    };
                                    return {
                                        type: "starting"
                                    };
                                case "running":
                                case "retryableFailure":
                                    return {
                                        type: "processing",
                                        message: {
                                            descriptor: r.processingRequest
                                        }
                                    };
                                case "paused":
                                    return {
                                        type: "paused",
                                        reason: null == s ? void 0 : s.paused_reason,
                                        message: null != s && s.paused_reason ? (0, o(604384).R6)(s.paused_reason, l) : {
                                            descriptor: r.workflowPaused
                                        }
                                    };
                                case "success":
                                case "cancelled":
                                    return {
                                        type: "completed"
                                    };
                                case "failure":
                                    {
                                        let e = (null == s || null == (d = s.error) ? void 0 : d.errorType) === "missingSelectOptions";
                                        return {
                                            type: "failed",
                                            error: (null == s || null == (u = s.error) ? void 0 : u.message) ? ? void 0,
                                            isDismissed: !!(null == i || null == (p = i.getUserActionsStore().getValue()) ? void 0 : p.failureNotificationDismissedTime),
                                            ...e && {
                                                failureReason: "missingSelectOptions"
                                            }
                                        }
                                    }
                                case "skipped":
                                    return {
                                        type: "failed",
                                        error: {
                                            descriptor: r.workflowSkipped
                                        },
                                        isDismissed: !!(null == i || null == (e = i.getUserActionsStore().getValue()) ? void 0 : e.failureNotificationDismissedTime)
                                    };
                                case "insufficientPermissions":
                                    return {
                                        type: "failed",
                                        error: {
                                            descriptor: r.insufficientPermissions
                                        },
                                        isDismissed: !!(null == i || null == (t = i.getUserActionsStore().getValue()) ? void 0 : t.failureNotificationDismissedTime)
                                    };
                                default:
                                    return (0, o(722371).HB)(a)
                            }
                        }
                        return (0, o(722371).HB)(n)
                    }, [i, n, a, s, c, l]),
                    runStore: i
                }
            }
        },
        750739: (e, t, o) => {
            o.d(t, {
                Li: () => h,
                Tb: () => v,
                iD: () => m,
                yA: () => C,
                V6: () => s,
                _n: () => p,
                Yk: () => S,
                rD: () => y,
                w_: () => A,
                xX: () => u,
                wh: () => I,
                dr: () => j,
                Gx: () => _,
                q4: () => M,
                MX: () => P,
                fs: () => w,
                VT: () => d,
                fA: () => f,
                LX: () => x,
                l: () => k,
                L: () => g,
                kb: () => c,
                Sh: () => b,
                cm: () => a
            });
            var r = o(296540),
                l = o(474848);

            function n(e) {
                let {
                    store: t
                } = e, n = (0, o(682985).K8)(() => o(882251).F.state.open, []), a = (0, r.useCallback)(() => {
                    o(882251).F.setState({
                        open: !1
                    })
                }, []);
                return o(986939).A.isMobile ? (0, l.jsx)(o(182718).zD, {
                    popupType: o(182718).nl.BottomSheet,
                    bottomSheetInitialState: "half",
                    trapFocus: !0,
                    open: n,
                    content: () => (0, l.jsx)(i, {
                        store: t,
                        onClose: a
                    }),
                    onDismiss: a
                }) : null
            }

            function i(e) {
                let {
                    store: t,
                    onClose: r
                } = e, n = (0, o(533992).v3)(), i = (0, o(682985).K8)(() => {
                    let e = (0, o(399348).f)(t, {
                        includeTeamHomeFeed: !1,
                        includeDataSources: !0
                    });
                    return e.reverse(), e
                }, [t]), a = {
                    menuType: o(649476).gu.Modal,
                    title: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Breadcrumb",
                        id: "breadcrumb.mobileBreadcrumbMenu.title"
                    })
                };
                return (0, l.jsx)(o(747369).A, { ...a,
                    children: (0, l.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        onAccept: r,
                        initialFocus: void 0,
                        sections: (0, o(874218).Y)({
                            environment: n,
                            stores: i,
                            onPageClick: e => {
                                let t = void 0 !== e.collectionId;
                                (0, o(104310).u)({
                                    event: {
                                        eventName: "topbar_breadcrumb_page_click",
                                        eventProperties: {
                                            page_id: e.pageId,
                                            is_data_source: t
                                        }
                                    }
                                })
                            },
                            showVerifiedPageBadge: !0
                        })
                    })
                })
            }
            let a = new(o(815048)).O2("menus", async () => {
                    let [{
                        default: e
                    }, {
                        TopbarPageAnalyticsOptOutMenu: t
                    }, {
                        default: r
                    }, {
                        default: l
                    }, {
                        default: i
                    }, {
                        default: a
                    }, {
                        default: s
                    }, {
                        default: c
                    }, {
                        default: d
                    }, {
                        DatePropertyMenu: u
                    }, {
                        ReportPageModal: p
                    }, {
                        SidebarTeamModal: f
                    }, {
                        SidebarCreateTeamModal: y
                    }, {
                        CreateTeamFromPageConfirmModal: g
                    }, {
                        CollectionTypedDatabaseMigrationModal: m
                    }, {
                        default: h
                    }, {
                        default: v
                    }, {
                        CollectionMentionContextMenu: S
                    }, {
                        default: b
                    }, {
                        MobilePageBacklinksMenuRenderer: x
                    }, {
                        MobileShareMenuRenderer: k
                    }, {
                        MobilePageUpdatesMenuRenderer: C
                    }, {
                        MobileCommentsModalRenderer: w
                    }] = await Promise.all([Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 299100)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 932657)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 115006)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 783170)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 585832)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 469118)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 32400)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 329225)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 212600)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 780328)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 813577)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 5702)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 277318)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 945713)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 861610)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 633594)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 577486)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 362370)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 546388)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 109593)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 542583)), Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(96527), o.e(30085), o.e(90109), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(21969), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(79349), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(2276), o.e(30532), o.e(73588), o.e(3723), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(47302), o.e(91636), o.e(36441), o.e(64049), o.e(75189), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(75234), o.e(67281), o.e(66200), o.e(52064), o.e(69626), o.e(82816), o.e(2832), o.e(48095), o.e(67098), o.e(35118), o.e(63611), o.e(94849), o.e(75484), o.e(98821), o.e(97711), o.e(89076), o.e(86998), o.e(58889), o.e(22920), o.e(9914), o.e(78257), o.e(84382), o.e(51386), o.e(95150), o.e(10471), o.e(87087), o.e(98419), o.e(11719), o.e(13592), o.e(6743), o.e(5234), o.e(85376), o.e(67252), o.e(42709), o.e(44903), o.e(92181), o.e(7251), o.e(72143), o.e(67612), o.e(53478), o.e(75559), o.e(86793), o.e(34), o.e(54253), o.e(26665), o.e(67984), o.e(605), o.e(75681)]).then(o.bind(o, 167062)), Promise.all([o.e(55373), o.e(36192), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(53050), o.e(87353), o.e(64696), o.e(26997), o.e(21969), o.e(47414), o.e(87539), o.e(58889), o.e(21294), o.e(31914), o.e(332), o.e(18331)]).then(o.bind(o, 130782))]);
                    return {
                        CustomizePageMenuRenderer: e,
                        TopbarPageAnalyticsOptOutMenu: t,
                        ImportModal: r,
                        ExportModal: l,
                        PageTemplateModal: i,
                        GoogleAuthPromptModal: a,
                        StudentNotEligibleModal: s,
                        CookieModal: c,
                        ForkPagePopup: d,
                        DatePropertyMenu: u,
                        ReportPageModal: p,
                        SidebarCreateTeamModal: y,
                        SidebarTeamModal: f,
                        CreateTeamFromPageConfirmModal: g,
                        CollectionTypedDatabaseMigrationModal: m,
                        OpenInDesktopAppPopup: h,
                        BlockMenu: v,
                        CollectionMentionContextMenu: S,
                        ImportIntoNewPageModal: b,
                        MobilePageBacklinksMenuRenderer: x,
                        MobileShareMenuRenderer: k,
                        MobilePageUpdatesMenuRenderer: C,
                        MobileCommentsModalRenderer: w,
                        MobileBreadcrumbMenuRenderer: n
                    }
                }),
                s = (0, o(815048)._h)(a, e => e.CustomizePageMenuRenderer),
                c = (0, o(815048)._h)(a, e => e.TopbarPageAnalyticsOptOutMenu),
                d = (0, o(815048)._h)(a, e => e.PageTemplateModal),
                u = (0, o(815048)._h)(a, e => e.ImportModal),
                p = (0, o(815048)._h)(a, e => e.ExportModal),
                f = (0, o(815048)._h)(a, e => e.ReportPageModal),
                y = (0, o(815048)._h)(a, e => e.GoogleAuthPromptModal),
                g = (0, o(815048)._h)(a, e => e.StudentNotEligibleModal),
                m = (0, o(815048)._h)(a, e => e.CookieModal),
                h = (0, o(815048)._h)(a, e => e.BlockMenu),
                v = (0, o(815048)._h)(a, e => e.CollectionMentionContextMenu),
                S = (0, o(815048)._h)(a, e => e.ForkPagePopup),
                b = (0, o(815048)._h)(a, e => e.CollectionTypedDatabaseMigrationModal),
                x = (0, o(815048)._h)(a, e => e.SidebarCreateTeamModal),
                k = (0, o(815048)._h)(a, e => e.SidebarTeamModal),
                C = (0, o(815048)._h)(a, e => e.CreateTeamFromPageConfirmModal),
                w = (0, o(815048)._h)(a, e => e.OpenInDesktopAppPopup),
                A = (0, o(815048)._h)(a, e => e.ImportIntoNewPageModal),
                _ = (0, o(815048)._h)(a, e => e.MobilePageBacklinksMenuRenderer),
                P = (0, o(815048)._h)(a, e => e.MobileShareMenuRenderer),
                M = (0, o(815048)._h)(a, e => e.MobilePageUpdatesMenuRenderer),
                j = (0, o(815048)._h)(a, e => e.MobileCommentsModalRenderer),
                I = (0, o(815048)._h)(a, e => e.MobileBreadcrumbMenuRenderer)
        },
        773225: (e, t, o) => {
            o.d(t, {
                H: () => r
            });
            let r = (0, o(104509).xh)("infoCircle", {
                default: {
                    loader: () => o.e(7457).then(o.bind(o, 61107))
                },
                small: {
                    loader: () => o.e(7457).then(o.bind(o, 372181))
                },
                fill: {
                    loader: () => o.e(7457).then(o.bind(o, 923007))
                },
                fillSmall: {
                    loader: () => o.e(7457).then(o.bind(o, 827670))
                }
            }, ["info", "circle", "information", "help", "details"])
        },
        874003: (e, t, o) => {
            o.d(t, {
                A: () => n
            });
            var r = () => o(546605);
            class l extends r().Store {
                getInitialState() {
                    return {
                        changePermissionsEnabled: !1,
                        privatePageStore: void 0,
                        privateWorkflowStore: void 0,
                        loading: !1,
                        error: void 0
                    }
                }
                shouldSaveTransactionWithSudoMode(e) {
                    let t = e === this.state.privatePageStore || e === this.state.privateWorkflowStore,
                        o = this.doesUserAlreadyHaveEditorAccess(e.pointer);
                    return t && this.state.changePermissionsEnabled && !o
                }
                shouldUserHaveAccessToPrivatePageBlock() {
                    var e, t;
                    let r = null == (e = (0, o(328765).S)()) ? void 0 : e.canAdmin(),
                        l = (null == (t = (0, o(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privatePageStore && r && l
                }
                shouldUserHaveAccessToPrivateWorkflow() {
                    var e, t;
                    let r = null == (e = (0, o(328765).S)()) ? void 0 : e.canAdmin(),
                        l = (null == (t = (0, o(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privateWorkflowStore && r && l
                }
                doesUserAlreadyHaveEditorAccess(e) {
                    let t = o(728372).AppStoreSidebarSpaceStore.state;
                    return !!t && (e.table === o(832375).evP ? o(970831).B.createChildStore(t, e) : "collection" === e.table ? o(356912).m.createChildStore(t, e) : o(360851).N.createChildStore(t, e)).canAdmin()
                }
            }
            let n = l
        },
        874218: (e, t, o) => {
            o.d(t, {
                Y: () => l
            }), o(581454), o(296540);
            var r = o(474848);

            function l(e) {
                let {
                    environment: t,
                    stores: l,
                    onPageClick: n,
                    showVerifiedPageBadge: i
                } = e;
                return [{
                    key: "results",
                    items: l.map((e, l) => ({
                        key: e.id,
                        render: t => (0, r.jsx)(o(103558).A, { ...t,
                            isSubpage: 0 !== l,
                            store: e,
                            hidePath: !0,
                            showTooltipOnOverflow: !0,
                            showVerifiedPageBadge: i
                        }),
                        action: ({
                            event: r
                        }) => {
                            let l = (0, o(7029).V)(r);
                            if (e instanceof o(970831).B) n && n({
                                pageId: e.id,
                                collectionId: void 0
                            }), (0, o(545586).navigateToBlock)({
                                environment: t,
                                store: e,
                                openInNew: l,
                                visitType: o(981324).ig.Link,
                                pageVisitSource: o(254656).y8.Breadcrumb
                            });
                            else if (e instanceof o(356912).m) {
                                let r = e.getParentCollectionViewBlockStore();
                                if (!r) return;
                                n && n({
                                    pageId: r.id,
                                    collectionId: e.id
                                });
                                let i = (0, o(901881).V5)({
                                    collectionViewBlockStore: r,
                                    collectionStore: e
                                });
                                (0, o(545586).navigateToBlock)({
                                    environment: t,
                                    store: r,
                                    collectionViewId: null == i ? void 0 : i.id,
                                    openInNew: l,
                                    visitType: o(981324).ig.Link,
                                    pageVisitSource: o(254656).y8.Breadcrumb
                                })
                            } else if (e instanceof o(360851).N) {
                                let r = (0, o(453573).Lm)({
                                    workflowId: e.id,
                                    params: {
                                        workflowViewType: "chat"
                                    }
                                });
                                (0, o(79266).navigate)({
                                    environment: t,
                                    url: r,
                                    openInNew: l
                                })
                            }
                        }
                    }))
                }]
            }
        },
        882251: (e, t, o) => {
            o.d(t, {
                F: () => r
            });
            let r = new(o(510969)).A
        },
        935341: (e, t, o) => {
            o.d(t, {
                j: () => r
            });

            function r(e) {
                let {
                    collectionContextStore: t,
                    environment: r,
                    fit: l
                } = e, n = t.collectionViewBlockStore();
                if (n) {
                    let e = o(496704).K.findCollectionViewBlockFromStore(n);
                    if (e) {
                        var i;
                        let t = null == (i = e.getNode()) ? void 0 : i.firstChild;
                        t instanceof HTMLElement && (0, o(564095).scrollIntoViewIfNeeded)({
                            blockAlignment: "start",
                            element: t,
                            environment: r,
                            behavior: "instant",
                            additionalPadding: {
                                top: "filtersBar" === l ? 64 : 128
                            },
                            verticalVisibilityRequirement: "topVisible",
                            horizontalVisibilityRequirement: "none"
                        })
                    }
                }
            }
        }
    }
]);