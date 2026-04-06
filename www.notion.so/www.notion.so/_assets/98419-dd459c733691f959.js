"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [60858, 98419], {
        10376: (e, t, o) => {
            o.d(t, {
                W: () => s,
                D: () => p
            }), o(898992), o(672577), o(581454);
            var i = o(296540),
                n = o(474848);
            let r = "LastUsedCurrency",
                a = o(546605).Store.createClass("", {
                    name: "NumberFormatFilterStore"
                });

            function l(e) {
                let t, {
                        collectionContextStore: l,
                        collectionStore: s,
                        property: d,
                        schema: c,
                        onClose: u
                    } = e,
                    p = (0, o(533992).v3)(),
                    g = (0, o(109939).tz)(),
                    m = (0, o(682985).uB)(void 0, o(419110).$),
                    f = (0, o(682985).uB)(void 0, a),
                    y = (0, i.useCallback)(e => {
                        f.setState(e.target.value), m.setState({ ...m.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }, [f, m]),
                    h = (0, o(682985).O$)(f),
                    b = (0, o(682985).K8)(() => (function(e) {
                        let {
                            environment: t,
                            collectionContextStore: i,
                            collectionStore: a,
                            property: l,
                            schema: s,
                            numberFormatFilterStore: d,
                            onClose: c
                        } = e, u = o(255482).K.get({
                            userId: t.currentUser.id,
                            key: r
                        });
                        return (0, o(821048).Ay)(d.state, (0, o(700369).RQ)(u), e => e).map(e => {
                            let d = (0, o(700369).gL)(o(962299).A.getIntl(), e),
                                u = (0, o(700369).D9)(e),
                                p = u ? `${d} (${u})` : d;
                            return {
                                key: e,
                                render: e => (0, n.jsx)(o(95582).A, { ...e,
                                    title: p
                                }),
                                action: () => (function(e) {
                                    let {
                                        newFormat: t,
                                        collectionContextStore: i,
                                        collectionStore: n,
                                        property: a,
                                        schema: l,
                                        environment: s,
                                        onClose: d
                                    } = e, c = l[a];
                                    if (!c) return;
                                    let u = o(218744).default.checkGate({
                                        gateName: "rollup_custom_number_format"
                                    });
                                    if ("number" !== c.type && "formula" !== c.type && !(u && "rollup" === c.type)) return;
                                    let p = { ...c,
                                        number_format: t,
                                        ..."percent" === t && (null == c ? void 0 : c.show_as) !== void 0 ? {
                                            show_as: { ...null == c ? void 0 : c.show_as,
                                                maxValue: 1
                                            }
                                        } : {}
                                    };
                                    "number" === c.type && (0, o(700369).SL)(t) && o(255482).K.set({
                                        userId: s.currentUser.id,
                                        key: r,
                                        value: t
                                    });
                                    let g = n.getSpaceId();
                                    (0, o(377796).createAndCommit)({
                                        userAction: "NumberFormatMenu.handleNumberFormatChange",
                                        environment: s,
                                        cellTarget: g ? {
                                            spaceWithId: g
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            (0, o(957395).F)({
                                                environment: s,
                                                collectionStore: n,
                                                update: {
                                                    [a]: p
                                                },
                                                transaction: e
                                            })
                                        }
                                    }), (0, o(8043).V)({
                                        environment: s,
                                        collectionStore: i.collectionStore(),
                                        collectionViewStore: i.collectionViewStore(),
                                        property: a,
                                        from: "view_settings",
                                        action: "number_change_format",
                                        number_format: t
                                    }), null == d || d()
                                })({
                                    newFormat: e,
                                    collectionContextStore: i,
                                    collectionStore: a,
                                    property: l,
                                    schema: s,
                                    environment: t,
                                    onClose: c
                                })
                            }
                        })
                    })({
                        environment: p,
                        collectionStore: s,
                        collectionContextStore: l,
                        property: d,
                        schema: c,
                        numberFormatFilterStore: f,
                        onClose: u
                    }), [l, p, s, d, c, f, u]);
                t = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.ActionSheet
                } : {
                    menuType: o(649476).gu.Popup
                };
                let S = !o(986939).A.isMobile && (0, n.jsx)(o(844565).A, {
                    isInput: !0,
                    children: (0, n.jsx)(o(310324).Ay, {
                        value: h,
                        onChange: y,
                        focus: !0,
                        focusAfterAnimation: !0,
                        placeholder: g.formatMessage({
                            defaultMessage: "Filter formats…",
                            id: "blockPropertyValue.filterForNumberFormats.placeholder"
                        }),
                        preventCaptureDeleteWhenEmpty: !0,
                        preventCaptureSpacebarWhenEmpty: !0
                    })
                });
                return (0, n.jsx)(o(747369).A, { ...t,
                    header: S,
                    children: (0, n.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: 0,
                            items: b
                        }],
                        store: m
                    })
                })
            }

            function s(e) {
                let {
                    collectionContextStore: t,
                    property: i,
                    source: r
                } = e, a = (0, o(533992).v3)(), l = (0, o(83208).X)("rollup_custom_number_format"), {
                    propertySchema: s,
                    numberFormat: d,
                    numberPrecision: p
                } = (0, o(682985).K8)(() => {
                    let e = t.collectionStore();
                    if (!e) return {};
                    let n = t.normalizedSchemaStore.state[i];
                    if (!n) return {};
                    let r = e.getSpaceId(),
                        s = a.idCreator.getSpaceIdCreatorSync(r);
                    if ("number" === n.type) return {
                        propertySchema: n,
                        numberFormat: n.number_format ? ? o(700369).C4,
                        numberPrecision: n.number_precision ? ? o(700369).pS
                    };
                    if ("formula" === n.type) return "number" === (0, o(345091).getFormulaPropertySchemaResultType)(n) ? {
                        propertySchema: n,
                        numberFormat: n.number_format ? ? o(700369).C4,
                        numberPrecision: n.number_precision ? ? o(700369).pS
                    } : n.formula2 && "number" === (0, o(297493).pg)(n.formula2.result_type).type ? {
                        propertySchema: n,
                        numberFormat: n.number_format ? ? o(700369).C4,
                        numberPrecision: o(700369).pS
                    } : {};
                    if ("rollup" === n.type) {
                        var d, c;
                        if (n.aggregation && "show_unique" !== n.aggregation) {
                            let r = null == (c = (0, o(26837).eY)({
                                property: i,
                                schema: t.normalizedSchemaStore.state,
                                getRecordModel: e.getRecordModel,
                                spaceIdCreator: s
                            })) ? void 0 : c.targetPropertySchema;
                            if ((null == r ? void 0 : r.type) === void 0) return {};
                            let a = "number_format" in r ? r.number_format : void 0,
                                d = (0, o(567224).o_)(n.aggregation, l ? n.number_format ? ? a : a);
                            if (d) {
                                let e = "number_precision" in r ? r.number_precision : void 0,
                                    t = (0, o(567224).zI)(n.aggregation, l ? n.number_precision ? ? e : e) ? ? o(700369).pS;
                                return {
                                    propertySchema: n,
                                    numberFormat: d,
                                    numberPrecision: t
                                }
                            }
                            return {}
                        }
                        let r = null == (d = (0, o(26837).eY)({
                            property: i,
                            schema: t.normalizedSchemaStore.state,
                            getRecordModel: e.getRecordModel,
                            spaceIdCreator: s
                        })) ? void 0 : d.targetPropertySchema;
                        if ((null == r ? void 0 : r.type) === "number" || (null == r ? void 0 : r.type) === "formula" && "number" === (0, o(345091).getFormulaPropertySchemaBaseResultType)(r)) return {
                            propertySchema: n,
                            numberFormat: l ? n.number_format ? ? r.number_format ? ? o(700369).C4 : r.number_format ? ? o(700369).C4,
                            numberPrecision: l ? n.number_precision ? ? r.number_precision ? ? o(700369).pS : r.number_precision ? ? o(700369).pS
                        }
                    }
                    return {}
                }, [t, i, a, l]), g = (null == s ? void 0 : s.type) === "rollup" && l && (0, o(288299).lh)(s.aggregation), f = g || (null == s ? void 0 : s.type) !== "rollup", y = g || (null == s ? void 0 : s.type) !== "rollup" && ((null == s ? void 0 : s.type) !== "formula" || "number" === (0, o(345091).getFormulaPropertySchemaResultType)(s));
                return s ? (0, n.jsxs)(n.Fragment, {
                    children: [f ? (0, n.jsx)(c, {
                        numberFormat: d,
                        property: i
                    }) : void 0, y && s ? (0, n.jsx)(u, {
                        numberPrecision: p,
                        property: i,
                        propertySchema: s
                    }) : void 0, (0, n.jsx)(m, {
                        property: i,
                        propertySchema: s,
                        numberFormat: d,
                        source: r
                    })]
                }) : null
            }
            let d = {
                titleStyle: {
                    whiteSpace: "nowrap",
                    flex: "none",
                    marginInlineEnd: 8
                },
                rightStyle: {
                    flexShrink: 1,
                    overflow: "hidden"
                },
                style0: { ...o(699422).RC
                }
            };

            function c(e) {
                let {
                    numberFormat: t,
                    property: r
                } = e, a = (0, o(109939).tz)(), s = (0, o(713311).ET)(), c = (0, o(682985).uB)(void 0, o(510969).A), u = (0, o(682985).K8)(() => c.state.open, [c]), p = (0, o(682985).K8)(() => s.collectionStore(), [s]), g = (0, o(682985).O$)(s.normalizedSchemaStore), m = (0, i.useCallback)(e => (0, n.jsx)(o(209572).A, {
                    title: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Number format",
                        id: "database.viewSettings.numberOptions.numberFormat"
                    }),
                    desktopTitleStyle: d.titleStyle,
                    right: (0, n.jsx)("span", {
                        style: d.style0,
                        children: (0, o(700369).gL)(a, o(700369).PA.find(e => e === t) ? ? o(700369).C4)
                    }),
                    rightStyle: d.rightStyle,
                    showChevron: !0,
                    rotateChevron: u,
                    ...e
                }), [u, a, t]), f = (0, i.useCallback)(e => p ? (0, n.jsx)(l, {
                    collectionContextStore: s,
                    collectionStore: p,
                    property: r,
                    schema: g,
                    onClose: e.close
                }) : null, [s, p, r, g]);
                return (0, n.jsx)(o(656252).A, {
                    popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                    alignmentToOrigin: "end",
                    bottomSheetInitialState: "half",
                    content: f,
                    buttonPopupStore: c,
                    children: m
                })
            }

            function u(e) {
                let {
                    numberPrecision: t,
                    property: r,
                    propertySchema: a
                } = e, l = (0, o(109939).tz)(), s = (0, o(533992).v3)(), d = (0, o(713311).ET)(), c = (0, o(682985).K8)(() => d.collectionStore(), [d]), u = (0, i.useMemo)(() => o(700369).iv.map(e => ({
                    key: e,
                    type: "button",
                    title: p(l, e)
                })), [l]), g = (0, i.useCallback)(e => {
                    if (!c) return;
                    let t = { ...a,
                            number_precision: e
                        },
                        i = c.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "NumberFormatMenu.handleNumberPrecisionChange",
                        environment: s,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, o(957395).F)({
                                environment: s,
                                collectionStore: c,
                                update: {
                                    [r]: t
                                },
                                transaction: e
                            })
                        }
                    }), (0, o(8043).V)({
                        environment: s,
                        collectionStore: d.collectionStore(),
                        collectionViewStore: d.collectionViewStore(),
                        property: r,
                        from: "view_settings",
                        action: "number_change_precision",
                        number_precision: e
                    })
                }, [d, c, s, r, a]), m = (0, i.useCallback)(() => (0, n.jsx)(o(109939).sA, {
                    defaultMessage: "Round to a specified number of decimal places. The underlying remains unchanged.",
                    id: "database.viewSettings.numberOptions.numberPrecision.tooltip"
                }), []), f = (0, i.useCallback)(e => (0, n.jsx)(o(529983).A, { ...e,
                    title: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Decimal places",
                        id: "database.viewSettings.numberOptions.numberPrecision"
                    }),
                    selectedKey: t,
                    options: u,
                    onChange: g
                }), [g, t, u]);
                return (0, n.jsx)(o(51831).m, {
                    placement: "right",
                    textWrap: !0,
                    content: m,
                    children: f
                })
            }

            function p(e, t) {
                switch (t) {
                    case "precision_uncapped":
                        return e.formatMessage({
                            id: "collection.numberFormat.precisionUncapped",
                            defaultMessage: "Default"
                        });
                    case "precision_0":
                        return e.formatMessage({
                            id: "collection.numberFormat.precision0",
                            defaultMessage: "0"
                        });
                    case "precision_1":
                        return e.formatMessage({
                            id: "collection.numberFormat.precision1",
                            defaultMessage: "1"
                        });
                    case "precision_2":
                        return e.formatMessage({
                            id: "collection.numberFormat.precision2",
                            defaultMessage: "2"
                        });
                    case "precision_3":
                        return e.formatMessage({
                            id: "collection.numberFormat.precision3",
                            defaultMessage: "3"
                        });
                    case "precision_4":
                        return e.formatMessage({
                            id: "collection.numberFormat.precision4",
                            defaultMessage: "4"
                        });
                    case "precision_5":
                        return e.formatMessage({
                            id: "collection.numberFormat.precision5",
                            defaultMessage: "5"
                        });
                    default:
                        (0, o(722371).HB)(t)
                }
            }
            let g = {
                selectedCard: {
                    boxShadow: `0 0 0 2px ${o(632079).Tj.blue.border.accentPrimary}`,
                    color: o(632079).Tj.blue.text.accentPrimary
                },
                cardText: {
                    lineHeight: 1,
                    fontSize: 12
                },
                style0: {
                    fontSize: 16,
                    fontWeight: o(699422).Wy.medium
                },
                style1: {
                    width: "100%"
                },
                style2: {
                    flex: 6,
                    fontSize: 14
                },
                style3: {
                    display: "flex",
                    flexWrap: "wrap",
                    flex: 6,
                    gap: 7
                },
                style4: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "end"
                },
                style5: {
                    width: "auto",
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                    borderRadius: 6,
                    color: o(632079).Tj.text.tertiary
                },
                style6: {
                    minHeight: 36
                },
                style7: {
                    minWidth: 150,
                    paddingTop: 8,
                    paddingBottom: 8
                },
                style8: {
                    flex: 6
                },
                style9: {
                    textAlign: "end"
                }
            };

            function m(e) {
                let {
                    property: t,
                    propertySchema: r,
                    numberFormat: a,
                    source: l
                } = e, {
                    show_as: s
                } = r, d = (0, o(533992).v3)(), c = (0, o(713311).ET)(), u = (0, i.useRef)({
                    color: (null == s ? void 0 : s.color) ? ? "green",
                    maxValue: (null == s ? void 0 : s.maxValue) ? ? 100,
                    showValue: (null == s ? void 0 : s.showValue) ? ? !0
                }), p = (0, o(226142).a)(), m = "tableHeaderMenu" === l, f = {
                    type: (null == s ? void 0 : s.type) ? ? "number",
                    color: (null == s ? void 0 : s.color) ? ? u.current.color,
                    maxValue: (null == s ? void 0 : s.maxValue) ? ? u.current.maxValue,
                    showValue: (null == s ? void 0 : s.showValue) ? ? u.current.showValue
                }, y = (0, o(960253).I)(() => ({
                    card: {
                        boxSizing: "content-box",
                        height: 36,
                        flex: 1,
                        margin: 1,
                        boxShadow: `0 0 0 1px ${o(632079).Tj.border.secondaryTranslucent}`,
                        color: o(632079).Tj.text.secondary,
                        borderRadius: 6,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
                        cursor: "pointer",
                        background: p ? o(632079).Tj.background.elevated : void 0
                    },
                    cardHoveredStyle: {
                        background: p ? o(632079).Tj.background.elevated : void 0
                    },
                    cardPressedStyle: {
                        background: p ? o(632079).Tj.background.elevated : void 0
                    },
                    showAsTypeOption: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginInlineStart: p ? 12 : m ? 8 : 16,
                        marginInlineEnd: m ? 8 : 16,
                        marginTop: 6,
                        gap: 6
                    },
                    allExtraOptions: {
                        backgroundColor: p ? o(632079).Tj.background.elevated : o(632079).Tj.palette.gray[30],
                        boxShadow: p ? `0 0 0 1px ${o(632079).Tj.border.secondaryTranslucent}` : void 0,
                        borderRadius: 5,
                        marginTop: 12,
                        marginInlineStart: p ? 12 : m ? 8 : 16,
                        marginInlineEnd: m ? 8 : 16,
                        paddingTop: 12,
                        paddingBottom: 12,
                        maxHeight: 1e3,
                        transition: "max-height 0.5s ease-in-out",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8
                    },
                    applyToAllViews: {
                        marginTop: 12,
                        marginInlineStart: m ? 10 : 18,
                        marginInlineEnd: m ? 10 : 18,
                        fontSize: 12,
                        color: o(632079).Tj.text.tertiary,
                        paddingBottom: 6 * !!m
                    }
                }), [p, m]), h = (0, i.useCallback)(e => {
                    let i = c.collectionStore();
                    if (!r || !i) return;
                    let n = i.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "CollectionSettingsProperty.handleNumberShowAsChange",
                        environment: d,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        canUndo: !0,
                        perform: n => {
                            (0, o(957395).F)({
                                environment: d,
                                collectionStore: i,
                                update: {
                                    [t]: { ...r,
                                        show_as: e
                                    }
                                },
                                transaction: n
                            })
                        }
                    }), (0, o(8043).V)({
                        environment: d,
                        collectionStore: c.collectionStore(),
                        collectionViewStore: c.collectionViewStore(),
                        property: t,
                        from: "view_settings",
                        action: "number_change_show_as",
                        number_show_as: (null == e ? void 0 : e.type) ? ? "number"
                    })
                }, [c, d, t, r]), b = (0, i.useMemo)(() => [{
                    key: "number",
                    visual: (0, n.jsx)("div", {
                        style: g.style0,
                        children: "42"
                    }),
                    text: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Number",
                        id: "database.viewSettings.numberOptions.showAsNumber"
                    })
                }, {
                    key: "bar",
                    visual: (0, n.jsx)(o(819197).z, {
                        percentage: 50,
                        filledColor: o(632079).Tj["bar" === f.type ? "blue" : "gray"].background.accentPrimary,
                        unfilledColor: o(632079).Tj["bar" === f.type ? "blue" : "gray"].background.tertiaryTranslucent,
                        style: g.style1
                    }),
                    text: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Bar",
                        id: "database.viewSettings.numberOptions.showAsBar"
                    })
                }, {
                    key: "ring",
                    visual: (0, n.jsx)(o(320500).E, {
                        size: 20,
                        progressPercentage: 40,
                        progressColor: "ring" === f.type ? "blue" : "gray",
                        ringColor: "ring" === f.type ? "blue" : "gray",
                        ringThickness: 2
                    }),
                    text: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Ring",
                        id: "database.viewSettings.numberOptions.showAsRing"
                    })
                }], [f.type]), S = (0, n.jsx)("div", {
                    style: y.showAsTypeOption,
                    children: b.map(e => {
                        let t = f.type === e.key;
                        return (0, n.jsxs)(o(64960).Ay, {
                            onClick: () => {
                                let t = "number" === e.key ? void 0 : {
                                    type: e.key,
                                    color: f.color,
                                    maxValue: "percent" === a ? 1 : f.maxValue,
                                    showValue: f.showValue
                                };
                                void 0 !== t && (u.current = t), h(t)
                            },
                            style: { ...y.card,
                                ...t ? g.selectedCard : {}
                            },
                            hoveredStyle: y.cardHoveredStyle,
                            pressedStyle: y.cardPressedStyle,
                            children: [(0, n.jsx)(o(4458).fI, {
                                height: 20,
                                marginBottom: 4,
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                children: e.visual
                            }), (0, n.jsx)("div", {
                                style: g.cardText,
                                children: e.text
                            })]
                        }, e.key)
                    })
                }), x = e => {
                    let t = "number" !== f.type ? { ...f,
                        type: f.type,
                        ...e
                    } : void 0;
                    void 0 !== t && (u.current = t), h(t)
                }, v = "number" !== f.type ? (0, n.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    gap: 16,
                    height: 28,
                    width: "100%",
                    children: [(0, n.jsx)("div", {
                        style: g.style2,
                        children: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Color",
                            id: "database.viewSettings.numberOptions.color"
                        })
                    }), (0, n.jsx)("div", {
                        style: g.style3,
                        children: (0, n.jsx)(o(656252).A, {
                            popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                            bottomSheetInitialState: "half",
                            content: e => {
                                let t = o(632079).tS.map(t => (0, n.jsx)(o(481524).A, {
                                    color: t,
                                    isChecked: t === f.color,
                                    focused: !1,
                                    style: g.style1,
                                    onClick: () => {
                                        x({
                                            color: t
                                        }), e.close()
                                    }
                                }, t));
                                return (0, n.jsx)("div", {
                                    style: g.style7,
                                    children: t
                                })
                            },
                            children: e => (0, n.jsx)("div", {
                                style: g.style4,
                                ...e,
                                children: (0, n.jsx)(o(481524).A, {
                                    color: f.color,
                                    focused: !1,
                                    buttonStyle: g.style5,
                                    style: g.style6,
                                    right: (0, n.jsx)(o(16275).I, {
                                        icon: o(595453).arrowChevronSingleDownSmallIcon,
                                        size: "sm"
                                    })
                                })
                            })
                        })
                    })]
                }) : null, A = "number" !== f.type ? "percent" !== a && (0, n.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    gap: 16,
                    height: 28,
                    width: "100%",
                    children: [(0, n.jsx)("div", {
                        style: g.style2,
                        children: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Divide by",
                            id: "database.viewSettings.numberOptions.divideBy"
                        })
                    }), (0, n.jsx)("div", {
                        style: g.style8,
                        children: (0, n.jsx)(o(36481).p, {
                            value: f.maxValue.toString(),
                            onChange: e => {
                                let t = parseFloat(e.target.value.replace(/[^0-9]/g, ""));
                                !isNaN(t) && t > 0 && x({
                                    maxValue: t
                                })
                            },
                            inputStyle: g.style9
                        })
                    })]
                }) : null, j = "number" !== f.type ? (0, n.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    gap: 16,
                    height: 28,
                    width: "100%",
                    children: [(0, n.jsx)("div", {
                        style: g.style2,
                        children: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Show number",
                            id: "database.viewSettings.numberOptions.showValue"
                        })
                    }), (0, n.jsx)(o(4458).fI, {
                        flex: 6,
                        justifyContent: "flex-end",
                        children: (0, n.jsx)(o(354491).d, {
                            on: f.showValue,
                            onClick: () => {
                                x({
                                    showValue: !f.showValue
                                })
                            },
                            disabled: !1
                        })
                    })]
                }) : null, w = v || A || j ? (0, n.jsxs)("div", {
                    style: y.allExtraOptions,
                    children: [v, A, j]
                }) : null;
                return (0, n.jsxs)(o(844565).A, {
                    title: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Show as",
                        id: "database.viewSettings.numberPercentOptions.showAs"
                    }),
                    topBorder: !0,
                    disableMobileBorders: !0,
                    children: [S, w, p ? void 0 : (0, n.jsx)("div", {
                        style: y.applyToAllViews,
                        children: (0, n.jsx)(o(109939).sA, {
                            id: "database.CollectionSettings.NumberOptions.applyAllViews",
                            defaultMessage: "Changes apply to all views showing this property."
                        })
                    })]
                })
            }
        },
        49768: (e, t, o) => {
            o.d(t, {
                Jc: () => r,
                Q7: () => n,
                eo: () => l,
                q8: () => a
            });
            var i = o(296540);

            function n(e) {
                let {
                    textStore: t,
                    initialFocus: n
                } = e, s = (0, o(533992).v3)(), d = (0, o(682985).K8)(() => l(t), [t]), c = (0, i.useCallback)(() => {
                    r(t)
                }, [t]), u = (0, i.useCallback)(() => {
                    a({
                        environment: s,
                        textStore: t
                    })
                }, [s, t]);
                return (0, o(383953).w)(() => {
                    n && c()
                }), (0, i.useMemo)(() => ({
                    isFocused: d,
                    focus: c,
                    blur: u
                }), [d, c, u])
            }

            function r(e) {
                o(374176).default.afterNextFlush(() => {
                    (0, o(411282).w)();
                    let t = o(521595).n.findNodeFromStore(e);
                    null == t || t.focus(), (0, o(739204).z)({
                        store: e
                    })
                })
            }

            function a(e) {
                let {
                    environment: t,
                    textStore: i
                } = e;
                if (!l(i)) return;
                let n = o(521595).n.findNodeFromStore(i);
                null == n || n.blur(), (0, o(525779).clear)({
                    environment: t
                }), o(200083).A.setKeyboardMode(!1)
            }

            function l(e) {
                return "empty" !== o(358377).default.state.mode && o(358377).default.state.multiSelection.start.store.id === e.id
            }
        },
        86484: (e, t, o) => {
            o.d(t, {
                B5: () => l,
                CJ: () => n,
                Sf: () => d,
                md: () => r,
                wb: () => a
            }), o(814603), o(147566), o(198721);
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

            function n(e, t) {
                return !!e && !!(i[t][e] || i[t].everything)
            }
            let r = (0, o(755439).xS)({
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

            function a(e) {
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
                return (t = (t = (t = d(t = (t = (t = (t = t.replace(/<gzkNfoUU>/g, "§§HIGHLIGHT_START§§")).replace(/<\/gzkNfoUU>/g, "§§HIGHLIGHT_END§§")).replace(/<(.*?)\|([^>]*)>/g, (e, t, o) => {
                    try {
                        return new URL(o), s(o)
                    } catch {
                        if (o.length > 0) return o;
                        return t
                    }
                })).replace(/<(\S+(?:\s+\S+)*)>/g, (e, t) => {
                    try {
                        return new URL(t), s(t)
                    } catch {
                        return t
                    }
                }))).replace(/§§HIGHLIGHT_START§§/g, "<gzkNfoUU>")).replace(/§§HIGHLIGHT_END§§/g, "</gzkNfoUU>")).replace(/&amp;/g, "&")
            }

            function s(e) {
                if (!e || "" === e.trim() || e.trim().includes(" ")) return e;
                let t = e.trim(),
                    i = o(758654).qg(t),
                    n = i.host;
                if (i.protocol && n || (n = (i = o(758654).qg(`http://${t}`)).host), !n) return e;
                n = n.replace(/^www./i, "");
                let r = i.pathname || "",
                    a = i.hash || "";
                if (r.length + a.length <= 20) return `${n}${r}${a}`;
                let l = r + a,
                    s = l.slice(0, 3),
                    d = l.slice(-3);
                return `(${n}${s}…${d})`
            }

            function d(e) {
                let t = e;
                return (t = t.replace(/(&gt;)/g, ">")).replace(/(&lt;)/g, "<")
            }
        },
        108053: (e, t, o) => {
            o.d(t, {
                Z: () => r,
                o: () => l
            });
            var i = o(296540),
                n = o(474848);

            function r(e) {
                let {
                    property: t,
                    propertySchema: r,
                    collectionContextStore: a
                } = e, s = (0, o(533992).v3)(), d = (0, i.useCallback)(e => {
                    let i = a.collectionStore();
                    if (!i || !(0, o(9247).sO)(r)) return;
                    let n = { ...r,
                            limit: Number(e) ? 1 : void 0
                        },
                        l = i.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "CollectionSettingsLimitOptions.handleLimitChange",
                        environment: s,
                        canUndo: !0,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        perform: e => {
                            (0, o(957395).F)({
                                environment: s,
                                collectionStore: i,
                                update: {
                                    [t]: n
                                },
                                transaction: e
                            })
                        }
                    });
                    let d = Number(e) ? `${r.type}_toggle_limit_on` : `${r.type}_toggle_limit_off`;
                    (0, o(8043).V)({
                        environment: s,
                        collectionStore: a.collectionStore(),
                        collectionViewStore: a.collectionViewStore(),
                        property: t,
                        from: "view_settings",
                        action: d
                    })
                }, [a, s, t, r]);
                return (0, o(9247).sO)(r) ? "relation" === r.type && r.connectedRelation ? (0, n.jsx)(l, {
                    propertyType: r.type,
                    connectedRelation: !0,
                    selectedKey: r.limit ? "1" : "no_limit",
                    onChange: d
                }) : (0, n.jsx)(l, {
                    propertyType: r.type,
                    selectedKey: r.limit ? "1" : "no_limit",
                    onChange: d
                }) : null
            }
            let a = {
                minWidth: 190
            };

            function l(e) {
                let {
                    propertyType: t,
                    selectedKey: i,
                    connectedRelation: r,
                    onChange: l
                } = e;
                return (0, n.jsx)(o(529983).A, {
                    icon: o(115601).i,
                    title: (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Limit",
                        id: "database.viewSettings.collectionPropertyLimitHelpers.limit"
                    }),
                    selectedKey: i,
                    popupStyle: a,
                    options: [(0, o(840403).Q)("1", t, r), (0, o(840403).Q)("no_limit", t)],
                    onChange: l
                })
            }
        },
        115601: (e, t, o) => {
            o.d(t, {
                i: () => n
            }), o(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.38 5.51 19.25 8.97",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M8.793 6.767c-.816 0-1.472.465-1.71 1.036a.625.625 0 1 1-1.154-.482C6.38 6.242 7.52 5.517 8.794 5.517c1.618 0 3.068 1.181 3.068 2.786a2.62 2.62 0 0 1-.762 1.835l-3.312 3.095h3.637a.625.625 0 1 1 0 1.25h-5.22a.625.625 0 0 1-.427-1.081l4.453-4.163a1.37 1.37 0 0 0 .381-.936c0-.775-.742-1.536-1.818-1.536m7.576 0c-.868 0-1.508.425-1.724.877a.625.625 0 0 1-1.127-.54c.473-.99 1.629-1.587 2.85-1.587.799 0 1.546.247 2.107.675.56.429.962 1.066.962 1.819s-.401 1.39-.962 1.819l-.036.026q.085.056.165.116c.595.448 1.02 1.114 1.02 1.902s-.425 1.454-1.02 1.903c-.595.448-1.388.706-2.236.706-1.287 0-2.488-.6-3.008-1.6a.625.625 0 1 1 1.108-.577c.252.484.952.927 1.9.927.602 0 1.125-.185 1.484-.455.358-.27.522-.595.522-.904 0-.308-.164-.634-.522-.904-.359-.27-.882-.455-1.484-.455h-.554a.625.625 0 0 1 0-1.25h.44a1 1 0 0 1 .114-.01c.549 0 1.023-.17 1.348-.419.323-.247.47-.544.47-.825s-.147-.579-.47-.826c-.325-.247-.8-.418-1.348-.418M3.731 6.22l.005.078v7.56a.625.625 0 0 1-1.25 0V7.21l-1.182.658a.625.625 0 0 1-.608-1.092L2.806 5.6a.625.625 0 0 1 .925.62"
                    })
                },
                n = (0, o(104509).wt)("numbers123", i, "default")
        },
        115688: (e, t, o) => {
            o.d(t, {
                B: () => f,
                M: () => m
            });
            var i = o(296540),
                n = () => o(421439);
            o(16280), o(944114), o(898992), o(354520), o(737550);
            var r = () => o(986939),
                a = () => o(140030);
            o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698);
            var l = () => o(682956),
                s = () => o(247438),
                d = () => o(593186),
                c = () => o(861988),
                u = () => o(381453);

            function p(e) {
                let t, {
                        workflowData: i,
                        spaceId: n,
                        getRecordModel: d
                    } = e,
                    c = [];
                if ((0, o(886883).ap)(i.instructions)) {
                    t = i.instructions.id;
                    let e = d({
                        table: l().ev,
                        id: t,
                        spaceId: n
                    });
                    if (e) {
                        let t = function e(t) {
                            let {
                                blockModel: o,
                                getRecordModel: i,
                                spaceId: n,
                                depth: r = 0
                            } = t;
                            if (r >= 50) return [];
                            let a = [];
                            for (let e of ["title", "link", "source", "caption"]) {
                                let t = o.getProperty(e, i);
                                if (t) {
                                    let e = g(t);
                                    a.push(...e);
                                    let o = (0, s().q4_)(t);
                                    o && a.push(o)
                                }
                            }
                            let d = o.getFormat();
                            for (let t of (d && "image_hyperlink" in d && d.image_hyperlink && a.push(d.image_hyperlink), o.getContentIds())) {
                                let o = i({
                                    table: l().ev,
                                    id: t,
                                    spaceId: n
                                });
                                if (o) {
                                    let t = e({
                                        blockModel: o,
                                        getRecordModel: i,
                                        spaceId: n,
                                        depth: r + 1
                                    });
                                    a.push(...t)
                                }
                            }
                            return a
                        }({
                            blockModel: e,
                            getRecordModel: d,
                            spaceId: n
                        });
                        c.push(...t)
                    }
                } else {
                    let e = (0, o(886883).rr)(i.instructions),
                        t = g(e);
                    c.push(...t);
                    let n = e ? (0, s().q4_)(e) : "";
                    n && c.push(n)
                }
                let u = function(e) {
                        let t, i, {
                                input: n,
                                uriContext: r
                            } = e,
                            l = (i = [...(0, o(936868).QB)(), "page:\\/\\/[^\\s\\}]+"].join("|"), RegExp(`(?:\\{\\{)?(${i}|https?:\\/\\/[^\\s)\\]"}]+|(?:www\\.)?notion\\.so\\/[^\\s)\\]"}]+)(?:\\}\\})?`, "g")),
                            s = [];
                        for (; null !== (t = l.exec(n));) {
                            let e = t[1];
                            if (e) {
                                e.startsWith("page://") && (e = e.replace("page://", "pageOrCollectionViewBlock://"));
                                try {
                                    let t = (0, a().Mg)(e, r);
                                    s.push({
                                        url: e,
                                        parsed: t
                                    })
                                } catch (e) {
                                    continue
                                }
                            }
                        }
                        return s
                    }({
                        input: c.join(" "),
                        uriContext: {
                            baseUrl: r().A.domainBaseUrl,
                            publicDomainName: r().A.publicDomainName
                        }
                    }),
                    p = function(e) {
                        let {
                            baseUrl: t,
                            workflowInstructions: i,
                            publishedArtifactPointer: n,
                            getPublishedArtifactModel: r
                        } = e, l = new Set;
                        if ((0, o(886883).ap)(i) && l.add((0, a().Q2)({
                                baseUrl: t,
                                pageId: i.id
                            })), n) {
                            let e = r(n);
                            if ((null == e ? void 0 : e.type) === "version") {
                                var s;
                                let i = null == (s = e.getData()) ? void 0 : s.instructions;
                                (0, o(886883).ap)(i) && l.add((0, a().Q2)({
                                    baseUrl: t,
                                    pageId: i.id
                                }))
                            }
                        }
                        return l
                    }({
                        baseUrl: r().A.domainBaseUrl,
                        workflowInstructions: i.instructions,
                        publishedArtifactPointer: i.published_artifact_pointer,
                        getPublishedArtifactModel: e => d(e)
                    });
                return {
                    instructionUrls: u.filter(({
                        url: e
                    }) => !p.has(e)),
                    workflowInstructionsId: t
                }
            }

            function g(e) {
                if (!e) return [];
                let t = [];
                for (let o of (t.push(...(0, s().JnO)(e)), (0, s().RQ)(e))) {
                    let e = (0, s().uPN)(o),
                        i = (0, s().Sev)(e);
                    if (i) {
                        let e = (0, s().i$F)(i);
                        if (null != e && e.id) {
                            let o = `${r().A.domainBaseUrl}/${e.id.replace(/-/g,"")}`;
                            t.push(o)
                        }
                    }
                }
                return t
            }

            function m(e) {
                let {
                    workflowStore: t
                } = e, {
                    workflowValue: i
                } = (0, o(867587).N)(t, !0), n = (0, o(682985).K8)(() => {
                    if ((0, o(886883).ap)(i.instructions)) return o(970831).B.createChildStore(t, i.instructions)
                }, [i.instructions, t]), r = (0, o(682985).K8)(() => !(void 0 === n || n.isReady()), [n]);
                return {
                    instructionUrls: (0, o(682985).K8)(() => {
                        let e = t.getSpaceId();
                        return !e || r ? [] : p({
                            workflowData: i,
                            spaceId: e,
                            getRecordModel: t.getRecordModel
                        }).instructionUrls
                    }, [i, t, r]),
                    isLoading: r
                }
            }

            function f(e) {
                let {
                    workflowStore: t
                } = e, a = (0, o(533992).v3)(), {
                    workflowValue: s
                } = (0, o(867587).N)(t, !0), {
                    isLoading: g
                } = m({
                    workflowStore: t
                }), f = (0, o(682985).K8)(() => {
                    let e = t.getSpaceId();
                    return !e || t.table === o(581654).U6 || g ? [] : function(e) {
                        let {
                            pointer: t,
                            workflowData: i,
                            spaceId: n,
                            getRecordModel: a
                        } = e, s = i.modules || [], g = [], {
                            instructionUrls: m,
                            workflowInstructionsId: f
                        } = p({
                            workflowData: i,
                            spaceId: n,
                            getRecordModel: a
                        }), y = i.draft_runtime_actor_pointer ? ? i.runtime_actor_pointer;
                        for (let e of s) {
                            let s = d().Nh[e.type];
                            if (!s) throw Error(`Unknown module type: ${e.type}`);
                            if (s.autoGrantPermissions) {
                                let d = "notion" === e.type ? m.filter(t => (function(e) {
                                        let {
                                            workflowInstructionsId: t,
                                            instructionUrl: i,
                                            runtimeActorPointer: n,
                                            getRecordModel: r,
                                            spaceId: a,
                                            module: s
                                        } = e;
                                        if (function(e) {
                                                var t;
                                                let {
                                                    module: o,
                                                    instructionUrl: i
                                                } = e;
                                                return !!(null == (t = o.permissions) ? void 0 : t.some(e => (function(e) {
                                                    let {
                                                        permission: t,
                                                        instructionUrl: o
                                                    } = e;
                                                    return "notion" === t.type && ("pageOrCollectionViewBlock" === t.identifier.type && "pageOrCollectionViewBlock" === o.type && t.identifier.blockId === o.id || "pageOrCollectionViewBlock" === t.identifier.type && "collection" === o.type && t.identifier.blockId === o.collectionId) && t.actions.some(e => "editor" === e || "reader" === e || "comment_only" === e || "read_and_write" === e)
                                                })({
                                                    permission: e,
                                                    instructionUrl: i
                                                })))
                                            }({
                                                module: s,
                                                instructionUrl: i
                                            })) return !1;
                                        if (!n || "collectionProperty" !== i.type && "pageOrCollectionViewBlock" !== i.type) return !0;
                                        let d = "pageOrCollectionViewBlock" === i.type ? {
                                                table: l().ev,
                                                id: i.id,
                                                spaceId: a
                                            } : {
                                                table: o(46241).V,
                                                id: i.collectionId,
                                                spaceId: a
                                            },
                                            c = (0, o(688502).Yn)(d, r);
                                        if (0 === c.length) return !0;
                                        if (c.some(e => e.table === l().ev && e.id === t)) return !1;
                                        let u = (0, o(310248).uI)({
                                            recordPointers: new(o(227318)).d([d]),
                                            actorPointers: new(o(227318)).d([n]),
                                            getRecordModel: r
                                        });
                                        return !(0, o(310248).Dk)({
                                            actorPointer: n,
                                            ancestors: c,
                                            permissionsContext: u
                                        }).some(e => e.permissionItem.role && (0, o(642157).Tt)(e.permissionItem.role))
                                    })({
                                        workflowInstructionsId: f,
                                        instructionUrl: t.parsed,
                                        runtimeActorPointer: y,
                                        getRecordModel: a,
                                        spaceId: n,
                                        module: e
                                    })) : m,
                                    p = s.autoGrantPermissions({
                                        module: e,
                                        workflow: i,
                                        getRecordModel: a,
                                        uriContext: {
                                            baseUrl: r().A.domainBaseUrl,
                                            publicDomainName: r().A.publicDomainName
                                        },
                                        spaceId: n,
                                        instructionUrls: d
                                    });
                                "notion" === p.type && y && (p = function(e) {
                                    let {
                                        module: t,
                                        runtimeActorPointer: i,
                                        getRecordModel: n,
                                        spaceId: r
                                    } = e, a = t.permissions ? ? [], s = a.filter(e => {
                                        if ("notion" !== e.type || "pageOrCollectionViewBlock" !== e.identifier.type || !i) return !0;
                                        let t = {
                                            table: l().ev,
                                            id: e.identifier.blockId,
                                            spaceId: r
                                        };
                                        if (!n(t)) return !0;
                                        let a = (0, o(688502).Yn)(t, n);
                                        if (0 === a.length) return !0;
                                        let s = (0, o(310248).uI)({
                                            recordPointers: new(o(227318)).d([t]),
                                            actorPointers: new(o(227318)).d([i]),
                                            getRecordModel: n
                                        });
                                        return !(0, o(310248).Dk)({
                                            actorPointer: i,
                                            ancestors: a,
                                            permissionsContext: s
                                        }).some(e => e.permissionItem.role && (0, o(642157).Tt)(e.permissionItem.role))
                                    });
                                    return s.length === a.length ? t : { ...t,
                                        permissions: s
                                    }
                                }({
                                    module: p,
                                    runtimeActorPointer: y,
                                    getRecordModel: a,
                                    spaceId: n
                                })), u().n4(e, p) || g.push((0, c().xb)({
                                    pointer: t,
                                    module: p
                                }))
                            }
                        }
                        return g
                    }({
                        pointer: t.pointer,
                        workflowData: s,
                        spaceId: e,
                        getRecordModel: t.getRecordModel
                    })
                }, [s, t, g]), y = (0, i.useCallback)(() => {
                    if (t.table === o(581654).U6) return;
                    let e = t.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "WorkflowActions.autoGrantPermissions",
                        environment: a,
                        canUndo: !0,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        perform: e => {
                            for (let o of f)(0, n().y4)({
                                store: t,
                                operation: o,
                                transaction: e
                            })
                        }
                    })
                }, [f, a, t]);
                return {
                    autoGrantOperations: f,
                    handleAutoGrantPermissions: y,
                    isLoading: g
                }
            }
        },
        123190: (e, t, o) => {
            o.d(t, {
                k: () => i
            });

            function i(e, t) {
                var i;
                if ((null == t ? void 0 : t.type) !== "relation") return;
                let n = null == (i = o(506507).A.state.caches[o(526226).oB]) ? void 0 : i.inMemoryRecordCache,
                    r = (0, o(390768).N)(t),
                    a = r && e ? o(356912).m.createChildStore(e, r) : void 0;
                return n ? null == a ? void 0 : a.clone(n) : a
            }
        },
        140168: (e, t, o) => {
            o.d(t, {
                A: () => a
            }), o(581454), o(296540);
            var i = o(474848);
            let n = {
                    tall: 80,
                    short: 50
                },
                r = {
                    cardUnselected: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexGrow: 1,
                        flexBasis: 82,
                        minWidth: 0,
                        color: o(632079).Tj.palette.gray[500]
                    },
                    cardSelected: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexGrow: 1,
                        flexBasis: 82,
                        minWidth: 0,
                        color: o(632079).Tj.palette.gray[500]
                    },
                    cardButtonHovered: {
                        background: o(632079).Tj.background.elevated,
                        ...(0, o(418676).nl)({
                            width: 2,
                            color: o(632079).Tj.blue.border.strong
                        })
                    },
                    cardButtonSelected: (0, o(418676).nl)({
                        width: 2,
                        color: o(632079).Tj.blue.border.accentPrimary
                    }),
                    cardLabelSelected: {
                        fontWeight: o(699422).Wy.semibold,
                        color: o(632079).Tj.palette.gray[900]
                    },
                    iconSelected: {
                        color: o(632079).Tj.blue.icon.accentPrimary,
                        fill: o(632079).Tj.blue.icon.accentPrimary
                    },
                    imageSelected: {
                        opacity: 1
                    }
                };

            function a(e) {
                let {
                    disabled: t,
                    options: a,
                    selectedOption: l,
                    onOptionSelected: s,
                    height: d
                } = e, c = (0, o(960253).e)(), u = (0, o(960253).I)(() => ({
                    cardButtonBase: {
                        height: n[d],
                        width: "100%",
                        borderRadius: 6,
                        borderStyle: "solid",
                        transition: "border-color 0.3s, box-shadow 0.3s",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: t ? o(632079).Tj.icon.tertiary : void 0,
                        background: o(632079).Tj.background.elevated
                    },
                    cardButtonUnselected: (0, o(418676).nl)({
                        width: 1,
                        color: "dark" === c ? o(632079).Tj.palette.gray[400] : o(632079).Tj.palette.gray[100]
                    }),
                    cardLabelBase: { ...o(699422).RC,
                        marginTop: 6,
                        fontSize: 12,
                        lineHeight: "14px",
                        maxWidth: "100%",
                        color: t ? o(632079).Tj.icon.tertiary : void 0
                    },
                    iconBase: {
                        height: 24,
                        width: 24,
                        color: t ? void 0 : o(632079).Tj.icon.secondary
                    },
                    imageBase: {
                        maxHeight: n[d],
                        opacity: t ? .5 : 1
                    }
                }), [t, d, c]), p = a.available.map(e => {
                    let n = a.appearance[e],
                        d = e === l;
                    return (0, i.jsxs)("div", {
                        style: d ? r.cardSelected : r.cardUnselected,
                        children: [(0, i.jsx)(o(64960).Ay, {
                            style: { ...u.cardButtonBase,
                                ...d ? r.cardButtonSelected : u.cardButtonUnselected
                            },
                            hoveredStyle: r.cardButtonHovered,
                            pressedStyle: r.cardButtonHovered,
                            ignoreLocalHoverState: d,
                            disabled: t,
                            onClick: () => {
                                s(e)
                            },
                            children: n.icon ? n.icon.function({ ...u.iconBase,
                                ...{
                                    height: n.icon.size,
                                    width: n.icon.size
                                },
                                ...d ? r.iconSelected : {}
                            }) : (0, i.jsx)("img", {
                                src: n.image.src,
                                style: {
                                    width: n.image.width,
                                    height: n.image.height,
                                    ...u.imageBase,
                                    ...d ? r.imageSelected : {}
                                }
                            })
                        }), (0, i.jsx)("div", {
                            style: { ...u.cardLabelBase,
                                ...d ? r.cardLabelSelected : {}
                            },
                            children: n.label
                        })]
                    }, e)
                });
                return (0, i.jsx)(o(4458).fI, {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    justifyContent: "space-between",
                    alignItems: "center",
                    columnGap: 8,
                    children: p
                })
            }
        },
        157921: (e, t, o) => {
            o.d(t, {
                L: () => a
            });
            var i = o(296540),
                n = o(474848);
            let r = (0, o(109939).YK)({
                deleteLabel: {
                    defaultMessage: "Delete agent",
                    id: "collectionSettings.propertyAgentAutofill.deleteAgent.icon"
                },
                agentDeletedSuccessfully: {
                    defaultMessage: "Agent deleted successfully",
                    id: "database.collectionViewAgentsMenu.agentDeletedSuccessfully"
                }
            });

            function a(e) {
                let {
                    collectionSettingsStore: t,
                    collectionStore: a,
                    onDeleteAgent: l,
                    spaceId: s,
                    workflowStore: d
                } = e, c = (0, o(533992).v3)(), u = (0, o(109939).tz)(), p = (0, i.useCallback)(() => {
                    if (!s || !d || !a) return;
                    let e = a.getParentCollectionViewBlockStore();
                    o(528372).MT({
                        workflowStore: d,
                        collectionStore: a,
                        collectionViewBlockStore: e,
                        environment: c,
                        spaceId: s
                    }), t && (0, o(72762).o)({
                        collectionSettingsStore: t
                    }), l && l(), o(436555).D6({
                        label: u.formatMessage(r.agentDeletedSuccessfully)
                    })
                }, [s, d, a, c, t, l, u]), g = (0, o(682985).K8)(() => null == d ? void 0 : d.canEdit(), [d]), m = (0, o(682985).K8)(() => !!d && !1 === d.getAlive(), [d]), f = (0, i.useMemo)(() => !!d && !!a && !!s && !!g && !m, [a, g, m, s, d]);
                return {
                    handleDeleteAgent: p,
                    shouldShowDeleteButton: f,
                    deleteButton: f ? (0, n.jsx)(o(51831).m, {
                        content: () => (0, n.jsx)(o(109939).sA, { ...r.deleteLabel
                        }),
                        children: e => (0, n.jsx)(o(374533).A, { ...e,
                            size: "xxs",
                            icon: () => (0, n.jsx)(o(16275).I, {
                                icon: o(968411).trashIcon,
                                colorVariant: "tertiary"
                            }),
                            ariaLabel: u.formatMessage(r.deleteLabel),
                            onClick: p
                        })
                    }) : null
                }
            }
        },
        162857: (e, t, o) => {
            o.d(t, {
                u: () => i
            });

            function i(e, t) {
                let {
                    r: i,
                    g: n,
                    b: r
                } = (null == e ? void 0 : e.info.accent_color) || {
                    r: 0,
                    g: 0,
                    b: 0
                }, a = `rgba(${i},${n},${r},${"dark"===t?.6:1})`, l = (0, o(650342).e$)(a, .4), s = (0, o(650342).e$)(a, .9);
                return {
                    background: a,
                    hoveredBackground: l,
                    pressedBackground: s
                }
            }
        },
        182918: (e, t, o) => {
            o.d(t, {
                V: () => n,
                X: () => r
            });
            let i = {
                    "de-DE": {
                        time: {
                            "12h": "LT",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "da-DK": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "fi-FI": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "nb-NO": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "nl-NL": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "sv-SE": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "en-US": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "es-ES": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "es-LA": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "fr-FR": {
                        time: {
                            "12h": "LT",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "pt-BR": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "ko-KR": {
                        time: {
                            "12h": "A h:mm",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "YYYY[년] MMMM"
                    },
                    "zh-CN": {
                        time: {
                            "12h": "A h:mm",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "YYYY[年]MMM"
                    },
                    "zh-TW": {
                        time: {
                            "12h": "A h:mm",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "YYYY[年]MMM"
                    },
                    "ja-JP": {
                        time: {
                            "12h": "A h:mm",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "YYYY[年]MMM"
                    },
                    "vi-VN": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "th-TH": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "id-ID": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "en-GB": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "he-IL": {
                        time: {
                            "12h": "LT",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    "ar-SA": {
                        time: {
                            "12h": "h:mm A",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    },
                    pseudo: {
                        time: {
                            "12h": "A h:mm",
                            "24h": "H:mm",
                            hidden: o(943003).jk
                        },
                        month: "MMMM YYYY"
                    }
                },
                n = ["de-DE", "fr-FR", "he-IL"];

            function r(e) {
                return i[e]
            }
        },
        187649: (e, t, o) => {
            let i, n;

            function r(e) {
                i = e
            }
            async function a() {
                return n || (i ? n = await i() : void 0)
            }
            o.d(t, {
                Q: () => r,
                z: () => a
            })
        },
        300921: (e, t, o) => {
            o.r(t), o.d(t, {
                arrowUpDownIcon: () => n,
                iconDefinition: () => i
            }), o(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.24 3.26 15.53 13.47",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M14.075 3.45a.625.625 0 0 0-.884 0l-3.497 3.5a.625.625 0 0 0 .883.884l2.431-2.431v10.705a.625.625 0 0 0 1.25 0V5.402l2.431 2.43a.625.625 0 1 0 .884-.883zM2.427 12.167a.625.625 0 0 1 .884 0l2.43 2.431V3.893a.625.625 0 0 1 1.25 0v10.705l2.431-2.43a.625.625 0 0 1 .884.883L6.81 16.55a.625.625 0 0 1-.884 0l-3.498-3.498a.625.625 0 0 1 0-.884"
                    })
                },
                n = (0, o(104509).wt)("arrowUpDown", i, "default")
        },
        301950: (e, t, o) => {
            o.d(t, {
                y: () => n
            });
            let i = (0, o(109939).YK)({
                none: {
                    defaultMessage: "None",
                    id: "dateFormatHelpers.reminderMenuItems.none"
                },
                onTheDay: {
                    defaultMessage: "On day of event {formattedTimeText}",
                    id: "dateFormatHelpers.reminderMenuItems.onTheDayOfEvent"
                },
                hoursBefore: {
                    defaultMessage: "{numberOfHours, plural, one {{numberOfHours} hour before} other {{numberOfHours} hours before}}",
                    id: "dateFormatHelpers.reminderMenuItems.hoursBefore"
                },
                minutesBefore: {
                    defaultMessage: "{numberOfMinutes, plural, one {{numberOfMinutes} minute before} other {{numberOfMinutes} minutes before}}",
                    id: "dateFormatHelpers.reminderMenuItems.minutesBefore"
                },
                yearsBefore: {
                    defaultMessage: "{numberOfYears, plural, one {{numberOfYears} year before {formattedTimeText}} other {{numberOfYears} years before {formattedTimeText}}}",
                    id: "dateFormatHelpers.reminderMenuItems.yearsBefore"
                },
                daysBefore: {
                    defaultMessage: "{numberOfDays, plural, one {{numberOfDays} day before {formattedTimeText}} other {{numberOfDays} days before {formattedTimeText}}}",
                    id: "dateFormatHelpers.reminderMenuItems.daysBefore"
                },
                monthsBefore: {
                    defaultMessage: "{numberOfMonths, plural, one {{numberOfMonths} month before {formattedTimeText}} other {{numberOfMonths} months before {formattedTimeText}}}",
                    id: "dateFormatHelpers.reminderMenuItems.monthsBefore"
                },
                weeksBefore: {
                    defaultMessage: "{numberOfWeeks, plural, one {{numberOfWeeks} week before {formattedTimeText}} other {{numberOfWeeks} weeks before {formattedTimeText}}}",
                    id: "dateFormatHelpers.reminderMenuItems.weeksBefore"
                },
                atTimeOf: {
                    defaultMessage: "At time of event",
                    id: "dateFormatHelpers.reminderMenuItems.atTimeOfEvent"
                }
            });

            function n(e) {
                let {
                    reminder: t,
                    shouldShowTime: n,
                    intl: r,
                    formatTime: a
                } = e;
                if (!o(943003).DG(t)) return r.formatMessage(i.none);
                if (o(943003).fc(t)) {
                    let {
                        unit: e,
                        value: o,
                        time: l
                    } = t, s = a({
                        start_time: l,
                        time_format: "LT",
                        humanReadable: !0,
                        intl: r
                    }), d = n ? `(${s})` : "";
                    if (0 === o) return r.formatMessage(i.onTheDay, {
                        formattedTimeText: d
                    });
                    if ("day" === e) return r.formatMessage(i.daysBefore, {
                        formattedTimeText: d,
                        numberOfDays: o
                    });
                    if ("year" === e) return r.formatMessage(i.yearsBefore, {
                        formattedTimeText: d,
                        numberOfYears: o
                    });
                    else if ("month" === e) return r.formatMessage(i.monthsBefore, {
                        formattedTimeText: d,
                        numberOfMonths: o
                    });
                    else return r.formatMessage(i.weeksBefore, {
                        formattedTimeText: d,
                        numberOfWeeks: o
                    })
                } {
                    let {
                        unit: e,
                        value: o
                    } = t;
                    return 0 === o ? r.formatMessage(i.atTimeOf) : "hour" === e ? r.formatMessage(i.hoursBefore, {
                        numberOfHours: o
                    }) : r.formatMessage(i.minutesBefore, {
                        numberOfMinutes: o
                    })
                }
            }
        },
        344831: (e, t, o) => {
            o.r(t), o.d(t, {
                RollupPropertyMenu: () => l
            }), o(944114), o(898992), o(354520), o(803949);
            var i = o(296540);

            function n(e, t) {
                (0, o(195857).DO_NOT_USE_trackLegacy)("configure_rollup_target_property", t)
            }
            var r = o(474848);
            let a = {
                style0: {
                    flexShrink: 0
                },
                style1: {
                    flexShrink: void 0
                },
                style2: {
                    color: o(632079).Tj.text.secondary
                },
                style3: {
                    color: o(632079).Tj.text.secondary
                }
            };

            function l({
                context: e,
                schema: t,
                property: i,
                parentStore: n,
                onDismiss: f,
                disabled: y,
                analyticsFrom: h,
                onChange: b
            }) {
                let S = (0, o(682985).uB)(void 0, o(510969).A),
                    x = (0, o(682985).uB)(void 0, o(510969).A),
                    v = (0, o(682985).uB)(void 0, o(510969).A),
                    A = (0, o(83208).X)("rollup_on_person_property"),
                    j = (0, o(924448).o7)(),
                    w = (0, o(682985).K8)(() => (function({
                        schema: e,
                        property: t,
                        parentStore: i,
                        PeopleCollectionStore: n
                    }) {
                        var r, a, l;
                        let s, d, c, u = e[t];
                        if (!u) return;
                        let p = {};
                        if ("person" === u.rollup_type && u.person_property) {
                            let t = e[u.person_property];
                            (null == t ? void 0 : t.type) === "person" && (s = t), n && (d = n, p = (0, o(26837).U$)(n.getSchema())), u.target_property && ((0, o(26837).cl)(u.target_property) ? c = (0, o(26837).dk)(u.target_property) : p && Object.keys(p).length > 0 && (c = p[(null == (r = d) ? void 0 : r.getMappedProperty(u.target_property)) ? ? u.target_property]))
                        } else if (u.relation_property) {
                            let t = e[u.relation_property];
                            if ((null == t ? void 0 : t.type) === "relation") {
                                s = t;
                                let e = (0, o(390768).N)(t);
                                p = (null == (a = d = e ? o(356912).m.createChildStore(i, e) : void 0) ? void 0 : a.getSchema()) ? ? {}
                            }
                            d && u.target_property && (c = p[(null == (l = d) ? void 0 : l.getMappedProperty(u.target_property)) ? ? u.target_property])
                        }
                        return {
                            propertySchema: u,
                            sourcePropertySchema: s,
                            relatedCollectionStore: d,
                            relatedCollectionSchema: p,
                            targetPropertySchema: c
                        }
                    })({
                        schema: t,
                        property: i,
                        parentStore: n,
                        PeopleCollectionStore: j
                    }), [t, i, n, j]),
                    M = !!((null == w ? void 0 : w.propertySchema) && (null == w ? void 0 : w.targetPropertySchema) && (0, o(561872).rl)(w.propertySchema, t)),
                    C = !!((null == w ? void 0 : w.propertySchema.relation_property) || (null == w ? void 0 : w.propertySchema.person_property)),
                    T = !!(C && (null == w ? void 0 : w.propertySchema.target_property)),
                    k = (0, o(682985).K8)(() => o(381453).oE([function({
                        disabled: e,
                        sourcePropertySchema: t,
                        analyticsFrom: i,
                        relationButtonPopupStore: n,
                        canSelectPersonProperty: l,
                        onChange: s,
                        schema: d,
                        property: c
                    }) {
                        if (c && d) return {
                            key: 0,
                            render: e => (0, r.jsx)(o(844565).A, { ...e,
                                title: l ? (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "Source property",
                                    id: "database.viewSettings.rollupOptions.sourceProperty"
                                }) : (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "Relation",
                                    id: "database.viewSettings.rollupOptions.relationProperty"
                                })
                            }),
                            items: [{
                                key: 0,
                                render: g => (0, r.jsx)(o(656252).A, {
                                    popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                                    content: e => (0, r.jsx)(p, {
                                        parent: e,
                                        analyticsFrom: i,
                                        schema: d,
                                        property: c,
                                        onChange: s,
                                        canSelectPersonProperty: l
                                    }),
                                    buttonPopupStore: n,
                                    children: i => t ? (0, r.jsx)(o(34824).G, { ...(0, o(63390).A)(g, i),
                                        propertySchema: t,
                                        format: o(34824).e.Name,
                                        right: u(e),
                                        disabled: e
                                    }) : (0, r.jsx)(o(95582).A, { ...(0, o(63390).A)(g, i),
                                        title: l ? (0, r.jsx)(o(109939).sA, {
                                            id: "database.rollupProperty.editSourceProperty.buttonTitle",
                                            defaultMessage: "Select a source property…"
                                        }) : (0, r.jsx)(o(109939).sA, {
                                            id: "database.rollupProperty.editRelation.buttonTitle",
                                            defaultMessage: "Select an existing relation…"
                                        }),
                                        right: u(e),
                                        style: a.style3,
                                        disabled: e
                                    })
                                }, g.key),
                                action: () => {
                                    n.setState({
                                        open: !0
                                    })
                                }
                            }]
                        }
                    }({
                        disabled: y || M,
                        sourcePropertySchema: null == w ? void 0 : w.sourcePropertySchema,
                        analyticsFrom: h,
                        relationButtonPopupStore: v,
                        canSelectPersonProperty: A,
                        onChange: b,
                        schema: t,
                        property: i
                    }), function({
                        isEnabled: e,
                        disabled: t,
                        renderState: i,
                        analyticsFrom: n,
                        targetPropertyButtonPopupStore: a,
                        onChange: l,
                        schema: s,
                        property: c,
                        parentStore: p
                    }) {
                        if (i && i.propertySchema && s && c && p) return {
                            key: 1,
                            render: e => (0, r.jsx)(o(844565).A, { ...e,
                                title: (0, r.jsx)(o(109939).sA, {
                                    id: "database.rollupProperty.editProperty.title",
                                    defaultMessage: "Property"
                                }),
                                topBorder: !0
                            }),
                            items: [{
                                key: 0,
                                render: m => (0, r.jsx)(o(51831).m, {
                                    content: () => (0, r.jsx)(d, {}),
                                    disableTooltip: e,
                                    children: d => (0, r.jsx)(o(656252).A, {
                                        popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                                        content: e => (0, r.jsx)(g, {
                                            parent: e,
                                            analyticsFrom: n,
                                            schema: s,
                                            property: c,
                                            parentStore: p,
                                            onChange: l,
                                            renderState: i
                                        }),
                                        buttonPopupStore: a,
                                        children: n => i.targetPropertySchema ? (0, r.jsx)(o(34824).G, { ...m,
                                            propertySchema: i.targetPropertySchema,
                                            format: o(34824).e.Name,
                                            right: u(!e || t),
                                            disabled: !e || t,
                                            disabledFeedback: !0
                                        }) : (0, r.jsx)(o(95582).A, { ...m,
                                            ...(0, o(63390).A)(d, n),
                                            title: (0, r.jsx)(o(109939).sA, {
                                                id: "database.rollupProperty.editProperty.buttonTitle",
                                                defaultMessage: "Select a property…"
                                            }),
                                            right: u(!e || t),
                                            disabled: !e || t,
                                            disabledFeedback: !0
                                        })
                                    })
                                }, m.key),
                                action: () => {
                                    a.setState({
                                        open: !0
                                    })
                                }
                            }]
                        }
                    }({
                        isEnabled: C,
                        disabled: y || M,
                        renderState: w,
                        analyticsFrom: h,
                        targetPropertyButtonPopupStore: x,
                        onChange: b,
                        schema: t,
                        property: i,
                        parentStore: n
                    }), function({
                        isEnabled: e,
                        disabled: t,
                        renderState: i,
                        analyticsFrom: n,
                        aggregationButtonPopupStore: a,
                        onChange: l,
                        schema: d,
                        property: p
                    }) {
                        if (i && p && d) return {
                            key: 2,
                            render: e => (0, r.jsx)(o(844565).A, { ...e,
                                title: (0, r.jsx)(o(109939).sA, {
                                    id: "database.rollupProperty.editAggregate.title",
                                    defaultMessage: "Calculate"
                                }),
                                topBorder: !0
                            }),
                            items: [{
                                key: 0,
                                render: d => (0, r.jsx)(o(51831).m, {
                                    content: () => (0, r.jsx)(c, {}),
                                    disableTooltip: e,
                                    children: c => e ? (0, r.jsx)(o(656252).A, {
                                        popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                                        content: e => (0, r.jsx)(m, {
                                            parent: e,
                                            analyticsFrom: n,
                                            onChange: l,
                                            renderState: i
                                        }),
                                        buttonPopupStore: a,
                                        children: e => (0, r.jsx)(o(95582).A, { ...(0, o(63390).A)(d, e),
                                            title: (0, r.jsx)(s, {
                                                renderState: i
                                            }),
                                            right: u(t),
                                            disabled: t
                                        })
                                    }) : (0, r.jsx)(o(95582).A, { ...(0, o(63390).A)(d, c),
                                        title: (0, r.jsx)(o(109939).sA, {
                                            id: "database.rollupProperty.aggregate.showOriginal",
                                            defaultMessage: "Show original"
                                        }),
                                        right: u(t),
                                        disabled: !0,
                                        disabledFeedback: !0
                                    })
                                }, d.key),
                                action: () => {
                                    a.setState({
                                        open: !0
                                    })
                                }
                            }]
                        }
                    }({
                        isEnabled: T,
                        disabled: y,
                        renderState: w,
                        analyticsFrom: h,
                        aggregationButtonPopupStore: S,
                        onChange: b,
                        schema: t,
                        property: i
                    })]), [y, M, w, h, v, A, b, t, i, C, x, n, T, S]),
                    I = (0, o(682985).K8)(() => S.state.open, [S]),
                    _ = (0, o(682985).K8)(() => v.state.open, [v]),
                    P = (0, o(682985).K8)(() => x.state.open, [x]);
                if (!w) return null;
                if ("bpvOverlay" !== e) return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o(656252).A, {
                        popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                        alignmentToOrigin: "end",
                        content: e => (0, r.jsx)(p, {
                            parent: e,
                            analyticsFrom: h,
                            schema: t,
                            property: i,
                            onChange: b,
                            canSelectPersonProperty: A
                        }),
                        buttonPopupStore: v,
                        children: e => (0, r.jsx)(o(209572).A, {
                            icon: o(684668).arrowDiagonalUpRightIcon,
                            title: A ? (0, r.jsx)(o(109939).sA, {
                                defaultMessage: "Source property",
                                id: "database.viewSettings.rollupOptions.sourceProperty"
                            }) : (0, r.jsx)(o(109939).sA, {
                                defaultMessage: "Relation",
                                id: "database.viewSettings.rollupOptions.relationProperty"
                            }),
                            disabled: y || M,
                            showChevron: !0,
                            rotateChevron: _,
                            desktopTitleStyle: a.style0,
                            rightStyle: a.style1,
                            right: w.sourcePropertySchema ? (0, r.jsx)(o(151710).mA, {
                                propertySchema: w.sourcePropertySchema,
                                showIcon: !0
                            }) : (0, r.jsx)(o(109939).sA, {
                                id: "database.viewSettings.rollupOptions.selectRelation",
                                defaultMessage: "Select"
                            }),
                            ...e
                        })
                    }), (0, r.jsx)(o(51831).m, {
                        content: () => (0, r.jsx)(d, {}),
                        disableTooltip: C,
                        children: e => (0, r.jsx)(o(656252).A, {
                            popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                            alignmentToOrigin: "end",
                            content: e => (0, r.jsx)(g, {
                                parent: e,
                                analyticsFrom: h,
                                schema: t,
                                property: i,
                                parentStore: n,
                                onChange: b,
                                renderState: w
                            }),
                            buttonPopupStore: x,
                            children: t => (0, r.jsx)(o(209572).A, {
                                icon: o(550602).h,
                                title: (0, r.jsx)("span", {
                                    style: { ...!C && a.style2
                                    },
                                    children: (0, r.jsx)(o(109939).sA, {
                                        id: "database.viewSettings.rollupOptions.targetProperty",
                                        defaultMessage: "Target property"
                                    })
                                }),
                                disabled: !C || y || M,
                                showChevron: !0,
                                rotateChevron: P,
                                desktopTitleStyle: a.style0,
                                rightStyle: a.style1,
                                right: C && w.targetPropertySchema ? (0, r.jsx)(o(151710).mA, {
                                    propertySchema: w.targetPropertySchema,
                                    showIcon: !0
                                }) : (0, r.jsx)(o(109939).sA, {
                                    id: "database.viewSettings.rollupOptions.selectTargetProperty",
                                    defaultMessage: "Select"
                                }),
                                ...(0, o(63390).A)(e, t)
                            })
                        })
                    }), (0, r.jsx)(o(51831).m, {
                        content: () => (0, r.jsx)(c, {}),
                        disableTooltip: T,
                        children: e => (0, r.jsx)(o(656252).A, {
                            popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                            alignmentToOrigin: "end",
                            content: e => (0, r.jsx)(m, {
                                parent: e,
                                analyticsFrom: h,
                                onChange: b,
                                renderState: w
                            }),
                            buttonPopupStore: S,
                            children: t => (0, r.jsx)(o(209572).A, {
                                icon: o(36418).v,
                                disabled: !T || y,
                                title: (0, r.jsx)("span", {
                                    style: { ...!T && a.style2
                                    },
                                    children: (0, r.jsx)(o(109939).sA, {
                                        defaultMessage: "Calculate",
                                        id: "database.viewSettings.rollupOptions.calculate"
                                    })
                                }),
                                showChevron: !0,
                                rotateChevron: I,
                                desktopTitleStyle: a.style0,
                                rightStyle: a.style1,
                                right: T && (0, r.jsx)(s, {
                                    renderState: w
                                }),
                                ...(0, o(63390).A)(e, t)
                            })
                        })
                    })]
                }); {
                    let e;
                    return e = o(986939).A.isMobile ? {
                        menuType: o(649476).gu.Modal,
                        title: w.propertySchema.name,
                        right: (0, r.jsx)(o(109939).sA, { ...o(789722).W.done
                        }),
                        onClickRight: f
                    } : {
                        menuType: o(649476).gu.Popup
                    }, (0, r.jsx)(o(747369).A, { ...e,
                        children: (0, r.jsx)(o(558045).A, {
                            type: o(558045).O.Vertical,
                            initialFocus: void 0,
                            sections: k
                        })
                    })
                }
            }

            function s({
                renderState: e
            }) {
                return e ? e.propertySchema.aggregation ? (0, r.jsx)(r.Fragment, {
                    children: o(567224).zY[(0, o(288299).ZP)(e.propertySchema.aggregation)]
                }) : "person" === e.propertySchema.rollup_type && (0, o(722371).Xk)(o(26837).$J, e.propertySchema.target_property) ? (0, r.jsx)(o(109939).sA, {
                    id: "database.rollupProperty.aggregate.showValues",
                    defaultMessage: "Show values"
                }) : (0, r.jsx)(o(109939).sA, {
                    id: "database.rollupProperty.aggregate.showOriginal",
                    defaultMessage: "Show original"
                }) : null
            }

            function d() {
                return (0, r.jsx)(o(109939).sA, {
                    id: "database.rollupProperty.editProperty.tooltip",
                    defaultMessage: "Select an existing relation first."
                })
            }

            function c() {
                return (0, r.jsx)(o(109939).sA, {
                    id: "database.rollupProperty.editAggregate.tooltip",
                    defaultMessage: "Select an existing relation and property first."
                })
            }

            function u(e) {
                return e ? void 0 : (0, r.jsx)(o(16275).I, {
                    icon: o(595453).arrowChevronSingleDownSmallIcon,
                    size: "sm",
                    colorVariant: "secondary"
                })
            }

            function p({
                parent: e,
                analyticsFrom: t,
                schema: n,
                property: a,
                onChange: l,
                canSelectPersonProperty: s
            }) {
                let d = (0, o(533992).v3)(),
                    c = (0, i.useCallback)(e => (function(e, t, i, n, r) {
                        let a, l = i[n],
                            s = i[e];
                        if (l && s && ("relation" === s.type || "person" === s.type)) {
                            if ("person" === s.type) a = { ...l,
                                rollup_type: "person",
                                person_property: e,
                                relation_property: void 0,
                                target_property: o(94296).Ym,
                                target_property_type: "text",
                                aggregation: void 0
                            };
                            else {
                                var d;
                                a = { ...l,
                                    rollup_type: "relation",
                                    relation_property: e,
                                    person_property: void 0,
                                    target_property: "title",
                                    target_property_type: "title",
                                    aggregation: void 0
                                }, d = { ...(0, o(752242).sl)(void 0),
                                    from: t
                                }, (0, o(195857).DO_NOT_USE_trackLegacy)("configure_rollup_relation", d)
                            }
                            null == r || r({
                                propertySchema: a
                            })
                        }
                    })(e, t, n, a, l), [d, t, n, a, l]),
                    u = (0, i.useCallback)(e => !!("relation" === e.type || "person" === e.type && s), [s]);
                return (0, r.jsx)(o(645153).A, {
                    schema: n,
                    isRelationProperty: !1,
                    onAccept: c,
                    onClose: e.close,
                    allowProperty: u
                })
            }

            function g({
                parent: e,
                analyticsFrom: t,
                schema: a,
                property: l,
                parentStore: s,
                onChange: d,
                renderState: c
            }) {
                let u = (0, o(533992).v3)(),
                    p = (0, o(713311).ET)(),
                    m = (0, o(109939).tz)(),
                    f = (0, i.useCallback)(i => {
                        ! function(e, t, i, r, a, l) {
                            let s, d;
                            if (!r || !r.propertySchema) return;
                            let {
                                propertySchema: c
                            } = r;
                            if ("person" === c.rollup_type) {
                                if ((0, o(722371).Xk)(o(26837).$J, e)) d = (0, o(26837).dk)(e).type, s = { ...c,
                                    target_property: e,
                                    target_property_type: d,
                                    aggregation: void 0
                                };
                                else if (r.relatedCollectionSchema) {
                                    let a = r.relatedCollectionSchema[e];
                                    a && (d = a.type, s = { ...c,
                                        target_property: e,
                                        target_property_type: d,
                                        aggregation: void 0
                                    }, n(t, { ...(0, o(752242).sl)(l),
                                        from: i,
                                        property_type: d
                                    }))
                                }
                            } else if ("relation" === c.rollup_type || void 0 === c.rollup_type) {
                                let a = r.relatedCollectionSchema[e];
                                a && (d = a.type, s = { ...c,
                                    target_property: e,
                                    target_property_type: a.type,
                                    aggregation: void 0
                                }, n(t, { ...(0, o(752242).sl)(l),
                                    from: i,
                                    property_type: a.type
                                }))
                            }
                            s && d && (null == a || a({
                                propertySchema: s
                            }))
                        }(i, u, t, c, d, p), e.close()
                    }, [t, u, a, l, s, d, e, p, c]);
                if (!c) return null;
                if ("person" === c.propertySchema.rollup_type) {
                    let e = [];
                    return (o(26837).$J.forEach(t => {
                        e.push({
                            key: `person_system_${t}`,
                            render: e => (0, r.jsx)(o(34824).G, { ...e,
                                propertySchema: (0, o(26837).dk)(t, m),
                                format: o(34824).e.Name
                            }),
                            action: () => f(t)
                        })
                    }), c.relatedCollectionSchema && Object.keys(c.relatedCollectionSchema).length > 0 && Object.entries(c.relatedCollectionSchema).filter(([e, t]) => !!t && "formula" !== t.type && "rollup" !== t.type && !(0, o(204903).rK)(t.type)).forEach(([t, i]) => {
                        e.push({
                            key: `people_collection_${t}`,
                            render: e => (0, r.jsx)(o(34824).G, { ...e,
                                propertySchema: i,
                                format: o(34824).e.Name
                            }),
                            action: () => f(t)
                        })
                    }), 0 === e.length) ? null : (0, r.jsx)(o(747369).A, {
                        menuType: o(649476).gu.Popup,
                        children: (0, r.jsx)(o(558045).A, {
                            type: o(558045).O.Vertical,
                            sections: [{
                                key: "target_properties",
                                items: e,
                                render: e => (0, r.jsx)(o(844565).A, { ...e
                                })
                            }],
                            initialFocus: void 0
                        })
                    })
                }
                return c.relatedCollectionSchema && ("relation" === c.propertySchema.rollup_type || void 0 === c.propertySchema.rollup_type) ? (0, r.jsx)(o(645153).A, {
                    schema: c.relatedCollectionSchema,
                    isRelationProperty: !1,
                    onAccept: f,
                    allowProperty: e => "rollup" !== e.type && !(0, o(204903).rK)(e.type),
                    onClose: e.close
                }) : null
            }

            function m({
                parent: e,
                analyticsFrom: t,
                onChange: n,
                renderState: a
            }) {
                let l = (0, o(533992).v3)(),
                    s = (0, o(713311).ET)(),
                    d = (0, i.useCallback)(({
                        aggregationType: e
                    }) => {
                        if (null != a && a.propertySchema) return function({
                            aggregationType: e,
                            environment: t,
                            analyticsFrom: i,
                            rollupPropertySchema: n,
                            collectionContextStore: r,
                            onChange: a
                        }) {
                            var l;
                            let s = { ...n,
                                aggregation: e,
                                show_as: void 0
                            };
                            null == a || a({
                                propertySchema: s
                            });
                            let d = e ? (0, o(288299).ZP)(e) : void 0;
                            l = { ...(0, o(752242).sl)(r),
                                from: i,
                                aggregation: d
                            }, (0, o(195857).DO_NOT_USE_trackLegacy)("configure_rollup_aggregation", l)
                        }({
                            aggregationType: e,
                            environment: l,
                            analyticsFrom: t,
                            rollupPropertySchema: a.propertySchema,
                            collectionContextStore: s,
                            onChange: n
                        })
                    }, [l, t, null == a ? void 0 : a.propertySchema, s, n]);
                if (a && a.propertySchema.target_property) {
                    let t = a.relatedCollectionSchema;
                    return "person" === a.propertySchema.rollup_type && a.targetPropertySchema && a.propertySchema.target_property && (t = {
                        [a.propertySchema.target_property]: a.targetPropertySchema
                    }), (0, r.jsx)(o(941499).v, {
                        property: a.propertySchema.target_property,
                        schema: t,
                        currentAggregation: a.propertySchema.aggregation ? {
                            aggregator: a.propertySchema.aggregation,
                            property: a.propertySchema.target_property
                        } : void 0,
                        onChange: d,
                        onClose: e.close,
                        noneText: (0, r.jsx)(o(109939).sA, {
                            id: "database.rollupProperty.aggregate.showOriginal",
                            defaultMessage: "Show original"
                        }),
                        source: "rollupPropertyMenu"
                    })
                }
                return null
            }
        },
        370333: (e, t, o) => {
            o.d(t, {
                a: () => i
            }), o(944114);

            function i(e) {
                let {
                    formatStore: t,
                    formatKey: i,
                    property: n,
                    update: r,
                    transaction: a
                } = e, l = [...t.getFormat()[i] || []], s = l.findIndex(e => e.property === n); - 1 !== s ? l[s] = { ...l[s],
                    ...r
                } : l.push({
                    property: n,
                    ...r
                }), (0, o(715144).z)({
                    stores: t instanceof o(970831).B || t instanceof o(356912).m || t instanceof o(547131).p ? [t] : (0, o(722371).HB)(t),
                    update: {
                        [i]: l
                    },
                    transaction: a
                })
            }
        },
        389902: (e, t, o) => {
            o.d(t, {
                oX: () => eM,
                t_: () => es,
                lI: () => ek
            }), o(944114), o(898992), o(354520), o(672577);
            var i = o(296540),
                n = () => o(517013);

            function r(e, t, i) {
                return (0, o(613211).e0)(e, t, i)
            }
            var a = o(474848);

            function l({
                collectionId: e,
                propertyName: t,
                collectionSettingsStore: n,
                buttonPopupParent: r
            }) {
                let s = (0, o(533992).v3)(),
                    d = (0, o(109939).tz)(),
                    c = (0, o(758360).K7)("agent"),
                    u = (0, o(660402).W)({
                        omitCurrentPage: !1
                    }),
                    p = (0, o(558208).AD)(),
                    g = (0, i.useCallback)(() => {
                        u && (null == r || r.close(), (0, o(72762).o)({
                            collectionSettingsStore: n
                        }), (0, o(405426).t)({
                            environment: s,
                            collectionId: e,
                            propertyNames: [t],
                            inferenceContext: u,
                            aiChatFeatureController: c,
                            temporaryAiThreadManager: p,
                            intl: d
                        }))
                    }, [r, s, e, t, n, u, c, p, d]);
                return (0, a.jsx)(o(209572).A, {
                    title: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Generate with AI",
                        id: "database.viewSettings.selectOptions.generateWithAI"
                    }),
                    icon: e => (0, a.jsx)(o(16275).I, {
                        icon: o(273344).aiFaceIcon,
                        style: e
                    }),
                    onClick: g
                })
            }

            function s() {
                let {
                    layoutStore: e,
                    currentModuleSelection: t,
                    collectionStore: i
                } = (0, o(613789).LH)(), n = (0, o(682985).K8)(() => {
                    if ((null == t ? void 0 : t.type) === "existing_module") return e.getModuleById(t.moduleId)
                }, [t, e]), r = (0, o(682985).K8)(() => {
                    if ((0, o(11287).gx)(n)) return null == i ? void 0 : i.getSchemaStore().getKeyStore(n.propertyId).getValue()
                }, [i, n]);
                if (!n || !r) return null;
                switch (n.type) {
                    case "property_person":
                    case "property_created_by":
                    case "property_last_edited_by":
                        return (0, a.jsx)(g, {
                            module: n,
                            options: d,
                            heightVariant: "tall"
                        });
                    case "property_formula":
                        if (!(0, o(345091).isNumberFormulaPropertySchema)(r)) return null;
                        return (0, a.jsx)(g, {
                            module: n,
                            options: u,
                            heightVariant: "short"
                        });
                    case "property_number":
                        return (0, a.jsx)(g, {
                            module: n,
                            options: u,
                            heightVariant: "short"
                        });
                    case "property_file":
                        return (0, a.jsx)(g, {
                            module: n,
                            options: c,
                            heightVariant: "short"
                        });
                    case "property_place":
                        return (0, a.jsx)(g, {
                            module: n,
                            options: m,
                            heightVariant: "short"
                        });
                    default:
                        return null
                }
            }
            let d = {
                    available: ["large", "compact"],
                    appearance: {
                        compact: {
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "PropertyTypeSpecificModuleConfiguration.person.display.compact",
                                defaultMessage: "Compact"
                            }),
                            image: {
                                src: o(896221).A.images.layouts.configuration.personCompactPng,
                                width: 100,
                                height: 41
                            }
                        },
                        large: {
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "PropertyTypeSpecificModuleConfiguration.person.display.large",
                                defaultMessage: "Large"
                            }),
                            image: {
                                src: o(896221).A.images.layouts.configuration.personMediumPng,
                                width: 82,
                                height: 56
                            }
                        }
                    }
                },
                c = {
                    available: ["landscape", "portrait", "square"],
                    appearance: {
                        landscape: {
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "PropertyTypeSpecificModuleConfiguration.file.display.landscape",
                                defaultMessage: "Landscape"
                            }),
                            image: {
                                src: o(896221).A.images.layouts.configuration.fileLandscapePng,
                                width: 192,
                                height: 128
                            }
                        },
                        portrait: {
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "PropertyTypeSpecificModuleConfiguration.file.display.portrait",
                                defaultMessage: "Portrait"
                            }),
                            image: {
                                src: o(896221).A.images.layouts.configuration.filePortraitPng,
                                width: 192,
                                height: 128
                            }
                        },
                        square: {
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "PropertyTypeSpecificModuleConfiguration.file.display.square",
                                defaultMessage: "Square"
                            }),
                            image: {
                                src: o(896221).A.images.layouts.configuration.fileSquarePng,
                                width: 192,
                                height: 128
                            }
                        }
                    }
                },
                u = {
                    available: ["large", "small"],
                    appearance: {
                        large: {
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "PropertyTypeSpecificModuleConfiguration.number.display.large",
                                defaultMessage: "Large"
                            }),
                            icon: {
                                function: o(115601).i,
                                size: 42
                            }
                        },
                        small: {
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "PropertyTypeSpecificModuleConfiguration.number.display.small",
                                defaultMessage: "Small"
                            }),
                            icon: {
                                function: o(115601).i,
                                size: 22
                            }
                        }
                    }
                },
                p = {
                    container: {
                        margin: "10px 8px"
                    },
                    label: {
                        fontSize: o(699422).J.UISmall.desktop,
                        fontWeight: o(699422).Wy.medium,
                        marginTop: 0,
                        marginInlineEnd: 8,
                        marginBottom: 6,
                        marginInlineStart: 8,
                        color: o(632079).Tj.text.secondary
                    }
                };

            function g({
                module: e,
                options: t,
                heightVariant: n
            }) {
                let r = (0, o(533992).v3)(),
                    {
                        layoutStore: l
                    } = (0, o(613789).LH)(),
                    s = (0, i.useCallback)(t => {
                        let i = l.getModel(),
                            n = null == i ? void 0 : i.getPageModuleAreaById(e.id);
                        if (!n || !i) return;
                        let a = { ...e,
                                style: t
                            },
                            s = l.pointer.spaceId;
                        (0, o(377796).createAndCommit)({
                            environment: r,
                            perform(e) {
                                (0, o(660512).UQ)({
                                    environment: r,
                                    transaction: e,
                                    layoutStore: l,
                                    position: {
                                        area: n,
                                        moduleId: a.id
                                    },
                                    updatedModule: a
                                })
                            },
                            canUndo: !0,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            userAction: "BuilderLayoutModules.setDisplayStyle"
                        })
                    }, [r, l, e]);
                return (0, a.jsxs)("div", {
                    style: p.container,
                    children: [(0, a.jsx)("p", {
                        style: p.label,
                        children: (0, a.jsx)(o(109939).sA, {
                            id: "PropertyTypeSpecificModuleConfiguration.person.display.title",
                            defaultMessage: "Style"
                        })
                    }), (0, a.jsx)(o(140168).A, {
                        disabled: !1,
                        options: t,
                        selectedOption: e.style,
                        onOptionSelected: s,
                        height: n
                    })]
                })
            }
            let m = {
                available: ["map", "text"],
                appearance: {
                    map: {
                        label: (0, a.jsx)(o(109939).sA, {
                            id: "PropertyTypeSpecificModuleConfiguration.place.display.map",
                            defaultMessage: "Map"
                        }),
                        image: {
                            src: o(896221).A.images.blocks.mapsPng,
                            width: 40,
                            height: 40
                        }
                    },
                    text: {
                        label: (0, a.jsx)(o(109939).sA, {
                            id: "PropertyTypeSpecificModuleConfiguration.place.display.text",
                            defaultMessage: "Text"
                        }),
                        image: {
                            src: o(896221).A.images.blocks.textPng["en-US"],
                            width: 40,
                            height: 40
                        }
                    }
                }
            };
            var f = () => o(421439);
            o(18107), o(967357);
            let y = i.memo(function({
                collectionContextStore: e,
                collectionSettingsStore: t,
                property: n
            }) {
                let r = (0, o(533992).v3)(),
                    l = (0, o(682985).uB)(void 0, o(510969).A),
                    s = (0, o(682985).K8)(() => l.state.open, [l]),
                    d = (0, o(682985).K8)(() => {
                        let o = e.collectionStore();
                        if (!o) return;
                        let i = e.normalizedSchemaStore.state[n];
                        if ((null == i ? void 0 : i.type) !== "formula") return;
                        let r = !!(o.getDatabaseType() && o.isTypedProperty(n));
                        return {
                            collectionStore: o,
                            propertySchema: i,
                            disabled: r,
                            blockStore: t.getState().fromBlockStore ? ? e.resultsInViewOrder(1).at(0)
                        }
                    }, [e, t, n]),
                    c = (0, i.useCallback)(e => {
                        if (!d) return null;
                        let {
                            collectionStore: t,
                            propertySchema: i,
                            disabled: l,
                            blockStore: s
                        } = d;
                        return (0, a.jsx)(o(815048).u2, {
                            dependency: o(864850).T.formulas,
                            children: d => (0, a.jsx)(o(973124).C, {
                                handleClose: e.close,
                                property: n,
                                getRecordModel: t.getRecordModel,
                                propertySchema: i,
                                collectionStore: t,
                                handleSave: e => (function(e, t) {
                                    let {
                                        newValue: i,
                                        newType: n,
                                        propertySchema: r,
                                        property: a,
                                        collectionStore: l
                                    } = e, s = i ? { ...r,
                                        formula2: {
                                            code: i,
                                            result_type: n
                                        },
                                        version: "v2"
                                    } : { ...r,
                                        formula2: void 0,
                                        version: "v2"
                                    }, d = l.getSpaceId();
                                    (0, o(377796).createAndCommit)({
                                        userAction: "CollectionFormulaOptions.handleFormulaChange",
                                        environment: t,
                                        cellTarget: d ? {
                                            spaceWithId: d
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            (0, o(957395).F)({
                                                environment: t,
                                                collectionStore: l,
                                                update: {
                                                    [a]: s
                                                },
                                                transaction: e
                                            })
                                        }
                                    })
                                })(e, r),
                                formulas: d,
                                disabled: l,
                                blockStore: s,
                                analyticsFrom: "view_settings"
                            })
                        })
                    }, [d, r, n]);
                return (0, a.jsx)(o(656252).A, {
                    popupType: o(986939).A.isMobile ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                    alignmentToOrigin: "end",
                    content: c,
                    buttonPopupStore: l,
                    children: e => (0, a.jsx)(o(209572).A, {
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Edit formula",
                            id: "database.viewSettings.formulaOptions.title"
                        }),
                        showChevron: !0,
                        icon: o(636).pencilLineIcon,
                        rotateChevron: s,
                        ...e
                    })
                })
            });
            o(581454);
            let h = {
                minWidth: 190
            };

            function b({
                collectionContextStore: e,
                property: t
            }) {
                var i, n;
                let r = (0, o(109939).tz)(),
                    l = (0, o(533992).v3)(),
                    s = (0, o(682985).K8)(() => S(e, t), [e, t]),
                    d = (0, o(682985).K8)(() => e.getPropertyFormat(t), [e, t]);
                if (!s) return null;
                let c = "date" === s.type,
                    u = (null == d ? void 0 : d.date_format) || s.date_format || o(943003).vz,
                    p = function(e) {
                        let t = x();
                        for (let o in t)
                            if (t[o] === e) return o;
                        return "12h"
                    }((null == d ? void 0 : d.time_format) || s.time_format || o(943003).CE),
                    g = "date" === s.type ? (i = s, (null == (n = d) ? void 0 : n.default_reminder) !== void 0 ? n.default_reminder : void 0 !== i.default_reminder ? i.default_reminder : void 0) : void 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o(529983).A, {
                        icon: o(998172).D,
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Date format",
                            id: "database.viewSettings.dateOptions.dateFormat"
                        }),
                        selectedKey: u,
                        popupStyle: h,
                        options: o(943003).wJ.map(e => ({
                            key: e,
                            type: "button",
                            title: r.formatMessage(o(943003).xz[e])
                        })),
                        onChange: i => (function(e, t, i, n) {
                            let r = i.collectionStore(),
                                a = S(i, n);
                            if (!r || !a) return;
                            let l = { ...a,
                                    date_format: e
                                },
                                s = r.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "CollectionSettingsDateOptions.handleDateFormatChange",
                                environment: t,
                                cellTarget: s ? {
                                    spaceWithId: s
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, o(957395).F)({
                                        environment: t,
                                        collectionStore: r,
                                        update: {
                                            [n]: l
                                        },
                                        transaction: e
                                    })
                                }
                            }), (0, o(8043).V)({
                                environment: t,
                                collectionStore: i.collectionStore(),
                                collectionViewStore: i.collectionViewStore(),
                                property: n,
                                from: "view_settings",
                                action: "date_change_format"
                            })
                        })(i, l, e, t)
                    }), (0, a.jsx)(o(529983).A, {
                        icon: o(772683).clockIcon,
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Time format",
                            id: "database.viewSettings.dateOptions.timeFormat"
                        }),
                        selectedKey: p,
                        popupStyle: h,
                        options: o(943003).ZD.map(e => ({
                            key: e,
                            type: "button",
                            title: r.formatMessage(o(943003).px[e])
                        })),
                        onChange: i => (function(e, t, i, n) {
                            let r = x()[e],
                                a = i.collectionStore(),
                                l = S(i, n);
                            if (!a || !l) return;
                            let s = { ...l,
                                    time_format: r
                                },
                                d = a.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "CollectionSettingsDateOptions.handleClockFormatChange",
                                environment: t,
                                cellTarget: d ? {
                                    spaceWithId: d
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, o(957395).F)({
                                        environment: t,
                                        collectionStore: a,
                                        update: {
                                            [n]: s
                                        },
                                        transaction: e
                                    })
                                }
                            }), (0, o(8043).V)({
                                environment: t,
                                collectionStore: i.collectionStore(),
                                collectionViewStore: i.collectionViewStore(),
                                property: n,
                                from: "view_settings",
                                action: "date_change_time_format"
                            })
                        })(i, l, e, t)
                    }), c ? (0, a.jsx)(o(529983).A, {
                        icon: o(253092).alarmIcon,
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Notifications",
                            id: "database.viewSettings.dateOptions.reminder"
                        }),
                        selectedKey: g,
                        renderSelectedKey: e => (0, o(301950).y)({
                            reminder: e,
                            shouldShowTime: !1,
                            intl: r,
                            formatTime: o(850640).fU
                        }),
                        popupStyle: h,
                        options: o(943003).vK.map(e => {
                            let t = (0, o(301950).y)({
                                reminder: e,
                                shouldShowTime: !0,
                                intl: r,
                                formatTime: o(850640).fU
                            });
                            return {
                                key: (0, o(943003).Mb)(e) ? void 0 : e,
                                type: "button",
                                title: t
                            }
                        }),
                        onChange: i => {
                            ! function(e, t, i, n) {
                                let r = i.collectionStore(),
                                    a = S(i, n);
                                if (!r || !a) return;
                                let l = { ...a,
                                        default_reminder: e
                                    },
                                    s = r.getSpaceId();
                                (0, o(377796).createAndCommit)({
                                    userAction: "CollectionSettingsDateOptions.handleDefaultDateTimeReminderChange",
                                    environment: t,
                                    cellTarget: s ? {
                                        spaceWithId: s
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        (0, o(957395).F)({
                                            environment: t,
                                            collectionStore: r,
                                            update: {
                                                [n]: l
                                            },
                                            transaction: e
                                        })
                                    }
                                }), (0, o(8043).V)({
                                    environment: t,
                                    collectionStore: i.collectionStore(),
                                    collectionViewStore: i.collectionViewStore(),
                                    property: n,
                                    from: "view_settings",
                                    action: "date_change_reminder_default"
                                })
                            }(i, l, e, t)
                        }
                    }) : null]
                })
            }

            function S(e, t) {
                let o = e.normalizedSchemaStore.state[t];
                if (o && ("date" === o.type || "created_time" === o.type || "last_edited_time" === o.type || "last_visited_time" === o.type)) return o
            }

            function x() {
                return (0, o(182918).X)(o(849917).locale).time
            }
            let v = {
                minWidth: 190
            };

            function A(e) {
                let {
                    collectionContextStore: t,
                    property: r,
                    propertySchema: l
                } = e, s = (0, o(533992).v3)(), d = (0, i.useCallback)(e => {
                    let i = { ...l,
                            default: "created_by" === e ? "created_by" : void 0
                        },
                        a = t.collectionStore();
                    if (!a) return;
                    (0, o(916311).p)({
                        environment: s,
                        collectionStore: a,
                        performTransaction: t => {
                            (0, f().y4)({
                                store: (0, n().v3)(a, a.pointer),
                                operation: {
                                    pointer: a.pointer,
                                    command: "update",
                                    path: ["schema", r],
                                    args: {
                                        default: e
                                    }
                                },
                                transaction: t
                            })
                        }
                    });
                    let d = a.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "CollectionSettingsDefaultPersonPicker.handleChange",
                        environment: s,
                        cellTarget: d ? {
                            spaceWithId: d
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, o(957395).F)({
                                environment: s,
                                collectionStore: a,
                                update: {
                                    [r]: i
                                },
                                transaction: e
                            })
                        }
                    })
                }, [t, s, r, l]);
                return (0, a.jsx)(o(529983).A, {
                    icon: o(338).personCircleIcon,
                    title: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Default",
                        id: "CollectionSettingsDefaultPersonPicker.default.title"
                    }),
                    selectedKey: l.default ? "created_by" : "no_default",
                    popupStyle: v,
                    options: [{
                        key: "no_default",
                        type: "button",
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "No default",
                            id: "CollectionSettingsDefaultPersonPicker.options.noDefault"
                        })
                    }, {
                        key: "created_by",
                        type: "button",
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Created by",
                            id: "CollectionSettingsDefaultPersonPicker.options.creator"
                        }),
                        icon: (0, a.jsx)(o(16275).I, {
                            icon: o(476719).personFillSmallIcon,
                            size: "sm"
                        })
                    }],
                    onChange: d
                })
            }
            let j = i.memo(function(e) {
                let {
                    environment: t,
                    property: i,
                    propertySchema: n,
                    collectionContextStore: r,
                    collectionStore: l
                } = e, s = (0, o(682985).K8)(() => null == l ? void 0 : l.getSpaceId(), [l]), d = (0, o(217844)._)({
                    name: "collection_property_autofill",
                    spaceId: s,
                    userId: t.currentUser.id,
                    amount: "unknown"
                }), c = (0, o(682985).K8)(() => {
                    let e = r.collectionStore();
                    return e && (0, o(576348).jq)(o(827482).A.getMode(t, e, e.getSpaceStore()), e)
                }, [t, r]);
                return (0, o(682985).K8)(() => (0, o(532792).l)(n) && n.select_ai_inference, [n]) && d ? (0, a.jsx)(o(972323).Ve, {
                    environment: t,
                    collectionContextStore: r,
                    collectionStore: l,
                    property: i,
                    propertySchema: n,
                    autofillFeatureAvailability: d,
                    isAutofillSetupEnabled: !!c
                }) : null
            });

            function w(e) {
                let {
                    collectionContextStore: t,
                    formatKey: o,
                    property: i
                } = e, n = M({
                    formatKey: o,
                    collectionContextStore: t
                });
                return n && 0 !== n.length ? n.filter(e => e.visible).findIndex(e => e.property === i) : -1
            }

            function M(e) {
                let {
                    formatKey: t,
                    collectionContextStore: o
                } = e;
                if (!t) return [];
                if ("collection_page_properties" === t) {
                    var i;
                    return (null == (i = o.collectionStore()) ? void 0 : i.getFormat().collection_page_properties) ? ? []
                }
                return o.normalizedFormatStore.state[t] || []
            }
            let C = {
                    display: "inline-flex"
                },
                T = i.memo(function(e) {
                    let {
                        isRequiredTypedProperty: t,
                        databaseType: n,
                        collectionContextStore: r,
                        property: l,
                        collectionSettingsStore: s,
                        formatKey: d
                    } = e, c = (0, o(960253).e)(), u = (0, o(533992).v3)(), p = (0, i.useCallback)(async () => {
                        let e = r.normalizedSchemaStore.state,
                            t = r.collectionStore(),
                            i = (0, o(561872)._g)({
                                schema: e,
                                property: l
                            }),
                            n = !!i && (0, o(840403).J)(i);
                        await o(16131).q({
                            environment: u,
                            collectionContextStore: r,
                            property: l,
                            handleDeleteAccept: function() {
                                i && (t && (0, o(377796).createAndCommitAsync)({
                                    environment: u,
                                    userAction: "CollectionSettingsProperty.handleDeleteAccept",
                                    waitForServerCommit: !1,
                                    perform: async i => {
                                        await (0, o(645430).P)({
                                            environment: u,
                                            collectionStore: t,
                                            schema: e,
                                            property: l,
                                            transaction: i,
                                            permanentlyDelete: n
                                        });
                                        let a = w({
                                            property: l,
                                            formatKey: d,
                                            collectionContextStore: r
                                        });
                                        o(529312).sp({
                                            environment: u,
                                            collectionContextStore: r,
                                            currentIndex: a,
                                            entrypoint: "CollectionSettingsProperty",
                                            transaction: i,
                                            propertyAction: "delete"
                                        })
                                    }
                                }), (0, o(465370).y)({
                                    collectionSettingsStore: s
                                }), (0, o(893783).X)({
                                    environment: u,
                                    collectionContextStore: r,
                                    action: "delete_property",
                                    property_type: null == i ? void 0 : i.type
                                }), (0, o(431666).i)({
                                    environment: u,
                                    collectionStore: r.collectionStore(),
                                    collectionViewStore: r.collectionViewStore(),
                                    property_type: i.type,
                                    from: "view_settings",
                                    property: l
                                }))
                            },
                            theme: o(632079).Tj,
                            themeMode: c,
                            from: "view_settings",
                            isPermanentlyDelete: n
                        })
                    }, [r, s, u, d, l, c]), g = (0, i.useCallback)(e => (0, o(463082).eF)(n, e), [n]), m = (0, i.useCallback)(e => t ? (0, a.jsx)("div", { ...e,
                        style: C,
                        children: (0, a.jsx)(o(16275).I, {
                            icon: o(269298).lockFillIcon
                        })
                    }) : (0, a.jsx)(o(16275).I, {
                        icon: o(968411).trashIcon
                    }), [t]), f = (0, i.useCallback)(e => (0, a.jsx)(o(209572).A, { ...e,
                        isRedOnHover: !0,
                        disabled: t,
                        onClick: p,
                        icon: () => m(e),
                        title: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "Delete property",
                            id: "database.viewSettings.propertyTab.deleteButton.title"
                        }),
                        caption: o(986939).A.isMobile && t ? (0, o(463082).eF)(n) : void 0
                    }), [n, p, m, t]);
                    return (0, a.jsx)(o(51831).m, {
                        disableTooltip: !t,
                        placement: "left",
                        content: g,
                        children: f
                    })
                }),
                k = i.memo(function(e) {
                    let {
                        collectionContextStore: t,
                        property: i,
                        extraPadding: n
                    } = e, r = (0, o(682985).O$)(t.normalizedSchemaStore)[i];
                    return (0, o(561872).di)(r) ? (0, a.jsx)(o(844565).A, {
                        extraPadding: n,
                        topBorder: !0,
                        children: (0, a.jsx)(o(725843).A, {
                            href: (0, o(442564).x)("guides.githubRelation"),
                            title: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Learn about GitHub Pull Requests",
                                id: "database.viewSettings.propertyTab.githubPrRelation.learnMoreButton.title"
                            }),
                            analyticsFrom: "view_settings_property_github_pr_relation"
                        })
                    }) : (0, o(561872).V5)(r) ? (0, a.jsxs)(o(844565).A, {
                        extraPadding: n,
                        topBorder: !0,
                        children: [(0, a.jsx)(o(494588).p, {}), (0, a.jsx)(o(494588).b, {})]
                    }) : (0, a.jsx)(o(844565).A, {
                        extraPadding: n,
                        topBorder: !0,
                        children: (0, a.jsx)(o(725843).A, {
                            href: (0, o(442564).x)("guides.relations"),
                            title: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Learn about relations",
                                id: "database.viewSettings.propertyTab.relations.learnMoreButton.title"
                            }),
                            analyticsFrom: "view_settings_property_relation"
                        })
                    })
                }),
                I = i.memo(function(e) {
                    let {
                        propertySchema: t,
                        propertyFormat: n,
                        isRequiredTypedProperty: l,
                        databaseType: s,
                        collectionContextStore: d,
                        formatKey: c,
                        property: u,
                        collectionSettingsStore: p,
                        wrapProperty: g
                    } = e, m = (0, o(533992).v3)(), f = (0, o(649476).Tf)(), y = (0, i.useCallback)(() => {
                        var e, t, i, n, r;
                        let a, l, s, p;
                        return e = m, t = d, i = c, n = u, r = g, a = function(e) {
                            let {
                                collectionContextStore: t,
                                formatKey: o,
                                property: i
                            } = e, n = M({
                                formatKey: o,
                                collectionContextStore: t
                            });
                            return n && 0 !== n.length ? n.find(e => e.property === i) : -1
                        }({
                            property: n,
                            formatKey: i,
                            collectionContextStore: t
                        }), l = t.collectionViewStore(), s = t.normalizedFormatStore.state, p = (0, o(648143).J)({
                            collectionContextStore: t,
                            property: n
                        }), void(a && l && i && p && (o(529312).Nv({
                            currentValue: r,
                            environment: e,
                            property: n,
                            collectionViewStore: l,
                            format: s,
                            formatKey: i
                        }), (0, o(893783).X)({
                            environment: e,
                            collectionContextStore: t,
                            action: "toggle_property_wrap",
                            original_view_type: l.getType(),
                            property_type: p.type
                        })))
                    }, [m, d, c, u, g]), h = (0, o(682985).K8)(() => d.collectionStore(), [d]), b = (0, o(682985).K8)(() => d.getViewType(), [d]), S = (0, o(226142).a)(), x = (0, o(682985).K8)(() => r(s, d.normalizedSchemaStore.state, u), [s, d, u]), v = (0, o(682985).K8)(() => !!b && c && (0, o(28630).hc)({
                        viewType: b,
                        property: u
                    }), [c, u, b]), A = (0, o(682985).K8)(() => p.state.hideDuplicatePropertyOption, [p]), w = (0, o(9247).vB)(t) && !!h && !S && "form_editor" !== b && !A, C = o(439368).cN.includes(t.type) && h && !S && "form_editor" !== b, I = "form_editor" === b;
                    return v || w || C || I ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(o(844565).A, {
                            topBorder: !0,
                            disableMobilePadding: !f,
                            extraPadding: !0,
                            children: [v && n ? (0, a.jsx)(o(76761).A, {
                                icon: o(116789).o,
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Wrap content",
                                    id: "database.viewSettings.propertyTab.wrapContentButton.title"
                                }),
                                switcherProps: {
                                    on: g,
                                    disallowTabbing: !0
                                },
                                onClick: y
                            }) : void 0, "status" === t.type ? (0, a.jsx)(o(751690).u, {
                                collectionContextStore: d,
                                property: u,
                                disabled: x
                            }) : void 0, h ? (0, a.jsx)(j, {
                                environment: m,
                                collectionStore: h,
                                collectionContextStore: d,
                                property: u,
                                propertySchema: t
                            }) : void 0, w ? (0, a.jsx)(o(209572).A, {
                                icon: o(703696).V,
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Duplicate property",
                                    id: "database.viewSettings.propertyTab.duplicateButton.title"
                                }),
                                onClick: () => _(m, u, d, p, c)
                            }) : void 0, C ? (0, a.jsx)(T, {
                                collectionContextStore: d,
                                property: u,
                                collectionSettingsStore: p,
                                formatKey: c,
                                isRequiredTypedProperty: l,
                                databaseType: s
                            }) : void 0, I ? (0, a.jsx)(o(725843).A, {
                                href: (0, o(442564).x)("guides.databaseProperties"),
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Learn about properties",
                                    id: "database.viewSettings.propertiesTab.learnMoreButton.title"
                                }),
                                analyticsFrom: "view_settings_properties"
                            }) : void 0]
                        }), "formula" === t.type ? (0, a.jsx)(o(844565).A, {
                            topBorder: !0,
                            children: (0, a.jsx)(o(725843).A, {
                                href: (0, o(442564).x)("guides.formulas"),
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Learn about formulas",
                                    id: "database.viewSettings.propertyTab.formulas.learnMoreButton.title"
                                }),
                                analyticsFrom: "view_settings_property_formula"
                            })
                        }) : void 0, "relation" === t.type ? (0, a.jsx)(k, {
                            collectionContextStore: d,
                            property: u,
                            extraPadding: !0
                        }) : void 0, "rollup" === t.type ? (0, a.jsx)(o(844565).A, {
                            topBorder: !0,
                            children: (0, a.jsx)(o(725843).A, {
                                href: (0, o(442564).x)("guides.relations"),
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Learn about rollups",
                                    id: "database.viewSettings.propertyTab.rollups.learnMoreButton.title"
                                }),
                                analyticsFrom: "view_settings_property_relation"
                            })
                        }) : void 0]
                    }) : null
                });
            async function _(e, t, i, n, r) {
                let a = M({
                        formatKey: r,
                        collectionContextStore: i
                    }),
                    l = i.normalizedSchemaStore.state,
                    s = i.collectionStore(),
                    d = null == s ? void 0 : s.getSpaceId();
                if (!s || !d) return;
                let c = (0, o(561872)._g)({
                    schema: l,
                    property: t
                });
                if (!c) return;
                let u = s.getNormalizedPropertyGroups(),
                    p = await (0, o(28630).W4)({
                        environment: e,
                        schema: l,
                        property: t,
                        properties: a,
                        propertyGroups: u,
                        parentStore: s,
                        spaceId: d
                    });
                if (!p) return;
                let g = e.currentUser.id,
                    m = g ? {
                        id: g,
                        table: o(832375).oo9
                    } : void 0,
                    f = i.collectionViewStore();
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsProperty.handleDuplicateClick",
                    environment: e,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: d
                    },
                    perform: n => {
                        (0, o(722371).O9)(p.automationUpdate) && (0, o(871865).duplicateAutomation)({
                            actorPointer: m,
                            environment: e,
                            sourceAutomationStore: p.automationUpdate.sourceAutomationStore,
                            targetAutomationId: p.automationUpdate.targetAutomationId,
                            transaction: n
                        });
                        let a = { ...l,
                                [p.newProperty]: p.newPropertySchema
                            },
                            d = { ...s.getFormat(),
                                collection_page_properties: p.newProperties,
                                property_groups: p.newPropertyGroups
                            };
                        (0, o(667888).I)({
                            environment: e,
                            collectionStore: s,
                            update: {
                                schema: a,
                                format: d
                            },
                            transaction: n
                        });
                        let c = w({
                            property: t,
                            formatKey: r,
                            collectionContextStore: i
                        });
                        o(529312).sp({
                            environment: e,
                            collectionContextStore: i,
                            currentIndex: c,
                            entrypoint: "CollectionSettingsProperty",
                            transaction: n,
                            propertyAction: "duplicate"
                        }), r && f && (0, o(715144).z)({
                            stores: [f],
                            update: {
                                [r]: p.newProperties
                            },
                            transaction: n
                        })
                    }
                }), (0, o(72762).o)({
                    collectionSettingsStore: n
                }), (0, o(893783).X)({
                    collectionContextStore: i,
                    environment: e,
                    action: "duplicate_property",
                    original_view_type: null == f ? void 0 : f.getType(),
                    property_type: c.type
                })
            }
            o(737550);
            let P = (0, o(109939).YK)({
                databaseActionsTitle: {
                    defaultMessage: "Database actions",
                    id: "database.viewSettings.connectedRelationSettings.databaseActions"
                },
                addPropertiesTitle: {
                    defaultMessage: "Add properties",
                    id: "database.viewSettings.connectedRelationSettings.addPropertiesTitle"
                },
                databaseActionsDisabledWhileSyncing: {
                    defaultMessage: "Cannot edit while syncing",
                    id: "database.viewSettings.connectedRelationSettings.databaseActionsDisabledWhileSyncing"
                },
                syncInProgress: {
                    defaultMessage: "Sync in progress",
                    id: "database.viewSettings.salesforceConfigTab.syncInProgress"
                },
                syncInProgressDescription: {
                    defaultMessage: "Fetching the latest data from Salesforce…",
                    id: "database.viewSettings.salesforceConfigTab.syncInProgressDescription"
                },
                linkPreviewTitle: {
                    defaultMessage: "Preview",
                    id: "database.viewSettings.salesforceConfigTab.linkPreviewTitle"
                },
                featureUnavailableTooltip: {
                    defaultMessage: "{upsellTier, select, plus {Plus} business {Business} enterprise {Enterprise} other {}} plan is required to access this feature",
                    id: "database.viewSettings.collectionSettingsDatabaseActionsConfig.featureUnavailableTooltip"
                }
            });

            function R(e) {
                let t = (0, o(59651).l)(e.integrationId);
                return t ? (0, a.jsx)(B, { ...e,
                    featureName: t
                }) : (0, a.jsx)(D, { ...e,
                    upsellInfo: void 0
                })
            }

            function B(e) {
                let {
                    featureName: t,
                    collectionContextStore: i,
                    ...n
                } = e, r = (0, o(682985).K8)(() => i.collectionStore(), [i]), l = (0, o(801643).uF)({
                    featureName: t,
                    collectionStore: r
                });
                return (0, a.jsx)(D, { ...n,
                    collectionContextStore: i,
                    upsellInfo: l
                })
            }

            function D(e) {
                let {
                    collectionContextStore: t,
                    property: n,
                    connectedRelationPatternName: r,
                    integrationId: l,
                    propertySchema: s,
                    environment: d,
                    upsellInfo: c
                } = e, u = (0, o(109939).tz)(), p = (0, o(682985).K8)(() => {
                    if (s && (0, o(425985).U)(s) && s.connectedRelation.integration_id === o(49361).mn) return s.collection_pointer
                }, [s]), {
                    format: g,
                    loading: m
                } = (0, o(810173).e8)(p, {
                    debugName: "CollectionSettingsDatabaseActionsConfig"
                }), f = (0, i.useMemo)(() => {
                    var e;
                    return !!g && !!(null == (e = g.sync_state) ? void 0 : e.syncing)
                }, [g]), y = c && !c.isAvailable;
                return (0, a.jsxs)(a.Fragment, {
                    children: [f ? (0, a.jsx)(K, {}) : (0, a.jsx)(V, {}), m ? (0, a.jsx)(o(517334).k, {}) : (0, a.jsx)(W, {
                        disabled: f || y,
                        disabledTooltipMessage: y ? u.formatMessage(P.featureUnavailableTooltip, {
                            upsellTier: null == c ? void 0 : c.upsellTier
                        }) : void 0,
                        collectionContextStore: t,
                        property: n,
                        connectedRelationPatternName: r,
                        integrationId: l,
                        propertySchema: s,
                        environment: d
                    })]
                })
            }
            let O = {
                display: "flex",
                alignSelf: "center",
                flexDirection: "column",
                width: "100%",
                paddingInlineStart: 8,
                paddingInlineEnd: 8,
                cursor: "default"
            };

            function V() {
                return (0, a.jsx)(o(844565).A, {
                    disableDesktopPadding: !0,
                    disableMobilePadding: !0,
                    disableMobileBorders: !0,
                    mobileStyle: O,
                    title: (0, a.jsx)(o(109939).sA, { ...P.linkPreviewTitle
                    }),
                    children: (0, a.jsx)("div", {
                        children: (0, a.jsx)("img", {
                            src: o(896221).A.images.externalIntegrations.salesforceLinkpreviewPng,
                            style: O,
                            alt: "Paste Salesforce URLs to create a Salesforce property."
                        })
                    })
                })
            }
            let F = {
                borderedContainer: {
                    borderRadius: 6,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: o(632079).Tj.border.secondary,
                    paddingTop: 16,
                    paddingInlineEnd: 12,
                    paddingBottom: 16,
                    paddingInlineStart: 12,
                    gap: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "8px"
                },
                header: {
                    fontWeight: o(699422).Wy.medium,
                    color: o(632079).Tj.text.primary,
                    fontSize: o(699422).J.UIRegular.desktop
                },
                captionText: {
                    fontSize: o(699422).J.UISmall.desktop,
                    color: o(632079).Tj.text.secondary,
                    fontWeight: o(699422).Wy.regular,
                    textAlign: "center"
                },
                iconGroup: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gridColumnGap: 10,
                    height: 36,
                    width: 36
                }
            };

            function K() {
                return (0, a.jsxs)(o(844565).A, {
                    style: F.borderedContainer,
                    children: [(0, a.jsx)("div", {
                        style: F.iconGroup,
                        children: (0, a.jsx)(o(16275).I, {
                            icon: o(876339).C,
                            size: "xl",
                            colorVariant: "secondary"
                        })
                    }), (0, a.jsx)("div", {
                        style: F.header,
                        children: (0, a.jsx)(o(109939).sA, { ...P.syncInProgress
                        })
                    }), (0, a.jsx)("div", {
                        style: F.captionText,
                        children: (0, a.jsx)(o(109939).sA, { ...P.syncInProgressDescription
                        })
                    })]
                })
            }

            function W({
                collectionContextStore: e,
                property: t,
                connectedRelationPatternName: i,
                integrationId: n,
                propertySchema: r,
                environment: l,
                disabled: s,
                disabledTooltipMessage: d
            }) {
                let c = (0, o(109939).tz)(),
                    u = e.settingsStore,
                    p = (0, o(682985).K8)(() => {
                        var t;
                        let o = null == e || null == (t = e.collectionStore()) ? void 0 : t.getSchema();
                        return o && Object.values(o).some(e => e && "url" === e.type)
                    }, [e]);
                return (0, a.jsx)(o(844565).A, {
                    disableDesktopPadding: !0,
                    disableMobilePadding: !0,
                    disableMobileBorders: !0,
                    mobileStyle: O,
                    title: (0, a.jsx)(o(109939).sA, { ...P.databaseActionsTitle
                    }),
                    children: (0, a.jsx)(o(51831).m, {
                        disableTooltip: !s,
                        content: e => (0, a.jsx)("div", { ...e,
                            style: o(689266).Q$,
                            children: d || c.formatMessage(P.databaseActionsDisabledWhileSyncing)
                        }),
                        children: l => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(o(209572).A, { ...l,
                                showChevron: !0,
                                title: (0, a.jsx)(o(109939).sA, { ...P.addPropertiesTitle
                                }),
                                icon: o(774458).n,
                                disabled: s,
                                onClick: () => {
                                    let a = e.collectionStore();
                                    (0, o(104310).u)({
                                        event: {
                                            eventName: "salesforce_actions",
                                            eventProperties: {
                                                actionType: "add_properties_clicked",
                                                collectionId: null == a ? void 0 : a.id,
                                                integrationId: n,
                                                details: {
                                                    source: "edit_property"
                                                }
                                            }
                                        }
                                    }), (0, o(76790).a)({
                                        collectionSettingsStore: u,
                                        item: {
                                            type: "connectedRelationDatabaseActions",
                                            source: "connectedRelationAddProperties",
                                            rootPropertyId: t,
                                            connectedRelationPatternName: i,
                                            integrationId: n,
                                            rootPropertySchema: r,
                                            eventSource: "edit_property"
                                        }
                                    })
                                }
                            }), (0, a.jsx)(o(209572).A, { ...l,
                                showChevron: !0,
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Populate property",
                                    id: "database.viewSettings.salesforceConfigTab.populateProperty"
                                }),
                                icon: o(703696).V,
                                disabled: s,
                                onClick: () => {
                                    (0, o(76790).a)({
                                        collectionSettingsStore: u,
                                        item: {
                                            type: "connectedRelationDatabaseActions",
                                            source: "connectedRelationCopyUrl",
                                            rootPropertyId: t,
                                            connectedRelationPatternName: i,
                                            integrationId: n,
                                            rootPropertySchema: r
                                        }
                                    });
                                    let a = e.collectionStore();
                                    (0, o(104310).u)({
                                        event: {
                                            eventName: "salesforce_actions",
                                            eventProperties: {
                                                actionType: "navigate_to_copy_url",
                                                collectionId: null == a ? void 0 : a.id,
                                                integrationId: n,
                                                details: {
                                                    source: "edit_property",
                                                    isCopyUrlDisabled: !p
                                                }
                                            }
                                        }
                                    })
                                }
                            })]
                        })
                    })
                })
            }

            function N(e) {
                let {
                    collectionContextStore: t,
                    property: n,
                    targetCollectionStore: r
                } = e, l = (0, o(533992).v3)(), s = (0, o(109939).tz)(), d = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = t.collectionStore()) ? void 0 : e.id
                }, [t]), c = (0, o(682985).K8)(() => t.contextTypeFromStoreState, [t]), [u, p] = (0, i.useState)(void 0), g = !!(r && d === r.id), m = (0, i.useCallback)(() => {
                    var e;
                    if (!u) return;
                    let {
                        hasInverseRelation: i,
                        inverseName: r,
                        autoRelate: a
                    } = u, d = null == (e = t.collectionStore()) ? void 0 : e.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "CollectionSettingsRelationOptions.handleEditRelation",
                        environment: l,
                        cellTarget: d ? {
                            spaceWithId: d
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            o(377573).Go({
                                environment: l,
                                collectionContextStore: t,
                                property: n,
                                hasInverseRelation: i,
                                inverseName: r,
                                autoRelate: a,
                                intl: s,
                                transaction: e
                            })
                        }
                    }), (0, o(8043).V)({
                        environment: l,
                        collectionStore: t.collectionStore(),
                        collectionViewStore: t.collectionViewStore(),
                        property: n,
                        from: "collectionPage" === c ? "page_properties" : "view_settings",
                        action: "relation_edit",
                        is_self_relation: g,
                        has_inverse: i,
                        auto_relate: null == a ? void 0 : a.enabled
                    }), p(void 0)
                }, [u, l, t, n, c, g, s]);
                return (0, a.jsx)(o(868748).Ay, {
                    collectionContextStore: t,
                    targetCollectionStore: r,
                    property: n,
                    temporaryInverseState: u,
                    setTemporaryInverseState: p,
                    onSubmit: m
                })
            }

            function z(e) {
                let {
                    collectionContextStore: t,
                    property: i
                } = e, n = (0, o(533992).v3)(), r = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = t.collectionStore()) ? void 0 : e.id
                }, [t]), l = (0, o(682985).K8)(() => o(856235).Jq(t, i), [t, i]), s = (0, o(682985).K8)(() => {
                    let e = t.collectionViewBlockStore();
                    return (0, o(123190).k)(e, l)
                }, [t, l]), d = !!(s && r === s.id), c = l && (0, o(425985).U)(l) ? l.connectedRelation : void 0, {
                    isConnectedRelationDatabaseActionsSupported: u,
                    connectedRelationPatternName: p,
                    integrationId: g
                } = (0, o(682985).K8)(() => {
                    let e = t.normalizedSchemaStore.state[i],
                        n = null == e ? void 0 : e.name,
                        r = (0, o(561872).Dz)(e);
                    return {
                        isConnectedRelationDatabaseActionsSupported: (0, o(561872).Mn)(r),
                        connectedRelationPatternName: n,
                        integrationId: r
                    }
                }, [t, i]);
                if (!s) return null;
                let m = l && !(0, o(561872).H6)(l) && !(0, o(561872).KF)(l);
                return (0, a.jsxs)(a.Fragment, {
                    children: [!c && m ? (0, a.jsx)(o(614107).A, {
                        isSelfRelation: d,
                        collectionStore: s,
                        showAs: "link",
                        disabled: !0
                    }) : void 0, m ? (0, a.jsx)(o(108053).Z, {
                        collectionContextStore: t,
                        propertySchema: l,
                        property: i
                    }) : void 0, u && p && g ? (0, a.jsx)(R, {
                        collectionContextStore: t,
                        property: i,
                        connectedRelationPatternName: p,
                        integrationId: g,
                        propertySchema: l,
                        environment: n
                    }) : void 0, c ? void 0 : (0, a.jsx)(N, {
                        collectionContextStore: t,
                        property: i,
                        targetCollectionStore: s
                    })]
                })
            }
            let E = {
                defaultText: {
                    fontSize: 12,
                    fontWeight: o(699422).Wy.medium,
                    textTransform: "uppercase"
                },
                style0: {
                    marginInlineStart: -2
                },
                style1: {
                    color: o(632079).Tj.text.inverseSecondary
                }
            };

            function U(e) {
                var t;
                let r = (0, o(533992).v3)(),
                    {
                        property: l,
                        option: s,
                        statusGroup: d,
                        propertySchema: c,
                        isDefault: u,
                        disabled: p
                    } = e,
                    g = (0, o(713311).ET)(),
                    m = (0, o(682985).K8)(() => {
                        var e;
                        return null == (e = g.collectionStore()) ? void 0 : e.id
                    }, [g]),
                    y = (0, o(682985).uB)(void 0, o(510969).A),
                    h = (0, o(83208).X)("fix_mobile_drag_conflict"),
                    b = (0, o(682985).K8)(() => y.state.open, [y]),
                    S = (0, i.useCallback)(() => {
                        y.setState({
                            open: !0
                        })
                    }, [y]),
                    x = (0, i.useCallback)(() => {
                        y.setState({
                            open: !1
                        })
                    }, [y]),
                    v = (0, i.useCallback)(e => {
                        let t = g.collectionStore();
                        t && (0, o(916311).p)({
                            environment: r,
                            collectionStore: t,
                            performTransaction: o => {
                                for (let i of e)(0, f().y4)({
                                    store: (0, n().v3)(t, i.pointer),
                                    operation: i,
                                    transaction: o
                                })
                            }
                        })
                    }, [g, r]);
                return m ? (0, a.jsx)(o(942079).h, {
                    open: b,
                    origin: (0, a.jsx)(o(51831).m, {
                        content: e => (0, a.jsxs)("div", { ...e,
                            style: o(689266).Q$,
                            children: [(0, a.jsx)("div", {
                                children: s.value
                            }), (0, a.jsx)("div", {
                                style: E.style1,
                                children: s.description
                            })]
                        }),
                        placement: "left",
                        disableTooltip: !(null != (t = s.description) && t.length),
                        children: t => {
                            var i, n;
                            return (0, a.jsx)(o(209572).A, {
                                desktopTitleStyle: E.style0,
                                ...t,
                                showDragHandle: h || !o(986939).A.isMobile,
                                showChevron: !0,
                                disabled: p,
                                rotateChevron: b,
                                reducedPadding: e.reducedPadding,
                                title: "status" === c.type ? (0, a.jsx)(o(593100).q, {
                                    format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium,
                                    value: s.value,
                                    color: s.color,
                                    hideTooltip: !!(null == (i = s.description) ? void 0 : i.length),
                                    tooltipPlacement: "left",
                                    showRemoveButton: !1,
                                    isSingle: !0,
                                    groupColor: null == d ? void 0 : d.color
                                }) : (0, a.jsx)(o(593100).O, {
                                    format: o(986939).A.isMobile ? o(696654).NY.Large : o(696654).NY.Medium,
                                    value: s.value,
                                    color: s.color,
                                    hideTooltip: !!(null == (n = s.description) ? void 0 : n.length),
                                    tooltipPlacement: "left",
                                    showRemoveButton: !1,
                                    isSingle: !0
                                }),
                                right: u ? (0, a.jsx)("span", {
                                    style: E.defaultText,
                                    children: (0, a.jsx)(o(109939).sA, {
                                        id: "database.statusProperty.default",
                                        defaultMessage: "Default"
                                    })
                                }) : void 0,
                                onClick: S
                            })
                        }
                    }),
                    option: s,
                    property: l,
                    propertySchema: c,
                    statusGroup: d,
                    collectionId: m,
                    analyticsFrom: "view_settings",
                    alignmentToOrigin: "end",
                    onChange: v,
                    onClose: x
                }) : null
            }
            let L = o(546605).Store.createClass(void 0, {
                    name: "InputGroupIndexStore"
                }),
                Y = {
                    minWidth: 190
                },
                q = {
                    marginTop: 4,
                    marginInlineStart: -4,
                    width: "calc(100% + 8px)"
                },
                H = {
                    marginInlineEnd: -2
                },
                G = {
                    marginBottom: 2
                },
                $ = {
                    marginTop: 4
                };

            function J(e) {
                let {
                    collectionContextStore: t,
                    property: l,
                    disabled: s,
                    aIAutofillOption: d,
                    generateWithAIOption: c
                } = e, u = (0, o(533992).v3)(), p = (0, o(83208).X)("fix_mobile_drag_conflict"), g = (0, o(682985).uB)(void 0, L), [m, y] = (0, i.useState)({
                    inputValue: "",
                    focus: !1
                }), h = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = t.collectionStore()) ? void 0 : e.getSchema()
                }, [t]), b = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = t.collectionStore()) ? void 0 : e.getFormat().app_config_uri
                }, [t]), S = (0, o(682985).K8)(() => Q(t, l), [t, l]), x = (0, o(682985).O$)(g);
                if (!h || !S) return null;
                if ("status" === S.type) {
                    let e = S.groups ? ? [];
                    if (0 === e.length) return null;
                    let i = S.options ? ? [],
                        n = e.map(e => {
                            let t = i.filter(t => {
                                var o;
                                return null == (o = e.optionIds) ? void 0 : o.includes(t.id)
                            });
                            return {
                                group: e,
                                groupOptions: t
                            }
                        }),
                        d = S.defaultOption,
                        c = [...n[0].groupOptions.map(e => e.value)];
                    for (let {
                            group: e,
                            groupOptions: t
                        } of n.slice(1)) c.push({
                        key: `group-header-${e.name}`,
                        draggable: !1
                    }), c.push(...t.map(e => e.value));
                    let f = r(b, h, l) ? {
                        tooltipCaption: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "These options are core to the property and cannot be changed.",
                            id: "database.viewSettings.selectOptions.disabledGroupMessage"
                        })
                    } : void 0;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(Z, {
                            title: (0, a.jsx)(o(575395).RS, {
                                disableGroup: f,
                                group: n[0].group
                            }),
                            right: (0, a.jsx)(ee, {
                                collectionContextStore: t,
                                property: l,
                                onClick: () => eo(y, g, 0),
                                isVisible: !m.focus
                            }),
                            disabled: s,
                            children: [0 === x ? (0, a.jsx)(en, {
                                collectionContextStore: t,
                                property: l,
                                input: m,
                                setInput: y,
                                inputGroupIndexStore: g
                            }) : void 0, (0, a.jsx)(el, {
                                setInput: y,
                                inputGroupIndexStore: g,
                                groupIndex: 0,
                                visible: !m.focus && 0 === n[0].groupOptions.length
                            })]
                        }), (0, a.jsx)(o(66467).Ay, {
                            direction: "vertical",
                            keys: c,
                            touchDragDelay: p ? 200 : void 0,
                            renderKey: (r, c) => {
                                if (r.startsWith("group-header-")) {
                                    let e = r.substring(13),
                                        i = n.findIndex(({
                                            group: t
                                        }) => t.name === e),
                                        {
                                            group: d,
                                            groupOptions: c
                                        } = n[i];
                                    return (0, a.jsxs)(Z, {
                                        title: (0, a.jsx)(o(575395).RS, {
                                            disableGroup: f,
                                            group: d,
                                            showIcon: !1
                                        }),
                                        right: (0, a.jsx)(ee, {
                                            collectionContextStore: t,
                                            property: l,
                                            onClick: e => eo(y, g, i),
                                            isVisible: !m.focus
                                        }),
                                        disabled: s,
                                        children: [x === i ? (0, a.jsx)(en, {
                                            collectionContextStore: t,
                                            property: l,
                                            input: m,
                                            setInput: y,
                                            inputGroupIndexStore: g
                                        }) : void 0, (0, a.jsx)(el, {
                                            setInput: y,
                                            inputGroupIndexStore: g,
                                            groupIndex: i,
                                            visible: !m.focus && 0 === c.length
                                        })]
                                    })
                                } {
                                    let t = i.find(e => e.value === r);
                                    if (!t) return null;
                                    let o = e.find(e => {
                                        var o;
                                        return null == (o = e.optionIds) ? void 0 : o.includes(t.id)
                                    });
                                    return (0, a.jsx)(U, {
                                        option: t,
                                        statusGroup: o,
                                        propertySchema: S,
                                        property: l,
                                        isDefault: t.value === d,
                                        disabled: s
                                    }, t.value)
                                }
                            },
                            onDrop: e => et(e, u, l, t),
                            disabled: s
                        })]
                    })
                } {
                    let e = S.options ? ? [],
                        i = e.map(e => e.value),
                        r = S.auto_sort_options || "manual";
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o(529983).A, {
                            icon: o(300921).arrowUpDownIcon,
                            title: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Sort",
                                id: "database.viewSettings.selectOptions.autoSort"
                            }),
                            selectedKey: r,
                            options: [{
                                key: "manual",
                                type: "button",
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Manual",
                                    id: "database.viewSettings.selectOptions.autoSort.none"
                                })
                            }, {
                                key: "alphabetical",
                                type: "button",
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Alphabetical",
                                    id: "database.viewSettings.selectOptions.autoSort.alphabetical"
                                })
                            }, {
                                key: "reverse_alphabetical",
                                type: "button",
                                title: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Reverse alphabetical",
                                    id: "database.viewSettings.selectOptions.autoSort.reverseAlphabetical"
                                })
                            }],
                            onChange: e => (function(e, t, i, r) {
                                let a = i.collectionStore(),
                                    l = i.normalizedSchemaStore.state,
                                    s = Q(i, r);
                                if (!a || !s || !(0, o(532792).l)(s)) return;
                                let d = [{
                                    pointer: a.pointer,
                                    command: "update",
                                    path: ["schema", r],
                                    args: {
                                        auto_sort_options: e
                                    }
                                }];
                                if ("alphabetical" === e || "reverse_alphabetical" === e) {
                                    let t = a.getSpaceShardedPointer();
                                    d.push(... function(e) {
                                        let {
                                            collectionPointer: t,
                                            property: i,
                                            propertySchema: n,
                                            schema: r,
                                            isAscending: a
                                        } = e, l = [...n.options || []].map(e => e.value).sort((e, t) => e.localeCompare(t, void 0, {
                                            sensitivity: "base"
                                        }) * (a ? 1 : -1));
                                        return (0, o(910321).o)({
                                            newOptions: l,
                                            collectionPointer: t,
                                            property: i,
                                            schema: r
                                        })
                                    }({
                                        collectionPointer: t,
                                        property: r,
                                        propertySchema: s,
                                        schema: l,
                                        isAscending: "alphabetical" === e
                                    }) || [])
                                }(0, o(916311).p)({
                                    environment: t,
                                    collectionStore: a,
                                    performTransaction: e => {
                                        for (let t of d)(0, f().y4)({
                                            store: (0, n().v3)(a, t.pointer),
                                            operation: t,
                                            transaction: e
                                        })
                                    }
                                }), (0, o(8043).V)({
                                    environment: t,
                                    collectionStore: i.collectionStore(),
                                    collectionViewStore: i.collectionViewStore(),
                                    property: r,
                                    from: "view_settings",
                                    action: "select_change_auto_sort_options"
                                })
                            })(e, u, t, l),
                            popupStyle: Y
                        }, "autoSortMenuItem"), d, (0, a.jsxs)(Z, {
                            topBorder: !0,
                            overrideStyle: q,
                            title: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Options",
                                id: "database.viewSettings.selectOptions.title"
                            }),
                            right: (0, a.jsx)("div", {
                                style: H,
                                children: (0, a.jsx)(ee, {
                                    collectionContextStore: t,
                                    property: l,
                                    onClick: () => eo(y, g),
                                    isVisible: !m.focus && i.length > 0
                                })
                            }),
                            disabled: s,
                            children: [(0, a.jsx)(en, {
                                collectionContextStore: t,
                                property: l,
                                input: m,
                                setInput: y,
                                inputGroupIndexStore: g
                            }), (0, a.jsx)(el, {
                                setInput: y,
                                inputGroupIndexStore: g,
                                visible: !m.focus && 0 === i.length
                            })]
                        }, "sectionHeader"), i.length > 0 ? (0, a.jsx)(o(66467).Ay, {
                            touchDragDelay: p ? 200 : void 0,
                            style: G,
                            direction: "vertical",
                            keys: i,
                            renderKey: t => {
                                let o = e.find(e => e.value === t);
                                return o ? (0, a.jsx)(U, {
                                    option: o,
                                    property: l,
                                    propertySchema: S,
                                    isDefault: !1,
                                    statusGroup: void 0,
                                    disabled: s,
                                    reducedPadding: !0
                                }, o.value) : null
                            },
                            onDrop: e => et(e, u, l, t)
                        }) : void 0, c ? (0, a.jsx)("div", {
                            style: $,
                            children: (0, a.jsx)(o(844565).A, {
                                topBorder: !0,
                                children: c
                            })
                        }) : void 0]
                    })
                }
            }
            let X = {
                height: 20
            };

            function Z({
                title: e,
                right: t,
                children: i,
                disabled: n,
                overrideStyle: r,
                topBorder: l
            }) {
                let s = (0, o(649476).Tf)(),
                    d = (0, o(960253).I)(() => ({
                        desktop: {
                            width: "100%",
                            paddingBottom: 0,
                            ...r
                        },
                        mobile: { ...s && {
                                borderRadius: 0
                            }
                        },
                        mobileTitle: { ...s && {
                                paddingTop: 12,
                                paddingBottom: 4,
                                minHeight: 44
                            }
                        }
                    }), [s, r]);
                return (0, a.jsx)(o(844565).A, {
                    title: e,
                    right: !n && t,
                    style: d.desktop,
                    desktopTitleStyle: X,
                    mobileStyle: d.mobile,
                    mobileTitleStyle: d.mobileTitle,
                    disableMobilePadding: !!s || void 0,
                    topBorder: l,
                    children: n ? void 0 : i
                })
            }

            function Q(e, t) {
                let i = e.normalizedSchemaStore.state[t];
                if (i && ((0, o(532792).l)(i) || "status" === i.type)) return i
            }

            function ee({
                onClick: e,
                collectionContextStore: t,
                property: i,
                isVisible: n
            }) {
                let r = (0, o(109939).tz)();
                return (0, o(682985).K8)(() => Q(t, i), [t, i]) ? (0, a.jsx)(o(374533).A, {
                    icon: o(581923).plusIcon,
                    size: "md",
                    onClick: e,
                    style: {
                        width: 20,
                        height: 20,
                        visibility: n ? void 0 : "hidden"
                    },
                    disabled: !n,
                    ariaLabel: r.formatMessage({
                        defaultMessage: "Add an option",
                        id: "database.viewSettings.selectOptions.addOption"
                    })
                }) : null
            }

            function et(e, t, i, n) {
                let r = n.normalizedSchemaStore.state,
                    a = n.collectionStore();
                a && (o(97137).gc({
                    newValues: e,
                    property: i,
                    schema: r,
                    collectionStore: a,
                    environment: t
                }), (0, o(8043).V)({
                    environment: t,
                    collectionStore: n.collectionStore(),
                    collectionViewStore: n.collectionViewStore(),
                    property: i,
                    from: "view_settings",
                    action: "select_options_reorder"
                }))
            }

            function eo(e, t, o) {
                e({
                    focus: !0,
                    inputValue: ""
                }), void 0 !== o && t.setState(o)
            }
            let ei = {
                marginTop: 2,
                marginBottom: 8
            };

            function en({
                collectionContextStore: e,
                property: t,
                input: n,
                setInput: r,
                inputGroupIndexStore: l
            }) {
                let s = (0, o(533992).v3)(),
                    d = (0, o(109939).tz)(),
                    c = (0, i.useCallback)(i => {
                        null == i || i.stopPropagation(),
                            function(e, t, i, n, r, a) {
                                let l = t.collectionStore(),
                                    s = Q(t, i);
                                if (!s || !l) return;
                                let d = s.options || [],
                                    c = n.inputValue.trim();
                                if (c)
                                    if ("status" === s.type) {
                                        let t, n = a.state;
                                        if (void 0 !== n && (t = d.find(e => {
                                                var t;
                                                return null == (t = s.groups) || null == (t = t[n].optionIds) ? void 0 : t.includes(e.id)
                                            })), void 0 === n || void 0 !== t) o(97137).Uk({
                                            modification: {
                                                type: "keyedObjectListBefore",
                                                beforeOption: t,
                                                newValue: c
                                            },
                                            property: i,
                                            propertySchema: s,
                                            options: d,
                                            environment: e,
                                            collectionStore: l,
                                            groupIndex: n
                                        });
                                        else {
                                            let t;
                                            for (let e = n - 1; e >= 0; e--) {
                                                var u;
                                                let o = null == (u = s.groups) ? void 0 : u[e];
                                                if (o && void 0 !== (t = d.find(e => {
                                                        var t;
                                                        return null == (t = o.optionIds) ? void 0 : t.includes(e.id)
                                                    }))) break
                                            }
                                            o(97137).Uk({
                                                modification: {
                                                    type: "keyedObjectListAfter",
                                                    afterOption: t,
                                                    newValue: c
                                                },
                                                property: i,
                                                propertySchema: s,
                                                options: d,
                                                environment: e,
                                                collectionStore: l,
                                                groupIndex: n
                                            })
                                        }
                                    } else(0, o(532792).l)(s) && ("alphabetical" === s.auto_sort_options || "reverse_alphabetical" === s.auto_sort_options) ? o(97137).Uk({
                                        modification: {
                                            type: "autoSortInsert",
                                            newValue: c
                                        },
                                        property: i,
                                        propertySchema: s,
                                        options: d,
                                        environment: e,
                                        collectionStore: l
                                    }) : o(97137).Uk({
                                        modification: {
                                            type: "keyedObjectListBefore",
                                            newValue: c
                                        },
                                        property: i,
                                        propertySchema: s,
                                        options: d,
                                        environment: e,
                                        collectionStore: l
                                    });
                                r({
                                    focus: !0,
                                    inputValue: ""
                                }), (0, o(8043).V)({
                                    environment: e,
                                    collectionStore: t.collectionStore(),
                                    collectionViewStore: t.collectionViewStore(),
                                    property: i,
                                    from: "view_settings",
                                    action: "select_add_option",
                                    option_value_char_count: c.length
                                })
                            }(s, e, t, n, r, l)
                    }, [s, e, t, n, r, l]),
                    u = (0, i.useCallback)(e => {
                        r({
                            focus: !0,
                            inputValue: e.target.value.replace(/,/g, "")
                        })
                    }, [r]),
                    p = (0, i.useCallback)(() => {
                        r({
                            focus: !1,
                            inputValue: o(986939).A.isMobile ? n.inputValue : ""
                        })
                    }, [s, n, r]),
                    g = (0, o(226142).a)(),
                    m = (0, o(960253).I)(() => ({
                        inputOuterStyle: g ? {
                            backgroundColor: o(632079).Tj.background.primary
                        } : {}
                    }), [g]);
                return n.focus ? (0, a.jsx)(o(369064).N, {
                    debugName: "CollectionSettingsSelectOptions",
                    capture: !0,
                    onEsc: p,
                    children: (0, a.jsx)(o(310324).Ay, {
                        value: n.inputValue,
                        focus: !0,
                        placeholder: d.formatMessage({
                            defaultMessage: "Type a new option…",
                            id: "database.viewSettings.selectOptions.newSelectOption.inputPlaceholder"
                        }),
                        style: ei,
                        inputOuterStyle: m.inputOuterStyle,
                        onChange: u,
                        onBlur: p,
                        onSubmit: c,
                        mobileKeyboardOnDismiss: c
                    })
                }) : null
            }
            let er = {
                    width: "100%"
                },
                ea = {
                    display: "none"
                };

            function el({
                groupIndex: e,
                setInput: t,
                inputGroupIndexStore: i,
                visible: n
            }) {
                return (0, a.jsx)(o(95582).A, {
                    icon: (0, a.jsx)(o(16275).I, {
                        icon: o(581923).plusIcon
                    }),
                    focused: !1,
                    title: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Add an option",
                        id: "database.viewSettings.selectOptions.noOptions"
                    }),
                    buttonStyle: { ...!n ? ea : {}
                    },
                    style: er,
                    onClick: () => eo(t, i, e)
                })
            }
            let es = i.memo(function(e) {
                let t = (0, o(109939).tz)(),
                    {
                        collectionContextStore: n,
                        collectionSettingsStore: r,
                        formatKey: l,
                        property: d,
                        selectNameInitial: c,
                        titleOverride: u
                    } = e,
                    [p, g] = (0, i.useState)(!1),
                    [m, f] = (0, i.useState)(""),
                    y = (0, o(533992).v3)(),
                    h = (0, i.useRef)(null),
                    b = (0, o(960253).e)(),
                    {
                        collectionStore: S,
                        isMultiSourceView: x
                    } = (0, o(682985).K8)(() => ({
                        collectionStore: n.collectionStore(),
                        isMultiSourceView: "collectionTypedView" === n.contextTypeFromStoreState
                    }), [n]),
                    v = (0, o(682985).O$)(n.normalizedSchemaStore),
                    {
                        isTypedProperty: A,
                        databaseType: j
                    } = (0, o(682985).K8)(() => S ? {
                        isTypedProperty: S.isTypedProperty(d),
                        databaseType: S.getDatabaseType()
                    } : {
                        isTypedProperty: !1,
                        databaseType: void 0
                    }, [S, d]),
                    w = (0, o(682985).K8)(() => (0, o(561872)._g)({
                        schema: v,
                        property: d
                    }), [d, v]),
                    M = (0, o(682985).K8)(() => (function(e) {
                        let {
                            collectionContextStore: t,
                            formatKey: o,
                            property: i
                        } = e, n = function(e) {
                            let {
                                formatKey: t,
                                collectionContextStore: o
                            } = e;
                            if (!t) return [];
                            if ("collection_page_properties" === t) {
                                var i;
                                return (null == (i = o.collectionStore()) ? void 0 : i.getFormat().collection_page_properties) ? ? []
                            }
                            return o.normalizedFormatStore.state[t] || []
                        }({
                            formatKey: o,
                            collectionContextStore: t
                        });
                        return null == n ? void 0 : n.find(e => e.property === i)
                    })({
                        property: d,
                        formatKey: l,
                        collectionContextStore: n
                    }), [n, l, d]),
                    C = (0, o(682985).K8)(() => (0, o(799514).fE)({
                        property: d,
                        collectionContextStore: n,
                        newValue: m
                    }), [n, m, d]),
                    T = (0, o(682985).K8)(() => {
                        var e;
                        let t = null == (e = n.collectionViewBlockStore()) ? void 0 : e.id;
                        return !!t && (0, o(933062).Nh)(t)
                    }, [n]),
                    k = (0, o(682985).K8)(() => void 0 !== S && void 0 !== j && (0, o(477203).j)({
                        appConfigs: (0, o(402276).appConfigs)(),
                        databaseType: j,
                        propertyId: d,
                        collectionStore: S
                    }), [S, j, d]),
                    _ = (0, o(682985).K8)(() => {
                        let e = n.collectionViewStore();
                        return !!e && "timeline" !== e.getType() && !!((null == M ? void 0 : M.wrap) || e.getFormat().table_wrap)
                    }, [n, M]),
                    P = (0, o(682985).uB)(void 0, o(510969).A),
                    R = (0, o(226142).a)();
                (0, i.useEffect)(() => {
                    (function(e, t, i) {
                        let n = t.collectionViewStore();
                        if (!n || "table" !== n.getType()) return;
                        let r = o(784068).A.findTableHeaderCell(t, e);
                        if (!r) return;
                        let a = r.getNode();
                        if (!a || !i) return;
                        let l = (0, o(54503).T8)(a);
                        if (!l) return;
                        let s = i.getBoundingClientRect(),
                            d = a.getBoundingClientRect().right + 20 - s.left;
                        l.scrollLeft = l.scrollLeft + d
                    })(d, n, h.current), w && f(w.name || "")
                }, [n, d, w]);
                let B = (0, i.useCallback)(e => {
                        ! function(e) {
                            let {
                                name: t,
                                environment: i,
                                property: n,
                                collectionContextStore: r,
                                inputValue: a
                            } = e;
                            if ((0, o(799514).fE)({
                                    property: n,
                                    collectionContextStore: r,
                                    newValue: a
                                })) return;
                            let l = r.collectionStore();
                            if (!l) return;
                            let s = l.getSchema()[n];
                            if (!s || s.name === t) return;
                            let d = l.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "ButtonBuilderModal.handlePropertyNameSubmit",
                                environment: i,
                                canUndo: !0,
                                cellTarget: d ? {
                                    spaceWithId: d
                                } : void 0,
                                perform: e => {
                                    (0, o(259705).Y)({
                                        collectionStore: l,
                                        property: n,
                                        name: t,
                                        transaction: e
                                    })
                                }
                            })
                        }({
                            collectionContextStore: n,
                            environment: y,
                            inputValue: m,
                            name: e,
                            property: d
                        })
                    }, [n, y, m, d]),
                    D = (0, i.useCallback)(e => {
                        g(!p), e.stopPropagation()
                    }, [p]),
                    O = (0, i.useCallback)(e => {
                        ! function(e) {
                            var t;
                            let {
                                description: i,
                                environment: n,
                                collectionContextStore: r,
                                property: a
                            } = e, l = r.collectionStore(), s = null == l || null == (t = l.getSchema()) ? void 0 : t[a];
                            if (!l || void 0 === s || i === s.description) return;
                            let d = l.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "CollectionSettingsProperty.handleDescriptionChange",
                                environment: n,
                                canUndo: !0,
                                cellTarget: d ? {
                                    spaceWithId: d
                                } : void 0,
                                perform: e => {
                                    (0, o(957395).F)({
                                        environment: n,
                                        collectionStore: l,
                                        update: {
                                            [a]: { ...s,
                                                description: i
                                            }
                                        },
                                        transaction: e
                                    })
                                }
                            }), (0, o(8043).V)({
                                environment: n,
                                collectionStore: r.collectionStore(),
                                collectionViewStore: r.collectionViewStore(),
                                property: a,
                                from: "view_properties",
                                action: "set_description"
                            })
                        }({
                            collectionContextStore: n,
                            description: e,
                            environment: y,
                            property: d
                        })
                    }, [n, y, d]),
                    V = (0, i.useCallback)(e => {
                        f(e)
                    }, []);
                if (!w) return null;
                let F = !(0, o(9247).sl)(w),
                    K = !(0, o(425985).U)(w),
                    W = x || (0, o(561872).Jf)({
                        property: d,
                        propertySchema: w,
                        isTypedProperty: A,
                        schema: v
                    }),
                    N = w.description;
                return (0, a.jsxs)(o(669).A, { ...e,
                    title: u || (S ? (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Edit property",
                        id: "database.viewSettings.propertyTab.title"
                    }) : (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "View property",
                        id: "database.viewSettings.propertyTab.title.viewProperty"
                    })),
                    footer: F ? (0, a.jsx)(I, {
                        collectionContextStore: n,
                        formatKey: l,
                        property: d,
                        collectionSettingsStore: r,
                        wrapProperty: _,
                        propertySchema: w,
                        propertyFormat: M,
                        isRequiredTypedProperty: k,
                        databaseType: j
                    }) : void 0,
                    ref: h,
                    children: [(0, a.jsxs)(o(844565).A, {
                        isInput: !0,
                        style: R ? {
                            margin: "0 2px"
                        } : void 0,
                        children: [(0, a.jsx)(o(596117).B, {
                            disabled: x,
                            initialValue: w.name || "",
                            placeholder: t.formatMessage(o(977441).A.inputPlaceholder),
                            onBlur: B,
                            onSubmit: B,
                            focusInitial: c,
                            selectAll: c,
                            iconButton: {
                                icon: e => (0, a.jsx)(o(221535).zB, {
                                    type: w.type,
                                    icon: w.icon,
                                    size: o(104509).Ev.sm,
                                    theme: o(632079).Tj,
                                    themeMode: b,
                                    style: e
                                }),
                                iconStyle: {
                                    fill: o(111012).l8[b].gray
                                },
                                ...R ? {
                                    hasBackground: !0
                                } : void 0,
                                enforceIconColor: "gray",
                                onSubmit: e => {
                                    var t, i, r, a;
                                    let l;
                                    return t = y, i = d, r = n, a = e, void((l = r.collectionStore()) && (0, o(809515).y)({
                                        environment: t,
                                        collectionStore: l,
                                        collectionViewStore: r.collectionViewStore(),
                                        property: i,
                                        icon: a,
                                        from: "view_settings"
                                    }))
                                }
                            },
                            inputOuterStyle: R ? {
                                backgroundColor: o(632079).Tj.white
                            } : void 0,
                            inputRightButton: T ? null : (0, a.jsx)(o(900294).S, {
                                description: N,
                                showTooltip: !p,
                                onClick: D,
                                addDescriptionText: t.formatMessage(o(689266).Mo.addPropertyDescriptionTooltip),
                                editDescriptionText: t.formatMessage(o(689266).Mo.editPropertyDescriptionTooltip)
                            }),
                            onChange: V
                        }), C ? (0, a.jsx)(o(778633).A, {
                            propertyName: m
                        }) : void 0]
                    }), p ? (0, a.jsx)(o(562592).y, {
                        initialDescription: N,
                        handleSaveDescription: O
                    }) : void 0, (0, a.jsx)(ex, {
                        collectionStore: S,
                        property: d,
                        propertySchema: w
                    }), F ? (0, a.jsxs)(o(844565).A, {
                        extraPadding: !0,
                        children: [K ? (0, a.jsx)(o(23889).Dy, {
                            disabled: W,
                            isTypedProperty: A,
                            collectionUri: j,
                            collectionContextStore: n,
                            formatKey: l,
                            propertyTypeButtonPopupStore: P,
                            property: d
                        }) : void 0, "button" === w.type ? (0, a.jsx)(o(23889).nR, {
                            collectionSettingsStore: r,
                            collectionContextStore: n,
                            property: d,
                            source: "collectionSettingsMenu"
                        }) : void 0, x ? (0, a.jsxs)(a.Fragment, {
                            children: ["status" === w.type ? (0, a.jsx)(ed, {
                                collectionSettingsStore: r,
                                collectionContextStore: n,
                                property: d
                            }) : void 0, "date" === w.type || "created_time" === w.type || "last_edited_time" === w.type ? (0, a.jsx)(eu, {
                                collectionContextStore: n,
                                property: d
                            }) : void 0]
                        }) : (0, a.jsx)(ek, {
                            collectionContextStore: n,
                            property: d,
                            propertySchema: w,
                            source: "collectionSettingsMenu"
                        })]
                    }) : void 0, R ? (0, a.jsx)(s, {}) : void 0]
                })
            });

            function ed({
                collectionSettingsStore: e,
                collectionContextStore: t,
                property: i
            }) {
                let n = (0, o(682985).K8)(() => {
                    var e;
                    return r(null == (e = t.collectionStore()) ? void 0 : e.getDatabaseType(), t.normalizedSchemaStore.state, i)
                }, [t, i]);
                return (0, a.jsx)(J, {
                    collectionSettingsStore: e,
                    collectionContextStore: t,
                    property: i,
                    disabled: n,
                    aIAutofillOption: null
                })
            }

            function ec({
                collectionContextStore: e,
                collectionSettingsStore: t,
                property: o
            }) {
                return (0, a.jsx)(y, {
                    collectionContextStore: e,
                    collectionSettingsStore: t,
                    property: o
                })
            }

            function eu({
                collectionContextStore: e,
                property: t
            }) {
                return (0, a.jsx)(b, {
                    collectionContextStore: e,
                    property: t
                })
            }

            function ep({
                collectionContextStore: e,
                property: t
            }) {
                let i = (0, o(682985).K8)(() => {
                        let i = e.normalizedSchemaStore.state[t];
                        return i && (0, o(425985).U)(i)
                    }, [e, t]),
                    n = (0, o(682985).K8)(() => {
                        let i = e.normalizedSchemaStore.state[t];
                        return (0, o(561872).di)(i)
                    }, [e, t]),
                    r = (0, o(682985).K8)(() => {
                        var t;
                        let o = e.collectionStore();
                        return null == o || null == (t = o.getRecordKeyStore()) ? void 0 : t.getRecordKey()
                    }, [e]),
                    l = n ? (0, a.jsx)(o(774940).A, {
                        collectionContextStore: e,
                        property: t
                    }) : (0, a.jsx)(z, {
                        collectionContextStore: e,
                        property: t
                    }),
                    s = n ? (0, a.jsx)(o(789466).A, {
                        width: "100%",
                        uniqueIdPrefix: r
                    }) : void 0,
                    d = i ? (0, a.jsx)(o(960235).J, {
                        collectionContextStore: e,
                        property: t,
                        compact: !0,
                        children: s
                    }) : null;
                return (0, a.jsxs)(a.Fragment, {
                    children: [d, l]
                })
            }

            function eg({
                collectionContextStore: e,
                property: t,
                source: i
            }) {
                let n = (0, o(682985).K8)(() => (0, o(648143).J)({
                    collectionContextStore: e,
                    property: t
                }), [e, t]);
                return n && ("number" === n.type || "formula" === n.type || "rollup" === n.type) ? (0, a.jsx)(o(10376).W, {
                    collectionContextStore: e,
                    property: t,
                    source: i
                }) : null
            }

            function em({
                collectionContextStore: e,
                property: t
            }) {
                let i = (0, o(682985).K8)(() => (0, o(648143).J)({
                        collectionContextStore: e,
                        property: t
                    }), [e, t]),
                    n = (0, o(682985).K8)(() => e.collectionStore(), [e]);
                return i && "url" === i.type && n ? (0, a.jsx)(o(844823).V, {
                    collectionContextStore: e,
                    property: t,
                    propertySchema: i
                }) : null
            }

            function ef({
                collectionContextStore: e,
                property: t
            }) {
                let i = (0, o(682985).K8)(() => (0, o(648143).J)({
                    collectionContextStore: e,
                    property: t
                }), [e, t]);
                return i && "person" === i.type ? (0, a.jsx)(A, {
                    collectionContextStore: e,
                    propertySchema: i,
                    property: t
                }) : null
            }

            function ey({
                collectionContextStore: e,
                property: t
            }) {
                let n = (0, o(533992).v3)(),
                    r = (0, o(109939).tz)(),
                    l = (0, o(682985).K8)(() => {
                        let i = (0, o(648143).J)({
                            collectionContextStore: e,
                            property: t
                        });
                        return (null == i ? void 0 : i.type) === "person" ? i : void 0
                    }, [e, t]),
                    s = (0, o(682985).K8)(() => e.collectionStore(), [e]),
                    d = (0, o(682985).K8)(() => {
                        if (l) return l.notifications ? ? "usersOnly"
                    }, [l]),
                    c = (0, i.useCallback)(e => {
                        if (!s || !l) return;
                        let i = s.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "PersonNotificationOptions.handlePersonNotificationChange",
                            environment: n,
                            canUndo: !0,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            perform: i => {
                                (0, o(957395).F)({
                                    environment: n,
                                    collectionStore: s,
                                    update: {
                                        [t]: { ...l,
                                            notifications: e
                                        }
                                    },
                                    transaction: i
                                })
                            }
                        })
                    }, [n, s, t, l]);
                return d ? (0, a.jsx)(o(529983).A, {
                    icon: o(931118).r,
                    title: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Notifications",
                        id: "database.personProperty.notifications"
                    }),
                    selectedKey: d,
                    options: [{
                        key: "usersAndGroups",
                        type: "button",
                        title: r.formatMessage(o(977441).A.usersAndGroups)
                    }, {
                        key: "usersOnly",
                        type: "button",
                        title: r.formatMessage(o(977441).A.usersOnly)
                    }, {
                        key: "none",
                        type: "button",
                        title: r.formatMessage(o(977441).A.none)
                    }],
                    onChange: c
                }) : null
            }

            function eh({
                collectionContextStore: e,
                property: t
            }) {
                let i = (0, o(682985).K8)(() => (0, o(648143).J)({
                    collectionContextStore: e,
                    property: t
                }), [e, t]);
                return i ? (0, a.jsx)(o(108053).Z, {
                    collectionContextStore: e,
                    propertySchema: i,
                    property: t
                }) : null
            }

            function eb({
                collectionContextStore: e,
                property: t
            }) {
                let i = (0, o(682985).K8)(() => (0, o(648143).J)({
                        collectionContextStore: e,
                        property: t
                    }), [e, t]),
                    n = (0, o(682985).K8)(() => {
                        var t;
                        let o = null == (t = e.collectionStore()) ? void 0 : t.getRecordKeyStore();
                        return null == o ? void 0 : o.getRecordKey()
                    }, [e]);
                return i && "auto_increment_id" === i.type ? (0, a.jsx)(o(519817).A, {
                    uniqueIdProperty: {
                        property: t,
                        propertySchema: i
                    },
                    prefixValue: n,
                    collectionContextStore: e
                }) : null
            }
            let eS = {
                rowPermissionBannerWrapperStyle: {
                    padding: o(986939).A.isMobile ? void 0 : "0 4px"
                }
            };

            function ex({
                collectionStore: e,
                property: t,
                propertySchema: i
            }) {
                let n = (0, o(764396).i)({
                        collectionStore: e,
                        property: t,
                        propertySchema: i,
                        blockStore: void 0
                    }),
                    r = (0, o(682985).K8)(() => {
                        if (!n) return null;
                        let {
                            role: e
                        } = n, t = i.name;
                        return (0, o(644712).v)(e, t)
                    }, [n, i.name]);
                return n ? (0, a.jsx)(o(844565).A, {
                    extraPadding: !0,
                    children: (0, a.jsx)("div", {
                        style: eS.rowPermissionBannerWrapperStyle,
                        children: (0, a.jsx)(o(141342).l, {
                            display: "inline-compact",
                            staticIcon: o(349939).keyFillSmallIcon,
                            label: r,
                            tint: "gray"
                        })
                    })
                }) : null
            }

            function ev({
                collectionContextStore: e,
                property: t
            }) {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(eh, {
                        collectionContextStore: e,
                        property: t
                    }), (0, a.jsx)(ef, {
                        collectionContextStore: e,
                        property: t
                    }), (0, a.jsx)(ey, {
                        collectionContextStore: e,
                        property: t
                    })]
                })
            }
            let eA = {
                style0: {
                    marginTop: 4,
                    paddingTop: 0,
                    marginInlineStart: -4,
                    width: "calc(100% + 8px)"
                },
                style2: {
                    whiteSpace: "break-spaces"
                },
                style3: {
                    display: "flex",
                    alignItems: "center",
                    lineHeight: 1.2,
                    color: o(632079).Tj.text.secondary,
                    gap: 4
                }
            };

            function ej(e) {
                let {
                    environment: t,
                    property: r,
                    propertySchema: l,
                    collectionSettingsStore: s,
                    collectionContextStore: d,
                    collectionStore: c,
                    buttonPopupParent: u
                } = e, p = (0, o(682985).K8)(() => (0, o(9247).om)(l), [l]), {
                    shouldShowLegacyAutofill: g
                } = (0, o(251955).D)({
                    aiInference: p
                }), m = (0, o(682985).K8)(() => (0, o(576348).jq)(o(827482).A.getMode(t, c, c.getSpaceStore()), c), [t, c]), y = (0, i.useMemo)(() => {
                    let e = l.name.trim(),
                        t = o(799514).dC[l.type],
                        i = RegExp(`${t}(?:\\s?\\d+)?`);
                    return !e || i.test(e)
                }, [l.name, l.type]), h = (0, i.useCallback)(() => {
                    if (!c || !l || !(0, o(532792).l)(l)) return;
                    let e = (0, o(9247).RM)(l);
                    if (!e) return;
                    let i = [];
                    if (p) o(942806).trackAiAutofillSettingsAction(t, {
                        type: "remove_ai_inference",
                        ai_inference_type: p.type,
                        collection_id: c.id
                    }), i.push({
                        pointer: c.pointer,
                        command: "set",
                        path: ["schema", r, e],
                        args: void 0
                    });
                    else {
                        let n = {
                            type: l.type,
                            auto_update_on_edit: !1,
                            add_options: !1
                        };
                        o(942806).trackAiAutofillSettingsAction(t, {
                            type: "set_ai_inference",
                            ai_inference_type: n.type,
                            collection_id: c.id
                        }), i.push({
                            pointer: c.pointer,
                            command: "set",
                            path: ["schema", r, e],
                            args: n
                        })
                    }(0, o(916311).p)({
                        environment: t,
                        collectionStore: c,
                        performTransaction: e => {
                            for (let t of i)(0, f().y4)({
                                store: (0, n().v3)(c, t.pointer),
                                operation: t,
                                transaction: e
                            })
                        }
                    })
                }, [p, c, t, r, l]), b = (0, i.useCallback)(e => {
                    if (!l || !c || !(0, o(9247).$M)(l)) return;
                    let i = (0, o(9247).RM)(l);
                    if (!i) return;
                    let a = {
                        pointer: c.pointer,
                        command: "set",
                        path: ["schema", r, i],
                        args: e
                    };
                    (0, o(916311).p)({
                        environment: t,
                        collectionStore: c,
                        performTransaction: e => {
                            (0, f().y4)({
                                store: (0, n().v3)(c, a.pointer),
                                operation: a,
                                transaction: e
                            })
                        }
                    })
                }, [c, t, r, l]), S = (0, o(682985).K8)(() => d.getViewType(), [d]);
                return m && "form_editor" !== S && g ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o(844565).A, {
                        topBorder: !0,
                        style: eA.style0
                    }, "aiSectionHeader"), (0, a.jsx)(o(51831).m, {
                        disableTooltip: !y,
                        placement: "left",
                        content: e => (0, a.jsx)(o(109939).sA, { ...e,
                            defaultMessage: "Update the property name to use AI autofill",
                            id: "database.collectionsettings.autofilloptions.disableswitch.tooltip",
                            description: "User needs to change the property name from the default name to turn on autofill"
                        }),
                        style: eA.style2,
                        children: e => (0, a.jsx)(o(76761).A, { ...e,
                            title: (0, a.jsx)(o(4458).fI, {
                                alignItems: "center",
                                children: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "AI autofill",
                                    id: "database.viewSettings.propertyTab.aiAutofill.open"
                                })
                            }),
                            showChevron: !1,
                            switcherProps: {
                                on: !!p
                            },
                            onClick: h,
                            disabled: !m || y
                        })
                    }), p && !y && ("select" === p.type || "multi_select" === p.type) ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o(877349).A, {
                            setAiInference: b,
                            aiInference: p,
                            disabled: !m
                        }), (0, a.jsx)(o(209572).A, {
                            title: (0, a.jsxs)("div", {
                                style: eA.style3,
                                children: [(0, a.jsx)(o(109939).sA, {
                                    id: "database.collectionsettings.aiAutofillOptions.more",
                                    defaultMessage: "More"
                                }), (0, a.jsx)(o(16275).I, {
                                    icon: o(588222).arrowChevronSingleRightFillSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })]
                            }),
                            disabled: !1,
                            onClick: () => {
                                null == u || u.close(), (0, o(76790).a)({
                                    collectionSettingsStore: s,
                                    item: {
                                        type: "propertyAiAutofill",
                                        propertySchema: l,
                                        property: r
                                    }
                                })
                            }
                        })]
                    }) : void 0]
                }) : null
            }

            function ew({
                propertySchema: e,
                collectionSettingsStore: t,
                collectionContextStore: i,
                property: n,
                buttonPopupParent: r
            }) {
                let s = (0, o(533992).v3)(),
                    d = (0, o(682985).K8)(() => i.collectionStore(), [i]),
                    c = (0, o(551408).A)(),
                    u = (0, o(83208).X)("database_agent_generate_select_options"),
                    p = c && u && !o(986939).A.isMobile;
                return d ? (0, a.jsx)(J, {
                    collectionSettingsStore: t,
                    collectionContextStore: i,
                    property: n,
                    disabled: !1,
                    aIAutofillOption: (0, a.jsx)(ej, {
                        environment: s,
                        collectionStore: d,
                        collectionSettingsStore: t,
                        collectionContextStore: i,
                        property: n,
                        propertySchema: e,
                        buttonPopupParent: r
                    }),
                    generateWithAIOption: p ? (0, a.jsx)(l, {
                        collectionId: d.id,
                        propertyName: e.name,
                        collectionSettingsStore: t,
                        buttonPopupParent: r
                    }) : void 0
                }) : null
            }

            function eM({
                collectionContextStore: e,
                property: t,
                collectionSettingsStore: i,
                source: n
            }) {
                let r, l = (0, o(109939).tz)(),
                    s = (0, o(551408).A)(),
                    d = (0, o(682985).K8)(() => (0, o(648143).J)({
                        collectionContextStore: e,
                        property: t
                    }), [e, t]),
                    c = (0, o(682985).K8)(() => e.getViewType(), [e]),
                    u = !(0, o(682985).O$)(o(205885).e);
                if (!d || "text" !== d.type || "form_editor" === c) return null;
                let p = (0, o(9247).om)(d),
                    {
                        shouldShowLegacyAutofill: g
                    } = (0, o(251955).a)({
                        isDatabaseAgentsEnabled: s,
                        aiInference: p
                    });
                return (p && (0, o(9247).UH)(p.type) ? "summarize" === p.type ? r = o(512342).VT.autofillSummary : "extract" === p.type ? r = o(512342).VT.autofillExtract : "custom" === p.type ? r = o(512342).VT.autofillCustom : "translate" === p.type ? r = o(512342).VT.autofillTranslate : (0, o(722371).HB)(p) : r = o(977441).A.autofillOffLabel, g) ? (0, a.jsx)(o(209572).A, {
                    title: (0, a.jsx)(o(4458).fI, {
                        alignItems: "center",
                        children: (0, a.jsx)(o(109939).sA, {
                            defaultMessage: "AI autofill",
                            id: "database.viewSettings.propertyTab.aiAutofill.open"
                        })
                    }),
                    source: n,
                    icon: o(636).pencilLineIcon,
                    showChevron: !0,
                    right: l.formatMessage(r),
                    onClick: () => {
                        let n;
                        return n = (0, o(648143).J)({
                            collectionContextStore: e,
                            property: t
                        }), void(e.collectionStore() && n && (0, o(76790).a)({
                            collectionSettingsStore: i,
                            item: {
                                type: "propertyAiAutofill",
                                propertySchema: n,
                                property: t
                            }
                        }))
                    },
                    disabled: u
                }) : null
            }

            function eC({
                collectionContextStore: e,
                collectionSettingsStore: t,
                property: n,
                propertySchema: r,
                buttonPopupParent: l
            }) {
                let s = (0, o(533992).v3)(),
                    d = (0, o(109939).tz)(),
                    c = (0, o(682985).K8)(() => e.collectionStore(), [e]),
                    u = (0, o(682985).K8)(() => null == c ? void 0 : c.getSpaceId(), [c]),
                    p = (0, o(682985).K8)(() => (0, o(9247).YE)(r), [r]),
                    {
                        shouldShowDbAgent: g
                    } = (0, o(251955).D)({
                        aiInference: p
                    }),
                    {
                        canCreateBigDatabaseAgents: m,
                        canCreateLiteDatabaseAgents: f
                    } = (0, o(482270).Y)(),
                    y = !m,
                    h = (0, o(595151).a)(c),
                    b = ("value" in h ? h.value : []).length >= o(906659).jE,
                    {
                        getWorkflowsForProperty: S
                    } = (0, o(300873).i)(c, u),
                    x = (0, o(682985).K8)(() => S(n).filter(e => (0, o(691143).m)(e) ? f : m), [S, n, f, m]),
                    v = (0, i.useCallback)(async t => {
                        let {
                            triggerDatabaseAgentModal: i
                        } = await Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(11082), o.e(37571), o.e(29151), o.e(51383), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(87971), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(56308), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(55067), o.e(83490), o.e(58360), o.e(33162), o.e(63793), o.e(18881), o.e(12690), o.e(62731), o.e(68583), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(35602), o.e(90735), o.e(12024), o.e(30532), o.e(69684), o.e(81603), o.e(49297), o.e(3723), o.e(91100), o.e(78288), o.e(68719), o.e(40716), o.e(4287), o.e(55755), o.e(19812), o.e(18378), o.e(95969), o.e(65594), o.e(38814), o.e(48328), o.e(91636), o.e(56703), o.e(63821), o.e(72933), o.e(5406), o.e(28372), o.e(29087), o.e(85129), o.e(7912), o.e(64476), o.e(48617), o.e(2832), o.e(77575), o.e(74063), o.e(14401), o.e(64748), o.e(37461), o.e(35635), o.e(86730)]).then(o.bind(o, 636561));
                        c && await i({
                            collectionContextStore: e,
                            collectionId: c.id,
                            environment: s,
                            intl: d,
                            isLite: y,
                            propertyId: n,
                            propertySchema: r,
                            workflowId: t
                        })
                    }, [e, c, s, d, n, r, y]),
                    A = (0, o(906659).CK)({
                        schema: r,
                        isLite: y
                    });
                return (m || f) && g && A && c && !b ? (0, a.jsx)(o(729827).n, {
                    collectionContextStore: e,
                    collectionSettingsStore: t,
                    property: n,
                    propertySchema: r,
                    workflowsForProperty: x,
                    spaceId: u,
                    mainMenuParent: l,
                    onClickConfigure: v,
                    variant: "collectionLevelConfigurationMenu"
                }) : null
            }

            function eT({
                property: e,
                collectionContextStore: t
            }) {
                let n = (0, o(533992).v3)(),
                    r = (0, o(109939).tz)(),
                    l = (0, o(682985).K8)(() => t.collectionStore(), [t]),
                    s = (0, o(682985).K8)(() => (0, o(799514).Kc)(t), [t]),
                    d = (0, o(682985).K8)(() => !!((null == l ? void 0 : l.getDatabaseType()) && (null == l ? void 0 : l.isTypedProperty(e))), [l, e]),
                    c = s[e],
                    u = (0, o(126940).s)({
                        propertySchema: c,
                        schema: s,
                        parentStore: l
                    }),
                    p = (0, i.useCallback)(i => {
                        let r = t.collectionStore();
                        if (!r) return;
                        let a = r.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "CollectionSettingsProperty.handleRollupPropertyMenuChange",
                            environment: n,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: t => {
                                (0, o(957395).F)({
                                    environment: n,
                                    collectionStore: r,
                                    update: {
                                        [e]: i.propertySchema
                                    },
                                    transaction: t
                                })
                            }
                        })
                    }, [t, n, e]);
                return l ? (0, a.jsxs)(a.Fragment, {
                    children: [u ? (0, a.jsx)(o(844565).A, {
                        extraPadding: !0,
                        children: (0, a.jsx)(o(141342).l, {
                            display: "inline-compact",
                            tint: "yellow",
                            staticIcon: o(653905).exclamationMarkTriangleIcon,
                            label: r.formatMessage(o(977441).A.rollupConfigurationWarningDescription)
                        })
                    }) : void 0, (0, a.jsx)(o(344831).RollupPropertyMenu, {
                        disabled: d,
                        context: "viewSettings",
                        property: e,
                        schema: s,
                        analyticsFrom: "view_settings",
                        parentStore: l,
                        onChange: p
                    })]
                }) : null
            }

            function ek({
                property: e,
                propertySchema: t,
                collectionContextStore: i,
                source: n,
                buttonPopupParent: r,
                hideDatabaseAgentConfiguration: l
            }) {
                let s = i.settingsStore,
                    d = (0, o(83208).X)("file_property_limit"),
                    c = "button" === t.type,
                    u = (0, o(682985).K8)(() => (0, o(906659).Ky)(t), [t]);
                return c ? null : (0, a.jsxs)(a.Fragment, {
                    children: ["text" === t.type ? (0, a.jsx)(eM, {
                        collectionContextStore: i,
                        property: e,
                        collectionSettingsStore: s,
                        source: n
                    }) : void 0, "title" === t.type ? (0, a.jsx)(o(716929).j, {
                        collectionContextStore: i
                    }) : void 0, u && !l ? (0, a.jsx)(eC, {
                        collectionContextStore: i,
                        collectionSettingsStore: s,
                        property: e,
                        propertySchema: t,
                        buttonPopupParent: r
                    }) : void 0, (0, o(532792).l)(t) ? (0, a.jsx)(ew, {
                        collectionSettingsStore: s,
                        collectionContextStore: i,
                        property: e,
                        propertySchema: t,
                        buttonPopupParent: r
                    }) : void 0, "status" === t.type ? (0, a.jsx)(ed, {
                        collectionSettingsStore: s,
                        collectionContextStore: i,
                        property: e
                    }) : void 0, "formula" === t.type ? (0, a.jsx)(ec, {
                        collectionContextStore: i,
                        collectionSettingsStore: s,
                        property: e
                    }) : void 0, "rollup" === t.type ? (0, a.jsx)(eT, {
                        property: e,
                        collectionContextStore: i
                    }) : void 0, "date" === t.type || "created_time" === t.type || "last_edited_time" === t.type ? (0, a.jsx)(eu, {
                        collectionContextStore: i,
                        property: e
                    }) : void 0, "relation" === t.type ? (0, a.jsx)(ep, {
                        collectionContextStore: i,
                        property: e
                    }) : void 0, "file" === t.type && d ? (0, a.jsx)(eh, {
                        collectionContextStore: i,
                        property: e
                    }) : void 0, "person" === t.type ? (0, a.jsx)(ev, {
                        collectionContextStore: i,
                        property: e
                    }) : void 0, (0, a.jsx)(eg, {
                        collectionContextStore: i,
                        property: e,
                        source: n
                    }), (0, a.jsx)(em, {
                        collectionContextStore: i,
                        property: e
                    }), "auto_increment_id" === t.type ? (0, a.jsx)(eb, {
                        collectionContextStore: i,
                        property: e
                    }) : void 0]
                })
            }
        },
        401989: (e, t, o) => {
            o.d(t, {
                Cn: () => a,
                Vr: () => l,
                eX: () => c,
                s3: () => s,
                wv: () => d
            }), o(296540);
            var i = o(474848);
            let n = (0, o(109939).YK)({
                gettingStarted: {
                    defaultMessage: "Getting started…",
                    id: "agentSnackbarHelpers.gettingStarted"
                },
                startedFillingNRows: {
                    defaultMessage: "Started filling {n, plural, one {# row} other {# rows}}",
                    id: "agentSnackbarHelpers.startedFillingNRows"
                },
                startedFillingAllRows: {
                    defaultMessage: "Started filling all rows in this view",
                    id: "agentSnackbarHelpers.startedFillingAllRows"
                }
            });

            function r({
                intl: e
            }) {
                return (0, i.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    children: [(0, i.jsx)(o(517334).k, {
                        size: "xxs",
                        onDarkBackground: !0
                    }), (0, i.jsx)("span", {
                        children: e.formatMessage(n.gettingStarted)
                    })]
                })
            }

            function a(e) {
                o(436555).D6({
                    label: (0, i.jsx)(r, {
                        intl: e
                    }),
                    durationMs: "keep"
                })
            }

            function l(e, t) {
                o(436555).D6({
                    label: e.formatMessage(n.startedFillingNRows, {
                        n: t
                    })
                })
            }

            function s(e) {
                o(436555).D6({
                    label: e.formatMessage(n.startedFillingAllRows)
                })
            }

            function d(e) {
                return {
                    onEnqueueStart: () => {
                        a(e)
                    },
                    onEnqueueComplete: t => {
                        l(e, t)
                    }
                }
            }

            function c(e) {
                return {
                    onEnqueueStart: () => {
                        a(e)
                    },
                    onEnqueueComplete: () => {
                        s(e)
                    }
                }
            }
        },
        405426: (e, t, o) => {
            o.d(t, {
                t: () => i
            });
            async function i(e) {
                let {
                    environment: t,
                    collectionId: i,
                    propertyNames: n,
                    inferenceContext: r,
                    aiChatFeatureController: a,
                    temporaryAiThreadManager: l,
                    intl: s,
                    openChat: d = !0
                } = e, c = (0, o(503507).CN)("generate_select_options"), u = (0, o(599412).H)(s), p = (0, o(247438).x9d)(s.formatMessage(c.message)), g = await (0, o(143147).XA)({
                    agentChatIntegrations: [],
                    aiChatFeatureController: a,
                    args: {
                        prompt: p,
                        config: (0, o(922900).getWorkflowAgentConfig)({
                            environment: t,
                            databaseAgentConfigMode: !0
                        }),
                        prebuiltPrompt: {
                            type: "generate_select_options",
                            displayText: p,
                            locale: u,
                            args: {
                                type: "generate_select_options",
                                propertyNames: n,
                                collectionId: i
                            }
                        }
                    },
                    clientStore: o(57168).defaultClientAIChatStore,
                    environment: t,
                    inferenceContext: r,
                    mainEditorCurrentBlockStore: o(728372).AppStoreMainEditorCurrentBlockStore.state,
                    peekViewBlockStore: void 0,
                    threadStore: void 0,
                    temporaryAiThreadManager: l,
                    sendPartialTranscript: !1,
                    sendPatchResponse: !1,
                    inputSurfaceOverride: "database_agent"
                });
                if (g.didChangeThread && g.threadStore) return l.reset(), d && (0, o(358667).openChatPanel)({
                    environment: t,
                    store: o(728372).AppStoreMainEditorCurrentBlockStore.state,
                    chatPanelState: {
                        isOpen: !0,
                        threadId: g.threadStore.id
                    },
                    source: "programmatic"
                }), g.threadStore
            }
        },
        412084: (e, t, o) => {
            o.d(t, {
                $: () => n
            });
            var i = o(296540);

            function n(e) {
                let {
                    iconButton: t,
                    onDelete: n
                } = e, r = (0, o(533992).v3)(), a = (0, o(109939).tz)();
                return (0, i.useCallback)(e => {
                    if (!t || !(e.target instanceof Element)) return;
                    let {
                        onSubmit: i,
                        enforceIconColor: l
                    } = t;
                    o(874443).W(r, {
                        originRect: e.target.getBoundingClientRect(),
                        originGap: 3,
                        popupHeight: o(703188).GF,
                        popupWidth: o(703188).jv,
                        showArrow: !0,
                        title: a.formatMessage({
                            defaultMessage: "Icon",
                            id: "mediaPicker.tabs.icon"
                        }),
                        currentTab: "icon",
                        tabs: [{
                            type: "icon",
                            enforceIconColor: l,
                            onChange: (e, t) => {
                                i(e), t && t.keepVisible || o(874443).I()
                            }
                        }],
                        onDelete: () => {
                            null == n || n(), i(), o(874443).I()
                        }
                    })
                }, [r, t, a, n])
            }
        },
        455764: (e, t, o) => {
            o.d(t, {
                T: () => i
            }), o(16280), o(581454);

            function i(e) {
                let {
                    environment: t,
                    clientStore: i,
                    userStore: n,
                    spaceStore: r,
                    threadStore: a,
                    addSteps: l,
                    waitForServerCommit: s,
                    sendPartialTranscript: d,
                    sendPatchResponse: c,
                    analyticsArgs: u
                } = e, p = a, {
                    serverCommitResult: g
                } = (0, o(377796).createAndCommit)({
                    userAction: "WorkflowActions.addStepsToExistingThreadAndRun",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: r.id
                    },
                    perform: e => {
                        p = function(e) {
                            let {
                                threadStore: t,
                                environment: i,
                                spaceStore: n,
                                userStore: r,
                                transaction: a
                            } = e;
                            return t.isDefined() ? t : (o(773352).log({
                                level: "info",
                                from: "workflowActions",
                                type: "ensureThreadStoreIsMaterialized",
                                data: {
                                    threadId: t.id,
                                    spaceId: n.id,
                                    miscDataToConvertToString: {
                                        threadType: t.getType()
                                    }
                                },
                                error: {
                                    stack: Error("ThreadStore not defined before append").stack
                                }
                            }), (0, o(757688).aP)({
                                environment: i,
                                spaceStore: n,
                                userStore: r,
                                transaction: a,
                                threadId: t.id,
                                threadType: t.getType()
                            }))
                        }({
                            threadStore: p,
                            environment: t,
                            spaceStore: r,
                            userStore: n,
                            transaction: e
                        }), (0, o(757688).Vn)({
                            threadStore: p,
                            environment: t,
                            spaceStore: r,
                            userStore: n,
                            addSteps: l,
                            transaction: e
                        })
                    }
                });
                return (0, o(757688).WE)({
                    environment: t,
                    clientStore: i,
                    threadStore: p,
                    waitBeforeSending: s ? g : void 0,
                    stepIdsToInclude: d ? l.map(e => e.id) : void 0,
                    sendPatchResponse: c,
                    analyticsArgs: u
                }), p
            }
        },
        466013: (e, t, o) => {
            o.d(t, {
                c: () => r
            }), o(898992), o(354520), o(672577), o(737550);
            var i = o(296540),
                n = o(474848);

            function r(e) {
                let {
                    collectionStore: t,
                    disabled: r = !1,
                    minHeight: a,
                    onHandlePeek: l,
                    showFocus: s = !1,
                    workflowStore: d
                } = e, [c, u] = (0, i.useState)(!1), p = (0, o(533992).v3)(), g = (0, o(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        minHeight: a ? ? 56,
                        cursor: "text",
                        background: o(632079).Tj.background.secondary,
                        borderRadius: 6,
                        boxShadow: c && s ? `0 0 0 2px ${o(632079).Tj.blue.border.accentPrimary}` : o(632079).Tj.shadow.outline.sm,
                        boxSizing: "border-box",
                        padding: 2,
                        position: "relative"
                    }
                }), [a, c, s]), m = (0, o(682985).K8)(() => ({
                    table: o(832375).VlP,
                    id: t.id,
                    spaceId: t.getSpaceId()
                }), [t]), f = (0, i.useMemo)(() => m ? [{
                    id: (0, o(297493).QF)(`collection_${m.id}`),
                    kind: o(416901).FormulaContextValueKind.ContextValue,
                    name: "Current page",
                    type: {
                        type: "block",
                        collection: m
                    }
                }] : [], [m]), y = (0, i.useMemo)(() => (0, o(755439).Yz)({
                    page: !1,
                    createPage: !0,
                    collection: !0,
                    user: !0,
                    inviteUserToWorkspace: !0,
                    inviteUserToPage: !0,
                    date: !1,
                    reminder: !0,
                    bot: !0,
                    heading: !0,
                    group: !0,
                    team: !0,
                    templateVariable: !0,
                    slackSpecialMention: !0,
                    formulaContextVariable: !0,
                    property: !1
                }), []), h = (0, i.useRef)(null), b = (0, o(682985).uB)(void 0, o(128363).K), S = (0, o(682985).K8)(() => b.hasError("instructions"), [b]), x = (0, i.useMemo)(() => ({
                    collectionStore: t,
                    disabledMentionTypes: y,
                    formulaValueTypes: f,
                    mentionSectionOrdering: ["property"]
                }), [t, f, y]), {
                    autoGrantOperations: v
                } = (0, o(115688).B)({
                    workflowStore: d
                }), A = (0, i.useRef)();
                return (0, i.useEffect)(() => {
                    var e, t;
                    if (o(381453).n4(v, A.current) || 1 !== v.length) return;
                    let [i] = v;
                    if (!i || "keyedObjectListUpdate" !== i.command || !i.args || !i.args.value) return;
                    let n = i.args.value,
                        r = n.permissions ? ? [],
                        a = (null == (e = d.getDraftDataStore()) || null == (e = e.getKeyStore("modules")) ? void 0 : e.getValue()) ? ? (null == (t = d.getDataStore()) || null == (t = t.getKeyStore("modules")) ? void 0 : t.getValue()),
                        l = null == a ? void 0 : a.find(e => e.id === n.id);
                    if (!l) return;
                    let s = l.permissions ? ? [],
                        c = r.filter(e => !s.some(t => o(381453).n4(e.identifier, t.identifier)));
                    if (0 === c.length) return;
                    let u = Object.assign({}, n, {
                            permissions: [...s, ...c]
                        }),
                        g = (0, o(861988).xb)({
                            pointer: d.pointer,
                            module: u
                        });
                    A.current = v, (0, o(377796).createAndCommit)({
                        userAction: "DatabaseAgentTextInput.autoGrantPermissions",
                        environment: p,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: d.pointer.spaceId
                        },
                        perform: e => {
                            (0, o(421439).y4)({
                                store: d,
                                operation: g,
                                transaction: e
                            })
                        }
                    })
                }, [v, d, p]), (0, n.jsxs)(o(4458).VP, {
                    gap: "inherit",
                    children: [(0, n.jsx)("div", {
                        style: g.container,
                        role: "textbox",
                        ref: h,
                        onFocusCapture: () => u(!0),
                        onBlurCapture: e => {
                            let t = e.relatedTarget;
                            t && e.currentTarget.contains(t) || u(!1)
                        },
                        children: (0, n.jsx)(o(684412).S, {
                            value: x,
                            children: (0, n.jsx)(o(416065).G, {
                                disableCollapsing: !0,
                                disabled: r,
                                isCompact: !0,
                                minHeight: a ? ? 56,
                                onHandlePeek: l,
                                workflowStore: d,
                                workflowValidationErrorStore: b
                            })
                        })
                    }), S ? (0, n.jsx)(o(111010).D, {
                        colorPalette: "red",
                        colorVariant: "accentPrimary",
                        styleKey: "captionRegular",
                        children: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "This field is required",
                            id: "databaseAgentTextInput.requiredErrorLabel"
                        })
                    }) : void 0]
                })
            }
        },
        470474: (e, t, o) => {
            o.d(t, {
                V: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    threadStore: i,
                    stepId: n,
                    showResults: r,
                    traceId: a,
                    from: l
                } = e, s = i.getStepStoreById(n);
                if (!s || "search" !== s.getKeyValue("type")) return;
                let d = (0, o(187353).L2)(i);
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_search_step_toggle_results",
                        eventProperties: {
                            search_session_id: d && "search" === d.type ? d.searchSessionId : void 0,
                            thread_id: i.id,
                            show_results: r,
                            trace_id: a,
                            from: l,
                            workflow_id: (0, o(646440).getWorkflowIdFromStore)(i)
                        }
                    }
                });
                let c = i.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "AIChatTranscript.SearchStep.toggleVisibleResults",
                    environment: t,
                    cellTarget: c ? {
                        spaceWithId: c
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(173157).z)({
                            store: s,
                            data: {
                                showResults: r
                            },
                            transaction: e
                        })
                    }
                })
            }
        },
        474623: (e, t, o) => {
            o.d(t, {
                b: () => n
            }), o(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.95 12.11 12.11",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M8 14.05a6.05 6.05 0 1 1 0-12.1 6.05 6.05 0 0 1 0 12.1m-.837-3.765 3.067-1.79a.574.574 0 0 0 0-.99l-3.067-1.79a.574.574 0 0 0-.863.496v3.578c0 .443.48.719.863.496"
                    })
                },
                n = (0, o(104509).wt)("arrowTriangleRightCircleFillSmall", i, "fillSmall")
        },
        494588: (e, t, o) => {
            o.d(t, {
                b: () => l,
                p: () => a
            }), o(296540);
            var i = o(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 1.59 12.03 12.03",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "m14.2 2.781-.517.518-.977-.976.525-.524a.69.69 0 0 1 .97 0 .69.69 0 0 1 0 .97zM7.052 9.93l5.998-5.998-.977-.977L6.07 8.948a1 1 0 0 0-.208.347l-.254.82c-.046.173.116.335.277.277l.82-.254a.8.8 0 0 0 .347-.208"
                        }), (0, i.jsx)("path", {
                            d: "M3.625 5c0-.76.616-1.375 1.375-1.375h3a.625.625 0 1 0 0-1.25H5A2.625 2.625 0 0 0 2.375 5v6A2.625 2.625 0 0 0 5 13.625h6A2.625 2.625 0 0 0 13.625 11V8a.625.625 0 1 0-1.25 0v3c0 .76-.616 1.375-1.375 1.375H5c-.76 0-1.375-.616-1.375-1.375z"
                        })]
                    })
                },
                r = (0, o(104509).wt)("composeSmall", n, "small");

            function a() {
                return (0, i.jsx)(o(725843).A, {
                    href: "https://www.notion.com/help/salesforce",
                    title: (0, i.jsx)(o(109939).sA, {
                        defaultMessage: "Learn about Salesforce",
                        id: "database.viewSettings.propertyTab.salesforceRelation.learnMoreButton.title"
                    }),
                    analyticsFrom: "view_settings_property_salesforce_relation"
                })
            }

            function l() {
                return (0, i.jsx)(o(68774).N, {
                    href: "https://www.notion.so/notion/21fefdeead0580808823c9d0dede7495",
                    onClick: () => {},
                    external: !0,
                    children: (0, i.jsx)(o(209572).A, {
                        icon: r,
                        title: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Provide feedback",
                            id: "database.viewSettings.propertyTab.salesforceRelation.feedbackButton.title"
                        }),
                        isGray: !0
                    })
                })
            }
        },
        510303: (e, t, o) => {
            o.d(t, {
                H: () => a,
                b: () => l
            });
            var i = o(296540),
                n = o(474848);
            let r = (0, o(109939).YK)({
                basicTitle: {
                    defaultMessage: "Basic",
                    id: "database.agentAutofill.basic"
                },
                basicCaption: {
                    defaultMessage: "Included in your plan. Uses a fast model to fill properties based on info in the current row.",
                    id: "database.agentAutofill.basicCaption"
                },
                agentTitle: {
                    defaultMessage: "Custom Agent",
                    id: "database.agentAutofill.agentTitle"
                },
                agentNew: {
                    defaultMessage: "New",
                    id: "database.agentAutofill.agentNew"
                },
                agentCaption: {
                    defaultMessage: "Uses advanced models and reasoning to search the web and your connected workspace.",
                    id: "database.agentAutofill.agentCaption"
                },
                notAvailableForThisPropertyType: {
                    defaultMessage: "Not available for this property type",
                    id: "database.agentAutofill.notAvailableForThisPropertyType"
                }
            });

            function a({
                propertySchema: e,
                canCreateLiteDatabaseAgents: t,
                onSelectMode: i,
                isDisabled: r = !1,
                extraSections: s = []
            }) {
                let d = l({
                    propertySchema: e,
                    canCreateLiteDatabaseAgents: t,
                    onSelectMode: i,
                    isDisabled: r,
                    extraSections: s
                });
                return (0, n.jsx)(o(747369).A, {
                    menuType: o(649476).gu.Popup,
                    minWidth: 240,
                    children: (0, n.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        initialFocus: 0,
                        sections: d
                    })
                })
            }

            function l({
                propertySchema: e,
                canCreateLiteDatabaseAgents: t,
                onSelectMode: a,
                isDisabled: s = !1,
                extraSections: d = []
            }) {
                let c = (0, o(109939).tz)(),
                    {
                        canCreateBigDatabaseAgents: u,
                        hasDatabaseAgentsUpsell: p
                    } = (0, o(482270).Y)(),
                    g = u || p,
                    m = (0, o(906659).CK)({
                        schema: e,
                        isLite: !0
                    }),
                    f = (0, o(906659).CK)({
                        schema: e,
                        isLite: !1
                    });
                return (0, i.useMemo)(() => [{
                    key: "mode-options",
                    render: e => (0, n.jsx)(o(844565).A, { ...e
                    }),
                    items: [...t ? [{
                        key: "basic",
                        action: () => a(!0),
                        render: e => (0, n.jsx)(o(95582).A, { ...e,
                            title: c.formatMessage(r.basicTitle),
                            caption: (0, n.jsx)(o(109939).sA, { ...m ? r.basicCaption : r.notAvailableForThisPropertyType
                            }),
                            shouldWrapCaption: !0,
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(312528).x
                            }),
                            disabled: s || !m,
                            disabledFeedback: s || !m
                        })
                    }] : [], ...g ? [{
                        key: "agent",
                        action: () => a(!1),
                        render: e => (0, n.jsx)(o(95582).A, { ...e,
                            title: (0, n.jsxs)(o(4458).fI, {
                                gap: 8,
                                alignItems: "center",
                                children: [(0, n.jsx)(o(109939).sA, { ...r.agentTitle
                                }), (0, n.jsx)(o(746434).E, {
                                    color: "blue",
                                    content: (0, n.jsx)(o(109939).sA, { ...r.agentNew
                                    })
                                })]
                            }),
                            caption: (0, n.jsx)(o(109939).sA, { ...f ? r.agentCaption : r.notAvailableForThisPropertyType
                            }),
                            shouldWrapCaption: !0,
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(273344).aiFaceIcon
                            }),
                            disabled: s || !f,
                            disabledFeedback: s || !f
                        })
                    }] : []]
                }, ...d], [t, g, a, s, m, f, d, c])
            }
        },
        519817: (e, t, o) => {
            o.d(t, {
                A: () => d
            });
            var i = o(296540);
            let n = RegExp(`^${o(858203).xs}$`),
                r = (0, o(109939).YK)({
                    prefixInvalidError: {
                        id: "collectionUniqueIdHelpers.prefixInvalidError",
                        defaultMessage: "The prefix must start with a letter, followed by one or more (up to 9) alphanumeric characters or hyphens."
                    }
                });
            var a = o(474848);
            let l = (0, o(109939).YK)({
                    autoIncrementIdPrefixPlaceholder: {
                        defaultMessage: "Prefix",
                        id: "database.viewSettings.propertyTab.autoIncrementIdPrefixPlaceholder"
                    },
                    duplicatePrefixNameError: {
                        defaultMessage: "{prefixName} isn’t available for use.",
                        id: "database.viewSettings.propertyTab.duplicatePrefixNameError"
                    }
                }),
                s = {
                    subtext: {
                        paddingInlineStart: 8
                    },
                    style0: {
                        display: "inline",
                        fontWeight: o(699422).Wy.medium
                    },
                    style1: {
                        gap: 18
                    },
                    style2: {
                        marginTop: 16,
                        marginInlineStart: 16
                    },
                    style3: {
                        width: "100%"
                    }
                };

            function d(e) {
                let t = (0, o(109939).tz)(),
                    {
                        uniqueIdProperty: d,
                        prefixValue: c,
                        collectionContextStore: p
                    } = e,
                    g = (0, o(533992).v3)(),
                    m = (0, o(682985).K8)(() => p.collectionStore(), [p]),
                    [f, y] = (0, i.useState)(c ? ? ""),
                    [h, b] = (0, i.useState)(!0),
                    [S, x] = (0, i.useState)(),
                    v = !(0, o(682985).O$)(o(205885).e),
                    A = (0, i.useCallback)(() => {
                        b(!0), x(void 0)
                    }, [b, x]),
                    j = (0, i.useCallback)(e => {
                        b(!0), x(t.formatMessage(l.duplicatePrefixNameError, {
                            prefixName: `"${e}"`
                        }))
                    }, [t]),
                    w = (0, i.useCallback)((e, t, i) => {
                        let n = i.collectionStore();
                        n && (b(!1), g.api.callApi({
                            eventName: "setRecordKey",
                            environment: g,
                            data: {
                                spaceId: n.getSpaceId(),
                                table: n.table,
                                key: e,
                                id: n.id
                            }
                        }).then(n => {
                            b(!0), 200 !== n.status ? j(e) : (0, o(8043).V)({
                                environment: g,
                                collectionStore: i.collectionStore(),
                                collectionViewStore: i.collectionViewStore(),
                                property: t,
                                from: "view_settings",
                                action: "unique_id_change_collection_key"
                            })
                        }).catch(() => j(e)))
                    }, [g, j]),
                    M = (0, i.useCallback)(async e => {
                        if (!m) return !1;
                        let t = await g.api.callApi({
                            eventName: "isRecordKeyAvailable",
                            environment: g,
                            data: {
                                spaceId: m.getSpaceId(),
                                table: m.table,
                                key: e.trim()
                            }
                        });
                        return "success" === t.type && t.data.isAvailable
                    }, [m, g]),
                    C = (0, o(84235).U)(e => {
                        M(e).then(t => {
                            t || j(e), b(!0)
                        }).catch(() => j(e))
                    }, 500),
                    [T] = (0, o(97668).Yb)(async () => {
                        if (m) return g.api.callApi({
                            eventName: "suggestRecordKey",
                            environment: g,
                            data: {
                                spaceId: m.getSpaceId(),
                                table: o(832375).VlP,
                                id: m.id,
                                shouldSetSuccessfullySuggestedRecord: !1
                            }
                        })
                    }, [m, g]);
                (0, i.useEffect)(() => {
                    var e;
                    !c && "resolved" === T.status && (null == (e = T.value) ? void 0 : e.type) === "success" && T.value.data && (x(void 0), y(T.value.data.key))
                }, [c, T]), (0, i.useEffect)(() => () => {
                    C.cancel()
                }, [C]);
                let k = (0, i.useCallback)(e => {
                        let o = e.target.value.toUpperCase();
                        (y(o), A(), o && o !== c) && (n.test(o) || x(t.formatMessage(r.prefixInvalidError)), b(!1), C(o))
                    }, [A, c, C, t]),
                    I = (0, i.useCallback)(() => {
                        C.flush()
                    }, [C]),
                    _ = (0, i.useCallback)(e => {
                        let t = null == m ? void 0 : m.getRecordKeyStore();
                        e !== c && !S && t && m && null != d && d.propertySchema ? w(e, null == d ? void 0 : d.property, p) : b(!0)
                    }, [m, c, S, d, w, p]),
                    P = (0, i.useCallback)(() => {
                        let e = p.collectionStore();
                        if (e) {
                            let t = e.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "CollectionSettingsAutoIncrementIdPropertyCreateNewIdProperty",
                                environment: g,
                                canUndo: !0,
                                cellTarget: t ? {
                                    spaceWithId: t
                                } : void 0,
                                perform: t => {
                                    w(f, (0, o(567879).createProperty)({
                                        environment: g,
                                        collectionStore: e,
                                        collectionViewArgs: void 0,
                                        propertyType: "auto_increment_id",
                                        transaction: t
                                    }), p)
                                }
                            })
                        }
                    }, [p, g, f, w]),
                    R = (0, i.useCallback)(e => {
                        if (!m) return;
                        let t = [{
                            label: (0, a.jsx)(o(109939).sA, {
                                id: "database.viewSettings.propertyTab.autoIncrementIdPrefixSubmit",
                                defaultMessage: "Update ID Prefix"
                            }),
                            color: "red",
                            onAccept: () => _(e)
                        }];
                        o(647095).ui({
                            message: (0, a.jsx)("span", {
                                children: (0, a.jsx)(o(109939).sA, {
                                    id: "database.viewSettings.propertyTab.changePrefixConfirmationMessage",
                                    defaultMessage: "Updating the prefix will stop 3rd party automations that rely on this ID (e.g., GitHub PR status automation).",
                                    values: {
                                        databaseName: (0, a.jsx)(o(627918).A, {
                                            style: s.style0,
                                            shouldWrap: !0,
                                            store: m
                                        })
                                    }
                                })
                            }),
                            showCancel: !0,
                            keepFocus: !0,
                            items: t
                        })
                    }, [m, _]),
                    B = (0, i.useCallback)(e => {
                        c ? R(e) : _(e)
                    }, [c, _, R]),
                    D = (0, i.useCallback)(() => d ? d && !c ? (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Add ID prefix",
                        id: "database.viewSettings.propertyTab.autoIncrementIdCreatePrefix"
                    }) : (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Update ID Prefix",
                        id: "database.viewSettings.propertyTab.autoIncrementIdPrefixSubmit"
                    }) : (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Add ID property",
                        id: "database.viewSettings.propertyTab.autoIncrementIdCreateProperty"
                    }), [c, d]),
                    O = (0, o(960253).I)(() => ({
                        prefixInputOuterStyle: {
                            color: void 0 === c ? o(632079).Tj.text.tertiary : o(632079).Tj.text.primary
                        }
                    }), [c]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [v ? void 0 : (0, a.jsx)(o(310324).Ay, {
                        left: (0, a.jsx)(o(324489).V, {
                            children: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Prefix",
                                id: "database.viewSettings.propertyTab.autoIncrementIdPrefix"
                            })
                        }),
                        value: f,
                        inputOuterStyle: O.prefixInputOuterStyle,
                        style: s.style1,
                        onChange: k,
                        onBlur: I,
                        placeholder: l.autoIncrementIdPrefixPlaceholder.defaultMessage,
                        onSubmit: () => B(f.trim()),
                        focusInitial: !1,
                        selectAll: !1,
                        disabled: !1
                    }), (0, a.jsx)("div", {
                        style: s.subtext,
                        children: S || !h ? (0, a.jsx)(u, {
                            prefixName: f,
                            hasRequestCompleted: h,
                            errorMessage: S
                        }) : v ? (0, a.jsx)(o(324489).V, {
                            isSmall: !0,
                            isSecondaryColor: !0,
                            style: s.style2,
                            children: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "Prefix is not available offline.",
                                id: "database.viewSettings.propertyTab.autoIncrementIdPrefixOffline"
                            })
                        }) : (0, a.jsx)(o(324489).V, {
                            isSmall: !0,
                            isSecondaryColor: !0,
                            children: (0, a.jsx)(o(109939).sA, {
                                defaultMessage: "{prefixWithHyphen}1, {prefixWithHyphen}2, {prefixWithHyphen}3, …",
                                id: "database.viewSettings.propertyTab.autoIncrementIdPrefixPreview",
                                values: {
                                    prefixWithHyphen: f ? `${f}-` : ""
                                }
                            })
                        })
                    }), (0, a.jsx)(o(4458).fI, {
                        justifyContent: "center",
                        marginTop: 8,
                        padding: 8,
                        children: (0, a.jsx)(o(912946).A, {
                            colorPalette: "blue",
                            size: "md",
                            iconLeading: d && (!d || c) ? void 0 : o(581923).plusIcon,
                            style: s.style3,
                            onClick: () => {
                                d ? B(f.trim()) : P()
                            },
                            disabled: f === c || !!S || !h || v,
                            children: D()
                        })
                    })]
                })
            }
            let c = {
                style0: {
                    paddingTop: 3,
                    paddingBottom: 3
                },
                style1: {
                    color: o(632079).oZ.red
                }
            };

            function u(e) {
                let {
                    errorMessage: t,
                    hasRequestCompleted: i
                } = e;
                return (0, a.jsx)(o(324489).V, {
                    isMultiline: !0,
                    style: { ...i ? c.style1 : {}
                    },
                    isSecondaryColor: !i,
                    children: i && t ? t : (0, a.jsx)("div", {
                        style: c.style0,
                        children: (0, a.jsx)(o(517334).k, {
                            size: 14
                        })
                    })
                })
            }
        },
        540328: (e, t, o) => {
            o.d(t, {
                KY: () => r,
                dr: () => a,
                xX: () => l
            });
            var i = () => o(558208);
            let n = new Map;

            function r(e) {
                n.set(e.id, e)
            }

            function a(e) {
                if (e) return n.get(e)
            }

            function l(e) {
                var t, r, a;
                let {
                    threadStore: l,
                    environment: s,
                    spaceStore: d,
                    userStore: c
                } = e;
                if (!l || !(0, i().Ci)(l)) return l;
                let u = s.defaultRecordCache.inMemoryRecordCache;
                for (let e of u.cacheOverrides.slice()) e.name === i().Ll && u.removeCacheOverride(e);
                let p = l.getTranscript(),
                    g = l.getParentId(),
                    m = l.getParentTable(),
                    f = null == (t = l.getData()) ? void 0 : t.workflow_id,
                    y = l.getType(),
                    h = null == (r = l.getData()) ? void 0 : r.title,
                    b = l.getSpaceId() ? ? d.id,
                    {
                        performResult: S
                    } = (0, o(377796).createAndCommit)({
                        userAction: "databaseAgent.persistTemporaryThread",
                        environment: s,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: b
                        },
                        perform: e => {
                            let t = (0, o(757688).aP)({
                                environment: s,
                                spaceStore: d,
                                userStore: c,
                                transcript: p,
                                transaction: e,
                                threadId: l.id,
                                workflowId: f,
                                threadType: y
                            });
                            return g && m && (0, o(173157).z)({
                                store: t,
                                transaction: e,
                                data: {
                                    parent_id: g,
                                    parent_table: m,
                                    space_id: b
                                }
                            }), h && (0, o(173157).z)({
                                store: t.getDataStore(),
                                transaction: e,
                                data: {
                                    title: h
                                }
                            }), t
                        }
                    });
                return a = l.id, n.delete(a), S ? ? o(174148).E.createChildStore(d, {
                    id: l.id,
                    spaceId: b,
                    table: o(832375).Toz
                })
            }
        },
        545504: (e, t, o) => {
            o.d(t, {
                w: () => i
            });

            function i({
                url: e,
                config: t
            }) {
                let n = (0, o(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === n.name) return n.blockId
            }
        },
        565240: (e, t, o) => {
            o.d(t, {
                g: () => i
            });

            function i(e) {
                let {
                    collectionContextStore: t,
                    propertyId: i,
                    propertySchema: n,
                    handlePropertyTypeChange: r
                } = e, a = t.collectionStore();
                if (a)
                    if (n && (0, o(944209).dR)({
                            propertyId: i,
                            propertyType: n.type,
                            permissionItems: a.getPermissionItems()
                        })) {
                        let e = [{
                            label: o(962299).A.formatMessage(o(944209).DZ.changePropertyTypeWarningButtonLabel),
                            color: "red",
                            onAccept: r
                        }];
                        o(647095).ui({
                            showCancel: !0,
                            keepFocus: !1,
                            message: o(962299).A.formatMessage(o(944209).DZ.changePropertyTypeWarningMessage),
                            description: o(962299).A.formatMessage(o(944209).DZ.changePropertyTypeWarningDescription),
                            mode: "wide",
                            items: e
                        })
                    } else r()
            }
        },
        596117: (e, t, o) => {
            o.d(t, {
                B: () => a
            });
            var i = o(296540),
                n = o(474848);
            let r = (0, o(109939).YK)({
                    changeIcon: {
                        id: "collectionSettingsNameInput.iconButton.ariaLabel",
                        defaultMessage: "Change icon"
                    }
                }),
                a = i.forwardRef(function(e, t) {
                    let {
                        placeholder: a,
                        focusInitial: l,
                        selectAll: s,
                        disabled: d,
                        inputOuterStyle: c,
                        iconButton: u,
                        inputRightButton: p,
                        initialValue: g,
                        onBlur: m,
                        onSubmit: f,
                        onChange: y,
                        maxLength: h,
                        textWrapperStyle: b,
                        textarea: S
                    } = e, x = (0, o(109939).tz)(), [v, A] = (0, i.useState)(() => g || ""), j = (0, i.useCallback)(() => {
                        m(v)
                    }, [v, m]), w = (0, i.useCallback)(() => {
                        f(v)
                    }, [v, f]), M = (0, i.useCallback)(e => {
                        let t = e.target.value;
                        A(t), null == y || y(t)
                    }, [y]), C = (0, o(412084).$)({
                        iconButton: u
                    }), T = (0, o(396805).O)();
                    (0, i.useEffect)(() => () => {
                        T.current && g !== v && m(v)
                    }, [g, v, T, m]);
                    let k = (0, o(960253).I)(() => ({
                        iconButton: {
                            opacity: d ? .4 : void 0
                        },
                        textWrapper: {
                            opacity: d ? .4 : void 0,
                            ...b
                        }
                    }), [d, b]);
                    return (0, n.jsx)(o(310324).Ay, {
                        ref: t,
                        focusInitial: l,
                        autoFocus: !!l || void 0,
                        selectAll: s,
                        value: v,
                        onChange: M,
                        onBlur: j,
                        onSubmit: w,
                        placeholder: a,
                        disabled: d,
                        textWrapperStyle: k.textWrapper,
                        maxlength: h,
                        inputOuterStyle: c,
                        left: u ? (0, n.jsx)(o(310324).KF, {
                            icon: u.icon,
                            iconStyle: u.iconStyle,
                            onClick: C,
                            disabled: d,
                            style: k.iconButton,
                            hasBackground: u.hasSolidBackground,
                            ariaLabel: x.formatMessage(r.changeIcon)
                        }) : null,
                        showClearButton: !1,
                        inputRight: p,
                        textarea: S
                    })
                })
        },
        614107: (e, t, o) => {
            o.d(t, {
                A: () => r
            }), o(296540);
            var i = o(474848);
            let n = {
                linkBox: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                chevronTitle: {
                    display: "inline",
                    wordBreak: "break-word",
                    ...o(699422).RC
                },
                style0: {
                    flexShrink: 1
                },
                style1: {
                    flexShrink: 0
                }
            };

            function r(e) {
                let {
                    isSelfRelation: t,
                    collectionStore: r,
                    showAs: a,
                    disabled: l,
                    onClick: s
                } = e, d = !!r, c = (0, o(682985).K8)(() => null == r ? void 0 : r.getIcon(), [r]), u = (0, o(682985).K8)(() => {
                    if (t) return;
                    let e = null == r ? void 0 : r.getParentBlockStore();
                    return e && (0, o(483227).Ay)({
                        store: e,
                        pageVisitSource: o(254656).y8.LinkInPage
                    })
                }, [r, t]), p = (0, o(533992).Y0)(), g = (0, o(960253).I)(() => ({
                    linkTitle: {
                        color: o(632079).Tj.text.primary,
                        fontWeight: o(699422).Wy.semibold,
                        fontSize: 14,
                        marginInlineStart: 4 * (p.isRetina ? .5 : 1),
                        wordBreak: "break-word",
                        ...o(699422).RC
                    }
                }), [p]), m = (0, o(682985).K8)(() => o(272755).g.state.isOpen && "layout-editor" === o(272755).g.state.mode, []), f = (0, i.jsx)(o(569553).B6, {
                    icon: c,
                    iconRecordCategory: "collection",
                    isEmptyPage: !1,
                    size: 20,
                    disabled: !0
                }), y = (0, i.jsx)(o(209572).A, {
                    icon: o(402524).P,
                    title: (0, i.jsx)(o(109939).sA, {
                        defaultMessage: "Related to",
                        id: "database.viewSettings.editRelation.targetLink.title"
                    }),
                    showChevron: "chevron" === a,
                    onClick: s,
                    disabled: l,
                    right: t ? (0, i.jsx)(o(109939).sA, {
                        defaultMessage: "This database",
                        id: "database.viewSettings.editRelation.selfRelationTarget.title"
                    }) : "link" === a && u ? (0, i.jsxs)(o(590422).Q, {
                        external: m,
                        href: u,
                        style: n.linkBox,
                        children: [f, (0, i.jsx)(o(627918).A, {
                            store: r,
                            underline: !0,
                            style: g.linkTitle,
                            maxLength: 15
                        })]
                    }) : d ? (0, i.jsxs)(i.Fragment, {
                        children: [f, (0, i.jsx)(o(627918).A, {
                            store: r,
                            style: n.chevronTitle
                        })]
                    }) : (0, i.jsx)(o(109939).sA, {
                        defaultMessage: "No target",
                        id: "database.viewSettings.editRelation.noTarget.title"
                    }),
                    rightStyle: n.style0,
                    textWrapperStyle: n.style1
                });
                return l ? (0, i.jsx)(o(51831).m, {
                    disableTooltip: !1,
                    placement: "top",
                    content: () => (0, i.jsx)(o(109939).sA, {
                        defaultMessage: "The related database cannot be changed after creation",
                        id: "database.viewSettings.editRelation.disabledTooltip"
                    }),
                    children: e => (0, i.jsx)("div", { ...e,
                        children: y
                    })
                }) : y
            }
        },
        648143: (e, t, o) => {
            o.d(t, {
                J: () => i
            });

            function i({
                collectionContextStore: e,
                property: t
            }) {
                return (0, o(799514).Kc)(e)[t]
            }
        },
        716929: (e, t, o) => {
            o.d(t, {
                j: () => n
            });
            let i = new(o(815048)).O2("CollectionSettingsTitlePropertyOptions", async () => o.e(37697).then(o.bind(o, 926853))),
                n = (0, o(815048)._h)(i, e => e.CollectionSettingsTitlePropertyOptions)
        },
        729827: (e, t, o) => {
            o.d(t, {
                n: () => x
            });
            var i = o(296540),
                n = () => o(4458),
                r = () => o(16275),
                a = () => o(95582),
                l = () => o(885515);
            o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(581454), o(737550);
            var s = o(474848);
            let d = (0, o(109939).YK)({
                    back: {
                        defaultMessage: "Back",
                        id: "databaseAgentsManagementMenu.back"
                    },
                    agentName: {
                        defaultMessage: "Agent name",
                        id: "databaseAgentsManagementMenu.agent.name"
                    }
                }),
                c = {
                    captionContainer: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        overflow: "hidden"
                    },
                    propertyNames: {
                        color: o(632079).Tj.text.secondary,
                        fontSize: 12
                    },
                    descriptionText: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    defaultBadge: {
                        fontSize: 11,
                        padding: "2px 6px",
                        borderRadius: 4,
                        background: o(632079).Tj.background.secondary,
                        color: o(632079).Tj.text.secondary,
                        fontWeight: o(699422).Wy.regular
                    }
                };

            function u({
                isForCurrentProperty: e,
                associatedPropertyNames: t,
                agentDescription: i,
                isDefault: n
            }) {
                let r = !e && t.length > 0,
                    a = !!i;
                return (0, s.jsxs)("div", {
                    style: c.captionContainer,
                    children: [r ? (0, s.jsx)("div", {
                        children: (0, s.jsx)("span", {
                            style: c.propertyNames,
                            children: t.join(", ")
                        })
                    }) : void 0, a ? (0, s.jsx)("div", {
                        style: c.descriptionText,
                        title: i,
                        children: i
                    }) : void 0, n ? (0, s.jsx)("div", {
                        children: (0, s.jsx)("span", {
                            style: c.defaultBadge,
                            children: (0, s.jsx)(o(109939).sA, {
                                defaultMessage: "Default",
                                id: "database.databaseAgentsManagementMenu.defaultBadge"
                            })
                        })
                    }) : void 0]
                })
            }
            let p = {
                    marginInlineEnd: 8,
                    marginInlineStart: -2,
                    height: 22
                },
                g = {
                    width: 16,
                    height: 16
                },
                m = {
                    paddingTop: 14,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 16,
                    paddingBottom: 14,
                    width: "100%"
                };

            function f(e) {
                let {
                    collectionContextStore: t,
                    collectionSettingsStore: c,
                    collectionStore: f,
                    mainMenuParent: y,
                    onMouseEnter: h,
                    onWorkflowClick: b,
                    parent: S,
                    property: x,
                    propertySchema: v,
                    spaceId: A
                } = e, j = (0, o(109939).tz)(), w = (0, o(533992).v3)(), M = (0, o(345776).T)(), {
                    canCreateBigDatabaseAgents: C,
                    canCreateLiteDatabaseAgents: T
                } = (0, o(482270).Y)(), k = !C, {
                    getWorkflowsForProperty: I
                } = (0, o(300873).i)(f, A), _ = (0, o(682985).K8)(() => I(x).filter(e => (0, o(691143).m)(e) ? T : C), [I, x, T, C]), [P, R] = (0, i.useState)(1 === _.length ? _[0].id : void 0), B = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.Modal,
                    title: j.formatMessage({
                        defaultMessage: "Agents for {propertyName}",
                        id: "database.databaseAgentsManagementMenu.title"
                    }, {
                        propertyName: v.name
                    })
                } : {
                    menuType: o(649476).gu.Popup,
                    width: 320
                }, D = (0, i.useCallback)(async () => {
                    let e = await o(528372).GK({
                        environment: w,
                        collectionStore: f,
                        intl: j,
                        isLite: k,
                        propertyId: x,
                        propertySchema: v,
                        workflows: _,
                        collectionContextStore: t
                    });
                    e && R(e)
                }, [w, f, j, x, v, k, _, t, R]), O = (0, o(682985).K8)(() => {
                    let e = [],
                        t = [],
                        i = [];
                    for (let e of _) e.getCreatedById() === M ? t.push(e) : i.push(e);
                    let d = e => {
                            S.close(), b(e)
                        },
                        c = e => e.map(e => (function(e, t, i) {
                            let {
                                workflowStore: r,
                                agentName: d,
                                agentIcon: c,
                                agentDescription: p,
                                isDefault: g,
                                isLite: m,
                                isForCurrentProperty: f,
                                associatedPropertyNames: y
                            } = e, h = !f && y.length > 0, b = !!p, S = h || b || g, x = o(218744).default.checkGate({
                                gateName: "database_agent_rebrand"
                            });
                            return {
                                key: `workflow-${r.id}`,
                                action: () => {
                                    i(r.id)
                                },
                                render: e => (0, s.jsx)(a().A, { ...e,
                                    title: x ? (0, s.jsxs)(n().fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        children: [(0, s.jsx)("span", {
                                            children: d
                                        }), (0, s.jsx)(l().F, {
                                            isLite: m
                                        })]
                                    }) : d,
                                    caption: S ? (0, s.jsx)(u, {
                                        isForCurrentProperty: f,
                                        associatedPropertyNames: y,
                                        agentDescription: p,
                                        isDefault: g
                                    }) : void 0,
                                    icon: (0, s.jsx)(o(686015).D, {
                                        agentIcon: c,
                                        workflowStore: r,
                                        size: 20
                                    }),
                                    showExtensionArrow: !1,
                                    onClick: e => {
                                        e.stopPropagation(), i(r.id)
                                    }
                                })
                            }
                        })(function(e, t, i, n, r) {
                            var a, l;
                            let s = e.getDraftData() ? ? e.getData(),
                                d = (0, o(307365).DO)(e.id, i),
                                c = (0, o(575422).m)(e, r),
                                u = c.name || r.formatMessage({
                                    defaultMessage: "Unnamed agent",
                                    id: "database.databaseAgentsManagementMenu.unnamedAgent"
                                }),
                                p = c.icon,
                                g = null == s ? void 0 : s.description,
                                m = (null == s || null == (a = s.modules) ? void 0 : a.some(e => {
                                    var o;
                                    return "notion" === e.type && (null == (o = e.state) || null == (o = o.ownedByDatabasePropertyIds) ? void 0 : o.includes(t))
                                })) ? ? !1,
                                f = new Set((0, o(772966).d_)(e)),
                                y = n.getSchema(),
                                h = [];
                            for (let e of f) {
                                let t = null == (l = y[e]) ? void 0 : l.name;
                                t && h.push(t)
                            }
                            return {
                                workflowStore: e,
                                agentName: u,
                                agentIcon: p,
                                agentDescription: g,
                                isDefault: d,
                                isLite: c.isLite,
                                isForCurrentProperty: m,
                                associatedPropertyNames: h
                            }
                        }(e, x, v, f, j), o(986939).A.isMobile, d));
                    return t.length > 0 && e.push({
                        key: "my-agents",
                        render: e => (0, s.jsx)(o(844565).A, { ...e,
                            title: (0, s.jsx)(o(109939).sA, {
                                defaultMessage: "Created by me",
                                id: "database.databaseAgentsManagementMenu.createdByMe"
                            })
                        }),
                        items: c(t)
                    }), i.length > 0 && e.push({
                        key: "other-agents",
                        render: e => (0, s.jsx)(o(844565).A, { ...e,
                            title: (0, s.jsx)(o(109939).sA, {
                                defaultMessage: "Agents in this database",
                                id: "database.databaseAgentsManagementMenu.agentsInDatabase"
                            }),
                            topBorder: t.length > 0
                        }),
                        items: c(i)
                    }), e.push({
                        key: "new-agent",
                        render: e => (0, s.jsx)(o(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [{
                            key: "new-agent-item",
                            action: D,
                            render: e => (0, s.jsx)(a().A, { ...e,
                                title: (0, s.jsx)(o(109939).sA, {
                                    defaultMessage: "New agent",
                                    id: "database.databaseAgentsManagementMenu.newAgent"
                                }),
                                icon: (0, s.jsx)(r().I, {
                                    icon: o(581923).plusIcon
                                }),
                                onClick: D
                            })
                        }]
                    }), e
                }, [f, M, D, j, y, b, S, x, v, _]), V = (0, o(682985).K8)(() => {
                    if (!A || !f || !P) return;
                    let e = f.getParentCollectionViewBlockStore();
                    return e ? o(360851).N.createChildStore(e, {
                        table: o(832375).C0E,
                        id: P,
                        spaceId: A
                    }) : null
                }, [f, P, A]), F = (0, i.useCallback)(() => {
                    _.length > 1 ? R(void 0) : S.close()
                }, [S, _, R]), K = (0, i.useCallback)(() => {
                    y && y.close()
                }, [y]), W = (0, o(682985).K8)(() => {
                    if (!V) return;
                    let e = V.getDraftData();
                    if (e) return e.name;
                    let t = V.getData();
                    return t ? t.name : ""
                }, [V]), N = (0, i.useCallback)(e => {
                    V && o(528372).wm({
                        workflowStore: V,
                        environment: w,
                        spaceId: A,
                        newName: e.target.value
                    })
                }, [V, w, A]), {
                    deleteButton: z
                } = (0, o(157921).L)({
                    collectionSettingsStore: c,
                    collectionStore: f,
                    spaceId: A,
                    workflowStore: V
                }), E = V ? (0, s.jsx)(n().fI, {
                    alignItems: "center",
                    gap: 4,
                    children: z
                }) : null;
                return (0, s.jsx)(o(747369).A, { ...B,
                    onMouseEnter: h,
                    children: P && V ? (0, s.jsx)("div", {
                        onClick: e => e.stopPropagation(),
                        role: "presentation",
                        children: (0, s.jsxs)(n().VP, {
                            gap: "inherit",
                            children: [(0, s.jsxs)("div", {
                                style: m,
                                children: [_.length > 1 ? (0, s.jsxs)(n().fI, {
                                    gap: "inherit",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0, s.jsx)(o(374533).A, {
                                        icon: o(128743).arrowStraightLeftIcon,
                                        style: p,
                                        iconStyle: g,
                                        onClick: F,
                                        ariaLabel: j.formatMessage(d.back)
                                    }), E]
                                }) : null, (0, s.jsxs)(n().VP, {
                                    gap: 8,
                                    children: [(0, s.jsxs)(n().fI, {
                                        gap: "inherit",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        children: [(0, s.jsx)(o(111010).D, {
                                            styleKey: "captionMedium",
                                            color: "gray",
                                            colorVariant: "secondary",
                                            children: (0, s.jsx)(o(109939).sA, { ...d.agentName
                                            })
                                        }), 1 === _.length ? E : null]
                                    }), (0, s.jsx)(o(36481).p, {
                                        value: W,
                                        onChange: N
                                    })]
                                })]
                            }), (0, s.jsx)(o(844139).e, {
                                collectionContextStore: t,
                                collectionStore: f,
                                handleCloseParent: K,
                                numWorkflowsForProperty: _.length,
                                property: x,
                                propertySchema: v,
                                spaceId: A,
                                workflowId: P
                            })]
                        })
                    }) : (0, s.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        initialFocus: 0,
                        sections: O
                    })
                })
            }

            function y(e) {
                let {
                    onFocus: t,
                    onSelectLanguage: n,
                    icon: l,
                    displayName: d,
                    ...c
                } = e, u = (0, o(109939).tz)(), p = (0, i.useMemo)(() => o(6634).U5.map(({
                    key: e,
                    name: t
                }) => ({
                    key: e,
                    action: () => {
                        n(e)
                    },
                    render: e => (0, s.jsx)(a().A, { ...e,
                        title: u.formatMessage(t)
                    })
                })), [n, u]), g = (0, i.useCallback)(e => {
                    let t = o(986939).A.isMobile ? {
                        menuType: o(649476).gu.ActionSheet,
                        ...e
                    } : {
                        menuType: o(649476).gu.Popup,
                        width: 200,
                        height: 380,
                        ...e
                    };
                    return (0, s.jsx)(o(747369).A, { ...t,
                        children: (0, s.jsx)(o(558045).A, {
                            type: o(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "languages",
                                render: e => (0, s.jsx)(o(844565).A, { ...e
                                }),
                                items: p
                            }]
                        })
                    })
                }, [p]);
                return (0, s.jsx)(o(816231).A, { ...c,
                    onFocus: t,
                    renderExtension: g,
                    children: (e, t) => (0, s.jsx)(a().A, { ...e,
                        ref: t,
                        title: d,
                        icon: (0, s.jsx)(r().I, {
                            icon: l
                        }),
                        showExtensionArrow: !0
                    })
                })
            }
            let h = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                b = {
                    marginInlineStart: 6
                },
                S = (0, o(109939).YK)({
                    autofillWithAgent: {
                        defaultMessage: "Autofill with AI",
                        id: "database.tableHeaderCell.autofillWithAgent"
                    },
                    setupDatabaseAgent: {
                        defaultMessage: "Set up database agent",
                        id: "database.tableHeaderCell.setupDatabaseAgent"
                    },
                    createAgent: {
                        defaultMessage: "Create agent",
                        id: "database.tableHeaderCell.createAgent"
                    },
                    createAutofill: {
                        defaultMessage: "Create autofill",
                        id: "database.tableHeaderCell.createAutofill"
                    },
                    aiAutofillLabel: {
                        defaultMessage: "AI Autofill",
                        id: "database.tableHeaderCell.aiAutofillLabel"
                    },
                    nowWithAgents: {
                        defaultMessage: "Now with agents",
                        id: "database.tableHeaderCell.nowWithAgents"
                    },
                    askAISetup: {
                        defaultMessage: "Ask AI to set up",
                        id: "database.agentAutofill.askAISetup"
                    }
                }),
                x = (0, i.forwardRef)(function(e, t) {
                    let {
                        collectionContextStore: d,
                        collectionSettingsStore: c,
                        property: u,
                        propertySchema: p,
                        workflowsForProperty: g,
                        spaceId: m,
                        mainMenuParent: x,
                        onClickConfigure: v,
                        variant: A,
                        onFocus: j,
                        focused: w,
                        ...M
                    } = e, C = !(0, o(682985).O$)(o(205885).e), T = (0, o(533992).v3)(), k = (0, o(109939).tz)(), I = (0, o(972740).L)(), _ = (0, o(83208).X)("database_agent_rebrand"), {
                        canCreateLiteDatabaseAgents: P,
                        canCreateBigDatabaseAgents: R,
                        databaseAgentsAvailability: B
                    } = (0, o(482270).Y)(), D = (0, o(758360).K7)("agent"), O = (0, o(660402).W)({
                        omitCurrentPage: !1
                    }), V = (0, o(558208).AD)(), F = (0, o(682985).K8)(() => d.collectionStore(), [d]), K = g.length > 0, W = g.length > 1, N = 1 === g.length, z = g[0], E = (0, o(682985).K8)(() => {
                        if (N) return (0, o(575422).m)(z, k)
                    }, [N, z, k]), U = !K, L = (0, i.useCallback)(e => {
                        null == x || x.close(), "collectionLevelConfigurationMenu" === A && (0, o(72762).o)({
                            collectionSettingsStore: c
                        }), v(e)
                    }, [c, x, v, A]), Y = (0, i.useCallback)(() => {
                        m && (0, o(599231).Op)({
                            spaceId: m,
                            setupMethod: "manual"
                        }), L(void 0)
                    }, [L, m]), q = (0, i.useCallback)(() => {
                        if (m && (0, o(599231).Op)({
                                spaceId: m,
                                setupMethod: "ai"
                            }), null == x || x.close(), "collectionLevelConfigurationMenu" === A && (0, o(72762).o)({
                                collectionSettingsStore: c
                            }), !O || !F) return;
                        let e = (0, o(503507).CN)("create_database_agent"),
                            t = (0, o(599412).H)(k),
                            i = (0, o(247438).x9d)(k.formatMessage(e.message)),
                            n = (0, o(922900).getWorkflowAgentConfig)({
                                environment: T,
                                databaseAgentConfigMode: !0
                            });
                        (async () => {
                            let e = await (0, o(143147).XA)({
                                agentChatIntegrations: [],
                                aiChatFeatureController: D,
                                args: {
                                    prompt: i,
                                    config: n,
                                    prebuiltPrompt: {
                                        type: "create_database_agent",
                                        displayText: i,
                                        locale: t,
                                        args: {
                                            type: "create_database_agent",
                                            propertyNames: [p.name],
                                            collectionId: F.id,
                                            enableScriptAgent: !0 === n.enableScriptAgent
                                        }
                                    }
                                },
                                clientStore: o(57168).defaultClientAIChatStore,
                                environment: T,
                                inferenceContext: O,
                                mainEditorCurrentBlockStore: o(728372).AppStoreMainEditorCurrentBlockStore.state,
                                peekViewBlockStore: void 0,
                                threadStore: void 0,
                                temporaryAiThreadManager: V,
                                sendPartialTranscript: !1,
                                sendPatchResponse: !1,
                                inputSurfaceOverride: "database_agent"
                            });
                            e.didChangeThread && e.threadStore && (V.reset(), (0, o(358667).openChatPanel)({
                                environment: T,
                                store: o(728372).AppStoreMainEditorCurrentBlockStore.state,
                                chatPanelState: {
                                    isOpen: !0,
                                    threadId: e.threadStore.id
                                },
                                source: "programmatic"
                            }))
                        })()
                    }, [x, A, c, O, F, k, D, T, V, p.name, m]), H = (0, i.useCallback)(({
                        isLite: e
                    }) => {
                        m && (0, o(599231).Op)({
                            spaceId: m,
                            setupMethod: "manual"
                        }), null == x || x.close(), "collectionLevelConfigurationMenu" === A && (0, o(72762).o)({
                            collectionSettingsStore: c
                        }), F && (async () => {
                            let {
                                triggerDatabaseAgentModal: t
                            } = await Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(11082), o.e(37571), o.e(29151), o.e(51383), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(87971), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(56308), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(55067), o.e(83490), o.e(58360), o.e(33162), o.e(63793), o.e(18881), o.e(12690), o.e(62731), o.e(68583), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(35602), o.e(90735), o.e(12024), o.e(30532), o.e(69684), o.e(81603), o.e(49297), o.e(3723), o.e(91100), o.e(78288), o.e(68719), o.e(40716), o.e(4287), o.e(55755), o.e(19812), o.e(18378), o.e(95969), o.e(65594), o.e(38814), o.e(48328), o.e(91636), o.e(56703), o.e(63821), o.e(72933), o.e(5406), o.e(28372), o.e(29087), o.e(85129), o.e(7912), o.e(64476), o.e(48617), o.e(2832), o.e(77575), o.e(74063), o.e(14401), o.e(64748), o.e(37461), o.e(35635), o.e(86730)]).then(o.bind(o, 636561));
                            await t({
                                collectionContextStore: d,
                                collectionId: F.id,
                                environment: T,
                                intl: k,
                                isLite: e,
                                propertyId: u,
                                propertySchema: p
                            })
                        })()
                    }, [x, A, c, F, d, T, k, u, p, m]), G = (0, i.useCallback)(() => {
                        H({
                            isLite: !0
                        })
                    }, [H]), $ = (0, i.useCallback)(async () => {
                        let e = (0, o(94418).Xq)(B);
                        e && "none" !== e.type ? await (0, o(907063).K)(T, {
                            from: "database_agent_setup_menu_item",
                            upsell: e,
                            spaceStore: I
                        }) : H({
                            isLite: !1
                        })
                    }, [B, T, I, H]), J = (0, i.useCallback)(() => {
                        z && m && (0, o(599231).tH)({
                            workflowId: z.id,
                            spaceId: m,
                            origin: "property_header"
                        }), L(null == z ? void 0 : z.id)
                    }, [z, L, m]), X = "tableHeader" === A && void 0 === F || C, Z = R ? S.setupDatabaseAgent : S.autofillWithAgent, Q = "tableHeader" === A && U, ee = (0, i.useCallback)(() => {
                        null == x || x.close(), "collectionLevelConfigurationMenu" === A && (0, o(72762).o)({
                            collectionSettingsStore: c
                        })
                    }, [x, A, c]), et = function({
                        spaceId: e,
                        collectionContextStore: t,
                        collectionId: d,
                        canCreateBigDatabaseAgents: c,
                        propertyId: u,
                        propertySchema: p,
                        onClose: g,
                        isLiteOverride: m
                    }) {
                        let f = (0, o(109939).tz)(),
                            h = (0, o(533992).v3)(),
                            b = m ? ? !c,
                            S = "text" === p.type,
                            x = (0, i.useCallback)(e => {
                                null == g || g(), void 0 !== d && (async () => {
                                    let {
                                        triggerDatabaseAgentModal: i
                                    } = await Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(16471), o.e(37353), o.e(62475), o.e(3151), o.e(18965), o.e(98629), o.e(11082), o.e(37571), o.e(29151), o.e(51383), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(39726), o.e(31243), o.e(42534), o.e(86662), o.e(14886), o.e(39225), o.e(87971), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(29663), o.e(28482), o.e(76361), o.e(14369), o.e(74145), o.e(56308), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(55067), o.e(83490), o.e(58360), o.e(33162), o.e(63793), o.e(18881), o.e(12690), o.e(62731), o.e(68583), o.e(41049), o.e(60262), o.e(72805), o.e(18416), o.e(35602), o.e(90735), o.e(12024), o.e(30532), o.e(69684), o.e(81603), o.e(49297), o.e(3723), o.e(91100), o.e(78288), o.e(68719), o.e(40716), o.e(4287), o.e(55755), o.e(19812), o.e(18378), o.e(95969), o.e(65594), o.e(38814), o.e(48328), o.e(91636), o.e(56703), o.e(63821), o.e(72933), o.e(5406), o.e(28372), o.e(29087), o.e(85129), o.e(7912), o.e(64476), o.e(48617), o.e(2832), o.e(77575), o.e(74063), o.e(14401), o.e(64748), o.e(37461), o.e(35635), o.e(86730)]).then(o.bind(o, 636561));
                                    await i({
                                        collectionContextStore: t,
                                        collectionId: d,
                                        environment: h,
                                        intl: f,
                                        isLite: m ? ? !c,
                                        propertyId: u,
                                        propertySchema: p,
                                        presetInstructions: e
                                    })
                                })()
                            }, [c, t, d, h, f, m, g, u, p]),
                            v = (0, i.useCallback)((t, i) => {
                                e && (0, o(599231).Op)({
                                    spaceId: e,
                                    setupMethod: "translate_database_property" === t ? "translate" : "summarize"
                                });
                                let n = (0, o(96447).yj)({
                                        skillType: t,
                                        parameterValues: i ? ? {},
                                        selection: void 0,
                                        namespace: "chat"
                                    }),
                                    r = "string" == typeof n ? n : void 0;
                                r && x(r)
                            }, [x, e]);
                        return (0, i.useMemo)(() => {
                            if (!S) return [];
                            let e = [];
                            for (let [t, i] of (0, o(722371).WP)(o(142534).iS))
                                if ("databaseAgent" === i.category) {
                                    if ("translate_database_property" === t) {
                                        e.push({
                                            key: t,
                                            action: () => {},
                                            render: (e, {
                                                onFocus: o
                                            }) => (0, s.jsx)(y, { ...e,
                                                onFocus: o,
                                                onSelectLanguage: e => {
                                                    v(t, {
                                                        language: e
                                                    })
                                                },
                                                icon: i.icon,
                                                displayName: (0, s.jsxs)(n().fI, {
                                                    gap: 8,
                                                    alignItems: "center",
                                                    children: [(0, s.jsx)("span", {
                                                        children: f.formatMessage(i.displayName)
                                                    }), (0, s.jsx)(l().F, {
                                                        isLite: b
                                                    })]
                                                })
                                            })
                                        });
                                        continue
                                    }
                                    e.push({
                                        key: t,
                                        action: () => {
                                            v(t)
                                        },
                                        render: e => (0, s.jsx)(a().A, { ...e,
                                            title: (0, s.jsxs)(n().fI, {
                                                gap: 8,
                                                alignItems: "center",
                                                children: [(0, s.jsx)("span", {
                                                    children: f.formatMessage(i.displayName)
                                                }), (0, s.jsx)(l().F, {
                                                    isLite: b
                                                })]
                                            }),
                                            icon: (0, s.jsx)(r().I, {
                                                icon: i.icon
                                            })
                                        })
                                    })
                                }
                            return e
                        }, [S, v, f, b])
                    }({
                        spaceId: m,
                        collectionContextStore: d,
                        collectionId: null == F ? void 0 : F.id,
                        canCreateBigDatabaseAgents: R,
                        propertyId: u,
                        propertySchema: p,
                        onClose: ee
                    }), eo = (0, i.useCallback)(e => {
                        e ? G() : $()
                    }, [G, $]), ei = (0, i.useMemo)(() => R && (0, o(906659).CK)({
                        schema: p,
                        isLite: !1
                    }) ? [{
                        key: "ask-ai-setup",
                        render: e => (0, s.jsx)(o(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [{
                            key: "setup-with-ai",
                            action: q,
                            render: e => (0, s.jsx)(a().A, { ...e,
                                title: (0, s.jsx)(o(109939).sA, { ...S.askAISetup
                                }),
                                icon: (0, s.jsx)(r().I, {
                                    icon: o(799891).y
                                })
                            })
                        }]
                    }] : [], [R, p, q]), en = (0, o(510303).b)({
                        propertySchema: p,
                        canCreateLiteDatabaseAgents: P,
                        onSelectMode: eo,
                        isDisabled: X,
                        extraSections: [...ei]
                    }), er = (0, i.useMemo)(() => [{
                        key: "setup-options",
                        render: e => (0, s.jsx)(o(844565).A, { ...e
                        }),
                        items: [{
                            key: "setup-manually",
                            action: Y,
                            render: e => (0, s.jsx)(a().A, { ...e,
                                title: (0, s.jsx)(o(109939).sA, {
                                    defaultMessage: "Set up manually",
                                    id: "database.agentAutofill.setupManually"
                                }),
                                icon: (0, s.jsx)(r().I, {
                                    icon: o(829968).gearIcon
                                })
                            })
                        }, ...R ? [{
                            key: "setup-with-ai",
                            action: q,
                            render: e => (0, s.jsx)(a().A, { ...e,
                                title: (0, s.jsx)(o(109939).sA, {
                                    defaultMessage: "Set up with AI",
                                    id: "database.agentAutofill.setupWithAI"
                                }),
                                icon: (0, s.jsx)(r().I, {
                                    icon: o(273344).aiFaceIcon
                                })
                            })
                        }] : [], ...et]
                    }], [et, Y, q, R]), ea = _ ? en : er, el = (0, i.useMemo)(() => o(986939).A.isMobile ? {
                        menuType: o(649476).gu.Modal
                    } : {
                        menuType: o(649476).gu.Popup,
                        width: 200
                    }, []), es = (0, i.useCallback)((e, t) => U ? (0, s.jsx)(o(747369).A, { ...el,
                        ...e,
                        minWidth: _ ? 240 : void 0,
                        children: (0, s.jsx)(o(558045).A, {
                            type: o(558045).O.Vertical,
                            initialFocus: 0,
                            sections: ea
                        })
                    }) : W && F && m ? (0, s.jsx)(f, {
                        collectionContextStore: d,
                        collectionSettingsStore: c,
                        collectionStore: F,
                        mainMenuParent: x,
                        onWorkflowClick: L,
                        parent: t,
                        property: u,
                        propertySchema: p,
                        spaceId: m,
                        ...e
                    }) : null, [d, c, F, L, W, _, x, el, u, p, ea, U, m]), ed = "tableHeader" === A && U || W, ec = K && !W || "collectionLevelConfigurationMenu" === A && U, eu = (0, o(943019).e)(), ep = "collectionLevelConfigurationMenu" !== A && (w ? ? !1), eg = "collectionLevelConfigurationMenu" === A ? () => {} : j ? ? (() => {});
                    return (0, s.jsx)(o(816231).A, { ...M,
                        ref: t,
                        focused: ep,
                        onFocus: eg,
                        disabled: X,
                        disabledFeedback: X,
                        disableCloseOnEnter: !0,
                        alignmentToOrigin: "start",
                        renderExtension: es,
                        children: (e, t) => (0, s.jsx)(o(51831).m, {
                            placement: "left",
                            content: () => C ? (0, s.jsx)(o(109939).sA, { ...o(233319).AY.aiUnavailableOfflineTooltip
                            }) : null,
                            disableTooltip: !C,
                            children: i => {
                                let d = ec ? J : e.onClick;
                                return (0, s.jsx)(a().A, { ...(0, o(63390).A)(e, i),
                                    ref: "collectionLevelConfigurationMenu" === A ? eu.itemRef : t,
                                    disabled: X,
                                    disabledFeedback: X,
                                    title: E ? _ ? (0, s.jsxs)(n().fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        children: [(0, s.jsx)("span", {
                                            style: h,
                                            children: E.name
                                        }), (0, s.jsx)(l().F, {
                                            isLite: E.isLite
                                        })]
                                    }) : (0, s.jsx)("span", {
                                        style: h,
                                        children: E.name
                                    }) : Q ? _ ? (0, s.jsxs)(n().fI, {
                                        gap: 4,
                                        alignItems: "center",
                                        children: [(0, s.jsx)(o(109939).sA, { ...S.aiAutofillLabel
                                        }), R ? (0, s.jsx)(o(746434).E, {
                                            style: b,
                                            color: "blue",
                                            content: (0, s.jsx)(o(109939).sA, { ...S.nowWithAgents
                                            })
                                        }) : void 0]
                                    }) : (0, s.jsxs)(n().fI, {
                                        gap: 4,
                                        alignItems: "center",
                                        children: [(0, s.jsx)(o(109939).sA, { ...R ? S.createAgent : S.createAutofill
                                        }), R ? (0, s.jsx)(o(18274).A, {}) : void 0]
                                    }) : _ ? (0, s.jsx)(o(109939).sA, { ...S.aiAutofillLabel
                                    }) : (0, s.jsx)(o(109939).sA, { ...Z
                                    }),
                                    icon: E ? (0, s.jsx)(o(686015).D, {
                                        agentIcon: E.icon,
                                        workflowStore: z,
                                        size: 18
                                    }) : _ ? (0, s.jsx)(r().I, {
                                        icon: o(312528).x
                                    }) : (0, s.jsx)(r().I, {
                                        icon: o(273344).aiFaceIcon
                                    }),
                                    showExtensionArrow: ed,
                                    ..."collectionLevelConfigurationMenu" === A && {
                                        onMouseEnter: void 0,
                                        onClick: d,
                                        onKeyDown: eu.onKeyDown,
                                        disallowTabbing: !eu.isTabbable
                                    },
                                    ..."tableHeader" === A && ec && {
                                        onClick: J
                                    }
                                })
                            }
                        })
                    })
                })
        },
        751690: (e, t, o) => {
            o.d(t, {
                u: () => l
            });
            var i = o(296540),
                n = o(474848);
            let r = (0, o(109939).YK)({
                    displayAsLabel: {
                        id: "database.viewSettings.statusOptions.displayAs",
                        defaultMessage: "Display as"
                    },
                    statusCheckboxLabel: {
                        id: "database.viewSettings.statusOptions.showAs.checkbox",
                        defaultMessage: "Checkbox"
                    },
                    statusSelectLabel: {
                        id: "database.viewSettings.statusOptions.showAs.selectOptionLabel",
                        defaultMessage: "Select"
                    }
                }),
                a = {
                    minWidth: 190
                },
                l = i.memo(function(e) {
                    let {
                        collectionContextStore: t,
                        property: l,
                        disabled: s
                    } = e, d = (0, o(533992).v3)(), c = (0, o(109939).tz)(), {
                        propertySchema: u,
                        showAs: p
                    } = (0, o(682985).K8)(() => {
                        var e;
                        let o = t.normalizedSchemaStore.state[l];
                        return {
                            propertySchema: o && "status" === o.type ? o : void 0,
                            showAs: (null == (e = t.getPropertyFormat(l)) ? void 0 : e.statusShowAs) ? ? "select"
                        }
                    }, [t, l]), g = (0, i.useCallback)(e => {
                        let i = t.formatStore();
                        if (!i) return;
                        let n = t.getPropertyFormatKey();
                        if (!n) return;
                        let r = t.collectionViewStore(),
                            a = null == r ? void 0 : r.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "CollectionSettingsStatusOptions.handleShowAsChange",
                            environment: d,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: t => {
                                (0, o(370333).a)({
                                    formatStore: i,
                                    formatKey: n,
                                    property: l,
                                    update: {
                                        statusShowAs: e,
                                        visible: !0
                                    },
                                    transaction: t
                                })
                            }
                        }), (0, o(8043).V)({
                            environment: d,
                            collectionStore: t.collectionStore(),
                            collectionViewStore: t.collectionViewStore(),
                            property: l,
                            from: "view_settings",
                            action: "status_change_format"
                        })
                    }, [t, d, l]), m = (0, i.useMemo)(() => [{
                        key: "checkbox",
                        type: "button",
                        title: c.formatMessage(r.statusCheckboxLabel),
                        icon: (0, n.jsx)(o(16275).I, {
                            icon: o(317315).i
                        })
                    }, {
                        key: "select",
                        type: "button",
                        title: c.formatMessage(r.statusSelectLabel),
                        icon: (0, n.jsx)(o(16275).I, {
                            icon: o(53496).b
                        })
                    }], [c]);
                    return u ? (0, n.jsx)(o(529983).A, {
                        icon: o(152208).eyeIcon,
                        title: c.formatMessage(r.displayAsLabel),
                        selectedKey: p,
                        popupStyle: a,
                        options: m,
                        onChange: g,
                        disabled: s
                    }) : null
                })
        },
        774940: (e, t, o) => {
            o.d(t, {
                A: () => x
            }), o(898992), o(672577);
            var i = o(296540);
            o(944114), o(354520), o(430670), o(803949), o(581454);
            let n = {
                    pull_request_review_comment_created: !0,
                    issue_comment_created: !0
                },
                r = {
                    installation_deleted: !0,
                    installation_suspend: !0,
                    installation_unsuspend: !0,
                    pull_request_review_edited: !0,
                    pull_request_review_submitted: !0,
                    pull_request_review_requested: !0,
                    pull_request_review_request_removed: !0,
                    pull_request_closed: !0,
                    pull_request_opened: !0,
                    pull_request_reopened: !0,
                    pull_request_converted_to_draft: !0,
                    pull_request_edited: !0,
                    pull_request_assigned: !0,
                    pull_request_labeled: !0,
                    pull_request_unlabeled: !0,
                    ...n
                },
                a = {
                    pull_request_opened: !0,
                    pull_request_review_requested: !0,
                    pull_request_review_submitted: !0,
                    pull_request_closed: !0
                };
            o(969475).literals(...(0, o(722371).objectKeys)({
                pull_request: !0,
                pull_request_review: !0,
                pull_request_review_comment: !0,
                installation: !0,
                issue_comment: !0
            })), o(969475).literals(...(0, o(722371).objectKeys)(r)), o(969475).literals(...(0, o(722371).objectKeys)(n));
            var l = o(474848);
            let s = (0, o(109939).YK)({
                    autoUpdate: {
                        defaultMessage: "Auto-update",
                        id: "collectionSettingsGithubAutomationConfig.statusPicker.autoUpdate"
                    },
                    when: {
                        defaultMessage: "when PR is",
                        id: "collectionSettingsGithubAutomationConfig.statusPicker.when"
                    },
                    addStatusDescription: {
                        defaultMessage: "Add a status property to set up automations.",
                        id: "collectionSettingsGithubAutomationConfig.addStatusDescription"
                    },
                    addStatusButton: {
                        defaultMessage: "Add status property",
                        id: "collectionSettingsGithubAutomationConfig.statusPicker.addStatusButton"
                    },
                    newStatusPropertyButton: {
                        defaultMessage: "New status",
                        id: "collectionSettingsGithubAutomationConfig.statusPicker.newStatusPropertyButton"
                    },
                    pull_request_opened: {
                        defaultMessage: "Opened",
                        id: "collectionSettingsGithubAutomationConfig.pullRequestOpened"
                    },
                    pull_request_review_requested: {
                        defaultMessage: "Review requested",
                        id: "collectionSettingsGithubAutomationConfig.pullRequestReviewRequested"
                    },
                    pull_request_review_submitted: {
                        defaultMessage: "Approved",
                        id: "collectionSettingsGithubAutomationConfig.pullRequestApproved"
                    },
                    pull_request_closed: {
                        defaultMessage: "Merged",
                        id: "collectionSettingsGithubAutomationConfig.pullRequestMerged"
                    },
                    noAutomations: {
                        defaultMessage: "None",
                        id: "collectionSettingsGithubAutomationConfig.noAutomation"
                    },
                    removeStatusOption: {
                        defaultMessage: "Clear",
                        id: "collectionSettingsGithubAutomationConfig.removeStatusOption"
                    },
                    linkbackAndActivitySectionHeader: {
                        defaultMessage: "Linkbacks & Activity",
                        id: "collectionSettingsGithubAutomationConfig.linkbacksAndActivityHeading"
                    },
                    linkBacksToggle: {
                        defaultMessage: "Linkbacks in GitHub",
                        id: "collectionSettingsGithubAutomationConfig.linkBacksToggle"
                    },
                    linkBacksToggleDescription: {
                        defaultMessage: "Enable linkback comments to the linked page on GitHub",
                        id: "collectionSettingsGithubAutomationConfig.linkBacksToggleDescription"
                    },
                    activityCommentsToggle: {
                        defaultMessage: "Activity Comments",
                        id: "collectionSettingsGithubAutomationConfig.activityCommentsToggle"
                    },
                    activityCommentsToggleDescription: {
                        defaultMessage: "Show GitHub activity as comments on the linked page",
                        id: "collectionSettingsGithubAutomationConfig.activityCommentsToggleDescription"
                    }
                }),
                d = {
                    pull_request_opened: o(962299).A.formatMessage(s.pull_request_opened),
                    pull_request_review_requested: o(962299).A.formatMessage(s.pull_request_review_requested),
                    pull_request_review_submitted: o(962299).A.formatMessage(s.pull_request_review_submitted),
                    pull_request_closed: o(962299).A.formatMessage(s.pull_request_closed)
                },
                c = o(962299).A.formatMessage(s.noAutomations),
                u = {
                    pull_request_opened: null,
                    pull_request_review_requested: null,
                    pull_request_review_submitted: null,
                    pull_request_closed: null
                },
                p = {
                    github_linkbacks: !0,
                    activity_comments: !1
                },
                g = {
                    style0: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        whiteSpace: "nowrap"
                    },
                    style2: {
                        margin: 0
                    },
                    addStatusDivider: {
                        borderColor: o(632079).Tj.border.primary
                    },
                    addStatusDescription: {
                        width: "calc(100% - 24px)",
                        padding: o(986939).A.isMobile ? "16px 8px" : "14px 0px",
                        fontSize: o(986939).A.isMobile ? 16 : 12,
                        color: o(632079).Tj.text.tertiary
                    },
                    addStatusButton: {
                        width: "calc(100% - 24px)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    noneText: {
                        color: o(632079).Tj.text.tertiary
                    },
                    statusPickerWrapper: {
                        display: "inline-flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        rowGap: 2,
                        marginBottom: o(986939).A.isMobile ? 10 : void 0
                    },
                    statusPickerButtonTextWrapper: {
                        margin: "0px 4px",
                        fontSize: 12
                    },
                    statusPickerButtonCore: {
                        minHeight: o(986939).A.isMobile ? 28 : 20,
                        borderRadius: 5,
                        maxWidth: o(986939).A.isMobile ? 150 : 100
                    },
                    statusPickerExtensionArrow: {
                        transform: "rotate(180deg)",
                        marginInlineEnd: 2
                    }
                };

            function m(e) {
                let {
                    gitHubProperty: t,
                    selectedStatusProperty: n,
                    setSelectedStatusProperty: r,
                    intl: m
                } = e, y = (0, o(533992).v3)(), b = (0, o(713311).ET)(), S = (0, o(682985).K8)(() => {
                    let e = (0, o(856235).Jq)(b, t);
                    if (e && (0, o(425985).U)(e)) return e
                }, [b, t]), x = (0, o(682985).K8)(() => {
                    let e = b.normalizedSchemaStore.state;
                    return (0, o(722371).WP)(e).flatMap(([e, t]) => t && (0, o(422672).D)(t) ? [{
                        id: e,
                        schema: t
                    }] : [])
                }, [b.normalizedSchemaStore]), v = (0, o(682985).K8)(() => S && (0, o(425985).U)(S) && (0, o(722371).O9)(S.connectedRelation.automationSettings) ? S.connectedRelation.automationSettings : p, [S]);
                (0, i.useEffect)(() => {
                    M(v)
                }, [v]), (0, i.useEffect)(() => {
                    if (!n && x.length > 0) {
                        if (null != S && S.connectedRelation.automation) {
                            for (let e of x)
                                if (S.connectedRelation.automation[e.id]) return void r(e)
                        }
                        r(x[0])
                    }
                }, [x, S, n, r]);
                let [A, j] = (0, i.useState)(u), [w, M] = (0, i.useState)(p), C = (0, i.useCallback)(e => {
                    let i = b.collectionStore();
                    if (!i || !S || !(0, o(795e3).n)(S)) return;
                    let n = { ...S,
                            connectedRelation: { ...S.connectedRelation,
                                automationSettings: e
                            }
                        },
                        r = i.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "CollectionSettingsConfigureGithubAutomation",
                        environment: y,
                        cellTarget: r ? {
                            spaceWithId: r
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, o(957395).F)({
                                environment: y,
                                collectionStore: i,
                                update: {
                                    [t]: n
                                },
                                transaction: e
                            })
                        }
                    }), M(e)
                }, [b, y, t, S]);
                (0, i.useEffect)(() => {
                    var e, t;
                    n && S && (0, o(425985).U)(S) && null != (e = S.connectedRelation.automation) && e[n.id] ? j(null == (t = S.connectedRelation.automation) ? void 0 : t[n.id]) : j(u)
                }, [S, n]);
                let T = (0, i.useCallback)(e => {
                        let i = b.collectionStore();
                        if (!i || !n || !S || !(0, o(795e3).n)(S) || !S.connectedRelation || !n.id) return;
                        let r = { ...S,
                            connectedRelation: { ...S.connectedRelation,
                                automation: { ...S.connectedRelation.automation,
                                    ...e
                                }
                            }
                        };
                        (0, o(8043).V)({
                            environment: y,
                            collectionStore: b.collectionStore(),
                            collectionViewStore: b.collectionViewStore(),
                            property: n.id,
                            from: "github_pull_requests_property",
                            action: "configure_github_pr_automation",
                            githubAutomationConfigured: e
                        });
                        let a = i.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "CollectionSettingsConfigureGithubAutomation",
                            environment: y,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, o(957395).F)({
                                    environment: y,
                                    collectionStore: i,
                                    update: {
                                        [t]: r
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }, [b, n, S, y, t]),
                    k = (0, i.useMemo)(() => n && n.schema.options ? n.schema.options : [], [n]),
                    I = (0, i.useMemo)(() => {
                        let e = {};
                        return k.forEach(t => {
                            e[t.id] = t
                        }), e
                    }, [k]),
                    _ = (0, o(682985).K8)(() => {
                        var e, t;
                        let i = null == n || null == (e = n.schema) ? void 0 : e.groups,
                            r = null == n || null == (t = n.schema) ? void 0 : t.options;
                        return i && r ? i.map(e => {
                            let t = r.filter(t => {
                                var o;
                                return null == (o = e.optionIds) ? void 0 : o.includes(t.id)
                            });
                            if (0 !== t.length) return {
                                group: e,
                                groupOptions: t
                            }
                        }).filter(o(722371).O9) : []
                    }, [n]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [n ? (0, l.jsx)(o(844565).A, {
                        topBorder: !1,
                        disableDesktopPadding: !0,
                        disableMobilePadding: !0,
                        title: (0, l.jsx)(h, {
                            selectedStatusProperty: n,
                            setSelectedStatusProperty: r,
                            existingStatusProperties: x,
                            intl: m
                        }),
                        children: (0, o(722371).objectKeys)(a).map(e => (0, l.jsx)(o(785267).A, {
                            focused: !1,
                            placementToOrigin: "top",
                            alignmentToOrigin: "end",
                            popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                            content: t => {
                                let i = o(986939).A.isMobile ? {
                                    menuType: o(649476).gu.Modal,
                                    right: (0, l.jsx)(o(109939).sA, { ...o(789722).W.done
                                    }),
                                    onClickRight: t.close
                                } : {
                                    menuType: o(649476).gu.Popup,
                                    width: 150
                                };
                                return (0, l.jsx)(o(747369).A, { ...i,
                                    children: (0, l.jsx)(o(558045).A, {
                                        type: o(558045).O.Vertical,
                                        sections: function(e, t) {
                                            let i = _.map(({
                                                group: t,
                                                groupOptions: i
                                            }) => {
                                                let r = i.map(i => ({
                                                    key: i.id,
                                                    render: e => (0, l.jsx)(o(95582).A, { ...e,
                                                        focused: e.focused,
                                                        isTokenTitle: !0,
                                                        title: (0, l.jsx)(o(593100).q, {
                                                            format: o(696654).NY.Small,
                                                            value: i.value,
                                                            color: i.color,
                                                            showRemoveButton: !1,
                                                            groupColor: t.color,
                                                            isSingle: !0
                                                        })
                                                    }),
                                                    action: () => {
                                                        let t = { ...A,
                                                            [e]: i.id
                                                        };
                                                        n && (T({
                                                            [n.id]: t
                                                        }), j(t))
                                                    }
                                                })).filter(o(722371).O9);
                                                return {
                                                    key: t.name,
                                                    render: e => (0, l.jsx)(o(844565).A, { ...e,
                                                        title: t.name,
                                                        topBorder: e.index > 0
                                                    }),
                                                    items: r
                                                }
                                            });
                                            if (A[e]) {
                                                function r() {
                                                    let o = { ...A,
                                                        [e]: null
                                                    };
                                                    n && (T({
                                                        [n.id]: o
                                                    }), j(o)), t.close()
                                                }
                                                i.push({
                                                    key: "removeOptionSection",
                                                    render: e => (0, l.jsx)(o(844565).A, { ...e,
                                                        topBorder: !0
                                                    }),
                                                    items: [{
                                                        key: "removeOptionButton",
                                                        render: e => (0, l.jsx)(o(95582).A, { ...e,
                                                            focused: !1,
                                                            title: m.formatMessage(s.removeStatusOption),
                                                            left: (0, l.jsx)(o(16275).I, {
                                                                icon: o(968411).trashIcon,
                                                                size: "xxs"
                                                            }),
                                                            onClick: r
                                                        }),
                                                        action: e => {
                                                            r()
                                                        }
                                                    }]
                                                })
                                            }
                                            return i
                                        }(e, t),
                                        initialFocus: void 0,
                                        onAccept: t.close
                                    })
                                })
                            },
                            children: t => {
                                let i = A[e],
                                    r = (0, l.jsx)("div", {
                                        style: g.noneText,
                                        children: c
                                    });
                                if (i) {
                                    let e = I[i];
                                    if (e) {
                                        var a;
                                        let t = null == n || null == (a = n.schema) || null == (a = a.groups) || null == (a = a.find(e => {
                                            var t;
                                            return null == (t = e.optionIds) ? void 0 : t.includes(i)
                                        })) ? void 0 : a.color;
                                        r = (0, l.jsx)(o(593100).q, {
                                            format: o(696654).NY.Small,
                                            showRemoveButton: !1,
                                            isSingle: !0,
                                            value: e.value,
                                            color: e.color,
                                            groupColor: t
                                        })
                                    }
                                }
                                return (0, l.jsx)(o(209572).A, { ...t,
                                    focused: !1,
                                    icon: () => (0, l.jsxs)("div", {
                                        style: g.style0,
                                        children: [d[e], (0, l.jsx)(o(884877).A, {
                                            size: 8
                                        }), (0, l.jsx)(o(16275).I, {
                                            icon: o(969278).arrowStraightRightSmallIcon,
                                            size: "xs",
                                            colorVariant: "tertiary"
                                        })]
                                    }),
                                    title: (0, l.jsx)(o(4458).fI, {
                                        width: "100%",
                                        justifyContent: "flex-end",
                                        inline: !0,
                                        children: r
                                    }),
                                    showChevron: !0,
                                    chevronStyle: g.style2
                                })
                            }
                        }, e))
                    }) : (0, l.jsx)(f, {
                        setSelectedStatusProperty: r,
                        intl: m
                    }), (0, l.jsx)(o(844565).A, {
                        topBorder: !0,
                        disableDesktopPadding: !0,
                        disableMobilePadding: !0,
                        title: m.formatMessage(s.linkbackAndActivitySectionHeader),
                        children: [(0, l.jsx)(o(51831).m, {
                            content: () => m.formatMessage(s.linkBacksToggleDescription),
                            children: e => (0, l.jsx)(o(76761).A, { ...e,
                                title: m.formatMessage(s.linkBacksToggle),
                                onClick: () => {
                                    C({ ...w,
                                        github_linkbacks: !w.github_linkbacks
                                    })
                                },
                                switcherProps: {
                                    on: w.github_linkbacks
                                }
                            })
                        }, "github_linkbacks"), (0, l.jsx)(o(51831).m, {
                            content: () => m.formatMessage(s.activityCommentsToggleDescription),
                            children: e => (0, l.jsx)(o(76761).A, { ...e,
                                title: m.formatMessage(s.activityCommentsToggle),
                                onClick: () => {
                                    C({ ...w,
                                        activity_comments: !w.activity_comments
                                    })
                                },
                                switcherProps: {
                                    on: w.activity_comments
                                }
                            })
                        }, "activity_comments")]
                    })]
                })
            }

            function f(e) {
                let {
                    setSelectedStatusProperty: t,
                    intl: i
                } = e, n = (0, o(533992).v3)(), r = (0, o(713311).ET)();
                return (0, l.jsxs)(o(4458).VP, {
                    alignItems: "center",
                    children: [(0, l.jsx)(o(346268).c, {
                        size: "100%",
                        innerStyle: g.addStatusDivider
                    }), (0, l.jsx)("div", {
                        style: g.addStatusDescription,
                        children: i.formatMessage(s.addStatusDescription)
                    }), (0, l.jsx)(o(912946).A, {
                        colorPalette: "blue",
                        iconLeading: o(581923).plusIcon,
                        style: g.addStatusButton,
                        onClick: e => {
                            e.stopPropagation(), b(n, r, t)
                        },
                        children: i.formatMessage(s.addStatusButton)
                    }), (0, l.jsx)(o(884877).A, {
                        size: 4
                    })]
                })
            }
            let y = {
                marginInlineStart: 2
            };

            function h(e) {
                let {
                    selectedStatusProperty: t,
                    setSelectedStatusProperty: i,
                    existingStatusProperties: n,
                    intl: r
                } = e, a = (0, o(533992).v3)(), d = (0, o(713311).ET)(), c = (0, o(960253).e)(), u = n.map(e => {
                    let {
                        id: t,
                        schema: n
                    } = e;
                    return {
                        key: t,
                        action: () => {
                            i(e)
                        },
                        render: t => (0, l.jsx)(o(95582).A, { ...t,
                            icon: (0, l.jsx)(o(221535).zB, {
                                size: 14,
                                theme: o(632079).Tj,
                                themeMode: c,
                                icon: e && e.schema.icon,
                                type: "status"
                            }),
                            title: n.name
                        })
                    }
                }).filter(o(722371).O9), p = {
                    key: "newStatusProperty",
                    action: () => {
                        b(a, d, i)
                    },
                    render: e => (0, l.jsx)(o(95582).A, { ...e,
                        icon: (0, l.jsx)(o(16275).I, {
                            icon: o(581923).plusIcon
                        }),
                        title: r.formatMessage(s.newStatusPropertyButton)
                    })
                };
                return (0, l.jsxs)("div", {
                    style: g.statusPickerWrapper,
                    children: [(0, l.jsxs)(o(4458).fI, {
                        alignItems: "center",
                        inline: !0,
                        children: [r.formatMessage(s.autoUpdate), o(986939).A.isMobile ? (0, l.jsx)(o(884877).A, {
                            size: 4
                        }) : void 0, (0, l.jsx)(o(656252).A, {
                            placementToOrigin: "bottom",
                            alignmentToOrigin: "start",
                            popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                            content: e => {
                                let t = o(986939).A.isMobile ? {
                                    menuType: o(649476).gu.ActionSheet
                                } : {
                                    menuType: o(649476).gu.Popup,
                                    width: 150
                                };
                                return (0, l.jsx)(o(747369).A, { ...t,
                                    children: (0, l.jsx)(o(558045).A, {
                                        type: o(558045).O.Vertical,
                                        sections: [{
                                            key: 0,
                                            items: [...u, p]
                                        }],
                                        initialFocus: 0,
                                        onAccept: e.close
                                    })
                                })
                            },
                            children: e => (0, l.jsx)(o(95582).A, { ...e,
                                title: t.schema.name,
                                focused: !1,
                                style: g.statusPickerButtonCore,
                                textWrapperStyle: g.statusPickerButtonTextWrapper,
                                left: (0, l.jsx)(o(221535).zB, {
                                    size: 14,
                                    theme: o(632079).Tj,
                                    themeMode: c,
                                    icon: t.schema.icon,
                                    type: "status"
                                }),
                                leftStyle: y,
                                showExtensionArrow: !0,
                                extensionArrowStyle: g.statusPickerExtensionArrow
                            })
                        })]
                    }), o(986939).A.isMobile ? (0, l.jsx)(o(884877).A, {
                        size: 4
                    }) : void 0, r.formatMessage(s.when)]
                })
            }

            function b(e, t, i) {
                let n = t.collectionStore();
                if (n) {
                    let r = n.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "CollectionSettingsConfigureGithubAutomationCreateNewStatusProperty",
                        environment: e,
                        cellTarget: r ? {
                            spaceWithId: r
                        } : void 0,
                        canUndo: !0,
                        perform: r => {
                            let a = (0, o(567879).createProperty)({
                                    environment: e,
                                    collectionStore: n,
                                    collectionViewArgs: void 0,
                                    propertyType: "status",
                                    transaction: r
                                }),
                                l = (0, o(856235).Jq)(t, a);
                            l && (0, o(422672).D)(l) && i({
                                id: a,
                                schema: l
                            })
                        }
                    })
                }
            }
            let S = (0, o(109939).YK)({
                connect: {
                    defaultMessage: "Connect to GitHub (Workspace)",
                    id: "database.viewSettings.githubConfigTab.connect"
                },
                connectDescriptionAdmin: {
                    defaultMessage: "Ask your workspace admin to configure the GitHub (Workspace) connection.",
                    id: "database.viewSettings.githubConfigTab.connectDescriptionAdmin"
                },
                authError: {
                    defaultMessage: "Auth failed. Please try again or contact Notion support.",
                    id: "database.viewSettings.githubConfigTab.authError"
                },
                tabDescriptionNoIdPrefix: {
                    defaultMessage: "This feature requires a prefixed ID property to link GitHub PRs to Notion {pluralItemName}.",
                    id: "database.viewSettings.githubConfigTab.tabDescriptionNoIdPrefix"
                },
                tabDescriptionNoStatus: {
                    defaultMessage: "Link PRs by adding the {singleItemName} ID to the PR title.",
                    id: "database.viewSettings.githubConfigTab.tabDescriptionNoStatus"
                },
                tabDescription: {
                    defaultMessage: "Link PRs by adding the {singleItemName} ID to the PR title. Set up automated status updates in Notion based on PR status changes.",
                    id: "database.viewSettings.githubConfigTab.tabDescription"
                }
            });

            function x(e) {
                let {
                    collectionContextStore: t,
                    property: n
                } = e, r = (0, o(109939).tz)(), [a, s] = (0, i.useState)(void 0), d = (0, o(801643).uF)({
                    featureName: "collection_connected_property_github"
                }), c = (0, o(682985).K8)(() => !!o(610463).A.bots.state.find(e => e.integration_id === o(49361).ob), []);
                return null != d && d.isAvailable ? c ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(j, {
                        collectionContextStore: t
                    }), (0, l.jsx)(w, {
                        collectionContextStore: t,
                        intl: r,
                        selectedStatusProperty: a
                    }), (0, l.jsx)(M, {
                        collectionContextStore: t
                    }), (0, l.jsx)(C, {
                        collectionContextStore: t,
                        selectedStatusProperty: a,
                        setSelectedStatusProperty: s,
                        property: n,
                        intl: r
                    })]
                }) : (0, l.jsx)(A, {
                    collectionContextStore: t,
                    intl: r
                }) : null
            }
            let v = {
                style0: {
                    width: 36,
                    height: 36
                },
                previewContentContainer: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                connectDescription: {
                    maxWidth: "calc(100% - 24px)",
                    color: o(632079).Tj.text.tertiary,
                    fontSize: 14,
                    textAlign: "center"
                },
                tabDescription: {
                    padding: o(986939).A.isMobile ? 18 : 14,
                    fontSize: o(986939).A.isMobile ? 16 : 12,
                    color: o(632079).Tj.text.tertiary
                }
            };

            function A({
                collectionContextStore: e,
                intl: t
            }) {
                let i = function() {
                        let {
                            background: e
                        } = I();
                        return (0, o(960253).I)(() => ({
                            connectButton: {
                                fontSize: 14,
                                maxWidth: "calc(100% - 24px)",
                                height: "initial",
                                color: o(632079).Tj.text.inversePrimary,
                                background: e,
                                whiteSpace: "normal",
                                padding: 8,
                                textAlign: "center"
                            }
                        }), [e])
                    }(),
                    {
                        hoveredBackground: n,
                        pressedBackground: r
                    } = I(),
                    a = (0, o(682985).K8)(() => (0, o(974410).f)(e.collectionStore()), [e]),
                    s = (0, o(84163).J)(a),
                    d = (0, o(533992).v3)(),
                    c = k(),
                    u = null == a ? void 0 : a.id;
                return (0, l.jsxs)(o(844565).A, {
                    disableMobileBorders: !0,
                    mobileStyle: v.previewContentContainer,
                    style: v.previewContentContainer,
                    children: [(0, l.jsx)("img", {
                        src: "/images/external_integrations/github-icon.png",
                        style: v.style0
                    }), (0, l.jsx)("p", {
                        style: v.connectDescription,
                        children: s ? (0, o(355940).Jb)().description : t.formatMessage(S.connectDescriptionAdmin)
                    }), (0, l.jsx)(o(988022).p, {
                        style: i.connectButton,
                        hoveredStyle: {
                            background: n
                        },
                        pressedStyle: {
                            background: r
                        },
                        disabled: !s,
                        disabledFeedback: !s,
                        onClick: async e => {
                            if (e.preventDefault(), u && c) try {
                                await o(211791).Jq({
                                    environment: d,
                                    spaceId: u,
                                    integration: c,
                                    from: "connected_relation_property_menu"
                                })
                            } catch (i) {
                                let e = t.formatMessage(S.authError);
                                o(647095).f1(e)
                            }
                        },
                        children: t.formatMessage(S.connect)
                    }), (0, l.jsx)(o(884877).A, {
                        size: 4
                    })]
                })
            }

            function j({
                collectionContextStore: e
            }) {
                let t = T(e);
                return (0, l.jsxs)(o(844565).A, {
                    disableDesktopPadding: !0,
                    disableMobilePadding: !0,
                    disableMobileBorders: !0,
                    mobileStyle: v.previewContentContainer,
                    style: v.previewContentContainer,
                    children: [(0, l.jsx)(o(884877).A, {
                        size: o(986939).A.isMobile ? 16 : 8
                    }), (0, l.jsx)(o(789466).A, {
                        width: "calc(100% - 24px)",
                        uniqueIdPrefix: null == t ? void 0 : t.prefix
                    })]
                })
            }

            function w({
                collectionContextStore: e,
                intl: t,
                selectedStatusProperty: i
            }) {
                let n, r = (0, o(682985).K8)(() => e.databaseTypeFromStoreState, [e]),
                    a = T(e),
                    s = (0, o(463082).$O)(r),
                    d = (0, o(463082).oj)(r);
                return n = a && a.prefix ? i ? t.formatMessage(S.tabDescription, {
                    singleItemName: s
                }) : t.formatMessage(S.tabDescriptionNoStatus, {
                    singleItemName: s
                }) : t.formatMessage(S.tabDescriptionNoIdPrefix, {
                    pluralItemName: d
                }), (0, l.jsx)(o(844565).A, {
                    disableMobileBorders: !0,
                    disableMobilePadding: !0,
                    mobileStyle: v.tabDescription,
                    style: v.tabDescription,
                    children: n
                })
            }

            function M({
                collectionContextStore: e
            }) {
                let t = T(e);
                return t && t.prefix ? null : (0, l.jsx)(o(519817).A, {
                    collectionContextStore: e,
                    uniqueIdProperty: t && {
                        property: t.id,
                        propertySchema: t.schema
                    },
                    prefixValue: null == t ? void 0 : t.prefix
                })
            }

            function C({
                collectionContextStore: e,
                selectedStatusProperty: t,
                setSelectedStatusProperty: o,
                property: i,
                intl: n
            }) {
                let r = T(e);
                return r && r.prefix ? (0, l.jsx)(m, {
                    selectedStatusProperty: t,
                    setSelectedStatusProperty: o,
                    gitHubProperty: i,
                    intl: n
                }) : null
            }

            function T(e) {
                return (0, o(682985).K8)(() => {
                    var t, i;
                    let n = null == (t = e.collectionStore()) || null == (t = t.getRecordKeyStore()) ? void 0 : t.getRecordKey(),
                        r = null == (i = e.collectionStore()) ? void 0 : i.getSchema(),
                        a = r && (0, o(722371).WP)(r).find(([, e]) => e && "auto_increment_id" === e.type);
                    if (a) {
                        let [e, t] = a;
                        if (t && "auto_increment_id" === t.type) return {
                            id: e,
                            schema: t,
                            prefix: n
                        }
                    }
                }, [e])
            }

            function k() {
                return (0, o(682985).K8)(() => o(610463).A.integrations.state.find(e => e.id === o(49361).ob), [])
            }

            function I() {
                let e = k(),
                    t = (0, o(960253).e)();
                return (0, o(682985).K8)(() => (0, o(162857).u)(e, t), [e, t])
            }
        },
        778633: (e, t, o) => {
            o.d(t, {
                A: () => r
            }), o(296540);
            var i = o(474848);
            let n = {
                style0: {
                    paddingTop: 8,
                    marginInlineStart: 16,
                    marginInlineEnd: 16,
                    color: o(632079).oZ.red
                }
            };

            function r(e) {
                return (0, i.jsx)(o(324489).V, {
                    isMultiline: !0,
                    style: { ...n.style0,
                        ...e.styles
                    },
                    children: (0, i.jsx)(o(109939).sA, {
                        id: "database.viewSettings.propertyTab.duplicatePropertyNameError",
                        defaultMessage: "A property named {propertyName} already exists in this database.",
                        values: {
                            propertyName: e.propertyName
                        }
                    })
                })
            }
        },
        789466: (e, t, o) => {
            o.d(t, {
                A: () => a
            }), o(296540);
            var i = o(474848);
            let n = {
                    width: 16,
                    height: 16
                },
                r = {
                    githubPrInfoPill: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "fit-content",
                        padding: "4px 10px",
                        borderRadius: "2em",
                        background: "#238636",
                        flexShrink: 0,
                        ...o(699422).RC
                    }
                };

            function a(e) {
                var t;
                let a, s, d = (0, o(109939).tz)(),
                    c = (t = e.width, a = o(986939).A.isMobile ? 18 : 14, s = (0, o(960253).e)(), (0, o(960253).I)(() => ({
                        githubContainer: {
                            display: "flex",
                            alignSelf: "center",
                            flexDirection: "column",
                            width: t || "90%",
                            padding: 20,
                            border: `1px solid ${o(632079).Tj.border.primary}`,
                            borderRadius: 6,
                            borderEndEndRadius: 6,
                            cursor: "default"
                        },
                        githubPrTitleRow: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: "calc(100% + 20px)",
                            overflow: "hidden"
                        },
                        githubPrTitle: {
                            display: "inline-flex",
                            fontSize: a,
                            fontWeight: o(699422).Wy.medium,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            background: o(632079).Tj.whiteButtonBackground,
                            padding: "2px 4px",
                            borderStartStartRadius: 5,
                            borderEndStartRadius: 5,
                            borderInlineStart: `2px solid ${o(632079).Tj.blue.border.accentPrimary}`,
                            borderTop: `2px solid ${o(632079).Tj.blue.border.accentPrimary}`,
                            borderBottom: `2px solid ${o(632079).Tj.blue.border.accentPrimary}`,
                            width: "100%"
                        },
                        githubTask: {
                            background: "light" === s ? o(632079).Tj.palette.blue[50] : o(632079).Tj.palette.blue[400]
                        },
                        githubPrInfoOpenText: {
                            color: "white",
                            fontSize: a - 2,
                            fontWeight: o(699422).Wy.medium
                        },
                        githubPrInfoMergeInto: {
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: a - 2,
                            color: o(632079).Tj.text.tertiary,
                            ...o(699422).RC
                        },
                        githubPrInfoMain: {
                            padding: "0px 4px",
                            fontFamily: o(699422).Tf.githubMono,
                            background: o(632079).Tj.cardPressedBackground,
                            borderRadius: 6,
                            color: o(632079).Tj.text.primary,
                            verticalAlign: "text-bottom",
                            ...o(699422).RC
                        }
                    }), [a, t, s])),
                    u = (0, i.jsx)("div", {
                        id: "github-preview-github-pr-title-row",
                        style: c.githubPrTitleRow,
                        children: (0, i.jsxs)("div", {
                            id: "github-preview-github-pr-title-wrapper",
                            style: c.githubPrTitle,
                            children: [(0, i.jsx)(o(884877).A, {
                                size: 2
                            }), "[", (0, i.jsxs)("div", {
                                id: "github-preview-github-pr-task",
                                style: c.githubTask,
                                children: [e.uniqueIdPrefix || d.formatMessage(l.idPrefix), e.uniqueIdValue ? `-${e.uniqueIdValue}` : "-1"]
                            }), "]", (0, i.jsx)(o(884877).A, {
                                size: 2
                            }), d.formatMessage(l.prTitle)]
                        })
                    }),
                    p = (0, i.jsxs)(o(4458).fI, {
                        id: "github-preview-github-pr-info-row",
                        inline: !0,
                        children: [(0, i.jsxs)("div", {
                            id: "github-preview-github-open-pr-pill",
                            style: r.githubPrInfoPill,
                            children: [(0, i.jsx)("img", {
                                src: o(896221).A.images.externalIntegrations.githubPullOpenIconWhitePng,
                                style: n
                            }), (0, i.jsx)(o(884877).A, {
                                size: 2
                            }), (0, i.jsx)("div", {
                                style: c.githubPrInfoOpenText,
                                children: d.formatMessage(l.open)
                            })]
                        }), (0, i.jsx)(o(884877).A, {
                            size: 8
                        }), (0, i.jsx)("div", {
                            id: "github-preview-github-merge-into-main",
                            style: c.githubPrInfoMergeInto,
                            children: (0, i.jsxs)("span", {
                                style: c.githubPrInfoMergeInto,
                                children: [d.formatMessage(l.mergeInto), (0, i.jsx)(o(884877).A, {
                                    size: 4
                                }), (0, i.jsx)("span", {
                                    style: c.githubPrInfoMain,
                                    children: d.formatMessage(l.main)
                                })]
                            })
                        })]
                    });
                return (0, i.jsxs)("div", {
                    id: "github-preview-github-container",
                    style: c.githubContainer,
                    children: [u, (0, i.jsx)(o(884877).A, {
                        size: 12
                    }), p]
                })
            }
            let l = (0, o(109939).YK)({
                idPrefix: {
                    defaultMessage: "TASK",
                    id: "database.viewSettings.githubConfigTab.preview.idPrefix"
                },
                prTitle: {
                    defaultMessage: "GitHub PR Title",
                    id: "database.viewSettings.githubConfigTab.preview.prTitle"
                },
                open: {
                    defaultMessage: "Open",
                    id: "database.viewSettings.githubConfigTab.preview.open"
                },
                mergeInto: {
                    defaultMessage: "Merge into",
                    id: "database.viewSettings.githubConfigTab.preview.mergeInto"
                },
                main: {
                    defaultMessage: "main",
                    id: "database.viewSettings.githubConfigTab.preview.main"
                }
            })
        },
        844139: (e, t, o) => {
            o.d(t, {
                e: () => s
            }), o(898992), o(672577), o(737550);
            var i = o(296540),
                n = o(474848);
            let r = {
                    canSearchWorkspace: !0,
                    canSearchWeb: !1
                },
                a = (0, o(109939).YK)({
                    previewOptionFirstPage: {
                        id: "propertyAgentAutofillMenu.preview.option.firstPage",
                        defaultMessage: "First page"
                    },
                    previewOptionFirst5Pages: {
                        id: "propertyAgentAutofillMenu.preview.option.first5Pages",
                        defaultMessage: "First 5 pages"
                    },
                    previewOptionFirst10Pages: {
                        id: "propertyAgentAutofillMenu.preview.option.first10Pages",
                        defaultMessage: "First 10 pages"
                    },
                    previewOptionAllPages: {
                        id: "propertyAgentAutofillMenu.preview.option.allPages",
                        defaultMessage: "All pages in this view"
                    },
                    inputPlaceholder: {
                        defaultMessage: "Add specific instructions for your agent, e.g., ‘Fill in the most recent company’.",
                        id: "propertyAgentAutofillMenu.placeholder"
                    },
                    onPageCreation: {
                        defaultMessage: "On page creation",
                        id: "propertyAgentAutofillMenu.triggerOnCreate"
                    },
                    onPageUpdate: {
                        defaultMessage: "On page update",
                        id: "propertyAgentAutofillMenu.triggerOnUpdate"
                    },
                    searchWorkspace: {
                        defaultMessage: "Other workspace pages",
                        id: "propertyAgentAutofillMenu.searchWorkspace"
                    },
                    searchWeb: {
                        defaultMessage: "Anything on the web",
                        id: "propertyAgentAutofillMenu.searchWeb"
                    },
                    createAgent: {
                        defaultMessage: "Create agent",
                        id: "propertyAgentAutofillMenu.createAgent"
                    },
                    saveChanges: {
                        defaultMessage: "Save changes",
                        id: "propertyAgentAutofillMenu.saveChanges"
                    },
                    runAutoFill: {
                        defaultMessage: "Run autofill now",
                        id: "propertyAgentAutofillMenu.runAutoFill"
                    },
                    noConfig: {
                        defaultMessage: "No agent configuration found.",
                        id: "propertyAgentAutofillMenu.noConfig"
                    },
                    instructionsTitle: {
                        defaultMessage: "Instructions",
                        id: "propertyAgentAutofillMenu.instructions.title"
                    },
                    sourcesTitle: {
                        defaultMessage: "Sources",
                        id: "propertyAgentAutofillMenu.sources.title"
                    },
                    sourcesTooltip: {
                        defaultMessage: "This agent only searches the selected sources",
                        id: "propertyAgentAutofillMenu.sources.tooltip"
                    },
                    setAsDefault: {
                        defaultMessage: "Set as default",
                        id: "propertyAgentAutofillMenu.setAsDefault"
                    },
                    hasSelectOrMultiselectWithNoOptions: {
                        defaultMessage: "All select and multi-select properties must have options",
                        id: "propertyAgentAutofillMenu.hasSelectOrMultiselectWithNoOptions"
                    },
                    onPageCreationTooltip: {
                        defaultMessage: "The agent automatically fills this property when new pages are created",
                        id: "propertyAgentAutofillMenu.onPageCreationTooltip"
                    },
                    onPageUpdateTooltip: {
                        defaultMessage: "The agent automatically fills this property when the page is updated",
                        id: "propertyAgentAutofillMenu.onPageUpdateTooltip"
                    },
                    creatingAgent: {
                        defaultMessage: "Creating agent…",
                        id: "propertyAgentAutofillMenu.creatingAgent"
                    },
                    failedToStartFill: {
                        defaultMessage: "Failed to start fill operation",
                        id: "propertyAgentAutofillMenu.failedToStartFill"
                    },
                    failedToStartFillAll: {
                        defaultMessage: "Failed to start fill all operation",
                        id: "propertyAgentAutofillMenu.failedToStartFillAll"
                    }
                }),
                l = {
                    contentContainer: {
                        flex: 1,
                        overflowY: "auto",
                        paddingInlineStart: 16,
                        paddingInlineEnd: 8
                    },
                    section: {
                        paddingInlineEnd: 8
                    },
                    loadingText: {
                        color: o(632079).Tj.text.secondary,
                        fontSize: 14,
                        padding: 16
                    },
                    buttonContainer: {
                        backgroundColor: o(632079).Tj.background.primary,
                        display: "flex",
                        justifyContent: "center",
                        paddingInline: 16
                    },
                    buttonsContainer: {
                        marginTop: 12,
                        marginBottom: 16
                    },
                    buttonWidth: {
                        width: "100%"
                    },
                    collectionSettingsSwitcherMenuItemStyle: {
                        marginInlineStart: -4,
                        marginInlineEnd: -4
                    },
                    divider: {
                        marginBottom: 8,
                        marginTop: 8,
                        paddingInlineEnd: 8
                    },
                    autofillIcons: {
                        color: o(632079).Tj.icon.tertiary
                    },
                    blueDot: {
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: o(632079).Tj.blue.background.accentPrimary
                    },
                    style0: {
                        paddingBottom: 4
                    },
                    style1: {
                        width: "100%",
                        justifyContent: "flex-start",
                        textAlign: "start"
                    },
                    style2: {
                        marginTop: 8
                    }
                };

            function s(e) {
                let {
                    collectionContextStore: t,
                    collectionStore: s,
                    handleCloseParent: d = () => {},
                    numWorkflowsForProperty: c = 1,
                    property: u,
                    propertySchema: p,
                    spaceId: g,
                    workflowId: m
                } = e, f = (0, o(533992).v3)(), y = (0, o(109939).tz)(), [h, b] = (0, i.useState)(!1), S = (0, o(682985).K8)(() => {
                    let e = s.getParentCollectionViewBlockStore();
                    return e ? o(360851).N.createChildStore(e, {
                        table: o(832375).C0E,
                        id: m,
                        spaceId: g
                    }) : null
                }, [s, m, g]), x = (0, o(682985).K8)(() => {
                    let e = (null == S ? void 0 : S.getDraftDataStore()) ? ? (null == S ? void 0 : S.getDataStore()),
                        t = null == e ? void 0 : e.getKeyStore("instructions"),
                        i = null == t ? void 0 : t.getValue();
                    if (void 0 === i || (0, o(886883).Zv)(i)) return t
                }, [S]), v = (0, o(682985).K8)(() => {
                    if (!S) return o(572473).W;
                    let e = S.getDraftData() ? ? S.getData(),
                        t = !1,
                        i = !1,
                        n = !1;
                    if (e) {
                        var r, a, l, s;
                        i = !!(null != e && e.triggers) && e.triggers.some(e => {
                            var t;
                            return (null == (t = e.state) ? void 0 : t.type) === "notion.page.created"
                        });
                        let o = null == (r = e.triggers) ? void 0 : r.find(e => {
                            var t;
                            return (null == (t = e.state) ? void 0 : t.type) === "notion.page.updated" && e.enabled
                        });
                        if (o && (null == (a = o.state) ? void 0 : a.type) === "notion.page.updated") {
                            let e = o.state.propertyFilters;
                            n = !!((null == e ? void 0 : e.type) === "any" || (null == e ? void 0 : e.type) === "some" && (null == (l = e.some) ? void 0 : l.length) || (null == e ? void 0 : e.type) === "all" && (null == (s = e.all) ? void 0 : s.length) || o.state.propertyIds && o.state.propertyIds.length > 0), t = !o.state.shouldIgnorePageContentUpdates
                        }
                    }
                    return {
                        shouldTriggerOnPageContentUpdate: t,
                        shouldTriggerOnPageCreate: i,
                        shouldTriggerOnPropertyUpdate: n
                    }
                }, [S]), A = (0, o(682985).K8)(() => {
                    var e, t;
                    if (!S) return r;
                    let i = S.getDraftData() ? ? S.getData(),
                        n = null == i || null == (e = i.modules) ? void 0 : e.find(e => "notion" === e.type);
                    return n ? {
                        canSearchWorkspace: !!(null == (t = n.permissions) ? void 0 : t.some(e => {
                            var t;
                            return "notion" === e.type && (null == (t = e.identifier) ? void 0 : t.type) === "workspacePublic"
                        })),
                        canSearchWeb: (0, o(445568).isWebAccessEnabled)(n.permissions)
                    } : r
                }, [S]), j = (0, o(682985).K8)(() => S ? (0, o(772966).d_)(S) : [], [S]), w = (0, o(682985).K8)(() => !!S && S.hasBeenPublished(), [S]), M = (0, i.useCallback)((e, t) => {
                    S && s && o(528372).gT({
                        workflowStore: S,
                        currentCollectionStore: s,
                        environment: f,
                        spaceId: g,
                        triggerStates: v,
                        triggerType: e,
                        enabled: t
                    })
                }, [f, S, v, s, g]), C = (0, i.useCallback)(e => {
                    S && o(528372).$6({
                        workflowStore: S,
                        environment: f,
                        spaceId: g,
                        newSearchStates: e
                    })
                }, [f, S, g]), T = (0, i.useCallback)(e => {
                    S && s && o(528372).r1({
                        workflowStore: S,
                        collectionStore: s,
                        environment: f,
                        intl: y,
                        spaceId: g,
                        selectedProperties: e
                    })
                }, [f, y, S, s, g]), k = (0, o(682985).K8)(() => s.getSchema(), [s]), I = (0, i.useCallback)(async () => {
                    S && (b(!0), await o(528372).D9({
                        workflowStore: S,
                        environment: f,
                        spaceId: g,
                        intl: y
                    }), b(!1))
                }, [S, f, g, b, y]), _ = (0, i.useCallback)(async e => {
                    if (!S || !s) return void d();
                    let i = (0, o(401989).wv)(y);
                    try {
                        d(), await o(528372).ay({
                            n: e,
                            collectionContextStore: t,
                            workflowStore: S,
                            currentCollectionStore: s,
                            environment: f,
                            properties: j,
                            spaceId: g,
                            onEnqueueStart: i.onEnqueueStart,
                            onEnqueueComplete: i.onEnqueueComplete
                        })
                    } catch (e) {
                        o(436555).D6({
                            label: y.formatMessage(a.failedToStartFill)
                        })
                    }
                }, [t, s, f, d, y, j, g, S]), P = (0, i.useCallback)(async () => {
                    if (!S || !s) return void d();
                    let e = (0, o(401989).eX)(y);
                    try {
                        d(), await o(528372).Xp({
                            workflowStore: S,
                            currentCollectionStore: s,
                            collectionContextStore: t,
                            environment: f,
                            spaceId: g,
                            properties: j,
                            onEnqueueStart: e.onEnqueueStart,
                            onEnqueueComplete: e.onEnqueueComplete
                        })
                    } catch (e) {
                        o(436555).D6({
                            label: y.formatMessage(a.failedToStartFillAll)
                        })
                    }
                }, [S, s, d, y, t, f, g, j]), R = (0, i.useCallback)(() => {
                    u && S && o(528372).XL({
                        workflowId: m,
                        propertyId: u,
                        collectionStore: s,
                        workflows: [S],
                        environment: f
                    })
                }, [u, S, m, s, f]), B = (0, i.useMemo)(() => !!S && !!p && (0, o(307365).DO)(S.id, p), [p, S]), D = (0, o(682985).K8)(() => !!x && !!S && (S.hasBeenPublished() ? S.hasChanges(!0) : !(!x.getValue() && 1 === j.length && (!u || j.includes(u)) && o(381453).n4(v, o(572473).W) && o(381453).n4(A, r))), [x, u, A, j, v, S]), O = (0, o(682985).K8)(() => null == x ? void 0 : x.getValue(), [x]), V = (0, o(682985).K8)(() => {
                    let e = t.collectionStore(),
                        o = null == e ? void 0 : e.getSchema();
                    return !!o && j.some(e => {
                        let t = o[e];
                        if (((null == t ? void 0 : t.type) === "select" || (null == t ? void 0 : t.type) === "multi_select") && 0 === (t.options || []).length) return !0
                    })
                }, [t, j]), F = (0, o(682985).K8)(() => {
                    let e = (null == S ? void 0 : S.getDraftData()) ? ? (null == S ? void 0 : S.getData());
                    return (null == e ? void 0 : e.isLite) ? ? !1
                }, [S]), {
                    canCreateLiteDatabaseAgents: K,
                    canRunLiteDatabaseAgents: W,
                    canRunBigDatabaseAgents: N
                } = (0, o(482270).Y)(), z = F ? K : N, E = F ? W : N, {
                    propertySelectionDropdown: U
                } = (0, o(854772).i)({
                    isLite: F,
                    schema: k,
                    selectedProperties: j,
                    onSelectionChange: T
                });
                return (0, n.jsx)(o(4458).VP, {
                    height: "100%",
                    role: "presentation",
                    children: S ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            style: l.contentContainer,
                            children: [(0, n.jsx)("div", {
                                style: l.section,
                                children: x ? (0, n.jsxs)(o(4458).VP, {
                                    gap: 8,
                                    children: [(0, n.jsxs)(o(4458).fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        children: [(0, n.jsx)(o(111010).D, {
                                            styleKey: "captionMedium",
                                            color: "gray",
                                            colorVariant: "secondary",
                                            children: (0, n.jsx)(o(109939).sA, { ...a.instructionsTitle
                                            })
                                        }), D && w ? (0, n.jsx)("div", {
                                            style: l.blueDot
                                        }) : void 0]
                                    }), (0, n.jsx)(o(466013).c, {
                                        collectionStore: s,
                                        placeholder: y.formatMessage(a.inputPlaceholder),
                                        minHeight: 80,
                                        workflowStore: S
                                    })]
                                }) : void 0
                            }), (0, n.jsx)("div", {
                                style: l.style0
                            }), U, (0, n.jsxs)(o(4458).VP, {
                                gap: 4,
                                children: [(0, n.jsx)(o(51831).m, {
                                    delayThreshold: 1e3,
                                    content: () => y.formatMessage(a.onPageCreationTooltip),
                                    children: e => (0, n.jsx)(o(76761).A, { ...e,
                                        switcherProps: {
                                            on: v.shouldTriggerOnPageCreate || !1
                                        },
                                        title: (0, n.jsx)(o(109939).sA, { ...a.onPageCreation
                                        }),
                                        onClick: () => {
                                            M("shouldTriggerOnPageCreate", !v.shouldTriggerOnPageCreate)
                                        },
                                        buttonStyle: l.collectionSettingsSwitcherMenuItemStyle
                                    })
                                }), (0, n.jsx)(o(51831).m, {
                                    delayThreshold: 1e3,
                                    content: () => y.formatMessage(a.onPageUpdateTooltip),
                                    children: e => (0, n.jsx)(o(76761).A, { ...e,
                                        switcherProps: {
                                            on: v.shouldTriggerOnPageContentUpdate || !1
                                        },
                                        buttonStyle: l.collectionSettingsSwitcherMenuItemStyle,
                                        title: (0, n.jsx)(o(109939).sA, { ...a.onPageUpdate
                                        }),
                                        onClick: () => {
                                            M("shouldTriggerOnPageContentUpdate", !v.shouldTriggerOnPageContentUpdate)
                                        }
                                    })
                                })]
                            }), (0, n.jsx)(o(346268).c, {
                                size: 1,
                                style: l.divider,
                                colorVariant: "secondary"
                            }), (0, n.jsxs)(o(4458).VP, {
                                gap: 8,
                                children: [(0, n.jsxs)(o(4458).fI, {
                                    gap: 4,
                                    children: [(0, n.jsx)(o(111010).D, {
                                        styleKey: "captionMedium",
                                        color: "gray",
                                        colorVariant: "secondary",
                                        children: (0, n.jsx)(o(109939).sA, { ...a.sourcesTitle
                                        })
                                    }), (0, n.jsx)(o(51831).m, {
                                        content: () => (0, n.jsx)(o(109939).sA, { ...a.sourcesTooltip
                                        }),
                                        children: e => (0, n.jsx)(o(374533).A, { ...e,
                                            size: "xxs",
                                            icon: o(211052).questionMarkCircleSmallIcon,
                                            iconStyle: l.autofillIcons,
                                            ariaLabel: y.formatMessage(a.sourcesTooltip)
                                        })
                                    })]
                                }), (0, n.jsxs)(o(4458).VP, {
                                    gap: 4,
                                    children: [(0, n.jsx)(o(76761).A, {
                                        buttonStyle: l.collectionSettingsSwitcherMenuItemStyle,
                                        switcherProps: {
                                            on: A.canSearchWorkspace || !1
                                        },
                                        title: (0, n.jsx)(o(109939).sA, { ...a.searchWorkspace
                                        }),
                                        onClick: () => {
                                            C({ ...A,
                                                canSearchWorkspace: !A.canSearchWorkspace
                                            })
                                        }
                                    }), (0, n.jsx)(o(76761).A, {
                                        switcherProps: {
                                            on: A.canSearchWeb || !1
                                        },
                                        buttonStyle: l.collectionSettingsSwitcherMenuItemStyle,
                                        title: (0, n.jsx)(o(109939).sA, { ...a.searchWeb
                                        }),
                                        onClick: () => {
                                            C({ ...A,
                                                canSearchWeb: !A.canSearchWeb
                                            })
                                        }
                                    })]
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            style: l.buttonsContainer,
                            children: [w ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(o(656252).A, {
                                    popupType: o(656252).z.Popup,
                                    popupWrapStyle: {
                                        width: 288
                                    },
                                    alignmentToOrigin: "center",
                                    content: ({
                                        close: e
                                    }) => (0, n.jsx)(o(747369).A, {
                                        menuType: o(649476).gu.Popup,
                                        children: (0, n.jsx)(o(558045).A, {
                                            type: o(558045).O.Vertical,
                                            sections: [{
                                                key: "preview-options",
                                                items: [{
                                                    key: "first-page",
                                                    action: () => {
                                                        _(1), e()
                                                    },
                                                    render: e => (0, n.jsx)(o(95582).A, { ...e,
                                                        title: y.formatMessage(a.previewOptionFirstPage),
                                                        buttonStyle: l.style1
                                                    })
                                                }, ...E ? [{
                                                    key: "first-5-pages",
                                                    action: () => {
                                                        _(5), e()
                                                    },
                                                    render: e => (0, n.jsx)(o(95582).A, { ...e,
                                                        title: y.formatMessage(a.previewOptionFirst5Pages),
                                                        buttonStyle: l.style1
                                                    })
                                                }, {
                                                    key: "first-10-pages",
                                                    action: () => {
                                                        _(10), e()
                                                    },
                                                    render: e => (0, n.jsx)(o(95582).A, { ...e,
                                                        title: y.formatMessage(a.previewOptionFirst10Pages),
                                                        buttonStyle: l.style1
                                                    })
                                                }, {
                                                    key: "all-pages",
                                                    action: () => {
                                                        e(), P()
                                                    },
                                                    render: e => (0, n.jsx)(o(95582).A, { ...e,
                                                        title: y.formatMessage(a.previewOptionAllPages),
                                                        buttonStyle: l.style1
                                                    })
                                                }] : []],
                                                render: e => (0, n.jsx)(o(844565).A, { ...e
                                                })
                                            }],
                                            initialFocus: void 0
                                        })
                                    }),
                                    children: e => (0, n.jsx)(o(51831).m, {
                                        disableTooltip: !V,
                                        content: () => (0, n.jsx)(o(109939).sA, { ...a.hasSelectOrMultiselectWithNoOptions
                                        }),
                                        children: t => (0, n.jsx)("div", {
                                            style: l.buttonContainer,
                                            children: (0, n.jsx)(o(548436).A, { ...(0, o(63390).A)(e, t),
                                                size: "md",
                                                style: l.buttonWidth,
                                                iconLeading: {
                                                    icon: o(474623).b,
                                                    size: "sm",
                                                    colorPalette: "blue",
                                                    colorVariant: "accentPrimary"
                                                },
                                                disabled: V || D || !z,
                                                children: (0, n.jsx)(o(109939).sA, { ...a.runAutoFill
                                                })
                                            })
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    style: l.style2
                                })]
                            }) : null, w && !B && u && c > 1 ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("div", {
                                    style: l.buttonContainer,
                                    children: (0, n.jsx)(o(548436).A, {
                                        size: "md",
                                        style: l.buttonWidth,
                                        onClick: R,
                                        children: (0, n.jsx)(o(109939).sA, { ...a.setAsDefault
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    style: l.style2
                                })]
                            }) : null, (0, n.jsx)("div", {
                                style: l.buttonContainer,
                                children: (0, n.jsx)(o(912946).A, {
                                    onClick: I,
                                    size: "md",
                                    style: l.buttonWidth,
                                    colorPalette: "blue",
                                    disabled: !D || !O,
                                    children: w ? (0, n.jsx)(o(109939).sA, { ...a.saveChanges
                                    }) : (0, n.jsx)(o(109939).sA, { ...h ? a.creatingAgent : a.createAgent
                                    })
                                })
                            })]
                        })]
                    }) : (0, n.jsx)("div", {
                        style: l.loadingText,
                        children: (0, n.jsx)(o(109939).sA, { ...a.noConfig
                        })
                    })
                })
            }
        },
        844823: (e, t, o) => {
            o.d(t, {
                V: () => n
            }), o(296540);
            var i = o(474848);

            function n({
                menuListProps: e,
                collectionContextStore: t,
                property: r,
                propertySchema: a
            }) {
                let l = (0, o(533992).v3)();
                return (0, i.jsx)(o(76761).A, {
                    title: (0, i.jsx)(o(4458).fI, {
                        alignItems: "center",
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Show full URL",
                            id: "database.viewSettings.propertyTab.toggleShowFullUrl"
                        })
                    }),
                    icon: o(290884).l,
                    showChevron: !1,
                    switcherProps: {
                        on: !!a.show_full_url
                    },
                    ...e,
                    onClick: () => (function(e, t, i, n) {
                        let r = t.collectionStore();
                        if (!n || !r || "url" !== n.type) return;
                        let a = !n.show_full_url,
                            l = r.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "CollectionSettingsProperty.handleNumberShowAsChange",
                            environment: e,
                            canUndo: !0,
                            cellTarget: l ? {
                                spaceWithId: l
                            } : void 0,
                            perform: t => {
                                (0, o(957395).F)({
                                    environment: e,
                                    collectionStore: r,
                                    update: {
                                        [i]: { ...n,
                                            show_full_url: a
                                        }
                                    },
                                    transaction: t
                                })
                            }
                        }), (0, o(8043).V)({
                            environment: e,
                            collectionStore: t.collectionStore(),
                            collectionViewStore: t.collectionViewStore(),
                            property: i,
                            from: "view_settings",
                            action: a ? "url_toggle_show_full_on" : "url_toggle_show_full_off"
                        })
                    })(l, t, r, a)
                })
            }
        },
        854772: (e, t, o) => {
            o.d(t, {
                i: () => a
            }), o(944114), o(898992), o(354520), o(581454);
            var i = o(296540),
                n = o(474848);
            let r = (0, o(109939).YK)({
                selectProperties: {
                    id: "collectionSettings.propertySelection.selectProperties",
                    defaultMessage: "Select"
                },
                moreCount: {
                    id: "collectionSettings.propertySelection.moreCount",
                    defaultMessage: "{count, plural, one {# more} other {# more}}"
                }
            });

            function a({
                disabled: e,
                icon: t,
                isLite: l = !1,
                isPhone: s,
                marginBlock: d,
                onSelectionChange: c,
                schema: u,
                selectedProperties: p,
                width: g
            }) {
                let m = (0, o(109939).tz)(),
                    f = (0, o(960253).e)(),
                    y = (0, o(960253).I)(() => ({
                        buttonContent: {
                            width: g ? ? "100%",
                            marginInlineStart: -4,
                            marginInlineEnd: -4,
                            marginBlock: d ? ? 4,
                            opacity: e ? .4 : 1
                        },
                        fillDataLabel: {
                            fontSize: s ? void 0 : 14,
                            color: o(632079).Tj.text.primary
                        },
                        propertyLabel: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: 200,
                            fontSize: 14,
                            color: o(632079).Tj.text.secondary
                        },
                        dropdownIcon: {
                            color: o(632079).Tj.text.tertiary,
                            flexShrink: 0,
                            marginInlineStart: 4
                        },
                        checkbox: {
                            marginInlineEnd: s ? void 0 : 8,
                            flexShrink: 0
                        },
                        leftIcon: {
                            height: 20,
                            width: 20
                        },
                        iconsContainer: {
                            display: "flex",
                            alignItems: "center",
                            gap: s ? 8 : void 0,
                            marginInlineEnd: s ? 8 : void 0
                        }
                    }), [e, s, d, g]),
                    h = (0, o(682985).K8)(() => Object.keys(u).filter(e => {
                        let t = u[e];
                        return !!t && (0, o(906659).CK)({
                            schema: t,
                            isLite: l
                        })
                    }), [u, l]),
                    b = (0, i.useCallback)(e => {
                        let t = [...p],
                            o = t.indexOf(e);
                        o > -1 ? t.splice(o, 1) : t.push(e), t.length > 0 && c(t)
                    }, [p, c]),
                    S = (0, i.useCallback)(() => {
                        if (0 === p.length) return m.formatMessage(r.selectProperties);
                        let e = p.map(e => {
                            var t;
                            return null == (t = u[e]) ? void 0 : t.name
                        }).filter(e => !!(0, o(722371).O9)(e));
                        if (0 === e.length) return m.formatMessage(r.selectProperties);
                        let t = new Intl.ListFormat(m.locale, {
                            style: "long",
                            type: "conjunction"
                        });
                        if (e.length > 2) {
                            let o = e.slice(0, 2),
                                i = e.length - 2,
                                n = m.formatMessage(r.moreCount, {
                                    count: i
                                });
                            return t.format([...o, n])
                        }
                        return t.format(e)
                    }, [p, u, m]),
                    x = (0, n.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        sections: [{
                            key: "properties",
                            items: h.map(e => ({
                                key: e,
                                action: ({
                                    event: t
                                }) => {
                                    var o;
                                    null == (o = t.preventDefault) || o.call(t), "stopPropagation" in t && t.stopPropagation(), b(e)
                                },
                                render: t => {
                                    var i, r, a;
                                    return (0, n.jsx)(o(95582).A, { ...t,
                                        role: "menuitemcheckbox",
                                        title: (null == (i = u[e]) ? void 0 : i.name) || e,
                                        left: (0, n.jsxs)("div", {
                                            style: y.iconsContainer,
                                            children: [(0, n.jsx)("div", {
                                                style: y.checkbox,
                                                children: (0, n.jsx)(o(349050).S, {
                                                    checked: p.includes(e),
                                                    size: 16,
                                                    onClick: () => b(e)
                                                })
                                            }), (0, n.jsx)(o(221535).zB, {
                                                icon: null == (r = u[e]) ? void 0 : r.icon,
                                                type: null == (a = u[e]) ? void 0 : a.type,
                                                size: 16,
                                                theme: o(632079).Tj,
                                                themeMode: f
                                            })]
                                        })
                                    })
                                }
                            }))
                        }],
                        initialFocus: void 0
                    }),
                    v = (0, n.jsx)(o(747369).A, {
                        menuType: o(649476).gu.Popup,
                        minWidth: 200,
                        maxHeight: 360,
                        children: x
                    }),
                    A = (0, n.jsx)(o(656252).A, {
                        placementToOrigin: s ? void 0 : "right",
                        alignmentToOrigin: s ? "end" : "start",
                        popupType: s ? o(656252).z.BottomSheet : o(656252).z.Popup,
                        bottomSheetInitialState: s ? "half" : void 0,
                        stopClickPropagation: !0,
                        content: () => s ? (0, n.jsx)(o(747369).A, {
                            menuType: o(649476).gu.Modal,
                            whiteBackground: !0,
                            enableMobileRefresh: !0,
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Can only fill data in",
                                id: "collectionSettings.propertyAgentAutofill.fillDataTitle"
                            }),
                            children: x
                        }) : v,
                        children: i => (0, n.jsx)(o(95582).A, { ...i,
                            disabled: e,
                            focused: !1,
                            icon: t ? t(y.leftIcon) : void 0,
                            buttonStyle: y.buttonContent,
                            title: (0, n.jsx)("span", {
                                style: y.fillDataLabel,
                                children: (0, n.jsx)(o(109939).sA, {
                                    defaultMessage: "Can only fill data in",
                                    id: "collectionSettings.propertyAgentAutofill.fillDataTitle"
                                })
                            }),
                            right: (0, n.jsxs)(o(4458).fI, {
                                alignItems: "center",
                                children: [(0, n.jsx)("span", {
                                    style: y.propertyLabel,
                                    children: S()
                                }), (0, n.jsx)(o(16275).I, {
                                    icon: o(491469).arrowChevronSingleRightSmallIcon,
                                    size: "xxs",
                                    style: y.dropdownIcon
                                })]
                            })
                        })
                    });
                return {
                    getSelectionLabel: S,
                    propertySelectionDropdown: A,
                    propertySelectionMenu: v,
                    propertySelectionMenuList: x
                }
            }
        },
        867587: (e, t, o) => {
            o.d(t, {
                N: () => i
            });

            function i(e, t) {
                return {
                    threadStore: (0, o(548124).useThreadStoreFromCurrentRoute)(),
                    workflowValue: (0, o(682985).K8)(() => (t && e.table !== o(581654).U6 ? e.getDraftData() : e.getData()) ? ? (0, o(425749).bZ)(), [e, t])
                }
            }
        },
        868748: (e, t, o) => {
            o.d(t, {
                EB: () => m,
                Ay: () => u,
                DZ: () => y
            });
            var i = o(296540),
                n = o(474848);
            let r = {
                    marginInlineStart: 6
                },
                a = {
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "pre"
                },
                l = {
                    width: 200
                },
                s = {
                    opacity: 1
                };

            function d(e) {
                let {
                    temporaryAutoRelateState: t,
                    handleAutoRelateToggle: i,
                    collectionStore: d,
                    targetCollectionStore: c,
                    autoRelate: u
                } = e, p = (0, o(682985).K8)(() => (null == d ? void 0 : d.getFormat().bot_id) || c.getFormat().bot_id, [d, c]), g = !!p, m = (0, n.jsxs)("div", {
                    style: a,
                    children: [(0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Automatically Relate",
                        id: "database.viewSettings.setupRelationTab.autoRelate.title"
                    }), o(986939).A.isMobile ? void 0 : (0, n.jsx)(o(51831).m, {
                        style: l,
                        placement: "bottom",
                        textWrap: !0,
                        content: () => (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Relations will automatically populate based on links found in page properties.",
                            id: "database.viewSettings.setupRelationTab.autoRelateTooltip"
                        }),
                        children: e => (0, n.jsx)("div", { ...e,
                            style: r,
                            children: (0, n.jsx)(o(16275).I, {
                                icon: o(211052).questionMarkCircleSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    })]
                });
                return g ? (0, n.jsx)(o(296060).A, {
                    title: m,
                    on: t ? t.enabled : !!u && (null == u ? void 0 : u.enabled),
                    focused: !1,
                    onClick: () => i(p),
                    textWrapperStyle: s
                }) : null
            }
            let c = {
                container: {
                    width: o(986939).A.isMobile ? "100%" : 250,
                    paddingBottom: o(986939).A.isMobile ? 16 : 8,
                    paddingInlineStart: o(986939).A.isMobile ? 8 : 4,
                    paddingInlineEnd: o(986939).A.isMobile ? 8 : 4,
                    marginTop: 8
                },
                helpIcon: {
                    marginInlineStart: 6
                },
                disabled: {
                    opacity: .5,
                    pointerEvents: "none"
                },
                menuTitle: {
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "pre"
                },
                style0: {
                    display: "inline"
                },
                style1: {
                    width: 200
                },
                style2: {
                    display: "flex",
                    marginTop: 6,
                    marginInlineEnd: 12,
                    marginBottom: 0,
                    marginInlineStart: 12
                },
                style3: {
                    overflow: "hidden",
                    display: "inline-flex"
                },
                style4: {
                    display: "inline-flex"
                }
            };

            function u(e) {
                let {
                    collectionContextStore: t,
                    property: r,
                    targetCollectionStore: a,
                    temporaryInverseState: l,
                    setTemporaryInverseState: s,
                    mode: u = "edit",
                    onSubmit: p,
                    shouldEnforceTwoWayRelation: g
                } = e, h = (0, o(533992).v3)(), b = (0, o(109939).tz)(), S = (0, o(682985).uB)(void 0, o(510969).A), x = (0, o(682985).K8)(() => S.state.open, [S]), v = (0, o(682985).K8)(() => r ? o(856235).Jq(t, r) : void 0, [t, r]), A = (0, o(682985).K8)(() => t.collectionStore(), [t]), j = (0, o(682985).K8)(() => t.contextTypeFromStoreState, [t]), w = (null == A ? void 0 : A.id) === a.id, M = (0, o(682985).K8)(() => !!(r ? o(856235).D5(t, r, a) : void 0), [t, r, a]), C = (0, o(682985).K8)(() => {
                    if ((null == v ? void 0 : v.type) !== "relation") return "";
                    let e = v.property;
                    if (!e || e === r) return "";
                    let t = a.getRole();
                    if (!t || !o(642157).Tt(t)) return "";
                    let i = a.getSchema()[e];
                    return (null == i ? void 0 : i.name) || ""
                }, [a, r, v]), T = (0, o(682985).K8)(() => (null == v ? void 0 : v.type) === "relation" && v.autoRelate ? v.autoRelate : {
                    enabled: !1
                }, [v]), k = (0, o(682985).K8)(() => !!o(856235).uf(a), [a]), I = (0, o(682985).K8)(() => !!((null == A ? void 0 : A.getDatabaseType()) && r && (null == A ? void 0 : A.isTypedProperty(r))), [A, r]), _ = l ? l.hasInverseRelation : M, P = l ? l.inverseName : C, R = l ? l.autoRelate : T, B = (0, i.useCallback)(() => {
                    r && (0, o(8043).V)({
                        environment: h,
                        collectionStore: t.collectionStore(),
                        collectionViewStore: t.collectionViewStore(),
                        property: r,
                        from: "collectionPage" === j ? "page_properties" : "view_settings",
                        action: _ ? "relation_toggle_inverse_off" : "relation_toggle_inverse_on",
                        is_self_relation: w
                    })
                }, [r, t, h, j, w, _]), D = (0, i.useCallback)(() => null != A && A.isSyncedCollection() ? R : _ ? {
                    enabled: !1
                } : R, [A, R, _]), O = (0, i.useCallback)(() => {
                    s({
                        hasInverseRelation: !0,
                        inverseName: P,
                        autoRelate: D()
                    }), B()
                }, [s, P, B, D]), V = (0, i.useCallback)(() => {
                    s({
                        hasInverseRelation: !1,
                        inverseName: void 0,
                        autoRelate: D()
                    }), B()
                }, [s, B, D]), F = !!(!k || I || g), K = (0, i.useCallback)(e => {
                    s({
                        hasInverseRelation: !0,
                        inverseName: e.target.value,
                        autoRelate: R
                    })
                }, [s, R]), W = (0, i.useCallback)(e => {
                    let i = null != R && R.enabled ? {
                        enabled: !1
                    } : {
                        enabled: !0,
                        bot_id: e
                    };
                    s({
                        hasInverseRelation: _,
                        inverseName: P,
                        autoRelate: i
                    }), r && (0, o(8043).V)({
                        environment: h,
                        collectionStore: t.collectionStore(),
                        collectionViewStore: t.collectionViewStore(),
                        property: r,
                        from: "collectionPage" === j ? "page_properties" : "view_settings",
                        action: i.enabled ? "auto_relation_toggle_on" : "auto_relation_toggle_off"
                    })
                }, [r, s, t, j, P, _, R, h]), N = (0, o(682985).uB)(void 0, o(235146).A), z = (0, o(536601).useCollectionNameOrDefault)(a), E = (0, i.useMemo)(() => !k || I ? b.formatMessage(y.errors.cannotEditTargetDatabase, {
                    databaseName: z
                }) : w ? b.formatMessage(y.tooltips.selfRelationInverseTooltip) : b.formatMessage(y.tooltips.inverseRelationTooltip, {
                    databaseName: (0, n.jsx)(o(627918).A, {
                        shouldWrap: !0,
                        style: c.style0,
                        store: a
                    })
                }), [k, I, b, w, a, z]), U = (0, i.useMemo)(() => o(986939).A.isMobile ? (0, n.jsx)("div", {
                    style: c.menuTitle,
                    children: b.formatMessage(y.generic.title)
                }) : (0, n.jsx)(o(51831).m, {
                    placement: "bottom",
                    alignment: "center",
                    textWrap: !0,
                    style: c.style1,
                    store: N,
                    content: () => E,
                    children: e => (0, n.jsxs)("div", { ...e,
                        style: c.menuTitle,
                        children: [b.formatMessage(y.generic.title), (0, n.jsx)("div", {
                            style: c.helpIcon,
                            children: (0, n.jsx)(o(16275).I, {
                                icon: o(211052).questionMarkCircleSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })]
                    })
                }), [b, E, N]);
                return A ? (0, n.jsxs)(n.Fragment, {
                    children: ["create" === u ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(m, {
                            currentInverseState: _,
                            disableInverseRelation: V,
                            enableInverseRelation: O,
                            handleAutoRelateToggle: W,
                            temporaryInverseState: l,
                            collectionStore: A,
                            targetCollectionStore: a,
                            isTwoWayToggleDisabled: F,
                            isNameDisabled: F,
                            menuTitle: U,
                            autoRelate: T,
                            isSelfRelation: w,
                            inverseRelationName: C,
                            handleInverseNameChange: K
                        }), (0, n.jsx)(o(912946).A, {
                            colorPalette: "blue",
                            style: c.style2,
                            onClick: p,
                            children: b.formatMessage(y.create.addRelation)
                        })]
                    }) : void 0, "edit" === u ? (0, n.jsx)(o(785267).A, {
                        focused: !1,
                        disabled: F,
                        popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                        alignmentToOrigin: "end",
                        placementToOrigin: "bottom",
                        isFullWidthOnMobile: !0,
                        buttonPopupStore: S,
                        onClose: p,
                        content: e => (0, n.jsxs)("div", {
                            style: c.container,
                            children: [(0, n.jsx)(o(296060).A, {
                                textWrapperStyle: c.style3,
                                focused: !1,
                                disabled: F,
                                on: _,
                                title: b.formatMessage(y.edit.enable),
                                titleStyle: c.style4,
                                onClick: e => {
                                    _ ? V() : O()
                                }
                            }), (0, n.jsxs)("div", {
                                style: _ ? void 0 : c.disabled,
                                children: [(0, n.jsx)(d, {
                                    handleAutoRelateToggle: W,
                                    temporaryAutoRelateState: null == l ? void 0 : l.autoRelate,
                                    collectionStore: A,
                                    autoRelate: T,
                                    targetCollectionStore: a
                                }), (0, n.jsx)(f, {
                                    collectionStore: A,
                                    targetCollectionStore: a,
                                    isSelfRelation: w,
                                    temporaryInverseState: l,
                                    inverseRelationName: C,
                                    disabled: F,
                                    onChange: K,
                                    title: (0, n.jsx)(o(324489).V, {
                                        isSecondaryColor: !0,
                                        isSmall: !0,
                                        children: b.formatMessage(y.edit.propertyNameLabel)
                                    })
                                })]
                            })]
                        }),
                        children: e => (0, n.jsx)(o(209572).A, { ...e,
                            showChevron: !0,
                            rotateChevron: x,
                            title: U,
                            disabled: F,
                            right: _ ? b.formatMessage(y.generic.on) : b.formatMessage(y.generic.off)
                        })
                    }) : void 0]
                }) : null
            }
            let p = {
                    overflow: "hidden",
                    display: "inline-flex"
                },
                g = {
                    display: "inline-flex"
                };

            function m(e) {
                let {
                    currentInverseState: t,
                    disableInverseRelation: i,
                    enableInverseRelation: r,
                    handleAutoRelateToggle: a,
                    temporaryInverseState: l,
                    collectionStore: s,
                    targetCollectionStore: c,
                    isTwoWayToggleDisabled: u,
                    isNameDisabled: m,
                    menuTitle: h,
                    autoRelate: b,
                    isSelfRelation: S,
                    inverseRelationName: x,
                    handleInverseNameChange: v
                } = e, A = (0, o(109939).tz)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o(296060).A, {
                        icon: (0, n.jsx)(o(16275).I, {
                            icon: o(290884).l
                        }),
                        textWrapperStyle: p,
                        focused: !1,
                        on: t,
                        disabled: u,
                        title: h,
                        titleStyle: g,
                        onClick: () => {
                            t ? i() : r()
                        }
                    }), t ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(d, {
                            handleAutoRelateToggle: a,
                            temporaryAutoRelateState: null == l ? void 0 : l.autoRelate,
                            collectionStore: s,
                            autoRelate: b,
                            targetCollectionStore: c
                        }), (0, n.jsx)(f, {
                            collectionStore: s,
                            targetCollectionStore: c,
                            isSelfRelation: S,
                            temporaryInverseState: l,
                            inverseRelationName: x,
                            disabled: m,
                            onChange: v,
                            title: (0, n.jsx)(o(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                children: S ? A.formatMessage(y.create.selfRelationPropertyNameHeader) : A.formatMessage(y.create.relationPropertyNameHeader)
                            })
                        })]
                    }) : void 0]
                })
            }

            function f(e) {
                let {
                    collectionStore: t,
                    targetCollectionStore: i,
                    isSelfRelation: r,
                    temporaryInverseState: a,
                    inverseRelationName: l,
                    disabled: s,
                    onChange: d,
                    title: c
                } = e, u = (0, o(109939).tz)(), p = (0, o(682985).K8)(() => null != t && t.isDefined() ? o(856235).zF(u, {
                    sourceCollection: t.getModel(),
                    isSelfRelation: r,
                    targetCollectionStore: i,
                    createUnique: !0
                }) : u.formatMessage(y.placeholders.relatedToTarget), [t, u, r, i]);
                return (0, n.jsx)(o(844565).A, {
                    title: c,
                    noTextOverflow: !0,
                    children: (0, n.jsx)(o(310324).Ay, {
                        value: (null == a ? void 0 : a.inverseName) || l,
                        placeholder: p,
                        onChange: d,
                        onBlur: o(763230).D_,
                        onSubmit: o(763230).D_,
                        focusInitial: !0,
                        selectAll: !1,
                        disabled: s
                    })
                })
            }
            let y = {
                generic: (0, o(109939).YK)({
                    on: {
                        id: "database.viewSettings.setupRelationTab.generic.on",
                        defaultMessage: "On"
                    },
                    off: {
                        id: "database.viewSettings.setupRelationTab.generic.off",
                        defaultMessage: "Off"
                    },
                    title: {
                        id: "database.viewSettings.setupRelationTab.generic.title",
                        defaultMessage: "Two-way relation"
                    }
                }),
                create: (0, o(109939).YK)({
                    addRelation: {
                        id: "database.viewSettings.setupRelationTab.create.relation.add",
                        defaultMessage: "Add relation"
                    },
                    addRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.create.relation.inverse.add",
                        defaultMessage: "Show on {databaseName}"
                    },
                    addSelfRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.addSelfRelationInverse",
                        defaultMessage: "Separate directions {icon}"
                    },
                    relationPropertyNameHeader: {
                        id: "database.viewSettings.setupRelationTab.create.relation.inverse.propertyNameHeader",
                        defaultMessage: "Related property name"
                    },
                    selfRelationPropertyNameHeader: {
                        id: "database.viewSettings.setupRelationTab.create.selfRelation.inverse.propertyNameHeader",
                        defaultMessage: "Inverse related property name"
                    }
                }),
                edit: (0, o(109939).YK)({
                    modalTitle: {
                        id: "database.viewSettings.setupRelationTab.edit.relation.inverse.modalTitle",
                        defaultMessage: "Related property settings"
                    },
                    enable: {
                        id: "database.viewSettings.setupRelationTab.edit.relation.inverse.enable",
                        defaultMessage: "Enable"
                    },
                    propertyNameLabel: {
                        id: "database.viewSettings.setupRelationTab.edit.relation.inverse.propertyNameLabel",
                        defaultMessage: "Related property name"
                    },
                    addRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.relation.inverse.add",
                        defaultMessage: "Show on {databaseName}"
                    },
                    editRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.relation.inverse.edit",
                        defaultMessage: "Edit relation on {databaseName}"
                    },
                    saveRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.relation.inverse.save",
                        defaultMessage: "Save"
                    },
                    removeRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.relation.inverse.remove",
                        defaultMessage: "Remove property"
                    },
                    addSelfRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.selfRelation.inverse.add",
                        defaultMessage: "Add inverse property"
                    },
                    editSelfRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.selfRelation.inverse.edit",
                        defaultMessage: "Edit inverse property"
                    },
                    renameSelfRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.selfRelation.inverse.rename",
                        defaultMessage: "Rename"
                    },
                    saveSelfRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.selfRelation.inverse.save",
                        defaultMessage: "Save"
                    },
                    removeSelfRelationInverse: {
                        id: "database.viewSettings.setupRelationTab.edit.selfRelation.inverse.remove",
                        defaultMessage: "Remove property"
                    }
                }),
                tooltips: (0, o(109939).YK)({
                    inverseRelationTooltip: {
                        id: "database.viewSettings.setupRelationTab.relation.inverse.tooltip",
                        defaultMessage: "Manage property on {databaseName} showing backlinks to the current database"
                    },
                    selfRelationInverseTooltip: {
                        id: "database.viewSettings.setupRelationTab.selfRelation.inverse.tooltip",
                        defaultMessage: "Manage separate properties for each direction of a two-way relation. Useful for modeling Parent task/Sub-tasks, Blocked by/Blocking, and more."
                    },
                    disabledTwoWayRelationTooltip: {
                        id: "database.viewSettings.setupRelationTab.relation.inverse.disabled.tooltip",
                        defaultMessage: "Two-way relations cannot be enabled when share settings are inherited through this relation."
                    }
                }),
                errors: (0, o(109939).YK)({
                    cannotEditTargetDatabase: {
                        id: "database.viewSettings.setupRelationTab.inverseDisabledWarning.title",
                        defaultMessage: "Cannot edit {databaseName}."
                    }
                }),
                placeholders: (0, o(109939).YK)({
                    relatedToTarget: {
                        id: "database.viewSettings.setupRelationTab.relation.inverse.placeholder",
                        defaultMessage: "Related to target"
                    }
                })
            }
        },
        876339: (e, t, o) => {
            o.d(t, {
                C: () => n
            }), o(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.12 2.37 19.76 15.26",
                    svg: (0, o(474848).jsx)("path", {
                        d: "m3.625 8.849 1.187 1.187a.625.625 0 1 0 .884-.884L3.442 6.898a.625.625 0 0 0-.884 0L.304 9.152a.625.625 0 0 0 .884.884l1.187-1.187V10a7.625 7.625 0 0 0 12.813 5.588.625.625 0 1 0-.85-.916A6.375 6.375 0 0 1 3.625 10zm14 2.302 1.187-1.187a.625.625 0 0 1 .884.884l-2.254 2.254a.625.625 0 0 1-.884 0l-2.254-2.254a.625.625 0 1 1 .884-.884l1.187 1.187V10A6.375 6.375 0 0 0 5.662 5.328a.625.625 0 1 1-.85-.916A7.625 7.625 0 0 1 17.625 10z"
                    })
                },
                n = (0, o(104509).wt)("arrowCircleLoopForward", i, "default")
        },
        877349: (e, t, o) => {
            o.d(t, {
                A: () => a
            });
            var i = o(296540),
                n = o(474848);
            let r = {
                    minWidth: "auto"
                },
                a = i.memo(function({
                    setAiInference: e,
                    aiInference: t,
                    disabled: a
                }) {
                    let l = (0, i.useRef)(o(92513).JW()),
                        s = () => {
                            t && e({ ...t,
                                add_options: !t.add_options
                            })
                        };
                    return (0, n.jsx)(o(51831).m, {
                        content: () => (0, n.jsx)(o(109939).sA, {
                            id: "collectionSettingsAiAutofillAddOptionsToggle.title.description",
                            defaultMessage: "New options are created based on property name & page details"
                        }),
                        placement: "bottom",
                        children: e => (0, n.jsx)(o(209572).A, {
                            title: (0, n.jsx)(o(109939).sA, {
                                id: "collectionSettingsAiAutofillAddOptionsToggle.title.text",
                                defaultMessage: "Generate new options"
                            }),
                            showChevron: !1,
                            right: (0, n.jsx)(o(354491).d, {
                                inputId: l.current,
                                on: !!(null == t ? void 0 : t.add_options),
                                onClick: s,
                                disabled: !1
                            }),
                            onClick: s,
                            disabled: !!a,
                            textWrapperStyle: r,
                            ...e
                        })
                    })
                })
        },
        885515: (e, t, o) => {
            o.d(t, {
                F: () => r
            }), o(296540);
            var i = o(474848);
            let n = (0, o(109939).YK)({
                liteModeBadge: {
                    defaultMessage: "Autofill",
                    id: "databaseAgents.liteModeBadge"
                },
                agentBadge: {
                    defaultMessage: "Custom Agent",
                    id: "databaseAgents.liteModeBadge.agent"
                }
            });

            function r(e) {
                return (0, o(83208).X)("database_agent_rebrand") ? e.isLite ? null : (0, i.jsx)(o(746434).E, {
                    content: (0, i.jsx)(o(109939).sA, { ...n.agentBadge
                    }),
                    color: "blue"
                }) : e.isLite ? (0, i.jsx)(o(746434).E, {
                    content: (0, i.jsx)(o(109939).sA, { ...n.liteModeBadge
                    }),
                    color: "gray"
                }) : null
            }
        },
        898378: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => i,
                notionTintableIcon: () => n
            }), o(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                n = (0, o(104509).wt)("notionTintable", i, "tintable")
        },
        933267: (e, t, o) => {
            o.d(t, {
                q: () => i
            });

            function i(e, t) {
                let i = t ? ? window.location.href,
                    n = (0, o(132702).parseRoute)({
                        url: i,
                        baseUrl: o(986939).A.domainBaseUrl,
                        publicDomainName: o(986939).A.publicDomainName,
                        isMobile: o(986939).A.isMobile,
                        protocol: o(986939).A.protocol,
                        currentUrl: i,
                        requestedOnAlternateDomain: (0, o(700473).wasRequestedOnAlternateDomain)()
                    });
                if ("agent" !== n.name) return e;
                let r = (0, o(132702).parseRoute)({
                    url: e,
                    baseUrl: o(986939).A.domainBaseUrl,
                    publicDomainName: o(986939).A.publicDomainName,
                    isMobile: o(986939).A.isMobile,
                    protocol: o(986939).A.protocol,
                    currentUrl: i,
                    requestedOnAlternateDomain: (0, o(700473).wasRequestedOnAlternateDomain)()
                });
                if ("external" === r.name || "page" !== r.name || o(758654).qg(e).query[o(737869).ZI]) return e;
                let a = r.blockId;
                return a ? (0, o(453573).Lm)({
                    workflowId: n.workflowId,
                    params: {
                        workflowViewType: n.workflowViewType,
                        workflowViewId: n.workflowViewId,
                        workflowPrompt: n.workflowPrompt,
                        chatThreadId: n.chatThreadId,
                        agentChatThreadId: n.agentChatThreadId
                    },
                    peekViewBlockId: a,
                    peekModeParam: (0, o(475097).getUrlParamFromPeekMode)(o(387722).A),
                    scrollToBlockId: r.scrollToBlockId,
                    pageVisitSource: void 0,
                    isMobile: o(986939).A.isMobile
                }) : e
            }
        },
        972323: (e, t, o) => {
            o.d(t, {
                Ay: () => c,
                GI: () => a,
                Ve: () => m,
                am: () => l,
                jD: () => p
            });
            var i = o(296540),
                n = o(474848);
            let r = {
                style0: {
                    color: "white",
                    fontWeight: o(699422).Wy.medium,
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap"
                },
                style1: {
                    color: "#ACABA9",
                    fontWeight: o(699422).Wy.medium
                }
            };

            function a({
                autofillFeatureAvailability: e
            }) {
                let t = (0, n.jsx)(o(109939).sA, { ...o(447281).fillAllPagesMessages.fillAllPagesAddAiMessage
                });
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("div", {
                        style: r.style0,
                        children: (0, n.jsx)(o(109939).sA, { ...o(447281).fillAllPagesMessages.fillAllPagesTooltip
                        })
                    }), (0, o(94418).e2)(e) ? void 0 : (0, n.jsx)("div", {
                        style: r.style1,
                        children: t
                    })]
                })
            }

            function l({
                updateAiInferencesTaskStatus: e,
                iconStyle: t,
                progressIconStyle: i
            }) {
                return (0, o(998857)._)({
                    taskRunningState: e
                }) ? (0, n.jsx)("div", {
                    style: i,
                    children: (0, n.jsx)(o(118845).A, {
                        colorPalette: "purple"
                    })
                }) : (0, n.jsx)(o(4458).fI, {
                    alignItems: "center",
                    height: "100%",
                    children: (0, n.jsx)(o(16275).I, {
                        icon: o(312528).x,
                        style: t
                    })
                })
            }
            let s = {
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden"
                },
                d = {
                    fontSize: "12px"
                };

            function c({
                updateAiInferencesTaskStatus: e
            }) {
                let t = (0, o(109939).tz)(),
                    r = (0, o(83208).X)("autofill_all_pages_use_new_endpoint"),
                    a = (0, i.useMemo)(() => r ? (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Autofill this view",
                        id: "aiAutofill.fillAllPagesInView.buttonTitle"
                    }) : (0, n.jsx)(o(109939).sA, {
                        defaultMessage: "Autofill all pages",
                        id: "aiAutofill.fillAllPages.buttonTitle"
                    }), [r]),
                    l = (0, i.useMemo)(() => {
                        switch (e.status) {
                            case "requested":
                                return (0, n.jsx)(o(109939).sA, {
                                    defaultMessage: "Requested Autofill",
                                    id: "AiAutofill.fillAllPages.requested"
                                });
                            case "notRunning":
                            case "error":
                                return a;
                            case "running":
                                let i = 0 !== e.lastEditedTime && Date.now() - e.lastEditedTime > 36e5;
                                if (e.numPagesFilled >= e.numPagesRequested || i) return a;
                                return (0, n.jsxs)(o(4458).VP, {
                                    alignItems: "flex-start",
                                    width: "100%",
                                    gap: 4,
                                    children: [(0, n.jsx)(o(109939).sA, {
                                        defaultMessage: "{numPagesRequested, plural, one {Autofilling {numPagesFilled} of {numPagesRequested} page} other {Updating {numPagesFilled} of {numPagesRequested} pages}}",
                                        id: "aiAutofill.fillallPages.updatingAllPagesWithProgress",
                                        values: {
                                            numPagesFilled: (0, o(700369).ZV)(e.numPagesFilled, "compact", t),
                                            numPagesRequested: (0, o(700369).ZV)(e.numPagesRequested, "compact", t)
                                        }
                                    }), 0 !== e.lastEditedTime ? (0, n.jsx)("div", {
                                        style: d,
                                        children: (0, n.jsx)(o(109939).sA, {
                                            defaultMessage: "Last edited: {lastEditedTime}",
                                            id: "aiAutofill.fillallPages.lastEditedTime",
                                            values: {
                                                lastEditedTime: (0, o(850640).W_)(e.lastEditedTime, "month_day_time", t.locale)
                                            }
                                        })
                                    }) : void 0]
                                });
                            default:
                                (0, o(722371).HB)(e)
                        }
                    }, [a, t, e]);
                return (0, n.jsx)("div", {
                    style: s,
                    children: l
                })
            }
            let u = {
                inner: {
                    background: o(632079).Tj.palette.purple[400],
                    height: "100%",
                    transition: "width .5s"
                },
                outer: {
                    background: o(632079).Tj.palette.gray[100],
                    height: 3,
                    borderRadius: 2,
                    minWidth: 120,
                    overflow: "hidden",
                    marginTop: 8
                }
            };

            function p({
                updateAiInferencesTaskStatus: e
            }) {
                switch (e.status) {
                    case "notRunning":
                    case "requested":
                    case "error":
                        return null;
                    case "running":
                        break;
                    default:
                        (0, o(722371).HB)(e)
                }
                let {
                    numPagesFilled: t,
                    numPagesRequested: i
                } = e;
                return 0 === i || t === i ? null : (0, n.jsx)("div", {
                    style: u.outer,
                    role: "progressbar",
                    children: (0, n.jsx)("div", {
                        style: { ...u.inner,
                            width: `${100*Math.min(t/i,1)}%`
                        }
                    })
                })
            }
            let g = {
                style0: {
                    width: o(104509).Ev.sm,
                    marginTop: 4,
                    marginInlineStart: 4,
                    marginInlineEnd: 2
                }
            };

            function m(e) {
                let {
                    environment: t,
                    collectionContextStore: r,
                    property: s,
                    propertySchema: d,
                    autofillFeatureAvailability: u,
                    isAutofillSetupEnabled: m
                } = e, f = !(0, o(682985).O$)(o(205885).e), y = (0, o(682985).K8)(() => {
                    let e = r.collectionStore();
                    return e ? (0, o(565546).Ts)(e.getFormat(), s) : {
                        status: "notRunning"
                    }
                }, [r, s]), h = (0, i.useCallback)(async e => {
                    let i = r.collectionStore(),
                        n = r.collectionViewStore();
                    if (i && d && n) {
                        if (!(0, o(94418).e2)(e)) return void o(447281).triggerAiAutofillUpsell({
                            environment: t,
                            from: "ai_autofill_fill_all_pages",
                            upsell: e.upsell,
                            store: i
                        });
                        await o(447281).autofillPropertyForCollection({
                            environment: t,
                            collectionStore: i,
                            propertySchema: d,
                            property: s,
                            collectionViewStore: n
                        })
                    }
                }, [t, d, s, r]), b = (0, o(998857)._)({
                    taskRunningState: y
                });
                return (0, n.jsx)(o(51831).m, {
                    disableTooltip: (0, o(94418).e2)(u),
                    content: () => f ? (0, n.jsx)(o(109939).sA, { ...o(233319).AY.aiUnavailableOfflineTooltip
                    }) : (0, n.jsx)(a, {
                        autofillFeatureAvailability: u
                    }),
                    children: e => (0, n.jsx)(o(209572).A, {
                        icon: e => (0, n.jsx)(l, {
                            updateAiInferencesTaskStatus: y,
                            iconStyle: e,
                            progressIconStyle: g.style0
                        }),
                        title: (0, n.jsx)(c, {
                            updateAiInferencesTaskStatus: y
                        }),
                        caption: b && "requested" !== y.status && (0, n.jsx)(p, {
                            updateAiInferencesTaskStatus: y
                        }),
                        focused: !1,
                        onClick: () => h(u),
                        disabled: b || !m || f,
                        ...e
                    })
                })
            }
        },
        997524: (e, t, o) => {
            o.d(t, {
                lv: () => u,
                C5: () => d,
                u7: () => s,
                uh: () => c
            });
            let i = "theme";

            function n(e, t) {
                var n, r;
                let a, {
                        ThemeStore: l
                    } = e,
                    {
                        mode: d,
                        usingSystemTheme: c
                    } = t;
                if (o(172474)._u) return;
                let u = {
                    mode: d
                };
                l.setState(u), e.mobileNative && e.mobileNative.setTheme(d, c), a = (0, o(632079).O4)({
                    theme: d
                }), n = {
                    mode: d,
                    usingSystemTheme: c,
                    colors: {
                        white: o(632079).oZ.white,
                        blue: a.blue.background.accentPrimary
                    },
                    borderRadius: 4,
                    textColor: a.text.primary,
                    popoverBackgroundColor: a.popoverBackground,
                    popoverBoxShadow: a.shadow.outline.lg,
                    inputBoxShadow: `${a.border.primaryTranslucent} 0 0 0 1px`,
                    inputBackgroundColor: a.background.secondaryTranslucent,
                    dividerColor: a.border.primaryTranslucent,
                    shadowOpacity: 0
                }, null === o(775657).electronApi || void 0 === o(775657).electronApi || null == (r = o(775657).electronApi.setTheme) || r.call(o(775657).electronApi, n);
                try {
                    localStorage.setItem(i, JSON.stringify(u))
                } catch (e) {
                    (0, o(165219).x)({
                        keyId: i,
                        keyValue: JSON.stringify(u),
                        from: "ThemeActions",
                        error: e
                    })
                }
                s(d), "dark" === d ? (document.body.classList.add("dark"), document.body.classList.add("notion-dark-theme")) : (document.body.classList.remove("dark"), document.body.classList.remove("notion-dark-theme"))
            }
            async function r(e) {
                let {
                    mobileNative: t
                } = e, i = "light";
                i = t && t.api.getTheme ? await t.api.getTheme() : (0, o(172474).VD)(e), n(e, {
                    mode: i,
                    usingSystemTheme: !0
                })
            }
            let a = {
                    light: "rgba(0, 0, 0, 0)",
                    dark: "rgba(0, 0, 0, 0)"
                },
                l = {
                    light: "#D3D1CB",
                    dark: "rgba(255, 255, 255, 0.2)"
                };

            function s(e) {
                if (0 === o(190159).A.state) return;
                let t = document.getElementById("scroll-properties");
                t && (t.innerHTML = `
		* {
			scrollbar-width: 15px;
			scrollbar-color: ${l[e]}  ${a[e]};
		}
	`)
            }

            function d(e) {
                o(199162).A.setState(e)
            }

            function c(e) {
                let t = u();
                switch (t) {
                    case "dark":
                    case "light":
                        n(e, {
                            mode: t,
                            usingSystemTheme: !1
                        });
                        break;
                    case "system":
                        r(e);
                        break;
                    default:
                        (0, o(722371).HB)(t)
                }
            }

            function u() {
                var e;
                return "dark" === (e = o(199162).A.state || "system") || "light" === e || "system" === e ? e : "system"
            }
        },
        998857: (e, t, o) => {
            o.d(t, {
                _: () => i
            });

            function i(e) {
                let {
                    taskRunningState: t
                } = e;
                switch (t.status) {
                    case "requested":
                        return !0;
                    case "running":
                        return t.numPagesFilled < t.numPagesRequested;
                    case "error":
                    case "notRunning":
                        return !1;
                    default:
                        (0, o(722371).HB)(t)
                }
            }
        }
    }
]);