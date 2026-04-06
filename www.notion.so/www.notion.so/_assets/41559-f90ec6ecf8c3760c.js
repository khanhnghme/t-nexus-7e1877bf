"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [41559], {
        8366: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454);
            var r = n(296540),
                i = () => n(316824),
                l = n(474848);
            let o = function(e) {
                let [t, o] = (0, r.useState)([]), {
                    children: a
                } = e, u = a(), s = (0, r.useMemo)(() => new Set(u.map(e => e.key)), [u]), d = (0, n(668745).ZC)(u);
                if (d) {
                    let e = [],
                        n = new Set(t.map(e => e.key));
                    for (let t of d)
                        if (!s.has(t.key) && !n.has(t.key)) {
                            let n = {
                                    visible: !1,
                                    onAnimationEnd: () => {
                                        o(e => e.filter(e => e.key !== r.key))
                                    }
                                },
                                r = (0, i().A)(t, n);
                            e.push(r)
                        }
                    e.length > 0 && o(t => [...t, ...e])
                }
                let c = t.filter(e => !s.has(e.key)).concat(u);
                return (0, l.jsx)("div", {
                    className: e.className,
                    children: c
                })
            }
        },
        36896: (e, t, n) => {
            n.d(t, {
                j: () => i,
                u: () => r
            });
            let r = n(859996).Z9,
                i = n(859996).SP
        },
        405560: (e, t, n) => {
            function r(e) {
                var t, r, i;
                let {
                    environment: l,
                    store: o,
                    selectableBoundingRect: a
                } = e, u = o.getType();
                if (!u || !(0, n(955630).UL)(u)) return (null == a ? void 0 : a.width) ? ? 0;
                let s = null == (t = o.getParentBlockStore()) ? void 0 : t.getType();
                if ("page" === s) return (0, n(830479).y)(l);
                let d = null == (r = o.getRecordStoreUIParent()) || null == (r = r.findRecordStoreUIAncestor(e => !!(e instanceof n(970831).B && e.isPath([]) && n(240414).T.findSelectableFromStore(e)))) ? void 0 : r.ancestor,
                    c = d && d instanceof n(970831).B ? n(240414).T.findSelectableFromStore(d) : void 0;
                return ((c ? null == (i = n(448475).default.state.selectableRectMap.get(c)) ? void 0 : i.width : (null == a ? void 0 : a.width) ? ? 0) ? ? 0) - (s ? function(e) {
                    switch (e) {
                        case "bulleted_list":
                        case "toggle":
                        case "to_do":
                        case "numbered_list":
                            return 26;
                        case "callout":
                            return 60;
                        default:
                            return 0
                    }
                }(s) : 0)
            }

            function i(e) {
                var t;
                let r, {
                        store: i,
                        selectableBoundingRect: l,
                        containerWidth: o
                    } = e,
                    a = i.getType();
                if (!l || !o || !a || !(0, n(955630).UL)(a)) return 0;
                let u = (r = null == (t = i.getFormat()) ? void 0 : t.block_alignment) || (i.isRootOrDirectChild() ? "center" : "left");
                switch (u) {
                    case "right":
                        let s = o / 2;
                        return l.width - s - s;
                    case "center":
                        return (l.width - o) / 2;
                    case "left":
                        return 0;
                    default:
                        (0, n(722371).HB)(u)
                }
            }

            function l(e) {
                let t = e.getNode();
                return t ? parseInt(getComputedStyle(t).marginTop) : 0
            }

            function o() {
                return n(36896).u
            }
            n.d(t, {
                KG: () => i,
                TH: () => r,
                mC: () => l,
                zb: () => o
            })
        },
        783418: (e, t, n) => {
            n.d(t, {
                qg: () => l,
                jU: () => o,
                ac: () => i
            });
            let r = n(47080).Fh - 2;

            function i(e) {
                let {
                    marginItemType: t,
                    store: r,
                    nodeRect: i,
                    containerRect: l,
                    shouldUseContainedActionStyle: o
                } = e, a = (0, n(643160).sR)(), d = (0, n(260235).o)(r), c = a ? function(e) {
                    if (!(0, n(643160).sR)()) return 0;
                    let {
                        store: t,
                        marginItemType: r,
                        libraryViewName: i
                    } = e, l = t.getType(), o = !!t.getNavigableAncestorFormat().page_small_text, a = (0, n(286608).xU)(t);
                    return i && "selectable_hover_menu_overlay_item" === r ? 4 : a ? a.wrapper.paddingTop + a.title.paddingTop - 1.5 * !!o : l === n(955630).xd.text ? n(57461).dE.paddingTop - 1.5 * !!o : l === n(955630).xd.header ? 39.5 - 2.5 * !!o : l === n(955630).xd.subHeader ? 31.5 - 2 * !!o : l === n(955630).xd.subSubHeader ? 25 - 1.5 * !!o : l === n(955630).xd.header4 ? 19.5 - !!o : l === n(955630).xd.divider ? -5 : l === n(955630).xd.table ? "presence_avatars" === r ? 5.5 : 14 : l === n(955630).xd.page && t.getAssociatedCollectionStore() ? 3 : 8
                }({
                    store: r,
                    marginItemType: t,
                    libraryViewName: d
                }) : function(e) {
                    let {
                        store: t,
                        marginItemType: r,
                        libraryViewName: i
                    } = e, l = t.getType(), o = !!t.getNavigableAncestorFormat().page_small_text;
                    if (i && "selectable_hover_menu_overlay_item" === r) return 4;
                    if (l === n(955630).xd.divider) return -6;
                    if (l === n(955630).xd.header) return o ? 7 : 10;
                    if (l === n(955630).xd.subHeader) return o ? 4 : 6;
                    if (l === n(955630).xd.collectionView) return 8;
                    else if (l === n(955630).xd.table) return "presence_avatars" === r ? 5.5 : 14;
                    else return 3
                }({
                    store: r,
                    marginItemType: t,
                    libraryViewName: d
                }), f = a ? function(e) {
                    if (!(0, n(643160).sR)()) return 0;
                    let {
                        baseOffset: t,
                        store: r,
                        libraryViewName: i
                    } = e;
                    return r.isTransclusionType() ? t - 1.5 : u(r, i) || s(r) ? r.getType() === n(955630).xd.transcription ? 3 : (n(47080).tt - 24) / 2 : "ai_block" === r.getType() ? r.hasContent() ? t + 9 : t + 15 : r.getType() === n(955630).xd.button ? t + 6 : t
                }({
                    baseOffset: c,
                    store: r,
                    libraryViewName: d
                }) : function(e) {
                    let {
                        baseOffset: t,
                        store: r,
                        libraryViewName: i
                    } = e;
                    return r.isTransclusionType() ? t + 5 : u(r, i) || s(r) ? (n(47080).tt - 24) / 2 : "ai_block" === r.getType() ? r.hasContent() ? t + 9 : t + 15 : r.getType() === n(955630).xd.button ? t + 3 : t
                }({
                    baseOffset: c,
                    store: r,
                    libraryViewName: d
                }), g = ((null == i ? void 0 : i.top) ? ? 0) - ((null == l ? void 0 : l.top) ? ? 0) + f + (o ? -3 : 0), p = n(986939).A.isMobile ? 16 : 22, v = (n(36896).j - p) / 2;
                if ("selectable_hover_menu_overlay_item" === t) return g;
                if ("presence_avatars" === t) {
                    let {
                        avatarCount: t
                    } = e;
                    return g + v + (t - 1) * 15
                }(0, n(722371).HB)(t)
            }

            function l(e) {
                let {
                    marginItemType: t,
                    store: i,
                    environment: l,
                    nodeRect: o,
                    containerRect: s,
                    selectable: c
                } = e, f = n(986939).A.isMobile ? 16 : 22, g = (0, n(260235).o)(i), p = i.isInsideCollection() || g ? 2 : 10, v = (0, n(405560).zb)() + p, {
                    maxLeft: h,
                    isBoundedByParentContainer: b
                } = function(e) {
                    let {
                        selectable: t,
                        nodeRect: i,
                        store: l,
                        libraryViewName: o
                    } = e, a = (0, n(619157).A1)() ? (null == i ? void 0 : i.right) ? ? 0 : (null == i ? void 0 : i.left) ? ? 0;
                    if (l.isCollectionView() || l.isInsideCollection()) {
                        let e = (0, n(444610).U)(l);
                        if (e && "table" !== e.getViewType()) return {
                            maxLeft: a,
                            isBoundedByParentContainer: !1
                        }
                    }
                    let s = null == t ? void 0 : t.getScrollerContext(),
                        c = 0;
                    if (!(0, n(619157).A1)() && s && s.horizontalScroller) {
                        let e = s.horizontalScroller.getClientRect();
                        c = (null == e ? void 0 : e.left) ? ? 0
                    }
                    let f = Math.max(c, a),
                        g = u(l, o) && d(l) ? r : 0,
                        p = f - ((0, n(619157).A1)() ? -1 : 1) * g <= c;
                    return {
                        maxLeft: p ? c : f,
                        isBoundedByParentContainer: p
                    }
                }({
                    selectable: c,
                    nodeRect: o,
                    store: i,
                    libraryViewName: g
                }), m = a({
                    environment: l,
                    baseOffset: v + 24,
                    store: i,
                    isBoundedByParentContainer: b
                }), T = (null == s ? void 0 : s.left) ? ? 0, _ = (0, n(619157).A1)() ? T - h : h - T;
                return "drag_handle" === t ? _ - a({
                    environment: l,
                    baseOffset: v,
                    store: i,
                    isBoundedByParentContainer: b,
                    libraryViewName: g
                }) : "plus_button" === t ? _ - m : "presence_avatars" === t ? _ - function(e) {
                    var t;
                    let {
                        marginItemType: r,
                        originalMenuOffset: i,
                        environment: l,
                        store: o,
                        isBoundedByParentContainer: u
                    } = e, s = n(183056).default.state, d = s.isOpen && (null == (t = s.currentStore) ? void 0 : t.id) === o.id;
                    switch (r) {
                        case "presence_avatars":
                            if (!d || !s.currentStore || n(183056).default.isRightMarginCommentHovered()) return a({
                                environment: l,
                                baseOffset: 0,
                                store: o,
                                isBoundedByParentContainer: u
                            });
                            return i;
                        case "drag_handle":
                        case "plus_button":
                            return i;
                        default:
                            (0, n(722371).HB)(r)
                    }
                }({
                    marginItemType: t,
                    originalMenuOffset: m,
                    environment: l,
                    store: i,
                    isBoundedByParentContainer: b
                }) - 4 - f : void(0, n(722371).HB)(t)
            }

            function o(e) {
                let {
                    marginItemType: t,
                    nodeRect: r,
                    containerRect: i
                } = e;
                if ("add_comment" === t)
                    if ((0, n(619157).A1)()) return ((null == r ? void 0 : r.left) ? ? 0) - ((null == i ? void 0 : i.left) ? ? 0);
                    else return ((null == i ? void 0 : i.right) ? ? 0) - ((null == r ? void 0 : r.right) ? ? 0);
                (0, n(722371).HB)(t)
            }

            function a({
                environment: e,
                baseOffset: t,
                store: i,
                isBoundedByParentContainer: l,
                libraryViewName: o
            }) {
                if (!l && d(i) && u(i, o)) return t + r;
                if (i.isQuoteBlockChild()) return t + 3 + 14 + n(57461).CC.paddingInlineStart;
                if (o) return t;
                if (i.getType() === n(955630).xd.collectionView) return t + 6;
                if (i.isTransclusionType() || "ai_block" === i.getType()) return t + 4;
                if (i.isDirectChildOfAiBlock()) return t + 13;
                if (i.isInsideTransclusion()) return t + 5;
                if (i.getType() === n(955630).xd.table) {
                    let r = (0, n(12090).o)({
                            simpleTableStore: i,
                            environment: e,
                            includeInline: !(0, n(424332).dC)(e, i)
                        }),
                        l = i.isImmediateColumnChild();
                    return 0 !== r || l ? t + 8 : t
                }
                let s = i.getNumberOfDuplicateBlocksAncestors();
                return s > 0 ? t + 35 * s : t
            }

            function u(e, t) {
                var r;
                if (t) return !0;
                if (e.getType() !== n(955630).xd.page && !e.isPersonProfile()) return !1;
                let i = (0, n(444610).U)(e);
                return !!i && (e.isInsideCollection() || !!(null == i || null == (r = i.collectionStore()) ? void 0 : r.isPageTreeCollection())) && (0, n(28630).f5)({
                    collectionContextStore: i
                })
            }

            function s(e) {
                if (e.getType() !== n(955630).xd.page && !e.isPersonProfile() || !e.isInsideCollection()) return !1;
                let t = (0, n(444610).U)(e);
                return !!t && !!t.isDashboardWidget() && "table" === t.getViewType()
            }

            function d(e) {
                var t;
                let r = n(584265).default.state.stores.includes(e);
                return n(183056).default.state.isOpen && (null == (t = n(183056).default.state.currentStore) ? void 0 : t.id) === e.id || r
            }
        }
    }
]);