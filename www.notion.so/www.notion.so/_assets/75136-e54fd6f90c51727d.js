"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [75136], {
        2919: (e, t, o) => {
            o.d(t, {
                n: () => r
            });

            function r(e) {
                let t = (0, o(533992).v3)(),
                    {
                        device: r,
                        WindowSizeStore: i
                    } = t,
                    n = (0, o(682985).K8)(() => {
                        let e = i.state.height,
                            r = o(986939).A.isMobile && o(498368).Ay.state.open ? e : 0;
                        return (0, o(175864).C)(t) + r
                    }, [t, i]);
                return (0, o(682985).K8)(() => "home-phone" === e ? o(681693).q3 : r.isTablet ? 380 : r.isIOS ? Math.max(300, n) : o(986939).A.isMobile ? 400 : "side-peek" === e || "center-peek" === e ? o(447036).ln : "home" === e ? o(681693).wH : "30vh", [r, n, e])
            }
        },
        6451: (e, t, o) => {
            o.d(t, {
                PF: () => i().P,
                Qd: () => r().Qd,
                g1: () => r().g1,
                iw: () => r().iw
            });
            var r = () => o(289970),
                i = () => o(873830)
        },
        22521: (e, t, o) => {
            o.d(t, {
                LR: () => n,
                Rm: () => l,
                dI: () => i
            });
            let r = {
                    PinnedInfoPanelToggleButton: new(o(815048)).O2("PinnedInfoPanelToggleButton", async () => o.e(7989).then(o.bind(o, 22911))),
                    PageHeaderInfoPanelToggleButton: new(o(815048)).O2("PageHeaderInfoPanelToggleButton", async () => o.e(20589).then(o.bind(o, 322191))),
                    ScrollToCommentsButton: new(o(815048)).O2("ScrollToCommentsButton", async () => o.e(93813).then(o.bind(o, 836773)))
                },
                i = (0, o(815048)._h)(r.PinnedInfoPanelToggleButton, e => e.default),
                n = (0, o(815048)._h)(r.PageHeaderInfoPanelToggleButton, e => e.PageHeaderInfoPanelToggleButton),
                l = (0, o(815048)._h)(r.ScrollToCommentsButton, e => e.ScrollToCommentsButton)
        },
        56612: (e, t, o) => {
            o.d(t, {
                O: () => i
            });
            let r = {
                    AIFillNoseyOverlay: new(o(815048)).O2("AIFillNoseyOverlay", () => Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(11082), o.e(29151), o.e(51383), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(87971), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(56308), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(55067), o.e(83490), o.e(58360), o.e(33162), o.e(63793), o.e(18881), o.e(12690), o.e(62731), o.e(68583), o.e(41049), o.e(72805), o.e(18416), o.e(35602), o.e(90735), o.e(12024), o.e(30532), o.e(69684), o.e(81603), o.e(49297), o.e(3723), o.e(78288), o.e(68719), o.e(40716), o.e(55755), o.e(19812), o.e(18378), o.e(95969), o.e(48328), o.e(56703), o.e(63821), o.e(72933), o.e(5406), o.e(28372), o.e(85129), o.e(7912), o.e(48617), o.e(77575), o.e(64748), o.e(59764)]).then(o.bind(o, 680550)))
                },
                i = (0, o(815048)._h)(r.AIFillNoseyOverlay, e => e.AIFillNoseyOverlay)
        },
        92248: (e, t, o) => {
            o.d(t, {
                Od: () => l,
                U$: () => a,
                aN: () => i,
                z7: () => n
            }), o(16280), o(898992), o(354520), o(672577), o(581454);
            var r = o(296540);

            function i(e) {
                return (0, o(682985).K8)(() => !!e && (0, o(261105).v)({
                    collectionStore: e,
                    collectionViewBlockStore: e.getParentBlockStore(),
                    checkNavigableAncestorLocked: !1
                }), [e])
            }

            function n({
                store: e,
                format: t,
                schema: r,
                collectionStore: i,
                propertyIds: l,
                propertyGroupId: a
            }) {
                let s = (0, o(533992).v3)(),
                    d = (0, o(109939).tz)(),
                    {
                        value: p
                    } = (0, o(815048).fJ)(o(864850).T.formulas);
                return (0, o(682985).K8)(() => (0, o(287753).e7)({
                    store: e,
                    format: t,
                    schema: r,
                    collectionStore: i,
                    propertyIds: l,
                    propertyGroupId: a,
                    intl: d,
                    environment: s,
                    formulasModule: p
                }), [e, t, r, i, l, a, d, s, p], {
                    equalityFn: o(795676).k
                })
            }

            function l({
                collectionStore: e,
                format: t
            }) {
                let i = (0, o(533992).v3)();
                return (0, r.useCallback)(r => {
                    let n = t.collection_page_properties || [],
                        l = [...(0, o(381453).oE)(r.map(e => n.find(t => t.property === e))), ...n.filter(e => !r.includes(e.property))],
                        a = e.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "PageProperties.handleReorder",
                        environment: i,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        canUndo: !0,
                        perform: t => {
                            (0, o(715144).z)({
                                stores: [e],
                                update: {
                                    collection_page_properties: l
                                },
                                transaction: t
                            })
                        }
                    })
                }, [e, i, t.collection_page_properties])
            }

            function a({
                collectionStore: e,
                propertyGroupId: t
            }) {
                let i = (0, o(533992).v3)();
                return (0, r.useCallback)(r => {
                    if (!t) throw Error("cannot reorder properties for property group -- no property group id provided");
                    let n = e.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "PagePropertiesGroup.handleReorder",
                        environment: i,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        canUndo: !0,
                        perform: i => {
                            (0, o(838141)._h)({
                                collectionStore: e,
                                newPartialPropertyIds: r,
                                groupId: t,
                                transaction: i
                            })
                        }
                    })
                }, [e, i, t])
            }
        },
        120805: (e, t, o) => {
            o.d(t, {
                h: () => V
            });
            var r = o(296540);
            o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(581454), o(944114), o(803949), o(672577);
            var i = o(474848);
            let n = {
                    addPageButton: {
                        fontSize: 14,
                        minHeight: o(6451).iw,
                        color: o(632079).Tj.text.tertiary,
                        background: "transparent",
                        boxShadow: "none",
                        borderBottom: "none"
                    },
                    style0: {
                        marginInlineEnd: 0,
                        width: "calc(100% - 4px)"
                    },
                    style1: {
                        marginInlineStart: 12
                    },
                    style2: {
                        marginInlineStart: 4
                    }
                },
                l = r.memo(function(e) {
                    let t = (0, o(109939).tz)(),
                        {
                            property: l,
                            store: a,
                            disabled: s,
                            canConfigureCollection: d,
                            onTab: p,
                            onUntab: c,
                            schema: u,
                            blockPropertyValueOverlayStore: y,
                            collectionStore: g,
                            pagePropertiesStore: m,
                            customization: h
                        } = e,
                        f = (0, o(533992).v3)(),
                        {
                            currentUser: v
                        } = f,
                        S = (0, o(713311).Ks)(),
                        P = u[l],
                        {
                            value: b
                        } = (0, o(815048).fJ)(o(864850).T.formulas),
                        w = (0, o(960253).I)(() => ({
                            propertyOuter: {
                                display: "flex",
                                alignItems: "left",
                                height: "100%",
                                flex: "auto",
                                flexDirection: "column",
                                minWidth: 0,
                                ...null != h && h.stackPropertyLabelAndValue ? {
                                    marginInlineStart: 0
                                } : {
                                    marginInlineStart: 4
                                }
                            },
                            property: {
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                flex: "auto",
                                minWidth: 0,
                                ...null != h && h.stackPropertyLabelAndValue ? {
                                    marginInlineStart: 0
                                } : {
                                    marginInlineStart: 4
                                },
                                position: "relative"
                            }
                        }), [null == h ? void 0 : h.stackPropertyLabelAndValue]),
                        x = (0, r.useCallback)(() => {
                            m.setState({ ...m.state,
                                hoveredProperty: e.property
                            })
                        }, [e.property, m]),
                        I = (0, r.useCallback)(() => {
                            m.setState({ ...m.state,
                                hoveredProperty: void 0
                            })
                        }, [m]),
                        A = (0, r.useCallback)(() => {
                            o(576186).ho({
                                environment: f,
                                blockPropertyValueOverlayStore: y,
                                store: a,
                                property: l,
                                surface: "page",
                                collectionContextStore: S
                            })
                        }, [f, y, a, l, S]),
                        _ = (0, o(682985).K8)(() => o(986939).A.isMobile && !s && (null == P ? void 0 : P.type) === "relation" && a.isDefined() && !o(175567).r({
                            block: a.getModel(),
                            property: l,
                            schema: u,
                            getRecordModel: a.getRecordModel,
                            userId: v.id,
                            userTimeZone: (0, o(714350).P)(),
                            intl: t,
                            experimentService: o(218744).default,
                            collectionFeatureGates: (0, o(457103).i)(),
                            formulasModule: b,
                            spaceIdCreator: f.idCreator.getSpaceIdCreatorSync(a.getModel().space_id),
                            getRelationEdgeList: (0, o(323082).Y)({
                                environment: f,
                                spaceId: a.getModel().space_id
                            })
                        }), [s, null == P ? void 0 : P.type, a, l, u, v.id, b, f, t]),
                        C = (0, o(551408).A)(),
                        k = (0, o(83208).X)("page_surface_block_property_router") ? o(625399).iy : o(625399).qm;
                    return (0, i.jsx)("div", {
                        role: "cell",
                        style: w.propertyOuter,
                        children: (0, i.jsxs)(o(611752).Ay, {
                            store: a,
                            analyticsName: "page_property",
                            children: [(0, i.jsxs)("div", {
                                style: w.property,
                                onMouseMove: x,
                                onMouseLeave: I,
                                children: [(0, i.jsx)(k, {
                                    store: a,
                                    property: l,
                                    locked: !d,
                                    disabled: s,
                                    surface: "page",
                                    onTab: p,
                                    onUntab: c,
                                    tableWrap: !1,
                                    blockPropertyValueOverlayStore: y,
                                    onOpenProperty: A,
                                    collectionStore: g
                                }), C && g ? (0, i.jsx)(o(56612).O, {
                                    rowStore: a,
                                    property: l,
                                    collectionStore: g,
                                    insetInlineStart: null != h && h.stackPropertyLabelAndValue ? 8 : 4
                                }) : null]
                            }, l), _ ? (0, i.jsx)(o(95582).A, {
                                focused: !1,
                                icon: (0, i.jsx)(o(16275).I, {
                                    icon: o(581923).plusIcon,
                                    colorVariant: "tertiary"
                                }),
                                buttonStyle: n.style0,
                                mobileIconStyle: n.style1,
                                textWrapperStyle: n.style2,
                                style: n.addPageButton,
                                title: (0, i.jsx)(o(109939).sA, {
                                    id: "pagePropertyRowValue.addRelationButtonMessage",
                                    defaultMessage: "Add page"
                                }),
                                onClick: A
                            }) : void 0]
                        })
                    })
                }),
                a = {
                    marginTop: 6
                },
                s = r.memo(function(e) {
                    let {
                        schema: t,
                        format: n,
                        store: s,
                        collectionStore: p,
                        disabled: c,
                        locked: u,
                        blockPropertyValueOverlayStore: y,
                        isInPeekRenderer: g,
                        property: m,
                        mergedProperties: h,
                        hideDragHandle: f,
                        disablePropertyName: v,
                        opacity: S,
                        pagePropertiesStore: P,
                        customization: b,
                        isCollectionViewLocked: w,
                        canConfigureCollection: x,
                        layoutModule: I,
                        showDescriptionIcon: A
                    } = e, _ = (0, r.useId)(), C = (0, o(533992).v3)(), k = (0, o(713311).Ks)(), j = (0, r.useCallback)(() => {
                        let e = y.state;
                        if (!e.isOpen) return;
                        let r = h.findIndex(t => t.property === e.property),
                            i = h.find((e, o) => o > r && d(t, e.property)) || h.find((e, o) => d(t, e.property));
                        i && o(374176).default.afterNextFlush(() => {
                            o(576186).ho({
                                environment: C,
                                blockPropertyValueOverlayStore: y,
                                store: s,
                                property: i.property,
                                surface: "page",
                                collectionContextStore: k
                            })
                        }), o(576186).VN({
                            environment: C,
                            blockPropertyValueOverlayStore: y
                        })
                    }, [y, k, C, h, t, s]), M = (0, r.useCallback)(() => {
                        let e = y.state;
                        if (!e.isOpen) return;
                        let r = h.findIndex(t => t.property === e.property),
                            i = o(381453).Uk(h, (e, o) => o < r && d(t, e.property)) || o(381453).Uk(h, (e, o) => d(t, e.property));
                        i && o(374176).default.afterNextFlush(() => {
                            o(576186).ho({
                                environment: C,
                                blockPropertyValueOverlayStore: y,
                                store: s,
                                property: i.property,
                                surface: "page",
                                collectionContextStore: k
                            })
                        }), o(576186).VN({
                            environment: C,
                            blockPropertyValueOverlayStore: y
                        })
                    }, [y, k, C, h, t, s]), V = (0, o(475717).l)(s), T = (0, o(682985).K8)(() => {
                        var e;
                        return (null == V || null == (e = V.getFormat()) ? void 0 : e.property_icons_visibility) === "hide"
                    }, [V]), B = !!(null == b ? void 0 : b.stackPropertyLabelAndValue), E = r.useRef(null), N = (0, o(978096).s)(E, 50), [O, R] = r.useState(0);
                    (0, r.useEffect)(() => {
                        var e;
                        R((null == N ? void 0 : N.width) || (null == (e = E.current) ? void 0 : e.offsetWidth) || 0)
                    }, [N]);
                    let {
                        isPropertyInPageDetails: L
                    } = (0, o(287753)._1)({
                        store: s,
                        propertyId: m
                    }), F = (0, o(973037).Ge)({
                        isMobile: o(986939).A.isMobile,
                        stackPropertyLabelAndValue: B,
                        isPropertyInPageDetails: L
                    }), K = (0, o(960253).I)(() => ({
                        container: {
                            display: "flex",
                            width: "100%",
                            position: "relative",
                            opacity: S ? ? 1,
                            ...null != b && b.stackPropertyLabelAndValue ? {
                                flexDirection: "column",
                                marginBottom: null != b && b.disableRowBottomMargin ? void 0 : 16
                            } : {
                                marginBottom: null != b && b.disableRowBottomMargin ? void 0 : 4
                            }
                        }
                    }), [null == b ? void 0 : b.disableRowBottomMargin, null == b ? void 0 : b.stackPropertyLabelAndValue, S]), D = (0, o(226142).a)(), z = "normalizedTitleWithIcon" === I.type && "hide" === I.propertyLabels, G = (0, r.useMemo)(() => ({
                        height: {
                            variant: null == b ? void 0 : b.heightVariant
                        },
                        width: (0, o(973037).aG)({
                            stackPropertyLabelAndValue: B
                        }),
                        size: "medium",
                        fontWeight: "regular"
                    }), [null == b ? void 0 : b.heightVariant, B]), W = u || w;
                    return (0, i.jsxs)("div", {
                        role: "row",
                        "aria-labelledby": _,
                        ref: E,
                        style: K.container,
                        children: [(0, i.jsx)(o(505580).U$, {
                            origin: E
                        }), (0, i.jsxs)(o(4458).fI, {
                            gap: 0,
                            alignItems: "center",
                            alignSelf: "flex-start",
                            flexShrink: (0, o(722371).O9)(F) ? 0 : void 0,
                            width: (0, o(722371).O9)(F) ? F : L ? "100%" : void 0,
                            children: [z ? void 0 : (0, i.jsx)(o(105876).I, {
                                schema: t,
                                format: n,
                                property: m,
                                collectionStore: p,
                                pagePropertiesStore: P,
                                disabled: !!(c || v),
                                locked: W,
                                canConfigureCollection: x,
                                isInPeekRenderer: g,
                                hideIcon: T,
                                hideDragHandle: f,
                                showDragHandleAsIcon: !W && !c,
                                propertyNameAriaId: _,
                                styleVariants: G,
                                blockStore: s,
                                layoutModule: I,
                                showDescriptionIcon: A
                            }), o(986939).A.isMobile || D ? void 0 : (0, i.jsx)(o(656915).L_, {
                                store: s,
                                propertyId: m,
                                style: L ? void 0 : {
                                    position: "absolute",
                                    alignSelf: "center",
                                    ...O ? {
                                        insetInlineStart: O + 4
                                    } : {
                                        insetInlineEnd: 0
                                    },
                                    top: 6
                                }
                            })]
                        }), (0, i.jsx)(l, {
                            schema: t,
                            property: m,
                            store: s,
                            collectionStore: p,
                            pagePropertiesStore: P,
                            disabled: c || u,
                            canConfigureCollection: x,
                            onTab: j,
                            onUntab: M,
                            blockPropertyValueOverlayStore: y,
                            customization: b
                        }), o(986939).A.isMobile ? (0, i.jsx)(o(656915).L_, {
                            store: s,
                            propertyId: m,
                            style: a
                        }) : void 0]
                    }, m)
                });

            function d(e, t) {
                return (0, o(793550).B2)(e[t])
            }

            function p(e) {
                let {
                    disabled: t,
                    locked: n,
                    collectionStore: l,
                    format: a,
                    mergedProperties: d,
                    propertyGroupId: p,
                    showHiddenProperties: c,
                    hideDragHandle: u,
                    pagePropertiesStore: y,
                    rowCustomization: g,
                    disableLastRowBottomPadding: m,
                    blockPropertyValueOverlayStore: h,
                    isInPeekRenderer: f,
                    schema: v,
                    store: S,
                    layoutModule: P,
                    showDescriptionIcons: b
                } = e, w = (0, o(109939).tz)(), x = (0, o(92248).aN)(l), I = (0, o(92248).Od)({
                    collectionStore: l,
                    format: a
                }), A = (0, o(92248).U$)({
                    collectionStore: l,
                    propertyGroupId: p
                }), _ = w.formatMessage({
                    id: "pageProperties.tableLabel",
                    defaultMessage: "Page properties"
                }), C = function(e) {
                    let {
                        properties: t,
                        showHiddenProperties: o
                    } = e;
                    return (0, r.useMemo)(() => {
                        let e = [],
                            r = 0;
                        return t.forEach(t => {
                            if ("section" === t.visibility) return void e.push(t.property);
                            if (o) {
                                e.splice(r, 0, t.property), r += 1;
                                return
                            }
                            "hide" !== t.visibility && ("hide_if_empty" !== t.visibility || t.hasValue) ? (e.splice(r, 0, t.property), r += 1) : e.push(t.property)
                        }), {
                            all: e,
                            visible: e.slice(0, r)
                        }
                    }, [t, o])
                }({
                    properties: d,
                    showHiddenProperties: c
                }).visible, k = (0, o(682985).K8)(() => (0, o(260585).r)(l), [l]), j = (0, r.useMemo)(() => ({ ...g,
                    ...m && {
                        disableRowBottomMargin: !0
                    }
                }), [m, g]);
                return t || n || !x || u ? (0, i.jsx)("div", {
                    role: "table",
                    "aria-label": _,
                    style: o(66467).Bb,
                    children: C.map((e, o) => {
                        let r = o === C.length - 1 ? j : g;
                        return (0, i.jsx)("div", {
                            children: (0, i.jsx)(s, {
                                schema: v,
                                format: a,
                                store: S,
                                collectionStore: l,
                                disabled: t,
                                locked: n,
                                blockPropertyValueOverlayStore: h,
                                isInPeekRenderer: f,
                                property: e,
                                mergedProperties: d,
                                pagePropertiesStore: y,
                                customization: r,
                                isCollectionViewLocked: k,
                                canConfigureCollection: x,
                                layoutModule: P,
                                showDescriptionIcon: b
                            })
                        }, e)
                    })
                }) : (0, i.jsx)(o(66467).Ay, {
                    role: "table",
                    "aria-label": _,
                    direction: "vertical",
                    keys: C,
                    renderKey: (e, o) => {
                        let r = o === C.length - 1 ? j : g;
                        return (0, i.jsx)(s, {
                            schema: v,
                            format: a,
                            store: S,
                            collectionStore: l,
                            disabled: t,
                            locked: n,
                            blockPropertyValueOverlayStore: h,
                            isInPeekRenderer: f,
                            mergedProperties: d,
                            hideDragHandle: u,
                            customization: r,
                            property: e,
                            pagePropertiesStore: y,
                            isCollectionViewLocked: k,
                            canConfigureCollection: x,
                            layoutModule: P,
                            showDescriptionIcon: b
                        })
                    },
                    onDrop: p ? A : I
                })
            }
            let c = {
                    position: "relative"
                },
                u = {
                    position: "absolute",
                    insetInlineStart: "calc(100% + 10px)",
                    top: "50%",
                    transform: "translateY(-50%)"
                };

            function y(e) {
                let {
                    store: t,
                    collectionStore: n,
                    pagePropertiesStore: l,
                    blockPropertyValueOverlayStore: a,
                    compactProperties: s,
                    disabled: d,
                    locked: p,
                    format: y,
                    hiddenProperties: m,
                    rowLength: f,
                    variant: v,
                    pageViewBlockContext: S,
                    layoutModule: P,
                    showDescriptionIcons: b
                } = e, w = (0, o(682985).K8)(() => n.getSchema(), [n]), [x, I] = (0, r.useState)(!1), A = (0, o(92248).aN)(n), _ = (0, o(682985).K8)(() => o(708929).Uv.getMode(t), [t]), C = (0, o(533992).Y0)(), {
                    isFirefox: k
                } = C, j = (0, o(682985).uB)(void 0, o(510969).A), M = (0, o(682985).K8)(() => n.getLayoutStore(), [n]), [V, T] = (0, r.useState)(!1), [B, E, N] = (0, o(848135).B)(), O = (0, o(978096).s)(N, 100), R = ((null == O ? void 0 : O.width) || 0) >= 408 && !C.isPhone, L = (0, o(682985).K8)(() => o(82702).A.getPanelState("mainPage").isOpen, []), F = !!(0, r.useContext)(o(613789).sf), K = (0, r.useMemo)(() => !!P && "propertyLabels" in P && "hide" === P.propertyLabels, [P]), D = (0, o(682985).K8)(() => {
                    if (F) return !1;
                    let e = null == M ? void 0 : M.getModules();
                    return !!e && "pinned" === v && 0 !== e.page_details.length
                }, [F, M, v]), z = R && L && !E ? "hidden" : "visible", G = (0, o(960253).I)(() => {
                    let e = {
                        display: "grid",
                        gridTemplateColumns: `repeat(${s.length>f?f:"auto-fit"}, minmax(80px, max-content))`,
                        columnGap: 4,
                        rowGap: 4
                    };
                    return {
                        container: { ...D && R ? {
                                display: "flex",
                                flexDirection: "row",
                                gap: 8
                            } : void 0,
                            ...D && !R ? {
                                display: "flex",
                                flexDirection: "column",
                                gap: 6
                            } : void 0
                        },
                        row: { ...K ? {
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginTop: 15
                            } : "pinned" === v ? {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(80px, max-content))",
                                columnGap: 8,
                                rowGap: 8,
                                marginTop: 10
                            } : e,
                            ...D ? {
                                maxWidth: "100%",
                                ...k && {
                                    flexGrow: 1
                                }
                            } : void 0
                        },
                        propertyRowWrapper: { ..."pinned" === v ? {
                                display: "flex",
                                flexDirection: "column"
                            } : void 0
                        },
                        infoPanelToggleButtonContainer: {
                            display: "flex",
                            alignItems: "end",
                            flexShrink: 0,
                            visibility: z
                        }
                    }
                }, [s.length, f, D, R, K, v, k, z]), W = (0, r.useCallback)(() => {
                    I(!0)
                }, []), U = (0, r.useCallback)(() => {
                    I(!1)
                }, []), H = (0, o(226142).a)(), $ = (0, o(682985).K8)(() => {
                    var e;
                    return (null == M || null == (e = M.getFormat()) ? void 0 : e.property_icons_visibility) === "hide"
                }, [M]), q = (0, r.useMemo)(() => (0, i.jsx)(h, {
                    layoutModule: P,
                    onClose: U,
                    hiddenProperties: m,
                    canConfigureCollection: A && "suggest" !== _,
                    store: t,
                    collectionStore: n,
                    blockPropertyValueOverlayStore: a,
                    disabled: d,
                    locked: p,
                    isInPeekRenderer: S === o(166654).R.PeekView,
                    format: y,
                    buttonPopupStore: j,
                    pagePropertiesStore: l,
                    hideDragHandle: "pinned" === v
                }), [a, j, A, n, d, _, y, U, m, p, l, S, t, v, P]);
                return r.useEffect(() => {
                    T(!0)
                }, []), (0, i.jsxs)("div", {
                    style: G.container,
                    ref: B,
                    children: [(0, i.jsx)("div", {
                        style: G.row,
                        onMouseEnter: W,
                        onMouseLeave: U,
                        children: 0 === s.length ? q : s.map((r, m) => {
                            let h = m === s.length - 1;
                            return (0, i.jsxs)("div", {
                                style: { ...G.propertyRowWrapper,
                                    ...h ? c : void 0
                                },
                                children: [K ? void 0 : (0, i.jsxs)(o(4458).fI, {
                                    gap: 0,
                                    children: [(0, i.jsx)(o(105876).I, {
                                        schema: w,
                                        format: y,
                                        hideDragHandle: !0,
                                        property: r.property,
                                        blockStore: t,
                                        collectionStore: n,
                                        pagePropertiesStore: l,
                                        disabled: d,
                                        locked: p,
                                        canConfigureCollection: A && "suggest" !== _,
                                        isInPeekRenderer: S === o(166654).R.PeekView,
                                        styleVariants: g,
                                        hideDuplicatePropertyOption: !!M,
                                        layoutModule: e.layoutModule,
                                        hideIcon: $,
                                        showDescriptionIcon: b
                                    }), H ? void 0 : (0, i.jsx)(o(656915).L_, {
                                        store: t,
                                        propertyId: r.property
                                    })]
                                }), (0, i.jsx)(o(611752).Ay, {
                                    store: t,
                                    analyticsName: "page_property",
                                    children: (0, i.jsx)(o(625399).qm, {
                                        store: t,
                                        collectionStore: n,
                                        blockPropertyValueOverlayStore: a,
                                        property: r.property,
                                        surface: K ? "mini" : "compact_page",
                                        disabled: d,
                                        locked: p,
                                        tableWrap: !1
                                    })
                                }), h && "pinned" !== v ? (0, i.jsx)(o(654979).A, {
                                    visible: x || o(986939).A.isMobile,
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        marginInlineStart: "auto"
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    style: u,
                                    children: q
                                }) : void 0]
                            }, r.property)
                        })
                    }), D ? (0, i.jsx)("div", {
                        style: G.infoPanelToggleButtonContainer,
                        children: (0, i.jsx)(o(22521).dI, {
                            collectionStore: n,
                            variant: R ? "compact" : "full",
                            pageViewBlockContext: S
                        })
                    }) : void 0]
                })
            }
            let g = {
                    size: "small",
                    fontWeight: "medium",
                    width: {
                        variant: "hug-content"
                    },
                    height: {
                        variant: "small"
                    }
                },
                m = {
                    width: 500
                },
                h = r.memo(function(e) {
                    let {
                        hiddenProperties: t,
                        canConfigureCollection: r,
                        collectionStore: n,
                        isInPeekRenderer: l,
                        buttonPopupStore: a,
                        hideDragHandle: s,
                        overflowButtonWrapperStyle: d,
                        overflowButtonStyle: c,
                        pagePropertiesStore: u,
                        layoutModule: y
                    } = e, g = (0, o(682985).K8)(() => n.getSchema(), [n]), h = (0, o(960253).I)(() => ({
                        pagePropertiesOverflow: {
                            width: "100%",
                            fontSize: 14,
                            padding: s ? "10px" : "10px 10px 10px 28px",
                            maxHeight: 500,
                            overflowY: "scroll"
                        },
                        overflowButtonWrapper: {
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: 8,
                            ...d
                        },
                        overflowButton: {
                            display: "flex",
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            justifyContent: "center",
                            alignItems: "center",
                            ...c
                        }
                    }), [s, d, c]);
                    return t.length ? (0, i.jsx)(o(656252).A, {
                        onClose: e.onClose,
                        popupWrapStyle: m,
                        buttonPopupStore: a,
                        popupType: o(986939).A.isMobile ? o(182718).nl.SlideUp : o(182718).nl.Popup,
                        content: () => (0, i.jsx)(o(519451).A, {
                            debugName: "PagePropertiesCompact",
                            capture: !0,
                            children: (0, i.jsxs)("div", {
                                style: h.pagePropertiesOverflow,
                                children: [(0, i.jsx)(p, {
                                    showHiddenProperties: !0,
                                    schema: g,
                                    mergedProperties: t,
                                    format: e.format,
                                    store: e.store,
                                    collectionStore: e.collectionStore,
                                    disabled: e.disabled,
                                    locked: e.locked,
                                    blockPropertyValueOverlayStore: e.blockPropertyValueOverlayStore,
                                    isInPeekRenderer: e.isInPeekRenderer,
                                    hideDragHandle: s,
                                    pagePropertiesStore: u,
                                    layoutModule: y
                                }), r ? (0, i.jsx)(o(634435).X, {
                                    collectionStore: n,
                                    pagePropertiesStore: u,
                                    isInPeekRenderer: l
                                }) : void 0]
                            })
                        }),
                        children: e => (0, i.jsx)("div", {
                            style: h.overflowButtonWrapper,
                            children: (0, i.jsx)(o(51831).m, {
                                content: () => (0, i.jsx)(o(109939).sA, {
                                    defaultMessage: "{num, plural, one {1 more property} other {{num} more properties}}",
                                    id: "database.pageProperties.compact.showMoreTooltip",
                                    values: {
                                        num: t.length
                                    }
                                }),
                                placement: "bottom",
                                children: t => (0, i.jsx)(o(64960).Ay, {
                                    style: h.overflowButton,
                                    ...(0, o(63390).A)(e, t),
                                    children: (0, i.jsx)(o(16275).I, {
                                        icon: o(397900).ellipsisIcon,
                                        colorVariant: "secondary"
                                    })
                                })
                            })
                        })
                    }) : r ? (0, i.jsx)("div", {
                        style: h.overflowButtonWrapper,
                        children: (0, i.jsx)(o(51831).m, {
                            content: () => (0, i.jsx)(o(109939).sA, {
                                defaultMessage: "Add a property",
                                id: "database.pageProperties.compact.addPropertyButtonTitle"
                            }),
                            placement: "bottom",
                            children: t => (0, i.jsx)(o(634435).X, { ...t,
                                buttonPopupStore: a,
                                collectionStore: n,
                                isInPeekRenderer: l,
                                pagePropertiesStore: u,
                                onClose: e.onClose,
                                hideLabel: !0,
                                style: h.overflowButton
                            })
                        })
                    }) : null
                }),
                f = {
                    width: "100%",
                    fontSize: 14
                },
                v = {
                    marginTop: 8
                },
                S = {
                    paddingBottom: 8
                },
                P = {
                    paddingTop: 8
                };

            function b(e) {
                let t, {
                        collectionStore: n,
                        schema: l,
                        store: a,
                        format: s,
                        propertyIds: d,
                        propertyGroupId: c,
                        variant: u,
                        customization: g,
                        pagePropertiesStore: m,
                        pageViewBlockContext: h,
                        blockPropertyValueOverlayStore: b,
                        layoutModule: w,
                        disabled: x,
                        locked: I,
                        showDescriptionIcons: A
                    } = e,
                    [_, C] = (0, o(771869).z)(),
                    k = (0, o(682985).uB)(void 0, o(184332).A),
                    j = (0, o(533992).Y0)(),
                    M = (0, r.useCallback)(() => {
                        k.setState({ ...k.state,
                            mouseEntered: !0
                        })
                    }, [k]),
                    V = (0, r.useCallback)(() => {
                        k.setState({ ...k.state,
                            mouseEntered: !1
                        })
                    }, [k]),
                    T = (0, o(682985).K8)(() => "pinned" === u || !!a.isAssociatedCollectionAPageTree(), [a, u]),
                    B = (0, o(682985).K8)(() => {
                        var e;
                        return null == (e = n.getLayoutStore()) ? void 0 : e.getModules()
                    }, [n]),
                    E = (0, o(92248).z7)({
                        store: a,
                        format: s,
                        schema: l,
                        collectionStore: n,
                        propertyIds: d,
                        propertyGroupId: c
                    });
                g && (E = function(e, t, r, i, n) {
                    let {
                        hideEmptyProperties: l,
                        neverShowEmptyPropertiesIfMoreThanNProperties: a,
                        neverShowNotionSystemProperties: s,
                        sortNonEmptyPropertiesFirst: d,
                        neverShowPropertiesElsewhereInLayout: p,
                        propertyIdsToExclude: c
                    } = t;
                    if (l && (e = e.map(e => ({ ...e,
                            visibility: e.hasValue ? e.visibility : "hide"
                        }))), p && r) {
                        let t = new Set((0, o(377666).q)({
                            modulesByArea: r,
                            collectionSchema: i,
                            collectionFormat: n
                        }));
                        e = e.filter(e => !t.has(e.property))
                    }
                    return s && (e = e.filter(e => !(0, o(511791).TV)(e.property) && ("show" === e.visibility || !e.property.startsWith("notion://")))), void 0 !== a && e.length > a && (e = e.filter(e => e.hasValue)), c && (e = e.filter(e => !c.includes(e.property))), d && (e = o(381453).Ul(e, e => !e.hasValue)), e
                }(E, g, B, l, s));
                let N = (0, o(682985).K8)(() => m.state.forceShowProperties, [m]),
                    [O, R] = (0, r.useMemo)(() => {
                        if ((0, o(627179).pN)(u)) return o(381453).jB(E, e => {
                            var t, o;
                            return !!(null == (t = l[e.property]) ? void 0 : t.type) && "section" !== (o = e).visibility && "hide" !== o.visibility && ("hide_if_empty" !== o.visibility || !!o.hasValue)
                        });
                        if ("pinned" === u) {
                            let e = Object.fromEntries(E.map(e => [e.property, e]));
                            if (!d) return [
                                [],
                                []
                            ];
                            let t = d.map(t => {
                                var o;
                                let r = l[t];
                                if (r) return {
                                    property: t,
                                    visibility: "show",
                                    hasValue: (null == (o = e[t]) ? void 0 : o.hasValue) ? ? !1,
                                    name: r.name
                                }
                            }).filter(o(722371).O9);
                            return [t.slice(0, o(574972).U), t.slice(o(574972).U)]
                        }(0, o(722371).HB)(u)
                    }, [E, d, l, u]),
                    L = (0, r.useMemo)(() => T ? O.concat(R) : E, [T, O, R, E]),
                    {
                        paddingLeft: F,
                        paddingRight: K
                    } = e,
                    D = w && "normalizedTitleWithIcon" === w.type && "hide" === w.propertyLabels,
                    z = 130 * Math.min(5, O.length),
                    G = !D && ("pinned" === u ? j.isPhone || C > 0 && C < 408 : C > 0 && C < z);
                if (null != g && g.emptyState && 0 === O.length && 0 === R.length) return g.emptyState;
                if (null != g && g.dontRenderIfNoPropertiesDefaultShown && 0 === O.length) return null;
                if (T && !G) t = (0, i.jsx)(y, {
                    store: a,
                    collectionStore: n,
                    pagePropertiesStore: m,
                    blockPropertyValueOverlayStore: b,
                    compactProperties: O,
                    hiddenProperties: R,
                    disabled: e.disabled,
                    locked: e.locked,
                    format: s,
                    rowLength: 5,
                    variant: u,
                    layoutModule: w,
                    pageViewBlockContext: h,
                    showDescriptionIcons: A
                });
                else {
                    let r = {
                            stackPropertyLabelAndValue: null == g ? void 0 : g.stackPropertyLabelAndValue,
                            heightVariant: null != g && g.stackPropertyLabelAndValue || T && !G ? "small" : "medium",
                            hideAddPropertyButton: null == g ? void 0 : g.hideAddPropertyButton
                        },
                        d = h === o(166654).R.PeekView;
                    t = (0, i.jsxs)("div", {
                        style: { ...null != g && g.disableContainerPadding ? {} : S,
                            ...G && !(null != g && g.disableTopPadding) ? P : {}
                        },
                        children: [(0, i.jsx)(p, {
                            schema: l,
                            format: s,
                            store: a,
                            disabled: x,
                            locked: I,
                            collectionStore: n,
                            propertyGroupId: c,
                            pagePropertiesStore: m,
                            hideDragHandle: "pinned" === u,
                            showHiddenProperties: N,
                            mergedProperties: L,
                            rowCustomization: r,
                            disableLastRowBottomPadding: null == g ? void 0 : g.disableLastRowBottomPadding,
                            isInPeekRenderer: d,
                            layoutModule: w,
                            blockPropertyValueOverlayStore: b,
                            showDescriptionIcons: A
                        }), "pinned" !== u ? (0, i.jsx)(o(634435).A, {
                            collectionStore: n,
                            propertyGroupId: c,
                            customization: r,
                            disabled: e.disabled,
                            locked: e.locked,
                            pagePropertiesStore: m,
                            isInPeekRenderer: d,
                            mergedProperties: L,
                            wrapperStyle: null != g && g.stackPropertyLabelAndValue ? v : void 0
                        }) : void 0]
                    })
                }
                return (0, i.jsx)("div", {
                    style: f,
                    onMouseEnter: M,
                    onMouseLeave: V,
                    ref: _,
                    children: (0, i.jsxs)("div", {
                        style: {
                            width: "100%",
                            maxWidth: "100%",
                            padding: T || null != g && g.disableContainerPadding ? void 0 : "16px 0 8px 0",
                            margin: "0 auto",
                            ...F ? {
                                paddingInlineStart: F
                            } : {},
                            ...K ? {
                                paddingInlineEnd: K
                            } : {}
                        },
                        children: [t, (0, i.jsx)(o(712155).G0, {
                            blockId: a.id,
                            collectionStore: n
                        })]
                    })
                })
            }
            let w = {
                cursor: "default"
            };

            function x(e) {
                let {
                    store: t,
                    context: n,
                    disabled: l,
                    wrapper: a,
                    forceGroupsOpenOrClosed: s,
                    customization: d,
                    moduleId: p,
                    layoutModule: c
                } = e, u = (0, o(682985).K8)(() => t.getAssociatedCollectionStore(), [t]), y = (0, o(682985).K8)(() => (null == u ? void 0 : u.getNormalizedPropertyGroups({
                    publicPageDataFallbackEnabled: !0
                })) || [], [u]), g = (0, o(682985).K8)(() => {
                    if (t.isCollectionViewPageWithContent() || !u) return {
                        type: "hidden"
                    };
                    let e = (0, o(335818).gV)(t);
                    return e ? {
                        type: "visible",
                        store: t,
                        format: e,
                        collectionStore: u
                    } : {
                        type: "hidden"
                    }
                }, [t, u]);
                return "hidden" === g.type ? null : (a || (e => (0, i.jsx)(o(394112).vV, {
                    className: "layout-content",
                    children: e
                })))((0, i.jsx)(o(394112).vV, {
                    children: (0, i.jsx)(o(385827).s, {
                        allowSelectionWithin: !0,
                        children: (0, i.jsxs)("div", {
                            style: w,
                            children: [y.map((e, t) => (0, r.createElement)(I, { ...g,
                                key: e.id,
                                context: n,
                                disabled: l,
                                propertyGroup: e,
                                forceGroupOpenOrClosed: s,
                                customization: d,
                                isLast: t === y.length - 1,
                                moduleId: p,
                                layoutModule: c
                            })), 0 === y.length ? (0, i.jsx)(I, { ...g,
                                context: n,
                                disabled: l,
                                propertyGroup: "virtualPropertiesGroup",
                                forceGroupOpenOrClosed: s,
                                customization: d,
                                isLast: !0,
                                moduleId: p,
                                layoutModule: c
                            }) : void 0]
                        })
                    })
                }))
            }

            function I(e) {
                let {
                    store: t,
                    context: n,
                    disabled: l,
                    propertyGroup: a,
                    format: s,
                    collectionStore: d,
                    forceGroupOpenOrClosed: p,
                    customization: c,
                    isLast: u,
                    moduleId: y,
                    layoutModule: g
                } = e, m = (0, o(682985).K8)(() => "virtualPropertiesGroup" === a ? {
                    idForRememberingCollapsedState: `${y}_defaultGroup`,
                    groupIdForSavingPropertyToGroup: void 0,
                    title: (0, i.jsx)(o(109939).sA, {
                        id: "collapsiblePropertyGroups.defaultGroupTitle",
                        defaultMessage: "Properties"
                    })
                } : {
                    idForRememberingCollapsedState: a.id,
                    groupIdForSavingPropertyToGroup: a.id,
                    title: a.title
                }, [y, a]), h = (0, o(682985).K8)(() => void 0 !== p ? "open" === p : o(424007).A.isPropertyGroupExpanded({
                    groupId: m.idForRememberingCollapsedState
                }), [p, m.idForRememberingCollapsedState]), f = n === o(166654).R.PeekView, v = (0, o(682985).K8)(() => (0, o(444285).S)(t), [t]), S = (0, o(682985).K8)(() => d.getSchema(), [d]), P = (0, o(682985).K8)(() => {
                    var e, r;
                    return t.id === (null == (e = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id) ? o(120025).Ep.getNewEditorPagePropertiesStore(m.idForRememberingCollapsedState) : t.id === (null == (r = o(475097).default.peekTargetStore.state) ? void 0 : r.id) ? o(120025).A6.getNewEditorPagePropertiesStore(m.idForRememberingCollapsedState) : new(o(120025)).YB
                }, [m.idForRememberingCollapsedState, t.id]), w = (0, r.useCallback)(() => {
                    o(424007).A.togglePropertyGroupExpanded({
                        groupId: m.idForRememberingCollapsedState
                    })
                }, [m.idForRememberingCollapsedState]), x = (0, o(960253).I)(() => ({
                    groupContent: {
                        paddingInlineStart: 0,
                        paddingBottom: u ? void 0 : null != c && c.stackPropertyLabelAndValue ? 28 : 20
                    }
                }), [null == c ? void 0 : c.stackPropertyLabelAndValue, u]);
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(_, {
                        onClick: w,
                        isExpanded: h,
                        customization: c,
                        children: m.title
                    }), h ? (0, i.jsx)("div", {
                        style: x.groupContent,
                        children: (0, i.jsx)(b, {
                            propertyGroupId: m.groupIdForSavingPropertyToGroup,
                            pagePropertiesStore: P,
                            schema: S,
                            format: s,
                            store: t,
                            collectionStore: d,
                            disabled: l,
                            locked: v,
                            blockPropertyValueOverlayStore: f ? o(129894).A : o(363746).A,
                            pageViewBlockContext: n,
                            customization: { ...c,
                                neverShowPropertiesElsewhereInLayout: !0
                            },
                            layoutModule: g
                        })
                    }) : void 0]
                })
            }
            let A = {
                label: {
                    fontSize: 13,
                    color: o(632079).Tj.text.secondary,
                    fontWeight: o(699422).Wy.medium,
                    ...o(699422).RC,
                    height: 20
                }
            };

            function _(e) {
                let t, {
                        children: r,
                        isExpanded: n,
                        customization: l,
                        onClick: a
                    } = e,
                    s = (0, o(109939).tz)(),
                    d = (0, o(533992).Y0)(),
                    p = !!(null == l ? void 0 : l.stackPropertyLabelAndValue);
                t = n && p ? d.isTablet ? 0 : o(986939).A.isMobile ? 2 : 8 : 0;
                let c = (0, o(960253).I)(() => ({
                        container: {
                            height: 34,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            gap: 6,
                            marginBottom: t,
                            borderRadius: 6
                        },
                        icon: {
                            transition: "transform .2s ease",
                            transform: n ? "rotate(0deg)" : "rotate(calc(var(--direction, 1) * -90deg))"
                        }
                    }), [t, n]),
                    u = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            style: A.label,
                            children: r
                        }), (0, i.jsx)(o(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            children: (0, i.jsx)("span", {
                                style: c.icon,
                                children: (0, i.jsx)(o(16275).I, {
                                    icon: o(469102).arrowChevronSingleDownFillSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })
                            })
                        })]
                    });
                return n ? (0, i.jsx)(o(64960).Ay, {
                    onClick: a,
                    style: c.container,
                    children: u
                }) : (0, i.jsx)(o(64960).Ay, {
                    style: c.container,
                    onClick: a,
                    ariaLabel: s.formatMessage(C.showProperties),
                    children: u
                })
            }
            let C = (0, o(109939).YK)({
                showProperties: {
                    id: "CollapsiblePropertyGroups.showProperties",
                    defaultMessage: "Show properties in section"
                }
            });

            function k(e) {
                let {
                    store: t,
                    format: r,
                    collectionStore: n,
                    disabled: l,
                    blockPropertyValueOverlayStore: a,
                    variant: s,
                    propertyIds: d,
                    customization: p,
                    pagePropertiesStore: c,
                    pageViewBlockContext: u,
                    layoutModule: y,
                    showDescriptionIcons: g
                } = e, m = (0, o(682985).K8)(() => n.getSchema(), [n]), h = (0, o(682985).K8)(() => (0, o(444285).S)(t), [t]);
                return (0, i.jsx)(b, {
                    store: t,
                    collectionStore: n,
                    schema: m,
                    format: r,
                    disabled: l,
                    locked: h,
                    blockPropertyValueOverlayStore: a,
                    pageViewBlockContext: u,
                    propertyIds: d,
                    variant: s,
                    customization: p,
                    pagePropertiesStore: c,
                    layoutModule: y,
                    showDescriptionIcons: g
                })
            }
            let j = {
                    id: "properties",
                    type: "properties"
                },
                M = {
                    marginInlineStart: 6
                };

            function V(e) {
                let {
                    store: t,
                    context: r,
                    disabled: n,
                    variant: l,
                    layoutModule: a = j,
                    propertyIds: s,
                    customization: d,
                    wrapper: p,
                    showDefaultTitle: c,
                    shownAsPopup: u,
                    showDescriptionIcons: y
                } = e, g = (0, o(747193).b)(t, n), m = (0, o(682985).K8)(() => o(708929).Uv.getMode(t), [t]), {
                    isMainEditor: h,
                    isPeekEditor: f
                } = (0, o(682985).K8)(() => {
                    var e, r;
                    let i = !!(o(475097).default.isSidePeekOpen() && t.id === (null == (e = o(475097).default.peekTargetStore.state) ? void 0 : e.id));
                    return {
                        isMainEditor: !!(!i && t.id === (null == (r = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : r.id)),
                        isPeekEditor: i
                    }
                }, [t]), v = (0, o(682985).K8)(() => t.getAssociatedCollectionStore(), [t]), S = (0, o(682985).K8)(() => {
                    if (!v || t.isCollectionViewPageWithContent()) return {
                        type: "hidden"
                    };
                    let e = (0, o(335818).gV)(t);
                    return e ? {
                        type: "visible",
                        store: t,
                        format: e,
                        collectionStore: v
                    } : {
                        type: "hidden"
                    }
                }, [v, t]), P = (0, o(455379).p)({
                    collectionStore: v,
                    layoutModule: a
                }) && a && !(null != d && d.doNotShowPropertyGroups), b = (0, o(682985).K8)(() => {
                    if (!u) {
                        if (h) return o(120025).Ep.getNewEditorPagePropertiesStore();
                        if (f) return o(120025).A6.getNewEditorPagePropertiesStore()
                    }
                    return new(o(120025)).YB
                }, [u, h, f]);
                if ("hidden" === S.type) return null;
                let w = r === o(166654).R.PeekView,
                    I = P && a ? (0, i.jsx)(x, { ...e,
                        layoutModule: a,
                        wrapper: void 0,
                        moduleId: a.id
                    }) : (0, i.jsxs)(o(4458).VP, {
                        gap: 8,
                        children: [c ? (0, i.jsx)(o(837371).j, {
                            style: M,
                            children: (0, i.jsx)(o(109939).sA, {
                                id: "pageLayout.propertiesModule.title",
                                defaultMessage: "Properties"
                            })
                        }) : void 0, (0, i.jsx)(o(385827).s, {
                            allowSelectionWithin: !0,
                            children: (0, i.jsx)(k, { ...S,
                                disabled: !g || "suggest" === m,
                                pageViewBlockContext: r,
                                blockPropertyValueOverlayStore: w ? o(129894).A : o(363746).A,
                                propertyIds: s,
                                variant: l,
                                layoutModule: a,
                                customization: d,
                                pagePropertiesStore: b,
                                showDescriptionIcons: y
                            })
                        })]
                    });
                return p((0, i.jsx)(i.Fragment, {
                    children: I
                }))
            }
        },
        289970: (e, t, o) => {
            var r;
            o.d(t, {
                $w: () => s,
                M7: () => i,
                Qd: () => a,
                g1: () => n,
                iw: () => l
            });
            let i = ((r = {})[r.SelectedPage = 0] = "SelectedPage", r[r.SearchPage = 1] = "SearchPage", r[r.NewPage = 2] = "NewPage", r),
                n = 4,
                l = 32,
                a = 560,
                s = 20
        },
        394112: (e, t, o) => {
            o.d(t, {
                A5: () => d,
                MR: () => m,
                Mx: () => l,
                Pb: () => c,
                WL: () => g,
                hg: () => a,
                kZ: () => y,
                pv: () => s,
                vV: () => p
            }), o(581454);
            var r = o.n(o(32485)),
                i = o(296540),
                n = o(474848);
            let l = i.forwardRef(function(e, t) {
                    let {
                        children: i,
                        type: l,
                        gap: a,
                        withBottomPadding: s,
                        style: d,
                        onMouseDown: p,
                        onClick: c,
                        onDoubleClick: u,
                        onContextMenu: y,
                        suppressMargin: g
                    } = e, m = (0, o(2919).n)(l), h = (0, o(219279).aH)({
                        gateName: "content_reskin_v2_wider_page",
                        enableEventTrailLogging: !0
                    }) && (0, o(643160).sR)(), f = (0, o(682985).K8)(() => o(82702).A.getPanelState("peek").isOpen && "static_sidebar" === o(82702).A.getPanelState("peek").displayStyle, []);
                    return (0, n.jsx)(o(28111).A, {
                        name: "PageLayout",
                        children: (0, n.jsx)("div", {
                            className: r()("layout", {
                                "layout-reskin-wider": h,
                                "layout-wide": "wide" === l,
                                "layout-wide-right-margin-expanded": "wide-right-margin-expanded" === l,
                                "layout-side-peek": "side-peek" === l,
                                "layout-center-peek": "center-peek" === l && !f,
                                "layout-center-peek-with-layout-panel": "center-peek" === l && f,
                                "layout-home": "home" === l,
                                "layout-meet": "meet" === l,
                                "layout-home-phone": "home-phone" === l,
                                "layout-home-redesign-desktop": "home-redesign-desktop" === l,
                                "layout-form": "form" === l,
                                "layout-form-viewer": "form-viewer" === l,
                                "layout-form-viewer-embed": "form-viewer-embed" === l,
                                "layout-phone": "phone" === l,
                                "layout-tablet": "tablet" === l,
                                "layout-template-preview": "template-preview" === l,
                                "layout-chat": "chat" === l,
                                "layout-layout-editor": "layout-editor" === l,
                                "layout-layout-editor-wide": "layout-editor-wide" === l,
                                "layout-layout-editor-narrow": "layout-editor-narrow" === l,
                                "layout-marketplace": "marketplace" === l,
                                "layout-marketplace-mobile": "marketplace-mobile" === l,
                                "layout-team-home": "team-home" === l,
                                "layout-team-home-mobile": "team-home-mobile" === l,
                                "layout-create-post": "create-post" === l,
                                "layout-fullscreen-ai": "fullscreen-ai" === l,
                                "layout-narrowscreen-ai": "narrowscreen-ai" === l,
                                "layout-person-profile": "person-profile" === l,
                                "layout-suppress-margin": g
                            }),
                            style: {
                                paddingBottom: s ? m : void 0,
                                gap: a,
                                ...d
                            },
                            ref: t,
                            onMouseDown: p,
                            onClick: c,
                            onDoubleClick: u,
                            onContextMenu: y,
                            children: i
                        })
                    })
                }),
                a = "layout-content",
                s = "layout-full",
                d = "hide-scrollbar",
                p = i.forwardRef(function(e, t) {
                    return (0, n.jsx)(o(28111).A, {
                        name: "PageLayoutContent",
                        children: (0, n.jsx)("div", {
                            className: r()(a, e.className),
                            style: e.style,
                            ref: t,
                            children: e.children
                        })
                    })
                });

            function c(e) {
                return (0, n.jsx)(o(28111).A, {
                    name: "PageLayoutFull",
                    children: (0, n.jsx)("div", {
                        className: s,
                        style: e.style,
                        children: e.children
                    })
                })
            }
            let u = {
                pointerEvents: "none"
            };

            function y(e) {
                return (0, n.jsx)(o(28111).A, {
                    name: "PageLayoutMarginRight",
                    children: (0, n.jsx)("div", {
                        className: "layout-margin-right",
                        style: { ...e.style,
                            ...u
                        },
                        children: e.children
                    })
                })
            }

            function g(e) {
                return (0, n.jsx)(o(28111).A, {
                    name: "PageLayoutColumn",
                    children: (0, n.jsx)("div", {
                        className: r()("layout-column", e.className),
                        style: { ...{
                                "--min-column-width": e.minWidth ? `${e.minWidth}px` : "100%"
                            },
                            ...e.style
                        },
                        children: e.children
                    })
                })
            }

            function m(e) {
                return (0, n.jsx)(o(28111).A, {
                    name: "PageLayoutTwoColumn",
                    children: (0, n.jsxs)(g, {
                        minWidth: e.minWidth,
                        className: e.className,
                        style: e.style,
                        children: [e.left, e.right]
                    })
                })
            }
            o(699422).Wy.semibold, o(632079).Tj.buttonBlueFocusRing
        },
        424007: (e, t, o) => {
            o.d(t, {
                A: () => a,
                u: () => n
            });
            var r = () => o(546605);
            let i = new(o(245541)).R({
                key: "property_groups_module_state",
                namespace: o(274919).Bq,
                important: !0,
                trackingType: "necessary"
            });

            function n() {
                return {
                    propertyGroupOpenOverridesMap: {},
                    ...i.getState()
                }
            }
            class l extends r().Store {
                setState(e) {
                    super.setState(e), i.setState(e)
                }
                setPropertyGroupExpandedOverride(e) {
                    var t;
                    let {
                        groupId: o,
                        override: r
                    } = e;
                    this.setState({ ...this.state,
                        propertyGroupOpenOverridesMap: { ...this === null || void 0 === this || null == (t = this.state) ? void 0 : t.propertyGroupOpenOverridesMap,
                            [o]: r
                        }
                    })
                }
                getPropertyGroupExpandedOverride(e) {
                    var t;
                    let {
                        groupId: o
                    } = e;
                    return this === null || void 0 === this || null == (t = this.state) || null == (t = t.propertyGroupOpenOverridesMap) ? void 0 : t[o]
                }
                isPropertyGroupExpanded(e) {
                    let {
                        groupId: t
                    } = e, o = this.getPropertyGroupExpandedOverride({
                        groupId: t
                    });
                    return void 0 === o || "open" === o
                }
                togglePropertyGroupExpanded(e) {
                    let {
                        groupId: t
                    } = e, o = this.isPropertyGroupExpanded({
                        groupId: t
                    });
                    this.setPropertyGroupExpandedOverride({
                        groupId: t,
                        override: o ? "closed" : "open"
                    })
                }
            }
            let a = new l
        },
        455379: (e, t, o) => {
            o.d(t, {
                p: () => i
            });
            var r = o(296540);

            function i({
                collectionStore: e,
                layoutModule: t
            }) {
                let n = (0, o(682985).K8)(() => !!(null == e ? void 0 : e.getNormalizedPropertyGroups({
                    publicPageDataFallbackEnabled: !0
                })), [e]);
                return (0, r.useMemo)(() => !!t && !!e && "properties" === t.type && "pinned" !== t.variant && n, [e, n, t])
            }
        },
        474411: (e, t, o) => {
            o.d(t, {
                n: () => r
            });

            function r(e) {
                let {
                    collectionSettingsStore: t,
                    property: o,
                    formatKey: r,
                    selectNameInitial: i
                } = e, n = t.state, l = n.stack.findIndex(e => "property" === e.type);
                t.setState({
                    open: !0,
                    stack: [...l >= 0 ? n.stack.slice(0, l) : n.stack, {
                        type: "property",
                        property: o,
                        formatKey: r,
                        selectNameInitial: i
                    }]
                })
            }
        },
        550246: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => r,
                plusFillSmallIcon: () => i
            }), o(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.65 2.65 10.7 10.7",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M8 2.65a.75.75 0 0 1 .75.75v3.85h3.85a.75.75 0 0 1 0 1.5H8.75v3.85l-.004.077a.75.75 0 0 1-1.492 0L7.25 12.6V8.75H3.4a.75.75 0 0 1 0-1.5h3.85V3.4A.75.75 0 0 1 8 2.65"
                    })
                },
                i = (0, o(104509).wt)("plusFillSmall", r, "fillSmall")
        },
        565719: (e, t, o) => {
            o.d(t, {
                w: () => r
            });

            function r(e) {
                return "v1" === e || "v2" === e || "v3" === e
            }
        },
        574972: (e, t, o) => {
            o.d(t, {
                U: () => r
            });
            let r = 4
        },
        613789: (e, t, o) => {
            o.d(t, {
                LH: () => n,
                Op: () => i,
                bi: () => s,
                sf: () => a,
                v$: () => l
            }), o(16280);
            var r = o(296540);
            let i = (0, r.createContext)(null);

            function n() {
                let e = (0, r.useContext)(i);
                if (!e) throw Error("usePageLayoutEditorContext must be used inside BaseLayoutEditorContext.Provider");
                return e
            }

            function l() {
                return (0, r.useContext)(i)
            }
            i.displayName = "BaseLayoutEditorContext";
            let a = (0, r.createContext)(null);

            function s() {
                let e = (0, r.useContext)(a);
                if (!e) throw Error("usePageLayoutEditorContext must be used inside PageLayoutEditorContextProvider");
                return e
            }
            a.displayName = "PageLayoutEditorContext"
        },
        634435: (e, t, o) => {
            o.d(t, {
                X: () => p,
                A: () => a
            }), o(898992), o(354520);
            var r = o(296540),
                i = o(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.94 4.85 10.11 5.81",
                    svg: (0, i.jsx)("path", {
                        d: "M8.53 5.07a.75.75 0 0 0-1.06 0L3.15 9.39a.75.75 0 0 0 1.06 1.06L8 6.66l3.79 3.79a.75.75 0 0 0 1.06-1.06z"
                    })
                },
                l = (0, o(104509).wt)("arrowChevronSingleUpFillSmall", n, "fillSmall");

            function a(e) {
                let {
                    locked: t,
                    disabled: r,
                    collectionStore: n,
                    mergedProperties: l,
                    pagePropertiesStore: a,
                    wrapperStyle: s,
                    customization: d
                } = e, g = (0, o(682985).K8)(() => a.state.forceShowProperties, [a]), m = y(l), h = (0, o(92248).aN)(n), f = (g || 0 === m) && !t && !r && h && !(null != d && d.hideAddPropertyButton), v = m > 0 && !g, S = m > 0 && g, P = (0, o(960253).I)(() => {
                    let e = f || v || S;
                    return {
                        container: s && e ? s : {
                            display: "contents"
                        }
                    }
                }, [f, S, v, s]);
                return (0, i.jsxs)("div", {
                    style: P.container,
                    children: [f ? (0, i.jsx)(p, { ...e
                    }, "add-property") : void 0, v ? (0, i.jsx)(c, {
                        mergedProperties: l,
                        pagePropertiesStore: a
                    }, "show-more") : void 0, S ? (0, i.jsx)(u, {
                        mergedProperties: l,
                        pagePropertiesStore: a
                    }, "hide-properties") : void 0]
                })
            }
            let s = {
                    AddOrTogglePropertyButtonStyle: {
                        display: "flex",
                        alignItems: "center",
                        color: o(632079).Tj.text.tertiary,
                        fontSize: 14,
                        borderRadius: 4,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 8,
                        height: 34,
                        width: o(986939).A.isMobile ? "100%" : "auto",
                        gridColumn: 1,
                        gridRow: 1
                    },
                    ActionPropertyButtonIconStyle: {
                        marginTop: 1
                    }
                },
                d = {
                    id: "database.pageProperties.addPropertyButtonTitle",
                    defaultMessage: "Add a property",
                    description: "Button title for adding a new property"
                };

            function p(e) {
                let {
                    buttonPopupStore: t,
                    collectionStore: n,
                    isInPeekRenderer: l,
                    pagePropertiesStore: a,
                    propertyGroupId: p,
                    onPropertyAdded: c,
                    onClose: u,
                    disabled: y,
                    hideLabel: g,
                    iconStyle: m
                } = e, h = (0, o(533992).v3)(), f = (0, o(109939).tz)(), v = (0, o(713311).Ks)(), S = {
                    onFocus: e.onFocus,
                    onBlur: e.onBlur,
                    onMouseDown: e.onMouseDown,
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave
                }, P = (0, o(682985).uB)(t, o(510969).A), b = (0, o(682985).uB)(a, o(120025).YB), w = (0, o(682985).K8)(() => null == v ? void 0 : v.settingsStore.state.open, [null == v ? void 0 : v.settingsStore]), x = (0, o(682985).K8)(() => {
                    var e;
                    return null == v || null == (e = v.permissionScopesStore.state) ? void 0 : e.isExternallyImportedAndSyncedCollection
                }, [v]), I = (0, r.useCallback)(() => {
                    v && function(e) {
                        let {
                            propertyGroupId: t,
                            collectionContextStore: r,
                            collectionStore: i,
                            environment: n,
                            isInPeekRenderer: l,
                            onCloseMenu: a,
                            pagePropertiesStore: s,
                            propertyVisibility: d
                        } = e, p = r.settingsStore;
                        (0, o(76790).a)({
                            collectionSettingsStore: p,
                            item: {
                                type: "propertyType",
                                propertyGroupId: t,
                                onAccept: e => {
                                    let {
                                        propertyType: c,
                                        isSuggestedProperty: u,
                                        propertyName: y,
                                        selectOptions: g
                                    } = e;
                                    if ("relation" === c) return void(0, o(76790).a)({
                                        collectionSettingsStore: p,
                                        item: {
                                            type: "selectRelationSource",
                                            property: void 0,
                                            formatKey: "collection_page_properties",
                                            propertyGroupId: t
                                        }
                                    });
                                    let m = i.getSpaceId(),
                                        {
                                            performResult: h
                                        } = (0, o(377796).createAndCommit)({
                                            cellTarget: m ? {
                                                spaceWithId: m
                                            } : void 0,
                                            userAction: "PageProperties.handleAddPropertyClick",
                                            environment: n,
                                            canUndo: !0,
                                            perform: e => (0, o(567879).createProperty)({
                                                environment: n,
                                                collectionStore: i,
                                                collectionViewArgs: void 0,
                                                propertyType: c,
                                                propertyName: y,
                                                selectOptions: g,
                                                transaction: e
                                            })
                                        });
                                    (t || d) && (0, o(377796).createAndCommit)({
                                        cellTarget: m ? {
                                            spaceWithId: m
                                        } : void 0,
                                        userAction: "PageProperties.handleAddPropertyClick.addPropertyToGroupAndUpdateVisibility",
                                        environment: n,
                                        canUndo: !0,
                                        perform: e => {
                                            t && (0, o(838141).En)({
                                                collectionStore: i,
                                                groupId: t,
                                                propertyId: h,
                                                transaction: e
                                            }), d && o(453042).D7({
                                                property: h,
                                                visibility: d,
                                                format: (0, o(944940).L)(i.getFormat(), i.getSchema(), void 0, o(565546).jf.Collection),
                                                store: i,
                                                transaction: e
                                            })
                                        }
                                    }), null == a || a(h), (0, o(927983).d)({
                                        collectionSettingsStore: p,
                                        item: {
                                            type: "property",
                                            formatKey: "collection_page_properties",
                                            property: h,
                                            selectNameInitial: !o(986939).A.isMobile
                                        }
                                    }), s.setState({ ...s.state,
                                        openProperty: {
                                            property: h,
                                            isInPeekRenderer: l
                                        },
                                        forceShowProperties: !0
                                    }), (0, o(9247).hN)(c) && o(987303).pG({
                                        propertyType: c,
                                        propertyId: h,
                                        collectionContextStore: r
                                    }), (0, o(461749).Z)({
                                        environment: n,
                                        collectionStore: r.collectionStore(),
                                        collectionViewStore: r.collectionViewStore(),
                                        from: "page_properties",
                                        property_type: (0, o(9247).v2)(c),
                                        property: (0, o(9247).hN)(c) ? c : void 0,
                                        is_suggested_property: u,
                                        property_id: h
                                    })
                                }
                            }
                        })
                    }({
                        environment: h,
                        propertyGroupId: p,
                        collectionContextStore: v,
                        pagePropertiesStore: b,
                        collectionStore: n,
                        isInPeekRenderer: l,
                        onCloseMenu: e => {
                            null == c || c(e), P.setState({
                                open: !1
                            })
                        },
                        propertyVisibility: "show"
                    })
                }, [h, p, v, b, n, l, c, P]), A = (0, r.useCallback)(() => {
                    if (!(null != v && v.settingsStore)) return;
                    let e = v.settingsStore;
                    (0, o(72762).o)({
                        collectionSettingsStore: e
                    }), null == u || u()
                }, [null == v ? void 0 : v.settingsStore, u]);
                return ((0, r.useEffect)(() => {
                    w || P.update(e => ({ ...e,
                        open: !1
                    }))
                }, [P, w]), x || !v) ? null : (0, i.jsx)(o(4458).fI, {
                    children: (0, i.jsx)(o(656252).A, {
                        popupType: o(986939).A.isMobile ? o(182718).nl.SlideUp : o(182718).nl.Popup,
                        buttonPopupStore: P,
                        originGap: 1,
                        alignmentToOrigin: "start",
                        onClick: I,
                        onClose: A,
                        content: () => (0, i.jsx)(o(23889).m$, {
                            context: o(368538).B.TopbarFilterPopup,
                            collectionContextStore: v,
                            collectionSettingsStore: v.settingsStore,
                            hideDesktopHeader: !0
                        }),
                        children: t => (0, i.jsx)(o(988022).p, {
                            style: { ...s.AddOrTogglePropertyButtonStyle,
                                ...e.style
                            },
                            iconLeading: {
                                icon: o(550246).plusFillSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary",
                                fitToViewBox: void 0,
                                style: { ...s.ActionPropertyButtonIconStyle,
                                    ...m
                                }
                            },
                            "aria-label": g ? f.formatMessage(d) : void 0,
                            disabled: y,
                            disabledFeedback: !0,
                            ...(0, o(63390).A)(S, t),
                            children: g ? void 0 : (0, i.jsx)(o(109939).sA, { ...d
                            })
                        })
                    })
                })
            }

            function c(e) {
                let {
                    mergedProperties: t,
                    pagePropertiesStore: n
                } = e, l = y(t), a = (0, r.useCallback)(e => {
                    e.stopPropagation(), n.setState({ ...n.state,
                        forceShowProperties: !0
                    })
                }, [n]), d = (0, o(960253).I)(() => ({
                    button: { ...s.AddOrTogglePropertyButtonStyle,
                        ...e.style
                    }
                }), [e.style]), p = (0, r.useMemo)(() => ({
                    icon: o(469102).arrowChevronSingleDownFillSmallIcon,
                    size: "sm",
                    colorVariant: "tertiary",
                    style: s.ActionPropertyButtonIconStyle
                }), []);
                return (0, i.jsx)(o(4458).fI, {
                    children: (0, i.jsx)(o(988022).p, {
                        style: d.button,
                        onClick: a,
                        iconLeading: p,
                        children: (0, i.jsx)(o(109939).sA, {
                            id: "database.pageProperties.showMorePropertyTitle",
                            defaultMessage: "{num, plural, one {1 more property} other {{num} more properties}}",
                            values: {
                                num: l
                            }
                        })
                    })
                })
            }

            function u(e) {
                let {
                    mergedProperties: t,
                    pagePropertiesStore: n
                } = e, a = y(t), d = (0, r.useCallback)(e => {
                    e.stopPropagation(), n.update(e => ({ ...e,
                        forceShowProperties: !1
                    }))
                }, [n]), p = (0, o(960253).I)(() => ({
                    button: { ...s.AddOrTogglePropertyButtonStyle,
                        ...e.style
                    }
                }), [e.style]), c = (0, r.useMemo)(() => ({
                    icon: l,
                    size: "sm",
                    colorVariant: "tertiary",
                    style: s.ActionPropertyButtonIconStyle
                }), []);
                return (0, i.jsx)(o(4458).fI, {
                    children: (0, i.jsx)(o(988022).p, {
                        style: p.button,
                        onClick: d,
                        iconLeading: c,
                        children: (0, i.jsx)(o(109939).sA, {
                            id: "database.pageProperties.hidePropertyTitle",
                            defaultMessage: "{num, plural, one {Hide 1 property} other {Hide {num} properties}}",
                            values: {
                                num: a
                            }
                        })
                    })
                })
            }

            function y(e) {
                return (0, r.useMemo)(() => e.filter(e => "hide" === e.visibility || "hide_if_empty" === e.visibility && !e.hasValue).length, [e])
            }
        },
        699978: (e, t, o) => {
            o.d(t, {
                C4: () => i,
                Nf: () => l,
                qM: () => n
            }), o(16280), o(944114), o(898992), o(430670), o(581454);
            let r = (0, o(109939).YK)({
                authError: {
                    defaultMessage: "Auth failed. Please try again or contact Notion support.",
                    id: "database.viewSettings.propertyTypeSection.connected.authFail"
                },
                mobileAdminError: {
                    defaultMessage: "Ask your workspace admin to configure the GitHub (Workspace) app in settings to use this feature.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileAdminError"
                },
                mobileError: {
                    defaultMessage: "Please authorize this integration on the desktop app or a browser.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileError"
                }
            });
            async function i({
                environment: e,
                collectionStore: t,
                integration: n,
                canOnlyAdminAuth: l
            }) {
                let a = null == t ? void 0 : t.getSpaceStore();
                if (!a) return;
                let s = (0, o(88937).jw)(n.id).length;
                if (o(986939).A.isMobile && l && !s) {
                    let e = o(962299).A.formatMessage(r.mobileAdminError);
                    throw o(647095).f1(e), Error(e)
                }
                if (o(986939).A.isMobile && !l && !s) {
                    let e = o(962299).A.formatMessage(r.mobileError);
                    throw o(647095).f1(e), Error(e)
                }
                if (!s && l && a.canAdmin() || !s && !l) try {
                    await o(211791).Jq({
                        environment: e,
                        integration: n,
                        spaceId: a.id,
                        from: "collection_settings_property_type"
                    })
                } catch (t) {
                    let e = o(962299).A.formatMessage(r.authError);
                    throw o(647095).f1(e), Error(e)
                }
                if (!(0, o(88937).jw)(n.id).length) {
                    let e = o(962299).A.formatMessage(r.authError);
                    throw o(647095).f1(e), Error(e)
                }
            }

            function n(e) {
                let {
                    environment: t,
                    pattern: r,
                    integration: i,
                    parentCollectionStore: n,
                    transaction: l
                } = e;
                if (!r.connected_relation_properties) throw Error("Cannot create a connected relation collection without properties");
                let a = new(o(356912)).m(t, (0, o(295447).zP)({
                        environment: t,
                        table: o(832375).VlP,
                        spaceId: n.pointer.spaceId
                    })),
                    s = {};
                r.connected_relation_sub_schemas && (0, o(722371).WP)(r.connected_relation_sub_schemas).map(([e, r]) => {
                    let i = new(o(356912)).m(t, (0, o(295447).zP)({
                            environment: t,
                            table: o(832375).VlP,
                            spaceId: n.pointer.spaceId
                        })),
                        d = {
                            id: i.id,
                            version: 0,
                            space_id: (0, o(226221).e)(n.pointer.spaceId),
                            parent_table: o(832375).VlP,
                            parent_id: a.id,
                            alive: !0,
                            format: {
                                bot_id: void 0,
                                external_object_id: void 0,
                                uri: e,
                                integration_id: void 0,
                                is_placeholder: void 0,
                                original_url: void 0,
                                domain: void 0,
                                external_schema: r,
                                sync_state: void 0,
                                pattern_name: void 0
                            },
                            schema: {}
                        };
                    s[e] = i.id, (0, o(173157).z)({
                        store: i,
                        data: d,
                        transaction: l
                    })
                });
                let d = {
                    id: a.id,
                    version: 0,
                    space_id: (0, o(226221).e)(n.pointer.spaceId),
                    parent_table: o(832375).VlP,
                    parent_id: n.id,
                    alive: !0,
                    format: {
                        attributes: [{
                            id: "title",
                            name: "title",
                            type: "inline",
                            format: {
                                type: "title",
                                section: "title"
                            },
                            values: [(0, o(607689).Fe)({
                                pattern: r,
                                integration: i
                            })]
                        }],
                        bot_id: void 0,
                        external_object_id: void 0,
                        uri: `notion://user-defined-collection/${i.id}/${r.name}`,
                        integration_id: i.id,
                        is_placeholder: void 0,
                        original_url: void 0,
                        domain: void 0,
                        external_schema: r.connected_relation_properties,
                        sync_state: void 0,
                        pattern_name: r.name,
                        related_external_object_uris_to_instance_ids: s
                    },
                    schema: {}
                };
                return (0, o(173157).z)({
                    store: a,
                    data: d,
                    transaction: l
                }), a
            }
            async function l(e) {
                let {
                    bot: t,
                    connected_relation_properties: r
                } = e;
                if (t.integration_id === o(49361).Iy || t.integration_id === o(49361).mn) return await a(e);
                let i = [];
                for (let e in r) {
                    let t = r[e];
                    null != t && t.name && null != t && t.type && i.push({
                        id: e,
                        name: t.name,
                        isSelected: !1,
                        type: t.type,
                        metadata: {
                            name: t.name,
                            label: t.name,
                            type: t.type,
                            custom: !1
                        },
                        isAlreadySynced: !1
                    })
                }
                return {
                    value: i
                }
            }
            async function a(e) {
                var t, r, i, n, l;
                let {
                    environment: a,
                    objectName: s,
                    spaceId: d,
                    bot: p
                } = e, c = await a.api.callApi({
                    eventName: "describeSalesforceObject",
                    environment: a,
                    data: {
                        spaceId: d,
                        objectName: s,
                        botId: p.id
                    }
                });
                if ((null == c ? void 0 : c.type) !== "success") return {
                    error: o(212527).qh.FAILED_TO_FETCH_SALESFORCE_PROPERTIES
                };
                if ((null == (t = c.data) ? void 0 : t.responseStatus) === o(212527).qh.REAUTHENTICATION_REQUIRED || (null == (r = c.data) ? void 0 : r.responseStatus) === o(212527).qh.NO_USER_API_ACCESS) return {
                    error: `${null==(n=c.data)?void 0:n.responseStatus}:${null==(l=c.data)?void 0:l.userType}`
                };
                let u = null == c || null == (i = c.data) ? void 0 : i.properties;
                return u ? {
                    value: u.flatMap(e => {
                        let t = e.custom ? e.label : e.relationshipName || e.label;
                        return "User" === e.referenceTo || "Group" === e.referenceTo ? [{
                            id: e.name,
                            name: t,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }, {
                            id: `mapped_${e.name}`,
                            name: `${t} (Notion User)`,
                            isSelected: !1,
                            type: "person",
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }] : [{
                            id: "Name" === e.name ? "title" : e.name,
                            name: "relation" === e.type ? t : e.label,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }]
                    })
                } : {
                    error: o(212527).qh.NO_PROPERTIES_FOUND
                }
            }
        },
        753114: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => r,
                pencilLineSmallIcon: () => i
            }), o(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.03 3.22 12.19 9.61",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M11.243 3.457a.803.803 0 0 0-1.13 0l-.554.552a.075.075 0 0 0 0 .106l1.03 1.03a.075.075 0 0 0 .107 0l.547-.546a.1.1 0 0 0 .019-.032.804.804 0 0 0-.02-1.11m-2.246 1.22a.075.075 0 0 0-.106 0l-6.336 6.326a1.1 1.1 0 0 0-.237.393l-.27.87v.002c-.062.232.153.466.389.383l.863-.267q.221-.061.397-.239l6.332-6.331a.075.075 0 0 0 0-.106zm-3.355 6.898a.08.08 0 0 0-.053.022l-1.1 1.1a.075.075 0 0 0 .053.128h9.06a.625.625 0 1 0 0-1.25z"
                    })
                },
                i = (0, o(104509).wt)("pencilLineSmall", r, "small")
        },
        823230: (e, t, o) => {
            o.d(t, {
                c: () => r
            });
            async function r(e) {
                let {
                    environment: t,
                    collectionStore: r
                } = e, i = {
                    id: r.id,
                    table: o(832375).VlP,
                    spaceId: r.getSpaceId()
                }, n = await t.api.callApi({
                    eventName: "suggestRecordKey",
                    environment: t,
                    data: { ...i,
                        shouldSetSuccessfullySuggestedRecord: !0
                    }
                });
                if ("success" === n.type) return n.data.key;
                o(773352).log({
                    level: "error",
                    from: "collectionAutoIncrementIdActions.suggestRecordKeyResponse",
                    type: "JSONParseError",
                    error: {
                        miscDataString: n.error.message
                    }
                })
            }
        },
        837371: (e, t, o) => {
            o.d(t, {
                j: () => n
            }), o(296540);
            var r = o(474848);
            let i = {
                icon: {
                    width: 18,
                    height: 24,
                    fill: o(632079).Tj.icon.secondary
                }
            };

            function n(e) {
                let {
                    children: t,
                    style: n
                } = e, {
                    store: l
                } = e.icon ? e : {}, a = (0, o(682985).K8)(() => {
                    var e;
                    return (null == l || null == (e = l.getAssociatedCollectionStore()) || null == (e = e.getLayoutStore()) || null == (e = e.getFormat()) ? void 0 : e.property_icons_visibility) !== "hide"
                }, [l]), s = (0, o(960253).I)(() => ({
                    title: {
                        padding: "3px 0",
                        fontSize: 13,
                        lineHeight: "18px",
                        color: o(632079).Tj.text.secondary,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontWeight: o(699422).Wy.medium,
                        gap: 2,
                        ...n
                    }
                }), [n]);
                return (0, r.jsxs)("div", {
                    style: s.title,
                    children: [e.icon && a ? e.icon(i.icon) : void 0, (0, r.jsx)("div", {
                        children: t
                    })]
                })
            }
        },
        873830: (e, t, o) => {
            o.d(t, {
                P: () => i
            });
            let r = new(o(815048)).O2("RelationPropertyMenu", async () => await Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(26361), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(45213), o.e(53847), o.e(12354), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(12001), o.e(40198), o.e(31243), o.e(14886), o.e(39225), o.e(2626), o.e(64453), o.e(4779), o.e(85376), o.e(29945)]).then(o.bind(o, 752777))),
                i = (0, o(815048)._h)(r, e => e.RelationPropertyMenu)
        },
        927983: (e, t, o) => {
            o.d(t, {
                d: () => r
            });

            function r(e) {
                let {
                    collectionSettingsStore: t,
                    item: o,
                    ref: r
                } = e, i = t.state, {
                    stack: n
                } = i, l = [...n.slice(0, n.length - 1), o];
                t.setState({
                    open: !0,
                    stack: l,
                    closeOnEscape: i.closeOnEscape,
                    ...void 0 !== r ? {
                        ref: r
                    } : {}
                })
            }
        },
        978096: (e, t, o) => {
            o.d(t, {
                s: () => i
            });
            var r = o(296540);

            function i(e, t) {
                let [i, n] = (0, r.useState)(void 0), l = e.current;
                return (0, r.useEffect)(() => {
                    if (!l) return;
                    let e = new(o(864844)).E({
                        throttleMs: t
                    });
                    return e.observe(l), e.rect.addListener(e => {
                        n(e.state)
                    }), () => {
                        e.destroy()
                    }
                }, [l, t]), i
            }
        },
        987303: (e, t, o) => {
            o.d(t, {
                XO: () => p,
                h3: () => a,
                nZ: () => d,
                pG: () => s
            }), o(944114), o(898992), o(823215), o(354520), o(803949), o(581454);
            var r = () => o(461749);
            let i = (0, o(109939).YK)({
                aiCustomPromptDefaultPropertyName: {
                    id: "collectionSettingsCreatePropertyActions.createProperty",
                    defaultMessage: "Text"
                }
            });

            function n(e) {
                let {
                    environment: t,
                    collectionContextStore: i,
                    collectionUri: n,
                    feature: l,
                    transaction: a,
                    addFeatureFrom: s,
                    createFeatureStartTime: d
                } = e;
                if ("dependencies" in l)
                    for (let e of l.dependencies) "property" === e.type && e.collectionUri === n && (0, r().Z)({
                        environment: t,
                        collectionStore: i.collectionStore(),
                        collectionViewStore: i.collectionViewStore(),
                        from: "view_settings",
                        property: e.uri,
                        property_type: e.propertySchema.type,
                        is_suggested_property: !0,
                        property_id: e.uri,
                        feature: {
                            id: e.uri,
                            from: s,
                            type: l.uri
                        }
                    });
                if ("dependencies" in l && l.dependencies.map(e => e.type).every(e => "property" === e)) {
                    let e = i.collectionViewStore(),
                        t = i.getPropertyFormatKey(),
                        r = i.normalizedFormatStore.state;
                    if (t && e) {
                        let i = r[t] || [],
                            n = [...i];
                        l.dependencies.forEach(e => {
                            let t = i.findIndex(t => t.property === e.uri); - 1 === t ? n.push({
                                visible: !0,
                                property: e.uri
                            }) : n[t] = { ...i[t],
                                visible: !0
                            }
                        }), (0, o(715144).z)({
                            stores: [e],
                            update: {
                                [t]: n
                            },
                            transaction: a
                        })
                    }
                }
                if (void 0 !== l.propertyIdCollectionSettingToNavigateTo) {
                    let e = {
                        type: "property",
                        property: l.propertyIdCollectionSettingToNavigateTo,
                        selectNameInitial: !1,
                        formatKey: i.getPropertyFormatKey()
                    };
                    (0, o(76790).a)({
                        collectionSettingsStore: i.settingsStore,
                        item: e
                    })
                }
                a.postSubmitCallbacks.push(e => {
                    (0, o(195857).DO_NOT_USE_trackLegacy)("collection_create_suggested_property_latency", {
                        collection_uri: l.collectionUri,
                        feature_uri: l.uri,
                        time: Date.now() - d,
                        status: e ? "fail" : "success"
                    })
                })
            }
            async function l(e) {
                let {
                    environment: t,
                    collectionContextStore: r,
                    feature: i,
                    addFeatureFrom: l
                } = e, {
                    untypedFeaturesSetupActions: a
                } = await o(929925).Aw.load(), s = r.collectionStore(), d = null == s ? void 0 : s.getParentBlockStore();
                if (!s || !d) return;
                let p = Date.now(),
                    c = s.getSpaceId();
                (0, o(377796).createAndCommit)({
                    environment: t,
                    userAction: "collectionSettingsCreatePropertyActions.handleCreateNewUntypedFeature",
                    cellTarget: c ? {
                        spaceWithId: c
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        a.applyUntypedFeature({
                            environment: t,
                            collectionStore: s,
                            collectionViewBlockStore: d,
                            feature: i,
                            transaction: e
                        }), n({
                            environment: t,
                            collectionContextStore: r,
                            collectionUri: o(11448).iH,
                            feature: i,
                            transaction: e,
                            addFeatureFrom: l,
                            createFeatureStartTime: p
                        })
                    }
                })
            }
            async function a(e) {
                var t;
                let {
                    appTemplatesSetupActions: r,
                    appTemplatesSprintBoardActions: i,
                    appConfigs: a
                } = await o(929925).Aw.load(), {
                    environment: s,
                    collectionContextStore: d,
                    feature: p,
                    addFeatureFrom: c,
                    customPropertyName: u
                } = e, y = o(728372).AppStoreSidebarSpaceViewStore.state, g = d.collectionStore(), m = null == g ? void 0 : g.getParentBlockStore(), h = {}, f = e => {
                    (0, o(773352).log)({
                        level: "error",
                        from: "collectionSettingsCreatePropertyActions",
                        type: "handleCreateNewSuggestedProperty",
                        data: {
                            collectionId: null == g ? void 0 : g.id,
                            miscDataToConvertToString: {
                                featureUri: p.uri,
                                addFeatureFrom: c,
                                ...h,
                                ...e
                            }
                        }
                    })
                };
                if (!g || !m) return void f({
                    hasCollectionStore: !!g,
                    hasCollectionViewBlockStore: !!m
                });
                if ((0, o(535054).u)(p)) return l({
                    environment: s,
                    collectionContextStore: d,
                    feature: p,
                    addFeatureFrom: c
                });
                let v = d.collectionViewStore(),
                    S = null == m ? void 0 : m.getParentStore(),
                    P = null == g || null == (t = g.getFormat()) ? void 0 : t.app_config_uri,
                    b = P && (0, o(765629).l)(a(), P);
                if (h.appConfigUri = b && b.uri, !S || S.table !== o(832375).NXh && S.table !== o(832375).evP && S.table !== o(832375).yKj || !b) return void f({
                    hasAppParentStore: !!S,
                    appParentStoreTable: null == S ? void 0 : S.table,
                    appConfigUri: b ? b.uri : void 0
                });
                let w = g.getSchema(),
                    x = m.getFormat().app_id;
                h.appId = x;
                let I = x ? await s.api.callApi({
                        eventName: "getCollectionViewBlocksByAppId",
                        environment: s,
                        data: {
                            spaceId: m.getSpaceId(),
                            appId: x
                        }
                    }) : void 0,
                    A = (null == I ? void 0 : I.type) === "success" && I.data.result.length ? I.data.result.map(e => o(970831).B.createChildStore(S, {
                        table: o(832375).evP,
                        id: e.blockId,
                        spaceId: m.getSpaceId()
                    })) : [m],
                    _ = p.integrationId;
                if (_) {
                    let e = o(610463).A.getIntegrationsAsRecordMap().getValue({
                        table: o(832375).Lij,
                        id: _
                    });
                    if (!e || !(0, o(212527).Ww)(e)) return void f({
                        hasIntegration: !!e
                    });
                    await o(699978).C4({
                        environment: s,
                        collectionStore: g,
                        integration: e,
                        canOnlyAdminAuth: !!p.canOnlyAdminAuth
                    })
                }
                _ === o(49361).ob && w && 0 === (0, o(154326).yP)(w).length && await o(823230).c({
                    environment: s,
                    collectionStore: g
                });
                let C = Date.now(),
                    k = g.getSpaceId();
                (0, o(377796).createAndCommit)({
                    environment: s,
                    userAction: "collectionSettingsCreatePropertyActions.handleCreateNewSuggestedProperty",
                    cellTarget: k ? {
                        spaceWithId: k
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        var t;
                        if (!y) return void f({
                            hasCurrentSpaceViewStore: !1
                        });
                        let l = null == (t = g.getFormat()) ? void 0 : t.app_config_uri;
                        if (!l) return void f({
                            hasCollectionUri: !1
                        });
                        let a = r.applyTypedFeatures({
                            environment: s,
                            spaceViewStore: y,
                            appParentStore: S,
                            appUri: b.uri,
                            features: [{
                                type: "simple",
                                featureUri: p.uri
                            }],
                            transaction: e,
                            createOrModify: "modify",
                            appCollectionViewBlockStores: A,
                            customPropertyName: u
                        });
                        i.createSprintPage({
                            environment: s,
                            spaceViewStore: y,
                            appParentStore: S,
                            transaction: e,
                            blockStores: a,
                            creationEntryPoint: {
                                type: "sprint_relation"
                            }
                        }), "notion://tasks/sub_task_feature" === p.uri && (0, o(715144).z)({
                            stores: [g],
                            update: {
                                subitem_property: o(11448).yx.SubTaskRelation
                            },
                            transaction: e
                        }), "notion://tasks/task_dependencies_feature" === p.uri && ((0, o(715144).z)({
                            stores: [g],
                            update: {
                                collection_default_arrows_by: o(11448).yx.BlockingRelation
                            },
                            transaction: e
                        }), v && (0, o(715144).z)({
                            stores: [v],
                            update: {
                                timeline_arrows_by: {
                                    property: o(11448).yx.BlockingRelation
                                }
                            },
                            transaction: e
                        })), n({
                            environment: s,
                            collectionContextStore: d,
                            collectionUri: l,
                            feature: p,
                            transaction: e,
                            addFeatureFrom: c,
                            createFeatureStartTime: C
                        }), e.isEmpty() && f({
                            isEmptyTransaction: !0
                        })
                    }
                })
            }

            function s({
                propertyType: e,
                collectionContextStore: t,
                propertyId: r
            }) {
                let i = t.normalizedSchemaStore.state[r];
                if (i) switch (e) {
                    case "ai_custom_prompt":
                    case "ai_summary":
                    case "ai_extract":
                    case "ai_translate":
                        return (0, o(76790).a)({
                            collectionSettingsStore: t.settingsStore,
                            item: {
                                type: "propertyAiAutofill",
                                propertySchema: i,
                                property: r
                            }
                        });
                    case "ai_keywords":
                        return (0, o(76790).a)({
                            collectionSettingsStore: t.settingsStore,
                            item: {
                                type: "property",
                                property: r,
                                formatKey: t.getPropertyFormatKey()
                            }
                        });
                    default:
                        (0, o(722371).HB)(e)
                }
            }

            function d(e) {
                let {
                    environment: t,
                    collectionContextStore: n,
                    propertyType: l,
                    isSuggestedProperty: a,
                    propertyName: d,
                    propertyIcon: p,
                    selectOptions: c,
                    from: u,
                    shouldOpenEditMenu: y = !0,
                    newPropertyFormat: g
                } = e, m = n.collectionStore(), h = n.collectionViewStore(), f = n.getPropertyFormatKey(), v = n.normalizedFormatStore.state;
                if (!m) return;
                if ("relation" === l) return void(0, o(76790).a)({
                    collectionSettingsStore: n.settingsStore,
                    item: {
                        type: "selectRelationSource",
                        property: void 0,
                        initialPropertyName: d,
                        formatKey: f,
                        newPropertyFormat: g
                    }
                });
                let S = d;
                "ai_custom_prompt" === l && (S = o(962299).A.formatMessage(i.aiCustomPromptDefaultPropertyName));
                let P = g && f ? { ...v,
                        [f]: g
                    } : v,
                    b = m.getSpaceId(),
                    {
                        performResult: w
                    } = (0, o(377796).createAndCommit)({
                        userAction: "collectionSettingsCreatePropertyActions.handleCreateNewStandardProperty",
                        environment: t,
                        cellTarget: b ? {
                            spaceWithId: b
                        } : void 0,
                        canUndo: !0,
                        perform: e => (0, o(567879).createProperty)({
                            environment: t,
                            collectionStore: m,
                            collectionViewArgs: h && f ? {
                                collectionViewStore: h,
                                format: P,
                                formatKey: f
                            } : void 0,
                            propertyName: S,
                            propertyIcon: p,
                            propertyType: l,
                            selectOptions: c,
                            transaction: e
                        })
                    });
                y && ((0, o(9247).hN)(l) ? s({
                    propertyType: l,
                    propertyId: w,
                    collectionContextStore: n
                }) : (0, o(474411).n)({
                    collectionSettingsStore: n.settingsStore,
                    property: w,
                    formatKey: f,
                    selectNameInitial: !0
                }));
                let x = "view_settings" === u ? {
                    feature: {
                        id: w,
                        from: "new_property",
                        type: l
                    }
                } : {};
                return (0, r().Z)({
                    environment: t,
                    collectionStore: n.collectionStore(),
                    collectionViewStore: n.collectionViewStore(),
                    from: u,
                    property_type: (0, o(9247).v2)(l),
                    property: (0, o(9247).hN)(l) ? l : void 0,
                    is_suggested_property: a,
                    property_id: w,
                    ...x
                }), a || n.userAddedPropertyStore.update(() => !0), w && !(0, o(9247).hN)(l) && o.e(52315).then(o.bind(o, 195303)).then(e => {
                    e.maybeTriggerDatabaseViewNudgeOnCreateProperty({
                        environment: t,
                        collectionContextStore: n,
                        propertyId: w,
                        propertyType: (0, o(9247).v2)(l)
                    })
                }), w
            }
            async function p(e) {
                let t, i, {
                        environment: n,
                        collectionContextStore: l,
                        intl: a,
                        connectedRelationProperty: s,
                        from: d,
                        untypedFeatureArgs: p,
                        propertyGroupId: u,
                        propertyLimit: y,
                        skipDatabaseActions: g,
                        propertyName: m
                    } = e,
                    h = l.collectionStore(),
                    f = l.collectionViewStore(),
                    v = l.getPropertyFormatKey();
                if (!h || !v) return;
                let S = s.integration.id;
                (0, o(49361).XO)(S) || await o(699978).C4({
                    environment: n,
                    collectionStore: h,
                    integration: s.integration,
                    canOnlyAdminAuth: !!s.canOnlyAdminAuth
                });
                let P = h.getSchema();
                S === o(49361).ob && P && 0 === (0, o(154326).yP)(P).length && (t = await o(823230).c({
                    environment: n,
                    collectionStore: h
                }));
                let b = h.getDeletedSchema(),
                    w = (0, o(722371).WP)(b).map(([e, t]) => {
                        if (t && (0, o(425985).U)(t) && t.connectedRelation.integration_id === o(49361).ob) return {
                            propertyId: e,
                            propertySchema: t
                        }
                    }).filter(o(722371).O9);
                if (!o(381453).Im(w)) {
                    let e = w[0];
                    i = {
                        propertyId: e.propertyId,
                        update: await c({
                            collectionStore: h,
                            property: e
                        })
                    }
                }
                let x = h.getSpaceId();
                (0, o(377796).createAndCommit)({
                    environment: n,
                    userAction: "collectionSettingsCreatePropertyActions.handleCreateNewConnectedRelationProperty",
                    cellTarget: x ? {
                        spaceWithId: x
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        let {
                            shouldCreateNewProperty: c,
                            restoredPropertyId: P
                        } = function(e) {
                            let {
                                environment: t,
                                generatedPrefix: r,
                                integrationId: i,
                                propertyGroupId: n,
                                collectionStore: l,
                                collectionContextStore: a,
                                collectionViewStore: s,
                                formatKey: d,
                                transaction: p,
                                maybeRestoreDeletedProperty: c
                            } = e;
                            if (r && (0, o(567879).createProperty)({
                                    environment: t,
                                    collectionStore: l,
                                    collectionViewArgs: s ? {
                                        collectionViewStore: s,
                                        format: s.getFormat(),
                                        formatKey: d
                                    } : void 0,
                                    propertyType: "auto_increment_id",
                                    transaction: p,
                                    propertyGroupId: n
                                }), null != c && c.propertyId)
                                if (c.update) {
                                    n && (0, o(838141).En)({
                                        collectionStore: l,
                                        groupId: n,
                                        propertyId: c.propertyId,
                                        transaction: p
                                    }), (0, o(957395).F)({
                                        environment: t,
                                        collectionStore: l,
                                        update: c.update.updateSchema,
                                        transaction: p
                                    }), (0, o(149568).E)({
                                        collectionStore: l,
                                        update: c.update.updateDeletedSchema,
                                        transaction: p
                                    });
                                    let e = {
                                        type: "property",
                                        property: c.propertyId,
                                        formatKey: d
                                    };
                                    return (0, o(76790).a)({
                                        collectionSettingsStore: a.settingsStore,
                                        item: e
                                    }), {
                                        shouldCreateNewProperty: !1,
                                        restoredPropertyId: c.propertyId
                                    }
                                } else(0, o(773352).log)({
                                    level: "error",
                                    from: "collectionSettingsCreatePropertyActions",
                                    type: "handleCreateNewConnectedRelationProperty",
                                    data: {
                                        message: "Invalid property found in deleted_schema",
                                        collectionId: null == l ? void 0 : l.id,
                                        miscDataToConvertToString: {
                                            integration: i,
                                            maybeRestoreDeletedProperty: c
                                        }
                                    }
                                }), (0, o(149568).E)({
                                    collectionStore: l,
                                    update: {
                                        [c.propertyId]: null
                                    },
                                    transaction: p
                                });
                            return {
                                shouldCreateNewProperty: !0
                            }
                        }({
                            environment: n,
                            generatedPrefix: t,
                            transaction: e,
                            propertyGroupId: u,
                            collectionStore: h,
                            collectionViewStore: f,
                            collectionContextStore: l,
                            integrationId: S,
                            formatKey: v,
                            maybeRestoreDeletedProperty: i
                        });
                        if (!c && P) return P;
                        let b = function(e) {
                            let {
                                environment: t,
                                transaction: r,
                                collectionStore: i,
                                collectionViewStore: n,
                                collectionContextStore: l,
                                intl: a,
                                connectedRelationProperty: s,
                                untypedFeatureArgs: d,
                                propertyLimit: p,
                                propertyName: c,
                                formatKey: u
                            } = e, y = s.integration.id, g = o(993189).Bj6.fromIntegration(s.integration), m = o(699978).qM({
                                environment: t,
                                pattern: s.pattern,
                                integration: g,
                                parentCollectionStore: i,
                                transaction: r
                            }), h = (0, o(567879).createProperty)({
                                environment: t,
                                collectionStore: i,
                                collectionViewArgs: n && u ? {
                                    collectionViewStore: n,
                                    format: n.getFormat(),
                                    formatKey: u
                                } : void 0,
                                propertyType: "relation",
                                transaction: r,
                                propertyId: null == d ? void 0 : d.propertyId
                            });
                            return o(377573).cT({
                                environment: t,
                                collectionViewStore: l.collectionViewStore(),
                                collectionStore: i,
                                property: h,
                                propertyName: c && c.length > 0 ? c : s.name,
                                propertyIcon: s.integration.info.icon,
                                propertyLimit: p ? ? "no_limit",
                                targetCollectionStore: m,
                                hasInverseRelation: !0,
                                autoRelate: void 0,
                                intl: a,
                                connectedRelation: {
                                    integration_id: y
                                },
                                transaction: r
                            }), h
                        }({
                            environment: n,
                            transaction: e,
                            collectionStore: h,
                            collectionViewStore: f,
                            collectionContextStore: l,
                            intl: a,
                            connectedRelationProperty: s,
                            untypedFeatureArgs: p,
                            propertyLimit: y,
                            propertyName: m,
                            formatKey: v
                        });
                        if ((0, r().Z)({
                                environment: n,
                                collectionStore: l.collectionStore(),
                                collectionViewStore: l.collectionViewStore(),
                                from: "view_settings",
                                property_id: b,
                                property_type: "relation",
                                integration_id: S,
                                feature: {
                                    id: b,
                                    from: d,
                                    type: `notion://feature/connection_${S}`
                                }
                            }), !p)
                            if (g) {
                                let e = h.getSchema(),
                                    t = null == e ? void 0 : e[b];
                                (0, o(76790).a)({
                                    collectionSettingsStore: l.settingsStore,
                                    item: {
                                        type: "connectedRelationDatabaseActions",
                                        source: "connectedRelationAddProperties",
                                        rootPropertyId: b,
                                        integrationId: S,
                                        rootPropertySchema: t,
                                        skipDatabaseActions: !0,
                                        eventSource: "first_time_setup"
                                    }
                                }), (0, o(104310).u)({
                                    event: {
                                        eventName: "salesforce_actions",
                                        eventProperties: {
                                            actionType: "add_properties_clicked",
                                            details: {
                                                source: "first_time_setup"
                                            },
                                            integrationId: S,
                                            collectionId: null == h ? void 0 : h.id
                                        }
                                    }
                                })
                            } else(0, o(76790).a)({
                                collectionSettingsStore: l.settingsStore,
                                item: {
                                    type: "property",
                                    property: b,
                                    formatKey: v
                                }
                            });
                        return b
                    }
                })
            }
            async function c(e) {
                let {
                    property: {
                        propertyId: t,
                        propertySchema: r
                    },
                    collectionStore: i
                } = e, n = (0, o(390768).N)(r);
                if ((null == n ? void 0 : n.spaceId) !== i.getSpaceId()) return;
                let l = o(356912).m.createChildStore(i, n);
                if (await l.load(), null != l && l.isDefined() && l.getParentId() === i.id) return (0, o(28630).KA)({
                    deletedSchema: i.getDeletedSchema(),
                    property: t
                })
            }
        }
    }
]);