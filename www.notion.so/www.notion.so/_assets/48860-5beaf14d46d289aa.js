"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [48860], {
        7299: (e, t, n) => {
            n.d(t, {
                U: () => i,
                t: () => a
            });
            let i = {
                [n(696654).NY.ExtremeSmall]: {
                    height: 16,
                    fontSize: 12,
                    margin: "0 4px 0 0",
                    recordIconMarginRight: 3,
                    pageIconSize: 13,
                    closeIconSize: n(104509).Ev.xxs
                },
                [n(696654).NY.ExtraSmall]: {
                    height: 16,
                    fontSize: 12,
                    margin: "0 4px 0 0",
                    recordIconMarginRight: 3,
                    pageIconSize: 13,
                    closeIconSize: n(104509).Ev.xxs
                },
                [n(696654).NY.Small]: {
                    height: 18,
                    fontSize: 12,
                    margin: "0 6px 6px 0",
                    recordIconMarginRight: 3,
                    pageIconSize: 16,
                    closeIconSize: n(104509).Ev.xxs
                },
                [n(696654).NY.CompactEssential]: {
                    height: 20,
                    fontSize: 14,
                    margin: "0 12px 6px 0",
                    recordIconMarginRight: 4,
                    pageIconSize: 20,
                    closeIconSize: n(104509).Ev.xxs
                },
                [n(696654).NY.Medium]: {
                    height: 20,
                    fontSize: 14,
                    margin: "0 12px 6px 0",
                    recordIconMarginRight: 4,
                    pageIconSize: 20,
                    closeIconSize: n(104509).Ev.xxs
                },
                [n(696654).NY.Inline]: {
                    height: 20,
                    fontSize: 14,
                    margin: "0 12px 0 0",
                    recordIconMarginRight: 4,
                    pageIconSize: 20,
                    closeIconSize: n(104509).Ev.xxs
                },
                [n(696654).NY.Large]: {
                    height: 24,
                    fontSize: 16,
                    margin: "0 8px 8px 0",
                    recordIconMarginRight: 4,
                    pageIconSize: 24,
                    closeIconSize: n(104509).Ev.sm
                }
            };

            function a({
                format: e,
                shouldShrink: t,
                shouldWrap: d,
                isSingle: l,
                style: o,
                isEditable: r
            }) {
                return (0, n(960253).I)(() => {
                    let {
                        fontSize: a,
                        margin: p
                    } = i[e], g = r ? n(856235).d0 : i[e].height;
                    return {
                        style: { ...d ? {
                                display: "inline",
                                lineHeight: 1.5,
                                borderRadius: 4
                            } : function({
                                height: e
                            }) {
                                return {
                                    display: "flex",
                                    alignItems: "center",
                                    lineHeight: 1.2,
                                    height: e
                                }
                            }({
                                height: g
                            }),
                            fontSize: a,
                            fontWeight: n(699422).Wy.medium,
                            minWidth: t ? 0 : "auto",
                            margin: l ? 0 : p,
                            ...e === n(696654).NY.Inline && {
                                overflow: "hidden"
                            },
                            ...o
                        }
                    }
                }, [e, t, d, l, r, o])
            }
        },
        141973: (e, t, n) => {
            n.d(t, {
                Di: () => o,
                G1: () => d,
                PB: () => l,
                iH: () => g,
                kG: () => p,
                mA: () => r,
                qR: () => s,
                r2: () => a,
                w_: () => i
            });
            let i = 10,
                a = 32,
                d = 36,
                l = 220,
                o = 44,
                r = 5,
                p = 20,
                g = 8,
                s = 5
        },
        316468: (e, t, n) => {
            n.d(t, {
                w: () => d
            });
            var i = n(296540),
                a = n(474848);

            function d(e) {
                let {
                    isEditable: t,
                    blockStore: d,
                    format: l,
                    shouldWrap: o,
                    isArchived: r
                } = e, p = (0, n(533992).v3)(), [g, s, c] = (0, n(682985).K8)(() => [d.getIcon(), d.isEmptyPage(), d.isReady() && "none" === d.getRole()], [d]), u = (0, n(682985).K8)(() => (0, n(569553).Te)(d), [d]), {
                    style: m
                } = (0, n(960253).I)(() => ({
                    style: {
                        flexShrink: 0,
                        marginInlineEnd: t ? 0 : n(7299).U[l].recordIconMarginRight,
                        justifyContent: "flex-start",
                        ...o && {
                            display: "inline-block",
                            verticalAlign: "text-top",
                            marginBottom: -1
                        },
                        ...r && {
                            opacity: .5
                        }
                    }
                }), [t, l, o, r]), h = (0, i.useCallback)(e => {
                    let t = d.getIconStore();
                    if (t) {
                        let i = d.getSpaceId();
                        (0, n(377796).createAndCommit)({
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            userAction: "RelationToken.handleRecordIconChange",
                            environment: p,
                            canUndo: !0,
                            perform: i => {
                                (0, n(368198).K)({
                                    store: t,
                                    value: e,
                                    transaction: i
                                })
                            }
                        })
                    }
                }, [d, p]), S = {
                    icon: g,
                    size: n(7299).U[l].pageIconSize,
                    isEmptyPage: s,
                    iconRecordCategory: u,
                    style: m
                };
                return c ? (0, a.jsx)("span", {
                    style: S.style,
                    children: (0, a.jsx)(n(16275).I, {
                        icon: n(550113).L,
                        size: S.size,
                        colorVariant: "secondary"
                    })
                }) : t ? (0, a.jsx)(n(569553).B6, { ...S,
                    disabled: !1,
                    onChange: h,
                    bucket: "public"
                }) : (0, a.jsx)(n(569553).B6, { ...S,
                    disabled: !0
                })
            }
        },
        448860: (e, t, n) => {
            n.d(t, {
                A: () => S
            });
            var i = n(296540),
                a = n(474848);
            let d = {
                style0: {
                    height: n(856235).d0 + 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                    paddingTop: 6,
                    paddingInlineEnd: 8,
                    paddingBottom: 7,
                    paddingInlineStart: 8,
                    overflow: "hidden"
                }
            };

            function l(e) {
                let {
                    blockStore: t,
                    titleStyle: l,
                    shouldWrap: o,
                    recordTitleRef: r,
                    disableTooltip: p
                } = e, g = (0, i.useRef)({
                    getNode: () => r.current
                });
                return (0, a.jsx)("div", {
                    style: d.style0,
                    children: (0, a.jsx)(n(627918).A, {
                        store: t,
                        underline: !0,
                        shouldWrap: o,
                        style: l,
                        ref: g,
                        disableTooltip: p
                    })
                })
            }
            let o = (0, n(109939).YK)({
                    typeTitle: {
                        defaultMessage: "Type a title…",
                        id: "relationToken.title.placeholder"
                    }
                }),
                r = Object.freeze({
                    property: !0
                }),
                p = {
                    paddingTop: 6,
                    paddingInlineEnd: 8,
                    paddingBottom: 7,
                    paddingInlineStart: 8,
                    textOverflow: "none",
                    overflow: "visible",
                    whiteSpace: "pre"
                };

            function g(e) {
                let {
                    blockStore: t,
                    onTitleEnter: i,
                    onTitleShiftEnter: d,
                    onTitleEsc: l
                } = e, g = (0, n(109939).tz)(), s = (0, n(682985).K8)(() => t.getBlockTitleStore(), [t]);
                return (0, a.jsx)(n(53373).A, {
                    store: s,
                    disabled: !1,
                    disableSlashCommands: !0,
                    disableEmojiCommands: !0,
                    disableStyleAnnotations: !0,
                    disableInsertedDeletedAnnotations: !0,
                    disableEmbedMenu: !0,
                    onEnter: i,
                    onShiftEnter: d,
                    onEsc: l,
                    onTab: n(763230).D_,
                    placeholder: g.formatMessage(o.typeTitle),
                    style: p,
                    disableSelectAllBlocks: !0,
                    pasteBehavior: "inline",
                    inPageFind: n(831719).Os.none,
                    disabledMentionTypes: r
                })
            }
            let s = {
                width: "100%"
            };

            function c(e) {
                let {
                    store: t,
                    style: d,
                    disableLinks: l,
                    disableHover: o,
                    externalIntegrations: r,
                    canEdit: p,
                    shouldWrap: g,
                    tokenFormat: c
                } = e, u = (0, i.useRef)(null), m = (0, n(109939).tz)(), h = (0, n(533992).v3)(), S = (0, n(533992).Y0)(), f = (0, n(960253).e)(), {
                    isExternalIntegrationPageType: x,
                    blockType: I,
                    blockId: y,
                    blockModel: w
                } = (0, n(682985).K8)(() => {
                    let e = t.getModel();
                    return {
                        isExternalIntegrationPageType: !!(null == e ? void 0 : e.isType(n(955630).xd.externalObjectInstancePage)),
                        blockType: t.getType(),
                        blockId: t.id,
                        blockModel: e
                    }
                }, [t]), b = (0, n(682985).O$)(n(753281).A), k = (0, i.useCallback)(() => {
                    if (!u || !u.current) return;
                    let e = (0, n(247438).bMp)(t.id),
                        i = (0, n(247438).wmz)(e);
                    return {
                        textValue: [i],
                        tokenIndex: 0,
                        textToken: i,
                        node: u.current
                    }
                }, [u, t.id]), v = (0, i.useCallback)(e => {
                    if (o) return;
                    let i = k(),
                        a = t.getTitleStore();
                    a && i && n(41403).xE({
                        environment: h,
                        event: e,
                        interactiveToken: i,
                        store: a,
                        canEdit: p
                    })
                }, [o, k, t, h, p]), T = (0, i.useCallback)(e => {
                    let i = k(),
                        a = t.getTitleStore();
                    a && i && !o && n(41403).HH({
                        environment: h,
                        event: e,
                        interactiveToken: i,
                        store: a,
                        canEdit: p
                    })
                }, [k, t, o, h, p]), E = t.getRecordModel, B = (0, n(591404).FN)(h), z = n(986939).A.domainBaseUrl, N = h.currentUser.id, Y = !l, H = (0, n(682985).K8)(() => {
                    if (w) return (0, n(605351).gA)({
                        blockModel: w,
                        shouldWrap: g,
                        index: 0,
                        style: d,
                        disableHover: o,
                        disableLinks: l,
                        isAndroid: S.isAndroid,
                        isSafariOrIOS: S.isSafari || S.isIOS,
                        theme: n(632079).Tj,
                        themeMode: f,
                        getRecordModel: E,
                        currentUserId: N,
                        baseUrl: z,
                        emojiType: B,
                        externalIntegrations: r,
                        classNames: [],
                        intl: m,
                        emojiData: b,
                        stopLinkPropagation: Y,
                        tokenFormat: (0, n(916769).Ug)(c)
                    })
                }, [w, g, d, o, l, S.isAndroid, S.isSafari, S.isIOS, E, N, z, B, r, m, b, Y, c, f]);
                return y && "external_object_instance_page" === I && x ? (0, a.jsx)("span", {
                    ref: u,
                    onMouseOver: v,
                    onMouseOut: T,
                    onClick: Y ? n(933143).k : void 0,
                    style: s,
                    children: H
                }) : null
            }

            function u(e) {
                let {
                    blockStore: t,
                    shouldWrap: i,
                    style: d,
                    disableLinks: l,
                    format: o
                } = e, r = (0, n(682985).K8)(() => (0, n(758654).q7)(t.getSyncedUri()), [t]), p = (0, n(682985).O$)(n(610463).A.integrations);
                return (0, a.jsx)(c, {
                    shouldWrap: i,
                    store: t,
                    style: d,
                    disableHover: l || !r,
                    disableLinks: l || !r,
                    externalIntegrations: p,
                    canEdit: !0,
                    tokenFormat: o
                })
            }
            let m = {
                opacity: .5
            };

            function h(e) {
                let {
                    format: t,
                    showRemoveButton: i,
                    onClickRemove: d
                } = e, {
                    height: l,
                    closeIconSize: o
                } = n(7299).U[t];
                return i ? (0, a.jsx)(n(64960).Ay, {
                    onClick: d,
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: l,
                        height: l,
                        marginInlineStart: 2,
                        marginInlineEnd: 2,
                        flexGrow: 0,
                        flexShrink: 0,
                        borderRadius: 4
                    },
                    children: (0, a.jsx)(n(16275).I, {
                        icon: n(519529).xMarkFillSmallIcon,
                        size: o,
                        style: m
                    })
                }) : null
            }
            let S = (0, i.forwardRef)(function(e, t) {
                    let {
                        parentStore: d,
                        blockId: l,
                        shouldWrap: o,
                        format: r,
                        showRemoveButton: p,
                        onClickRemove: g,
                        titleStyle: s,
                        onTitleEnter: c,
                        onTitleShiftEnter: m,
                        onTitleEsc: S,
                        index: y,
                        noUnderline: w,
                        disableTooltip: b,
                        disableLinks: k,
                        shouldShrink: v,
                        isSingle: T,
                        style: E
                    } = e, B = n(970831).B.createChildStore(d, {
                        table: n(832375).evP,
                        id: l
                    }), z = (0, n(366318).S)(B), N = (0, n(366318).S)(B), Y = !!c && !z && !N, {
                        style: H
                    } = (0, n(7299).t)({
                        format: r,
                        shouldShrink: v,
                        shouldWrap: o,
                        isSingle: T,
                        style: E,
                        isEditable: Y
                    }), W = (0, i.useRef)(null), M = (0, i.useRef)(null), C = !k && !Y;
                    (0, i.useImperativeHandle)(t, () => B, [B]);
                    let R = (0, n(682985).K8)(() => "external_object_instance_page" === B.getType(), [B]),
                        j = (0, n(682985).K8)(() => B.isArchived(), [B]),
                        {
                            archivedTitleStyle: K
                        } = (0, n(960253).I)(() => ({
                            archivedTitleStyle: j ? { ...s,
                                color: n(632079).Tj.text.tertiary
                            } : s ? ? {}
                        }), [j, s]);
                    if ((0, n(497570).W)(B)) return null;
                    if (R) return (0, a.jsx)(u, {
                        shouldWrap: o,
                        blockStore: B,
                        style: H,
                        disableLinks: k,
                        format: r
                    });
                    let _ = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n(316468).w, {
                            format: r,
                            blockStore: B,
                            isEditable: Y,
                            shouldWrap: o,
                            isArchived: j
                        }), (0, a.jsx)(I, {
                            blockStore: B,
                            recordTitleRef: W,
                            canEditTitle: Y,
                            shouldWrap: o,
                            titleStyle: K,
                            noUnderline: w,
                            onTitleEnter: c,
                            onTitleShiftEnter: m,
                            onTitleEsc: S,
                            index: y,
                            disableTooltip: b
                        }), j ? (0, a.jsx)(n(16275).I, {
                            icon: n(968793).j,
                            size: "sm",
                            colorPalette: "gray",
                            colorVariant: "tertiary",
                            style: f.archiveIcon
                        }) : void 0]
                    });
                    return (0, a.jsxs)("div", {
                        style: H,
                        ref: M,
                        children: [C ? (0, a.jsx)(x, {
                            blockStore: B,
                            relationTokenStyle: H,
                            children: _
                        }) : _, (0, a.jsx)(h, {
                            showRemoveButton: p,
                            onClickRemove: g,
                            format: r
                        })]
                    })
                }),
                f = {
                    archiveIcon: {
                        marginInlineStart: 4,
                        display: "inline-block",
                        verticalAlign: "text-top"
                    }
                };

            function x({
                blockStore: e,
                relationTokenStyle: t,
                children: d
            }) {
                let l, o, r, {
                        blockUrlPage: p,
                        blockUrlPeek: g
                    } = (l = (0, n(533992).v3)(), o = (0, n(713311).Ks)(), r = (0, n(682985).K8)(() => (0, n(483227).Ay)({
                        store: e,
                        fullyQualified: !1,
                        pageVisitSource: n(254656).y8.LinkInPage
                    }), [e]), {
                        blockUrlPeek: (0, n(682985).K8)(() => {
                            let t = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                            return n(28630).wy({
                                environment: l,
                                store: e,
                                mainEditorCurrentBlockStore: t,
                                collectionContextStore: o,
                                fullyQualified: !1
                            })
                        }, [l, e, o]),
                        blockUrlPage: r
                    }),
                    s = (0, i.useMemo)(() => ({
                        display: t.display,
                        height: t.height,
                        alignItems: t.alignItems
                    }), [t]);
                return (0, a.jsx)(n(68774).N, {
                    href: p,
                    metaHref: g,
                    onClick: n(933143).k,
                    style: s,
                    children: d
                })
            }

            function I(e) {
                let {
                    blockStore: t,
                    canEditTitle: i,
                    onTitleEnter: d,
                    onTitleShiftEnter: o,
                    onTitleEsc: r,
                    index: p,
                    recordTitleRef: s,
                    titleStyle: c,
                    shouldWrap: u,
                    noUnderline: m,
                    disableTooltip: h
                } = e, S = (0, n(992859).x)(t), f = i && S && d && p;
                return i ? f ? (0, a.jsx)(g, {
                    blockStore: t,
                    onTitleEnter: d,
                    onTitleShiftEnter: o,
                    onTitleEsc: r
                }) : (0, a.jsx)(l, {
                    blockStore: t,
                    recordTitleRef: s,
                    titleStyle: c,
                    shouldWrap: u,
                    disableTooltip: h
                }) : (0, a.jsx)(n(989786).Y, {
                    blockStore: t,
                    recordTitleRef: s,
                    titleStyle: c,
                    shouldWrap: u,
                    noUnderline: m,
                    disableTooltip: h
                })
            }
        },
        535144: (e, t, n) => {
            n.d(t, {
                C: () => i
            });

            function i(e) {
                return e ? e.getCardLayoutMode() : n(565546).WH
            }
        },
        642065: (e, t, n) => {
            n.d(t, {
                $g: () => o,
                Bu: () => y,
                CL: () => I,
                Cn: () => v,
                G4: () => r,
                Ih: () => f,
                KI: () => i,
                MI: () => m,
                Mi: () => a,
                NL: () => h,
                O0: () => x,
                Yu: () => c,
                _Q: () => k,
                aL: () => g,
                at: () => u,
                gJ: () => d,
                hN: () => l,
                hR: () => p,
                kx: () => S,
                wd: () => s
            });
            let i = "28px",
                a = "14px",
                d = "12px",
                l = "16px",
                o = 1.5,
                r = 1.25,
                p = 1.25,
                g = 35,
                s = 21,
                c = 18,
                u = 34,
                m = 30,
                h = 28,
                S = 30,
                f = 32,
                x = 24,
                I = 24,
                y = 30,
                w = {
                    table: {
                        default: {
                            paddingTop: n(47080).Nh,
                            paddingBottom: n(47080).Nh,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        text: {
                            paddingTop: n(47080).Zs,
                            paddingBottom: n(47080).Zs,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        token: {
                            paddingTop: n(47080).hB,
                            paddingBottom: n(47080).hB,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        checkbox: {
                            paddingTop: n(47080).Nl,
                            paddingBottom: n(47080).Nl,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        button: {
                            paddingTop: n(47080).Mk,
                            paddingBottom: n(47080).Mk,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        }
                    },
                    page: {
                        default: {
                            paddingTop: 7,
                            paddingBottom: 7,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        text: {
                            paddingTop: 6,
                            paddingBottom: 6,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        token: void 0,
                        checkbox: {
                            paddingTop: 9,
                            paddingBottom: 9,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        button: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        }
                    },
                    compact_page: {
                        default: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        text: {
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        token: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        checkbox: {
                            paddingTop: 7,
                            paddingBottom: 7,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        button: {
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        }
                    },
                    card: {
                        default: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 5,
                            paddingInlineEnd: 5
                        },
                        text: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 5,
                            paddingInlineEnd: 5
                        },
                        token: void 0,
                        checkbox: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 5,
                            paddingInlineEnd: 5
                        },
                        button: {
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingInlineStart: 4,
                            paddingInlineEnd: 4
                        }
                    }
                },
                b = {
                    table: {
                        default: {
                            paddingTop: n(47080).A4,
                            paddingBottom: n(47080).A4,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        text: {
                            paddingTop: n(47080).Wh,
                            paddingBottom: n(47080).Wh,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        token: {
                            paddingTop: n(47080).Sh,
                            paddingBottom: n(47080).Sh,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        checkbox: {
                            paddingTop: n(47080).IH,
                            paddingBottom: n(47080).IH,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        },
                        button: {
                            paddingTop: n(47080).DX,
                            paddingBottom: n(47080).DX,
                            paddingInlineStart: n(47080).Ke,
                            paddingInlineEnd: n(47080).Ke
                        }
                    },
                    page: w.page,
                    compact_page: w.compact_page,
                    card: w.card
                };

            function k(e) {
                let {
                    isPhone: t
                } = e;
                return t ? b : w
            }
            let v = {
                [n(696654).NY.ExtremeSmall]: void 0,
                [n(696654).NY.ExtraSmall]: void 0,
                [n(696654).NY.Small]: {
                    columnGap: 6,
                    rowGap: 4
                },
                [n(696654).NY.CompactEssential]: {
                    columnGap: 4,
                    rowGap: 6
                },
                [n(696654).NY.Medium]: {
                    columnGap: 8,
                    rowGap: 6
                },
                [n(696654).NY.Large]: {
                    columnGap: 10,
                    rowGap: 10
                },
                [n(696654).NY.Inline]: {
                    columnGap: 6,
                    rowGap: 4
                }
            }
        },
        916769: (e, t, n) => {
            function i(e) {
                return e ? ? n(696654).NY.Medium
            }
            n.d(t, {
                Ug: () => i,
                YX: () => d,
                _t: () => o,
                x7: () => p
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            let a = new Set(["title", "text", "email", "phone_number", "number", "url", "date", "created_time", "last_edited_time", "auto_increment_id"]);

            function d(e) {
                return "empty" === e || "error" === e || a.has(e)
            }
            let l = new Set(["button", "file"]);

            function o(e) {
                return l.has(e)
            }
            let r = Object.create(null);

            function p(e) {
                let {
                    shouldSetCellHeight: t,
                    surface: i,
                    shouldWrap: a,
                    isLast: d,
                    disabled: l,
                    locked: o,
                    showIfEmpty: p,
                    isInvalidFormAnswer: g,
                    isLargeModule: s,
                    collectionViewStore: c
                } = e, {
                    isPhone: u
                } = (0, n(533992).Y0)(), m = (0, n(960253).e)(), h = (0, n(682985).K8)(() => "compact" === (0, n(535144).C)(c), [c]), S = [i, a, t, l, o, u, p, d, s, g, h, m].join("|");
                if (r[S]) return r[S];
                let f = function(e) {
                    let {
                        isPhone: t,
                        shouldSetCellHeight: i,
                        surface: a,
                        shouldWrap: d,
                        isLast: l,
                        disabled: o,
                        locked: r,
                        showIfEmpty: p,
                        isInvalidFormAnswer: g,
                        isLargeModule: s,
                        isCompactCardMode: c
                    } = e, u = (0, n(642065)._Q)({
                        isPhone: t
                    }), m = t ? n(47080).Um : n(47080).tt;
                    switch (a) {
                        case "table":
                            return {
                                buttonStyle: {
                                    display: "block",
                                    fontSize: t ? n(642065).hN : n(642065).Mi,
                                    lineHeight: t ? n(642065).G4 : n(642065).$g,
                                    overflow: "clip",
                                    width: "100%",
                                    whiteSpace: d ? "normal" : "nowrap",
                                    height: i ? m : void 0,
                                    minHeight: m,
                                    cursor: o || r ? "default" : "pointer",
                                    ...u.table.default
                                },
                                buttonHoveredStyle: {
                                    background: "unset"
                                },
                                buttonPressedStyle: {
                                    background: "unset"
                                },
                                textStyle: {
                                    lineHeight: t ? n(642065).G4 : n(642065).$g,
                                    whiteSpace: d ? "pre-wrap" : "nowrap",
                                    wordBreak: d ? "break-word" : "normal"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: d ? "wrap" : "nowrap",
                                    ...n(642065).Cn[n(696654).NY.Medium]
                                },
                                textLineHeight: n(642065).wd,
                                sizing: "default",
                                tokenFormat: t ? n(696654).NY.Large : n(696654).NY.Medium
                            };
                        case "gallery":
                        case "board":
                            return {
                                buttonStyle: {
                                    display: "flex",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    borderRadius: 5,
                                    fontSize: t ? n(642065).Mi : n(642065).gJ,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    marginInlineStart: 6 * !c,
                                    marginInlineEnd: 6 * !c,
                                    ...u.card.default,
                                    minHeight: n(642065).NL,
                                    whiteSpace: d ? "normal" : "nowrap",
                                    minWidth: p ? "auto" : "fit-content",
                                    width: p ? "auto" : "fit-content"
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    whiteSpace: d ? "pre-wrap" : "nowrap",
                                    wordBreak: d ? "break-word" : "normal",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    flexShrink: 0,
                                    flexWrap: d ? "wrap" : "nowrap",
                                    width: d ? "100%" : void 0,
                                    ...n(642065).Cn[t ? n(696654).NY.Medium : n(696654).NY.Small]
                                },
                                textLineHeight: t ? n(642065).wd : n(642065).Yu,
                                sizing: t ? "default" : "small",
                                tokenFormat: t ? n(696654).NY.Medium : n(696654).NY.Small
                            };
                        case "relation_section":
                            return {
                                buttonStyle: {
                                    display: "inline-flex",
                                    fontSize: n(642065).gJ,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    marginInlineStart: 0,
                                    minHeight: n(642065).Ih,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 8,
                                    paddingInlineEnd: 8,
                                    borderRadius: 5
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...n(642065).Cn[n(696654).NY.Small]
                                },
                                textLineHeight: n(642065).Yu,
                                sizing: "small",
                                tokenFormat: n(696654).NY.Small
                            };
                        case "relation":
                            return {
                                buttonStyle: {
                                    fontSize: n(642065).gJ,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 4,
                                    paddingInlineEnd: 4,
                                    borderRadius: 5,
                                    display: "flex",
                                    marginInlineStart: 8 * !t,
                                    marginInlineEnd: 8 * !!t,
                                    height: n(642065).O0,
                                    minWidth: 20
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...n(642065).Cn[n(696654).NY.Small]
                                },
                                textLineHeight: n(642065).Yu,
                                sizing: "small",
                                tokenFormat: n(696654).NY.Small
                            };
                        case "list":
                            return {
                                buttonStyle: {
                                    fontSize: n(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: n(141973).iH,
                                    paddingInlineEnd: n(141973).iH,
                                    borderRadius: 5,
                                    display: "flex",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    flexBasis: "auto",
                                    marginInlineStart: 0,
                                    marginInlineEnd: 2 * !!t,
                                    minHeight: n(642065).kx,
                                    minWidth: 20
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...n(642065).Cn[n(696654).NY.Inline]
                                },
                                textLineHeight: n(642065).wd,
                                sizing: "small",
                                tokenFormat: n(696654).NY.Inline
                            };
                        case "page":
                            return {
                                buttonStyle: {
                                    fontSize: n(642065).Mi,
                                    overflow: "hidden",
                                    display: "inline-block",
                                    borderRadius: 4,
                                    width: "100%",
                                    minHeight: n(642065).at,
                                    ...u.page.default
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "pre-wrap"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    ...n(642065).Cn[n(696654).NY.Medium]
                                },
                                textLineHeight: n(642065).wd,
                                sizing: "default",
                                tokenFormat: n(696654).NY.Medium
                            };
                        case "timeline":
                            return {
                                buttonStyle: {
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: n(642065).gJ,
                                    marginInlineEnd: 10 * !l
                                },
                                buttonHoveredStyle: {
                                    background: "unset"
                                },
                                buttonPressedStyle: {
                                    background: "unset"
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "nowrap"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...n(642065).Cn[n(696654).NY.Small]
                                },
                                textLineHeight: n(642065).Yu,
                                sizing: "small",
                                tokenFormat: n(696654).NY.Inline
                            };
                        case "calendar":
                            return {
                                buttonStyle: {
                                    fontSize: n(642065).gJ,
                                    display: "flex",
                                    alignItems: "center",
                                    height: n(642065).CL,
                                    whiteSpace: "nowrap",
                                    width: "100%"
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexShrink: 0,
                                    flexWrap: "nowrap",
                                    ...n(642065).Cn[n(696654).NY.Small]
                                },
                                textLineHeight: n(642065).Yu,
                                sizing: "small",
                                tokenFormat: n(696654).NY.Small
                            };
                        case "feed":
                            return {
                                buttonStyle: {
                                    fontSize: n(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 4,
                                    paddingInlineEnd: 4,
                                    borderRadius: 5,
                                    display: "flex",
                                    marginInlineStart: 0,
                                    marginInlineEnd: 2 * !!t,
                                    minHeight: n(642065).kx,
                                    minWidth: 20,
                                    whiteSpace: d ? "normal" : "nowrap"
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    whiteSpace: d ? "pre-wrap" : "nowrap",
                                    wordBreak: d ? "break-word" : "normal",
                                    overflow: d ? void 0 : "hidden",
                                    textOverflow: d ? void 0 : "ellipsis"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    flexWrap: d ? "wrap" : "nowrap",
                                    ...n(642065).Cn[n(696654).NY.Inline]
                                },
                                textLineHeight: n(642065).wd,
                                sizing: "small",
                                tokenFormat: n(696654).NY.Inline
                            };
                        case "compact_page":
                            return {
                                buttonStyle: {
                                    fontSize: n(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    borderRadius: 4,
                                    display: "flex",
                                    width: "100%",
                                    minHeight: n(642065).MI,
                                    ...u.compact_page.default
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    ...n(642065).Cn[n(696654).NY.CompactEssential]
                                },
                                textLineHeight: n(642065).wd,
                                sizing: "default",
                                tokenFormat: n(696654).NY.CompactEssential
                            };
                        case "mini":
                            return {
                                buttonStyle: {
                                    fontSize: n(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    borderRadius: 4,
                                    display: "flex",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 6,
                                    paddingInlineEnd: 6,
                                    minWidth: 0,
                                    height: n(642065).Bu,
                                    maxWidth: 300
                                },
                                textStyle: {
                                    lineHeight: n(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    ...n(642065).Cn[n(696654).NY.Medium]
                                },
                                textLineHeight: n(642065).wd,
                                sizing: "default",
                                tokenFormat: n(696654).NY.Medium
                            };
                        case "property_module":
                            let h = {
                                fontSize: s ? n(642065).KI : n(642065).Mi,
                                overflow: "hidden",
                                display: "block",
                                borderRadius: 4,
                                width: "100%",
                                minHeight: n(642065).at,
                                ...u.page.default
                            };
                            return {
                                buttonStyle: h,
                                emptyButtonStyle: { ...h,
                                    ...u.page.text
                                },
                                textStyle: {
                                    lineHeight: s ? n(642065).hR : n(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "pre-wrap",
                                    ...s ? {
                                        fontWeight: n(699422).Wy.medium
                                    } : {}
                                },
                                emptyTextStyle: {
                                    fontSize: n(642065).Mi,
                                    lineHeight: n(642065).$g,
                                    wordBreak: "break-word"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    ...n(642065).Cn[n(696654).NY.Medium]
                                },
                                textLineHeight: s ? n(642065).aL : n(642065).wd,
                                sizing: s ? "large" : "default",
                                tokenFormat: n(696654).NY.Medium
                            };
                        case "form_editor":
                        case "form_viewer":
                            return {
                                buttonStyle: {
                                    borderRadius: 6,
                                    boxShadow: "form_viewer" === a && g ? n(632079).Tj.inputRedFocusRing : `0 0 0 1px ${n(632079).Tj.border.strong} inset`,
                                    marginTop: 8,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 10,
                                    paddingInlineEnd: 10,
                                    minHeight: 38,
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: 16,
                                    overflowX: "hidden",
                                    cursor: "text"
                                },
                                buttonHoveredStyle: {
                                    background: "unset"
                                },
                                buttonPressedStyle: {
                                    background: "unset"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: d ? "wrap" : "nowrap",
                                    ...n(642065).Cn[n(696654).NY.Large]
                                },
                                textLineHeight: n(642065).wd,
                                sizing: "default",
                                tokenFormat: n(696654).NY.Medium
                            };
                        default:
                            (0, n(722371).HB)(a)
                    }
                }({
                    isPhone: u,
                    shouldSetCellHeight: t,
                    surface: i,
                    shouldWrap: a,
                    isLast: d,
                    disabled: l,
                    locked: o,
                    showIfEmpty: p,
                    isInvalidFormAnswer: g,
                    isLargeModule: s,
                    isCompactCardMode: h
                });
                return r[S] = f, f
            }
        },
        933143: (e, t, n) => {
            n.d(t, {
                k: () => i
            });

            function i(e) {
                (0, n(705660).SQ)(e, n(705660).y$.Click, () => {})
            }
        },
        989786: (e, t, n) => {
            n.d(t, {
                Y: () => d
            });
            var i = n(296540),
                a = n(474848);

            function d(e) {
                let {
                    blockStore: t,
                    shouldWrap: d,
                    titleStyle: l,
                    recordTitleRef: o,
                    noUnderline: r,
                    disableTooltip: p
                } = e, g = (0, i.useRef)({
                    getNode: () => o.current
                });
                return (0, a.jsx)(n(627918).A, {
                    store: t,
                    underline: !r,
                    shouldWrap: d,
                    style: l,
                    ref: g,
                    enableHover: !0,
                    showTooltipWhenTruncated: !0,
                    disableTooltip: p
                })
            }
        },
        992859: (e, t, n) => {
            n.d(t, {
                x: () => i
            });

            function i(e) {
                return (0, n(682985).K8)(() => {
                    var t;
                    let i = n(358377).default.state;
                    return "editing" === i.mode && (null == (t = (0, n(778758).H)(i.multiSelection)) ? void 0 : t.store) === e.getBlockTitleStore()
                }, [e])
            }
        }
    }
]);