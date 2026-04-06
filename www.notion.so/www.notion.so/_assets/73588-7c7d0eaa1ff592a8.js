"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [73588], {
        275680: (e, t, r) => {
            r.d(t, {
                A: () => l
            }), r(898992), r(354520), r(581454), r(296540);
            var o = r(474848);

            function l({
                edit: e,
                rootStore: t,
                propertyIntermediateChanges: a
            }) {
                return (0, o.jsx)("div", {
                    children: Object.entries(e.property_updates).map(([l, s]) => {
                        var d;
                        let n = null == (d = e.filtered_block_schema) ? void 0 : d[l];
                        if (!n) return null;
                        let c = s.before ? s.before.value : [],
                            u = s.after ? s.after.value : [],
                            p = (0, o.jsx)(i, {
                                rootStore: t,
                                labeled: !0,
                                propertySchema: n,
                                beforeValue: c,
                                afterValue: u,
                                spaceId: e.space_id,
                                intermediateChanges: null == a ? void 0 : a.intermediateChanges,
                                latestIntermediateTimestamp: null == a ? void 0 : a.latestTimestamp
                            });
                        if (p) return (0, o.jsx)("div", {
                            style: r(376968).d.wrap,
                            children: p
                        }, l)
                    }).filter(r(722371).O9)
                })
            }

            function i(e) {
                let {
                    labeled: t,
                    propertySchema: l,
                    beforeValue: i,
                    afterValue: a,
                    rootStore: s,
                    spaceId: d,
                    intermediateChanges: n,
                    latestIntermediateTimestamp: c
                } = e, u = (0, r(226221).e)(d);
                return (0, o.jsx)(r(877634).RD, {
                    labeled: t,
                    name: l.name,
                    type: l.type,
                    icon: l.icon,
                    children: (0, o.jsx)(r(179239).A, {
                        propertySchema: l,
                        beforeValue: {
                            value: i,
                            spaceId: u
                        },
                        afterValue: {
                            value: a,
                            spaceId: u
                        },
                        rootStore: s,
                        intermediateChanges: n,
                        latestIntermediateTimestamp: c
                    })
                })
            }
        },
        773588: (e, t, r) => {
            r.d(t, {
                A: () => eV
            });
            var o = r(296540);

            function l(e) {
                let t = (0, r(109939).tz)();
                return (0, r(808168).hd)(e, t)
            }
            r(581454);
            var i = r(474848);

            function a(e) {
                let {
                    edit: t,
                    property: o,
                    labeled: a,
                    rootStore: s
                } = e, d = (0, r(533992).v3)(), n = (0, r(109939).tz)(), {
                    value: c
                } = (0, r(815048).fJ)(r(864850).T.formulas), u = l(t), p = s.getRecordModel, x = d.currentUser.id, m = (0, r(682985).K8)(() => r(175567).r({
                    property: o,
                    schema: u,
                    block: r(993189).Bj6.fromBlock(t.block_data.before.block_value),
                    getRecordModel: p,
                    userId: x,
                    userTimeZone: (0, r(714350).P)(),
                    intl: n,
                    experimentService: r(218744).default,
                    collectionFeatureGates: (0, r(457103).i)(),
                    formulasModule: c,
                    spaceIdCreator: d.idCreator.getSpaceIdCreatorSync(t.block_data.before.block_value.space_id),
                    getRelationEdgeList: (0, r(323082).Y)({
                        environment: d,
                        spaceId: t.block_data.before.block_value.space_id
                    })
                }), [o, u, t.block_data.before.block_value, p, x, n, c, d]), h = u[o];
                if (!h) return null;
                let b = (0, r(877634).De)({
                        block: r(993189).Bj6.fromBlock(t.block_data.before.block_value),
                        prop: o,
                        getRecordModel: p
                    }),
                    f = (0, r(877634).De)({
                        block: r(993189).Bj6.fromBlock(t.block_data.after.block_value),
                        prop: o,
                        getRecordModel: p
                    }),
                    y = h.type;
                return m && "text" !== y && "title" !== y ? (0, i.jsx)(r(877634).vY, {
                    rootStore: e.rootStore,
                    value: {
                        value: f,
                        spaceId: (0, r(226221).e)(t.block_data.after.block_value.space_id)
                    },
                    propertySchema: h,
                    labeled: a
                }, o) : (0, i.jsx)(r(877634).RD, {
                    labeled: a,
                    name: h.name,
                    type: h.type,
                    icon: h.icon,
                    children: (0, i.jsx)(r(179239).A, {
                        propertySchema: h,
                        beforeValue: {
                            value: b,
                            spaceId: (0, r(226221).e)(t.block_data.before.block_value.space_id)
                        },
                        afterValue: {
                            value: f,
                            spaceId: (0, r(226221).e)(t.block_data.after.block_value.space_id)
                        },
                        rootStore: e.rootStore
                    })
                })
            }

            function s({
                edit: e,
                rootStore: t
            }) {
                let o = r(993189).Bj6.fromBlock(e.block_data.before.block_value),
                    l = (0, r(565546).v)(o),
                    a = e.block_data.after.block_value,
                    d = r(993189).Bj6.fromBlock(a);
                return l === (0, r(565546).v)(d) || "drive" !== a.type ? null : (0, i.jsx)(r(877634).Ay, {
                    blockValue: a,
                    rootStore: t
                })
            }
            let d = function({
                    edit: e,
                    formatProperty: t,
                    hideLabel: r
                }) {
                    return (0, i.jsx)(u, {
                        edit: e,
                        formatProperty: t,
                        hideLabel: r
                    }) || null
                },
                n = {
                    style0: {
                        display: "flex",
                        alignItems: "center",
                        color: r(632079).Tj.text.tertiary,
                        fontSize: 12,
                        lineHeight: 1,
                        marginBottom: 8
                    },
                    style1: {
                        marginInlineEnd: 6
                    },
                    style3: {
                        padding: "0px 6px"
                    }
                };

            function c({
                beforeValue: e,
                afterValue: t,
                edit: o,
                hideLabel: l
            }) {
                return e || t ? (0, i.jsxs)(i.Fragment, {
                    children: [l ? void 0 : (0, i.jsxs)("div", {
                        style: n.style0,
                        children: [(0, i.jsx)(r(16275).I, {
                            icon: r(489784).emojiFaceSmallIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: n.style1
                        }), (0, i.jsx)(r(109939).sA, {
                            id: "editFormatDiff.pageIcon.label",
                            defaultMessage: "Page icon"
                        })]
                    }), (0, i.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        children: [(0, i.jsx)(r(569553).B6, {
                            disabled: !0,
                            isEmptyPage: !1,
                            size: 20,
                            icon: e ? {
                                pointer: {
                                    table: r(832375).evP,
                                    id: o.block_data.before.block_value.id
                                },
                                icon: e
                            } : void 0,
                            iconRecordCategory: o.block_schema ? "collectionViewBlock" : "pageBlock"
                        }), (0, i.jsx)("div", {
                            style: n.style3,
                            children: (0, i.jsx)(r(16275).I, {
                                icon: r(491469).arrowChevronSingleRightSmallIcon,
                                size: "xs",
                                colorVariant: "tertiary"
                            })
                        }), (0, i.jsx)(r(569553).B6, {
                            disabled: !0,
                            isEmptyPage: !1,
                            size: 20,
                            icon: t ? {
                                pointer: {
                                    table: r(832375).evP,
                                    id: o.block_data.after.block_value.id
                                },
                                icon: t
                            } : void 0,
                            iconRecordCategory: o.block_schema ? "collectionViewBlock" : "pageBlock"
                        })]
                    })]
                }) : null
            }

            function u({
                edit: e,
                formatProperty: t,
                hideLabel: o
            }) {
                if ("page_icon" === t) {
                    let r = e.block_data.before.block_value.format && e.block_data.before.block_value.format[t],
                        l = e.block_data.after.block_value.format && e.block_data.after.block_value.format[t];
                    return (0, i.jsx)(c, {
                        edit: e,
                        beforeValue: r,
                        afterValue: l,
                        hideLabel: o
                    })
                }
                if ("is_placeholder" === t) return null;
                (0, r(722371).HB)(t)
            }

            function p({
                edit: e,
                rootStore: t
            }) {
                let o = e.block_data.before.block_value,
                    l = e.block_data.after.block_value,
                    a = r(808168).mP({
                        before: o,
                        after: l
                    });
                return (0, i.jsx)(r(4458).VP, {
                    alignItems: "stretch",
                    children: a.map((e, r) => (0, i.jsx)(m, {
                        before: o,
                        after: l,
                        property: e,
                        rootStore: t
                    }, r))
                })
            }
            let x = {
                container: {
                    display: "flex",
                    border: `1px solid ${r(632079).Tj.border.primary}`,
                    overflowWrap: "anywhere",
                    width: "max-content",
                    maxWidth: "100%",
                    verticalAlign: "top",
                    lineHeight: r(699422).K_.UIRegular.desktop,
                    padding: 4,
                    marginBottom: 4
                },
                style0: {
                    alignSelf: "center",
                    margin: 4
                },
                before: { ...r(376968).d.deleted,
                    marginBottom: void 0
                }
            };

            function m({
                before: e,
                after: t,
                property: o,
                rootStore: l
            }) {
                let a = (0, r(533992).v3)(),
                    s = (0, r(960253).e)(),
                    {
                        value: d
                    } = (0, r(815048).fJ)(r(406921).V),
                    n = e.properties && o in e.properties ? e.properties[o] : void 0,
                    c = t.properties && o in t.properties ? t.properties[o] : void 0,
                    u = (0, r(682985).K8)(() => (0, r(44738).q)({
                        environment: a,
                        cellValue: n,
                        spaceId: e.space_id,
                        parentStore: l,
                        theme: r(632079).Tj,
                        themeMode: s,
                        katex: d
                    }), [a, n, e, l, d, s]),
                    p = (0, r(682985).K8)(() => (0, r(44738).q)({
                        environment: a,
                        cellValue: c,
                        spaceId: t.space_id,
                        parentStore: l,
                        theme: r(632079).Tj,
                        themeMode: s,
                        katex: d
                    }), [a, c, t, l, d, s]);
                return (0, i.jsxs)("div", {
                    style: x.container,
                    children: [(0, i.jsx)("span", {
                        style: x.before,
                        children: u
                    }), n && c ? (0, i.jsx)("span", {
                        style: x.style0,
                        children: (0, i.jsx)(r(16275).I, {
                            icon: r(969278).arrowStraightRightSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        })
                    }) : void 0, (0, i.jsx)("span", {
                        style: r(376968).d.added,
                        children: p
                    })]
                })
            }
            let h = {
                style0: { ...r(376968).d.wrap,
                    ...r(376968).d.deleted
                }
            };

            function b({
                blockValue: e,
                rootStore: t
            }) {
                let o = (0, i.jsx)(r(877634).Ay, {
                    rootStore: t,
                    blockValue: e,
                    deleted: !0
                });
                if (o) switch (e.type) {
                    case r(955630).xd.quote:
                    case r(955630).xd.video:
                    case r(955630).xd.code:
                    case r(955630).xd.equation:
                    case r(955630).xd.file:
                    case r(955630).xd.bookmark:
                    case r(955630).xd.factory:
                        return (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("div", {
                                style: r(376968).d.label,
                                children: (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Deleted",
                                    id: "edit.blockDeletedEditStyles.factoryLabel"
                                })
                            }), (0, i.jsx)("div", {
                                style: r(376968).d.wrap,
                                children: o
                            })]
                        });
                    case r(955630).xd.table:
                        break;
                    case r(955630).xd.tableRow:
                        if (e.properties && (0, r(722371).objectKeys)(e.properties).length > 0) return (0, i.jsx)("div", {
                            style: h.style0,
                            children: o
                        });
                        break;
                    default:
                        return (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("div", {
                                style: r(376968).d.label,
                                children: (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Deleted",
                                    id: "edit.blockDeletedEditStyles.defaultLabel"
                                })
                            }), (0, i.jsx)("div", {
                                style: h.style0,
                                children: o
                            })]
                        })
                }
                return null
            }

            function f(e) {
                return (0, i.jsx)("div", {
                    style: r(376968).d.wrap,
                    children: (0, i.jsx)(W, { ...e
                    })
                })
            }
            let y = {
                style0: { ...r(376968).d.wrap,
                    ...r(376968).d.added
                }
            };

            function j({
                blockValue: e,
                rootStore: t
            }) {
                let o = (0, i.jsx)(r(877634).Ay, {
                    blockValue: e,
                    rootStore: t,
                    created: !0
                });
                if (o) switch (e.type) {
                    case r(955630).xd.quote:
                    case r(955630).xd.video:
                    case r(955630).xd.code:
                    case r(955630).xd.equation:
                    case r(955630).xd.file:
                    case r(955630).xd.bookmark:
                    case r(955630).xd.factory:
                        return (0, i.jsx)("div", {
                            style: r(376968).d.wrap,
                            children: o
                        });
                    case r(955630).xd.table:
                        break;
                    case r(955630).xd.tableRow:
                        if (e.properties && (0, r(722371).objectKeys)(e.properties).length > 0) return (0, i.jsx)("div", {
                            style: y.style0,
                            children: o
                        });
                        break;
                    default:
                        return (0, i.jsx)("div", {
                            style: y.style0,
                            children: o
                        })
                }
                return null
            }

            function g(e) {
                let t = (0, r(109939).tz)(),
                    {
                        edit: l,
                        type: s,
                        rootStore: d
                    } = e,
                    n = Q(l, "source") && (0, i.jsxs)(r(806106).A, {
                        title: r(518882).Do(t, s),
                        theme: r(632079).Tj,
                        children: [(0, i.jsx)(ee, {
                            blockValue: l.block_data.after.block_value
                        }), (0, i.jsx)(a, {
                            rootStore: d,
                            edit: l,
                            property: "source",
                            labeled: !1
                        })]
                    });
                return (0, i.jsxs)(o.Fragment, {
                    children: [n, (0, i.jsx)("div", {
                        style: {
                            marginBottom: 4 * !!n
                        },
                        children: (0, i.jsx)(v, {
                            edit: l,
                            rootStore: d
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    edit: t,
                    rootStore: r
                } = e;
                return Q(t, "caption") ? (0, i.jsx)(a, {
                    rootStore: r,
                    edit: t,
                    property: "caption",
                    labeled: !1
                }) : null
            }

            function _(e) {
                let {
                    edit: t
                } = e;
                return (0, i.jsx)(r(806106).A, {
                    title: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Callout",
                        id: "edit.calloutBlockChanged.label"
                    }),
                    theme: r(632079).Tj,
                    children: (0, i.jsx)(d, {
                        edit: t,
                        formatProperty: "page_icon",
                        hideLabel: !0
                    })
                })
            }

            function k(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return (0, i.jsx)("div", {
                    style: r(376968).d.header,
                    children: (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })
                })
            }

            function S(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return (0, i.jsx)("div", {
                    style: r(376968).d.subHeader,
                    children: (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })
                })
            }

            function I(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return (0, i.jsx)("div", {
                    style: r(376968).d.subSubHeader,
                    children: (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })
                })
            }

            function C(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return (0, i.jsx)(r(877634).lM, {
                    children: (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })
                })
            }
            let A = {
                margin: 0,
                paddingInlineStart: 28
            };

            function w(e) {
                let {
                    edit: t,
                    rootStore: r
                } = e;
                return (0, i.jsx)("ul", {
                    style: A,
                    children: (0, i.jsx)("li", {
                        children: (0, i.jsx)(Y, {
                            edit: t,
                            rootStore: r
                        })
                    })
                })
            }
            let M = {
                margin: 0,
                paddingInlineStart: 28
            };

            function T(e) {
                let {
                    edit: t,
                    rootStore: r
                } = e;
                return (0, i.jsx)("ol", {
                    style: M,
                    children: (0, i.jsx)("li", {
                        children: (0, i.jsx)(Y, {
                            edit: t,
                            rootStore: r
                        })
                    })
                })
            }

            function B(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return (0, i.jsx)(r(806106).A, {
                    title: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Quote",
                        id: "edit.quoteBlockChanged.label"
                    }),
                    theme: r(632079).Tj,
                    children: (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })
                })
            }

            function R(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return (0, i.jsx)(r(806106).A, {
                    title: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Template Button",
                        id: "edit.templateButtonBlockChanged.label"
                    }),
                    theme: r(632079).Tj,
                    children: (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })
                })
            }

            function V(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return (0, i.jsx)(r(806106).A, {
                    title: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Equation",
                        id: "edit.equationBlockChanged.label"
                    }),
                    theme: r(632079).Tj,
                    children: (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })
                })
            }
            let P = {
                marginInlineEnd: 6,
                marginTop: 3,
                lineHeight: 1
            };

            function D(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return r(808168).Gc({
                    before: t.block_data.before.block_value,
                    after: t.block_data.after.block_value,
                    property: "checked"
                }) ? (0, i.jsxs)(r(4458).fI, {
                    inline: !0,
                    children: [(0, i.jsx)("div", {
                        style: P,
                        children: (0, i.jsx)(a, {
                            rootStore: o,
                            edit: t,
                            property: "checked",
                            labeled: !1
                        })
                    }), (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })]
                }) : (0, i.jsxs)(r(4458).fI, {
                    inline: !0,
                    children: [(0, i.jsx)(J, {
                        rootStore: o,
                        blockValue: t.block_data.after.block_value
                    }), (0, i.jsx)(Y, {
                        edit: t,
                        rootStore: o
                    })]
                })
            }
            let U = {
                style0: {
                    fontFamily: (0, r(699422).vc)(r(849917).locale).mono,
                    fontSize: 12,
                    tabSize: 2
                }
            };

            function N(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                return r(808168).Gc({
                    before: t.block_data.before.block_value,
                    after: t.block_data.after.block_value,
                    property: "language"
                }) ? (0, i.jsxs)(r(806106).A, {
                    title: er(t.block_data.after.block_value),
                    theme: r(632079).Tj,
                    children: [(0, i.jsx)("span", {
                        style: U.style0,
                        children: (0, i.jsx)(O, {
                            rootStore: o,
                            edit: t
                        })
                    }), (0, i.jsx)(a, {
                        rootStore: o,
                        edit: t,
                        property: "language",
                        labeled: !0
                    })]
                }) : (0, i.jsx)(r(806106).A, {
                    title: er(t.block_data.after.block_value),
                    theme: r(632079).Tj,
                    children: (0, i.jsx)("span", {
                        style: U.style0,
                        children: (0, i.jsx)(O, {
                            rootStore: e.rootStore,
                            edit: t
                        })
                    })
                })
            }
            let L = {
                    marginTop: 4,
                    marginBottom: 4
                },
                K = {
                    marginBottom: 4
                };

            function E(e) {
                let {
                    edit: t,
                    rootStore: l
                } = e, a = et(t.block_data.before.block_value), s = et(t.block_data.after.block_value), d = a !== s && (0, i.jsxs)("div", {
                    style: L,
                    children: [(0, i.jsx)("div", {
                        style: { ...r(376968).d.label,
                            ...K
                        },
                        children: (0, i.jsx)(r(109939).sA, {
                            defaultMessage: "Updated",
                            id: "edit.imageBlockChanged.updatedTitle"
                        })
                    }), s ? (0, i.jsx)(r(877634).R1, {
                        src: s,
                        permissionRecord: {
                            table: r(832375).evP,
                            id: t.block_id
                        }
                    }) : void 0]
                });
                return (0, i.jsxs)(o.Fragment, {
                    children: [d, (0, i.jsx)("div", {
                        style: {
                            marginBottom: 4 * !!d
                        },
                        children: (0, i.jsx)(v, {
                            edit: t,
                            rootStore: l
                        })
                    })]
                })
            }

            function z(e) {
                let {
                    edit: t,
                    rootStore: l
                } = e, s = (Q(t, "title") || Q(t, "source")) && (0, i.jsxs)(r(806106).A, {
                    title: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Bookmark",
                        id: "edit.bookmarkBlockPropertyChanged.label"
                    }),
                    theme: r(632079).Tj,
                    children: [(0, i.jsx)(Y, {
                        edit: t,
                        rootStore: l
                    }), (0, i.jsx)(a, {
                        rootStore: l,
                        edit: t,
                        property: "source",
                        labeled: !0
                    })]
                });
                return (0, i.jsxs)(o.Fragment, {
                    children: [s, Q(t, "caption") ? (0, i.jsx)("div", {
                        style: {
                            marginBottom: 4 * !!s
                        },
                        children: (0, i.jsx)(v, {
                            edit: t,
                            rootStore: l
                        })
                    }) : void 0]
                })
            }

            function H(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e, l = r(230960).PE({
                    before: t.block_data.before.block_value,
                    after: t.block_data.after.block_value,
                    schema: t.block_schema
                }), s = r(808168).TW({
                    before: t.block_data.before.block_value,
                    after: t.block_data.after.block_value
                });
                return (0, i.jsxs)("div", {
                    children: [l.map((e, r, l) => (0, i.jsx)("div", {
                        children: (0, i.jsx)(a, {
                            rootStore: o,
                            edit: t,
                            property: e,
                            labeled: !0
                        })
                    }, e)), s.map((e, r, o) => {
                        let a = 0 === l.length && 0 === r,
                            s = r === o.length - 1;
                        return (0, i.jsx)("div", {
                            style: {
                                marginTop: a ? 6 : 10,
                                marginBottom: 6 * !s
                            },
                            children: (0, i.jsx)(d, {
                                formatProperty: e,
                                edit: t
                            })
                        }, e)
                    })]
                })
            }

            function W(e) {
                let {
                    edit: t,
                    rootStore: o
                } = e;
                switch (t.block_data.after.block_value.type) {
                    case r(955630).xd.text:
                        return (0, i.jsx)(G, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.header:
                        return (0, i.jsx)(k, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.subHeader:
                        return (0, i.jsx)(S, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.subSubHeader:
                        return (0, i.jsx)(I, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.toggle:
                        return (0, i.jsx)(C, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.bulletedList:
                        return (0, i.jsx)(w, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.numberedList:
                        return (0, i.jsx)(T, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.quote:
                        return (0, i.jsx)(B, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.factory:
                        return (0, i.jsx)(R, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.equation:
                        return (0, i.jsx)(V, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.toDo:
                        return (0, i.jsx)(D, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.code:
                        return (0, i.jsx)(N, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.bookmark:
                        return (0, i.jsx)(z, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.page:
                        return (0, i.jsx)(H, {
                            edit: t,
                            rootStore: o
                        });
                    case r(955630).xd.collectionView:
                    case r(955630).xd.collectionViewPage:
                        return null;
                    case r(955630).xd.drive:
                        return (0, i.jsx)(s, {
                            rootStore: o,
                            edit: t
                        });
                    case r(955630).xd.tableRow:
                        return (0, i.jsx)(p, {
                            rootStore: o,
                            edit: t
                        });
                    case r(955630).xd.image:
                        return (0, i.jsx)(E, {
                            rootStore: o,
                            edit: t
                        });
                    case r(955630).xd.callout:
                        return (0, i.jsx)(_, {
                            rootStore: o,
                            edit: t
                        });
                    case r(955630).xd.embed:
                    case r(955630).xd.framer:
                    case r(955630).xd.tweet:
                    case r(955630).xd.gist:
                    case r(955630).xd.maps:
                    case r(955630).xd.invision:
                    case r(955630).xd.video:
                    case r(955630).xd.audio:
                    case r(955630).xd.file:
                    case r(955630).xd.whimsical:
                    case r(955630).xd.miro:
                    case r(955630).xd.abstract:
                    case r(955630).xd.mixpanel:
                    case r(955630).xd.sketch:
                    case r(955630).xd.replit:
                    case r(955630).xd.excalidraw:
                    case r(955630).xd.hex:
                        return (0, i.jsx)(g, {
                            edit: t,
                            type: t.block_data.after.block_value.type,
                            rootStore: o
                        });
                    case r(955630).xd.externalObjectInstance:
                        return (0, i.jsx)(q, {
                            edit: t
                        });
                    default:
                        return null
                }
            }

            function O({
                edit: e,
                rootStore: t
            }) {
                return (0, i.jsx)(Z, {
                    rootStore: t,
                    edit: e,
                    prop: "title",
                    labeled: !1
                })
            }

            function F({
                edit: e,
                diffKey: t
            }) {
                let o = e.block_data[t].block_value,
                    l = (0, r(682985).K8)(() => r(993189).Bj6.fromBlock(o), [o]),
                    a = (0, r(109939).tz)(),
                    s = (0, r(682985).K8)(() => l.isType("external_object_instance") ? (0, r(638326).E)(a, l, r(993189).b4_.fromRecordMap(r(610463).A.getIntegrationsAsRecordMap())) : null, [l, a]);
                return (0, i.jsx)(i.Fragment, {
                    children: s
                })
            }

            function q({
                edit: e
            }) {
                return (0, i.jsxs)(r(806106).A, {
                    title: (0, i.jsx)(r(109939).sA, { ...r(518882).MC.editLabel
                    }),
                    theme: r(632079).Tj,
                    children: [(0, i.jsx)("div", {
                        style: r(376968).d.deleted,
                        children: (0, i.jsx)(F, {
                            edit: e,
                            diffKey: "before"
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)(F, {
                            edit: e,
                            diffKey: "after"
                        })
                    })]
                })
            }

            function G(e) {
                let {
                    edit: t,
                    rootStore: r
                } = e;
                return (0, i.jsx)(Y, {
                    edit: t,
                    rootStore: r
                })
            }

            function Y(e) {
                let {
                    edit: t,
                    rootStore: r
                } = e;
                return (0, i.jsx)(a, {
                    edit: t,
                    property: "title",
                    labeled: !1,
                    rootStore: r
                })
            }

            function Z({
                edit: e,
                prop: t,
                labeled: o,
                rootStore: a
            }) {
                let s = l(e)[t],
                    d = a.getRecordModel,
                    n = "block-changed" === e.type ? e.block_data.after.block_value : e.block_data.block_value,
                    c = (0, r(877634).De)({
                        block: r(993189).Bj6.fromBlock(n),
                        prop: t,
                        getRecordModel: d
                    });
                return s ? (0, i.jsx)(r(877634).vY, {
                    rootStore: a,
                    value: {
                        value: c,
                        spaceId: (0, r(226221).e)(n.space_id)
                    },
                    propertySchema: s,
                    labeled: o
                }, t) : null
            }
            let $ = {
                marginInlineEnd: 6,
                marginTop: 3
            };

            function J({
                blockValue: e,
                rootStore: t
            }) {
                return (0, i.jsx)("div", {
                    style: $,
                    children: (0, i.jsx)(r(877634).Nn, {
                        rootStore: t,
                        blockValue: e,
                        prop: "checked",
                        labeled: !1
                    })
                })
            }

            function Q(e, t) {
                return !r(381453).n4(e.block_data.before.block_value && e.block_data.before.block_value.properties && e.block_data.before.block_value.properties[t], e.block_data.after.block_value && e.block_data.after.block_value.properties && e.block_data.after.block_value.properties[t])
            }
            let X = {
                wordBreak: "break-word"
            };

            function ee({
                blockValue: e
            }) {
                let t = et(e);
                return (0, i.jsx)("span", {
                    style: X,
                    children: t
                })
            }

            function et(e) {
                let t = e && e.properties && e.properties.source;
                return r(247438).k4p(t)
            }

            function er(e) {
                let t = e && e.properties && e.properties.language;
                if (!t) return (0, i.jsx)(r(109939).sA, {
                    defaultMessage: "Code",
                    id: "edit.codeBlockChanged.label"
                });
                let o = r(561872).L3(t, r(511791).h5);
                return (0, i.jsx)(r(109939).sA, {
                    defaultMessage: "Code - {codeLanguage}",
                    values: {
                        codeLanguage: o
                    },
                    id: "edit.codeBlockWithLanguageChanged.label"
                })
            }
            let eo = {
                overflow: "visible"
            };

            function el(e) {
                let {
                    blockId: t,
                    property: o,
                    blockPreviewLocation: l,
                    highlightCurrentUser: a,
                    rootStore: s,
                    highlightCurrentUserStyle: d
                } = e, n = (0, r(533992).v3)(), c = e.rootStore.getRecordModel, {
                    blockModel: u,
                    associatedCollectionValue: p,
                    blockValue: x
                } = (0, r(682985).K8)(() => {
                    let e = c({
                        table: r(832375).evP,
                        id: t
                    });
                    return {
                        blockModel: e,
                        blockValue: null == e ? void 0 : e.__IM_SORRY__getValue(),
                        associatedCollectionValue: e ? (0, r(975908).zN)({
                            block: e,
                            getRecordModel: c
                        }) : null
                    }
                }, [t, c]), m = (0, r(682985).K8)(() => {
                    var e;
                    if (!x) return null;
                    let t = null == (e = x.properties) ? void 0 : e.title;
                    return { ...x,
                        properties: { ...x.properties,
                            title: a && t ? (0, r(605351).Eh)({
                                textValue: t,
                                highlightStyle: d ? ? "background_only",
                                currentUserId: n.currentUser.id,
                                getRecordModel: c
                            }) : t
                        }
                    }
                }, [x, n.currentUser.id, c, a, d]);
                if (!u || !x) return null;
                if (p) {
                    let e = r(993189).Bj6.fromCollection(p).getNormalizedSchema(c);
                    return (0, i.jsx)("div", {
                        style: r(376968).d.wrap,
                        children: (0, i.jsx)(r(877634).Nn, {
                            rootStore: s,
                            blockValue: x,
                            prop: o,
                            labeled: !0,
                            schema: e
                        })
                    })
                } {
                    if (!m) return null;
                    let e = x.type === r(955630).xd.tableRow && "notifications" === l;
                    return (0, i.jsx)("div", {
                        style: { ...r(376968).d.wrap,
                            ...e && eo
                        },
                        children: (0, i.jsx)(r(877634).Ay, {
                            blockValue: m,
                            rootStore: s,
                            blockPreviewLocation: l
                        })
                    })
                }
            }

            function ei({
                spaceId: e,
                args: t,
                rootStore: o
            }) {
                if (!t || !t.before && !t.after) return null;
                let l = t.before && t.before.description || [],
                    a = t.after && t.after.description || [];
                return (0, i.jsx)("div", {
                    style: r(376968).d.wrap,
                    children: (0, i.jsx)(r(877634).RD, {
                        labeled: !0,
                        name: (0, i.jsx)(r(109939).sA, {
                            defaultMessage: "Description",
                            id: "edit.descriptionPropertyChanged.label"
                        }),
                        icon: void 0,
                        type: "text",
                        children: (0, i.jsx)(r(179239).A, {
                            propertySchema: {
                                type: "text",
                                name: ""
                            },
                            beforeValue: {
                                value: l,
                                spaceId: e
                            },
                            afterValue: {
                                value: a,
                                spaceId: e
                            },
                            rootStore: o
                        })
                    })
                })
            }

            function ea({
                description: e,
                rootStore: t
            }) {
                return e ? (0, i.jsx)("div", {
                    style: r(376968).d.wrap,
                    children: (0, i.jsx)(r(877634).RD, {
                        labeled: !0,
                        name: (0, i.jsx)(r(109939).sA, {
                            defaultMessage: "Description",
                            id: "edit.descriptionPropertyCreated.label"
                        }),
                        type: "text",
                        icon: void 0,
                        children: (0, i.jsx)(r(179239).A, {
                            propertySchema: {
                                type: "text",
                                name: ""
                            },
                            beforeValue: {
                                value: [],
                                spaceId: e.spaceId
                            },
                            afterValue: e,
                            rootStore: t
                        })
                    })
                }) : null
            }

            function es({
                edit: e
            }) {
                let {
                    before: t,
                    after: o
                } = e.collection_property_data || {};
                if (!t || !o) return null;
                let l = r(561872).w3({
                    before: t,
                    after: o
                });
                if (!l) return null;
                let {
                    newOptions: a,
                    modifiedOptions: s,
                    removedOptions: d
                } = l;
                return [a, s, d].every(e => 0 === e.length) ? null : (0, i.jsx)("div", {
                    style: { ...r(376968).d.wrap,
                        ...ed.style7
                    },
                    children: (0, i.jsx)(en, {
                        after: o,
                        newOptions: a,
                        modifiedOptions: s,
                        removedOptions: d
                    })
                })
            }
            r(898992), r(823215);
            let ed = {
                style4: {
                    display: "inline-flex",
                    alignItems: "center"
                },
                style5: {
                    marginInlineStart: 4
                },
                style6: {
                    padding: "0px 8px"
                },
                style7: {
                    paddingTop: 6,
                    paddingBottom: 4
                }
            };

            function en({
                after: e,
                newOptions: t,
                modifiedOptions: o,
                removedOptions: l
            }) {
                let a = ({
                    option: e,
                    strikethrough: t = !1
                }) => {
                    let o = (0, r(632079).LD)(r(632079).Tj, null == e ? void 0 : e.color);
                    return (0, i.jsx)(r(316238).A, { ...o,
                        strikethrough: t,
                        children: e.value
                    })
                };
                return (0, i.jsx)(r(877634).RD, {
                    labeled: !0,
                    name: e.name,
                    icon: e.icon,
                    type: e.type,
                    children: (0, i.jsxs)(r(4458).VP, {
                        rowGap: 4,
                        children: [t.length > 0 ? (0, i.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            columnGap: 4,
                            inline: !0,
                            children: [(0, i.jsx)(r(109939).sA, {
                                defaultMessage: "Added",
                                id: "Edit.renderCollectionPropertyChangedDiff.addedProperty"
                            }), t.map(e => (0, i.jsx)("span", {
                                children: a({
                                    option: e
                                })
                            }, e.id))]
                        }) : void 0, l.length > 0 ? (0, i.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            columnGap: 4,
                            inline: !0,
                            children: [(0, i.jsx)(r(109939).sA, {
                                defaultMessage: "Removed",
                                id: "Edit.renderCollectionPropertyChangedDiff.removedProperty"
                            }), l.map(e => (0, i.jsx)("span", {
                                children: a({
                                    option: e,
                                    strikethrough: !0
                                })
                            }, e.id))]
                        }) : void 0, o.length > 0 ? (0, i.jsxs)(r(4458).fI, {
                            flex: 1,
                            children: [(0, i.jsx)("span", {
                                children: (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Edited",
                                    id: "Edit.renderCollectionPropertyChangedDiff.editedProperty"
                                })
                            }), (0, i.jsx)(r(4458).VP, {
                                children: o.map(e => (0, i.jsxs)("span", {
                                    style: ed.style4,
                                    children: [(0, i.jsx)("span", {
                                        style: ed.style5,
                                        children: a({
                                            option: e.before,
                                            strikethrough: !0
                                        })
                                    }), (0, i.jsx)("span", {
                                        style: ed.style6,
                                        children: (0, i.jsx)(r(16275).I, {
                                            icon: r(969278).arrowStraightRightSmallIcon,
                                            size: "xs",
                                            colorVariant: "secondary"
                                        })
                                    }), a({
                                        option: e.after
                                    })]
                                }, e.before.id))
                            })]
                        }) : void 0]
                    })
                })
            }

            function ec(e) {
                var t;
                let {
                    edit: o,
                    discussionLocation: l,
                    hideAuthorName: a,
                    lineClamp: s,
                    type: d,
                    rootStore: n,
                    highlightCurrentUser: c,
                    highlightCurrentUserStyle: u,
                    onReactionToggle: p
                } = e, x = e.rootStore.getRecordModel, m = (0, r(682985).K8)(() => x({
                    table: r(832375).$YH,
                    id: o.discussion_id,
                    spaceId: o.space_id
                }), [x, o.discussion_id, o.space_id]), h = null == (t = o.authors) ? void 0 : t[0], b = (0, r(682985).K8)(() => h ? x(h) : void 0, [h, x]);
                return m && b ? (0, i.jsx)("div", {
                    style: r(376968).d.wrap,
                    children: (0, i.jsx)(ek, {
                        discussionModel: m,
                        actorModel: b,
                        discussionLocation: l,
                        hideAuthorName: a,
                        lineClamp: s,
                        type: d,
                        getRecordModel: x,
                        rootStore: n,
                        highlightCurrentUser: c,
                        highlightCurrentUserStyle: u,
                        onReactionToggle: p
                    })
                }) : null
            }

            function eu(e) {
                let {
                    edit: t,
                    discussionLocation: o,
                    hideAuthorName: l,
                    lineClamp: a,
                    type: s,
                    rootStore: d,
                    highlightCurrentUser: n,
                    highlightCurrentUserStyle: c,
                    onReactionToggle: u
                } = e, p = e.rootStore.getRecordModel, {
                    latestComment: x,
                    commentWasChanged: m
                } = (0, r(682985).K8)(() => {
                    let e = p({
                            table: r(832375).SNf,
                            id: t.comment_id,
                            spaceId: t.space_id
                        }),
                        o = !!(t.comment_data && e && (0, r(643646).T)(r(993189).Bj6.fromValue(r(832375).SNf, t.comment_data), e));
                    return {
                        latestComment: e,
                        commentWasChanged: o
                    }
                }, [t.comment_data, t.comment_id, t.space_id, p]);
                return x ? (0, i.jsx)("div", {
                    style: r(376968).d.wrap,
                    children: (0, i.jsx)(eb, {
                        comment: x,
                        discussionLocation: o,
                        showEditedBadge: m,
                        hideAuthorName: l,
                        lineClamp: a,
                        type: s,
                        getRecordModel: p,
                        rootStore: d,
                        highlightCurrentUser: n,
                        highlightCurrentUserStyle: c,
                        onReactionToggle: u
                    })
                }) : null
            }

            function ep(e) {
                return (0, i.jsx)("div", {
                    style: r(376968).d.wrap,
                    children: (0, i.jsx)(ey, {
                        commentData: e.edit.comment_data,
                        rootStore: e.rootStore
                    })
                })
            }
            r(354520);
            let ex = {
                style0: { ...r(376968).d.wrap,
                    ...r(376968).d.deleted
                }
            };

            function em(e) {
                let {
                    edit: t,
                    discussionLocation: o,
                    type: l,
                    rootStore: a,
                    highlightCurrentUser: s,
                    highlightCurrentUserStyle: d,
                    onReactionToggle: n
                } = e, c = e.rootStore.getRecordModel, u = (0, r(682985).K8)(() => c({
                    table: r(832375).SNf,
                    id: t.comment_id,
                    spaceId: t.space_id
                }), [t.comment_id, t.space_id, c]), p = r(993189).Bj6.fromValue(r(832375).SNf, t.comment_data) || u;
                return p ? (0, i.jsx)("div", {
                    style: ex.style0,
                    children: (0, i.jsx)(eb, {
                        comment: p,
                        discussionLocation: o,
                        showEditedBadge: !1,
                        hideAuthorName: !1,
                        type: l,
                        getRecordModel: c,
                        rootStore: a,
                        highlightCurrentUser: s,
                        highlightCurrentUserStyle: d,
                        onReactionToggle: n
                    })
                }) : null
            }
            let eh = {
                editedBadge: {
                    color: r(632079).Tj.text.secondary,
                    paddingInlineStart: 4
                },
                style0: {
                    marginBottom: 2
                },
                style1: {
                    position: "relative"
                },
                style2: {
                    position: "absolute",
                    top: -3,
                    insetInlineEnd: 3
                },
                style3: {
                    marginTop: 8
                }
            };

            function eb(e) {
                let {
                    comment: t,
                    discussionLocation: l,
                    showEditedBadge: a,
                    hideAuthorName: s,
                    lineClamp: d,
                    getRecordModel: n
                } = e, [c, u] = (0, o.useState)(!1), p = (0, r(533992).v3)(), x = (0, r(109939).tz)(), m = (0, r(682985).K8)(() => {
                    let o, l = t.getCreatedByTable(),
                        a = t.getCreatedById();
                    if (!l || !a) return null;
                    let s = r(519219).j.createChildStore(e.rootStore, {
                            table: r(832375).SNf,
                            id: t.id,
                            spaceId: (0, r(226221).e)(e.rootStore.pointer.spaceId)
                        }),
                        d = r(868249).L.getUserVisibleReactions(s).length > 0,
                        c = n({
                            table: l,
                            id: a,
                            spaceId: t.space_id
                        });
                    return o = c && (0, r(197018).D3)(c) ? s.resolveAuthorDisplayName({
                        intl: x,
                        defaultDisplayName: c.getDisplayName(x)
                    }) : (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Unknown author",
                        id: "edit.unknownAuthor.label"
                    }), {
                        commentStore: s,
                        commentHasReactions: d,
                        fullName: o,
                        imagesEdits: t.getContent().map(o => {
                            let l = n({
                                    table: "block",
                                    id: o,
                                    spaceId: t.space_id
                                }),
                                a = null == l ? void 0 : l.__IM_SORRY__getValue();
                            return a && (0, i.jsx)(r(877634).Ay, {
                                blockValue: a,
                                rootStore: e.rootStore
                            }, o)
                        }).filter(r(722371).O9),
                        commentText: t.getText()
                    }
                }, [t, n, x, e.rootStore]);
                if (!m) return null;
                let {
                    commentStore: h,
                    commentHasReactions: b,
                    fullName: f,
                    imagesEdits: y,
                    commentText: j
                } = m;
                if ("comment-edit" !== e.type) return null;
                let g = j && (0, i.jsx)(r(917659).A, {
                        propertySchema: {
                            type: "text",
                            name: ""
                        },
                        value: {
                            spaceId: t.space_id,
                            value: e.highlightCurrentUser ? (0, r(605351).Eh)({
                                textValue: j,
                                highlightStyle: e.highlightCurrentUserStyle ? ? "background_only",
                                currentUserId: p.currentUser.id,
                                getRecordModel: n
                            }) : j
                        },
                        rootStore: e.rootStore
                    }),
                    v = !b;
                return (0, i.jsxs)("div", {
                    style: { ...v && eh.style1
                    },
                    onMouseEnter: () => u(!0),
                    onMouseLeave: () => u(!1),
                    children: [s ? void 0 : (0, i.jsx)("div", {
                        style: { ...r(376968).d.label,
                            ...eh.style0
                        },
                        children: f
                    }), (0, i.jsx)("span", {
                        style: { ...r(699422).RC,
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: d || 6
                        },
                        children: g
                    }), y, (0, i.jsx)("div", {
                        style: { ...v && eh.style2,
                            ...!v && eh.style3
                        },
                        children: c || b ? (0, i.jsx)(r(656915).fj, {
                            parentStore: h,
                            discussionLocation: l,
                            onReactionToggle: e.onReactionToggle
                        }) : void 0
                    }), a ? (0, i.jsx)("span", {
                        style: eh.editedBadge,
                        children: (0, i.jsx)(r(109939).sA, {
                            id: "edit.editedBadge",
                            defaultMessage: "(edited)"
                        })
                    }) : void 0]
                })
            }
            let ef = {
                marginBottom: 2
            };

            function ey(e) {
                let {
                    before: t,
                    after: l
                } = e.commentData, a = (0, r(109939).tz)(), s = (0, r(682985).K8)(() => {
                    if (l.created_by_table && l.created_by_id) {
                        let t = e.rootStore.getRecordModel({
                            table: l.created_by_table,
                            id: l.created_by_id,
                            spaceId: l.space_id
                        });
                        return t && (0, r(197018).D3)(t)
                    }
                }, [l.created_by_id, l.created_by_table, l.space_id, e.rootStore]), d = (0, r(682985).K8)(() => {
                    var a, s;
                    let d = null == (a = l.content) ? void 0 : a.filter(e => {
                            var r;
                            return !(null != (r = t.content) && r.includes(e))
                        }),
                        n = null == (s = t.content) ? void 0 : s.filter(e => {
                            var t;
                            return !(null != (t = l.content) && t.includes(e))
                        }),
                        c = e.rootStore.getRecordValue;
                    return (0, i.jsxs)(o.Fragment, {
                        children: [null == n ? void 0 : n.map(t => {
                            let o = c({
                                table: r(832375).evP,
                                id: t,
                                spaceId: l.space_id
                            });
                            return o && (0, i.jsx)(b, {
                                rootStore: e.rootStore,
                                blockValue: o
                            }, t)
                        }), null == d ? void 0 : d.map(t => {
                            let o = c({
                                table: r(832375).evP,
                                id: t,
                                spaceId: l.space_id
                            });
                            return o && (0, i.jsx)(r(877634).Ay, {
                                blockValue: o,
                                rootStore: e.rootStore
                            }, t)
                        })]
                    })
                }, [l.content, l.space_id, t.content, e.rootStore]);
                if (!l.created_by_table || !l.created_by_id) return null;
                let n = s ? (0, r(197018).lR)(a, s) : (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Unknown author",
                        id: "edit.unknownAuthorCommentDiff.label"
                    }),
                    c = t.text && l.text && (0, i.jsx)(r(179239).A, {
                        propertySchema: {
                            type: "text",
                            name: ""
                        },
                        beforeValue: {
                            value: t.text || [],
                            spaceId: t.space_id
                        },
                        afterValue: {
                            value: l.text || [],
                            spaceId: l.space_id
                        },
                        rootStore: e.rootStore
                    });
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)("div", {
                        style: { ...r(376968).d.label,
                            ...ef
                        },
                        children: n
                    }), c, d]
                })
            }
            let ej = {
                    marginBottom: 2
                },
                eg = {
                    position: "relative"
                },
                ev = {
                    position: "absolute",
                    top: -3,
                    insetInlineEnd: 3
                },
                e_ = {
                    marginTop: 8
                };

            function ek(e) {
                let {
                    discussionModel: t,
                    actorModel: l,
                    discussionLocation: a,
                    hideAuthorName: s,
                    lineClamp: d
                } = e, [n, c] = (0, o.useState)(!1), u = (0, r(109939).tz)(), {
                    commentHasReactions: p,
                    commentStore: x
                } = (0, r(682985).K8)(() => {
                    let o = t.getComments().length > 0 ? r(519219).j.createChildStore(e.rootStore, {
                            table: r(832375).SNf,
                            id: t.getComments()[0],
                            spaceId: (0, r(226221).e)(e.rootStore.pointer.spaceId)
                        }) : void 0,
                        l = !!o && r(868249).L.getUserVisibleReactions(o).length > 0;
                    return {
                        commentStore: o,
                        commentHasReactions: l
                    }
                }, [t, e.rootStore]), m = (0, r(682985).K8)(() => t.getType(), [t]), h = (0, r(682985).K8)(() => t.getPersistedContext() ? ? [], [t]), b = (0, r(682985).K8)(() => (0, r(197018).lR)(u, l.asActor), [l.asActor, u]);
                if ("suggestion" !== m || "comment-edit" !== e.type) return null;
                let f = (0, i.jsx)(r(917659).A, {
                        propertySchema: {
                            type: "text",
                            name: ""
                        },
                        value: {
                            spaceId: t.space_id,
                            value: (0, r(353711).l8)({
                                discussionContextData: h,
                                discussionType: "suggestion",
                                discussionId: t.id,
                                intl: u
                            })
                        },
                        rootStore: e.rootStore
                    }),
                    y = !p;
                return (0, i.jsxs)("div", {
                    style: { ...y && eg
                    },
                    onMouseEnter: () => c(!0),
                    onMouseLeave: () => c(!1),
                    children: [s ? void 0 : (0, i.jsx)("div", {
                        style: { ...r(376968).d.label,
                            ...ej
                        },
                        children: b
                    }), (0, i.jsx)("span", {
                        style: { ...r(699422).RC,
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: d || 6
                        },
                        children: f
                    }), (0, i.jsx)("div", {
                        style: { ...y && ev,
                            ...!y && e_
                        },
                        children: x && (n || p) ? (0, i.jsx)(r(656915).fj, {
                            parentStore: x,
                            discussionLocation: a,
                            onReactionToggle: e.onReactionToggle
                        }) : void 0
                    })]
                })
            }
            r(672577);
            let eS = {
                marginTop: 3,
                marginBottom: 3
            };

            function eI(e) {
                let {
                    edit: t,
                    getRecordModel: o
                } = e;
                return (0, i.jsxs)("div", {
                    style: { ...r(376968).d.permission,
                        ...r(376968).d.added,
                        ...eS
                    },
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(eT, {
                            getRecordModel: o,
                            edit: t
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)(eB, {
                            item: t.permission_data
                        })
                    })]
                })
            }

            function eC(e) {
                let {
                    edit: t,
                    getRecordModel: o
                } = e, l = "collection-property-permission-deleted" === t.type, a = (0, r(960253).I)(() => ({
                    containerStyle: { ...r(376968).d.permission,
                        ...r(376968).d.deleted,
                        ...l && {
                            textDecoration: void 0,
                            opacity: 1
                        }
                    },
                    roleStyle: l ? r(376968).d.deleted : {}
                }), [l]);
                return (0, i.jsxs)("div", {
                    style: a.containerStyle,
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(eT, {
                            getRecordModel: o,
                            edit: t
                        })
                    }), (0, i.jsx)("div", {
                        style: a.roleStyle,
                        children: (0, i.jsx)(eB, {
                            item: t.permission_data
                        })
                    })]
                })
            }
            let eA = {
                padding: "0px 8px"
            };

            function ew(e) {
                let {
                    edit: t,
                    getRecordModel: o
                } = e;
                return (0, i.jsxs)("div", {
                    style: r(376968).d.permission,
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(eT, {
                            getRecordModel: o,
                            edit: t
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            style: r(376968).d.diffWrap,
                            children: [(0, i.jsx)(eB, {
                                item: t.permission_data.before
                            }), (0, i.jsx)("div", {
                                style: eA,
                                children: (0, i.jsx)(r(16275).I, {
                                    icon: r(988824).arrowStraightRightIcon
                                })
                            }), (0, i.jsx)(eB, {
                                item: t.permission_data.after
                            })]
                        })
                    })]
                })
            }

            function eM(e) {
                var t;
                let {
                    edit: r,
                    getRecordModel: l
                } = e, a = ((null == (t = r.permission_data) ? void 0 : t.calculated_changes) || []).map(([e, t], a) => {
                    let s = {
                        timestamp: r.timestamp,
                        space_id: r.space_id,
                        type: "permission-changed",
                        permission_data: {
                            before: e,
                            after: t
                        }
                    };
                    return (0, i.jsx)(o.Fragment, {
                        children: (0, i.jsx)(ew, {
                            getRecordModel: l,
                            edit: s
                        })
                    }, `inheritance-change-${a}`)
                });
                return (0, i.jsx)(i.Fragment, {
                    children: a
                })
            }

            function eT(e) {
                let {
                    edit: t,
                    getRecordModel: o
                } = e, l = (0, r(109939).tz)(), a = (0, r(682985).K8)(() => {
                    if (t.collection_id) {
                        var e;
                        return null == (e = o({
                            table: r(832375).VlP,
                            id: t.collection_id
                        })) ? void 0 : e.getNormalizedSchema(o)
                    }
                }, [t.collection_id, o]), s = (0, r(960253).e)(), d = "permission-changed" === t.type || "collection-property-permission-updated" === t.type ? t.permission_data.after : t.permission_data;
                return (0, r(682985).K8)(() => {
                    if ((0, r(642157).B2)(d)) {
                        let e = o({
                                table: r(832375).oo9,
                                id: d.user_id
                            }),
                            t = (0, r(413818).c6)(l, e);
                        return (0, i.jsx)("div", {
                            style: r(376968).d.permissionTypeWrap,
                            children: (0, i.jsx)("div", {
                                style: r(376968).d.userHeader,
                                children: t
                            })
                        })
                    }
                    if ((0, r(642157).Lg)(d)) {
                        let e = o({
                                table: r(832375).NXh,
                                id: t.space_id
                            }),
                            l = e ? e.name : (0, i.jsx)(r(109939).sA, {
                                defaultMessage: "Unknown",
                                id: "edit.unknownSpacePermissionTarget.label"
                            }),
                            a = (0, r(642157).Ni)(d) ? (0, i.jsx)(r(109939).sA, {
                                id: "linkSharingPill.visibilityTitle.anyoneWithLink",
                                defaultMessage: "Anyone with link at {spaceName}",
                                values: {
                                    spaceName: l
                                }
                            }) : (0, i.jsx)(r(109939).sA, {
                                id: "linkSharingPill.visibilityTitle.everyoneInWorkspace",
                                defaultMessage: "Everyone at {spaceName}",
                                values: {
                                    spaceName: l
                                }
                            });
                        return (0, i.jsx)("div", {
                            style: r(376968).d.permissionTypeWrap,
                            children: (0, i.jsx)("div", {
                                style: r(376968).d.userHeader,
                                children: a
                            })
                        })
                    }
                    if ((0, r(642157).FP)(d)) return (0, i.jsx)("div", {
                        style: r(376968).d.permissionTypeWrap,
                        children: (0, i.jsx)("div", {
                            style: r(376968).d.userHeader,
                            children: (0, i.jsx)(r(109939).sA, {
                                defaultMessage: "Published link",
                                id: "edit.publishToWebPermissionTarget.label"
                            })
                        })
                    });
                    if ((0, r(642157).Ds)(d)) {
                        var e;
                        let l = (null == (e = o({
                            table: r(832375).naB,
                            id: (0, r(659341).gK)({
                                spacePermissionGroupId: d.group_id,
                                spaceId: t.space_id
                            }),
                            spaceId: t.space_id
                        })) ? void 0 : e.getName()) || (0, i.jsx)(r(109939).sA, {
                            defaultMessage: "Deleted group",
                            id: "edit.deletedPermissionGroup.label"
                        });
                        return (0, i.jsx)("div", {
                            style: r(376968).d.permissionTypeWrap,
                            children: (0, i.jsx)("div", {
                                style: r(376968).d.userHeader,
                                children: l
                            })
                        })
                    }
                    if ((0, r(642157).P3)(d)) {
                        let e = o({
                                table: r(832375).GPl,
                                id: d.bot_id,
                                spaceId: t.space_id
                            }),
                            l = (0, r(697006).Hg)(e);
                        return (0, i.jsx)("div", {
                            style: r(376968).d.permissionTypeWrap,
                            children: (0, i.jsx)("div", {
                                style: r(376968).d.userHeader,
                                children: l
                            })
                        })
                    } else if ((0, r(642157).gl)(d)) {
                        let e = o({
                                table: r(832375).yKj,
                                id: d.team_id,
                                spaceId: t.space_id
                            }),
                            l = (0, i.jsx)(r(109939).sA, {
                                defaultMessage: "Members of an unknown teamspace",
                                id: "edit.teamMemberPermissionChanged.unknownTeam"
                            });
                        return null != e && e.name && (l = (0, i.jsx)(r(109939).sA, {
                            defaultMessage: "Members of {teamName}",
                            id: "edit.teamMemberPermissionChanged.knownTeam",
                            values: {
                                teamName: e.name
                            }
                        })), (0, i.jsx)("div", {
                            style: r(376968).d.permissionTypeWrap,
                            children: (0, i.jsx)("div", {
                                style: r(376968).d.userHeader,
                                children: l
                            })
                        })
                    } else if ((0, r(642157).nl)(d)) {
                        let e = o({
                                table: r(832375).yKj,
                                id: d.team_id,
                                spaceId: t.space_id
                            }),
                            l = (0, i.jsx)(r(109939).sA, {
                                defaultMessage: "Owners of an unknown teamspace",
                                id: "edit.teamOwnerPermissionChanged.unknownTeam"
                            });
                        return null != e && e.name && (l = (0, i.jsx)(r(109939).sA, {
                            defaultMessage: "Owners of {teamName}",
                            id: "edit.teamOwnerPermissionChanged.knownTeam",
                            values: {
                                teamName: e.name
                            }
                        })), (0, i.jsx)("div", {
                            style: r(376968).d.permissionTypeWrap,
                            children: (0, i.jsx)("div", {
                                style: r(376968).d.userHeader,
                                children: l
                            })
                        })
                    } else if ((0, r(642157).sk)(d)) return (0, i.jsx)("div", {
                        style: r(376968).d.permissionTypeWrap,
                        children: (0, i.jsx)("div", {
                            style: r(376968).d.userHeader,
                            children: (0, i.jsx)(r(109939).sA, {
                                id: "edit.trustedDomainPermissionTarget.label",
                                defaultMessage: "Users with email domain access"
                            })
                        })
                    });
                    else if ((0, r(642157).tb)(d) && a) {
                        let e = (0, r(944209).o7)({
                                collectionSchema: a,
                                permissionItem: d
                            }),
                            t = function(e) {
                                let {
                                    permissionItem: t,
                                    collectionSchema: o,
                                    ruleErrorState: l,
                                    intl: a,
                                    theme: s,
                                    themeMode: d
                                } = e, {
                                    propertySchema: n,
                                    propertyDisplayName: c
                                } = function(e) {
                                    let {
                                        permissionItem: t,
                                        collectionSchema: o,
                                        ruleErrorState: l,
                                        intl: i
                                    } = e, a = t.property_info.type;
                                    switch (a) {
                                        case "page_creator":
                                            {
                                                let e = Object.values(o).find(e => (null == e ? void 0 : e.type) === "created_by"),
                                                    t = (null == e ? void 0 : e.name) ? ? i.formatMessage(r(944209).DZ.defaultCreatedByRuleDisplayName);
                                                return {
                                                    propertySchema: e,
                                                    propertyDisplayName: t
                                                }
                                            }
                                        case "person":
                                            {
                                                let e = o[t.property_info.property_id];
                                                if ("property_not_found" === l) return {
                                                    propertySchema: void 0,
                                                    propertyDisplayName: i.formatMessage({
                                                        defaultMessage: "Missing property",
                                                        id: "propertyPermissionItem.person.missingProperty.label"
                                                    })
                                                };
                                                return {
                                                    propertySchema: e,
                                                    propertyDisplayName: null == e ? void 0 : e.name
                                                }
                                            }
                                        default:
                                            (0, r(722371).HB)(a)
                                    }
                                }({
                                    permissionItem: t,
                                    collectionSchema: o,
                                    ruleErrorState: l,
                                    intl: a
                                }), u = n ? (0, i.jsx)(r(221535).zB, {
                                    icon: n.icon,
                                    type: n.type,
                                    size: 12,
                                    theme: s,
                                    themeMode: d
                                }) : void 0, p = (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Anyone in {propertyIcon} {propertyName}",
                                    id: "propertyPermissions.personProperty.activityLabel",
                                    values: {
                                        propertyName: c ? ? a.formatMessage(r(944209).DZ.defaultUntitledPropertyDisplayName),
                                        propertyIcon: u
                                    }
                                });
                                return (0, i.jsx)("span", {
                                    style: eR,
                                    children: p
                                })
                            }({
                                permissionItem: d,
                                collectionSchema: a,
                                ruleErrorState: e,
                                intl: l,
                                theme: r(632079).Tj,
                                themeMode: s
                            });
                        return (0, i.jsx)("div", {
                            style: r(376968).d.permissionTypeWrap,
                            children: (0, i.jsx)("div", {
                                style: r(376968).d.userHeader,
                                children: t
                            })
                        })
                    }
                    return null
                }, [t.space_id, o, l, d, a, s])
            }

            function eB({
                item: e
            }) {
                let t = (0, r(109939).tz)(),
                    o = e.role ? ? "none",
                    l = (0, r(579825).an)(o, void 0);
                return l ? (0, i.jsx)("div", {
                    style: r(376968).d.role,
                    children: t.formatMessage(l)
                }) : null
            }
            let eR = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4
                },
                eV = function(e) {
                    var t, o;
                    let l = e.rootStore.getRecordModel;
                    if ("comment-edit" === e.type) {
                        let {
                            edit: t,
                            discussionLocation: o,
                            hideAuthorName: l,
                            lineClamp: a,
                            type: s,
                            highlightCurrentUser: d,
                            highlightCurrentUserStyle: n,
                            onReactionToggle: c,
                            rootStore: u
                        } = e;
                        switch (t.type) {
                            case "comment-created":
                                return (0, i.jsx)(eu, {
                                    edit: t,
                                    discussionLocation: o,
                                    hideAuthorName: l,
                                    lineClamp: a,
                                    type: s,
                                    rootStore: u,
                                    highlightCurrentUser: d,
                                    highlightCurrentUserStyle: n,
                                    onReactionToggle: c
                                });
                            case "comment-changed":
                                return (0, i.jsx)(ep, {
                                    edit: t,
                                    rootStore: u
                                });
                            case "comment-deleted":
                                return (0, i.jsx)(em, {
                                    edit: t,
                                    discussionLocation: o,
                                    type: s,
                                    rootStore: u,
                                    highlightCurrentUser: d,
                                    highlightCurrentUserStyle: n,
                                    onReactionToggle: c
                                });
                            case "suggestion-created":
                                return (0, i.jsx)(ec, {
                                    edit: t,
                                    discussionLocation: o,
                                    type: s,
                                    lineClamp: a,
                                    rootStore: u,
                                    highlightCurrentUser: d,
                                    highlightCurrentUserStyle: n,
                                    onReactionToggle: c,
                                    hideAuthorName: l
                                });
                            default:
                                (0, r(722371).HB)(t)
                        }
                    }
                    let {
                        edit: a
                    } = e;
                    switch (a.type) {
                        case "block-created":
                            return (0, i.jsx)(j, {
                                rootStore: e.rootStore,
                                blockValue: a.block_data.block_value
                            });
                        case "block-deleted":
                            return (0, i.jsx)(b, {
                                rootStore: e.rootStore,
                                blockValue: a.block_data.block_value
                            });
                        case "block-changed":
                            return (0, i.jsx)(f, {
                                edit: a,
                                rootStore: e.rootStore
                            });
                        case "block-property-changed":
                            return (0, i.jsx)(r(275680).A, {
                                rootStore: e.rootStore,
                                edit: a
                            });
                        case "collection-property-changed":
                            return (0, i.jsx)(es, {
                                edit: a
                            });
                        case "collection-changed":
                            return (0, i.jsx)(ei, {
                                rootStore: e.rootStore,
                                spaceId: a.space_id,
                                args: a.collection_data
                            });
                        case "collection-created":
                            return (0, i.jsx)(ea, {
                                rootStore: e.rootStore,
                                description: (null == (t = a.collection_data) ? void 0 : t.description) && {
                                    value: null == (o = a.collection_data) ? void 0 : o.description,
                                    spaceId: a.space_id
                                }
                            });
                        case "mention-created":
                        case "permission-group-mention-created":
                        case "team-mention-created":
                            return (0, i.jsx)(el, {
                                blockId: a.mentioned_block_id,
                                property: a.mentioned_property,
                                blockPreviewLocation: "notifications",
                                highlightCurrentUser: e.highlightCurrentUser,
                                highlightCurrentUserStyle: e.highlightCurrentUserStyle,
                                rootStore: e.rootStore
                            });
                        case "permission-created":
                        case "collection-property-permission-created":
                            return (0, i.jsx)(eI, {
                                getRecordModel: l,
                                edit: a
                            });
                        case "permission-changed":
                        case "collection-property-permission-updated":
                            return (0, i.jsx)(ew, {
                                getRecordModel: l,
                                edit: a
                            });
                        case "permission-deleted":
                        case "collection-property-permission-deleted":
                            return (0, i.jsx)(eC, {
                                getRecordModel: l,
                                edit: a
                            });
                        case "permission-restriction-created":
                        case "permission-restriction-deleted":
                            return (0, i.jsx)(eM, {
                                getRecordModel: l,
                                edit: a
                            });
                        case "reminder-created":
                            return (0, i.jsx)(el, {
                                blockId: a.reminder_block_id,
                                property: a.reminder_property,
                                highlightCurrentUser: e.highlightCurrentUser,
                                highlightCurrentUserStyle: e.highlightCurrentUserStyle,
                                rootStore: e.rootStore
                            });
                        default:
                            return null
                    }
                }
        }
    }
]);