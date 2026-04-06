"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [10471], {
        710471: (e, t, r) => {
            r.d(t, {
                i: () => ee
            });
            var l = r(296540),
                n = () => r(843933);
            r(898992), r(354520), r(672577), r(581454);
            var a = r(474848);

            function i({
                flushRight: e,
                hasShadow: t,
                style: l,
                children: n
            }) {
                let o = (0, r(960253).I)(() => {
                    let n = (null == l ? void 0 : l.borderRadius) ? ? 4;
                    return {
                        card: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            marginBottom: t ? 5 : 4,
                            padding: 6,
                            paddingInlineEnd: 6 * !e,
                            borderRadius: n,
                            borderStartEndRadius: e ? 0 : n,
                            borderEndEndRadius: e ? 0 : n,
                            ...t ? {
                                boxShadow: r(632079).Tj.shadow.outline.sm
                            } : {
                                border: `1px solid ${r(632079).Tj.border.secondary}`,
                                borderInlineEndWidth: +!e
                            },
                            ...l
                        }
                    }
                }, [e, t, l]);
                return (0, a.jsx)("div", {
                    style: o.card,
                    children: n
                })
            }

            function o({
                style: e
            }) {
                let t = (0, r(960253).I)(() => ({
                    textSkeleton: {
                        width: "60%",
                        height: 10,
                        backgroundColor: r(632079).Tj.gray.background.secondaryTranslucent,
                        borderRadius: 6,
                        ...e
                    }
                }), [e]);
                return (0, a.jsx)("div", {
                    style: t.textSkeleton
                })
            }
            let s = {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 6
            };

            function d(e) {
                return (0, a.jsx)("div", {
                    children: "status" === e.type ? (0, a.jsx)(r(593100).q, {
                        value: e.value,
                        color: e.color,
                        format: r(696654).NY.ExtremeSmall,
                        showRemoveButton: !1,
                        isSingle: !0,
                        groupColor: e.color
                    }) : (0, a.jsx)(r(593100).O, {
                        format: r(696654).NY.ExtremeSmall,
                        value: e.value,
                        color: e.color,
                        showRemoveButton: !1,
                        isSingle: !0
                    })
                })
            }
            let c = {
                height: "30px"
            };

            function u({
                index: e
            }) {
                let t = (0, l.useCallback)(e => ({
                    height: 5,
                    ...e && {
                        width: e
                    }
                }), []);
                return 0 === e ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(i, {
                        children: (0, a.jsx)(o, {
                            style: t()
                        })
                    }), (0, a.jsx)(i, {
                        style: c,
                        children: (0, a.jsx)(o, {
                            style: t("80%")
                        })
                    })]
                }) : 1 === e ? (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)(i, {
                        children: [(0, a.jsx)(o, {
                            style: t("100%")
                        }), (0, a.jsx)(o, {
                            style: t()
                        })]
                    }), (0, a.jsx)(i, {
                        children: (0, a.jsx)(o, {
                            style: t()
                        })
                    })]
                }) : (0, a.jsx)("div", {
                    children: (0, a.jsx)(i, {
                        children: (0, a.jsx)(o, {
                            style: t()
                        })
                    })
                })
            }
            let p = {
                    type: "select",
                    columns: []
                },
                h = (0, r(109939).YK)({
                    sunday: {
                        id: "workflowTemplatesOnboarding.calendarThumbnail.sunday",
                        defaultMessage: "Sun"
                    },
                    monday: {
                        id: "workflowTemplatesOnboarding.calendarThumbnail.monday",
                        defaultMessage: "Mon"
                    },
                    tuesday: {
                        id: "workflowTemplatesOnboarding.calendarThumbnail.tuesday",
                        defaultMessage: "Tue"
                    }
                }),
                x = [{
                    label: r(962299).A.formatMessage(h.sunday)
                }, {
                    label: r(962299).A.formatMessage(h.monday)
                }, {
                    label: r(962299).A.formatMessage(h.tuesday)
                }, {
                    label: ""
                }],
                m = {
                    container: {
                        paddingTop: 8,
                        paddingInlineStart: 4,
                        display: "grid",
                        gridTemplateColumns: `repeat(${x.length-1}, 1fr) 0.33fr`
                    },
                    columnTitle: {
                        textAlign: "center",
                        fontSize: 9,
                        lineHeight: 1,
                        color: r(632079).Tj.text.secondary,
                        paddingBottom: 3
                    }
                };

            function y(e) {
                let {
                    index: t,
                    flushRight: l
                } = e, n = (0, r(960253).I)(() => ({
                    container: {
                        padding: 6,
                        paddingInlineEnd: 6 * !l,
                        border: `1px solid ${r(632079).Tj.border.secondary}`,
                        borderInlineEnd: 0,
                        borderBottom: 0,
                        borderStartStartRadius: 3 * (0 === t)
                    }
                }), [t, l]);
                return (0, a.jsx)("div", {
                    style: n.container,
                    children: (0, a.jsx)(g, { ...e
                    })
                })
            }
            let f = {
                avatarWrapper: {
                    width: 12,
                    height: 12,
                    flexShrink: 0,
                    borderRadius: "100%",
                    border: `0.5px solid ${r(632079).Tj.border.secondary}`,
                    overflow: "hidden"
                },
                avatar: {
                    width: "100%",
                    height: "100%"
                }
            };

            function g(e) {
                let {
                    index: t,
                    flushRight: n
                } = e, s = (0, r(960253).I)(() => ({
                    skeleton: {
                        width: "100%",
                        height: 5,
                        borderRadius: 20,
                        borderStartEndRadius: 20 * !n,
                        borderEndEndRadius: 20 * !n
                    }
                }), [n]), d = (0, l.useMemo)(() => ({
                    hasShadow: !0,
                    style: {
                        borderRadius: 3
                    },
                    ...e
                }), [e]);
                return t % 3 == 0 ? (0, a.jsx)(i, { ...d,
                    children: (0, a.jsx)(o, {
                        style: s.skeleton
                    })
                }) : t % 2 == 0 ? (0, a.jsxs)(i, { ...d,
                    children: [(0, a.jsx)(o, {
                        style: s.skeleton
                    }), (0, a.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        children: [(0, a.jsx)("div", {
                            style: f.avatarWrapper,
                            children: (0, a.jsx)(r(989059).A, {
                                src: r(896221).A.images.workflowTemplates.previewAvatar1Png,
                                style: f.avatar
                            })
                        }), (0, a.jsx)(o, {
                            style: s.skeleton
                        })]
                    })]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i, { ...d,
                        children: (0, a.jsx)(o, {
                            style: s.skeleton
                        })
                    }), (0, a.jsx)(i, { ...d,
                        children: (0, a.jsx)(o, {
                            style: s.skeleton
                        })
                    })]
                })
            }
            let v = {
                    display: "flex",
                    gap: 6,
                    overflow: "hidden",
                    height: "100%",
                    width: "fit-content",
                    marginTop: 8,
                    marginBottom: 6,
                    marginInlineStart: 4
                },
                j = {
                    overflow: "hidden",
                    flexGrow: 1,
                    flexShrink: 1,
                    borderStartStartRadius: 4,
                    borderStartEndRadius: 4
                };

            function b({
                type: e
            }) {
                let t, l = (0, r(960253).e)(),
                    n = (0, r(960253).I)(() => {
                        let e = r(632079).Tj.gray.background.primaryTranslucent;
                        return {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "stretch",
                                width: 84,
                                height: 49.4,
                                backgroundColor: "light" === l ? r(632079).Tj.background.secondary : r(632079).Tj.boardItemDefaultBackground,
                                borderRadius: 4,
                                overflow: "hidden",
                                border: `0.7px solid ${r(632079).Tj.border.secondary}`
                            },
                            caption: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                height: 16.7,
                                flexShrink: 0,
                                backgroundColor: "light" === l ? r(632079).Tj.white : r(632079).Tj.background.secondaryTranslucent,
                                borderTop: `0.7px solid ${r(632079).Tj.border.secondary}`,
                                paddingInlineStart: 6
                            },
                            captionText: {
                                backgroundColor: e,
                                borderRadius: 20,
                                width: 35,
                                height: 5
                            },
                            shapeFill: {
                                fill: e,
                                backgroundColor: e
                            }
                        }
                    }, [l]);
                return "circle" === e ? t = (0, a.jsx)(S, {
                    fillStyle: n.shapeFill
                }) : "rectangle" === e ? t = (0, a.jsx)(C, {
                    fillStyle: n.shapeFill
                }) : "triangle" === e && (t = (0, a.jsx)(I, {
                    fillStyle: n.shapeFill
                })), (0, a.jsxs)("div", {
                    style: n.container,
                    children: [(0, a.jsx)("div", {
                        style: j,
                        children: t
                    }), (0, a.jsx)("div", {
                        style: n.caption,
                        children: (0, a.jsx)("div", {
                            style: n.captionText
                        })
                    })]
                })
            }
            let w = {
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100%"
            };

            function S({
                fillStyle: e
            }) {
                let t = (0, r(960253).I)(() => ({
                    circle: {
                        position: "absolute",
                        insetInlineStart: "calc(50% - 29px)",
                        top: "30%",
                        width: 58,
                        height: 58,
                        borderRadius: "100%",
                        backgroundColor: e.backgroundColor
                    }
                }), [e]);
                return (0, a.jsx)("div", {
                    style: w,
                    children: (0, a.jsx)("div", {
                        style: t.circle
                    })
                })
            }
            let T = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                width: "100%",
                height: "100%"
            };

            function I({
                fillStyle: e
            }) {
                let t = (0, r(960253).I)(() => ({
                    pyramidsContainer: {
                        fill: e.fill
                    }
                }), [e]);
                return (0, a.jsx)("div", {
                    style: T,
                    children: (0, a.jsx)("div", {
                        style: t.pyramidsContainer,
                        children: (0, a.jsxs)("svg", {
                            viewBox: "0 0 84 23",
                            children: [(0, a.jsx)("defs", {
                                children: (0, a.jsxs)("clipPath", {
                                    id: "shape",
                                    children: [(0, a.jsx)("rect", {
                                        x: "-25.4688",
                                        y: "57.5312",
                                        width: "71.4619",
                                        height: "71.4619",
                                        transform: "rotate(-45 -25.4688 57.5312)"
                                    }), (0, a.jsx)("rect", {
                                        x: "3.53125",
                                        y: "50.5312",
                                        width: "71.4619",
                                        height: "71.4619",
                                        transform: "rotate(-45 3.53125 50.5312)"
                                    })]
                                })
                            }), (0, a.jsx)("g", {
                                clipPath: "url(#shape)",
                                children: (0, a.jsx)("rect", {
                                    width: "100%",
                                    height: "100%"
                                })
                            })]
                        })
                    })
                })
            }
            let k = {
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100%"
            };

            function C({
                fillStyle: e
            }) {
                let t = (0, r(960253).I)(() => ({
                    rectangle: {
                        position: "absolute",
                        top: 10,
                        insetInlineEnd: 10,
                        insetInlineStart: 10,
                        bottom: 0,
                        borderStartStartRadius: 1,
                        borderStartEndRadius: 1,
                        backgroundColor: e.backgroundColor
                    }
                }), [e]);
                return (0, a.jsx)("div", {
                    style: k,
                    children: (0, a.jsx)("div", {
                        style: t.rectangle
                    })
                })
            }
            r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            let R = {
                templateId: "name",
                type: "property",
                value: {
                    name: "Name",
                    type: "title"
                }
            };

            function _({
                userCustomizations: e,
                collectionViewTemplate: t
            }) {
                let l = (0, r(932292).getPropertyTemplates)(e.featureTemplateSelections.filter(e => e.selected).map(e => e.template)),
                    n = function({
                        collectionViewTemplate: e
                    }) {
                        let t = A(e),
                            r = E(e),
                            l = new Set;
                        for (let e of r) {
                            let r = t[e.property];
                            e.visible && l.add(r)
                        }
                        return l
                    }({
                        collectionViewTemplate: t
                    });
                return [l.find(r(8148).eP) ? ? R, ...l.filter(r(158100).QT).filter(e => !(0, r(8148).eP)(e)).filter(e => n.has(e.templateId))]
            }

            function E(e) {
                var t, l, n, a, i, o;
                switch (e.value.type) {
                    case "table":
                        return (null == (t = e.value.format) ? void 0 : t.table_properties) ? ? [];
                    case "list":
                        return (null == (l = e.value.format) ? void 0 : l.list_properties) ? ? [];
                    case "gallery":
                        return (null == (n = e.value.format) ? void 0 : n.gallery_properties) ? ? [];
                    case "board":
                        return (null == (a = e.value.format) ? void 0 : a.board_properties) ? ? [];
                    case "calendar":
                        return (null == (i = e.value.format) ? void 0 : i.calendar_properties) ? ? [];
                    case "timeline":
                        return (null == (o = e.value.format) ? void 0 : o.timeline_properties) ? ? [];
                    case "page":
                    case "chart":
                    case "form_editor":
                    case "feed":
                    case "map":
                    case "chat":
                    case "custom":
                    case "dashboard":
                    case "teamspace_directory":
                    case "library_external_pages":
                    case "agents":
                        return [];
                    default:
                        (0, r(722371).HB)(e.value.type)
                }
            }

            function A({
                dependencyMap: e
            }) {
                let t = {};
                for (let [l, a] of (0, r(722371).WP)(e ? ? {})) {
                    let e = (0, n().lS)(l);
                    e && (t[e] = a)
                }
                return t
            }
            let $ = [!0, !1, !1];

            function B({
                rowIndex: e,
                style: t
            }) {
                return (0, a.jsx)(r(349050).S, {
                    checked: $[e] ? ? !1,
                    disabled: !0,
                    size: 10,
                    style: t
                })
            }

            function M(e) {
                let t = 60 + ((e + 3) * 2 + 43) % (e % 5 + 2) * 5;
                return {
                    width: `${t}%`,
                    maxWidth: "80%",
                    height: 5
                }
            }
            let W = [30, 45, 35, 40],
                P = [{
                    avatarSrc: r(896221).A.images.workflowTemplates.previewAvatar1Png,
                    name: ""
                }, {
                    avatarSrc: r(896221).A.images.workflowTemplates.previewAvatar2Png,
                    name: ""
                }, {
                    avatarSrc: r(896221).A.images.workflowTemplates.previewAvatar3Png,
                    name: ""
                }],
                O = {
                    avatarWrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 12,
                        height: 12,
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        overflow: "hidden",
                        border: `1px solid ${r(632079).Tj.border.secondary}`,
                        flexShrink: 0
                    },
                    avatarImage: {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%"
                    }
                };

            function z(e) {
                let t = (0, r(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: 4,
                            ...e.containerStyle
                        }
                    }), [e.containerStyle]),
                    l = P[e.index % P.length];
                return (0, a.jsxs)("div", {
                    style: t.container,
                    children: [(0, a.jsx)("div", {
                        style: O.avatarWrapper,
                        children: (0, a.jsx)(r(989059).A, {
                            src: l.avatarSrc,
                            style: O.avatarImage
                        })
                    }), e.showNameSkeleton ? (0, a.jsx)(o, {
                        style: M(e.index)
                    }) : null]
                })
            }

            function V({
                rowIndex: e,
                propertySchema: t
            }) {
                let l, n = null != (l = t.options) && l.length ? Array.from({
                        length: 3
                    }).map((e, t) => {
                        let r = t % l.length;
                        return l[r]
                    }) : [],
                    i = n[e % n.length];
                return i ? "status" === t.type ? (0, a.jsx)(r(593100).q, {
                    value: i.value,
                    color: i.color,
                    format: r(696654).NY.ExtremeSmall,
                    showRemoveButton: !1,
                    isSingle: !0,
                    groupColor: i.color
                }) : (0, a.jsx)(r(593100).O, {
                    format: r(696654).NY.ExtremeSmall,
                    value: i.value,
                    color: i.color,
                    showRemoveButton: !1,
                    isSingle: !0
                }) : null
            }
            let N = Object.freeze(new Set(["title", "select", "person", "multi_select", "status", "checkbox"]));

            function D(e) {
                return (0, r(722371).y$)(N, e.value.type)
            }
            let K = {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                    overflow: "hidden",
                    height: 18,
                    width: "100%",
                    paddingInlineEnd: 8,
                    paddingInlineStart: 4
                },
                F = {
                    flexShrink: 1
                },
                Y = {
                    justifyContent: "flex-end",
                    flexShrink: 0
                },
                q = {
                    display: "flex",
                    gap: 4,
                    height: 18,
                    alignItems: "center",
                    overflow: "hidden"
                };

            function G({
                propertyTemplates: e,
                rowIndex: t,
                containerStyle: r
            }) {
                return (0, a.jsx)("div", {
                    style: { ...q,
                        ...r
                    },
                    children: e.map(e => (0, a.jsx)(Q, {
                        property: e,
                        index: t
                    }, e.templateId))
                })
            }
            let H = [117, 136, 128];

            function Q({
                property: e,
                index: t
            }) {
                let l = (0, r(960253).I)(() => {
                    let e = {
                        display: "flex",
                        overflow: "hidden"
                    };
                    return {
                        textSkeleton: { ...e,
                            height: 5,
                            width: H[t] ? ? H[0],
                            minWidth: 25,
                            maxWidth: "80%"
                        },
                        checkbox: { ...e,
                            flexShrink: 0
                        },
                        person: { ...e,
                            width: "unset",
                            flexShrink: 0
                        }
                    }
                }, [t]);
                switch (e.value.type) {
                    case "title":
                        return (0, a.jsx)(o, {
                            style: l.textSkeleton
                        });
                    case "checkbox":
                        return (0, a.jsx)(B, {
                            rowIndex: t,
                            style: l.checkbox
                        });
                    case "status":
                    case "select":
                    case "multi_select":
                        return (0, a.jsx)(V, {
                            rowIndex: t,
                            propertySchema: e.value
                        });
                    case "person":
                        return (0, a.jsx)(z, {
                            index: t,
                            showNameSkeleton: !1,
                            containerStyle: l.person
                        });
                    default:
                        return null
                }
            }

            function U({
                propertySchema: e,
                columnIndex: t,
                rowIndex: r
            }) {
                switch (e.type) {
                    case "number":
                        return (0, a.jsx)(o, {
                            style: function({
                                index: e,
                                offset: t
                            }) {
                                return {
                                    width: W[(e + t) % W.length],
                                    height: 5
                                }
                            }({
                                index: r,
                                offset: t
                            })
                        });
                    case "text":
                    case "title":
                        return (0, a.jsx)(o, {
                            style: M(r)
                        });
                    case "select":
                    case "multi_select":
                    case "status":
                        return (0, a.jsx)(V, {
                            rowIndex: r,
                            propertySchema: e
                        });
                    case "created_time":
                    case "last_edited_time":
                    case "last_visited_time":
                    case "date":
                        return (0, a.jsx)(o, {
                            style: {
                                width: "70%",
                                maxWidth: "70%",
                                height: 5
                            }
                        });
                    case "created_by":
                    case "last_edited_by":
                    case "person":
                        return (0, a.jsx)(z, {
                            index: r,
                            showNameSkeleton: !0
                        });
                    case "checkbox":
                        return (0, a.jsx)(B, {
                            rowIndex: r
                        });
                    default:
                        return null
                }
            }
            let J = l.memo(function({
                    propertySchema: e,
                    columnIndex: t,
                    rowIndex: l,
                    templateIndex: n
                }) {
                    return (0, a.jsx)(r(4458).fI, {
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100%",
                        height: "100%",
                        children: (0, a.jsx)(U, {
                            propertySchema: e,
                            columnIndex: t,
                            rowIndex: (l + n) % 3
                        })
                    })
                }),
                L = {
                    table: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gridTemplateRows: "repeat(4, 20px)"
                    },
                    tableCell: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: 1,
                        marginBottom: -1,
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`,
                        paddingInlineStart: 4,
                        paddingInlineEnd: 8
                    },
                    propertyTitle: {
                        fontSize: 9,
                        ...r(699422).RC
                    }
                };

            function X({
                template: e,
                viewTemplate: t,
                index: l
            }) {
                let n = (0, r(682985).K8)(() => _({
                    userCustomizations: (0, r(158100).ET)({
                        template: e
                    }),
                    collectionViewTemplate: t
                }).splice(0, 3), [e, t]);
                return (0, a.jsxs)("div", {
                    style: L.table,
                    children: [n.map(e => (0, a.jsx)("div", {
                        style: L.tableCell,
                        children: (0, a.jsx)(r(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            style: L.propertyTitle,
                            children: e.value.name
                        })
                    }, `header-${e.templateId}`)), Array.from({
                        length: 3
                    }).map((e, t) => n.map((e, r) => (0, a.jsx)("div", {
                        style: L.tableCell,
                        children: (0, a.jsx)(J, {
                            propertySchema: e.value,
                            rowIndex: t,
                            columnIndex: r,
                            templateIndex: l
                        })
                    }, `row-${t}-${e.templateId}`)))]
                })
            }
            let Z = {
                    table: X,
                    gallery: function({
                        template: e,
                        index: t
                    }) {
                        return (0, a.jsxs)("div", {
                            style: v,
                            children: [(0, a.jsx)(b, {
                                type: "circle"
                            }), (0, a.jsx)(b, {
                                type: "triangle"
                            }), (0, a.jsx)(b, {
                                type: "rectangle"
                            })]
                        })
                    },
                    board: function({
                        viewTemplate: e
                    }) {
                        var t;
                        let n = (t = e, (0, r(682985).K8)(() => {
                                var e, l;
                                let n, a = (null == (e = t.value.format) || null == (e = e.board_columns) ? void 0 : e.map(e => "string" == typeof e.value.value ? e.value.value : void 0).filter(r(722371).O9)) ? ? [],
                                    i = null == (l = t.value.format) ? void 0 : l.board_columns_by,
                                    {
                                        dependencyMap: o
                                    } = t;
                                if (!i || !o) return p;
                                let s = o[`property:${i.property}`];
                                if (!s) return p;
                                try {
                                    n = r(932292).globalWorkflowTemplates.fromIdOfType({
                                        templateId: s,
                                        type: "property"
                                    })
                                } catch (e) {
                                    return p
                                }
                                return (0, r(963639).V)(n) ? {
                                    type: n.value.type,
                                    columns: a.length > 0 ? a.map(e => {
                                        var t;
                                        return null == (t = n.value.options) ? void 0 : t.find(t => t.value === e)
                                    }).filter(r(722371).O9) : n.value.options ? ? []
                                } : p
                            }, [t])),
                            i = (0, l.useMemo)(() => n.columns.slice(0, 3), [n]);
                        return (0, a.jsxs)(r(4458).VP, {
                            gap: 6,
                            paddingTop: 8,
                            paddingInlineEnd: 8,
                            paddingInlineStart: 4,
                            children: [(0, a.jsx)("div", {
                                style: s,
                                children: i.map(e => (0, a.jsx)(d, {
                                    id: e.id,
                                    value: e.value,
                                    color: e.color,
                                    type: n.type
                                }, e.id))
                            }), (0, a.jsx)("div", {
                                style: s,
                                children: i.map((e, t) => (0, a.jsx)(u, {
                                    index: t
                                }, e.id))
                            })]
                        })
                    },
                    calendar: function() {
                        return (0, a.jsxs)("div", {
                            style: m.container,
                            children: [x.map((e, t) => (0, a.jsx)("div", {
                                style: m.columnTitle,
                                children: e.label
                            }, t)), Array.from({
                                length: x.length
                            }).map((e, t) => (0, a.jsx)(y, {
                                index: t,
                                flushRight: t === x.length - 1
                            }, t))]
                        })
                    },
                    list: function({
                        template: e,
                        viewTemplate: t
                    }) {
                        let n = (0, r(682985).K8)(() => {
                                var l;
                                return l = function({
                                    properties: e,
                                    collectionViewTemplate: t
                                }) {
                                    return e.map(e => {
                                        if ("status" !== e.value.type) return e;
                                        let r = function({
                                            propertyTemplate: e,
                                            collectionViewTemplate: t
                                        }) {
                                            let r = e.templateId,
                                                l = E(t),
                                                n = A(t);
                                            return l.find(e => r === n[e.property])
                                        }({
                                            propertyTemplate: e,
                                            collectionViewTemplate: t
                                        });
                                        return (null == r ? void 0 : r.statusShowAs) === "checkbox" ? { ...e,
                                            value: { ...e.value,
                                                type: "checkbox"
                                            }
                                        } : e
                                    })
                                }({
                                    properties: function({
                                        propertyTemplates: e,
                                        collectionViewTemplate: t
                                    }) {
                                        var l;
                                        let n = null == (l = e.find(e => "title" === e.value.type)) ? void 0 : l.templateId,
                                            a = { ...A(t),
                                                ...n && {
                                                    title: n
                                                }
                                            },
                                            i = new Map(E(t).map((e, t) => [a[e.property], t]));
                                        return (0, r(381453).Ul)(e, e => {
                                            let t = i.get(e.templateId);
                                            return void 0 === t ? 1 / 0 : t
                                        })
                                    }({
                                        propertyTemplates: _({
                                            userCustomizations: (0, r(158100).ET)({
                                                template: e
                                            }),
                                            collectionViewTemplate: t
                                        }).filter(D),
                                        collectionViewTemplate: t
                                    }),
                                    collectionViewTemplate: t
                                }), (0, r(381453).hS)(l, e => (0, r(963639).V)(e) ? "select" : e.value.type)
                            }, [e, t]),
                            i = n.findIndex(e => "title" === e.value.type),
                            o = (0, l.useMemo)(() => n.slice(0, i + 1), [n, i]),
                            s = (0, l.useMemo)(() => n.slice(i + 1), [n, i]);
                        return (0, a.jsx)(r(4458).VP, {
                            gap: 0,
                            marginTop: 6,
                            children: Array.from({
                                length: 3
                            }).map((e, t) => (0, a.jsxs)("div", {
                                style: K,
                                children: [(0, a.jsx)(G, {
                                    propertyTemplates: o,
                                    rowIndex: t,
                                    containerStyle: F
                                }), (0, a.jsx)(G, {
                                    propertyTemplates: s,
                                    rowIndex: t,
                                    containerStyle: Y
                                })]
                            }, t))
                        })
                    }
                },
                ee = l.memo(function({
                    template: e,
                    index: t,
                    templateColor: l
                }) {
                    let i = e.value.targetCollection.name,
                        o = (0, r(960253).I)(() => ({
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                paddingTop: 12,
                                paddingInlineStart: 12,
                                backgroundColor: r(632079).Tj[l].background.elevated
                            }
                        }), [l]),
                        s = (0, r(682985).K8)(() => {
                            let t = (0, r(388507).A6)(e, r(932292).globalWorkflowTemplates);
                            return t.length > 0 ? t[0] : r(932292).globalWorkflowTemplates.fromIdOfType({
                                templateId: r(582881).Gs,
                                type: "collection_view"
                            })
                        }, [e]),
                        d = (0, n().QE)(s.value.type) ? Z[s.value.type] : X;
                    return (0, a.jsxs)("div", {
                        style: o.container,
                        children: [(0, a.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            marginInlineStart: 4,
                            children: [(0, a.jsx)(r(107048).z, {
                                template: e,
                                size: 12
                            }), (0, a.jsx)(r(111010).D, {
                                styleKey: "captionMedium",
                                children: i
                            })]
                        }), (0, a.jsx)(d, {
                            template: e,
                            viewTemplate: s,
                            index: t
                        })]
                    })
                })
        }
    }
]);