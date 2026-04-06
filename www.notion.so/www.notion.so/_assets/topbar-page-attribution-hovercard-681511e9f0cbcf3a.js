"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [73458], {
        251143: (e, t, r) => {
            r.d(t, {
                i: () => a
            }), r(296540);
            var i = r(474848);
            let n = {
                header: {
                    minWidth: 300,
                    padding: "10px 12px"
                },
                headerBackground: {
                    backgroundColor: r(632079).Tj.background.secondary
                }
            };

            function a(e) {
                let {
                    trigger: t,
                    header: a,
                    children: o,
                    originGap: l,
                    placement: s,
                    alignment: d,
                    disabled: c
                } = e, u = (0, r(83208).X)("use_topbar_person_hovercards");
                return (0, i.jsxs)(r(399806).Z, {
                    trigger: t,
                    originGap: l,
                    placement: s,
                    alignment: d,
                    disabled: c,
                    children: [(0, i.jsx)(r(111010).D, {
                        styleKey: u ? "captionMedium" : "bodyRegular",
                        colorVariant: "secondary",
                        style: { ...n.header,
                            ...u && n.headerBackground
                        },
                        children: a
                    }), (0, i.jsx)(r(346268).c, {
                        size: 0,
                        type: "horizontal",
                        colorVariant: "secondary"
                    }), o]
                })
            }
        },
        373592: (e, t, r) => {
            r.r(t), r.d(t, {
                PageAttributionHoverCard: () => l
            }), r(296540);
            var i = r(474848);

            function n(e, t) {
                let i = (0, r(109939).tz)(),
                    n = (0, r(533992).v3)(),
                    a = (0, r(682985).K8)(() => null != e && e.asActor ? (0, r(197018).lR)(i, e) : void 0, [e, i]);
                return {
                    name: a,
                    userStore: (0, r(682985).K8)(() => {
                        if (null != e && e.asActor && e.asActor.table === r(832375).oo9) return r(807825).L.createChildStore(t, {
                            table: r(832375).oo9,
                            id: e.asActor.id
                        })
                    }, [e, t]),
                    profileUrl: (0, r(682985).K8)(() => {
                        if (!(null != e && e.asActor) || e.asActor.table !== r(832375).oo9) return;
                        let i = t.getSpaceStore();
                        if (!i || !(0, r(993077).dp)(i, e.asActor.id).isMember()) return;
                        let a = n.idCreator.getSpaceIdCreatorSync(i.id);
                        return (0, r(805697).o4)({
                            userId: e.asActor.id,
                            spaceIdCreator: a,
                            pageVisitSource: r(254656).y8.PersonHoverCard
                        })
                    }, [e, n, t])
                }
            }
            let a = {
                container: {
                    padding: "8px 0 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                row: {
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    gap: 8
                },
                label: {
                    fontSize: 12,
                    lineHeight: "16px",
                    color: r(632079).Tj.text.secondary,
                    flexShrink: 0
                },
                name: {
                    fontSize: 12,
                    lineHeight: "16px",
                    fontWeight: r(699422).Wy.medium,
                    color: r(632079).Tj.text.primary,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minWidth: 0
                },
                hoverCardWrapper: {
                    lineHeight: 0
                },
                timestamp: {
                    fontSize: 12,
                    lineHeight: "16px",
                    color: r(632079).Tj.text.tertiary,
                    textAlign: "end",
                    flexShrink: 0
                }
            };

            function o({
                name: e,
                userStore: t,
                profileUrl: n,
                spaceStore: l
            }) {
                return e && t ? n ? (0, i.jsx)("div", {
                    style: a.hoverCardWrapper,
                    children: (0, i.jsx)(r(532755).D, {
                        userStore: t,
                        spaceStore: l,
                        children: (0, i.jsx)(r(68774).N, {
                            href: n,
                            style: a.name,
                            children: e
                        })
                    })
                }) : (0, i.jsx)("div", {
                    style: a.name,
                    children: e
                }) : e ? (0, i.jsx)("div", {
                    style: a.name,
                    children: e
                }) : null
            }

            function l(e) {
                let {
                    store: t,
                    trigger: l,
                    children: s,
                    placement: d,
                    alignment: c
                } = e, u = (0, r(109939).tz)(), p = (0, r(682985).K8)(() => t.getSpaceStore(), [t]), g = (0, r(682985).K8)(() => {
                    let e = t.getLastEditedByPointer();
                    if (!e) return;
                    let i = null == t ? void 0 : t.getRecordModel;
                    if (!i) return;
                    let n = (0, r(197018).xC)({
                        pointer: e,
                        getRecordModel: i
                    });
                    return null != n && n.asActor ? n : void 0
                }, [t]), h = (0, r(682985).K8)(() => {
                    let e = t.getCreatedByPointer();
                    if (!e) return;
                    let i = null == t ? void 0 : t.getRecordModel;
                    if (!i) return;
                    let n = (0, r(197018).xC)({
                        pointer: e,
                        getRecordModel: i
                    });
                    return null != n && n.asActor ? n : void 0
                }, [t]), x = n(g, t), f = n(h, t), m = (0, r(682985).K8)(() => {
                    let e = t.getLastEditedTime();
                    return e ? (0, r(799843).nl)(e, {
                        useCompactFormat: !0
                    }) : void 0
                }, [t]), y = (0, r(682985).K8)(() => {
                    let e = t.getCreatedTime();
                    return e ? (0, r(799843).nl)(e, {
                        useCompactFormat: !0
                    }) : void 0
                }, [t]), v = (0, r(682985).K8)(() => (0, r(916804).I)(p) || !t.isReady(), [p, t]), j = (0, i.jsxs)("div", {
                    style: a.container,
                    children: [m ? (0, i.jsxs)("div", {
                        style: a.row,
                        children: [(0, i.jsxs)(r(4458).fI, {
                            flex: 1,
                            gap: 4,
                            minWidth: 0,
                            children: [(0, i.jsx)("span", {
                                style: a.label,
                                children: x.name ? (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Edited by",
                                    id: "pagePropertiesHeader.editedBy.labelShort"
                                }) : (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Edited",
                                    id: "pagePropertiesHeader.edited.labelShort"
                                })
                            }), (0, i.jsx)(o, { ...x,
                                spaceStore: p
                            })]
                        }), (0, i.jsx)("span", {
                            style: a.timestamp,
                            children: m
                        })]
                    }) : void 0, (0, i.jsxs)("div", {
                        style: a.row,
                        children: [(0, i.jsxs)(r(4458).fI, {
                            flex: 1,
                            gap: 4,
                            minWidth: 0,
                            children: [(0, i.jsx)("span", {
                                style: a.label,
                                children: f.name ? (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Created by",
                                    id: "pagePropertiesHeader.createdBy.labelShort"
                                }) : (0, i.jsx)(r(109939).sA, {
                                    defaultMessage: "Created",
                                    id: "pagePropertiesHeader.created.labelShort"
                                })
                            }), (0, i.jsx)(o, { ...f,
                                spaceStore: p
                            })]
                        }), (0, i.jsx)("span", {
                            style: a.timestamp,
                            children: y ? ? (0, i.jsx)(r(109939).sA, {
                                defaultMessage: "Unknown",
                                id: "topbar.pageAttribution.unknownTime"
                            })
                        })]
                    })]
                });
                return (0, i.jsx)(r(251143).i, {
                    trigger: l ? ? s,
                    placement: d,
                    alignment: c,
                    disabled: v,
                    header: u.formatMessage({
                        id: "topbar.activity.header",
                        defaultMessage: "Activity"
                    }),
                    children: j
                })
            }
        },
        399806: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var i = r(296540),
                n = r(474848);

            function a(e) {
                let {
                    trigger: t,
                    children: a,
                    originGap: o = 6,
                    placement: l = "bottom",
                    alignment: s = "center",
                    disabled: d = !1
                } = e, [c, u] = (0, i.useState)(!1), [p, g] = (0, i.useState)(), h = (0, i.useRef)(null), x = (0, i.useRef)(), f = (0, i.useRef)(!1), m = (0, i.useRef)(!1), y = (0, i.useCallback)(() => r(23531).A.state.isPinned || void 0 !== r(84300).A.state, []), v = (0, r(682985).K8)(y, [y]), j = (0, i.useCallback)(() => {
                    d || (f.current = !0, window.clearTimeout(x.current), x.current = window.setTimeout(() => {
                        h.current && (g(h.current.getBoundingClientRect()), u(!0))
                    }, 200))
                }, [d]), b = (0, i.useCallback)(() => {
                    if (d || (f.current = !1, y())) return;
                    let e = m.current ? 300 : 100;
                    window.clearTimeout(x.current), x.current = window.setTimeout(() => {
                        y() || u(!1)
                    }, e)
                }, [d, y]);
                return (0, i.useEffect)(() => () => {
                    window.clearTimeout(x.current)
                }, []), (0, i.useEffect)(() => {
                    m.current && !v && c && !f.current && (window.clearTimeout(x.current), x.current = window.setTimeout(() => {
                        y() || u(!1)
                    }, 300)), m.current = v
                }, [v, c, y]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        ref: h,
                        onMouseOver: j,
                        onMouseLeave: b,
                        children: t
                    }), (0, n.jsx)(r(182718).zD, {
                        popupType: r(182718).nl.Popup,
                        open: c,
                        originRect: p,
                        originGap: o,
                        placementToOrigin: l,
                        alignmentToOrigin: s,
                        preventCaptureEsc: !0,
                        disableMouseCapture: !0,
                        trapFocus: !1,
                        content: () => (0, n.jsx)("div", {
                            onMouseOver: j,
                            onMouseLeave: b,
                            children: a
                        })
                    })]
                })
            }
        }
    }
]);