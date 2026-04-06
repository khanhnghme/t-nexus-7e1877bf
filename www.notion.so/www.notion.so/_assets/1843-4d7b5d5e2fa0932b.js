"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [1843], {
        2009: (e, t, r) => {
            r.d(t, {
                w: () => i
            });
            var o = () => r(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let i = new n
        },
        60748: (e, t, r) => {
            r.d(t, {
                B: () => i,
                T: () => l
            }), r(18107), r(967357), r(898992), r(737550), r(296540);
            var o = r(474848);
            let n = (0, r(109939).YK)({
                archiveSubitemsConfirmMessage: {
                    id: "archiveActions.archiveSubitemsConfirmMessage",
                    defaultMessage: "Are you sure you want to archive {itemCount, plural, one {this {newItemName}} other {these {newItemNamePlural}}}?"
                },
                archiveSubitemsConfirmDescription: {
                    id: "archiveActions.archiveSubitemsConfirmDescription",
                    defaultMessage: "This will also archive {subitemCount, plural, one {{subitemCount} sub-{newItemName}} other {{subitemCount} sub-{newItemNamePlural}}}."
                },
                archiveSubitemsConfirmAcceptLabel: {
                    id: "archiveActions.archiveSubitemsConfirmAcceptLabel",
                    defaultMessage: "Archive"
                },
                archivedPage: {
                    id: "archiveActions.archivedPage",
                    defaultMessage: "Archived page"
                },
                archiveSubitemsErrorMessage: {
                    id: "archiveActions.archiveSubitemsErrorMessage",
                    defaultMessage: "There was an error archiving those items. Please try again later."
                },
                unarchive: {
                    id: "archiveActions.unarchive",
                    defaultMessage: "Unarchive"
                }
            });
            async function i(e) {
                var t;
                let {
                    environment: i,
                    blocks: l
                } = e, d = l.at(0);
                if (!d) return;
                let u = (null == (t = (0, r(444610).U)(d)) ? void 0 : t.collectionStore()) ? ? d.getAssociatedCollectionStore(),
                    h = u && l.some(e => (0, r(523288).Q)({
                        collectionStore: u,
                        blockStore: e
                    })),
                    p = d.getSpaceId();
                if (!h) {
                    (0, r(377796).createAndCommit)({
                        userAction: "archiveActions.archiveBlocksWithMaybeSubitems",
                        environment: i,
                        cellTarget: p ? {
                            spaceWithId: p
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            for (let t of l) a({
                                environment: i,
                                blockStore: t,
                                transaction: e
                            })
                        }
                    }), c(i);
                    return
                }
                let {
                    result: g,
                    status: v
                } = await (0, r(112944).zM)({
                    environment: i,
                    blocks: l,
                    options: {
                        canEdit: !0
                    },
                    collectionStore: u ? ? void 0
                });
                if ("success" !== v) return void r(436555).D6({
                    label: (0, o.jsx)(r(109939).sA, { ...n.archiveSubitemsErrorMessage
                    })
                });
                if (g.length > 0) {
                    let e = null == u ? void 0 : u.getFormat().app_config_uri,
                        t = (0, r(463082).$O)(e, !0),
                        o = (0, r(463082).oj)(e, !0);
                    if (!await s({
                            itemCount: l.length,
                            subitemCount: g.length,
                            newItemName: t,
                            newItemNamePlural: o
                        })) return
                }(0, r(377796).createAndCommit)({
                    userAction: "archiveActions.archiveBlocksWithMaybeSubitems",
                    environment: i,
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        for (let t of l) a({
                            environment: i,
                            blockStore: t,
                            transaction: e
                        });
                        for (let t of g) a({
                            environment: i,
                            blockStore: t,
                            transaction: e
                        })
                    }
                }), c(i)
            }

            function l(e) {
                let {
                    blockStore: t,
                    transaction: o
                } = e;
                (0, r(421439).y4)({
                    store: t,
                    transaction: o,
                    operation: r(488307).op.update({
                        pointer: t.pointer,
                        path: [],
                        args: {
                            archived_by_id: null,
                            archived_by_table: null,
                            archived_time: null
                        }
                    })
                })
            }
            async function s(e) {
                let {
                    itemCount: t,
                    subitemCount: i,
                    newItemName: l,
                    newItemNamePlural: s
                } = e, {
                    accept: a
                } = await r(647095).Gh({
                    message: (0, o.jsx)(r(109939).sA, { ...n.archiveSubitemsConfirmMessage,
                        values: {
                            itemCount: t,
                            newItemName: l,
                            newItemNamePlural: s
                        }
                    }),
                    description: (0, o.jsx)(r(109939).sA, { ...n.archiveSubitemsConfirmDescription,
                        values: {
                            subitemCount: i,
                            newItemName: l,
                            newItemNamePlural: s
                        }
                    }),
                    acceptLabel: (0, o.jsx)(r(109939).sA, { ...n.archiveSubitemsConfirmAcceptLabel
                    })
                });
                return a
            }

            function a(e) {
                let {
                    environment: t,
                    blockStore: o,
                    transaction: n
                } = e, i = t.currentUser.id;
                if (!i) return;
                let l = Date.now();
                (0, r(421439).y4)({
                    store: o,
                    transaction: n,
                    operation: r(488307).op.update({
                        pointer: o.pointer,
                        path: [],
                        args: {
                            archived_by_id: i,
                            archived_by_table: r(832375).oo9,
                            archived_time: l
                        }
                    })
                })
            }

            function c(e) {
                r(436555).D6({
                    label: (0, o.jsx)(r(109939).sA, { ...n.archivedPage
                    }),
                    right: (0, o.jsx)(r(531119).Ag, {
                        onClick: () => {
                            r(436555).N2(), (0, r(462446).t)({
                                environment: e,
                                preventSelectText: !0
                            })
                        },
                        children: (0, o.jsx)(r(109939).sA, { ...n.unarchive
                        })
                    })
                })
            }
        },
        61149: (e, t, r) => {
            r.d(t, {
                U: () => p
            });
            let o = (0, r(477465).Dv)("collectionsBulkAction");
            r(296540);
            var n = () => r(739411),
                i = r(474848);
            let l = (0, r(109939).YK)({
                    loadingMessage: {
                        id: "bulkActionProgressSnackbar.loading",
                        defaultMessage: "Loading…"
                    },
                    deletingProgress: {
                        id: "bulkActionProgressSnackbar.deletingProgress",
                        defaultMessage: "Deleting {processed} / {total}…"
                    },
                    archivingProgress: {
                        id: "bulkActionProgressSnackbar.archivingProgress",
                        defaultMessage: "Archiving {processed} / {total}…"
                    },
                    editingPropertyProgress: {
                        id: "bulkActionProgressSnackbar.editingPropertyProgress",
                        defaultMessage: "Updating {processed} / {total}…"
                    },
                    movingProgress: {
                        id: "bulkActionProgressSnackbar.movingProgress",
                        defaultMessage: "Moving {processed} / {total}…"
                    }
                }),
                s = {
                    height: 24
                };

            function a() {
                let e = (0, r(682985).K8)(() => {
                    let e = n().Y.state;
                    if ("loading" === e.phase || "in_progress" === e.phase) return e
                }, []);
                return e ? (0, i.jsxs)(r(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    children: [(0, i.jsx)(r(517334).k, {
                        size: "sm",
                        onDarkBackground: !0
                    }), (0, i.jsx)("span", {
                        children: "loading" === e.phase ? (0, i.jsx)(r(109939).sA, { ...l.loadingMessage
                        }) : (0, i.jsx)(r(109939).sA, { ... function(e) {
                                switch (e) {
                                    case "delete":
                                        return l.deletingProgress;
                                    case "archive":
                                        return l.archivingProgress;
                                    case "editProperty":
                                    default:
                                        return l.editingPropertyProgress;
                                    case "move":
                                        return l.movingProgress
                                }
                            }(e.actionType),
                            values: {
                                processed: e.processed,
                                total: e.total
                            }
                        })
                    }), (0, i.jsx)("div", {
                        style: s,
                        children: (0, i.jsx)(r(346268).c, {
                            type: "vertical",
                            colorVariant: "inversePrimary",
                            colorPalette: "gray",
                            size: 24
                        })
                    })]
                }) : null
            }
            let c = (0, r(109939).YK)({
                completedDelete: {
                    id: "bulkActionProgressSnackbar.completedDelete",
                    defaultMessage: "Deleted {processed} rows"
                },
                completedArchive: {
                    id: "bulkActionProgressSnackbar.completedArchive",
                    defaultMessage: "Archived {processed} rows"
                },
                completedEditProperty: {
                    id: "bulkActionProgressSnackbar.completedEditProperty",
                    defaultMessage: "Updated {processed} rows"
                },
                completedMove: {
                    id: "bulkActionProgressSnackbar.completedMove",
                    defaultMessage: "Moved {processed} rows"
                },
                errorMessage: {
                    id: "bulkActionProgressSnackbar.errorMessage",
                    defaultMessage: "Something went wrong. Please try again."
                }
            });

            function d() {
                (0, r(984211).f)({
                    item: {
                        label: (0, i.jsx)(a, {}),
                        durationMs: "keep",
                        persistAcrossNavigation: !0
                    },
                    onDismiss: () => {
                        h()
                    }
                })
            }

            function u() {
                r(436555).D6({
                    label: r(962299).A.formatMessage(c.errorMessage),
                    durationMs: r(441742).LX,
                    persistAcrossNavigation: !0
                })
            }

            function h() {
                r(436555).N2(), n().Y.setState({
                    phase: "idle"
                })
            }
            async function p(e) {
                let {
                    environment: t,
                    collectionContextStore: i,
                    bulkAction: l
                } = e;
                if (!r(218744).default.checkGate({
                        gateName: "collections_bulk_action"
                    })) return {
                    success: !1
                };
                let s = i.collectionViewStore();
                if (!s) return {
                    success: !1
                };
                let a = s.getCollectionSource();
                if (!a) return {
                    success: !1
                };
                let c = s.pointer.spaceId;
                if (!c) return {
                    success: !1
                };
                let h = l.type,
                    p = !1;
                n().Y.setState({
                    phase: "loading",
                    actionType: h
                }), d(), p = !0;
                let v = i.bulkSelectionStore.state,
                    m = v.excludedIds,
                    f = v.includedIds,
                    b = i.archiveStatusStore.state ? ? (r(218744).default.checkGate({
                        gateName: "default_loader_archive_status_non_archived"
                    }) && !(0, r(213832).TR)(a) ? "NON_ARCHIVED" : void 0),
                    S = v.scope ? { ...v.scope,
                        archiveStatus: b
                    } : void 0,
                    y = i.searchQueryStore.state || void 0,
                    x = (0, r(259242).UT)({
                        environment: t,
                        eventName: o,
                        request: {
                            spaceId: c,
                            collectionSource: a,
                            collectionViewPointer: s.pointer,
                            bulkAction: l,
                            excludedBlockIds: [...m],
                            includedBlockIds: [...f],
                            bulkSelectScope: S,
                            searchQuery: y
                        },
                        multiCellRouting: {
                            spaceIds: [c]
                        }
                    }),
                    k = await x.next();
                return k.done ? {
                    success: !1
                } : k.value.error ? (n().Y.setState({
                    phase: "error",
                    errorType: "somethingWentWrong",
                    actionType: h
                }), u(), {
                    success: !1
                }) : ((0, r(203272).wi)({
                    collectionContextStore: i
                }), (0, r(471e3).I)({
                    environment: t
                }), g({
                    taskIterator: x,
                    firstResult: k.value,
                    actionType: h,
                    snackbarShown: p
                }), {
                    success: !0
                })
            }
            async function g(e) {
                let {
                    taskIterator: t,
                    firstResult: o,
                    actionType: i
                } = e, l = e.snackbarShown, s = {
                    done: !1,
                    value: o
                };
                for (; !s.done;) {
                    let e = s.value;
                    if (e.error) {
                        n().Y.setState({
                            phase: "error",
                            errorType: "somethingWentWrong",
                            actionType: i
                        }), u();
                        return
                    }
                    let {
                        value: o
                    } = e;
                    if ("in_progress" === o.status && (n().Y.setState({
                            phase: "in_progress",
                            processed: o.processed,
                            total: o.total,
                            actionType: i
                        }), l || (d(), l = !0)), "completed" === o.status) {
                        n().Y.setState({
                                phase: "completed",
                                processed: o.processed,
                                actionType: i
                            }),
                            function(e, t) {
                                let o = function(e) {
                                    switch (e) {
                                        case "delete":
                                            return c.completedDelete;
                                        case "archive":
                                            return c.completedArchive;
                                        case "editProperty":
                                        default:
                                            return c.completedEditProperty;
                                        case "move":
                                            return c.completedMove
                                    }
                                }(t);
                                r(436555).D6({
                                    label: r(962299).A.formatMessage(o, {
                                        processed: e
                                    }),
                                    persistAcrossNavigation: !0
                                })
                            }(o.processed, i), setTimeout(() => {
                                h()
                            }, 3e3);
                        return
                    }
                    if ("error" === o.status) {
                        n().Y.setState({
                            phase: "error",
                            errorType: o.errorType,
                            actionType: i
                        }), u();
                        return
                    }
                    s = await t.next()
                }
            }
        },
        81228: (e, t, r) => {
            r.d(t, {
                w: () => o
            });

            function o(e) {
                let t, {
                    environment: o,
                    collectionContextStore: n,
                    isPhone: i,
                    stickyLeft: l,
                    theme: s,
                    themeMode: a
                } = e;
                if (i) return {};
                let c = n.collectionViewBlockStore(),
                    d = null == c ? void 0 : c.getParentBlockStore(),
                    u = n.isInPeekRendererStore.state;
                if ("dark" === a && u && (t = r(632079).Tj.background.elevated), "dark" === a && n.isInHomeWidgetStore.state && (t = r(632079).Tj.gray.background.secondary), d && !n.isFullScreenStore.state && !(null != c && c.isRootOrDirectChild())) {
                    var h;
                    let e = null == (h = d.getModel()) ? void 0 : h.getFormat().block_color;
                    e && (t = (0, r(632079).k5)(e, s).background)
                }
                let p = n.frozoneStore.state.scrollerLeftOffset ? ? 0,
                    g = Math.max((0, r(898478).k)(o) - p, 0),
                    v = (0, r(430462).Q)(o, n) ? g : 0,
                    m = n.frozoneStore.state.scrollerLeftPadding,
                    f = (0, r(28630).f5)({
                        collectionContextStore: n
                    });
                return {
                    background: t || r(632079).Tj.background.primary,
                    position: "sticky",
                    insetInlineStart: `calc(${(l||0)+v-(m||0)+(f?r(47080).Fh:0)}px + -1 * var(--sticky-horizontal-offset, 0px))`,
                    zIndex: r(41962).VG
                }
            }
        },
        81981: (e, t, r) => {
            r.d(t, {
                b: () => l
            }), r(944114);
            var o = r(296540),
                n = r(474848);
            let i = {
                position: "absolute",
                zIndex: 999,
                width: "100%"
            };

            function l({
                nodeRef: e,
                width: t,
                isFirst: s,
                children: a,
                clipLeftExtra: c
            }) {
                let d = (0, o.useMemo)(() => (0, r(4962).Ay)(), []),
                    [u, h] = (0, o.useState)(0),
                    [p, g] = (0, o.useState)(0),
                    {
                        ceiling: v,
                        floor: m,
                        stickyHorizontally: f
                    } = (0, o.useContext)(r(890400).m),
                    b = (0, o.useContext)(r(796520).e),
                    S = (0, o.useContext)(r(602346).j8),
                    y = (0, o.useRef)(null),
                    x = (0, o.useRef)(null),
                    k = (0, o.useRef)(null),
                    w = (0, o.useRef)(null),
                    A = (0, o.useRef)(null),
                    [I, C] = (0, o.useState)("in"),
                    [j, M] = (0, o.useState)("in"),
                    [B, T] = (0, o.useState)("in"),
                    P = (0, o.useCallback)(e => {
                        for (let r of e) {
                            var t;
                            let e = r.isIntersecting ? "in" : r.boundingClientRect.y < ((null == (t = r.rootBounds) ? void 0 : t.y) || 0) ? "above" : "below";
                            r.target === k.current ? T(e) : r.target === y.current ? C(e) : r.target === A.current && M(e)
                        }
                    }, []);
                (0, o.useEffect)(() => {
                    if (!S.current || !y.current || !A.current) return;
                    let e = -((p + 0) * 1),
                        t = -((u + 0 + ((null == b ? void 0 : b.stickyCeilingPortalsHeight) || 0)) * 1),
                        r = new IntersectionObserver(P, {
                            root: S.current,
                            threshold: [0, 1],
                            rootMargin: `${-1*((null==b?void 0:b.stickyCeilingPortalsHeight)||0)}px 0px ${e}px 0px`
                        });
                    r.observe(y.current);
                    let o = new IntersectionObserver(P, {
                        root: S.current,
                        threshold: [0, 1],
                        rootMargin: `${t}px 0px 0px 0px`
                    });
                    o.observe(A.current);
                    let n = new IntersectionObserver(P, {
                        root: S.current,
                        threshold: [0],
                        rootMargin: `${t}px 0px ${e}px 0px`
                    });
                    return k.current && n.observe(k.current), () => {
                        r.disconnect(), n.disconnect(), o.disconnect()
                    }
                }, [P, null == b ? void 0 : b.stickyCeilingPortalsHeight, S, u, p]);
                let {
                    effectiveTopMarkerState: E,
                    ceilingIsSticky: R,
                    floorIsSticky: _,
                    ceilingIsTransitioning: F,
                    floorIsTransitioning: z
                } = function({
                    isFirst: e,
                    parentTopMarkerState: t,
                    contentMarkerState: r,
                    topMarkerState: o,
                    bottomMarkerState: n
                }) {
                    let i = "in" === r ? "in" === o ? "in" : "above" : r,
                        l = e && t && "below" !== i ? t : i,
                        s = "in" === r ? "in" === n ? "in" : "below" : r,
                        a = "above" === l && "above" !== s,
                        c = "below" !== l && "below" === s;
                    return {
                        effectiveTopMarkerState: l,
                        effectiveBottomMarkerState: s,
                        ceilingIsSticky: a,
                        floorIsSticky: c,
                        ceilingIsTransitioning: !a && "above" === l,
                        floorIsTransitioning: !c && "below" === s
                    }
                }({
                    isFirst: s,
                    parentTopMarkerState: null == b ? void 0 : b.topMarkerState,
                    contentMarkerState: B,
                    topMarkerState: I,
                    bottomMarkerState: j
                }), V = (0, o.useCallback)((e, t) => {
                    ("ceiling" === e ? h : g)(e => e += t)
                }, []), D = (0, o.useRef)([]), N = (0, o.useRef)([]), K = (0, o.useCallback)((e, t) => {
                    let r = "ceiling" === e ? D : N;
                    return r.current.push(t), () => {
                        r.current.splice(r.current.indexOf(t), 1)
                    }
                }, []), $ = (0, o.useMemo)(() => ({
                    id: d,
                    ceilingIsSticky: R,
                    ceilingIsTransitioning: F,
                    containerNode: e,
                    floorIsSticky: _,
                    floorIsTransitioning: z,
                    topMarkerState: E,
                    provideHeight: V,
                    ceilingTransitionRef: x,
                    floorTransitionRef: w,
                    stickyCeilingPortalsHeight: u,
                    registerPortal: K
                }), [d, R, F, _, e, V, E, x, w, z, u, K]), O = -1 * (0, o.useContext)(r(406245).X), {
                    horizontalScroller: L
                } = (0, o.useContext)(r(700587).U) || {}, W = (0, r(682985).K8)(() => null == L ? void 0 : L.getStore().state.elementRef, [L]), H = (0, r(239160).Xg)(W ? ? {
                    current: null
                }), U = W ? `${H}px` : "100%";
                return (0, o.useEffect)(() => {
                    if (!v || !m || !e.current || f) return;
                    let t = D.current;
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e].parentElement;
                        r && (r.style.width = R ? U : "initial")
                    }
                    let r = N.current;
                    for (let e = 0; e < r.length; e++) {
                        let t = r[e].parentElement;
                        t && (t.style.width = _ ? U : "initial")
                    }
                }, [R, v, d, _, m, e, U, f]), (0, o.useEffect)(() => {
                    if (!e.current || !S.current || f) return;
                    let t = e.current.closest(`.${r(314543).Cn}.${r(314543).Dk}`),
                        o = e.current.closest(`.${r(314543).Cn}.${r(314543).RY}`);
                    if (!t || !o) return;
                    let n = t.closest(".layout"),
                        i = null,
                        l = e => {
                            e.target === n && s(e)
                        },
                        s = (...e) => {
                            i || (i = requestAnimationFrame(() => {
                                i = null;
                                let e = t.scrollLeft,
                                    r = t.getBoundingClientRect(),
                                    n = o.getBoundingClientRect(),
                                    l = r.x - n.x,
                                    s = e - l;
                                if (R && v) {
                                    let t = D.current,
                                        o = void 0 === c || 0 === c ? 0 : c - l;
                                    for (let n = 0; n < t.length; n++) t[n].style.marginInlineStart = `${-1*s}px`, t[n].style.marginInlineEnd = `${s}px`, t[n].style.clipPath = `rect(-100px ${e+r.width}px calc(100% + 100px) ${e+o}px)`, t[n].style.setProperty("--sticky-horizontal-offset", `${0===o?-1*l:0}px`)
                                } else {
                                    let e = D.current;
                                    for (let t = 0; t < e.length; t++) e[t].style.marginInlineStart = "", e[t].style.marginInlineEnd = "", e[t].style.clipPath = "", e[t].style.removeProperty("--sticky-horizontal-offset")
                                }
                                if (_ && m) {
                                    let t = N.current;
                                    for (let o = 0; o < t.length; o++) t[o].style.marginInlineStart = `${-1*s}px`, t[o].style.marginInlineEnd = `${s}px`, t[o].style.clipPath = `rect(-10px ${e+r.width}px calc(100% + 10px) ${e}px)`
                                } else {
                                    let e = N.current;
                                    for (let t = 0; t < e.length; t++) e[t].style.marginInlineStart = "", e[t].style.marginInlineEnd = "", e[t].style.clipPath = ""
                                }
                            }))
                        };
                    s(), t.addEventListener("scroll", s, {
                        passive: !0
                    });
                    let a = new ResizeObserver(s);
                    return a.observe(S.current), a.observe(t), a.observe(o), null == n || n.addEventListener("transitionend", l), () => {
                        t.removeEventListener("scroll", s), i && cancelAnimationFrame(i), null == n || n.removeEventListener("transitionend", l), a.disconnect()
                    }
                }, [d, R, _, e, S, F, v, m, f, c, O]), (0, n.jsxs)(r(796520).e.Provider, {
                    value: $,
                    children: [(0, n.jsx)("div", {
                        ref: w,
                        style: i
                    }), (0, n.jsx)("div", {
                        ref: y,
                        style: {
                            height: 0,
                            marginTop: -0,
                            pointerEvents: "none",
                            width: t
                        }
                    }), (0, n.jsx)("div", {
                        ref: k,
                        style: {
                            contain: "layout",
                            width: t
                        },
                        children: a
                    }), (0, n.jsx)("div", {
                        ref: A,
                        style: {
                            height: 0,
                            marginTop: -0,
                            pointerEvents: "none",
                            width: t,
                            clear: "both",
                            transform: "translateY(0px)"
                        }
                    }), (0, n.jsx)("div", {
                        ref: x,
                        style: {
                            position: "absolute",
                            zIndex: 999,
                            width: "100%",
                            transform: `translateY(-${u}px)`
                        }
                    })]
                })
            }
        },
        82768: (e, t, r) => {
            r.d(t, {
                V: () => l
            });
            var o = r(296540),
                n = r(474848);
            let i = {
                    multiSelectCheckboxInner: {
                        height: "100%"
                    },
                    container: {
                        width: `${r(47080).tG}px`,
                        height: `${r(47080).tG}px`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                },
                l = o.memo(function(e) {
                    let {
                        checkedState: t,
                        onClick: l,
                        checkboxType: s,
                        collectionContextStore: a,
                        isBlockHovered: c,
                        passesFilter: d,
                        disabled: u,
                        frozoneProps: h
                    } = e, [p, g] = (0, o.useState)(!1), v = (0, r(3755).J)(), m = (0, o.useRef)(null);
                    (0, o.useEffect)(() => {
                        m.current && (m.current.indeterminate = "partial" === t)
                    }, [t]);
                    let f = (0, r(682985).O$)(r(966225).Hf),
                        b = (0, r(960253).e)(),
                        S = (0, r(682985).K8)(() => {
                            if (!a || !a.isDashboardWidget()) return !1;
                            let e = a.getViewType();
                            return "table" === e || "list" === e
                        }, [a]),
                        y = (0, o.useCallback)(e => {
                            if (u) return;
                            l(e);
                            let t = (0, r(752242).sl)(a) || {};
                            (0, r(104310).u)({
                                event: {
                                    eventName: "collection_multi_select_checkbox_clicked",
                                    eventProperties: { ...t,
                                        checkbox_type: s
                                    }
                                }
                            })
                        }, [u, s, a, l]),
                        x = (0, o.useMemo)(() => (!1 !== t || p) && !f ? 1 : c ? "high" === v ? 1 : .7 : null != h && h.shouldShowStickyMultiSelectColumn ? "high" === v ? .8 : .5 : 0, [t, v, p, f, c, null == h ? void 0 : h.shouldShowStickyMultiSelectColumn]),
                        k = (0, r(960253).I)(() => {
                            let e = null != h && h.shouldShowStickyMultiSelectColumn ? +(x > 0) : x;
                            return {
                                multiSelectCheckbox: {
                                    background: null != h && h.isScrolled ? null == h ? void 0 : h.frozenStyles.background : void 0,
                                    borderBottom: r(632079).Tj.border.primary,
                                    height: "100%"
                                },
                                label: {
                                    height: "100%",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    display: "flex",
                                    cursor: u ? void 0 : "pointer",
                                    zIndex: 1
                                },
                                checkboxContainer: S ? (0, r(104335).CF)(b) : {},
                                animate: {
                                    opacity: e
                                }
                            }
                        }, [x, u, null == h ? void 0 : h.frozenStyles.background, null == h ? void 0 : h.isScrolled, null == h ? void 0 : h.shouldShowStickyMultiSelectColumn, S, b]),
                        w = (0, o.useCallback)(() => {
                            g(!0)
                        }, []),
                        A = (0, o.useCallback)(() => {
                            g(!1)
                        }, []);
                    return (0, n.jsxs)(r(654979).A, {
                        animate: k.animate,
                        style: k.multiSelectCheckbox,
                        onMouseEnter: w,
                        onMouseLeave: A,
                        children: [(0, n.jsx)("div", {
                            style: i.multiSelectCheckboxInner,
                            children: (0, n.jsx)("label", {
                                style: k.label,
                                onClick: r(933143).k,
                                onMouseDown: r(220684).t,
                                children: (0, n.jsx)("div", {
                                    style: { ...i.container,
                                        ...k.checkboxContainer
                                    },
                                    children: (0, n.jsx)(r(349050).S, {
                                        ref: m,
                                        checked: t,
                                        onClick: y,
                                        disabled: u,
                                        size: 16
                                    })
                                })
                            })
                        }), null != h && h.shouldFreezeMultiSelectColumn ? (0, n.jsx)(r(646427).A, {
                            isCollectionViewBlockSelected: null == h ? void 0 : h.isCollectionViewBlockSelected,
                            passesFilter: d,
                            isCheckbox: !0,
                            isScrolled: !0
                        }) : null]
                    })
                })
        },
        89352: (e, t, r) => {
            r.d(t, {
                j: () => o
            });

            function o() {
                return r(447036).Gb() ? r(129894).A : r(363746).A
            }
        },
        104335: (e, t, r) => {
            r.d(t, {
                AU: () => n,
                CF: () => l,
                rj: () => i,
                y9: () => o
            });
            let o = 24,
                n = -3,
                i = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        padding: 2,
                        background: r(632079).Tj.background.primary,
                        border: `1px solid ${r(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        boxShadow: r(632079).Tj.shadow.outline.md,
                        pointerEvents: "auto"
                    }
                };

            function l(e) {
                return {
                    background: r(632079).Tj.background.primary,
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    borderRadius: 6,
                    boxSizing: "border-box",
                    boxShadow: r(710575).$.shadow[e].base.sm,
                    padding: 2
                }
            }
        },
        139780: (e, t, r) => {
            r.d(t, {
                d: () => n
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.4 2.39 15.2 15.86",
                    svg: (0, r(474848).jsx)("path", {
                        d: "m4.897 3.085-.122-.142a.625.625 0 0 0-.95.814l3.18 3.71h-3.98a.625.625 0 0 0-.367 1.13L6.6 11.462l-1.506 4.636a.625.625 0 0 0 .962.699L10 13.932l3.943 2.865a.625.625 0 0 0 .903-.183l1.215 1.418a.625.625 0 1 0 .95-.814l-.495-.576a.6.6 0 0 1-.127-.113l-11.4-13.3a.6.6 0 0 1-.093-.144m.051 5.632h3.129l5.018 5.853.027.085-2.755-2.001a.625.625 0 0 0-.734 0l-2.755 2 1.052-3.237a.625.625 0 0 0-.227-.7zm8.633 2.613 3.762-2.733a.625.625 0 0 0-.367-1.13H12.1L10.594 2.83a.625.625 0 0 0-1.188 0L8.55 5.463l.953 1.112L10 5.046l1.052 3.239a.625.625 0 0 0 .595.432h3.404l-2.287 1.662z"
                    })
                },
                n = (0, r(104509).wt)("starSlash", o, "default")
        },
        260235: (e, t, r) => {
            function o(e) {
                var t, o;
                if (!e.isInLibraryBlock()) return;
                let n = e.getRecordStoreUIRoot();
                if (!(n instanceof r(678703).Bv)) return;
                let i = null == (t = (0, r(444610).U)(n)) ? void 0 : t.collectionViewStore();
                return null == (o = (0, r(134273).N)(i)) ? void 0 : o.viewName
            }

            function n({
                environment: e,
                selectedItems: t
            }) {
                if (0 === t.length) return;
                let i = r(728372).AppStoreCurrentUserSettingsStore.state,
                    l = r(728372).AppStoreSidebarSpaceViewStore.state,
                    s = r(728372).AppStoreSidebarSpaceStore.state,
                    a = e.currentUser.id,
                    c = o(t[0]);
                if (!i || !l || !a || !s || !c || ! function({
                        libraryViewName: e,
                        blocks: t,
                        userId: o,
                        spaceStore: n,
                        spaceViewStore: i
                    }) {
                        if (t.some(e => e.isArchived())) return !1;
                        switch (e) {
                            case "recents":
                            case "teamspaceDirectory":
                            case "libraryExternalPages":
                            case "myMeetings":
                            case "agents":
                                return !1;
                            case "favorites":
                                let l = i.getBookmarkedPageIds();
                                return t.every(e => l.includes(e.id));
                            case "private":
                                return t.every(e => (0, r(528991).K)(e));
                            case "shared":
                                return t.every(e => (0, r(260405).B)({
                                    store: e,
                                    spaceStore: n,
                                    userId: o
                                }));
                            default:
                                return (0, r(722371).HB)(e), !1
                        }
                    }({
                        libraryViewName: c,
                        blocks: t,
                        userId: a,
                        spaceStore: s,
                        spaceViewStore: l
                    })) return;
                let d = r(678703).VF.createChildStore(l, (0, r(729052).i1)({
                    userId: a,
                    spaceId: l.id
                }));
                if (d) return {
                    environment: e,
                    selectedItems: t,
                    userSettingsStore: i,
                    spaceViewStore: l,
                    spaceUserStore: d,
                    libraryViewName: c
                }
            }
            r.d(t, {
                o: () => o,
                s: () => n
            }), r(898992), r(823215), r(737550)
        },
        430462: (e, t, r) => {
            r.d(t, {
                Q: () => o
            });

            function o(e, t) {
                let o = t.collectionViewBlockStore();
                return !!o && o.isRootOrDirectChild() && (0, r(424332).dC)(e, o) && !t.isFullScreenStore.state && !(0, r(335818).Ck)(o, void 0, e.device) && !o.isCollectionViewPageWithContent()
            }
        },
        476743: (e, t, r) => {
            r.d(t, {
                a: () => o
            });

            function o() {
                return (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        622858: (e, t, r) => {
            r.d(t, {
                x: () => n
            }), r(296540);
            var o = r(474848);

            function n(e) {
                let {
                    children: t,
                    isCollectionViewBlockSelected: n,
                    passesFilter: i,
                    shouldFreeze: l
                } = e, s = (0, r(960253).I)(() => ({
                    container: {
                        display: "flex",
                        background: n && i ? "rgba(35, 131, 226, 0.14)" : void 0
                    }
                }), [n, i]);
                return l ? (0, o.jsx)(r(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    style: s.container,
                    children: t
                }, "halo") : (0, o.jsx)(o.Fragment, {
                    children: t
                })
            }
        },
        622862: (e, t, r) => {
            r.d(t, {
                Y: () => l
            }), r(581454);
            var o = () => r(722371),
                n = () => r(181472),
                i = () => r(818646);

            function l({
                modificationType: e,
                storesToModify: t,
                spaceViewStore: s,
                transaction: a
            }) {
                let c = s.getBookmarkedPagesStore();
                for (let l of t.map(e => r(970831).B.createChildStore(c, e.pointer)).reverse()) "add" === e ? (0, n().H)({
                    parentStore: c,
                    prependStore: l,
                    transaction: a
                }) : "remove" === e ? (0, i().T)({
                    parentStore: c,
                    childToRemoveStore: l,
                    transaction: a
                }) : (0, o().HB)(e)
            }
        },
        646427: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var o = r(296540),
                n = r(474848);
            let i = o.memo(function(e) {
                let {
                    isCollectionViewBlockSelected: t,
                    passesFilter: o,
                    isScrolled: i,
                    isCheckbox: l,
                    isShimmerRow: s
                } = e, a = (0, r(960253).e)(), c = (0, r(960253).I)(() => {
                    let e = "";
                    return e = "dark" === a ? "transparent" : o && !t ? r(632079).Tj.frozenColumnDividerShadowBackgroundFiltered : r(632079).Tj.frozenColumnDividerShadowBackground, {
                        border: {
                            position: "absolute",
                            insetInlineEnd: 0,
                            width: 1,
                            height: s ? 35 : "100%",
                            background: o && !t || "dark" === a ? r(632079).Tj.border.primary : r(632079).Tj.tableFrozenFilterDividerColor
                        },
                        shadow: {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: -3,
                            width: 3,
                            height: s ? 34 : "100%",
                            background: e
                        },
                        animate: {
                            opacity: +!!i
                        }
                    }
                }, [s, o, t, i, a]);
                return (0, n.jsxs)(r(4458).fI, {
                    height: "100%",
                    children: [l ? null : (0, n.jsx)("div", {
                        style: c.border
                    }), (0, n.jsx)(r(654979).A, {
                        visible: !0,
                        animate: c.animate,
                        children: (0, n.jsx)("div", {
                            style: c.shadow
                        })
                    })]
                })
            })
        },
        684603: (e, t, r) => {
            r.d(t, {
                B: () => o
            });

            function o({
                hideTextWithTransition: e,
                hideTextWithoutTransition: t
            }) {
                let n = (0, r(643160).sR)();
                return {
                    button: {
                        display: "flex",
                        alignItems: "center",
                        height: void 0 !== r(986939).A.isMobile ? r(47080).wc + 1 : void 0,
                        width: "100%",
                        paddingInlineStart: r(47080).tz,
                        lineHeight: r(699422).K_.UIRegular.desktop
                    },
                    buttonInner: {
                        fontSize: 14,
                        color: r(632079).Tj.text.tertiary,
                        display: "inline-flex",
                        alignItems: "center",
                        position: "sticky",
                        insetInlineStart: r(986939).A.isMobile ? r(47080).Fh : r(47080).tz + r(47080).Fh,
                        opacity: +!e,
                        transition: "opacity 0.2s ease",
                        ...t && {
                            display: "none"
                        }
                    },
                    icon: {
                        width: r(986939).A.isMobile ? r(104509).Ev.default : r(104509).Ev.sm,
                        height: r(986939).A.isMobile ? r(104509).Ev.default : r(104509).Ev.sm,
                        ...n ? {
                            marginInlineEnd: 8
                        } : {
                            marginInlineStart: +!r(986939).A.isMobile,
                            marginInlineEnd: 7
                        },
                        fill: r(632079).Tj.icon.tertiary
                    }
                }
            }
        },
        739411: (e, t, r) => {
            r.d(t, {
                Y: () => i
            });
            var o = () => r(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        phase: "idle"
                    }
                }
            }
            let i = new n
        },
        742782: (e, t, r) => {
            r.d(t, {
                d: () => n
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.22 2.75 16.5 13.24",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M17 14.745a.625.625 0 0 1 0 1.25H8a.625.625 0 1 1 0-1.25zm.1-3.333a.625.625 0 1 1 0 1.25H7.9l-.127-.013a.626.626 0 0 1 0-1.224l.126-.013zm0-3.334a.625.625 0 0 1 0 1.25H7.9l-.127-.013a.626.626 0 0 1 0-1.224l.126-.013zM1.23 3.317a.56.56 0 0 1 .842-.485l2.881 1.687c.37.217.37.754 0 .971l-2.88 1.688a.56.56 0 0 1-.843-.486zm15.87.688c.345 0 .625.28.626.625v.75c0 .345-.28.624-.625.625H7.9a.625.625 0 0 1-.626-.625v-.75l.013-.126a.626.626 0 0 1 .612-.5z"
                    })
                },
                n = (0, r(104509).wt)("layoutAbovePageContent", o, "default")
        },
        796123: (e, t, r) => {
            r.r(t), r.d(t, {
                showAsyncModal: () => n,
                showAsyncModalComponent: () => i,
                testOnly: () => p
            }), r(898992), r(354520), r(672577), r(581454);
            var o = r(296540);

            function n(e, t = r(2009).w) {
                return new Promise((r, o) => {
                    try {
                        let n = d({
                            renderModal: e,
                            promiseResolve: r,
                            promiseReject: o,
                            store: t
                        });
                        l({
                            asyncModal: n,
                            store: t
                        })
                    } catch (e) {
                        o(e)
                    }
                })
            }

            function i(e, t = r(2009).w) {
                return n(t => o.createElement(e, t), t)
            }

            function l(e) {
                let {
                    asyncModal: t,
                    store: o = r(2009).w
                } = e;
                o.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: o,
                    store: n = r(2009).w
                } = e;
                return e => {
                    let r = u({
                        id: t,
                        store: n
                    });
                    null != r && r.isOpen && (h({
                        id: t,
                        store: n,
                        update: {
                            isOpen: !1
                        }
                    }), o(e))
                }
            }

            function a(e) {
                let {
                    id: t,
                    promiseResolve: o,
                    store: n = r(2009).w
                } = e;
                return () => {
                    let e = u({
                        id: t,
                        store: n
                    });
                    null != e && e.isOpen && (h({
                        id: t,
                        store: n,
                        update: {
                            isOpen: !1
                        }
                    }), o())
                }
            }

            function c(e) {
                let {
                    id: t,
                    store: o = r(2009).w
                } = e;
                return () => {
                    o.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function d(e) {
                let {
                    renderModal: t,
                    promiseResolve: o,
                    promiseReject: n,
                    store: i = r(2009).w
                } = e, l = r(92513).JW(), d = c({
                    id: l,
                    store: i
                }), u = a({
                    id: l,
                    promiseResolve: o,
                    store: i
                }), h = s({
                    id: l,
                    promiseResolve: o,
                    store: i
                });
                return {
                    id: l,
                    internalRenderModal: e => {
                        try {
                            return t({
                                isOpen: e,
                                onClosed: d,
                                onDismiss: u,
                                resolve: h
                            })
                        } catch (e) {
                            throw n(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function u(e) {
                let {
                    id: t,
                    store: o = r(2009).w
                } = e;
                return o.state.asyncModals.find(e => e.id === t)
            }

            function h(e) {
                let {
                    id: t,
                    update: o,
                    store: n = r(2009).w
                } = e;
                n.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...o
                    })
                }))
            }
            let p = {
                addAsyncModal: l,
                createAsyncModal: d,
                createOnClosed: c,
                createOnDismiss: a,
                createResolve: s,
                getAsyncModal: u,
                updateAsyncModal: h
            }
        },
        818795: (e, t, r) => {
            r.d(t, {
                E: () => n
            }), r(581454), r(296540);
            var o = r(474848);

            function n(e) {
                let {
                    isFullScreen: t,
                    hasGroups: n,
                    propertyWidths: i,
                    hasPartialResults: l,
                    hasSearchQuery: s,
                    frozoneProps: a
                } = e, c = (0, r(533992).v3)(), d = (0, r(960253).e)(), u = (0, r(533992).Y0)().isPhone, h = (0, r(713311).Ks)(), p = (0, r(934877).A)({
                    visibility: !0,
                    delayShow: 0,
                    delayHold: 100
                }), g = (0, r(682985).K8)(() => !!(null == h ? void 0 : h.normalizedFormatStore.state.hide_table_vertical_lines), [h]), v = a.isScrolled, m = a.frozenIndex, f = void 0 !== m, b = (0, r(643160).yf)(), S = (0, r(682985).K8)(() => {
                    if (!h) return !1;
                    let e = h.collectionViewBlockStore();
                    return !!e && (0, r(374934).d1)(e)
                }, [h]), y = (0, r(682985).K8)(() => h ? (0, r(81228).w)({
                    environment: c,
                    collectionContextStore: h,
                    isPhone: u,
                    theme: r(632079).Tj,
                    themeMode: d
                }) : {}, [h, c, u, d]), x = (0, r(682985).K8)(() => !!(null == h ? void 0 : h.isInHomeWidgetStore.state), [null == h ? void 0 : h.isInHomeWidgetStore]), k = (0, r(960253).I)(() => {
                    let e = "0x 16px";
                    return f ? e = void 0 : x && (e = 0), {
                        frozenColumnsContainer: {
                            display: "flex",
                            flexDirection: "row",
                            ...y,
                            ...-1 === m ? {
                                background: void 0
                            } : {}
                        },
                        rowContainer: {
                            display: "flex",
                            alignItems: "flex-start",
                            padding: e,
                            borderBottom: `1px solid ${r(632079).Tj.border.secondaryTranslucent}`,
                            ...b ? {
                                marginInlineStart: r(57461).dE.paddingInlineStart,
                                width: `calc(100% - ${r(57461).dE.paddingInlineStart}px)`
                            } : {
                                width: "100%"
                            }
                        },
                        rowShimmer: {
                            height: 10,
                            flexShrink: 0,
                            borderRadius: 12,
                            backgroundColor: r(632079).Tj.background.tertiaryTranslucent,
                            marginInlineStart: 8 * !f
                        },
                        column: {
                            display: "flex",
                            height: r(47080).wc,
                            padding: "0px 8px",
                            alignItems: "center",
                            borderInlineEnd: g ? void 0 : `1px solid ${r(632079).Tj.border.secondaryTranslucent}`
                        }
                    }
                }, [f, x, y, m, g, b]);
                if (!p || !h) return null;
                let w = i.map((e, t) => (0, o.jsx)("div", {
                        style: { ...k.column,
                            width: e
                        },
                        children: (0, o.jsx)(r(795830).P, {
                            style: { ...k.rowShimmer,
                                width: (e - 16) * .6
                            }
                        })
                    }, t)),
                    A = null,
                    I = [];
                if (f && void 0 !== m) {
                    let e = w.slice(0, m + 1);
                    A = (0, o.jsxs)("div", {
                        style: k.frozenColumnsContainer,
                        children: [(0, o.jsx)(r(622858).x, {
                            isCollectionViewBlockSelected: S,
                            passesFilter: !0,
                            shouldFreeze: -1 !== m,
                            children: e
                        }), e.length > 0 ? (0, o.jsx)(r(646427).A, {
                            isCollectionViewBlockSelected: S,
                            passesFilter: !0,
                            isShimmerRow: !0,
                            isScrolled: v
                        }) : null]
                    }), I = w.slice(m + 1, w.length)
                } else I = w;
                let C = 1;
                n || l || s || (C = t ? 10 : 3);
                let j = [...Array(C)].map((e, t) => (0, o.jsxs)("div", {
                    style: k.rowContainer,
                    children: [A, I]
                }, t));
                return (0, o.jsx)(r(4458).fI, {
                    alignItems: "flex-start",
                    children: (0, o.jsx)(r(4458).VP, {
                        alignItems: "flex-start",
                        width: "100%",
                        children: j
                    })
                })
            }
        },
        854108: (e, t, r) => {
            r.d(t, {
                V: () => o
            });
            async function o({
                userSettingsStore: e,
                spaceViewStore: t,
                spaceUserStore: n,
                selectedItems: i,
                libraryViewName: l,
                analyticsFrom: s,
                environment: a
            }) {
                switch ("teamspaceDirectory" !== l && "libraryExternalPages" !== l && (0, r(723836).xN)({
                    environment: a,
                    eventProperties: {
                        from: s,
                        section_type: l,
                        item_count: i.length
                    }
                }), l) {
                    case "favorites":
                        let c = t.getSpaceId();
                        (0, r(377796).createAndCommit)({
                            userAction: "libraryBulkRowActions.addToFavorites",
                            environment: a,
                            cellTarget: {
                                spaceWithId: c
                            },
                            canUndo: !0,
                            perform: e => {
                                (0, r(622862).Y)({
                                    modificationType: "add",
                                    spaceViewStore: t,
                                    storesToModify: i,
                                    transaction: e
                                })
                            }
                        });
                        break;
                    case "shared":
                    case "private":
                        let d = "shared" === l ? t.getSharedPagesStore() : t.getPrivatePagesStore(),
                            u = "shared" === l ? (0, r(500957).a)({
                                environment: a,
                                spaceViewStore: t,
                                userSettingsStore: e,
                                type: l
                            }).state.visiblePagesStores[0] : void 0;
                        await r(245757).Hu({
                            type: l,
                            environment: a,
                            droppedStores: i,
                            duplicate: !1,
                            duplicateActions: void 0,
                            isDroppingOnFullSection: !1,
                            spaceUserStore: n,
                            isTopLevelItem: !0,
                            droppedDirection: r(966225).bH.Above,
                            targetParentStore: d,
                            targetStore: u
                        });
                        break;
                    case "recents":
                    case "teamspaceDirectory":
                    case "libraryExternalPages":
                    case "myMeetings":
                    case "agents":
                        break;
                    default:
                        (0, r(722371).HB)(l)
                }
            }
        },
        857064: (e, t, r) => {
            function o(e) {
                return e.every(e => {
                    if (!e.isPersonProfile()) return !1;
                    let t = e.getModel();
                    return !!t && (0, r(907137).dY)({
                        personProfileBlock: t,
                        getRecordModel: e.getRecordModel
                    })
                })
            }

            function n(e) {
                return !!r(218744).default.checkGate({
                    gateName: "person_profile_deletion"
                }) && o(e.blocks)
            }
            r.d(t, {
                P: () => n,
                d: () => o
            }), r(898992), r(823215)
        },
        937776: (e, t, r) => {
            r.d(t, {
                B: () => i
            }), r(296540);
            var o = r(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, r(104509).wt)("archiveBox", n, "default")
        },
        940130: (e, t, r) => {
            r.d(t, {
                or: () => p,
                FY: () => d,
                DZ: () => u
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(823215), r(354520), r(803949), r(581454), r(737550);
            var o = r(296540),
                n = () => r(60748);
            r(944114), r(672577);
            let i = new(r(815048)).O2("RunAgentOnBulkActionsButton", async () => Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(62475), r.e(3151), r.e(18965), r.e(98629), r.e(11082), r.e(37571), r.e(29151), r.e(51383), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(17250), r.e(26997), r.e(73259), r.e(28048), r.e(93430), r.e(55940), r.e(12560), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(87971), r.e(6212), r.e(2626), r.e(64453), r.e(4779), r.e(29663), r.e(28482), r.e(76361), r.e(14369), r.e(74145), r.e(56308), r.e(48860), r.e(75136), r.e(98175), r.e(18682), r.e(55067), r.e(83490), r.e(58360), r.e(33162), r.e(63793), r.e(18881), r.e(12690), r.e(62731), r.e(68583), r.e(41049), r.e(60262), r.e(72805), r.e(18416), r.e(35602), r.e(90735), r.e(12024), r.e(30532), r.e(69684), r.e(81603), r.e(49297), r.e(3723), r.e(91100), r.e(78288), r.e(68719), r.e(40716), r.e(4287), r.e(55755), r.e(19812), r.e(18378), r.e(95969), r.e(65594), r.e(38814), r.e(48328), r.e(91636), r.e(56703), r.e(63821), r.e(72933), r.e(5406), r.e(28372), r.e(29087), r.e(85129), r.e(7912), r.e(64476), r.e(48617), r.e(2832), r.e(77575), r.e(74063), r.e(14401), r.e(64748), r.e(37461), r.e(35635), r.e(86730)]).then(r.bind(r, 39118))),
                l = (0, r(815048)._h)(i, e => e.RunAgentOnBulkActionsButton);
            var s = () => r(546605);
            class a extends s().Store {
                getInitialState() {
                    return {
                        textStoresBeingEdited: []
                    }
                }
                getNumberOfTextStoresBeingEdited() {
                    return this.state.textStoresBeingEdited.length
                }
                textStoresWithEmptyProperty(e) {
                    return this.state.textStoresBeingEdited.filter(t => {
                        let o = t.getPropertyValue(e);
                        return "" === r(247438).q4_(o)
                    })
                }
            }
            var c = r(474848);

            function d() {
                return {
                    boxShadow: `1px 0 0 ${r(632079).Tj.border.secondaryTranslucent}`,
                    marginInlineEnd: 1
                }
            }
            let u = (0, r(109939).YK)({
                    archive: {
                        id: "CollectionsBulkActionsToolbar.archiveButton.tooltip",
                        defaultMessage: "Archive"
                    },
                    unarchive: {
                        id: "CollectionsBulkActionsToolbar.unarchiveButton.tooltip",
                        defaultMessage: "Unarchive"
                    },
                    delete: {
                        id: "CollectionsBulkActionsToolbar.deleteButton.tooltip",
                        defaultMessage: "Move to Trash"
                    },
                    moveToTopOfSection: {
                        id: "CollectionsBulkActionsToolbar.moveToTopOfSectionButton.tooltip",
                        defaultMessage: "Move to top of {sectionName}"
                    },
                    removeFromFavorites: {
                        id: "CollectionsBulkActionsToolbar.removeFromFavoritesButton.tooltip",
                        defaultMessage: "Remove from {sectionName}"
                    }
                }),
                h = {
                    inner: {
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        background: r(632079).Tj.popoverBackground,
                        boxShadow: r(632079).Tj.shadow.outline.md,
                        height: 32
                    },
                    outerLayoutAdjust: {
                        marginBottom: -32
                    },
                    style0: {
                        width: "fit-content"
                    }
                };

            function p(e) {
                let {
                    marginLeft: t
                } = e, n = (0, r(533992).v3)(), i = (0, o.useRef)(null), l = (0, o.useRef)(void 0), s = (0, r(713311).ET)(), d = (0, r(682985).K8)(() => s.collectionViewBlockStore(), [s]), u = (0, r(682985).uB)(void 0, a), [p, g] = (0, o.useState)(!1), {
                    selectedItems: v,
                    selectedItemCount: m
                } = (0, r(682985).K8)(() => {
                    let e = r(584265).default.state.stores;
                    return {
                        selectedItems: e,
                        selectedItemCount: e.length
                    }
                }, []), f = (0, r(682985).K8)(() => u.getNumberOfTextStoresBeingEdited(), [u]), b = (0, r(682985).K8)(() => !(!(0, r(28630).f5)({
                    collectionContextStore: s
                }) || v.some(e => {
                    var t;
                    return null == (t = e.getAssociatedCollectionStore()) ? void 0 : t.isExternallyImportedAndSyncedCollection()
                })) && (f > 0 || v.length >= 1 && (0, r(28630).Rd)(v, null == d ? void 0 : d.id)), [s, d, f, v]);
                (0, r(682985).K8)(() => {
                    let e = (0, r(89352).j)().state;
                    if (e.isOpen) {
                        l.current = e.property;
                        return
                    }
                    l.current && function({
                        collectionContextStore: e,
                        property: t,
                        blockStores: o
                    }) {
                        let n = e.normalizedFormatStore.state.collection_group_by;
                        if ((null == n ? void 0 : n.property) !== t) return;
                        let i = function(e, t) {
                                let o = new Map,
                                    n = t.groupsStore.getAllGroupStates(),
                                    i = (0, r(381453).E$)(e, r(584265).default.state.stores);
                                if (!i.length) return o;
                                for (let e of i) {
                                    let t = n.find(t => t.groupUiParentStore === e.getRecordStoreUIParent());
                                    t && o.set(e, t.resultsStore)
                                }
                                return o
                            }(o, e),
                            l = [];
                        for (let [e, t] of i.entries()) t.state.includes(e) || l.push(e);
                        l.length && (0, r(962059).D)({
                            stores: (0, r(381453).R9)(r(584265).default.state.stores, l)
                        })
                    }({
                        collectionContextStore: s,
                        property: l.current,
                        blockStores: v
                    })
                }, [s, v], {
                    debugName: "cleanUpSelection"
                });
                let S = (0, r(682985).K8)(() => d && "suggest" !== r(708929).Uv.getMode(d), [d]);
                (0, o.useEffect)(() => {
                    !b && s.bulkSelectionStore.state.isSelectAll && (0, r(203272).wi)({
                        collectionContextStore: s
                    })
                }, [b, s]);
                let y = (0, o.useCallback)(e => {
                        e || g(!1)
                    }, []),
                    x = (0, r(960253).I)(() => ({
                        outer: {
                            position: "sticky",
                            top: 1,
                            insetInlineStart: t ? ? 0,
                            zIndex: 999,
                            visibility: p ? "visible" : "hidden",
                            width: "fit-content"
                        }
                    }), [p, t]),
                    k = (0, r(682985).K8)(() => s.isInLibraryBlock(), [s]),
                    w = (0, r(463846).A)(b);
                return (0, c.jsxs)(r(654979).A, {
                    visible: b,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onAnimationEnd: y,
                    ref: i,
                    ...w,
                    style: x.outer,
                    children: [(0, c.jsx)(r(385827).s, {
                        allowSelectionWithin: !1,
                        style: h.style0,
                        children: (0, c.jsxs)("div", {
                            style: h.inner,
                            children: [(0, c.jsx)(r(953601).K, {
                                selectedItemCount: m,
                                numTextStoresBeingEdited: f,
                                collectionContextStore: s
                            }), k ? (0, c.jsx)(A, {
                                environment: n,
                                collectionContextStore: s,
                                selectedItems: v,
                                showDeleteButton: S,
                                setIsReadyToRender: g
                            }) : (0, c.jsx)(I, {
                                environment: n,
                                collectionContextStore: s,
                                collectionsBulkActionsToolbarStore: u,
                                selectedItems: v,
                                marginLeft: t,
                                setIsReadyToRender: g,
                                outerContainerRef: i,
                                showDeleteButton: S
                            })]
                        })
                    }), (0, c.jsx)("div", {
                        style: h.outerLayoutAdjust
                    })]
                })
            }
            let g = {
                button: {
                    borderRadius: 0,
                    height: "100%",
                    border: 0,
                    ...d()
                }
            };

            function v(e) {
                let {
                    environment: t,
                    selectedItems: o
                } = e, n = (0, r(682985).K8)(() => (0, r(260235).s)({
                    environment: t,
                    selectedItems: o
                }), [t, o]), i = (0, r(109939).tz)();
                if (!n) return null;
                let l = (0, r(413388).Ws)(n.libraryViewName, i);
                return (0, c.jsx)(r(988022).p, {
                    iconLeading: r(742782).d,
                    style: g.button,
                    onClick: async () => {
                        await r(854108).V({ ...n,
                            analyticsFrom: "bulk_actions_toolbar"
                        }), (0, r(471e3).I)({
                            environment: t
                        })
                    },
                    children: (0, c.jsx)(r(109939).sA, { ...u.moveToTopOfSection,
                        values: {
                            sectionName: l
                        }
                    })
                })
            }
            let m = {
                button: {
                    borderRadius: 0,
                    height: "100%",
                    border: 0,
                    ...d(),
                    width: 28
                }
            };

            function f(e) {
                let {
                    environment: t,
                    selectedItems: o
                } = e, n = (0, r(109939).tz)(), i = (0, r(476743).a)(), l = (0, r(682985).K8)(() => {
                    if (0 === o.length) return !1;
                    let e = (0, r(260235).o)(o[0]),
                        t = (null == i ? void 0 : i.getBookmarkedPageIds()) ? ? [];
                    return "favorites" === e && o.every(e => t.includes(e.id))
                }, [o, i]), s = (0, r(413388).Ws)("favorites", n);
                return l && i ? (0, c.jsx)(r(51831).m, {
                    content: () => (0, c.jsx)(r(109939).sA, { ...u.removeFromFavorites,
                        values: {
                            sectionName: s
                        }
                    }),
                    placement: "top",
                    children: e => (0, c.jsx)(r(374533).A, { ...e,
                        ariaLabel: n.formatMessage(u.removeFromFavorites, {
                            sectionName: s
                        }),
                        icon: () => (0, c.jsx)(r(16275).I, {
                            icon: r(139780).d
                        }),
                        style: m.button,
                        hasBackground: !0,
                        colorVariant: "primary",
                        showShadow: !0,
                        onClick: () => {
                            var e;
                            let n = null == (e = o[0]) ? void 0 : e.getSpaceId();
                            (0, r(377796).createAndCommit)({
                                userAction: "CollectionsBulkActionsToolbar.removeFromFavorites",
                                environment: t,
                                cellTarget: n ? {
                                    spaceWithId: n
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, r(622862).Y)({
                                        modificationType: "remove",
                                        spaceViewStore: i,
                                        storesToModify: o,
                                        transaction: e
                                    })
                                }
                            }), (0, r(471e3).I)({
                                environment: t
                            })
                        }
                    })
                }) : null
            }
            let b = {
                archiveButton: {
                    borderRadius: 0,
                    height: "100%",
                    border: 0,
                    ...d(),
                    width: 28
                },
                archiveButtonIconHovered: {
                    background: r(632079).Tj.background.secondary
                }
            };

            function S(e) {
                let {
                    environment: t,
                    collectionContextStore: o,
                    selectedItems: i
                } = e, l = (0, r(109939).tz)(), s = (0, r(83208).X)("collections_bulk_action"), a = (0, r(682985).K8)(() => "ARCHIVED" === o.archiveStatusStore.state, [o]), d = a ? u.unarchive : u.archive;
                return (0, c.jsx)(r(51831).m, {
                    content: () => (0, c.jsx)(r(109939).sA, { ...d
                    }),
                    placement: "top",
                    children: e => (0, c.jsx)(r(374533).A, { ...e,
                        ariaLabel: l.formatMessage(d),
                        icon: () => (0, c.jsx)(r(16275).I, {
                            icon: r(937776).B
                        }),
                        style: b.archiveButton,
                        hoveredStyle: b.archiveButtonIconHovered,
                        colorVariant: "primary",
                        showShadow: !0,
                        onClick: async () => {
                            var e, l;
                            if ((0, r(658024).N)(t, {
                                    analyticsName: a ? "Unarchive page" : "Archive page",
                                    from: "bulk_actions_toolbar",
                                    block_type: "page",
                                    collection_id: null == (e = o.collectionStore()) ? void 0 : e.id
                                }), s && o.bulkSelectionStore.state.isSelectAll) return void await (0, r(61149).U)({
                                environment: t,
                                collectionContextStore: o,
                                bulkAction: {
                                    type: a ? "unarchive" : "archive"
                                }
                            });
                            if (a) {
                                let e = null == (l = i[0]) ? void 0 : l.getSpaceId();
                                (0, r(377796).createAndCommit)({
                                    userAction: "CollectionsBulkActionsToolbar.unarchive",
                                    environment: t,
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        for (let t of i)(0, n().T)({
                                            blockStore: t,
                                            transaction: e
                                        })
                                    }
                                })
                            } else(0, n().B)({
                                environment: t,
                                blocks: i
                            })
                        }
                    })
                })
            }
            let y = {
                trashButton: {
                    borderRadius: 0,
                    height: "100%",
                    border: 0,
                    ...d(),
                    width: 28
                },
                trashButtonIconHovered: {
                    fill: r(632079).Tj.red.icon.accentPrimary
                }
            };

            function x(e) {
                let {
                    environment: t,
                    collectionContextStore: o,
                    selectedItems: n
                } = e, i = (0, r(109939).tz)(), l = (0, r(83208).X)("collections_bulk_action");
                return (0, c.jsx)(r(51831).m, {
                    content: () => (0, c.jsx)(r(109939).sA, { ...u.delete
                    }),
                    placement: "top",
                    children: e => (0, c.jsx)(r(374533).A, { ...e,
                        ariaLabel: i.formatMessage(u.delete),
                        icon: () => (0, c.jsx)(r(16275).I, {
                            icon: r(968411).trashIcon
                        }),
                        style: y.trashButton,
                        hoveredStyle: y.trashButtonIconHovered,
                        colorVariant: "primary",
                        showShadow: !0,
                        onClick: async () => {
                            var e;
                            ((0, r(658024).N)(t, {
                                analyticsName: r(233319).AY.moveToTrashName.defaultMessage,
                                from: "bulk_actions_toolbar",
                                block_type: "page",
                                collection_id: null == (e = o.collectionStore()) ? void 0 : e.id
                            }), l && o.bulkSelectionStore.state.isSelectAll) ? await (0, r(61149).U)({
                                environment: t,
                                collectionContextStore: o,
                                bulkAction: {
                                    type: "delete"
                                }
                            }) : await (0, r(660262).A)({
                                environment: t,
                                blocks: n,
                                shouldCheckSuggestEdit: !0,
                                overrideRemoveBlockFunc: (e, t) => {
                                    var n, i;
                                    (null == (n = e.getAssociatedCollectionStore()) ? void 0 : n.id) === (null == (i = o.collectionStore()) ? void 0 : i.id) && r(579695).by({
                                        childStore: e,
                                        transaction: t
                                    })
                                }
                            })
                        }
                    })
                })
            }
            let k = {
                blockActionMenuButton: {
                    width: 30,
                    height: "100%",
                    borderRadius: void 0,
                    borderStartEndRadius: 5,
                    borderEndEndRadius: 5
                },
                blockActionMenuButtonIcon: {
                    fill: r(632079).Tj.text.primary
                }
            };

            function w(e) {
                let {
                    store: t
                } = e;
                return (0, c.jsx)(r(957145).A, {
                    store: t,
                    fadeIn: !1,
                    style: k.blockActionMenuButton,
                    hoveredStyle: k.blockActionMenuButton,
                    iconStyle: k.blockActionMenuButtonIcon,
                    extraAnalyticsData: {
                        isFromBulkActionsToolbar: !0
                    },
                    isFromCollectionView: !0
                })
            }

            function A(e) {
                let {
                    environment: t,
                    collectionContextStore: n,
                    selectedItems: i,
                    showDeleteButton: l,
                    setIsReadyToRender: s
                } = e, a = (0, r(682985).K8)(() => l && i.every(e => e.canEdit()), [i, l]);
                return (0, o.useEffect)(() => {
                    s(!0)
                }, [s]), (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(v, {
                        environment: t,
                        selectedItems: i
                    }), (0, c.jsx)(f, {
                        environment: t,
                        selectedItems: i
                    }), a ? (0, c.jsx)(x, {
                        environment: t,
                        collectionContextStore: n,
                        selectedItems: i
                    }) : void 0, (0, c.jsx)(w, {
                        store: i[0]
                    })]
                })
            }

            function I(e) {
                let {
                    environment: t,
                    collectionContextStore: o,
                    collectionsBulkActionsToolbarStore: n,
                    selectedItems: i,
                    marginLeft: s,
                    setIsReadyToRender: a,
                    outerContainerRef: d,
                    showDeleteButton: u
                } = e, h = (0, r(551408).A)(), p = (0, r(83208).X)("person_profile_deletion"), {
                    collectionStore: g,
                    collectionViewBlockStore: v
                } = (0, r(682985).K8)(() => ({
                    collectionStore: o.collectionStore(),
                    collectionViewBlockStore: o.collectionViewBlockStore()
                }), [o], {
                    equalityFn: r(381453).n4
                }), m = (0, r(682985).K8)(() => !!u && (!(p && o.isPeopleCollection()) || !o.bulkSelectionStore.state.isSelectAll && (0, r(857064).d)(i)), [u, p, o, i]);
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(j, {
                        collectionsBulkActionsToolbarStore: n,
                        selectedItems: i,
                        marginLeft: s,
                        setIsReadyToRender: a,
                        outerContainerRef: d
                    }), (0, r(83208).X)("collections_bulk_action") ? (0, c.jsx)(S, {
                        environment: t,
                        collectionContextStore: o,
                        selectedItems: i
                    }) : void 0, m ? (0, c.jsx)(x, {
                        environment: t,
                        collectionContextStore: o,
                        selectedItems: i
                    }) : void 0, h ? (0, c.jsx)(l, {
                        collectionStore: g,
                        collectionViewBlockStore: v,
                        selectedItems: i
                    }) : void 0, (0, c.jsx)(w, {
                        store: i[0]
                    })]
                })
            }
            let C = new Set(["title", "rollup", "formula", "button"]);

            function j(e) {
                let {
                    outerContainerRef: t,
                    collectionsBulkActionsToolbarStore: n,
                    selectedItems: i,
                    marginLeft: l,
                    setIsReadyToRender: s
                } = e, a = (0, r(713311).ET)(), d = (0, o.useRef)(null), u = (0, o.useRef)([]), h = (0, r(682985).O$)(a.normalizedSchemaStore), p = !(0, r(682985).O$)(r(205885).e), g = (0, r(682985).K8)(() => {
                    var e;
                    let t = a.normalizedFormatStore.state;
                    return ((null == t || null == (e = t.table_properties) ? void 0 : e.filter(e => {
                        let t = a.collectionStore(),
                            {
                                property: o,
                                visible: n
                            } = e,
                            l = h[o];
                        return !(p && (0, r(722371).O9)(l) && (0, r(260682).$)({
                            propertyType: l.type,
                            propertySchema: l,
                            allowAIProperty: !0
                        })) && n && l && !C.has(l.type) && (0, r(799514).g2)({
                            propertySchema: l,
                            property: o,
                            blockStores: i,
                            collectionSchema: h,
                            collectionStore: t,
                            spaceStore: null == t ? void 0 : t.getSpaceStore()
                        })
                    })) ? ? []).slice(0, 6)
                }, [a, h, i, p]), [v, m] = (0, o.useState)(6), [f, b] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                        u.current.length > 0 && u.current.forEach(e => {
                            if (e) {
                                var t;
                                e.rightEdge = (null == (t = e.element) || null == (t = t.current) ? void 0 : t.getBoundingClientRect().right) ? ? 0
                            }
                        })
                    }, [u]),
                    function({
                        outerContainerRef: e,
                        propertyButtonsContainerRef: t,
                        propertyButtonRefs: n,
                        marginLeft: i,
                        setIsReadyToRender: l,
                        setShowIconsOnly: s,
                        setHiddenButtonsIndex: a
                    }) {
                        (0, o.useEffect)(() => {
                            let o = r(381453).sg(() => {
                                var r, o, c;
                                let d = (null == (r = e.current) ? void 0 : r.getBoundingClientRect().right) ? ? window.innerWidth,
                                    u = ((null == (o = e.current) ? void 0 : o.getBoundingClientRect().width) ? ? window.innerWidth) - (i ? ? 0),
                                    h = (null == (c = t.current) ? void 0 : c.getBoundingClientRect().left) ? ? 0,
                                    p = d - 150,
                                    g = n.current.findIndex(e => e.rightEdge > p);
                                g = -1 !== g ? g : 6;
                                let v = n.current.findIndex((e, t) => h + 32 * t > p);
                                v = -1 !== v ? v : 6;
                                let m = g < 2 || u <= 450;
                                s(m), a(m ? v : g), l(!0)
                            }, 150, {
                                maxWait: 150,
                                leading: !0,
                                trailing: !1
                            });
                            if (e.current) {
                                let t = new ResizeObserver(e => {
                                    o()
                                });
                                return o(), t.observe(e.current), () => {
                                    t.disconnect()
                                }
                            }
                        }, [i, e, n, t, a, l, s])
                    }({
                        propertyButtonsContainerRef: d,
                        propertyButtonRefs: u,
                        outerContainerRef: t,
                        marginLeft: l,
                        setIsReadyToRender: s,
                        setHiddenButtonsIndex: m,
                        setShowIconsOnly: b
                    }), (0, c.jsx)(r(4458).fI, {
                        ref: d,
                        children: g.map((e, t) => {
                            var r;
                            let i = null == (r = u.current[t]) ? void 0 : r.element;
                            if (!i) {
                                let e = o.createRef();
                                u.current[t] = {
                                    element: e,
                                    rightEdge: 0
                                }, i = e
                            }
                            return (0, c.jsx)("div", {
                                ref: i,
                                children: (0, c.jsx)(B, {
                                    collectionsBulkActionsToolbarStore: n,
                                    schema: h,
                                    property: e.property,
                                    isHidden: t >= v,
                                    showIconsOnly: f
                                }, e.property)
                            }, e.property)
                        })
                    })
            }
            let M = {
                property: {
                    maxWidth: "250px",
                    textOverflow: "ellipsis"
                },
                icon: {
                    fill: r(632079).Tj.text.primary
                }
            };

            function B(e) {
                let {
                    property: t,
                    schema: n,
                    collectionsBulkActionsToolbarStore: i,
                    isHidden: l,
                    showIconsOnly: s
                } = e, a = (0, r(533992).v3)(), u = (0, r(713311).ET)(), h = (0, o.useRef)(null), p = (0, r(682985).uB)(void 0, r(184332).A), g = n[t], v = (0, r(682985).K8)(() => !(u.permissionScopesStore.state.canEditContent || "collectionTypedView" === u.contextTypeFromStoreState), [u]), m = (0, r(960253).I)(() => ({
                    button: {
                        display: l ? "none" : "flex",
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        height: 32,
                        alignItems: "center",
                        ...d()
                    }
                }), [l]), f = (0, o.useCallback)(async e => {
                    var o, n;
                    if (!h.current) return;
                    let l = r(584265).default.state.stores;
                    e.stopPropagation(), e.preventDefault();
                    let s = null == (o = h.current) ? void 0 : o.getBoundingClientRect();
                    if (l.length < 1) return;
                    let c = l[0].getAssociatedCollectionStore();
                    u && s && c && await r(305866).VE({
                        environment: a,
                        store: l[0],
                        additionalStores: l.slice(1),
                        property: t,
                        rect: s,
                        surface: "table",
                        collectionStore: c,
                        blockPropertyValueOverlayStore: (0, r(89352).j)(),
                        collectionContextStore: u,
                        statusSetCheckbox: (null == (n = u.getPropertyFormat(t)) ? void 0 : n.statusShowAs) === "checkbox",
                        mouseStore: p,
                        preventClearSelection: !0,
                        collectionsBulkActionsToolbarStore: i
                    })
                }, [h, u, a, t, p, i]), b = (0, o.useCallback)(() => null == g ? void 0 : g.name, [g]), S = (0, o.useCallback)(e => g ? (0, c.jsx)(r(64960).Ay, { ...e,
                    ariaLabel: g.name,
                    ref: h,
                    style: m.button,
                    disabled: v,
                    onClick: f,
                    children: (0, c.jsx)(r(151710).mA, {
                        style: M.property,
                        propertySchema: g,
                        hideName: s,
                        showIcon: !0,
                        property: t,
                        iconStyle: M.icon
                    })
                }) : null, [f, v, t, g, s, m.button]);
                return g ? (0, c.jsx)(r(51831).m, {
                    content: b,
                    disableTooltip: !s,
                    placement: "top",
                    children: S
                }) : null
            }
        },
        953601: (e, t, r) => {
            r.d(t, {
                K: () => s
            });
            var o = r(296540),
                n = r(474848);
            let i = (0, r(109939).YK)({
                    allSelectedWithCount: {
                        id: "SelectedItemCountWidget.allSelectedWithCount",
                        defaultMessage: "{count} selected"
                    }
                }),
                l = {
                    button: {
                        color: r(632079).Tj.blue.text.accentPrimary,
                        fontSize: 14,
                        whiteSpace: "nowrap",
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        paddingInlineEnd: 10,
                        paddingInlineStart: 10,
                        borderStartStartRadius: 5,
                        borderEndStartRadius: 5,
                        fontVariantNumeric: "tabular-nums",
                        ...(0, r(940130).FY)()
                    }
                };

            function s(e) {
                let {
                    selectedItemCount: t,
                    numTextStoresBeingEdited: s,
                    collectionContextStore: a
                } = e, c = (0, r(533992).v3)(), d = (0, r(83208).X)("collections_bulk_action"), u = (0, r(682985).K8)(() => null == a ? void 0 : a.bulkSelectionStore.state.isSelectAll, [a]), h = (0, r(682985).K8)(() => null == a ? void 0 : a.bulkSelectionStore.state.count, [a]), p = (0, r(682985).K8)(() => (null == a ? void 0 : a.bulkSelectionStore.state.excludedIds.size) ? ? 0, [a]), g = (0, r(682985).K8)(() => (null == a ? void 0 : a.bulkSelectionStore.state.includedIds.size) ? ? 0, [a]), v = (0, o.useMemo)(() => s > 0 ? s : Math.max(1, t), [s, t]), m = (0, o.useCallback)(() => {
                    a && (0, r(203272).wi)({
                        collectionContextStore: a
                    }), (0, r(471e3).I)({
                        environment: c
                    })
                }, [c, a]);
                return d && a ? (0, n.jsx)(r(64960).Ay, {
                    style: l.button,
                    onClick: m,
                    children: u ? void 0 !== h && h > 0 ? (0, n.jsx)(r(109939).sA, { ...i.allSelectedWithCount,
                        values: {
                            count: h - p + g
                        }
                    }) : (0, n.jsx)(r(795830).P, {
                        style: {
                            width: 100,
                            height: 10,
                            borderRadius: 12
                        }
                    }) : (0, n.jsx)(r(109939).sA, {
                        id: "SelectedItemCountWidget.numItemsSelected",
                        defaultMessage: "{itemsSelectedCount} selected",
                        values: {
                            itemsSelectedCount: v
                        }
                    })
                }) : (0, n.jsx)(r(64960).Ay, {
                    style: l.button,
                    onClick: m,
                    children: (0, n.jsx)(r(109939).sA, {
                        id: "SelectedItemCountWidget.numItemsSelected",
                        defaultMessage: "{itemsSelectedCount} selected",
                        values: {
                            itemsSelectedCount: v
                        }
                    })
                })
            }
        },
        957145: (e, t, r) => {
            r.d(t, {
                A: () => n,
                X: () => l
            }), r(296540);
            var o = r(474848);
            let n = function({
                    tooltipContent: e,
                    fadeIn: t,
                    style: n,
                    hoveredStyle: i,
                    store: s,
                    onClick: a,
                    extraAnalyticsData: c,
                    hideFilterActionsInput: d,
                    actionSectionGroupKey: u,
                    onFocus: h,
                    onBlur: p,
                    iconStyle: g,
                    isFromCollectionView: v,
                    label: m,
                    disabled: f,
                    experimentGroup: b
                }) {
                    let S = (0, r(533992).v3)(),
                        y = f || !s;

                    function x(e) {
                        var t, o, n, i, l, h, p, g;
                        let m;
                        y || (t = e, o = s, n = S, i = a, l = c, h = d, p = u, g = v, (0, r(472709).L)({
                            environment: n,
                            store: o
                        }), m = o.isInLibraryBlock(), r(899964).it({
                            environment: n,
                            stores: r(584265).default.state.stores,
                            left: t.clientX,
                            top: t.clientY,
                            showInput: !h,
                            actionSectionGroupKey: m ? "library" : g ? "block_in_collection" : p || "default",
                            analyticsFrom: "block_more_menu",
                            optionalAnalyticsProperties: {
                                isFromBulkActionsToolbar: l ? l.isFromBulkActionsToolbar : void 0
                            }
                        }), null == i || i())
                    }
                    return e ? (0, o.jsx)(r(51831).m, {
                        content: () => e,
                        delayThreshold: 300,
                        children: e => (0, o.jsx)(l, {
                            tooltipEvents: e,
                            fadeIn: t,
                            style: n,
                            hoveredStyle: i,
                            onClick: x,
                            onFocus: h,
                            onBlur: p,
                            iconStyle: g,
                            label: m,
                            disabled: y,
                            experimentGroup: b
                        })
                    }) : (0, o.jsx)(l, {
                        fadeIn: t,
                        style: n,
                        hoveredStyle: i,
                        onClick: x,
                        onFocus: h,
                        onBlur: p,
                        iconStyle: g,
                        label: m,
                        disabled: y,
                        experimentGroup: b
                    })
                },
                i = {
                    fontSize: 14
                };

            function l({
                tooltipEvents: e = {},
                fadeIn: t,
                style: n,
                hoveredStyle: s,
                onClick: a,
                onFocus: c,
                onBlur: d,
                iconStyle: u,
                ariaLabel: h,
                label: p,
                disabled: g,
                experimentGroup: v
            }) {
                let m = (0, r(643160).yf)();
                return (0, o.jsx)(r(64960).Ay, {
                    className: t ? r(828432).qGl : void 0,
                    style: function({
                        style: e,
                        isContentReskinV2: t
                    }) {
                        return {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            width: t ? 24 : 26,
                            height: t ? 24 : 26,
                            fill: r(986939).A.isMobile ? r(632079).Tj.icon.tertiary : r(632079).Tj.icon.secondary,
                            transition: "opacity 200ms ease-in",
                            ...e
                        }
                    }({
                        style: n,
                        isContentReskinV2: m
                    }),
                    hoveredStyle: s,
                    onClick: a,
                    ariaLabel: h,
                    disabled: g,
                    disabledFeedback: g,
                    ...(0, r(63390).A)(e, {
                        onFocus: c,
                        onBlur: d
                    }),
                    children: p ? (0, o.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 4,
                        width: "100%",
                        children: [(0, o.jsx)(r(16275).I, {
                            icon: r(397900).ellipsisIcon,
                            style: u
                        }), (0, o.jsx)("div", {
                            style: i,
                            children: p
                        })]
                    }) : "vertical_margin" === v || "vertical_2" === v ? (0, o.jsx)(r(16275).I, {
                        icon: r(397900).ellipsisIcon,
                        style: u
                    }) : (0, o.jsx)(r(16275).I, {
                        icon: r(361226).ellipsisSmallIcon,
                        size: "sm",
                        style: u
                    })
                })
            }
        },
        984211: (e, t, r) => {
            r.d(t, {
                f: () => n
            }), r(296540);
            var o = r(474848);

            function n(e) {
                let {
                    item: t,
                    onDismiss: n
                } = e;
                r(436555).D6({ ...t,
                    right: (0, o.jsx)(r(531119).Ag, {
                        onClick: n ? ? r(436555).N2,
                        children: (0, o.jsx)(r(109939).sA, {
                            id: "snackbar.dismiss.title",
                            defaultMessage: "Dismiss"
                        })
                    })
                })
            }
        }
    }
]);