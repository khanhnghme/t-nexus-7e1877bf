"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [26997], {
        44738: (e, t, o) => {
            o.d(t, {
                q: () => l
            });

            function l(e) {
                let {
                    environment: t,
                    cellValue: l,
                    spaceId: r,
                    parentStore: n,
                    theme: i,
                    themeMode: a,
                    disableStyleAnnotations: d,
                    disableSuggestionAnnotations: s,
                    katex: c
                } = e;
                return o(536614).S5({
                    environment: t,
                    textValue: l ? {
                        value: l,
                        spaceId: r
                    } : void 0,
                    parentStore: n,
                    disableStyleAnnotations: d ? ? !0,
                    disableInsertedDeletedAnnotations: !0,
                    disableDateStyleAnnotations: !0,
                    disableSuggestionAnnotations: s ? ? !1,
                    disableHover: !0,
                    disabled: !0,
                    theme: i,
                    themeMode: a,
                    emojiType: (0, o(591404).FN)(t),
                    katex: c,
                    formulaValueTypes: []
                })
            }
        },
        316238: (e, t, o) => {
            o.d(t, {
                A: () => n
            }), o(296540);
            var l = o(474848);
            let r = {
                style0: { ...o(699422).RC
                }
            };

            function n(e) {
                let {
                    children: t,
                    textColor: o,
                    backgroundColor: n,
                    rightMargin: i,
                    strikethrough: a
                } = e;
                return (0, l.jsx)("div", {
                    style: {
                        backgroundColor: n,
                        color: o,
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: 12,
                        height: 18,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        borderRadius: 4,
                        marginInlineEnd: 4 * !!i,
                        textDecoration: a ? "line-through" : void 0
                    },
                    children: (0, l.jsx)("span", {
                        style: r.style0,
                        children: t
                    })
                })
            }
        },
        376968: (e, t, o) => {
            o.d(t, {
                d: () => l
            });
            let l = {
                wrap: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexGrow: 1,
                    overflow: "hidden",
                    fontSize: 14,
                    minHeight: 29
                },
                label: {
                    fontSize: 12,
                    lineHeight: 1,
                    paddingTop: 8,
                    color: o(632079).Tj.text.tertiary
                },
                header: {
                    fontWeight: o(699422).Wy.semibold
                },
                subHeader: {
                    fontWeight: o(699422).Wy.semibold
                },
                subSubHeader: {
                    fontWeight: o(699422).Wy.semibold
                },
                header4: {
                    fontWeight: o(699422).Wy.semibold
                },
                permission: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 28,
                    paddingTop: 4,
                    paddingBottom: 4
                },
                group: {
                    display: "flex",
                    alignItems: "center",
                    minHeight: 28,
                    fontSize: 14,
                    paddingTop: 4,
                    paddingBottom: 4
                },
                userHeader: {
                    fontSize: 12,
                    color: o(632079).Tj.text.secondary
                },
                role: {
                    fontSize: 14,
                    whiteSpace: "nowrap"
                },
                permissionTypeWrap: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    marginInlineEnd: 6,
                    whiteSpace: "nowrap"
                },
                diffWrap: {
                    display: "flex",
                    alignItems: "center"
                },
                added: {
                    color: o(632079).Tj.blue.text.accentPrimary,
                    backgroundColor: "rgba(35, 131, 226, 0.14)"
                },
                deleted: {
                    opacity: .4,
                    marginBottom: 6,
                    textDecoration: "line-through"
                }
            }
        },
        695134: (e, t, o) => {
            o.d(t, {
                V: () => d,
                j: () => i
            }), o(944114), o(898992), o(803949);
            var l = o(296540),
                r = o(474848);
            let n = {
                cellSecondaryTitleTable: {
                    color: o(632079).Tj.text.tertiary
                },
                cellTitleLineHeight: {
                    lineHeight: 1.25
                }
            };

            function i(e) {
                let {
                    colIndex: t,
                    blockValue: l,
                    simpleTableValue: i,
                    hasColumnHeader: a,
                    hasRowHeader: d,
                    columnOrder: s,
                    environment: c,
                    rootStore: u,
                    theme: x,
                    themeMode: p,
                    getRecordModel: b
                } = e, {
                    value: m
                } = (0, o(815048).fJ)(o(406921).V), j = [(0, r.jsx)("span", {
                    children: (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Table",
                        id: "edit.simpleTableRowComponentByCell.table"
                    })
                }, `simple-edit${t}-title-box-notif`)], h = null == i ? void 0 : i.getChildren(), f = (0, o(682985).K8)(() => {
                    if (h && 0 !== h.length) return b({
                        table: l.parent_table,
                        id: h[0],
                        spaceId: l.space_id
                    })
                }, [l.parent_table, l.space_id, b, h]), v = f ? (0, o(877634).De)({
                    block: f,
                    prop: s[t],
                    getRecordModel: b
                }) : void 0, g = (0, o(682985).K8)(() => (0, o(44738).q)({
                    environment: c,
                    cellValue: v,
                    spaceId: l.space_id,
                    parentStore: u,
                    theme: x,
                    themeMode: p,
                    katex: m
                }), [c, v, l.space_id, u, x, p, m]), y = (0, o(877634).De)({
                    block: o(993189).Bj6.fromBlock(l),
                    prop: s ? s[0] : "",
                    getRecordModel: b
                }), k = (0, o(682985).K8)(() => (0, o(44738).q)({
                    environment: c,
                    cellValue: y,
                    spaceId: l.space_id,
                    parentStore: u,
                    theme: x,
                    themeMode: p,
                    katex: m
                }), [c, y, l.space_id, u, x, p, m]), S = (null == f ? void 0 : f.id) === l.id;
                return a && f && !S && !o(247438).w9s(v) && j.push((0, r.jsxs)("span", {
                    style: n.cellSecondaryTitleTable,
                    children: [" / ", g]
                }, `simple-table-col-header-${t}${l.parent_id}`)), d && f && 0 !== t && !o(247438).w9s(y) && j.push((0, r.jsxs)("span", {
                    style: n.cellSecondaryTitleTable,
                    children: [" / ", k]
                }, `simple-table-row-header-${t}${l.parent_id}`)), (0, r.jsx)("div", {
                    style: n.cellTitleLineHeight,
                    children: j
                }, `simple-table-${t}edit-box`)
            }
            let a = {
                andMore: {
                    color: o(632079).Tj.text.tertiary,
                    marginTop: 4,
                    borderRadius: 6,
                    padding: "2px 4px",
                    marginInlineStart: "-4px",
                    fontSize: 12,
                    maxWidth: "fit-content"
                },
                cellTitleTable: {
                    color: o(632079).Tj.text.secondary,
                    marginTop: 4,
                    overflow: "visible"
                }
            };

            function d({
                blockValue: e,
                rootStore: t
            }) {
                let n = (0, l.useMemo)(() => o(993189).b4_.fromGetRecordValueFn(t.getRecordValue), [t]),
                    s = (0, o(960253).e)(),
                    {
                        value: c
                    } = (0, o(815048).fJ)(o(406921).V),
                    [u, x] = (0, l.useState)(!1),
                    p = (0, o(533992).v3)(),
                    b = (0, o(682985).K8)(() => {
                        var l, d, b;
                        let m = null == t ? void 0 : t.userId,
                            j = [],
                            h = n({
                                table: e.parent_table,
                                id: e.parent_id,
                                spaceId: e.space_id
                            }),
                            f = !!(null == h || null == (l = h.getFormat()) ? void 0 : l.table_block_row_header),
                            v = !!(null == h || null == (d = h.getFormat()) ? void 0 : d.table_block_column_header),
                            g = null == h || null == (b = h.getFormat()) ? void 0 : b.table_block_column_order,
                            y = 0;
                        null == g || g.forEach((l, d) => {
                            let u = (0, o(877634).De)({
                                block: o(993189).Bj6.fromBlock(e),
                                prop: l,
                                getRecordModel: n
                            });
                            if ((0, o(755439).PC)({
                                    textValue: u,
                                    currentUserId: m,
                                    getRecordModel: n
                                })) {
                                y += 1;
                                let l = (0, r.jsx)(o(806106).A, {
                                    style: a.cellTitleTable,
                                    title: (0, r.jsx)(i, {
                                        colIndex: d,
                                        blockValue: e,
                                        simpleTableValue: h,
                                        hasColumnHeader: v,
                                        hasRowHeader: f,
                                        columnOrder: g,
                                        environment: p,
                                        rootStore: t,
                                        theme: o(632079).Tj,
                                        themeMode: s,
                                        getRecordModel: n
                                    }),
                                    theme: o(632079).Tj,
                                    children: (0, o(44738).q)({
                                        environment: p,
                                        cellValue: (0, o(605351).Eh)({
                                            textValue: u,
                                            highlightStyle: "text_only",
                                            currentUserId: m,
                                            getRecordModel: n
                                        }),
                                        spaceId: e.space_id,
                                        parentStore: t,
                                        theme: o(632079).Tj,
                                        themeMode: s,
                                        disableStyleAnnotations: !1,
                                        disableSuggestionAnnotations: !0,
                                        katex: c
                                    })
                                }, `simple-edit${d}-box-notif-${u}${e.parent_id}${e.id}`);
                                j.push(l)
                            }
                        });
                        let k = u ? j : j.slice(0, 2);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [k, y > 2 ? u ? (0, r.jsx)(o(64960).Ay, {
                                style: a.andMore,
                                onClick: () => x(!1),
                                children: (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "Hide {numMore}",
                                    id: "edit.simpleTableRowComponentByCell.hideMoreCells",
                                    values: {
                                        numMore: y - 2
                                    }
                                })
                            }) : (0, r.jsx)(o(64960).Ay, {
                                style: a.andMore,
                                onClick: () => x(!0),
                                children: (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "...{numMore} more",
                                    id: "edit.simpleTableRowComponentByCell.showMoreCells",
                                    values: {
                                        numMore: y - 2
                                    }
                                })
                            }) : null]
                        })
                    }, [t, n, e, u, c, p, s]);
                return (0, r.jsx)(r.Fragment, {
                    children: b
                })
            }
        },
        806106: (e, t, o) => {
            o.d(t, {
                A: () => r
            }), o(296540);
            var l = o(474848);
            let r = function(e) {
                let {
                    children: t,
                    created: r,
                    deleted: n,
                    style: i,
                    theme: a,
                    title: d
                } = e, s = {
                    boxShadow: `inset 0 0 0 1px ${a.border.secondaryTranslucent}`,
                    borderRadius: 4,
                    padding: "6px 8px",
                    fontSize: 14,
                    overflow: "hidden",
                    flexGrow: 1,
                    marginTop: 4,
                    marginBottom: 4,
                    ...r && {
                        color: a.blue.text.accentPrimary,
                        backgroundColor: o(632079).oZ.diffBackground
                    },
                    ...i
                }, c = {
                    fontSize: 12,
                    lineHeight: 1,
                    marginTop: 2,
                    marginBottom: 4,
                    color: a.text.primary
                };
                return (0, l.jsxs)("div", {
                    style: s,
                    children: [(0, l.jsx)("div", {
                        style: c,
                        children: d
                    }), (0, l.jsx)("div", {
                        style: { ...n && {
                                opacity: .4,
                                marginBottom: 6,
                                textDecoration: "line-through"
                            }
                        },
                        children: t
                    })]
                })
            }
        },
        877634: (e, t, o) => {
            o.d(t, {
                Ab: () => v,
                Ay: () => g,
                De: () => a,
                Nn: () => s,
                R1: () => p,
                RD: () => f,
                lM: () => u,
                ux: () => i,
                vY: () => d
            }), o(581454);
            var l = o(296540),
                r = o(474848);
            let n = (0, o(109939).YK)({
                [o(955630).xd.quote]: {
                    defaultMessage: "Quote",
                    id: "edit.quoteBlock.label"
                },
                [o(955630).xd.callout]: {
                    defaultMessage: "Callout",
                    id: "edit.calloutBlock.label"
                },
                [o(955630).xd.button]: {
                    defaultMessage: "Button",
                    id: "edit.buttonBlock.label"
                },
                [o(955630).xd.factory]: {
                    defaultMessage: "Template Button",
                    id: "edit.templateButtonBlock.label"
                },
                [o(955630).xd.bookmark]: {
                    defaultMessage: "Bookmark",
                    id: "edit.bookmarkBlockProperty.label"
                },
                [o(955630).xd.equation]: {
                    defaultMessage: "Equation",
                    id: "edit.equationBlock.label"
                }
            });

            function i(e) {
                return n[e] && o(962299).A.formatMessage(n[e])
            }

            function a(e) {
                let {
                    block: t,
                    prop: o,
                    getRecordModel: l
                } = e;
                return t.getProperties(l)[o] || []
            }

            function d({
                value: e,
                propertySchema: t,
                labeled: l,
                rootStore: n,
                disableStyleAnnotations: i,
                disableInsertedDeletedAnnotations: a,
                disableDateStyleAnnotations: s
            }) {
                return (0, r.jsx)(f, {
                    labeled: l,
                    type: t.type,
                    icon: t.icon,
                    name: t.name,
                    children: (0, r.jsx)(o(917659).A, {
                        propertySchema: t,
                        value: e,
                        rootStore: n,
                        disableStyleAnnotations: i,
                        disableInsertedDeletedAnnotations: a,
                        disableDateStyleAnnotations: s
                    })
                })
            }

            function s({
                blockValue: e,
                prop: t,
                labeled: n,
                schema: i,
                rootStore: c
            }) {
                let u = (0, o(109939).tz)(),
                    x = i || (0, o(511791).RX)(u),
                    p = (0, l.useMemo)(() => ({
                        value: a({
                            block: o(993189).Bj6.fromBlock(e),
                            prop: t,
                            getRecordModel: c.getRecordModel
                        }),
                        spaceId: (0, o(226221).e)(e.space_id)
                    }), [e, t, c]),
                    b = x[t];
                return b ? (0, r.jsx)(d, {
                    value: p,
                    propertySchema: b,
                    labeled: n,
                    rootStore: c
                }) : null
            }
            let c = {
                transform: "rotateZ(90deg)"
            };

            function u({
                children: e
            }) {
                let t = (0, r.jsx)(o(4458).fI, {
                    width: "1em",
                    height: "1em",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginInlineStart: 6,
                    marginInlineEnd: 6,
                    marginTop: 6,
                    children: (0, r.jsx)(o(16275).I, {
                        icon: o(406531).l,
                        size: "0.8em",
                        style: c
                    })
                });
                return (0, r.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    inline: !0,
                    children: [t, (0, r.jsx)("span", {
                        children: e
                    })]
                })
            }
            let x = {
                style0: {
                    maxHeight: 170,
                    maxWidth: 170
                },
                style1: {
                    backgroundColor: o(632079).Tj.text.tertiary,
                    height: 170,
                    width: 170
                }
            };

            function p({
                src: e,
                permissionRecord: t
            }) {
                return e ? (0, r.jsx)(o(738251).A, {
                    url: e,
                    isAuthenticated: !0,
                    permissionRecord: t,
                    width: 170,
                    render: (e, t) => {
                        if (t) return (0, r.jsx)("img", {
                            src: t,
                            style: x.style0
                        })
                    }
                }) : (0, r.jsx)("div", {
                    style: x.style1
                })
            }
            let b = {
                    fontSize: 16.2,
                    display: "inline-block"
                },
                m = {
                    marginTop: 6,
                    marginBottom: 6
                };

            function j({
                icon: e,
                rootStore: t,
                blockValue: l
            }) {
                let {
                    iconWithRecord: n,
                    iconRecordCategory: i
                } = (0, o(682985).K8)(() => {
                    if (!e || !(0, o(312028).A)(e)) return {
                        iconWithRecord: void 0,
                        iconRecordCategory: "pageBlock"
                    };
                    let r = o(993189).Bj6.fromBlock(l);
                    return {
                        iconWithRecord: r.getRenderIcon({
                            getRecordModel: t.getRecordModel
                        }),
                        iconRecordCategory: r.isCollectionView() ? "collectionViewBlock" : "pageBlock"
                    }
                }, [l, e, t.getRecordModel]);
                return e ? (0, o(312028).A)(e) ? (0, r.jsx)("div", {
                    style: b,
                    children: e
                }) : (0, r.jsx)(o(569553).B6, {
                    disabled: !0,
                    icon: n,
                    iconRecordCategory: i,
                    isEmptyPage: !1,
                    size: 18,
                    style: m
                }) : (0, r.jsx)(o(16275).I, {
                    icon: o(822084).pageIcon
                })
            }
            let h = {
                style0: {
                    display: "flex",
                    color: o(632079).Tj.text.tertiary,
                    paddingTop: 7,
                    fontSize: 12,
                    lineHeight: 1,
                    marginBottom: 4
                },
                style1: {
                    marginInlineStart: 6
                },
                style2: {
                    display: "flex",
                    alignItems: "center",
                    minHeight: 24,
                    overflow: "hidden"
                }
            };

            function f({
                children: e,
                type: t,
                icon: l,
                name: n,
                labeled: i,
                style: a
            }) {
                let d = (0, o(960253).e)();
                return i ? (0, r.jsxs)("div", {
                    style: a,
                    children: [(0, r.jsxs)("div", {
                        style: h.style0,
                        children: [(0, r.jsx)(o(221535).zB, {
                            type: t,
                            icon: l,
                            size: 14,
                            theme: o(632079).Tj,
                            themeMode: d
                        }), (0, r.jsx)("div", {
                            style: h.style1,
                            children: n
                        })]
                    }), (0, r.jsx)("div", {
                        style: h.style2,
                        children: e
                    })]
                }) : (0, r.jsx)("div", {
                    style: a,
                    children: e
                })
            }

            function v(e) {
                let t = e && e.properties && e.properties.language;
                if (!t) return (0, r.jsx)(o(109939).sA, {
                    defaultMessage: "Code",
                    id: "edit.codeBlockChanged.label"
                });
                let l = o(561872).L3(t, o(511791).h5);
                return (0, r.jsx)(o(109939).sA, {
                    defaultMessage: "Code - {codeLanguage}",
                    values: {
                        codeLanguage: l
                    },
                    id: "edit.codeBlockWithLanguageChanged.label"
                })
            }
            let g = function({
                rootStore: e,
                blockValue: t,
                blockPreviewLocation: n,
                created: i,
                deleted: a
            }) {
                let d = (0, l.useMemo)(() => o(993189).b4_.fromGetRecordValueFn(e.getRecordValue), [e]),
                    s = (0, o(682985).K8)(() => {
                        let e;
                        if (t.type === o(955630).xd.button && (e = o(993189).Bj6.fromBlock(t).getAutomationPointer()), t.type === o(955630).xd.collectionViewPage || t.type === o(955630).xd.collectionView) {
                            let l = o(993189).Bj6.fromBlock(t);
                            e = null == l ? void 0 : l.pointer
                        }
                        return e ? d(e) : void 0
                    }, [t, d]);
                switch (t.type) {
                    case o(955630).xd.text:
                        return (0, r.jsx)(A, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.header:
                        return (0, r.jsx)(P, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.subHeader:
                        return (0, r.jsx)(_, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.subSubHeader:
                        return (0, r.jsx)(M, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.header4:
                        return (0, r.jsx)(C, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.toggle:
                        return (0, r.jsx)(R, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.bulletedList:
                        return (0, r.jsx)(H, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.numberedList:
                        return (0, r.jsx)(D, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.quote:
                        return (0, r.jsx)(O, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.factory:
                        return (0, r.jsx)($, {
                            blockPreviewLocation: n,
                            created: i,
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.button:
                        if ((null == s ? void 0 : s.table) === o(993189).R$j.table) return (0, r.jsx)(N, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            automation: s
                        });
                        break;
                    case o(955630).xd.equation:
                        return (0, r.jsx)(J, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.toDo:
                        return (0, r.jsx)(K, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.code:
                        return (0, r.jsx)(Y, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.bookmark:
                        return (0, r.jsx)(ee, {
                            blockPreviewLocation: n,
                            created: i,
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.page:
                    case o(955630).xd.form:
                        return (0, r.jsx)(ed, {
                            rootStore: e,
                            blockValue: t,
                            blockModel: o(993189).Bj6.fromBlock(t)
                        });
                    case o(955630).xd.collectionView:
                    case o(955630).xd.collectionViewPage:
                        if ((null == s ? void 0 : s.table) === o(832375).evP) return (0, r.jsx)(eu, {
                            rootStore: e,
                            blockValue: t,
                            blockModel: s
                        });
                        break;
                    case o(955630).xd.image:
                        return (0, r.jsx)(E, {
                            rootStore: e,
                            blockPreviewLocation: n,
                            blockValue: t
                        });
                    case o(955630).xd.embed:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "embed"
                        });
                    case o(955630).xd.framer:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "framer"
                        });
                    case o(955630).xd.tweet:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "tweet"
                        });
                    case o(955630).xd.gist:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "gist"
                        });
                    case o(955630).xd.drive:
                        return (0, r.jsx)(er, {
                            deleted: a,
                            blockPreviewLocation: n,
                            created: i,
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.maps:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "maps"
                        });
                    case o(955630).xd.invision:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "invision"
                        });
                    case o(955630).xd.video:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "video"
                        });
                    case o(955630).xd.audio:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "audio"
                        });
                    case o(955630).xd.file:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "file"
                        });
                    case o(955630).xd.callout:
                        return (0, r.jsx)(G, {
                            created: i,
                            blockPreviewLocation: n,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            getRecordModel: d
                        });
                    case o(955630).xd.whimsical:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "whimsical"
                        });
                    case o(955630).xd.miro:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "miro"
                        });
                    case o(955630).xd.abstract:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "abstract"
                        });
                    case o(955630).xd.mixpanel:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "mixpanel"
                        });
                    case o(955630).xd.sketch:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "sketch"
                        });
                    case o(955630).xd.excalidraw:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "excalidraw"
                        });
                    case o(955630).xd.replit:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "replit"
                        });
                    case o(955630).xd.pdf:
                        return (0, r.jsx)(X, {
                            blockPreviewLocation: n,
                            created: i,
                            deleted: a,
                            rootStore: e,
                            blockValue: t,
                            type: "pdf"
                        });
                    case o(955630).xd.table:
                        return (0, r.jsx)(ep, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.tableRow:
                        if ("notifications" === n) return (0, r.jsx)(o(695134).V, {
                            rootStore: e,
                            blockValue: t
                        });
                        return (0, r.jsx)(eb, {
                            rootStore: e,
                            blockValue: t
                        });
                    case o(955630).xd.externalObjectInstance:
                        return (0, r.jsx)(et, {
                            created: i,
                            blockPreviewLocation: n,
                            deleted: a,
                            blockValue: t
                        });
                    case o(955630).xd.linkToPage:
                    case o(955630).xd.factoryTask:
                    case o(955630).xd.personalHomePage:
                    case o(955630).xd.homeShortcuts:
                    case o(955630).xd.linkToCollection:
                    case o(955630).xd.divider:
                    case o(955630).xd.columnList:
                    case o(955630).xd.column:
                    case o(955630).xd.copyIndicator:
                    case o(955630).xd.breadcrumb:
                    case o(955630).xd.figma:
                    case o(955630).xd.loom:
                    case o(955630).xd.typeform:
                    case o(955630).xd.codepen:
                    case o(955630).xd.tableOfContents:
                    case o(955630).xd.alias:
                    case o(955630).xd.transclusionContainer:
                    case o(955630).xd.transclusionReference:
                    case o(955630).xd.hex:
                    case o(955630).xd.tab:
                    case o(955630).xd.deepnote:
                    case o(955630).xd.externalObjectInstancePage:
                    case o(955630).xd.aiBlock:
                    case o(955630).xd.drawing:
                    case o(955630).xd.slide:
                    case o(955630).xd.post:
                    case o(955630).xd.workflow:
                    case o(955630).xd.transcription:
                    case o(955630).xd.mail:
                    case o(955630).xd.custom:
                    case o(955630).xd.temporaryUi:
                    case o(955630).xd.editReference:
                        break;
                    default:
                        (0, o(722371).HB)(t)
                }
                return null
            };

            function y(e, t) {
                return !!(e && e.properties && e.properties[t])
            }
            let k = {
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                S = {
                    wordBreak: "break-word"
                };

            function V({
                blockValue: e
            }) {
                var t;
                let l, n = (l = null == e || null == (t = e.properties) ? void 0 : t.source, o(247438).k4p(l));
                return (0, r.jsx)("div", {
                    style: k,
                    children: (0, r.jsx)("span", {
                        style: S,
                        children: n
                    })
                })
            }

            function w({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)(s, {
                    rootStore: t,
                    blockValue: e,
                    prop: "title",
                    labeled: !1
                })
            }
            let T = {
                marginInlineEnd: 6,
                marginTop: 3
            };

            function I({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)("div", {
                    style: T,
                    children: (0, r.jsx)(s, {
                        rootStore: t,
                        blockValue: e,
                        prop: "checked",
                        labeled: !1
                    })
                })
            }

            function B({
                blockValue: e,
                rootStore: t
            }) {
                return y(e, "caption") ? (0, r.jsx)(s, {
                    rootStore: t,
                    blockValue: e,
                    prop: "caption",
                    labeled: !1
                }) : null
            }

            function A({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)(w, {
                    rootStore: t,
                    blockValue: e
                })
            }

            function P({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)("div", {
                    style: o(376968).d.header,
                    children: (0, r.jsx)(w, {
                        rootStore: t,
                        blockValue: e
                    })
                })
            }

            function _({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)("div", {
                    style: o(376968).d.subHeader,
                    children: (0, r.jsx)(w, {
                        rootStore: t,
                        blockValue: e
                    })
                })
            }

            function M({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)("div", {
                    style: o(376968).d.subSubHeader,
                    children: (0, r.jsx)(w, {
                        rootStore: t,
                        blockValue: e
                    })
                })
            }

            function C({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)("div", {
                    style: o(376968).d.header4,
                    children: (0, r.jsx)(w, {
                        rootStore: t,
                        blockValue: e
                    })
                })
            }

            function R({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)(u, {
                    children: (0, r.jsx)(w, {
                        rootStore: t,
                        blockValue: e
                    })
                })
            }
            let L = {
                margin: 0,
                paddingInlineStart: 28
            };

            function H({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)("ul", {
                    style: L,
                    children: (0, r.jsx)("li", {
                        children: (0, r.jsx)(w, {
                            rootStore: t,
                            blockValue: e
                        })
                    })
                })
            }
            let z = {
                margin: 0,
                paddingInlineStart: 28
            };

            function D({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsx)("ol", {
                    style: z,
                    children: (0, r.jsx)("li", {
                        children: (0, r.jsx)(w, {
                            rootStore: t,
                            blockValue: e
                        })
                    })
                })
            }

            function K({
                blockValue: e,
                rootStore: t
            }) {
                return (0, r.jsxs)(o(4458).fI, {
                    inline: !0,
                    children: [(0, r.jsx)(I, {
                        rootStore: t,
                        blockValue: e
                    }), (0, r.jsx)(w, {
                        rootStore: t,
                        blockValue: e
                    })]
                })
            }
            let F = {
                    marginBottom: 4
                },
                W = {
                    marginTop: 4,
                    marginBottom: 4
                };

            function E({
                blockValue: e,
                rootStore: t,
                blockPreviewLocation: n
            }) {
                var i;
                let a, d = (a = null == e || null == (i = e.properties) ? void 0 : i.source, o(561872).MO(a));
                if (!d) return null;
                let s = (0, r.jsx)(B, {
                    rootStore: t,
                    blockValue: e
                });
                return "comments_sidebar" === n ? (0, r.jsxs)(o(4458).VP, {
                    children: [(0, r.jsx)(p, {
                        src: d,
                        permissionRecord: {
                            table: o(832375).evP,
                            id: e.id
                        }
                    }), s ? (0, r.jsx)("div", {
                        style: F,
                        children: s
                    }) : void 0]
                }) : (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsx)(o(4458).fI, {
                        children: (0, r.jsx)("div", {
                            style: W,
                            children: (0, r.jsx)(p, {
                                src: d,
                                permissionRecord: {
                                    table: o(832375).evP,
                                    id: e.id
                                }
                            })
                        })
                    }), s ? (0, r.jsx)("div", {
                        style: F,
                        children: s
                    }) : void 0]
                })
            }

            function q(e) {
                return "comments_sidebar" === e ? {
                    marginTop: 0,
                    marginBottom: 0
                } : void 0
            }

            function G({
                blockValue: e,
                created: t,
                blockPreviewLocation: l,
                deleted: n,
                rootStore: a,
                getRecordModel: d
            }) {
                var s;
                let c = null == e || null == (s = e.format) ? void 0 : s.page_icon,
                    u = (0, o(682985).K8)(() => {
                        let t = o(993189).Bj6.fromBlock(e).getRenderTitleTextValue({
                            getRecordModel: d
                        });
                        return void 0 !== t && 0 !== t.length
                    }, [e, d]);
                return (0, r.jsxs)(o(806106).A, {
                    title: i(o(955630).xd.callout),
                    theme: o(632079).Tj,
                    created: t,
                    style: q(l),
                    deleted: n,
                    children: [void 0 !== c ? (0, r.jsx)(j, {
                        icon: c,
                        rootStore: a,
                        blockValue: e
                    }) : void 0, u ? (0, r.jsx)(w, {
                        rootStore: a,
                        blockValue: e
                    }) : void 0]
                })
            }

            function O({
                blockValue: e,
                blockPreviewLocation: t,
                created: l,
                deleted: n,
                rootStore: a
            }) {
                return (0, r.jsx)(o(806106).A, {
                    title: i(o(955630).xd.quote),
                    theme: o(632079).Tj,
                    style: q(t),
                    created: l,
                    deleted: n,
                    children: (0, r.jsx)(w, {
                        rootStore: a,
                        blockValue: e
                    })
                })
            }

            function $({
                blockValue: e,
                blockPreviewLocation: t,
                created: l,
                rootStore: n
            }) {
                return (0, r.jsx)(o(806106).A, {
                    title: i(o(955630).xd.factory),
                    theme: o(632079).Tj,
                    style: q(t),
                    created: l,
                    deleted: !0,
                    children: (0, r.jsx)(w, {
                        rootStore: n,
                        blockValue: e
                    })
                })
            }
            let U = {
                editBoxChildren: { ...o(699422).RC,
                    margin: 0
                },
                workflow: { ...o(699422).RC,
                    marginBlock: "8px 0"
                },
                wrap: {
                    overflow: "hidden"
                }
            };

            function N({
                automation: e,
                blockPreviewLocation: t,
                created: l,
                deleted: n
            }) {
                let [a, d] = (0, o(682985).K8)(() => [e.getActionIds(), e.getProperties()], [e]);
                return (0, r.jsxs)("div", {
                    style: U.wrap,
                    children: [(0, r.jsx)(o(806106).A, {
                        title: i(o(955630).xd.button),
                        theme: o(632079).Tj,
                        style: q(t),
                        created: l,
                        deleted: n,
                        children: (0, r.jsx)("p", {
                            style: U.editBoxChildren,
                            children: (null == d ? void 0 : d.name) ? ? (0, r.jsx)(o(109939).sA, {
                                defaultMessage: "Untitled",
                                id: "edit.buttonBlock.defaultTitle"
                            })
                        })
                    }), (0, r.jsx)("p", {
                        style: U.workflow,
                        children: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "{numberOfActions, plural, one {{numberOfActions} workflow step} other {{numberOfActions} workflow steps}}",
                            id: "edit.buttonBlock.actionCount",
                            values: {
                                numberOfActions: a.length
                            }
                        })
                    })]
                })
            }

            function J({
                blockValue: e,
                blockPreviewLocation: t,
                created: l,
                deleted: n,
                rootStore: a
            }) {
                return (0, r.jsx)(o(806106).A, {
                    title: i(o(955630).xd.equation),
                    theme: o(632079).Tj,
                    style: q(t),
                    created: l,
                    deleted: n,
                    children: (0, r.jsx)(w, {
                        rootStore: a,
                        blockValue: e
                    })
                })
            }
            let Z = {
                style0: {
                    fontFamily: (0, o(699422).vc)(o(849917).locale).mono,
                    fontSize: 12,
                    tabSize: 2
                }
            };

            function Y({
                blockValue: e,
                blockPreviewLocation: t,
                created: l,
                deleted: n,
                rootStore: i
            }) {
                return (0, r.jsx)(o(806106).A, {
                    title: v(e),
                    theme: o(632079).Tj,
                    style: q(t),
                    created: l,
                    deleted: n,
                    children: (0, r.jsx)("span", {
                        style: Z.style0,
                        children: (0, r.jsx)(w, {
                            rootStore: i,
                            blockValue: e
                        })
                    })
                })
            }
            let Q = {
                marginBottom: 4
            };

            function X({
                blockValue: e,
                type: t,
                blockPreviewLocation: n,
                created: i,
                deleted: a,
                rootStore: d
            }) {
                let s = (0, o(109939).tz)();
                return (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsx)(o(806106).A, {
                        title: o(518882).Do(s, t),
                        theme: o(632079).Tj,
                        style: q(n),
                        created: i,
                        deleted: a,
                        children: (0, r.jsx)(V, {
                            blockValue: e
                        })
                    }), (0, r.jsx)("div", {
                        style: Q,
                        children: (0, r.jsx)(B, {
                            rootStore: d,
                            blockValue: e
                        })
                    })]
                })
            }

            function ee({
                blockValue: e,
                blockPreviewLocation: t,
                created: l,
                rootStore: n
            }) {
                let a = y(e, "title"),
                    d = (0, o(960253).I)(() => ({
                        captionBox: {
                            marginBottom: 4 * !!a
                        }
                    }), [a]),
                    s = a && (0, r.jsx)(o(806106).A, {
                        title: i(o(955630).xd.bookmark),
                        theme: o(632079).Tj,
                        style: q(t),
                        created: l,
                        children: (0, r.jsx)(w, {
                            rootStore: n,
                            blockValue: e
                        })
                    });
                return (0, r.jsxs)(o(4458).VP, {
                    children: [s, y(e, "caption") ? (0, r.jsx)("div", {
                        style: d.captionBox,
                        children: (0, r.jsx)(B, {
                            rootStore: n,
                            blockValue: e
                        })
                    }) : void 0]
                })
            }

            function et({
                blockValue: e,
                created: t,
                blockPreviewLocation: l,
                deleted: n
            }) {
                let i = (0, o(109939).tz)(),
                    a = (0, o(682985).K8)(() => o(993189).Bj6.fromBlock(e), [e]),
                    d = (0, o(682985).K8)(() => (0, o(638326).E)(i, a, o(993189).b4_.fromRecordMap(o(610463).A.getIntegrationsAsRecordMap())), [a, i]);
                return (0, r.jsx)(o(806106).A, {
                    title: (0, r.jsx)(o(109939).sA, { ...o(518882).MC.editLabel
                    }),
                    theme: o(632079).Tj,
                    created: t,
                    style: q(l),
                    deleted: n,
                    children: d
                })
            }
            let eo = {
                style0: {
                    border: `1px solid ${o(632079).Tj.border.primary}`,
                    height: "100%"
                },
                style1: {
                    overflowWrap: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "max-content",
                    maxWidth: 120,
                    verticalAlign: "top",
                    lineHeight: o(699422).K_.UIRegular.desktop,
                    padding: 4
                }
            };

            function el({
                blockValue: e,
                columnId: t,
                rootStore: l
            }) {
                let n = (0, o(533992).v3)(),
                    i = (0, o(960253).e)(),
                    {
                        value: d
                    } = (0, o(815048).fJ)(o(406921).V),
                    s = (0, o(682985).K8)(() => a({
                        block: e,
                        prop: t,
                        getRecordModel: l.getRecordModel
                    }), [e, t, l]),
                    c = (0, o(682985).K8)(() => s && s.length > 0 ? (0, o(44738).q)({
                        environment: n,
                        cellValue: s,
                        spaceId: e.space_id,
                        parentStore: l,
                        theme: o(632079).Tj,
                        themeMode: i,
                        katex: d
                    }) : (0, r.jsx)("span", {
                        children: " "
                    }), [s, e, l, n, d, i]);
                return (0, r.jsx)("td", {
                    style: eo.style0,
                    children: (0, r.jsx)("div", {
                        style: eo.style1,
                        children: c
                    })
                })
            }

            function er({
                blockValue: e,
                deleted: t,
                blockPreviewLocation: l,
                created: n,
                rootStore: i
            }) {
                let a = (0, o(565546).v)(o(993189).Bj6.fromBlock(e));
                return a && a.title ? (0, r.jsx)("div", {
                    children: (0, r.jsx)(o(806106).A, {
                        title: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Google Drive file",
                            id: "edit.googleDriveFile.label"
                        }),
                        created: !t,
                        deleted: t,
                        theme: o(632079).Tj,
                        style: q(l),
                        children: a.title
                    })
                }) : e.content ? (0, r.jsx)(X, {
                    blockPreviewLocation: l,
                    created: n,
                    deleted: t,
                    rootStore: i,
                    blockValue: e,
                    type: "drive"
                }) : null
            }
            let en = {
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden"
                },
                ei = {
                    paddingInlineEnd: 6
                },
                ea = {
                    flex: 1,
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                };

            function ed({
                blockModel: e,
                rootStore: t,
                blockValue: n
            }) {
                let i = (0, o(109939).tz)(),
                    a = (0, l.useMemo)(() => o(993189).b4_.fromGetRecordValueFn(t.getRecordValue), [t]),
                    d = (0, o(682985).K8)(() => a({
                        table: o(832375).evP,
                        id: e.id
                    }), [e, a]) || e,
                    s = (0, o(682985).K8)(() => d.getRenderTitleWithPlaceholder({
                        getRecordModel: a,
                        userTimeZone: (0, o(714350).P)(),
                        intl: i
                    }), [d, i, a]),
                    c = (0, o(682985).K8)(() => {
                        var e;
                        return null == d || null == (e = d.getFormat()) ? void 0 : e.page_icon
                    }, [d]);
                return (0, r.jsxs)("div", {
                    style: en,
                    children: [(0, r.jsx)("div", {
                        style: ei,
                        children: (0, r.jsx)(j, {
                            icon: c,
                            rootStore: t,
                            blockValue: n
                        })
                    }), (0, r.jsx)("div", {
                        className: "notranslate",
                        style: ea,
                        children: s
                    })]
                })
            }
            let es = {
                    paddingInlineEnd: 4
                },
                ec = {
                    flex: 1
                };

            function eu({
                blockModel: e,
                rootStore: t,
                blockValue: n
            }) {
                let i = (0, o(109939).tz)(),
                    a = (0, l.useMemo)(() => o(993189).b4_.fromGetRecordValueFn(t.getRecordValue), [t]),
                    {
                        title: d,
                        icon: s
                    } = (0, o(682985).K8)(() => {
                        var t;
                        return {
                            title: e.getRenderTitleWithPlaceholder({
                                getRecordModel: a,
                                userTimeZone: (0, o(714350).P)(),
                                intl: i
                            }),
                            icon: null == (t = e.getRenderIcon({
                                getRecordModel: a
                            })) ? void 0 : t.icon
                        }
                    }, [e, a, i]);
                return (0, r.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    children: [(0, r.jsx)("div", {
                        style: es,
                        children: (0, r.jsx)(j, {
                            icon: s,
                            rootStore: t,
                            blockValue: n
                        })
                    }), (0, r.jsx)("div", {
                        style: ec,
                        children: d
                    })]
                })
            }
            let ex = {
                overflow: "scroll"
            };

            function ep({
                blockValue: e,
                rootStore: t
            }) {
                var n, i, a;
                let d = (0, l.useMemo)(() => o(993189).b4_.fromGetRecordValueFn(t.getRecordValue), [t]),
                    s = (null == (n = e.content) ? void 0 : n.length) || 0,
                    c = (null == (i = e.format) || null == (i = i.table_block_column_order) ? void 0 : i.length) || 0,
                    u = (0, o(682985).K8)(() => e.content ? e.content.map(t => d({
                        table: e.parent_table,
                        id: t,
                        spaceId: e.space_id
                    })) : [], [e, d]);
                if (!s || !c) return null;
                let x = null == (a = e.format) ? void 0 : a.table_block_column_order;
                return (0, r.jsx)("div", {
                    style: ex,
                    children: (0, r.jsx)("table", {
                        children: (0, r.jsx)("tbody", {
                            children: u.map(e => e ? (0, r.jsx)("tr", {
                                children: null == x ? void 0 : x.map(o => (0, r.jsx)(el, {
                                    rootStore: t,
                                    blockValue: e,
                                    columnId: o
                                }, o))
                            }, e.id) : void 0)
                        })
                    })
                })
            }

            function eb({
                blockValue: e,
                rootStore: t
            }) {
                let n = (0, l.useMemo)(() => o(993189).b4_.fromGetRecordValueFn(t.getRecordValue), [t]),
                    i = (0, o(682985).K8)(() => n({
                        table: e.parent_table,
                        id: e.parent_id,
                        spaceId: e.space_id
                    }), [e, n]),
                    a = (0, o(682985).K8)(() => {
                        var e;
                        return null == i || null == (e = i.getFormat()) ? void 0 : e.table_block_column_order
                    }, [i]);
                return e.properties && 0 !== (0, o(722371).objectKeys)(e.properties).length && i ? (0, r.jsx)(o(4458).fI, {
                    alignItems: "stretch",
                    margin: 4,
                    children: (0, r.jsx)("table", {
                        children: (0, r.jsx)("tr", {
                            children: null == a ? void 0 : a.map(l => (0, r.jsx)(el, {
                                rootStore: t,
                                blockValue: o(993189).Bj6.fromBlock(e),
                                columnId: l
                            }, l))
                        })
                    })
                }) : null
            }
        },
        917659: (e, t, o) => {
            o.d(t, {
                A: () => n
            }), o(944114), o(898992), o(672577), o(803949), o(581454);
            var l = o(296540),
                r = o(474848);

            function n(e) {
                var t, n;
                let {
                    propertySchema: i,
                    value: d,
                    rootStore: s,
                    disableStyleAnnotations: b,
                    disableInsertedDeletedAnnotations: g,
                    disableDateStyleAnnotations: y,
                    disableSuggestionAnnotations: k
                } = e, S = (0, l.useCallback)(e => o(970831).B.createChildStore(s, {
                    table: o(832375).evP,
                    id: e
                }), [s]), w = (0, l.useMemo)(() => o(774995).b.fromMonomorphicFunctionUnsafe(e => S(e.id).getRecordModel(e), o(95476).xb.fromMonomorphicFunctionUnsafe(e => S(e.id).getRecordValue(e))), [S]), I = (0, l.useCallback)(e => {
                    let t = S(e.id).getValue();
                    return t && o(993189).Bj6.fromBlock(t).getProperty("title", w) || []
                }, [S, w]), P = (0, l.useCallback)(() => {
                    if ("relation" === i.type) return o(561872).bG({
                        relationValue: o(561872).n(d.value),
                        getRecordModel: w,
                        propertySchema: i,
                        includeNoAccess: !0
                    })
                }, [i, d.value, w]), C = (0, l.useCallback)(() => {
                    if ("text" === i.type || "title" === i.type) return d.value;
                    if ("relation" === i.type) {
                        let e = P();
                        if (!e) return;
                        let t = e.map(I);
                        return o(381453).Bq(t)
                    }
                }, [i, d.value, I, P]), R = (0, o(682985).K8)(C, [C]), {
                    value: L
                } = (0, o(815048).fJ)(o(406921).V, {
                    disabled: (t = i, n = R, "text" !== t.type && "title" !== t.type && "relation" !== t.type || !n || !(o(247438).IcF(n).length > 0))
                }), H = (0, o(682985).K8)(P, [P]), z = i.type;
                return "checkbox" !== z && 0 === d.value.length ? (0, r.jsx)(T, {}) : "text" === z ? (0, r.jsx)(B, {
                    value: d,
                    disableStyleAnnotations: !!b,
                    disableInsertedDeletedAnnotations: !!g,
                    disableDateStyleAnnotations: !!y,
                    disableSuggestionAnnotations: !!k,
                    rootStore: s,
                    katex: L
                }) : "checkbox" === z ? (0, r.jsx)(c, {
                    value: d
                }) : "multi_select" === z ? (0, r.jsx)(A, {
                    propertySchema: i,
                    value: d,
                    rootStore: s
                }) : "select" === z ? (0, r.jsx)(_, {
                    propertySchema: i,
                    value: d,
                    rootStore: s
                }) : "status" === z ? (0, r.jsx)(M, {
                    propertySchema: i,
                    value: d,
                    rootStore: s
                }) : "person" === z ? (0, r.jsx)(V, {
                    value: d,
                    propertySchema: i,
                    rootStore: s
                }) : "number" === z ? (0, r.jsx)(u, {
                    value: d
                }) : "date" === z ? (0, r.jsx)(x, {
                    propertySchema: i,
                    value: d
                }) : "url" === z ? (0, r.jsx)(p, {
                    value: d
                }) : "file" === z ? (0, r.jsx)(m, {
                    value: d,
                    propertySchema: i
                }) : "email" === z ? (0, r.jsx)(j, {
                    value: d
                }) : "phone_number" === z ? (0, r.jsx)(h, {
                    value: d
                }) : "title" === z ? (0, r.jsx)(B, {
                    value: d,
                    disableStyleAnnotations: !!b,
                    disableInsertedDeletedAnnotations: !!g,
                    disableDateStyleAnnotations: !!y,
                    disableSuggestionAnnotations: !!k,
                    rootStore: s,
                    katex: L
                }) : "created_time" === z ? (0, r.jsx)(x, {
                    propertySchema: i,
                    value: d
                }) : "created_by" === z ? (0, r.jsx)(V, {
                    value: d,
                    propertySchema: i,
                    rootStore: s
                }) : "relation" === z ? (0, r.jsx)(a, {
                    relationValue: H,
                    getPageTitle: I,
                    rootStore: s,
                    disableStyleAnnotations: !!b,
                    disableInsertedDeletedAnnotations: !!g,
                    disableDateStyleAnnotations: !!y,
                    disableSuggestionAnnotations: !!k,
                    katex: L
                }) : "auto_increment_id" === z ? (0, r.jsx)(u, {
                    value: d
                }) : "verification" === z ? (0, r.jsx)(f, {
                    value: d,
                    rootStore: s
                }) : "place" === z ? (0, r.jsx)(v, {
                    value: d,
                    rootStore: s
                }) : "formula" === z || "rollup" === z || "last_edited_by" === z || "last_edited_time" === z || "last_visited_time" === z || "button" === z || "location" === z ? null : void(0, o(722371).HB)(z)
            }
            let i = {
                style0: {
                    maxWidth: 180,
                    color: o(632079).oZ.mediumTextColor
                }
            };

            function a(e) {
                let {
                    rootStore: t,
                    getPageTitle: n,
                    disableStyleAnnotations: a,
                    disableInsertedDeletedAnnotations: d,
                    disableDateStyleAnnotations: c,
                    disableSuggestionAnnotations: u,
                    relationValue: x,
                    katex: p
                } = e, b = (0, o(533992).v3)(), m = (0, o(960253).e)(), j = (0, l.useCallback)(e => {
                    let {
                        value: l,
                        pointer: r
                    } = e;
                    return o(536614).S5({
                        environment: b,
                        textValue: {
                            value: l,
                            spaceId: (0, o(226221).e)(r.spaceId)
                        },
                        parentStore: t,
                        disableHover: !0,
                        disableStyleAnnotations: a,
                        disableInsertedDeletedAnnotations: d,
                        disableDateStyleAnnotations: c,
                        disableSuggestionAnnotations: u,
                        disabled: !0,
                        theme: o(632079).Tj,
                        themeMode: m,
                        emojiType: (0, o(591404).FN)(b),
                        katex: p,
                        formulaValueTypes: []
                    })
                }, [b, t, a, d, c, u, p, m]);
                if (!x) return null;
                let h = x.length > 5,
                    f = h ? x.slice(0, 5) : x;
                return (0, r.jsxs)("div", {
                    children: [f.map((e, t) => (0, r.jsx)(s, {
                        pointer: e,
                        renderText: j,
                        getPageTitle: n
                    }, t)), h ? (0, r.jsx)("div", {
                        style: i.style0,
                        children: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "{leftoverCountNumber} more",
                            id: "editProperty.relationEditedProperties.moreCount.label",
                            values: {
                                leftoverCountNumber: x.length - 5
                            }
                        })
                    }) : void 0]
                })
            }
            let d = {
                style0: {
                    maxWidth: 180,
                    ...o(699422).RC
                }
            };

            function s(e) {
                let {
                    pointer: t,
                    renderText: l,
                    getPageTitle: n
                } = e, i = (0, o(682985).K8)(() => l({
                    value: n(t),
                    pointer: t
                }), [t, l, n]);
                return (0, r.jsx)("div", {
                    style: d.style0,
                    children: i
                })
            }

            function c({
                value: e
            }) {
                let t = (0, o(896216).w)(e.value),
                    l = (0, o(960253).I)(() => ({
                        root: {
                            width: 16,
                            height: 16,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            backgroundColor: t ? o(632079).Tj.blue.background.accentPrimary : o(632079).oZ.transparent,
                            borderRadius: 1.5,
                            ...!t && {
                                border: "1.5px solid currentColor"
                            }
                        }
                    }), [t]);
                return (0, r.jsx)("div", {
                    style: l.root,
                    children: t ? (0, r.jsx)(o(16275).I, {
                        icon: o(20413).checkmarkFillSmallIcon,
                        size: "sm",
                        colorPalette: "blue",
                        colorVariant: "inversePrimary"
                    }) : null
                })
            }

            function u({
                value: e
            }) {
                let t = o(588688).M(e.value);
                return (0, r.jsx)("div", {
                    children: t
                })
            }

            function x({
                propertySchema: e,
                value: t
            }) {
                let l = (0, o(179358).b)(t.value);
                return (0, r.jsx)(o(246467).A, {
                    value: l,
                    dateFormat: e.date_format || o(943003).vz,
                    timeFormat: e.time_format || o(943003).CE,
                    displayInUserTimezone: !0
                })
            }

            function p({
                value: e
            }) {
                return (0, r.jsx)(r.Fragment, {
                    children: o(247438).k4p(e.value)
                })
            }
            let b = {
                fileBadgeColor: {
                    background: o(632079).Tj.background.tertiaryTranslucent
                }
            };

            function m({
                value: e,
                propertySchema: t
            }) {
                let l = o(561872).pJ(e.value, t);
                return (0, r.jsx)(o(4458).fI, {
                    inline: !0,
                    children: l.map((e, t, l) => {
                        let n = l.length - 1 === t;
                        return (0, r.jsx)(o(316238).A, {
                            rightMargin: !n,
                            backgroundColor: b.fileBadgeColor.background,
                            children: e.url
                        }, t)
                    })
                })
            }

            function j({
                value: e
            }) {
                let t = o(247438).k4p(e.value);
                return (0, r.jsx)("div", {
                    children: t
                })
            }

            function h({
                value: e
            }) {
                let t = o(247438).k4p(e.value);
                return (0, r.jsx)("div", {
                    children: t
                })
            }

            function f({
                value: e,
                rootStore: t
            }) {
                return (0, r.jsx)(o(931196).V, {
                    textValue: e.value,
                    rootStore: t
                })
            }

            function v({
                value: e,
                rootStore: t
            }) {
                return (0, r.jsx)(o(594014).m, {
                    textValue: e.value,
                    parentStore: t
                })
            }
            let g = {
                fontSize: 12
            };

            function y({
                userId: e,
                rootStore: t,
                isLast: l
            }) {
                let n = o(807825).L.createChildStore(t, {
                    table: o(832375).oo9,
                    id: e
                });
                return (0, r.jsx)("div", {
                    style: {
                        marginInlineEnd: 8 * !l
                    },
                    children: (0, r.jsx)(o(980494).A, {
                        userStore: n,
                        inline: !0,
                        avatarSize: 18,
                        style: g,
                        avatarShouldShowShadow: !1,
                        hasPersonHoverCard: !1
                    })
                })
            }

            function k({
                groupPointer: e,
                rootStore: t,
                isLast: l
            }) {
                return (0, r.jsx)("div", {
                    style: {
                        marginInlineEnd: 8 * !l,
                        alignSelf: "center"
                    },
                    children: (0, r.jsx)(o(11444).UISpacePermissionGroupToken, {
                        parentStore: t,
                        groupPointer: e,
                        format: o(696654).NY.ExtraSmall,
                        isSingle: !1
                    }, e.id)
                })
            }

            function S({
                isLast: e,
                botId: t,
                rootStore: n
            }) {
                let i = (0, l.useMemo)(() => o(447003).v.createChildStore(n, {
                    table: o(832375).GPl,
                    id: t
                }), [t, n]);
                return (0, r.jsx)("div", {
                    style: {
                        marginTop: 4,
                        marginInlineEnd: 8 * !e
                    },
                    children: (0, r.jsx)(o(59724).A, {
                        botStore: i
                    })
                })
            }

            function V({
                value: e,
                propertySchema: t,
                rootStore: l
            }) {
                let n = (0, o(465256).e)({
                        textValue: e.value,
                        propertySchema: t,
                        blockCreatorPointer: void 0,
                        convertGroupPointersToBeComposite: !0
                    }),
                    i = [];
                return n.forEach((e, t) => {
                    let a = n.length - 1 === t;
                    e.table === o(832375).oo9 ? i.push((0, r.jsx)(y, {
                        userId: e.id,
                        rootStore: l,
                        isLast: a
                    }, t)) : e.table === o(832375).GPl ? i.push((0, r.jsx)(S, {
                        botId: e.id,
                        rootStore: l,
                        isLast: a
                    }, t)) : e.table === o(832375).naB && i.push((0, r.jsx)(k, {
                        groupPointer: e,
                        rootStore: l,
                        isLast: a
                    }, t))
                }), (0, r.jsx)(o(4458).fI, {
                    inline: !0,
                    children: i
                })
            }
            let w = {
                style0: {
                    color: o(632079).Tj.text.secondary,
                    fontSize: 12
                }
            };

            function T() {
                return (0, r.jsx)("div", {
                    style: w.style0,
                    children: (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Empty",
                        id: "editProperty.emptyProperty.label"
                    })
                })
            }
            let I = {
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
            };

            function B({
                value: e,
                disableStyleAnnotations: t,
                disableInsertedDeletedAnnotations: l,
                disableDateStyleAnnotations: n,
                disableSuggestionAnnotations: i,
                rootStore: a,
                katex: d
            }) {
                let s = (0, o(533992).v3)(),
                    c = (0, o(960253).e)(),
                    u = (0, o(682985).K8)(() => o(536614).S5({
                        environment: s,
                        textValue: e,
                        parentStore: a,
                        disableStyleAnnotations: t,
                        disableInsertedDeletedAnnotations: l,
                        disableDateStyleAnnotations: n,
                        disableSuggestionAnnotations: i,
                        disableHover: !0,
                        disabled: !0,
                        theme: o(632079).Tj,
                        themeMode: c,
                        emojiType: (0, o(591404).FN)(s),
                        katex: d,
                        formulaValueTypes: []
                    }), [s, e, a, t, l, n, i, d, c], {
                        silenceRerenderDefender: !0
                    });
                return (0, r.jsx)("span", {
                    style: I,
                    children: u
                })
            }

            function A({
                propertySchema: e,
                value: t,
                rootStore: l
            }) {
                let n = e.options || [],
                    i = o(561872).yH(t.value);
                return (0, r.jsx)(o(4458).fI, {
                    inline: !0,
                    children: i.map((e, o, i) => (0, r.jsx)(P, {
                        token: e,
                        options: n,
                        index: o,
                        arr: i,
                        rootStore: l,
                        value: t
                    }, o))
                })
            }

            function P({
                token: e,
                options: t,
                index: l,
                arr: n,
                rootStore: i,
                value: a
            }) {
                let d = (t ? ? []).find(t => t.value === e),
                    s = n.length - 1 === l,
                    c = (0, o(632079).LD)(o(632079).Tj, null == d ? void 0 : d.color),
                    u = (0, o(682985).K8)(() => e ? ? o(536614).r4(a.value, i), [e, a, i]);
                return (0, r.jsx)(o(316238).A, { ...c,
                    rightMargin: !s,
                    children: u
                })
            }

            function _({
                propertySchema: e,
                value: t,
                rootStore: l
            }) {
                let n = e.options || [],
                    i = o(561872).L3(t.value, n),
                    a = (0, o(682985).K8)(() => i ? ? o(536614).r4(t.value, l), [i, t, l]),
                    d = n.find(e => e.value === i),
                    s = (0, o(632079).LD)(o(632079).Tj, null == d ? void 0 : d.color);
                return (0, r.jsx)(o(4458).fI, {
                    inline: !0,
                    children: (0, r.jsx)(o(316238).A, { ...s,
                        children: a
                    })
                })
            }

            function M({
                propertySchema: e,
                value: t,
                rootStore: l
            }) {
                let n = o(561872).BX(t.value, e),
                    i = (0, o(682985).K8)(() => n ? ? o(536614).r4(t.value, l), [n, t, l]),
                    a = (e.options ? ? []).find(e => e.value === n),
                    d = (0, o(632079).LD)(o(632079).Tj, null == a ? void 0 : a.color);
                return (0, r.jsx)(o(4458).fI, {
                    inline: !0,
                    children: (0, r.jsx)(o(316238).A, { ...d,
                        children: i
                    })
                })
            }
        },
        931196: (e, t, o) => {
            o.d(t, {
                V: () => i
            });
            var l = o(296540),
                r = o(474848);
            let n = {
                display: "inline-flex",
                alignItems: "baseline"
            };

            function i(e) {
                let t, {
                        textValue: i,
                        rootStore: a
                    } = e,
                    d = (0, o(109939).tz)(),
                    s = (0, l.useMemo)(() => {
                        let e = (0, o(435137).U1)(i);
                        return e ? o(435137).I7(e) : {
                            type: "none"
                        }
                    }, [i]),
                    c = (0, o(682985).K8)(() => {
                        if ("none" !== s.type) return (0, o(935786).JQ)({
                            parentStore: a,
                            pointer: s.actorPointer
                        })
                    }, [s, a]);
                return "none" === s.type ? (0, r.jsx)("span", {
                    children: d.formatMessage(o(435137).nl.none)
                }) : (void 0 === c ? t = (0, r.jsx)(o(980494).A, {
                    userStore: void 0,
                    inline: !0,
                    style: n,
                    avatarSize: 18,
                    avatarMarginRight: 3,
                    hasPersonHoverCard: !1
                }) : c.table === o(514214).oo ? t = (0, r.jsx)(o(980494).A, {
                    userStore: c,
                    inline: !0,
                    style: n,
                    avatarSize: 18,
                    avatarMarginRight: 3,
                    hasPersonHoverCard: !1
                }) : c.table === o(890920).GP ? t = (0, r.jsx)(o(59724).A, {
                    botStore: c,
                    style: n
                }) : (0, o(722371).HB)(c), "archived" === s.type) ? (0, r.jsx)("div", {
                    children: d.formatMessage(o(435137).nl.archivedIndefinitely, {
                        actor: t,
                        datetime: o(931990).OH({
                            dateTime: s.startDateTime,
                            intl: d,
                            shortenDateAndRange: !0
                        })
                    })
                }) : "verified" === s.type && s.isIndefinite ? (0, r.jsx)("div", {
                    children: d.formatMessage(o(435137).nl.verifiedIndefinitely, {
                        actor: t
                    })
                }) : (0, r.jsx)("div", {
                    children: d.formatMessage(o(435137).nl.verifiedUntil, {
                        actor: t,
                        datetime: o(931990).T2({
                            dateTime: s.dateTimeRange.end,
                            intl: d,
                            displayInUserTimezone: !0
                        })
                    })
                })
            }
        }
    }
]);