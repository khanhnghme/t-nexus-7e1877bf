"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [66200], {
        22148: (e, t, a) => {
            a.d(t, {
                J: () => r
            });

            function r(e) {
                return "form_editor" === e || "form_viewer" === e
            }
        },
        72461: (e, t, a) => {
            a.d(t, {
                Ay: () => i,
                t_: () => l,
                v7: () => s
            }), a(296540);
            var r = a(474848);

            function o(e) {
                let t = (0, a(533992).v3)(),
                    {
                        actor: o,
                        format: i,
                        hasTooltip: l,
                        tooltipHeader: s,
                        hasPersonHoverCard: u,
                        spaceStore: c
                    } = e,
                    d = (0, a(682985).K8)(() => {
                        let e = o.asActor;
                        if (e) return (0, a(478418).J)(t, e)
                    }, [o, t]);
                return (0, r.jsx)(a(376921).Ay, { ...e,
                    renderAvatar: t => {
                        if (!d) return (0, r.jsx)(a(4458).fI, {
                            alignItems: "center",
                            height: t,
                            children: (0, r.jsx)("div", {
                                style: {
                                    height: t / 2,
                                    width: 100,
                                    borderRadius: t / 2,
                                    background: a(632079).Tj.background.tertiaryTranslucent
                                }
                            })
                        });
                        if (d instanceof a(447003).v)
                            if (i === a(696654).NY.Inline) return (0, r.jsx)(a(31319).A, {
                                botStore: d,
                                size: t,
                                style: n
                            });
                            else return (0, r.jsx)(a(59724).A, {
                                botStore: d,
                                avatarSize: t,
                                inline: !0,
                                style: n
                            });
                        if (d instanceof a(807825).L)
                            if (i === a(696654).NY.Inline) return (0, r.jsx)(a(321753).A, {
                                userStore: d,
                                size: t,
                                avatarShouldShowShadow: !1,
                                hasTooltip: l ? ? !0,
                                style: n,
                                tooltipHeader: s,
                                hasPersonHoverCard: u
                            });
                            else return (0, r.jsx)(a(980494).A, {
                                userStore: d,
                                avatarSize: t,
                                inline: !0,
                                hasTooltip: l,
                                hasPersonHoverCard: u,
                                style: n,
                                tooltipHeader: s,
                                spaceStore: c,
                                personHoverCardEntrypoint: u ? e.personHoverCardEntrypoint : void 0
                            });
                        (0, a(722371).HB)(d)
                    }
                })
            }
            let n = {
                minWidth: 0
            };
            o.Format = a(696654).NY;
            let i = o;

            function l(e) {
                let {
                    userValue: t,
                    ...n
                } = e, i = (0, a(197018).MR)(t);
                return (0, r.jsx)(o, {
                    actor: i,
                    ...n
                })
            }

            function s(e) {
                let {
                    botValue: t,
                    ...n
                } = e;
                return (0, r.jsx)(o, {
                    actor: (0, a(197018).oC)(t),
                    hasPersonHoverCard: !1,
                    ...n
                })
            }
            l.Format = a(376921).mI, s.Format = a(376921).mI
        },
        80362: (e, t, a) => {
            a.d(t, {
                E: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.125 4.25c0-.621.504-1.125 1.125-1.125h11.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H4.25A1.125 1.125 0 0 1 3.125 5.75zm1 3.875h11.75v7.625c0 .621-.504 1.125-1.125 1.125h-9.5a1.125 1.125 0 0 1-1.125-1.125zM8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                    })
                },
                o = (0, a(104509).wt)("archiveBoxFill", r, "fill")
        },
        106142: (e, t, a) => {
            a.d(t, {
                r: () => i
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.26",
                    svg: (0, r.jsx)("path", {
                        d: "M10.833 16.321a.626.626 0 0 1 .162 1.24 7.7 7.7 0 0 1-1.99 0 .625.625 0 1 1 .162-1.24 6.4 6.4 0 0 0 1.666 0m-6.768-2.555a.625.625 0 0 1 .876.115c.34.442.736.838 1.178 1.178a.625.625 0 1 1-.762.99 7.7 7.7 0 0 1-1.407-1.406.626.626 0 0 1 .115-.877m10.994.114a.625.625 0 1 1 .99.763 7.7 7.7 0 0 1-1.406 1.407.626.626 0 0 1-.762-.991 6.4 6.4 0 0 0 1.178-1.178m-3.255-6.542a.625.625 0 0 1 1.072.642l-3 5a.626.626 0 0 1-1.01.086l-2-2.334a.625.625 0 0 1 .948-.813l1.436 1.674zM3.14 8.466a.626.626 0 0 1 .539.701 6.4 6.4 0 0 0 0 1.666.626.626 0 0 1-1.24.162 7.7 7.7 0 0 1 0-1.99.625.625 0 0 1 .7-.54m13.721.001a.625.625 0 0 1 .7.539 7.7 7.7 0 0 1 0 1.99.625.625 0 1 1-1.239-.162 6.4 6.4 0 0 0 0-1.666.626.626 0 0 1 .54-.701M5.357 3.95a.626.626 0 0 1 .762.991 6.4 6.4 0 0 0-1.178 1.178.625.625 0 1 1-.99-.762A7.7 7.7 0 0 1 5.356 3.95m8.41.115a.626.626 0 0 1 .877-.115c.528.406 1.001.88 1.407 1.407a.626.626 0 0 1-.991.762 6.4 6.4 0 0 0-1.178-1.178.625.625 0 0 1-.115-.876M10 2.375q.506 0 .995.064a.625.625 0 1 1-.162 1.24 6.4 6.4 0 0 0-1.666 0 .626.626 0 0 1-.162-1.24q.49-.063.995-.064"
                    })
                },
                n = (0, a(104509).wt)("checkmarkCircleDash", o, "default");

            function i(e) {
                let {
                    verificationState: t,
                    fontSize: o = a(642065).Mi
                } = e, i = (0, a(109939).tz)(), l = t.type, s = (0, a(960253).I)(() => ({
                    caption: {
                        fontVariantNumeric: "normal",
                        fontWeight: a(699422).Wy.regular,
                        color: a(632079).Tj.text.primary,
                        textTransform: "none",
                        letterSpacing: 0,
                        marginInlineStart: 6,
                        marginInlineEnd: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: o,
                        lineHeight: a(642065).$g
                    }
                }), [o]);
                if ("none" === l) return null;
                let u = null,
                    c = null,
                    d = s.caption;
                switch (l) {
                    case "verified":
                        u = (0, r.jsx)(a(16275).I, {
                            icon: a(97956).badgeCheckFillIcon,
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            fitToViewBox: "horizontal"
                        }), c = t.isIndefinite ? (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Verified",
                            id: "VerificationPropertyButton.verifiedIndefinitely"
                        }) : (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Until {date}",
                            id: "VerificationPropertyButton.verifiedUntil",
                            values: {
                                date: a(931990).OH({
                                    dateTime: t.dateTimeRange.end,
                                    intl: i
                                })
                            }
                        });
                        break;
                    case "expired":
                        u = (0, r.jsx)(a(16275).I, {
                            icon: n,
                            colorVariant: "secondary",
                            fitToViewBox: "horizontal"
                        }), c = (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Expired {timeFromMoment}",
                            id: "VerificationPropertyButton.expired.text",
                            values: {
                                timeFromMoment: a(435137).F7(t.dateTimeRange.end.setLocale(i.locale))
                            }
                        });
                        break;
                    case "archived":
                        u = (0, r.jsx)(a(16275).I, {
                            icon: a(80362).E,
                            colorVariant: "tertiary",
                            fitToViewBox: "horizontal"
                        }), c = (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Archived",
                            id: "VerificationPropertyButton.archived.text"
                        });
                        break;
                    default:
                        (0, a(722371).HB)(l)
                }
                return (0, r.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    children: [u, (0, r.jsx)("div", {
                        style: d,
                        children: c
                    })]
                })
            }
        },
        157912: (e, t, a) => {
            a.d(t, {
                G$: () => x,
                sK: () => b,
                HZ: () => h,
                A7: () => _,
                pe: () => v,
                lS: () => f,
                s3: () => S,
                VD: () => k,
                GF: () => p,
                Rm: () => M,
                lY: () => w
            }), a(16280), a(898992), a(354520), a(581454);
            var r = a(296540);

            function o() {
                return a(416901).FORMULA_LOADING
            }

            function n(e) {
                let {
                    collectionContextStore: t,
                    blockId: r,
                    propertyId: o,
                    formulasModule: n
                } = e, i = null == t ? void 0 : t.resultSetStore.state.propertyResultCache;
                if (!(0, a(722371).O9)(i)) return;
                let l = n.getFormula2ResultCache({
                    resultCache: i,
                    blockId: r,
                    property: o
                });
                if ((0, a(722371).O9)(l)) return n.formulaValueToCollectionFormulaValue(l)
            }
            a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var i = a(474848);
            let l = [a(944897).uW.MaxEvaluationTimeExceeded, a(944897).uW.DepthExceeded, a(944897).uW.CycleDetected],
                s = {
                    padding: "5px 8px"
                },
                u = {
                    flex: 1,
                    minWidth: 0
                },
                c = r.memo(r.forwardRef(function(e, t) {
                    var c, g;
                    let {
                        store: p,
                        property: m,
                        EmptyComponent: f,
                        collectionStore: y,
                        onContextMenu: h,
                        editButtonClickProps: v,
                        checkboxButtonStyle: _,
                        textButtonStyle: b,
                        quickActionButtons: x,
                        checkboxShowLabel: M,
                        userExpandable: S
                    } = e, {
                        baseStyles: k,
                        propertySchema: A,
                        surface: C,
                        collectionContextStore: P
                    } = (0, r.useContext)(a(422575).L8), T = A && (0, a(537664).F)(A) ? null == A || null == (c = A.formula2) ? void 0 : c.result_type.type : null == A || null == (g = A.formula) ? void 0 : g.result_type, R = !0 === e.numberRightAlign && "number" === (0, a(345091).getFormulaPropertySchemaBaseResultType)(A), [j, B] = function(e) {
                        var t;
                        let s, {
                                store: u,
                                collectionStore: c,
                                property: d,
                                checkboxShowLabel: g,
                                numberRightAlign: p
                            } = e,
                            {
                                propertySchema: m,
                                surface: f,
                                collectionSchemaStore: y
                            } = (0, r.useContext)(a(422575).L8),
                            h = (0, a(533992).v3)(),
                            v = (0, a(682985).O$)(y);
                        if (void 0 !== m && "formula" !== m.type) throw Error(`Expected a formula property schema, got ${m.type}`);
                        let _ = function(e) {
                                let {
                                    blockStore: t,
                                    collectionSchema: r,
                                    propertyId: o,
                                    propertySchema: n
                                } = e, {
                                    value: i
                                } = (0, a(815048).fJ)(a(864850).T.formulas), l = (0, a(941096).C)(), s = (0, a(109939).tz)(), u = (0, a(533992).v3)();
                                return (0, a(682985).K8)(() => {
                                    if (!n || (0, a(537664).F)(n)) return;
                                    if (!i || !r || !t.isDefined()) return a(416901).FORMULA_LOADING;
                                    let e = (0, a(457103).i)(),
                                        c = (0, a(714350).P)(),
                                        [d, g] = (0, a(255560).V)(t, n => i.evaluateFormulaProperty({
                                            block: t.getModel(),
                                            collectionRequestContext: {
                                                collectionFeatureGates: e,
                                                depth: 0,
                                                experimentService: a(218744).default,
                                                formulaTimeoutTimestampMs: Date.now() + l,
                                                intl: s,
                                                regExpCache: new Map,
                                                resultCache: new Map,
                                                formatDateCache: new Map,
                                                userId: void 0,
                                                userTimeZone: c,
                                                visitedProperties: new Set,
                                                getRelationEdgeList: (0, a(323082).Y)({
                                                    environment: u,
                                                    spaceId: t.getSpaceId()
                                                })
                                            },
                                            getRecordModel: n,
                                            property: o,
                                            schema: r,
                                            spaceIdCreator: t.environment.idCreator.getSpaceIdCreatorSync(t.getSpaceId())
                                        }));
                                    return g ? a(416901).FORMULA_LOADING : d
                                }, [n, i, r, t, l, s, u, o], {
                                    debugName: `legacyFormulaEvaluation${t.id}`
                                })
                            }({
                                blockStore: u,
                                collectionSchema: v,
                                propertyId: d,
                                propertySchema: m
                            }),
                            b = (s = function(e) {
                                let {
                                    blockStore: t,
                                    collectionStore: r,
                                    propertyId: i,
                                    environment: l
                                } = e, {
                                    value: s
                                } = (0, a(815048).fJ)(a(864850).T.formulas), u = (0, a(941096).C)(), c = (0, a(109939).tz)(), d = (0, a(713311).Ks)(), [g, p] = (0, a(682985).K8)(() => {
                                    var e;
                                    return [t.getModel(), null == (e = r.getModel()) ? void 0 : e.getVersion()]
                                }, [t, r]);
                                if (!s) return o;
                                if ((0, a(722371).O9)(p) && (0, a(722371).O9)(g)) {
                                    let e = s.getFormula2Thunk({
                                        blockModel: g,
                                        collectionVersion: p,
                                        propertyId: i
                                    });
                                    if (e) return e
                                }
                                let m = new(a(345426)).ComputedStore(() => {
                                        var e;
                                        let o = r.getSchema(),
                                            g = null == o ? void 0 : o[i];
                                        if (!g || "formula" !== g.type || !(0, a(537664).F)(g)) return;
                                        let p = null == (e = g.formula2) ? void 0 : e.code;
                                        if (!p) return {
                                            value: {
                                                type: "undefined"
                                            }
                                        };
                                        if (!t.isDefined()) return a(416901).FORMULA_LOADING;
                                        let m = t.getModel(),
                                            f = a(686494).A.state.publicPageData,
                                            [y, h] = (0, a(255560).V)(t, e => s.evaluateCollectionFormula2WithoutCache({
                                                block: m,
                                                collectionFeatureGates: (0, a(457103).i)(),
                                                depth: 0,
                                                formulaCode: p,
                                                formulaTimeoutTimestampMs: Date.now() + u,
                                                getRecordModel: e,
                                                intl: c,
                                                property: i,
                                                experimentService: a(218744).default,
                                                publicPageDataCollection: {
                                                    id: null == f ? void 0 : f.collectionId,
                                                    schema: null == f ? void 0 : f.collectionSchema
                                                },
                                                regExpCache: new Map,
                                                resultCache: new Map,
                                                formatDateCache: new Map,
                                                userTimeZone: (0, a(714350).P)(),
                                                visitedProperties: new Set,
                                                spaceIdCreator: l.idCreator.getSpaceIdCreatorSync(m.space_id)
                                            }));
                                        if (h) {
                                            let e = n({
                                                collectionContextStore: d,
                                                blockId: t.id,
                                                propertyId: i,
                                                formulasModule: s
                                            });
                                            return e ? {
                                                value: e
                                            } : a(416901).FORMULA_LOADING
                                        }
                                        return (0, a(722371).O9)(y) ? a(300441).Q.isFail(y) ? {
                                            type: y.error.type,
                                            error: y.error
                                        } : {
                                            value: y.value
                                        } : {
                                            error: {
                                                type: a(944897).uW.UnexpectedError,
                                                error: (0, a(161179).A)(void 0)
                                            }
                                        }
                                    }, {
                                        debugName: `formula2Evaluation${t.id}`,
                                        equalityFn: a(381453).n4
                                    }),
                                    f = () => m.getState();
                                return (0, a(722371).O9)(p) && (0, a(722371).O9)(g) && s.setFormula2Thunk({
                                    blockModel: g,
                                    collectionVersion: p,
                                    propertyId: i,
                                    thunkCallback: f
                                }), f
                            }(t = {
                                blockStore: u,
                                collectionStore: c,
                                propertyId: d,
                                environment: h
                            }), (0, a(682985).K8)(() => {
                                if (!a(430937).Pe && s) return s()
                            }, [s], {
                                debugName: `formula2Evaluation${t.blockStore.id}`,
                                equalityFn: a(381453).n4
                            })),
                            x = function(e) {
                                let {
                                    blockStore: t,
                                    formula2Result: r,
                                    legacyFormulaResult: o,
                                    propertySchema: n
                                } = e, i = (0, a(83208).X)("show_all_formula_errors_in_db_views");
                                return (0, a(682985).K8)(() => {
                                    var e, s, u;
                                    if (!n) return [
                                        [], "empty"
                                    ];
                                    if (!(0, a(537664).F)(n)) return o ? o === a(416901).FORMULA_LOADING ? [
                                        [], "loading"
                                    ] : [w(o), (null == (s = n.formula) ? void 0 : s.result_type) ? ? "text"] : [
                                        [], "empty"
                                    ];
                                    if (void 0 === r) return [
                                        [], "empty"
                                    ];
                                    if (r === a(416901).FORMULA_LOADING) return [
                                        [], "loading"
                                    ];
                                    else if (a(300441).Q.isFail(r)) return (u = r.error, !("offset" in u) && (i || l.includes(u.type) || 0)) ? [
                                        [{
                                            id: "error",
                                            type: "error",
                                            value: r.error
                                        }], "error"
                                    ] : [
                                        [], "formula"
                                    ];
                                    else if (a(300441).Q.isSuccess(r)) {
                                        let o = (0, a(352711).O)(r.value, t.getRecordModel, (0, a(714350).P)());
                                        return [o, (null == (e = o[0]) ? void 0 : e.type) ? ? "text"]
                                    } else(0, a(722371).HB)(r)
                                }, [t, r, o, n, i])
                            }({
                                blockStore: u,
                                formula2Result: b,
                                legacyFormulaResult: _,
                                propertySchema: m
                            }),
                            M = "loading" === x[1];
                        return [function(e) {
                            let {
                                blockStore: t,
                                checkboxShowLabel: o,
                                surface: n,
                                formulaTokenData: l,
                                numberRightAlign: s,
                                propertyId: u,
                                propertySchema: c
                            } = e, d = (0, a(713311).Ks)(), g = (0, a(682985).K8)(() => (0, a(940270).yQ)({
                                viewType: null == d ? void 0 : d.getViewType(),
                                propertySchema: c
                            }), [d, c]);
                            return (0, r.useMemo)(() => {
                                let [e, r] = l;
                                if ("loading" === r) return (0, i.jsx)(a(540970).q, {
                                    isRightAligned: s
                                });
                                if (0 === e.length) return null;
                                let d = o && "checkbox" === (0, a(345091).getFormulaPropertySchemaResultType)(c) && 1 === e.length ? null == c ? void 0 : c.name : void 0,
                                    p = !!c && (0, a(531070).GL)(r, c),
                                    m = 1 === e.length;
                                return c && (0, i.jsx)(a(531070).Ye, {
                                    propertyType: r,
                                    rootPropertySchema: c,
                                    numberRightAlign: s,
                                    store: t,
                                    property_id: u,
                                    children: e.map((r, o) => (0, i.jsx)(a(531070).yZ, {
                                        token: r,
                                        targetPropertySchema: c,
                                        blockStore: t,
                                        checkboxPropertyLabel: d,
                                        withComma: p && o < e.length - 1,
                                        numberRightAlign: s,
                                        shouldTruncate: m && "compact_page" === n,
                                        fullWidthBar: g
                                    }, `${r.id}-${o}`))
                                })
                            }, [l, o, c, s, t, u, n, g])
                        }({
                            blockStore: u,
                            checkboxShowLabel: g,
                            surface: f,
                            formulaTokenData: x,
                            numberRightAlign: p,
                            propertyId: d,
                            propertySchema: m
                        }), M]
                    }({
                        checkboxShowLabel: !!M,
                        collectionStore: y,
                        numberRightAlign: !!R,
                        property: m,
                        store: p
                    });
                    ! function(e) {
                        let {
                            pageId: t,
                            propertyId: o,
                            isLoading: i
                        } = e, {
                            collectionContextStore: l
                        } = (0, r.useContext)(a(422575).L8);
                        (0, a(383953).w)(() => {
                            var e;
                            null == l || null == (e = l.propertyResultDurationTracker) || e.trackMount({
                                pageId: t,
                                propertyId: o,
                                propertyType: "formula"
                            })
                        }), (0, r.useEffect)(() => {
                            if (!i) {
                                let e = performance.now();
                                !async function() {
                                    var r;
                                    let i = await a(864850).T.formulas.load();
                                    null == l || null == (r = l.propertyResultDurationTracker) || r.trackResult({
                                        pageId: t,
                                        propertyId: o,
                                        propertyType: "formula",
                                        endTime: e,
                                        context: {
                                            formula_property_cache_result_available: (0, a(722371).O9)(n({
                                                collectionContextStore: l,
                                                blockId: t,
                                                propertyId: o,
                                                formulasModule: i
                                            }))
                                        }
                                    })
                                }()
                            }
                        }, [l, i, t, o])
                    }({
                        pageId: p.id,
                        propertyId: m,
                        isLoading: B
                    });
                    let I = (0, a(682985).K8)(() => (0, a(940270).yQ)({
                            viewType: null == P ? void 0 : P.getViewType(),
                            propertySchema: A
                        }), [P, A]),
                        F = (0, a(960253).I)(() => ({
                            buttonStyle: { ...k.buttonStyle,
                                ..."checkbox" === T ? _ : {},
                                ..."number" === T || "date" === T || "text" === T ? b : {},
                                ...I ? {
                                    width: "inherit"
                                } : {}
                            },
                            buttonPressedStyle: k.buttonPressedStyle ? ? {},
                            buttonHoveredStyle: k.buttonHoveredStyle ? ? {}
                        }), [k.buttonHoveredStyle, k.buttonPressedStyle, k.buttonStyle, _, T, b, I]),
                        N = (0, a(601264).s)({
                            propertyId: m,
                            store: p
                        }),
                        V = null === j,
                        L = (0, r.useMemo)(() => !V && (0, a(793550).Lo)(T), [V, T]);
                    return a(430937).Pe ? (0, i.jsx)("div", {
                        style: s,
                        children: (0, i.jsx)(a(361724).C, {
                            fontColor: "light",
                            children: (0, i.jsx)(a(109939).sA, {
                                defaultMessage: "Disabled",
                                id: "database.pageProperty.disableFormulas"
                            })
                        })
                    }) : V && void 0 === f ? null : (0, i.jsxs)(a(858439).P, {
                        ref: t,
                        className: N,
                        onContextMenu: h,
                        editButtonClickProps: v,
                        style: F.buttonStyle,
                        pressedStyle: F.buttonPressedStyle,
                        hoveredStyle: F.buttonHoveredStyle,
                        quickActionButtons: !B && x ? (0, i.jsx)(d, {
                            buttons: x,
                            store: p,
                            collectionStore: y,
                            property: m,
                            surface: C,
                            isEmpty: V,
                            isCopyable: L
                        }) : void 0,
                        quickActionButtonsAlign: R ? "left" : void 0,
                        userExpandable: S,
                        children: [V && f ? (0, i.jsx)(f, {}) : void 0, V ? void 0 : (0, i.jsx)(a(4458).fI, {
                            alignItems: "center",
                            width: "100%",
                            children: (0, i.jsx)("div", {
                                style: u,
                                children: j
                            })
                        })]
                    })
                }));

            function d(e) {
                let {
                    buttons: t,
                    store: r,
                    property: o,
                    surface: n,
                    isEmpty: l,
                    isCopyable: s
                } = e;
                if (l) return null;
                let u = t.map(e => {
                    switch (e) {
                        case "copy":
                            return s ? (0, i.jsx)(a(965192).i, {
                                store: r,
                                property: o,
                                surface: n
                            }, "copy") : null;
                        case "comment":
                            return (0, i.jsx)(a(243904).k, {}, "comment");
                        default:
                            (0, a(722371).HB)(e)
                    }
                }).filter(a(722371).Pe);
                return u ? (0, i.jsx)(i.Fragment, {
                    children: u
                }) : null
            }
            let g = ["comment", "copy"],
                p = r.forwardRef(function(e, t) {
                    let {
                        isPhone: o
                    } = (0, a(533992).Y0)(), {
                        shouldWrap: n
                    } = (0, r.useContext)(a(422575).L8), l = A(e, t, (0, a(960253).I)(() => {
                        let e = (0, a(642065)._Q)({
                            isPhone: o
                        });
                        return {
                            checkboxButtonStyle: { ...e.table.checkbox
                            },
                            textButtonStyle: { ...e.table.text
                            }
                        }
                    }, [o]));
                    return (0, i.jsx)(c, { ...l,
                        numberRightAlign: !0,
                        EmptyComponent: a(959110).rW,
                        quickActionButtons: a(986939).A.isMobile ? void 0 : g,
                        userExpandable: n
                    })
                }),
                m = ["comment", "copy"],
                f = r.forwardRef(function(e, t) {
                    let {
                        isPhone: r
                    } = (0, a(533992).Y0)(), o = A(e, t, (0, a(960253).I)(() => {
                        let e = (0, a(642065)._Q)({
                            isPhone: r
                        });
                        return {
                            checkboxButtonStyle: { ...e.page.checkbox
                            },
                            textButtonStyle: { ...e.page.text
                            }
                        }
                    }, [r]));
                    return (0, i.jsx)(c, { ...o,
                        EmptyComponent: a(959110).ao,
                        quickActionButtons: m
                    })
                }),
                y = ["comment", "copy"],
                h = r.forwardRef(function(e, t) {
                    let {
                        isPhone: r
                    } = (0, a(533992).Y0)(), o = A(e, t, (0, a(960253).I)(() => {
                        let e = (0, a(642065)._Q)({
                            isPhone: r
                        });
                        return {
                            checkboxButtonStyle: { ...e.compact_page.checkbox
                            },
                            textButtonStyle: { ...e.compact_page.text,
                                width: "100%",
                                ...a(699422).RC
                            }
                        }
                    }, [r]));
                    return (0, i.jsx)(c, { ...o,
                        EmptyComponent: a(959110).ao,
                        quickActionButtons: a(986939).A.isMobile ? void 0 : y
                    })
                }),
                v = r.forwardRef(function(e, t) {
                    let r = A(e, t);
                    return (0, i.jsx)(c, { ...r,
                        EmptyComponent: a(959110).Fe
                    })
                }),
                _ = r.forwardRef(function(e, t) {
                    let r = (0, a(228315).F)({
                            ref: t,
                            collectionStore: e.collectionStore,
                            property: e.property,
                            propertyType: "formula"
                        }),
                        o = A(e, t, r);
                    return (0, i.jsx)(c, { ...o
                    })
                }),
                b = r.forwardRef(function(e, t) {
                    let r = (0, a(533992).WS)(),
                        o = A(e, t, (0, a(960253).I)(() => {
                            let e = (0, a(642065)._Q)({
                                isPhone: r
                            });
                            return {
                                checkboxButtonStyle: { ...e.card.checkbox
                                },
                                textButtonStyle: { ...e.card.text
                                }
                            }
                        }, [r]));
                    return (0, i.jsx)(c, { ...o,
                        checkboxShowLabel: !0
                    })
                }),
                x = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, i.jsx)(c, { ...a,
                        checkboxShowLabel: !0
                    })
                }),
                M = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, i.jsx)(c, { ...a
                    })
                }),
                S = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, i.jsx)(c, { ...a
                    })
                }),
                k = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, i.jsx)(c, { ...a
                    })
                });

            function A(e, t, r) {
                let {
                    store: o,
                    onContextMenu: n,
                    property: i,
                    collectionStore: l
                } = e;
                return {
                    ref: t,
                    store: o,
                    property: i,
                    collectionStore: l,
                    editButtonClickProps: (0, a(973681).QK)(e),
                    onContextMenu: n,
                    checkboxButtonStyle: null == r ? void 0 : r.checkboxButtonStyle,
                    textButtonStyle: null == r ? void 0 : r.textButtonStyle
                }
            }

            function w(e) {
                return void 0 === e ? [] : "string" == typeof e ? 0 === e.length ? [] : [{
                    id: e,
                    type: "text",
                    value: [
                        [e]
                    ]
                }] : "number" == typeof e ? [{
                    id: e,
                    type: "number",
                    value: e
                }] : (0, a(943003).kC)(e) ? [{
                    id: (0, a(850640).ZF)({
                        allowRelativeDates: !1,
                        value: e,
                        userTimeZone: (0, a(714350).P)(),
                        intl: a(962299).A.getIntl()
                    }),
                    type: "date",
                    value: e
                }] : "boolean" == typeof e ? [{
                    id: e,
                    type: "checkbox",
                    value: e
                }] : void(0, a(722371).HB)(e)
            }
        },
        167834: (e, t, a) => {
            a.d(t, {
                W: () => l,
                e: () => i
            }), a(296540);
            var r = a(474848);
            let o = (0, a(109939).YK)({
                    me: {
                        id: "templateVariablePropertyValueComponent.templateVariables.text.me",
                        defaultMessage: "Person who duplicated page"
                    },
                    now: a(632754).H.nowText,
                    today: a(632754).H.todayText
                }),
                n = {
                    lineHeight: "20px"
                };

            function i(e) {
                return (0, r.jsx)(a(361724).C, {
                    fontColor: "light",
                    style: n,
                    children: (0, r.jsx)(l, {
                        templateVariableType: e.templateVariableType
                    })
                })
            }

            function l(e) {
                var t, n;
                let i, {
                        templateVariableType: l,
                        showRemoveButton: s,
                        onRemove: u,
                        style: c
                    } = e,
                    d = (0, a(109939).tz)(),
                    g = (0, a(960253).I)(() => ({
                        uiToken: {
                            background: a(632079).Tj.blue.background.secondaryTranslucent,
                            color: a(632079).Tj.blue.text.accentPrimary,
                            padding: "2px 4px",
                            width: "max-content",
                            ...c || {}
                        }
                    }), [c]);
                return (0, r.jsx)(a(376921).Ay, {
                    format: a(696654).NY.Medium,
                    isSingle: !0,
                    title: (t = l, n = d, "me" === t ? i = n.formatMessage(o.me) : "now" === t ? i = n.formatMessage(o.now) : "today" === t ? i = n.formatMessage(o.today) : (0, a(722371).HB)(t), i),
                    renderAvatar: () => {
                        var e;
                        let t;
                        return (e = l, (0, a(247438).pbt)(e) ? t = a(476719).personFillSmallIcon : (0, a(247438).UKc)(e) ? t = a(428602).Y : (0, a(722371).HB)(e), t)({
                            width: a(104509).Ev.xs,
                            height: a(104509).Ev.xs,
                            marginInlineEnd: 4
                        })
                    },
                    shouldShrink: !0,
                    onClickRemove: u,
                    showRemoveButton: !!s,
                    style: g.uiToken
                })
            }
        },
        255560: (e, t, a) => {
            a.d(t, {
                V: () => r
            });

            function r(e, t) {
                let r = !1;
                return [t(a(993189).b4_.fromMonomorphicFunctionUnsafe(t => {
                    let a = e.getRecordStore(e, t);
                    return a.isReady() || (r = !0), a.getModel()
                }, a(95476).xb.fromMonomorphicFunctionUnsafe(t => {
                    let a = e.getRecordStore(e, t);
                    return a.isReady() || (r = !0), a.getValue()
                }))), r]
            }
        },
        298176: (e, t, a) => {
            a.d(t, {
                m: () => n
            });
            var r = () => a(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        type: "uninitialized"
                    }
                }
                isWriting() {
                    return "filling" === this.state.type && !this.state.haveAllBlocksCompletedAutofill && !this.state.didInterruptStreaming
                }
                setIsWriting(e) {
                    let {
                        propertySchema: t,
                        stores: r,
                        sessionIdForAnalytics: o,
                        collectionId: n
                    } = e, i = o || a(92513).JW();
                    return this.setState({
                        type: "filling",
                        propertySchema: t,
                        collectionId: n,
                        numBlocksToAutofill: r.length,
                        numBlocksAutofilled: 0,
                        sessionId: i,
                        didInterruptStreaming: !1,
                        haveAllBlocksCompletedAutofill: !1
                    }), i
                }
            }
            let n = new o
        },
        320500: (e, t, a) => {
            a.d(t, {
                E: () => o
            }), a(296540);
            var r = a(474848);

            function o({
                progressPercentage: e,
                maxValue: t,
                currentValue: n,
                ...i
            }) {
                let l = (0, a(109939).tz)(),
                    s = n ? n / (t ? ? 100) * 100 : Math.round(Math.max(0, Math.min(100, e ? ? 0)));
                return (0, r.jsx)(a(4458).fI, {
                    inline: !0,
                    contentEditable: !1,
                    role: "progressbar",
                    "aria-valuenow": n || e,
                    "aria-valuemin": 0,
                    "aria-valuemax": t ? ? 100,
                    "aria-label": l.formatMessage({
                        id: "loadingProgressRing.progressLabel",
                        defaultMessage: "Loading progress: {percentage}%"
                    }, {
                        percentage: s
                    }),
                    children: (0, r.jsx)(a(523262).Y, {
                        progressPercentage: s,
                        ...i
                    })
                })
            }
        },
        349608: (e, t, a) => {
            a.d(t, {
                M: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.7 2.19 14.6 11.6",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.142 2.332a.55.55 0 0 1 .695-.017l.081.077.227.264.008.01 8.772 10.235.057.082a.551.551 0 0 1-.819.701l-.08-.076-1.18-1.376A8.5 8.5 0 0 1 8 12.74c-3.027 0-5.685-1.569-7.026-3.911L.848 8.6a1.29 1.29 0 0 1 0-1.199l.126-.228c.705-1.233 1.776-2.251 3.073-2.94l-.965-1.125-.063-.091a.55.55 0 0 1 .123-.685m2.77 4.078a2.6 2.6 0 0 0-.537 1.588l.014.269a2.626 2.626 0 0 0 2.343 2.343l.268.014c.453 0 .878-.118 1.25-.32L8.023 8.872 8 8.874a.875.875 0 0 1-.861-1.032zM8 3.26c3.125 0 5.857 1.673 7.153 4.141l.064.144c.11.293.11.617 0 .91l-.065.145a7.5 7.5 0 0 1-2.255 2.577L10.58 8.475q.02-.103.031-.208l.014-.269A2.626 2.626 0 0 0 8 5.372l-.077.002-1.66-1.937A8.6 8.6 0 0 1 8 3.261"
                    })
                },
                o = (0, a(104509).wt)("eyeSlashFillSmall", r, "fillSmall")
        },
        438166: (e, t, a) => {
            a.d(t, {
                s: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.82 1.82 12.68 12.68",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.825a.575.575 0 0 0-.575.575V4a.575.575 0 0 0 1.15 0V2.4A.575.575 0 0 0 8 1.825m4.367 1.809a.575.575 0 0 0-.814 0l-1.131 1.131a.575.575 0 1 0 .813.813l1.132-1.131a.575.575 0 0 0 0-.813m-7.92 0a.575.575 0 0 0-.813.813l1.13 1.131a.575.575 0 1 0 .814-.813zm3.248 3.071a.7.7 0 1 0-.99.99l.77.77.99-.99zm4.305.72a.575.575 0 0 0 0 1.15h1.6a.575.575 0 1 0 0-1.15zm-9.6 0a.575.575 0 1 0 0 1.15H4a.575.575 0 0 0 0-1.15zm11.895 5.88-5.37-5.37-.99.99 5.37 5.37a.7.7 0 0 0 .99-.99m-8.717-2.883a.575.575 0 0 0-.813 0l-1.131 1.131a.575.575 0 1 0 .813.813l1.131-1.131a.575.575 0 0 0 0-.813M8 11.425a.575.575 0 0 0-.575.575v1.6a.575.575 0 1 0 1.15 0V12A.575.575 0 0 0 8 11.425"
                    })
                },
                o = (0, a(104509).wt)("magicWandSmall", r, "small")
        },
        478418: (e, t, a) => {
            a.d(t, {
                J: () => r
            });

            function r(e, t) {
                if (t && t.asActor) switch (t.pointer.table) {
                    case "bot":
                        return new(a(447003)).v(e, t.pointer);
                    case "notion_user":
                        return new(a(807825)).L(e, t.pointer);
                    default:
                        (0, a(722371).HB)(t.pointer)
                }
            }
        },
        480605: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                peopleFillSmallIcon: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.55 1.9 15.26 11.99",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.4 1.908c-.872 0-1.584.362-2.064.96-.469.584-.687 1.353-.687 2.145 0 .793.218 1.561.687 2.145.48.599 1.192.96 2.064.96s1.584-.361 2.065-.96c.468-.584.687-1.352.687-2.145s-.219-1.56-.687-2.144c-.48-.6-1.193-.96-2.065-.96M2.693 3.46c.445-.554 1.104-.888 1.907-.888.804 0 1.463.334 1.907.888.433.539.632 1.245.632 1.97s-.2 1.43-.632 1.97c-.444.553-1.103.887-1.907.887-.803 0-1.462-.334-1.907-.888-.433-.539-.632-1.245-.632-1.97s.2-1.43.632-1.97M.71 11.561c.68-1.42 2.175-2.389 3.89-2.389.797 0 1.547.21 2.19.576a5.6 5.6 0 0 0-.814 1.333 2.78 2.78 0 0 0 .337 2.811H2.43c-.577 0-1.132-.243-1.49-.656a1.51 1.51 0 0 1-.23-1.675M11.4 8.84c-1.917 0-3.58 1.117-4.279 2.735a1.54 1.54 0 0 0 .268 1.665c.36.41.913.652 1.49.652h5.04c.579 0 1.131-.242 1.492-.652a1.54 1.54 0 0 0 .268-1.665c-.7-1.618-2.362-2.736-4.279-2.736"
                    })
                },
                o = (0, a(104509).wt)("peopleFillSmall", r, "fillSmall")
        },
        540970: (e, t, a) => {
            a.d(t, {
                q: () => n
            }), a(296540);
            var r = a(474848);
            let o = {
                shimmer: {
                    width: "60%",
                    marginTop: 6,
                    height: 10,
                    flexShrink: 0,
                    borderRadius: 12,
                    backgroundColor: a(632079).Tj.background.tertiaryTranslucent
                }
            };

            function n(e) {
                let t = (0, a(960253).I)(() => ({
                    container: {
                        display: "flex",
                        width: "100%",
                        justifyContent: e.isRightAligned ? "flex-end" : void 0
                    }
                }), [e.isRightAligned]);
                return (0, r.jsx)("div", {
                    style: t.container,
                    children: (0, r.jsx)(a(795830).P, {
                        style: o.shimmer
                    })
                })
            }
        },
        567224: (e, t, a) => {
            a.d(t, {
                NT: () => f,
                SE: () => i,
                Y9: () => p,
                cx: () => c,
                fp: () => s,
                jA: () => u,
                o_: () => d,
                rv: () => m,
                zI: () => g,
                zY: () => o
            });
            let r = (0, a(109939).YK)({
                    show_unique: {
                        defaultMessage: "Show unique values",
                        id: "database.aggregationFullName.unique_values"
                    },
                    count: {
                        defaultMessage: "Count all",
                        id: "database.aggregationFullName.count"
                    },
                    count_values: {
                        defaultMessage: "Count values",
                        id: "database.aggregationFullName.count_values"
                    },
                    unique: {
                        defaultMessage: "Count unique values",
                        id: "database.aggregationFullName.unique"
                    },
                    empty: {
                        defaultMessage: "Count empty",
                        id: "database.aggregationFullName.empty"
                    },
                    not_empty: {
                        defaultMessage: "Count not empty",
                        id: "database.aggregationFullName.not_empty"
                    },
                    percent_empty: {
                        defaultMessage: "Percent empty",
                        id: "database.aggregationFullName.percent_empty"
                    },
                    percent_not_empty: {
                        defaultMessage: "Percent not empty",
                        id: "database.aggregationFullName.percent_not_empty"
                    },
                    sum: {
                        defaultMessage: "Sum",
                        id: "database.aggregationFullName.sum"
                    },
                    average: {
                        defaultMessage: "Average",
                        id: "database.aggregationFullName.average"
                    },
                    median: {
                        defaultMessage: "Median",
                        id: "database.aggregationFullName.median"
                    },
                    min: {
                        defaultMessage: "Min",
                        id: "database.aggregationFullName.min"
                    },
                    max: {
                        defaultMessage: "Max",
                        id: "database.aggregationFullName.max"
                    },
                    range: {
                        defaultMessage: "Range",
                        id: "database.aggregationFullName.range"
                    },
                    earliest_date: {
                        defaultMessage: "Earliest date",
                        id: "database.aggregationFullName.earliest_date"
                    },
                    latest_date: {
                        defaultMessage: "Latest date",
                        id: "database.aggregationFullName.latest_date"
                    },
                    date_range: {
                        defaultMessage: "Date range",
                        id: "database.aggregationFullName.date_range"
                    },
                    checked: {
                        defaultMessage: "Checked",
                        id: "database.aggregationFullName.checked"
                    },
                    unchecked: {
                        defaultMessage: "Unchecked",
                        id: "database.aggregationFullName.unchecked"
                    },
                    percent_checked: {
                        defaultMessage: "Percent checked",
                        id: "database.aggregationFullName.percent_checked"
                    },
                    percent_unchecked: {
                        defaultMessage: "Percent unchecked",
                        id: "database.aggregationFullName.percent_unchecked"
                    },
                    count_per_group: {
                        defaultMessage: "Count per group",
                        id: "database.aggregationFullName.count_per_group"
                    },
                    percent_per_group: {
                        defaultMessage: "Percent per group",
                        id: "database.aggregationFullName.percent_per_group"
                    },
                    count_aggregations: {
                        defaultMessage: "Count",
                        id: "database.aggregationBucket.count"
                    },
                    percent_aggregations: {
                        defaultMessage: "Percent",
                        id: "database.aggregationBucket.percent"
                    },
                    statistics_aggregations: {
                        defaultMessage: "More options",
                        id: "database.aggregationBucket.more_options"
                    },
                    date_aggregations: {
                        defaultMessage: "Date",
                        id: "database.aggregationBucket.dateGroupingLabel"
                    }
                }),
                o = {
                    count: a(962299).A.formatMessage(r.count),
                    count_values: a(962299).A.formatMessage(r.count_values),
                    unique: a(962299).A.formatMessage(r.unique),
                    show_unique: a(962299).A.formatMessage(r.show_unique),
                    empty: a(962299).A.formatMessage(r.empty),
                    not_empty: a(962299).A.formatMessage(r.not_empty),
                    percent_empty: a(962299).A.formatMessage(r.percent_empty),
                    percent_not_empty: a(962299).A.formatMessage(r.percent_not_empty),
                    sum: a(962299).A.formatMessage(r.sum),
                    average: a(962299).A.formatMessage(r.average),
                    median: a(962299).A.formatMessage(r.median),
                    min: a(962299).A.formatMessage(r.min),
                    max: a(962299).A.formatMessage(r.max),
                    range: a(962299).A.formatMessage(r.range),
                    earliest_date: a(962299).A.formatMessage(r.earliest_date),
                    latest_date: a(962299).A.formatMessage(r.latest_date),
                    date_range: a(962299).A.formatMessage(r.date_range),
                    checked: a(962299).A.formatMessage(r.checked),
                    unchecked: a(962299).A.formatMessage(r.unchecked),
                    percent_checked: a(962299).A.formatMessage(r.percent_checked),
                    percent_unchecked: a(962299).A.formatMessage(r.percent_unchecked),
                    count_per_group: a(962299).A.formatMessage(r.count_per_group),
                    percent_per_group: a(962299).A.formatMessage(r.percent_per_group)
                },
                n = (0, a(109939).YK)({
                    count: {
                        defaultMessage: "Count",
                        id: "database.aggregationShortName.count"
                    },
                    count_values: {
                        defaultMessage: "Values",
                        id: "database.aggregationShortName.count_values"
                    },
                    unique: {
                        defaultMessage: "Unique",
                        id: "database.aggregationShortName.unique"
                    },
                    show_unique: {
                        defaultMessage: "Show unique",
                        id: "database.aggregationShortName.showUnique"
                    },
                    empty: {
                        defaultMessage: "Empty",
                        id: "database.aggregationShortName.empty"
                    },
                    not_empty: {
                        defaultMessage: "Not Empty",
                        id: "database.aggregationShortName.not_empty"
                    },
                    percent_empty: {
                        defaultMessage: "Empty",
                        id: "database.aggregationShortName.percent_empty"
                    },
                    percent_not_empty: {
                        defaultMessage: "Not Empty",
                        id: "database.aggregationShortName.percent_not_empty"
                    },
                    sum: {
                        defaultMessage: "Sum",
                        id: "database.aggregationShortName.sum"
                    },
                    average: {
                        defaultMessage: "Average",
                        id: "database.aggregationShortName.average"
                    },
                    median: {
                        defaultMessage: "Median",
                        id: "database.aggregationShortName.median"
                    },
                    min: {
                        defaultMessage: "Min",
                        id: "database.aggregationShortName.min"
                    },
                    max: {
                        defaultMessage: "Max",
                        id: "database.aggregationShortName.max"
                    },
                    range: {
                        defaultMessage: "Range",
                        id: "database.aggregationShortName.range"
                    },
                    earliest_date: {
                        defaultMessage: "Earliest",
                        id: "database.aggregationShortName.earliest_date"
                    },
                    latest_date: {
                        defaultMessage: "Latest",
                        id: "database.aggregationShortName.latest_date"
                    },
                    date_range: {
                        defaultMessage: "Range",
                        id: "database.aggregationShortName.date_range"
                    },
                    checked: {
                        defaultMessage: "Checked",
                        id: "database.aggregationShortName.checked"
                    },
                    unchecked: {
                        defaultMessage: "Unchecked",
                        id: "database.aggregationShortName.unchecked"
                    },
                    percent_checked: {
                        defaultMessage: "Checked",
                        id: "database.aggregationShortName.percent_checked"
                    },
                    percent_unchecked: {
                        defaultMessage: "Unchecked",
                        id: "database.aggregationShortName.percent_unchecked"
                    },
                    count_per_group: {
                        defaultMessage: "Count",
                        id: "database.aggregationShortName.count_per_group"
                    },
                    percent_per_group: {
                        defaultMessage: "Percent",
                        id: "database.aggregationShortName.percent_per_group"
                    }
                }),
                i = {
                    count: a(962299).A.formatMessage(n.count),
                    count_values: a(962299).A.formatMessage(n.count_values),
                    unique: a(962299).A.formatMessage(n.unique),
                    show_unique: a(962299).A.formatMessage(n.show_unique),
                    empty: a(962299).A.formatMessage(n.empty),
                    not_empty: a(962299).A.formatMessage(n.not_empty),
                    percent_empty: a(962299).A.formatMessage(n.percent_empty),
                    percent_not_empty: a(962299).A.formatMessage(n.percent_not_empty),
                    sum: a(962299).A.formatMessage(n.sum),
                    average: a(962299).A.formatMessage(n.average),
                    median: a(962299).A.formatMessage(n.median),
                    min: a(962299).A.formatMessage(n.min),
                    max: a(962299).A.formatMessage(n.max),
                    range: a(962299).A.formatMessage(n.range),
                    earliest_date: a(962299).A.formatMessage(n.earliest_date),
                    latest_date: a(962299).A.formatMessage(n.latest_date),
                    date_range: a(962299).A.formatMessage(n.date_range),
                    checked: a(962299).A.formatMessage(n.checked),
                    unchecked: a(962299).A.formatMessage(n.unchecked),
                    percent_checked: a(962299).A.formatMessage(n.percent_checked),
                    percent_unchecked: a(962299).A.formatMessage(n.percent_unchecked),
                    count_per_group: a(962299).A.formatMessage(n.count_per_group),
                    percent_per_group: a(962299).A.formatMessage(n.percent_per_group)
                },
                l = (0, a(109939).YK)({
                    count: {
                        defaultMessage: "Counts the total number of pages, including blank pages.",
                        id: "database.aggregationDescription.count"
                    },
                    count_values: {
                        defaultMessage: "Counts the number of non-empty values for this property. For a type that can contain multiple values like multi-select or person, this will count the number of selected values for each page.",
                        id: "database.aggregationDescription.count_values"
                    },
                    unique: {
                        defaultMessage: "Counts the number of unique values for this property. For a type that can contain multiple values like multi-select or person, this will count the unique values across all pages.",
                        id: "database.aggregationDescription.unique"
                    },
                    show_unique: {
                        defaultMessage: "Shows the unique values for this property. For a type that can contain multiple values like multi-select or person, this will count the unique values across all pages.",
                        id: "database.aggregationDescription.show_unique"
                    },
                    empty: {
                        defaultMessage: "Counts the number of pages with an empty value for this property.",
                        id: "database.aggregationDescription.empty"
                    },
                    not_empty: {
                        defaultMessage: "Counts the number of pages with a non-empty value for this property.",
                        id: "database.aggregationDescription.not_empty"
                    },
                    percent_empty: {
                        defaultMessage: "Displays the percentage of pages that have an empty value for this property.",
                        id: "database.aggregationDescription.percent_empty"
                    },
                    percent_not_empty: {
                        defaultMessage: "Displays the percentage of pages that have a non-empty value for this property.",
                        id: "database.aggregationDescription.percent_not_empty"
                    },
                    sum: {
                        defaultMessage: "Computes the sum of a numeric property.",
                        id: "database.aggregationDescription.sum"
                    },
                    average: {
                        defaultMessage: "Computes the average of a numeric property.",
                        id: "database.aggregationDescription.average"
                    },
                    median: {
                        defaultMessage: "Finds the median of a numeric property.",
                        id: "database.aggregationDescription.median"
                    },
                    min: {
                        defaultMessage: "Finds the minimum of a numeric property.",
                        id: "database.aggregationDescription.min"
                    },
                    max: {
                        defaultMessage: "Finds the maximum of a numeric property.",
                        id: "database.aggregationDescription.max"
                    },
                    range: {
                        defaultMessage: "Computes the range (maximum - minimum) of a numeric property.",
                        id: "database.aggregationDescription.range"
                    },
                    earliest_date: {
                        defaultMessage: "Finds the earliest date in time of a date property.",
                        id: "database.aggregationDescription.earliest_date"
                    },
                    latest_date: {
                        defaultMessage: "Finds the latest date in time of a date property.",
                        id: "database.aggregationDescription.latest_date"
                    },
                    date_range: {
                        defaultMessage: "Computes the date range (latest date - earliest date) of a date property.",
                        id: "database.aggregationDescription.date_range"
                    },
                    checked: {
                        defaultMessage: "Counts the number of pages with a checked checkbox for this property.",
                        id: "database.aggregationDescription.checked"
                    },
                    unchecked: {
                        defaultMessage: "Counts the number of pages with an unchecked checkbox for this property.",
                        id: "database.aggregationDescription.unchecked"
                    },
                    percent_checked: {
                        defaultMessage: "Displays the percentage of pages that have a checked checkbox for this property.",
                        id: "database.aggregationDescription.percent_checked"
                    },
                    percent_unchecked: {
                        defaultMessage: "Displays the percentage of pages that have an unchecked checkbox for this property.",
                        id: "database.aggregationDescription.percent_unchecked"
                    },
                    count_per_group: {
                        defaultMessage: "Counts the total number of pages that have this Status Group.",
                        id: "database.aggregationDescription.count_per_group"
                    },
                    percent_per_group: {
                        defaultMessage: "Displays the percentage of pages that have this Status Group",
                        id: "database.aggregationDescription.percent_per_group"
                    }
                }),
                s = {
                    count: a(962299).A.formatMessage(l.count),
                    count_values: a(962299).A.formatMessage(l.count_values),
                    unique: a(962299).A.formatMessage(l.unique),
                    show_unique: a(962299).A.formatMessage(l.show_unique),
                    empty: a(962299).A.formatMessage(l.empty),
                    not_empty: a(962299).A.formatMessage(l.not_empty),
                    percent_empty: a(962299).A.formatMessage(l.percent_empty),
                    percent_not_empty: a(962299).A.formatMessage(l.percent_not_empty),
                    sum: a(962299).A.formatMessage(l.sum),
                    average: a(962299).A.formatMessage(l.average),
                    median: a(962299).A.formatMessage(l.median),
                    min: a(962299).A.formatMessage(l.min),
                    max: a(962299).A.formatMessage(l.max),
                    range: a(962299).A.formatMessage(l.range),
                    earliest_date: a(962299).A.formatMessage(l.earliest_date),
                    latest_date: a(962299).A.formatMessage(l.latest_date),
                    date_range: a(962299).A.formatMessage(l.date_range),
                    checked: a(962299).A.formatMessage(l.checked),
                    unchecked: a(962299).A.formatMessage(l.unchecked),
                    percent_checked: a(962299).A.formatMessage(l.percent_checked),
                    percent_unchecked: a(962299).A.formatMessage(l.percent_unchecked),
                    count_per_group: a(962299).A.formatMessage(l.count_per_group),
                    percent_per_group: a(962299).A.formatMessage(l.percent_per_group)
                },
                u = {
                    count_aggregations: a(962299).A.formatMessage(r.count_aggregations),
                    percent_aggregations: a(962299).A.formatMessage(r.percent_aggregations),
                    statistics_aggregations: a(962299).A.formatMessage(r.statistics_aggregations),
                    date_aggregations: a(962299).A.formatMessage(r.date_aggregations)
                },
                c = {
                    count: a(896221).A.images.aggregations.countPng,
                    count_values: a(896221).A.images.aggregations.countValuesPng,
                    unique: a(896221).A.images.aggregations.uniquePng,
                    show_unique: void 0,
                    empty: a(896221).A.images.aggregations.emptyPng,
                    not_empty: a(896221).A.images.aggregations.notEmptyPng,
                    percent_empty: a(896221).A.images.aggregations.percentEmptyPng,
                    percent_not_empty: a(896221).A.images.aggregations.percentNotEmptyPng,
                    sum: a(896221).A.images.aggregations.sumPng,
                    average: a(896221).A.images.aggregations.averagePng,
                    median: a(896221).A.images.aggregations.medianPng,
                    min: a(896221).A.images.aggregations.minPng,
                    max: a(896221).A.images.aggregations.maxPng,
                    range: a(896221).A.images.aggregations.rangePng,
                    earliest_date: a(896221).A.images.aggregations.earliestDatePng,
                    latest_date: a(896221).A.images.aggregations.latestDatePng,
                    date_range: a(896221).A.images.aggregations.dateRangePng,
                    checked: a(896221).A.images.aggregations.checkedPng,
                    unchecked: a(896221).A.images.aggregations.uncheckedPng,
                    percent_checked: a(896221).A.images.aggregations.percentCheckedPng,
                    percent_unchecked: a(896221).A.images.aggregations.percentUncheckedPng,
                    count_per_group: a(896221).A.images.aggregations.countPng,
                    percent_per_group: a(896221).A.images.aggregations.percentCheckedPng
                };

            function d(e, t) {
                switch (e) {
                    case "earliest_date":
                    case "show_unique":
                    case "latest_date":
                    case "date_range":
                        return;
                    case "percent_empty":
                    case "percent_not_empty":
                    case "percent_checked":
                    case "percent_unchecked":
                        return "percent";
                    case "count":
                    case "empty":
                    case "not_empty":
                    case "unique":
                    case "count_values":
                    case "checked":
                    case "unchecked":
                        return "number";
                    case "sum":
                    case "average":
                    case "median":
                    case "min":
                    case "max":
                    case "range":
                        return t ? ? "number";
                    default:
                        switch (e.operator) {
                            case "count_per_group":
                                return;
                            case "percent_per_group":
                                return "percent";
                            default:
                                (0, a(722371).HB)(e.operator)
                        }
                }
            }

            function g(e, t) {
                switch (e) {
                    case "earliest_date":
                    case "show_unique":
                    case "latest_date":
                    case "date_range":
                    case "count":
                    case "empty":
                    case "not_empty":
                    case "unique":
                    case "count_values":
                    case "checked":
                    case "unchecked":
                        return;
                    case "percent_empty":
                    case "percent_not_empty":
                    case "percent_checked":
                    case "percent_unchecked":
                    case "average":
                        return t ? ? "precision_2";
                    case "sum":
                    case "median":
                    case "min":
                    case "max":
                    case "range":
                        return t ? ? void 0;
                    default:
                        switch (e.operator) {
                            case "count_per_group":
                                return;
                            case "percent_per_group":
                                return t ? ? "precision_2";
                            default:
                                (0, a(722371).HB)(e.operator)
                        }
                }
            }

            function p(e) {
                let t, {
                    aggregationType: r,
                    value: o,
                    userTimeZone: n,
                    dateFormat: i,
                    numberPrecision: l
                } = e;
                if ("date" === o.type) return (0, a(288299).Y)(r) && o.value ? "date_range" === r ? (0, a(850640).a3)(o.value, n, a(962299).A.getIntl()) : (0, a(850640).ZF)({
                    value: a(943003).pp(o.value),
                    date_format: i ? ? a(943003).vz,
                    userTimeZone: n,
                    allowRelativeDates: !0,
                    intl: a(962299).A.getIntl()
                }) : void 0;
                if ((0, a(288299).Y)(r) || "show_unique" === r || "object" == typeof o.value) return;
                if ("string" == typeof o.value) return o.value;
                t = void 0 === l || "precision_uncapped" === l ? void 0 === o.value ? void 0 : a(381453).LI(o.value, 5) : o.value;
                let s = d(r, e.numberFormat);
                return (0, a(700369).ZV)(t, s, a(962299).A.getIntl(), void 0, l)
            }

            function m(e) {
                let {
                    aggregation: t,
                    value: r,
                    numberFormat: o,
                    dateFormat: n,
                    numberPrecision: i
                } = e, l = p({
                    numberFormat: o,
                    dateFormat: n,
                    aggregationType: t ? t.aggregator : "count",
                    userTimeZone: e.userTimeZone,
                    value: r,
                    numberPrecision: i
                });
                if (null != t && t.enforceMaxAggregationLimit) {
                    let e = Number(l);
                    if (e && e >= a(288299).iY) return `${a(288299).iY-1}+`
                }
                return l
            }

            function f(e) {
                let t = e.aggregator,
                    r = (0, a(288299).ET)(t) ? t.operator : t;
                return {
                    enforceMaxAggregationLimit: !!e.enforceMaxAggregationLimit,
                    disabled: !(0, a(288299).AS)(r)
                }
            }
        },
        578083: (e, t, a) => {
            a.d(t, {
                l: () => l
            }), a(296540);
            var r = a(474848);
            let o = {
                    display: "inline-flex"
                },
                n = {
                    flexBasis: "100%"
                },
                i = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "6px 8px"
                };

            function l(e) {
                let t, l = (0, a(109939).tz)(),
                    {
                        numberValue: s,
                        numberFormat: u,
                        numberPrecision: c,
                        numberShowAs: d,
                        shouldRenderTooltip: g,
                        withComma: p,
                        style: m,
                        ringWidth: f,
                        className: y,
                        barHeight: h
                    } = e,
                    v = (0, a(960253).e)();
                if (Number.isNaN(s) || a(627179).pN(s)) return null;
                let _ = e.progressSize ? ? 21,
                    b = (null == d ? void 0 : d.showValue) ? ? !0,
                    x = b && a(700369).ZV(s, u, l, void 0, c);
                if ((null == d ? void 0 : d.type) === "bar" || (null == d ? void 0 : d.type) === "ring") {
                    let i = a(700369).XK(s, d.maxValue),
                        {
                            filledColor: l,
                            gapColor: c,
                            unfilledColor: p
                        } = function({
                            themeMode: e,
                            color: t
                        }) {
                            let r = "default" === t ? a(632079).Tj.selectLightGray : a(632079).Tj.palette[t],
                                o = "dark" === e ? r[500] : r[400];
                            return {
                                filledColor: o,
                                gapColor: r[50],
                                unfilledColor: "dark" === e ? r[200] : a(632079).Tj.selectLightGray[200]
                            }
                        }({
                            themeMode: v,
                            color: d.color
                        }),
                        m = g ? a(793550).lh({
                            numberValue: s,
                            numberFormat: u,
                            numberShowAs: d
                        }) : void 0;
                    t = "bar" === d.type ? (0, r.jsx)(a(819197).z, {
                        percentage: i,
                        filledColor: l,
                        gapColor: c,
                        unfilledColor: p,
                        height: h,
                        style: {
                            height: _,
                            ...e.barStyle,
                            ...!b ? n : {}
                        },
                        tooltip: m
                    }) : (0, r.jsx)(a(51831).m, {
                        placement: "top",
                        content: () => m,
                        disableTooltip: !m,
                        children: e => (0, r.jsx)("span", {
                            style: o,
                            ...e,
                            children: (0, r.jsx)(a(320500).E, {
                                currentValue: s,
                                maxValue: d.maxValue,
                                progressColor: "default" === d.color ? void 0 : d.color,
                                size: _,
                                ringThickness: f
                            })
                        })
                    })
                }
                return (0, r.jsxs)("div", {
                    style: { ...i,
                        ...m
                    },
                    className: y,
                    children: [x, t, p ? ", " : null]
                })
            }
        },
        937975: (e, t, a) => {
            a.d(t, {
                _s: () => x,
                aG: () => b,
                Pv: () => h,
                Q4: () => _,
                Xh: () => v,
                p0: () => y,
                wM: () => S,
                N$: () => k,
                gN: () => f,
                TN: () => M,
                KV: () => c
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(803949), a(581454);
            var r = a(296540),
                o = a(474848);
            let n = (0, a(109939).YK)({
                    rollup: {
                        defaultMessage: "Configure rollup",
                        id: "database.editButton.configureRollupTooltip"
                    }
                }),
                i = {
                    iconStyle: {
                        color: a(632079).Tj.text.secondary,
                        fill: a(632079).Tj.text.secondary
                    },
                    button: {
                        height: 20,
                        width: 20
                    }
                };

            function l(e) {
                let {
                    type: t,
                    editButtonClickProps: l
                } = e, s = (0, a(533992).v3)(), u = (0, a(109939).tz)(), {
                    containerRef: c,
                    collectionContextStore: d,
                    canEdit: g
                } = (0, r.useContext)(a(422575).L8), p = (0, a(682985).uB)(void 0, a(184332).A), m = u.formatMessage(n[t]), f = (0, r.useCallback)(async e => {
                    if (void 0 === l) return;
                    let {
                        onClick: t,
                        store: r,
                        property: o,
                        surface: n,
                        collectionStore: i,
                        blockPropertyValueOverlayStore: u,
                        disableHorizontalEdgeScroll: g
                    } = l, m = c && "current" in c && (null == c ? void 0 : c.current) || void 0;
                    await a(305866).VE({
                        element: m,
                        environment: s,
                        onClick: t,
                        store: r,
                        property: i.getMappedProperty(o),
                        surface: n,
                        collectionStore: i,
                        blockPropertyValueOverlayStore: u,
                        disableHorizontalEdgeScroll: g,
                        collectionContextStore: d,
                        mouseStore: p
                    })
                }, [d, c, l, s, p]);
                return !g || a(986939).A.isMobile ? null : (0, o.jsx)(a(221149).A, {
                    icon: a(636).pencilLineIcon,
                    tooltip: m,
                    onClick: f,
                    style: i.button,
                    iconStyle: i.iconStyle,
                    hasBackground: !1
                })
            }
            let s = {
                iconStyle: {
                    color: a(632079).Tj.text.secondary,
                    fill: a(632079).Tj.text.secondary
                },
                button: {
                    height: 20,
                    width: 20
                }
            };

            function u(e) {
                let {
                    editButtonClickProps: t
                } = e, n = (0, a(533992).v3)(), {
                    containerRef: i,
                    collectionContextStore: l
                } = (0, r.useContext)(a(422575).L8), u = (0, a(109939).tz)(), c = (0, a(682985).uB)(void 0, a(184332).A), d = (0, r.useCallback)(async e => {
                    if (void 0 === t) return;
                    let {
                        onClick: r,
                        store: o,
                        property: s,
                        surface: u,
                        collectionStore: d,
                        blockPropertyValueOverlayStore: g,
                        disableHorizontalEdgeScroll: p
                    } = t, m = i && "current" in i && (null == i ? void 0 : i.current) || void 0;
                    await a(305866).DJ({
                        element: m,
                        environment: n,
                        onClick: r,
                        store: o,
                        property: d.getMappedProperty(s),
                        surface: u,
                        collectionStore: d,
                        blockPropertyValueOverlayStore: g,
                        disableHorizontalEdgeScroll: p,
                        collectionContextStore: l,
                        mouseStore: c
                    })
                }, [l, i, t, n, c]);
                return a(986939).A.isMobile ? null : (0, o.jsx)(a(221149).A, {
                    icon: a(934181).p,
                    tooltip: u.formatMessage({
                        defaultMessage: "Expand",
                        id: "pageProperty.expandButton.tooltip"
                    }),
                    onClick: d,
                    style: s.button,
                    iconStyle: s.iconStyle
                })
            }

            function c(e) {
                let {
                    store: t,
                    collectionSchemaStore: n,
                    property: i,
                    collectionStore: l,
                    numberRightAlign: s,
                    surface: u
                } = e, c = (0, a(972740).L)(), d = (0, a(533992).v3)(), g = (0, a(682985).K8)(() => d.idCreator.getSpaceIdCreatorSync((null == c ? void 0 : c.id) ? ? ""), [d, c]), p = (0, a(682985).O$)(n), f = (0, a(126940).s)({
                    propertySchema: null == p ? void 0 : p[i],
                    schema: p ? ? {},
                    parentStore: l
                }), y = (0, a(682985).K8)(() => {
                    if (!p) return;
                    let e = (0, a(26837).fS)({
                        schema: p,
                        property: i
                    });
                    if (e.isValid && "people_collection" === e.type) return (0, a(924448).vT)({
                        spaceStore: t.getSpaceStore(),
                        environment: d
                    });
                    if (e.isValid && "relation" === e.type) {
                        let r = e.relationPropertySchema,
                            o = (0, a(390768).N)(r);
                        return o ? a(356912).m.createChildStore(t, o) : void 0
                    }
                }, [d, i, p, t]), h = (0, a(941096).C)(), v = (0, a(682985).K8)(() => {
                    if (void 0 !== p) return (0, a(26837).eY)({
                        property: i,
                        schema: p,
                        preLoadedTargetCollectionModel: null == y ? void 0 : y.getModel(),
                        getRecordModel: l.getRecordModel,
                        spaceIdCreator: g,
                        block: t.getModel()
                    })
                }, [p, i, y, g, t, l.getRecordModel]), _ = (0, a(682985).K8)(() => !!(null != y && y.isReady()) && !1 === y.canRead(), [y]), {
                    element: b,
                    isLoading: x,
                    aggregationType: M
                } = function(e) {
                    let {
                        schema: t,
                        property: n,
                        blockStore: i,
                        rollupPropertyData: l,
                        numberRightAlign: s,
                        clientFormulaTimeoutMs: u
                    } = e, {
                        value: c
                    } = (0, a(815048).fJ)(a(864850).T.formulas), d = (0, a(713311).Ks)(), g = (0, a(533992).v3)(), p = (0, a(682985).K8)(() => {
                        var e;
                        let r = i.getModel(),
                            {
                                propertySchema: o,
                                targetPropertySchema: s
                            } = l ? ? {};
                        if (!(null != o && o.aggregation) || "show_unique" === o.aggregation || !r || !t) return {
                            rollupType: null == l ? void 0 : l.rollupType,
                            rollupAggregationValue: void 0,
                            numberFormat: void 0,
                            numberPrecision: void 0,
                            ...!t ? {
                                isLoading: !0,
                                aggregationType: "unknown"
                            } : !o ? (0, a(26837).fS)({
                                schema: t,
                                property: n
                            }).isValid ? {
                                isLoading: !0,
                                aggregationType: "unknown"
                            } : {
                                isLoading: !1,
                                aggregationType: "unconfigured"
                            } : o.aggregation && "show_unique" !== o.aggregation ? {
                                isLoading: !0,
                                aggregationType: o.aggregation
                            } : {
                                isLoading: !1,
                                aggregationType: o.aggregation
                            }
                        };
                        let p = o.aggregation,
                            m = g.idCreator.getSpaceIdCreatorSync(r.space_id),
                            [f, y] = function({
                                collectionContextStore: e,
                                blockStore: t,
                                blockModel: r,
                                property: o,
                                schema: n,
                                collectionRequestContext: i,
                                formulasModule: l,
                                spaceIdCreator: s
                            }) {
                                let [u, c] = (0, a(255560).V)(t, e => (0, a(26837).Pm)({
                                    block: r,
                                    property: o,
                                    schema: n,
                                    getRecordModel: e,
                                    collectionRequestContext: i,
                                    formulasModule: l,
                                    spaceIdCreator: s
                                }));
                                if (c) {
                                    let t = (0, a(26837).tf)({
                                        remoteResultCache: null == e ? void 0 : e.resultSetStore.state.propertyResultCache,
                                        blockId: r.id,
                                        property: o
                                    });
                                    if (t) return [t, !1]
                                }
                                return [u, c]
                            }({
                                collectionContextStore: d,
                                blockStore: i,
                                blockModel: r,
                                property: n,
                                schema: t,
                                collectionRequestContext: {
                                    userId: void 0,
                                    userTimeZone: (0, a(714350).P)(),
                                    depth: 0,
                                    intl: a(962299).A.getIntl(),
                                    visitedProperties: new Set,
                                    resultCache: new Map,
                                    regExpCache: new Map,
                                    formatDateCache: new Map,
                                    formulaTimeoutTimestampMs: Date.now() + u,
                                    experimentService: a(218744).default,
                                    collectionFeatureGates: (0, a(457103).i)(),
                                    getRelationEdgeList: (0, a(323082).Y)({
                                        environment: g,
                                        spaceId: r.space_id
                                    }),
                                    sourceCollectionId: null == d || null == (e = d.collectionStore()) ? void 0 : e.id
                                },
                                formulasModule: c,
                                spaceIdCreator: m
                            });
                        if (!f) return {
                            rollupAggregationValue: void 0,
                            numberFormat: void 0,
                            numberPrecision: void 0,
                            aggregationType: p,
                            isLoading: y
                        };
                        let h = a(218744).default.checkGate({
                                gateName: "rollup_custom_number_format"
                            }),
                            v = (null == s ? void 0 : s.type) === "formula" || (null == s ? void 0 : s.type) === "number" ? s.number_format : void 0,
                            _ = (0, a(567224).o_)(o.aggregation, h ? o.number_format ? ? v : v),
                            b = (null == s ? void 0 : s.type) === "formula" || (null == s ? void 0 : s.type) === "number" ? s.number_precision : void 0,
                            x = (0, a(567224).zI)(o.aggregation, h ? o.number_precision ? ? b : b);
                        if (_) {
                            let e = (null == f ? void 0 : f.value) === void 0 || (null == f ? void 0 : f.value) === null || "number" != typeof f.value ? void 0 : Number(f.value);
                            if (void 0 !== e && !isNaN(e)) return {
                                rollupAggregationValue: e,
                                numberFormat: _,
                                numberPrecision: x,
                                isLoading: y,
                                aggregationType: p
                            }
                        }
                        let M = (0, a(567224).Y9)({
                            numberFormat: void 0,
                            dateFormat: s && "date_format" in s ? s.date_format : void 0,
                            aggregationType: o.aggregation,
                            value: f,
                            userTimeZone: (0, a(714350).P)(),
                            numberPrecision: void 0
                        });
                        return void 0 === M || "" === M ? {
                            rollupAggregationValue: void 0,
                            numberFormat: void 0,
                            numberPrecision: void 0,
                            isLoading: y,
                            aggregationType: p
                        } : {
                            rollupAggregationValue: M,
                            numberFormat: void 0,
                            numberPrecision: void 0,
                            isLoading: y,
                            aggregationType: p
                        }
                    }, [i, l, t, g, d, n, u, c]), m = (0, a(682985).K8)(() => (0, a(940270).yQ)({
                        viewType: null == d ? void 0 : d.getViewType(),
                        propertySchema: null == l ? void 0 : l.propertySchema
                    }), [d, l]), f = (0, a(960253).I)(() => ({
                        tokenWrapper: { ...m ? {
                                width: "100%"
                            } : {}
                        }
                    }), [m]);
                    return {
                        element: (0, r.useMemo)(() => {
                            var e, t, r, n;
                            if (p.isLoading) {
                                let r = !!(!0 === s && (null == l || null == (e = l.propertySchema) ? void 0 : e.aggregation) && void 0 !== (0, a(567224).o_)(null == l || null == (t = l.propertySchema) ? void 0 : t.aggregation, "number"));
                                return (0, o.jsx)(a(540970).q, {
                                    isRightAligned: r
                                })
                            }
                            let {
                                rollupAggregationValue: i,
                                numberFormat: u,
                                numberPrecision: c
                            } = p;
                            if (void 0 !== i) return u ? (null == l || null == (r = l.propertySchema) || null == (r = r.show_as) ? void 0 : r.type) === "bar" || (null == l || null == (n = l.propertySchema) || null == (n = n.show_as) ? void 0 : n.type) === "ring" ? (0, o.jsx)(a(27507).h, {
                                isRightAligned: s,
                                style: f.tokenWrapper,
                                children: (0, o.jsx)(a(469316).E, {
                                    numberFormatOverride: u,
                                    numberPrecisionOverride: c,
                                    numberValue: i,
                                    isRightAligned: s,
                                    fullWidthBar: m
                                })
                            }) : (0, o.jsx)(a(361724).C, {
                                isRightAligned: s,
                                children: (0, o.jsx)(a(469316).E, {
                                    numberFormatOverride: u,
                                    numberPrecisionOverride: c,
                                    numberValue: i,
                                    isRightAligned: s
                                })
                            }) : (0, o.jsx)(a(361724).C, {
                                children: i
                            })
                        }, [s, null == l ? void 0 : l.propertySchema, p, m, f.tokenWrapper]),
                        isLoading: p.isLoading,
                        aggregationType: p.aggregationType
                    }
                }({
                    blockStore: t,
                    schema: p,
                    property: i,
                    rollupPropertyData: v,
                    numberRightAlign: s,
                    clientFormulaTimeoutMs: h
                }), S = function(e) {
                    let {
                        store: t,
                        rollupPropertyData: n,
                        numberRightAlign: i,
                        clientFormulaTimeoutMs: l,
                        surface: s,
                        targetCollectionStore: u
                    } = e, {
                        value: c
                    } = (0, a(815048).fJ)(a(864850).T.formulas), d = (0, a(533992).v3)(), g = (0, a(713311).Ks)(), p = (0, a(83208).X)("rollup_custom_number_format"), {
                        propertySchema: f
                    } = n || {}, y = (0, a(682985).K8)(() => (0, a(940270).yQ)({
                        viewType: null == g ? void 0 : g.getViewType(),
                        propertySchema: f
                    }), [g, f]), h = (0, a(682985).K8)(() => {
                        if (!n || !f) return [];
                        let e = new Map,
                            r = new Map,
                            o = new Map,
                            i = d.idCreator.getSpaceIdCreatorSync(t.getSpaceId());
                        if ("person" === n.rollupType) {
                            let s = t.getModel();
                            if (!s) return [];
                            let g = (0, a(465256).e)({
                                    textValue: f.person_property ? s.getProperty(f.person_property, t.getRecordModel) : void 0,
                                    propertySchema: n.personPropertySchema,
                                    blockCreatorPointer: a(993189).Bj6.fromBlock(s).getCreatedByPointer(),
                                    convertGroupPointersToBeComposite: !0
                                }),
                                p = [];
                            return (g.forEach(s => {
                                let g = t.getRecordModel(s);
                                if ((null == g ? void 0 : g.table) === "notion_user") {
                                    if ((0, a(26837).cl)(n.targetProperty)) {
                                        let e;
                                        n.targetProperty === a(94296).zi ? e = g.getEmail() : n.targetProperty === a(94296).Ym && (e = g.getFullName(a(962299).A.getIntl()) ? ? g.getEmail()), e && p.push({
                                            token: {
                                                id: e,
                                                type: "text",
                                                value: [
                                                    [e]
                                                ]
                                            },
                                            blockStore: null
                                        })
                                    } else if (n.targetCollectionSchema && n.targetPropertySchema && u) {
                                        if (!t.getSpaceId() || !(null != g && g.id)) return;
                                        let s = (0, a(907137).ZH)({
                                                spaceIdCreator: i,
                                                userId: g.id
                                            }),
                                            f = a(970831).B.createChildStore(t, s);
                                        m({
                                            textValue: f.getPropertyValue(n.targetProperty),
                                            blockStore: f,
                                            targetCollectionStore: u,
                                            targetPropertySchema: n.targetPropertySchema,
                                            targetProperty: n.targetProperty,
                                            currentUserId: d.currentUser.id,
                                            clientFormulaTimeoutMs: l,
                                            resultCache: e,
                                            regExpCache: r,
                                            formatDateCache: o,
                                            formulasModule: c,
                                            spaceIdCreator: i
                                        }).forEach(e => {
                                            p.push({
                                                token: e,
                                                blockStore: f
                                            })
                                        })
                                    }
                                }
                            }), "show_unique" === f.aggregation) ? a(381453).hS(p, e => e.token.id) : p
                        }
                        if ("relation" === n.rollupType && u && n.targetPropertySchema) {
                            let s = t.getModel(),
                                g = [];
                            if (s && f.relation_property && n.relationPropertySchema && n.targetCollectionModel) {
                                let e = a(561872).bG({
                                    relationValue: a(561872).n(s.getProperty(f.relation_property, t.getRecordModel)),
                                    getRecordModel: t.getRecordModel,
                                    propertySchema: n.relationPropertySchema,
                                    includeNoAccess: !0
                                }).map(e => a(970831).B.createChildStore(t, e));
                                g.push(...e.filter(e => {
                                    var t;
                                    return (null == (t = e.getAssociatedCollectionStore()) ? void 0 : t.id) === n.targetCollectionModel.id
                                }))
                            }
                            let p = [];
                            for (let t of g)
                                for (let a of m({
                                        textValue: t.getPropertyValue(n.targetProperty),
                                        blockStore: t,
                                        targetCollectionStore: u,
                                        targetPropertySchema: n.targetPropertySchema,
                                        targetProperty: n.targetProperty,
                                        currentUserId: d.currentUser.id,
                                        clientFormulaTimeoutMs: l,
                                        resultCache: e,
                                        regExpCache: r,
                                        formatDateCache: o,
                                        formulasModule: c,
                                        spaceIdCreator: i
                                    })) p.push({
                                    token: a,
                                    blockStore: t
                                });
                            return "show_unique" === f.aggregation ? a(381453).hS(p, e => e.token.id) : p
                        }
                        return []
                    }, [n, f, u, t, d, l, c]);
                    return (0, r.useMemo)(() => {
                        if (!(null != h && h.length) || !f) return;
                        let e = 1 === h.length,
                            r = h[0].token.type,
                            l = (0, a(531070).GL)(r, f),
                            u = function(e, t, r) {
                                if ((null == e ? void 0 : e.rollupType) !== "relation") return;
                                let {
                                    targetPropertySchema: o
                                } = e;
                                if (!r || !t || void 0 === t.number_format && void 0 === t.number_precision) return o;
                                let {
                                    number_format: n,
                                    number_precision: i
                                } = t;
                                return { ...o,
                                    ...void 0 !== n && (0, a(700369).Jf)(n) ? {
                                        number_format: n
                                    } : {},
                                    ...void 0 !== i ? {
                                        number_precision: i
                                    } : {}
                                }
                            }(n, f, p);
                        return (0, o.jsx)(a(531070).Ye, {
                            propertyType: r,
                            rootPropertySchema: f,
                            numberRightAlign: i,
                            children: h.map((r, n) => (0, o.jsx)(a(531070).yZ, {
                                token: r.token,
                                targetPropertySchema: u,
                                blockStore: r.blockStore ? ? t,
                                withComma: l && n < h.length - 1,
                                numberRightAlign: i,
                                shouldTruncate: e && "compact_page" === s,
                                fullWidthBar: y
                            }, `${r.token.id}-${n}`))
                        })
                    }, [h, f, i, s, t, n, y, p])
                }({
                    store: t,
                    rollupPropertyData: v,
                    numberRightAlign: s,
                    clientFormulaTimeoutMs: h,
                    targetCollectionStore: y,
                    surface: u ? ? "page"
                }), k = !b && !S, A = (0, a(682985).K8)(() => {
                    if (k || !v) return "text";
                    let {
                        targetPropertySchema: e,
                        propertySchema: t
                    } = v;
                    return (null == t ? void 0 : t.aggregation) !== void 0 && "show_unique" !== t.aggregation ? void 0 !== (0, a(567224).o_)(t.aggregation, "number") ? "number" : "text" : e ? function(e) {
                        if (!e) return "text";
                        if ("formula" === e.type) {
                            if (e.formula2) {
                                let t = (0, a(297493).pg)(e.formula2.result_type).type;
                                return "block" === t ? "relation" : "unknown" === t || "array" === t || "undefined" === t ? "text" : t
                            }
                            return "text"
                        }
                        return "rollup" === e.type ? "text" : e.type
                    }(e) : "text"
                }, [k, v]);
                return f ? {
                    type: "error",
                    errorKind: "configuration-error"
                } : _ ? {
                    type: "error",
                    errorKind: "no-access"
                } : x || "unknown" === M ? {
                    type: "loading"
                } : {
                    type: "result",
                    rollupPropertyData: v,
                    rollupAggregationValue: b,
                    rollupTokens: S,
                    propertyStylingType: A,
                    aggregationType: "unconfigured" === M ? void 0 : M
                }
            }
            let d = {
                    noAccessStyle: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 14,
                        fontWeight: a(699422).Wy.medium
                    }
                },
                g = r.memo(r.forwardRef(function(e, t) {
                    let {
                        store: n,
                        property: i,
                        EmptyComponent: l,
                        onContextMenu: s,
                        editButtonClickProps: u,
                        checkboxButtonStyle: g,
                        textButtonStyle: m,
                        buttonButtonStyle: f,
                        quickActionButtons: y,
                        numberRightAlign: h,
                        userExpandable: v
                    } = e, {
                        baseStyles: _,
                        surface: b,
                        collectionSchemaStore: x,
                        collectionContextStore: M
                    } = (0, r.useContext)(a(422575).L8), S = c({ ...e,
                        surface: b,
                        collectionSchemaStore: x
                    }), k = "result" === S.type ? S.propertyStylingType : void 0, A = "result" === S.type ? S.rollupPropertyData : void 0, w = "result" === S.type ? S.rollupAggregationValue : void 0, C = "result" === S.type ? S.rollupTokens : void 0, P = "result" === S.type ? S.aggregationType : void 0, T = !w && !C, R = "loading" === S.type, j = "error" === S.type && "no-access" === S.errorKind;
                    ! function(e) {
                        let {
                            store: t,
                            property: o,
                            isLoading: n,
                            aggregationType: i
                        } = e, {
                            surface: l,
                            collectionContextStore: s
                        } = (0, r.useContext)(a(422575).L8);
                        (0, a(383953).w)(() => {
                            var e;
                            "table" === l && (null == s || null == (e = s.propertyResultDurationTracker) || e.trackMount({
                                pageId: t.id,
                                propertyId: o,
                                propertyType: "rollup"
                            }))
                        }), (0, r.useEffect)(() => {
                            if ("table" === l && !n && "unconfigured" !== i && "unknown" !== i) {
                                var e;
                                null == s || null == (e = s.propertyResultDurationTracker) || e.trackResult({
                                    pageId: t.id,
                                    propertyId: o,
                                    propertyType: "rollup",
                                    context: {
                                        rollup_aggregation_type: i
                                    }
                                })
                            }
                        }, [s, l, o, t, n, i])
                    }({
                        store: n,
                        property: i,
                        isLoading: R,
                        aggregationType: P
                    });
                    let B = (0, r.useMemo)(() => {
                            if (T || !A) return !1;
                            switch (A.rollupType) {
                                case "person":
                                    return (0, a(793550).Lo)(A.rollupType);
                                case "relation":
                                    return (0, a(793550).Lo)(A.targetPropertySchema.type)
                            }
                        }, [T, A]),
                        I = (0, r.useMemo)(() => !T && !!A && "checkbox" !== A.targetPropertySchema.type, [T, A]),
                        F = (0, a(682985).K8)(() => (0, a(940270).yQ)({
                            viewType: null == M ? void 0 : M.getViewType(),
                            propertySchema: null == A ? void 0 : A.propertySchema
                        }), [M, A]),
                        N = (0, a(960253).I)(() => ({
                            buttonStyle: { ..._.buttonStyle,
                                ..."checkbox" === k ? g : {},
                                ...void 0 !== k && "title" !== k && (0, a(916769).YX)(k) ? m : {},
                                ...void 0 !== k && (0, a(916769)._t)(k) ? f : {},
                                ...F ? {
                                    width: "inherit"
                                } : {}
                            },
                            buttonPressedStyle: _.buttonPressedStyle ? ? {},
                            buttonHoveredStyle: _.buttonHoveredStyle ? ? {}
                        }), [_.buttonHoveredStyle, _.buttonPressedStyle, _.buttonStyle, f, g, k, m, F]);
                    if (R) return (0, o.jsx)(a(540970).q, {
                        isRightAligned: !0 === h
                    });
                    if (T && void 0 === l) return null;
                    let V = !0 === h && "number" === k,
                        L = (null == y ? void 0 : y.includes("expand")) && (T || !I);
                    return (0, o.jsx)(a(858439).P, {
                        ref: t,
                        onContextMenu: s,
                        editButtonClickProps: L ? void 0 : u,
                        style: N.buttonStyle,
                        pressedStyle: N.buttonPressedStyle,
                        hoveredStyle: N.buttonHoveredStyle,
                        quickActionButtons: y ? (0, o.jsx)(p, {
                            buttons: y,
                            editButtonClickProps: u,
                            store: n,
                            property: i,
                            surface: b,
                            isCopyable: B,
                            isExpandable: I
                        }) : void 0,
                        quickActionButtonsAlign: V ? "left" : void 0,
                        userExpandable: v,
                        forceEnableButton: !T && (null == y ? void 0 : y.includes("expand")) && I,
                        children: T ? l ? (0, o.jsx)(l, {}) : null : j ? (0, o.jsxs)("div", {
                            style: d.noAccessStyle,
                            children: [(0, o.jsx)(a(16275).I, {
                                icon: a(349608).M,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, o.jsx)(a(109939).sA, {
                                id: "rollupProperty.noAccess",
                                defaultMessage: "No access"
                            })]
                        }) : w ? ? C
                    })
                }));

            function p({
                buttons: e,
                editButtonClickProps: t,
                store: r,
                property: n,
                surface: i,
                isCopyable: s,
                isExpandable: c
            }) {
                let d = e.map(e => {
                    switch (e) {
                        case "edit":
                            return (0, o.jsx)(l, {
                                type: "rollup",
                                editButtonClickProps: t
                            }, e);
                        case "copy":
                            if (s) return (0, o.jsx)(a(965192).i, {
                                store: r,
                                property: n,
                                surface: i
                            }, e);
                            return null;
                        case "expand":
                            if (!c) return null;
                            return (0, o.jsx)(u, {
                                editButtonClickProps: { ...t,
                                    surface: "compact_page"
                                }
                            }, e);
                        default:
                            (0, a(722371).HB)(e)
                    }
                }).filter(a(722371).Pe);
                return d ? (0, o.jsx)(o.Fragment, {
                    children: d
                }) : null
            }

            function m(e) {
                var t, r;
                let {
                    textValue: o,
                    blockStore: n,
                    targetCollectionStore: i,
                    targetPropertySchema: l,
                    targetProperty: s,
                    clientFormulaTimeoutMs: u,
                    resultCache: c,
                    regExpCache: d,
                    formatDateCache: g,
                    formulasModule: p,
                    spaceIdCreator: m
                } = e, {
                    type: f
                } = l;
                switch (f) {
                    case "auto_increment_id":
                        if (void 0 === o) return [];
                        let y = null == (t = i.getRecordKeyStore()) ? void 0 : t.getRecordKey(),
                            h = (0, a(154326).H4)(y, a(561872).On(o));
                        if (!h) return [];
                        return [{
                            id: h,
                            type: "text",
                            value: [
                                [h]
                            ]
                        }];
                    case "button":
                    case "rollup":
                    case "location":
                    case "verification":
                        return [];
                    case "checkbox":
                        {
                            let e = (0, a(896216).w)(o);
                            return [{
                                id: e,
                                type: "checkbox",
                                value: e
                            }]
                        }
                    case "date":
                        {
                            let e = (0, a(179358).b)(o);
                            if (void 0 === e) return [];
                            return [{
                                id: a(850640).ZF({
                                    allowRelativeDates: !1,
                                    value: e,
                                    userTimeZone: (0, a(714350).P)(),
                                    intl: a(962299).A.getIntl()
                                }),
                                type: "date",
                                value: e
                            }]
                        }
                    case "email":
                    case "phone_number":
                    case "url":
                        if (void 0 === o) return [];
                        return [{
                            id: (0, a(247438).k4p)(o),
                            type: f,
                            value: o
                        }];
                    case "file":
                        return a(561872).pJ(o, l).map(e => ({
                            id: e.url,
                            type: "file",
                            value: e
                        }));
                    case "formula":
                        {
                            let e = n.getModel();
                            if (void 0 === e || !p) return [];
                            let t = a(962299).A.getIntl(),
                                o = (0, a(714350).P)();
                            if ((0, a(537664).F)(l)) {
                                if (!(null != (r = l.formula2) && r.code)) return [];
                                let i = p.evaluateCollectionFormula2({
                                    block: e,
                                    property: s,
                                    formulaCode: l.formula2.code,
                                    getRecordModel: n.getRecordModel,
                                    intl: t,
                                    userTimeZone: o,
                                    depth: 0,
                                    visitedProperties: new Set,
                                    formulaTimeoutTimestampMs: Date.now() + u,
                                    resultCache: c,
                                    regExpCache: d,
                                    formatDateCache: g,
                                    experimentService: a(218744).default,
                                    collectionFeatureGates: (0, a(457103).i)(),
                                    spaceIdCreator: m
                                });
                                if (!i) return [];
                                return (0, a(352711).O)(i, n.getRecordModel, o)
                            } {
                                let r = p.evaluateFormulaProperty({
                                    property: s,
                                    schema: n.getSchema(),
                                    block: e,
                                    getRecordModel: n.getRecordModel,
                                    collectionRequestContext: {
                                        userId: void 0,
                                        userTimeZone: o,
                                        depth: 0,
                                        intl: t,
                                        resultCache: c,
                                        regExpCache: d,
                                        formatDateCache: g,
                                        visitedProperties: new Set,
                                        formulaTimeoutTimestampMs: Date.now() + u,
                                        experimentService: a(218744).default,
                                        collectionFeatureGates: (0, a(457103).i)(),
                                        getRelationEdgeList: (0, a(323082).Y)({
                                            environment: n.environment,
                                            spaceId: n.getSpaceId()
                                        }),
                                        sourceCollectionId: i.id
                                    },
                                    spaceIdCreator: m
                                });
                                return (0, a(157912).lY)(r)
                            }
                        }
                    case "select":
                        {
                            let e = a(561872).L3(o, l.options ? ? []);
                            if (!l.options || !e) return [];
                            let t = (0, a(561872).FE)(l.options ? ? [], e);
                            return [{
                                id: e,
                                type: "select",
                                value: e,
                                color: t
                            }]
                        }
                    case "multi_select":
                        return a(561872).o2(o, l.options ? ? []).map(e => {
                            let t = (0, a(561872).FE)(l.options ? ? [], e);
                            return {
                                id: e,
                                type: "select",
                                value: e,
                                color: t
                            }
                        });
                    case "number":
                        {
                            let e = a(588688).M(o);
                            if (void 0 === e) return [];
                            return [{
                                id: e,
                                type: "number",
                                value: e
                            }]
                        }
                    case "person":
                        return (0, a(465256).e)({
                            textValue: o,
                            propertySchema: l,
                            blockCreatorPointer: n.getCreatedByPointer(),
                            convertGroupPointersToBeComposite: !0
                        }).map(e => ({
                            id: e.id,
                            type: "person",
                            value: e
                        }));
                    case "title":
                        if (void 0 === i) return [];
                        return [{
                            id: (0, a(458230).r4)({
                                textValue: o,
                                getRecordModel: n.getRecordModel,
                                deterministic: !0,
                                userTimeZone: (0, a(714350).P)(),
                                intl: a(962299).A.getIntl()
                            }),
                            type: "relation",
                            value: {
                                id: n.id,
                                table: "block",
                                spaceId: i.getSpaceId()
                            }
                        }];
                    case "relation":
                        if (void 0 === i) return [];
                        return a(561872).bG({
                            relationValue: a(561872).n(o),
                            getRecordModel: n.getRecordModel,
                            propertySchema: l,
                            includeNoAccess: !0
                        }).map(e => ({
                            id: e.id,
                            type: "relation",
                            value: e
                        }));
                    case "status":
                        {
                            let e = a(561872).RZ(o, l),
                                {
                                    options: t,
                                    groups: r
                                } = l,
                                n = null == t ? void 0 : t.find(t => t.value === e);
                            if (void 0 === e || void 0 === n) return [];
                            let i = null == r ? void 0 : r.find(e => {
                                var t;
                                return null == (t = e.optionIds) ? void 0 : t.includes(n.id)
                            });
                            return [{
                                id: e,
                                type: "select",
                                value: e,
                                color: n.color,
                                groupColor: (null == i ? void 0 : i.color) ? ? "default"
                            }]
                        }
                    case "text":
                        if (void 0 === o) return [];
                        let v = (0, a(458230).r4)({
                            textValue: o,
                            getRecordModel: n.getRecordModel,
                            deterministic: !0,
                            userTimeZone: (0, a(714350).P)(),
                            intl: a(962299).A.getIntl()
                        });
                        if (0 === v.length) return [];
                        return [{
                            id: v,
                            type: "text",
                            value: o
                        }];
                    case "created_by":
                        let _ = n.getCreatedByPointer();
                        if (!_) return [];
                        return [{
                            id: _.id,
                            type: "person",
                            value: _
                        }];
                    case "created_time":
                        {
                            let e = n.getCreatedTime(),
                                t = (0, a(25825).KQ)(e, (0, a(714350).P)());
                            return [{
                                id: e,
                                type: "date",
                                value: t
                            }]
                        }
                    case "last_edited_by":
                        {
                            let e = n.getLastEditedByPointer();
                            if (!e) return [];
                            return [{
                                id: e.id,
                                type: "person",
                                value: e
                            }]
                        }
                    case "last_edited_time":
                        {
                            let e = n.getLastEditedTime(),
                                t = (0, a(25825).KQ)(e, (0, a(714350).P)());
                            return [{
                                id: e,
                                type: "date",
                                value: t
                            }]
                        }
                    case "last_visited_time":
                        {
                            let {
                                currentUserId: t
                            } = e;
                            if (!t) return [];
                            let r = (0, a(665619).$5)({
                                    parent_id: n.id,
                                    user_id: t
                                }),
                                o = a(726570)._.createChildStore(n, {
                                    table: a(832375).F9f,
                                    id: r,
                                    spaceId: n.getSpaceId()
                                }).getModel(),
                                i = null == o ? void 0 : o.getVisitedAt();
                            if (!i) return [];
                            let l = (0, a(25825).KQ)(i, (0, a(714350).P)());
                            return [{
                                id: i,
                                type: "date",
                                value: l
                            }]
                        }
                    case "place":
                        {
                            let e = (0, a(862060).X1)((0, a(862060).eC)(o));
                            if (!e) return [];
                            return [{
                                id: e,
                                type: "text",
                                value: [
                                    [e]
                                ]
                            }]
                        }
                    default:
                        (0, a(722371).HB)(f)
                }
            }
            let f = r.forwardRef(function(e, t) {
                    let {
                        shouldWrap: n
                    } = (0, r.useContext)(a(422575).L8), i = (0, a(533992).WS)(), l = A(e, t, (0, a(960253).I)(() => {
                        let e = (0, a(642065)._Q)({
                            isPhone: i
                        });
                        return {
                            checkboxButtonStyle: { ...e.table.checkbox
                            },
                            textButtonStyle: { ...e.table.text
                            },
                            buttonButtonStyle: { ...e.table.button
                            }
                        }
                    }, [i]));
                    return (0, o.jsx)(g, { ...l,
                        numberRightAlign: !0,
                        EmptyComponent: a(959110).rW,
                        quickActionButtons: ["edit", "copy"],
                        userExpandable: n
                    })
                }),
                y = r.forwardRef(function(e, t) {
                    let r = (0, a(533992).WS)(),
                        n = A(e, t, (0, a(960253).I)(() => {
                            let e = (0, a(642065)._Q)({
                                isPhone: r
                            });
                            return {
                                checkboxButtonStyle: { ...e.page.checkbox
                                },
                                textButtonStyle: { ...e.page.text
                                },
                                buttonButtonStyle: { ...e.page.button
                                }
                            }
                        }, [r]));
                    return (0, o.jsx)(g, { ...n,
                        quickActionButtons: ["edit", "copy"],
                        EmptyComponent: a(959110).ao
                    })
                }),
                h = r.forwardRef(function(e, t) {
                    let r = (0, a(533992).WS)(),
                        n = A(e, t, (0, a(960253).I)(() => {
                            let e = (0, a(642065)._Q)({
                                isPhone: r
                            });
                            return {
                                checkboxButtonStyle: { ...e.compact_page.checkbox
                                },
                                textButtonStyle: { ...e.compact_page.text
                                },
                                buttonButtonStyle: { ...e.compact_page.button
                                }
                            }
                        }, [r])),
                        i = (0, a(83208).X)("rollup_pinned_property_expand");
                    return (0, o.jsx)(g, { ...n,
                        quickActionButtons: i && !r ? ["expand"] : void 0,
                        EmptyComponent: a(959110).ao
                    })
                }),
                v = r.forwardRef(function(e, t) {
                    let r = A(e, t);
                    return (0, o.jsx)(g, { ...r,
                        EmptyComponent: a(959110).Fe
                    })
                }),
                _ = r.forwardRef(function(e, t) {
                    let r = (0, a(228315).F)({
                            ref: t,
                            collectionStore: e.collectionStore,
                            property: e.property,
                            propertyType: "rollup"
                        }),
                        n = A(e, t, r);
                    return (0, o.jsx)(g, { ...n
                    })
                }),
                b = r.forwardRef(function(e, t) {
                    let r = (0, a(533992).WS)(),
                        n = A(e, t, (0, a(960253).I)(() => {
                            let e = (0, a(642065)._Q)({
                                isPhone: r
                            });
                            return {
                                checkboxButtonStyle: { ...e.card.checkbox
                                },
                                textButtonStyle: { ...e.card.text
                                },
                                buttonButtonStyle: { ...e.card.button
                                }
                            }
                        }, [r]));
                    return (0, o.jsx)(g, { ...n
                    })
                }),
                x = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, o.jsx)(g, { ...a
                    })
                }),
                M = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, o.jsx)(g, { ...a
                    })
                }),
                S = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, o.jsx)(g, { ...a
                    })
                }),
                k = r.forwardRef(function(e, t) {
                    let a = A(e, t);
                    return (0, o.jsx)(g, { ...a
                    })
                });

            function A(e, t, r) {
                let {
                    store: o,
                    onContextMenu: n,
                    property: i,
                    collectionStore: l
                } = e;
                return {
                    ref: t,
                    store: o,
                    property: i,
                    collectionStore: l,
                    editButtonClickProps: (0, a(973681).QK)(e),
                    onContextMenu: n,
                    checkboxButtonStyle: null == r ? void 0 : r.checkboxButtonStyle,
                    textButtonStyle: null == r ? void 0 : r.textButtonStyle,
                    buttonButtonStyle: null == r ? void 0 : r.buttonButtonStyle
                }
            }
        },
        955582: (e, t, a) => {
            a.d(t, {
                a: () => l
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var r = () => a(722371),
                o = () => a(197018),
                n = () => a(659341),
                i = () => a(247438);

            function l(e) {
                let {
                    value: t,
                    isTemplatePage: a,
                    propertySchema: l,
                    blockCreatorPointer: s
                } = e;
                if (!l) return [];
                let u = i().ELt({
                        includeTemplateVariables: a,
                        value: t
                    }),
                    c = new Set,
                    d = [];
                for (let e of u) {
                    let t;
                    (0, o().Pu)(e) ? t = e.id: i().MMZ(e) ? t = e : (0, n().I6)(e) ? t = e.id : (0, r().HB)(e), c.has(t) || (c.add(t), d.push(e))
                }
                0 === d.length && "created_by" === l.default && s && (d = [s]);
                let g = l.limit;
                return g ? d.slice(0, g) : d
            }
        },
        965192: (e, t, a) => {
            a.d(t, {
                i: () => s
            });
            var r = a(296540),
                o = a(474848);
            let n = (0, a(109939).YK)({
                    copy: {
                        defaultMessage: "Copy to Clipboard",
                        id: "database.copyButton.copyToClipboard"
                    }
                }),
                i = {
                    display: "flex",
                    position: "relative"
                },
                l = {
                    height: 20,
                    width: 24,
                    borderRadius: 4
                },
                s = r.memo(function(e) {
                    let {
                        store: t,
                        property: s,
                        surface: u
                    } = e, c = (0, a(533992).v3)(), d = (0, a(960253).e)(), g = (0, a(109939).tz)(), p = (0, a(713311).Ks)(), {
                        collectionSchemaStore: m
                    } = (0, r.useContext)(a(422575).L8), {
                        isEmptyStore: f,
                        propertySchema: y,
                        canEdit: h
                    } = (0, r.useContext)(a(422575).L8), v = (0, a(682985).O$)(f), _ = "table" === u, b = g.formatMessage(n.copy), x = (0, r.useCallback)(() => b, [b]), M = (0, r.useCallback)(e => (0, o.jsx)("div", {
                        style: i,
                        ...e,
                        children: (0, o.jsx)(a(374533).A, {
                            onClick: async () => {
                                let e, r = m.getState();
                                r && (_ && (e = a(544921).A.getState(), (0, a(411282).w)()), await a(305866).E({
                                    environment: c,
                                    theme: a(632079).Tj,
                                    themeMode: d,
                                    store: t,
                                    schema: r,
                                    property: s,
                                    collectionContextStore: p
                                }), _ && e && a(544921).A.setState(e))
                            },
                            ariaLabel: b,
                            icon: a(682006).a,
                            colorVariant: "secondary",
                            style: l
                        })
                    }), [p, m, c, _, s, t, b, d]);
                    return void 0 === y || v || a(986939).A.isMobile && !0 === h || "checkbox" === (0, a(162207).c)(y) ? null : (0, o.jsx)(a(51831).m, {
                        content: x,
                        children: M
                    })
                })
        },
        990762: (e, t, a) => {
            a.d(t, {
                Vt: () => n,
                wC: () => o
            });
            let r = {
                    CollectionMapView: new(a(815048)).O2("CollectionMapView", async () => await Promise.all([a.e(9773), a.e(36556), a.e(40537), a.e(71562), a.e(53066), a.e(36342), a.e(15021), a.e(51680)]).then(a.bind(a, 380484))),
                    MapTile: new(a(815048)).O2("MapTile", async () => await Promise.all([a.e(9773), a.e(36556), a.e(40537), a.e(36342), a.e(80983)]).then(a.bind(a, 677660)))
                },
                o = (0, a(815048)._h)(r.CollectionMapView, e => e.CollectionMapView),
                n = (0, a(815048)._h)(r.MapTile, e => e.MapTile)
        }
    }
]);