"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [52614], {
        2919: (e, t, n) => {
            n.d(t, {
                n: () => o
            });

            function o(e) {
                let t = (0, n(533992).v3)(),
                    {
                        device: o,
                        WindowSizeStore: r
                    } = t,
                    i = (0, n(682985).K8)(() => {
                        let e = r.state.height,
                            o = n(986939).A.isMobile && n(498368).Ay.state.open ? e : 0;
                        return (0, n(175864).C)(t) + o
                    }, [t, r]);
                return (0, n(682985).K8)(() => "home-phone" === e ? n(681693).q3 : o.isTablet ? 380 : o.isIOS ? Math.max(300, i) : n(986939).A.isMobile ? 400 : "side-peek" === e || "center-peek" === e ? n(447036).ln : "home" === e ? n(681693).wH : "30vh", [o, i, e])
            }
        },
        112923: (e, t, n) => {
            n.d(t, {
                n: () => o
            });

            function o(e) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(682985).K8)(() => (0, n(424332).dC)(t, e), [t, e]);
                return (0, n(682985).K8)(() => o && !e.isFullWidth() ? (0, n(424332).Zy)({
                    environment: t,
                    isInPeekRenderer: (0, n(447036).cq)(e),
                    isInFrameWhenSidePeekOpen: (0, n(447036).RX)(e)
                }) : 0, [t, o, e])
            }
        },
        196441: (e, t, n) => {
            n.d(t, {
                n$: () => r,
                rx: () => o,
                yA: () => i
            });
            let o = 1;

            function r(e) {
                switch (n(381453).qE(n(381453).LI(e, 1), .5, 4.9)) {
                    case .5:
                        return 155;
                    case .6:
                        return 128;
                    case .7:
                        return 108;
                    case .8:
                        return 94;
                    case .9:
                        return 83;
                    default:
                        return 75
                }
            }

            function i(e) {
                let t = n(381453).qE(n(381453).LI(e, 1), .5, 4.9);
                switch (t) {
                    case .5:
                        return 273;
                    case .6:
                        return 228;
                    case .7:
                        return 195;
                    case .8:
                        return 171;
                    case .9:
                        return 151;
                    case 1:
                        return 136;
                    case 1.1:
                        return 123;
                    case 1.2:
                        return 113;
                    case 1.3:
                        return 105;
                    case 1.4:
                        return 97;
                    case 1.5:
                        return 91;
                    case 1.6:
                        return 85;
                    default:
                        return Math.max(85 - Math.floor((t - 1.6) * 50), 0)
                }
            }
        },
        394112: (e, t, n) => {
            n.d(t, {
                A5: () => d,
                MR: () => f,
                Mx: () => a,
                Pb: () => c,
                WL: () => g,
                hg: () => l,
                kZ: () => h,
                pv: () => s,
                vV: () => u
            }), n(581454);
            var o = n.n(n(32485)),
                r = n(296540),
                i = n(474848);
            let a = r.forwardRef(function(e, t) {
                    let {
                        children: r,
                        type: a,
                        gap: l,
                        withBottomPadding: s,
                        style: d,
                        onMouseDown: u,
                        onClick: c,
                        onDoubleClick: p,
                        onContextMenu: h,
                        suppressMargin: g
                    } = e, f = (0, n(2919).n)(a), m = (0, n(219279).aH)({
                        gateName: "content_reskin_v2_wider_page",
                        enableEventTrailLogging: !0
                    }) && (0, n(643160).sR)(), x = (0, n(682985).K8)(() => n(82702).A.getPanelState("peek").isOpen && "static_sidebar" === n(82702).A.getPanelState("peek").displayStyle, []);
                    return (0, i.jsx)(n(28111).A, {
                        name: "PageLayout",
                        children: (0, i.jsx)("div", {
                            className: o()("layout", {
                                "layout-reskin-wider": m,
                                "layout-wide": "wide" === a,
                                "layout-wide-right-margin-expanded": "wide-right-margin-expanded" === a,
                                "layout-side-peek": "side-peek" === a,
                                "layout-center-peek": "center-peek" === a && !x,
                                "layout-center-peek-with-layout-panel": "center-peek" === a && x,
                                "layout-home": "home" === a,
                                "layout-meet": "meet" === a,
                                "layout-home-phone": "home-phone" === a,
                                "layout-home-redesign-desktop": "home-redesign-desktop" === a,
                                "layout-form": "form" === a,
                                "layout-form-viewer": "form-viewer" === a,
                                "layout-form-viewer-embed": "form-viewer-embed" === a,
                                "layout-phone": "phone" === a,
                                "layout-tablet": "tablet" === a,
                                "layout-template-preview": "template-preview" === a,
                                "layout-chat": "chat" === a,
                                "layout-layout-editor": "layout-editor" === a,
                                "layout-layout-editor-wide": "layout-editor-wide" === a,
                                "layout-layout-editor-narrow": "layout-editor-narrow" === a,
                                "layout-marketplace": "marketplace" === a,
                                "layout-marketplace-mobile": "marketplace-mobile" === a,
                                "layout-team-home": "team-home" === a,
                                "layout-team-home-mobile": "team-home-mobile" === a,
                                "layout-create-post": "create-post" === a,
                                "layout-fullscreen-ai": "fullscreen-ai" === a,
                                "layout-narrowscreen-ai": "narrowscreen-ai" === a,
                                "layout-person-profile": "person-profile" === a,
                                "layout-suppress-margin": g
                            }),
                            style: {
                                paddingBottom: s ? f : void 0,
                                gap: l,
                                ...d
                            },
                            ref: t,
                            onMouseDown: u,
                            onClick: c,
                            onDoubleClick: p,
                            onContextMenu: h,
                            children: r
                        })
                    })
                }),
                l = "layout-content",
                s = "layout-full",
                d = "hide-scrollbar",
                u = r.forwardRef(function(e, t) {
                    return (0, i.jsx)(n(28111).A, {
                        name: "PageLayoutContent",
                        children: (0, i.jsx)("div", {
                            className: o()(l, e.className),
                            style: e.style,
                            ref: t,
                            children: e.children
                        })
                    })
                });

            function c(e) {
                return (0, i.jsx)(n(28111).A, {
                    name: "PageLayoutFull",
                    children: (0, i.jsx)("div", {
                        className: s,
                        style: e.style,
                        children: e.children
                    })
                })
            }
            let p = {
                pointerEvents: "none"
            };

            function h(e) {
                return (0, i.jsx)(n(28111).A, {
                    name: "PageLayoutMarginRight",
                    children: (0, i.jsx)("div", {
                        className: "layout-margin-right",
                        style: { ...e.style,
                            ...p
                        },
                        children: e.children
                    })
                })
            }

            function g(e) {
                return (0, i.jsx)(n(28111).A, {
                    name: "PageLayoutColumn",
                    children: (0, i.jsx)("div", {
                        className: o()("layout-column", e.className),
                        style: { ...{
                                "--min-column-width": e.minWidth ? `${e.minWidth}px` : "100%"
                            },
                            ...e.style
                        },
                        children: e.children
                    })
                })
            }

            function f(e) {
                return (0, i.jsx)(n(28111).A, {
                    name: "PageLayoutTwoColumn",
                    children: (0, i.jsxs)(g, {
                        minWidth: e.minWidth,
                        className: e.className,
                        style: e.style,
                        children: [e.left, e.right]
                    })
                })
            }
            n(699422).Wy.semibold, n(632079).Tj.buttonBlueFocusRing
        },
        608241: (e, t, n) => {
            n.r(t), n.d(t, {
                FloatingTableOfContents: () => d,
                FloatingTableOfContentsFullSizeContents: () => b,
                FloatingTableOfContentsMiniContents: () => w
            }), n(898992), n(672577), n(581454);
            var o = n(296540),
                r = () => n(195304),
                i = () => n(584265),
                a = () => n(546605);
            class l extends a().Store {
                getInitialState() {
                    return {
                        displayState: "collapsed_narrow"
                    }
                }
            }
            var s = n(474848);

            function d(e) {
                let {
                    store: t,
                    viewsModuleCollectionContextStore: o
                } = e, r = (0, n(533992).v3)(), {
                    navigableAncestorStore: i,
                    headerStores: a
                } = (0, n(426435).d)({
                    parentStore: t
                }), l = (0, n(682985).K8)(() => (0, n(447036).cq)(t), [t]), d = (0, n(682985).K8)(() => {
                    let e = null == i ? void 0 : i.getModel();
                    return e && "off" !== e.getFloatingTableOfContentsState()
                }, [i]), {
                    isSidePeekOpen: u,
                    isCenterPeekOpen: c
                } = (0, n(682985).K8)(() => ({
                    isSidePeekOpen: n(475097).default.isSidePeekOpen(),
                    isCenterPeekOpen: n(475097).default.isCenterPeekOpen()
                }), []), h = (0, n(682985).K8)(() => (0, n(953099).N)(r), [r]), g = (0, n(682985).K8)(() => n(82702).A.getPanelState("peek").isOpen, []), f = (0, n(682985).K8)(() => n(952696).P.state.open && "chat" === n(952696).P.state.currentView, []), m = (0, n(682985).K8)(() => n(562733).zI.state.isResizing, []), x = (0, n(668734).M)(o), y = (0, n(682985).K8)(() => (0, n(424332).dC)(r, t) && (n(575125).A.state.open || n(332190).A.state.open), [r, t]);
                return !d || n(986939).A.isMobile || x || m || !l && (u || h || f || y) || l && (u || c && g) ? null : (0, s.jsx)(p, {
                    store: e.store,
                    headerStores: a,
                    navigableAncestorStore: i
                })
            }
            let u = {
                    width: "100%",
                    height: 0
                },
                c = {
                    width: "100%"
                };

            function p(e) {
                var t;
                let a, d, {
                        store: p,
                        headerStores: g,
                        navigableAncestorStore: f
                    } = e,
                    m = (0, o.useRef)(null),
                    y = (0, n(682985).uB)(void 0, l),
                    {
                        verticalScroller: v
                    } = (0, o.useContext)(n(700587).U) ? ? {},
                    b = (0, n(533992).v3)(),
                    {
                        closestSelectable: S,
                        targetHorizontalRule: w
                    } = (0, n(682985).K8)(() => {
                        var e;
                        let t;
                        if (!v) return {};
                        let o = (null == v ? void 0 : v.getStore()).state.clientRect ? ? v.getClientRect(),
                            {
                                selectableRectMap: a
                            } = n(448475).default.state,
                            l = o && o.top + o.height / 4,
                            s = n(240414).T.findScrollToSelectablesFromIds(g.map(e => e.id)),
                            d = new Map(s.map(e => [e.props.store.id, e])),
                            {
                                stores: u,
                                phase: c
                            } = i().default.state,
                            p = c === n(476987).o.Selected ? u.find(e => d.has(e.id)) : void 0,
                            h = p && d.get(p.id),
                            f = h && a.get(h);
                        if (f && o && r().HY(f, o)) return {
                            closestSelectable: h,
                            targetHorizontalRule: l
                        };
                        if (void 0 !== l)
                            for (let e of s) {
                                let n = a.get(e);
                                if (!n) continue;
                                let o = Math.abs(l - (n.top + n.height / 2));
                                (!t || o < t.distance) && (t = {
                                    distance: o,
                                    selectable: e
                                })
                            }
                        return {
                            targetHorizontalRule: l,
                            closestSelectable: null == (e = t) ? void 0 : e.selectable
                        }
                    }, [g, v]),
                    k = (0, n(682985).K8)(() => {
                        var e;
                        return null == f || null == (e = f.getModel()) ? void 0 : e.getFloatingTableOfContentsState()
                    }, [f]),
                    j = (0, n(112923).n)(p),
                    I = (0, n(682985).K8)(() => y.state.displayState, [y]);
                (0, o.useEffect)(() => {});
                let C = (0, n(960253).I)(() => ({
                        outerContainer: {
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            height: `calc(100vh - ${n(801113).ek(b.device.isElectronMac)}px)`,
                            display: "flex",
                            flexDirection: "column",
                            pointerEvents: "none"
                        }
                    }), [b.device.isElectronMac]),
                    [M, T] = (t = e.store, a = (0, o.useRef)(null), d = (0, n(682985).K8)(() => {
                        var e;
                        let o = n(448475).default.state.selectableRectMap,
                            l = null == (e = a.current) ? void 0 : e.getBoundingClientRect();
                        if (!l) return !1;
                        for (let [e, n] of o)
                            if (e.getContextSelectableContainer() === i().default.getCurrentDefaultContainer() && "collection_view" !== e.props.store.getType() && !e.props.ignoreForTocSelectionIntersection && r().HY(n, l)) return t === e.props.store.getRecordStoreUIRoot();
                        return !1
                    }, [t]), [a, d]),
                    A = {
                        store: p,
                        navigableAncestorStore: f,
                        scrollTargetY: w,
                        activeBlockId: null == S ? void 0 : S.props.store.id,
                        headerStores: g,
                        floatingTocStore: y
                    };
                return g.length < 2 && "minimal" === k ? (0, s.jsx)(n(28111).A, {
                    name: "FloatingTableOfContentsInner",
                    children: null
                }) : (0, s.jsx)(n(28111).A, {
                    name: "FloatingTableOfContentsInner",
                    children: (0, s.jsxs)(n(394112).kZ, {
                        style: {
                            width: "100%",
                            gridRow: "1 / -1",
                            paddingInlineStart: j,
                            position: "sticky",
                            top: 0,
                            insetInlineEnd: 0,
                            zIndex: 80,
                            transition: "opacity 0.2s ease",
                            opacity: +!T,
                            visibility: T ? "hidden" : "visible",
                            pointerEvents: T ? "none" : "auto"
                        },
                        children: [(0, s.jsx)("div", {
                            style: u,
                            ref: m
                        }), (0, s.jsx)("div", {
                            className: `hide-scrollbar ${n(314543).V} ${n(828432).xAE}`,
                            style: C.outerContainer,
                            children: (0, s.jsx)(n(4458).fI, {
                                children: (0, s.jsx)(n(385827).s, {
                                    allowSelectionWithin: !0,
                                    style: c,
                                    children: "expanded" === I ? (0, s.jsx)(x, {
                                        ref: M,
                                        ...A
                                    }) : (0, s.jsx)(h, { ...A,
                                        ref: M
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            let h = o.forwardRef(function(e, t) {
                    let {
                        floatingTocStore: r
                    } = e, i = (0, o.useRef)(null), a = (0, n(971026).R)(), l = (0, o.useRef)(), d = (0, n(682985).K8)(() => e => {
                        if (n(409730).A.setState({
                                isHovered: e
                            }), r.setState({ ...r.state,
                                displayState: e ? "collapsed_full" : "collapsed_narrow"
                            }), e) {
                            var t;
                            l.current = null == (t = i.current) ? void 0 : t.getBoundingClientRect(), (0, n(104310).u)({
                                event: {
                                    eventName: "open_page_table_of_contents",
                                    eventProperties: {}
                                }
                            })
                        }
                    }, [r]), u = (0, n(682985).K8)(() => "collapsed_narrow" === r.state.displayState, [r]), {
                        verticalOffsetInPx: c,
                        maxHeightForFullSizeToc: p,
                        maxHeightForCollapsedToc: h
                    } = k(e.store, r), g = (0, o.useCallback)(e => ({
                        opacity: +!!e
                    }), []);
                    return (0, s.jsxs)("div", {
                        style: {
                            maxHeight: p,
                            marginBottom: 60,
                            pointerEvents: "auto"
                        },
                        onMouseLeave: () => d(!1),
                        children: [(0, s.jsx)(n(654979).A, {
                            animate: g(u),
                            style: {
                                maxHeight: h,
                                display: "flex",
                                flexDirection: "row",
                                position: "absolute",
                                top: c,
                                insetInlineEnd: 0,
                                overflowY: "hidden"
                            },
                            onMouseMove: n(264873).Z,
                            children: (0, s.jsx)(n(4458).VP, {
                                ref: a(i, t),
                                width: 56,
                                justifyContent: "center",
                                paddingBottom: 12,
                                paddingInlineEnd: 8,
                                onMouseOver: () => {
                                    d(!0)
                                },
                                children: (0, s.jsx)(w, { ...e
                                })
                            })
                        }), (0, s.jsx)(n(654979).A, {
                            tag: f,
                            visible: !u,
                            animate: {
                                translateX: 0,
                                opacity: 1
                            },
                            initial: {
                                translateX: 10,
                                opacity: 0
                            },
                            exit: {
                                translateX: 10,
                                opacity: 0,
                                pointerEvents: "none"
                            },
                            originRect: l.current,
                            onMouseLeave: () => d(!1),
                            contentProps: e,
                            maxHeightForFullSizeToc: p
                        })]
                    })
                }),
                g = {
                    fullSizeContainer: {
                        width: 242,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: "12px",
                        paddingInlineEnd: "12px",
                        paddingBottom: "0",
                        paddingInlineStart: "12px",
                        marginInlineEnd: 10,
                        backgroundColor: n(632079).Tj.background.primary,
                        boxShadow: n(632079).Tj.shadow.outline.lg,
                        borderRadius: 14,
                        position: "relative",
                        overflowY: "auto"
                    },
                    popupStyles: {
                        background: "none",
                        boxShadow: "none",
                        overflow: "visible",
                        marginTop: -10
                    },
                    style0: {
                        display: "flex",
                        flexDirection: "row",
                        width: 258,
                        paddingInlineStart: 16,
                        cursor: "default"
                    }
                },
                f = o.forwardRef(function({
                    originRect: e,
                    contentProps: t,
                    maxHeightForFullSizeToc: o,
                    onMouseLeave: r,
                    style: i
                }, a) {
                    return (0, s.jsx)(n(182718).zD, {
                        preventCaptureEsc: !0,
                        preventScaleTransition: !0,
                        preventOpacityTransition: !0,
                        disableMouseCapture: !0,
                        popupType: n(423291).n.Popup,
                        originGap: -56,
                        alignmentToOrigin: "start",
                        open: !0,
                        placementToOrigin: "left",
                        originRect: e,
                        style: g.popupStyles,
                        content: () => (0, s.jsx)("div", {
                            style: { ...g.style0,
                                ...i
                            },
                            onMouseMove: e => {
                                (0, n(264873).Z)(e), e.stopPropagation()
                            },
                            onMouseLeave: r,
                            ref: a,
                            children: (0, s.jsx)("div", {
                                style: g.fullSizeContainer,
                                children: (0, s.jsx)(b, { ...t,
                                    fillBackground: !0,
                                    maxHeight: o
                                })
                            })
                        }),
                        trapFocus: !1
                    })
                }),
                m = {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    pointerEvents: "auto"
                },
                x = o.forwardRef(function(e, t) {
                    let {
                        store: o,
                        floatingTocStore: r
                    } = e, {
                        verticalOffsetInPx: i,
                        maxHeightForFullSizeToc: a
                    } = k(o, r);
                    return (0, s.jsx)("div", {
                        style: m,
                        children: (0, s.jsx)("div", {
                            ref: t,
                            onMouseMove: n(264873).Z,
                            style: {
                                position: "absolute",
                                top: i,
                                marginInlineEnd: 60,
                                width: 250,
                                overflowY: "auto",
                                maxHeight: a
                            },
                            className: "hide-scrollbar",
                            children: (0, s.jsx)(b, { ...e,
                                maxHeight: a
                            })
                        })
                    })
                }),
                y = {
                    name: {
                        paddingInlineEnd: n(57461).CC.paddingInlineEnd,
                        paddingInlineStart: n(57461).CC.paddingInlineStart,
                        fontSize: 13,
                        lineHeight: 1.3,
                        display: "flex",
                        alignItems: "center",
                        padding: 4
                    },
                    style0: {
                        background: "none"
                    }
                };

            function v(e) {
                let t = (0, n(682985).K8)(() => n(601884).A({
                        headerBlockId: e.headerStore.id,
                        headerBlockIds: e.headerStoreIds,
                        index: e.index,
                        getRecordModel: e.store.getRecordModel
                    }), [e.headerStore.id, e.headerStoreIds, e.index, e.store.getRecordModel]),
                    r = (0, n(177671).p)(e.store),
                    i = (0, n(960253).I)(() => ({
                        container: { ...r,
                            cursor: "pointer",
                            width: "100%",
                            paddingBottom: e.isLast ? 12 : void 0,
                            color: e.isActive ? n(632079).Tj.blue.text.accentPrimary : n(632079).Tj.text.secondary,
                            transition: "color 0.15s ease"
                        },
                        linkBoxHovered: {
                            background: n(632079).Tj.background.tertiaryTranslucent,
                            borderRadius: 4,
                            color: e.isActive ? n(632079).Tj.blue.text.accentPrimary : n(632079).Tj.text.primary
                        },
                        nameContainer: {
                            display: "flex",
                            alignItems: "center",
                            marginInlineStart: 12 * t
                        }
                    }), [r, t, e.isActive, e.isLast]),
                    a = (0, n(205721).t)({
                        pageStore: e.navigableAncestorStore,
                        scrollToBlockId: e.headerStore.id,
                        isFloatingToc: !0
                    }),
                    [l, d] = (0, o.useState)(!1);
                return e.navigableAncestorStore ? (0, s.jsx)(n(590422).Q, { ...a,
                    style: { ...i.container,
                        ...e.style
                    },
                    external: !1,
                    onMouseEnter: () => d(!0),
                    onMouseLeave: () => d(!1),
                    hovered: !1,
                    pressedStyle: y.style0,
                    ignoreLocalHoverState: !0,
                    children: (0, s.jsx)("div", {
                        style: { ...i.nameContainer,
                            ...l ? i.linkBoxHovered : {}
                        },
                        children: (0, s.jsx)("div", {
                            style: y.name,
                            children: (0, s.jsx)(n(627918).A, {
                                store: e.headerStore,
                                shouldWrap: !0,
                                underline: !1,
                                maxLines: 2
                            })
                        })
                    })
                }) : null
            }

            function b(e) {
                let {
                    headerStores: t,
                    navigableAncestorStore: r,
                    maxHeight: i
                } = e, a = (0, n(960253).I)(() => ({
                    container: {
                        maxWidth: 500,
                        maxHeight: i,
                        width: "100%",
                        cursor: "default"
                    },
                    fillContainer: {
                        padding: 6,
                        maxWidth: 500,
                        maxHeight: i,
                        width: "100%",
                        cursor: "default"
                    }
                }), [i]), l = (0, o.useMemo)(() => t.map(e => e.id), [t]);
                return (0, s.jsx)("div", {
                    onMouseMove: n(264873).Z,
                    style: e.fillBackground ? a.fillContainer : a.container,
                    children: t.map((n, o) => (0, s.jsx)(v, {
                        headerStore: n,
                        index: o,
                        isLast: o === t.length - 1,
                        headerStoreIds: l,
                        store: e.store,
                        navigableAncestorStore: r,
                        isActive: n.id === e.activeBlockId,
                        scrollTargetY: e.scrollTargetY
                    }, n.id))
                })
            }

            function S(e) {
                let t = (0, n(682985).K8)(() => n(601884).A({
                        headerBlockId: e.headerStore.id,
                        headerBlockIds: e.headerStoreIds,
                        index: e.index,
                        getRecordModel: e.store.getRecordModel
                    }), [e.headerStore.id, e.headerStoreIds, e.index, e.store.getRecordModel]),
                    o = (0, n(960253).e)(),
                    r = (0, n(960253).I)(() => {
                        let r = n(632079).Tj.palette.gray[800],
                            i = "dark" === o && e.isActive;
                        return {
                            lineContainer: {
                                backgroundColor: e.isActive ? r : n(632079).Tj.gray.background.tertiaryTranslucent,
                                height: 2,
                                width: 16 - 4 * t,
                                transition: "background 0.2s ease, box-shadow 0.2s ease",
                                boxShadow: i ? `0px 0px 3px ${r}` : "none",
                                borderRadius: 2,
                                marginInlineStart: 4 * t
                            }
                        }
                    }, [t, e.isActive, o]);
                return e.navigableAncestorStore ? (0, s.jsx)("div", {
                    children: (0, s.jsx)("div", {
                        style: r.lineContainer
                    })
                }) : null
            }

            function w(e) {
                let {
                    headerStores: t,
                    navigableAncestorStore: r
                } = e, i = (0, o.useMemo)(() => t.map(e => e.id), [t]);
                return (0, s.jsx)(n(4458).VP, {
                    gap: 12,
                    paddingInlineStart: 20,
                    paddingBottom: 12,
                    height: "100%",
                    onMouseMove: n(264873).Z,
                    children: t.map((t, n) => (0, s.jsx)(S, {
                        headerStore: t,
                        index: n,
                        headerStoreIds: i,
                        store: e.store,
                        navigableAncestorStore: r,
                        isActive: t.id === e.activeBlockId
                    }, t.id))
                })
            }

            function k(e, t) {
                let {
                    verticalScroller: r
                } = (0, o.useContext)(n(700587).U) ? ? {}, i = null == r ? void 0 : r.getStore(), a = (0, n(682985).K8)(() => (null == i ? void 0 : i.state.elementRef) ? ? {
                    current: null
                }, [i]), l = (0, n(239160).yE)(a), s = (0, n(239160).o7)(a), d = (0, n(682985).K8)(() => {
                    let t = n(240414).T.findNodeFromBlockId(e.id),
                        o = null == i ? void 0 : i.state;
                    if (n(448475).default.state.selectableElementRectMap, o && t) return Math.max(t.offsetTop - l + 18, 130)
                }, [e, i, l]), u = (0, n(682985).K8)(() => t.state.displayState, [t]), c = s && d ? s - d - 80 * ("expanded" !== u) : 600, p = Math.min(400, c);
                return {
                    maxHeightForFullSizeToc: c,
                    maxHeightForCollapsedToc: p,
                    verticalOffsetInPx: d || 113
                }
            }
        },
        668734: (e, t, n) => {
            n.d(t, {
                M: () => o
            });

            function o(e) {
                return (0, n(682985).K8)(() => {
                    let t = null == e ? void 0 : e.collectionViewStore();
                    return t && "page" !== t.getType()
                }, [e])
            }
        },
        681693: (e, t, n) => {
            n.d(t, {
                $L: () => i,
                BZ: () => s,
                EC: () => p,
                EI: () => x,
                E_: () => w,
                Ed: () => u,
                Fq: () => g,
                Lu: () => v,
                Mk: () => c,
                O0: () => S,
                V$: () => b,
                VQ: () => h,
                Xx: () => y,
                Xy: () => l,
                _g: () => m,
                dd: () => d,
                pW: () => a,
                q3: () => r,
                wH: () => o,
                xK: () => k
            });
            let o = 160,
                r = 40,
                i = 40,
                a = 20,
                l = 600,
                s = 270,
                d = 405,
                u = 480,
                c = 500,
                p, h = 16,
                g = 8,
                f = {
                    backdropFilter: "blur(48px)",
                    WebkitBackdropFilter: "blur(48px)"
                },
                m = 4;

            function x() {
                return {
                    icon: n(632079).Tj.icon.secondary,
                    text: n(632079).Tj.text.secondary
                }
            }

            function y() {
                return {
                    width: 48,
                    height: 48,
                    fill: n(632079).Tj.icon.tertiary
                }
            }

            function v({
                isPhone: e
            }) {
                return e ? n(632079).Tj.personalHomeBackgroundPhone : n(632079).Tj.background.primary
            }

            function b({
                isPhone: e,
                themeMode: t
            }) {
                return {
                    zIndex: 1,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 12,
                    background: n(632079).Tj.home.tile.background,
                    boxShadow: w({
                        isPhone: e,
                        themeMode: t
                    }),
                    ...f
                }
            }

            function S({
                mode: e
            }) {
                switch (e) {
                    case "dark":
                    default:
                        return 0;
                    case "light":
                        return 1
                }
            }

            function w({
                isPhone: e,
                themeMode: t,
                borderOnly: o
            }) {
                if ("dark" === t) return "unset";
                let r = S({
                    mode: t
                });
                return (0, n(381453).oE)([o || e ? void 0 : "0 12px 32px rgba(0, 0, 0, 0.02)", `0 0 0 ${r}px rgba(0, 0, 0, 0.05)`]).join(", ")
            }

            function k(e) {
                let {
                    borderOnly: t
                } = e, o = (0, n(533992).WS)(), r = (0, n(960253).e)();
                return {
                    unhoveredBoxShadow: w({
                        isPhone: o,
                        themeMode: r,
                        borderOnly: t
                    }),
                    hoveredBoxShadow: "light" === r ? "0 12px 32px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.085)" : n(632079).Tj.homeShadow.card.hovered
                }
            }
        },
        801113: (e, t, n) => {
            n.d(t, {
                $C: () => r,
                Hi: () => o,
                Qy: () => i,
                Uu: () => a,
                ek: () => l,
                jq: () => s,
                pz: () => d
            });
            let o = 52,
                r = 45,
                i = 44,
                a = 44;

            function l(e) {
                return e ? a : i
            }

            function s(e) {
                return 2 * l(e)
            }

            function d(e, t, o) {
                return (e && !t ? (0, n(196441).n$)(o) : 12) + 30
            }
        },
        952696: (e, t, n) => {
            n.d(t, {
                P: () => i
            });
            var o = () => n(546605);
            class r extends o().Store {
                getInitialState() {
                    return {
                        open: !1,
                        currentView: "chat",
                        from: void 0,
                        isAssistantInputEmpty: !0
                    }
                }
            }
            let i = new r;
            (0, n(202146).exposeDebugValue)("AssistantMenuStore", i)
        }
    }
]);