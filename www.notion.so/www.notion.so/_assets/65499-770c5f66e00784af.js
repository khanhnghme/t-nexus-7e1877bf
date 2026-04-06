"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [65499], {
        150025: (e, t, o) => {
            o.d(t, {
                F: () => n
            });

            function n(e, t) {
                (0, o(195857).DO_NOT_USE_trackLegacy)("relation_reorder", t)
            }
        },
        222896: (e, t, o) => {
            o.d(t, {
                A: () => r
            }), o(898992), o(672577);
            var n = () => o(375622);
            class i extends n().A {
                findRow(e, t, o) {
                    return this.find(n => n.relatedPageStoreId === e && n.rowType === t && n.property === o)
                }
            }
            let r = new i
        },
        254582: (e, t, o) => {
            o.d(t, {
                q: () => i
            });
            let n = new(o(815048)).O2("RelationMenuRow", async () => {
                    let {
                        RelationMenuRow: e
                    } = await Promise.all([o.e(75134), o.e(48860), o.e(18766)]).then(o.bind(o, 745208));
                    return {
                        RelationMenuRow: e
                    }
                }),
                i = (0, o(815048)._h)(n, e => e.RelationMenuRow)
        },
        265499: (e, t, o) => {
            o.d(t, {
                eH: () => q,
                ki: () => $,
                $s: () => U,
                eM: () => Y,
                F1: () => et,
                hF: () => z,
                bn: () => Z,
                qE: () => M,
                I5: () => Q,
                $$: () => J,
                Kr: () => D,
                DE: () => G,
                Dd: () => eo,
                Tn: () => P,
                jD: () => I
            }), o(944114), o(898992), o(354520), o(581454), o(737550);
            var n = o(296540);
            o(908872);
            var i = o(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 2.77 13.25 10.45",
                    svg: (0, i.jsx)("path", {
                        d: "M5.042 2.775c-.61 0-1.18.305-1.518.813L1.682 6.35c-.2.3-.307.652-.307 1.012V11.4c0 1.008.817 1.825 1.825 1.825h9.6a1.825 1.825 0 0 0 1.825-1.825V7.363c0-.36-.107-.712-.306-1.012l-1.843-2.763a1.83 1.83 0 0 0-1.518-.813zM4.564 4.28a.57.57 0 0 1 .478-.256h5.916c.192 0 .372.096.478.256l1.796 2.694H9.688a.625.625 0 0 0-.625.625v.38a1.063 1.063 0 0 1-2.125 0V7.6a.625.625 0 0 0-.625-.625H2.768zM8 10.293a2.313 2.313 0 0 0 2.3-2.068h3.075V11.4a.575.575 0 0 1-.575.575H3.2a.575.575 0 0 1-.575-.575V8.225H5.7A2.313 2.313 0 0 0 8 10.293"
                    })
                },
                l = (0, o(104509).wt)("inboxSmall", r, "small"),
                a = new(o(815048)).O2("RelationPropertyCustomizeLayoutMenu", async () => {
                    let {
                        default: e
                    } = await o.e(92222).then(o.bind(o, 60727));
                    return {
                        RelationPropertyCustomizeLayoutMenu: e
                    }
                }),
                s = (0, o(815048)._h)(a, e => e.RelationPropertyCustomizeLayoutMenu),
                d = {
                    width: "100%"
                },
                c = {
                    margin: void 0
                },
                u = {
                    position: "relative",
                    marginInlineStart: -4
                },
                p = {
                    paddingInlineStart: "none"
                };

            function m(e) {
                let t = (0, o(713311).Ks)(),
                    r = (0, o(682985).uB)(void 0, o(419110).$),
                    l = (0, o(682985).uB)(void 0, o(883751).A),
                    [a, s] = (0, n.useState)(10),
                    {
                        schema: m,
                        format: h,
                        locked: S,
                        property: v,
                        collectionStore: b,
                        store: I,
                        disabled: P,
                        visibility: R,
                        isInPeekRenderer: M,
                        topBorder: A,
                        pagePropertiesStore: T,
                        blockPropertyValueOverlayStore: _
                    } = e,
                    B = (0, o(533992).v3)(),
                    V = (0, o(682985).K8)(() => {
                        let e = m[v];
                        if (!e || "relation" !== e.type) return [];
                        let t = I.getPropertyValue(v);
                        return o(561872).bG({
                            relationValue: o(561872).n(t),
                            propertySchema: e,
                            getRecordModel: I.getRecordModel,
                            includeNoAccess: !0
                        })
                    }, [m, v, I], {
                        equalityFn: o(381453).n4
                    }),
                    E = V.length,
                    N = (0, n.useCallback)((e, t) => (function(e, t, n, i, r, l, a, s) {
                        let d = r[l];
                        if (!d || "relation" !== d.type) return;
                        let c = (0, o(390768).N)(d);
                        if (!c) return;
                        let u = o(356912).m.createChildStore(a, c);
                        if (!(0, o(966980)._p)(a) || !l) return;
                        let p = a.getPropertyValue(l),
                            m = o(561872).n(p);
                        C({
                            newValues: [...e.map(e => ({
                                id: e,
                                spaceId: i.pointer.spaceId,
                                table: o(832375).evP
                            })), ...m.slice(e.length)],
                            oldValues: m
                        }, u, a, l, n), (0, o(150025).F)(n, {
                            from: "relation_section"
                        }), o(163657).pl({
                            store: s,
                            focus: {
                                section: 0,
                                indexLocal: t.endPosition,
                                indexGlobal: t.endPosition,
                                footerFocused: !1
                            }
                        })
                    })(e, t, B, b, m, v, I, r), [B, b, m, v, I, r]),
                    F = (0, n.useCallback)((o, n, i) => j({
                        rowOffset: o,
                        mode: n,
                        originElement: i,
                        environment: B,
                        blockPropertyValueOverlayStore: e.blockPropertyValueOverlayStore,
                        store: I,
                        property: v,
                        collectionContextStore: t,
                        relationPropertyPageSectionRef: O
                    }), [t, B, v, e.blockPropertyValueOverlayStore, I]),
                    O = (0, n.useRef)(null),
                    H = m[v],
                    L = (0, o(682985).K8)(() => null == t ? void 0 : t.permissionScopesStore.state, [t]),
                    K = (0, o(682985).K8)(() => {
                        if ((null == H ? void 0 : H.type) === "relation" && t) return H
                    }, [t, H]),
                    W = (0, o(682985).K8)(() => {
                        if (!K) return;
                        let e = (0, o(390768).N)(K);
                        if (e) return o(356912).m.createChildStore(I, e)
                    }, [K, I]),
                    D = (0, o(682985).K8)(() => (0, o(862085).gN)({
                        collectionStore: W,
                        environment: B
                    }), [W, B]),
                    z = (0, o(682985).K8)(() => {
                        let e = b.getSchema()[v];
                        return !!(e && (0, o(425985).U)(e))
                    }, [b, v]),
                    U = (0, o(682985).K8)(() => I.canEdit(), [I]),
                    Y = (0, o(682985).K8)(() => (0, o(335818).fc)(I), [I]),
                    $ = (0, n.useMemo)(() => V.slice(0, a), [V, a]),
                    q = (0, o(682985).K8)(() => (null == W ? void 0 : W.getFormatStore().getKeyStore("app_config_uri").getValue()) === o(11448).av, [W]),
                    G = (null == K ? void 0 : K.limit) === 1,
                    Q = !(o(986939).A.isMobile || P || S || G),
                    J = (0, o(475717).l)(I),
                    X = (0, o(682985).K8)(() => {
                        var e;
                        return (null == J || null == (e = J.getFormat()) ? void 0 : e.property_icons_visibility) === "hide"
                    }, [J]),
                    Z = (0, n.useCallback)(() => {
                        W && K && j({
                            rowOffset: !1,
                            mode: void 0,
                            originElement: void 0,
                            environment: B,
                            blockPropertyValueOverlayStore: _,
                            store: I,
                            property: v,
                            collectionContextStore: t,
                            relationPropertyPageSectionRef: O
                        })
                    }, [B, _, I, v, t, O, W, K]),
                    ee = (0, o(682985).K8)(() => {
                        if (!W || !K || !b) return [];
                        let e = W.getFormatStore().getKeyStore("app_config_uri").getValue() === o(11448).av;
                        return $.reduce((n, l, d) => {
                            let c = o(970831).B.createChildStore(I, l),
                                u = c.getAssociatedCollectionStore(),
                                p = !c.canRead();
                            if ((null == u ? void 0 : u.id) === (0, o(114588).z)(K) || p) {
                                let l = c.canEdit(),
                                    u = {
                                        key: c.id,
                                        render: ({
                                            ref: n,
                                            ...u
                                        }) => {
                                            let g = l ? e => {
                                                p || o(374176).default.afterNextFlush(() => {
                                                    var e;
                                                    let t = c.getBlockTitleStore();
                                                    if (!t) return;
                                                    let n = t.getValue(),
                                                        i = n ? (null == (e = n[0]) || null == (e = e[0]) ? void 0 : e.length) ? ? 0 : 0;
                                                    (0, o(153896).$)({
                                                        environment: B,
                                                        multiSelection: {
                                                            start: {
                                                                index: i,
                                                                store: t
                                                            },
                                                            end: {
                                                                index: i,
                                                                store: t
                                                            }
                                                        },
                                                        forceEmit: !0,
                                                        focus: "end"
                                                    }), o(374176).default.afterNextFlush(() => {
                                                        let e = o(521595).n.findNodeFromStore(t);
                                                        null == e || e.focus({
                                                            preventScroll: !0
                                                        })
                                                    })
                                                })
                                            } : void 0;
                                            return (0, i.jsx)(o(254582).q, { ...u,
                                                canDrag: Q && 1 !== K.limit && U,
                                                schema: m,
                                                propertySchema: K,
                                                collectionStore: b,
                                                collectionId: b.id,
                                                targetCollectionStore: W,
                                                relatedPageStore: c,
                                                disabled: P,
                                                locked: S,
                                                isSelected: !0,
                                                pageStore: I,
                                                property: v,
                                                rowType: "section",
                                                onActionButtonClick: () => (function(e, t, n, i, r, l, a, s, d, c) {
                                                    var u;
                                                    let p = l[a];
                                                    if ((null == p ? void 0 : p.type) !== "relation" || !c || (0, o(335818).fc)(r)) return;
                                                    let m = p.limit ? [] : e.filter(e => e.id !== t.id),
                                                        g = r.getSpaceId();
                                                    (0, o(377796).createAndCommit)({
                                                        userAction: "RelationSection.handleRemoveRelationClick",
                                                        environment: i,
                                                        cellTarget: g ? {
                                                            spaceWithId: g
                                                        } : void 0,
                                                        canUndo: !0,
                                                        perform: e => {
                                                            (0, o(935389).I)({
                                                                store: r,
                                                                propertyId: a,
                                                                value: m,
                                                                environment: i,
                                                                relatedPageId: t.id,
                                                                propertySchema: p,
                                                                transaction: e,
                                                                collectionContextStore: c,
                                                                analyticsData: {
                                                                    isFromBulkActionsToolbar: o(793550).pi(s),
                                                                    analyticsFrom: o(793550).zP("page")
                                                                },
                                                                isUnthrottled: !1
                                                            })
                                                        }
                                                    }), u = {
                                                        from: "relation_section",
                                                        collection_id: null == d ? void 0 : d.id,
                                                        target_collection_id: null == n ? void 0 : n.id
                                                    }, (0, o(195857).DO_NOT_USE_trackLegacy)("relation_remove_block", u)
                                                })(V, c, W, B, I, m, v, _, b, t),
                                                onMouseLeave: () => r.unsetFocus(),
                                                onSecondaryButtonClick: () => w(d + 1, W, "relation_section_inline", B, I, v, b, a, s, t, K),
                                                onInsertInline: e ? () => {
                                                    (0, o(525779).clear)({
                                                        environment: B
                                                    })
                                                } : () => w(d + 1, W, "relation_section_inline", B, I, v, b, a, s, t, K),
                                                onTitleEsc: () => {
                                                    var e;
                                                    (null == (e = c.getTitleStore()) || null == (e = e.getValue()) ? void 0 : e.length) || "relation" !== K.type ? (0, o(525779).clear)({
                                                        environment: B
                                                    }) : function(e) {
                                                        let {
                                                            relatedPageStore: t,
                                                            environment: n,
                                                            store: i,
                                                            property: r
                                                        } = e;
                                                        if ((0, o(335818).fc)(i)) return;
                                                        let l = t.getSpaceId();
                                                        (0, o(377796).createAndCommit)({
                                                            userAction: "RelationSection.handleDeleteRelatedPage",
                                                            environment: n,
                                                            cellTarget: l ? {
                                                                spaceWithId: l
                                                            } : void 0,
                                                            canUndo: !0,
                                                            perform: e => {
                                                                let l = {
                                                                    pointer: t.pointer,
                                                                    command: "update",
                                                                    path: [],
                                                                    args: {
                                                                        alive: !1
                                                                    }
                                                                };
                                                                (0, o(421439).y4)({
                                                                    store: t,
                                                                    operation: l,
                                                                    transaction: e
                                                                });
                                                                let a = (0, o(935389).b)({
                                                                    store: i,
                                                                    property: r
                                                                });
                                                                o(356975).zB({
                                                                    environment: n,
                                                                    store: i,
                                                                    propertyId: r,
                                                                    id: t.id,
                                                                    transaction: e,
                                                                    edgeType: a
                                                                })
                                                            }
                                                        })
                                                    }({
                                                        relatedPageStore: c,
                                                        environment: B,
                                                        store: I,
                                                        property: v
                                                    })
                                                },
                                                onEditButtonClick: g,
                                                index: d + 1,
                                                propertyLimit: K.limit,
                                                collectionViewStore: null == t ? void 0 : t.collectionViewStore()
                                            })
                                        },
                                        action: o(763230).lQ
                                    };
                                n.push(u)
                            }
                            return n
                        }, [])
                    }, [W, K, b, $, I, Q, U, m, P, S, v, V, B, _, t, r, a]),
                    et = (0, n.useCallback)(() => {
                        W && K && D && w(V.length >= a ? a : V.length + 1, W, "relation_section_footer", B, I, v, b, a, s, t, K)
                    }, [W, K, D, V.length, a, B, I, v, b, t]);
                if ("section_hide" === R || !K || !W || !t || !L) return null;
                if ("minimal" === R) return (0, i.jsx)(f, {
                    property: v,
                    propertySchema: K,
                    numberOfRelations: E,
                    onHandleOpenProperty: F,
                    onHandleRelationPropertyPageSectionRefMount: e => {
                        e && (O.current = e)
                    },
                    schema: m,
                    format: h,
                    disabled: P,
                    locked: S,
                    canConfigureCollection: L.canConfigureCollection,
                    blockStore: I,
                    collectionStore: b,
                    collectionContextStore: t,
                    isInPeekRenderer: M,
                    targetCollectionStore: W,
                    pagePropertiesStore: T,
                    shouldHideIcon: X
                });
                let eo = ee.map(e => e.key.toString()),
                    en = (0, i.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        store: r,
                        initialFocus: void 0,
                        disableKeyboard: !0,
                        style: d,
                        sections: [{
                            key: "section",
                            render: e => (0, i.jsx)(o(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                disableMobileBorders: !0,
                                children: Q ? (0, i.jsx)(o(66467).Ay, {
                                    direction: "vertical",
                                    keys: eo,
                                    renderKey: t => e.children[eo.indexOf(t)],
                                    onDrop: N,
                                    store: l
                                }) : e.children
                            }),
                            items: ee
                        }]
                    });
                return (0, i.jsx)(x, {
                    collectionContextStore: t,
                    isConnectedRelation: z,
                    relationValuesCount: V.length,
                    title: e.propertyRowName ? ? (0, i.jsx)(o(105876).I, {
                        schema: m,
                        format: h,
                        property: v,
                        blockStore: I,
                        collectionStore: b,
                        disabled: P,
                        locked: S,
                        canConfigureCollection: L.canConfigureCollection,
                        styleVariants: y,
                        isInPeekRenderer: M,
                        pagePropertiesStore: T,
                        hideIcon: X
                    }),
                    collectionStore: b,
                    targetCollectionStore: W,
                    property: v,
                    showRight: !0,
                    disabled: P,
                    schema: m,
                    format: h,
                    locked: S,
                    canEditTargetCollection: D,
                    canConfigureCollection: L.canConfigureCollection,
                    canEditCurrentPage: U,
                    handleMouseMove: e.handleMouseMove,
                    onHandleOpenPropertyQuickAdd: et,
                    onHandleOpenProperty: () => {
                        j({
                            rowOffset: !1,
                            mode: void 0,
                            originElement: void 0,
                            environment: B,
                            blockPropertyValueOverlayStore: _,
                            store: I,
                            property: v,
                            collectionContextStore: t,
                            relationPropertyPageSectionRef: O
                        })
                    },
                    onHandleRelationPropertyPageSectionRefMount: e => {
                        e && (O.current = e)
                    },
                    onTitleEnter: () => w(void 0, W, "relation_section_inline", B, I, v, b, a, s, t, K),
                    handleClearProperty: () => k(W, I, v, V, B),
                    topBorder: A,
                    children: (0, i.jsxs)("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "column",
                            width: "100%",
                            ...o(986939).A.isMobile && p
                        },
                        onMouseMove: e.handleMouseMove,
                        onMouseLeave: e.handleMouseLeave,
                        children: [en, V.length > a ? (0, i.jsx)(o(406910).p, {
                            style: {
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: 3,
                                fontSize: 14,
                                minHeight: 30,
                                margin: 0,
                                paddingTop: 6,
                                paddingInlineEnd: 8,
                                paddingBottom: 7,
                                paddingInlineStart: 8
                            },
                            onClick: () => s(a + 10),
                            children: (0, i.jsx)(o(569726).A, {
                                count: V.length - a,
                                format: o(696654).NY.Medium,
                                style: c,
                                fixedHeight: !1,
                                isCompact: !1
                            })
                        }) : void 0, !U || S || Y ? void 0 : (0, i.jsx)(o(4458).fI, {
                            style: u,
                            className: "autolayout-fill-width",
                            children: (0, i.jsx)(g, {
                                canCreateRelatedPageInTarget: D,
                                disabled: P,
                                locked: S,
                                numberOfRelations: E,
                                isRelationToTypedSprintsDB: q,
                                relationPropertySchema: K,
                                onQuickAddButtonClick: et,
                                handleAddExistingClicked: Z,
                                handleClearProperty: () => k(W, I, v, V, B)
                            })
                        })]
                    })
                }, v)
            }

            function g(e) {
                let {
                    canCreateRelatedPageInTarget: t,
                    disabled: n,
                    locked: r,
                    numberOfRelations: a,
                    isRelationToTypedSprintsDB: s,
                    relationPropertySchema: d,
                    onQuickAddButtonClick: c,
                    handleAddExistingClicked: u,
                    handleClearProperty: p
                } = e, m = (0, o(425985).U)(d), g = 1 === d.limit || s || m, y = g && a > 0, h = {
                    colorVariant: "tertiary",
                    size: "lg",
                    disabled: n || r
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [m || s || !t || g && 0 !== a ? void 0 : (0, i.jsx)(o(406910).p, {
                        iconLeading: {
                            icon: o(223759).plusFillIcon,
                            size: "sm"
                        },
                        onClick: c,
                        ...h,
                        children: (0, i.jsx)(o(109939).sA, {
                            id: "RelationPropertyPageSection.button.addNewPage",
                            defaultMessage: "Add new"
                        })
                    }), s && a > 0 ? (0, i.jsx)(o(406910).p, {
                        iconLeading: {
                            icon: l,
                            size: "sm"
                        },
                        onClick: p,
                        ...h,
                        children: (0, i.jsx)(o(109939).sA, {
                            id: "RelationPropertyPageSection.button.replacePageSprint",
                            defaultMessage: "Move to backlog"
                        })
                    }) : void 0, (0, i.jsx)(o(406910).p, {
                        iconLeading: {
                            icon: y ? o(670989).l : o(759706).arrowDiagonalUpRightSmallIcon,
                            size: "sm"
                        },
                        onClick: u,
                        ...h,
                        children: y ? (0, i.jsx)(o(109939).sA, {
                            id: "database.findOrCreatePage.replace",
                            defaultMessage: "Replace"
                        }) : s ? (0, i.jsx)(o(109939).sA, {
                            id: "database.findOrCreatePage.sprint",
                            defaultMessage: "Link sprint"
                        }) : (0, i.jsx)(o(109939).sA, {
                            id: "database.findOrCreatePage",
                            defaultMessage: "Link existing"
                        })
                    })]
                })
            }
            let y = {
                    width: {
                        variant: "hug-content"
                    },
                    height: {
                        variant: "small"
                    },
                    fontWeight: "medium",
                    size: "small"
                },
                h = {
                    hoverButton: {
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "normal",
                        color: o(632079).Tj.text.secondary,
                        width: "100%"
                    },
                    minimalButton: {
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                        height: 28,
                        borderRadius: 4,
                        fontSize: 14,
                        lineHeight: 1.2,
                        minWidth: 0,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 8,
                        fontWeight: o(699422).Wy.regular,
                        color: o(632079).Tj.text.tertiary
                    },
                    minimalButtonWrapper: {
                        width: "100%",
                        maxWidth: "100%",
                        fontWeight: o(699422).Wy.regular,
                        color: o(632079).Tj.text.tertiary
                    },
                    iconStyle: {
                        width: 14,
                        height: 14,
                        fill: o(632079).Tj.icon.tertiary,
                        marginInlineEnd: 6,
                        alignItems: "baseline"
                    },
                    minmalButtonLabelStyle: { ...o(699422).RC
                    }
                };

            function f(e) {
                let {
                    property: t,
                    propertySchema: r,
                    numberOfRelations: l,
                    schema: a,
                    format: s,
                    disabled: d,
                    locked: c,
                    canConfigureCollection: u,
                    blockStore: p,
                    collectionStore: m,
                    onHandleOpenProperty: g,
                    onHandleRelationPropertyPageSectionRefMount: y,
                    isInPeekRenderer: f,
                    targetCollectionStore: S,
                    pagePropertiesStore: x,
                    shouldHideIcon: v
                } = e, b = (0, o(960253).e)(), C = (0, n.useCallback)(e => {
                    d || c || !u || (e.preventDefault(), x.setState({ ...x.state,
                        openProperty: {
                            property: t,
                            isInPeekRenderer: f
                        }
                    }))
                }, [d, c, u, x, t, f]), k = (0, n.useCallback)(e => {
                    g(!0)
                }, [g]), w = (0, n.useMemo)(() => ({
                    size: "medium",
                    fontWeight: "regular",
                    width: {
                        variant: "hug-content",
                        maxWidthDesktop: 300,
                        maxWidthMobile: 300
                    }
                }), []), j = (0, n.useCallback)(() => {
                    x.setState({ ...x.state,
                        hoveredProperty: t
                    })
                }, [t, x]), I = (0, n.useCallback)(() => {
                    x.setState({ ...x.state,
                        hoveredProperty: void 0
                    })
                }, [x]), P = (0, o(682985).K8)(() => S.getFormatStore().getKeyStore("app_config_uri").getValue(), [S]), R = (0, o(463082).$O)(o(11448).av), M = (0, o(463082).oj)(o(11448).av);
                return (0, i.jsx)("div", {
                    style: h.hoverButton,
                    onMouseMove: j,
                    onMouseLeave: I,
                    children: (0, i.jsx)(o(105876).I, {
                        schema: a,
                        format: s,
                        property: t,
                        blockStore: p,
                        collectionStore: m,
                        disabled: d,
                        locked: c,
                        canConfigureCollection: u,
                        styleVariants: w,
                        pagePropertiesStore: x,
                        labelComponent: (0, i.jsx)("div", {
                            ref: y,
                            style: h.minimalButtonWrapper,
                            children: (0, i.jsxs)(o(64960).Ay, {
                                style: h.minimalButton,
                                onClick: k,
                                onContextMenu: C,
                                children: [(0, i.jsx)(o(221535).zB, {
                                    size: 14,
                                    style: h.iconStyle,
                                    theme: o(632079).Tj,
                                    themeMode: b,
                                    type: r.type ? ? "relation",
                                    icon: r.icon
                                }), (0, i.jsx)("div", {
                                    style: h.minmalButtonLabelStyle,
                                    children: P === o(11448).av ? (0, i.jsx)(o(109939).sA, {
                                        id: "RelationPropertyPageSection.sprints.showSprintRelations",
                                        defaultMessage: "{numberOfRelations, plural, =0 {Add {propertyName}} one {1 {singleTypedItemName}} other {{numberOfRelations} {pluralTypedItemName}}}",
                                        values: {
                                            numberOfRelations: l,
                                            propertyName: r.name,
                                            singleTypedItemName: R,
                                            pluralTypedItemName: M
                                        }
                                    }) : (0, i.jsx)(o(109939).sA, {
                                        id: "RelationPropertyPageSection.showRelations",
                                        defaultMessage: "{numberOfRelations, plural, =0 {Add {propertyName}} one {1 {propertyName}} other {{numberOfRelations} {propertyName}}}",
                                        values: {
                                            numberOfRelations: l,
                                            propertyName: r.name
                                        }
                                    })
                                })]
                            }, `minimal-section-${t}`)
                        }),
                        hideDragHandle: !0,
                        isInPeekRenderer: f,
                        hideIcon: v
                    })
                })
            }
            let S = {
                style0: {
                    width: "100%"
                },
                style2: {
                    padding: 0,
                    width: "100%"
                },
                style3: {
                    boxShadow: "none"
                },
                style4: {
                    marginTop: 0,
                    marginBottom: 4,
                    paddingInlineStart: 0,
                    paddingInlineEnd: 8,
                    fontWeight: o(699422).Wy.regular
                },
                style5: {
                    paddingInlineStart: 0,
                    paddingInlineEnd: 4,
                    alignItems: "center",
                    fontWeight: o(699422).Wy.regular
                }
            };

            function x(e) {
                let {
                    collectionStore: t,
                    targetCollectionStore: r,
                    property: l,
                    showRight: a,
                    disabled: d,
                    style: c,
                    children: u,
                    isConnectedRelation: p,
                    canEditCurrentPage: m,
                    handleMouseMove: g,
                    onHandleOpenProperty: y,
                    onHandleRelationPropertyPageSectionRefMount: h,
                    topBorder: f,
                    collectionContextStore: x,
                    onHandleOpenPropertyQuickAdd: v,
                    canEditTargetCollection: C,
                    relationValuesCount: k
                } = e, w = (0, o(682985).K8)(() => r.isSyncedCollection(), [r]), j = (0, o(682985).K8)(() => r.getFormatStore().getKeyStore("app_config_uri").getValue() === o(11448).av, [r]), I = (0, o(682985).K8)(() => t.getSchema()[l], [t, l]), P = (0, o(682985).K8)(() => x.permissionScopesStore.state.isExternallyImportedAndSyncedCollection, [x.permissionScopesStore]), {
                    isPhone: R
                } = (0, o(533992).Y0)(), [M, A] = (0, n.useState)(!1), T = o(986939).A.isMobile ? a : a && M, _ = m && !j && C && I && (0, o(795e3).n)(I) && (1 !== I.limit || 0 === k);
                return (0, i.jsx)("div", {
                    style: S.style0,
                    ref: h,
                    onMouseEnter: () => A(!0),
                    onMouseLeave: () => A(!1),
                    children: (0, i.jsx)(o(844565).A, { ...e,
                        topBorder: f,
                        children: u,
                        noTextOverflow: !1,
                        disableMobilePadding: !0,
                        right: T && !w && !P && !p && (0, i.jsxs)(o(4458).fI, {
                            height: "100%",
                            alignItems: "center",
                            width: "100%",
                            children: [_ ? (0, i.jsx)(b, {
                                disabled: d,
                                handleMouseMove: g,
                                onClick: v,
                                icon: {
                                    icon: o(581923).plusIcon,
                                    colorVariant: "secondary"
                                },
                                tooltipMessage: (0, i.jsx)(o(109939).sA, {
                                    id: "database.RelationPropertyPageSectionHeaderButton.tooltip.quickAdd.message",
                                    defaultMessage: "Create new page"
                                })
                            }, `quickAddIcon-${l}`) : void 0, m ? (0, i.jsx)(b, {
                                disabled: d,
                                handleMouseMove: g,
                                onClick: y,
                                icon: {
                                    icon: o(330274).magnifyingGlassIcon,
                                    colorVariant: "secondary"
                                },
                                tooltipMessage: j ? (0, i.jsx)(o(109939).sA, {
                                    id: "database.RelationPropertyPageSectionHeaderButton.tooltip.searchButtonSprints.message",
                                    defaultMessage: "Search for a sprint"
                                }) : (0, i.jsx)(o(109939).sA, {
                                    id: "database.RelationPropertyPageSectionHeaderButton.tooltip.searchButton.message",
                                    defaultMessage: "Link a page"
                                })
                            }, `searchIcon-${l}`) : void 0, R ? void 0 : (0, i.jsx)(s, {
                                collectionStore: t,
                                targetCollectionStore: r,
                                property: l,
                                disabled: d,
                                rowType: "section",
                                surface: "property_module"
                            })]
                        }),
                        style: { ...S.style2,
                            ...c
                        },
                        mobileStyle: S.style3,
                        desktopTitleStyle: S.style4,
                        mobileTitleStyle: S.style5
                    })
                })
            }
            let v = {
                buttonStyle: {
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginInlineEnd: 2
                },
                iconStyle: {
                    width: 16,
                    height: 16,
                    flexGrow: 0,
                    flexShrink: 0,
                    fill: o(632079).Tj.icon.secondary
                }
            };

            function b(e) {
                let {
                    disabled: t,
                    handleMouseMove: n,
                    onClick: r,
                    icon: l,
                    tooltipMessage: a
                } = e;
                return (0, i.jsx)(o(51831).m, {
                    content: () => a,
                    children: e => (0, i.jsx)(o(406910).p, {
                        iconLeading: { ...l,
                            style: v.iconStyle
                        },
                        style: v.buttonStyle,
                        onMouseMove: n,
                        onClick: r,
                        disabled: t,
                        ...e
                    })
                })
            }

            function C(e, t, n, i, r) {
                let l;
                if (!(0, o(966980)._p)(n) || !i) return;
                let a = (0, o(935389).b)({
                        store: n,
                        property: i
                    }),
                    s = n.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "RelationToken.handleRelationPropertyMenuUpdate",
                    environment: r,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    canUndo: !0,
                    perform: s => {
                        let d = t.id;
                        if (e.newPage && d) {
                            let d = o(247438).x9d(e.newPage.name);
                            l = o(124937).Wv({
                                environment: r,
                                id: e.newPage.id,
                                type: o(955630).xd.page,
                                properties: {
                                    title: d
                                },
                                spaceId: e.newPage.spaceId,
                                inMemoryRecordCache: t.inMemoryRecordCache,
                                transaction: s
                            }), o(579695).X$({
                                childStore: l,
                                parentStore: t,
                                transaction: s
                            });
                            let c = o(970831).B.createChildStore(n, l.pointer),
                                u = t.getDefaultTemplatePageStore();
                            u && o(845422).TB({
                                title: {
                                    text: d
                                },
                                environment: r,
                                store: c,
                                templateStore: u,
                                isKeyboard: !1,
                                isCreateIn: !1,
                                transaction: s,
                                from: "relation_property_page_section"
                            }), o(356975).K6({
                                store: n,
                                propertyId: i,
                                id: l.id,
                                environment: r,
                                transaction: s,
                                position: {
                                    type: "after"
                                },
                                edgeType: a
                            });
                            return
                        }
                        if (e.newValues) {
                            let t = o(561872).Ap(e.newValues),
                                l = n.getPropertyStore(i);
                            o(41403).R9({
                                environment: r,
                                store: l,
                                value: t,
                                transaction: s
                            })
                        }
                    }
                });
                let d = n.getCollectionStoreIfSingleSource();
                if (d) {
                    let n = d.getSchema()[i];
                    n && (0, o(795e3).n)(n) && o(714416).id({
                        sourcePropertySchema: n,
                        sourcePropertyId: i,
                        sourceCollectionPointer: d.pointer,
                        relatedCollectionStore: t,
                        newRelationValues: e.newValues,
                        oldRelationValues: e.oldValues,
                        environment: r
                    })
                }
                o(374176).default.afterNextFlush(() => {
                    if (!l) return;
                    let e = o(222896).A.findRow(l.id, "section", i);
                    if (!e) return;
                    let t = e.relationTokenBlockStoreRef.current;
                    if (!t) return;
                    let n = t.getBlockTitleStore();
                    (0, o(726923).setMultiSelection)({
                        multiSelection: {
                            start: {
                                index: 0,
                                store: n
                            },
                            end: {
                                index: 0,
                                store: n
                            }
                        }
                    })
                })
            }

            function k(e, t, o, n, i) {
                C({
                    newValues: [],
                    oldValues: n
                }, e, t, o, i)
            }

            function w(e, t, n, i, r, l, a, s, d, c, u) {
                if (!u || "relation" !== u.type || !r.canEdit() || (0, o(335818).fc)(r)) return;
                let p = a.pointer.spaceId,
                    m = u.limit,
                    g = (0, o(295447).zP)({
                        environment: i,
                        table: o(832375).evP,
                        spaceId: p
                    }),
                    y = g.id;
                if (!(0, o(966980)._p)(r) || !l) return;
                let h = r.getPropertyValue(l),
                    f = o(561872).n(h);
                e && e + 1 > s && d(e + 1), C({
                    newPage: {
                        id: y,
                        spaceId: p,
                        name: ""
                    },
                    newValues: m ? [g] : e ? [...f.slice(0, e), g, ...f.slice(e)] : [g, ...f],
                    oldValues: f
                }, t, r, l, i), o(549960).vH(i, { ...(0, o(752242).sl)(c),
                    from: n,
                    type: "page",
                    target_collection_id: null == t ? void 0 : t.id,
                    new_page_id: y,
                    creating_block_id: y
                })
            }

            function j(e) {
                let {
                    rowOffset: t,
                    mode: n,
                    originElement: i,
                    environment: r,
                    blockPropertyValueOverlayStore: l,
                    store: a,
                    property: s,
                    collectionContextStore: d,
                    relationPropertyPageSectionRef: c
                } = e, u = c.current;
                if (!u || !(u instanceof Element) || (0, o(335818).fc)(a)) return;
                let p = i ? null == i ? void 0 : i.getBoundingClientRect() : u.getBoundingClientRect(),
                    m = t ? p.top + o(856235).d0 : p.top + 5,
                    g = new DOMRect(p.left, m, p.width, p.height);
                o(576186).ho({
                    environment: r,
                    blockPropertyValueOverlayStore: l,
                    store: a,
                    property: s,
                    rect: g,
                    surface: "page",
                    mode: n,
                    collectionContextStore: d
                }), (0, o(195857).DO_NOT_USE_trackLegacy)("relation_section_link_pages", {
                    from: "relation_section"
                })
            }

            function I(e) {
                let {
                    store: t,
                    property: n,
                    propertySchema: i,
                    edgeRelationValue: r
                } = e;
                return (0, o(682985).K8)(() => {
                    let e = t.getPropertyValue(n);
                    return i ? o(561872).bG({
                        relationValue: r ? ? o(561872).n(e),
                        propertySchema: i,
                        getRecordModel: t.getRecordModel,
                        includeNoAccess: !0
                    }) : void 0
                }, [t, n, i, r], {
                    equalityFn: o(381453).n4
                })
            }

            function P(e) {
                let {
                    store: t,
                    relationValue: n,
                    propertySchema: i
                } = e;
                return (0, o(682985).K8)(() => {
                    let e = null != i && i.limit && n ? n.slice(0, i.limit) : n;
                    if (!e) return [];
                    let r = e.map(e => {
                        let n = o(970831).B.createChildStore(t, e);
                        if (!(0, o(497570).X)(n)) return {
                            pointer: e,
                            pageStore: n
                        }
                    });
                    return (0, o(381453).oE)(r)
                }, [i, n, t], {
                    equalityFn: o(381453).n4
                })
            }
            let R = {
                    width: "100%"
                },
                M = n.memo((0, n.forwardRef)(function(e, t) {
                    let {
                        collectionStore: r,
                        buttonStyle: l,
                        editButtonClickProps: a,
                        property: s,
                        locked: d,
                        EmptyComponent: c,
                        onContextMenu: u,
                        blockPropertyValueOverlayStore: p,
                        store: m,
                        surface: g,
                        renderAs: y,
                        quickActionButtons: h,
                        width: f,
                        formQuestionStore: S,
                        userExpandable: x,
                        inlineLimit: v,
                        edgeRelationValue: b,
                        edgeList: C
                    } = e, {
                        propertySchema: k,
                        canEdit: w,
                        baseStyles: j,
                        collectionContextStore: M
                    } = (0, n.useContext)(o(422575).L8), A = (0, o(916769).Ug)(null == j ? void 0 : j.tokenFormat), T = (0, o(682985).uB)(void 0, o(419110).$), _ = I({
                        store: m,
                        propertySchema: k,
                        property: s,
                        edgeRelationValue: b
                    }), E = (0, o(486536).v)({
                        blockId: null == m ? void 0 : m.id,
                        propertyId: s
                    }), F = (0, o(601264).s)({
                        propertyId: s,
                        store: m
                    }), O = !!F, H = (0, n.useMemo)(() => {
                        let e = k ? (0, o(390768).N)(k) : void 0;
                        return e ? o(356912).m.createChildStore(m, e) : void 0
                    }, [k, m]), L = P({
                        store: m,
                        propertySchema: k,
                        relationValue: _
                    }), K = 0 === L.length, W = "rows" === y && !K, D = (0, o(960253).I)(() => ({
                        buttonStyle: { ...j.buttonStyle,
                            ...l,
                            ...W && {
                                padding: 0
                            }
                        },
                        buttonPressedStyle: j.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: j.buttonHoveredStyle ? ? {}
                    }), [j.buttonHoveredStyle, j.buttonPressedStyle, j.buttonStyle, l, W]), z = (0, n.useMemo)(() => H ? "rows" === y ? k && _ && (0, i.jsx)(B, {
                        relationItemPointers: L,
                        relationValue: _,
                        collectionStore: r,
                        menuListStore: T,
                        store: m,
                        targetCollectionStore: H,
                        property: s,
                        disabled: !w,
                        buttonContainerRef: t,
                        blockPropertyValueOverlayStore: p,
                        surface: g,
                        propertySchema: k,
                        collectionContextStore: M
                    }) : "inline" === y ? (0, i.jsx)(V, {
                        relationItemPointers: L,
                        store: m,
                        tokenFormat: A,
                        hasUnresolvedDiscussion: O,
                        hasDraftComment: E,
                        limit: v ? ? 10,
                        edgeList: C
                    }) : "singleWithOverflow" === y ? (0, i.jsx)(N, {
                        relationItemPointers: L,
                        store: m,
                        tokenFormat: A,
                        hasUnresolvedDiscussion: O,
                        hasDraftComment: E,
                        buttonContainerRef: t,
                        blockPropertyValueOverlayStore: p,
                        property: s,
                        surface: g,
                        collectionContextStore: M,
                        canEdit: w,
                        isLocked: d
                    }) : void(0, o(722371).HB)(y) : null, [H, y, k, _, L, r, T, m, s, w, t, p, g, M, A, O, E, d, v, C]), U = n.useCallback(e => z || ["property_module", "page"].includes(g) ? (0, i.jsx)("div", {
                        style: R,
                        className: F,
                        children: e.children
                    }) : (0, i.jsx)(i.Fragment, {
                        children: e.children
                    }), [F, g, z]);
                    return K && void 0 === c ? null : (0, i.jsx)(o(858439).P, {
                        ref: t,
                        editButtonClickProps: W ? void 0 : a,
                        forceEnableButton: "singleWithOverflow" === y && !d,
                        onContextMenu: u,
                        style: D.buttonStyle,
                        hoveredStyle: D.buttonHoveredStyle,
                        pressedStyle: D.buttonPressedStyle,
                        quickActionButtons: h,
                        width: f,
                        formQuestionStore: S,
                        userExpandable: x,
                        children: (0, i.jsx)(U, {
                            children: K && void 0 !== c ? (0, i.jsx)(c, {}) : z
                        })
                    })
                })),
                A = {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    borderRadius: 4,
                    fontSize: 14,
                    minHeight: 32,
                    margin: 0,
                    padding: "6px 8px"
                },
                T = {
                    lineHeight: "normal",
                    margin: 0
                },
                _ = {
                    width: "100%"
                };

            function B(e) {
                let {
                    collectionStore: t,
                    targetCollectionStore: r,
                    relationItemPointers: l,
                    relationValue: a,
                    property: s,
                    store: d,
                    disabled: c,
                    menuListStore: u,
                    buttonContainerRef: p,
                    blockPropertyValueOverlayStore: m,
                    surface: g,
                    propertySchema: y,
                    collectionContextStore: h
                } = e, f = (0, o(533992).v3)(), {
                    collectionSchemaStore: S
                } = (0, n.useContext)(o(422575).L8), x = (0, o(682985).O$)(S), v = (0, o(682985).K8)(() => null == h ? void 0 : h.collectionViewStore(), [h]), b = (0, n.useCallback)((e, t) => {
                    o(576186).ho({
                        environment: f,
                        blockPropertyValueOverlayStore: m,
                        store: d,
                        property: s,
                        rect: null == t ? void 0 : t.getBoundingClientRect(),
                        surface: g,
                        mode: e,
                        collectionContextStore: h
                    })
                }, [m, h, f, g, s, d]), C = (0, n.useCallback)((e, t) => {
                    let n = e.filter(e => e.id !== t.id),
                        i = d.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "RelationBlockPropertyValue.handleRemoveRelationClick",
                        environment: f,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, o(935389).I)({
                                store: d,
                                propertyId: s,
                                value: n,
                                environment: f,
                                relatedPageId: t.id,
                                propertySchema: y,
                                transaction: e,
                                collectionContextStore: h,
                                analyticsData: {
                                    isFromBulkActionsToolbar: o(793550).pi(m),
                                    analyticsFrom: o(793550).zP(g)
                                },
                                isUnthrottled: !1
                            })
                        }
                    })
                }, [m, h, f, g, s, y, d]);
                if (!x) return null;
                let k = l.slice(0, 5).map(({
                    pageStore: e
                }, n) => ({
                    key: e.id,
                    render: ({
                        ref: l,
                        ...p
                    }) => (0, i.jsx)(o(254582).q, { ...p,
                        canDrag: !1,
                        collectionStore: t,
                        collectionId: t.id,
                        schema: x,
                        propertySchema: y,
                        targetCollectionStore: r,
                        relatedPageStore: e,
                        disabled: c,
                        isSelected: !0,
                        pageStore: d,
                        property: s,
                        rowType: "inline",
                        onActionButtonClick: () => {
                            C(a, e)
                        },
                        onMouseLeave: () => u.unsetFocus(),
                        onSecondaryButtonClick: e => {
                            b({
                                type: "view",
                                index: n + 1
                            }, e)
                        },
                        collectionViewStore: v
                    }),
                    action: () => {}
                }));
                return l.length > 5 && k.push({
                    key: "add",
                    render: e => (0, i.jsx)(o(64960).Ay, { ...e,
                        style: A,
                        onClick: e => b({
                            type: "view"
                        }, p && "current" in p ? p.current : void 0),
                        onMouseLeave: () => u.unsetFocus(),
                        children: (0, i.jsx)(o(569726).A, {
                            style: T,
                            count: l.length - 5,
                            format: o(696654).NY.Medium,
                            fixedHeight: !1,
                            isCompact: !1
                        })
                    }),
                    action: () => {
                        b({
                            type: "add",
                            index: a.length
                        }, void 0)
                    }
                }), (0, i.jsx)(o(558045).A, {
                    type: o(558045).O.Vertical,
                    store: u,
                    initialFocus: void 0,
                    disableKeyboard: !0,
                    style: _,
                    sections: [{
                        key: "results",
                        render: e => (0, i.jsx)(o(844565).A, { ...e,
                            disableDesktopPadding: !0,
                            disableMobilePadding: !0,
                            disableMobileBorders: !0,
                            children: e.children
                        }),
                        items: k
                    }]
                })
            }

            function V(e) {
                let {
                    relationItemPointers: t,
                    store: o,
                    tokenFormat: n,
                    hasUnresolvedDiscussion: r,
                    hasDraftComment: l,
                    limit: a,
                    edgeList: s
                } = e;
                return (0, i.jsx)(K, {
                    limit: a,
                    store: o,
                    linkify: "whenReadOnly",
                    relationItemPointers: t,
                    tokenFormat: n,
                    hasUnresolvedDiscussion: r,
                    hasDraftComment: l,
                    wrapTokens: !0,
                    edgeList: s
                })
            }
            let E = {
                overflow: "hidden",
                width: "100%"
            };

            function N(e) {
                let {
                    relationItemPointers: t,
                    store: r,
                    tokenFormat: l,
                    hasUnresolvedDiscussion: a,
                    hasDraftComment: s,
                    buttonContainerRef: d,
                    blockPropertyValueOverlayStore: c,
                    property: u,
                    surface: p,
                    collectionContextStore: m,
                    canEdit: g,
                    isLocked: y
                } = e, h = (0, o(533992).v3)(), f = (0, n.useCallback)(() => {
                    var e;
                    o(576186).ho({
                        environment: h,
                        blockPropertyValueOverlayStore: c,
                        store: r,
                        property: u,
                        rect: null == (e = d && "current" in d ? d.current : void 0) ? void 0 : e.getBoundingClientRect(),
                        surface: p,
                        mode: {
                            type: "view",
                            index: 0
                        },
                        collectionContextStore: m
                    })
                }, [c, d, m, h, p, u, r]), S = (0, i.jsx)(K, {
                    relationTokenStyle: E,
                    limit: 1,
                    store: r,
                    linkify: "never",
                    relationItemPointers: t,
                    tokenFormat: l,
                    hasUnresolvedDiscussion: a,
                    hasDraftComment: s,
                    wrapTokens: !1
                });
                return g && !y ? (0, i.jsx)(o(64960).Ay, { ...e,
                    ignoreLocalHoverState: !0,
                    onClick: f,
                    children: S
                }) : S
            }
            let F = {
                fontSize: 12
            };

            function O({
                pageStore: e
            }) {
                let t = (0, n.useRef)(null);
                return (0, i.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    children: [(0, i.jsx)(o(316468).w, {
                        blockStore: e,
                        format: o(696654).NY.ExtraSmall,
                        isEditable: !1
                    }), (0, i.jsx)(o(989786).Y, {
                        blockStore: e,
                        noUnderline: !0,
                        shouldWrap: !1,
                        titleStyle: F,
                        recordTitleRef: t,
                        disableTooltip: !0
                    })]
                }, e.id)
            }
            let H = {
                    margin: 0
                },
                L = {
                    marginTop: 2,
                    marginBottom: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    width: "max-content",
                    maxWidth: 320
                };

            function K({
                linkify: e,
                limit: t,
                hasUnresolvedDiscussion: r,
                hasDraftComment: l,
                relationItemPointers: a,
                tokenFormat: s,
                store: d,
                relationTokenStyle: c,
                wrapTokens: u,
                edgeList: p
            }) {
                let m = (0, o(960253).e)(),
                    g = (0, o(960253).I)(() => ({
                        commentHighlightWrapperStyle: r || l ? { ...(0, o(605351).sQ)(m),
                            padding: 4,
                            flexWrap: "wrap",
                            lineHeight: 2,
                            display: "inline-flex"
                        } : {},
                        relationTokenHighlightStyle: r || l ? {
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            maxWidth: "fit-content",
                            display: "inline-flex"
                        } : {}
                    }), [l, r, m]),
                    y = a.length > t,
                    h = n.useMemo(() => a.slice(0, t), [a, t]);
                ! function(e) {
                    let {
                        store: t,
                        relationItemPointers: i
                    } = e, {
                        surface: r,
                        collectionContextStore: l,
                        property: a
                    } = (0, n.useContext)(o(422575).L8);
                    (0, o(383953).w)(() => {
                        var e;
                        "table" === r && a && (null == l || null == (e = l.propertyResultDurationTracker) || e.trackMount({
                            pageId: t.id,
                            propertyId: a,
                            propertyType: "relation"
                        }))
                    });
                    let s = (0, o(682985).K8)(() => !i.some(({
                        pageStore: e
                    }) => !e.isReady()), [i]);
                    (0, n.useEffect)(() => {
                        if (s && "table" === r && a) {
                            var e;
                            null == l || null == (e = l.propertyResultDurationTracker) || e.trackResult({
                                pageId: t.id,
                                propertyId: a,
                                propertyType: "relation"
                            })
                        }
                    }, [l, r, s, a, t])
                }({
                    store: d,
                    relationItemPointers: h
                });
                let f = h.map(({
                    pointer: t,
                    pageStore: o
                }) => (0, i.jsx)(n.Fragment, {
                    children: (0, i.jsx)(W, {
                        recordPointer: t,
                        parentStore: d,
                        recordStore: o,
                        style: c,
                        propertyStyle: g.relationTokenHighlightStyle,
                        linkify: e,
                        noWrap: !u,
                        disableTooltip: y
                    })
                }, t.id));
                y && f.push((0, i.jsx)(o(569726).A, {
                    style: H,
                    count: a.length - t,
                    format: s,
                    fixedHeight: !1,
                    isCompact: !0
                }, "more")), null != p && p.hasNextPage && !p.isFetchingNextPage && f.push((0, i.jsx)(o(64960).Ay, {
                    onClick: () => p.fetchNextPage(),
                    children: (0, i.jsx)(o(569726).A, {
                        style: H,
                        count: p.limit,
                        format: s,
                        fixedHeight: !1,
                        isCompact: !0
                    }, "more")
                }));
                let S = (0, n.useCallback)(e => (0, i.jsx)("div", { ...e,
                        style: L,
                        children: a.map(({
                            pointer: e,
                            pageStore: t
                        }) => (0, i.jsx)(O, {
                            pageStore: t
                        }, e.id))
                    }), [a]),
                    x = (0, i.jsx)(o(27507).h, {
                        style: g.commentHighlightWrapperStyle,
                        children: f
                    });
                return y ? (0, i.jsx)(o(51831).m, {
                    content: S,
                    delayThreshold: 500,
                    placement: "bottom",
                    originGap: 8,
                    children: e => (0, i.jsx)("div", { ...e,
                        children: x
                    })
                }) : x
            }

            function W(e) {
                let {
                    style: t,
                    recordPointer: n,
                    recordStore: r,
                    parentStore: l,
                    linkify: a,
                    disableTooltip: s,
                    propertyStyle: d,
                    noWrap: c
                } = e;
                return (0, o(497570).W)(r) ? null : (0, i.jsx)("div", {
                    style: t,
                    children: (0, i.jsx)(o(296012).a, {
                        recordPointer: n,
                        parentStore: l,
                        style: d,
                        linkify: a,
                        noWrap: c,
                        disableTooltip: s
                    })
                })
            }
            let D = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: r,
                        property: l
                    } = e, {
                        shouldWrap: a
                    } = (0, n.useContext)(o(422575).L8), s = eo(e, t), d = (0, n.useMemo)(() => (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o(622031).qO, {
                            store: r,
                            property: l
                        }, "workflow-autofill"), (0, i.jsx)(o(243904).k, {}, "comment")]
                    }), [r, l]);
                    return (0, i.jsx)(M, { ...s,
                        EmptyComponent: o(959110).rW,
                        renderAs: "inline",
                        quickActionButtons: d,
                        userExpandable: a
                    })
                }),
                z = (0, n.forwardRef)(function(e, t) {
                    let n = eo(e, t);
                    return (0, i.jsx)(M, { ...n,
                        EmptyComponent: o(959110).ao,
                        renderAs: "rows"
                    })
                }),
                U = (0, n.forwardRef)(function(e, t) {
                    let n = eo(e, t);
                    return (0, i.jsx)(M, { ...n,
                        EmptyComponent: o(959110).ao,
                        renderAs: "singleWithOverflow"
                    })
                }),
                Y = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, r = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "relation"
                    }), l = eo(e, t, r);
                    return (0, i.jsx)(M, { ...l,
                        EmptyComponent: n ? o(959110).Jb : void 0,
                        renderAs: "inline"
                    })
                }),
                $ = (0, n.forwardRef)(function(e, t) {
                    var n;
                    let {
                        showIfEmpty: r
                    } = e, l = eo(e, t), a = (n = e.collectionViewStore, (0, o(682985).K8)(() => "compact" === (0, o(535144).C)(n) ? 1 : void 0, [n]));
                    return (0, i.jsx)(M, { ...l,
                        EmptyComponent: r ? o(959110).Jb : void 0,
                        renderAs: "inline",
                        inlineLimit: a
                    })
                }),
                q = (0, n.forwardRef)(function(e, t) {
                    let o = eo(e, t);
                    return (0, i.jsx)(M, { ...o,
                        renderAs: "inline"
                    })
                }),
                G = (0, n.forwardRef)(function(e, t) {
                    let o = eo(e, t);
                    return (0, i.jsx)(M, { ...o,
                        renderAs: "inline"
                    })
                }),
                Q = (0, n.forwardRef)(function(e, t) {
                    let o = eo(e, t);
                    return (0, i.jsx)(M, { ...o,
                        renderAs: "inline"
                    })
                }),
                J = (0, n.forwardRef)(function(e, t) {
                    let o = eo(e, t);
                    return (0, i.jsx)(M, { ...o,
                        renderAs: "inline"
                    })
                });

            function X() {}
            let Z = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: r,
                        collectionStore: l,
                        property: a,
                        blockPropertyValueOverlayStore: s,
                        isInPeekRenderer: d
                    } = eo(e, t), {
                        canEdit: c,
                        propertyModule: u,
                        propertySchema: p,
                        collectionSchemaStore: g
                    } = (0, n.useContext)(o(422575).L8), y = (0, o(682985).O$)(g), h = (0, o(682985).K8)(() => (0, o(444285).S)(r), [r]), f = (0, n.useMemo)(() => new(o(120025)).YB, []), S = (0, o(682985).K8)(() => l.getFormat(), [l]), x = (0, o(682985).K8)(() => {
                        let e = null == l ? void 0 : l.getParentStore();
                        return !!l && !!e && "block" === e.table && (0, o(261105).v)({
                            collectionStore: l,
                            collectionViewBlockStore: e,
                            checkNavigableAncestorLocked: !1
                        })
                    }, [l]), v = (0, o(475717).l)(r), b = (0, o(682985).K8)(() => {
                        var e;
                        return (null == v || null == (e = v.getFormat()) ? void 0 : e.property_icons_visibility) === "hide"
                    }, [v]);
                    if (!p || !y) return null;
                    let C = (0, i.jsx)(o(105876).I, {
                        schema: y,
                        format: S,
                        hideDragHandle: !0,
                        property: a,
                        blockStore: r,
                        collectionStore: l,
                        pagePropertiesStore: f,
                        disabled: !c,
                        locked: h,
                        canConfigureCollection: x,
                        isInPeekRenderer: d ? ? !1,
                        styleVariants: ee,
                        layoutModule: u,
                        hideIcon: b
                    });
                    return (0, i.jsx)(o(643205).H, {
                        store: r,
                        property: a,
                        ref: t,
                        children: (0, i.jsx)(m, {
                            store: r,
                            collectionStore: l,
                            disabled: !c,
                            locked: h,
                            property: a,
                            schema: y,
                            handleMouseMove: X,
                            handleMouseLeave: X,
                            handleContextMenu: X,
                            blockPropertyValueOverlayStore: s,
                            format: S,
                            visibility: e.propertyVisibility ? ? "inline",
                            isInPeekRenderer: !!d,
                            topBorder: !1,
                            showIcon: !1,
                            propertyRowName: C,
                            pagePropertiesStore: f
                        })
                    })
                }),
                ee = {
                    width: {
                        variant: "hug-content"
                    },
                    height: {
                        variant: "small"
                    },
                    fontWeight: "medium",
                    size: "small"
                },
                et = (0, n.forwardRef)(function(e, t) {
                    let n = eo(e, t);
                    return (0, i.jsx)(M, { ...n,
                        EmptyComponent: o(959110).Fe,
                        renderAs: "inline"
                    })
                });

            function eo(e, t, n) {
                let {
                    store: i,
                    collectionStore: r,
                    property: l,
                    onContextMenu: a,
                    blockPropertyValueOverlayStore: s,
                    surface: d,
                    isInPeekRenderer: c,
                    width: u,
                    formQuestionStore: p,
                    locked: m
                } = e;
                return {
                    ref: t,
                    store: i,
                    collectionStore: r,
                    property: l,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: a,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    blockPropertyValueOverlayStore: s,
                    surface: d,
                    isInPeekRenderer: c,
                    width: u,
                    formQuestionStore: p,
                    locked: m
                }
            }
        },
        569726: (e, t, o) => {
            o.d(t, {
                A: () => l
            }), o(296540);
            var n = o(474848);
            let i = {
                    [o(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 8,
                        margin: "0 4px 0 0"
                    },
                    [o(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 4px 0 0"
                    },
                    [o(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0"
                    },
                    [o(696654).NY.CompactEssential]: {
                        height: 21,
                        fontSize: 14,
                        margin: "0 12px 6px 0"
                    },
                    [o(696654).NY.Medium]: {
                        height: 21,
                        fontSize: 14,
                        margin: "0 12px 6px 0"
                    },
                    [o(696654).NY.Inline]: {
                        height: 21,
                        fontSize: 14,
                        margin: "0 12px 0 0"
                    },
                    [o(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0"
                    }
                },
                r = {
                    whiteSpace: "nowrap"
                },
                l = function(e) {
                    let {
                        count: t,
                        format: l,
                        fixedHeight: a,
                        style: s,
                        isCompact: d
                    } = e, {
                        margin: c,
                        height: u,
                        fontSize: p
                    } = i[l], m = (0, o(960253).I)(() => ({
                        wrapper: {
                            display: "flex",
                            alignItems: "center",
                            lineHeight: 1.2,
                            borderRadius: 4,
                            fontSize: p,
                            margin: c,
                            color: o(632079).Tj.text.secondary,
                            ...a && {
                                height: u
                            },
                            ...s
                        }
                    }), [p, u, a, c, s]);
                    return (0, n.jsx)("div", {
                        style: m.wrapper,
                        children: d ? (0, n.jsx)("span", {
                            style: r,
                            children: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "+{thinSpace}{moreItemsCount}",
                                id: "database.tokens.moreItems.message",
                                values: {
                                    moreItemsCount: t,
                                    thinSpace: (0, n.jsx)("span", {
                                        children: " "
                                    })
                                }
                            })
                        }) : (0, n.jsx)("span", {
                            children: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "{relationMoreItemsCount} more…",
                                id: "database.relationPropertyValue.moreItems.message",
                                values: {
                                    relationMoreItemsCount: t
                                }
                            })
                        })
                    })
                }
        },
        643205: (e, t, o) => {
            o.d(t, {
                H: () => r
            });
            var n = o(296540),
                i = o(474848);
            let r = n.forwardRef(function(e, t) {
                let {
                    children: n,
                    property: r,
                    store: l
                } = e, a = (0, o(601264).y)({
                    propertyId: r,
                    store: l
                }) || [];
                return (0, i.jsx)("div", {
                    ref: t,
                    className: a.length ? a.join(" ") : void 0,
                    children: n
                })
            })
        }
    }
]);