"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5140, 40716], {
        730: (e, t, i) => {
            i.d(t, {
                i: () => n
            }), i(296540);
            var l = i(474848);

            function n({
                children: e,
                style: t
            }) {
                let o = (0, i(960253).I)(() => ({
                    subheader: {
                        fontSize: 24,
                        fontWeight: i(699422).Wy.semibold,
                        marginTop: 36,
                        marginBottom: 8,
                        lineHeight: 1,
                        ...t
                    }
                }), [t]);
                return (0, l.jsx)("div", {
                    style: o.subheader,
                    children: e
                })
            }
        },
        5967: (e, t, i) => {
            i.d(t, {
                V: () => l
            });

            function l(e) {
                let {
                    spaceStore: t
                } = e, l = (0, i(993077).nB)(t);
                return (0, i(682985).K8)(() => (0, i(924448).MU)({
                    spaceStore: t,
                    actorRole: l
                }), [t, l])
            }
        },
        84578: (e, t, i) => {
            i.d(t, {
                q: () => o
            });
            var l = i(296540);
            let n = (0, i(109939).YK)({
                copyColor: {
                    defaultMessage: "Copied ‘{stringValue}’",
                    id: "uidoc.colors.copied"
                }
            });

            function o() {
                let e = (0, i(533992).v3)();
                return (0, l.useCallback)(async t => {
                    let l = t.length > 25 ? `${t.slice(0,25)}...` : t;
                    (await (0, i(969899).jd)())({
                        copiedMessage: { ...n.copyColor,
                            defaultMessage: `Copied '${l}'`
                        },
                        environment: e,
                        stringValue: t
                    })
                }, [e])
            }
        },
        122730: (e, t, i) => {
            i.d(t, {
                q: () => u
            });
            var l = i(296540),
                n = i(474848);

            function o({
                children: e,
                isInverted: t
            }) {
                let l = (0, i(960253).e)();
                return t ? (0, n.jsx)(i(172474).BQ, {
                    mode: "light" === l ? "dark" : "light",
                    children: e
                }) : (0, i(411048).Du)(e)
            }

            function r(e) {
                let {
                    marginTopBottom: t,
                    showTransparency: o
                } = e, r = (0, i(960253).e)(), s = "light" === r ? "dark" : "light", a = (0, i(632079).O4)({
                    theme: s
                }), d = e.isInverted ? a : i(632079).Tj, c = e.isInverted ? s : r, u = (0, l.useMemo)(() => ({
                    borderRadius: 4,
                    overflow: "hidden",
                    border: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`,
                    background: o ? `repeating-conic-gradient(${d.background.primary} 0 25%, ${d.background.tertiary} 0 50%) 50% / 20px 20px` : d.background.primary,
                    marginTop: t ? ? 12,
                    marginBottom: t ? ? 12,
                    color: d.text.primary
                }), [d, o, t]);
                return (0, n.jsx)("div", {
                    className: "dark" === c ? i(828432).Rsl : i(828432).fRh,
                    style: u,
                    children: e.children
                })
            }
            let s = {
                position: "relative"
            };

            function a(e) {
                let {
                    showInsets: t,
                    showSize: o,
                    insetSize: r,
                    children: a
                } = e, d = (0, l.useRef)(null), c = (0, i(960253).I)(() => {
                    let e = t ? "rgba(255, 105, 180, 1)" : "rgba(255, 105, 180, 0)",
                        l = `1px dashed ${e}`,
                        n = `${r}px`,
                        o = "all 0.1s ease-in-out",
                        s = {
                            t: {
                                borderBottom: l,
                                transition: o
                            },
                            l: {
                                borderInlineEnd: l,
                                transition: o
                            },
                            r: {
                                borderInlineStart: l,
                                transition: o
                            },
                            b: {
                                borderTop: l,
                                transition: o,
                                position: "relative"
                            }
                        };
                    return {
                        grid: {
                            display: "grid",
                            gridTemplateColumns: `${n} auto ${n}`,
                            gridTemplateRows: `${n} auto ${n}`,
                            ...s.t,
                            ...s.l,
                            ...s.r,
                            ...s.b
                        },
                        ...s,
                        tl: { ...s.t,
                            ...s.l
                        },
                        tr: { ...s.t,
                            ...s.r
                        },
                        bl: { ...s.b,
                            ...s.l
                        },
                        br: { ...s.b,
                            ...s.r
                        },
                        insetText: {
                            color: e,
                            fontSize: 10,
                            paddingInlineStart: (r - 10) / 2,
                            fontFamily: i(699422).Tf.githubMono,
                            lineHeight: n,
                            maxHeight: r,
                            transition: o,
                            position: "absolute"
                        }
                    }
                }, [t, r]);
                return (0, n.jsxs)("div", {
                    style: c.grid,
                    children: [(0, n.jsx)("div", {
                        style: c.tl
                    }), (0, n.jsx)("div", {
                        style: c.t
                    }), (0, n.jsx)("div", {
                        style: c.tr
                    }), (0, n.jsx)("div", {
                        style: c.l
                    }), (0, n.jsx)("div", {
                        style: s,
                        ref: d,
                        children: a
                    }), (0, n.jsx)(i(51831).m, {
                        forceVisibleState: o ? ? t,
                        content: () => {
                            var e;
                            return `${null==(e=d.current)?void 0:e.getBoundingClientRect().height}px`
                        },
                        placement: "right",
                        children: () => (0, n.jsx)("div", {
                            style: c.r
                        })
                    }), (0, n.jsx)("div", {
                        style: c.bl
                    }), (0, n.jsx)(i(51831).m, {
                        placement: "bottom",
                        forceVisibleState: o ? ? t,
                        content: () => {
                            var e;
                            return `${null==(e=d.current)?void 0:e.getBoundingClientRect().width}px`
                        },
                        children: () => (0, n.jsx)("div", {
                            style: c.b,
                            children: (0, n.jsx)(i(324489).V, {
                                style: c.insetText,
                                children: `${r}px inset`
                            })
                        })
                    }), (0, n.jsx)("div", {
                        style: c.br
                    })]
                })
            }
            let d = {
                    position: "relative"
                },
                c = {
                    position: "absolute",
                    top: 16,
                    insetInlineEnd: 14
                };

            function u(e) {
                let [t, s] = (0, l.useState)(!1), [u, h] = (0, l.useState)(e.showTransparency ? ? !1), p = e.showTransparencyToggle ? ? t;
                return (0, n.jsxs)("div", {
                    onMouseEnter: () => {
                        s(!0)
                    },
                    onMouseLeave: () => {
                        s(!1)
                    },
                    style: d,
                    children: [(0, n.jsx)(r, {
                        marginTopBottom: e.marginTopBottom,
                        isInverted: e.isInverted,
                        showTransparency: u,
                        children: (0, n.jsx)(a, {
                            showSize: !!e.showSize && t,
                            showInsets: !!e.showInsets && t,
                            insetSize: 24,
                            children: (0, n.jsx)(o, {
                                isInverted: e.isInverted,
                                children: e.children
                            })
                        })
                    }), p ? (0, n.jsx)("div", {
                        style: c,
                        children: (0, n.jsx)(i(51831).m, {
                            content: () => u ? "Hide transparency" : "Show transparency",
                            children: e => (0, n.jsx)(i(374533).A, { ...e,
                                icon: u ? i(550113).L : i(920906).eyeFillIcon,
                                size: "sm",
                                ariaLabel: "Toggle transparency",
                                onClick: () => h(!u),
                                hasBackground: !0,
                                showShadow: !0
                            })
                        })
                    }) : null]
                })
            }
        },
        159671: (e, t, i) => {
            i.d(t, {
                R: () => d
            });
            var l = i(296540),
                n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.96 1.99 14.08 15.13",
                    svg: (0, n.jsx)("path", {
                        d: "M7.3 2a.55.55 0 1 0 0 1.1h5.4a.55.55 0 0 0 0-1.1zM4.95 4.8a.55.55 0 0 1 .55-.55h9a.55.55 0 0 1 0 1.1h-9a.55.55 0 0 1-.55-.55m.138 1.625A2.125 2.125 0 0 0 2.963 8.55V15c0 1.174.951 2.125 2.125 2.125h9.825A2.125 2.125 0 0 0 17.038 15V8.55a2.125 2.125 0 0 0-2.125-2.125z"
                    })
                },
                r = (0, i(104509).wt)("stackFill", o, "fill"),
                s = {
                    notion: i(898378).notionTintableIcon,
                    webpage: i(515388).globeIcon,
                    helpdocs: i(712802).bookIcon,
                    "helpdoc-section": i(712802).bookIcon,
                    ...i(44183).G
                },
                a = {
                    "google-drive-spreadsheets": i(783892).C,
                    "google-drive-presentation": r,
                    "google-drive-document": i(782622).pageFillIcon,
                    "google-drive-pdf": i(790022).H
                };

            function d(e) {
                let {
                    result: t,
                    size: l,
                    style: o,
                    notStandaloneIcon: r
                } = e, s = (0, i(960253).I)(() => {
                    let e = Math.floor(20 * l / 16);
                    return {
                        wrapper: r ? {} : {
                            position: "relative",
                            flexShrink: 0,
                            marginInlineEnd: 2,
                            marginTop: 2,
                            width: e,
                            height: e
                        }
                    }
                }, [r, l]);
                return "notion" === t.type ? (0, n.jsx)("div", {
                    style: s.wrapper,
                    children: (0, n.jsx)(c, {
                        result: t,
                        size: l,
                        style: o
                    })
                }) : (0, n.jsx)("div", {
                    style: s.wrapper,
                    children: (0, n.jsx)(u, {
                        result: t,
                        size: l,
                        style: o
                    })
                })
            }

            function c(e) {
                let {
                    result: {
                        store: t
                    },
                    size: l,
                    style: o
                } = e, r = (0, i(682985).K8)(() => t.getIcon(), [t]), s = (0, i(682985).K8)(() => t.isEmptyPage(), [t]), a = (0, i(682985).K8)(() => (0, i(569553).Te)(t), [t]);
                return (0, n.jsx)(i(569553).B6, {
                    disabled: !0,
                    icon: r,
                    isEmptyPage: s,
                    size: l,
                    style: o,
                    useInvertedColors: !1,
                    iconRecordCategory: a
                })
            }

            function u(e) {
                let {
                    result: t,
                    size: o,
                    style: r
                } = e, [d, c] = (0, l.useState)(!1), u = (0, l.useMemo)(() => {
                    var e = "google-drive" === t.type ? `google-drive-${t.fileType}` : void 0;
                    return e && function(e) {
                        for (let t of (0, i(722371).objectKeys)(a))
                            if (t === e) return !0;
                        return !1
                    }(e) ? e : void 0
                }, [t]), h = (0, i(960253).I)(() => {
                    let e;
                    switch (u) {
                        case "google-drive-presentation":
                            e = i(632079).Tj.palette.yellow[500];
                            break;
                        case "google-drive-spreadsheets":
                            e = i(632079).Tj.palette.green[500];
                            break;
                        case "google-drive-document":
                            e = i(632079).Tj.palette.blue[500]
                    }
                    return {
                        icon: { ...r,
                            ...e ? {
                                fill: e
                            } : {},
                            height: o,
                            width: o,
                            position: "relative"
                        }
                    }
                }, [o, r, u]);
                if (u) return a[u](h.icon);
                if ("webpage" === t.type) return t.url.includes("github.com") ? (0, n.jsx)(i(708966).Q, {
                    iconGroup: i(198852).A,
                    variantName: "default",
                    style: {
                        width: o,
                        height: o
                    }
                }) : d ? (0, n.jsx)(i(16275).I, {
                    icon: i(515388).globeIcon,
                    style: h.icon
                }) : (0, n.jsx)("img", {
                    style: h.icon,
                    src: `${t.domain}/favicon.ico`,
                    onError: () => c(!0),
                    alt: `Favicon for ${t.url}`
                }); {
                    let e = s[t.type];
                    return "custom" === t.type && t.iconUrl ? (0, n.jsx)("img", {
                        src: t.iconUrl,
                        style: h.icon,
                        alt: t.title
                    }) : e ? "function" == typeof e ? e(h.icon) : (0, n.jsx)(i(708966).Q, {
                        iconGroup: e,
                        variantName: "default",
                        style: {
                            width: o,
                            height: o
                        }
                    }) : (0, n.jsx)(i(16275).I, {
                        icon: i(588739).linkIcon,
                        style: h.icon
                    })
                }
            }
        },
        465708: (e, t, i) => {
            i.d(t, {
                wS: () => x,
                Kg: () => o().Kg,
                rx: () => o().rx,
                iY: () => o().iY,
                oj: () => o().oj,
                GC: () => d,
                yD: () => c,
                Rp: () => g,
                Dt: () => f
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(823215), i(354520), i(672577), i(430670), i(581454), i(737550);
            var l = i.n(i(32485)),
                n = i(296540),
                o = () => i(621942),
                r = i(474848);
            let s = {
                    marginInlineEnd: 3
                },
                a = {
                    hovered: {
                        background: i(632079).Tj.background.tertiaryTranslucent
                    },
                    menuItem: {
                        minHeight: 36,
                        paddingTop: i(986939).A.isMobile ? 12 : 8,
                        paddingBottom: i(986939).A.isMobile ? 12 : 8,
                        transition: "none"
                    },
                    menuItemBorder: {},
                    textWrapper: {
                        alignItems: "center",
                        width: "100%"
                    },
                    inlineTextWrapper: {
                        alignItems: "center"
                    },
                    caption: {
                        marginTop: 1,
                        color: i(632079).Tj.text.secondary
                    },
                    timestamp: {
                        fontSize: i(699422).J.UISmall.desktop,
                        fontWeight: i(699422).Wy.regular,
                        color: i(632079).Tj.text.tertiary
                    }
                },
                d = n.memo((0, n.forwardRef)(function(e, t) {
                    var o;
                    let [s, d] = (0, n.useState)(!1), {
                        focused: u,
                        isLastInSection: h,
                        inline: p,
                        className: x
                    } = e;
                    (0, i(383953).w)(() => {
                        let t = g(e.result);
                        "query_results" === e.type && t && e.onEndTimeToRenderServerResults && e.onEndTimeToRenderServerResults()
                    });
                    let y = (0, i(682985).K8)(() => e.store.getSpaceStore(), [e.store]),
                        m = (0, i(5967).V)({
                            spaceStore: y
                        }),
                        j = (0, i(682985).K8)(() => {
                            var t;
                            return !e.hidePath && (m ? (null == (t = e.result) ? void 0 : t.workflowData) !== void 0 || !!(0, i(307983).a6)(e.store) : !e.store.isPersonProfile())
                        }, [m, e.store, e.hidePath, null == (o = e.result) ? void 0 : o.workflowData]),
                        w = f({
                            result: e.result
                        }),
                        b = (0, n.useMemo)(() => {
                            let {
                                isSurrogateCollection: t,
                                collectionId: l
                            } = e.result ? ? {};
                            return t && l ? i(356912).m.createChildStore(e.store, {
                                table: i(832375).VlP,
                                id: l
                            }) : void 0
                        }, [e.result, e.store]),
                        I = (0, n.useMemo)(() => {
                            var t, n;
                            let o = (null == (t = e.result) ? void 0 : t.workflowData) !== void 0,
                                c = null == (n = e.result) ? void 0 : n.workflowData,
                                g = null == c ? void 0 : c.icon;
                            if (!g) {
                                let e = (0, i(337222).Oy)({
                                    baseUrl: i(986939).A.domainBaseUrl || "",
                                    shape: i(337222).WJ,
                                    color: i(337222).i
                                });
                                g = (0, i(337222).Hy)(e)
                            }
                            return {
                                title: b ? (0, r.jsx)(i(52109).G, {
                                    collectionStore: b,
                                    hideCollectionViewBlockIcon: !0
                                }) : (0, r.jsx)(T, {
                                    store: e.store,
                                    result: e.result,
                                    placeholder: e.placeholder,
                                    index: e.index,
                                    focused: e.focused,
                                    inline: e.inline,
                                    type: e.type
                                }),
                                icon: o ? (0, r.jsx)(i(569553).B6, {
                                    disabled: !0,
                                    icon: {
                                        pointer: e.store.pointer,
                                        icon: g
                                    },
                                    iconRecordCategory: "workflow",
                                    isEmptyPage: !0,
                                    size: 20,
                                    largeIcon: !1
                                }) : (0, r.jsx)(v, {
                                    store: e.store
                                }),
                                caption: j ? (0, r.jsx)(C, {
                                    store: b ? ? e.store,
                                    inline: e.inline,
                                    result: e.result,
                                    debugLocal: e.debugLocal,
                                    debugHits: e.debugHits,
                                    debugAreaRef: e.debugAreaRef,
                                    debugModalState: {
                                        explanationModalOpen: s,
                                        setExplanationModalOpen: d
                                    }
                                }) : void 0,
                                body: c ? c.description ? ? void 0 : w,
                                right: (0, r.jsx)(k, {
                                    focused: e.focused,
                                    type: e.type,
                                    lastViewed: e.lastViewed,
                                    result: e.result
                                }),
                                rightStyle: u ? void 0 : a.timestamp,
                                dontShrinkRight: !0,
                                captionStyle: a.caption,
                                style: { ...a.menuItem,
                                    ...!p && !h && !u && !e.isBeforeFocused && a.menuItemBorder
                                },
                                spacerStyle: j ? void 0 : {
                                    visibility: "hidden"
                                },
                                textWrapperStyle: { ...a.textWrapper,
                                    ...e.inline && a.inlineTextWrapper
                                },
                                className: l()("notranslate", x),
                                buttonStyle: {
                                    paddingInlineStart: 2
                                },
                                hoveredStyle: a.hovered
                            }
                        }, [x, b, s, u, p, h, e.debugAreaRef, e.debugHits, e.debugLocal, e.focused, e.index, e.inline, e.isBeforeFocused, e.lastViewed, e.placeholder, e.result, e.store, e.type, j, w]),
                        S = (0, i(682985).K8)(() => c({
                            result: e.result,
                            queryId: e.queryId
                        }), [e.queryId, e.result]),
                        B = (0, n.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation()
                        }, []),
                        M = (0, n.useMemo)(() => (0, r.jsx)(i(95582).A, {
                            ref: t,
                            ...e,
                            ...I,
                            ignoreLocalHoverState: !0
                        }), [t, e, I]);
                    return S ? (0, r.jsx)(i(990461).s, {
                        href: S,
                        onClick: B,
                        children: M
                    }, S) : M
                }), (e, t) => {
                    var i, l;
                    let n = t.focused !== e.focused,
                        o = (null == (i = t.result) ? void 0 : i.highlight) !== (null == (l = e.result) ? void 0 : l.highlight),
                        r = t.isLastInSection !== e.isLastInSection,
                        s = t.isBeforeFocused !== e.isBeforeFocused;
                    return n || o || r || s
                });

            function c(e) {
                let {
                    result: t,
                    queryId: l,
                    pageVisitSource: n,
                    scrollToBlockId: o
                } = e;
                if (!t) return;
                let r = (0, i(945247).$)({
                    result: t
                });
                if (r) return (0, i(456499).x)({
                    result: r,
                    queryId: l,
                    pageVisitSource: n,
                    scrollToBlockId: o
                })
            }

            function u({
                data: e
            }) {
                if (!e) return null;
                if ("localSource" in e) {
                    let {
                        localSource: t
                    } = e;
                    return {
                        element: (0, r.jsx)(r.Fragment, {
                            children: `from ${[...t||["unknown"]].join(",")}`
                        }),
                        expanded: !1
                    }
                }
                return null
            }
            let h = {
                    maxHeight: 200,
                    overflowY: "scroll"
                },
                p = {
                    border: "1px solid black"
                };

            function g(e) {
                return e && !e.sources.includes(i(821603).Ni.Local)
            }

            function x({
                result: e,
                index: t
            }) {
                var l;
                if (!e) return null;
                let n = (null == (l = e.sources ? ? []) ? void 0 : l.flatMap(e => e === i(821603).Ni.Local ? ["💻"] : e === i(821603).Ni.ElasticSearch ? ["🌐"] : e === i(821603).Ni.Postgres ? ["🐘"] : e === i(821603).Ni.VectorDBBlock || e === i(821603).Ni.VectorDBCollection ? ["🔭"] : e === i(821603).Ni.VectorDBBlockOpenAI || e === i(821603).Ni.VectorDBCollectionOpenAI ? ["🤖"] : e === i(821603).Ni.VectorDBBlockBGE || e === i(821603).Ni.VectorDBCollectionBGE ? ["🎯"] : e === i(821603).Ni.VectorDBBlockBGE1024 || e === i(821603).Ni.VectorDBCollectionBGE1024 ? ["🎪"] : e === i(821603).Ni.VectorDBBlockBGE4096 || e === i(821603).Ni.VectorDBCollectionBGE4096 ? ["🎯"] : e === i(821603).Ni.VectorDBBlockE5 || e === i(821603).Ni.VectorDBCollectionE5 ? ["⚡"] : e === i(821603).Ni.ElasticsearchRandom ? ["🎲"] : e === i(821603).Ni.ElasticsearchUniqueID ? ["🆔"] : e === i(821603).Ni.ElasticsearchForcedRecentRecall ? ["⏰"] : e === i(821603).Ni.NotionUnknown ? ["🤷"] : e === i(821603).Ni.UniversalUnknown ? ["👽"] : void(0, i(722371).HB)(e)).reverse()).join("").trim();
                return n ? (0, r.jsx)("span", {
                    children: n
                }) : null
            }

            function v({
                store: e
            }) {
                let t = (0, i(682985).K8)(() => e.getIcon(), [e]),
                    l = (0, i(682985).K8)(() => e.isEmptyPage(), [e]),
                    n = (0, i(682985).K8)(() => (0, i(569553).Te)(e), [e]),
                    o = (0, i(682985).K8)(() => e.isPersonProfile() ? e.getPersonProfileUserStore() : void 0, [e]);
                return o ? (0, r.jsx)(i(321753).A, {
                    userStore: o,
                    size: 20
                }) : (0, r.jsx)(i(569553).B6, {
                    disabled: !0,
                    icon: t,
                    iconRecordCategory: n,
                    isEmptyPage: l,
                    size: 20,
                    largeIcon: !1
                })
            }
            let y = {
                lineHeight: 2,
                fontSize: 12
            };

            function f(e) {
                var t, l, n, o, s, a, d, c, u, h, p, x, v, f, m, j, w;
                let b, k, {
                        result: I
                    } = e,
                    T = (null == I || null == (t = I.sources) ? void 0 : t.includes(i(821603).Ni.VectorDBBlock)) || (null == I || null == (l = I.sources) ? void 0 : l.includes(i(821603).Ni.VectorDBCollection)) || (null == I || null == (n = I.sources) ? void 0 : n.includes(i(821603).Ni.VectorDBBlockOpenAI)) || (null == I || null == (o = I.sources) ? void 0 : o.includes(i(821603).Ni.VectorDBCollectionOpenAI)) || (null == I || null == (s = I.sources) ? void 0 : s.includes(i(821603).Ni.VectorDBBlockBGE)) || (null == I || null == (a = I.sources) ? void 0 : a.includes(i(821603).Ni.VectorDBCollectionBGE)) || (null == I || null == (d = I.sources) ? void 0 : d.includes(i(821603).Ni.VectorDBBlockBGE1024)) || (null == I || null == (c = I.sources) ? void 0 : c.includes(i(821603).Ni.VectorDBCollectionBGE1024)) || (null == I || null == (u = I.sources) ? void 0 : u.includes(i(821603).Ni.VectorDBBlockBGE4096)) || (null == I || null == (h = I.sources) ? void 0 : h.includes(i(821603).Ni.VectorDBCollectionBGE4096)) || (null == I || null == (p = I.sources) ? void 0 : p.includes(i(821603).Ni.VectorDBBlockE5)) || (null == I || null == (x = I.sources) ? void 0 : x.includes(i(821603).Ni.VectorDBCollectionE5)),
                    S = (0, i(960253).I)(() => ({
                        highlight: {
                            color: i(632079).Tj.blue.text.accentPrimary,
                            fontWeight: i(699422).Wy.medium,
                            ...T ? {
                                whiteSpace: "pre-wrap"
                            } : {}
                        }
                    }), [T]),
                    B = (0, i(682985).K8)(() => null == I ? void 0 : I.store.isNavigableBlock(), [null == I ? void 0 : I.store]);
                if (!I || !(I && (null != (f = I.highlight) && null != (f = f.text) && f.length || null != (m = I.highlights) && m.textHighlights.length || null != (j = I.highlight) && null != (j = j.collectionText) && j.length || null != (w = I.highlights) && null != (w = w.collectionTextHighlight) && w.length) && (!B || g(I)))) return null;
                let C = I.highlight;
                if (null != C && C.text ? b = C.text : null != C && C.collectionText && (b = C.collectionText, k = null == I || null == (v = I.matchedCollectionProperties) ? void 0 : v.collectionText), !(b = (0, i(429471).KM)(b))) return null;
                let M = (0, i(648481).Ay)(b),
                    W = !1;
                if (g(I) && !I.workflowData) {
                    let e = e => e.filter(i(648481).dJ).map(e => e[0].toLowerCase()),
                        t = t => void 0 === t ? [] : e((0, i(648481).Ay)(t)),
                        l = [...new Set([...t(null == C ? void 0 : C.title), ...t(null == C ? void 0 : C.pathText)])];
                    W = e(M).every(e => l.some(t => t.includes(e)))
                }
                let A = W ? {} : S.highlight,
                    D = (0, r.jsxs)(r.Fragment, {
                        children: [void 0 !== k ? (0, r.jsx)(i(151710).mA, {
                            propertySchema: k,
                            showIcon: !0,
                            style: y
                        }) : void 0, (0, r.jsx)(i(663528).A, {
                            text: b,
                            highlighter: {
                                tokenize: e => (0, i(648481).nB)(M),
                                style: A
                            }
                        })]
                    });
                return (0, r.jsx)(i(18079).A, {
                    maxLines: 2,
                    children: D
                })
            }

            function m() {
                return (0, r.jsx)(i(16275).I, {
                    icon: i(187627).badgeCheckFillSmallIcon,
                    size: "sm",
                    colorPalette: "blue",
                    colorVariant: "accentPrimary"
                })
            }

            function j() {
                return (0, r.jsx)(i(16275).I, {
                    icon: i(968793).j,
                    size: "sm",
                    colorPalette: "gray",
                    colorVariant: "tertiary"
                })
            }

            function w({
                result: e,
                focused: t
            }) {
                var l;
                let n = null == e || null == (l = e.highlight) ? void 0 : l.uniqueId,
                    o = (0, i(960253).e)(),
                    s = (0, i(960253).I)(() => {
                        let e = t ? "dark" === o ? i(713101).$.dark.translucentGray[300] : i(632079).Tj.border.secondaryTranslucent : "dark" === o ? i(713101).$.dark.translucentGray[200] : i(632079).Tj.border.secondaryTranslucent;
                        return {
                            divider: {
                                borderInlineEnd: `1.5px solid ${e}`,
                                height: 14,
                                borderRadius: 1
                            }
                        }
                    }, [t, o]),
                    a = (0, i(648481).PO)({
                        words: n ? [n] : []
                    });
                return n ? (0, r.jsxs)(i(4458).fI, {
                    gap: 8,
                    marginInlineEnd: 8,
                    alignItems: "center",
                    children: [(0, r.jsx)("div", {
                        children: (0, r.jsx)(i(663528).A, {
                            text: n,
                            highlighter: a
                        })
                    }), (0, r.jsx)("div", {
                        style: s.divider
                    })]
                }) : null
            }
            let b = {
                switchToTab: {
                    fontSize: i(699422).J.UISmall.desktop,
                    fontWeight: i(699422).Wy.regular,
                    color: i(632079).Tj.text.secondary,
                    marginInlineEnd: 4
                }
            };

            function k({
                focused: e,
                type: t,
                lastViewed: l,
                result: n
            }) {
                let o = (0, i(533992).v3)(),
                    s = (0, i(682985).K8)(() => (0, i(850990).i)(i(898735).A.getState().tabs, i(898735).A.getState().currentTab.id), []),
                    a = (0, i(682985).K8)(() => {
                        var e;
                        return !!(null == (e = i(584257).A.state.preferences) ? void 0 : e.isNewTabSearchEnabled) && o.device.isElectron
                    }, [o.device.isElectron]),
                    d = (0, i(682985).K8)(() => (0, i(965142).s)(), []),
                    c = d && d === (null == n ? void 0 : n.id),
                    u = a && ("tabs" === t || "query_results" === t && s.some(e => e.pageId === (null == n ? void 0 : n.id) && "page" === e.type)),
                    h = (0, i(960253).I)(() => ({
                        rightIcon: {
                            opacity: +!!e,
                            marginInlineEnd: 6,
                            marginTop: 2
                        }
                    }), [e]);
                if (i(986939).A.isMobile) return null;
                if (l && !e) return (0, r.jsx)(r.Fragment, {
                    children: (0, i(799843).nl)(l, {
                        useCompactFormat: !0
                    })
                });
                let p = u && !c && e;
                return (0, r.jsx)(i(4458).fI, {
                    children: (0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [p ? (0, r.jsx)("div", {
                            style: b.switchToTab,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "search.result.switchTab.text",
                                defaultMessage: "Switch tab"
                            })
                        }) : void 0, (0, r.jsx)(i(16275).I, {
                            icon: i(916915).arrowTurnDownLeftFillSmallIcon,
                            size: "xs",
                            colorVariant: "tertiary",
                            style: h.rightIcon
                        })]
                    })
                })
            }
            let I = {
                titlePersonalPronoun: {
                    fontWeight: i(699422).Wy.medium,
                    lineHeight: "20px",
                    color: i(632079).Tj.text.secondary
                },
                style0: {
                    display: "flex",
                    justifyContent: "space-between"
                }
            };

            function T({
                store: e,
                result: t,
                placeholder: l,
                index: s,
                focused: a,
                inline: d,
                type: c
            }) {
                var u, h;
                let p = "query_results" === c,
                    v = (0, i(533992).v3)(),
                    y = (0, i(960253).I)(() => ({
                        title: {
                            fontWeight: i(699422).Wy.medium,
                            lineHeight: "20px",
                            ...p && !a && {
                                color: i(632079).Tj.text.secondary
                            }
                        },
                        titleContent: {
                            display: "flex",
                            gap: 6,
                            ...d ? {} : {
                                width: 0,
                                flexGrow: 1
                            }
                        }
                    }), [a, d, p]),
                    f = null == t ? void 0 : t.workflowData,
                    b = (0, i(682985).K8)(() => {
                        let l = [];
                        return t && t.highlight && (l.push(...(0, i(648481).oQ)(t.highlight.pathText)), g(t) ? l.push(...(0, i(648481).oQ)(t.highlight.title)) : f ? l.push(...(0, i(648481).oQ)(t.highlight.text)) : i(970831).B.createChildStore(e, {
                            table: i(832375).evP,
                            id: t.id,
                            spaceId: t.spaceId
                        }).isNavigableBlock() && l.push(...(0, i(648481).oQ)(t.highlight.text))), l
                    }, [t, e, f]),
                    k = (0, i(648481).PO)({
                        words: a ? [] : b,
                        highlightText: null == t || null == (u = t.highlight) ? void 0 : u.title
                    }),
                    S = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = (0, i(297311).U)(e)) ? void 0 : t.isArchived()
                    }, [e]),
                    B = function(e) {
                        if (e) return e.sources.includes(i(821603).Ni.ElasticsearchUniqueID)
                    }(t),
                    C = (0, i(682985).K8)(() => (0, i(965142).s)(), []),
                    M = C && C === (null == t ? void 0 : t.id),
                    {
                        spaceStore: W,
                        spaceId: A
                    } = (0, i(682985).K8)(() => {
                        let t = e.getSpaceStore();
                        return {
                            spaceStore: t,
                            spaceId: null == t ? void 0 : t.id
                        }
                    }, [e]),
                    D = (0, i(682985).K8)(() => {
                        if (!(e instanceof i(970831).B)) return !1;
                        let t = null == W ? void 0 : W.getModel();
                        return !!t && !!(0, i(764498).X)(t) && (0, i(435137).sN)(e.getModel(), e.getRecordModel)
                    }, [e, W]),
                    z = (0, i(682985).K8)(() => e instanceof i(970831).B && e.isArchived(), [e]),
                    E = (0, n.useMemo)(() => {
                        var e;
                        return (null == t || null == (e = t.badges) ? void 0 : e.some(e => "verified" === e.type)) || D
                    }, [null == t ? void 0 : t.badges, D]),
                    $ = (0, n.useMemo)(() => {
                        var e;
                        let i = null == t || null == (e = t.badges) ? void 0 : e.some(e => "archived" === e.type);
                        return !E && (i || z)
                    }, [null == t ? void 0 : t.badges, z, E]),
                    H = function() {
                        for (let e of ["is_template", "popular_this_week", "most_viewed", "agent", "ai_skill"]) {
                            let i = function(e) {
                                var i;
                                return null == t || null == (i = t.badges) ? void 0 : i.find(t => t.type === e)
                            }(e);
                            if (void 0 !== i) return {
                                type: i.type,
                                label: i.label
                            }
                        }
                    }(),
                    V = (0, i(855361).S)({
                        environment: v,
                        spaceId: A
                    }) ? ? 0,
                    N = (0, i(682985).K8)(() => V > 1 && !M && !S || (null == H ? void 0 : H.type) === "is_template", [M, S, H, V]) ? H : void 0,
                    P = (0, i(682985).K8)(() => i(729247).Ay.state.showDebugInfo, []),
                    R = (0, i(682985).K8)(() => {
                        var t;
                        let l = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                        return !!(l && e instanceof i(970831).B && e.isPersonProfile() && e.getPersonProfileUserId() === l)
                    }, [e]),
                    F = {
                        style: y.title,
                        store: e,
                        placeholder: l,
                        highlighter: k
                    },
                    K = R ? (0, r.jsx)("div", {
                        children: (0, r.jsx)(i(109939).sA, {
                            id: "search.result.title.you",
                            defaultMessage: "{fullName} <you>(You)</you>",
                            values: {
                                fullName: (0, r.jsx)(i(627918).A, { ...F,
                                    shouldWrap: !0
                                }),
                                you: e => (0, r.jsx)("span", {
                                    style: I.titlePersonalPronoun,
                                    children: e
                                })
                            }
                        })
                    }) : f ? (0, r.jsx)(i(663528).A, {
                        text: (null == t || null == (h = t.workflowData) ? void 0 : h.name) ? ? "",
                        highlighter: k
                    }) : (0, r.jsx)(i(627918).A, { ...F
                    });
                return (0, r.jsxs)("div", {
                    style: { ...I.style0,
                        ...y.title
                    },
                    children: [(0, r.jsxs)("div", {
                        style: y.titleContent,
                        children: [P && void 0 !== s ? `${s+1}. ` : void 0, B ? (0, r.jsx)(w, {
                            focused: a,
                            result: t
                        }) : void 0, K, E ? (0, r.jsx)(m, {}) : void 0, $ ? (0, r.jsx)(j, {}) : void 0, S ? (0, r.jsx)(o().cF, {}) : void 0, M ? (0, r.jsx)(o().FN, {}) : void 0, N ? ({
                            is_template: () => (0, r.jsx)(o().rx, {}),
                            popular_this_week: () => (0, r.jsx)(o().oj, {}),
                            most_viewed: () => (0, r.jsx)(o().iY, {}),
                            agent: () => (0, r.jsx)(o().Kg, {}),
                            ai_skill: () => (0, r.jsx)(o().Wn, {})
                        })[N.type](N.label) : void 0]
                    }), P ? (0, r.jsx)(x, {
                        result: t,
                        index: s
                    }) : void 0]
                })
            }
            let S = {
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                },
                B = {
                    captionTooltip: {
                        color: i(632079).Tj.text.inversePrimary
                    },
                    captionTooltipDivider: {
                        color: i(632079).Tj.text.inversePrimary
                    },
                    debugArea: {
                        fontFamily: "monospace",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word"
                    },
                    breadcrumb: {
                        height: "100%",
                        flexGrow: 0,
                        marginInlineEnd: 8,
                        fontSize: 10,
                        minWidth: 0
                    },
                    workflowBreadcrumb: {
                        height: "100%",
                        flexGrow: 0,
                        marginInlineEnd: 8,
                        fontSize: i(418676).Kw,
                        minWidth: 0,
                        lineHeight: 1.2,
                        color: i(632079).Tj.text.tertiary
                    },
                    style0: {
                        maxHeight: "90vh",
                        maxWidth: "90vw",
                        height: "90vh",
                        width: "90vw",
                        overflow: "scroll",
                        padding: 10
                    }
                };

            function C({
                store: e,
                inline: t,
                result: l,
                debugLocal: o,
                debugHits: s,
                debugAreaRef: a,
                debugModalState: d
            }) {
                var c, g;
                let x = (0, i(682985).K8)(() => i(729247).Ay.state.autoExpandDebugInfo, []),
                    v = (0, n.useCallback)(e => (function(e, t) {
                        let {
                            data: l,
                            keyPath: n
                        } = e;
                        if (2 === n.length && "spanText" === n[1] && "object" == typeof l && null !== l && "spanText" in l) return {
                            element: (0, r.jsx)("span", {
                                style: S,
                                children: `spanText: "${l.spanText}"`
                            }),
                            expanded: !0
                        };
                        if (2 === n.length && "_explanation" === n[0]) return {
                            element: (0, r.jsx)("button", {
                                onClick: e => {
                                    t(!0), e.stopPropagation()
                                },
                                children: "show simplified explanation"
                            }),
                            expanded: !1
                        };
                        let o = l._ltrlog;
                        if (o) {
                            let e, t, l, n, s;
                            return e = Object.keys(o[0])[0], t = o[0][e], n = { ...l = {
                                    paddingInlineStart: 5,
                                    paddingInlineEnd: 20,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    border: "1px solid black",
                                    color: i(713101).$.dark.green[900]
                                },
                                color: i(713101).$.dark.gray[30]
                            }, s = t.map((e, t) => {
                                let i = t % 2 == 0 ? n : l;
                                return (0, r.jsxs)("tr", {
                                    children: [(0, r.jsx)("td", {
                                        style: i,
                                        children: `${t}`
                                    }), (0, r.jsx)("td", {
                                        style: i,
                                        children: `${e.name}`
                                    }), (0, r.jsx)("td", {
                                        style: i,
                                        children: `${e.value}`
                                    })]
                                }, e.name)
                            }), {
                                element: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsx)("b", {
                                            children: `Featureset: ${e}`
                                        })
                                    }), (0, r.jsx)("div", {
                                        style: h,
                                        children: (0, r.jsx)("table", {
                                            style: p,
                                            children: s
                                        })
                                    })]
                                }),
                                expanded: !1
                            }
                        }
                        if (!["_score", "matched_queries"].every(e => l[e])) return null;
                        let {
                            _score: s,
                            matched_queries: a
                        } = l;
                        return {
                            element: (0, r.jsx)(r.Fragment, {
                                children: `score ${s}, ${(a??[]).length} matched query clauses`
                            }),
                            expanded: !1
                        }
                    })(e, d.setExplanationModalOpen), [d.setExplanationModalOpen]),
                    y = (0, i(648481).PO)({
                        words: (0, i(648481).oQ)(l && l.highlight && l.highlight.pathText),
                        highlightText: null == l || null == (c = l.highlight) ? void 0 : c.pathText,
                        removeDuplicate: !0
                    }),
                    f = t || i(986939).A.isMobile ? 0 : 2,
                    m = (s ? ? []).find(e => "elasticsearch" === e.type && void 0 !== e._explanation),
                    j = (null == m ? void 0 : m.type) === "elasticsearch" ? null == m ? void 0 : m._explanation : void 0,
                    w = (0, i(682985).K8)(() => !!i(729247).Ay.getDebugLevel(), []),
                    b = (i(970831).B, null == l ? void 0 : l.workflowData);
                return (0, r.jsxs)(r.Fragment, {
                    children: [b ? (0, r.jsx)(i(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        style: B.workflowBreadcrumb,
                        children: (0, r.jsx)(i(663528).A, {
                            text: l.agentCreatorName ? l.agentCreatorName : null != (g = l.highlight) && g.pathText ? i(821603).Kl(l.highlight.pathText) : "",
                            highlighter: y
                        })
                    }) : (0, r.jsx)(i(307983).Ay, {
                        store: e,
                        extraLength: f,
                        showFullPathInTooltip: !0,
                        highlighter: y,
                        enableHoverAncestor: !0,
                        tooltipStyle: B.captionTooltip,
                        tooltipDividerStyle: B.captionTooltipDivider,
                        hideMultiSourceParentCVB: !0
                    }), (0, r.jsxs)("div", {
                        ref: a,
                        children: [o ? (0, r.jsx)("div", {
                            style: B.debugArea,
                            children: (0, r.jsx)(i(503270).H, {
                                data: {
                                    debugLocal: o
                                },
                                defaultCollapsed: !x,
                                customCollapsedRenderers: [u],
                                showCopyButton: !1,
                                showModalButton: !1
                            })
                        }) : void 0, s ? (0, r.jsx)("div", {
                            style: B.debugArea,
                            children: (0, r.jsx)(i(503270).H, {
                                data: {
                                    debugHits: s
                                },
                                defaultCollapsed: !x,
                                customCollapsedRenderers: [v],
                                showCopyButton: !0,
                                showModalButton: !0
                            })
                        }) : void 0, s && null != l && l.rankingSignals ? (0, r.jsx)("div", {
                            style: B.debugArea,
                            children: (0, r.jsx)(i(503270).H, {
                                data: {
                                    rankingSignals: l.rankingSignals
                                },
                                defaultCollapsed: !x,
                                showCopyButton: !0,
                                showModalButton: !1
                            })
                        }) : void 0, w && null != l && l.featureGroups ? (0, r.jsx)("div", {
                            style: B.debugArea,
                            children: (0, r.jsx)(i(503270).H, {
                                data: {
                                    featureGroups: l.featureGroups
                                },
                                defaultCollapsed: !x,
                                showCopyButton: !0,
                                showModalButton: !1
                            })
                        }) : void 0, j ? (0, r.jsx)(i(556809).a, {
                            open: d.explanationModalOpen,
                            innerStyle: B.style0,
                            onDismiss: () => d.setExplanationModalOpen(!1),
                            children: (0, r.jsx)("pre", {
                                children: (function({
                                    explanation: e,
                                    simple: t = !1,
                                    filterZeros: i = !1
                                }) {
                                    var l;
                                    return function e(l, n) {
                                        if (!l) return [];
                                        let {
                                            value: o,
                                            description: r,
                                            details: s
                                        } = l;
                                        if (0 === o && i) return [];
                                        let a = (0 === o ? "0" : o.toFixed(4)).padStart(8);

                                        function d(e, t = 0) {
                                            return `${"  ".repeat(n+t)}${e}`
                                        }
                                        let c = `[${a}] ${r}`;
                                        if (r.startsWith("match on required clause")) {
                                            let e = null == s ? void 0 : s[1].description;
                                            return [d(`[${a}] match on required clause ${e}`)]
                                        }
                                        if (["max of:", "sum of:", "min of:"].includes(r) && (null == s ? void 0 : s.length) === 1) return e(s[0], n);
                                        if (r.startsWith("tf") || r.startsWith("idf")) {
                                            var u;
                                            let e = r.split(",")[0],
                                                t = null == (u = r.split(" computed as ")[1]) ? void 0 : u.replace(" from:", ""),
                                                i = (s ? ? []).map(e => `${e.description.split(",")[0]}=${e.value}`).join(" ");
                                            return [d(`[${a}] ${e}: [${i}] --> ${t}`)]
                                        }
                                        if (r.startsWith("ConstantScore(_id:")) return [d(`[${a}] ids query`)];
                                        let h = t && 0 !== n && (r.startsWith("weight") || r.startsWith("Function"));
                                        return [d(c.replace(", result of:", "").replace(" from:", "").replace(" [PerFieldSimilarity]", "").replace(/:$/, "").trim()), ...(h ? [] : s ? ? []).flatMap(t => e(t, n + 1))]
                                    }(null == e || null == (l = e.details) ? void 0 : l[0], 0)
                                })({
                                    explanation: j
                                }).join("\n")
                            })
                        }) : void 0]
                    })]
                })
            }
        },
        782622: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                pageFillIcon: () => o
            }), i(296540);
            var l = i(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M9.95 2.375h-3.7A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125V8.3H12a2.05 2.05 0 0 1-2.05-2.05zM13.3 14.25a.55.55 0 0 1-.55.55h-5.5a.55.55 0 1 1 0-1.1h5.5a.55.55 0 0 1 .55.55m-.55-1.95h-5.5a.55.55 0 1 1 0-1.1h5.5a.55.55 0 0 1 0 1.1"
                        }), (0, l.jsx)("path", {
                            d: "M15.665 7.2a2.1 2.1 0 0 0-.412-.581L11.63 2.997c-.17-.17-.367-.31-.581-.412V6.25c0 .525.425.95.95.95z"
                        })]
                    })
                },
                o = (0, i(104509).wt)("pageFill", n, "fill")
        },
        783892: (e, t, i) => {
            i.d(t, {
                C: () => n
            }), i(296540);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.375 4.125H4.5A2.125 2.125 0 0 0 2.375 6.25v.965h7zm-7 7.41v-3.07h7v3.07zm0 1.25v.965c0 1.174.951 2.125 2.125 2.125h4.875v-3.09zm8.25 0v3.09H15.5a2.125 2.125 0 0 0 2.125-2.125v-.965zm7-1.25v-3.07h-7v3.07zm0-5.285v.965h-7v-3.09H15.5c1.174 0 2.125.951 2.125 2.125"
                    })
                },
                n = (0, i(104509).wt)("viewTableFill", l, "fill")
        },
        809930: (e, t, i) => {
            i.d(t, {
                K: () => d,
                V: () => x
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(581454);
            var l = i(296540);
            i(898992), i(354520);
            var n = i(474848);
            let o = {
                    position: "absolute",
                    insetInlineEnd: 2,
                    top: 2,
                    display: "flex",
                    gap: 4
                },
                r = {
                    width: "1.55em",
                    height: "1.55em"
                };

            function s({
                children: e,
                style: t,
                scrollContentRef: a
            }) {
                let d = (0, i(84578).q)(),
                    [c, u] = (0, l.useState)(!1),
                    h = (0, l.useRef)(null),
                    {
                        value: p
                    } = (0, i(815048).fJ)(i(832737).y),
                    {
                        renderChildren: g,
                        githubUrl: x
                    } = (0, l.useMemo)(() => {
                        var t;
                        if (e && "object" == typeof e && "isSourceMacroResult" in e) {
                            let l = `https://github.com/makenotion/notion-next/tree/main/${e.fileName}#L${(null==(t=e.start)?void 0:t.line)??"1"}`;
                            return {
                                renderChildren: (e.source && function(e) {
                                    let t = e.split("\n"),
                                        l = t.map(e => {
                                            var t;
                                            return (null == (t = e.match(/^\s*/)) ? void 0 : t[0]) ? ? ""
                                        }).filter((e, t) => "" !== e && 0 !== t);
                                    if (0 === l.length) return e;
                                    let n = i(381453).wq(l, e => e.length);
                                    return n && 0 !== n.length ? t.map(e => e.startsWith(n) ? e.slice(n.length) : e).join("\n") : e
                                }(e.source)) ? ? e.source ? ? e.value,
                                githubUrl: l
                            }
                        }
                        return {
                            renderChildren: e
                        }
                    }, [e]),
                    v = (0, i(960253).I)(() => ({
                        code: {
                            fontSize: "80%",
                            fontFamily: "monospace",
                            color: i(632079).Tj.text.primary,
                            borderRadius: "0.25em",
                            background: "rgba(135, 131, 120, 0.15)",
                            padding: "0.2em 0.4em",
                            position: "relative",
                            tabSize: 2,
                            margin: 0,
                            ...t
                        }
                    }), [t]);
                (0, l.useLayoutEffect)(() => {
                    var t;
                    let i = "string" == typeof e ? e : null == (t = h.current) ? void 0 : t.innerText;
                    if (p && i && h.current) {
                        let e = p.highlight(i, p.languages.tsx, "tsx");
                        h.current.innerHTML = e
                    }
                });
                let y = (0, i(109939).tz)();
                return (0, n.jsxs)("pre", {
                    onMouseEnter: () => {
                        u(!0)
                    },
                    onMouseLeave: () => {
                        u(!1)
                    },
                    style: v.code,
                    ref: a,
                    children: [(0, n.jsx)("div", {
                        ref: h,
                        children: g
                    }), c ? (0, n.jsxs)("div", {
                        style: o,
                        children: [x ? (0, n.jsx)(i(374533).A, {
                            ariaLabel: y.formatMessage({
                                id: "uidoc.code.openInGithub",
                                defaultMessage: "Open in Github"
                            }),
                            style: r,
                            hasBackground: !0,
                            icon: i(778434).gitHubIcon,
                            showShadow: !0,
                            href: x,
                            external: !0
                        }) : void 0, (0, n.jsx)(i(374533).A, {
                            ariaLabel: y.formatMessage({
                                id: "uidoc.code.copy",
                                defaultMessage: "Copy code"
                            }),
                            style: r,
                            hasBackground: !0,
                            icon: i(802942).k,
                            showShadow: !0,
                            onClick: () => {
                                d((null == g ? void 0 : g.toString()) || "")
                            }
                        })]
                    }) : void 0]
                })
            }(0, l.createContext)(!1).displayName = "UIDocExpandAllCode";
            let a = (0, i(109939).YK)({
                unknownChannel: {
                    id: "SlackResultTitle.unknownChannel",
                    defaultMessage: "Unknown Channel"
                },
                showMore: {
                    id: "GithubCodeBlock.showMore",
                    defaultMessage: "Show more"
                }
            });

            function d(e) {
                let {
                    result: t,
                    onMouseEnter: i,
                    onMouseLeave: l,
                    onClick: o,
                    compact: r,
                    hideArrowOnHover: s
                } = e;
                return "notion" === t.type ? (0, n.jsx)(u, {
                    result: t,
                    position: e.position,
                    onMouseEnter: i,
                    onMouseLeave: l,
                    onClick: o,
                    compact: r,
                    hideArrowOnHover: s
                }) : (0, n.jsx)(x, {
                    result: t,
                    position: e.position,
                    onMouseEnter: i,
                    onMouseLeave: l,
                    onClick: o,
                    compact: r,
                    hideArrowOnHover: s
                })
            }
            let c = {
                captionTooltip: {
                    color: i(632079).Tj.text.inversePrimary
                },
                captionTooltipDivider: {
                    color: i(632079).Tj.text.inversePrimary
                },
                pageInfoWrapper: {
                    width: "100%",
                    minWidth: 0,
                    fontWeight: i(699422).Wy.regular
                },
                style0: {
                    flexShrink: 0
                }
            };

            function u(e) {
                var t, o;
                let {
                    result: r,
                    result: {
                        store: s,
                        badges: a
                    },
                    onMouseEnter: d,
                    onMouseLeave: u,
                    onClick: h,
                    compact: p,
                    hideArrowOnHover: g
                } = e, [x, v] = (0, l.useState)(!1), y = (0, l.useRef)(null), j = f({
                    hovered: x,
                    isDeepFindUxActive: !0,
                    isCompactView: p ? ? !1
                }), w = (0, i(533992).v3)(), b = (0, l.useCallback)(e => {
                    v(!0), null == d || d(e)
                }, [d]), k = (0, l.useCallback)(e => {
                    v(!1), null == u || u(e)
                }, [u]), I = (0, l.useCallback)(e => {
                    null == h || h(e)
                }, [h]), T = r.highlight && r.highlight.text ? r.highlight.text : void 0, S = (0, i(682985).K8)(() => {
                    if (T) return T;
                    let e = (0, i(554181).E)(s);
                    return e ? (0, i(536614).r4)(e, s) : ""
                }, [s, T]), B = (0, i(648481).PO)({
                    words: (0, i(648481).oQ)(null == (t = r.highlight) ? void 0 : t.title),
                    highlightText: null == (o = r.highlight) ? void 0 : o.title,
                    styleOverride: j.textHighlight
                }), C = (0, i(648481).Ay)(S), M = {
                    tokenize: e => (0, i(648481).nB)(C),
                    style: j.textHighlight
                }, {
                    metaHref: W,
                    href: A
                } = (0, i(682985).K8)(() => ({
                    metaHref: (0, i(483227).Ay)({
                        store: s,
                        fullyQualified: !1,
                        pageVisitSource: i(254656).y8.AIQna
                    }),
                    href: (0, i(730127).OA)({
                        result: r,
                        environment: w
                    })
                }), [s, r, w]);
                return (0, n.jsx)("div", {
                    style: j.wrap,
                    ref: y,
                    children: (0, n.jsx)(i(590422).Q, {
                        href: W,
                        metaHref: A,
                        external: !1,
                        style: j.linkBox,
                        hovered: x,
                        hoveredStyle: j.linkBoxHoveredStyle,
                        onMouseEnter: b,
                        onMouseLeave: k,
                        onClick: I,
                        children: (0, n.jsxs)("div", {
                            style: j.titleWrap,
                            children: [(0, n.jsx)(i(159671).R, {
                                result: r,
                                size: p ? 12 : 16,
                                style: j.icon,
                                notStandaloneIcon: p
                            }), (0, n.jsx)("div", {
                                style: c.pageInfoWrapper,
                                children: p ? (0, n.jsxs)("div", {
                                    style: j.universalTitleWrapper,
                                    children: [(0, n.jsx)(m, {
                                        badges: p ? [] : a ? ? [],
                                        store: s,
                                        titleHighlighter: B,
                                        compact: p
                                    }), x && !g ? (0, n.jsx)(i(16275).I, {
                                        icon: i(684668).arrowDiagonalUpRightIcon,
                                        size: "xxs",
                                        style: c.style0
                                    }) : void 0]
                                }) : (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(m, {
                                        badges: p ? [] : a ? ? [],
                                        store: s,
                                        titleHighlighter: B,
                                        compact: p
                                    }), (0, n.jsx)(i(307983).Ay, {
                                        store: s,
                                        extraLength: 2 * !i(986939).A.isMobile,
                                        showFullPathInTooltip: !0,
                                        enableHoverAncestor: !0,
                                        tooltipStyle: c.captionTooltip,
                                        tooltipDividerStyle: c.captionTooltipDivider
                                    }), (0, n.jsx)(i(18079).A, {
                                        maxLines: 1,
                                        style: j.text,
                                        children: (0, n.jsx)(i(663528).A, {
                                            text: S,
                                            highlighter: M
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                }, r.id)
            }
            let h = {
                display: "inline-flex"
            };

            function p(e) {
                var t, o;
                let {
                    result: r,
                    hovered: s,
                    compact: d
                } = e, c = f({
                    hovered: s,
                    isDeepFindUxActive: !0,
                    isCompactView: d ? ? !1
                }), u = (0, i(109939).tz)(), p = (0, l.useMemo)(() => {
                    if ("slack" === r.type) {
                        var e;
                        let t = (null == (e = r.highlight) ? void 0 : e.title) ? ? r.title;
                        return t ? t.startsWith("https://") ? t : `#${t}` : u.formatMessage(a.unknownChannel)
                    }
                    if ("github" === r.type) return "code" === r.fileType ? r.githubRepoName : void 0
                }, [r, u]), g = "slack" === r.type && (null == (t = r.threadMessages) ? void 0 : t.length) && r.threadMessages.length > 1, x = (null == (o = r.highlight) ? void 0 : o.title) ? ? r.title, v = {
                    tokenize: e => (0, i(648481).nB)((0, i(648481).Ay)(x)),
                    style: c.textHighlight
                }, y = {
                    tokenize: e => (0, i(648481).nB)((0, i(648481).Ay)(p || "")),
                    style: c.textHighlight
                }, m = {
                    tokenize: e => (0, i(648481).nB)((0, i(648481).Ay)("slack" === r.type ? r.user ? ? "" : "")),
                    style: c.textHighlight
                };
                return (0, n.jsxs)("div", {
                    style: c.universalTitleWrapper,
                    children: [(0, n.jsx)("span", {
                        style: c.universalTitleText,
                        children: "slack" === r.type ? (0, n.jsx)(j, {
                            result: r,
                            highlighter: m
                        }) : (0, n.jsx)(i(663528).A, {
                            text: x,
                            highlighter: v
                        })
                    }), (0, n.jsxs)("span", {
                        style: c.universalTitleFollowup,
                        children: [g && !d ? (0, n.jsx)(i(16275).I, {
                            size: "xs",
                            icon: i(557488).h,
                            style: h
                        }) : null, (0, n.jsx)("span", {
                            children: p ? (0, n.jsx)(i(663528).A, {
                                text: p,
                                highlighter: y
                            }) : null
                        })]
                    })]
                })
            }
            let g = {
                flexShrink: 0
            };

            function x(e) {
                let {
                    result: t,
                    onMouseEnter: o,
                    onMouseLeave: r,
                    onClick: s,
                    compact: a,
                    hideArrowOnHover: d
                } = e, [c, u] = (0, l.useState)(!1), h = (0, l.useRef)(null), x = f({
                    hovered: c,
                    isDeepFindUxActive: !0,
                    isCompactView: a ? ? !1
                }), v = (0, l.useCallback)(e => {
                    u(!0), null == o || o(e)
                }, [o]), m = (0, l.useCallback)(e => {
                    u(!1), null == r || r(e)
                }, [r]), j = (0, l.useCallback)(e => {
                    null == s || s(e)
                }, [s]), w = (0, i(533992).v3)(), b = (0, l.useMemo)(() => (0, i(730127).OA)({
                    result: t,
                    environment: w
                }), [t, w]), {
                    isCodeResult: k,
                    codeText: I
                } = (0, l.useMemo)(() => {
                    let e = "github" === t.type && "code" === t.fileType;
                    return {
                        isCodeResult: e,
                        codeText: e ? (0, i(86484).Sf)(t.text) : ""
                    }
                }, [t]), T = (0, l.useMemo)(() => {
                    if (!k) return (function(e) {
                        let t = [];
                        if ("slack" === e.type) {
                            var l;
                            let i = null != (l = e.threadMessages) && l.length && e.threadMessages.length > 1 ? `${e.threadMessages.length-1} replies` : void 0;
                            i && t.push(i)
                        } else if ("github" === e.type) {
                            let l = (0, i(86484).wb)(e.fileType);
                            l && t.push(l), e.statusTag && "pull-request" === e.fileType && t.push(e.statusTag), e.authorName && t.push(e.authorName)
                        } else "webpage" === e.type && t.push(e.domain);
                        return e.lastEdited !== i(25825).Mb && t.push(e.lastEdited), t
                    })(t).join(" • ")
                }, [t, k]), S = (0, l.useMemo)(() => {
                    var e, l;
                    return "slack" === t.type ? (0, i(86484).B5)((null == (l = t.highlight) ? void 0 : l.text) ? ? t.text) : (null == (e = t.highlight) ? void 0 : e.text) ? ? t.text
                }, [t]), B = {
                    tokenize: e => (0, i(648481).nB)((0, i(648481).Ay)(S)),
                    style: x.textHighlight
                }, C = (0, l.useMemo)(() => {
                    if (!k) return "slack" === t.type ? 3 : 1
                }, [t, k]);
                return (0, n.jsx)("div", {
                    style: x.wrap,
                    ref: h,
                    children: (0, n.jsx)(i(590422).Q, {
                        href: b,
                        metaHref: b,
                        external: !0,
                        style: x.linkBox,
                        hovered: c,
                        hoveredStyle: x.linkBoxHoveredStyle,
                        onMouseEnter: v,
                        onMouseLeave: m,
                        onClick: j,
                        children: (0, n.jsxs)("div", {
                            style: x.universalResultWrapper,
                            children: [(0, n.jsx)(i(159671).R, {
                                result: t,
                                size: a ? 12 : 16,
                                style: x.icon,
                                notStandaloneIcon: a
                            }), (0, n.jsx)("div", {
                                style: x.universalBodyWrapper,
                                children: a ? (0, n.jsxs)("div", {
                                    style: x.universalTitleWrapper,
                                    children: [(0, n.jsx)(p, {
                                        result: t,
                                        hovered: c,
                                        compact: a
                                    }), c && !d ? (0, n.jsx)(i(16275).I, {
                                        icon: i(684668).arrowDiagonalUpRightIcon,
                                        size: "xxs",
                                        style: g
                                    }) : void 0]
                                }) : (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(p, {
                                        result: t,
                                        hovered: c,
                                        compact: a
                                    }), (0, n.jsx)(i(18079).A, {
                                        maxLines: C,
                                        style: x.text,
                                        children: k ? (0, n.jsx)(y, {
                                            text: I
                                        }) : (0, n.jsx)(i(663528).A, {
                                            text: S,
                                            highlighter: B
                                        })
                                    }), T ? (0, n.jsx)("div", {
                                        style: x.footerMetadata,
                                        children: T
                                    }) : null]
                                })
                            })]
                        })
                    })
                }, t.id)
            }
            let v = {
                showMoreButton: {
                    margin: 10,
                    color: i(632079).Tj.text.tertiary,
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: i(699422).Wy.medium,
                    background: "none",
                    border: "none"
                }
            };

            function y(e) {
                let {
                    text: t
                } = e, o = (0, i(109939).tz)(), r = (0, l.useRef)(null), [d, c] = (0, l.useState)(!1), [u, h] = (0, l.useState)(!1), p = (0, i(960253).e)(), g = (0, i(960253).I)(() => ({
                    code: {
                        backgroundColor: "transparent",
                        color: i(632079).Tj.text.secondary,
                        overflow: d ? "auto" : "hidden",
                        maxHeight: d ? 400 : 200,
                        scrollbarWidth: "thin",
                        tabSize: 4,
                        padding: 10
                    },
                    codeWrapper: {
                        position: "relative",
                        border: `1px solid ${"light"===p?i(632079).Tj.palette.gray["100"]:i(632079).Tj.palette.gray["300"]}`,
                        borderRadius: 6
                    }
                }), [d, p]);
                (0, i(383953).w)(() => {
                    r.current && !d && h(r.current.scrollHeight > r.current.clientHeight)
                });
                let x = (0, l.useCallback)(e => {
                    c(!0), e.preventDefault(), e.stopPropagation()
                }, []);
                return (0, n.jsxs)("div", {
                    style: g.codeWrapper,
                    children: [(0, n.jsx)(s, {
                        style: g.code,
                        scrollContentRef: r,
                        children: t
                    }), !d && u ? (0, n.jsx)(i(988022).p, {
                        style: v.showMoreButton,
                        onClick: e => x(e),
                        children: o.formatMessage(a.showMore)
                    }) : void 0]
                })
            }

            function f(e) {
                let {
                    hovered: t,
                    isCompactView: l
                } = e, {
                    bodyStyleKey: n
                } = (0, i(765846).yq)(), o = (0, i(765846).Cd)(n).fontSize;
                return (0, i(960253).I)(() => {
                    let e = {
                        wrap: {
                            display: "flex",
                            position: "relative"
                        },
                        linkBox: {
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            padding: "0 4px",
                            borderRadius: 6,
                            fontWeight: i(699422).Wy.medium,
                            fontSize: 13,
                            transition: "background 150ms",
                            marginInlineStart: -6,
                            maxWidth: "calc(100% + 8px)"
                        },
                        linkBoxHoveredStyle: {
                            background: i(632079).Tj.buttonHoveredBackground
                        },
                        iconWrap: {
                            position: "relative",
                            marginInlineEnd: 4,
                            width: 14,
                            height: 14,
                            flexShrink: 0
                        },
                        icon: {
                            position: "absolute",
                            insetInlineStart: 0,
                            top: 0,
                            transition: "opacity 150ms",
                            opacity: 1
                        },
                        number: {
                            position: "absolute",
                            insetInlineStart: 0,
                            top: 0,
                            opacity: +!!t,
                            transition: "opacity 150ms",
                            zIndex: 10
                        },
                        titleWrap: {
                            display: "flex",
                            minWidth: 50,
                            alignItems: "start",
                            padding: void 0
                        },
                        text: {
                            marginTop: 2,
                            color: i(632079).Tj.text.secondary,
                            fontWeight: i(699422).Wy.regular
                        },
                        textHighlight: {
                            color: i(632079).Tj.text.primary,
                            fontWeight: i(699422).Wy.medium
                        }
                    };
                    return l ? { ...e,
                        titleWrap: { ...e.titleWrap,
                            alignItems: "center",
                            gap: 8,
                            color: i(632079).Tj.text.secondary,
                            fontWeight: i(699422).Wy.regular
                        },
                        wrap: { ...e.wrap,
                            width: "100%"
                        },
                        linkBox: { ...e.linkBox,
                            padding: "4px 6px",
                            width: "100%",
                            marginInlineStart: 0
                        },
                        iconWrap: { ...e.iconWrap,
                            marginInlineEnd: 6,
                            marginTop: 0,
                            width: 12,
                            height: 12
                        },
                        universalResultWrapper: { ...e.titleWrap,
                            flexGrow: 1,
                            alignItems: "center",
                            gap: 8
                        },
                        number: { ...e.number,
                            opacity: 0
                        },
                        icon: {
                            position: "relative",
                            width: 12,
                            height: 12,
                            opacity: 1,
                            color: i(632079).Tj.icon.secondary
                        },
                        footerMetadata: {
                            whiteSpace: "nowrap",
                            color: i(632079).Tj.text.tertiary,
                            fontSize: 12,
                            fontWeight: i(699422).Wy.regular,
                            marginTop: 3
                        },
                        universalBodyWrapper: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            color: i(632079).Tj.text.secondary,
                            flexWrap: "nowrap",
                            minWidth: 0
                        },
                        universalTitleWrapper: {
                            display: "flex",
                            alignItems: "center",
                            overflow: "hidden",
                            gap: 4
                        },
                        universalTitleText: {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: o,
                            fontWeight: i(699422).Wy.regular,
                            color: i(632079).Tj.text.secondary
                        },
                        universalTitleFollowup: {
                            whiteSpace: "nowrap",
                            color: i(632079).Tj.text.tertiary,
                            fontSize: 12,
                            fontWeight: i(699422).Wy.regular,
                            alignItems: "center",
                            gap: 3,
                            display: "flex"
                        },
                        textHighlight: {}
                    } : { ...e,
                        wrap: { ...e.wrap,
                            width: "calc(100% + 20px)"
                        },
                        linkBox: { ...e.linkBox,
                            padding: 8,
                            width: "100%",
                            marginInlineStart: -8
                        },
                        iconWrap: { ...e.iconWrap,
                            marginInlineEnd: 12,
                            marginTop: 1,
                            width: 20,
                            height: 20
                        },
                        universalResultWrapper: { ...e.titleWrap,
                            flexGrow: 1
                        },
                        number: { ...e.number,
                            opacity: 0
                        },
                        icon: { ...e.icon,
                            opacity: 1
                        },
                        footerMetadata: {
                            whiteSpace: "nowrap",
                            color: i(632079).Tj.text.tertiary,
                            fontSize: 12,
                            fontWeight: i(699422).Wy.regular,
                            marginTop: 3
                        },
                        universalBodyWrapper: {
                            width: "100%",
                            minWidth: 0
                        },
                        universalTitleWrapper: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                        },
                        universalTitleText: {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: o,
                            fontWeight: i(699422).Wy.medium
                        },
                        universalTitleFollowup: {
                            whiteSpace: "nowrap",
                            color: i(632079).Tj.text.tertiary,
                            fontSize: 12,
                            fontWeight: i(699422).Wy.regular,
                            alignItems: "center",
                            gap: 3,
                            display: "flex"
                        }
                    }
                }, [t, l, o])
            }

            function m(e) {
                let {
                    badges: t,
                    store: o,
                    titleHighlighter: r,
                    compact: s
                } = e, {
                    bodyStyleKey: a
                } = (0, i(765846).yq)(), d = (0, i(765846).Cd)(a), c = (0, i(960253).I)(() => ({
                    title: { ...d,
                        color: i(632079).Tj.text.secondary,
                        fontWeight: s ? i(699422).Wy.regular : i(699422).Wy.medium
                    }
                }), [s, d]), u = (0, l.useMemo)(() => (0, n.jsx)(i(627918).A, {
                    store: o,
                    style: c.title,
                    highlighter: r
                }), [o, c.title, r]), h = (0, l.useMemo)(() => new Set(t.map(e => e.type)), [t]);
                return (0, n.jsxs)(i(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: [u, h.has("is_collection") ? (0, n.jsx)(i(16275).I, {
                        icon: i(310585).H,
                        size: "sm",
                        colorVariant: "secondary"
                    }) : void 0, h.has("verified") ? (0, n.jsx)(i(16275).I, {
                        icon: i(187627).badgeCheckFillSmallIcon,
                        size: "sm",
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }) : void 0, h.has("is_template") ? (0, n.jsx)(i(465708).rx, {}) : void 0, h.has("popular_this_week") ? (0, n.jsx)(i(465708).oj, {}) : void 0, h.has("most_viewed") ? (0, n.jsx)(i(465708).iY, {}) : void 0, h.has("agent") ? (0, n.jsx)(i(465708).Kg, {}) : void 0]
                })
            }

            function j(e) {
                let {
                    result: t,
                    highlighter: o
                } = e, r = (0, l.useMemo)(() => "slack" === t.type ? (0, i(722371).O9)(t.threadHref) ? t.user : t.text.split(":")[0] : void 0, [t]);
                return (0, i(722371).O9)(r) ? (0, n.jsx)(i(663528).A, {
                    text: r,
                    highlighter: o
                }) : (0, n.jsx)(i(109939).sA, {
                    id: "SlackCitationTitle.authorUnknown",
                    defaultMessage: "Unknown author"
                })
            }
        },
        850990: (e, t, i) => {
            function l(e, t) {
                var i, l;
                let n = new Set,
                    o = e.find(e => e.id === t),
                    r = null == o ? void 0 : o.tabSectionId,
                    s = o ? `${o.type}-${null==(i=o.pagePointer)?void 0:i.spaceId}-${null==(l=o.pagePointer)?void 0:l.id}` : void 0;
                return n.add(s), e.filter(e => {
                    var t, i;
                    if (r && e.tabSectionId !== r) return !1;
                    let l = `${e.type}-${null==(t=e.pagePointer)?void 0:t.spaceId}-${null==(i=e.pagePointer)?void 0:i.id}`;
                    return !n.has(l) && (n.add(l), !0)
                })
            }
            i.d(t, {
                i: () => l
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577)
        },
        894658: (e, t, i) => {
            i.d(t, {
                e1: () => o,
                hC: () => s,
                vd: () => a
            }), i(581454);
            var l = i(296540),
                n = i(474848);

            function o(e) {
                let t = { ...i(44183).G,
                    ...i(456308).V
                };
                return "notion" === e ? i(539694)._ : t[e]
            }
            let r = {
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                marginInlineStart: 5
            };

            function s(e) {
                let {
                    connectors: t,
                    maxBubbles: s,
                    iconSize: a,
                    bubbleStyles: d,
                    disableNumericalEllipsis: c
                } = e, u = (0, l.useMemo)(() => [...t.slice(0, s)].reverse(), [t, s]), h = Math.max(0, t.length - s), p = (0, i(960253).I)(() => ({
                    bubble: {
                        boxShadow: `${i(632079).Tj.border.secondaryTranslucent} 0 0 0 1px`,
                        borderRadius: "100%",
                        width: 20,
                        height: 20,
                        backgroundColor: i(632079).Tj.whiteButtonBackground,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginInlineStart: -5,
                        fontSize: 9,
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.tertiary,
                        ...d
                    }
                }), [d]);
                return 0 === t.length ? null : (0, n.jsxs)("div", {
                    style: r,
                    children: [!c && h > 0 ? (0, n.jsx)("div", {
                        style: p.bubble,
                        children: (0, n.jsx)("div", {
                            children: `+${h}`
                        })
                    }) : void 0, u.map((e, t) => (0, n.jsx)("div", {
                        style: p.bubble,
                        children: (0, n.jsx)(i(708966).Q, {
                            iconGroup: o(e),
                            style: {
                                width: a,
                                height: a
                            },
                            variantName: "default"
                        })
                    }, `${e}-${t}`))]
                })
            }

            function a(e) {
                if ("notion" === e.type) return "notion";
                if ((0, i(281708).SC)(e.type)) return e.type;
                if ("everything" !== e.type && "universal-workspace" !== e.type && "workspace" !== e.type && "page" !== e.type && "collection" !== e.type && "teamspace" !== e.type && "site" !== e.type && "notion-none" !== e.type && "ai-knowledge" !== e.type && "helpdocs" !== e.type && "web" !== e.type && "universal-none" !== e.type && "slackbot" !== e.type && "labeler" !== e.type) return (0, i(722371).HB)(e.type)
            }
        },
        916915: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowTurnDownLeftFillSmallIcon: () => n,
                iconDefinition: () => l
            }), i(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.45 3.05 12.3 10.24",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.25 3.8a.75.75 0 0 1 1.5 0v4a1.95 1.95 0 0 1-1.95 1.95H4.01l2.24 2.24a.75.75 0 1 1-1.06 1.06L1.67 9.53a.75.75 0 0 1 0-1.06l3.52-3.52a.75.75 0 0 1 1.06 1.06L4.01 8.25h7.79a.45.45 0 0 0 .45-.45z"
                    })
                },
                n = (0, i(104509).wt)("arrowTurnDownLeftFillSmall", l, "fillSmall")
        },
        945247: (e, t, i) => {
            i.d(t, {
                $: () => l
            });

            function l({
                result: e
            }) {
                if (e.isSurrogateCollection) {
                    if (e.collectionId) return {
                        type: "collection",
                        ...e,
                        collectionId: e.collectionId,
                        isSurrogateCollection: !0
                    }
                } else if (e.workflowData) return {
                    type: "agent",
                    ...e,
                    workflowData: e.workflowData,
                    isSurrogateCollection: !1
                };
                else return {
                    type: "page",
                    ...e,
                    isSurrogateCollection: !1
                }
            }
        },
        996712: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            var l = i(296540),
                n = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.86 2.3 12.06 11.39",
                    svg: (0, n.jsx)("path", {
                        d: "M11.268 2.681 9.325 3.874a6.5 6.5 0 0 1-1.47.666v5.324a6.5 6.5 0 0 1 1.47.665l1.943 1.194zm1 9.413h.056a1.59 1.59 0 0 0 1.59-1.59V3.9a1.59 1.59 0 0 0-1.646-1.59zm-5.413-7.33q-.45.065-.91.065H3.381c-.84 0-1.52.68-1.52 1.52v1.706c0 .674.439 1.246 1.047 1.445h3.947zm-2.223 8.145L3.906 10.5h2.949v2.431a1.1 1.1 0 0 1-1.047.76h-.123a1.1 1.1 0 0 1-1.053-.782"
                    })
                },
                r = (0, i(104509).wt)("megaphoneFillSmall", o, "fillSmall"),
                s = l.forwardRef(function(e, t) {
                    let {
                        teamStore: l,
                        renderAsEveryoneMention: o
                    } = e, s = (0, i(682985).K8)(() => l.getName(), [l]);
                    return (0, n.jsx)(i(95582).A, { ...e,
                        icon: o ? (0, n.jsx)(i(16275).I, {
                            icon: r,
                            size: "sm"
                        }) : (0, n.jsx)(i(729746).x, {
                            size: 14,
                            store: l,
                            disabled: !0
                        }),
                        title: o ? (0, n.jsx)(i(109939).sA, {
                            id: "posts.teamMenuItem.everyoneMention",
                            defaultMessage: "@everyone"
                        }) : s,
                        ref: t,
                        inline: !0,
                        caption: o ? (0, n.jsx)(i(109939).sA, {
                            id: "posts.teamMenuItem.caption",
                            defaultMessage: "Notifies everyone in the teamspace"
                        }) : void 0
                    })
                })
        }
    }
]);