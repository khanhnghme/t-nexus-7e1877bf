"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [75234], {
        50171: (e, t, o) => {
            o.r(t), o.d(t, {
                exclamationMarkTriangleSmallIcon: () => r,
                iconDefinition: () => l
            }), o(296540);
            var n = o(474848);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.87 13.01 11.75",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.9 5.281a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, n.jsx)("path", {
                            d: "M9.58 2.788c-.702-1.217-2.458-1.217-3.16 0l-4.677 8.1c-.702 1.216.176 2.737 1.58 2.737h9.354c1.405 0 2.283-1.52 1.58-2.738zm-2.078.625a.575.575 0 0 1 .996 0l4.677 8.1a.575.575 0 0 1-.498.862H3.324a.575.575 0 0 1-.498-.863z"
                        })]
                    })
                },
                r = (0, o(104509).wt)("exclamationMarkTriangleSmall", l, "small")
        },
        67954: (e, t, o) => {
            o.d(t, {
                DV: () => s,
                PD: () => a,
                Pr: () => l,
                UB: () => c,
                Wm: () => i,
                Z6: () => r
            });
            var n = o(296540);
            let l = n.createContext(void 0);
            l.displayName = "ColumnVirtualizerContext";
            let r = n.createContext(!1);
            r.displayName = "ColumnVirtualizerExistenceContext";
            let i = n.createContext({
                propertiesInRange: [],
                propertiesInRangeIndices: [],
                beforeWidth: 0,
                afterWidth: 0
            });

            function a() {
                return (0, n.useContext)(l)
            }

            function s() {
                return (0, n.useContext)(r)
            }

            function c() {
                return (0, n.useContext)(i)
            }
            i.displayName = "ColumnVirtualizerVisiblePropertiesContext"
        },
        221149: (e, t, o) => {
            o.d(t, {
                A: () => l
            }), o(296540);
            var n = o(474848);

            function l(e) {
                let {
                    icon: t,
                    iconStyle: l,
                    tooltip: r,
                    onClick: i,
                    showShadow: a,
                    style: s,
                    hasBackground: c
                } = e;
                return (0, n.jsx)(o(51831).m, {
                    content: () => r,
                    children: e => (0, n.jsx)(o(374533).A, {
                        ariaLabel: r,
                        icon: t,
                        iconStyle: l,
                        onClick: i,
                        hasBackground: void 0 === c || c,
                        showShadow: a,
                        ...e,
                        style: s
                    })
                })
            }
        },
        228315: (e, t, o) => {
            o.d(t, {
                F: () => i,
                X: () => l
            }), o(898992), o(354520), o(581454);
            var n = o(296540);
            let l = 120,
                r = {
                    title: [120, 400],
                    text: [100, 300],
                    number: [100, 150],
                    select: [100, 150],
                    multi_select: [100, 200],
                    date: [100, 150],
                    person: [100, 350],
                    file: [100, 150],
                    checkbox: [40, 100],
                    phone_number: [100, 150],
                    formula: [100, 150],
                    relation: [100, 150],
                    rollup: [100, 150],
                    created_time: [100, 150],
                    created_by: [100, 150],
                    last_edited_time: [100, 150],
                    last_edited_by: [100, 150],
                    last_visited_time: [100, 150],
                    button: [100, 150],
                    status: [100, 150],
                    auto_increment_id: [100, 150],
                    location: [100, 200],
                    verification: [100, 150],
                    place: [100, 150]
                };

            function i(e) {
                let {
                    ref: t,
                    collectionStore: i,
                    property: a,
                    propertyType: s
                } = e, [c, d] = r[s], {
                    collectionContextStore: u
                } = (0, n.useContext)(o(422575).L8), {
                    isBeforeTitle: p,
                    propertyIndex: y,
                    titleIndex: g,
                    visibleProperties: m,
                    showIcon: f
                } = (0, o(682985).K8)(() => {
                    var e, t;
                    if (!i) return {
                        isBeforeTitle: !1,
                        propertyIndex: -1,
                        titleIndex: -1,
                        visibleProperties: [],
                        showIcon: !1
                    };
                    let n = (null == u || null == (e = u.collectionViewStore()) ? void 0 : e.getFormat()) ? ? {},
                        l = (null == u ? void 0 : u.shouldShowPageIcon()) ? ? !1,
                        r = ((null == (t = n.list_properties) ? void 0 : t.filter(e => e.visible)) ? ? []).map(e => (0, o(940270).Le)({
                            collectionStore: i,
                            collectionContextStore: u,
                            property: e.property
                        }));
                    if (void 0 === r) return {
                        isBeforeTitle: !1,
                        propertyIndex: -1,
                        titleIndex: -1,
                        visibleProperties: [],
                        showIcon: !1
                    };
                    let s = r.findIndex(e => "title" === e),
                        c = r.findIndex(e => e === a);
                    return -1 === s || -1 === c ? {
                        isBeforeTitle: !1,
                        propertyIndex: -1,
                        titleIndex: -1,
                        visibleProperties: [],
                        showIcon: !1
                    } : {
                        isBeforeTitle: c < s,
                        propertyIndex: c,
                        titleIndex: s,
                        visibleProperties: r,
                        showIcon: l
                    }
                }, [u, i, a]), [v, h] = (0, n.useState)(null);
                return (0, n.useEffect)(() => {
                    if (!t || !("current" in t) || !t.current) return;
                    let e = t.current,
                        o = new ResizeObserver(e => {
                            var t;
                            let o = null == (t = e[0]) ? void 0 : t.contentRect.width;
                            o && h(o)
                        });
                    return o.observe(e), () => {
                        o.disconnect()
                    }
                }, [t]), (0, o(960253).I)(() => {
                    if (void 0 === a || void 0 === s) return {};
                    let e = {};
                    0 === y ? e.marginInlineStart = 0 : y === m.length - 1 && (e.marginInlineEnd = 0);
                    let t = Math.floor(100 / m.length);
                    return (y !== g && p && g > 0 ? e.maxWidth = `calc((100% - ${l}px) / ${g})` : "location" === s ? e.maxWidth = d : y === g ? g > 0 && !f && (e.marginInlineStart = 4) : (null !== v && v >= c && (e.minWidth = c), e.maxWidth = `max(${d}px, ${t}%)`), "rollup" === s) ? {
                        textButtonStyle: e,
                        buttonButtonStyle: e
                    } : {
                        buttonStyle: e
                    }
                }, [a, s, y, m.length, g, p, v, c, d, f])
            }
        },
        243904: (e, t, o) => {
            o.d(t, {
                k: () => a
            }), o(898992), o(354520), o(908872);
            var n = o(296540),
                l = o(474848);
            let r = (0, o(109939).YK)({
                    comment_on_property: {
                        defaultMessage: "Comment",
                        id: "database.CommentButton.commentOnPropertyValue"
                    },
                    open_discussion: {
                        defaultMessage: "Open discussion",
                        id: "database.CommentButton.openDiscussion"
                    }
                }),
                i = {
                    position: "relative",
                    display: "flex"
                },
                a = n.memo(function() {
                    let e = (0, o(109939).tz)(),
                        t = (0, o(533992).v3)(),
                        {
                            isEmptyStore: a,
                            propertySchema: s,
                            surface: c,
                            collectionContextStore: d,
                            property: u,
                            store: p,
                            disabled: y
                        } = (0, n.useContext)(o(422575).L8),
                        g = (0, o(682985).O$)(a),
                        m = (0, o(682985).K8)(() => null == d ? void 0 : d.collectionStore(), [d]),
                        f = (0, o(422575).O2)({
                            store: p,
                            collectionStore: m,
                            property: u,
                            disabled: y,
                            surface: c,
                            propertySchema: s,
                            collectionContextStore: d,
                            writeStateType: "comment"
                        }),
                        v = (0, o(682985).K8)(() => o(575125).A.state.open, []),
                        h = (0, o(682985).K8)(() => u && p ? (0, o(966980).O3)(p, {
                            recursivelyLoadAllDiscussions: !1,
                            includePropertyDiscussions: !0
                        }).filter(t => t.getPropertyId() === u && (0, o(799514).q7)({
                            discussionStore: t,
                            intl: e,
                            blockStore: p,
                            property_id: u
                        })).reduce((e, t) => {
                            let o = t.getModel();
                            return o ? {
                                comments: e.comments + (o.getComments() || []).length
                            } : e
                        }, {
                            comments: 0
                        }).comments : 0, [e, u, p]),
                        S = h > 99 ? "99+" : `${h}`,
                        x = (0, o(682985).K8)(() => {
                            var e;
                            return (0, o(722371).O9)(p) && o(332190).A.state.open && o(332190).A.isPropertyComment() && (null == (e = o(332190).A.state) ? void 0 : e.blockId) === p.id && o(332190).A.getPropertyId() === u
                        }, [u, p]),
                        b = (0, o(682985).K8)(() => {
                            if (!m) return !1;
                            let e = "compact_page" === c,
                                t = m.canEditCollection();
                            return !e || !t
                        }, [m, c]),
                        _ = (0, n.useMemo)(() => !(h <= 0) && function(e) {
                            switch (e) {
                                case "table":
                                case "board":
                                case "calendar":
                                case "list":
                                case "feed":
                                case "gallery":
                                case "timeline":
                                case "mini":
                                case "form_editor":
                                case "form_viewer":
                                    return !1;
                                case "property_module":
                                case "page":
                                case "compact_page":
                                case "relation":
                                case "relation_section":
                                    return !0;
                                default:
                                    (0, o(722371).HB)(e)
                            }
                        }(c), [h, c]),
                        w = (0, n.useMemo)(() => h > 0 ? e.formatMessage(r.open_discussion) : e.formatMessage(r.comment_on_property), [e, h]),
                        k = (0, n.useCallback)(async () => {
                            u && p && (v ? o(821243).xl() : (0, o(88527).O)(p) || (h > 0 ? await o(821243).B4({
                                environment: t,
                                blockStore: p,
                                shouldFocusDiscussion: !0,
                                analyticsFrom: "db_quick_action",
                                recursivelyLoadAllDiscussions: !1,
                                property_id: u,
                                openFullPropertyDiscussionOnly: !0,
                                intl: e
                            }) : x ? o(827862).A.setActiveWithSource("popover_comments") : await (0, o(476081).l)({
                                environment: t,
                                blockStore: p,
                                rect: o(668984).A.getRect(p, u),
                                property_id: u
                            })))
                        }, [u, p, v, h, t, e, x]),
                        C = (0, n.useCallback)(e => (0, l.jsx)("div", { ...e,
                            style: i,
                            children: (0, l.jsx)(o(487769).M, {
                                icon: o(366326)._,
                                size: "xs",
                                countLabel: S,
                                ariaLabel: w,
                                onClick: k,
                                indicatorStatus: x ? "draft" : void 0,
                                isPropertyComment: !0
                            }, `comment-btn-${h}`)
                        }), [S, x, h, k, w]),
                        I = (0, n.useCallback)(() => w, [w]);
                    return !s || g || !b || _ || o(986939).A.isMobile || !f || (0, o(9247).F_)(s.type) ? null : (0, l.jsx)(o(51831).m, {
                        content: I,
                        children: C
                    })
                })
        },
        260682: (e, t, o) => {
            o.d(t, {
                $: () => l
            });
            let n = ["button", "formula", "auto_increment_id", "file"];

            function l(e) {
                let {
                    propertyType: t,
                    propertySchema: l,
                    allowAIProperty: r
                } = e, i = (0, o(722371).O9)(l) && (0, o(9247).$M)(l) && (0, o(722371).O9)((0, o(9247).om)(l)), a = (0, o(722371).O9)((0, o(561872).Dz)(l));
                return n.includes(t) || !r && i || a
            }
        },
        305866: (e, t, o) => {
            o.d(t, {
                DJ: () => c,
                E: () => r,
                VE: () => d
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(672577);
            var n = () => o(561872),
                l = () => o(41403);
            async function r(e) {
                let {
                    environment: t,
                    theme: l,
                    themeMode: r,
                    store: c,
                    schema: d,
                    property: u,
                    collectionContextStore: p
                } = e, y = t.device, g = d[u], [m, {
                    copyString: f,
                    copyHtml: v
                }] = await Promise.all([(0, o(161333).r)(), (0, o(969899).bZ)()]);
                if (!g) return;
                let h = m.copiedPropertyToClipboard;
                switch (g.type) {
                    case "formula":
                        {
                            let e = await o(864850).T.formulas.load();
                            (0, o(537664).F)(g) ? function(e) {
                                let {
                                    copyString: t,
                                    environment: n,
                                    store: l,
                                    propertySchema: r,
                                    property: i,
                                    formulasModule: a,
                                    copiedPropertyToClipboardMessage: s
                                } = e, c = l.getModel();
                                if (!r.formula2 || !c) return;
                                let d = o(962299).A.getIntl(),
                                    u = (0, o(714350).P)(),
                                    p = a.evaluateCollectionFormula2({
                                        block: c,
                                        property: i,
                                        formulaCode: r.formula2.code,
                                        getRecordModel: l.getRecordModel,
                                        intl: d,
                                        userTimeZone: u,
                                        depth: 0,
                                        visitedProperties: new Set,
                                        resultCache: new Map,
                                        regExpCache: new Map,
                                        formatDateCache: new Map,
                                        experimentService: o(218744).default,
                                        collectionFeatureGates: (0, o(457103).i)(),
                                        spaceIdCreator: n.idCreator.getSpaceIdCreatorSync(l.getSpaceId())
                                    });
                                if (!p) return;
                                let y = (0, o(297493).Ht)(p);
                                t({
                                    stringValue: (0, o(536614).r4)(y, l),
                                    environment: n,
                                    copiedMessage: s
                                })
                            }({
                                copyString: f,
                                environment: t,
                                store: c,
                                propertySchema: g,
                                property: u,
                                formulasModule: e,
                                copiedPropertyToClipboardMessage: h
                            }) : function(e) {
                                var t;
                                let {
                                    copiedPropertyToClipboardMessage: n,
                                    copyString: l,
                                    environment: r,
                                    store: i,
                                    schema: c,
                                    property: d,
                                    propertySchema: u,
                                    formulasModule: p
                                } = e, y = i.getValue();
                                if (!y) return;
                                let g = p.evaluateFormulaProperty({
                                        property: d,
                                        schema: c,
                                        block: y,
                                        getRecordValue: i.getRecordValue,
                                        collectionRequestContext: {
                                            userId: void 0,
                                            userTimeZone: (0, o(714350).P)(),
                                            depth: 0,
                                            intl: o(962299).A.getIntl(),
                                            resultCache: new Map,
                                            regExpCache: new Map,
                                            formatDateCache: new Map,
                                            visitedProperties: new Set,
                                            experimentService: o(218744).default,
                                            collectionFeatureGates: (0, o(457103).i)(),
                                            getRelationEdgeList: (0, o(323082).Y)({
                                                environment: r,
                                                spaceId: i.getSpaceId()
                                            })
                                        },
                                        spaceIdCreator: r.idCreator.getSpaceIdCreatorSync(i.getSpaceId())
                                    }),
                                    m = null == u || null == (t = u.formula) ? void 0 : t.result_type;
                                switch (m) {
                                    case "number":
                                        o(627179).Et(g) && a({
                                            copyString: l,
                                            value: g,
                                            propertySchema: u,
                                            environment: r,
                                            copiedPropertyToClipboardMessage: n
                                        });
                                        break;
                                    case "date":
                                        g && o(943003).kC(g) && s({
                                            copyString: l,
                                            date: g,
                                            environment: r,
                                            copiedPropertyToClipboardMessage: n
                                        });
                                        break;
                                    case "text":
                                        g && l({
                                            stringValue: g.toString(),
                                            environment: r,
                                            copiedMessage: n
                                        });
                                        break;
                                    case "checkbox":
                                    case void 0:
                                        return;
                                    default:
                                        (0, o(722371).HB)(m)
                                }
                            }({
                                copyString: f,
                                environment: t,
                                store: c,
                                schema: d,
                                property: u,
                                propertySchema: g,
                                formulasModule: e,
                                copiedPropertyToClipboardMessage: h
                            });
                            break
                        }
                    case "person":
                        {
                            let e = c.getPropertyValue(u);i({
                                actors: (0, o(465256).e)({
                                    textValue: e,
                                    propertySchema: g,
                                    blockCreatorPointer: c.getCreatedByPointer()
                                }),
                                copyString: f,
                                environment: t,
                                store: c,
                                copiedPropertyToClipboardMessage: h
                            });
                            break
                        }
                    case "created_by":
                        {
                            let e = c.getCreatedByPointer();e && i({
                                actors: [e],
                                copyString: f,
                                environment: t,
                                store: c,
                                copiedPropertyToClipboardMessage: h
                            });
                            break
                        }
                    case "last_edited_by":
                        {
                            let e = c.getLastEditedByPointer();e && i({
                                actors: [e],
                                copyString: f,
                                environment: t,
                                store: c,
                                copiedPropertyToClipboardMessage: h
                            });
                            break
                        }
                    case "number":
                        a({
                            copyString: f,
                            environment: t,
                            propertySchema: g,
                            value: o(588688).M(c.getPropertyValue(u)),
                            copiedPropertyToClipboardMessage: h
                        });
                        break;
                    case "text":
                        {
                            let e = c.getPropertyValue(u);
                            if (!e) return;
                            let n = (0, o(605351).$e)({
                                textValue: {
                                    value: e,
                                    spaceId: c.getSpaceId()
                                },
                                getRecordModel: c.getRecordModel,
                                getRecordRole: c.getRecordRole,
                                disableHover: !1,
                                disableStyleAnnotations: !1,
                                disableInsertedDeletedAnnotations: !1,
                                disableDateStyleAnnotations: !0,
                                disableSuggestionAnnotations: !1,
                                disableLinks: !1,
                                disabled: !1,
                                userTimeZone: (0, o(714350).P)(),
                                isClient: !0,
                                isAndroid: y.isAndroid,
                                isSafariOrIOS: y.isSafari || y.isIOS,
                                isFirefox: y.isFirefox,
                                isWindows: y.isWindows,
                                emojiType: "raw",
                                theme: l,
                                themeMode: r,
                                baseUrl: o(986939).A.domainBaseUrl,
                                publicDomainName: o(986939).A.publicDomainName,
                                currentUserId: t.currentUser.id,
                                intl: o(962299).A.getIntl(),
                                katex: void 0,
                                getPublicBaseUrlForPageOrCollection: void 0,
                                externalIntegrations: [],
                                formulaValueTypes: [],
                                emojiData: o(753281).A.state,
                                isMobileNative: y.isMobileNative,
                                isMobileNativeExternalLinkFixEnabled: o(218744).default.checkGate({
                                    gateName: "mobile_native_external_link_fix"
                                })
                            });v({
                                stringValue: (0, o(536614).r4)(c.getPropertyValue(u), c),
                                htmlValue: n,
                                environment: t,
                                copiedMessage: m.copiedPropertyToClipboard
                            });
                            break
                        }
                    case "url":
                    case "email":
                    case "phone_number":
                        f({
                            stringValue: o(247438).k4p(c.getPropertyValue(u)),
                            environment: t,
                            copiedMessage: m.copiedPropertyToClipboard
                        });
                        break;
                    case "place":
                        {
                            let e = (0, o(862060).eC)(c.getPropertyValue(u)),
                                n = (0, o(862060).X1)(e);
                            if (!n) return;f({
                                stringValue: n,
                                environment: t,
                                copiedMessage: m.copiedPropertyToClipboard
                            });
                            break
                        }
                    case "date":
                        {
                            let e = c.getPropertyValue(u),
                                n = (0, o(179358).b)(e);n && s({
                                copyString: f,
                                date: n,
                                environment: t,
                                dateFormat: g.date_format,
                                timeFormat: g.time_format,
                                copiedPropertyToClipboardMessage: h
                            });
                            break
                        }
                    case "last_edited_time":
                    case "created_time":
                        {
                            let e = c.getKeyStore(g.type).getValue();e && s({
                                copyString: f,
                                date: o(25825).KQ(e, (0, o(714350).P)()),
                                environment: t,
                                dateFormat: g.date_format,
                                timeFormat: g.time_format,
                                copiedPropertyToClipboardMessage: h
                            });
                            break
                        }
                    case "auto_increment_id":
                        {
                            let e = c.getPropertyValue(u);! function(e) {
                                let {
                                    copyString: t,
                                    copiedPropertyToClipboardMessage: n,
                                    value: l,
                                    environment: r,
                                    collectionContextStore: i
                                } = e;
                                if (l && i) {
                                    var a;
                                    let e = (null == (a = i.collectionStore()) || null == (a = a.getRecordKeyStore()) ? void 0 : a.getRecordKey()) ? ? "";
                                    t({
                                        stringValue: (0, o(154326).H4)(e, l),
                                        environment: r,
                                        copiedMessage: n
                                    })
                                }
                            }({
                                copyString: f,
                                value: n().On(e),
                                environment: t,
                                collectionContextStore: p,
                                copiedPropertyToClipboardMessage: h
                            });
                            break
                        }
                    case "rollup":
                        ! function(e) {
                            let {
                                copyString: t,
                                environment: n,
                                store: l,
                                schema: r,
                                property: i,
                                formulasModule: a,
                                copiedPropertyToClipboardMessage: s
                            } = e, c = l.getModel();
                            if (!c) return;
                            let d = (0, o(260357).W)({
                                property: i,
                                schema: r,
                                block: c,
                                getRecordModel: l.getRecordModel,
                                collectionRequestContext: {
                                    userId: void 0,
                                    userTimeZone: (0, o(714350).P)(),
                                    depth: 0,
                                    intl: o(962299).A.getIntl(),
                                    visitedProperties: new Set,
                                    resultCache: new Map,
                                    regExpCache: new Map,
                                    formatDateCache: new Map,
                                    experimentService: o(218744).default,
                                    collectionFeatureGates: (0, o(457103).i)(),
                                    getRelationEdgeList: (0, o(323082).Y)({
                                        environment: n,
                                        spaceId: l.getSpaceId()
                                    })
                                },
                                exportedFilePaths: !1,
                                formulasModule: a,
                                spaceIdCreator: n.idCreator.getSpaceIdCreatorSync(l.getSpaceId())
                            });
                            d && t({
                                stringValue: d,
                                environment: n,
                                copiedMessage: s
                            })
                        }({
                            copyString: f,
                            environment: t,
                            store: c,
                            schema: d,
                            property: u,
                            collectionContextStore: p,
                            formulasModule: await o(864850).T.formulas.load(),
                            copiedPropertyToClipboardMessage: h
                        })
                }(0, o(415376).E)(t, p, {
                    block_id: c.id,
                    property: u,
                    property_type: g.type
                })
            }

            function i(e) {
                let {
                    actors: t,
                    copyString: n,
                    copiedPropertyToClipboardMessage: l,
                    environment: r,
                    store: i
                } = e, a = (0, o(383431).h)(t);
                n({
                    stringValue: (0, o(536614).r4)(a, i),
                    environment: r,
                    copiedMessage: l
                })
            }

            function a(e) {
                let {
                    copyString: t,
                    copiedPropertyToClipboardMessage: n,
                    value: l,
                    propertySchema: r,
                    environment: i
                } = e;
                if (!Number.isNaN(l) && !o(627179).pN(l)) {
                    let e = (null == r ? void 0 : r.number_format) || o(700369).C4,
                        a = (null == r ? void 0 : r.number_precision) || o(700369).pS;
                    t({
                        stringValue: o(700369).ZV(l, e, o(962299).A.getIntl(), void 0, a),
                        environment: i,
                        copiedMessage: n
                    })
                }
            }

            function s(e) {
                let {
                    copyString: t,
                    copiedPropertyToClipboardMessage: n,
                    date: l,
                    environment: r,
                    dateFormat: i,
                    timeFormat: a
                } = e;
                t({
                    stringValue: (0, o(850640).ZF)({
                        value: l,
                        date_format: i ? ? o(943003).vz,
                        time_format: a ? ? o(943003).CE,
                        allowRelativeDates: !0,
                        intl: o(962299).A.getIntl()
                    }),
                    environment: r,
                    copiedMessage: n
                })
            }
            async function c(e) {
                await d({ ...e,
                    mode: {
                        type: "view"
                    }
                })
            }
            async function d(e) {
                var t, r, i, a, s;
                let {
                    element: c,
                    rect: d,
                    environment: u,
                    onClick: p,
                    store: y,
                    additionalStores: g = [],
                    property: m,
                    surface: f,
                    collectionStore: v,
                    blockPropertyValueOverlayStore: h,
                    disableHorizontalEdgeScroll: S,
                    collectionContextStore: x,
                    collectionSchema: b,
                    mouseStore: _,
                    setMouseEntered: w,
                    statusSetCheckbox: k,
                    preventClearSelection: C,
                    collectionsBulkActionsToolbarStore: I,
                    scrollerContext: P,
                    sizing: M,
                    formQuestionStore: B,
                    onClose: j,
                    mode: A
                } = e, {
                    device: E,
                    WindowSizeStore: T
                } = u, V = x && o(793550).br({
                    store: y,
                    additionalStores: g,
                    collectionContextStore: x
                }), W = v.getSchema();
                V && (W = x.normalizedSchemaStore.state), b && (W = b);
                let F = (0, o(940270).Le)({
                        collectionStore: v,
                        collectionContextStore: x,
                        property: m
                    }),
                    O = W[F],
                    R = null == O ? void 0 : O.type;
                if (!R || o(793550).F1({
                        property: m,
                        collectionStore: v
                    })) return;
                let z = y.getPropertyStore(F);
                if ("checkbox" === R) {
                    if (z) {
                        let e = y.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "BlockPropertyValue.handleEditButtonClick",
                            environment: u,
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                o(576186).qS({
                                    stores: [y, ...g],
                                    property: F,
                                    transaction: e
                                })
                            }
                        })
                    }
                    x && (0, o(85868).E)({
                        environment: u,
                        collection_id: null == (t = x.collectionStore()) ? void 0 : t.id,
                        collection_view_id: null == (r = x.collectionViewStore()) ? void 0 : r.id,
                        collection_view_block_id: null == (i = x.collectionViewBlockStore()) ? void 0 : i.id,
                        block_id: z.id,
                        property: F,
                        property_type: R,
                        from: o(793550).zP(f),
                        isFromBulkActionsToolbar: !!I
                    })
                } else if ("status" === R && "status" === O.type && k) {
                    let e = y.getPropertyValue(F),
                        t = n().MC(e, O, o(962299).A.getIntl());
                    if (z) {
                        let e = y.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "BlockPropertyValue.handleEditButtonClick",
                            environment: u,
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                let o = O.groups ? ? [],
                                    r = !0 === t ? o[0] : o[o.length - 1],
                                    i = (O.options ? ? []).find(e => {
                                        var t;
                                        return e.id === (null == r || null == (t = r.optionIds) ? void 0 : t[0])
                                    });
                                if (i)
                                    for (let t of [y, ...g]) l().R9({
                                        environment: u,
                                        store: t.getPropertyStore(F),
                                        value: n().wb(i.value),
                                        transaction: e
                                    })
                            }
                        })
                    }
                    v.isExternalSyncedCollection() && o(691968).j2({
                        property_id: F,
                        property_type: "status",
                        action: "property_button_click",
                        from: f,
                        integration: null == (a = v.getFormat()) ? void 0 : a.external_collection_type,
                        collection_id: v.id,
                        is_notion_only_property: (0, o(23803).sc)({
                            collectionStore: v,
                            propertyId: m,
                            propertySchema: O,
                            isExternallyImportedAndSyncedCollection: v.isExternallyImportedAndSyncedCollection()
                        })
                    })
                } else if (-1 === o(439368).dA.indexOf(R) && (null == w || w(!1), _ && _.setState({ ..._.state,
                        mouseEntered: !1
                    }), c && P && E.isMobileNative && o(372120).Hp[R].type === o(182718).nl.Popup && ((0, o(341471).h)({
                        element: c,
                        environment: u,
                        scrollerContext: P,
                        vertical: {
                            reveal: "bottom",
                            paddingToTopEdge: 4,
                            paddingToBottomEdge: T.getSafePaddingBottomPx(320)
                        },
                        horizontal: {
                            reveal: "closest"
                        }
                    }), await o(374176).default.afterNextFlush()), o(576186).ho({
                        environment: u,
                        blockPropertyValueOverlayStore: h,
                        store: y,
                        additionalStores: g,
                        property: F,
                        surface: f,
                        rect: d,
                        disableHorizontalEdgeScroll: S,
                        collectionContextStore: x,
                        collectionSchema: b,
                        preventClearSelection: C,
                        collectionsBulkActionsToolbarStore: I,
                        sizing: M,
                        formQuestionStore: B,
                        onClose: j,
                        mode: A
                    }), x)) {
                    let e = (0, o(752242).sl)(x) || {};
                    (0, o(104310).u)({
                        event: {
                            eventName: "collection_open_block_property_overlay",
                            eventProperties: {
                                property: F,
                                property_type: R,
                                from: o(793550).zP(f),
                                isFromBulkActionsToolbar: !!I,
                                ...e
                            }
                        }
                    }), v.isExternalSyncedCollection() && o(691968).j2({
                        property_id: F,
                        property_type: R,
                        action: "property_button_click",
                        from: f,
                        integration: null == (s = v.getFormat()) ? void 0 : s.external_collection_type,
                        collection_id: v.id,
                        is_notion_only_property: (0, o(23803).sc)({
                            collectionStore: v,
                            propertyId: F,
                            propertySchema: O,
                            isExternallyImportedAndSyncedCollection: v.isExternallyImportedAndSyncedCollection()
                        })
                    })
                }
                p && p()
            }
        },
        356169: (e, t, o) => {
            o.d(t, {
                U: () => n
            });

            function n(e) {
                let t = (0, o(83208).X)("collections_capabilities_refactor");
                return (0, o(682985).K8)(() => {
                    var o, n;
                    return !!e && (t ? (null == (n = e.capabilitiesStore) ? void 0 : n.state.isFullyDisabled) ? ? !1 : !!(null == (o = e.previewContextStore.state) ? void 0 : o.disableContentPointerEvents))
                }, [e, t])
            }
        },
        372120: (e, t, o) => {
            o.d(t, {
                Hp: () => n,
                Zz: () => s,
                qi: () => a,
                qs: () => i,
                vM: () => c
            });
            let n = {
                    title: {
                        type: o(182718).nl.Popup
                    },
                    text: {
                        type: o(182718).nl.Popup
                    },
                    number: {
                        type: o(182718).nl.Popup
                    },
                    url: {
                        type: o(182718).nl.Popup
                    },
                    phone_number: {
                        type: o(182718).nl.Popup
                    },
                    email: {
                        type: o(182718).nl.Popup
                    },
                    relation: {
                        type: o(182718).nl.BottomSheet,
                        bottomSheetInitialState: "half"
                    },
                    rollup: {
                        type: o(182718).nl.SlideUp
                    },
                    select: {
                        type: o(182718).nl.BottomSheet,
                        bottomSheetInitialState: "half"
                    },
                    multi_select: {
                        type: o(182718).nl.BottomSheet,
                        bottomSheetInitialState: "half"
                    },
                    status: {
                        type: o(182718).nl.BottomSheet,
                        bottomSheetInitialState: "half"
                    },
                    person: {
                        type: o(182718).nl.BottomSheet,
                        bottomSheetInitialState: "half"
                    },
                    date: {
                        type: o(182718).nl.BottomSheet,
                        bottomSheetInitialState: "full"
                    },
                    file: {
                        type: o(182718).nl.SlideUp
                    },
                    formula: {
                        type: o(182718).nl.SlideUp
                    },
                    checkbox: {
                        type: o(182718).nl.SlideUp
                    },
                    created_by: {
                        type: o(182718).nl.SlideUp
                    },
                    created_time: {
                        type: o(182718).nl.SlideUp
                    },
                    last_edited_by: {
                        type: o(182718).nl.SlideUp
                    },
                    last_edited_time: {
                        type: o(182718).nl.SlideUp
                    },
                    last_visited_time: {
                        type: o(182718).nl.SlideUp
                    },
                    button: {
                        type: o(182718).nl.SlideUp
                    },
                    auto_increment_id: {
                        type: o(182718).nl.Popup
                    },
                    location: {
                        type: o(182718).nl.Popup
                    },
                    verification: {
                        type: o(182718).nl.SlideUp
                    },
                    place: {
                        type: o(182718).nl.BottomSheet,
                        bottomSheetInitialState: "half"
                    }
                },
                l = Object.freeze({
                    paddingInlineStart: 9,
                    paddingInlineEnd: 9,
                    paddingTop: (o(47080).tt - 20) / 2,
                    paddingBottom: (o(47080).tt - 20) / 2,
                    minHeight: o(47080).tt + 1 + 1,
                    display: "flex",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1
                }),
                r = Object.freeze({ ...l,
                    paddingTop: (o(47080).Um - 20) / 2,
                    paddingBottom: (o(47080).Um - 20) / 2,
                    minHeight: o(47080).Um + 1 + 1
                }),
                i = Object.freeze({ ...l,
                    fontSize: o(642065).Mi
                }),
                a = Object.freeze({ ...l,
                    fontSize: o(642065).KI,
                    fontWeight: o(699422).Wy.medium
                }),
                s = Object.freeze({ ...r,
                    fontSize: o(642065).hN
                }),
                c = Object.freeze({ ...r,
                    fontSize: o(642065).KI,
                    fontWeight: o(699422).Wy.medium
                })
        },
        396711: (e, t, o) => {
            o.d(t, {
                x: () => n
            });

            function n(e) {
                return "gallery" === e || "board" === e
            }
        },
        415376: (e, t, o) => {
            o.d(t, {
                E: () => n
            });

            function n(e, t, n) {
                var l, r, i;
                let a = "page_properties",
                    s = (0, o(752242).sl)(t);
                switch (s.view_type) {
                    case void 0:
                    case "page":
                    case "table":
                        a = "table";
                        break;
                    case "list":
                        a = "list";
                        break;
                    case "gallery":
                        a = "gallery";
                        break;
                    case "board":
                        a = "board";
                        break;
                    case "calendar":
                        a = "calendar";
                        break;
                    case "timeline":
                        a = "timeline";
                        break;
                    case "chart":
                    case "form_editor":
                    case "feed":
                    case "map":
                    case "chat":
                    case "teamspace_directory":
                    case "custom":
                    case "dashboard":
                    case "library_external_pages":
                    case "agents":
                        break;
                    default:
                        (0, o(722371).HB)(s.view_type)
                }
                let c = { ...n,
                    collection_id: null == t || null == (l = t.collectionStore()) ? void 0 : l.id,
                    collection_view_id: null == t || null == (r = t.collectionViewStore()) ? void 0 : r.id,
                    collection_view_block_id: null == t || null == (i = t.collectionViewBlockStore()) ? void 0 : i.id,
                    from: a
                };
                (0, o(195857).DO_NOT_USE_trackLegacy)("copy_property", c)
            }
        },
        476081: (e, t, o) => {
            o.d(t, {
                l: () => n
            });
            async function n(e) {
                var t;
                let {
                    environment: n,
                    blockStore: l,
                    rect: r,
                    property_id: i,
                    from: a
                } = e;
                if (o(332190).A.hasContent()) return void(0, o(58931)._y)({
                    environment: n,
                    reason: "starting_new"
                });
                let s = o(496704).K.getRect(l);
                if (!s) return;
                let c = new(o(478597)).A(n, (0, o(226221).e)(l.pointer.spaceId)),
                    d = s.width,
                    u = s.height,
                    p = s.right - d;
                o(332190).A.setState({
                    open: !0,
                    rect: r || new DOMRect(p, s.top, d, u),
                    type: "block",
                    content: "comment",
                    blockStore: l,
                    blockId: l.id,
                    discussionInputStore: c,
                    property_id: i,
                    lastKnownBlockStore: l,
                    from: a
                }), (0, o(661767).V)({
                    element: null == (t = o(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: n,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), o(827862).A.setActiveWithSource("text_annotation"), await (0, o(745990).M)({
                    discussionInputStore: c,
                    environment: n
                }), o(65255).j4(n, {
                    from: a
                })
            }
        },
        497146: (e, t, o) => {
            o.d(t, {
                _: () => n
            });

            function n(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "relation_navigate_block",
                        eventProperties: t
                    }
                })
            }
        },
        497570: (e, t, o) => {
            function n(e) {
                return e.isReady() && !e.isDefined() && "none" !== e.getRole()
            }

            function l(e) {
                return (0, o(682985).K8)(() => n(e), [e])
            }
            o.d(t, {
                W: () => l,
                X: () => n
            })
        },
        601264: (e, t, o) => {
            function n({
                store: e,
                propertyId: t
            }) {
                let l = (0, o(682985).K8)(() => {
                    var n;
                    return e && t ? null == (n = (0, o(966980).O3)(e, {
                        includePropertyDiscussions: !0
                    }).filter(e => e.getPropertyId() === t)) || null == (n = n[0]) ? void 0 : n.id : void 0
                }, [e, t]);
                return l ? (0, o(762507).wV)({
                    discussionId: l
                }) : void 0
            }

            function l({
                store: e,
                propertyId: t
            }) {
                let n = (0, o(682985).K8)(() => e && t ? (0, o(966980).O3)(e, {
                    includePropertyDiscussions: !0
                }).filter(e => e.getPropertyId() === t).map(e => e.id) : void 0, [e, t]);
                return n ? n.map(e => (0, o(762507).wV)({
                    discussionId: e
                })) : void 0
            }
            o.d(t, {
                s: () => n,
                y: () => l
            }), o(898992), o(354520), o(581454)
        },
        622031: (e, t, o) => {
            o.d(t, {
                _X: () => i,
                kF: () => l,
                qO: () => r
            });
            let n = {
                    contactVisitButton: new(o(815048)).O2("contactVisitButton", () => o.e(82970).then(o.bind(o, 795354))),
                    workflowAutofillButton: new(o(815048)).O2("WorkflowAutofillButton", () => Promise.all([o.e(9773), o.e(36556), o.e(40537), o.e(96346), o.e(40994), o.e(28372), o.e(82690)]).then(o.bind(o, 668190))),
                    workflowFeedbackButtons: new(o(815048)).O2("WorkflowFeedbackButtons", () => Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(16471), o.e(37353), o.e(18965), o.e(11082), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(26997), o.e(73259), o.e(28048), o.e(93430), o.e(12560), o.e(88268), o.e(39726), o.e(42534), o.e(86662), o.e(6212), o.e(29663), o.e(28482), o.e(14369), o.e(56308), o.e(75136), o.e(83490), o.e(12690), o.e(68583), o.e(72805), o.e(35602), o.e(12024), o.e(3723), o.e(40716), o.e(95969), o.e(48328), o.e(56703), o.e(72933), o.e(5406), o.e(79580)]).then(o.bind(o, 63366)))
                },
                l = (0, o(815048)._h)(n.contactVisitButton, e => e.default),
                r = (0, o(815048)._h)(n.workflowAutofillButton, e => e.WorkflowAutofillButton),
                i = (0, o(815048)._h)(n.workflowFeedbackButtons, e => e.WorkflowFeedbackButtons)
        },
        714416: (e, t, o) => {
            o.d(t, {
                N7: () => u,
                id: () => p,
                kB: () => s
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(672577), o(296540);
            var n = () => o(970831),
                l = () => o(453308),
                r = () => o(561872),
                i = () => o(112293),
                a = o(474848);

            function s({
                relationPointers: e,
                relatedPageStore: t,
                environment: l,
                from: r,
                peekMode: i,
                openInNew: a
            }) {
                let c, d = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (!d) return;
                let u = e.find(e => e.id === t.id);
                if (u) {
                    if (a) {
                        let e = n().B.createChildStore(d, u),
                            t = e.getModel(),
                            r = o(135007).E2(l, e);
                        c = (0, o(234310).A)({
                            pageId: u.id,
                            pageModel: t,
                            baseUrl: r,
                            pageVisitSource: o(254656).y8.MentionInPage,
                            addPagePrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                        })
                    } else {
                        let e = d.getModel(),
                            t = o(135007).E2(l, d);
                        c = (0, o(234310).A)({
                            pageId: d.id,
                            pageModel: e,
                            baseUrl: t,
                            peekViewBlockId: u.id,
                            peekMode: (0, o(475097).getUrlParamFromPeekMode)("full_page" === i ? void 0 : i ? ? o(475097).default.state.mode),
                            pageVisitSource: o(254656).y8.MentionInPage,
                            addPagePrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                        }), (0, o(497146)._)(l, {
                            from: r,
                            meta_click: !!a
                        })
                    }(0, o(79266).navigate)({
                        environment: l,
                        url: c,
                        openInNew: a
                    })
                }
            }
            async function c(e) {
                let {
                    collectionStore: t,
                    property: n,
                    environment: l,
                    targetCollectionStore: r
                } = e, i = t.getSchema()[n];
                if (!i || "relation" !== i.type) return !1;
                let a = (0, o(390768).N)(i),
                    s = i.property;
                if (!a || !s) return !1;
                let c = r ? ? new(o(356912)).m(l, a);
                await c.load();
                let d = c.getSchema();
                if (!(0, o(520794).r)({
                        propertySchema: i,
                        property: n,
                        sourceCollectionId: t.id,
                        targetCollectionSchema: d
                    })) return !1;
                let u = d[s];
                return !!u && "relation" === u.type && !!u.limit
            }
            async function d(e) {
                let {
                    collectionStore: t,
                    relationPointer: o,
                    environment: l,
                    property: i
                } = e, a = new(n()).B(l, o);
                await a.load();
                let s = t.getSchema()[i];
                if (!s || "relation" !== s.type) return;
                let c = s.property;
                if (!c) return;
                let d = a.getPropertyValue(c);
                if (!d) return;
                let [u] = r().n(d);
                return u
            }
            async function u(e) {
                var t;
                let {
                    update: l,
                    environment: r,
                    blockStore: i,
                    property: a,
                    propertySchema: s,
                    collectionContextStore: u
                } = e, p = null == u ? void 0 : u.collectionStore(), y = new Set(l.oldValues), g = l.newValues.filter(e => !y.has(e)), m = o(728372).AppStoreCurrentUserSettingsStore.state;
                if ((null == m ? void 0 : m.getSettingsStore().getKeyStore("relation_limit_confirmation_dialog_dismissed_at").getValue()) || 1 !== g.length) return !1;
                let f = (null == u ? void 0 : u.collectionViewStore()) || (null == p || null == (t = p.getParentBlockStore()) ? void 0 : t.getCollectionViewStores()[0]);
                if (!p || !f || !s || !await c({
                        collectionStore: p,
                        property: a,
                        environment: r
                    })) return !1;
                let v = await d({
                    collectionStore: p,
                    relationPointer: g[0],
                    property: a,
                    environment: r
                });
                if (!v) return !1;
                let h = new(n()).B(r, v);
                return await h.load(), {
                    blockWithExistingRelationTitle: h.getPropertyValue("title"),
                    currentBlockTitle: i.getPropertyValue("title"),
                    update: l,
                    canAccessBlockWithExistingRelation: h.canRead()
                }
            }
            async function p(e) {
                var t;
                let {
                    sourcePropertySchema: n,
                    sourceCollectionPointer: l,
                    relatedCollectionStore: r,
                    newRelationValues: i,
                    oldRelationValues: s,
                    sourcePropertyId: c,
                    environment: d
                } = e;
                if (!r) return;
                let u = r.getModel();
                if (!u) return;
                let p = {
                    propertySchema: n,
                    propertyId: c,
                    ...l
                };
                if (!(0, o(565175).G)(p, u, r.getRecordModel)) return;
                let g = null == (t = Object.entries(r.getSchema()).find(([e, t]) => t && (0, o(795e3).n)(t) && (0, o(114588).z)(t) === l.id)) ? void 0 : t[0];
                if (!g) return;
                let m = i.filter(e => !s.includes(e)),
                    f = await y({
                        newlyAddedRelationValues: m,
                        relatedCollectionRelationPropertySchemaId: g,
                        environment: d,
                        relatedCollectionSpaceId: r.getSpaceId()
                    });
                if (0 === f.length) return;
                let v = {
                    learnMore: {
                        cursor: "pointer",
                        color: (0, o(632079).O4)({
                            theme: "dark"
                        }).text.primary
                    },
                    learnMoreContainer: {
                        marginTop: "10px"
                    }
                };
                o(773352).log({
                    level: "info",
                    type: "twoWayRelationLimitExceededToastDisplayed",
                    from: "relationPropertyActions",
                    data: {
                        miscDataToConvertToString: {
                            sourceCollectionId: l.id,
                            relatedCollectionId: r.id,
                            spaceId: r.getSpaceId()
                        }
                    }
                });
                let h = 1 === f.length ? (0, a.jsx)(o(109939).sA, {
                    defaultMessage: "{title} reached the maximum of 10,000 related pages",
                    values: {
                        title: f[0]
                    },
                    id: "relationPropertyActions.twoWayRelationLimitExceededMessage.onePage"
                }) : (0, a.jsx)(o(109939).sA, {
                    defaultMessage: "Multiple pages reached the maximum of 10,000 related pages",
                    id: "relationPropertyActions.twoWayRelationLimitExceededMessage.multiplePages"
                });
                o(819652).Iz({
                    id: "two-way-relation-limit-exceeded",
                    title: (0, a.jsx)(o(109939).sA, {
                        defaultMessage: "Two-way relation failed to sync",
                        id: "relationPropertyActions.twoWayRelationLimitExceededTitle"
                    }),
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [h, (0, a.jsx)("div", {
                            style: v.learnMoreContainer,
                            children: (0, a.jsx)("a", {
                                href: "https://www.notion.com/help/optimize-database-load-times-and-performance",
                                target: "_blank",
                                style: v.learnMore,
                                children: (0, a.jsx)(o(109939).sA, {
                                    defaultMessage: "Learn more",
                                    id: "relationPropertyActions.learnMore"
                                })
                            })
                        })]
                    }),
                    icon: o(50171).exclamationMarkTriangleSmallIcon,
                    iconColorVariant: "inversePrimary"
                })
            }
            async function y(e) {
                let {
                    environment: t,
                    newlyAddedRelationValues: a,
                    relatedCollectionRelationPropertySchemaId: s,
                    relatedCollectionSpaceId: c
                } = e, d = o(962299).A.getIntl(), u = [];
                for (let e of a) {
                    let o = e.id,
                        a = new(n()).B(t, {
                            table: "block",
                            id: o,
                            spaceId: c
                        });
                    await a.load();
                    let p = a.getPropertyValue(s),
                        y = r().n(p);
                    if (y && y.length >= l().uE) {
                        let e = (0, i().tS)({
                            store: a,
                            environment: t,
                            intl: d
                        });
                        u.push(e)
                    }
                }
                return u
            }
        },
        826460: (e, t, o) => {
            o.d(t, {
                V: () => n
            });

            function n({
                collectionContextStore: e,
                blockId: t,
                property: l,
                featureEnabled: r = !1
            }) {
                return (0, o(682985).K8)(() => {
                    if (!r || !t || !l || !e) return !1;
                    let o = e.virtualizedModule.getBlockHeightsCache();
                    return o && o.propertyCanExpandStore(t, l).state
                }, [e, t, l, r])
            }
        },
        858439: (e, t, o) => {
            o.d(t, {
                P: () => v
            }), o(898992), o(737550);
            var n = o(296540),
                l = o(474848);

            function r({
                children: e,
                blockPropertyValueOverlayStore: t
            }) {
                let i = (0, o(533992).WS)(),
                    a = (0, n.useRef)(null),
                    {
                        collectionContextStore: s,
                        store: c,
                        property: d,
                        propertySchema: u
                    } = (0, n.useContext)(o(422575).L8),
                    p = (0, o(67954).PD)(),
                    y = null == s ? void 0 : s.virtualizedModule.getBlockHeightsCache(),
                    g = (0, n.useRef)(!1),
                    m = (0, n.useCallback)(e => {
                        y && c && !e.state.isOpen && (y.expandHeightToTallestCached(c.id), e.removeListener(m), g.current = !1)
                    }, [y, c]),
                    f = (0, n.useCallback)(e => {
                        if (!y || !c || !d || !e) return;
                        let n = y.getPropertyHeightStore(c.id, d).state,
                            l = function(e) {
                                let {
                                    propertySchema: t,
                                    isPhone: n
                                } = e;
                                if (!t) return n ? o(47080).A4 : o(47080).Nh;
                                switch (function(e) {
                                    switch (e) {
                                        case "auto_increment_id":
                                        case "created_by":
                                        case "created_time":
                                        case "date":
                                        case "email":
                                        case "formula":
                                        case "last_edited_by":
                                        case "last_edited_time":
                                        case "last_visited_time":
                                        case "location":
                                        case "multi_select":
                                        case "number":
                                        case "phone_number":
                                        case "place":
                                        case "rollup":
                                        case "text":
                                        case "title":
                                        case "url":
                                        case "verification":
                                            return "text";
                                        case "button":
                                        case "file":
                                            return "button";
                                        case "checkbox":
                                            return "checkbox";
                                        case "person":
                                        case "relation":
                                        case "select":
                                        case "status":
                                            return "token";
                                        default:
                                            (0, o(722371).HB)(e)
                                    }
                                }(t.type)) {
                                    case "default":
                                        return n ? o(47080).A4 : o(47080).Nh;
                                    case "text":
                                        return n ? o(47080).Wh : o(47080).Zs;
                                    case "token":
                                        return n ? o(47080).Sh : o(47080).hB;
                                    case "checkbox":
                                        return n ? o(47080).IH : o(47080).Nl;
                                    case "button":
                                        return n ? o(47080).DX : o(47080).Mk
                                }
                            }({
                                isPhone: i,
                                propertySchema: u
                            }),
                            r = 0 === e.height ? 0 : e.height + l + l;
                        y.cachePropertyHeight(c.id, d, r), n !== r && (null == p ? void 0 : p.isScrolling) === !1 && !0 !== o(395364).A.state && (null != t && t.state.isOpen && !g.current ? (t.addListener(m), g.current = !0) : y.expandHeightToTallestCached(c.id))
                    }, [y, c, d, i, u, null == p ? void 0 : p.isScrolling, t, m]);
                return (0, o(729787).tK)(a, f), (0, l.jsx)("div", {
                    ref: a,
                    children: e
                })
            }
            let i = {
                outer: {
                    display: "inline-flex",
                    overflow: "hidden",
                    position: "relative",
                    width: "100%"
                },
                inner: {
                    width: "60%",
                    height: 10,
                    borderRadius: 12,
                    backgroundColor: o(632079).Tj.background.tertiaryTranslucent
                }
            };

            function a() {
                return (0, l.jsx)("div", {
                    style: i.outer,
                    children: (0, l.jsx)(o(795830).P, {
                        style: i.inner
                    })
                })
            }
            let s = (0, o(109939).YK)({
                    upgrade_to_enterprise: {
                        defaultMessage: "Upgrade to Enterprise to edit this property",
                        id: "BlockPropertyButtonExternalPropertyTooltip.upgradeToEnterprise"
                    },
                    two_way_sync_not_enabled: {
                        defaultMessage: "Enable 2-way sync to edit",
                        id: "BlockPropertyButtonExternalPropertyTooltip.twoWaySyncRequired"
                    },
                    property_not_editable: {
                        defaultMessage: "This property can only be edited in {integration}",
                        id: "BlockPropertyButtonExternalPropertyTooltip.propertyNotEditable"
                    },
                    connect_to_integration: {
                        defaultMessage: "Connect to {integration} to edit",
                        id: "BlockPropertyButtonExternalPropertyTooltip.connectToIntegration"
                    },
                    full_access: {
                        defaultMessage: "You have full access to this property",
                        id: "BlockPropertyButtonExternalPropertyTooltip.fullAccess"
                    },
                    read_only: {
                        defaultMessage: "Re-authorize with {integration} to allow editing from Notion",
                        id: "BlockPropertyButtonExternalPropertyTooltip.onlyReadPermission"
                    },
                    sync_failed: {
                        defaultMessage: "Cannot be edited for failed sync",
                        id: "BlockPropertyButtonExternalPropertyTooltip.syncFailed"
                    },
                    sync_in_progress: {
                        defaultMessage: "Cannot be edited while sync is in progress",
                        id: "BlockPropertyButtonExternalPropertyTooltip.syncInProgress"
                    },
                    offline: {
                        defaultMessage: "Cannot be edited while offline",
                        id: "BlockPropertyButtonExternalPropertyTooltip.offline"
                    }
                }),
                c = (0, o(109939).YK)({
                    dataCannotBeEdited: {
                        defaultMessage: "Data synced from {integration} cannot be edited",
                        id: "BlockPropertyButtonExternalPropertyTooltip.dataCannotBeEdited"
                    },
                    notionOnlyProperty: {
                        defaultMessage: "This property is only visible in Notion",
                        id: "BlockPropertyButtonExternalPropertyTooltip.notionOnlyProperty"
                    }
                });

            function d({
                collectionContextStore: e,
                propertySchema: t,
                baseTooltip: r
            }) {
                let i = (0, n.useContext)(o(422575).L8),
                    a = (0, o(682985).K8)(() => {
                        var e;
                        return (null == (e = o(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.getSubscriptionTier()) === "enterprise"
                    }, []),
                    u = (0, o(682985).K8)(() => {
                        let n = null == e ? void 0 : e.collectionStore();
                        if (!n || !t || !i.property) return !1;
                        let l = n.getFormat(),
                            r = !!((null == l ? void 0 : l.external_collection_type) && (null == l ? void 0 : l.sync_state));
                        return (0, o(23803).sc)({
                            propertyId: i.property,
                            collectionStore: n,
                            propertySchema: t,
                            isExternallyImportedAndSyncedCollection: r
                        })
                    }, [e, t, i.property]),
                    p = (0, o(682985).K8)(() => {
                        var n, l, r, i, s, c;
                        let d, u = null == e ? void 0 : e.collectionStore(),
                            p = null == u ? void 0 : u.getFormat().external_collection_type;
                        if (!u || !(0, o(607689).cd)(p) || !(0, o(23803).JD)(u) || !(0, o(607689).fo)({
                                collectionStore: u
                            })) return {
                            twoWaySyncUserState: void 0,
                            integration: p
                        };
                        let y = (null == t ? void 0 : t.synced_permissions) === "read_write";
                        if (!a) return {
                            twoWaySyncUserState: (0, o(395315).fW)({
                                isUserOnEnterprisePlan: a,
                                isEditableProperty: y
                            }),
                            integration: p
                        };
                        let g = null == e || null == (n = e.collectionStore()) ? void 0 : n.getFormat(),
                            m = !!((null == g || null == (l = g.sync_state) ? void 0 : l.enable_two_way_sync) && (!(d = null == e || null == (c = e.collectionStore()) ? void 0 : c.getSpaceStore()) || (0, o(262166).OX)(d.getSubscriptionTier())));
                        if (!m) return {
                            twoWaySyncUserState: (0, o(395315).fW)({
                                isUserOnEnterprisePlan: a,
                                twoWaySyncEnabled: m,
                                isEditableProperty: y
                            }),
                            integration: p
                        };
                        let f = !!(null == g || null == (r = g.sync_state) ? void 0 : r.syncing),
                            v = !!(null == g ? void 0 : g.error),
                            h = !!(null == e || null == (i = e.externalSyncStore) || null == (i = i.state) ? void 0 : i.doesUserHaveOnlyReadPermission()),
                            S = !!(null == e || null == (s = e.externalSyncStore) || null == (s = s.state) ? void 0 : s.shouldAllowUserToEditSyncedCollection()),
                            x = !o(205885).A.state.online;
                        return {
                            twoWaySyncUserState: (0, o(395315).fW)({
                                isUserOnEnterprisePlan: a,
                                twoWaySyncEnabled: m,
                                canEdit: S,
                                isEditableProperty: y,
                                doesUserHaveOnlyReadPermission: h,
                                isSyncing: f,
                                isFailedSync: v,
                                isOffline: x
                            }),
                            integration: p
                        }
                    }, [a, e, t]);
                if (u) return (0, l.jsx)(o(109939).sA, { ...c.notionOnlyProperty
                });
                if (p.twoWaySyncUserState)
                    if ("full_access" === p.twoWaySyncUserState) return r;
                    else {
                        if ("connect_to_integration" !== p.twoWaySyncUserState && "two_way_sync_not_enabled" !== p.twoWaySyncUserState && "read_only" !== p.twoWaySyncUserState) return (0, l.jsx)(o(109939).sA, { ...s[p.twoWaySyncUserState],
                            values: {
                                integration: p.integration ? ? "integration"
                            }
                        });
                        let e = { ...s[p.twoWaySyncUserState],
                            values: {
                                integration: p.integration ? ? "integration"
                            }
                        };
                        return (0, l.jsx)("div", {
                            children: (0, l.jsx)(o(109939).sA, { ...e
                            })
                        })
                    } {
                        let e = { ...c.dataCannotBeEdited,
                            values: {
                                integration: p.integration ? ? "integration"
                            }
                        };
                        return (0, l.jsx)(o(109939).sA, { ...e
                        })
                    }
            }

            function u(e) {
                var t, r;
                let {
                    propertyValue: i,
                    propertyCaption: a,
                    render: s
                } = e, {
                    propertySchema: c,
                    surface: u,
                    shouldRenderTooltip: p,
                    isExternallyImportedAndSyncedPage: y,
                    collectionContextStore: g
                } = (0, n.useContext)(o(422575).L8), m = !p || (null == c ? void 0 : c.type) === "location", f = m || null == c || null == (t = c.name) ? void 0 : t.trim(), v = m || null == c || null == (r = c.description) ? void 0 : r.trim(), h = f || v || (0, o(722371).O9)(i) || (0, o(722371).O9)(a), S = (0, o(682985).K8)(() => {
                    let e = null == g ? void 0 : g.collectionStore();
                    return !!e && (0, o(260585).r)(e)
                }, [g]), x = (0, o(960253).I)(() => ({
                    description: { ...o(689266).Q$,
                        color: o(632079).Tj.text.inverseSecondary
                    },
                    value: {
                        color: f ? o(632079).Tj.text.inverseSecondary : void 0
                    },
                    caption: {
                        color: f || (0, o(722371).O9)(i) ? o(632079).Tj.text.inverseSecondary : void 0
                    }
                }), [f, i]), b = (0, n.useCallback)(() => {
                    let e = (0, l.jsxs)(l.Fragment, {
                        children: [f ? (0, l.jsx)("div", {
                            children: f
                        }) : void 0, v ? (0, l.jsx)("div", {
                            style: x.description,
                            children: v
                        }) : void 0, (0, o(722371).O9)(i) ? (0, l.jsx)("div", {
                            style: x.value,
                            children: i
                        }) : void 0, (0, o(722371).O9)(a) ? (0, l.jsx)("span", {
                            style: x.caption,
                            children: a
                        }) : void 0]
                    });
                    return y && !S ? (0, l.jsx)(d, {
                        collectionContextStore: g,
                        propertySchema: c,
                        baseTooltip: e
                    }) : e
                }, [f, v, x.description, x.value, x.caption, i, a, y, S, g, c]);
                return h ? (0, l.jsx)(o(51831).m, {
                    content: b,
                    tooltipClassName: o(828432).Efz,
                    placement: "board" === u || "gallery" === u ? "left" : "bottom",
                    children: e => s(e)
                }) : s()
            }
            let p = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.54 0.5 6.91 14.98",
                    svg: (0, l.jsx)("path", {
                        d: "M8.442.69a.625.625 0 0 0-.884 0L4.729 3.52a.625.625 0 0 0 .884.884L7.375 2.64v4.23a.625.625 0 0 0 1.25 0V2.64l1.761 1.762a.625.625 0 0 0 .884-.884zM8 8.51a.625.625 0 0 0-.625.625v4.217L5.613 11.59a.625.625 0 1 0-.884.884l2.829 2.829c.244.244.64.244.884 0l2.828-2.829a.625.625 0 1 0-.884-.884l-1.761 1.762V9.135A.625.625 0 0 0 8 8.51"
                    })
                },
                y = (0, o(104509).wt)("arrowUpDownStackedSmall", p, "small"),
                g = (0, o(109939).YK)({
                    expand_property: {
                        defaultMessage: "Expand",
                        id: "database.ExpandButton"
                    }
                }),
                m = {
                    height: 20,
                    width: 20
                };

            function f({
                store: e,
                property: t,
                showHoverColor: r
            }) {
                let i = (0, o(109939).tz)(),
                    a = (0, o(713311).Ks)(),
                    s = null == a ? void 0 : a.virtualizedModule.getBlockHeightsCache(),
                    c = (0, o(682985).K8)(() => null == s ? void 0 : s.propertyCanExpandStore(e.id, t).state, [s, t, e]),
                    d = (0, n.useCallback)(() => {
                        null == s || s.expandHeightToTallestCached(e.id)
                    }, [s, e.id]),
                    u = (0, o(960253).I)(() => ({
                        icon: {
                            color: r ? o(632079).Tj.icon.secondary : o(632079).Tj.icon.tertiary,
                            fill: r ? o(632079).Tj.icon.secondary : o(632079).Tj.icon.tertiary,
                            height: o(104509).Ev.xs,
                            width: o(104509).Ev.xs
                        }
                    }), [r]);
                return a && c ? (0, l.jsx)(o(221149).A, {
                    onClick: d,
                    icon: y,
                    tooltip: i.formatMessage(g.expand_property),
                    iconStyle: u.icon,
                    style: m,
                    hasBackground: !1
                }) : null
            }
            let v = n.memo((0, n.forwardRef)(function(e, t) {
                    let {
                        tooltipPropertyValue: o,
                        tooltipPropertyCaption: n,
                        tooltipHide: r
                    } = e, i = o => (0, l.jsx)(S, {
                        ref: t,
                        ...e,
                        tooltipEvents: o
                    });
                    return r ? i() : (0, l.jsx)(u, {
                        propertyValue: o,
                        propertyCaption: n,
                        render: i
                    })
                })),
                h = {
                    alignSelf: "center",
                    marginInlineEnd: 8,
                    marginInlineStart: 8
                },
                S = (0, n.forwardRef)(function(e, t) {
                    let {
                        style: i,
                        quickActionButtons: s,
                        quickActionButtonsAlign: c,
                        quickActionButtonsForceVisible: d,
                        editButtonClickProps: u,
                        width: p,
                        forceEnableButton: y,
                        collectionSchema: g,
                        onContextMenu: m,
                        formQuestionStore: v,
                        userExpandable: S
                    } = e, x = (0, o(533992).v3)(), {
                        isAndroid: b,
                        isPhone: _
                    } = (0, o(533992).Y0)(), [w, k] = (0, n.useState)(!1), [C, I] = (0, n.useState)(!1), {
                        collectionContextStore: P,
                        surface: M,
                        canEdit: B,
                        store: j,
                        property: A,
                        baseStyles: E,
                        propertySchema: T
                    } = (0, n.useContext)(o(422575).L8), V = (0, o(682985).O$)(o(205885).e), W = (0, o(682985).K8)(() => !!(null == P ? void 0 : P.viewsModuleContextStore.isInLayoutBuilder()), [P]), F = (null == T ? void 0 : T.type) === "text" && !(null != T && T.ai_inference), O = (0, o(682985).K8)(() => !!F && !!j && (0, o(966980).O3)(j, {
                        includePropertyDiscussions: !0
                    }).some(e => e.getPropertyId() === A), [F, A, j]), {
                        isLoading: R,
                        isExternalUpdateInProgress: z,
                        shouldShowLockIcon: L
                    } = (0, o(682985).K8)(() => {
                        var e;
                        let t = null == P ? void 0 : P.collectionStore(),
                            n = null == j ? void 0 : j.getFormat(),
                            l = !(null != n && null != (e = n.attributes) && e.length) && !(null != n && n.error) && !!(null == t ? void 0 : t.isSyncedCollection());
                        if (!(null == t ? void 0 : t.isExternallyImportedAndSyncedCollection()) || !(null != j && j.id) || !A) return {
                            isLoading: l,
                            isExternalUpdateInProgress: !1,
                            shouldShowLockIcon: !1
                        };
                        let r = o(239098).A.getState();
                        return {
                            isLoading: l,
                            isExternalUpdateInProgress: !!(r.syncingProperties.size > 0 && r.syncingProperties.has((0, o(607689).vT)({
                                pageId: j.id,
                                propertyId: A
                            }))),
                            shouldShowLockIcon: (0, o(973681).FH)({
                                collectionStore: t,
                                propertySchema: T,
                                isJiraTwoWaySyncEnabled: (0, o(23803).JD)(t),
                                surface: M,
                                propertyId: A
                            })
                        }
                    }, [P, j, A, T, M]), U = (0, o(834656).F)(null == P ? void 0 : P.capabilitiesStore, null == P ? void 0 : P.previewContextStore), D = (0, o(356169).U)(P), K = V || !V && (0, o(722371).O9)(T) && !(0, o(260682).$)({
                        propertyType: null == T ? void 0 : T.type,
                        propertySchema: T,
                        allowAIProperty: !0
                    }), N = (y || B && void 0 !== u || O) && !W && !D && K, H = (0, o(960253).I)(() => ({
                        buttonStyle: {
                            position: "relative",
                            ...i,
                            display: z ? "flex" : null == i ? void 0 : i.display,
                            ...N ? {} : {
                                cursor: "default"
                            }
                        },
                        expandButtonPosition: {
                            position: "relative",
                            insetInlineStart: "left" === c ? -2 : 2,
                            float: "left" === c ? "inline-start" : "inline-end"
                        },
                        lockIconContainer: {
                            position: "absolute",
                            insetInlineEnd: 8,
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 1,
                            pointerEvents: "none",
                            opacity: +!!w,
                            transition: "opacity 0.15s ease"
                        }
                    }), [i, z, c, N, w]), $ = (0, n.useRef)(null), q = (0, n.useCallback)(() => {
                        I(!0)
                    }, []), Y = (0, n.useCallback)(e => {
                        $.current && e.relatedTarget && (!e.relatedTarget || $.current.contains(e.relatedTarget)) || I(!1)
                    }, []), Z = (0, n.useCallback)(() => {
                        k(!0)
                    }, []), J = (0, n.useCallback)(() => {
                        k(!1)
                    }, []), X = (0, n.useCallback)(e => {
                        b && _ ? e.preventDefault() : m && (0, o(705660).SQ)(e, o(705660).y$.EditorContextMenu, () => {
                            m(e)
                        })
                    }, [b, _, m]), G = (0, o(67954).DV)(), Q = S && G, ee = (0, n.useCallback)(async e => {
                        if (void 0 === u) return;
                        let {
                            onClick: t,
                            store: n,
                            property: l,
                            surface: r,
                            collectionStore: i,
                            blockPropertyValueOverlayStore: a,
                            disableHorizontalEdgeScroll: s,
                            isStatusCheckbox: c,
                            focusButtonAfterClose: d
                        } = u;
                        await o(305866).VE({
                            element: $.current ? ? void 0,
                            environment: x,
                            onClick: t,
                            store: n,
                            property: l,
                            surface: r,
                            collectionStore: i,
                            blockPropertyValueOverlayStore: a,
                            disableHorizontalEdgeScroll: s,
                            collectionContextStore: P,
                            collectionSchema: g,
                            setMouseEntered: k,
                            statusSetCheckbox: c ? !e.altKey : void 0,
                            sizing: (null == E ? void 0 : E.sizing) === "large" ? "large" : "default",
                            formQuestionStore: v,
                            onClose: () => {
                                if (d) {
                                    var e;
                                    null == (e = $.current) || e.focus()
                                }
                            }
                        })
                    }, [u, x, P, g, null == E ? void 0 : E.sizing, v]), et = (0, n.useCallback)(e => {
                        var o;
                        null == (o = $.current) || o.removeEventListener("focusout", Y), $.current = e, null == e || e.addEventListener("focusout", Y), "function" == typeof t ? t(e) : t && (t.current = e)
                    }, [Y, t]), eo = (0, o(826460).V)({
                        collectionContextStore: P,
                        blockId: null == j ? void 0 : j.id,
                        property: A,
                        featureEnabled: Q
                    }), en = W || !U, el = (0, n.useMemo)(() => {
                        if (en || !s || Array.isArray(s) && 0 === s.length) return null;
                        let t = !p || p > 80,
                            n = void 0 !== d ? d || C : t && (w || C || o(986939).A.isMobile);
                        if (!n) return eo && j && A ? (0, l.jsx)("div", {
                            style: H.expandButtonPosition,
                            children: (0, l.jsx)(f, {
                                store: j,
                                property: A
                            })
                        }) : null;
                        let r = eo ? (0, l.jsxs)(l.Fragment, {
                            children: ["left" === c && j && A ? (0, l.jsx)(f, {
                                store: j,
                                property: A,
                                showHoverColor: !0
                            }) : void 0, s, (!c || "right" === c) && j && A ? (0, l.jsx)(f, {
                                store: j,
                                property: A,
                                showHoverColor: !0
                            }) : void 0]
                        }) : s;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [!o(986939).A.isMobile && eo && j && A ? (0, l.jsx)("div", {
                                style: H.expandButtonPosition,
                                children: (0, l.jsx)(f, {
                                    store: j,
                                    property: A
                                })
                            }) : void 0, n ? (0, l.jsx)(o(871629).J, {
                                align: c,
                                style: e.quickActionButtonsStyle,
                                surface: M,
                                containerRef: $,
                                children: r
                            }) : null]
                        })
                    }, [en, s, p, d, C, w, eo, c, j, A, H.expandButtonPosition, e.quickActionButtonsStyle, M]);
                    if (R) return (0, l.jsx)("div", {
                        style: H.buttonStyle,
                        children: (0, l.jsx)(a, {})
                    });
                    let er = (0, o(63390).A)({
                        onMouseMove: Z,
                        onMouseLeave: J
                    }, e.tooltipEvents);
                    return N ? (0, l.jsxs)(o(64960).Ay, {
                        className: e.className,
                        ref: et,
                        hoveredStyle: e.hoveredStyle,
                        pressedStyle: e.pressedStyle,
                        style: H.buttonStyle,
                        onContextMenu: X,
                        onClick: ee,
                        onFocus: q,
                        testId: "property-value",
                        ...er,
                        children: [el, Q ? (0, l.jsx)(r, {
                            blockPropertyValueOverlayStore: null == u ? void 0 : u.blockPropertyValueOverlayStore,
                            children: e.children
                        }) : e.children, z ? (0, l.jsx)(o(517334).k, {
                            style: h
                        }) : null, L ? (0, l.jsx)("div", {
                            style: H.lockIconContainer,
                            children: (0, l.jsx)(o(16275).I, {
                                icon: o(269298).lockFillIcon,
                                size: "xs"
                            })
                        }) : null]
                    }) : (0, l.jsxs)("div", {
                        className: e.className,
                        ref: et,
                        style: H.buttonStyle,
                        onFocus: q,
                        ...er,
                        children: [el, Q ? (0, l.jsx)(r, {
                            children: e.children
                        }) : e.children, L ? (0, l.jsx)("div", {
                            style: H.lockIconContainer,
                            children: (0, l.jsx)(o(16275).I, {
                                icon: o(269298).lockFillIcon,
                                size: "sm"
                            })
                        }) : null]
                    })
                })
        },
        871629: (e, t, o) => {
            o.d(t, {
                J: () => a,
                Y: () => i
            });
            var n = o(296540),
                l = o(474848);
            let r = {
                position: "sticky",
                insetInlineEnd: 4
            };

            function i(e) {
                let {
                    children: t,
                    align: n,
                    sticky: i,
                    style: a
                } = e, s = (0, o(960253).I)(() => {
                    let t = e.height || 24;
                    return {
                        buttonWrapperStyle: {
                            display: "flex",
                            justifyContent: "right" === n ? "end" : "start",
                            position: "absolute",
                            top: (o(47080).wc - t) / 2,
                            insetInlineEnd: 0,
                            insetInlineStart: 0,
                            zIndex: 2,
                            margin: "0 4px",
                            pointerEvents: "none",
                            ...a
                        },
                        innerWrapperStyle: {
                            position: "relative",
                            display: "flex",
                            pointerEvents: "auto",
                            background: o(632079).Tj.background.elevated,
                            padding: "2px",
                            height: t,
                            boxShadow: o(632079).Tj.shadow.outline.md,
                            borderRadius: 6
                        }
                    }
                }, [n, e.height, a]);
                return t ? (0, l.jsx)("div", {
                    style: s.buttonWrapperStyle,
                    children: (0, l.jsx)("div", { ...(0, o(762507).ow)(s.innerWrapperStyle, i && r),
                        className: "quickActionContainer",
                        children: t
                    })
                }) : null
            }

            function a(e) {
                let {
                    surface: t,
                    align: o
                } = e;
                switch (t) {
                    case "table":
                        return (0, l.jsx)(y, { ...e,
                            align: o ? ? "right"
                        });
                    case "property_module":
                    case "page":
                        return (0, l.jsx)(c, { ...e,
                            align: o ? ? "right"
                        });
                    case "compact_page":
                        return (0, l.jsx)(d, { ...e,
                            align: o ? ? "right"
                        });
                    case "board":
                        return (0, l.jsx)(s, { ...e,
                            align: o ? ? "right"
                        });
                    case "gallery":
                        return (0, l.jsx)(u, { ...e,
                            align: o ? ? "right"
                        });
                    case "list":
                        return (0, l.jsx)(p, { ...e,
                            align: o ? ? "right"
                        });
                    default:
                        return (0, l.jsx)(i, { ...e,
                            align: o ? ? "right"
                        })
                }
            }

            function s(e) {
                let t = (0, o(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: 0,
                        ...e.style
                    }
                }), [e.style]);
                return (0, l.jsx)(i, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function c(e) {
                let {
                    propertyModule: t
                } = (0, n.useContext)(o(422575).L8), r = (0, o(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: t && "style" in t && "large" === t.style ? 10 : 5,
                        ...e.style
                    }
                }), [t, e.style]);
                return (0, l.jsx)(i, { ...e,
                    style: r.buttonWrapperStyle
                })
            }

            function d(e) {
                let t = (0, o(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: "unset",
                        ...e.style
                    }
                }), [e.style]);
                return (0, l.jsx)(i, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function u(e) {
                let t = (0, o(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: -1,
                        ...e.style
                    }
                }), [e.style]);
                return (0, l.jsx)(i, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function p(e) {
                let t = (0, o(960253).I)(() => ({
                    buttonWrapperStyle: {
                        position: void 0,
                        margin: 0,
                        ...e.style
                    }
                }), [e.style]);
                return (0, l.jsx)(i, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function y(e) {
                let {
                    align: t = "right"
                } = e, {
                    shouldWrap: r,
                    propertyFormat: a
                } = (0, n.useContext)(o(422575).L8), s = null == a ? void 0 : a.width, c = (0, n.useMemo)(() => s && s <= 32 ? 0 : s && s < 50 ? 2 : 4, [s]), d = (0, o(960253).I)(() => ({
                    buttonWrapperStyle: { ...e.style,
                        ...o(986939).A.isMobile && r ? {
                            position: "sticky",
                            float: t,
                            marginInlineEnd: 0,
                            marginInlineStart: 2,
                            insetInlineEnd: c
                        } : {
                            margin: `0 ${c}px`
                        }
                    }
                }), [t, c, e.style, r]);
                return (0, l.jsx)(i, { ...e,
                    style: d.buttonWrapperStyle,
                    sticky: !0
                })
            }
        },
        940270: (e, t, o) => {
            function n({
                collectionStore: e,
                collectionContextStore: t,
                property: o
            }) {
                return null != t && t.isMultiSourceViewFromStoreState ? e.getMappedProperty(o) : o
            }

            function l({
                collectionStore: e,
                property: t
            }) {
                let r = (0, o(713311).Ks)();
                return (0, o(682985).K8)(() => n({
                    collectionStore: e,
                    collectionContextStore: r,
                    property: t
                }), [e, r, t])
            }

            function r(e) {
                return e && "compact" === e.getCardLayoutMode() ? {
                    tokenLimit: 1,
                    tokenLimitThreshold: 3
                } : {
                    tokenLimit: void 0,
                    tokenLimitThreshold: void 0
                }
            }

            function i({
                viewType: e,
                propertySchema: t
            }) {
                var n;
                return !!(0, o(396711).x)(e) && !!t && ("rollup" === t.type || "number" === t.type || "formula" === t.type) && (null == (n = t.show_as) ? void 0 : n.type) === "bar"
            }
            o.d(t, {
                Le: () => n,
                fr: () => r,
                yQ: () => i,
                yo: () => l
            })
        },
        959110: (e, t, o) => {
            o.d(t, {
                Fe: () => y,
                Jb: () => d,
                ao: () => i,
                rW: () => a
            });
            var n = o(296540),
                l = o(474848);
            let r = {
                lineHeight: "20px"
            };

            function i() {
                return (0, l.jsx)(o(361724).C, {
                    fontColor: "light",
                    style: r,
                    isEmpty: !0,
                    children: (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Empty",
                        id: "database.pageProperty.emptyTitle"
                    })
                })
            }

            function a() {
                return null
            }
            let s = {
                    display: "inline-flex",
                    alignItems: "center"
                },
                c = {
                    marginInlineEnd: 6
                };

            function d() {
                let e = (0, o(960253).e)(),
                    {
                        store: t,
                        property: r,
                        collectionContextStore: i
                    } = (0, n.useContext)(o(422575).L8),
                    a = (0, o(682985).K8)(() => {
                        let e = null == i ? void 0 : i.normalizedSchemaStore.state,
                            n = null == t ? void 0 : t.getAssociatedCollectionStore();
                        if (e && n && r) return e["collectionTypedView" === i.contextTypeFromStoreState ? o(333042).u9.derivePropertyUri(r, n.getPropertyMapping()) ? ? r : r]
                    }, [i, r, t]);
                return a ? (0, l.jsxs)(o(361724).C, {
                    fontColor: "light",
                    style: s,
                    children: [(0, l.jsx)(o(221535).zB, {
                        type: a.type,
                        icon: a.icon,
                        size: 14,
                        theme: o(632079).Tj,
                        themeMode: e,
                        style: c
                    }), (0, l.jsx)(o(109939).sA, {
                        defaultMessage: "Add {propertyName}",
                        id: "database.boardProperty.fillProperty",
                        values: {
                            propertyName: a.name
                        }
                    })]
                }) : null
            }
            let u = {
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                },
                p = {
                    marginInlineEnd: 4
                };

            function y() {
                let e = (0, o(960253).e)(),
                    {
                        propertySchema: t,
                        baseStyles: r,
                        collectionContextStore: i
                    } = (0, n.useContext)(o(422575).L8),
                    a = (0, o(682985).K8)(() => {
                        var e;
                        return (null == i || null == (e = i.collectionStore()) || null == (e = e.getLayoutStore()) || null == (e = e.getFormat()) ? void 0 : e.property_icons_visibility) === "hide"
                    }, [i]),
                    s = (0, o(960253).I)(() => ({
                        container: { ...null == r ? void 0 : r.textStyle,
                            display: "inline-flex",
                            alignItems: "center",
                            overflow: "hidden",
                            color: o(632079).Tj.text.tertiary
                        }
                    }), [r]);
                return t ? (0, l.jsxs)("div", {
                    style: s.container,
                    children: [a ? void 0 : (0, l.jsx)(o(221535).zB, {
                        type: t.type,
                        icon: t.icon,
                        size: 14,
                        theme: o(632079).Tj,
                        themeMode: e,
                        style: p
                    }), (0, l.jsx)("div", {
                        style: u,
                        children: t.name
                    })]
                }) : null
            }
        }
    }
]);